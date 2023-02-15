import React from "react";
import { Header, Footer } from "./Layouts/Home";
import Home from "./components/Home";
import { CssBaseline, Box } from "@mui/material";

const App = () => {
	return (
		// <div className=' flex items-center justify-center text-3xl font-bold underline'>
		// <>
		// 	<Header />
		// 	<br />
		// 	<Home />
		// 	<br />
		// 	<Footer />
		// </>
		<div className='p-4'>
			<Box className='bg-bermuda h-full mr-4 '>
				<Home />
			</Box>
		</div>
	);
};

export default App;
