import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div>
      <div className="About">
        <h2 className="About__header">About us</h2>
        <section className="About__holder">
          <div className="About__tagline">
            Elevate Your Cybersecurity with BespokeCyber
          </div>
          <div className="About__blurb">
            BespokeCyber: Your global cybersecurity partner. With a decade of
            experience worldwide, we tailor solutions to enhance defenses, boost
            efficiency, and drive growth, safeguarding your digital assets for
            success
          </div>
        </section>
      </div>
      <div className="Employee">
        {/* <h2 className="Employee__header">Meet the team</h2> */}
        <section className="Employee__holder">
          <div className="Employee__name">Phil</div>
          <div className="Employee__role">
            VP of North America Security Advisory
          </div>
          <div className="Employee__box Employee__box--1">
            <p className="Employee__bio">
              Phil is a seasoned cybersecurity professional with almost three
              decades of IT experience, specializing in Cyber & Privacy for over
              15 years. He continuously learns and stays updated with industry
              changes, currently pursuing Cloud designations alongside holding
              CISSP, GIAC & ISO27001 designations. Beyond work, he enjoys
              cooking, exercising, studying martial arts, and cherishing family
              time.
            </p>
          </div>
        </section>

        <section className="Employee__holder">
          <div className="Employee__name">Malcolm</div>
          <div className="Employee__role">VP of EU Security Advisory</div>
          <div className="Employee__box Employee__box--2">
            <div className="Employee__bio">
              Malcolm is a seasoned professional with over 25 years of
              experience in Blockchain, DeFi, and Cyber domains across diverse
              industries. He has held senior roles at numerous Blockchain
              startups and Financial Services Companies, including, Willis
              Towers Watson, Lloyds Banking Group, London Stock Exchange,
              ZenGate Global, ConsenSys, and Smart Valor. Beyond work, he has a
              keen passion for music and Tottenham Hotspurs.
            </div>
          </div>
        </section>

        <section className="Employee__holder">
          <div className="Employee__name">Jay</div>
          <div className="Employee__role">Cybersecurity Consultant</div>
          <div className="Employee__box Employee__box--3">
            <div className="Employee__bio">
              Jay is a dynamic professional with a unique blend of skills in
              software engineering and cybersecurity. With a passion for
              technology and a keen eye for detail, Jay excels in creating
              secure and robust solutions for complex problems. Off the tech
              radar, Jay has a flair for music production and he's an avid
              football fanatic, proudly supporting Manchester United.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
