import React from "react";

const HomePage = () => {
  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#fff' }}>
      <div style={{ textAlign: 'center', color: 'black' }}>
        <h1>Welcome to Our Employee Management System</h1>
        <p>Empowering and Connecting People in the Workplace</p>
        <blockquote style={{ fontStyle: 'italic' }}>
          "The strength of the team is each individual member. The strength of each member is the team." - Phil Jackson
        </blockquote>
      </div>
    </div>
  );
};

export default HomePage;
