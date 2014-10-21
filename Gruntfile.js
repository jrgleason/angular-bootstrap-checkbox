module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        html2js: {
            main: {
                src: ['src/main/partials/**/*.html','src/main/partials/**/*.jade'],
                dest: 'bin/ui-partials.js'
            }
        },
        concat: {
          dist: {
            src: ['src/main/angular/app.js','src/main/angular/**/*Module.js','src/main/angular/**/*.js'],
            dest: 'bin/nj-ng-ui.js',
          }
        },
        watch: {
          html2js:{
            files: ['src/main/partials/**/*.html','src/main/partials/**/*.jade'],
            tasks: ['html2js']
          },
          concat:{
            files: ['src/main/angular/**/*.js'],
            tasks: ['concat']
          }
        }
  });
  grunt.registerTask('default', ['before-test']);
  grunt.registerTask('before-test', ['html2js','concat']);
  return grunt;
} 
