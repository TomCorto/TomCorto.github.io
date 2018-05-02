import { observable, action, computed } from 'mobx';

class BikeStore {
  @observable h2Text = "Vélos Route";
  @observable MenuToggle = false;
  @observable SearchToggle = false;
  @observable WindowWidthProps = 0;

  @observable MenuItemsList = [{route: '/bikes', text: 'Vélos'},  {route: '/equipment', text: 'Équipements'}, {route: '/accessories', text: 'Accessoires'}, {route: '/shop', text: 'Magasins'}];
  @observable LandingLocator = "Trouvez un magasin";

  @action.bound windowWidthFunct(el) {
    this.WindowWidthProps = el;
  }

  @action.bound toggleSearch() {
    this.SearchToggle = !this.SearchToggle;
  }

  @action.bound toggleMenu() {
    this.MenuToggle = !this.MenuToggle;
  }

  @computed get birdCount() {
    return this.props.MenuToggle.length;
  }
}

export default new BikeStore();
