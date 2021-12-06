import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import TreeMainBranch from "../TreeBranch/TreeMainBranch"

import './Tree.css'

const Tree = (props)=>{

    const continents = useSelector(state => state.continents)
    
    return(
        <div className="tree__container">
            <TransitionGroup>

                {props.isShow &&
                    continents.map((data, indx) => {
                        return (
                            <CSSTransition key={indx} timeout={500} classNames="branches">
                                <TreeMainBranch
                                    treeData={data}
                                />
                            </CSSTransition>
                        )
                    })
                }
                
            </TransitionGroup>
        </div>
    )
}

export default Tree