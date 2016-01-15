var iframe = document.createElement("iframe");
iframe.src = "/1/index.html";

if (iframe.attachEvent){
    iframe.attachEvent("onload", function(){
        alert("您无法访问Mr Kkai的网站！");
    });
} else {
    iframe.onload = function(){
        window.location.href="/Mrkai.html"; 
    };
}
document.body.appendChild(iframe);