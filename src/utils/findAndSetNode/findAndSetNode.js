

const findAndSetNode = (array = [], code, data)=>{
    if(!array.length || !code){
        return data
    }
    return array.map( item => {
        if( item.code === code ){
            item.data = [...item.data, ...data]
            return item
        }else if(item.data.length){
            item.data = findAndSetNode(item.data, code, data)
            return item
        }
        return item
    })
}

export default findAndSetNode