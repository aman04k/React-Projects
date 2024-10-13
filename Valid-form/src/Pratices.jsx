import React, { useState } from 'react';

function Pratices() {
  const [input, setInput] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    image: null, // Store image as a file object
  });

  const [store, setStore] = useState([]);

  // Handle input changes
  function handleChange(e) {
    const { name, value, files } = e.target;
    if (name === 'image') {
      // Handle file input
      setInput({ ...input, image: files[0] });
    } else {
      setInput({ ...input, [name]: value });
    }
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault();
    setStore([...store, input]); // Store the input data
    setInput({ name: '', age: '', email: '', password: '', image: null }); // Reset form fields
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name: 
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </label>
        <br /><br />

        <label>
          Age: 
          <input
            type="number"
            name="age"
            value={input.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />
        </label>
        <br /><br />

        <label>
          Email: 
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </label>
        <br /><br />

        <label>
          Password: 
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </label>
        <br /><br />

        <label>
          Image: 
          <input type="file" name="image" onChange={handleChange} />
        </label>
        <br /><br />

        <button type="submit">Show Data</button>
      </form>

      {store.length > 0 && (
        <table border="1" style={{ marginTop: '30px' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Password</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {store.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.age}</td>
                <td>{entry.email}</td>
                <td>{entry.password}</td>
                <td>
                  {entry.image && (
                    <img src={URL.createObjectURL(entry.image)} width="60px" height="60px"  />
                    
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

export default Pratices;
