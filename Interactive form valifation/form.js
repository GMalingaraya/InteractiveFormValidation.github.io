document.getElementById('registration').addEventListener('submit', function(event) {
    event.preventDefault();

    var nameInput=document.getElementById('name').value;
    if(nameInput===''){
        display('Name is Required');
        return;
    }

    var emailInput=document.getElementById('email').value;
    if(emailInput==='') {
        display('email is required');
        return;
    }else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput)) {
        display('Please enter a valid email address.');
        return;
    }

    var passwordInput=document.getElementById('password').value;
    if(passwordInput=='') {
        display("password is required");
        return;
    } else if(passwordInput.length < 8) {
        display('password must be atleast 8 characters long');
        return;
    }
    display("Form Submited successfully");

    function display(message) {
        var result=document.getElementById('result');
        result.textContent=message;

  

    }
    
});


