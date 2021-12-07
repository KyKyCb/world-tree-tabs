import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { CSSTransition } from "react-transition-group"

import asyncChangeData from "../../redux/actions/dataAction"
import useCollapseChildren from "../../utils/useCollapseChildren/useCollapseChildren"
import Button from "../Button/Button"
import TreeChild from "../TreeChild/TreeChild"

import './TreeMainBranch.css'

export const CollapseBranch = React.createContext()

const TreeMainBranch = (props)=>{

    const dispatch = useDispatch()

    const renderType = useSelector( state => state.renderType.isWorld)

    const [data, setData] = useState([])

    const [isShow, handleStatus] = useCollapseChildren()

    const onClickHandler = ()=>{

        if(!data.length && !isShow && renderType){
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