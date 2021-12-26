import Home from "./components/Home";
import { createTheme, ThemeProvider } from "@mui/material";
import "./assets/sass/app.sass";
import { COLORS } from "./constants/colors";
import store from "./redux/redux";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import "moment/locale/es"; // without this line it didn't work
moment.locale("es");
const App = () => {
	const theme = createTheme({
		palette: {
			mode: "dark",
			background: {
				default: COLORS.primary,
			},
			primary: {
				main: COLORS.primary,
				contrastText: COLORS.white,
			},
			secondary: { main: COLORS.secondary },
		},
	});
	return (
		<>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<Home />
				</ThemeProvider>
			</Provider>
			<ToastContainer
				position="bottom-right"
				autoClose={5000}
				hideProgressBar
				newestOnTop
				closeOnClick
				limit={8}
				theme="dark"
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
};

export default App;
