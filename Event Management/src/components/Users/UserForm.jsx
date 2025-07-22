import { useState } from "react";


function UserForm() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8080/api/v1/users',
                { username, email, password });
            setMessage(res.data);
        } catch (err) {
            setMessage(err.response?.data || 'Error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* form fields */}
            <label>Name:</label>
            <input type="text" />
            <button type="submit">Register</button>
            {message && <p>{message}</p>}
        </form>
    );
}

export default UserForm;
