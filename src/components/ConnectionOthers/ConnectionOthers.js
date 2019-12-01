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
                                    Current Connection Person: <br/><p className="goalsLI">{this.props.user.others_connection_name}</p>
                                    Phone Number: <br/><p className="goalsLI"><a href="tel:{this.props.user.others_connection_phonenumber}">{this.props.user.others_connection_phonenumber}</a></p>
                                 </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    <h2>Podcasts:</h2>
                                    <li><a href="https://podcasts.apple.com/us/podcast/thich-nhat-hanh-dharma-talks/id480787112" target="_blank">Thich Nhat Hanh Dharma Talks</a> - Dharma talks from the Zen Master Thich Nhat Hanh. One of the best known and most respected Zen masters in the world today, poet, and peace and human rights activist, Thich Nhat Hanh has led an extraordinary life.</li>
                                    <li><a href="https://www.podcastone.com/Dr-Drew-Show" target="_blank"> THE DR. DREW PODCAST</a> - Dr. Drew Pinsky, board certified internist and addiction medicine specialist, takes listener calls and talks to experts on a variety of topics relating to health, relationships, sex and drug addiction.</li>
                                    <br/>
                                    <h2>Books:</h2>
                                    <br/>
                                    <li><a href="https://www.amazon.com/Art-Communicating-Thich-Nhat-Hanh/dp/0062224662/ref=sr_1_4?keywords=thich+nhat+hanh+relationships&qid=1575219882&s=books&sr=1-4" target="_blank"> The Art of Communicating</a> - In this precise and practical guide, Buddhist monk Thich Nhat Hanh reveals how to listen mindfully and express your fullest and most authentic self. With examples from his work with couples, families, and international conflicts, The Art of Communicating helps us move beyond the perils and frustrations of misrepresentation and misunderstanding to learn the listening and speaking skills that will forever change how we experience and impact the world.</li>
                                    <li><a href="https://www.amazon.com/Addicted-Monkey-Mind-Programming-Sabotages/dp/0692978593/ref=pd_sbs_14_6/138-2615827-6955624?_encoding=UTF8&pd_rd_i=0692978593&pd_rd_r=7a1bbb6b-37a2-43f6-a384-7a0083e2ffc2&pd_rd_w=uzJrM&pd_rd_wg=1YlO5&pf_rd_p=5873ae95-9063-4a23-9b7e-eafa738c2269&pf_rd_r=4M2BZCT54XAR9BGRK3BQ&psc=1&refRID=4M2BZCT54XAR9BGRK3BQ" target="_blank"> - Addicted to the Monkey Mind: Change the Programming That Sabotages Your Life 1st Edition</a> - In his book, J.F. Benoist—a visionary thought leader in the fields of addiction treatment and personal development—uses the journeys of two relatable characters to teach you how to develop a powerful new mindset and finally break the pattern of negative self-talk.</li>
                                    <li><a href="https://www.amazon.com/Mindful-Relationship-Habits-Practices-Connection/dp/1983507946/ref=sr_1_4?crid=2VJUSPD5UG4R3&keywords=relationship+books&qid=1575218939&s=books&sprefix=relationship%2Cstripbooks%2C158&sr=1-4" target="_blank">Mindful Relationship Habits: 25 Practices for Couples to Enhance Intimacy, Nurture Closeness, and Grow a Deeper Connection</a> - In Mindful Relationship Habits, Wall Street Journal bestselling authors S.J. Scott and Barrie Davenport show you how to have a more mindful relationship by applying 25 specific practices. These habits will help you be more present with one another, communicate better, avoid divisive arguments, and understand how to respond to one another's needs in a more loving, empathic, and conscious way.</li>
                                    <li><a href="https://www.amazon.com/Youre-Not-Crazy-Codependent-Addiction/dp/0615533469/ref=sr_1_3?crid=4J7QPS5WPT6Q&keywords=you%27re+not+crazy+-+you%27re+codependent&qid=1575219433&s=books&sprefix=you%27re+not+crazy%2Cstripbooks%2C153&sr=1-3" target="_blank">You're Not Crazy - You're Codependent.: What Everyone Affected by Addiction, Abuse, Trauma or Toxic Shaming Must know to have peace in their lives</a> - If your life has been affected by addiction (yours or someone else's), abuse, trauma or toxic shaming, you may also be struggling with another invisible problem - codependency. Without your even being aware of the connection to the above issues, it has created additional life-long challenges such as endless guilt, anxiety, perfectionism, need to control, depression, a history of dysfunctional relationships and much more. This easy to understand, interactive book will reveal how codependency has sobotaged you, the lies it created in your beliefs and the truths that expose them. Also included is a Guide to Recovery using simple acts of mindfulness to overcome harmful habits in your thinking, actions and choices that are keeping you from having peace. Once you understand you are not crazy, just coping with the deep-seated effects of codependency, you will be free to create the life you were always meant to have.</li>
                                    {/* <li><a href="" target="_blank"></a> </li> */}
                                    <h2>Online Resources for connection with others:</h2>
                                    <br/>
                                    <li><a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank">SAMHSA</a> - 24/7 SAMHSA’s National Helpline is a free, confidential, 24/7, 365-day-a-year treatment referral and information service (in English and Spanish) for individuals and families facing mental and/or substance use disorders.</li>
                                    <li><a href="https://namimn.org/" target="_blank">National Alliance on Mental Illness MN</a> - NAMI Minnesota (National Alliance on Mental Illness) is a non-profit organization dedicated to improving the lives of children and adults with mental illnesses and their families.</li>
                                    <li><a href="https://www.betterhelp.com/" target="_blank">betterhelp</a> - Making professional counseling accessible, affordable, convenient - so anyone who struggles with life’s challenges can get help, anytime, anywhere.</li>
                                    <br/>
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