import React from "react";
import TableBody from "@mui/material/TableBody";
import eyePic from "../../image/blueEye.png";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
const TableBodyRender = ({ data }) => {


  return (
    <TableBody>
      {data.map((ele, key) => (
        <TableRow
          key={key}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {ele["SNo"]}
          </TableCell>
          <TableCell align="left">
            <ul className="innerDataMapping">
              {ele["projectDetails"].map((ele, key) => (
                <li key={key}>{ele}</li>
              ))}
            </ul>
          </TableCell>
          <TableCell align="left">
            {" "}
            <ul className="innerDataMapping">
              {ele["requestDetails"].map((ele, key) => (
                <li key={key}>{ele}</li>
              ))}
            </ul>
          </TableCell>
          <TableCell align="left">{ele.pi}</TableCell>
          <TableCell align="left">
            {
              <ul className="innerDataMapping">
                {ele["instituteAndDepartment"].map((ele, key) => (
                  <li key={key}>{ele}</li>
                ))}
              </ul>
            }
          </TableCell>
          <TableCell align="left">
            <div className={`tableStatus${ele.status}`}>{ele.status}</div>
          </TableCell>
          <TableCell align="left" className="imgCell">
            {<img src={eyePic} />}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableBodyRender;
