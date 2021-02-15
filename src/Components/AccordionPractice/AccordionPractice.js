import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Typography
} from "@material-ui/core";
import { ExpandMoreRounded } from "@material-ui/icons";
import { useState } from "react";

const AccordionPractice = () => {
  const accordionData = [
    {
      id: "1",
      header: "First Accordion Header",
      description:
        "This is Accordion Details | This is accordion Components | This is Accordion Components"
    },
    {
      id: "2",
      header: "Second Accordion Header",
      description:
        "This is Accordion Details | This is accordion Components | This is Accordion Components"
    },
    {
      id: "3",
      header: "Third Accordion Header",
      description:
        "This is Accordion Details | This is accordion Components | This is Accordion Components"
    },
    {
      id: "4",
      header: "Fourth Accordion Header",
      description:
        "This is Accordion Details | This is accordion Components | This is Accordion Components"
    }
  ];

  const [expended, setExpended] = useState(false);

  const handleChange = (id) => (event, isExpanded) => {
    console.log(isExpanded);
    setExpended(isExpanded ? id : false);
  };

  return (
    <Box m={5} style={{ height: "100vh" }}>
      {accordionData.map((data) => {
        const { id, header, description } = data;
        return (
          <Accordion
            key={id}
            expanded={expended === id}
            onChange={handleChange(id)}
          >
            <AccordionSummary expandIcon={<ExpandMoreRounded />} id={id}>
              <Typography>{header}</Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <Typography>{description}</Typography>
            </AccordionDetails>
            <Divider />
            <AccordionActions>
              <Button size="small" color="primary" variant="contained">
                Save
              </Button>
            </AccordionActions>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default AccordionPractice;
