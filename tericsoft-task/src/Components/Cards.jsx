import { Box } from "@mui/material";
import React from "react";

export const Cards = ({ data }) => {
  return (
    <>
      {data.map((ele) => (
        <Box>
          {ele.map((item) => (
            <Box>
                <img src={ele.image} alt=""/>
               <h3>{ele.day}</h3>
            </Box>
          ))}
        </Box>
      ))}
    </>
  );
};
