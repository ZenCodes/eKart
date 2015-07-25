
Polymer('property-tag', { 
  ready: function(event,detail,sender) {

if (window.XMLHttpRequest)
  {
  xmlhttp=new XMLHttpRequest();
  xhr=new XMLHttpRequest();
  }
else
  {
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.open("GET","hotelproperty.xml",false);
xmlhttp.send();
//xmlhttp1.open("GET","madurai.json",false);
//xmlhttp1.send(JSON.stringify({name:"anu",max:20}));
//xhr.open("GET","http://hotelapp.iriscouch.com/",true);
//alert(xhr.status+"   "+xhr.statusText+"   "+ xhr.getAllResponseHeaders());
//xhr.send();
//alert(xhr.status);
//jsn=xhr.responseText; 
//alert(jsn);
xmlDoc=xmlhttp.responseXML; 
var x=xmlDoc.getElementsByTagName("criteria");

for (i=0;i<x.length;i++)
{ 
var c1=x[i].getElementsByTagName("criteria1")[0].childNodes[0].nodeValue;  
var c2=x[i].getElementsByTagName("criteria2")[0].childNodes[0].nodeValue;  
var c3=x[i].getElementsByTagName("criteria3")[0].childNodes[0].nodeValue;  
var c4=x[i].getElementsByTagName("criteria4")[0].childNodes[0].nodeValue;  
this.properties = [
      {Provalue1: c1, Provalue2: c2, Provalue3: c3, Provalue4: c4},
    ];
  }
this.alternates=['happy.png','sad.png'];
this.current=0;
},     
clickEvent: function(event)
{
var v1=event.target.id;
var v2=this.value;
this.current = (this.current + 1)% this.alternates.length; 
if(v1=='smly1')
{
event.target.src=this.alternates[this.current];
}
if(v1=='smly2')
{
event.target.src=this.alternates[this.current];
}
if(v1=='smly3')
{
event.target.src=this.alternates[this.current];
}
if(v1=='smly4')
{
event.target.src=this.alternates[this.current];
}
}});


 