import {React, useState, useContext} from 'react';
import {UserContext} from "./context.js";

export default function Deposit(){
    const {accounts, setAccounts} = useContext(UserContext);
    const [deposit, setDeposit] = useState(0);
    const [errordeposit, setErrordeposit] = useState('');
    const accountholder = `Deposit for ${accounts[accounts.length-1].name}`

    const processDeposit = (e) => {
        e.preventDefault();
        setErrordeposit('');
        let updatedAccounts = accounts.slice();
        if (isNaN(deposit)) {
              setErrordeposit('Deposit must be a number')
              return;
            }
        if (deposit<=0) {
              setErrordeposit('Deposit can not be negative or zero')
            return;
          }
        updatedAccounts[updatedAccounts.length-1].balance = Number(updatedAccounts[updatedAccounts.length-1].balance) + Number(deposit);
        setAccounts(updatedAccounts);
        alert("Success: your deposit was received");
        setDeposit(0);
    }

    const isFormInvalid = deposit ===0;

    return(
        <>   
        <br></br> 
        <div className="card mx-auto" style={{width: '40%', height: '40%'}}>
        <div className="card-body">
        <div>
                <h1>{accountholder}</h1>
                <h3>Current balance is ${accounts[accounts.length-1].balance}</h3>
                <form onSubmit={processDeposit}>
                    <div className="form-group">
                        <label htmlFor="Deposit">Deposit amount:</label>
                        <input className="form-control" type="text" id="Deposit" name="Deposit" value={deposit} onChange={(e) => setDeposit(e.target.value)}/>
                        <span className="error-message">{errordeposit}</span>
                        <br></br>
                        <button type="submit" className="btn btn-primary" disabled={isFormInvalid}>Deposit</button>
                    </div>  
                </form>
        </div>
    </div>
    </div>
    </>
    )
}