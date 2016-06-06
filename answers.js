function answer_1()
 {

	document.getElementById("q1-answer").innerHTML = "<ul><li>D - Document</li><li>O - Object</li><li>M - Model</li></ul>";

}


function answer_2()
 {

	document.getElementById("q2-answer").innerHTML = "<ol><li>Javascript can add or remove existing elements and attributes</li><li>Javascript can react to events happening in a page(ex.Button click)</li></ol>";

}



var t;
t = document.getElementsByClassName("q34-answer");

function answer_3()
 {
	t[0].innerHTML = "<ul><li><b>Paranet node</b> - A node directly above a node</li><li><b>Child nodes</b> - Nodes one level directly below</li><li><b>Sibling nodes</b> - Nodes at the same level (same parent node)</li><li><b>Descendant nodes</b> - A set of nodes any number of levels below another node</li><li><b>Ancestor nodes</b> - A set of nodes above a node in a tree</li></ul>";

}


function answer_4()
 {

	t[1].innerHTML = "<ol><li><b>document.getElementById(IDNAME)</b> : Returns an element with a given ID_NAME (return only one)</li><li><b>document.getElementsByClassName()</b> : Get a list of elements based on the class name (return many)</li><li><b>document.getElementsByName()</b> : Get a	list of	elements based on the name(return many)</li><li><b>document.getElementsByTagName()</b> : Get a list	of elements	with the input tag name(return many)</li></ol>";

}


$('a').click(function() {
   $(this).text("Answer 5");
})

$('.item').click(function() {
   $(this).attr('style', 'font-size: 3em');
})

$('div.demo').dblclick(function() {
   $(this).attr('style', 'color: blue');
})
