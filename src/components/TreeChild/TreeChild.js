import { useEffect, useState } from "react"
import useCollapseChildren from "../../utils/useCollapseChildren/useCollapseChildren"
import { CollapseBranch } from "../TreeBranch/TreeMainBranch"

import './TreeChild.css'

const TreeChild = ({treeData})=>{
    const [data, setData] = useState([])

    const [isShow, handleStatus] = useCollapseChildren()

    const onClickHandler = ()=>{
        if(data.length){
            handleStatus()
            return
        }
    }

    useEffect(()=>{        
        for (let key in treeData){
            if(Array.isArray(treeData[key])){   

                setData(treeData[key])
            }
        }
    }, [treeData])

    if(!data.length){
        return(
            <CollapseBranch.Consumer>
                {   
                    (value) => {
                        return (
                            <div className="tree-child__container">

                                <p 
                                    onClick={value}
                                    className="tree-child__last-child-text"
                                >
                                    {treeData.name}
                                </p>

                            </div>
                        )
                    }
                }
            </CollapseBranch.Consumer>
        )
    }

    return(

        <div className="tree-child__container">
            <p 
                onClick={onClickHandler}
                className="tree-child__text"
            >
                {treeData.name}
            </p>

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
        
    )
}

export default TreeChild