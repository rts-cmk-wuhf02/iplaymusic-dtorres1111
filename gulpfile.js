const gulp = require("gulp");
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const connect = require("gulp-connect");
const sass = require("gulp-sass");

sass.compiler = require("node-sass");

function html(done) {
  gulp
    .src("./src/html/templates/*.ejs")
    .pipe(ejs())
    .pipe(
      rename(function(path) {
        path.extname = ".html";
      })
    )
    .pipe(gulp.dest("./dist"))
    .pipe(connect.reload());
  done();
}

function javascript(done) {
  gulp
    .src("./src/javascript/**/*.js")
    .pipe(gulp.dest("./dist/assets/javascript"))
    .pipe(connect.reload());
  done();
}

function watchJavascript() {
  gulp.watch("./src/javascript/**/*.js", { ignoreInitial: false }, javascript);
}

function watchHtml() {
  gulp.watch("./src/html/**/*.ejs", { ignoreInitial: false }, html);
}

function scss(done) {
  gulp
    .src("./src/css/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("./dist/assets/css"));
  done();
}

function watchScss() {
  gulp.watch("./src/css/**/*.scss", { ignoreInitial: false }, scss);
}

function Images(done) {
  gulp
    .src("src/image/**/*.*")
    .pipe(gulp.dest("dist/assets/image/"))
    .pipe(connect.reload());
  done();
}

function watchImages() {
  gulp.watch("src/image/**/*.*", { ignoreInitial: false }, Images);
}

gulp.task("dev", function(done) {
  watchHtml();
  watchScss();
  watchJavascript();
  watchImages();
  connect.server({
    livereload: true,
    root: "dist"
  });
  done();
});
