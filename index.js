const {c, cpp, node, python, java} = require('compile-run');
const bodyparser = require("body-parser");
const express = require('express');
const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.get('/', (req,res) => {
  res.sendFile( __dirname + "/files/" + "index.html" );
});

app.post('/output', (req,res) => {
  var sourcecode = req.body.code;
  var lang = req.body.lang;
  var radio = req.body.inputRadio;
  var input = req.body.input;
  //python
  if(lang === "Python"){
   if(radio === "false"){
  let resultPromise = python.runSource(sourcecode);
    resultPromise
      .then(result => {
        res.send(result);
    })
      .catch(err => {
        res.send(err);
    });
  }
  else{
    python.runSource(sourcecode, { stdin: input}, (err, result) => {
    if(err){
        res.send(err);
    }
    else{
        res.send(result);
    }
});
  }
}
  //cpp
  if(lang === "C++"){
   if(radio === "false"){
  let resultPromise = cpp.runSource(sourcecode);
    resultPromise
      .then(result => {
        res.send(result);
    })
      .catch(err => {
        res.send(err);
    });
  }
  else{
    cpp.runSource(sourcecode, { stdin: input}, (err, result) => {
    if(err){
        res.send(err);
    }
    else{
        res.send(result);
    }
});
  }
}
  //c
  if(lang === "C"){
   if(radio === "false"){
  let resultPromise = c.runSource(sourcecode);
    resultPromise
      .then(result => {
        res.send(result);
    })
      .catch(err => {
        res.send(err);
    });
  }
  else{
    c.runSource(sourcecode, { stdin: input}, (err, result) => {
    if(err){
        res.send(err);
    }
    else{
        res.send(result);
    }
});
  }
}
  //java
  if(lang === "Java"){
   if(radio === "false"){
  let resultPromise = java.runSource(sourcecode);
    resultPromise
      .then(result => {
        res.send(result);
    })
      .catch(err => {
        res.send(err);
    });
  }
  else{
    java.runSource(sourcecode, { stdin: input}, (err, result) => {
    if(err){
        res.send(err);
    }
    else{
        res.send(result);
    }
});
  }
}

});

//port
const port = process.env.port || 3000;
app.listen(port, () => console.log(`listening to ${port}`));
