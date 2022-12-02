import React, { useContext } from "react";
import { NewContext } from "./App";

const Child2 = () => {
  const { password } = useContext(NewContext);
  return (
    <>
      <h1>This is child 2 -- {password}</h1>
    </>
  );
};

export default Child2;
