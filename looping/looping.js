// An array of contacts
const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];

//select the paragraph, input and the button
const para = document.querySelector("p");
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener('click', function () {
    //on search, take the input value and lower case 
    let searchName = input.value.toLowerCase();
    input.value = '';
    input.focus();
    for (let i = 0; i < contacts.length; i++) {
        //split contacts array by colon
        let splitContact = contacts[i].split(':');
        console.log(splitContact)
        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
            break;
        } else if (i === contacts.length - 1) {
            para.textContent = 'Contact not found';
        }
    }
});