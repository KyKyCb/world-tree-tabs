import { useEffect, useState } from "react"
import useCollapseChildrens from "../../utils/useCollapseChildrens/useCollapseChildrens"

const TreeChild = ({treeData, collapse, margin})=>{
    const [data, setData] = useState([])
    // const [isChildrenShow, setIsChildrenShow] = useState(false)
    const [keys, setKeys] = useState([])

    const marginLeft = {
        margin: margin ? margin + 20 : 20
    }

    // const collapseAll = ()=>{
    //     setIsChildrenShow(false)
    // }

    const [isShow, handleStatus] = useCollapseChildrens()

    useEffect(()=>{
        setKeys(Object.keys(treeData))
    }, [])

    useEffect(()=>{
        
        setData(treeData[keys[1]])
        
    }, [keys])

    return(
        <>
        <div style={{marginLeft: (marginLeft.margin + 'px')}} onClick={handleStatus}>{treeData.name}</div>
        {isShow &&
            data.map((children, indx) => {
                return(
                    <TreeChild
                        margin={marginLeft.margin}
                        key={treeData.name + indx}
                        treeData={children}
                        collapse = {collapse ? collapse : handleStatus}
                    />
                )
            })
        }
        </>
    )
}

export default TreeChild