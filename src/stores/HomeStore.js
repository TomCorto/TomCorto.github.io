import { observable, action, computed } from 'mobx';

class HomeStore {
  @observable MenuToggle = false;
  @observable SearchToggle = false;
  @observable WindowWidthProps = 0;
  @observable MenuItemsList = [{route: '/bikes', text: 'Vélos'},  {route: '/equipment', text: 'Équipements'}, {route: '/accessories', text: 'Accessoires'}, {route: '/shop', text: 'Magasins'}];
  @observable FooterItemsList = [{route: '/bikes', text: 'Vélos'},  {route: '/equipment', text: 'Équipements'}, {route: '/about', text: 'À propos'}, {route: '/shop', text: 'Contact'}, {route: '/shop', text: 'Trouver un magasin'}];
  @observable LandingItems = [ {route: './bikes', text: 'En savoir plus'}, {route: './bikes', text: 'En savoir plus'} ];
  @observable LandingNews = [{route: './bikes', h4Props: 'Superleggera', h5Props: 'Vintage', textStyleProps: 'Tout les ans nous organisons une course dans les Dolomites. Venez vous confronter au mythique Stelvio col historique du Tour d’Italie', backgroundImgProps: 'landing_news-superleggera.jpg', textBtnProps: 'Découvrir'}, {route: './bikes', h4Props: 'Granfondo', h5Props: 'Course', textStyleProps: 'Venez vous confronter au mythique Stelvio col historique du Tour d’Italie.', backgroundImgProps: 'landing_news-granfondo.jpg', textBtnProps: 'S\'inscrire'}];
  @observable LandingCategory = [
    { backgroundImgProps: 'landing_category-mtb.jpg', linkProps: './bikes/mtb/', h2Props: 'VTT', h5Props: 'VTT', textProps: 'XC, DH, Trail - Nos VTT sont adaptés à chacune des pratiques' },
    { backgroundImgProps: 'landing_category-road.jpg', linkProps: './bikes/road/', h2Props: 'Route', h5Props: 'Route', textProps: 'Que vous soyez un cycliste confirmé ou débutant, nous avons le vélo …' },
    { backgroundImgProps: 'landing_category-fitness.jpg', linkProps: './bikes/fitness/', h2Props: 'Fitness', h5Props: 'Vélos Fitness', textProps: 'Restez en forme ou promenez vous en ville avec nos vélos Fitness' },
    { backgroundImgProps: 'landing_category-gravel.jpg', linkProps: './bikes/gravel/', h2Props: 'Gravel', h5Props: 'Vélo Gravel', textProps: 'Nos vélos E-Bikes sont loin d’être communs, ils sont juste comme devrait être …' }
  ];
  @observable LandingLocator = "Trouvez un magasin";

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

export default new HomeStore();
