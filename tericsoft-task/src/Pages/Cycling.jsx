import { Container } from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OptionsTabs } from "../Components/OptionsTabs";
import { get_data } from "../Redux/App/actions";

export const Cycling = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(get_data("cycling"));
  }, []);
  console.log(data);
  return (
    <>
      <Container border="1px solid red" maxW="80%" h="90vh"  bg="grey">
        <OptionsTabs data={data} />
      </Container>
    </>
  );
};