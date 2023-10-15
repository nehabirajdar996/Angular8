var express=require('express')
var router=express.Router();
const Todo=require('../model/todo.model.js')

// router.get('getTodoList',function(req,res,next){
//     res.send('TODo list')
// })
// to add data to the db
router.post("/addTodo",async (req,res)=>{   // url end point
// console.log(req.body);
try{
const todo=new Todo(req.body);
  await todo.save()
res.status(200).send(todo)
}catch(e){
    res.status(400).send(e)
}
})

//to take/fetch data from db
router.get("/getTodoList",async(req,res)=>{
    const todos=await Todo.find()
    res.send(todos)
})
module.exports=router

//update operation

router.put("/updateTodo",async (req,res)=>{   // url end point
  // console.log(req.body);
  try{
   const filter ={ title: "coding practict"} ;
  const update= {
    $set:{
      title:"Do coding practice"
    }
  }
    await Todo.updateMany(filter,update)

  res.json({message:"Todo updated sucessfully"})
  }catch(e){
    console.error(e)
      res.status(500).send("could not updated todos")
  }
  });


  // Delete operation
  router.delete("/deleteTodo",async (req,res)=>{
    // console.log(req.body);
    try{
      await Todo.deleteMany({title:"Do coding practice"})
    res.json({message:"Todo deleted successfully"})
    }catch(e){
      console.error(e)
        res.status(400).send('could not deleted todos')
    }
    })