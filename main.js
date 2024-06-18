// Get input element
let filterInput = document.getElementById('filterInput');

// Add eventListner for filtering contact names
filterInput.addEventListener('keyup', filterNames);

// Get the add contact button
let plusButton = document.getElementById('add-contact');

// Add eventListner to plus button 
plusButton.addEventListener('click', createNewContact);

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

function createNewContact() {
    // Hide contact name-list
    let namesList = document.querySelector('.names');
    namesList.style.display = 'none';

    // appear new div asking the contact details
    let newDiv = document.createElement('div');
    newDiv.className = 'container mt-3 p-5 bg-secondary newContact';
    newDiv.setAttribute("style", "width:75%;");

    // Create an input field for name
    let name = document.createElement('input');
    name.setAttribute("type", "text");
    name.className = 'form-control mb-4 contact-name';
    name.setAttribute("placeholder", "Name");

    // Create an input field for phoneNumber
    let phoneNumber = document.createElement('input');
    name.setAttribute("type", "text");
    phoneNumber.className = 'form-control mb-3 contact-phoneNumber';
    phoneNumber.setAttribute("placeholder", "Phone Number");

    // Create a button 
    let confirmBtn = document.createElement('button');
    confirmBtn.className = 'btn btn-primary mt-3';
    confirmBtn.textContent = 'Save';

    // Append elements to newDiv container
    newDiv.append(name, phoneNumber, confirmBtn);

    // insert newDiv in to DOM
    let searchBar = document.querySelector('.input-group');
    searchBar.after(newDiv);

    // after clicking save, add contactName to contact list
    confirmBtn.addEventListener('click', addContactName);
}

function addContactName() {
    let name = document.querySelector('.contact-name').value;  //get input name
    name = name[0].toUpperCase() + name.substring(1);

    const letterList = document.getElementsByClassName('letter'); // Get letters list 
    let letterExists = false;

    // Loop through the letterList array
    Array.from(letterList).forEach(function (letter) {
        // check if letter bar exists
        if (name[0] === letter.textContent) {
            letterExists = true;
            
            // create new li element
            let li = document.createElement('li');
            li.className = 'list-group-item item';
            li.textContent = name;

            // Add to the contact-List
            letter.after(li);

            // Update UI
            updateUI();
        }
    });

    // If letter does not exists in the letterList, 
    if (!letterExists) {
        // Create a new letter bar
        let newLetterBar = document.createElement('li');
        newLetterBar.className = 'list-group-item list-group-item-action active letter';
        newLetterBar.textContent = name[0];

         // create new li element for the contact
        let newContact = document.createElement('li');
        newContact.className = 'list-group-item item';
        newContact.textContent = name;

        // Add the new letter bar and contact to the correct position
        let namesList = document.querySelector('.names');
        namesList.append(newLetterBar);
        newLetterBar.after(newContact);

        // Update UI
        updateUI();
    }
};

function updateUI() {
    // Hide new contact box
    let newContactBox = document.querySelector('.newContact');
    newContactBox.style.display = 'none';

    // Display contact name-list
    let namesList = document.querySelector('.names');
    namesList.style.display = 'block';
}
