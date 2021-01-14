import React from 'react'

export default function basket(props) {
    return (
        <div className="mb-3">
            <h1>Panier</h1>
            <p>Nombre d'items : <span className="badge badge-dark">{props.basket.nbrOfArticles}</span></p>
            <span className="badge badge-info">Total: {(props.basket.total).toFixed(2)} euros</span>
        </div>
    )
}
