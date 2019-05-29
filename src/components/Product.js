import React from 'react';

function Product(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
        <li key={number.toString()} >
            {number}
        </li >
    );
        
    return (<ul style={{ "listStyleType": "none"}}>Welcome to our Shop! <br></br>We Sell the following items: {listItems}</ul>);
}

export default Product;