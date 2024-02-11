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
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [mobileError, setMobileError] = useState(false);

  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !mobile) {
      if (!name) setNameError(true);
      if (!email) setEmailError(true);
      if (!mobile) setMobileError(true);
      return;
    }
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
          <div className="form-group d-flex flex-wrap">
            <div className="mr-3 flex-grow-1">
              <label htmlFor='name'>Name:</label>
              <input type="text" name="name" className="form-control" placeholder="Enter name"
                value={name} onChange={e => { setName(e.target.value); setNameError(false); }} />
              {nameError && <small className="text-danger">Name is required</small>}
            </div>
            <div className="flex-grow-1">
              <label htmlFor='email'>Email:</label>
              <input type="email" name="email" className="form-control" placeholder="Enter email"
                value={email} onChange={e => { setEmail(e.target.value); setEmailError(false); }} />
              {emailError && <small className="text-danger">Email is required</small>}
            </div>
          </div>
          <div className="form-group d-flex flex-wrap">
            <div className="mr-3 flex-grow-1">
              <label htmlFor='age'>Age:</label>
              <input type="text" name="age" className="form-control" placeholder="Enter age"
                value={age} onChange={e => setAge(e.target.value)} />
            </div>
            <div className="flex-grow-1">
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
          </div>
          <div className="form-group d-flex flex-wrap">
            <div className="mr-3 flex-grow-1">
              <label htmlFor='mobile'>Mobile:</label>
              <input type="text" name="mobile" className="form-control" placeholder="Enter mobile"
                value={mobile} onChange={e => { setMobile(e.target.value); setMobileError(false); }} />
              {mobileError && <small className="text-danger">Mobile is required</small>}
            </div>
            <div className="flex-grow-1">
              <label htmlFor='position'>Position:</label>
              <select
                name="position"
                className="form-control"
                value={position}
                onChange={e => setPosition(e.target.value)}
              >
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="intern">Intern</option>
                <option value="trainee">Trainee</option>
              </select>
            </div>
          </div>
          <div className="form-group">
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
