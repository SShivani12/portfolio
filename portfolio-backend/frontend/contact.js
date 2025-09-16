document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", async function(e) {
      e.preventDefault();

      const formData = {
        name: form.querySelector('input[name="name"]').value.trim(),
        email: form.querySelector('input[name="email"]').value.trim(),
        message: form.querySelector('textarea[name="message"]').value.trim()
      };

      try {
        const response = await fetch("http://127.0.0.1:5000/send-message", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (response.ok) {
          alert("✅ Message sent successfully!");
          form.reset();
        } else {
          alert("❌ Error: " + data.error);
        }
      } catch (error) {
        console.error("Error:", error);
        alert("⚠️ Failed to send message. Check your backend.");
      }
    });
  }
});
