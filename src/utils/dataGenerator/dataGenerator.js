

const dataGenerator = (treeDepth = 0, branchQuantity = 0)=>{

    const depthGenerator = (incomingDepth)=>{
        const data = []
        
        if(incomingDepth < treeDepth){
            for(let k = 0; k<branchQuantity; k++){
                data.push({name: `child at lvl: ${incomingDepth+1}`, data: depthGenerator(incomingDepth+1)})
            }
        }
        
        return data
    }

    return depthGenerator(0)
}

export default dataGenerator //not optimized for step by step generate