//= require jquery
//= require jquery_ujs
//= require jquery.mobile-1.4.4
//= require_tree .

var initialLocation;

$( document ).ready(function() {
  $('#sign-in').on('submit', function(event) {
    event.preventDefault();
    id = $('#code').val();
    User.sendUser(id);
  });
  
  $('.clock-buttons').on('click', '#clock-in', function(event) {
    event.preventDefault();
    var id = $($(this).children()[0]).attr("class")
    User.clockIn(id);
  });

  $('.clock-buttons').on('click', '#clock-out', function(event) {
    event.preventDefault();
    var id = $($(this).children()[0]).attr("class")
    User.clockOut(id);
  });

  $('.ui-mobile-viewport').on('submit', '.add-user', function(event) {
    event.preventDefault();
    var data = $(this).serialize();
    User.add(data);
  });

  $('.ui-mobile-viewport').on('click', '.emp-edit', function(event) {
    event.preventDefault(); 
    var id = $(this).attr('id');
    var data = $('#edit-form').serialize();
    User.edit(id, data);
  });

  $('.ui-mobile-viewport').on('click', '.edit-btn', function(event) {
    var id = $(this).attr("id");
    User.show(id);
  });

  $('.ui-page').on('submit', '.edit-form', function(event) {
    event.preventDefault();
    var data = $(this).serialize();
    User.update(data);
  });

  $('.ui-mobile-viewport').on('click', '.entry-btn', function(event) {
    event.preventDefault();
    var id = $(this).attr('id')
    Time.edit(id);
  });

  $('.ui-mobile-viewport').on('click', '.add-btn', function(event) {
    event.preventDefault();
    var id = $(this).attr('id');
    Render.addTime(id);
  });

  $('.ui-mobile-viewport').on('click', '.delete-time', function(event) {
    event.preventDefault();
    var id = $(this).attr('id');
    Time.delete(id);
  });

  $('.ui-mobile-viewport').on('click', '.emp-delete', function(event) {
    event.preventDefault();  
    var id = $(this).attr('id');
    User.delete(id);
  });

  $('.ui-mobile-viewport').on('click', '.edit-time', function(event) {
    event.preventDefault();
    var id = $(this).attr('id');
    var cIn = $('#clock_in').val();
    var cOut= $('#clock_out').val();
    var date = $('#date').val();
    var data = {clock_in: cIn, clock_out: cOut, date: date}
    Time.editEntry(id, data);
  });

  $('.ui-mobile-viewport').on('click', '.add-new-time', function(event) {
    event.preventDefault();
    var id = $(this).attr('id');
    var cIn = $('#clock_in').val();
    var cOut= $('#clock_out').val();
    var date = $('#date').val();
    var data = {user: id, clock_in: cIn, clock_out: cOut, date: date}
    Time.addEntry(data);
  });

  UpdateTime();
});

function UpdateTime() {
  var today = new Date();
  var TotalTime = today.toLocaleTimeString()
  $('#time').html(TotalTime); 
  setTimeout("UpdateTime()", 1000) 
}
