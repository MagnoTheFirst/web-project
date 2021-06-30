var xml = new XMLHttpRequest();
xml.open("GET", "https://tonyspizzafactory.herokuapp.com/swagger#/orders");
xml.send();
xml.onload = function()
{

    var data = JSON.parse(xml.responseText);
    document.getElementById("text").innerHTML = data[0].title;
    for(var i = 0; i < data.length; i++)
    {
        //alert(data[i].title);
        var list = document.createElement('ul');
        document.getElementById('text').appendChild(list);
        var tag = document.createElement('li');
        list.appendChild(tag);
        tag.innerHTML += data[i].title;
    }
};