import React from "react";
import "./Nav.css";
import logo from "../assets/logo.jpg";
import search from "../assets/search.png";
import { FiSettings } from "react-icons/fi";
import { BsChevronDown } from "react-icons/bs";

const Nav = (props) => {
  const currentTime = new Date();
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()} pm`;

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="grid-container">
        <div className="grid-item">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div>
            <span className="recognition">recognition</span>
          </div>
        </div>

        <div className="grid-item">
          <div className="menu-1">
            <svg
              className="left-menu"
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 12v-1h9v1H1zm0-5h14v1H1V7zm11-4v1H1V3h11z"></path>
            </svg>
          </div>
        </div>

        <div className="grid-item">
          <form className="form">
            <input
              className="search-field"
              type="search"
              placeholder="Search..."
            />
            <button type="submit" className="search-button">
              <img src={search} alt="search" />
            </button>
          </form>
        </div>

        <div className=" inner-grid nav-grid">
          <div className="grid-item-1">
            <div className="circle">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
            </div>
          </div>

          <div className="grid-item-1">
            <div className="circle">
              <p className="icon">7</p>
            </div>
          </div>

          <div className="grid-item-1">
            <div className="circle-black"></div>
          </div>

          <div className="grid-item-1">
            <div className="header-name">
              <a className="header" href="/">
                {props.userName}
              </a>
            </div>
          </div>

          <div className="grid-item-1">
            <div className="arrow-down">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                ></path>
              </svg>
            </div>
          </div>

          <div className="grid-item-1">
            <div className="current-time">{time}</div>
          </div>

          <div className="grid-item-1">
            <div className="right-menu">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
