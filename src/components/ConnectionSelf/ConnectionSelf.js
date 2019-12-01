import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { Button, TextField, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import moment from 'moment';
import './ConnectionSelf.css';


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
                                Current Self Goal: <br/><br/><li className="goalsLI">{this.props.user.self_connection}</li>
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
                                <li><a href="https://www.amazon.com/Reconciliation-Healing-Thich-Nhat-Hanh/dp/1935209647/ref=sr_1_2?crid=1R1KAISHRAH8O&keywords=thich+nhat+hanh+reconciliation&qid=1575148484&sprefix=thich+nhat+hanh+rec%2Cdigital-text%2C167&sr=8-2"> Reconciliation: Healing the Inner Child</a>Based on Dharma talks by Zen Master Thich Nhat Hanh and insights from participants in retreats for healing the inner child, this book is an exciting contribution to the growing trend of using Buddhist practices to encourage mental health and wellness. Reconciliation focuses on the theme of mindful awareness of our emotions and healing our relationships, as well as meditations and exercises to acknowledge and transform the hurt that many of us experienced as children. The book shows how anger, sadness, and fear can become joy and tranquility by learning to breathe with, explore, meditate, and speak about our strong emotions. Reconciliation offers specific practices designed to bring healing and release for people suffering from childhood trauma. The book is written for a wide audience and accessible to people of all backgrounds and spiritual traditions.</li>
                                <li><a href="https://www.amazon.com/This-Naked-Mind-Discover-Happiness-ebook/dp/B077VTJC8P" target="_blank">This Naked Mind</a> - This Naked Mind offers a new, positive solution. Here, Annie Grace clearly presents the psychological and neurological components of alcohol use based on the latest science, and reveals the cultural, social, and industry factors that support alcohol dependence in all of us.  Packed with surprising insight into the reasons we drink, this book will open your eyes to the startling role of alcohol in our culture, and how the stigma of alcoholism and recovery keeps people from getting the help they need. With Annie’s own extraordinary and candid personal story at its heart, this book is a must-read for anyone who drinks.</li>
                                <li><a href="https://www.amazon.com/Stupid-Things-That-Mess-Recovery/dp/1592854869/ref=sr_1_1?crid=2DZ3E71KO7JSI&keywords=12+stupid+things+that+mess+up+recovery&qid=1575215277&sprefix=12+stupid%2Caps%2C154&sr=8-1"> 12 Stupid Things That Mess Up Recovery: Avoiding Relapse through Self-Awareness and Right Action</a>In simple, down-to-earth language, Allen Berger explores the twelve most commonly confronted beliefs and attitudes that can sabotage recovery. He then provides tools for working through these problems in daily life. This useful guide offers fresh perspectives on how the process of change begins with basic self-awareness and a commitment to working a daily program.</li>
                                <li><a href="https://www.amazon.com/Want-Change-Life-Depression-Addiction/dp/1897572239/ref=sr_1_1?keywords=i+want+to+change+my+life&qid=1575215733&sr=8-1"> I Want to Change My Life: How to Overcome Anxiety, Depression and Addiction</a>The book contains a five-point plan for overcoming anxiety, depression, and addiction. Learn the symptoms, treatment, and relapse prevention strategies that will change your life. Learn new coping skills such as cognitive therapy, stress management, and mindfulness along with step-by-step instructions on how to use them. The book includes numerous exercises and a one-month program to help you get started. Dr. Melemis is a leading authority in addiction and mood disorders who has helped thousands of people improve their lives.</li>
                                <li><a href="https://www.amazon.com/dp/1455554588/ref=sspa_dk_detail_4?psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyUlFZOUhYWVAwNFpTJmVuY3J5cHRlZElkPUEwODA0MTAyM1BCUEpGNlowQkdPJmVuY3J5cHRlZEFkSWQ9QTA4MTQwOTkyUENMUlJMSTJaSkNKJndpZGdldE5hbWU9c3BfZGV0YWlsMiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="> Blackout: Remembering the Things I Drank to Forget </a>For Sarah Hepola, alcohol was "the gasoline of all adventure." She spent her evenings at cocktail parties and dark bars where she proudly stayed till last call. Drinking felt like freedom, part of her birthright as a strong, enlightened twenty-first-century woman.  But there was a price. She often blacked out, waking up with a blank space where four hours should be. Mornings became detective work on her own life. What did I say last night? How did I meet that guy? She apologized for things she couldn't remember doing, as though she were cleaning up after an evil twin. Publicly, she covered her shame with self-deprecating jokes, and her career flourished, but as the blackouts accumulated, she could no longer avoid a sinking truth. The fuel she thought she needed was draining her spirit instead.</li>
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