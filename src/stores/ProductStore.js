import { observable, action } from 'mobx';

class ProductStore {
  @observable barCompObject = { rangeText: 'Gammes Vélos de routes', toggleBool: false };
  @observable rangeObject = { text: 'Salut la compagnie' };
  @observable productObject = { buttonCustomText: 'Personnaliser', buttonCTAText: 'Commander', buttonCTAStoreText: 'Trouver un magasin', imgMain: {imgSrc: 'product-Cento10NDR-R1.jpg', imgAlt: 'Product Image'}, logoBike: {imgSrc: 'icons-product-logo_cento10ndr.png', imgAlt: 'Icons Bike'} };
  @observable infoBarObject = { modelText: 'Cento 10 NDR', priceText: 'À partir de 4750 €', sizeText: 'Guide Tailles', compareText: 'Comparer', sizeLabel: 'Taille' };
  @observable descriptionObject = { title: 'Présentation', text: "Un cadre de course qui exalte le rapport entre prestations et confort. Cento10NDR vous permettra de pédaler plus longtemps grâce à la géométrie endurance ainsi qu’au système ACTIFLEX, nouveau concept de la maison Wilier né pour améliorer l’absorption des vibrations générées par les imperfections de la route." };
  @observable frameObject = { title: 'LA RECHERCHE DU CONFORT DE COURSE', text: 'Le marché du vélo de course est en pleine évolution. De nouveaux utilisateurs approchent le monde des deux roues avec chacun des objectifs différents de ceux purement compétitifs : des géométries plus confortables, la possibilité d’avoir des roues dotées de pneus plus larges, des freins à disque, l’envie de pédaler longtemps et sans stress ; de conjuguer, par conséquent, réactivité, performance, légèreté, qualité de conduite et confort. Avec Cento10NDR, nous avons réuni tous ces aspects qui, jusque-là, appartenaient à des visions et à des façons de vivre le vélo complètement différentes. Avec le développement du système ACTIFLEX, commencé en 2014, nous avons greffé notre ADN de course typique au monde de l’endurance.' };
  @observable specsObject1 = {title: 'INTÉGRATION TOTALE', text: "Le design sophistiqué du tube de direction associé à la forme spéciale des roulements permet de passer à l’intérieur du cadre jusqu’à 3 câbles. Ces 3 câbles entrent dans le tube de direction grâce à Alabarda ou à Stemma et à Barra, la nouvelle plate-forme de potence / cintre qui accueille en son sein les câbles de changement de vitesse et de frein provenant des commandes et les achemine en formant l’angle correct à l’intérieur du tube de direction. Ainsi, en cas de transmission électromécanique associée à des freins à disque, le vélo sera privé de câbles externes, donnant ainsi au Cento10NDR une esthétique extrêmement épurée."};
  @observable specsObject2 = {title: 'AÉRODYNAMIQUE', text: "Le Cento10NDR est un cadre de course dérivé du Cento10AIR, notre vélo de course très haut de gamme léger et aérodynamique. Comme sur le Cento10AIR, le dernier né de la Maison Wilier a été développé selon les règles Naca, algorithmes d’extraction aéronautique permettant de dimensionner les tubes du cadre avec le maximum d’efficacité aérodynamique. Un autre concept aérodynamique important accompagne les algorithmes NACA : la théorie de KAMM. Tous les profils ont en effet la queue tronquée. Cette solution permet de répartir le poids et d’augmenter la rigidité en torsion sans altérer l’efficacité aérodynamique du tube."};
  @observable characteristicsObject = {title: 'Caractéristiques'};
  @observable characteristicsItemsObject = [
    {imgSrc: 'icons-product-frame.png', imgAlt: 'Icons Frame', specsSpan: 'Cadre', specsTitleText: 'Carbon Monocoque 60TON + S.E.I. FILM', subBool: true, subSpan: 'Poids', subText: '1190 gr. ± 5% SIZE M, painted'},
    {imgSrc: 'icons-product-fork.png', imgAlt: 'Icons Fork', specsSpan: 'Fourche', specsTitleText: 'Carbon Monocoque 60TON + S.E.I. FILM', subBool: true, subSpan: 'Poids', subText: '390 gr. ± 5%'},
    {imgSrc: 'icons-product-bar.png', imgAlt: 'Icons Bar', specsSpan: 'Cintre', specsTitleText: 'Wilier Triestina BARRA H-Bar', subBool: true, subSpan: 'Poids', subText: '245 gr. ± 5% SIZE 420 mm, painted'},
    {imgSrc: 'icons-product-direction.png', imgAlt: 'Icons Direction', specsSpan: 'Jeu de direction', specsTitleText: 'Wilier Triestina STEMMA', subBool: false, subSpan: '', subText: ''},
    {imgSrc: 'icons-product-crankset.png', imgAlt: 'Icon Crankset', specsSpan: 'Pédalier', specsTitleText: 'Shimano Ultegra R8000 50/34T', subBool: false, subSpan: '', subText: ''},
    {imgSrc: 'icons-product-front-shift.png', imgAlt: 'Icon Front Shift', specsSpan: 'Dérailleur avant', specsTitleText: 'Shimano Ultegra R8000', subBool: false, subSpan: '', subText: ''},
    {imgSrc: 'icons-product-back-shift.png', imgAlt: 'Icon Back Shift', specsSpan: 'Dérailleur arrière', specsTitleText: 'Shimano Ultegra R8000', subBool: false, subSpan: '', subText: ''},
    {imgSrc: 'icons-product-cassette.png', imgAlt: 'Icon Cassette', specsSpan: 'Cassette', specsTitleText: 'Shimano Ultegra R8000 11/30T', subBool: false, subSpan: '', subText: ''},
    {imgSrc: 'icons-product-chainset.png', imgAlt: 'Icon Chaine', specsSpan: 'Chaîne', specsTitleText: 'Shimano Ultegra R8000', subBool: false, subSpan: '', subText: ''},
    {imgSrc: 'icons-product-wheel.png', imgAlt: 'Icon Wheel', specsSpan: 'Roues', specsTitleText: 'Shimano WHRS500', subBool: false, subSpan: '', subText: ''},
    {imgSrc: 'icons-product-tyres.png', imgAlt: 'Icons Tyres', specsSpan: 'Pneus', specsTitleText: 'Vittoria Rubino Pro 4', subBool: false, subSpan: '', subText: ''},
    {imgSrc: 'icons-product-seat.png', imgAlt: 'Icon Seat', specsSpan: 'Selle', specsTitleText: 'Shimano Ultegra R8000', subBool: false, subSpan: '', subText: ''},
    {imgSrc: 'icons-product-seat-crank.png', imgAlt: 'Icon Cassette', specsSpan: 'Tige de selle', specsTitleText: 'Ritchey Pro carbon 27,2 x 350 mm', subBool: false, subSpan: '', subText: ''}
  ];
  @observable geometryObject = { title: 'Géométrie cadre', text: "La géométrie du cadre est un critère fondamental lorsqu’il est question de vélos d’endurance. Pour garantir à l’utilisateur du Cento10NDR un niveau de confort optimal pendant la course, il faut envisager de nouvelles proportions entre les tubes du cadre. Nous avons une position légèrement plus courte (le reach est moindre si on la compare à celle des vélos à géométries racing traditionnelles) et plus haute (un stack plus grand par rapport aux géométries racing). Cette combinaison de reach et de stack nous permet d’avoir une position confortable. Combien de fois avons-nous vu des cyclistes pédaler sur des vélos exclusivement faits pour la course avec plusieurs centimètres d’entretoises au niveau du tube de direction ? Maintenant avec le Cento10NDR l’aspect général du vélo sera harmonieux, proportionné, équilibré et en même temps taillé pour la course. Le graphique Reach & Stack montre la position correcte des 6 tailles du Cento10NDR (ligne bleue) par rapport aux autres cadres Wilier Triestina développés ces dernières années."};

  @observable sizeComponent = {
    imgObject: {imgSrc: 'product-geometrie-frame.jpg', imgAlt: ''},
    buttonText: 'Trouvez votre taille',
    displaySize: false,
    displaySizeResult: true,
    displaySizeColorsBackground: true,
    headerTitle: 'Dimensions',
    infoProduct: {modelText: 'Cento 10 NDR', priceText: 'À partir de 4750 €'},
    geometryObject: {
      thObject: ['Taille', 'c/c', 'L', 'H', 'A', 'H1', 'L1', 'A1', 'Reach', 'Stack'],
      thMeasure: ['', 'cm', 'cm', 'cm', '°', 'cm', 'cm', '°', 'mm', 'mm'],
      tdArrayXS: ['XS', '40,5', '51,7', '46,0', '74,5', '11,7', '40,6', '71,0', '369', '527'],
      tdArrayS: ['XS', '40,5', '53,2', '46,0', '74,0', '13,6', '40,6', '71,5', '374', '546'],
      tdArrayM: ['M', '43,5', '54,7', '46,0', '73,5', '15,7', '40,8', '72,0', '379', '566'],
      tdArrayL: ['L', '45,5', '55,8', '46,0', '73,5', '17,7', '40,8', '72,5', '384', '586'],
      tdArrayXL: ['XL', '50,5', '57,4', '46,0', '73,0', '19,6', '41,1', '72,5', '389', '604'],
      tdArrayXXL: ['XXL', '53,5', '59,2', '46,0', '72,5', '21,7', '41,1', '72,5', '395', '625']
    },
    sizeFinder: {
      leftSide: {
        header: { title: ['Guide Taille Cadre', 'Mesures'], subText: 'Notre système de calcul de mensuration permet de mesurer la taille de vélo idéale pour vous.'},
        displayReturnButton: {status: false, count: 1, displayHover: false},
      },
      rightSide: {
        stepStatus: {stepOne: true, stepTwo: false, stepThree: false},
        header: { title: 'Mensuration' },
        buttonText: '',
        measureMetrics: {
            mensuration: [
                {span: 'Genre', text: 'Homme'},
                {span: 'Height', text: '183 cm'},
                {span: 'Weight', text: '73 kg'}
            ]
        },
        measureResult: [{title: 'Taille Cadre', specs: 'M'}, {title: 'Hauteur Selle', specs: '78 cm'}]
      }
    }
   };

  @action.bound displayRange() {
    this.barCompObject.toggleBool = !this.barCompObject.toggleBool;
  }

  @action.bound displayProductSize() {
    this.sizeComponent.displaySize = !this.sizeComponent.displaySize;
    this.sizeComponent.displaySizeResult = !this.sizeComponent.displaySizeResult;
  }

  @action.bound displaySizeResultFunc() {
    this.sizeComponent.sizeFinder.rightSide.stepStatus.stepThree = !this.sizeComponent.sizeFinder.rightSide.stepStatus.stepThree;
    this.sizeComponent.sizeFinder.rightSide.stepStatus.stepTwo = !this.sizeComponent.sizeFinder.rightSide.stepStatus.stepTwo;
  }

  @action.bound statusStepFunc() { /* @statusStepFunc - Change Status  */
    this.sizeComponent.sizeFinder.rightSide.stepStatus.stepOne = !this.sizeComponent.sizeFinder.rightSide.stepStatus.stepOne;
    this.sizeComponent.sizeFinder.rightSide.stepStatus.stepTwo = !this.sizeComponent.sizeFinder.rightSide.stepStatus.stepTwo;
  }

  @action.bound statusStepBackFunc() { /* @status StepbackFunc */
    this.sizeComponent.sizeFinder.leftSide.displayReturnButton.status = !this.sizeComponent.sizeFinder.leftSide.displayReturnButton.status;
  }

  @action.bound displayReturnTextFunc() { /*  */
    this.sizeComponent.sizeFinder.leftSide.displayReturnButton.displayHover = !this.sizeComponent.sizeFinder.leftSide.displayReturnButton.displayHover;
  }
}

export default new ProductStore();
