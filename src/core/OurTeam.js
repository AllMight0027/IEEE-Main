import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import { getAllMembers } from "./helper/apicalls";

function OurTeam() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    document.title = "Loading...";
    document.body.style.display = "none";
    getAllMembers().then((data) => {
      setMembers(data);
      document.title = "Our Team";
      document.body.style.display = "";
    });
  }, []);

  return (
    <Base>
      <div>
        <div className="container">
          <div className=" text-center mt-4 p-4">
            <img
              src={require("./Capture.PNG")}
              alt=""
              style={{ maxHeight: "120px" }}
            />
          </div>

          {members.length !== 0 && (
            <div className="row pt-4">
              <div className="col-xl-3 col-sm-12 col-md-6 text-center offset-xl-2">
                <div className="mt-4">
                  <img
                    src={`https://ieee-srm-sb.herokuapp.com/api/member/photo/${members[0]._id}`}
                    alt=""
                    style={{
                      maxHeight: "200px",
                      borderRadius: "50%",
                      boxShadow: "5px 5px 5px grey",
                    }}
                    className="ml-xl-5"
                  />
                  <br />
                  <h5 className="pt-4 text-nowrap ml-xl-4">
                    {members[0].name}
                  </h5>
                  <h6 className="pt-2 ml-xl-5">{members[0].position}</h6>
                </div>
              </div>
              <div className="col-xl-6 col-sm-12 col-md-6 text-center">
                <div className="mt-4">
                  <img
                    src={`https://ieee-srm-sb.herokuapp.com/api/member/photo/${members[1]._id}`}
                    alt=""
                    style={{
                      maxHeight: "200px",
                      borderRadius: "50%",
                      boxShadow: "5px 5px 5px grey",
                    }}
                  />
                  <br />
                  <h5 className="pt-4">{members[1].name}</h5>
                  <h6 className="pt-2">{members[1].position}</h6>
                </div>
              </div>
            </div>
          )}

          <div className="row pt-4">
            {members.map((member, index) => {
              if (index === 0 || index === 1) return;
              return (
                <div className="col-xl-4 col-sm-12 col-md-6 text-center">
                  <div className="mt-4">
                    <img
                      src={`https://ieee-srm-sb.herokuapp.com/api/member/photo/${member._id}`}
                      alt=""
                      style={{
                        maxHeight: "200px",
                        borderRadius: "50%",
                        boxShadow: "5px 5px 5px grey",
                      }}
                    />
                    <br />
                    <h5 className="pt-4">{member.name}</h5>
                    <h6 className="pt-2">{member.position}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Base>
  );
}

export default OurTeam;
