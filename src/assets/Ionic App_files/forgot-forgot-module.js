(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-forgot-module"],{

/***/ "./src/app/forgot/forgot.module.ts":
/*!*****************************************!*\
  !*** ./src/app/forgot/forgot.module.ts ***!
  \*****************************************/
/*! exports provided: ForgotPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forgot_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot.page */ "./src/app/forgot/forgot.page.ts");







var routes = [
    {
        path: '',
        component: _forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]
    }
];
var ForgotPageModule = /** @class */ (function () {
    function ForgotPageModule() {
    }
    ForgotPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPage"]]
        })
    ], ForgotPageModule);
    return ForgotPageModule;
}());



/***/ }),

/***/ "./src/app/forgot/forgot.page.html":
/*!*****************************************!*\
  !*** ./src/app/forgot/forgot.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\n  <ion-card style=\"box-shadow: none;\">\n    <img class=\"logo\" src=\"assets/logogrisverde.svg\">\n    <h3 style=\"text-align: center; font-size: 30px; font-weight: 300;\">Forgot your password?</h3>\n    <ion-button href=\"/login\" class=\"arrow-btn\">\n      <ion-icon class=\"arrow-icon\" ios=\"ios-arrow-back\" md=\"md-arrow-back\"></ion-icon>\n    </ion-button>\n\n    <p style=\"text-align: center; margin-top: 50px; margin-left: 35px; margin-right: 35px; font-weight: 300;\">Enter your\n      email and don't worry. We'll help you recover your password.</p>\n  </ion-card>\n\n  <ion-card class=\"input-card\">\n    <ion-input type=\"email\" placeholder=\"EMAIL\" class=\"email\" expand=\"block\">\n      <ion-icon class=\"icon\" ios=\"ios-mail\" md=\"md-mail\"></ion-icon>\n    </ion-input>\n    <ion-button class=\"login-btn\" expand=\"block\">LOGIN</ion-button>\n  </ion-card>\n</div>"

/***/ }),

/***/ "./src/app/forgot/forgot.page.scss":
/*!*****************************************!*\
  !*** ./src/app/forgot/forgot.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg {\n  height: 100vh;\n  background-image: url(\"/assets/forgotpassword.jpg\");\n  background-size: cover; }\n\n.arrow-btn {\n  position: absolute;\n  top: 17px;\n  --background: transparent;\n  --background-activated: transparent;\n  color: #414042;\n  --color-activated: #414042; }\n\n.arrow-icon {\n  color: #37B34A;\n  width: 25px;\n  height: 25px; }\n\n.logo {\n  margin-left: auto;\n  margin-right: auto;\n  height: 90px;\n  width: 100px; }\n\n.email {\n  font-weight: 700;\n  font-size: 13px;\n  color: grey;\n  border-bottom: 2px solid #37B34A;\n  margin-bottom: 10px;\n  padding-left: 25px;\n  padding-right: 25px; }\n\n.icon {\n  width: 25px;\n  height: 25px;\n  color: #37B34A;\n  margin-right: 10px; }\n\n.input-card {\n  padding-top: 10px;\n  box-shadow: none;\n  padding-left: 25px;\n  padding-right: 25px; }\n\n.login-btn {\n  --background: #37B34A;\n  --background-activated: #414042;\n  --border-radius: 25px;\n  height: 50px;\n  margin-top: 30px;\n  --box-shadow: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sb3JuYW1pY2hlbGxlL0RvY3VtZW50cy9HaXRIdWIvZ3Jvb21lcnMtY2xpZW50L3NyYy9hcHAvZm9yZ290L2ZvcmdvdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbURBQW1EO0VBQ25ELHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QseUJBQWE7RUFDYixtQ0FBdUI7RUFDdkIsY0FBYztFQUNkLDBCQUFrQixFQUFBOztBQUdwQjtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdkO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixXQUFXO0VBQ1gsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UscUJBQWE7RUFDYiwrQkFBdUI7RUFDdkIscUJBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC9mb3Jnb3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ZvcmdvdHBhc3N3b3JkLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYXJyb3ctYnRuIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE3cHg7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzQxNDA0MjtcbiAgLS1jb2xvci1hY3RpdmF0ZWQ6ICM0MTQwNDI7XG59XG5cbi5hcnJvdy1pY29uIHtcbiAgY29sb3I6ICMzN0IzNEE7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgaGVpZ2h0OiA5MHB4O1xuICB3aWR0aDogMTAwcHg7XG59XG5cbi5lbWFpbCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IGdyZXk7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzdCMzRBO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgY29sb3I6ICMzN0IzNEE7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmlucHV0LWNhcmQge1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuXG4ubG9naW4tYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzdCMzRBO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjNDE0MDQyO1xuICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/forgot/forgot.page.ts":
/*!***************************************!*\
  !*** ./src/app/forgot/forgot.page.ts ***!
  \***************************************/
/*! exports provided: ForgotPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPage", function() { return ForgotPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForgotPage = /** @class */ (function () {
    function ForgotPage() {
    }
    ForgotPage.prototype.ngOnInit = function () {
    };
    ForgotPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.page.html */ "./src/app/forgot/forgot.page.html"),
            styles: [__webpack_require__(/*! ./forgot.page.scss */ "./src/app/forgot/forgot.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ForgotPage);
    return ForgotPage;
}());



/***/ })

}]);
//# sourceMappingURL=forgot-forgot-module.js.map