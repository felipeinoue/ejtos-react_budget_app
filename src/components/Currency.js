import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const changeCurrency = (val)=>{
        dispatch({
            type: "CHG_CURRENCY",
            payload: val,
        })
    }

    return (
        <div className='alert alert-secondary'> {
            <select name="Currency" id="Currency" value={currency} onChange={e=>changeCurrency(e.target.value)} >
              <option value="$">$ Dollar</option>
              <option value="£">£ Pound</option>
              <option value="€">€ Euro</option>
              <option value="₹">₹ Ruppee</option>
            </select>	
        }	
        </div>
    );
};
export default Currency;
