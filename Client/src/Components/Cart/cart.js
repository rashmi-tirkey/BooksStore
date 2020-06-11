import React, { Component } from 'react'
import { withRouter } from "react-router";
//import bookdata from './../../Constant/booklist.json'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid} from '@material-ui/core'
import Home from './../../Components/Home/home'
import './cart.scss'
class Cart extends Component {
    componentDidMount(){
        let x = localStorage.getItem("token");
        if(x!=="123xyz"){
            this.props.history.push("/")
        }
    }
    render() {
        
        //const classes = useStyles();
         const bull = <span>•</span>;
        return (
            <div>
                 {/* <h3>This is Book List</h3>
                <div className="home-wrapper" style={{ display: "flex", flexWrap: "wrap", textAlign: "center" }}>
                    {
                        bookdata.map((data, index) => {
                            return (
                                <div className="book-wrapper" style={{ padding: "10px", margin: "10px", width: "29%" }}>
                                    <div>
                                        <img src={data.thumbnailUrl}></img>
                                    </div>
                                    <div>
                                        {data.title}
                                    </div>
                                    <div>
                                        {data.authors}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div> 
                 */}
                 <Grid container>
                    <Grid item xs={12} sm={6} md={4}>
                        <Card className="root">
                            <CardContent>
                                sgshfgsdjfg
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                </Grid>
                </Grid>
            </div>
        )
    }
}

export default withRouter(Cart)