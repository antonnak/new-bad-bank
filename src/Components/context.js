import {React,createContext} from 'react';
export const UserContext = createContext([]);

export default function Card(props){
    function classes(){
        const bg = props.bgcolor ? 'bg-' + props.bgcolor : '';
        const txt = props.txtcolor ? 'txt-' + props.txtcolor : '';
        return 'card mx-auto ' + bg + txt;
    }

    return(
        <>
        <div className={classes()} style={{width: '40%', height: '40%', marginTop: '20px'}}>
        <div className="card-body">
            {props.body}
        </div>
        </div>
        </>
    )
}
