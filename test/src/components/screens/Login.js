import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [plantName, setPlantName] = useState('');
    const [variantName, setVariantName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login logic here
        console.log('Logging in with:', username, password, plantName, variantName);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="uname">Username:</label>
                <input type="text" id="uname" name="username" value={ username } onChange={ (e) => setUsername(e.target.value) } required /><br />
                <label htmlFor="pwd">Password:</label>
                <input type="password" id="pwd" name="password" value={ password } onChange={ (e) => setPassword(e.target.value) } required /><br />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
