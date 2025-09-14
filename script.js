// Get Elements
const showImageBtn = document.getElementById("showImageBtn");
const showInfoBtn = document.getElementById("showInfoBtn");
const showFormBtn = document.getElementById("showFormBtn");

const imageContainer = document.getElementById("imageContainer");
const infoText = document.getElementById("infoText");
const userForm = document.getElementById("userForm");

// Show / Hide Image
showImageBtn.addEventListener("click", function () {
    if (imageContainer.classList.contains("hidden")) {
        imageContainer.innerHTML = `<img src="https://www.shutterstock.com/image-photo/indian-college-boy-showing-diary-600nw-2094035788.jpg" alt="My Image">`;
        imageContainer.classList.remove("hidden");
    } else {
        imageContainer.classList.add("hidden");
        imageContainer.innerHTML = "";
    }
});

// Show / Hide Info
showInfoBtn.addEventListener("click", function () {
    infoText.classList.toggle("hidden");
});

// Show / Hide Form
showFormBtn.addEventListener("click", function () {
    userForm.classList.toggle("hidden");
});

// Form Validation
userForm.addEventListener("submit", function (event) {
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
    userForm.reset();
});
