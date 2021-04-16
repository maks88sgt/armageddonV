import React from "react";

export function AsteroidCard(props) {
    const {id, name, estimated_diameter} = props;


    return (
        <>
            <div> {id} </div>
            <div> {name}</div>
            <div> {estimated_diameter.kilometers.estimated_diameter_min}</div>
        </>
    );
}
