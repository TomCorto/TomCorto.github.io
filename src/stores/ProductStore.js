import { observable, action, computed } from 'mobx';

class ProductStore {
  @observable msgTest = "Product store";
  //@observable localNavigationItems = [{link: '#'}]
}

export default new ProductStore();
