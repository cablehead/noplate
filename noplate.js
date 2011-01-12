$(function(){
    $('.noplate-load').live('click', function(){
        var ob = $(this);
        $.get(ob.attr('href'), {}, function(data){
            $(ob.attr('target')).html(data);
            $.address.value(ob.attr('href'));
        });
        return false;
    });

    $('.noplate-initial').each(function(){
        var ob = $(this);
        $.get(ob.attr('data-href'), {}, function(data){
            ob.html(data);
        });
    });

    var page = $.address.value().substr(1);
    if(page){
        $('a[href$="'+page+'"]').click();
    }
});
