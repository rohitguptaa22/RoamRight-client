import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Navigate,
	Route,
} from "react-router-dom";
import App from "../App";
import Login from "../components/Login";

const RootRouter = () => {
	return (
		<Router>
			<div
				style={{
					width: "100vw",
					height: "100vh",
				}}
			>
				<Routes>
					<Route exact path='/' element={<Login />} />
					<Route exact path='/home' element={<App />} />
				</Routes>
			</div>
		</Router>
	);
};

export default RootRouter;
