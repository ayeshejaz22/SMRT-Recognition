import React from "react";
import Analysis from "./Analysis";
import MalevsFemale from "./MalevsFemale";
import "./Summary.css";

const Summary = (props) => {
  return (
    <div className="grid-container-2">
      {/* first row */}
      <div className="inner-grid summary-grid">
        <div className="grid-item-2">
          <div className="inner-grid-1 sum-block">
            <div className="grid-item-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z"
                ></path>
                <path
                  fill="none"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z"
                ></path>
                <path
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z"
                ></path>
                <path
                  fill="none"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="32"
                  d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154"
                ></path>
              </svg>
            </div>
            <div className="grid-item-3 blue visitor-num">
              {props.totalVisitors}
            </div>
            <div className="grid-item-3 blue total-visitors">
              total visitors
            </div>
          </div>
        </div>

        <div className="grid-item-2">
          <div className="inner-grid-1 sum-block">
            <div className="grid-item-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="216"
                  cy="200"
                  r="136"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                ></circle>
                <path
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M216 352v128m56-64H160m272-304V32h-80m-16.72 96.72L432 32"
                ></path>
              </svg>
            </div>
            <div className="grid-item-3 blue visitor-num">
              {props.maleVSfemale}
            </div>
            <div className="grid-item-3 blue total-visitors">
              male vs female
            </div>
          </div>
        </div>

        <div className="grid-item-2">
          <div className="inner-grid-1 sum-block">
            <div className="grid-item-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M115.063 21.97v9.343c0 101.953 38.158 189.648 96.343 222.093v6.094c-58.186 32.445-96.344 120.14-96.344 222.094v9.344H401.81v-9.344c0-102.552-38.804-190.274-97.53-222.188V253.5c58.722-31.917 97.53-119.64 97.53-222.188V21.97H115.06zM134 40.655h248.875c-2.477 96.445-42.742 175.523-91.938 198.906l-5.343 2.532V270.844l5.344 2.53c49.193 23.383 89.456 102.438 91.937 198.876H134c2.456-95.898 42.125-175.078 90.875-198.938l5.25-2.562v-28.594l-5.25-2.562c-48.748-23.86-88.42-103.04-90.875-198.938zm213.656 86.125c-57.607 27.81-124.526 27.84-177.562 4.095C184.748 181.78 213.91 218.012 248.22 224c-1.54 2.047-2.47 4.585-2.47 7.344 0 6.76 5.488 12.25 12.25 12.25s12.25-5.49 12.25-12.25c0-2.72-.907-5.218-2.406-7.25 35.426-5.88 65.488-44.07 79.812-97.313zM258 258.626c-6.762 0-12.25 5.488-12.25 12.25s5.488 12.25 12.25 12.25 12.25-5.488 12.25-12.25-5.488-12.25-12.25-12.25zm0 39.28c-6.762 0-12.25 5.49-12.25 12.25 0 6.763 5.488 12.25 12.25 12.25s12.25-5.487 12.25-12.25c0-6.76-5.488-12.25-12.25-12.25zm0 39.533c-6.762 0-12.25 5.488-12.25 12.25 0 6.76 5.488 12.25 12.25 12.25s12.25-5.49 12.25-12.25c0-6.762-5.488-12.25-12.25-12.25zm.125 39.906c-23.21.28-46.19 25.77-75.813 75.656h153c-30.523-51.003-53.977-75.936-77.187-75.656z"></path>
              </svg>
            </div>
            <div className="grid-item-3 blue visitor-num">{props.avgAge}</div>
            <div className="grid-item-3 blue total-visitors">avg. age</div>
          </div>
        </div>

        <div className="grid-item-2">
          <div className="inner-grid-1 sum-block">
            <div className="grid-item-3">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                <path d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"></path>
              </svg>
            </div>
            <div className="grid-item-3 blue visitor-num">{props.avgTime}</div>
            <div className="grid-item-3 blue total-visitors">avg. time</div>
          </div>
        </div>

        <Analysis
          happyPercentage={"45"}
          satisfiedPercentage={"35"}
          sadPercentage={"20"}
        />
      </div>
      <MalevsFemale />
    </div>
  );
};

export default Summary;
