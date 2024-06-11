import React from "react";
import SearchTab from "./SearchTab";
import TableStructure from "../component/tablerender/TableStructure";

const BackGroundSetup = () => {
  return (
    <div className="backGroundSetup">
          <SearchTab />
          <TableStructure/>
    </div>
  );
};

export default BackGroundSetup;
