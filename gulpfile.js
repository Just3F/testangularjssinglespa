const { src, dest } = require("gulp");
const babel = require("gulp-babel");
const rename = require("gulp-rename");
const concat = require("gulp-concat");

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = function () {
  return src("angular.min.js")
    .pipe(src("angular-route.min.js"))
    .pipe(src("es5-app.js"))
    .pipe(src("dataService.js"))
    .pipe(src("/controllers/*.js"))
    .pipe(src("/controllers/*.js"))
    .pipe(concat("app.js"))
    .pipe(dest("bundle/"));
};
