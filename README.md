NoPlate
=======

NoPlate is a small experiment for designers who want to make a quick static
html site, with simple template reuse, without having to run a full blown
server side scripting solution.

Check out the hosted [demo](http://cablehead.github.com/noplate/)!

It allows you to define a base template, which has placeholders blocks.  The
contents of these placeholders can be filled dynamically by external files
which contain html fragments.  Virtual addresses are maintained as links are
navigated. These virtual addresses can be linked to directly and allow the
browser history and reload buttons to be utilized.  The linking structure is
designed to be as SEO friendly as possible.  External fragments are cached so
they only need to be loaded once.  You can include *&lt;script&gt;* snippets in
external files.  These snippets will get rerun every time that address is
navigated to.

NoPlate requires [jQuery](http://jquery.com/), [jQuery
Address](https://github.com/asual/jquery-address) and the noplate.js to be
included in your html file.  For convenience a recent copy of [jQuery
Address](https://github.com/asual/jquery-address) is included in the
repository.

To get started, create the initial landing page for your site.  Then add these headers.

    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script>
    <script type="text/javascript" src="jquery.address.js"></script>
    <script type="text/javascript" src="noplate.js"></script>

Identify blocks of markup which should change as links are navigated.  Give the
containing element of each of these blocks an id, and the class
*noplate-block*:

    <div id="main" class="noplate-block">
        <h2>Home Page</h2>
        <p>Hi, welcome to my website.</p>
    </div>

You can define any number of these blocks.

You can create links to files which contain html fragments to fill these blocks
by setting a link's target to *_noplate*.  For example, this is how you link to
an external template *bio.html*:

    <a target="_noplate" href="bio.html">Bio</a>

External files simply define elements with ids that match the blocks to be replaced:

    <div id="main">
    <h2>About Me</h2>
    </div>

In case someone links directly to an external file, you can place a redirect at
the bottom of the fragment file for that page's virtual address.  Give the
script the class *noplate-skip* so it won't be run when it's link to by
noplate.  Here's an example for the bio page:

    <script class="noplate-skip">window.location.href='./#/bio'</script>


Just watch, do to issues with most browsers handling of the [Same origin
policy](http://en.wikipedia.org/wiki/Same_origin_policy) NoPlate will only work
when your files are served over http.

