import React, { useContext } from "react";
import { NewContext } from "./App";

const Child1 = () => {
  const { password } = useContext(NewContext);
  return (
    <>
      <h1>this is password:{password}</h1>
    </>
  );
};

export default Child1;
