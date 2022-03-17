import PropTypes from "prop-types";
import React, { Component } from "react";

export const Card  = (props) => {
	return(
                    <div className="card" >
                        {/* <img src="..." className="card-img-top" alt="...">  */}
                        <div className="card-body">
                            <h5 className="card-title">{props.data.name}</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>              
    )
    
    };

    Card.propTypes ={
        data : PropTypes.object
    }

    
