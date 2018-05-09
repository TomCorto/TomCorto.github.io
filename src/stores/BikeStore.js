import { observable, action, computed } from 'mobx';

class BikeStore {
  @observable landingBikeObject = {h2Text: "Vélos Route",buttonLink: "Trouvez votre vélo", buttonFinder: "Guide Vélos"};
  @observable bikesPresentationText = {text: "Nous avons traversé le 20ème siècle en construisant des vélos. Nous sommes arrivés à l’an 2000 avec une certitude: une recherche technologique continue. Le résultat en est de véritables bijoux signés de la halebarde. Mais le temps passe et la recherche de la perfection ne doit pas s’arrêter. La collection Route 2018 en est la preuve."};
  @observable ProductList = [
    {id: 1, Title: 'Cento 10 NDR',category:'road', sportType: 'performance', frame: 'carbon', wheel: 700, brake: 'v-brake', transmission: ['mecanic', 'electric'], imgSrc: 'road-cento10ndr-r2.jpg', imgAlt: 'Alt image', color: ["blue", "red", "black"], Price: 'À partir de 4950 €', price: 4950},
    {id: 2, Title: 'Cento10 AIR DISC',category:'road', sportType: 'performance', frame: 'carbon', wheel: 700, brake: 'disc', transmission: ['mecanic', 'electric'], imgSrc: 'road-cento10AIR-DISC.jpg', imgAlt: 'Alt image', color: ["blue", "red", "black"], Price: 'À partir de 6500 €', price: 6500},
    {id: 3, Title: 'GTR Team G21',category:'road', sportType: 'loisir', frame: 'aluminium', wheel: 700, brake: 'v-brake', transmission: ['mecanic'], imgSrc: 'road-GTR-Team-G21.jpg', imgAlt: 'Alt image', color: ["blue", "red", "black"], Price: 'À partir de 750 €', price: 750 },
    {id: 4, Title: 'Zero 7',category:'road', sportType: 'performance', frame: 'carbon', wheel: 700, brake: 'v-brake', transmission: ['mecanic'], imgSrc: 'road-Zero.7-Z12.jpg', imgAlt: 'Alt image', color: ["blue", "red", "black"], Price: 'À partir de 1699 €', price: 1699 },
    {id: 5, Title: 'Jaroon 7',category:'gravel', sportType: 'performance', frame: 'aluminium', wheel: 650, brake: 'disc', transmission: ['mecanic'], imgSrc: 'road-Jaroon-J7.jpg', imgAlt: 'Alt image', color: ["orange", "red", "black"], Price: 'À partir de 999 €', price: 999 },
    {id: 6, Title: 'A13',category:'road', sportType: 'performance', frame: 'carbone', wheel: 700, brake: 'v-brake', transmission: ['mecanic'], imgSrc: 'road-A13.jpg', imgAlt: 'Alt image', color: ["black", "red"], Price: 'À partir de 1999 €', price: 1999},
    {id: 7, Title: 'Blade T7',category:'triathlon', sportType: 'performance', frame: 'carbon', wheel: 700, brake: 'v-brake', transmission: ['mecanic', 'electric'], imgSrc: 'road-Blade-T7.jpg', imgAlt: 'Alt image', color: ["black", "blue"], Price: 'À partir de 2899 €', price: 2899 },
    {id: 8, Title: 'CENTO 10 Air',category:'road', sportType: 'performance', frame: 'carbon', wheel: 700, brake: 'v-brake', transmission: ['mecanic', 'electric'], imgSrc: 'road-Cento10AIR-D1.jpg', imgAlt: 'Alt image', color: ["white", "red", "blue"], Price: 'À partir de 4750 €', price: 4750 },
    {id: 9, Title: 'Luna',category:'road', sportType: 'loisir', frame: 'carbon', wheel: 700, brake: 'v-brake', transmission: ['mecanic'], imgSrc: 'road-LUNA.jpg', imgAlt: 'Alt image', color: ["blue", "red", "black"], Price: 'À partir de 500 €', price: 500}
  ];

  @observable filterRoad = {category: 'triathlon', sportType: '', frame: '', wheel: null, tranmission: '', brake: '', caracteristics: '', price: 5000};
  @observable filterUiRoad = [
      {displayDropdown: true, title: "Catégories", list: ['Route', 'Triathlon', 'Gravel']},
      {displayDropdown: true, title: "Cadre", list: ['Carbone', 'Aluminium']},
      {displayDropdown: false, title: "Pratique", list: ['Performance', 'Loisir']},
      {displayDropdown: false, title: "Freins", list: ['Étriers', "Disques Hydrauliques"]},
      {displayDropdown: false, title: "Caractéristiques", list: ["Cadre Aéro", "Shimani Di2", "Câbles internes"]},
      {displayDropdown: true, title: "Gammes de prix",list: ["500€ - 1500€", "1500€ - 3000€", "3000 - 4500€", "4500€ - 8000€", "8000€ - 15 000€"]}
  ]
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

  //////////////////////////////////
  //// Selector Function  ////////
  /////////////////////////////////
  @action.bound toggleSelectorCategories(indicator) {
    /*if (indicator === 0) {
      this.filterUiRoad[0].displayDropdown = !this.filterUiRoad[0].displayDropdown;
      //alert(this.filterUiRoad[0].displayDropdown);
    }*/
  }

  @computed get birdCount() {
    return this.props.MenuToggle.length;
  }

  @computed get filterProductList() {
    return this.ProductList
    .filter(el => el.price <= 12000 );
  }
}

export default new BikeStore();

/*
.filter((el) => el.category === "road")
.filter((el) => el.frame === "carbon")
.filter((el) => el.transmission[0] == "mecanic")
.filter((el) => el.price < 6500)
.filter((el) => el.brake == "v-brake");
 */
