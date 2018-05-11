import { observable, action, computed } from 'mobx';

class UiStore {
  @observable MenuToggle = false;
  @observable arrayProductObjects = {id: 1, name: 'Chaise', display: false};
  @observable UiWindowWidth = 0;
  @observable ScrollListener = false;


  @action windowWidthFunc() {
    return window.innerWidth;
  }

  @action.bound toggleMenuBool(el) {
  }

  @action.bound toggleMenuScroll() {
    this.ScrollListener = !this.ScrollListener;
  }

  @action.bound handleScrollUi() {

  }

  @computed get birdCount() {
  }
}

export default new UiStore();
