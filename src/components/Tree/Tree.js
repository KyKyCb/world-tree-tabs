import { useSelector } from "react-redux"
import TreeMainBranch from "../TreeBranch/TreeMainBranch"

const Tree = ()=>{
    const continents = useSelector(state => state.continents)
    
    return(
        <div>
            {continents.map((data, indx) => {
                return (
                    <TreeMainBranch
                        key={indx}
                        treeData={data}
                    />
                )
            })}
        </div>
    )
}

export default Tree