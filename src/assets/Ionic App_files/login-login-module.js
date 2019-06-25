(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n  <ion-card style=\"box-shadow: none;\">\n    <img class=\"logo\" src=\"assets/logogrisverde.svg\">\n    <h3 style=\"text-align: center; font-size: 30px; font-weight: 300;\">Welcome Again</h3>\n    <!-- <ion-button href=\"/welcome\" class=\"arrow-btn\">\n      <ion-icon class=\"arrow-icon\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n    </ion-button> -->\n  </ion-card>\n\n  <ion-card class=\"input-card\">\n    <ion-input type=\"email\" placeholder=\"EMAIL\" class=\"email\" expand=\"block\">\n      <ion-icon class=\"icon\" ios=\"ios-mail\" md=\"md-mail\"></ion-icon>\n    </ion-input>\n    <ion-input type=\"email\" placeholder=\"PASSWORD\" class=\"password\" expand=\"block\">\n      <ion-icon class=\"icon\" ios=\"ios-lock\" md=\"md-lock\"></ion-icon>\n    </ion-input>\n    <ion-button class=\"login-btn\" href=\"/tabs/tabs/tab1\" expand=\"block\">LOGIN</ion-button>\n    <ion-button class=\"register-btn\" href=\"/register\" expand=\"block\">REGISTER</ion-button>\n\n    <ion-button class=\"forgot\" href=\"/forgot\" expand=\"block\">Forgot password?</ion-button>\n    <ion-button class=\"fb-btn\" expand=\"block\">\n      <ion-icon class=\"fb-icon\" name=\"logo-facebook\"></ion-icon>Connect with Facebook\n    </ion-button>\n  </ion-card>\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  height: 100vh;\n  background-image: url(\"/assets/loginscreen.png\");\n  background-size: cover; }\n\n.arrow-btn {\n  position: absolute;\n  top: 17px;\n  --background: transparent;\n  --background-activated: transparent;\n  color: #414042;\n  --color-activated: #414042; }\n\n.arrow-icon {\n  color: #37B34A;\n  width: 25px;\n  height: 25px; }\n\n.logo {\n  margin-left: auto;\n  margin-right: auto;\n  height: 90px;\n  width: 100px; }\n\n.email,\n.password {\n  font-weight: 700;\n  font-size: 13px;\n  color: grey;\n  border-bottom: 2px solid #37B34A;\n  margin-bottom: 10px; }\n\n.icon {\n  width: 25px;\n  height: 25px;\n  color: #37B34A;\n  margin-right: 10px; }\n\n.input-card {\n  box-shadow: none;\n  padding-left: 25px;\n  padding-right: 25px; }\n\n.login-btn {\n  --background: #37B34A;\n  --background-activated: #414042;\n  --border-radius: 25px;\n  height: 40px;\n  margin-top: 20px;\n  --box-shadow: none;\n  font-size: 13px; }\n\n.register-btn {\n  --background: #414042;\n  --background-activated: #37B34A;\n  --border-radius: 25px;\n  height: 40px;\n  margin-top: 10px;\n  --box-shadow: none;\n  font-size: 13px; }\n\n.forgot {\n  --background: rgba(255, 255, 255, 0);\n  --background-activated: rgba(97, 77, 77, 0);\n  color: #7a7a7a;\n  --color-activated: rgb(122, 122, 122);\n  font-size: 13px;\n  font-weight: 700;\n  padding: 0; }\n\n.fb-btn {\n  --background: transparent;\n  --background-activated: transparent;\n  color: #7a7a7a;\n  --color-activated: rgb(122, 122, 122);\n  font-weight: 300;\n  --box-shadow: none;\n  font-size: 12px; }\n\n.fb-icon {\n  margin: 0;\n  padding: 0;\n  color: #4e76ce;\n  margin-right: 5px;\n  width: 25px;\n  height: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0RvY3VtZW50cy9HaXRIdWIvZ3Jvb21lcnMtY2xpZW50L3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGdEQUFnRDtFQUNoRCxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULHlCQUFhO0VBQ2IsbUNBQXVCO0VBQ3ZCLGNBQWM7RUFDZCwwQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHZDtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVksRUFBQTs7QUFHZDs7RUFFRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQ0FBZ0M7RUFDaEMsbUJBQ0YsRUFBQTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UscUJBQWE7RUFDYiwrQkFBdUI7RUFDdkIscUJBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWE7RUFDYixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UscUJBQWE7RUFDYiwrQkFBdUI7RUFDdkIscUJBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWE7RUFDYixlQUFlLEVBQUE7O0FBR2pCO0VBQ0Usb0NBQWE7RUFDYiwyQ0FBdUI7RUFDdkIsY0FBeUI7RUFDekIscUNBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFFaEIsVUFBVSxFQUFBOztBQUdaO0VBQ0UseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsY0FBeUI7RUFDekIscUNBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBYTtFQUNiLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9sb2dpbnNjcmVlbi5wbmcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmFycm93LWJ0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxN3B4O1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM0MTQwNDI7XG4gIC0tY29sb3ItYWN0aXZhdGVkOiAjNDE0MDQyO1xufVxuXG4uYXJyb3ctaWNvbiB7XG4gIGNvbG9yOiAjMzdCMzRBO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4ubG9nbyB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uZW1haWwsXG4ucGFzc3dvcmQge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBncmV5O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM3QjM0QTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweFxufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGNvbG9yOiAjMzdCMzRBO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5pbnB1dC1jYXJkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuXG4ubG9naW4tYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzdCMzRBO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNDE0MDQyO1xuICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5yZWdpc3Rlci1idG4ge1xuICAtLWJhY2tncm91bmQ6ICM0MTQwNDI7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6ICMzN0IzNEE7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmZvcmdvdCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSg5NywgNzcsIDc3LCAwKTtcbiAgY29sb3I6IHJnYigxMjIsIDEyMiwgMTIyKTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHJnYigxMjIsIDEyMiwgMTIyKTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNzAwO1xuICAvLyBtYXJnaW4tdG9wOiA1cHg7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5mYi1idG4ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHJnYigxMjIsIDEyMiwgMTIyKTtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6IHJnYigxMjIsIDEyMiwgMTIyKTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5mYi1pY29uIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjb2xvcjogIzRlNzZjZTtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginPage = /** @class */ (function () {
    function LoginPage() {
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map