import { useState } from "react";
// import "../Styles/App.css";
import SignupPage from "./SignupPage";
import QueryPage from "./QueryPage";
import Index from "./MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import MainPage from "./MainPage";
import { HiMenu } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import Admin from "./Admin";
import Login from "../auth/login";
import Register from "../auth/register";
import { AuthProvider } from "../contexts/authContext";
import Header from "./Header";
import { QueryProvider } from "../contexts/queryContext";
<<<<<<< HEAD
import Bank from "./Bank";
import EmiCalculator from "./EmiCalculator";
=======
import Scholarship from "./Scholarship";
>>>>>>> b89da44e010f6c0c706ba1d399c4833115fc1cdd


// import "@fontsource/poppins"; // Defaults to weight 400
// import "@fontsource/poppins/400.css"; // Specify weight
// import "@fontsource/poppins/400-italic.css"; // Specify weight and style




const App = () => {
	const [isLogin, setIsLogin] = useState(false);
	return (
		<>
			<AuthProvider>
				<QueryProvider>
					<BrowserRouter>
						<Header />
						<Routes>
							<Route path="/" element={<Login />} />
							<Route path="/register" element={<Register />} />
							<Route path="/querypage" element={<QueryPage />} />
							<Route path="/mainpage" element={<MainPage />} />
							<Route path="/Admin" element={<Admin />} />
<<<<<<< HEAD
							<Route path="/Bank" element={<Bank />} />
							<Route path="/Emi" element={<EmiCalculator />} />
=======
							<Route path="/Scholarship" element={<Scholarship />} />
>>>>>>> b89da44e010f6c0c706ba1d399c4833115fc1cdd
							{/* <Route
            path="querypage"
            element={isLogin ? <QueryPage /> : <LoginPage />}
		/> */}
						</Routes>
					</BrowserRouter>
					<ThemeToggle />
				</QueryProvider>
			</AuthProvider>
		</>
	);
};

export default App;
