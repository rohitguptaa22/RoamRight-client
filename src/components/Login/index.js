import React from "react";
import AuthLayout from "../../Layouts/Auth/AuthLayout";
import LoginForm from "./LoginForm";
export interface Props {}

function Desktop(props: Props) {
	return (
		<AuthLayout>
			<LoginForm {...props} />
		</AuthLayout>
	);
}

export default Desktop;
