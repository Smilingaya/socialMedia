const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const db = fs.readFileSync(path.resolve(__dirname, 'db.json'));
const data = JSON.parse(db);


app.get('/api',(req,res)=>{
   return res.status(200).json({
     data: 'hello ayaaa!!!!' 
    });
});
//post
app.get('/api/status',(req,res)=>{
    return res.status(200).json({
        data:data.status
    });
})
//add a new post
app.post('/api/status/add', async (req, res) => {
    const { text, img } = req.body;
    const newStatus = {
      id: Math.floor(Math.random() * 100000),
      text,
      img,
    };
  
    data.status.push(newStatus);
    await fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(data));
    return res.status(200).json({ data: data.status });
  });
//delet post

app.delete('/api/status/delete/:id',(req,res)=>{
    const { id } = req.params;

   const Index = data.status.findIndex(post => post.id == id);

   data.status.splice(Index, 1);
   return res.status(200).json({ data: data.status});
   
});
//coment
app.get('/api/comment', (req,res)=>{
    return res.status(200).json({
        data:data.comment
    })
})

//add a new comment
app.post('/api/comment',async (req, res) =>{
     const id=Math.floor(Math.random() * 200000);
     const{text}=req.body;

       data.comment.push({ id, text });
       await fs.writeFileSync(path.resolve(__dirname, 'db.json'), JSON.stringify(data));
       return res.status(200).json({ data: data.comment });

});
app.delete('/api/comment/delete/:id',(req,res)=>{
    const { id } = req.params;

   const Index = data.comment.findIndex(post => post.id == id);

   data.comment.splice(Index, 1);
   return res.status(200).json({ data: data.comment});
   
});
const PORT=3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});