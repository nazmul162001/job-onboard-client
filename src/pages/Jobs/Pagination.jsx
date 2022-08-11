import React from 'react';
import { Link} from "react-router-dom";

const Pagination = ({ number, active }) => {
  return (
    <Link
      to={`/jobs/?page=${number}`}

    >
      <span className={`border border-primary py-1 rounded-lg px-3 mx-2 ${active && 'bg-primary'} hover:bg-primary hover:border-primary`}>{number}</span>
    </Link>
  );
};

export default Pagination;