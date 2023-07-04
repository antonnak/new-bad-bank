import {React, useState, useContext} from 'react';
import {UserContext} from "./context.js";

export default function Withdraw(props){
    const {accounts, setAccounts} = useContext(UserContext);
    const [withdrawal, setwithdrawal] = useState(0);
    const [errorwithdrawal, setErrorwithdrawal] = useState('');
    const accountholder = `Withdrawal for ${accounts[accounts.length-1].name}`

    const processwithdrawal = (e) => {
        e.preventDefault();
        setErrorwithdrawal('');        
        let updatedAccounts = accounts.slice();
        if (isNaN(withdrawal)) {
              setErrorwithdrawal('withdrawal must be a number')
              return;
            }
        if ((Number(updatedAccounts[updatedAccounts.length-1].balance) - Number(withdrawal))<=0) {
              setErrorwithdrawal('Your withdrawal amount exceeds funds you have available on your balance')
            return;
          }
        updatedAccounts[updatedAccounts.length-1].balance = Number(updatedAccounts[updatedAccounts.length-1].balance) - Number(withdrawal);
        setAccounts(updatedAccounts);
        alert("Success: your withdrawal was processed");
        setwithdrawal(0);
    }

    const isFormInvalid = withdrawal ===0;

    return(
        <>   
        <br></br> 
        <div className="card mx-auto" style={{width: '40%', height: '40%'}}>
        <div className="card-body">
        <div>
                <h1>{accountholder}</h1>
                <h3>Current balance is ${accounts[accounts.length-1].balance}</h3>
                <form onSubmit={processwithdrawal}>
                    <div className="form-group">
                        <label htmlFor="withdrawal">Withdrawal amount:</label>
                        <input className="form-control" type="text" id="withdrawal" name="withdrawal" value={withdrawal} onChange={(e) => setwithdrawal(e.target.value)}/>
                        <span className="error-message">{errorwithdrawal}</span>
                        <br></br>
                        <button type="submit" className="btn btn-primary" disabled={isFormInvalid}>Withdrawal</button>  
                    </div>
                </form>
        </div>
    </div>
    </div>
    </>
    )
}