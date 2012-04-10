Sweep
=====

Sweep is a utility that will recursivly delete
a specified file mask starting from your current
directory.

Examples
========

Quiet Mode
----------

     $ node ./sweep.js --quiet --ext bak,tmp,temp,save

Lots of output
--------------

     $ node ./sweep.js --ext bak,tmp,temp,save

History
=======
- 4/8/2012: Inital Release
- 4/9/2012: Ignore Symbolic Link's

Install
=======

you will need the optimist library

      npm install optimist

clone the git project:

     git clone http://github.com/hazlema/Sweep-NodeJS.git
