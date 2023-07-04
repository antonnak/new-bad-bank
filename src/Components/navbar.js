import {Link} from 'react-router-dom';

export default function NavBar () {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Bad Bank</a>
            <div className="navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/" title="Go to Home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="createaccount" title="Create account or multiple accounts with our bank">Create Account</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="login" title="Login to your account">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="deposit" title="Deposit funds with our bank">Deposit</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="withdraw" title="Withdraw funds with our bank">Withdraw</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="alldata" title="Display history of all accounts and balances">All Data</Link>
                    </li>
                </ul>
            </div>            
        </nav>
    )
}