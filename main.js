// Get input element
let filterInput = document.getElementById('filterInput');

// Add eventListner for filtering contact names
filterInput.addEventListener('keyup', filterNames);

// Get the add contact button
let plusButton = document.getElementById('add-contact');

// Adding New contact  
plusButton.addEventListener('click',  addContact);

function filterNames(e) {
    // Get the entered value from filterInput
    let searchName = e.target.value.toLowerCase();

    // Get the names
    let namesList = document.getElementsByTagName('li');

    Array.from(namesList).forEach(function (listItem) {
        //Get the text Content of each li
        let itemText = listItem.textContent;

        if (itemText.toLowerCase().indexOf(searchName) === 0) {
            listItem.style.display = 'block';
        } else {
            listItem.style.display = 'none';
        }
    })
}

function addContact() {
    console.log('new contact added!');

    // HIde name list
    // appear new div asking the contact details
    // after clicking ok, add it to contact list 
    // display contact list

}