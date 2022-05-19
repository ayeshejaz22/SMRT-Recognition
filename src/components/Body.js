import React from "react";
import LeftSideMenu from "./LeftSideMenu";
import DisplayPicture from "../assets/display picture.jpg";
import Calendar from "./Calendar";
import Hide from "./Hide";
import Summary from "./Summary";
import Analysis from "./Analysis";

const Body = () => {
  return (
    <div className="grid-container">
      {/* Left side menu */}
      <div className="grid-item">
        <LeftSideMenu
          displayPicture={DisplayPicture}
          userName={"t.joblonski"}
          jobDescription={"administrator"}
        />
      </div>

      {/* Calendar */}
      <div className="grid-item">
        <Calendar location={"alberta, ca"} />
      </div>

      {/* Hide button */}
      <div className="grid-item hide-item">
        <Hide />
      </div>

      {/* Summary */}
      <div className="/">
        <Summary
          totalVisitors={"38"}
          maleVSfemale={"5/2"}
          avgAge={"87"}
          avgTime={"43"}
        />
      </div>
    </div>
  );
};

export default Body;
