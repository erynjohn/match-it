const express = require("express");
const path = require("path");
const friendData = require("../data/friends");

module.exports = function (app) {

  app.get("/api/friends", (req, res) => {
    res.json(friendData);
  });
  app.post("/api/friends", (req, res) => {

    var userInput = {
      name: req.body.name,
      photo: req.body.photo,
      scores: req.body.scores
    }
    friendData.push(userInput);
    var userInputToNum = userInput.scores.map(function(item) {
      return parseInt(item, 10);
    });
    var userSum = function (arr) {
      return arr.reduce(function (a, b) {
        return a + b;
      }, 0);
    }
    totaldiff = 0;
    var matchFriend = {
      name: "",
      photo: "",
      diff: 10
    }
    userSum = userSum(userInputToNum);
    friendData.forEach((item) => {
      var friendInput = {
        name: item.name,
        photo: item.photo,
        scores: item.scores
      }
            var friendResult = friendInput.scores.map(function (val, index) {
        return Math.abs(val - userInput.scores[index]);
      });
      friendSum = function (arr) {
        return arr.reduce(function (a, b) {
          return a + b
        }, 0);
      }
      var friendSum = friendSum(friendResult);

      totaldiff += Math.abs(userSum + friendResult);
      if(friendSum <= matchFriend.diff) {
        matchFriend.name = friendInput.name;
        matchFriend.photo = friendInput.photo;
        matchFriend.diff = friendSum;


      }
      console.log(matchFriend)
    })


  });
}