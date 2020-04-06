const myContacts = [{
        id: 1,
        name: 'Alpha Avalon',
        phone: '+1 111 101010',
        email: 'alpha@avalon.org',
        favourite: true,
        rating: 9,
        tags: ['popular', 'cool']
    },

    {
        id: 2,
        name: 'Betty Brave',
        phone: '+62 812 242424',
        email: 'betty@braverian.com'
    },

    {
        id: 3,
        name: 'Gamma Gacurio',
        phone: '+63 813 363636',
        email: 'gamma@gacurio.dev'
    }
]

// Create Contact Console with method show contact add contact , filter contact and delete contact

// Show Contact
const showContacts = contacts => {
    for (let index = 0; index < contacts.length; index++) {
        const contact = contacts[index]
        console.log(`[${contact.id}] ${contact.name} (${contact.phone}) <${contact.email}>`)
    }
}
showContacts(myContacts);

// Add Contact
const newContact = [{
    id: 4,
    name: "Evan Charles",
    phone: "+6289 5627 436758",
    email: "evan.chrls@yahoo.com"
}]
const addContact = myContacts.concat(newContact);
console.log(addContact);

// Penggunaan function Push
    // const addContact = [{
    //     id: 4,
    //     name: "Evan Charles",
    //     phone: "+6289 5627 436758",
    //     email: "evan.chrls@yahoo.com"
    // }]
    // myContacts.push(addContact);
    // console.log(myContacts);


// Filter Contact
const filterContact = addContact.filter((item, index, array) => {
    if (item.name == "Evan Charles")
        return true;
    return false;
})
console.log(filterContact);


// Delete Contact
addContact.pop();
console.log(addContact);