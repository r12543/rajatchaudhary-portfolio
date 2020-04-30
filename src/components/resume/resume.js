
import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Indian Institue of Technology, Kanpur</h3>
                <p className="info">B. Tech. in Computer Science and Engineering<span>•</span> <em className="date">2012 - 1016</em></p>
                <p></p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Jawahar Navodaya Vidyalaya, Saharanpur</h3>
                <p className="info">Secondary and Senior Secondary Education<span>•</span> <em className="date">2004 - 2011</em></p>
                <p></p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Konigle Pte Ltd</h3>
                <p className="info">Senior Software Engineer <span>•</span> <em className="date">March 2020 - Present</em></p>
                <p></p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Instart</h3>
                <p className="info">Member Of Technical Staff <span>•</span> <em className="date">Jun 2019 – Feb 2020</em></p>
                <p>
                Worked on the enhancement of NGINX plugins (in C++) which helps in web 
                performance by optimizing HTML/CSS/JS contents. Setup Web 
                Platform Tests (WPTs) infrastructure to strengthen Instart’s 
                Javascript plugin which runs in the browser. Deployed the test 
                runner in docker containers with Jenkins CI/CD.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Aozora</h3>
                <p className="info">Engineering Lead <span>•</span> <em className="date">Feb 2019 – May 2019</em></p>
                <p>
                –  Build a customer data platform from scratch with complete ETL processes <br></br>
                –  Design and create the Big Data Architecture with Data ingestion layer (to extract and collect the data from different sources like websites, mobile apps, third party API continuously), Data Processing and Storage Layer(Kafka and Elasticsearch), and Data Consumption Layer (RESTful APIs with Express.js)<br></br>
                –  Maintain a Kafka Cluster, ElasticSearch Cluster, and Node.js applications on DIL and DCL<br></br>
                –  Deploy all the clusters and APIs on Google Cloud Platform<br></br>
                – Build the automation python scripts for email marketing for the client using IBM Watson APIs<br></br>
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Innoplexus</h3>
                <p className="info">Associate Data Engineer <span>•</span> <em className="date">June 2016 – Feb 2019</em></p>
                <p>
                – Build a comprehensive and scalable Data and Analytics as a Service for Life Sciences<br></br>
                – RESTful APIs development with hybrid microservices Architecture using Node.js (Routing Layer), gRPC/thrift (communication Layer), Python/Node.js/Java (Service Layer) and Elasticsearch /ArangoDB /MongoDB /MySQL (DB Layer)<br></br>
                – Implement Search-As-You-Type functionality using Elasticsearch completion suggester. It suggests the name of the entity on the basis of name and properties of the entity<br></br>
                – Build DApps and write smart contracts on EOS and Ethereum blockchains using C++ and Solidity<br></br>
                – Setup the end to end automation pipeline for crawling, aggregating, and modelling the data and indexing it in Elasticsearch<br></br>
                – Worked in Agile environment with proper use of JIRA and sprint plans. Followed TDD, MR, code review process. Was part of code reviewing team. Mentor junior developers.<br></br>
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>
            <h5>Languages and Frameworks</h5>
            C, C++, Python, Perl, R, PHP, JavaScript,
            Node.js, Django, Flask, React.js, GoLang<br></br>

            <h5>Databases</h5>

            MySQL, MongoDB, Sqlite, Redis, Elastic-
            Search, ArangoDB, PostgreSQL, Kafka<br></br>

            <h5>Tools</h5>
            MatLab, GNU Octave, LaTex, Rstudio,
            Python Jupiter, Visual Studio Code, AWS,
            GCP, Spark, RabbitMQ<br></br>
            </p>
            {/* <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand photoshop" /><em>Photoshop</em></li>
                <li><span className="bar-expand illustrator" /><em>Illustrator</em></li>
                <li><span className="bar-expand wordpress" /><em>Wordpress</em></li>
                <li><span className="bar-expand css" /><em>CSS</em></li>
                <li><span className="bar-expand html5" /><em>HTML5</em></li>
                <li><span className="bar-expand jquery" /><em>jQuery</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section> {/* Resume Section End*/}
      </React.Fragment>
    );
  }
}
