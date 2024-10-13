import React, { useState } from 'react';

const LoginForm = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [data, setData] = useState([]); // Store submitted data

  // Handle input changes
  function changeHandle(e) {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload on submit
    setData([...data, input]); // Add new entry to data list
    setInput({ name: '', email: '', password: '' }); // Reset form fields
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
            onChange={changeHandle}
          />
        </label>
        <br /><br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={input.email}
            onChange={changeHandle}
          />
        </label>
        <br /><br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={changeHandle}
          />
        </label>
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      {/* Display data in a table */}
      {data.length > 0 && (
        <table border="1" style={{ marginTop: '20px' }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LoginForm;







// 2nd mathod with validation

// import React, { useState } from 'react';

// const LoginForm = () => {
//   const [input, setInput] = useState({
//     name: '',
//     email: '',
//     password: '',
//     image: '',
//   });

//   const [data, setData] = useState([]); // Store submitted data
//   const [errors, setErrors] = useState({}); // Track form errors

//   // Handle input changes
//   function changeHandle(e) {
//     const { name, value, files } = e.target;
//     if (name === 'image') {
//       const file = files[0];
//       setInput({ ...input, [name]: URL.createObjectURL(file) });
//     } else {
//       setInput({ ...input, [name]: value });
//     }
//   }

//   // Validate the form
//   function validate() {
//     const errors = {};
//     if (!input.name) errors.name = 'Name is required';
//     if (!input.email) errors.email = 'Email is required';
//     else if (!/\S+@\S+\.\S+/.test(input.email)) errors.email = 'Email is invalid';
//     if (!input.password) errors.password = 'Password is required';
//     if (!input.image) errors.image = 'Image is required';
//     setErrors(errors);
//     return Object.keys(errors).length === 0;
//   }

//   // Handle form submission
//   function handleSubmit(e) {
//     e.preventDefault(); // Prevent page reload on submit
//     if (!validate()) return; // Check if the form is valid

//     setData([...data, input]); // Add new entry to the data list
//     setInput({ name: '', email: '', password: '', image: '' }); // Reset form fields
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
//           {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
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
//           {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
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
//           {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
//         </label>
//         <br /><br />

//         <label>
//           Upload Image:
//           <input
//             type="file"
//             name="image"
//             accept="image/*"
//             onChange={changeHandle}
//           />
//           {errors.image && <p style={{ color: 'red' }}>{errors.image}</p>}
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
//               <th>Image</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((entry, index) => (
//               <tr key={index}>
//                 <td>{entry.name}</td>
//                 <td>{entry.email}</td>
//                 <td>{entry.password}</td>
//                 <td>
//                   <img
//                     src={entry.image}
//                     alt="Uploaded"
//                     style={{ width: '100px', height: '100px' }}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default LoginForm;

