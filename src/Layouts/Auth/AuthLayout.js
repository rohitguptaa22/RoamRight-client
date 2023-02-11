import React from "react";
import { Paper } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		display: "flex",
// 		height: "100%",
// 	},
// 	sidebar: {
// 		display: "flex",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		background: theme.palette.primary.main,
// 		paddingBottom: theme.spacing(5),
// 		width: theme.dimensions.sidebarWidth,
// 		[theme.breakpoints.down("lg")]: {
// 			width: theme.dimensions.sidebarWidthTablet,
// 		},
// 		[theme.breakpoints.down("sm")]: {
// 			width: "0px",
// 		},
// 	},
// 	paper: {
// 		display: "flex",
// 		flexDirection: "column",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		flex: 1,
// 		boxShadow: "-2px 0px 16px rgba(0, 0, 0, 0.25)",
// 		// [theme.breakpoints.up('lg')]: {
// 		//   padding: theme.spacing(0, 25, 0, 0),
// 		// },
// 	},
// }));

export interface LoginLayoutProps {}

const LoginLayout = ({ children }: LoginLayoutProps) => {
	// const classes = useStyles();
	return (
		<main className='flex h-screen'>
			<Paper className='flex w-full flex-col items-center justify-center h-full shadow-2xl'>
				{children}
			</Paper>
		</main>
	);
};

export default LoginLayout;
