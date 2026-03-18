
type searchByName = <T extends {name : string}> (input : T[], searchKey : string) => T[] 

const searchByName : searchByName = (input, searchKey) => {
    const res = input.filter((item) => item.name.toLowerCase().includes(searchKey.toLowerCase()))
    return res
}

// kedepan nya di tambahkan

export {searchByName}