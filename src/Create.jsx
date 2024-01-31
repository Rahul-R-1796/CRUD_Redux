import React, { useState } from "react";
import { addUser } from './UserReducer';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [mobile, setMobile] = useState("");
  const [position, setPosition] = useState("");
  const [joiningDate, setJoiningDate] = useState("");

  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
    dispatch(addUser({
      id: newUserId,
      name,
      email,
      age,
      gender,
      mobile,
      position,
      joiningDate
    }));
    // Reset form fields
    setName("");
    setEmail("");
    setAge("");
    setGender("");
    setMobile("");
    setPosition("");
    setJoiningDate("");
    // Navigate back to home
    window.alert("Employee created successfully!");
    navigate('/employee-list');
  };

  return (
    <div className="d-flex w-100 justify-content-center align-items-center">
      <div className="w-50 border bg-white text-black p-5">
        <h3>Add New Employee</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type="text" name="name" className="form-control" placeholder="Enter name"
              value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type="email" name="email" className="form-control" placeholder="Enter email"
              value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor='age'>Age:</label>
            <input type="text" name="age" className="form-control" placeholder="Enter age"
              value={age} onChange={e => setAge(e.target.value)} />
          </div>
            <div>
            <label htmlFor='gender'>Gender:</label>
            <select
                name="gender"
                className="form-control"
                value={gender}
                onChange={e => setGender(e.target.value)}
            >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            </div>
          <div>
            <label htmlFor='mobile'>Mobile:</label>
            <input type="text" name="mobile" className="form-control" placeholder="Enter mobile"
              value={mobile} onChange={e => setMobile(e.target.value)} />
          </div>
          <div>
            <label htmlFor='position'>Position:</label>
            <input type="text" name="position" className="form-control" placeholder="Enter position"
              value={position} onChange={e => setPosition(e.target.value)} />
          </div>
          <div>
            <label htmlFor='joiningDate'>Joining Date:</label>
            <input type="date" name="joiningDate" className="form-control"
              value={joiningDate} onChange={e => setJoiningDate(e.target.value)} />
          </div><br />
          <button type="submit" className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Create;
