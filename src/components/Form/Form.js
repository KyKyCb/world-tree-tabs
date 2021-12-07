import { useState } from 'react'
import Button from '../Button/Button'
import './Form.css'

const Form = (props)=>{

    const [state, setState] = useState({depth: 1, nodes: 1})

    const {onSubmit} = props

    const onChangeHandler = (event)=>{
        let value = parseInt(event.target.value.trim())

        if(value <= 0 || !value){
            value = 1
        }

        switch(event.target.name){
            case 'depth':
                setState({...state, depth: value})
                break
            case 'nodes':
                setState({...state, nodes: value})
                break
            default:
                return
        }
    }

    const onSubmitHandler = ()=>{
        onSubmit(state)
    }

    return(
        <form className="form">

            <label className="form__label">
                <span className="label__text">Depth</span>
                <input 
                    type="number"
                    name='depth'
                    value={state.depth}
                    onChange={onChangeHandler}
                />
            </label>

            <label className="form__label">
                <span className="label__text">Number of nodes</span>
                <input 
                    type="number"
                    name='nodes'
                    value={state.nodes}
                    onChange={onChangeHandler}
                />
            </label>

            <Button
                className="form__button"
                name="apply"
                onClick={onSubmitHandler}
            />
        </form>
    )
}

export default Form