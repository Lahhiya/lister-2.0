import DetailOrder from "@/model/DetailOrder";
import Dummy from "@/model/Dummy";

class Orders {
  detail : DetailOrder[]
  dummyDetail : Dummy[]
  constructor() {
    this.detail = [];
    this.dummyDetail = []
  }
  addOrders() {
    this.detail.push();
  }
  addDummyOrders(){
    this.dummyDetail.push()
  }
  findById(id: string) {
    return this.detail.find((item) => item.id === id);
  }
}

export default Orders;
