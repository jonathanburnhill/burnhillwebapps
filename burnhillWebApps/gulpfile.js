const gulp = require('gulp');
var responsive = require('gulp-responsive');

gulp.task('default', () => {
    return gulp.src('images/*.jpeg')
                .pipe(responsive({
                    '*.jpeg': [{
                        width: 600,
                        height: 320,
                        quality: 100,
                        rename: { suffix: '-desktop'}
                    }, {
                        width: 1200,
                        height: 320,
                        quality: 100,
                        rename: { suffix: '-desktop-retina'}

                    }, {
                        width: 320,
                        height: 200,
                        qualtiy: 80,
                        rename: { suffix: '-mobile'}
                    }, {
                        width: 550,
                        height: 200,
                        quality: 80,
                        rename: { suffix: '-mobile-retina'}
                    }, {
                        width: 800,
                        height: 320,
                        quality: 100,
                        rename: {
                        suffix: '-desktop',
                        extname: '.webp'
                        }
                    }, {
                        width: 1200,
                        height: 320,
                        quality: 100,
                        rename: {
                        suffix: '-desktop-retina',
                        extname: '.webp'
                        }

                    }, {
                        width: 400,
                        height: 200,
                        qualtiy: 80,
                        rename: {
                        suffix: '-mobile',
                        extname: '.webp'
                        }
                    }, {
                        width: 550,
                        height: 200,
                        quality: 80,
                        rename: {
                        suffix: '-mobile-retina',
                        extname: '.webp'
                        }
                    }]
                }))
                .pipe(gulp.dest('img'));
});