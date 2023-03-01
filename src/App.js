import React from "react";
import { Header, Footer } from "./Layouts/Home";
import Home from "./components/Home";
import { CssBaseline, Box } from "@mui/material";
import Login from "./components/Login";

const App = () => {
	return (
		<div className='p-4'>
			<Box className='bg-bermuda h-full mr-4 '>
				<Home />
			</Box>
		</div>
	);
};

export default App;
