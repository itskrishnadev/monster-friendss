import React from 'react';

import {Cards} from '../cards/Cards';

import './card-list.style.css';

export const Cardlist = props => {
    return   <div className="card-list">
        {props.monsters.map(monsters => (
            <Cards key ={monsters.id} monsters={monsters} />
    
        )) 
        }</div>
};