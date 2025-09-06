document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Thank you " + document.getElementById("name").value + "! Your message has been sent.");
      document.getElementById("contactForm").reset();
    });