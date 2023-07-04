import {React, useState, useContext} from 'react';
import Card from "./context.js";
import {UserContext} from "./context.js";

export default function CreateAccount(){
  const {accounts, setAccounts}  = useContext(UserContext);
  const [name, setName] = useState('');
  const [errorname, setErrorname] = useState('');
  const [email, setEmail] = useState('');
  const [erroremail, setErroremail] = useState('')
  const [password, setPassword] = useState('');
  const [balance, setBalance] = useState(0);
  const [errorpassword, setErrorpassword] = useState('')
  const processAccount = e => {
    e.preventDefault();
    setErrorname('');
    setErroremail('');
    setErrorpassword('');
    if (!name || !email) {
      if(!name) {
        setErrorname('Name field is left blank')
      }
      if (!email) {
        setErroremail('Email field is left blank')
      }
      return;
    }
    if (password.length<8) {
      setErrorpassword('Password should be at least 8 characters long')
      return;
    }
    alert(`A new user, ${name}, was created`);
    setAccounts([...accounts, 
      {
      name: name,
      email: email,
      password: password,
      balance: balance,
      }
    ])

    setName('');
    setEmail('');
    setPassword(''); 
  }

  const isFormInvalid = !name && !email && !password;

  return (
    <>
    <Card 
      bgcolor="primary" 
      txtcolor="black"
      body={
        <form onSubmit={processAccount}>
              <div className="form-group">
                <label htmlFor="Name">Name:</label>
                <input type="text" id="Name" className="form-control" name="Name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
                <span className="error-message">{errorname}</span>
                <br></br>
                <label htmlFor="Email">Email:</label>
                <input type="email" id="Email" className="form-control" name="Email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <span className="error-message">{erroremail}</span>
                <br></br>
                <label htmlFor="pwd">Password:</label>
                <input type="password" id="pwd" className="form-control" name="pwd" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <span className="error-message">{errorpassword}</span>
                <br></br>
                <button type="submit" className="btn btn-primary" disabled={isFormInvalid}>{accounts.length>1 ? "Add another account" : "Create account"}</button> 
              </div> 
        </form>
      }
    />
    </>
    )
}