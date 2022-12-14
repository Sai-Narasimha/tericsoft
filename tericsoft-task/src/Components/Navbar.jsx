import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
export const Navbar = () => {
  const location = useLocation();

  return (
    <Container maxWidth={"100%"} mb="10px">
      <Flex w="80%" justifyContent="space-between" m="auto">
        <Box
          className={location.pathname === "/featured" ? "featured" : null}
          w="105px"
        >
          <Text fontSize="30px">
            <i class="fa-sharp fa-solid fa-star"></i>
          </Text>
          <Link to="/featured">
            <Text>Featured</Text>
          </Link>
        </Box>
        <Box
          className={location.pathname === "/armoury" ? "armoury" : null}
          w="105px"
        >
          <Text fontSize="30px">
            <i class="fa-solid fa-person-rifle"></i>
          </Text>
          <Link to="/armoury">
            <Text>Armoury</Text>
          </Link>
        </Box>
        <Box
          className={location.pathname === "/aquatics" ? "aquatics" : null}
          w="105px"
        >
          <Text fontSize="30px">
            <i class="fa-solid fa-person-swimming"></i>
          </Text>
          <Link to="/aquatics">
            <Text>Aquatics</Text>
          </Link>
        </Box>
        <Box className={location.pathname === "/" ? "cycling" : null} w="105px">
          <Text fontSize="30px">
            <i class="fa-sharp fa-solid fa-person-biking"></i>
          </Text>
          <Link to="/">
            <Text>Cycling</Text>
          </Link>
        </Box>
        <Box
          className={location.pathname === "/equestrain" ? "equestrain" : null}
          w="105px"
        >
          <Text fontSize="30px">
            <i class="fa-solid fa-horse"></i>
          </Text>
          <Link to="/equestrain">
            <Text>Equestrain</Text>
          </Link>
        </Box>
        <Box
          className={location.pathname === "/extreme" ? "extreme" : null}
          w="105px"
        >
          <Text fontSize="30px">
            <i class="fa-solid fa-hill-rockslide"></i>
          </Text>
          <Link to="/extreme">
            <Text>Extreme</Text>
          </Link>
        </Box>
        <Box
          className={location.pathname === "/golf" ? "golf" : null}
          w="105px"
        >
          <Text fontSize="30px">
            <i class="fa-solid fa-golf-ball-tee"></i>
          </Text>
          <Link to="/golf">
            <Text>Golf</Text>
          </Link>
        </Box>
        <Box
          className={location.pathname === "/gymnastics" ? "gymnastics" : null}
          w="105px"
        >
          <Text fontSize="30px">
            <i class="fa-solid fa-dumbbell"></i>
          </Text>
          <Link to="/gymnastics">
            <Text>Gymnastics</Text>
          </Link>
        </Box>
        <Box
          className={location.pathname === "/lakeSea" ? "lakeSea" : null}
          w="105px"
        >
          <Text fontSize="30px">
            <i class="fa-solid fa-water"></i>
          </Text>
          <Link to="/lakeSea">
            <Text>Lake & Sea</Text>
          </Link>
        </Box>
      </Flex>
    </Container>
  );
};
