let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

   // alert("form submitted");

   let user = document.querySelector("#user");
   let pass = document.querySelector("#pass");
//    console.dir(inp);
   console.dir(user.value); 
   console.dir(pass.value); 
  
    alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});