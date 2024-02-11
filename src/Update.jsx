import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './UserReducer';

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const existingUser = users.find((user) => user.id === parseInt(id, 10));

  const { name: initialName, email: initialEmail, age: initialAge, gender: initialGender, mobile: initialMobile, position: initialPosition, joiningDate: initialJoiningDate } = existingUser;

  const [name, setName] = useState(initialName);
  const [email, setEmail] = useState(initialEmail);
  const [age, setAge] = useState(initialAge);
  const [gender, setGender] = useState(initialGender);
  const [mobile, setMobile] = useState(initialMobile);
  const [position, setPosition] = useState(initialPosition);
  const [joiningDate, setJoiningDate] = useState(initialJoiningDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the updateUser action to update the user in the Redux store
    dispatch(updateUser({
      id: parseInt(id, 10),
      name: name,
      email: email,
      age: age,
      gender: gender,
      mobile: mobile,
      position: position,
      joiningDate: joiningDate
    }));
    window.alert("Employee updated successfully!");
    navigate('/employee-list');
  };

  return (
    <div className="d-flex w-100 justify-content-center align-items-center">
      <div className="w-50 border bg-white text-black p-5">
        <h3>Update Employee</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='age'>Age:</label>
            <input
              type="text"
              name="age"
              className="form-control"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='gender'>Gender:</label>
            <select
              name="gender"
              className="form-control"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label htmlFor='mobile'>Mobile:</label>
            <input
              type="text"
              name="mobile"
              className="form-control"
              placeholder="Enter mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='position'>Position:</label>
            <input
              type="text"
              name="position"
              className="form-control"
              placeholder="Enter position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='joiningDate'>Joining Date:</label>
            <input
              type="date"
              name="joiningDate"
              className="form-control"
              value={joiningDate}
              onChange={(e) => setJoiningDate(e.target.value)}
            />
          </div><br />
          <button type="submit" className="btn btn-info">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;
