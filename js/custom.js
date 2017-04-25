$(document).ready(function() {
$("a.scrollto").click(function () {
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 800);
return false;
});
});
$(document).ready(function(){
$(window).scroll(function(){
    var posTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if(posTop > 150){
        $('#scroll_head').fadeIn('fast');
    }else{
        $('#scroll_head').fadeOut('fast');
    }
});
 });
/*Tabs*/
$(document).ready(function() {  
    $(".tab_content_2").hide();
    $("ul.tabs_2 li:first").addClass("active").show();
    $(".tab_content_2:first").show();
    $("ul.tabs_2 li").click(function() {
            $("ul.tabs_2 li").removeClass("active"); 
            $(this).addClass("active"); 
            $(".tab_content_2").hide(); 
            var activeTab = $(this).find("a").attr("href"); 
            $(activeTab).fadeIn(); 
            return false;
    });
});
$(document).ready(function() {
    $("a.show-block").click(function() {  
        var $t=$(this),alt=$t.data('alt');
        $t.data('alt',$t.text());$t.text(alt);          
        $($t.attr('href')).stop().toggle('slow');
        return false;
    });
})
 $(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });
  $(document).ready(function () {
     $('.name_input').click(function(){
        $(".top_input_name").addClass("active").show();
        empty('name');
      });
      $('.tel_input').click(function(){
       $(".top_input_tel").addClass("active").show();
       empty('tel');
      });
       $('.msg_input').click(function(){
        $(".top_input_msg").addClass("active").show();
        empty('msg');
      });
        function empty(data){
          if(data != 'name' ){
            var name = $('.name_input').val()
            if(!name){
              $(".top_input_name").removeClass("active");
            }
          }
          if(data != 'tel' ){  
            var tel = $('.tel_input').val()
              if(!tel){
                $(".top_input_tel").removeClass("active");
              }
           }
            if(data != 'msg' ){   
            var msg = $('.msg_input').val()
              if(!msg){
                $(".top_input_msg").removeClass("active");
              }
            }  
        }
    });

/*Tabs*/
$(document).ready(function() {  
    $(".tab_content").hide();
    $("ul.tabs li:first").addClass("active").show();
    $(".tab_container .tab_content:eq(0)").show();
    $("ul.tabs li").click(function() {
            $("ul.tabs li ").removeClass("active"); 
            $(this).addClass("active"); 
            $(".tab_content").hide(); 
            var activeTab = $(this).find("a").attr("href"); 
            $(activeTab).fadeIn(); 
            return false;
    });
});
/*jQuery(document).ready(function(){
          $(window).scroll(function(){
              if($(this).scrollTop()>220){
                  $('.top_menu').addClass('fixed').removeClass('overfl');
                  $('.top_menu');
                  $('.menu').addClass('fixed_menu');
                  $('.top_phone').addClass('fixed_top_phone');
                  $('.logo').addClass('logo_2');
                  $('.top_btn').addClass('scroll_top_btn');
                  $('.header_btn').addClass('scroll_header_btn');
              }
              else if ($(this).scrollTop()<155){
                  $('.logo').removeClass('logo_2');
                  $('.top_phone').removeClass('fixed_top_phone');
                  $('.menu').removeClass('fixed_menu');
                  $('.top_menu').removeClass('fixed').addClass('overfl');
                  $('.header_btn').removeClass('scroll_header_btn');
                  $('.top_btn').removeClass('scroll_top_btn');

                  
              }
          });
      });*/

/*slider*/

/*read_more link*/  
jQuery(document).ready(function(){
    var text_height = $('.show_more_text').outerHeight();
    var max_height = parseInt($('.show_more_text').css('max-height'));
    if(text_height < max_height){
        $('.show_more, .hide_content').hide();
    }
    $('.show_more').click(function(){
        $(this).hide();
        $(this).siblings('.show_more_text').animate({'max-height':'2000px'}, 500);
        $(this).siblings('.show_more_text').find('.hide_content').animate({'bottom':'-35px'}, 500);
        return false;
    });
}); 