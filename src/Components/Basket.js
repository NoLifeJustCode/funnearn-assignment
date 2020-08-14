import React from 'react';
/**
 * Basket stack containg the list of fruits 
 */
class Basket extends React.Component{
    render(){
        let {basket}=this.props;
        basket.reverse();
        return(
            <div className="basket-container">
                    {
                        basket.map((fruit,index)=>{
                                return(
                                    <div className={`fruit ${fruit.view}`} key={index}>
                                            {fruit.name}
                                    </div>
                                );
                        })
                    }
            </div>
        )
    }
}

export default Basket;