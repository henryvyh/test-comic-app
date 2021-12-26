import React, { useState } from "react";
import {
	Card,
	CardHeader,
	CardContent,
	CardActions,
	Box,
	Typography,
	ListItemText,
	ListItemButton,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/HelpOutline";
import ButtonProduct from "./ButtonProduct";
import ImageView from "../global/ImageView";

const Product = ({ data, onDetail, onManageCart, isAdded }) => {
	const [loading, setLoading] = useState(false);
	const { title, description, thumbnail, prices } = data;
	const callbackManageLocal = async () => {
		setLoading(true);
		await onManageCart?.(data);
		setLoading(false);
	};
	const _img = `${thumbnail?.path}.${thumbnail?.extension}`;
	return (
		<Card
			sx={{
				width: { xs: 290, md: 320 },
				overflow: "initial",
				margin: "0 auto",
			}}
		>
			<ImageView src={_img} onClick={() => onDetail(data)} />
			<CardHeader
				title={title}
				sx={{ height: "84px", overflow: "hidden", alignItems: "initial" }}
			/>
			<CardContent
				sx={{ padding: "0 1em", height: "84px", overflow: "hidden" }}
			>
				<Typography variant="body2" color="text.secondary">
					{description}
				</Typography>
			</CardContent>
			<Typography
				variant="h5"
				sx={{
					padding: "0 1em",
					textAlign: "right",
				}}
			>
				S/. {prices[0].price?.toFixed(2)}
			</Typography>
			<CardActions disableSpacing>
				<Box
					sx={{ flexGrow: 1, padding: "0 1em 0 0", display: { xs: "flex" } }}
				>
					<ListItemButton onClick={() => onDetail(data)}>
						<InfoIcon />
						<Box width={8} />
						<ListItemText primary="Vista previa" />
					</ListItemButton>
				</Box>
				<ButtonProduct
					loading={loading}
					isAdded={isAdded}
					onClick={callbackManageLocal}
					data={data}
				/>
			</CardActions>
		</Card>
	);
};

export default Product;
