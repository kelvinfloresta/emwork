var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("src/scss/*.scss" /* caminho para os arquivos SASS */, ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload); /* Configurando o BrowserSync para observar todos os arquivos .html que estão na raiz do projeto */
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/scss/*.scss") /* caminho para os arquivos SASS */
        .pipe(sass({errLogToConsole:true}))
        .pipe(gulp.dest("./css")) /* Diretório onde será gerado os arquivos de CSS */
        .pipe(browserSync.stream()); /* Executando o BrowserSync quando um arquivo CSS for alterado */
});

gulp.task('default', ['serve']);