import Todo from "../models/Todo.model.js";

export const getAllTodos = async (req, res) => {
  const allTodos = await Todo.find({});
  res.json({allTodos});
};
export const getTodo = async (req, res) => {
  const todo = await Todo.findOne({_id: req.params.id});
  res.json({todo});
};

export const createNewTodo = async (req, res) => {
  const newTodo = await new Todo(req.body);
  newTodo.save();
  res.status(201).json({msg: "New Todo created"})
}
