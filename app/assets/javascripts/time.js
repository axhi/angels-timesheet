var Time = {
  edit: function(id) {
    var request = $.ajax({
      url: "/time/"+id,
      type: "GET"
    });
    request.done(function(response) {
      Render.entry(response.entry);
      $('#time-edit').popup("open");
    });
    return request;
  },
  getDate: function(date) {
    var a = new Date(date);
    return (a.getFullYear() + "-" + checkDate(a.getMonth()) + "-" + checkDay(a.getDate()));
  },
  getTime: function(time) {
    var a = new Date(time);
    return (checkTime(a.getHours()) + ":" + checkTime(a.getMinutes()) + ":" + checkTime(a.getSeconds()));
  },
  delete: function(id) {
    var request = $.ajax({
      url: "/time/"+id,
      type: "DELETE"
    });
    request.done(function(response) {
      Render.deleteItem(response.id);
    });
    return request;
  },
  editEntry: function(id, params) {
    var request = $.ajax({
      url: "/time/"+id,
      type: "PATCH",
      data: params
    });
    request.done(function(response) {
      Render.updateTime(response.entry);
    });
    return request;
  },
  addEntry: function(params) {
    var request = $.ajax({
      url: "/time",
      type: "POST",
      data: params
    });
    request.done(function(response) {
      Render.newTime(response.entry);
    });
    return request;
  }
}

function checkDate(date) {
  var date = date + 1;
  if(date < 10) {
    return "0" + date;
  } else {
   return date;
  }
}

function checkDay(date) {
  if(date < 10) {
    return "0" + date;
  } else {
   return date;
  }
}

function checkTime(time) {
  if(time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}
