import {Container, Typography} from "@material-ui/core";
import React from "react";

function About() {
  return <div style={{padding: "20px"}}>
    <Container>
      <Typography variant="h2" align="center" style={{marginBottom: "5px"}}>About The BLM Platform</Typography>
      <Typography variant="body1" align="center" style={{margin: "5%"}}>
        Extremely relevant to today’s protests, The BLM Platform was created to address the need to have a more centralized solution for sharing resources and services to help the black community during these times. Our inspiration for this project was to create an application that would help unify the cause and provide a meaningful platform for more updated and reliable resources.
      </Typography>
      <Typography variant="body1" align="center" style={{margin: "5%"}}>
        The BLM Platform is a web application that provides resources and services for the #BlackLivesMatter movement and related events by fetching up-to-date and relevant information from websites and provides an image scrubber application to anonymize photo metadata. The goal is to provide a one-stop hub for supporters to easily find important and up-to-date information, as well as ways to protect themselves.
      </Typography>
      <Typography variant="body1" align="center" style={{marginBottom: "10%"}}>
        Please visit <a href="https://blacklivesmatter.com/">https://blacklivesmatter.com</a> for more information about #BlackLivesMatter.
      </Typography>
    </Container>
  </div>;
};

export default About;
