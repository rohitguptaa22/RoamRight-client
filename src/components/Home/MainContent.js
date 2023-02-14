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
import { flexbox } from "@mui/system";
import React from "react";
import logo from "../../assets/images/new-tour-1.jpg";

const MainContent = () => {
	return (
		// <main>
		<div className='pb-5'>
			<Container fixed>
				<Typography
					align='center'
					variant='h4'
					color='textSecondary'
					gutterBottom
					sx={{ paddingBottom: 5 }}
				>
					All tours
				</Typography>
			</Container>
			<Container>
				{/* <Grid sx={{ flexGrow: 1 }} container spacing={2}> */}
				{/* <Grid item xs={12}> */}
				<Grid container justifyContent='center' spacing={4}>
					{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
						<Grid key={value} item xs={12} sm={6} md={4}>
							<Card sx={{ maxWidth: 345 }}>
								<CardMedia
									sx={{ height: 140 }}
									image={logo}
									title='green iguana'
								/>
								<CardContent>
									<Typography gutterBottom variant='h5' component='div'>
										Lizard
									</Typography>
									<Typography variant='body2' color='text.secondary'>
										Lizards are a widespread group of squamate reptiles, with
										over 6,000 species, ranging across all continents except
										Antarctica
									</Typography>
								</CardContent>
								<CardActions>
									<Button size='small'>Share</Button>
									<Button size='small'>Learn More</Button>
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
