import { observable, action, computed } from 'mobx';

class ProductStore {
  @observable msgTest = "Product store";

}

export default new ProductStore();
