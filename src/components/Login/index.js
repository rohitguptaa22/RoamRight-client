import { Card, Grid, Paper } from "@mui/material";
import React from "react";
import AuthLayout from "../../Layouts/Auth/AuthLayout";
import LoginForm from "./LoginForm";
export interface Props {}

function Login(props: Props) {
	return (
		<div className='bg-blue'>
			<LoginForm {...props} />
		</div>
		// <Grid container className='flex bg-gray-300'>
		// 	<Grid item sm>

		// 	</Grid>
		// </Grid>
	);
}

export default Login;
