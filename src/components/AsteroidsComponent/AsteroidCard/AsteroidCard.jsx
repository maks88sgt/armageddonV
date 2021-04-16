import React from "react";

export function AsteroidCard(props) {
    const {id, name} = props;


    return (
        <>
            <div> {id} </div>
            <div> {name}</div>
        </>
    );
}
