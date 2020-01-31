const express = require('express'); 
const app = express(); 
const port = 3000; 

app.get('/',(req,res)=>{
	res.send('Hello World!'); 
});

app.get('/demo',(req,res)=>{
	res.set('x-full-stack','4 life'); 
	res.status(418); 
	res.send('coffee only please');
});

app.listen(port,()=>console.log(`Example app listening on port ${port}!`));
