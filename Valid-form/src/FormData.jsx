import React, { useState } from 'react';

function FormData() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    file: null,
  });

  const [users, setUsers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({
        ...formData,
        file: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUsers([...users, formData]); 
    setIsSubmitted(true); 

    setFormData({
      username: '',
      password: '',
      email: '',
      file: null,
    });
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br /><br />

        <label htmlFor="file">Upload Image</label>
        <input
          type="file"
          name="file"
          id="file"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      
      {isSubmitted && (
        <table border="1" style={{ marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>Email</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.email}</td>
                <td>
                  {user.file && (
                    <img
                      src={URL.createObjectURL(user.file)}
                      alt="Uploaded"
                      width="100"
                      height="100"
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default FormData;
