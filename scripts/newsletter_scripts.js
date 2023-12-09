function validate(){
    const form = document.getElementById('form');
    const email = document.getElementById('email').value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    //If the text entered matches the conditions of the pattern:
    if(email.match(pattern)){
        
        //Display the popup to the user:
        alert('Success! Your email has been validated.')

    //If the text entered does not match the pattern:
    } else [
        
        //Display the popup to the user:
        alert('Error, the email you entered is invalid.')
    ]

}

