import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LoadingPage from "./components/global/loading/LoadingPage";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<Suspense fallback={<LoadingPage />}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Suspense>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
