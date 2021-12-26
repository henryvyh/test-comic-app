import React from "react";
import { Stack, Pagination } from "@mui/material";

const PaginationView = ({ paginate, page, handleChange }) => {
	const { limit, total } = paginate;
	const _pages = Math.floor(total / limit);
	return (
		<Stack alignItems="center" padding={2}>
			<Pagination
				count={_pages}
				page={page}
				boundaryCount={3}
				onChange={handleChange}
				showFirstButton
				showLastButton
			/>
		</Stack>
	);
};

export default PaginationView;
