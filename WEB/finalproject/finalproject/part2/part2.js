var xhr = new XMLHttpRequest();
window.onload=loaddata;

var answerList;

function loaddata() {
	
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
	showQuizz();
	}
  };
  xhr.open("GET", "finalquiz.xml", true);
  xhr.send();
}

function showQuizz() {
	
	var xmldoc = xhr.responseXML;
	var x = xmldoc.getElementsByTagName("question");

	var a = xmldoc.getElementsByTagName("rightanswers")[0];
	var answer = a.childNodes[0];
	answerList = answer.nodeValue.split(",");

	//var r=JSON.parse(xhr.responseText);
	//document.getElementById("quizz").innerHTML="Test"+"<br>";
	//structure table
	document.getElementById("quizz").innerHTML = "";

	for(var i=0; i<x.length; i++)
	{
		var questionNo=x[i].getElementsByTagName("qnumber")[0].childNodes[0].nodeValue;
		var qTitle=x[i].getElementsByTagName("qtitle")[0].childNodes[0].nodeValue;
		var m1=x[i].getElementsByTagName("a")[0].childNodes[0].nodeValue; 
		var m2=x[i].getElementsByTagName("b")[0].childNodes[0].nodeValue; 
		var m3=x[i].getElementsByTagName("c")[0].childNodes[0].nodeValue; 
		var m4=x[i].getElementsByTagName("d")[0].childNodes[0].nodeValue; 
		
		quizz = 
		(`<br>Question ${questionNo}:<br><br>
		${qTitle}<br><br>
		<input type="radio" name="q${i}" value="a" required>A) ${m1}<br>
		<input type="radio" name="q${i}" value="b">B) ${m2}<br>
		<input type="radio" name="q${i}" value="c">C) ${m3}<br>
		<input type="radio" name="q${i}" value="d">D) ${m4}<br><hr></hr>`);
		

		document.getElementById("quizz").innerHTML += quizz;
	}
}

function testResult() {
	var score = 0;
	var check;

	for(var i=0 ; i < answerList.length; i++ ) {
		
		var question = `q${i}`;
		check = document.querySelector(`input[name="${question}"]:checked`).value;
		
		if(answerList[i] == check)
		{
			score++;
		}
	}

	var result = `Grade ${score}/${answerList.length}`;

	window.alert(result);
}


