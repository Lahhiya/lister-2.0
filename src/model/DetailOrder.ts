class DetailOrder {
    id : string;
    name : string;
    amount : number;
    message : string;
    constructor(id :  string, name : string, amount : number, message : string) {
        this.id = id;
        this.name = name;
        this.amount = amount;
        this.message = message;
    }
}

export default DetailOrder;