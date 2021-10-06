import formClasses from "./MealsCss/MealsForm.module.css"
import {useContext, useEffect, useReducer, useState} from "react";
import CartContext from "../../contexts/Cart/CartContext";


const amountReducer = (prevState, action) => {
    if(action.id === "setAmount"){
        return {value: action.value, isValid: action.value > 0}
    }
}


const MealsForm = (props) => {

    const cartCtx = useContext(CartContext);

    const [amount, amountDispatcher] = useReducer(amountReducer, {
        value: "0",
        isValid: false,
    })
    const [formIsValid, setFormIsValid] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setFormIsValid(amount.isValid)

            return () => {
                clearTimeout(timer)
            }
        }, 250)

        return () => {
            clearTimeout(timer)
        }
    }, [amount])

    const getAmount = (event) => {
        amountDispatcher({
            id: "setAmount",
            value: event.target.value,
        });
    }

    const addItemtoCartForm = (event) => {
        event.preventDefault();
        const mealItem = {...props.meal, quantity: amount.value};
        cartCtx.addItem(mealItem)

    }

    return (
        <form key={props.id} className={formClasses["form-wrapper"]} onSubmit={addItemtoCartForm}>
            <div>
                <label className={formClasses["amount-label"]}>Amount
                <input key={props.id} type="number" step="1" className={formClasses["amount-input"]}  onChange={getAmount} value={amount.value} />
                </label>
            </div>
            <div>
                <input key={props.id} type="submit" value="+ Add" className={formClasses["add-btn"]} disabled={!formIsValid} />
            </div>
        </form>
    )
}

export default MealsForm;