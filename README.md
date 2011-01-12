noplate
-------

noplate is a small experiment for designers who want to make a quick static
html site, but would like a simple base template markup reuse pattern, without
making the leap to running a dynamic server.

So far noplate just allows you to define a base template, which has
placeholders.  The contents of these placeholders can be filled by external
files which contain html fragraments on page load, and dynamically when an
anchor tag is clicked.

noplate requires jquery and the noplate js to be included in your html file:

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
    <script type="text/javascript" src="noplate.js"></script>

Any element targetable with a [jquery
selector](http://api.jquery.com/category/selectors/) can be a placeholder.

To load a place holder with some initial content, give an element the class
*noplate-initial* and then define an attribute *data-href* to point to your
html fragment.  For example, the following loads the contents of home.html into
this div element on page load:

    <div id="main" class="noplate-initial" data-href="home.html"></div>

To swap the contents of a placeholder dynamically, create an anchor tag with
the class *noplate-load*, set the tags *target* element to a [jquery
selector](http://api.jquery.com/category/selectors/) which targets the
placeholder and the tags *href* to to your html fragment which should be
loaded.  For example:

    <a class="noplate-load" target="#main" href="bio.html">Here is my Bio</a>

Do to issues with most browsers handling of the [Same origin
policy](http://en.wikipedia.org/wiki/Same_origin_policy) noplate will only work
when your files are served over http.

On osx you can quickly try out the noplate example by opening terminal and running:

    mkdir -p /tmp/nopaste
    cd /tmp/nopaste
    curl -L -o nopaste.zip https://github.com/cablehead/noplate/zipball/master
    unzip noplate
    cd cablehead*
    python -m SimpleHTTPServer 8005

You'll now be able to view the example at: [http://localhost:8005/](http://localhost:8005/)

