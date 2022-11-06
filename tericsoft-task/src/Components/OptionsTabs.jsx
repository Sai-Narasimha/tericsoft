import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cards } from "./Cards";

export const OptionsTabs = ({ data }) => {
  const options = data?.options;
  const [tabName, setTabName] = useState("");

  useEffect(() => {
    setTabName(options?.[0]);
  }, [options]);
  console.log("opt", options);
  return (
    <>
      <Tabs w="80%" m="auto">
        <TabList >
          {options?.map((ele, i) => (
            <Tab key={i} onClick={() => setTabName(ele)} m="auto">
              {ele}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {options?.map((item, i) => (
            <TabPanel key={i}>
              <Cards tabName={tabName} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  );
};
