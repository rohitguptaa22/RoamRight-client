import { Card, Grid, Paper } from "@mui/material";
import React from "react";
import AuthLayout from "../../Layouts/Auth/AuthLayout";
import LoginForm from "./LoginForm";
export interface Props {}

function Desktop(props: Props) {
	return (
		<Grid container className='bg-gray-300'>
			<Grid item sm>
				<Card className='flex justify-center h-full m-4 '>Hello World</Card>
			</Grid>
			<Grid item sm>
				<LoginForm {...props} />
			</Grid>
		</Grid>

		// <AuthLayout>
		// 	<Grid item sm>
		// 		<Paper>Hello World</Paper>
		// 	</Grid>
		// 	<Grid item sm>
		// 		<Paper>
		// 			{/* <LoginForm {...props} /> */}
		// 		</Paper>
		// 	</Grid>
		// </AuthLayout>
	);
}

export default Desktop;
