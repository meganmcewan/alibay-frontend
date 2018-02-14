import React, { Component } from 'react'


class Search extends Component{
    constructor(){
        super();
        this.state = {
            items: []
        } 
    }
    render(){
        return(
            <div id= 'Product'>
                <div className= "search-div">
                    <input className="search-bar" placeholder="search" ref={srch => this.searchInput = srch}></input>
                    <button onClick = {this.runSearch}>submit</button>
                </div>
                <div>Showing: {!this.props.searchInput?"All items":this.props.searchInput}</div>
                <div className = "gallery">
                    {this.props.items.map(this.props.drawItem)}                        
                </div>
            </div> 
        )      
    }   
  }


export default Search