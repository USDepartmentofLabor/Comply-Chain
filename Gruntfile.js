'use strict';

module.exports = function (grunt) {

   grunt.initConfig({
      jshint: {
         all: [
            'Gruntfile.js',
            'tasks/*.js'
         ]
      },

      // Run the task to smoketest it
      retire: {
         node: ['src/**'],
         js: ['src/**/*.js'],
         options: {
            verbose: true,
            packageOnly: true,
            //jsRepository: 'test-files/jsrepository.json',
            //nodeRepository: 'test-files/npmrepository.json',
            jsRepository: 'https://raw.github.com/RetireJS/retire.js/master/repository/jsrepository.json',
            nodeRepository: 'https://raw.github.com/RetireJS/retire.js/master/repository/npmrepository.json'
         }
      }
   });

   // Actually load this plugin's task(s).
   //grunt.loadTasks('tasks');

   grunt.loadNpmTasks('grunt-retire');


   // By default, lint and retire.

};