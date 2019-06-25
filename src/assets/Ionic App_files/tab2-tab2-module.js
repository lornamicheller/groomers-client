(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n  <div class=\"borders\">\n    <ion-card style=\"box-shadow: none; height: 80px;\">\n      <img class=\"logo\" src=\"assets/logoverde.svg\">\n      <ion-button href=\"/login\" class=\"arrow-btn\">\n        <ion-icon class=\"arrow-icon\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n      </ion-button>\n      <ion-button class=\"add-btn\">\n        <ion-icon class=\"add-icon\" ios=\"ios-add\" md=\"md-add\"></ion-icon>\n      </ion-button>\n    </ion-card>\n    <p\n      style=\"text-align: center; color: rgb(255, 255, 255); margin-top: 280px; margin-left: 40px; margin-right: 40px; font-size: 20px;\">\n      Enter your address for make an appointment easier.</p>\n\n      <ion-button class=\"address-btn\" href=\"\" expand=\"block\">ADD ADDRESS</ion-button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".arrow-btn {\n  position: absolute;\n  top: 17px;\n  --background: transparent;\n  --background-activated: transparent;\n  color: #414042;\n  --color-activated: #414042; }\n\n.add-btn {\n  position: absolute;\n  top: 17px;\n  right: 0;\n  --background: transparent;\n  --background-activated: transparent;\n  color: #414042;\n  --color-activated: #414042; }\n\n.arrow-icon {\n  color: #37B34A;\n  width: 25px;\n  height: 25px; }\n\n.add-icon {\n  color: #37B34A;\n  width: 30px;\n  height: 30px; }\n\n.logo {\n  margin-left: auto;\n  margin-right: auto;\n  height: 90px;\n  width: 100px; }\n\n.borders {\n  background-color: rgba(255, 255, 255, 0.596);\n  height: 100px;\n  position: absolute;\n  top: 0;\n  width: 100%; }\n\n.bg {\n  background-image: url(\"/assets/blue-bg.jpg\");\n  background-size: cover;\n  height: 100vh;\n  position: bottom; }\n\n.address-btn {\n  --background: #414042;\n  --background-activated: #414042;\n  --border-radius: 25px;\n  font-weight: 700;\n  font-size: 13px;\n  letter-spacing: 1px;\n  height: 50px;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 50px;\n  --box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0RvY3VtZW50cy9HaXRIdWIvZ3Jvb21lcnMtY2xpZW50L3NyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsY0FBYztFQUNkLDBCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsUUFBUTtFQUNSLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLGNBQWM7RUFDZCwwQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdkO0VBRUUsNENBQTRDO0VBQzVDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVcsRUFBQTs7QUFHYjtFQUNFLDRDQUE0QztFQUM1QyxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLHFCQUFhO0VBQ2IsK0JBQXVCO0VBQ3ZCLHFCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXJyb3ctYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3cHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzQxNDA0MjtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICM0MTQwNDI7XG59XG5cbi5hZGQtYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3cHg7XG4gIHJpZ2h0OiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM0MTQwNDI7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjNDE0MDQyO1xufVxuXG4uYXJyb3ctaWNvbiB7XG4gIGNvbG9yOiAjMzdCMzRBO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4uYWRkLWljb24ge1xuICBjb2xvcjogIzM3QjM0QTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBoZWlnaHQ6IDkwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLmJvcmRlcnMge1xuICAvLyBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDE5OSwgMTk5LCAxOTkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTk2KTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvYmx1ZS1iZy5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGJvdHRvbTtcbn1cblxuLmFkZHJlc3MtYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjNDE0MDQyO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNDE0MDQyO1xuICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Tab2Page = /** @class */ (function () {
    function Tab2Page() {
    }
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        })
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map