import { observable, action } from 'mobx';

class ProductStore {
  @observable barCompObject = { rangeText: 'Gammes Vélos de routes', toggleBool: false };
  @observable rangeObject = { text: 'Salut la compagnie' };
  @observable productObject = { buttonCustomText: 'Personnaliser', buttonCTAText: 'Commander', imgMain: {imgSrc: 'product-Cento10NDR-R1.jpg', imgAlt: 'Product Image'}, logoBike: {imgSrc: 'icons-product-logo_cento10ndr.png', imgAlt: 'Icons Bike'} };
  @observable infoBarObject = { modelText: 'Cento 10 NDR', priceText: 'À partir de 4750 €', sizeText: 'Guide Tailles', compareText: 'Comparer', sizeLabel: 'Taille' };
  @observable descriptionObject = { text: "Un cadre de course qui exalte le rapport entre prestations et confort. Cento10NDR vous permettra de pédaler plus longtemps grâce à la géométrie endurance ainsi qu’au système ACTIFLEX, nouveau concept de la maison Wilier né pour améliorer l’absorption des vibrations générées par les imperfections de la route." };
  @observable frameObject = { title: 'LA RECHERCHE DU CONFORT DE COURSE', text: 'Le marché du vélo de course est en pleine évolution. De nouveaux utilisateurs approchent le monde des deux roues avec chacun des objectifs différents de ceux purement compétitifs : des géométries plus confortables, la possibilité d’avoir des roues dotées de pneus plus larges, des freins à disque, l’envie de pédaler longtemps et sans stress ; de conjuguer, par conséquent, réactivité, performance, légèreté, qualité de conduite et confort. Avec Cento10NDR, nous avons réuni tous ces aspects qui, jusque-là, appartenaient à des visions et à des façons de vivre le vélo complètement différentes. Avec le développement du système ACTIFLEX, commencé en 2014, nous avons greffé notre ADN de course typique au monde de l’endurance.' };
  @observable specsObject1 = {title: 'INTÉGRATION TOTALE', text: "Le design sophistiqué du tube de direction associé à la forme spéciale des roulements permet de passer à l’intérieur du cadre jusqu’à 3 câbles. Ces 3 câbles entrent dans le tube de direction grâce à Alabarda ou à Stemma et à Barra, la nouvelle plate-forme de potence / cintre qui accueille en son sein les câbles de changement de vitesse et de frein provenant des commandes et les achemine en formant l’angle correct à l’intérieur du tube de direction. Ainsi, en cas de transmission électromécanique associée à des freins à disque, le vélo sera privé de câbles externes, donnant ainsi au Cento10NDR une esthétique extrêmement épurée."};
  @observable specsObject2 = {title: 'AÉRODYNAMIQUE', text: "Le Cento10NDR est un cadre de course dérivé du Cento10AIR, notre vélo de course très haut de gamme léger et aérodynamique. Comme sur le Cento10AIR, le dernier né de la Maison Wilier a été développé selon les règles Naca, algorithmes d’extraction aéronautique permettant de dimensionner les tubes du cadre avec le maximum d’efficacité aérodynamique. Un autre concept aérodynamique important accompagne les algorithmes NACA : la théorie de KAMM. Tous les profils ont en effet la queue tronquée. Cette solution permet de répartir le poids et d’augmenter la rigidité en torsion sans altérer l’efficacité aérodynamique du tube."};

  @action.bound displayRange() {
    this.barCompObject.toggleBool = !this.barCompObject.toggleBool;
  }
}

export default new ProductStore();
