import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { HashRouter as Router, Route, Link, withRouter, Switch } from 'react-router-dom';
import './Dashboard.css';


class Dashboard extends Component {


    gotoTrackerPage =() => {
        this.props.history.push('/trackerpage');
    }

    gotoMeditations = () => {
        this.props.history.push('/dailymeditations')
    }

    // takes in a single movie and dispatch's an action that will eventually return genres

    // Renders the entire app on the DOM
    render() {
        return (
            // <Grid
            //     container
            //     wrap='wrap'
            //     alignContent='space-around'
            //     justify='center'
            // >
            //         <Card style={{ maxWidth: 350 }}>
            //             <CardActionArea>

            //                 {/* <CardMedia
            //                     style={{ height: 500 }}
            //                     image={}
            //                     title={}
            //                 /> */}
            //                 <CardContent>
            //                     <Typography gutterBottom variant="h5" component="h2">
            //                         Hello
            //                     </Typography>
            //                     <Typography variant="body2" color="textSecondary" component="p">
            //                         Yes please!
            //                     </Typography>
            //                 </CardContent>
            //             </CardActionArea>
            //             <CardActions>
            //                 <Button size="small" color="primary">
            //                     Learn More
            //           </Button>
            //             </CardActions>
            //         </Card>
            // </Grid>
            <div class="container">
                        <div class="box" id="trackerBox" onClick={this.gotoTrackerPage}><p>Tracker Page</p><i class="fas fa-clock fa-2x"></i></div>
                        <div class="box" id="meditationsBox" onClick={this.gotoMeditations}><p>Daily Meditations</p><i class="fas fa-book-reader fa-2x"></i></div>
                        <div class="box" id="selfBox"><p>Connection with Self</p><i class="fas fa-tree fa-2x"></i></div>
                        <div class="box" id="othersBox"><p>Connection with Others </p><i class="fas fa-tree fa-2x"></i><i class="fas fa-tree fa-2x"></i></div>
                    </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(withRouter(Dashboard));