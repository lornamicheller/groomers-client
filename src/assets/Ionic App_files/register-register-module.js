(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n  <ion-card style=\"box-shadow: none;\">\n    <img class=\"logo\" src=\"assets/logogrisverde.svg\">\n    <!-- <h3 style=\"text-align: center; font-size: 30px; font-weight: 300;\">Forgot your password?</h3> -->\n    <ion-button class=\"fb-btn\" expand=\"block\">\n      <ion-icon class=\"fb-icon\" name=\"logo-facebook\"></ion-icon>Connect with Facebook\n    </ion-button>\n    <ion-button href=\"/login\" class=\"arrow-btn\">\n      <ion-icon class=\"arrow-icon\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n    </ion-button>\n\n  </ion-card>\n\n  <ion-card class=\"input-card\">\n    <ion-input type=\"text\" placeholder=\"NAME\" class=\"name\" expand=\"block\">\n      <ion-icon class=\"icon\" ios=\"ios-contact\" md=\"md-contact\"></ion-icon>\n    </ion-input>\n    <ion-input type=\"text\" placeholder=\"LAST NAME\" class=\"last-name\" expand=\"block\">\n      <ion-icon class=\"icon\" ios=\"ios-contact\" md=\"md-contact\"></ion-icon>\n    </ion-input>\n    <ion-input type=\"text\" placeholder=\"EMAIL\" class=\"email\" expand=\"block\">\n      <ion-icon class=\"icon\" ios=\"ios-mail\" md=\"md-mail\"></ion-icon>\n    </ion-input>\n    <ion-input type=\"text\" placeholder=\"PASSWORD\" class=\"password\" expand=\"block\">\n      <ion-icon class=\"icon\" ios=\"ios-lock\" md=\"md-lock\"></ion-icon>\n    </ion-input>\n    <ion-input type=\"text\" placeholder=\"ZIP CODE\" class=\"zip\" expand=\"block\">\n      <ion-icon class=\"icon\" ios=\"ios-pin\" md=\"md-pin\"></ion-icon>\n    </ion-input>\n  </ion-card>\n\n  <ion-card class=\"terms-card\">\n    <ion-grid>\n      <ion-row style=\"margin-left: 30px; margin-right: 30px;\">\n        <ion-col size=\"6\">\n          <ion-button style=\"margin-left: 20px;\" class=\"terms\" expand=\"full\">\n            Terms and Conditions\n          </ion-button>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-button class=\"terms\" expand=\"full\">\n            Privacy Policy\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-button class=\"login-btn\" expand=\"block\">REGISTER</ion-button>\n</div>"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  height: 100vh;\n  background-image: url(\"/assets/registerperro.png\");\n  background-size: cover; }\n\n.arrow-btn {\n  position: absolute;\n  top: 17px;\n  --background: transparent;\n  --background-activated: transparent;\n  color: #414042;\n  --color-activated: #414042; }\n\n.arrow-icon {\n  color: #37B34A;\n  width: 25px;\n  height: 25px; }\n\n.logo {\n  margin-left: auto;\n  margin-right: auto;\n  height: 90px;\n  width: 100px; }\n\n.input-card {\n  box-shadow: none;\n  padding-left: 25px;\n  padding-right: 25px;\n  padding-bottom: 0; }\n\n.name,\n.last-name,\n.email,\n.password,\n.zip {\n  font-weight: 700;\n  font-size: 13px;\n  color: grey;\n  border-bottom: 2px solid #37B34A;\n  margin-bottom: 10px; }\n\n.icon {\n  width: 25px;\n  height: 25px;\n  color: #37B34A;\n  margin-right: 10px; }\n\n.login-btn {\n  --background: #37B34A;\n  --background-activated: #414042;\n  --border-radius: 25px;\n  height: 50px;\n  margin-top: 30px;\n  --box-shadow: none;\n  margin-right: 25px;\n  margin-left: 25px; }\n\n.terms {\n  --background: transparent;\n  --background-activated: transparent;\n  color: grey;\n  --color-activated: grey;\n  display: inline-block;\n  text-align: center;\n  font-size: 13px; }\n\n.fb-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  color: #7a7a7a;\n  --color-activated: rgb(122, 122, 122);\n  font-weight: 300;\n  --box-shadow: none; }\n\n.fb-icon {\n  margin: 0;\n  padding: 0;\n  color: #4e76ce;\n  margin-right: 5px;\n  width: 30px;\n  height: 30px; }\n\n.terms-card {\n  box-shadow: none;\n  margin: 0;\n  position: absolute;\n  top: 413px;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0RvY3VtZW50cy9HaXRIdWIvZ3Jvb21lcnMtY2xpZW50L3NyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGtEQUFrRDtFQUNsRCxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLGNBQWM7RUFDZCwwQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUduQjs7Ozs7RUFLRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsbUJBQ0YsRUFBQTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHFCQUFhO0VBQ2IsK0JBQXVCO0VBQ3ZCLHFCQUFnQjtFQUNoQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLFdBQVc7RUFDWCx1QkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsY0FBeUI7RUFDekIscUNBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBYSxFQUFBOztBQUdmO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsT0FBTztFQUNQLFFBQVE7RUFDUixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmcge1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvcmVnaXN0ZXJwZXJyby5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmFycm93LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxN3B4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM0MTQwNDI7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjNDE0MDQyO1xufVxuXG4uYXJyb3ctaWNvbiB7XG4gIGNvbG9yOiAjMzdCMzRBO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uaW5wdXQtY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5uYW1lLCBcbi5sYXN0LW5hbWUsXG4uZW1haWwsXG4ucGFzc3dvcmQsXG4uemlwIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogZ3JleTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMzN0IzNEE7XG4gIG1hcmdpbi1ib3R0b206IDEwcHhcbn1cblxuLmljb24ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBjb2xvcjogIzM3QjM0QTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubG9naW4tYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzdCMzRBO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNDE0MDQyO1xuICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xufVxuXG4udGVybXMge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGdyZXk7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiBncmV5O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4uZmItYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiByZ2IoMTIyLCAxMjIsIDEyMik7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiByZ2IoMTIyLCAxMjIsIDEyMik7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmZiLWljb24ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjNGU3NmNlO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbn1cblxuLnRlcm1zLWNhcmQge1xuICBib3gtc2hhZG93OiBub25lOyBcbiAgbWFyZ2luOiAwOyBcbiAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgdG9wOiA0MTNweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterPage = /** @class */ (function () {
    function RegisterPage() {
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map