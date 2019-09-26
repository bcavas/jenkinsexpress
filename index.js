const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (req, res)=>{
	res.send('hello')
})

app.listen(PORT, ()=>{
	console.log(`example app listening on port ${port}!`)
})