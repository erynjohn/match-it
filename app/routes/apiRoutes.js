const express = require("express");
const path = require("path");
const fs = require("fs");
const friendData = require("../data/friends");

module.exports = function(app) {

  app.get("/api/friends", (req, res) => {
    res.json(friendData);
  });
  app.post("/survey" ,(req,res) => {
    addInfo = [];
    addInfo.push(req.body);
    addInfo.map((info) => {
      friendData.map((friend) => {
        if(info.scores[0] == friend.scores[0]) {
        }
        res.json({
          name: info.name,
          photo: info.photo
        });
  
      })
    })

    friendData.push(addInfo);
  });

}