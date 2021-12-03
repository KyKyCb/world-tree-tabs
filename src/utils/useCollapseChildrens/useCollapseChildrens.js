import { useEffect, useState } from "react"

const useCollapseChildrens = ()=>{
    const [isShow, setIsShow] = useState(false)

    const handleStatus = ()=>{
        setIsShow(!isShow)
    }

    return [isShow, handleStatus]
}

export default useCollapseChildrens