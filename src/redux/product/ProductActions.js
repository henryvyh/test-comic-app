import { toast } from "react-toastify";
import { axiosApp } from "../../config/axios";
import { PRODUCT_TYPE } from "./ProductTypes";

export const getProducts = async (dispatch, page, query) => {
	return await axiosApp({
		url: "comics",
		method: "get",
		params: {
			offset: page === 1 ? null : (page - 1) * 16,
			limit: 16,
			titleStartsWith: query?.trim(),
		},
	})
		.then(async (data) => {
			const { results, offset, total } = data?.data?.data;
			const paginate = { offset, total };
			await dispatch({
				type: PRODUCT_TYPE.SET_PRODUCTS,
				payload: results?.map((i) => {
					i.description = i?.description ?? "Sin descripción";
					let _price = i.prices[0].price;
					i.prices[0].price = _price ? _price : i?.title?.charCodeAt(0);
					return i;
				}),
			});
			dispatch({ type: PRODUCT_TYPE.SET_PAGINATE, payload: paginate });
		})
		.catch((e) => {
			toast.error(e?.response?.error);
		});
};

export const getDetailProduct = async (id) => {
	return await axiosApp({
		url: `comics/${id}`,
		method: "get",
	})
		.then(async (data) => {
			const { results } = data?.data?.data;
			if (!results?.length) return null;
			return results[0];
		})
		.catch((e) => {
			return null;
		});
};
