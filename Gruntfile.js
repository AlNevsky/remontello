module.exports = function(grunt){
    grunt.initConfig({
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'img/images',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/img-min'
                }]
            }
        },
        connect: {
            server: {
              options: {
                port: 9001,
                base: '/home/user/Projects/repair-site'
              }
            }
          },
        watch: {
            options: {
                livereload: true
            },
//            scripts:{
//                files: ['css/sass/style.sass'],
//                tasks: ['compass']
//            },
            livereload: {
                files: ['/home/user/Dropbox/Projects/newZemli/css/style.css', '/home/user/Dropbox/Projects/newZemli/*.html']
            }
        }
    });

//    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
//    grunt.loadNpmTasks('grunt-spritesmith');

    grunt.registerTask('server',['watch']);
};