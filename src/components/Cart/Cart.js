import React from 'react'
import Modal from '../UI/Modal'
import classes from './Cart.module.css'
const Cart = props => {
    const carttItems = <ul className={classes['cart-item']}>
        {[{ id: 'c1', name: 'SuShi', amount: 2, price: 12.9 }].map((item) => <li>{item.name}</li>)}
    </ul>
    return (
        <Modal onClose={props.onClose}>
            {carttItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>323.23</span>
            </div>
            <div className={classes.actions}>

                <button className={classes.button}>Order</button>
                <button className={classes['button--alt']} onClick={props.onClose} >Close</button>
            </div>
        </Modal>
    )
}
export default Cart