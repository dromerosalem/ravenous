import React from "react";
import Bussiness from "./Business";

function BusinessList() {

   
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-4"> 
                <Bussiness />
            </div>
            <div className="col-md-4">
                <Bussiness />
            </div>
            <div className="col-md-4">
                <Bussiness />
            </div>
            <div className="col-md-4">
                <Bussiness />
            </div>
            <div className="col-md-4">
                <Bussiness />
            </div>
            <div className="col-md-4">
                <Bussiness />
            </div>
        </div>
    </div>
    )
}

export default BusinessList;