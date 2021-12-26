import React from "react";
import { Button, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/RemoveShoppingCart";
const ButtonProduct = ({ data, loading, isAdded, onClick }) => {
	return (
		<Tooltip title={isAdded ? "Quitar producto" : "Agregar a la cesta"}>
			<Button
				onClick={() => onClick?.(data)}
				color={isAdded ? "secondary" : "inherit"}
				variant="outlined"
				sx={{ borderRadius: 8 }}
				startIcon={isAdded ? <DeleteIcon /> : <AddIcon />}
			>
				{loading
					? isAdded
						? "Eliminando..."
						: "Agregando..."
					: isAdded
					? "Eliminar"
					: "Agregar"}
			</Button>
		</Tooltip>
	);
};

export default ButtonProduct;
