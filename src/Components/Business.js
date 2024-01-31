import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Bussiness() {

    let bussiness = {
        imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
        name: 'MarginOtto Pizzeria',
        address: '1010 Paddington Way',
        city: 'Flavortown',
        state: 'NY',
        zipCode: '10101',
        category: 'Italian',
        rating: 4.5,
        reviewCount: 90
    }



    return (
        <div className="card m-2">
            <img src={bussiness.imageSrc} className="card-img-top" />
            <h2 className="card-title">{bussiness.name}</h2>

            <div className='card-body d-flex justify-content-between'>
                <div className="adress">
                    <p className="card-text">{bussiness.address}</p>
                    <p className="card-text">{bussiness.city}</p>
                    <p className="card-text">{bussiness.state}</p>
                    <p className="card-text">{bussiness.zipCode}</p>
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