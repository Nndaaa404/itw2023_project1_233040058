const scriptURL = "https://script.google.com/macros/s/AKfycbzBOAKCwjsFCwov9XyCqY2wDkxwu6utgDsUhQuA_OjGTOpseWVqmxRIO-CiZjyRVvOg/exec";
const form = document.forms["portfolio-contact-form"];
        const alertBox = document.getElementById("myAlert");
        const alertMessage = document.getElementById("alertMessage");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            fetch(scriptURL, { method: "POST", body: new FormData(form) })
                .then((response) => {
                    form.reset();
                    displayAlert("Success! Form submitted successfully.", "success");
                    console.log("Success!", response);
                })
                .catch((error) => {
                    displayAlert("Error submitting form. Please try again.", "error");
                    console.error("Error!", error.message);
                });
        });

        function displayAlert(message, type) {
            alertMessage.textContent = message;
            alertBox.style.display = "block";
            alertBox.className = `alert ${type}`;
        }

        function closeAlert() {
            alertBox.style.display = "none";
        }