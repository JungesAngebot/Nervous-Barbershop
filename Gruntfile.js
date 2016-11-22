module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        concurrent: {
            dev: {
                tasks: ['watch', 'concat', 'sass'],
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
                    'assets/scripts/configs.js'
                ],
                dest: 'js/scripts.js'
            }
        },
        copy: {
            dist: {
                files: [
                    {expand: true, src: ['index.html', 'js/**/*.*', 'css/**/*.*'], dest: 'build/', filter: 'isFile'}
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
    });

    grunt.registerTask('default', ['concurrent']);

    //grunt.registerTask('productive', ['sass', 'autoprefixer', 'cssmin', 'concat', 'uglify', 'copy']);

};
