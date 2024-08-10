import React from 'react';
import '../../App.css';
import ExperienceItem from './ExperienceItem';
import {
  nbcLogo,
  ontarioMinistryOfEducationLogo,
  rbcLogo,
} from '../../assets/experience';

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <ExperienceItem
        title="Software Engineer"
        company="Royal Bank of Canada"
        team="Anti-Money Laundering"
        date="August 2024 &ndash; Present"
        logo={rbcLogo}
        descriptions={[
          "Coming soon!",
        ]}
      />
      <ExperienceItem
        title="Software Engineer Intern"
        company="National Bank of Canada"
        team="Securities Lending"
        date="May 2022 &ndash; April 2023"
        logo={nbcLogo}
        descriptions={[
          "Developed and tested microservices for a securities trading software using Java and Spring Boot, ensuring the successful implementation of 100+ new features for National Bank traders",
          "Implemented server-side infrastructure to migrate the on-site monolith to AWS, adopting microservices",
          "Designed and built new modules for tracking daily trade notional by constructing new SQL tables and developing repository and service layer foundations to connect with the database",
          "Performed support tasks such as maintaining Jenkins pipelines, aggregating trade data, and fixing bugs",
        ]}
      />
      <ExperienceItem
        title="Web Developer Intern"
        company="Ontario Ministry of Education"
        team="Digital Curriculum Platform"
        date="May 2021 &ndash; September 2021"
        logo={ontarioMinistryOfEducationLogo}
        descriptions={[
          "Streamlined structure creation process for the new Ontario curriculum website by developing a JavaScript script with Node.js and leveraging the Kentico Kontent API, speeding up the process by 95%",
          "Expanded the Ontario curriculum website by using Kentico CMS to convert PDF documents into web pages",
          "Designed the Curriculum and Resources help page and additional help resources to assist users with difficulty navigating the site",
        ]}
      />
    </section>
  );
}

export default Experience;