import React from "react";
import Base from "../components/Base";
import { useEffect } from "react";

const OurDomains = () => {
  useEffect(() => {
    document.title = "Domains";
  });

  return (
    <Base>
      <div className="container-fluid text-white">
        <div className="row mt-5 ">
          <div className="col-12 ">
            <h1 className="text-center font-weight-bold">DOMAINS</h1>
          </div>
          <div className="row" style={{ marginTop: "50px" }}>
            <div className=" offset-sm-1 col-sm-10 mt-4 pl-sm-4 text-center">
              <h3>Research and Development 🚀</h3>
              <p className="about-para text-center">
                Research and Development at IEEE SRM aims to inculcate in its
                members the desire to find and solve the diverse problems around
                us, and empowers them with the skill to do so, taking humanity
                forward, towards a better and more advanced future. We build
                what we dream.
              </p>
            </div>
          </div>
          <div className="row">
            <div className=" offset-sm-1 col-sm-10 mt-4 pl-sm-4 text-center">
              <h3>Robotics and Automation Society 👾</h3>
              <p className="about-para text-center">
                The IEEE Robotics and Automation Society's objectives are
                scientific, literary and educational in character. The Society
                strives for the advancement of the theory and practice of
                robotics and automation engineering and science and of the
                allied arts and sciences, and for the maintenance of high
                professional standards among its members.
              </p>
            </div>
          </div>
          <div className="row">
            <div className=" offset-sm-1 col-sm-10 mt-4 pl-sm-4 text-center">
              <h3>Consumer Electronics Society ⚡</h3>
              <p className="about-para text-center">
                The IEEE Consumer Electronics Society is a professional society
                of the IEEE that focuses on the "theory and practice of
                Electronic Engineering and of the allied arts and sciences with
                respect to the field of Consumer Electronics and the maintenance
                of a high professional standing among its members". The field of
                interest of the IEEE Consumer Electronics Society is engineering
                and research aspects of the theory, design, construction,
                manufacture for end use of mass market electronics, systems,
                software and services for consumers.
              </p>
            </div>
          </div>
          <div className="row">
            <div className=" offset-sm-1 col-sm-10 mt-4 pl-sm-4 text-center">
              <h3>Industrial Applications Society 🏭</h3>
              <p className="about-para text-center">
                The Industry Applications Society, as a transnational
                organization, is interested in advancement of the theory and
                practice of electrical and electronic engineering in the
                development, design, manufacture and application of electrical
                systems, apparatus, devices and controls to the processes and
                equipment of industry and commerce; promotion of safe, reliable
                and economic installations.
              </p>
            </div>
          </div>
          <div className="row">
            <div className=" offset-sm-1 col-sm-10 mt-4 pl-sm-4 text-center">
              <h3>Power Electronics Society 🔌</h3>
              <p className="about-para text-center">
                The Power Electronics Society's main aim is to provide
                scientific and engineering information on electric power and
                enery to benefit society and to help the members to be an
                element of professional development. We are dedicated to
                upholding the vital scientific and educational aspects of power
                electronics and its applications.
              </p>
            </div>
          </div>
          <div className="row">
            <div className=" offset-sm-1 col-sm-10 mt-4 pl-sm-4 text-center">
              <h3>Women in Engineering 👩‍🎓</h3>
              <p className="about-para text-center">
                Women in Engineering (WIE) at IEEE SRM is dedicated to promoting
                women engineers and inspiring girls to follow their academic
                interests to a career in engineering by encouraging them,
                guiding them and celebrating their achievements. IEEE WIE
                members make lifelong friendships, acquire influential mentors,
                and make a difference for the benefit of humanity.
              </p>
            </div>
          </div>
          <div className="row">
            <div className=" offset-sm-1 col-sm-10 mt-4 pl-sm-4 text-center">
              <h3>Web and App Development 👨‍💻</h3>
              <p className="about-para text-center">
                We, the Full Stack Developers at IEEE, aim to deliver value to
                our users by incorporating high-end technologies with the team's
                skills to provide cognitive solutions. We assist our members to
                bring about advancements in technical skills and facilitate
                innovativeness. We also manage all the social media handles of
                IEEE SRM keeping it new-fangled and fresh along with furtherance
                across various interfaces. This domain is a juvenile team of the
                quick-witted at IEEE SRM SB, founded this very year, 2020.
              </p>
            </div>
          </div>
          <div className="row">
            <div className=" offset-sm-1 col-sm-10 mt-4 pl-sm-4 text-center">
              <h3>Sponsorship and Marketing 💰</h3>
              <p className="about-para text-center">
                Sponsorship and marketing at IEEE SRM focuses on the powerful
                marketing strategy which helps in bringing up meaningful access
                to our event audience ,creates positive public relations ,allow
                you to be more creative about how your objectives can be met and
                raise awareness of the organization as a whole.
              </p>
            </div>
          </div>
          <div className="row">
            <div className=" offset-sm-1 col-sm-10 mt-4 pl-sm-4 text-center">
              <h3>Media and Content 📝</h3>
              <p className="about-para text-center">
                Media and Content Team at IEEE SRM also known as the face of
                IEEE. The team comprises of the most outwit Content Writers and
                can amuse you with their remarkable use of word power. Along
                with them, we have the best in class Designers, who can put down
                an inconceivable idea onto your digital screen with the use of
                some sophisticated software or you may call it a Magic Wand.
              </p>
            </div>
          </div>
          <div className="row">
            <div className=" offset-sm-1 col-sm-10 mt-4 pl-sm-4 text-center">
              <h3>Corporate, Logistics and Publicity 📢</h3>
              <p className="about-para text-center">
                Corporate, Logistics and Publicity Team at IEEE SRM is the brain
                of IEEE. The team provides optimistic strategies and plans the
                implementation for all other domains with it's creative ideas.
                With the modern growing world, the team shapes new plans for the
                upcoming campaigns and events happening at IEEE and also works
                in publicizing the events to connect our resources to young
                minds who are getting ready to shape the world with new
                technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default OurDomains;
