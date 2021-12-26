import React from "react";
import {
	Avatar,
	IconButton,
	ListItemText,
	ListItem,
	ListItemAvatar,
	Divider,
	ListItemButton,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Image";
import DeleteIcon from "@mui/icons-material/DeleteSweep";

const ItemProductCart = ({ data, onDetail, callbackRemoveCart }) => {
	const { title, thumbnail, prices } = data;
	const _img = `${thumbnail?.path}.${thumbnail?.extension}`;

	return (
		<>
			<ListItem
				secondaryAction={
					<IconButton
						edge="end"
						aria-label="delete"
						onClick={() => callbackRemoveCart?.(data)}
					>
						<DeleteIcon />
					</IconButton>
				}
				disablePadding
			>
				<ListItemButton onClick={() => onDetail?.(data)} role={undefined} dense>
					<ListItemAvatar>
						<Avatar src={_img}>
							<FolderIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText
						primary={title}
						secondary={`S/. ${prices[0].price?.toFixed(2)}`}
					/>
				</ListItemButton>
			</ListItem>
			<Divider variant="inset" component="li" />
		</>
	);
};

export default ItemProductCart;
