$(document).ready(function(){
  jQuery(".menu-btn").click(function(){jQuery(this).siblings(".menu").fadeToggle();});
  AOS.init({
    duration: 1000,
  })
  $(".copy-add-btn").click(function(){
    var copyText = $("input.text-to-copy");
    copyText.select();
    document.execCommand("copy");
  }); 
});