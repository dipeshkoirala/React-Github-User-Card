import React from "react";

const UserSelect = (props) => {
  const filterChange = (event) => {
    //this.preventDefault();
    props.handleChanges(event);
  };
  return (
    <select name="user" onChange={filterChange}>
      {props.data.map((a, index) => {
        return <option value={props.value}>{a}</option>;
      })}
    </select>
  );
};

export default UserSelect;
