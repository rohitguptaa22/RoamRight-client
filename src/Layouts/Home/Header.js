import React from "react";
import {
	AppBar,
	Box,
	Button,
	// CssBaseline,
	Toolbar,
	Typography,
} from "@mui/material";
import logo from "../../assets/images/logo-white.png";

const Header = () => {
	return (
		<>
			<Box
				sx={{
					paddingBottom: 5,
				}}
			>
				<AppBar position='static' style={{ background: "#444" }}>
					<Toolbar>
						<Box
							// alignSelf='center'
							component='img'
							sx={{
								height: 50,
							}}
							alt='natours.png'
							src={logo}
						/>

						<Typography
							// align='center'
							variant='h4'
							component='div'
							sx={{ flexGrow: 1 }}
						>
							Natours
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
			{/* <AppBar style={{ background: "#444" }} className='flex p-auto'>
				<Toolbar className='flex'>
					<Button>
						<Typography>All Tours</Typography>
					</Button>
					<Typography variant='h6' className='flex justify-center items-center'>
						Icon
					</Typography>
				</Toolbar>
			</AppBar> */}
		</>
	);
};

export default Header;
