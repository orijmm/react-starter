import React from "react";

const TagError = ({ show, message }) => {
  return (
    <>
      {show?<h1 className="pl-0 ml-0 errorMsje">{message}</h1>:""}
    </>
  );
};
export default TagError;
