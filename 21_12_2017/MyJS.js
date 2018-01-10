//Reverse Array......
function reverseArr() 
{
	var input=[];
	var res = document.getElementById("txt").value;
	input = res.split(",");
		 
	var ret = new Array;
	var len=input.length;
	for(var i = len; i >= 0; i--)
	{			
		ret.push(input[i]);			
	}
	document.getElementById("txt1").value=ret;		
}
//Reverse String......
function reverseString()
{
	var result = [];
	var res1;
	var str=document.getElementById("txt1").value;
	var newarr = str.split("");		
	var x = newarr.length;
		
	for (var i = x; i > -1; i--) 
	{
		result.push(newarr[i]);
	}		
	res1 = result.join("");		
	document.getElementById("res").value=res1;
}


//Replace String......
function replce_string()
{
	var rep;
	var res=document.getElementById("txt1").value;		
	var search=document.getElementById("txt2").value;
	var i=0;
	while(i<res.length)
	{			
		if(res.charAt(i)==search)
		{
			rep=res.replace(search,"{"+search+"}");
		}
		i++;
	}
	document.getElementById("demo").innerHTML=rep;		
}

//Add Additional Character.....
function add_char()
{
	var i=0,count=0,spe;
	var out=[];
	var res=document.getElementById("txt1").value;		
	var search=document.getElementById("txt2").value;		
	while(i<res.length)
	{			
		if(res.charAt(i)==search)
		{				
			var s=res.indexOf(res.charAt(i));
			count++;
			spe="@";
			out=[res.slice(0,s),spe,res.slice(s)].join("");
			document.getElementById("demo").innerHTML=out;				
		}
		i++;
	}		
}

//Paragraph Spliting....
function splitparagarph()
{
	var data=document.getElementById("demo").innerHTML;
	var res=data.split(".");
	//var res=data.replace(/;/g,"\n");
	var str='';
	for(var i=0;i<res.length;i++)
	{
		str+=res[i]+'<br>';
	}
	document.getElementById("demo1").innerHTML=str;
}

