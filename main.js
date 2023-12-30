const baseURL =  " https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {

    var xhr = new XMLHttpRequest();
    var data;
    
    xhr.open("GET", baseURL + type + "/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           cb(JSON.parse(this.responseText));
        }
    }; 
};

function getTableHeaders(obj) {
  var tableHeaders = [];

  Object.keys(obj).forEach(function(key) {
    tableHeaders.push(`<td>${key}</td>`);
});
return `<tr>${tableHeaders}</tr>`;

};

function writeToDocument(type) {
  var tableRows = [];
  var el = document.getElementById("data");
      el.innerHTML = "";

     getData(type, function(data){
            data = data.results;

           var tableHeaders = getTableHeaders(data[0]);

     data.forEach(function(item) {
             var dataRow = [];

             Object.keys(item).forEach(function(key) {
              var rowData = item[key].toString();
              var truncatedData = rowData.substring(0, 15);
              dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`);
       });
            el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
     });
          
  };


   /* (Codes previously used for demonstration purposes) */

 /* 
   
     function printDataToConsole(data) {console.log(data);};
     getData(printDataToConsole);
 
xhr.onreadystatechange = function(){if (this.readyState == 4 && this.status == 200){data = JSON.parse(this.responseText);}};
      
      document.getElementById('data').innerHTML = this.responseText;  

       console.log(typeof(this.responseText));

        console.log(typeof(JSON.parse(this.responseText)));

       console.log(JSON.parse(this.responseText));

       data = this.responseText;

       console.log(data); 

       function setData(jsonData) { data = jsonData; };

        setTimeout(function() { console.log(data);  } , 500);   */