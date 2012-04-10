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

clone the git project:

     git clone http://github.com/hazlema/Sweep-NodeJS.git

Make it a system utility (unix)

	sudo mkdir /usr/lib/sweep
	sudo mv * /usr/lib/sweep/.
	sudo ln -s /usr/lib/sweep/sweep.js /usr/bin/sweep

Make it a system utility (windows)

	Create: directory c:\Utils 
	Copy:   everything to that directory
	Open:   Start -> Control Panel -> System -> Advanced System Settings
	Click:  Environment Variables
	Edit:   In the box thats called 'System Variables' look for the PATH variable and double click
	Type:   C:\Utils; (at the start of the line)
	Click:  OK
	Click:  OK
	
Platform note

	Isn't windows 8 step process so much easier then unix's 3 steps :-)
