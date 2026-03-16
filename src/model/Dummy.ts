class Dummy {
    id : string;
    uuid : string;
    total : number;
    progress : number;
    timestamp : number[];
    createAt : number;
    finishAt : number;
    message : string;
    status : number;
    constructor(){
        this.id = "";
        this.uuid = "";
        this.total = 0;
        this.progress = 0;
        this.timestamp = [];
        this.createAt = 0;
        this.finishAt = 0;
        this.message = "";
        this.status = 0;
    }
}

export default Dummy;