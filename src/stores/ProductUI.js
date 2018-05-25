import { observable, action, computed } from 'mobx';

class ProductUI {
@observable SvgValueObj = [
    /* Height */
    {height: "247", viewBox: "0,0 146,247", polygonOne: "0,247 2,247 2,0 0,0", polygonTwo: "1,1 146,1 146,0 1,0", polygonThree: "0,247 145,247 145,245 0,245"},
    /* Chest */
    {height: "247", viewBox: "0,0 146,247", polygonOne: "0,110 2,110 2,35 0,35", polygonTwo: "0,35 146,35 146,33 0,33", polygonThree: "0,112 145,112 145,110 0,110"},
    /* Legs */
    {height: "247", viewBox: "0,0 146,247", polygonOne: "0,247 2,247 2,124 0,124", polygonTwo: "0,125 146,125 146,123 0,123", polygonThree: "0,247 145,247 145,245 0,245"},
    /* Shoulders */
    {height: "247", viewBox: "0,0 146,247", polygonOne: "0,0 0,0 0,0 0,0", polygonTwo: "43,48 105,48 105,46 43,46", polygonThree: "0,0 0,0 0,0 0,0"},
    /* Arms */
    {height: "247", viewBox: "0,0 146,247", polygonOne: "0,140 2,140 2,42 0,42", polygonTwo: "0,42 146,42 146,40 0,40", polygonThree: "0,142 145,142 145,140 0,140"},
    ];
    @observable displaySvg = 4;

    @observable bodySvgIndicator = [
        {indicator: 'a', text: 'Longueur de torse'},
        {indicator: 'b', text: 'Entre-jambe'},
        {indicator: 'c', text: 'Largeur d\'épaules'},
        {indicator: 'd', text: 'Longueur de bras'}
    ]

    @observable ProductAnimation = { toggleImgProduct: true, toggleInfoBar: false };

    @action.bound displayImg() {
        this.ProductAnimation.toggleImgProduct = !this.ProductAnimation.toggleImgProduct;
    }
}

export default new ProductUI();
