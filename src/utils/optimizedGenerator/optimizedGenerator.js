

const depthGenerator = (prevLevel, branchQuantity)=>{
    const data = []
    
    for(let k = 0; k<branchQuantity; k++){
        data.push({name: `child at lvl: ${prevLevel+1}`})
    }
    
    return data
}

export default depthGenerator 