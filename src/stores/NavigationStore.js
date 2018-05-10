import { observable, action, computed } from 'mobx';

class NavigationStore {
  @observable MenuToggle = false;
  @observable MenuToggleDesktop = false;
  @observable MenuToggleMobile = false;
  @observable SearchToggle = false;
  @observable MenuItemsList = [{route: '/bikes', text: 'Vélos'},  {route: '/equipment', text: 'Équipements'}, {route: '/accessories', text: 'Accessoires'}, {route: '/shop', text: 'Magasins'}];
  @observable FooterItemsList = [{route: '/bikes', text: 'Vélos'},  {route: '/equipment', text: 'Équipements'}, {route: '/about', text: 'À propos'}, {route: '/shop', text: 'Contact'}, {route: '/shop', text: 'Trouver un magasin'}];

  @action.bound toggleSearch() { //@SearchToggle Action Toggle Search Bar
    if (this.MenuToggleDesktop === true) {
      this.MenuToggleDesktop = !this.MenuToggleDesktop;
      this.SearchToggle = !this.SearchToggle;
    }else {
      this.SearchToggle = !this.SearchToggle;
    }
  }

  @action.bound toggleMenuDesktop() { // @toggleMenuDesktop Boolean toggle menu
    /*this.MenuToggleDesktop = !this.MenuToggleDesktop;*/
    if (this.SearchToggle === true) {
      this.MenuToggleDesktop = false;
      this.SearchToggle = !this.SearchToggle;
    }else {
      this.MenuToggleDesktop = !this.MenuToggleDesktop;
    }
  }

  @action.bound toggleMenuMobile() { // @toggleMenuMobile Boolean Toogle Mobile Menu
    this.MenuToggleMobile = !this.MenuToggleMobile;
  }

  @action.bound toggleMenu() { //@MenuToggle Action toggle Menu Mobile & Tablets
    this.MenuToggle = !this.MenuToggle;
  }

  @computed get birdCount() {
    return this.props.MenuToggle.length;
  }
}

export default new NavigationStore();
