import { observable, action } from 'mobx';

class ProductStore {
  @observable barCompObject = { rangeText: 'Gammes Vélos de routes', toggleBool: false };
  @observable rangeObject = { text: 'Salut la compagnie' };
  @observable productObject = { buttonCustomText: 'Personnaliser', buttonCTAText: 'Commander', imgMain: {imgSrc: 'product-Cento10NDR-R1.jpg', imgAlt: 'Product Image'}, logoBike: {imgSrc: 'icons-product-logo_cento10ndr.png', imgAlt: 'Icons Bike'} };
  @observable infoBarObject = { modelText: 'Cento 10 NDR', priceText: 'À partir de 4750 €', sizeText: 'Guide Tailles', compareText: 'Comparer', sizeLabel: 'Taille' };
  @observable descriptionObject = { text: "Un cadre de course qui exalte le rapport entre prestations et confort. Cento10NDR vous permettra de pédaler plus longtemps grâce à la géométrie endurance ainsi qu’au système ACTIFLEX, nouveau concept de la maison Wilier né pour améliorer l’absorption des vibrations générées par les imperfections de la route." };

  @action.bound displayRange() {
    this.barCompObject.toggleBool = !this.barCompObject.toggleBool;
  }
}

export default new ProductStore();
