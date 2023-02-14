<<<<<<< Updated upstream
function App() {
	return <div className='text-5xl'>Hello World</div>;
}
=======
import React from "react";
import { Header, Footer } from "./Layouts/Home";
import Home from "./components/Home";
import { CssBaseline, Box } from "@mui/material";

const App = () => {
	return (
		// <div className=' flex items-center justify-center text-3xl font-bold underline'>
		<div className='p-4'>
			<Box className='bg-gray-300 h-full '>
				<Home />
			</Box>
		</div>
	);
};
>>>>>>> Stashed changes

export default App;
