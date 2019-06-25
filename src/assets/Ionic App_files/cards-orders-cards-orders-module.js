(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cards-orders-cards-orders-module"],{

/***/ "./src/app/cards-orders/cards-orders.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/cards-orders/cards-orders.module.ts ***!
  \*****************************************************/
/*! exports provided: CardsOrdersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsOrdersPageModule", function() { return CardsOrdersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _cards_orders_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cards-orders.page */ "./src/app/cards-orders/cards-orders.page.ts");







var routes = [
    {
        path: '',
        component: _cards_orders_page__WEBPACK_IMPORTED_MODULE_6__["CardsOrdersPage"]
    }
];
var CardsOrdersPageModule = /** @class */ (function () {
    function CardsOrdersPageModule() {
    }
    CardsOrdersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_cards_orders_page__WEBPACK_IMPORTED_MODULE_6__["CardsOrdersPage"]]
        })
    ], CardsOrdersPageModule);
    return CardsOrdersPageModule;
}());



/***/ }),

/***/ "./src/app/cards-orders/cards-orders.page.html":
/*!*****************************************************!*\
  !*** ./src/app/cards-orders/cards-orders.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-bar\">\n  <ion-button class=\"arrow-btn\">\n    <ion-icon class=\"arrow\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n  </ion-button>\n</div>\n\n<ion-content class=\"bg\">\n\n  <ion-card class=\"order-card\">\n\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"3\" class=\"green-bg\">\n         \n        </ion-col>\n        <ion-col>\n    \n        </ion-col size=\"9\">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/cards-orders/cards-orders.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/cards-orders/cards-orders.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-bar {\n  background: black;\n  height: 70px; }\n\n.arrow-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  position: absolute;\n  top: 10px;\n  left: 0; }\n\n.green-bg {\n  background-color: #37B34A; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0RvY3VtZW50cy9HaXRIdWIvZ3Jvb21lcnMtY2xpZW50L3NyYy9hcHAvY2FyZHMtb3JkZXJzL2NhcmRzLW9yZGVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUdkO0VBQ0UseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPLEVBQUE7O0FBR1Q7RUFDRSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NhcmRzLW9yZGVycy9jYXJkcy1vcmRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1iYXIge1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgaGVpZ2h0OiA3MHB4O1xufVxuXG4uYXJyb3ctYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMHB4O1xuICBsZWZ0OiAwO1xufVxuXG4uZ3JlZW4tYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzdCMzRBO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/cards-orders/cards-orders.page.ts":
/*!***************************************************!*\
  !*** ./src/app/cards-orders/cards-orders.page.ts ***!
  \***************************************************/
/*! exports provided: CardsOrdersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsOrdersPage", function() { return CardsOrdersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CardsOrdersPage = /** @class */ (function () {
    function CardsOrdersPage() {
    }
    CardsOrdersPage.prototype.ngOnInit = function () {
    };
    CardsOrdersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cards-orders',
            template: __webpack_require__(/*! ./cards-orders.page.html */ "./src/app/cards-orders/cards-orders.page.html"),
            styles: [__webpack_require__(/*! ./cards-orders.page.scss */ "./src/app/cards-orders/cards-orders.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CardsOrdersPage);
    return CardsOrdersPage;
}());



/***/ })

}]);
//# sourceMappingURL=cards-orders-cards-orders-module.js.map