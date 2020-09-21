import React, { useEffect } from "react";

const Disclaimer = () => {
  useEffect(() => {
    document.title = "Disclaimer";
    document.body.style.backgroundColor = "white";
  });
  return (
    <div className="container bg-white text-dark mt-4">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Disclaimer For IEEE SRM SB</h1>
          <h4>Approved by the IEEE-SRM Executive Committee</h4>
        </div>
      </div>
      <div className="row mt-5 mb-4">
        <div className="col-12">
          <b>
            <u> Interpretation and Definitions </u>
            <br />
          </b>
          <b> Interpretation</b> <br />
          The words of which the initial letter is capitalized have meanings
          defined under the following conditions. The following definitions
          shall have the same meaning regardless of whether they appear in
          singular or in the plural. <br />
          <br /> <b> Definitions</b> <br />
          For the purposes of this Disclaimer: <br />•<b> Organisation</b>{" "}
          (referred to as either "the Organisation", "We", "Us" or "Our" in this
          Disclaimer) refers to IEEE SRM SB, SRM Institute of Science and
          Technology. <br />•<b> Service</b>
          refers to the Website. <br />• <b> You</b> mean the individual
          accessing the Service, or the organisation, or other legal entity on
          behalf of which such individual is accessing or using the Service, as
          applicable. <br />• <b> Website</b> refers to IEEE SRM SB or any other
          website made by IEEE SRM SB, accessible from
          https://www.ieeesrmist.in. <br />
          <br />
          <b> Disclaimer</b>
          <br /> The information contained on the Service is for general
          information purposes only. <br />
          The Organisation assumes no responsibility for errors or omissions in
          the contents of the Service.
          <br /> In no event shall the Organisation be liable for any special,
          direct, indirect, consequential, or incidental damages or any damages
          whatsoever, whether in an action of contract, negligence or other
          tort, arising out of or in connection with the use of the Service or
          the contents of the Service. The Organisation reserves the right to
          make additions, deletions, or modifications to the contents on the
          Service at any time without prior notice.
          <br /> The Organisation does not warrant that the Service is free of
          viruses or other harmful components.
          <br />
          <br />{" "}
          <b>
            <u> External Links Disclaimer</u>
          </b>
          <br />
          The Service may contain links to external websites that are not
          provided or maintained by or in any way affiliated with the
          Organisation. <br />
          Please note that the Organisation does not guarantee the accuracy,
          relevance, timeliness, or completeness of any information on these
          external websites.
          <br /> We aren't responsible for any damage(s) caused by any external
          link present on our site.
          <br /> <br />{" "}
          <b>
            <u> Errors and Omissions Disclaimer </u>
          </b>
          <br />
          The information given by the Service is for general guidance on
          matters of interest only. Even if the Organisation takes every
          precaution to ensure that the content of the Service is both current
          and accurate, errors can occur. Plus, given the changing nature of
          laws, rules and regulations, there may be delays, omissions or
          inaccuracies in the information contained on the Service.
          <br /> The Organisation is not responsible for any errors or
          omissions, or for the results obtained from the use of this
          information.
          <br />
          <br />{" "}
          <b>
            <u> Fair Use Disclaimer</u>
          </b>{" "}
          <br /> The Organisation may use copyrighted material which has not
          always been specifically authorized by the copyright owner. The
          Organisation is making such material available for criticism, comment,
          news reporting, teaching, scholarship, or research.
          <br /> If You wish to use copyrighted material from the Service for
          your own purposes that go beyond fair use, You must obtain permission
          from the copyright owner. <br />
          <br />
          <b>
            <u>Views Expressed Disclaimer </u>
          </b>{" "}
          <br /> The Service may contain views and opinions which are those of
          the authors and do not necessarily reflect the official policy or
          position of any other author, agency, organization, employer or
          organisation, including the Organisation. <br /> Comments published by
          users are their sole responsibility and the users will take full
          responsibility, liability and blame for any libel or litigation that
          results from something written in or as a direct result of something
          written in a comment. The Organisation is not liable for any comment
          published by users and reserve the right to delete any comment for any
          reason whatsoever. <br />
          <br />{" "}
          <b>
            <u> No Responsibility Disclaimer</u>
          </b>{" "}
          <br /> The information on the Service is provided with the
          understanding that the Organisation is not herein engaged in rendering
          legal, accounting, tax, or other professional advice and services. As
          such, it should not be used as a substitute for consultation with
          professional accounting, tax, legal or other competent advisers.{" "}
          <br /> In no event shall the Organisation or its suppliers be liable
          for any special, incidental, indirect, or consequential damages
          whatsoever arising out of or in connection with your access or use or
          inability to access or use the Service.
          <br />
          <br />
          <b>
            <u> "Use at Your Own Risk" Disclaimer </u>
          </b>{" "}
          <br /> All information in the Service is provided "as is", with no
          guarantee of completeness, accuracy, timeliness or of the results
          obtained from the use of this information, and without warranty of any
          kind, express or implied, including, but not limited to warranties of
          performance, merchantability and fitness for a particular purpose.
          <br /> The Organisation will not be liable to You or anyone else for
          any decision made or action taken in reliance on the information given
          by the Service or for any consequential, special or similar damages,
          even if advised of the possibility of such damages.
          <br />
          <br />{" "}
          <b>
            <u> Contact Us</u>
          </b>
          <br />
          If you have any questions about this Disclaimer, you can contact Us:{" "}
          <br />• By email:{" "}
          <a href="mailto:ieee@srmist.edu.in."> ieee@srmist.edu.in</a> <br />•
          By visiting this page on our website:{" "}
          <a href="https://www.ieeesrmist.in">https://www.ieeesrmist.in</a>{" "}
          <br />
          <br /> <b> Last updated: September 16, 2020</b>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
