import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { Button, TextField, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import moment from 'moment';



class ConnectionSelf extends Component {
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
                            image="https://images.all-free-download.com/images/graphicthumb/to_thrive_seedlings_picture_169092.jpg"
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h7" component="h2">
                                Current Self Goal: <br/><li>{this.props.user.self_connection}</li>
                                <br/>
                             </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <h3>Online Resources for self connection:</h3>
                                <br/>
                                <li><a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank">SAMHSA</a> - 24/7 SAMHSA’s National Helpline is a free, confidential, 24/7, 365-day-a-year treatment referral and information service (in English and Spanish) for individuals and families facing mental and/or substance use disorders.</li>
                                <li><a href="https://namimn.org/" target="_blank">National Alliance on Mental Illness MN</a> - NAMI Minnesota (National Alliance on Mental Illness) is a non-profit organization dedicated to improving the lives of children and adults with mental illnesses and their families.</li>
                                <li><a href="https://www.betterhelp.com/" target="_blank">betterhelp</a> - Making professional counseling accessible, affordable, convenient - so anyone who struggles with life’s challenges can get help, anytime, anywhere.</li>
                                <br/>
                                <h3>Books:</h3>
                                <br/>
                                <li><a href="https://www.amazon.com/Reconciliation-Healing-Thich-Nhat-Hanh/dp/1935209647/ref=sr_1_2?crid=1R1KAISHRAH8O&keywords=thich+nhat+hanh+reconciliation&qid=1575148484&sprefix=thich+nhat+hanh+rec%2Cdigital-text%2C167&sr=8-2">Reconciliation: Healing the Inner Child</a>Based on Dharma talks by Zen Master Thich Nhat Hanh and insights from participants in retreats for healing the inner child, this book is an exciting contribution to the growing trend of using Buddhist practices to encourage mental health and wellness. Reconciliation focuses on the theme of mindful awareness of our emotions and healing our relationships, as well as meditations and exercises to acknowledge and transform the hurt that many of us experienced as children. The book shows how anger, sadness, and fear can become joy and tranquility by learning to breathe with, explore, meditate, and speak about our strong emotions. Reconciliation offers specific practices designed to bring healing and release for people suffering from childhood trauma. The book is written for a wide audience and accessible to people of all backgrounds and spiritual traditions.</li>
                                <li><a href="https://www.amazon.com/This-Naked-Mind-Discover-Happiness-ebook/dp/B077VTJC8P" target="_blank">This Naked Mind</a> - This Naked Mind has ignited a movement across the country, helping thousands of people forever change their relationship with alcohol.</li>
                                <li><a href=""></a></li>
                                <li><a href=""></a></li>
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

export default connect(mapReduxStateToProps)(withRouter(ConnectionSelf));