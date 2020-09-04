const express = require('express'); // 1. express 모듈을 가져온다. package.json dependency에 등록되어 있음   
const app = express() // 2. express function을 이용해서 새로운 앱을 만듦
const port = 5000 // 3. 포트 번호. 여기서는 별로 중요하지 않음.

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://yxzzzxh:1234@cluster-boilerplate.4d5tv.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(()=> console.log('MongoDB Connected..'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
