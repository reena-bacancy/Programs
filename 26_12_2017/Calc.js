var a,b;
var res;		
var arr = [];
var arr1;
function myfun(ch)
{
	a=document.getElementById("txt1").value;	
	b=document.getElementById("txt2").value;
	arr.push(a+" "+ch+" "+ b);
	filter_arr(arr);
}
function search_opt(ch1)
{
	var r1=[];
	var selectedValue = ch1.value;
	document.getElementById("dataTable").innerHTML="";
	for(var i=0;i<arr.length;i++)
	{
		var res1 = arr[i].split(" ");
		if(res1[1]=='+' && res1[1]==selectedValue)
		{
			r1.push(arr[i]);
		}
		else if(res1[1]=='-' && res1[1]==selectedValue)
		{
			r1.push(arr[i]);
		}
		else if(res1[1]=='*' && res1[1]==selectedValue)
		{
			r1.push(arr[i]);
		}
		else if(res1[1]=='/' && res1[1]==selectedValue)
		{
			r1.push(arr[i]);
		}
		else{}				
	}
	filter_arr(r1);
}
function filter_arr(ar)
{
	var table = document.getElementById("dataTable");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
			
	//First Cell........
	var firstCell = row.insertCell(0);
	//Second Cell......				
	var secondCell = row.insertCell(1);
	//Third Cell........				
	var thirdCell = row.insertCell(2);
	for(var i=0;i<ar.length;i++)
	{				
		firstCell.innerHTML = rowCount;				
		secondCell.innerHTML=ar[i];				
		arr1 = ar[i].split(" ");
		res = eval(arr1[0]+arr1[1]+arr1[2]);
		thirdCell.innerHTML=res;
		txt1.value="";
		txt2.value="";
	}
}

//JSON Object Array Demo.....
var persons = [];
function Display()
{
	var f=document.getElementById("fname").value;
	var l=document.getElementById("lname").value;
	var a=document.getElementById("age").value;
	var g=document.getElementById("gender").value;
		
	var data={"firstname": f,"lastname": l,"age" :a,"gender" :g}
	persons.push(data);
		
	var table = document.getElementById("dataTable");
    var rowCount = table.rows.length;
			
	var row = table.insertRow(rowCount);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	for(var i=0;i<persons.length;i++)
	{
		cell1.innerHTML=persons[i].firstname;
		cell2.innerHTML=persons[i].lastname;			
		cell3.innerHTML=persons[i].age;
		cell4.innerHTML=persons[i].gender;
	}
	fname.value="";
	lname.value="";
	age.value="";
	gender.value="";
}