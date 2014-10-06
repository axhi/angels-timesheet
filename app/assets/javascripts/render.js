var Render = {
  error: function(errors, loc) {
    $(loc).prepend("<div class='alert alert-danger' role='alert'><strong>"+errors[0]+"</strong></div>")
    window.setTimeout(function() {
      $(".alert").fadeTo(500, 0).slideUp(500, function(){
        $(this).remove();
      });
    }, 3000); 
  },
  clockIn: function(id, user) {
    $('.sign-in').toggle();
    $('.clock-buttons').append("<div class='clock'><div class='user'><h2>"+user+"</h2><h3>"+todaysDate()+"</h3></div><button class='ui-btn clock in' id='clock-in'><span class='"+id+"'>Clock-In</span></button></div>");
  },
  clockOut: function(id, user) {
    $('.sign-in').toggle();
    $('.clock-buttons').append("<div class='clock'><div class='user'><h2>"+user+"</h2><h3>"+todaysDate()+"</h3></div><button class='ui-btn clock out' id='clock-out'><span class='"+id+"'>Clock-Out</span></button></div>");
  },
  signIn: function() {
    $('.clock').remove();
    $('#code').val("");
    $('.sign-in').toggle();
  },
  addEmployee: function(emp) {
    $('.t-body').append("<tr><td>"+emp.code+"</td><td>"+emp.first_name+" "+emp.last_name+"</td><td id='edit-button'><b class='ui-table-cell-label'>Edit</b><button id='"+emp.id+"' class='edit-btn ui-btn ui-shadow ui-corner-all'>edit</button><button id='"+emp.id+"' class='add-btn ui-btn ui-shadow ui-corner-all'>add entry</button></td></tr>");
    $('#addUser').popup("close");
  },
  editUserData: function(emp) {
    $('#edit').popup('close');
    $('#'+emp.id).parent().parent().html("<td>"+emp.code+"</td><td>"+emp.first_name+" "+emp.last_name+"</td><td id='edit-button'><b class='ui-table-cell-label'>Edit</b><button id='"+emp.id+"' class='edit-btn ui-btn ui-shadow ui-corner-all'>edit</button><button id='"+emp.id+"' class='add-btn ui-btn ui-shadow ui-corner-all'>add entry</button></td>");
  },
  editForm: function(user) {
    $('#edit').html("<form class='edit-form' id='edit-form'><div style='padding:10px 20px;'><h3>Edit</h3><label>First name:</label><input type='text' name='first_name' data-inline='true' value='"+user.first_name+"'><label>Last name:</label><input type='text' name='last_name' data-inline='true' value='"+user.last_name+"'><label>Wage</label><input type='text' name='wage' data-inline='true' value='"+user.wage+"'><label>Code:</label><input type='text' name='code' data-inline='true' value='"+user.code+"'><button class='ui-btn emp-edit' id='"+user.id+"' type='submit'>Save</button><button class='ui-btn emp-delete' id='"+user.id+"'>delete</button></div></form>");
    $('#edit').popup("open"); 
  },
  entry: function(time) {
    $('.entry-edit').html("<form class='edit-entry' id='edit-entry'><div style='padding:10px 20px;'><h3>Edit</h3><label>Clock In</label><input type='time' id='clock_in' name='clock_in' data-inline='true' value='"+Time.getTime(time.clock_in)+"'><label>Clock Out</label><input id='clock_out' type='time' name='clock_out' data-inline='true' value='"+Time.getTime(time.clock_out)+"'><label>Date: </label><input type='date' id='date' name='clock_in_date' data-inline='true' value='"+Time.getDate(time.date)+"'><button class='ui-btn edit-time' id='"+time.id+"' type='submit'>Save</button><button class='ui-btn delete-time' id='"+time.id+"'>delete</button></div></form>");
  },
  addTime: function(id) {
    $('.entry').html("<form class='add-new-entry' id='add-new-entry'><div style='padding:10px 20px;'><h3>Edit</h3><label>Clock In</label><input type='time' id='clock_in' name='clock_in' data-inline='true'><label>Clock Out</label><input id='clock_out' type='time' name='clock_out' data-inline='true'><label>Date: </label><input type='date' id='date' name='clock_in_date' data-inline='true'><button class='ui-btn add-new-time' type='submit' id="+id+">Add Time</button></div></form>");
    $('#time-add').popup('open');
  },
  deleteItem: function(id) {
    $("#"+id).remove();
    $('#time-edit').popup('close');
  },
  updateTime: function(id) {
    $('#time-edit').popup('close');
  },
  newTime: function(time) {
    $('#time-add').popup('close');
  },
  deleteUser: function(id) {
    $('#'+id).parent().parent().remove();
    $('#edit').popup('close');
  }
}

function todaysDate() {
  var a = new Date();
  return a.toDateString();
}
