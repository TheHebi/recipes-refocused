async function loginFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#loginUsername').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });

        if(response.ok) {
            console.log('success');
            document.location.replace('/');
        } else {
            console.log('failed');
            alert(response.statusText);
        }
    }
}

document.querySelector('#loginForm').addEventListener('submit', loginFormHandler);