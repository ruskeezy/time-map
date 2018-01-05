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
var program = document.getElementById('programming')
var startbtn = document.getElementById('start-btn');
var stopbtn = document.getElementById('stop-btn');
var form = document.getElementById('the-form');

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
  if (!startTime) {
    console.log('Please push Start');
  } else {
    console.log(selectedActivity.total += ((stopTime - startTime) / 1000));
    startTime = null;
    stopTime = null;
    chartMaker();
  }
}

// constructor function
function Activity (name) {
  this.name = name;
  this.total = 0;
  activities.push(this);
}

// data for chart
function getTotals() {
  var activityTotals = [];
  for(var i = 0; i < activities.length; i++) {
    activityTotals.push(activities[i].total)
  }
  return activityTotals
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
startbtn.addEventListener('click', start)
stopbtn.addEventListener('click', stop)


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
                  'rgba(184, 39, 39, 0.8)',
                  'rgba(208, 206, 46, 0.8)',
                  'rgba(34, 63, 255, 0.8)',
                  'rgba(136, 39, 204, 0.8)',
                  'rgba(122, 28, 54, 0.8)',
                  'rgba(50, 221, 41, 0.8)',
                  'rgba(251, 91, 3, 0.8)',
                  'rgba(77, 207, 183, 0.8)',
                  'rgba(254, 77, 167, 0.8)',

              ]
            }],
            labels: [
                'Running',
                'Lifting',
                'Cycling',
                'TV',
                'Reading',
                'Music',
                'Meetings',
                'Projects',
                'Programming'
            ],
          }
        })
        // options:
        //   maintainAspectRatio: true,
      }
      // user able to add activities
      function addActivity(event) {
        event.preventDefault();
        var newActivity = event.target.name.value;
        var li = document.createElement('li');
        var addedActivity = new Activity(newActivity);
        li.innerHTML = addedActivity.name;
        console.log('ul.innerHTML', ul.innerHTML);
        ul.innerHTML = '<li id="usersActivity">' + addedActivity.name + '</li>';

        // grabbing li created so it's attached to the object
      var usersActivity = document.getElementById('usersActivity');
      usersActivity.addEventListener('click', function(){
          selectedActivity = activities[9];
        });
      };

      var submitter = document.getElementById('submitter');
      form.addEventListener('submit', addActivity);
