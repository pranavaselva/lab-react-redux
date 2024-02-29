import {useDispatch, useSelector} from 'react-redux'
import Methods from './Methods'

function Like(){
    
    const dispatcher =useDispatch()

    const result =  useSelector( (state) => {
        return state
    })


    return(
        <div className='container'>
            <div>
                <h2>{result}</h2>
                <button onClick={() =>{dispatcher(Methods.Increment())}}>Like</button>
                <button onClick={() =>{dispatcher(Methods.Decrement())}}>Unlike</button>
            </div>
        </div>
    )
}

export default Like;