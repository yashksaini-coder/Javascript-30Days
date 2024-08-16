// Task 7: Save data to sessionStorage on form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const savedData = document.getElementById('savedData');
    const deleteButton = document.getElementById('deleteData');

    // Retrieve and display data on page load
    const savedName = sessionStorage.getItem('name');
    const savedEmail = sessionStorage.getItem('email');

    if (savedName && savedEmail) {
        savedData.innerHTML = `<p>Name: ${savedName}</p><p>Email: ${savedEmail}</p>`;
    } else {
        savedData.innerHTML = '<p>No data saved yet.</p>';
    }

    // Save data to sessionStorage on form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = form.name.value;
        const email = form.email.value;

        sessionStorage.setItem('name', name);
        sessionStorage.setItem('email', email);

        savedData.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p>`;
    });

    // Task 8: Delete data from sessionStorage on button click
    deleteButton.addEventListener('click', () => {
        console.log('Before removal:', JSON.stringify(sessionStorage, null, 2));
        sessionStorage.removeItem('name');
        sessionStorage.removeItem('email');
        console.log('After removal:', JSON.stringify(sessionStorage, null, 2));

        savedData.innerHTML = '<p>Data deleted.</p>';
    });
});