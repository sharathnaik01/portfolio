<script>
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the values from the form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Display an alert with the contact information
    var contactInfo = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
    alert("Contact Information:\n" + contactInfo);

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});
</script>