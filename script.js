window.addEventListener("DOMContentLoaded", function(){

    var output = document.getElementById("output");

    var input;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "sample.md", true);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            input = xhr.responseText;
            output.innerHTML = marked.parse(input);
        }
    }
    xhr.send();
});
