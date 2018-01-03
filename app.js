'use strict';

// grabbing html elements
var run = document.getElementById('running');
var lift = document.getElementById('lifting');
var cycle = document.getElementById('cycling');
var tv = document.getElementById('tv');
var read = document.getElementById('reading');
var music = document.getElementById('music');
var meeting = document.getElementById('meetings');
var project = document.getElementById('projects');
var program = document.getElementById('programming');
var form = document.getElementById('activity-field');

// global variables
var activities = [];
var startTime;
var stopTime;
var ul = document.getElementById('activity-list');
var selectedActivity;

// start function, connected to start button
function start() {
  startTime = Date.now();
}

// stop function, connected to stop button. converts to seconds
function stop(){
  stopTime = Date.now();
  selectedActivity.total += ((stopTime - startTime) / 1000)
  console.log('stop', selectedActivity);
  startTime = null;
  stopTime = null;
}

function getTotals() {
  var activityTotals = [];
  for(var i = 0; i < activities.length; i++) {
    activityTotals.push(activities[i].total)
  }
  return activityTotals
}

// constructor function
function Activity (name) {
  this.name = name;
  this.total = 0;
  activities.push(this);
}

// instantiation
new Activity('Running');
new Activity('Lifting');
new Activity('Cycling')
new Activity('TV');
new Activity('Reading');
new Activity('Music');
new Activity('Meetings');
new Activity('Projects');
new Activity('Programming');

// click handlers
run.addEventListener('click', function(){
  selectedActivity = activities[0]
  console.log(selectedActivity);
})
lift.addEventListener('click', function(){
  selectedActivity = activities[1]
  console.log(selectedActivity);
})
cycle.addEventListener('click', function(){
  selectedActivity = activities[2]
  console.log(selectedActivity);
})
tv.addEventListener('click', function(){
  selectedActivity = activities[3]
  console.log(selectedActivity);
})
read.addEventListener('click', function(){
  selectedActivity = activities[4]
  console.log(selectedActivity);
})
music.addEventListener('click', function(){
  selectedActivity = activities[5]
  console.log(selectedActivity);
})
meeting.addEventListener('click', function(){
  selectedActivity = activities[6]
  console.log(selectedActivity);
})
project.addEventListener('click', function(){
  selectedActivity = activities[7]
  console.log(selectedActivity);
})
program.addEventListener('click', function(){
  selectedActivity = activities[8]
  console.log(selectedActivity);
})

// form creates a new object
// function addActivity(event){
//   event.preventDefault();
//
//   var name = event.target.name.value;
//   new Activity(name);
//   form.reset();
// }
//
// form.addEventListener('submit', addActivity);

// chart maker
function chartMaker() {
  var chartPlace = document.getElementById('my-chart')
  var ctx = chartPlace.getContext('2d');
  var myDoughnutChart = new Chart(ctx, {
          type: 'doughnut',
          cutoutPercentage: 50,
          data: {
            datasets: [{
              data: getTotals(),
              backgroundColor: [
                  'Red',
                  'Yellow',
                  'Blue',
                  'Purple'
              ]
            }],
            labels: [
                'Athletics',
                'Leisure',
                'Work',
                'Your Activities'
            ],
          }
        })
        // options:
        //   maintainAspectRatio: true,
      }



// for(var i = 0; i < activities.length; i ++){
//   (function() {
//       var activity = activities[i];
//       var liEl = document.createElement('li');
//       var aEl = document.createElement('a');
//       aEl.innerText = activities[i].name;
//       liEl.appendChild(aEl);
//       liEl.addEventListener('click', function() {
//         selectedActivity = activity;
//       })
//       ul.appendChild(liEl);
//   }())
// }
