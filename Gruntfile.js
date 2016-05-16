module.exports = function(grunt){
require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    uglify: {
    		build: {
        		files: {
            			'dist/js/views/main.min.js': ['views/js/main.js'],
                  'dist/js/views/withinviewport.min.js': ['views/js/withinviewport.js'],
                  'dist/js/perfmatters.min.js' : ['js/perfmatters.js'],
                  'dist/js/analytics.min.js' : ['js/analytics.js']
        			}
    			}
    },
    cssmin: {
    		build: {
          files : {
       			  'dist/css/style.min.css': ['css/style.css'],
              'dist/css/print.min.css': ['css/print.css'],
              'dist/css/portrait.min.css': ['css/portrait.css'],
              'dist/css/views/bootstrap-grid.min.css': ['views/css/bootstrap-grid.css'],
              'dist/css/views/style.min.css': ['views/css/style.css']
          }
    			}
    },
    imagemin: {
      dynamic: {
        files: [{
            expand: true,
            cwd: 'img/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'dist/img/'
        }]
      }
    },
    watch: {
    		js: {
        	files: ['views/js/main.js','views/js/withinviewport.js','js/perfmatters.js','js/analytics.js'],
       		tasks: ['uglify'],
		    },
  		css: {
			    files: ['css/style.css,css/print.css,css/portrait.css,views/css/style.css,views/css/bootstrap-grid.css'],
       		tasks: ['cssmin']
    		}
		}
  });

grunt.registerTask('default', ['uglify','cssmin','imagemin']);

};