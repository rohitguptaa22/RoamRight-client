import {
	Container,
	Box,
	Typography,
	Grid,
	Paper,
	Card,
	CardHeader,
	CardContent,
	CardMedia,
	CardActions,
	Button,
} from "@mui/material";
// import { flexbox } from "@mui/system";
import { React, useEffect, useState } from "react";
import logo from "../../assets/images/new-tour-1.jpg";
import axios from "axios";

const MainContent = () => {
	const [tours, setData] = useState([]);
	useEffect(() => {
		fetch("https://natours-server-l2t9.onrender.com/api/v1/tours")
			.then((response) => response.json())
			.then((data) => {
				setData(data.data.data);
				console.log("data", data.data.data);
			})
			.catch((err) => console.log(err));
	}, []);
	tours.map((tour) => {
		console.log(tour.name);
	});
	console.log(tours.type);
	return (
		// <main>
		<div className='pb-5'>
			{/* <Container fixed>
				<Typography
					align='center'
					variant='h4'
					color='textSecondary'
					gutterBottom
					sx={{ paddingBottom: 5 }}
				>
					All tours
				</Typography>
			</Container> */}
			<Container sx={{ padding: 6 }}>
				{/* <Grid sx={{ flexGrow: 1 }} container spacing={2}> */}
				{/* <Grid item xs={12}> */}
				<Grid container justifyContent='left' spacing={6}>
					{!tours
						? null
						: tours.map((value) => (
								<Grid key={value} item xs={12} sm={6} md={4}>
									<Card
										sx={{
											maxWidth: 345,

											// backgroundImage:
											// 	"linear-gradient(to right bottom, #7dd56f, #28b487)",
										}}
									>
										<CardMedia
											sx={{
												height: 140,
												backgroundImage:
													"linear-gradient(to right bottom, #7dd56f, #28b487)",
											}}
											src={`https://www.natours.dev/img/tours/tour-${4}-cover.jpg`}
											title='green iguana'
											// classes='bg-gradient-to-r from-cyan-500 to-blue-500'
										/>
										<CardContent>
											<Typography gutterBottom variant='h5' component='div'>
												{value.name}
											</Typography>
											<Typography variant='body2' color='text.secondary'>
												{value.summary}
											</Typography>
										</CardContent>
										<CardActions>
											<Button
												size='small'
												variant='outlined'
												sx={{ alignSelf: "center" }}
											>
												Details
											</Button>
											{/* <Button size='small' variant='contained'>
										Learn More
									</Button> */}
										</CardActions>
									</Card>
								</Grid>
						  ))}
				</Grid>
				{/* </Grid> */}
			</Container>
		</div>
	);
};

export default MainContent;
