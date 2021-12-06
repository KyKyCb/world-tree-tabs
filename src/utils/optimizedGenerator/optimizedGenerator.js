
//current quantity - array length
//depth level = current depth

const optimizedGenerator = (globalDepth = 1, globalQuantity = 1, depthLevel = 1, currentQuantity = 0)=>{
    const data = []

    if(globalDepth <= depthLevel){
        return data
    }

    if(globalQuantity-currentQuantity === 0){
        return data
    }

    const quantity = (globalQuantity-currentQuantity > 20) ? 20 : (globalQuantity-currentQuantity)

    for(let k = currentQuantity; k<currentQuantity+quantity; k++){
        data.push({name: `child at lvl: ${depthLevel}`, code: Math.random(), data: []})
    }
    
    return data
}

// console.log(optimizedGenerator(2, 30, 1, 30))

export default optimizedGenerator 