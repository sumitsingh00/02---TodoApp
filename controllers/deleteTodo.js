//import th model
const Todo = require("../models/Todo");

//define route handler

exports.deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;
        // jiski bhi _id == id  usko le aao
        // always rembember isko { _id: id } ism likhna hai
        await Todo.findByIdAndDelete({ _id: id });

        res.json({
            success: true,
            message : "Todo deleted successfully"
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Server error",
          });
    }
}