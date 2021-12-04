import React, { useEffect, useState } from "react"
import useCollapseChildrens from "../../utils/useCollapseChildrens/useCollapseChildrens"
import TreeChild from "../TreeChild/TreeChild"

export const CollapseBrunch = React.createContext()

const TreeMainBrunch = ({treeData})=>{
    const [data, setData] = useState([])

    const [isShow, handleStatus] = useCollapseChildrens()

    useEffect(()=>{        
        for (let key in treeData){
            if(Array.isArray(treeData[key])){   
                setData(treeData[key])
            }
        }
    }, [treeData])

    

    return(
        <CollapseBrunch.Provider value={handleStatus}>
            <div>
                <p onClick={handleStatus}>{treeData.name}</p>

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
        </CollapseBrunch.Provider>
    )
}


export default TreeMainBrunch