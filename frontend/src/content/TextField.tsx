import { dividerClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getPing } from "../api/api";

const TextField = () => {
  const [text, setText] = useState([]);

  useEffect(() => {
    // setText({getPing})
  }, []);

  return <div>{text}</div>;
};

export default TextField;
