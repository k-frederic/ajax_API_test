function getData(cb) {

    var xhr = new XMLHttpRequest();
    var data;
    
    xhr.open("GET", " https://ci-swapi.herokuapp.com/api/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           cb(JSON.parse(this.responseText));
        }
    }; 
};

function printDataToConsole(data) {
    console.log(data);
};

getData(printDataToConsole);
 

   /* (Codes previously used for demonstration purposes) */

 /* 
xhr.onreadystatechange = function(){if (this.readyState == 4 && this.status == 200){data = JSON.parse(this.responseText);}};
      
      document.getElementById('data').innerHTML = this.responseText;  

       console.log(typeof(this.responseText));

        console.log(typeof(JSON.parse(this.responseText)));

       console.log(JSON.parse(this.responseText));

       data = this.responseText;

       console.log(data); 

       function setData(jsonData) { data = jsonData; };

        setTimeout(function() { console.log(data);  } , 500);   */