import { observable, action, computed } from 'mobx';

class BikeStore {
  @observable landingBikeObject = {h2Text: "Vélos Route",buttonLink: "Trouvez votre vélo", buttonFinder: "Guide Vélos"};
  @observable bikesPresentationText = {text: "Nous avons traversé le 20ème siècle en construisant des vélos. Nous sommes arrivés à l’an 2000 avec une certitude: une recherche technologique continue. Le résultat en est de véritables bijoux signés de la halebarde. Mais le temps passe et la recherche de la perfection ne doit pas s’arrêter. La collection Route 2018 en est la preuve."};
  @observable ProductList = [
    {Title: 'CENTO 10 NDR', Category: 'Route Performance', imgSrc: 'road-cento10ndr-r2.jpg', imgAlt: 'Alt image', color: ["blue", "red", "black"], Price: 'À partir de 500 €'},
    {Title: 'CENTO 10 NDR', Category: 'Route Performance', imgSrc: 'road-cento10ndr-r2.jpg', imgAlt: 'Alt image', color: ["blue", "red", "black"], Price: 'À partir de 500 €'},
    {Title: 'CENTO 10 NDR', Category: 'Route Performance', imgSrc: 'road-cento10ndr-r2.jpg', imgAlt: 'Alt image', color: ["blue", "red", "black"], Price: 'À partir de 500 €'},
    {Title: 'CENTO 10 NDR', Category: 'Route Performance', imgSrc: 'road-cento10ndr-r2.jpg', imgAlt: 'Alt image', color: ["blue", "red", "black"], Price: 'À partir de 500 €'},
    {Title: 'CENTO 10 NDR', Category: 'Route Performance', imgSrc: 'road-cento10ndr-r2.jpg', imgAlt: 'Alt image', color: ["blue", "red", "black"], Price: 'À partir de 500 €'},
    {Title: 'CENTO 10 NDR', Category: 'Route Performance', imgSrc: 'road-cento10ndr-r2.jpg', imgAlt: 'Alt image', color: ["blue", "red", "black"], Price: 'À partir de 500 €'},
    {Title: 'CENTO 10 NDR', Category: 'Route Performance', imgSrc: 'road-cento10ndr-r2.jpg', imgAlt: 'Alt image', color: ["blue", "red", "black"], Price: 'À partir de 500 €'},
    {Title: 'CENTO 10 NDR', Category: 'Route Performance', imgSrc: 'road-cento10ndr-r2.jpg', imgAlt: 'Alt image', color: ["blue", "red", "black"], Price: 'À partir de 500 €'},
    {Title: 'CENTO 10 NDR', Category: 'Route Performance', imgSrc: 'road-cento10ndr-r2.jpg', imgAlt: 'Alt image', color: ["blue", "red", "black"], Price: 'À partir de 500 €'}
  ];
  @observable MenuToggle = false;
  @observable SearchToggle = false;
  @observable uiProductAnim = true;
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

  @action.bound toggleAnimProductFunc() {
    this.uiProductAnim = !this.uiProductAnim;
  }

  @computed get birdCount() {
    return this.props.MenuToggle.length;
  }
}

export default new BikeStore();
