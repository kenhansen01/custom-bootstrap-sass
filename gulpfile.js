var
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglifyjs'),
  config = {
    bowerDir: './bower_components',
    publicDir: './dist'
  };

gulp.task('fonts', function(){
  return gulp.src([
    config.bowerDir + '/bootstrap-sass/assets/fonts/bootstrap/*',
    'custom-sass/fonts/*'
  ])
  .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('js', function(){
  return gulp.src([
    config.bowerDir + '/jquery/dist/jquery.*',
    config.bowerDir + '/bootstrap-sass/assets/javascripts/bootstrap.*',
    config.bowerDir + '/requirejs/require.*',
    config.bowerDir + '/angular*/angular*.js',
    config.bowerDir + '/angular*/angular*.min.js',
    config.bowerDir + '/angular*/angular*.min.js.map',
  ])
  .pipe(gulp.dest(config.publicDir + '/js'));
});

gulp.task('css', function(){
  return gulp.src('custom-sass/bootstrap-custom.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: 'compressed',
    outFile: 'bootstrap-custom.css',
    sourceMap: true,
    includePaths: [config.bowerDir + '/bootstrap-sass/assets/stylesheets']
  }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('default', ['css', 'js', 'fonts']);