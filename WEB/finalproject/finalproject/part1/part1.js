var xhr = new XMLHttpRequest();

window.onload=loaddata;

function loaddata() {
	//event listener
	document.getElementById("lastname").addEventListener("keyup", function (){ searchLastName(this.value);},false);
	document.getElementById("idnumber").addEventListener("keyup", function (){ searchIDNumber(this.value);},false);
	document.getElementById("jobtitle").addEventListener("keyup", function (){ searchJobTitle(this.value);},false);
	
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      //displayData(r);
    }
  };
  xhr.open("GET", "dataset.xml", true);
  xhr.send();
}

function searchLastName(lastname) {
	
	document.getElementById("idnumber").value = "";
	document.getElementById("jobtitle").value = "";

    var xmldoc = xhr.responseXML;
    var x = xmldoc.getElementsByTagName("employee");

	//var r=JSON.parse(xhr.responseText);
	document.getElementById("searchvalue").innerHTML="Search Result";
	//structure table
	var output="<tr><th>Last Name</th><th>First Name</th><th>ID</th><th>Company</th><th>Job Title</th><th>Phone</th></tr>";
	var searchname;
	for(var i=0; i<x.length; i++)
	{
		searchname=x[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue;
		if(searchname.toUpperCase().startsWith(lastname.toUpperCase()))
		{	
				
					output+="<tr><td>";
					output+=x[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue;
					output+="</td><td>";
					output+=x[i].getElementsByTagName("first_name")[0].childNodes[0].nodeValue;
					output+="</td><td>"
					output+=x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
					output+="</td><td>"
					output+=x[i].getElementsByTagName("company")[0].childNodes[0].nodeValue;
					output+="</td><td>"
					output+=x[i].getElementsByTagName("job_title")[0].childNodes[0].nodeValue;
                    output+="</td><td>"
					output+=x[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue;
                    output+="</td></tr>";
			}
				
	}
document.getElementById("searchresults").innerHTML=output;


}
function searchIDNumber(idnumber) {

	document.getElementById("lastname").value="";
	document.getElementById("jobtitle").value = "";


    var xmldoc = xhr.responseXML;
    var x = xmldoc.getElementsByTagName("employee");

	//var r=JSON.parse(xhr.responseText);
	document.getElementById("searchvalue").innerHTML="Search by ID Number"+"<br>";
	//structure table
	var output="<tr><th>Last Name</th><th>First Name</th><th>ID</th><th>Company</th><th>Job Title</th><th>Phone</th></tr>";
	var searchid;
	for(var i=0; i<x.length; i++)
	{
		searchid=x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
		if(searchid.startsWith(idnumber))
		{
			output+="<tr><td>";
					output+=x[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue;
					output+="</td><td>";
					output+=x[i].getElementsByTagName("first_name")[0].childNodes[0].nodeValue;
					output+="</td><td>"
					output+=x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
					output+="</td><td>"
					output+=x[i].getElementsByTagName("company")[0].childNodes[0].nodeValue;
					output+="</td><td>"
					output+=x[i].getElementsByTagName("job_title")[0].childNodes[0].nodeValue;
                    output+="</td><td>"
					output+=x[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue;
                    output+="</td></tr>";
		}

	}
	document.getElementById("searchresults").innerHTML=output;


}

function searchJobTitle(job) {
	
	document.getElementById("lastname").value="";
	document.getElementById("idnumber").value = "";
	
	var xmldoc = xhr.responseXML;
    var x = xmldoc.getElementsByTagName("employee");

	document.getElementById("searchvalue").innerHTML="Search by Job Title"+"<br>";
	//structure table
    var output="<tr><th>Last Name</th><th>First Name</th><th>ID</th><th>Company</th><th>Job Title</th><th>Phone</th></tr>";
	var searchcompany;
	for(var i=0; i<x.length; i++)
	{
		searchjob=x[i].getElementsByTagName("job_title")[0].childNodes[0].nodeValue;
		if(searchjob.toUpperCase().startsWith(job.toUpperCase()))
		{

			output+="<tr><td>";
					output+=x[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue;
					output+="</td><td>";
					output+=x[i].getElementsByTagName("first_name")[0].childNodes[0].nodeValue;
					output+="</td><td>"
					output+=x[i].getElementsByTagName("id")[0].childNodes[0].nodeValue;
					output+="</td><td>"
					output+=x[i].getElementsByTagName("company")[0].childNodes[0].nodeValue;
					output+="</td><td>"
					output+=x[i].getElementsByTagName("job_title")[0].childNodes[0].nodeValue;
                    output+="</td><td>"
					output+=x[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue;
                    output+="</td></tr>";

    }
}
	document.getElementById("searchresults").innerHTML=output;


}