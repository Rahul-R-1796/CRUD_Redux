import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from './UserReducer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";


function EmployeeList() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc"); 

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
    window.alert("Employee deleted successfully!");
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (field) => {
    if (field === sortField) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const filteredUsers = users.filter((user) => {
    // Filter by any field
    return Object.values(user).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const sortedUsers = filteredUsers.sort((a, b) => {
    const fieldA = sortField === 'joiningDate' ? new Date(a[sortField]) : a[sortField];
    const fieldB = sortField === 'joiningDate' ? new Date(b[sortField]) : b[sortField];

    if (fieldA < fieldB) {
      return sortOrder === 'asc' ? -1 : 1;
    }
    if (fieldA > fieldB) {
      return sortOrder === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const sortIcon = (field) => {
    if (sortField === field) {
      return sortOrder === "asc" ? "▲" : "▼";
    }
    return null;
  };

  return (
    <div className='container-fluid vh-100'>
      <h2>Employee List</h2>
      <div className="mb-4 row align-items-center">
        <div className="col-md-6 mb-3 mb-md-0">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="form-control"
          />
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th onClick={() => handleSort("name")}>
              Name
              <button className='btn btn-sm btn-link'>{sortIcon("name")}</button>
            </th>
            <th onClick={() => handleSort("email")}>
              Email
              <button className='btn btn-sm btn-link'>{sortIcon("email")}</button>
            </th>
            <th onClick={() => handleSort("age")}>
              Age
              <button className='btn btn-sm btn-link'>{sortIcon("age")}</button>
            </th>
            <th onClick={() => handleSort("gender")}>
              Gender
              <button className='btn btn-sm btn-link'>{sortIcon("gender")}</button>
            </th>
            <th onClick={() => handleSort("mobile")}>
              Mobile
              <button className='btn btn-sm btn-link'>{sortIcon("mobile")}</button>
            </th>
            <th onClick={() => handleSort("position")}>
              Department 
              <button className='btn btn-sm btn-link'>{sortIcon("position")}</button>
            </th>
            <th onClick={() => handleSort("joiningDate")}>
              Joining Date
              <button className='btn btn-sm btn-link'>{sortIcon("joiningDate")}</button>
            </th>
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
  <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>
    <FontAwesomeIcon icon={faEdit} />
  </Link>
  <button onClick={() => handleDelete(user.id)} className='btn btn-sm btn-danger'>
    <FontAwesomeIcon icon={faTrash} />
  </button>
</td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
