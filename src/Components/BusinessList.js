import React from "react";
import Bussiness from "./Business";

function BusinessList(props) {
    let propsObject = props.bussines; 
   
    return (
        <div className="container">
        <div className="row">
             
                {propsObject.map(obj => {
                   return(
                    <div className="col-md-4">
                        <Bussiness key={obj.name} bussisnes={obj}/>
                    </div>
                   ) 
                })}
            
        </div>
    </div>
    )
}

export default BusinessList;



