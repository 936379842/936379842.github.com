var iframe = document.createElement("iframe");
iframe.src = "http://936379842.github.io/Mrkai.html";

if (iframe.attachEvent){
    iframe.attachEvent("onload", function(){
        alert("您无法访问Mr Kkai的网站！");
    });
} else {
    iframe.onload = function(){
        window.location.href="http://936379842.github.io/Mrkai.html"; 
    };
}
document.body.appendChild(iframe);
