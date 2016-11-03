var grunt = require('grunt');


module.exports = function(grunt) {
 require('time-grunt')(grunt);
 grunt.initConfig();
  grunt.initConfig({
    jshint: {
            all: ['Gruntfile.js','app/app.js']
        },

	concat: {
    options: {
      separator: ';'
    },
    dist: {
      src: ['app/app_ctrl.js', 'app/app_route.js'],
      dest: 'app/app.js'
    }
  },

	  uglify: {
    options: {
      mangle: false
    },
    my_target: {
      files: {
        'app/app.min.js': ['app/app.js']
      }
    }
  },


    watch: {
      styles: {
        files: ['Gruntfile.js','app/app.js'], // which files to watch
        tasks: ['jshint','concat','uglify'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('cc','concat');
  grunt.registerTask('default', ['jshint','concat','uglify','watch']);


}; 