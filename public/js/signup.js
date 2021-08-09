async function signupFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#signupEmail').value.trim();
    const username = document.querySelector('#signupUsername').value.trim();
    const password = document.querySelector('#signupPassword').value.trim();

    if (email && username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                email,
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok) {
            console.log('success');
            document.location.replace('/login');
        } else {
            console.log('failed');
            responseJSON = await response.json()
            console.log(responseJSON.errors)
            if (responseJSON.errors[0].message === 'Validation len on password failed') {
                alert('Password must be more than 8 characters!');
            } else if (responseJSON.errors[0].message === 'users.email must be unique') {
                alert('That email is taken!');
            };
        };
    };
};

document.querySelector('#signupForm').addEventListener('submit', signupFormHandler);