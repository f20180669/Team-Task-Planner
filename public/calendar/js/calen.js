document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: [ 'interaction', 'dayGrid', 'timeGrid' ],
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    defaultDate: '2020-05-12',
    navLinks: true, // can click day/week names to navigate views
    selectable: true,
    selectMirror: true,
    
    events: "user/prevevent",
    select: function(arg) {
      var title = prompt('Event Title:');
      var start = arg.start
      var end = arg.end
      var dataForServer = { title: title, start: start, end: end};
      $.post("/user/event", dataForServer, function (data, status) {
          var b = JSON.stringify(data)

          alert(b);
      });
      if (title) {
        calendar.addEvent({
          title: title,
          start: arg.start,
          end: arg.end,
          allDay: arg.allDay
        })
      }
      calendar.unselect()
    },
    editable: true,
    eventLimit: true, // allow "more" link when too many events
   
  });

  calendar.render();
});
