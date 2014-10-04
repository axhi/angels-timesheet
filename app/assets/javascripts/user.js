var User = {
  sendUser: function(id) {
    var request = $.ajax({
      url: "/users/"+id,
      type: "POST"
    });
    request.done(function(response){
      if (response.success == false) {
        var loc = ('.sign-in');
        Render.error(["Invalid Code, Please try again."], loc);
      }
      else {
        if (Location.checkArea() == true) {
          if (response.clocked_in == true) {
            Render.clockOut(id, response.name);
          }
          else {
            Render.clockIn(id, response.name);
          }
        } else {
          var loc = ('.sign-in');
          Render.error(["You need to be closer to the restaurant to sign in."], loc);
        }
      }
    });
    return request;
  },
  update: function(data) {
    
  },
  clockIn: function(id) {
    var request = $.ajax({
      url: "users/clock_in/"+id,
      type: "POST"
    });
    request.done(function(response) {
      if (response.success == true) {
        Render.signIn();
      }
    });
    return request;
  },
  clockOut: function(id) {
    var request = $.ajax({
      url: "users/clock_out/"+id,
      type: "POST"
    });
    request.done(function(response) {
      if (response.success == true) {
        Render.signIn();
      }
    });
  },
  add: function(data) {
    var request = $.ajax({
      url: "/users",
      type: "POST",
      data: data
    });
    request.done(function(response){
      if (response.success == true) {
        Render.addEmployee(response.user);
      } else {
        var loc = $('.user-form-area');
        Render.error(response.errors, loc);
      }
    });
    return request;
  },
  edit: function(id, data) {
    var request = $.ajax({
      url: "/users/"+id+"/edit",
      type: "PATCH",
      data: data
    });
    request.done(function(response) {
      Render.editUserData(response.user);
    });
    return request;
  },
  show: function(id) {
    var request = $.ajax({
      url: "/users/"+id,
      type: "GET"
    });
    request.done(function(response) {
      Render.editForm(response.user);
    });
    return request;
  },
  delete: function(id) {
    var request = $.ajax({
      url: "/users/"+id,
      type: "DELETE"
    });
    request.done(function(response) {
      Render.deleteUser(response.id);
    });
    return request;
  }
}
