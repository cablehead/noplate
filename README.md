noplate
-------

noplate is a small experiment for designers who want to make a quick static
html site, but would like a simple base template markup reuse pattern, without
making the leap to running a dynamic server.

noplate allows you to define a base template, which has placeholders.  The
contents of these placeholders can be filled by external files which contain
html fragraments on page load, and dynamically when an anchor tag is clicked.

After an anchor tag is clicked, the url is dynamically updated with a virtual
address using [jQuery Address](https://github.com/asual/jquery-address).  This
enables your dynamic pages to be linked to directly, to be indexed by search
engines and allows the browser history and reload buttons to be utilized.

noplate requires [jQuery](http://jquery.com/), [jQuery
Address](https://github.com/asual/jquery-address) and the noplate js to be
included in your html file.  For convenience a recent copy of [jQuery
Address](https://github.com/asual/jquery-address) is included in the
repository.

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
    <script type="text/javascript" src="jquery.address.js"></script>
    <script type="text/javascript" src="noplate.js"></script>

Any element targetable with a [jquery
selector](http://api.jquery.com/category/selectors/) can be a placeholder.

To load a place holder with some initial content, give an element the class
*noplate-initial* and then define an attribute *data-href* to point to your
html fragment.  For example, the following loads the contents of home.html into
this div element on page load:

    <div id="main" class="noplate-initial" data-href="/#/home"></div>

Note that the href **/#/home** maps to the external fragment home.html.

To swap the contents of a placeholder dynamically, create an anchor tag with
the class *noplate-load*, set the tags *target* element to a [jquery
selector](http://api.jquery.com/category/selectors/) which targets the
placeholder and the tags *href* to to your html fragment which should be
loaded.  For example:

    <a class="noplate-load" target="#main" href="/#/bio">Here is my Bio</a>

Do to issues with most browsers handling of the [Same origin
policy](http://en.wikipedia.org/wiki/Same_origin_policy) noplate will only work
when your files are served over http.

On osx you can quickly try out the noplate example by opening terminal and running:

    mkdir -p /tmp/noplate
    cd /tmp/noplate
    curl -L -o noplate.zip https://github.com/cablehead/noplate/zipball/master
    unzip noplate
    cd cablehead*
    python -m SimpleHTTPServer 8005

You'll now be able to view the example at: [http://localhost:8005/](http://localhost:8005/)

