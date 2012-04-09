/***
 * Sweep
 * Written for NodeJS
 * 
 * Author:
 * Matthew Hazlett
 * Clarity Computers
 *
 * A quick and dirty node app:
 * Deletes the crap outta your directories before you post to git
 * Should work cross platform (as is)
 *
 * Add whatever extentions you want to the 
 * del array to sweep those files
 *
 * You may want to change startDir to __dirname
 */
var fs       = require('fs'),
    startDir = 'c:/inetpub',
    del      = ['bak', 'save', 'tmp'],
    patterns = [];
    
function getDir(dir) {
      var files = fs.readdirSync(dir);

      files.forEach(function(file) {
            var stats = fs.statSync(dir + '/' + file);
      
            if (stats.isDirectory()) {
                  getDir(dir + '/' + file);
            } else {
                  patterns.forEach( function(pattern) {
                        if (pattern.test(file)) {
                              console.log('Del: %s', dir + '/' + file);
                              try {
                                    fs.unlinkSync(dir + '/' + file);
                              } catch(err) {
                                    console.log(err);
                              }
                        }
                  });
            }
      });
}     

// Build the regex's for faster processing
//
del.forEach( function(ext) {
      patterns.push(new RegExp(ext + '$', 'i'));
});

// Start er up
//
getDir(startDir);
