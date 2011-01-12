var foo;
$(function(){
    function load_href(href) {
        $.get(href, {}, function(data){
            $(data).each(function(){
                if(this.id){
                    target = $('#'+this.id);
                    if(target.hasClass('noplate-block')) {
                        target.html($(this).html());
                    }
                }
            });
            var virtual = href.substr(0, href.length-5);
            $.address.value(virtual);
            noplate_loaded();
        });
    }

    $('a[target$="_noplate"]').live('click', function(){
        load_href($(this).attr('href'));
        return false;
    });

    var initial = $.address.value().substr(1);
    if(initial) load_href(initial + '.html');
    else noplate_loaded();
});
