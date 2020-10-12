import React, { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy";
    document.body.style.backgroundColor = "white";
  });
  return (
    <div className="container bg-white text-dark mt-4">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Privacy Policy for IEEE SRM SB</h1>
          <h4>Approved by the IEEE-SRM Executive Committee</h4>
        </div>
      </div>

      <div className="row mt-5 mb-4">
        <div className="col-12">
          At IEEE SRM SB, accessible from{" "}
          <a href="https://www.ieeesrmist.in/">https://www.ieeesrmist.in/</a>{" "}
          one of our main priorities is the privacy of our visitors. This
          Privacy Policy document contains types of information that is
          collected and recorded by IEEE SRM SB and how we use it. <br /> If you
          have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us. <br />
          <br />
          <b> Log Files</b>
          <br /> IEEE SRM SB follows a standard procedure of using log files.
          These files log visitors when they visit websites. All hosting
          companies do this and a part of hosting services' analytics. The
          information collected by log files include internet protocol (IP)
          addresses, browser type, Internet Service Provider (ISP), date and
          time stamp, referring/exit pages, and possibly the number of clicks.
          These are not linked to any information that is personally
          identifiable. The purpose of the information is for analyzing trends,
          administering the site, tracking users' movement on the website, and
          gathering demographic information. <br />
          <br />
          <b> Cookies and Web Beacons</b> <br /> Like any other website, IEEE
          SRM SB uses 'cookies'. These cookies are used to store information
          including visitors' preferences, and the pages on the website that the
          visitor accessed or visited. The information is used to optimize the
          users' experience by customizing our web page content based on
          visitors' browser type and/or other information. <br /> For more
          general information on cookies, please read “
          <a
            href="https://www.cookieconsent.com/what-are-cookies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            What are cookies?
          </a>
          ” <br />
          <br /> <b> Privacy Policies</b> <br /> You may consult this list to
          find the Privacy Policy for each of the advertising partners of IEEE
          SRM SB. <br />
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on IEEE SRM SB, which are sent
          directly to users' browser. They automatically receive your IP address
          when this occurs. These technologies are used to measure the
          effectiveness of their advertising campaigns and/or to personalize the
          advertising content that you see on websites that you visit. <br />{" "}
          Note that IEEE SRM SB has no access to or control over these cookies
          that are used by third-party advertisers. <br />
          <br />
          <b> Third Party Privacy Policies</b> <br /> IEEE SRM SB's Privacy
          Policy does not apply to other advertisers or websites. Thus, we are
          advising you to consult the respective Privacy Policies of these
          third-party ad servers for more detailed information. It may include
          their practices and instructions about how to opt-out of certain
          options. <br /> You can choose to disable cookies through your
          individual browser options. To know more detailed information about
          cookie management with specific web browsers, it can be found at the
          browsers' respective websites.{" "}
          <a
            href="https://www.cookieconsent.com/what-are-cookies/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            What are cookies?
          </a>{" "}
          <br />
          <br /> <b> Children's Information</b> <br /> Another part of our
          priority is adding protection for children while using the internet.
          We encourage parents and guardians to observe, participate in, and/or
          monitor and guide their online activity. <br /> IEEE SRM SB does not
          knowingly collect any Personal Identifiable Information from children
          under the age of 13. If you think that your child provided this kind
          of information on our website, we strongly encourage you to contact us
          immediately and we will do our best efforts to promptly remove such
          information from our records. <br />
          <br /> <b> Online Privacy Policy</b> <br /> Only This Privacy Policy
          applies only to our online activities and is valid for visitors to our
          website with regards to the information that they shared and/or
          collect in IEEE SRM SB. This policy is not applicable to any
          information collected offline or via channels other than this website.{" "}
          <br />
          <br /> <b> Consent </b>By using our website, you hereby consent to our
          Privacy Policy and agree to its Terms and Conditions.
          <br />
          <br /> <b> Last updated on September 16, 2020</b>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
