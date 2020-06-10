import React from "react";

let UserForm = (props) => {
  return (
    <div>
      <input
        type="text"
        name="userform"
        placeholder="search user"
        value={props.userName}
        onChange={props.changer}
      />
      <button onClick={props.fetcher}>Submit</button>
    </div>
  );
};

export default UserForm;
