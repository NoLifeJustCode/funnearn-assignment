import React from 'react';
import Fruit from './Fruit'
import Basket from './Basket'
import { flash } from '../helper/notification';
// retrive fruits data
const fruits=require('../assets/Data/fruits.json')
// list of user permission allowed to interact
const access=['admin']
/**
 * setup the Item list and the Basket stack space
 * Validate user access to allow interaction and validate interaction
 */
class Home extends React.Component{
    constructor(props){
        super(props);
        let fruitList=[];
        Object.assign(fruitList,fruits);
        this.permission=this.checkPermission()
        this.state={
                fruits:fruitList,
                basket:[]
        }
    }
    /**
     * check if user is authorized to interact
     */
    checkPermission=()=>{
        for(let permission of access)
        {
            if(permission===this.props.user.permission)
            return true;
        }
        return false;
    }
    /**
     * retreive the element on top
     * @param {*} arr 
     */
    peek(arr){
        let len=arr.length;
        if(len<=0)
            throw new Error('Empty basket');
        return arr[len-1];
    }
    /**
     * add fruit to basket if possible
     */
    increment=(fruit)=>{
            let fruits=this.state.fruits.slice();
            let basket=this.state.basket.slice();
            let index=fruits.findIndex((item)=>{
                return item.name===fruit;
            })
            fruits[index].qty--;
            basket.push(fruits[index]);
            this.setState((state)=>{
                return{
                    fruits,
                    basket
                }
            })
        
    }
    /**
     * Remove fruit from basket is it is the top fruit
     */
    decrement=(fruit)=>{
        try{
            if(this.peek(this.state.basket).name!==fruit)
                 throw new Error('Top fruit doesn\'t match');
             let fruits=this.state.fruits.slice();
             let basket=this.state.basket.slice();
             let index=fruits.findIndex((item)=>{
                 return item.name===fruit;
             })
             fruits[index].qty++;
             basket.pop();
             this.setState((state)=>{
                 return{
                     fruits,
                     basket
                 }
             })
         }catch(e){
             flash(e.message);
         }
    }
    render(){
        const{fruits, basket}=this.state;
        
        
        return(
            
            <div className="home-container">
                    
                    <div className="fruit-container">
                    <h3 className="heading ">All Fruits</h3>
                        {
                            fruits.map((item,index)=>{
                                return <Fruit fruit={item} key={index} increment={this.increment} decrement={this.decrement} permission={this.permission}/>
                            })
                        }
                    </div>
                    <Basket basket={basket}/>
            </div>
        )
    }
}

export default Home;