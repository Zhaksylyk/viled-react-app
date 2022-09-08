import React from "react";
import "./style.css";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationBlock = () => {
  return (
    <div className="pagination">
      <Stack spacing={2}>
        <Pagination count={2} defaultPage={1} siblingCount={2} />
      </Stack>
    </div>
  );
};

export default PaginationBlock;
