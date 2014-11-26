module.exports = function (grunt) {
    "use strict";

    var pkg = grunt.file.readJSON("package.json");

    grunt.initConfig({
        meta: {
            banner: '/*! '+pkg.name+' '+pkg.version+' | (c) 2014 '+pkg.author+' | '+pkg.licenses[0].type+' License */'
        },
        uglify: {
            options: {
                banner: '<%= meta.banner %>\n'
            },
            target: {
                files: {
                    'build/instagram.min.js': ['lib/instagram.js']
                }
            }
        },
        watch: {
            js: {
                files: ['lib/instagram.js'],
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [ 'uglify' ]);
};