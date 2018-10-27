$(window).on('load', function(){
// Add classes for old IE
	jQuery(".tree li a:only-child, .tree li:only-child").addClass("only-child");
	jQuery(".tree li:last-child").addClass("last-child");
  $("a").attr("target", "_blank");
});
