import badbank from '../Components/badbank.jpeg';

export default function Home() {

    return (
        <>   
        <br></br> 
    <div className="card mx-auto" style={{width: '40%', height: '40%'}}>
    <div className="card-body">
    <h5 className="card-title">WELCOME TO THE BANK</h5>
    <p className="card-text">For all your banking needs</p>
  
    <img src={badbank} className="img-fluid mx-auto" alt="..."/>
    </div>
    </div>
    </>
    )
}