import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, totalExp, dispatch, currency } = useContext(AppContext);
    const handleBudgetChange = (event) => {

        //does not allow amount lower than the spent so far
        if (event.target.value < totalExp) {
            alert("value can not be lower than the spent so far.")

        //max value 20000 
        } else if (event.target.value > 20000) {
            alert("Max value is 20000.")

        //update budget value
        } else {
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value,
            })
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input 
                type="number" 
                step="10" 
                max={"20000"} 
                value={budget} 
                onChange={handleBudgetChange}>
            </input>
        </div>
    );
};
export default Budget;
