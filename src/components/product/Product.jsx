import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Product({ store }) {

    let card = (data, index) => {
        return (
            <div className="mt-5 ml-5 mr-5 mb-5" key={index}>
                <p >
                    <strong>Category: {data?.subcategory}</strong>
                </p>
                <strong>Title: {data?.title} </ strong>
                <p >
                    <strong>Price:{`$${data?.price}`}</strong>

                </p>
                <div >
                    <strong>Popularity:{data.popularity}</strong>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row mb-3">
                {store.map(card)}
            </div>
        </div>

    )
}
