import React from "react";

export function DestroymentCard (props) {
    const { name,  } = props;

    return (
        <div>
            {asteroidsForDestroying.map((item, index) => <div key={index}>  {item.name} </div>)}
        </div>
    );
}
