import React, { useEffect, useState } from "react";
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	Chip,
	Stack,
	CardHeader,
	CircularProgress,
	ListItemText,
} from "@mui/material";
import ButtonProduct from "./ButtonProduct";
import ImageView from "../global/ImageView";
import { getDetailProduct } from "../../redux/product/ProductActions";
import FaceIcon from "@mui/icons-material/Face";
import moment from "moment";

const ProductDetail = ({ data, isAdded, open, setOpen, onClick }) => {
	const [viewData, setViewData] = useState({});
	const { title, description, modified, thumbnail } = viewData;
	const _img = `${thumbnail?.path}.${thumbnail?.extension}`;
	const [loading, setLoading] = useState(true);
	const onClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		if (open) callbackgetDetail();
	}, [data]);
	const callbackgetDetail = async () => {
		let newData = await getDetailProduct(data?.id);
		setViewData(newData);
		setLoading(false);
	};
	return (
		<Dialog open={open} onClose={onClose}>
			<DialogContent
				sx={{
					display: "flex",
					flexDirection: "column",
					minWidth: { md: "480px" },
				}}
			>
				{loading ? (
					<Stack sx={{ alignItems: "center" }}>
						<ListItemText primary="Getting detail product..." />
						<CircularProgress color="secondary" />
					</Stack>
				) : (
					<>
						<ImageView height={320} src={_img} />
						<CardHeader
							title={title}
							subheader={`Modificado ${moment(modified).format("LLLL a")}`}
						/>
						<Stack
							sx={{ overflow: "auto", flexGrow: 1 }}
							className="scroll-material"
						>
							<DialogContentText>{description}</DialogContentText>
							<ListItemText primary="Creators" />
							<Stack
								direction="row"
								spacing={1}
								sx={{
									flexWrap: "wrap",
									listStyle: "none",
									alignItems: "center",
								}}
							>
								{viewData?.creators?.items?.map((se, k) => (
									<Chip
										key={k}
										icon={<FaceIcon />}
										label={se?.name}
										sx={{ margin: "1em 0" }}
									/>
								))}
							</Stack>
							<ListItemText primary="Stories" />
							<Stack
								direction="row"
								spacing={1}
								sx={{
									flexWrap: "wrap",
									listStyle: "none",
									alignItems: "center",
								}}
							>
								{viewData?.stories?.items?.map((se, k) => (
									<Chip
										key={k}
										icon={<FaceIcon />}
										label="With Icon"
										variant="outlined"
										sx={{ margin: "1em 0" }}
									/>
								))}
							</Stack>
						</Stack>
						<DialogActions>
							<ButtonProduct isAdded={isAdded} onClick={onClick} data={data} />
						</DialogActions>
					</>
				)}
			</DialogContent>
		</Dialog>
	);
};

export default ProductDetail;
