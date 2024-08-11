// Task 3: Create a simple form that saves user input (e.g., name and email) to localStorage when submitted. Retrieve and display the saved data on page load.

document.addEventListener('DOMContentLoaded', () => {
    function displaySavedData() {
        const savedData = JSON.parse(localStorage.getItem('userData'));
        const savedDataDiv = document.getElementById('savedData');
        if (savedData) {
            savedDataDiv.innerHTML = `<p>Name: ${savedData.name}</p><p>Email: ${savedData.email}</p>`;
        } else {
            savedDataDiv.innerHTML = '<p>No data saved.</p>';
        }
    }

    displaySavedData();

    document.getElementById('userForm').addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        const userData = { name, email };
        localStorage.setItem('userData', JSON.stringify(userData));

        displaySavedData();
    });
// Task 4: Write a script to remove an item from localStorage. Log the localStorage content before and after removal.

    function removeItemFromLocalStorage(key) {
        console.log('Before removal:');
        console.log(localStorage.getItem(key));

        localStorage.removeItem(key);

        console.log('After removal:');
        console.log(localStorage.getItem(key));
    }

    document.getElementById('removeButton').addEventListener('click', () => {
        removeItemFromLocalStorage('userData');
        displaySavedData(); // Update the displayed data after removal
    });
});

