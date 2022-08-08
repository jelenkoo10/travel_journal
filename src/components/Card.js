import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img className="card-photo" src={props.item.imageUrl} alt={`Photo of ${props.item.location}`} />
            <div className="card-desc">
                <div>
                    <span className="card-loc">{props.item.location}</span>
                    <a className="card-maps" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card-title">{props.item.title}</h1>
                <strong>{props.item.startDate} - {props.item.endDate}</strong>
                <p className="card-par">{props.item.description}</p>
            </div>
            <hr />
        </div>
    )
}

