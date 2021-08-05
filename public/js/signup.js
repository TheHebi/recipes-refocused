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
            alert(response.statusText);
        }
    }
}

document.querySelector('#signupForm').addEventListener('submit', signupFormHandler);