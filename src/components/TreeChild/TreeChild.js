import { useEffect, useState } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import useCollapseChildren from "../../utils/useCollapseChildren/useCollapseChildren"
import Button from "../Button/Button"
import { CollapseBranch } from "../TreeBranch/TreeMainBranch"

import './TreeChild.css'

const TreeChild = (props)=>{
    const {treeData} = props

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
    }, [props])

    if(!data.length){
        return(
            <CollapseBranch.Consumer>
                {   
                    (value) => {
                        return (
                            <div className="tree-child__container">
                                <Button
                                    onClick={value}
                                    name={treeData.name}
                                    className="last-child"
                                />
                            </div>
                        )
                    }
                }
            </CollapseBranch.Consumer>
        )
    }

    return(
        <div className="tree-child__container">
            <Button
                onClick={onClickHandler}
                name={treeData.name}
            />
            
            <TransitionGroup>
                {isShow &&
                    data.map((children, indx) => {
                        return(
                            <CSSTransition
                                key={treeData.name + indx}
                                timeout={500}
                                classNames='child-leave'
                            >
                                <div className='css-transition'>
                                    <TreeChild
                                        treeData={children}
                                    />
                                </div>
                                
                            </CSSTransition>
                        )
                    })
                }
            </TransitionGroup>

        </div>
        
    )
}

export default TreeChild