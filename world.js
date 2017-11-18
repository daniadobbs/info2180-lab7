"use strict";

window.onload=function(){
    var lookupbtn= document.getElementById("lookup");
    var httpRequest=new XMLHttpRequest();
    lookupbtn.onclick=makeRequest;
    
    
    function makeRequest(){

        if (httpRequest){
            httpRequest.onreadystatechange= getContent;
        }
        
    }//end of makeRequest
    
    function getContent(){
        if(httpRequest.readyState=== XMLHttpRequest.DONE){
            if(httpRequest.status===200){
                document.getElementById('result').innerHTML= httpRequest.responseText;
            }
            else{
                alert("Cannot make request");
            }
        httpRequest.open("GET", "world.php", true);
        httpRequest.send();
        }
    }//end of getContent
    
        
    
};//end of window.onload