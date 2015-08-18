$(document).ready(function(){
                  

// declare an array that represents your deli counter
  
// part1: add a new person's name to the line                  
// write a function add that takes in a person's name and adds them to the list
// it should return the person's position in line
var add;
  
// part2: notify the person who is next on the line   
// write a function next that returns who is next to be serviced
var next; 
                  
// part2: remove the person who was just served from the line
// write a function serve that serves the next person in line
var serve;
                  
// part2/extension: notify if there is no one on the line
// do this in the function next and serve... if there is no one in line alert !

// part3: when someone gives a name, notify the person of the position in line
// write a function getPositon that takes in someone's name and returns their position in line
var getPosition; 
  

// OUR CODE DO NOT TOUCH
$("#add").click(function(){
  position = add($("#addname").val());
  $("#addnumber").html(position);
});
  
$("#next").click(function(){
  $("#nexttext").html(next());
});             

$('#search').click(function () {
  $("#position").html(getPosition($("#nameinput").val()));
});
  
$("#serve").click(function(){
  serve();
});   
                                  
});