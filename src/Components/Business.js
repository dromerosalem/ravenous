import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Bussiness(props) {


    let bussiness = props.bussisnes;
    console.log(bussiness)


    return (
        <div className="card m-2">
            <img src={bussiness.imageSrc} className="card-img-top" />
            <h2 className="card-title">{bussiness.name}</h2>

            <div className='card-body d-flex justify-content-between'>
                <div className="adress">
                    <p className="">{bussiness.address}</p>
                    <p className="">{bussiness.city}</p>
                    <p className="">{bussiness.state}</p>
                    <p className="">{bussiness.zipCode}</p>
                </div>

                <div className="properties">
                    <p className="card-text" >{bussiness.category}</p>
                    <p className="card-text" >{bussiness.rating} stars</p>
                    <p className="card-text" >{bussiness.reviewCount} reviews</p>
                </div>
            </div>



        </div>
    )
}

export default Bussiness;