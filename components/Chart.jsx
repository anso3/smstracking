import React from "react";
import { useQuery } from "@apollo/client";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip,
} from "victory";
import GET_TOTAL from "../graphql/queries/GetTotal";

const Chart = () => {
  const { loading, error, data } = useQuery(GET_TOTAL, { pollInterval: 2500 });

  if (loading) return "Loading...";

  if (error) return `Error! ${error.message}`;

  const length = data.getTotal.length;
  const categories = data.getTotal.map((e) => e["_id"].category);
  const amounts = data.getTotal.map((e) => e.amount);

  return (
    <VictoryChart
      width={400}
      height={400}
      theme={VictoryTheme.material}
      domainPadding={{ x: [10, 10], y: 5 }}
    >
      <VictoryAxis
        tickValues={Array.from({ length: length }, (_v, i) => i)}
        tickFormat={categories}
      />
      <VictoryAxis dependentAxis tickFormat={(x) => `$${x}`} />
      <VictoryBar
        style={{ data: { fill: ({ datum }) => datum.fill } }}
        labels={({ datum }) => datum.amount}
        labelComponent={<VictoryTooltip />}
        barRatio={0.2}
        alignment="start"
        data={data.getTotal}
        x={data.getTotal["_id"]}
        y="amount"
      />
    </VictoryChart>
  );
};

export default Chart;
