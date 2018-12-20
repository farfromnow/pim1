( function( $ ) {
$( document ).ready(function() {
$(document).ready(function(){

$('#cssmenu2 > ul > li ul').each(function(index, e){
  var count = $(e).find('li').length;
  var content = '<span class=\"cnt\">' + count + '</span>';
  $(e).closest('li').children('a').append(content);
});
$('#cssmenu2 ul ul li:odd').addClass('odd');
$('#cssmenu2 ul ul li:even').addClass('even');
$('#cssmenu2 > ul > li > a').click(function() {
  $('#cssmenu2 li').removeClass('active');
  $(this).closest('li').addClass('active');
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#cssmenu2 ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;
  }
});

});

});
} )( jQuery );
