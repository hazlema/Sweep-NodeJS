#!/usr/bin/env node
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
var  fs  = require('fs'),
     opt = require('optimist')
                .usage("\nDelete files recursivly\nUsage $0 --ext bat,bak,tmp")
                .demand('ext')
                .describe('ext', 'List of file extensions')
                .describe('quiet', 'Stealth mode' )
                .argv,
     ext   = opt.ext.split(','),
     quiet = opt.quiet ? true : false,
     patterns = [];

// Get the files status
//
function tryStatus(file){
        var status = false;
        
        try {
                status = fs.lstatSync(file);
        } catch (err) {
                if (!quiet) console.log(err);
        }
        
        return status;
}

// Delete the file
//
function tryDelete(file){
        try {
                fs.unlinkSync(file);
        } catch (err) {
                if (!quiet) console.log(err);
        }
}

function sweep(dir) {
        if (!quiet) console.log('Processing %s...', dir);

        var allFiles = fs.readdirSync(dir);
        
        allFiles.forEach(function (file) {
                status = tryStatus(dir + '/' + file);

                if (status && (status.isDirectory() && !status.isSymbolicLink())) {
                        sweep(dir + '/' + file);
                } 
                else if (status && status.isFile()) {
                        patterns.forEach(function (thisPat) {
                                if (thisPat.test(file)) {
                                        if (!quiet) console.log('Del: %s', dir + '/' + file);
                                        tryDelete(dir + '/' + file);
                                }
                        })
                }
        })
}


// Build the regex's for faster processing
//
ext.forEach(function (ext) {
        patterns.push(new RegExp(ext + '$', 'i'));
});

// Start er up
//
sweep('.');