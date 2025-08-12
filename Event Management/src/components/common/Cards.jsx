import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './Cards.css'



export default function Cards(props) {
    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea >
                <CardMedia
                    component={props.component}
                    height={props.height}
                    image={props.image} className='cards-image'
                    alt={props.alt}
                />
                {/* <CardContent >
                    <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center', color: 'black' }} >
                        {props.heading}
                    </Typography>
                    <Typography variant="body2" sx={{ textAlign: 'center',color: 'black' }} >
                        {props.body}
                    </Typography>
                </CardContent> */}
            </CardActionArea>
        </Card>
        
    );
}