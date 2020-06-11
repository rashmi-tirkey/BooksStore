import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import {Grid} from '@material-ui/core'
import './bookCard.scss'
export default class BookCard extends Component {
    state={
        bookPrice:"",
        bookAuthor:"",
        bookCatagory:""
    }

    componentDidMount(){
        let bookAuthor = this.props.author
        bookAuthor = bookAuthor.toString();
        let bookCatagory=this.props.catagory
        bookCatagory = bookCatagory.toString();
        let price=this.props.price
        let num= price.toFixed(2)
        this.setState({
            bookPrice:num,
            bookAuthor:bookAuthor,
            bookCatagory:bookCatagory
        })
        
         
     }
    render() {
        return (
            <Grid className="card-wrapper">
               <Card className="card-details" >
                 <div className="card-image"><img src={this.props.image}/></div>
                    <div className="card-title">{this.props.title}</div>
                    <div className="card-author">{this.state.bookAuthor}</div>
                    <div className="card-price">Rs.{this.state.bookPrice}</div>  
                    <div className="card-categories">{this.state.bookCatagory}</div> 
                    <div className="card-pageCount">{this.props.pageCount}</div>  
                   
                    
                </Card>
            </Grid>
        )
    }
}
