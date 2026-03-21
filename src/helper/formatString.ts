
const stringStatus = (input : number) : string => {
    switch(input){
        case 0 : return "added"
        case 1 : return "pending"
        case 2 : return "finished"
        default : return "unknown"
    }
}
const isFinish = (input : number,finishTime : any) : string => {
    if(input === 2) return finishTime
    else return "on Going"
}

export {stringStatus,isFinish}