import React, { useState } from "react";
import { CardMedia, CircularProgress, Stack } from "@mui/material";

const ImageView = ({ src, height, onClick }) => {
	const [load, setLoad] = useState(false);
	return (
		<Stack
			sx={{
				position: "relative",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			{!load ? (
				<CircularProgress color="secondary" sx={{ position: "absolute" }} />
			) : null}
			<CardMedia
				onClick={() => onClick?.()}
				component="img"
				height={height ?? "194"}
				image={src}
				sx={{ cursor: onClick ? "pointer" : "default" }}
				alt="Paella dish"
				onLoad={() => setLoad(true)}
			/>
		</Stack>
	);
};

export default ImageView;
