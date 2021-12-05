import './Button.css'

const Button = (props)=>{
    const {name, onClick} = props

    const onClickHandler = ()=>{
        onClick()
    }

    return(
        <div className="button__container" onClick={onClickHandler}>
            <p className="button__text">{name}</p>
        </div>
    )
}

export default Button