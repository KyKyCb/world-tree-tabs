import { useEffect, useState } from "react"
import useCollapseChildrens from "../../utils/useCollapseChildrens/useCollapseChildrens"
import { CollapseBrunch } from "../TreeBrunch/TreeMainBrunch"

const TreeChild = ({treeData})=>{
    const [data, setData] = useState([])

    const [isShow, handleStatus] = useCollapseChildrens()

    const onClickHandler = ()=>{
        if(data.length){
            handleStatus()
            return
        }
    }

    useEffect(()=>{        
        for (let key in treeData){
            console.log(key)
            if(Array.isArray(treeData[key])){   
                setData(treeData[key])
            }
        }
    }, [treeData])

    return(
        <>
        {data.length ?

            <div style={{marginLeft: '20px'}}>
                <p onClick={onClickHandler}>{treeData.name}</p>

                {isShow &&
                    data.map((children, indx) => {
                        return(
                            <TreeChild
                                key={treeData.name + indx}
                                treeData={children}
                            />
                        )
                    })
                }
                
            </div>

            :

            <CollapseBrunch.Consumer>
                {   
                    (value) => {
                        return (
                            <div style={{marginLeft: '20px'}}>

                                <p onClick={value}>{treeData.name}</p>

                            </div>
                        )
                    }
                }
            </CollapseBrunch.Consumer>
        }
        </>
        
    )
}

export default TreeChild