import React from "react";
import "./About.scss";
import Work from "../../components/Work/Work";

const About = () => {
  const jsonData = {
    About: {
      header: "About us",
      tagline: "Elevate Your Cybersecurity with BespokeCyber",
      blurb:
        "BespokeCyber: Your global cybersecurity partner. With a decade of experience worldwide, we tailor solutions to enhance defenses, boost efficiency, and drive growth, safeguarding your digital assets for success",
    },
    Employees: [
      {
        name: "Phil",
        role: "Partner | North America Security Advisory",
        bio: "Phil is a seasoned cybersecurity professional with almost three decades of IT experience, specializing in Cyber & Privacy for over 15 years. He continuously learns and stays updated with industry changes, currently pursuing Cloud designations alongside holding CISSP, GIAC & ISO27001 designations. Beyond work, he enjoys cooking, exercising, studying martial arts, and cherishing family time.",
      },
      {
        name: "Malcolm",
        role: "Partner | UK & EU Security Advisory",
        bio: "Malcolm is a seasoned professional with over 25 years of experience in Blockchain, DeFi, and Cyber domains across diverse industries. He has held senior roles at numerous Blockchain startups and Financial Services Companies, including, Willis Towers Watson, Lloyds Banking Group, London Stock Exchange, ZenGate Global, ConsenSys, and Smart Valor. Beyond work, he has a keen passion for music and Tottenham Hotspurs.",
      },
      {
        name: "Jay",
        role: "Cybersecurity Consultant",
        bio: "Jay is a dynamic professional with a unique blend of skills in software engineering and cybersecurity. With a passion for technology and a keen eye for detail, Jay excels in creating secure and robust solutions for complex problems. Off the tech radar, Jay has a flair for music production and he's an avid football fanatic, proudly supporting Manchester United.",
      },
    ],
  };

  return (
    <div>
      <div className="About">
        <h2 className="About__header">{jsonData.About.header}</h2>
        <section className="About__holder">
          <div className="About__tagline">{jsonData.About.tagline}</div>
          <div className="About__blurb">{jsonData.About.blurb}</div>
        </section>
      </div>
      <div className="Employee">
        {jsonData.Employees.map((employee, index) => (
          <section className="Employee__holder" key={index}>
            <div className="Employee__name">{employee.name}</div>
            <div className="Employee__role">{employee.role}</div>
            <div className={`Employee__box Employee__box--${index + 1}`}>
              <div className="Employee__bio">{employee.bio}</div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default About;
