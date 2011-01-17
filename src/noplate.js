$(function(){
    var noplate_cache = {};
    var noplate_blocks = {};
    $('.noplate-block').each(function(){noplate_blocks[this.id] = 1});

    function cache_initial() {
        var stache = {}
        for(var block in noplate_blocks) {
            stache[block] = $('#'+block).html();
        }
        stache['__noplate_scripts'] = [];
        noplate_cache['./'] = stache;
    }

    function cache(href, data) {
        var stache = {};
        var scripts = [];
        $(data).each(function(){
            if(this.nodeName == 'SCRIPT' && !$(this).hasClass('noplate-skip')){
                scripts[scripts.length] = $(this).html();
            } else {
                if(this.id && this.id in noplate_blocks) {
                    stache[this.id] = $(this).html();
                }
            }
        });
        stache['__noplate_scripts'] = scripts;
        noplate_cache[href] = stache;
    }

    function render(href) {
        var stache = noplate_cache[href];
        for(var block in noplate_blocks) {
            if(block in stache) {
                $('#'+block).html(stache[block]);
            } else {
                $('#'+block).html(noplate_cache['./'][block]);
            }
        }
        for(var i=0; i<stache['__noplate_scripts'].length; i++){
            var code = stache['__noplate_scripts'][i];
            // work around html5's "parser-inserted" handling
            code += '\nvar __noplate_hacks=' + new Date().getTime() + ';';
            $('body').append('<script type="text/javascript">'+code+'</script>');
        }
        var virtual = href.substr(0, href.length-5);
        $.address.value(virtual);
    }

    function load_href(href) {
        if(href in noplate_cache) {
            render(href);
        } else {
            $.get(href, {}, function(data){
                cache(href, $(data));
                render(href);
            });
        }
    }

    $('a[target$="_noplate"]').live('click', function(){
        load_href($(this).attr('href'));
        return false;
    });

    cache_initial();

    $.address.externalChange(function(){
        var href = $.address.value().substr(1);
        if (href) href += '.html';
        else href = './';
        load_href(href);
    });
});
