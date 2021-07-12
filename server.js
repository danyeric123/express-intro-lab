// import modules
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
// import the todos database
import * as studentsDB from './data/students-db.js'

// Create Express app

const app = express()

// Configure the app (app.set)
app.set('view engine', 'ejs')
app.set('view engine', 'ejs')
// 
app.set(
	'views', 
	path.join(path.dirname(fileURLToPath(import.meta.url)), 'views')
)

// Mount Middleware (app.use)



// Mount routes
app.get('/', (req, res)=>{
  res.redirect('/home')
})

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/students', function(req, res) {
  studentsDB.find({}, (error, students)=>{
    res.render('students/index', {
      students: students,
      error: error
    })
  })
})

app.get('/students/:id', function(req, res) {
	console.log(`The value for the :id route parameter is: ${req.params.id}`);
	res.render('students/show', {student: studentsDB.findById(req.params.id)});
});

// Tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})