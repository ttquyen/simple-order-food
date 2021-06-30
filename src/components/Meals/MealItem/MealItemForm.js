import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import React, { useRef, useState } from 'react';

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);

    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        console.log(enteredAmount, typeof enteredAmount);
        const enteredAmountNumber = + enteredAmount;
        console.log(enteredAmountNumber, typeof enteredAmountNumber);

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter valid amount</p>}
        </form>
    );
};
export default MealItemForm;
