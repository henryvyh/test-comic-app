import { toast } from "react-toastify";
import { CART_TYPE } from "./CartTypes";

export const addProductCart = async (dispatch, obj) => {
	await dispatch({ type: CART_TYPE.ADD_PRODUCT, payload: obj });
	return toast.success(`Producto "${obj?.title}" agrego a la cesta.`);
};
export const removeProductCart = async (dispatch, obj) => {
	await dispatch({ type: CART_TYPE.REMOVE_PRODUCT, payload: obj });
	return toast.error(`Producto "${obj?.title}" eliminado a la cesta.`);
};
export const cleanCart = async (dispatch, checkout) => {
	await dispatch({ type: CART_TYPE.CLEAN_CART, payload: null });
	return checkout
		? toast.success(`Compra completada.`)
		: toast.error(`Carrito de compras limpiado.`);
};
