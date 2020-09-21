import React, { useEffect } from "react";

const CoC = () => {
  useEffect(() => {
    document.title = "Code of Conduct";
    document.body.style.backgroundColor = "white";
  });
  return (
    <div className="container bg-white text-dark mt-4">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Code Of Conduct For IEEE SRM SB</h1>
          <h4>Approved by the IEEE-SRM Executive Committee</h4>
        </div>
      </div>

      <div className="row mt-5 mb-4">
        <div className="col-12">
          All participants of IEEE SRM SB are to abide by our Code of Conduct,
          both online and during in-person events that are hosted and/or
          associated with IEEE SRM SB. <br />
          <br />
          <b>The Pledge</b>
          <br />
          In the interest of fostering an open and welcoming environment, we
          pledge to make participation in our project and our community a
          harassment-free experience for everyone, regardless of age, body size,
          disability, ethnicity, expression, level of experience, nationality,
          personal appearance, race, religion, or sexual identity and
          orientation.
          <br />
          <br />
          <b>The Standards</b>
          <br />
          Examples of behaviour that contributes to creating a positive
          environment include: <br />• Using welcoming and inclusive language.{" "}
          <br />• Being respectful of differing viewpoints and experiences.{" "}
          <br />
          • Gracefully accepting constructive criticism. <br />• Referring to
          people by their preferred pronouns and using gender- neutral pronouns
          when uncertain. <br /> Examples of unacceptable behaviour by
          participants include: <br />• Trolling, insulting/derogatory comments,
          public or private harassment. <br />• Publishing others' private
          information, such as a physical or electronic address, without
          explicit permission. <br />• Not being respectful to reasonable
          communication boundaries, such as 'leave me alone,' 'go away,' or 'I’m
          not discussing this with you.' <br />• The usage of sexualised
          language or imagery and unwelcome sexual attention or advances. <br />
          • Swearing, usage of strong or disturbing language. <br />•
          Demonstrating the graphics or any other content you know may be
          considered disturbing. <br />• Starting and/or participating in
          arguments related to politics. <br />• Assuming or promoting any kind
          of inequality including but not limited to: age, body size,
          disability, ethnicity, expression, nationality and race, personal
          appearance, religion, or sexual identity and orientation.
          <br />• Drug promotion of any kind. <br />• Attacking personal tastes.{" "}
          <br />• Other conduct which any prudent person would reasonably
          consider inappropriate in a professional setting.
          <br />
          <br />
          <b>Enforcement</b>
          <br />
          No member shall use organisation assets for any personal gain or
          publish any official document(s) / resource(s) without due
          authorization.
          <br />
          Violations of the Code of Conduct may be reported by sending an email
          to ieee@srmist.edu.in. All reports will be reviewed and investigated
          and will result in a response that is deemed necessary and appropriate
          to the circumstances. Further details of specific enforcement policies
          may be posted separately.
          <br /> We hold the right and responsibility to remove comments or
          other contributions that are not aligned to this Code of Conduct, or
          to ban temporarily or permanently any members for other behaviours
          that we deem inappropriate, threatening, offensive, or harmful. <br />
          <br /> <b> Last updated on September 16, 2020</b>
        </div>
      </div>
    </div>
  );
};

export default CoC;
