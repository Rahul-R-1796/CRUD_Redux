import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from './UserReducer';

function EmployeeList() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); 

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
    window.alert("Employee deleted successfully!");
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedUsers = filteredUsers.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return sortOrder === "asc" ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
  });

  return (
    <div className='container-fluid vh-100'>
      <h2>Employee List</h2>
      <div className="mb-4 row align-items-center">
  <div className="col-md-6 mb-3 mb-md-0">
    <input
      type="text"
      placeholder="Search by name"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="form-control"
    />
  </div>
  <div className="col-md-6">
    <select
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
      className="form-control"
    >
      <option value="asc">Sort by Name (Ascending)</option>
      <option value="desc">Sort by Name (Descending)</option>
    </select>
  </div>
</div>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Mobile</th>
            <th>Position</th>
            <th>Joining Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.mobile}</td>
              <td>{user.position}</td>
              <td>{user.joiningDate}</td>
              <td>
                <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
                <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
