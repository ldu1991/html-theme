module.exports = function (gulp, plugins, pug, data, fs) {
  function onError(e) {
    console.log(e.toString());
    this.emit('end');
  }

  return async function() {
    gulp.src('./pug/views/*.pug')
      .pipe(plugins.plumber({errorHandler: onError}))
      .pipe(data(function(file) {
            return JSON.parse(fs.readFileSync('./pug/data/data.json'));
      }))
      .pipe(pug({
        "pretty": true
      }))
      .pipe(gulp.dest('../'));
  }
}
