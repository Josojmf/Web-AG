import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.6/src/index.js";
import { useState } from "preact/hooks";

const Nav: FunctionComponent = () => {
  // adding the states
  const [isActive, setIsActive] = useState(false);
  const [classNameToggle, setClassNameToggle] = useState("inactive");
  const toggleActiveClass = () => {
    setIsActive(!isActive);
    setClassNameToggle(isActive ? "inactive" : "active");
  };
  //clean up function to remove the active class

  return (
    (
      <nav className="NavPanel">
        <div className="logo">
        <img src="/logo.png" alt="logo" width="100px" height="100px" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    )
  );
};
export default Nav;
