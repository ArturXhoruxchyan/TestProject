import { useDispatch, useSelector } from 'react-redux'
//useDispatch ayn ogtagortelu e mapDispatchToProps funqciayi poxaren

//useSelector ogtagortelu enq mapStateToProps functiayi poxaren
import { inputText } from '../../redux/about/action'
import './Title.css'

function Title(props) {
    console.log('props title>',props);
    const text =useSelector(state=>{
        console.log(state,'state');
        const {text} =state;
        return text.text;
    })
    const dispatch=useDispatch();

    const handleChange=(e)=>{
        dispatch(inputText(e.target.value))//mer texty reduserin poxancelu hamar
    }
     return(
        <div className='card-title' >
            <div className='card-title-top' >
                 <input className='inputtitel' type='text' onChange={handleChange} />
                 📜
            </div>
            {/* <p>{text}</p> */}
        </div>
     )
    
}
export default Title


//ogtagortelov erku hooker integrecinq pahesti redaksic
//hooker ogtagortelov arden chenq ogtagortum funkcia connect-y