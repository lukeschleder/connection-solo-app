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
randomizerFunc=(min, max)=>{
    console.log("random")
    return Math.floor(Math.random() * (max + 1 - min) + min)
}
    componentDidMount () {
         const randomID = this.randomizerFunc(1,5);
        this.props.dispatch({ type: 'GET_MEDITATION', payload: {id: randomID}})
    }

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
                            {/* During meditation, various feelings and thoughts may arise. If you don't practice mindfulness of breath, these thoughts will soon lure you away from mindfulness. But the breath isn't simply a means by which to chase away such thoughts and feelings. Breath remains the vehicle to unite mind and body and to open the gate of wisdom. When a feeling or thought arises, your intention should not be chase it away, even if by continuing to concentrate on the breath the feeling or thought passes away naturally. The intention isn't to chase it away, hate it, worry about it, or be frightened by it.
So what exactly should you be doing concerning such thoughts and feelings? Simply acknowledge their presence. For example, when a feeling of sadness arise, immediately recognize it: "A feeling of sadness has just arisen in me." If the feeling of sadness continues, continue to recognize "A feeling of sadness is still in me." If there is a thought like, "It's late but the neigbors are surely making a lot of noise," recognize that the thought has arisen. If the thought continues to exist, continue to recognize it. If a different feeling or thought arises, recognize it in the same manner.
The essential thing is to not let any feeling or thought arise without recognizing it in mindfulness, like a palace guard who is aware of every face that passes through the front corridor."
-- Thich Nhat Hanh */}
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
                <pre>{JSON.stringify( this.props.randomMeditationReducer, null, 2)}</pre>
            </div>
        );
    }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(withRouter(Meditations));