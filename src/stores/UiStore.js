import { observable, action, computed } from 'mobx';

class UiStore {
  @observable MenuToggle = false;
  @observable arrayProductObjects = {id: 1, name: 'Chaise', display: false};
  @observable UiWindowWidth = 0;

  @action windowWidthFunc() {
    return window.innerWidth;
  }

  @action.bound toggleMenuBool(el) {
  }

  @computed get birdCount() {
  }
}

export default new UiStore();
