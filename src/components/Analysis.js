import React from "react";
import "./Analysis.css";

const Analysis = (props) => {
  return (
    <div className="grid-item analysis">
      <div className="inner-grid first-grid">
        {/* ---------------- */}
        <div className="grid-item-4 analysis-column">
          <div className="inner-grid first-row">
            <div className="grid-item-5">
              <h4> analysis</h4>
            </div>
            <div className="grid-item-5">
              <div className="circle circle-pink"></div>
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
                  last week
                </div>
              </div>
            </div>
          </div>

          <div className="inner-grid second-row">
            <div className="grid-item-6">
              <svg className="percent percent-happy">
                <circle cx={"45"} cy={"45"} r={"45"}></circle>
                <circle cx={"45"} cy={"45"} r={"45"}></circle>
              </svg>
              <svg
                className="emoji happy"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 496 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M328 180c-25.69 0-55.88 16.92-59.86 42.12-1.75 11.22 11.5 18.24 19.83 10.84l9.55-8.48c14.81-13.19 46.16-13.19 60.97 0l9.55 8.48c8.48 7.43 21.56.25 19.83-10.84C383.88 196.92 353.69 180 328 180zm-160 60c17.67 0 32-14.33 32-32s-14.33-32-32-32-32 14.33-32 32 14.33 32 32 32zm185.55 64.64c-25.93 8.3-64.4 13.06-105.55 13.06s-79.62-4.75-105.55-13.06c-9.94-3.13-19.4 5.37-17.71 15.34C132.67 367.13 196.06 400 248 400s115.33-32.87 123.26-80.02c1.68-9.89-7.67-18.48-17.71-15.34zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 448c-110.28 0-200-89.72-200-200S137.72 56 248 56s200 89.72 200 200-89.72 200-200 200z"></path>
              </svg>
              <div className="number num-happy">
                <h2>
                  {props.happyPercentage}
                  <span>%</span>
                </h2>
              </div>
            </div>
            <div className="grid-item-6">
              <svg className="percent percent-satisfied">
                <circle cx={"45"} cy={"45"} r={"45"}></circle>
                <circle cx={"45"} cy={"45"} r={"45"}></circle>
              </svg>
              <svg
                className="emoji satisfied"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                <path d="M4 10.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5zm3-4C7 5.672 6.552 5 6 5s-1 .672-1 1.5S5.448 8 6 8s1-.672 1-1.5zm4 0c0-.828-.448-1.5-1-1.5s-1 .672-1 1.5S9.448 8 10 8s1-.672 1-1.5z"></path>
              </svg>
              <div className="number num-satisfied">
                <h2>
                  {props.satisfiedPercentage}
                  <span>%</span>
                </h2>
              </div>
            </div>
            <div className="grid-item-6">
              <svg className="percent percent-sad">
                <circle cx={"45"} cy={"45"} r={"45"}></circle>
                <circle cx={"45"} cy={"45"} r={"45"}></circle>
              </svg>
              <svg
                className="emoji sad"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                version="1.1"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 16c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zM8 1.5c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5zM4 5c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM10 5c0-0.552 0.448-1 1-1s1 0.448 1 1c0 0.552-0.448 1-1 1s-1-0.448-1-1zM4.998 12.199l-1.286-0.772c0.874-1.454 2.467-2.427 4.288-2.427s3.413 0.973 4.288 2.427l-1.286 0.772c-0.612-1.018-1.727-1.699-3.002-1.699s-2.389 0.681-3.002 1.699z"></path>
              </svg>
              <div className="number num-sad">
                <h2>
                  {props.sadPercentage}
                  <span>%</span>
                </h2>
              </div>
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

export default Analysis;
