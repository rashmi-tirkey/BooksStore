import React, { Component } from 'react'

import BookCard  from '../../Molecules/BookCard/bookCard'
import bookdata from './../../Constant/booklist.json'
//import Images from './../../Assets/Image'
import {catagoryName} from './../../Constant/index'
import './home.scss';

export default class Home extends Component {
    state={
        bookdata:[],
        selectedCatagory:""
    }
    componentDidMount(){
        this.setState({
            bookdata:bookdata,
            
        })
    }
    // sortAscending = () => {
    //     const { bookdata } = this.state;
    //     bookdata.sort((a, b) => a - b)    
    //     this.setState({ bookdata })
        
    //   }
    
    //   sortDescending = () => {
    //     const { bookdata } = this.state;
    //     bookdata.sort((a, b) => a - b).reverse()
    //     this.setState({ bookdata })
    //   }
    sortBookByPrice = (e)=>{
      let bookArray = this.state.bookdata
       //console.log(bookArray,"first--------------")
    //    let i, j, temp
    //    for (i = 0; i < bookArray.length - 1; i++)  
    //    { 
    //        for (j = 0; j < bookArray.length - i - 1; j++)  
    //        { 
    //            if (bookArray[j].price > bookArray[j + 1].price)  
    //            { 
    //             console.log(bookArray[j].price,"first\--------------",bookArray[j+1].price)
    //                temp = bookArray[j]; 
    //                bookArray[j] = bookArray[j + 1]; 
    //                bookArray[j + 1] = temp;
    //            } 
    //        } 
    //    } 
    bookArray=bookArray.sort((price1, price2)=>{return price1.price>price2.price})
       //console.log(bookArray,"second--------------")
        this.setState({
        bookdata:bookArray
        })
    }
    selectCatagory = (catagoryName) =>{
        this.setState({selectedCatagory:catagoryName})
    }
    render() {
        console.log(bookdata)
        return (
            <div className="home-wrapper">
                <div className="catagory-name">
                    {
                        catagoryName.map((data,index)=>{
                            
                            return(
                             <div onClick={()=>this.selectCatagory(data.name)} key={index}>
                                <img src ={data.image}/>
                                 {data.name} 
                             </div>
                            )
                        })
                    }

                </div>
               Sort By <select onChange={this.sortBookByPrice}>
                    <option value="LTH">Price: Low To High</option>
                    <option value="HTL">Price: High To Low</option>
                </select>
                <div className="side-wrapper-left"> 
                   <p className="side-menu">Filters</p> 
                    <p className="side-menu">CATEGORIES</p>
                    <div className="side-menu">
                        <select className="side-menu">
                            <option>Books</option>
                            <option>Graphics Novels</option>
                        </select>
                    </div>
                    <p>Customers Ratings</p>
                    <p>LANGUAGE</p>
                </div>
                <div className="book-card-container">
                {
                   this.state.bookdata.map((data, index) => {
                       
                        return (
                            <BookCard 
                                title={data.title} 
                                author={data.authors} 
                                price={data.price}
                                catagory={data.categories}
                                image={data.thumbnailUrl}
                                pageCount={data.pageCount}
                                shortDescription={data.shortDescription}
                                longDescription={data.longDescription}
                            />
                        )
                    })
                }   
                </div>
            </div>
        )
    }
}
