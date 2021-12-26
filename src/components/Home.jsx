import React, { useEffect, useState } from "react";
import Header from "./global/header/Header";
import Product from "./product/Product";
import { Stack } from "@mui/material";
import "./home.sass";
import { getProducts } from "../redux/product/ProductActions";
import BuildLoading from "./global/loading/BuildLoading";
import { useDispatch, useSelector } from "react-redux";
import { addProductCart, removeProductCart } from "../redux/cart/CartActions";
import ProductDetail from "./product/ProductDetail";
import PaginationView from "./product/Pagination";
import CustomConfirm from "./global/confirm/Confirm";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import EmptyProducts from "./global/EmptyProducts";

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [pageView, setPageView] = useState(1);
	const [query, setQuery] = useState(null);
	const [showConfirm, setShowConfirm] = useState(false);
	const dispatch = useDispatch();
	const { products, paginate } = useSelector(
		(reducers) => reducers.productsReducer
	);
	const { cart } = useSelector((reducers) => reducers.cartReducer);
	const [open, setOpen] = useState(false);
	const [currentData, setCurrentData] = useState();

	useEffect(() => {
		callbackgetProduct();
	}, [pageView]);
	const handleChange = (event, value) => {
		setPageView(value);
	};
	const callbackgetProduct = async () => {
		setLoading(true);
		// await getProducts(dispatch, pageView, query);
		setLoading(false);
	};
	const onManageCart = async (e) => {
		let added = isAdded(e);
		if (added) {
			setCurrentData(e);
			setShowConfirm(true);
			return;
		}
		await addProductCart(dispatch, e);
	};
	const onDetail = (e) => {
		setCurrentData(e);
		setOpen(true);
	};
	const isAdded = (e) => cart?.filter((c) => c?.id === e?.id)?.length;
	const searchData = async (e) => {
		setLoading(true);
		setQuery(e);
		return await getProducts(dispatch, pageView, e);
	};

	const searchAPIDebounced = AwesomeDebouncePromise(searchData, 1000);
	const onInputChange = async (e) => {
		let val = e.target.value;
		if (!val?.trim()) {
			return;
		}
		await searchAPIDebounced(val);
		setLoading(false);
	};
	return (
		<>
			<Header onDetail={onDetail} onInputChange={onInputChange} />
			<Stack
				className={`${
					products?.length || loading ? "home__wrap" : "home__wrap--empty"
				} home__wrap--loading scroll-material`}
			>
				{loading ? (
					<BuildLoading />
				) : products?.length ? (
					products?.map((product, i) => (
						<Product
							key={i}
							data={product}
							onDetail={onDetail}
							onManageCart={onManageCart}
							isAdded={isAdded(product)}
						/>
					))
				) : (
					<EmptyProducts />
				)}
			</Stack>
			{!loading && products?.length ? (
				<PaginationView
					paginate={paginate}
					page={pageView}
					handleChange={handleChange}
				/>
			) : null}
			{currentData ? (
				<ProductDetail
					data={currentData}
					open={open}
					setOpen={setOpen}
					isAdded={isAdded(currentData)}
					onClick={onManageCart}
				/>
			) : null}
			<CustomConfirm
				title={`Quitar producto?`}
				message={`¿Está seguro de quitar el producto ${currentData?.title} del carrito?`}
				showConfirm={showConfirm}
				setShowConfirm={setShowConfirm}
				accept={{ action: () => removeProductCart(dispatch, currentData) }}
			/>
		</>
	);
};

export default Home;
