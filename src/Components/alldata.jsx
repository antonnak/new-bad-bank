import {React, useContext} from 'react';
import {UserContext} from "./context.js";

function Alldata(){
    const {accounts} = useContext(UserContext);

    return (
      <>   
      <br></br> 
      <div className="card mx-auto" style={{width: '40%', height: '40%'}}>
      <div className="card-body">
                  <div className="table-responsive">
                  <table className="table table-striped table-bordered">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Balance</th>
                      </tr>
                    </thead>
                    <tbody>
                      {accounts.length > 0 && accounts.slice(1).map((account, i) => (
                        <tr key={i}>
                          <td>{account.name}</td>
                          <td>{account.email}</td>
                          <td>{account.password}</td>
                          <td>${account.balance}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
      </div>
      </div>
      </>
  )
}

export default Alldata;