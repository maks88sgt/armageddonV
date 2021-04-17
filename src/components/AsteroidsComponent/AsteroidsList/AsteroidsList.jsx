import React, {useContext, useState} from "react";
import '../../../styles/_list.scss';

import {FilterContext} from "../Asteroids/Asteroids";
import {AsteroidCardContainer} from "../AsteroidCard/AsteroidCard.container";
import InfiniteScroll from "react-infinite-scroll-component";

export function AsteroidsList(props) {
    let {asteroids} = props;

    const context = useContext(FilterContext);
    const {onlyDangerous} = context;

    if (onlyDangerous) {
        asteroids = asteroids.filter(item => item.isDangerous);
    }

    const [itemsCount, setItemsCount] = useState(10);

    let listOfAsteroids = asteroids.slice(0, itemsCount);

    function increaseLength() {
        setItemsCount(itemsCount + 10);
        listOfAsteroids = asteroids.slice(0, itemsCount);
    }

    return (<div className='container'>
        <InfiniteScroll
            dataLength={listOfAsteroids}
            next={increaseLength}
            hasMore={itemsCount <= asteroids.length}
        >
            {listOfAsteroids.map((item, index) => <AsteroidCardContainer key={index} {...item}/>)}
        </InfiniteScroll>
    </div>);

}
