import React from "react";
import "./MalevsFemale.css";

const MalevsFemale = (props) => {
  return (
    <div className="grid-item analysis">
      <div className="inner-grid first-grid">
        {/* ---------------- */}
        <div className="grid-item-4 analysis-column">
          <div className="inner-grid first-row">
            <div className="grid-item-5">
              <h4> male vs female</h4>
            </div>

            <div className="grid-item-5">
              <div className="last-week-btn">
                <div className="last-week-box">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                  </svg>
                  ...
                </div>
              </div>
            </div>
          </div>

          <div className="inner-grid second-row">
            <div className="grid-item-6">
              <div className="number num-happy"></div>
            </div>
            <div className="grid-item-6">
              <div className="number num-satisfied"></div>
            </div>
            <div className="grid-item-6">
              <div className="number num-sad"></div>
            </div>
          </div>
        </div>

        <div className="grid-item-4 statistics-column">
          <div className="inner-grid first-row statistics-row">
            <div className="grid-item-5">
              <h4> statistics</h4>
            </div>
            <div className="grid-item-5"></div>
            <div className="grid-item-5">
              <div className="last-week-btn">
                <div className="last-week-box">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"></path>
                  </svg>
                  last week
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MalevsFemale;
