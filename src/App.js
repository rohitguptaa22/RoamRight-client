import React from "react";
import { Header, Footer } from "./Layouts/Home";
import Home from "./components/Home";

const App = () => {
	return (
		// <div className=' flex items-center justify-center text-3xl font-bold underline'>
		<>
			<Header />
			<br />
			<Home />
			<br />
			<Footer />
		</>
	);
};

export default App;
