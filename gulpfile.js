var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var nunjucks = require('gulp-nunjucks');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');
var svgSprite = require('gulp-svg-sprite');

//TODO:
//Implement the optimze functions from Zell's tutorial
//https://css-tricks.com/gulp-for-beginners/

gulp.task('nunjucks', function () {
    gulp.src('templates/**.html')
        .pipe(nunjucks.compile({name: 'Test'}))
        .pipe(gulp.dest('public'))
        .pipe(browserSync.reload({
            stream: true
            }))
});


// Config
//
//

config = {
  shape: {
    dimension: {         // Set maximum dimensions
      maxWidth: 32,
      maxHeight: 32
    },
    spacing: {         // Add padding
     //   padding     : 10
    },
    //dest            : 'out/intermediate-svg'    // Keep the intermediate files
  },
  mode: {
    symbol: true      // Activate the «symbol» mode
  }
};

gulp.task('svg', function() {
  gulp.src('source/images/icons/**/*.svg')
                              .pipe(svgSprite(config))
                                .on('error', function(error) {
                                  console.log(error);
                                })
                              .pipe(gulp.dest('templates'));
});
//Function to optimize images (not really utilized)
gulp.task('images', function() {
    return gulp.src('source/images/**/*.+(png|jpg|gif|svg)')
           .pipe(imagemin())
           .pipe(gulp.dest('public/images'))
});
gulp.task('dae', function() {
    return gulp.src('source/3d/**/*.dae')
           .pipe(gulp.dest('public/3d'))
});

gulp.task('bower', function() {
    return gulp.src('source/bower_components/**/*')
               .pipe(gulp.dest('public/lib'))
});

gulp.task('js', function() {
    return gulp.src('source/js/**/*.js')
               .pipe(gulp.dest('public/js'))
});

gulp.task('fonts', function() {
    return gulp.src('source/fonts/**/*.ttf')
          .pipe(gulp.dest('public/fonts'))
});
gulp.task('sass', function(){
    return gulp.src('source/style.scss')
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: ['node_modules/susy/sass', 'node_modules/breakpoint-sass/stylesheets', 'node_modules/normalize-scss/sass']
        }).on('error', sass.logError))
        .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
        }))
        .pipe(gulp.dest('public/css/'))
        .pipe(browserSync.reload({
            stream: true
            }))
});

gulp.task('browserSync', function() {
    browserSync.init({
        browser: ["firefox"],
        server: {
            baseDir: 'public'
        }
    })
});

//watch the scss folder and rukn sass whenever
//a file changes
//We put browser sync in an array as the second argument
//that means that we want to run the browser sync task first
//and then watch for file changers

gulp.task('watch', ['dae', 'svg', 'bower', 'fonts', 'nunjucks', 'sass', 'images', 'js', 'browserSync'], function() {
    gulp.watch('source/scss/**/*.scss', ['sass']);
    gulp.watch('templates/**/*.html', ['nunjucks']);
    gulp.watch('source/js/**/*.js', ['js', browserSync.reload]);
    gulp.watch('source/images/**/*.+(png|jpg|gif|svg)', ['images', browserSync.reload]);
    gulp.watch('source/images/icons/*.svg', ['svg', 'nunjucks', browserSync.reload]);
    gulp.watch('source/bower_components/*', ['bower', browserSync.reload]);
});
