
function stripVowels(rawString)
{
	var newString = '';
	for(j=0; j<rawString.length; j++) {
		if(rawString.charCodeAt(j)<1425
			 || rawString.charCodeAt(j)>1479)
		{ newString = newString + rawString.charAt(j); }
	}
	return(newString);
}

/* @shimondoodkin suggested even a much shorter way to do this */
function stripVowels2(rawString) {
  return rawString.replace(/[\u0591-\u05C7]/g,"")
}

function doStrip() {
   var input = $('#input').val();
   var output = stripVowels(input);
   $('#output').val(output);
}
