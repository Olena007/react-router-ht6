import React, { FC, useState } from 'react';
import handler from '../CardComponent/CardComponent'

function BasketComponent () {
    

    return(
        <div>
            <h1>Basket</h1> 
            <p>{localStorage.getItem("App_localStorage1")}</p>
        </div>
    );
}

export default BasketComponent;