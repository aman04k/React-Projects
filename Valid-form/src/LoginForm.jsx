// import React, { useState } from 'react';

// const LoginForm = () => {
//   const [input, setInput] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const [data, setData] = useState([]); // Store submitted data

//   // Handle input changes
//   function changeHandle(e) {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   }

//   // Handle form submission
//   function handleSubmit(e) {
//     e.preventDefault(); // Prevent page reload on submit
//     setData([...data, input]); // Add new entry to data list
//     setInput({ name: '', email: '', password: '' }); // Reset form fields
//   }

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input
//             type="text"
//             name="name"
//             value={input.name}
//             onChange={changeHandle}
//           />
//         </label>
//         <br /><br />
//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={input.email}
//             onChange={changeHandle}
//           />
//         </label>
//         <br /><br />
//         <label>
//           Password:
//           <input
//             type="password"
//             name="password"
//             value={input.password}
//             onChange={changeHandle}
//           />
//         </label>
//         <br /><br />
//         <button type="submit">Submit</button>
//       </form>

//       {/* Display data in a table */}
//       {data.length > 0 && (
//         <table border="1" style={{ marginTop: '20px' }}>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Password</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((entry, index) => (
//               <tr key={index}>
//                 <td>{entry.name}</td>
//                 <td>{entry.email}</td>
//                 <td>{entry.password}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default LoginForm;







// 2nd mathod with validation

import React, { useState } from 'react';
import validator from 'validator'; // Correct import placement

const LoginForm = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    image: '',
  });

  const [data, setData] = useState([]); // Store submitted data
  const [errors, setErrors] = useState({}); // Track errors

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setInput({
      ...input,
      [name]: name === 'image' ? URL.createObjectURL(files[0]) : value,
    });
  };

  // Validate inputs
  const validate = () => {
    const newErrors = {};
    if (!input.name) newErrors.name = 'Name is required';
    if (!input.email) newErrors.email = 'Email is required';
    else if (!validator.isEmail(input.email)) newErrors.email = 'Invalid email';
    if (!input.password) newErrors.password = 'Password is required';
    if (!input.image) newErrors.image = 'Image is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return; // Stop submission if validation fails
    setData([...data, input]); // Add the input data to the table
    setInput({ name: '', email: '', password: '', image: '' }); // Reset the form
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={input.name} onChange={handleChange} />
          {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        </label>
        <br /><br />

        <label>
          Email:
          <input type="email" name="email" value={input.email} onChange={handleChange} />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </label>
        <br /><br />

        <label>
          Password:
          <input type="password" name="password" value={input.password} onChange={handleChange} />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </label>
        <br /><br />

        <label>
          Upload Image:
          <input type="file" name="image" accept="image/*" onChange={handleChange} />
          {errors.image && <p style={{ color: 'red' }}>{errors.image}</p>}
        </label>
        <br /><br />

        <button type="submit">Submit</button>
      </form>

      {/* Render data table if any data is submitted */}
      {data.length > 0 && (
        <table border="1" style={{ marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.password}</td>
                <td>
                  <img src={entry.image} alt="Uploaded" width="100" height="100" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LoginForm;



