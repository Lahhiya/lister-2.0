import { DummyDataType , OrderDataType} from "@/schema/orderDataType"
import { DetailFullType } from "@/schema/detailFull"

const transformFullData = (input: OrderDataType | DummyDataType): DetailFullType => {
    const data = input

    let stats;
    switch(data.status){
        case 0:
            stats = "Pending"
            break;
        case 1:
            stats = "in Process"
            break;
        case 2:
            stats = "Completed"
            break;
        default:
            stats = "Unknown"
            break;
    }

    const finish = data.status === 2 ? "pesanan selesai dalam waktu..." : "pesanan belum selesai."

    const res = {
        id : data.id,
        uuid : input.uuid,
        name : input.name,
        status : stats,
        createdAt : `pesanan di buat ....`,
        finishAt : finish,
        history : "anggap aj ada data dulu",
        total : `${data.total} Stk`,
        message : data.message
    }

    return res
}

export default transformFullData
