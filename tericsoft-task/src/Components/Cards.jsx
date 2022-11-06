import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { SingleCard } from "./SingleCard";

export const Cards = ({ tabName }) => {
  const tab = useSelector((state) => state.data);
  const tabNameData = tab?.data?.[tabName];
 
  return (
    <>
      <Container maxW="100%" border="1px solid green">
        <Flex gap="20px">
          {tabNameData?.map((ele, i) => (
            <SingleCard tabNameData={ele} tabName={tabName} />
          ))}
        </Flex>
      </Container>
    </>
  );
};
