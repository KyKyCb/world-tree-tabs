import optimizedGenerator from "./optimizedGenerator"

const setDataWithChild = ( globalDepth, globalQuantity, depthLevel, currentQuantity )=>{

    const data = optimizedGenerator(globalDepth, globalQuantity, depthLevel, currentQuantity)
    const nextLevel = depthLevel + 1

    if( nextLevel <= globalDepth){
        data.forEach(item => item.data = optimizedGenerator(globalDepth, globalQuantity, nextLevel, 0))
    }
    
    return data
}

export default setDataWithChild