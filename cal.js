
function show(value){
	document.getElementById("input").value += value;
}
function cal(value){
		document.getElementById("input").value += value;
	}
function clearInput(){
	document.getElementById("input").value = "";
}
function equalTo(){
	var value = document.getElementById("input").value;
	var store = eval(value);
	document.getElementById("input").value = store;
}

