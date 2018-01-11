/*
What is Nikkud? What are the Unicodes?
https://en.wikipedia.org/wiki/Unicode_and_HTML_for_the_Hebrew_alphabet
https://en.wikipedia.org/wiki/Niqqud
https://en.wikipedia.org/wiki/Ktiv_hasar_niqqud
http://www.unicode.org/charts/PDF/U0590.pdf
 */

 var str = '#this #is__ __#a test###__'
str = str.replace(/#|_/g,'')

function removeNikkud(rawString) {
	// exclude U+05BE , U+05C0 , U+05C3	and U+05C6
	//return rawString.replace(/[\u0591-\u05BD|\u05BF|\u05C1-\u05C2|\u05C4-\u05C5|\u05C7]/g,"")
  return rawString.replace(/[\u0591-\u05C7]/g,"")
}

function flattenNikkud() {
   var input = $('#input').val();
   var output = removeNikkud(input);
   $('#output').val(output);
}
