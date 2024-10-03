/**
 * Question 1
 */
const question1 = () => {
  const sidebarButton = document.getElementById('sidebar-button'); 
  const sidebar = document.getElementById('sidebar');

  // Listen for a "click" event on the sidebar's button.
  //
  // Browsers emit lots of different kinds of events, for
  // a full list see the following link:
  //   https://www.javatpoint.com/javascript-events
  //
  // addEventListener will then call the function we provide
  // whenever the button is clicked.
  sidebarButton.addEventListener("click", (event) => {
    
    // Check if the sidebar is currently open by checking if it has a class like 'open'; 
    // returns true if the class "opened" is there
    const sidebarIsOpen = sidebar.classList.contains("opened");

    if (sidebarIsOpen) {
      // Close the sidebar
      sidebar.classList.remove("opened");

    } else {
      // Open the sidebar
      sidebar.classList.add("opened");  //add class "opened"  to make it open
    }
  });
};

/**
 * Question 2
 */
const question2 = () => {
  const taskName = document.getElementById('task-name');
  const addTodoButton = document.getElementById('add-todo');
  const todoListUl = document.getElementById('todo-list');

  addTodoButton.addEventListener('click', () => {
    const newItemText = taskName.value; // Get the text from the input field
  
    if (newItemText.trim() !== '') { // Check if the input is not empty
      const newLi = document.createElement('li'); // Create a new <li> element
      newLi.textContent = newItemText; // Set the text content of the new <li>
      
      todoListUl.appendChild(newLi); // Append the new <li> to the <ul>
      
      taskName.value = ''; // Clear the input field after adding the item
    } else {
      alert('Please enter a valid item'); // Alert if the input is empty
    }

  });

};

/**
 * Question 3
 */
const question3 = () => {
  const firstNameInput = document.getElementById('first-name');
  const lastNameInput = document.getElementById('last-name');
  const message = document.getElementById('message');

  // using this function is reccomended but not necessary
  const updateMessage = () => {
    const firstName = firstNameInput.value; // Get value of first name input
    const lastName = lastNameInput.value;   // Get value of last name input
    
    // Combine first and last names and update the message
    message.textContent = `Hello, ${firstName} ${lastName}!`;

  };

  // Add event listeners to the inputs to update the message when typing
  firstNameInput.addEventListener("input", updateMessage);
  lastNameInput.addEventListener("input", updateMessage);

};

// question3(); // Call the function to set everything up

/**
 * We need to wait for the HTML file to fully load before running
 * our JavaScript, otherwise it won't be able to operate on the HTML
 * since it hasn't loaded.
 */
document.addEventListener("DOMContentLoaded", (event) => {
  // We wrap each question in a try-catch so that way even if
  // your code for one question errors, the other ones
  // will work.
  try {
    question1();
  } catch (e) {
    console.error(e);
  }

  try {
    question2();
  } catch (e) {
    console.error(e);
  }

  try {
    question3();
  } catch (e) {
    console.error(e);
  }
});
