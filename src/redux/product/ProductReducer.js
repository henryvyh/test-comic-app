import { PRODUCT_TYPE } from "./ProductTypes";

const initialState = {
	products: [],
	paginate: {
		offset: 0,
		limit: 16,
		total: 0,
		count: 16,
	},
};
export default function productsReducer(state = initialState, action) {
	switch (action.type) {
		case PRODUCT_TYPE.SET_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};
		case PRODUCT_TYPE.SET_PAGINATE:
			return {
				...state,
				paginate: { ...state.paginate, ...action.payload },
			};
		default:
			return state;
	}
}
