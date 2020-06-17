var t = 1;
var b = 2;
var i = 0;
let name = new Array;

const MAX_NUM=9;

name = ['Shaki Waterfall, Armenia',
        'Ngorogoro Crater, Tanzania',
        'Gran Salar de Uyuni, Bolivia',
        'Jeita Grotto, Nahr al-Kalb Valley, Lebanon',
        'Geirangerfjord and Naeroyfjord, Norway',
        'Mount Roraima, Guyana/Brazil/Venezuela',
        'Verdon Gorge, Provence, France',
        'Jiuzhaigou National Park, Sichuan Province, China'];

function firstImage(){
    document.getElementById("frame").innerHTML= (`<img class="topS" src='photos/photo${t}.jpg'>`); 
    document.querySelector("section[id='text']").innerHTML="<div id='imageName'>"+name[i]+"</div>";
    setTimeout('slideFunction()',2000);
}

function slideFunction(){
    document.getElementById("frame").innerHTML=(`<img class="bottom" src='photos/photo${b}.jpg'><img class="top" src='photos/photo${t}.jpg'>`);
    document.querySelector("section[id='text']").innerHTML="<div id='imageName'>"+name[i]+"</div>";
        
    i++;

    if(i==MAX_NUM-1)
    {
        i=0;
    }


    setTimeout('changeImage()',1500);
}

function changeImage(){
    document.getElementById("frame").innerHTML=""
    document.getElementById("frame").innerHTML=(`<img class="bottomS" src='photos/photo${t}.jpg'><img class="topS" src='photos/photo${b}.jpg'>`);
    document.querySelector("section[id='text']").innerHTML="<div id='imageName'>"+name[i]+"</div>";
    //document.querySelector("section[id='text']").innerHTML="<h3>"+name[i]+"</h3>";
        
    t++;
    b++;

    if(b==MAX_NUM)
    {
        b=1;
    }

    if(t==MAX_NUM)
    {
        t=1;
    }

    setTimeout('slideFunction()',2000);
}