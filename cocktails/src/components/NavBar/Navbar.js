import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link active" href="#">
          Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Best Sellers
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Sale
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#">
            Summer Favs
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;