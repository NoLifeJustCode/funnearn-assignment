import React from 'react';
import { flash } from '../helper/notification';
/**
 * Individual fruit item 
 * validate interaction 
 * @param {*} props 
 */
function Fruit(props){
    const {fruit}=props;
    /**
     * add fruit to basked if possible else throw a error stating not possible
     * @param {*} e 
     */
    let increment=(e)=>{
        e.preventDefault();
        e.stopPropagation();
        if(!props.permission){
            flash('Admin Access Needed');
        }
        else if(fruit.qty===0){
            flash(`${fruit.name} is empty`);
        }else{
            props.increment(fruit.name);
        }
    }
    /**
     * Remvoe the fruit from the basket if valid
     * @param {*} e 
     */
    let decrement=(e)=>{
        e.preventDefault();
        e.stopPropagation();
        if(!props.permission){
            flash('Admin Access Needed');
        }
        else if(fruit.qty===fruit.MAX){
          flash(`${fruit.name} is not in basket`);
        }else{
            props.decrement(fruit.name);
        }
    }
    
    return(

        <div className={`fruit-item-container ${fruit.name}`}>
            <h3 className="heading">{fruit.name}</h3>
            <div className="quantity-container">
                <div className="operator" onClick={increment}>+</div>
                <div className="quantity">{fruit.qty}</div>
                <div className="operator" onClick={decrement}>-</div>
            </div>
        </div>
    )
}

export default Fruit;