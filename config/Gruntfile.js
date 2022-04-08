'use strict';

module.exports = function (grunt) {

   grunt.initConfig({
      jshint: {
         all: [
            'Gruntfile.js',
            'tasks/*.js'
         ],
         options: {
            jshintrc: '.jshintrc'
         }
      },

      // Run the task to smoketest it
      retire: {
         node: ['src/**'],
         js: ['src/**/*.js', 'src/**/bower.json'],
         options: {
            verbose: true,
            packageOnly: true,
            //jsRepository: 'test-files/jsrepository.json',
            nodeRepository: 'package.json',
        
         }
      }
   });

   // Actually load this plugin's task(s).
   grunt.loadTasks('tasks');

   grunt.loadNpmTasks('grunt-contrib-jshint');


   // By default, lint and retire.
   grunt.registerTask('default', ['jshint', 'retire']);

};