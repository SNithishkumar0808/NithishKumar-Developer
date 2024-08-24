// import React from 'react';
// import { Link } from 'react-scroll';
// import "./Header.css";
// const Header = () => {
//   return (
//     <div className="header">
//       <div className="head_left">
//         <h1>Develop<span>er</span></h1>
//       </div>
//       <div className="head_right">
//         <Link to="about" smooth={true} duration={500}>
//           <h4>About Me</h4>
//         </Link>
//         <Link to="Skill" smooth={true} duration={500}>
//           <h4>Skills</h4>
//         </Link>
//         <Link to="Projects" smooth={true} duration={500}>
//           <h4>Projects</h4>
//         </Link>
//         {/* <Link to="Exp" smooth={true} duration={500}>
//           <h4>Experience</h4>
//         </Link> */}
//         <Link to="Contact" smooth={true} duration={500}>
//           <h4>Contact</h4>
//         </Link>
//         <h4 className='head_right_btu'>Join With Me</h4>
//       </div>
//     </div>
//   );
// };

// export default Header;
import React, { useState } from 'react';
import "./Header.css";
import { Link } from 'react-scroll';
const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="header">
      <div className="head_left">
        <h1>Develop<span>er</span></h1>
      </div>
      <div className="head_right">
        <Link to="about" smooth={true} duration={500}>
          <h4>About Me</h4>
        </Link>
        <Link to="Skill" smooth={true} duration={500}>
          <h4>Skills</h4>
        </Link>
        <Link to="Projects" smooth={true} duration={500}>
          <h4>Projects</h4>
        </Link>
        <Link to="Contact" smooth={true} duration={500}>
          <h4>Contact</h4>
        </Link>
        <h4 className='head_right_btu' onClick={toggleModal}>Join With Me</h4>
      </div>

      {isModalOpen && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <button className="modal-close" onClick={toggleModal}>X</button>
            <h2>Join With Me</h2>
            <form className='sum'>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
