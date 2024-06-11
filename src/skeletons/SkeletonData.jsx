import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import "./Skeleton.css";
const SkeletonData = () => {
  return (
    <TableBody>
      {[1, 2, 3, 4, 5].map((ele, key) => (
        <TableRow
          key={key}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            <div className="skeletonSNo"></div>
          </TableCell>

          <TableCell align="left" >
            <ul className="skeletonProjectDetails">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </TableCell>

          <TableCell align="left">
            <ul className="skeletonRequestDetails">
              <li></li>
              <li></li>
            </ul>
          </TableCell>

          <TableCell align="left">
            {" "}
            <div className="skeletonPI"></div>
          </TableCell>

          <TableCell align="left">
            <ul className="skeletonIandD">
              <li></li>
              <li></li>
            </ul>
          </TableCell>

          <TableCell align="left">
            {" "}
            <div className="skeletonStatus"></div>
          </TableCell>

          <TableCell align="left" className="imgCell">
            {" "}
            <div className="skeletonAction"></div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default SkeletonData;
