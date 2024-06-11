import React, { useEffect, useRef, useState } from "react";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableBodyRender from "./TableBodyRender";
import SkeletonData from "../../skeletons/SkeletonData";
import axios from "axios";

const PAGE_NUMBER = 1;
const LIMIT = 5;

const TableStructure = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      axios
        .get(
          `http://127.0.0.1:8082/records/getrecords?page=${page}&limit=${LIMIT}`,
          {
            headers: { Authorization: "LittleBoy" },
          }
        )
        .then((res) => {
          return res.data;
        })
        .then((data) => {
          console.log("set has more-->",hasMore);
          setHasMore(!Object.keys(data).length === 0);
          setIsLoading(false);

          setData((prev) => [...prev, ...data]);
        })
        .catch((err) => {
          console.log("The axios is crashed ", err);
        });
      isMounted.current = true;
    }
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  const handleScroll = async () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      console.log("handleScroll ->",isLoading);
      if (hasMore) {
        setIsLoading(true);
      }

      isMounted.current = false;
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className="tableBackGround">
      <TableContainer>
        <Table sx={{ minWidth: 65 }} aria-label="simple table">
          <TableHead id="tableHead">
            <TableRow>
              <TableCell sx={{ width: "5%" }}>S.No</TableCell>
              <TableCell sx={{ width: "25%" }} align="left">
                Project Details
              </TableCell>
              <TableCell sx={{ width: "20%" }} align="left">
                Request Details
              </TableCell>
              <TableCell sx={{ width: "10%" }} align="left">
                PI
              </TableCell>
              <TableCell sx={{ width: "20%" }} align="left">
                Institute & Department
              </TableCell>
              <TableCell sx={{ width: "10%" }} align="left">
                status
              </TableCell>
              <TableCell sx={{ width: "10%" }} align="left">
                Action
              </TableCell>
            </TableRow>
          </TableHead>

          {<TableBodyRender {...{ data }} />}
          {isLoading  && <SkeletonData /> }
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableStructure;
