(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tutorial-tutorial-module"],{

/***/ "./src/app/tutorial/tutorial.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tutorial/tutorial.module.ts ***!
  \*********************************************/
/*! exports provided: TutorialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPageModule", function() { return TutorialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tutorial_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutorial.page */ "./src/app/tutorial/tutorial.page.ts");







var routes = [
    {
        path: '',
        component: _tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPage"]
    }
];
var TutorialPageModule = /** @class */ (function () {
    function TutorialPageModule() {
    }
    TutorialPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tutorial_page__WEBPACK_IMPORTED_MODULE_6__["TutorialPage"]]
        })
    ], TutorialPageModule);
    return TutorialPageModule;
}());



/***/ }),

/***/ "./src/app/tutorial/tutorial.page.html":
/*!*********************************************!*\
  !*** ./src/app/tutorial/tutorial.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"green-bg\" no-bounce has-bouncing=\"false\" forceOverscroll=\"false\">\n  <ion-slide class=\"full-slide\">\n    <ion-img class=\"logo\" src=\"assets/logoblanco.svg\"></ion-img>\n    <ion-slides pager=\"true\">\n      <ion-slide>\n        <!-- <ion-button class=\"skip-btn\" expand=\"full\">Skip</ion-button> -->\n        <ion-card class=\"tutorial-first-card\">\n          <ion-img class=\"circle-img\" src=\"/assets/icon1.svg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title class=\"title-service\">It's simple! Choose what type of pet and the service you want.\n            </ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card class=\"tutorial-first-card\">\n          <ion-img class=\"circle-img\" src=\"/assets/icon2.svg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title class=\"title-service\">Then choose where and when you want the service.\n            </ion-card-title>\n          </ion-card-header>\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card class=\"tutorial-first-card\">\n          <ion-img class=\"circle-img\" src=\"/assets/icon3.svg\"></ion-img>\n          <ion-card-header>\n            <ion-card-title class=\"title-service\">Evaluate the groomers that are near your area either by price or by\n              rating.\n            </ion-card-title>\n          </ion-card-header>\n          <ion-button class=\"done-btn\" href=\"/login\" expand=\"block\">START</ion-button>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n  </ion-slide>\n</ion-content>"

/***/ }),

/***/ "./src/app/tutorial/tutorial.page.scss":
/*!*********************************************!*\
  !*** ./src/app/tutorial/tutorial.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".green-bg {\n  --background: #37B34A; }\n\n.logo {\n  position: absolute;\n  top: 30px;\n  height: 90px;\n  width: 100px; }\n\n.title-service {\n  font-size: 15px;\n  font-weight: 700;\n  margin-top: 15px;\n  color: white;\n  padding-bottom: 120px; }\n\n.circle-img {\n  width: 150px;\n  height: 150px;\n  margin-top: 200px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.tutorial-first-card {\n  box-shadow: none; }\n\n.service-info {\n  line-height: 25px;\n  font-weight: 300;\n  font-size: 16px;\n  text-align: center; }\n\nion-slides {\n  --bullet-background: rgb(255, 255, 255);\n  --bullet-background-active: rgb(255, 255, 255); }\n\n.start-btn {\n  --background: rgb(255, 255, 255);\n  --background-activated: #FFC93A;\n  --border-radius: 25px;\n  --box-shadow: none; }\n\n.skip-btn {\n  position: absolute;\n  top: 0;\n  right: 20px;\n  font-weight: 700;\n  --background: #37B34A;\n  --background-activated: #37B34A;\n  --box-shadow: none; }\n\n.done-btn {\n  --background: #414042;\n  --background-activated: #414042;\n  --border-radius: 25px;\n  font-weight: 700;\n  font-size: 13px;\n  letter-spacing: 1px;\n  height: 50px;\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 50px;\n  --box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0RvY3VtZW50cy9HaXRIdWIvZ3Jvb21lcnMtY2xpZW50L3NyYy9hcHAvdHV0b3JpYWwvdHV0b3JpYWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHZDtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFlBQXlCO0VBQ3pCLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSx1Q0FBb0I7RUFDcEIsOENBQTJCLEVBQUE7O0FBRzdCO0VBQ0UsZ0NBQWE7RUFDYiwrQkFBdUI7RUFDdkIscUJBQWdCO0VBQ2hCLGtCQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIscUJBQWE7RUFDYiwrQkFBdUI7RUFDdkIsa0JBQWEsRUFBQTs7QUFHZjtFQUNFLHFCQUFhO0VBQ2IsK0JBQXVCO0VBQ3ZCLHFCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3R1dG9yaWFsL3R1dG9yaWFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmVlbi1iZyB7XG4gIC0tYmFja2dyb3VuZDogIzM3QjM0QTtcbn1cblxuLmxvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi50aXRsZS1zZXJ2aWNlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICBwYWRkaW5nLWJvdHRvbTogMTIwcHg7XG59XG5cbi5jaXJjbGUtaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW4tdG9wOiAyMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnR1dG9yaWFsLWZpcnN0LWNhcmQge1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uc2VydmljZS1pbmZvIHtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xufVxuXG4uc3RhcnQtYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICNGRkM5M0E7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uc2tpcC1idG4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIC0tYmFja2dyb3VuZDogIzM3QjM0QTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzM3QjM0QTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4uZG9uZS1idG4ge1xuICAtLWJhY2tncm91bmQ6ICM0MTQwNDI7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICM0MTQwNDI7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tutorial/tutorial.page.ts":
/*!*******************************************!*\
  !*** ./src/app/tutorial/tutorial.page.ts ***!
  \*******************************************/
/*! exports provided: TutorialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialPage", function() { return TutorialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TutorialPage = /** @class */ (function () {
    function TutorialPage() {
    }
    TutorialPage.prototype.ngOnInit = function () {
    };
    TutorialPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutorial',
            template: __webpack_require__(/*! ./tutorial.page.html */ "./src/app/tutorial/tutorial.page.html"),
            styles: [__webpack_require__(/*! ./tutorial.page.scss */ "./src/app/tutorial/tutorial.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TutorialPage);
    return TutorialPage;
}());



/***/ })

}]);
//# sourceMappingURL=tutorial-tutorial-module.js.map