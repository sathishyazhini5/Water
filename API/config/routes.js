const express = require("express");
const router = express.Router();
const auth = require("./auth");
const index = require('../controller/index')

let routes = (app) => {

  router.get("/", function(req, res){
    res.send("Route hit")
  });
  // router.get('/getdata',index.getAllUsers)
  router.get('/getdata2',index.getAllUsers2)
  router.get('/getdetails',index.getAllUsers3)
  router.get('/getdata',index.getrwph_analog)
  router.get('/getcwph',index.getcwphanalog)

  app.use("/api", router);
};

module.exports = routes;