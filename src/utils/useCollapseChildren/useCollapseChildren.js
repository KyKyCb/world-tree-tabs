import { useState } from "react"

const useCollapseChildren = ()=>{
    const [isShow, setIsShow] = useState(false)

    const handleStatus = ()=>{
        setIsShow(!isShow)
    }

    return [isShow, handleStatus]
}

export default useCollapseChildren