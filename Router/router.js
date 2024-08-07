const { log } = require('console');
const express = require('express');
const router = express.Router();


router.get('/',(req,res) =>{
    res.send("Hello");
})

// router.get('/new',(req,res) =>{   //place static router top of the dynamic router
//     res.send(`Get the new user`);
// })
router.get('/new',(req,res) =>{
    res.render("users/new")
})

router.post('/',(req,res) =>{
   const isValid = false;
   if(isValid){
    users.push({firstname: req.body.firstname});
    res.redirect(`/users/${users.length-1}`)
   }else{
    console.log("Error");
    res.render("users/new" ,{firstname : req.body.firstname} )
   }
})

router.get('/login', (req,res) =>{
    res.send("Hello for login");
})

 //this is a dynamic router

router.route('/:id').get((req,res) =>{
    res.json({
        user: req.user,
    })
    res.send(`Get the user with ${req.params.id}`);
})
.put((req,res) =>{
    res.send(`Get the user with ${req.params.id}`);
})
.delete((req,res) =>{
    res.send(`Get the user with ${req.params.id}`);
})


users = [{name: 'kyle' }, {name: 'sally'}] 
router.param("id",(req,res,next,id) => {
    req.user = users[id];
    next();
})


module.exports = router