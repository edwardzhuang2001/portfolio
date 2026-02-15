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
        team="Anti-Money Laundering (AML)"
        date="August 2024 &ndash; Present"
        logo={rbcLogo}
        descriptions={[
          "Enabled AML regulatory coverage for a newly acquired wealth management firm by integrating client and transaction data for 70K+ clients representing $80B+ in assets into RBC’s Hadoop AML data lake, ensuring continuous screening, transaction monitoring, and regulatory compliance post‑acquisition",
          "Implemented Spark SQL ETL pipelines and data validation frameworks to consolidate daily heterogeneous client and transaction datasets, preventing monitoring gaps that could expose the bank to undetected financial crime and regulatory risk",
          "Modernized payment monitoring logic through SWIFT MX adoption, building a new data model (central SQL view and auxiliary tables) that improved data completeness and reduced false‑positive AML alerts by up to 30% compared to legacy formats",
          "Drove RBC’s Hive‑to‑Snowflake AML platform migration by developing a configurable Java Spring Boot data‑flattening service to transform unstructured payment payloads (JSON, Avro) from AWS S3 into Snowflake‑ready schemas, improving downstream AML investigator query performance by 10x+",
          "Built and maintained core components of a Scala/Java data integration platform supporting standardized ingestion and transformation across multiple data formats, enabling delivery of 10+ AML ETL initiatives with consistent controls and reduced onboarding time for new data sources"
        ]}
      />
      <ExperienceItem
        title="Software Engineer Intern"
        company="National Bank of Canada"
        team="Securities Lending"
        date="May 2022 &ndash; April 2023"
        logo={nbcLogo}
        descriptions={[
          "Developed microservices for a securities trading platform in Java Spring Boot, delivering 100+ production features",
          "Implemented server‑side infrastructure to enable the migration of the on‑premises, monolithic application to AWS, adopting a microservices architecture using Java Spring Boot, improving scalability and achieving 99.9%+ system uptime",
          "Designed modules for daily notional value tracking by constructing new SQL tables and implementing Spring Data JPA repositories in Java, generating trade activity insights and reducing manual effort by 20+ hrs/week across 50+ traders",
        ]}
      />
      <ExperienceItem
        title="Web Developer Intern"
        company="Ontario Ministry of Education"
        team="Digital Curriculum Platform"
        date="May 2021 &ndash; September 2021"
        logo={ontarioMinistryOfEducationLogo}
        descriptions={[
          "Streamlined structure creation process for the new Ontario curriculum website by leveraging JavaScript and Node.js with the Kentico Kontent API, speeding up the process by 95%+",
          "Expanded the Ontario curriculum website by using Kentico CMS to publish curricula, originally formatted as PDFs, overall enhancing the user experience",
          "Designed the Curriculum and Resources help page and additional help resources to assist users with difficulty navigating the site",
        ]}
      />
    </section>
  );
}

export default Experience;