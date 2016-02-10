var textToFind = ["Helicarrier", "Brick Bank", "Venice", "Berlin", "Buckingham", "Capitol", "Corner Deli", "Drag Racer", "Ferrari F40", "Firehouse Headquarters", "Winter Toy Shop"];
//window.addEventListener ("load", myMain, false);
setTimeout(myMain, 5000);

function myMain (evt) {
	console.log("page load")
	var textFound = [];
	for(var i = 0; i < textToFind.length; i++) {
		text = textToFind[i];
		console.log(text);
		if(document.documentElement.innerHTML.indexOf(text) != -1) {
			textFound.push(text);
		}
	}
	console.log(textFound);
	if(textFound.length > 0) {
		var alertText = "Found text!\n";
		for(var i = 0; i < textFound.length; i++) {
			alertText += "\n" + textFound[i];
		}
		alert(alertText);
	}
}