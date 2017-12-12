$(function() {

function wikisearch()
{
	var value=$("input").val();
	var api='https://en.wikipedia.org/w/api.php?action=opensearch&datatype=json&limit=20&search=' + value + '&callback=?';
	$.getJSON(api,function(data)
	{
		var result=[];
		for(var i=0;i<data[1].length;i++)
		{
			result.push(new add([data[1][i], data[2][i], data[3][i]]));
		}
		displaysearch(result);
	});
}

function displaysearch(arr)
{
	$(".display").empty();
	arr.forEach( function(element, index) {
		var id="list"+index;
		var string="<div id='"+id+"'><a href='"+element.url+"' target='_blank'><div><h2 style='color:#8FC3ED;'>"+element.title+"</h2><p style='color:#011627; font-size:20px; font-weight: 600;'>"+element.desc+"</p></div></a></div>";
		$(".display").append(string);
	});
}

function add(array)
{
	this.title=array[0];
	this.desc=array[1];
	this.url=array[2];
}

$("form").submit(function(e){
	e.preventDefault();
    wikisearch();
});

});