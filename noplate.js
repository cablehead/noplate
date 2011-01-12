$(function(){
    function load_href(s, target, set_address) {
        $.get(s.substr(3, s.length-3) + '.html', {}, function(data){
            target.html(data);
            if(set_address) $.address.value(s.substr(3));
        });
    }
    $('.noplate-load').live('click', function(){
        load_href($(this).attr('href'), $($(this).attr('target')), true);
        return false;
    });
    $('.noplate-initial').each(function(){
        load_href($(this).attr('data-href'), $(this), false);
    });
    var page = '/#'+$.address.value();
    if(page){
        $('a[href$="'+page+'"]').click();
    }
});
