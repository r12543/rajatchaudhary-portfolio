
import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>Skilled in Node.js, Python, Big Data technologies (Kafka, Spark), Backend Development 
              with Databases (MySQL, MongoDB, ArangoDB, ElasticSearch), Machine Learning. Experience 
              in blockchain technology with Dapp development and smart contracts writing on Ethereum 
              and EOS. Strong engineering professional with a Bachelor of Technology (B.Tech.) focused 
              in Computer Science and Engineering from Indian Institute of Technology, Kanpur. 
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Rajat Chaudhary</span><br />
                  <span>#17-131 <br />
                    55 Strathmore Ave<br />
                    Singapore 140055
                  </span><br />
                  <span>+65-83876557</span><br />
                  <span>chaudharyrajat80@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="https://drive.google.com/file/d/1TGcNqfVEFbzoj5EUZS340R6o83fKJNO8/view" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section> {/* About Section End*/}
    
      </React.Fragment>
    );
  }
}
