import React, { Component } from 'react';


class Search extends React.component{
    constructor(props){
        super( props )
    
        this.state={
            query:"",
            results:{},
            loading: false,
            message:''
        }
    }
    render(){
        return(
            <div className="container">
                {/* this should somehow connect to the bootstrap search button */}
              
            </div>
        )
    }
    }

export default Search