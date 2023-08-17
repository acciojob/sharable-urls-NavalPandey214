
 // Get references to the form, input fields, and URL element
    const form = document.getElementById("myForm");
    const nameInput = document.getElementById("name"); 
    const yearInput = document.getElementById("year");
    const urlElement = document.getElementById("url");

    // Add event listener to the form submit event
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form submission

      // Get the values from the input fields
      const name = nameInput.value;
      const year = yearInput.value;

      // Construct the URL query string
      const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;

      // Update the URL element with the generated URL
      urlElement.textContent = `https://localhost:8080/${queryString}`;
    });