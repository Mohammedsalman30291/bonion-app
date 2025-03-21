import React, { useState } from 'react'
import testImg from "../Assets/test.jpg"


const OrderDetails = ({order1, close}) => {

    const [order, setOrder] = useState( order1, null );

        const style = {
            ViewDetailed : {
                
                "display":"flex",
                "alignItems":"center",
                "justifyContent":"center",
                "color":"rgb(0, 0, 0)",
                "backgroundColor":"rgba(50,50,50,0.4)",
                "position":"fixed",
                "height":"100%",
                "width":"100%",
                // "padding":"20% 20%",
                "top":"0",
                "left":"0",
                "overflow":"auto",
                "zIndex":"1",
            }
        };

  return (
    <div className='orderDetails' style={style.ViewDetailed}>
        <div className="order">
                    <div style={{"textAlign":"center"}}>Order Details</div>
                    <img src={testImg}>
                    </img>
                    <div className="orderDetails">
                        <h3>{order.itemName} - {order.resName}</h3>
                        {/* <p>{order.oDate}</p> */}
                        <em><p>"{order.itemDescription}"</p></em>
                        <code>MRP: <strike>{order.itemPrice}</strike>
                    &nbsp;{order.itemPrice-(order.itemDiscount/100)*order.itemPrice}/- | Qty: {order.itemQty}</code>
                        <p></p>
                        <p>Total Amount: {order.itemPrice-(order.itemDiscount/100)*order.itemPrice * order.itemQty} /-</p>
                        <p>Payment Mode: {order.payMeth}</p>
                        <p>TO: {order.uAdd} - {order.uPin} ,&nbsp; Ph: {order.uMobile}</p>
                        <button onClick={close} >close</button>
                    </div>
                </div>
    </div>
  )
}

export default OrderDetails