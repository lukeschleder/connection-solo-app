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
                                    <li><a href="https://www.amazon.com/Addicted-Monkey-Mind-Programming-Sabotages/dp/0692978593/ref=pd_sbs_14_6/138-2615827-6955624?_encoding=UTF8&pd_rd_i=0692978593&pd_rd_r=7a1bbb6b-37a2-43f6-a384-7a0083e2ffc2&pd_rd_w=uzJrM&pd_rd_wg=1YlO5&pf_rd_p=5873ae95-9063-4a23-9b7e-eafa738c2269&pf_rd_r=4M2BZCT54XAR9BGRK3BQ&psc=1&refRID=4M2BZCT54XAR9BGRK3BQ">Addicted to the Monkey Mind: Change the Programming That Sabotages Your Life 1st Edition</a> - In his book, J.F. Benoist—a visionary thought leader in the fields of addiction treatment and personal development—uses the journeys of two relatable characters to teach you how to develop a powerful new mindset and finally break the pattern of negative self-talk.</li>
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