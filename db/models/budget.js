import mongoose from "mongoose";

const ExpenseSchema = mongoose.Schema({
    category:{
        type: String,
        required: true
  },
  amount: {
    type: Number,
    require: true
  },
  date: { type: Date, default: Date.now },
  comments: String
})
mongoose.models = {}
export default mongoose.model('Expense', ExpenseSchema)