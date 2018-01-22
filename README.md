
<!--#echo json="package.json" key="name" underline="=" -->
pkjs-dep-names
==============
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
List identifiers from a module&#39;s package.json dependencies and
devDependencies in one line each, separated by space
<!--/#echo -->


Usage
-----

```bash
$ pkjs-dep-names split  # default COLSEP: \t (Tab)
split   dep     through
split   devDep  asynct event-stream it-is stream-spec string-to-stream ubelt
$ COLSEP=: pkjs-dep-names split
split:dep:through
split:devDep:asynct event-stream it-is stream-spec string-to-stream ubelt
```


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
