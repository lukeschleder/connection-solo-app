import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { Button, TextField, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import moment from 'moment';



class ConnectionOthers extends Component {
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
                                image="https://previews.123rf.com/images/psychoshadowmaker/psychoshadowmaker1603/psychoshadowmaker160300001/54992048-two-trees-in-front-of-each-other-with-their-roots-growing-together-business-collaboration-teamwork-a.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h7" component="h2">
                                    Current Connection Person: <br/><p>{this.props.user.others_connection_name}</p>
                                    Phonenumber: <br/><p>{this.props.user.others_connection_phonenumber}</p>
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
                                    <li></li>
                                    <li><a href="https://www.betterhelp.com/" target="_blank">betterhelp</a></li>
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

export default connect(mapReduxStateToProps)(withRouter(ConnectionOthers));