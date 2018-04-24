import { observable, action, computed } from 'mobx';

class NavigationStore {
  @observable MenuToggle = false;
  @observable SearchToggle = false;
  @observable WindowWidthProps = 0;
  @observable MenuItemsList = [{route: '/bikes', text: 'Vélos'},  {route: '/equipment', text: 'Équipements'}, {route: '/accessories', text: 'Accessoires'}, {route: '/shop', text: 'Magasins'}];
  @observable FooterItemsList = [{route: '/bikes', text: 'Vélos'},  {route: '/equipment', text: 'Équipements'}, {route: '/about', text: 'À propos'}, {route: '/shop', text: 'Contact'}, {route: '/shop', text: 'Trouver un magasin'}];

  @action.bound windowWidthFunct(el) {
    this.WindowWidthProps = el;
  }

  @action.bound toggleSearch() { //@SearchToggle Action Toggle Search Bar
    this.SearchToggle = !this.SearchToggle;
  }

  @action.bound toggleMenu() { //@MenuToggle Action toggle Menu Mobile & Tablets
    this.MenuToggle = !this.MenuToggle;
  }

  @computed get birdCount() {
    return this.props.MenuToggle.length;
  }
}

export default new NavigationStore();
