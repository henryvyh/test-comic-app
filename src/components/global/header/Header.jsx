import React from "react";
import { AppBar, Box, Toolbar, Typography, Container } from "@mui/material";
import CartIcon from "../../cart/CartIcon";
import SearchView from "./SearchView";

const Header = ({ onDetail, onInputChange, loading }) => {
	return (
		<AppBar position="sticky">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ mr: 2, display: { md: "flex", xs: "none" } }}
						>
							TIENDA COMICS
						</Typography>
						<Typography
							variant="h6"
							noWrap
							component="div"
							sx={{ mr: 2, display: { md: "none" } }}
						>
							T C
						</Typography>
					</Box>
					<SearchView onInputChange={onInputChange} loading={loading} />
					<CartIcon onDetail={onDetail} />
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default Header;
