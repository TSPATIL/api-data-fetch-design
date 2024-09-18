import './Modal.css';
export default function Modal(props){
    return (
        <div style={{display: `${props.toogle ? 'block': 'none'}`}} onClick={()=>{
            props.setToggle(false);
        }}>
            <img src={props.url} alt={props.url}/>
        </div>
    )
}