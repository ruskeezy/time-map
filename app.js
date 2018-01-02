'use strict';

var activities = [];
var startTime;
var stopTime;
var ul = document.getElementById('activity-list');
var selectedActivity;

function start() {
  startTime = Date.now();
}

function stop(){
  stopTime = Date.now();
  console.log(stopTime - startTime);
  selectedActivity.total += stopTime - startTime;
  // set start and stop to null
}

// function

function Activity (name) {
  this.name = name;
  this.total = 0;
  activities.push(this);
}

new Activity('TV');
new Activity('Running');
new Activity('Lifting');
new Activity('Music');
new Activity('Reading');

for(var i = 0; i < activities.length; i ++){
  (function() {
      var activity = activities[i];
      var liEl = document.createElement('li');
      var aEl = document.createElement('a');
      aEl.innerText = activities[i].name;
      liEl.appendChild(aEl);
      liEl.addEventListener('click', function() {
        selectedActivity = activity;
      })
      ul.appendChild(liEl);
  }())
}

// add click handlers to start and stop button
