
//Merge Two Array....
function merge_array()
{		
	var arr1=["reena","hetali","bhavin"];
	var arr2=["rohini","komal","reena"];

	var a,b;
	var result;
	document.getElementById("demo1").innerHTML=arr1;
	document.getElementById("demo2").innerHTML=arr2;
	res=arr1.concat(arr2);
	document.getElementById("result").innerHTML=res;
};

//Merge Two Array Based on Search....
function merge_search()
{	
	var arr1=["reena","hetali","bhavin"];
	var arr2=["rohini","komal","reena"];

	var i,l1;
	var res,search,idx1,idx2;
	document.getElementById("ar1").innerHTML=arr1;
	document.getElementById("ar2").innerHTML=arr2;
	search=document.getElementById("txt1").value;
	idx1=arr1.indexOf(search);
	idx2=arr2.indexOf(search);	
	if(idx1>=0 && idx2>=0)
	{
		for(i=0;i<arr2.length;i++)
		{
			arr1.push(arr2[i]);
		}
		document.getElementById("result").innerHTML=arr1;
	}
	else
	{
		alert("Element is not in both Array....");
	}
};

//Merge Two Array Without concat() Function.....
function merge_wof()
{	
	var arr1=["reena","hetali","bhavin"];
	var arr2=["rohini","komal","reena"];

	var i,l1;
	var res;
	var arr1,arr2;
	document.getElementById("demo1").innerHTML=arr1;
	document.getElementById("demo2").innerHTML=arr2;
	for(i=0;i<arr2.length;i++)
	{
		arr1.push(arr2[i]);
	}
	document.getElementById("result").innerHTML=arr1;
};