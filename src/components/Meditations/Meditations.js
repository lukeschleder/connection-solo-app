import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { Button, TextField, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import moment from 'moment';



class Meditations extends Component {
    // creates random number
randomizerFunc=(min, max)=>{
    console.log("random")
    return Math.floor(Math.random() * (max + 1 - min) + min)
}
    // grabs random meditation when component loads
    componentDidMount () {
         const randomID = this.randomizerFunc(1,8);
        this.props.dispatch({ type: 'GET_MEDITATION', payload: {id: randomID}})
    }
    // routes to dashboard
    goBackToDashboard = () => {
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div className="App">
              
                <Card>
                    <CardActionArea>
                        <CardMedia
                            // className={classes.media}
                            style={{ height: 200 }}
                            image="https://images.pexels.com/photos/291732/pexels-photo-291732.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="h2">
                                Today's Date: {moment().toISOString().toString().split("T")[0]}
                                <br/>
                                Title: {this.props.randomMeditationReducer[0] && this.props.randomMeditationReducer[0].title}
                                <br/>
                                Author: {this.props.randomMeditationReducer[0] && this.props.randomMeditationReducer[0].author}
                             </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {this.props.randomMeditationReducer[0] && this.props.randomMeditationReducer[0].body}
                             </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={this.goBackToDashboard} size="small" color="primary">
                            Back
                         </Button>
                        <Button size="small" color="primary">
                            Favorite
                          </Button>
                    </CardActions>
                </Card>
                {/* <pre>{JSON.stringify( this.props.randomMeditationReducer, null, 2)}</pre> */}
            </div>
        );
    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(withRouter(Meditations));