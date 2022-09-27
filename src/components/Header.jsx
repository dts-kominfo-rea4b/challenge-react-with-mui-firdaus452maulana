// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';
import "../App.css";

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <div style={{ width: "100%" }}>
        <div>
          <h1> Call a Friend </h1>
        </div>
        <h3>your friendly contact app</h3>
      </div>
    </>
  );
};

export default Header;
