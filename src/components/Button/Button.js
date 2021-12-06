import './Button.css'

const Button = (props)=>{
    const {name, onClick, className} = props

    const onClickHandler = ()=>{
        onClick()
    }

    return(
        <div className={"button__container" + (className ? (" " + className ): '') } onClick={onClickHandler}>
            <p className={"button__text"}>{name}</p>
        </div>
    )
}

export default Button