$(document).ready(function(){
$("img.image1").hover(function(){
    $(this).addClass("blur");
},function(){
	$(this).removeClass("blur");
});
});
$(document).ready(function(){
$("#hxkgd").off().click(function(){
    $(this).replaceWith("<img src='image/hxkcool.jpg' id='hxkcl' class='logo'>");
});
});
$("#hxkcl").off().click(function(){
	$(this).replaceWith("<img src='image/hxkgood.webp' id='hxkgd' class='logo'>")
});