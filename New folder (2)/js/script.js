 var allData = [];
 document.getElementById("myform").addEventListener("submit", function(e) {
      e.preventDefault(); 

      
      var name = this.elements["name"].value;
      var email = this.elements["email"].value;

     allData.push({ Name: name, Email: email });
      console.table(allData);
     
      document.getElementById("output").innerHTML =
      "Name: " + name + "<br>" +
      "Email: " + email;

 });