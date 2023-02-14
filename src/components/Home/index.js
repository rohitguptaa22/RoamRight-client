import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Header, Footer } from "../../Layouts/Home";
import MainContent from "./MainContent";

const index = () => {
	return (
		<>
			<Header />

			<MainContent />
			<Footer />
		</>
	);
};

export default index;
