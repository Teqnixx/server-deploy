module.exports = app => {
    const user = require("../controllers/internnet.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve a single user with username
    router.get("/:email", user.findOne);
  
    app.use('/api/users', router);
};