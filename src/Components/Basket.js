import React from 'react';

class Basket extends React.Component{
    render(){
        const {basket}=this.props;
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