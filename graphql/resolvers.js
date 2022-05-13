import Expense from "../db/models/budget";

export const getExpenses = async () => {
  try {
    const expense = await Expense.find();
    console.log(expense);
    return expense;
  } catch (err) {
    console.log(err);
  }
};
export const getTotal = async () => {
  try {
    const expense = await Expense.aggregate([
      {
        $group: {
          _id: { category: "$category" },
          amount: { $sum: "$amount" },
        },
      },
    ]).sort("amount");
    return expense;
  } catch (err) {
    console.log(err);
  }
};
export const getCategory = async (_, { category }) => {
  try {
    const expense = await Expense.find({ category });
    return expense;
  } catch (err) {
    console.log(err);
  }
};

export const deleteExpense = async (_, { id }) => {
  try {
    const deleted = await Expense.deleteOne({ id });
    return deleted;
  } catch (err) {
    console.log(err);
  }
};

const updateExpense = async (_, { id, category, amount }) => {
  try {
    const expense = await Expense.updateOne({ id, category, amount });
    return expense;
  } catch (err) {
    console.log(err);
  }
};

export const newExpense = async (_, { category, amount }) => {
  try {
    const expense = new Expense({ category, amount });
    await expense.save();
    const categoryTotal = await Expense.aggregate([
      { $match: { category: `${category}` } },
      {
        $group: { _id: { category: "$category" }, amount: { $sum: "$amount" } },
      },
    ]);
    return categoryTotal;
  } catch (err) {
    console.log(err);
  }
};

export const resolvers = {
  Query: {
    getExpenses,
    getCategory,
    getTotal,
  },
  Mutation: {
    newExpense,
    deleteExpense,
    updateExpense,
  },
};
