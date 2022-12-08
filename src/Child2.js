import React, { useContext } from "react";
import { NewContext } from "./App";

const Child2 = () => {
  const { data } = useContext(NewContext);
  return (
    <>
      <h1>This is child 2 -- {data.name}</h1>
    </>
  );
};

export default Child2;
