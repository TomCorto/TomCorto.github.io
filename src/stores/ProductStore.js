import { observable, action } from 'mobx';

class ProductStore {
  @observable barCompObject = { rangeText: 'Gammes Vélos de routes', toggleBool: false };
  @observable rangeObject = { text: 'Salut la compagnie' };
  @observable productObject = { buttonCustomText: 'Personnaliser', buttonCTAText: 'Commander', imgMain: {imgSrc: 'product-Cento10NDR-R1.jpg', imgAlt: 'Product Image'}, logoBike: {imgSrc: 'icons-product-logo_cento10ndr.png', imgAlt: 'Icons Bike'} };
  @observable infoBarObject = { modelText: 'Cento 10 NDR', priceText: 'À partir de 4750 €', sizeText: 'Guide Tailles', compareText: 'Comparer', sizeLabel: 'Taille' };
  @observable descriptionObject = { text: "Un cadre de course qui exalte le rapport entre prestations et confort. Cento10NDR vous permettra de pédaler plus longtemps grâce à la géométrie endurance ainsi qu’au système ACTIFLEX, nouveau concept de la maison Wilier né pour améliorer l’absorption des vibrations générées par les imperfections de la route." };
  @observable frameObject = { title: 'LA RECHERCHE DU CONFORT DE COURSE', text: 'Le marché du vélo de course est en pleine évolution. De nouveaux utilisateurs approchent le monde des deux roues avec chacun des objectifs différents de ceux purement compétitifs : des géométries plus confortables, la possibilité d’avoir des roues dotées de pneus plus larges, des freins à disque, l’envie de pédaler longtemps et sans stress ; de conjuguer, par conséquent, réactivité, performance, légèreté, qualité de conduite et confort. Avec Cento10NDR, nous avons réuni tous ces aspects qui, jusque-là, appartenaient à des visions et à des façons de vivre le vélo complètement différentes. Avec le développement du système ACTIFLEX, commencé en 2014, nous avons greffé notre ADN de course typique au monde de l’endurance.' };

  @action.bound displayRange() {
    this.barCompObject.toggleBool = !this.barCompObject.toggleBool;
  }
}

export default new ProductStore();
