//import th model
const Todo = require("../models/Todo");

//define route handler

exports.getTodos = async (req, res) => {
  try {
    // fetch all todo items from database
    const todos = await Todo.find({});

    // Response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire Todo Data is Fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {

    // (/:id) iska use kr rhe hai  thats why we use params
    const id = req.params.id;
    // jiski bhi _id == id  usko le aao
    const todo = await Todo.findById({ _id: id });


    //if (id) is not present then return this
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No Data Found with Given Id",
      });
    }

    // return tod data
    res.status(200).json({
      success: true,
      data: todo,
      message: "Success",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};
