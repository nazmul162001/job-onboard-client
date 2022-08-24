import React from "react";
import { NavLink } from "react-router-dom";

const CandidatesInbox = () => {
  return (
    <div>
      <NavLink to="/dashboard/CandidateMail/incomeing">Incoming</NavLink>
    </div>
  );
};

export default CandidatesInbox;
