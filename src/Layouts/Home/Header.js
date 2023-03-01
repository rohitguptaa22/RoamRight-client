import React from "react";
import {
	AppBar,
	Box,
	Button,
	// CssBaseline,
	Toolbar,
	Typography,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo-white.png";

const Header = () => {
	const navigate = useNavigate();
	// const handleLogin = ( ) =>{
	// 	naviga
	// }
	return (
		<>
			<Box
				sx={{
					paddingBottom: 5,
				}}
			>
				<AppBar
					position='static'
					style={{
						background: "#444",
						height: "6rem",
						justifyContent: "center",
					}}
				>
					<Toolbar sx={{ position: "relative" }}>
						<Typography
							// align='center'
							variant='h5'
							component='div'
							sx={{ flexGrow: 1, width: "90%" }}
						>
							All Tours
						</Typography>
						<img
							src={logo}
							alt='new-logo'
							style={{
								height: 50,
								position: "absolute",
								left: "46%",
								// transform: "translateX(-50%)",
							}}
						/>
						<Button
							color='inherit'
							sx={{ padding: 1 }}
							onClick={() => navigate("/login")}
						>
							Login
						</Button>
						<Button
							color='inherit'
							sx={{ padding: 1, width: "15vh", margin: 5 }}
							variant='outlined'
						>
							Sign Up
						</Button>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default Header;
