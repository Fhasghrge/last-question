let express = require('express')
let router = express.Router() // 获取路由对象
let Student = require('./student')

router.get('/students', (req, res) => {
  Student.find((err, students) => {
    if(err) {
      return res.status(500).send('Server Error')
    }
    res.render('index.html', {
      students: students
    })
  })
})

router.get('/students/new', (req, res) => {
  res.render('new.html')
})

router.post('/students/new', (req, res) => {
  new Student(req.body).save( (err, ret) => {
    if(err){
      return res.status(500).send('Server Error')
    }
    res.redirect('/students')
  })
})

router.get('/students/edit', (req, res) => {
  Student.findById(req.query.id, (err, student) => {
    if(err) {
      return res.status(500).send('Server Error')
    }
  res.render('edit.html', {
    student: student
  })
  })
})
router.post('/students/edit', (req, res) => {
  Student.findByIdAndUpdate(req.body.id,req.body, (err) => {
    if(err) {
      return res.status(500).render('Server Error')
    }
    res.redirect('/students')
  })
})
router.get('/students/delete', (req, res) => {
  Student.findByIdAndRemove(req.query.id,  (err) => {
    if(err) {
      res.status(500).render('Server Error')
    }
    res.redirect('/students')
  })
})
module.exports = router


