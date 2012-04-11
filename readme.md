Sweep
=====

Sweep is a utility that will recursively delete
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
- 04/08/2012: Initial Release
- 04/09/2012: Ignore Symbolic Link's
- 04/10/2012: Package.json Created

Install
=======

clone the git project:

     git clone http://github.com/hazlema/Sweep-NodeJS.git

Make it a system utility (unix)

	sudo mkdir /usr/lib/sweep
	sudo mv * /usr/lib/sweep/.
	sudo chmod +x /usr/lib/sweep/sweep.js
	sudo ln -s /usr/lib/sweep/sweep.js /usr/bin/sweep

Make it a system utility (windows)

	Create: directory c:\Utils 
	Copy:   everything to that directory
	Open:   Start -> Control Panel -> System -> Advanced System Settings
	Click:  Environment Variables
	Edit:   In the box that's called 'System Variables' look for the PATH variable and double click
	Type:   C:\Utils; (at the start of the line)
	Click:  OK
	Click:  OK
	
Platform note

	Isn't windows 8 step process so much easier then unix's 4 steps :-)

Inspiration
===========

	Inspired by one of my all time favorite DOS applications that shared the same name.
	(I think sweep for DOS was about 15 years ago, time for a port :-))
