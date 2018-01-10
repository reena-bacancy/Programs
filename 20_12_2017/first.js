function myfun1(ch)
{
	var a=document.getElementById("txt1").value;
	var b=document.getElementById("txt2").value;
	var result=document.getElementById("result").value=eval(a+ch+b);
};
function myfun(ch)
{
	var a=document.getElementById("txt1").value;
	var b=document.getElementById("txt2").value;
	var arr=a+" "+ ch+" "+ b;			
			
    var table = document.getElementById("dataTable");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
	//First Cell........
	var firstCell = row.insertCell(0);
	firstCell.innerHTML = rowCount;
	//Second Cell.......
	var secondCell = row.insertCell(1);
    secondCell.innerHTML=arr;
	//Third Cell........
	var thirdCell = row.insertCell(2);
	var arr1=arr.split(" ");
	var res=eval(arr1[0]+arr1[1]+arr1[2]);
	thirdCell.innerHTML=res;
	document.getElementById("txt1").value="";
	document.getElementById("txt2").value="";
}