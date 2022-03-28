var gulp = require('gulp');
  var gls = require('gulp-live-server');
  gulp.task('serve', function() {
    //2. serve at custom port
    var server = gls.static('/', 8888);
    server.start();
 
    //3. serve multi folders
    var server = gls.static(['dist', '.tmp']);
    server.start();
 
    //use gulp.watch to trigger server actions(notify, start or stop)
    gulp.watch(['*.css', '*.html'], function (file) {
      server.notify.apply(server, [file]);
    });
  });
  
