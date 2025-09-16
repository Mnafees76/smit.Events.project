  const imgDiv = document.getElementById("imgdiv");
    const img = document.getElementById("img");
    let isVisible = false; // state track karne ke liye

    imgDiv.addEventListener("click", function () {
      if (isVisible === false) {
        img.style.display = "block"; // show image
        isVisible = true;
      } else {
        img.style.display = "none"; // hide image
        isVisible = false;
      }
    });
     const about = document.getElementById("about");
    const details = document.getElementById("details");
    let shoowdetal = false;
    about.addEventListener("click",function(){
        if(shoowdetal === false){
            details.style.display="block";
            shoowdetal = true;
        }
        else{
           details.style.display="none";
             shoowdetal = false;
        }

    });
      const skills = document.getElementById("skills");
    const list = document.getElementById("list");
    let showlist = false;
   skills.addEventListener("click",function(){
        if( showlist === false){
           list.style.display="block";
            showlist = true;
        }
        else{
          list.style.display="none";
             showlist = false;
        }

    });
   user.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!email || !mobile || !address) {
        alert("⚠️ Please fill all fields!");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("⚠️ Please enter a valid email!");
        return;
    }

    if (mobile.length < 10) {
        alert("⚠️ Mobile number must be at least 10 digits!");
        return;
    }

    alert("✅ Your form has been submitted successfully!");
    user.reset();
});
