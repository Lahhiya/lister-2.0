const findById = <t extends {id : number} > (input : t[], id : number) =>{
    const res = input.find((item)=> item.id === id)
    return res
}

const findByUuid = <t extends {uuid : string} > (input : t[], uuid : string) =>{
    const res = input.find((item)=> item.uuid === uuid)
    return res
}

export {findById,findByUuid}