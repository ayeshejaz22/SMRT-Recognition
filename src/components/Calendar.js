import React from "react";
import "./Calendar.css";

const Calendar = (props) => {
  const currentDate = new Date();
  const year = `${currentDate.getFullYear()}`;
  const date = `${currentDate.getDate()} `;

  //Month name
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = `${monthNames[currentDate.getMonth()]}`;

  return (
    <div className="calendar">
      <div className="calendar-year">
        <div className="full-year">{year}</div>
      </div>

      <div className="calendar-date-month">
        <div className="date-month">
          {date} {month}
        </div>
      </div>

      <div className="location">{props.location}</div>
    </div>
  );
};

export default Calendar;
