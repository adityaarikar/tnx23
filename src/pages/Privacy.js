import React from "react";
import "../App.css";

const Privacy = () => {
  const permission = [
    {
      id: 0,
      detail:
        "Store and process the participants data (such as E-mail ID, photograph, contact number etc.) at each and every possible point for legitimate interests of Technex.",
    },
    {
      id: 1,
      detail:
        "Technex will retain your personal information as long as it is necessary to do so for our legal obligations, resolve disputes, and enforce our policies",
    },
    {
      id: 2,
      detail:
        "To send you promotional emails at any point of time within the working hours.",
    },
    {
      id: 3,
      detail:
        "The website uses cookies which are used to store information including visitor’s preferences and the pages visited by the visitor. These are used to optimize the user experience.",
    },
    {
      id: 4,
      detail:
        "By using our website, you hereby consent to our privacy policy and agree to its terms.",
    },
  ];

  const Regulations = [
    {
      id: 0,
      details:
        "The participant once enrolled in a competition cannot unenroll at any point of time under any conditions.",
    },
    {
      id: 1,
      details:
        "There is no option of refund of any entry. So, kindly do the registration only when you are confirmed to participate.",
    },
    {
      id: 2,
      details:
        "The participant has to login every time with a proper name. Fake and unauthorized accounts will not be acceptable.",
    },
    {
      id: 3,
      details:
        "Each event has its own rules and regulations that you need to follow. Failing it will lead to disqualification.",
    },
    {
      id: 4,
      details:
        "The organizers will not be responsible for any network lag or disconnectivity issues. Participant have to manage the issues by themselves.",
    },
    {
      id: 5,
      details:
        "Verification of each and every participant will be done, so provide the correct information to avoid inconvenience.",
    },
  ];

  // permissions
  const permissionItems = permission.map((permission) => (
    <li key={permission.id}>{permission.detail}</li>
  ));

  //regulations

  const regulationItems = Regulations.map((Regulations) => (
    <li key={Regulations.id}>{Regulations.details}</li>
  ));

  return (
    <div className="Privacy">
      <h1
        className="privacyHeading"
        style={{ textAlign: "center", fontSize: 60, marginBottom: 20 }}
      >
        Privacy
      </h1>
      <div className="privacyContainer">
        <h2>You have given Technex, the permission to do the following:</h2>
        <ol style={{ fontSize: 20 }}>{permissionItems}</ol>
        <p style={{ fontSize: 20 }}>
          Note – Technex have no access to control over the cookies that are
          used by the third-party advertisers.
        </p>
        <h2>Regulations for the participants:</h2>
        <ol style={{ fontSize: 20 }}>{regulationItems}</ol>
      </div>
    </div>
  );
};

export default Privacy;
