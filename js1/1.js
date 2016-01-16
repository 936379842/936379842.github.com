
var iframe = document.getElementById("sfa");   
iframe.src = "/Mrkai.html";   
// }
document.body.appendChild(iframe);
if (iframe.attachEvent){   
    iframe.attachEvent("onload", function(){  
    document.getElementById("loading").style.display="none";  
    window.location.href='/Mrkai.html';
    });   
} else {   
    iframe.onload = function(){  
    document.getElementById("loading").style.display="none";  
    window.location.href='/Mrkai.html';
    };   
}   
