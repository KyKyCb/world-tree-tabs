import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { CSSTransition, TransitionGroup } from "react-transition-group"

import asyncChangeData from "../../redux/actions/dataAction"
import useCollapseChildren from "../../utils/useCollapseChildren/useCollapseChildren"
import Button from "../Button/Button"
import TreeChild from "../TreeChild/TreeChild"

import './TreeMainBranch.css'

export const CollapseBranch = React.createContext()

const TreeMainBranch = (props)=>{

    const dispatch = useDispatch()

    const [data, setData] = useState([])

    const [isShow, handleStatus] = useCollapseChildren()

    const onClickHandler = ()=>{

        if(!data.length && !isShow){
            dispatch(asyncChangeData(props.treeData.code))
        }

        handleStatus()
    }

    useEffect(()=>{
           
        for (let key in props.treeData){
            if(Array.isArray(props.treeData[key])){   
                setData(props.treeData[key])
            }
        }

    }, [props])

    return(
        <CollapseBranch.Provider value={handleStatus}>

            <div className="main-branch__container">
                <Button
                    onClick={onClickHandler}
                    name={props.treeData.name}
                />
                <CSSTransition in={isShow} timeout={500} className='leaves'>
                    <div>
                            {data.map((children, indx) => {
                                return(
                                        <TreeChild
                                            key={props.treeData.name + indx}

                                            treeData={children}
                                        />
                                )
                            })}
                    </div>
                </CSSTransition>

            </div>

        </CollapseBranch.Provider>
    )
}


export default TreeMainBranch