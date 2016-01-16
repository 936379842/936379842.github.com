var iframe = document.getElementById("sfa");   
iframe.src = "/Mrkai.html";
document.body.appendChild(iframe);   
 document.getElementById("loading").style.display="none";
// }
 document.getElementById("loading").style.display="none";  
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
