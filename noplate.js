$(function(){
    function load_href(href, target, set_address) {
        var filename = href.substr(3, href.length-3) + '.html';
        $.get(filename, {}, function(data){
            target.html(data);
            if(set_address) $.address.value(href.substr(3));
        });
    }
    $('.noplate-load').live('click', function(){
        load_href($(this).attr('href'), $($(this).attr('target')), true);
        return false;
    });
    var page = $('a[href$="'+'/#'+$.address.value()+'"]');
    if(page.length){
        page.click();
    } else {
        $('.noplate-initial').each(function(){
            load_href($(this).attr('data-href'), $(this), false);
        });
    }
});
