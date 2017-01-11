module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        concurrent: {
            dev: {
                tasks: ['watch', 'concat', 'sass', 'autoprefixer'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            server: {
                files: ['.rebooted']
            },
            sass: {
                files: 'assets/styles/sass/**/*.scss',
                tasks: ['sass'],
                options: {
                    interrupt: true
                }
            },
            css: {
                files: 'assets/styles/css/style.css',
                tasks: ['autoprefixer'],
                options: {
                    interrupt: false,
                    livereload: true
                }
            },
            scripts: {
                files: ['assets/scripts/**/*.js'],
                tasks: ['concat'],
                options: {
                    interrupt: true,
                    livereload: true
                }
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'assets/styles/css/style.css': 'assets/styles/sass/style.scss'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 4 versions', '> 1%'],
                map: true
            },
            your_target: {
                files:{
                    'css/style.css': ['assets/styles/css/style.css']
                }
            }
        },
        concat: {
            js: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/slick-carousel/slick/slick.js',
                    'assets/scripts/sliderController.js',
                    'assets/scripts/socialFeedController.js',
                    'assets/scripts/configs.js',
                    'bower_components/codebird-js/codebird.js',
                    'bower_components/doT/doT.min.js',
                    'bower_components/moment/min/moment.min.js',
                    'bower_components/moment/locale/de.js',
                    'bower_components/fullpage.js/vendors/scrolloverflow.js',
                    'bower_components/fullpage.js/dist/jquery.fullpage.js',
                    'bower_components/social-feed/js/jquery.socialfeed.js',
                    'bower_components/spritespin/release/spritespin.js',
                    //'bower_components/vide/dist/jquery.vide.js'
                ],
                dest: 'js/scripts.js'
            }
        },
        copy: {
            dist: {
                files: [
                    {expand: true, src: ['*.html', 'js/**/*.*', 'css/**/*.*','fonts/**/*.*', 'img/**/*.*', 'video/**/*.*'], dest: 'build/', filter: 'isFile'}
                ]
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/scripts.js': ['js/scripts.js']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'build/css/style.css': ['css/style.css']
                }
            }
        },

        image: {                          // Task
            dynamic: {
                options: {
                    pngquant: true,
                    optipng: false,
                    zopflipng: true,
                    jpegRecompress: false,
                    jpegoptim: true,
                    mozjpeg: true,
                    gifsicle: true,
                    svgo: true
                },
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'img/sprite_original/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'img/sprite/'                  // Destination path prefix
                }]
            }
        }
    });

    grunt.registerTask('default', ['concurrent']);
    grunt.registerTask('png', ['image']);
    grunt.registerTask('productive', ['concat', 'sass', 'autoprefixer', 'cssmin', 'uglify', 'copy']);

    //grunt.registerTask('productive', ['sass', 'autoprefixer', 'cssmin', 'concat', 'uglify', 'copy']);

};
