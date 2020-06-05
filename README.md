# The BLM Platform
##### 0.2.2 JavaScript Jellies 
Team: Nicole Danuwidjaja, Srijon Saha, Jorge Henriquez

### Project Inspiration
Extremely relevant to today’s protests, The BLM Platform was created to address the need to have a more centralized solution for sharing resources and services to help the black community during these times. Our inspiration for this project was to create an application that would help unify the cause and provide a meaningful platform for more updated and reliable resources.

### Description
The BLM Platform is a web application that provides resources and services for the #BlackLivesMatter movement and related events by fetching up-to-date and relevant information from websites and provides an image scrubber application to anonymize photo metadata.

### Technologies
##### AWS Amplify
AWS served as the platform's backend as it was able to host our necessary endpoints to scrub image metadata from fetched images. Endpoints were written in Node.js and Express using AWS Lambda functions. The endpoint used Sharp as its image processing library. 

##### N8N
An open-source workflow automation tool that executed an hourly CronJob with integrated Google Sheets API and linkfish.API.

##### Docker
Containerized platform that hosts and deploys n8n workflow onto a local server

##### GCP
Provides tokenized credentials and API read and write access for Google Sheets

##### React
Front-end JS framework for data visualization and website layout

### Contribution Guidelines
To contribute to the project, an issue was raised using the GitHub issue tracker. Then, that issue is addressed by creating a new branch relating to that issue and making the necessary commits. Finally, a pull request is made to merge that branch into master and it uses GitHub keywords to link the pull request to the issue. Because of our protected master branch, a code review by at least one team member is required in order to merge the pull request into master. 

### Hurdles
Some of the challenges posed to us were asynchronously learning how to integrate new open-source technologies into our project while also dividing up the work to ambitiously tackle multiple technologies at once -- reading through documentation for n8n, troubleshooting through AWS Amplify requests, and overall, integrating into our web app. Nonetheless, we are pleased with how our group was able to work through the challenges!

### Next Steps
- Randomizing image metadata rather than entirely removing it
- Optimizing n8n workflow to improve linkfish.API scraping
- Looking into social media APIs to scrape data from Twitter, Instagram, Facebook


