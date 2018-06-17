(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Sticky footer styles\r\n-------------------------------------------------- */\r\n\r\n\r\n.footer {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  /* Set the fixed height of the footer here */\r\n  height: 60px;\r\n  line-height: 60px; /* Vertically center the text there */\r\n  background-color: #f5f5f5;\r\n}\r\n\r\n\r\n/* Custom page CSS\r\n-------------------------------------------------- */\r\n\r\n\r\n/* Not required for template or sticky footer method. */\r\n\r\n\r\n/*body > .container {*/\r\n\r\n\r\n/*padding: 60px 15px 0;*/\r\n\r\n\r\n/*}*/\r\n\r\n\r\n.footer > .container {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n}\r\n\r\n\r\ncode {\r\n  font-size: 80%;\r\n}\r\n\r\n\r\n.title{\r\n  font-family: \"Fira Code Retina\";\r\n}\r\n\r\n\r\n.nav-link{\r\n  font-family: \"Arial\";\r\n  font-size: large;\r\n\r\n}\r\n\r\n\r\n.cont {\r\n  padding: 160px 15px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n<div class=\"cont\">\r\n<router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/job-list/job-list.component */ "./src/app/components/job-list/job-list.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_recruiter_profile_recruiter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile-recruiter/profile-recruiter.component */ "./src/app/components/profile-recruiter/profile-recruiter.component.ts");
/* harmony import */ var _components_profile_seeker_profile_seeker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile-seeker/profile-seeker.component */ "./src/app/components/profile-seeker/profile-seeker.component.ts");
/* harmony import */ var _components_register_seeker_register_seeker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/register-seeker/register-seeker.component */ "./src/app/components/register-seeker/register-seeker.component.ts");
/* harmony import */ var _components_register_recruiter_register_recruiter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register-recruiter/register-recruiter.component */ "./src/app/components/register-recruiter/register-recruiter.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_job_board_job_board_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/job-board/job-board.component */ "./src/app/components/job-board/job-board.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _services_job_list_service_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/job-list.service.client */ "./src/app/services/job-list.service.client.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_view_job_view_job_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/view-job/view-job.component */ "./src/app/components/view-job/view-job.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_4__["JobListComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_profile_recruiter_profile_recruiter_component__WEBPACK_IMPORTED_MODULE_6__["ProfileRecruiterComponent"],
                _components_profile_seeker_profile_seeker_component__WEBPACK_IMPORTED_MODULE_7__["ProfileSeekerComponent"],
                _components_register_seeker_register_seeker_component__WEBPACK_IMPORTED_MODULE_8__["RegisterSeekerComponent"],
                _components_register_recruiter_register_recruiter_component__WEBPACK_IMPORTED_MODULE_9__["RegisterRecruiterComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_10__["NavBarComponent"],
                _components_job_board_job_board_component__WEBPACK_IMPORTED_MODULE_11__["JobBoardComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _components_job_board_job_board_component__WEBPACK_IMPORTED_MODULE_11__["SearchFilterPipe"],
                _components_view_job_view_job_component__WEBPACK_IMPORTED_MODULE_15__["ViewJobComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_2__["routing"]
            ],
            providers: [
                _services_job_list_service_client__WEBPACK_IMPORTED_MODULE_13__["JobListServiceClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_job_board_job_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/job-board/job-board.component */ "./src/app/components/job-board/job-board.component.ts");
/* harmony import */ var _components_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/job-list/job-list.component */ "./src/app/components/job-list/job-list.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_recruiter_profile_recruiter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile-recruiter/profile-recruiter.component */ "./src/app/components/profile-recruiter/profile-recruiter.component.ts");
/* harmony import */ var _components_profile_seeker_profile_seeker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile-seeker/profile-seeker.component */ "./src/app/components/profile-seeker/profile-seeker.component.ts");
/* harmony import */ var _components_register_seeker_register_seeker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register-seeker/register-seeker.component */ "./src/app/components/register-seeker/register-seeker.component.ts");
/* harmony import */ var _components_register_recruiter_register_recruiter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register-recruiter/register-recruiter.component */ "./src/app/components/register-recruiter/register-recruiter.component.ts");
/* harmony import */ var _components_view_job_view_job_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/view-job/view-job.component */ "./src/app/components/view-job/view-job.component.ts");









var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_job_board_job_board_component__WEBPACK_IMPORTED_MODULE_1__["JobBoardComponent"] },
    // {path: 'job-list', component: JobListComponent},
    { path: 'job-list/:location/:keyword', component: _components_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_2__["JobListComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'profile-recruiter', component: _components_profile_recruiter_profile_recruiter_component__WEBPACK_IMPORTED_MODULE_4__["ProfileRecruiterComponent"] },
    { path: 'register-recruiter', component: _components_register_recruiter_register_recruiter_component__WEBPACK_IMPORTED_MODULE_7__["RegisterRecruiterComponent"] },
    { path: 'profile-seeker', component: _components_profile_seeker_profile_seeker_component__WEBPACK_IMPORTED_MODULE_5__["ProfileSeekerComponent"] },
    { path: 'register-seeker', component: _components_register_seeker_register_seeker_component__WEBPACK_IMPORTED_MODULE_6__["RegisterSeekerComponent"] },
    { path: 'job-list/:location/:keyword/view-job/:jobId', component: _components_view_job_view_job_component__WEBPACK_IMPORTED_MODULE_8__["ViewJobComponent"] },
    { path: '**', component: _components_job_board_job_board_component__WEBPACK_IMPORTED_MODULE_1__["JobBoardComponent"] } // last
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.footer {\r\n  position: absolute;\r\n  /*bottom: 0;*/\r\n  width: 100%;\r\n  /* Set the fixed height of the footer here */\r\n  height: 100px;\r\n  line-height: 60px; /* Vertically center the text there */\r\n  background-color: #f5f5f5;\r\n  /*background-image: linear-gradient(white,black);*/\r\n  background-image: url('naphtali-marshall-45606-unsplash.jpg');\r\n  margin-top: 10px;\r\n}\r\n\r\n.footer > .container {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  text-align: center;\r\n  -webkit-text-decoration: whitesmoke;\r\n          text-decoration: whitesmoke;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer bg-dark\">\r\n  <div class=\"container text-light \">\r\n    Made with <i class=\"fa fa-heart\" aria-hidden=\"true\" style=\"color: red;\"></i>\r\n    by <a href=\"https://karantyagi.github.io/\">Karan</a> &\r\n    <a href=\"https://www.linkedin.com/in/shubham-rastogi70/\">Shubham</a> @\r\n    <a href=\"https://www.ccis.northeastern.edu\" target=\"_blank\">Northeastern</a>, Summer 2018.\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/job-board/job-board.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/job-board/job-board.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero{\r\n  background-image: url('mark-cruz-230099-unsplash.jpg');\r\n  background-size: contain;\r\n}\r\n\r\n.dropdown-menu{\r\n  position: absolute;\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n  background: lightgrey;\r\n}\r\n\r\n/*.dropdown-toggle{*/\r\n\r\n/*border-radius: 5px;*/\r\n\r\n/*}*/\r\n"

/***/ }),

/***/ "./src/app/components/job-board/job-board.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/job-board/job-board.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-dark text-light hero\">\r\n    <div class=\"col-md-5 p-lg-5 mx-auto my-5\">\r\n      <h1 class=\"display-4 font-weight-normal\">FIND JOBS</h1>\r\n      <p class=\"lead font-weight-normal\">Join us to find the best job for you</p>\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div class=\"input-group mb-3\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\" id=\"\"><i class=\"fa fa-search\"></i></span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Keyword or Title\" aria-label=\"Keyword or Title\"\r\n                   aria-describedby=\"basic-addon1\" [(ngModel)]=\"keywordOrTitle\" name=\"keywordOrTitle\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n\r\n          <div class=\"input-group mb-3\">\r\n            <div class=\"input-group-prepend\">\r\n              <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-map-marker\"></i></span>\r\n            </div>\r\n            <input type=\"text\" autocomplete=\"off\" class=\"form-control dropdown-toggle\" id=\"dropdownMenuLink\"\r\n                   placeholder=\"Location\" aria-label=\"Location\"\r\n                   aria-describedby=\"basic-addon1\" [(ngModel)]=\"location\"\r\n                   name=\"location\" data-toggle=\"dropdown\">\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" >\r\n              <div *ngFor = \"let state of states | searchFilter: getInputVal()\" (click)=\"setVal(state)\"\r\n                   class=\"dropdown-item\" >{{state}}</div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <!--<div class=\"col-1\">-->\r\n        <!--<button class=\"btn btn-light\">Search</button>-->\r\n        <!--</div>-->\r\n      </div>\r\n      <button class=\"btn btn-light w-25\"\r\n              routerLink=\"/job-list/{{location!='' && location!=null ? location:' '}}/{{keywordOrTitle!='' &&\r\n              keywordOrTitle!=null? keywordOrTitle: ' '}}\">Search</button>\r\n    </div>\r\n    <div class=\"product-device box-shadow d-none d-md-block\"></div>\r\n    <div class=\"product-device product-device-2 box-shadow d-none d-md-block\"></div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <!--<div class=\"card\">-->\r\n  <!--<div class=\"card-header\">-->\r\n  <!--&lt;!&ndash;<h3> Job-board Home page </h3>&ndash;&gt;-->\r\n  <!--Job Board Home page-->\r\n  <!--</div>-->\r\n  <!--<div class=\"card-body\">-->\r\n  <!--<h5 class=\"card-title\">Jobs-in-sync</h5>-->\r\n  <!--<p class=\"card-text\">-->\r\n  <!--This is the home page.-->\r\n  <!--<br>-->\r\n  <!--Add Home Page Content here.</p>-->\r\n  <!--<a href=\"#\" class=\"btn btn-primary\">Explore awesome Jobs</a>-->\r\n  <!--&nbsp;&nbsp;-->\r\n  <!--<a href=\"#\" class=\"btn btn-success\">Discover amazing candidates</a>-->\r\n  <!--</div>-->\r\n  <!--</div>-->\r\n  <!--<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">-->\r\n  <!--<ol class=\"carousel-indicators\">-->\r\n  <!--<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>-->\r\n  <!--<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>-->\r\n  <!--<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>-->\r\n  <!--<li data-target=\"#carouselExampleIndicators\" data-slide-to=\"3\"></li>-->\r\n  <!--</ol>-->\r\n  <!--<div class=\"carousel-inner rounded shadow-lg\">-->\r\n  <!--<div class=\"carousel-item active\">-->\r\n  <!--<img class=\"d-block w-100 rounded\" src=\"../assets/demos/images/screen1.jpg\" alt=\"First slide\">-->\r\n  <!--</div>-->\r\n  <!--<div class=\"carousel-item\">-->\r\n  <!--<img class=\"d-block w-100 rounded\" src=\"../assets/demos/images/screen2.jpg\" alt=\"Second slide\">-->\r\n  <!--</div>-->\r\n  <!--<div class=\"carousel-item\">-->\r\n  <!--<img class=\"d-block w-100 rounded\" src=\"../assets/demos/images/screen3.jpg\" alt=\"Third slide\">-->\r\n  <!--</div>-->\r\n  <!--<div class=\"carousel-item\">-->\r\n  <!--<img class=\"d-block w-100 rounded\" src=\"../assets/demos/images/screen4.jpg\" alt=\"Fourth slide\">-->\r\n  <!--</div>-->\r\n  <!--</div>-->\r\n  <!--<a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">-->\r\n  <!--<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>-->\r\n  <!--<span class=\"sr-only\">Previous</span>-->\r\n  <!--</a>-->\r\n  <!--<a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">-->\r\n  <!--<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>-->\r\n  <!--<span class=\"sr-only\">Next</span>-->\r\n  <!--</a>-->\r\n  <!--</div>-->\r\n</div>\r\n<!--HOME PAGE-->\r\n\r\n<!--Home Page Content-->\r\n\r\n<!--<div style=\"text-align:center\">-->\r\n<!--<h1 class=\"text-center\">-->\r\n<!--Welcome to \"Jobs-in-sync\" !-->\r\n<!--</h1>-->\r\n<!--<h3 class=\"text-center\">-->\r\n<!--Experience the synergy between recruiting and job hunting. <br>-->\r\n<!--This is the sweet spot where everyone finds what they are looking for.-->\r\n<!--\"Recruiters, discover the ideal candidates!\"-->\r\n<!--\"Job Seekers, go grab your dream jobs!\"-->\r\n<!--</h3>-->\r\n<!--<hr/>-->\r\n<!--<h3 class=\"text-center\">-->\r\n<!--We at Jobs-in-sync, believe .... (OUR Ethos, motto, vision)-->\r\n<!--</h3>-->\r\n\r\n<!--<h5>-->\r\n<!--Just remember, have fun along the way.-->\r\n<!--<br>-->\r\n<!--+ some more stuff like this.-->\r\n<!--</h5>-->\r\n\r\n<!--<img width=\"300\" alt=\"Search animation\" src=\"https://cdn.dribbble.com/users/604032/screenshots/2675111/1.gif\"-->\r\n<!--class=\"rounded shadow\">-->\r\n<!--</div>-->\r\n<!--<h2>Here are some links to help you start: </h2>-->\r\n<!--<ul>-->\r\n<!--<li>-->\r\n<!--<h2><a target=\"_blank\" rel=\"noopener\" href=\"#\">Discover awesome applicants</a></h2>-->\r\n<!--</li>-->\r\n<!--<li>-->\r\n<!--<h2><a target=\"_blank\" rel=\"noopener\" href=\"#\">Explore Jobs</a></h2>-->\r\n<!--</li>-->\r\n<!--</ul>-->\r\n\r\n<!--<h3>-->\r\n<!--Demos-->\r\n<!--</h3>-->\r\n<!--<hr/>-->\r\n<!--<p>-->\r\n<!--Bootstrap gif carousal describing how to use job search over job listings from various sources-->\r\n<!--</p>-->\r\n\r\n"

/***/ }),

/***/ "./src/app/components/job-board/job-board.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/job-board/job-board.component.ts ***!
  \*************************************************************/
/*! exports provided: JobBoardComponent, SearchFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobBoardComponent", function() { return JobBoardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchFilterPipe", function() { return SearchFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import * as $ from 'jquery';
// import {} from '@types/googlemaps';


var JobBoardComponent = /** @class */ (function () {
    function JobBoardComponent(router) {
        this.router = router;
        this.states = ['Alaska',
            'Alabama',
            'Arkansas',
            'American Samoa',
            'Arizona',
            'California',
            'Colorado',
            'Connecticut',
            'District of Columbia',
            'Delaware',
            'Florida',
            'Georgia',
            'Guam',
            'Hawaii',
            'Iowa',
            'Idaho',
            'Illinois',
            'Indiana',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Massachusetts',
            'Maryland',
            'Maine',
            'Michigan',
            'Minnesota',
            'Missouri',
            'Mississippi',
            'Montana',
            'North Carolina',
            'North Dakota',
            'Nebraska',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'Nevada',
            'New York',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Puerto Rico',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Virginia',
            'Virgin Islands',
            'Vermont',
            'Washington',
            'Wisconsin',
            'West Virginia',
            'Wyoming'];
    }
    // searchBasedOn() {
    //
    //   this.router.navigate(['job-list/+'location'+]);
    //
    // }
    JobBoardComponent.prototype.setVal = function (val) {
        this.location = val;
    };
    JobBoardComponent.prototype.getInputVal = function () {
        return this.location;
    };
    JobBoardComponent.prototype.ngOnInit = function () {
    };
    JobBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-board',
            template: __webpack_require__(/*! ./job-board.component.html */ "./src/app/components/job-board/job-board.component.html"),
            styles: [__webpack_require__(/*! ./job-board.component.css */ "./src/app/components/job-board/job-board.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], JobBoardComponent);
    return JobBoardComponent;
}());

var SearchFilterPipe = /** @class */ (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (value, search) {
        if (!search) {
            return value;
        }
        var solution = value.filter(function (v) {
            if (!v) {
                return;
            }
            return v.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });
        return solution;
    };
    SearchFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'searchFilter' })
    ], SearchFilterPipe);
    return SearchFilterPipe;
}());



/***/ }),

/***/ "./src/app/components/job-list/job-list.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/job-list/job-list.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active.joblist {\r\n  background-color: rgba(0, 170, 255, 0.65);\r\n  border-top-color: whitesmoke;\r\n  border-bottom-color: rgba(0, 170, 255, 0);\r\n  border-right-color: rgba(0, 170, 255, 0.02);\r\n  border-left-color: rgba(0, 170, 255, 0.02);\r\n  /*border-color: rgba(0, 170, 255, 0.65);*/\r\n}\r\n\r\n.active.joblist a {\r\n  color: white;\r\n}\r\n\r\n.background-pic{\r\n  background-image: url('paul-hanaoka-299941-unsplash.jpg');\r\n  background-size: contain;\r\n}\r\n\r\n.heading{\r\n\r\n  font-family: \"Bookman Old Style\";\r\n  background-color: rgba(15, 15, 15 ,0.6);\r\n\r\n}\r\n\r\n.dropdown-menu{\r\n  position: absolute;\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/job-list/job-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/job-list/job-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rounded bg-light p-5 background-pic\">\r\n  <h1 class=\" text-center text-light rounded shadow p-2 mb-4 heading\">Job Listings\r\n  </h1>\r\n  <div class=\"row mb-5\">\r\n    <div class=\"col-3\">\r\n      <div class=\"input-group\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\" id=\"\"><i class=\"fa fa-search\"></i></span>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Keyword or Title\" aria-label=\"Keyword or Title\"\r\n               aria-describedby=\"basic-addon1\" [(ngModel)]=\"keywordOrTitle\" name=\"keywordOrTitle\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <div class=\"input-group\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-map-marker\"></i></span>\r\n        </div>\r\n        <input type=\"text\" autocomplete=\"off\" class=\"form-control dropdown-toggle\" id=\"dropdownMenuLink\"\r\n               placeholder=\"Location\" aria-label=\"Location\"\r\n               aria-describedby=\"basic-addon1\"\r\n               [(ngModel)]=\"location\"\r\n               name=\"location\" data-toggle=\"dropdown\">\r\n        <div class=\"dropdown-menu dropdown-menu-input float-right\">\r\n          <h6 class=\"dropdown-header\">Select location</h6>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <div class=\"dropdown-item\" *ngFor=\"let state of states | searchFilter: location\"\r\n               (click)=\"setVal(state)\">{{state}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n      <div class=\"col-2 m-0\">\r\n      <div class=\"btn-group\">\r\n        <button type=\"button\" class=\"btn btn-light border-secondary dropdown-toggle\" data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <span style=\"color:gray;\">Type:</span>\r\n        </button>\r\n\r\n        <div class=\"dropdown-menu\">\r\n          <h6 class=\"dropdown-header\">Select Job Type</h6>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <div class=\"dropdown-item\" *ngFor=\"let jobType of typeList\"\r\n               (click)=\"setJobType(jobType)\">{{jobType}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-2 m-0\">\r\n      <div class=\"btn-group\">\r\n        <button type=\"button\" class=\"btn btn-light border-secondary dropdown-toggle\" data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <span style=\"color:gray;\">Company:</span>\r\n        </button>\r\n\r\n        <div class=\"dropdown-menu\">\r\n          <h6 class=\"dropdown-header\">Select company</h6>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <div class=\"dropdown-item\" *ngFor=\"let c of companyList\"\r\n               (click)=\"setCompany(c)\">{{c}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-2 m-0\">\r\n      <button class=\"btn btn-light font-weight-bold\" (click)=\"searchJob();\" >\r\n        Search\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row mb-5\">\r\n\r\n  </div>\r\n\r\n  <ul class=\"list-group\">\r\n    <li *ngFor=\"let job of jobs\"\r\n        class=\"list-group-item bg-light my-2 rounded shadow-sm\">\r\n      <div class=\"row text-dark\">\r\n        <div class=\"col-8\">\r\n          <h5 style=\"color: rgba(0,123,255,0.85);\">\r\n            <a routerLink=\"view-job/{{job.id}}\">{{job.title}}</a></h5>\r\n        </div>\r\n        <div class=\"col-4\" style=\"text-align: right\">\r\n          {{job.location}}\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-8\">{{job.company}} | {{job.type}}</div>\r\n        <div class=\"col-4\" style=\"text-align: right\">\r\n          <small>Posted on: {{job.created_at}}</small>\r\n        </div>\r\n      </div>\r\n\r\n    </li>\r\n  </ul>\r\n  <nav class=\"mt-2\">\r\n    <ul class=\"pagination justify-content-center\">\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\r\n          <span aria-hidden=\"true\">&laquo;</span>\r\n          <span class=\"sr-only\">Previous</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\r\n          <span aria-hidden=\"true\">&raquo;</span>\r\n          <span class=\"sr-only\">Next</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/job-list/job-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/job-list/job-list.component.ts ***!
  \***********************************************************/
/*! exports provided: JobListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobListComponent", function() { return JobListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_job_list_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/job-list.service.client */ "./src/app/services/job-list.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var JobListComponent = /** @class */ (function () {
    function JobListComponent(service, route) {
        this.service = service;
        this.route = route;
        this.jobs = [];
        this.filterCriteria = {};
        this.states = ['Alaska',
            'Alabama',
            'Arkansas',
            'American Samoa',
            'Arizona',
            'California',
            'Colorado',
            'Connecticut',
            'District of Columbia',
            'Delaware',
            'Florida',
            'Georgia',
            'Guam',
            'Hawaii',
            'Iowa',
            'Idaho',
            'Illinois',
            'Indiana',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Massachusetts',
            'Maryland',
            'Maine',
            'Michigan',
            'Minnesota',
            'Missouri',
            'Mississippi',
            'Montana',
            'North Carolina',
            'North Dakota',
            'Nebraska',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'Nevada',
            'New York',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Puerto Rico',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Virginia',
            'Virgin Islands',
            'Vermont',
            'Washington',
            'Wisconsin',
            'West Virginia',
            'Wyoming'];
        var location = ' ';
        this.route.params.subscribe(function (param) {
            location = param['location'];
        });
        var keyword = ' ';
        this.route.params.subscribe(function (param) {
            keyword = param['keyword'];
        });
        console.log(location);
        console.log(keyword);
        if (location !== ' ' || keyword !== ' ') {
            this.fetchFilteredJobs(location, keyword);
        }
        else {
            this.fetchAllJobs();
        }
    }
    JobListComponent.prototype.setVal = function (val) {
        this.location = val;
        this.filterCriteria['location'] = val;
    };
    JobListComponent.prototype.setCompany = function (company) {
        this.company = company;
        this.filterCriteria['company'] = company;
    };
    JobListComponent.prototype.setJobType = function (type) {
        this.type = type;
        this.filterCriteria['type'] = type;
    };
    JobListComponent.prototype.searchJob = function () {
        var _this = this;
        this.service.filteredSearch(this.filterCriteria).then(function (jobs) {
            _this.jobs = jobs;
            _this.companyList = _this.jobs.map(function (item) { return item.company; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
            _this.typeList = _this.jobs.map(function (item) { return item.type; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
        });
    };
    JobListComponent.prototype.fetchAllJobs = function () {
        var _this = this;
        this.service.findAllJobs().then(function (jobs) {
            _this.jobs = jobs;
            _this.companyList = _this.jobs.map(function (item) { return item.company; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
            _this.typeList = _this.jobs.map(function (item) { return item.type; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
        });
    };
    JobListComponent.prototype.fetchFilteredJobs = function (location, keyword) {
        var _this = this;
        this.service.findFilteredJobs(location, keyword).then(function (jobs) {
            _this.jobs = jobs;
            _this.companyList = _this.jobs.map(function (item) { return item.company; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
            _this.typeList = _this.jobs.map(function (item) { return item.type; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
        });
    };
    JobListComponent.prototype.ngOnInit = function () {
    };
    JobListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-list',
            template: __webpack_require__(/*! ./job-list.component.html */ "./src/app/components/job-list/job-list.component.html"),
            styles: [__webpack_require__(/*! ./job-list.component.css */ "./src/app/components/job-list/job-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_job_list_service_client__WEBPACK_IMPORTED_MODULE_1__["JobListServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], JobListComponent);
    return JobListComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  login works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.title {\r\n  font-family: \"Fira Code Retina\";\r\n  font-size: 50px;\r\n}\r\n\r\n.nav-link {\r\n  font-family: \"Arial\";\r\n  font-size: large;\r\n\r\n}\r\n\r\n.navbar {\r\n\r\n  height: 140px;\r\n  background-color: #cccccc;\r\n  /*background-image: linear-gradient(black,whitesmoke);*/\r\n  background-image: url('naphtali-marshall-45606-unsplash.jpg');\r\n  /*background-size: contain;*/\r\n\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md  fixed-top navbar-dark bg-dark\">\r\n\r\n  <a class=\"navbar-brand \" href=\"#\"><i class=\"fa fa-bullhorn fa-4x\"></i></a>\r\n  <a class=\"navbar-brand \" href=\"#\"><h1 class=\"title\">Job Portal</h1></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\r\n          aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"btn btn-outline-light font-weight-light ml-5\" [routerLinkActive]=\"['active']\" routerLink=\"/home\">Home</a>\r\n        <!--<span class=\"sr-only\">(current)</span>-->\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"btn btn-outline-light font-weight-light ml-3\" [routerLinkActive]=\"['active']\" routerLink=\"/job-list/{{' '}}/{{' '}}\">Jobs</a>\r\n      </li>\r\n    </ul>\r\n    <form class=\"form-inline mt-2 mt-md-0\">\r\n      <!--<input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">-->\r\n      <button class=\"btn btn-outline-light font-weight-light my-2 my-sm-0 mr-4\" routerLink=\"/login\" [routerLinkActive]=\"['active']\"\r\n              type=\"button\">Login\r\n      </button>\r\n      <button class=\"btn btn-outline-light font-weight-light my-2 my-sm-0 mr-2\" [routerLinkActive]=\"['active']\" routerLink=\"/register-seeker\"\r\n              type=\"button\">Sign Up\r\n      </button>\r\n    </form>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/components/nav-bar/nav-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/nav-bar/nav-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavBarComponent = /** @class */ (function () {
    function NavBarComponent() {
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile-recruiter/profile-recruiter.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/profile-recruiter/profile-recruiter.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile-recruiter/profile-recruiter.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/profile-recruiter/profile-recruiter.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/components/profile-recruiter/profile-recruiter.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/profile-recruiter/profile-recruiter.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProfileRecruiterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRecruiterComponent", function() { return ProfileRecruiterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileRecruiterComponent = /** @class */ (function () {
    function ProfileRecruiterComponent() {
    }
    ProfileRecruiterComponent.prototype.ngOnInit = function () {
    };
    ProfileRecruiterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-recruiter',
            template: __webpack_require__(/*! ./profile-recruiter.component.html */ "./src/app/components/profile-recruiter/profile-recruiter.component.html"),
            styles: [__webpack_require__(/*! ./profile-recruiter.component.css */ "./src/app/components/profile-recruiter/profile-recruiter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileRecruiterComponent);
    return ProfileRecruiterComponent;
}());



/***/ }),

/***/ "./src/app/components/profile-seeker/profile-seeker.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/profile-seeker/profile-seeker.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile-seeker/profile-seeker.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/profile-seeker/profile-seeker.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  profile-seeker works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/profile-seeker/profile-seeker.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/profile-seeker/profile-seeker.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProfileSeekerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileSeekerComponent", function() { return ProfileSeekerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileSeekerComponent = /** @class */ (function () {
    function ProfileSeekerComponent() {
    }
    ProfileSeekerComponent.prototype.ngOnInit = function () {
    };
    ProfileSeekerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile-seeker',
            template: __webpack_require__(/*! ./profile-seeker.component.html */ "./src/app/components/profile-seeker/profile-seeker.component.html"),
            styles: [__webpack_require__(/*! ./profile-seeker.component.css */ "./src/app/components/profile-seeker/profile-seeker.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileSeekerComponent);
    return ProfileSeekerComponent;
}());



/***/ }),

/***/ "./src/app/components/register-recruiter/register-recruiter.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/register-recruiter/register-recruiter.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register-recruiter/register-recruiter.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/register-recruiter/register-recruiter.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  register-recruiter works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/register-recruiter/register-recruiter.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/register-recruiter/register-recruiter.component.ts ***!
  \*******************************************************************************/
/*! exports provided: RegisterRecruiterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterRecruiterComponent", function() { return RegisterRecruiterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterRecruiterComponent = /** @class */ (function () {
    function RegisterRecruiterComponent() {
    }
    RegisterRecruiterComponent.prototype.ngOnInit = function () {
    };
    RegisterRecruiterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-recruiter',
            template: __webpack_require__(/*! ./register-recruiter.component.html */ "./src/app/components/register-recruiter/register-recruiter.component.html"),
            styles: [__webpack_require__(/*! ./register-recruiter.component.css */ "./src/app/components/register-recruiter/register-recruiter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterRecruiterComponent);
    return RegisterRecruiterComponent;
}());



/***/ }),

/***/ "./src/app/components/register-seeker/register-seeker.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/register-seeker/register-seeker.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register-seeker/register-seeker.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/register-seeker/register-seeker.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  register-seeker works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/register-seeker/register-seeker.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/register-seeker/register-seeker.component.ts ***!
  \*************************************************************************/
/*! exports provided: RegisterSeekerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterSeekerComponent", function() { return RegisterSeekerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterSeekerComponent = /** @class */ (function () {
    function RegisterSeekerComponent() {
    }
    RegisterSeekerComponent.prototype.ngOnInit = function () {
    };
    RegisterSeekerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-seeker',
            template: __webpack_require__(/*! ./register-seeker.component.html */ "./src/app/components/register-seeker/register-seeker.component.html"),
            styles: [__webpack_require__(/*! ./register-seeker.component.css */ "./src/app/components/register-seeker/register-seeker.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterSeekerComponent);
    return RegisterSeekerComponent;
}());



/***/ }),

/***/ "./src/app/components/view-job/view-job.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/view-job/view-job.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.background-pic {\r\n  background-image: url('paul-hanaoka-299941-unsplash.jpg');\r\n  background-size: contain;\r\n}\r\n\r\n.heading {\r\n\r\n  font-family: \"Bookman Old Style\";\r\n  background-color: rgba(15, 15, 15 ,0.6);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/view-job/view-job.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/view-job/view-job.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rounded bg-light p-5 background-pic\">\r\n  <div class=\"row\">\r\n    <div class=\"col\">\r\n      <h1 class=\"text-center text-light\r\n       rounded shadow p-2 mb-4 heading\">\r\n        {{job.title}}\r\n      </h1>\r\n\r\n\r\n      <div class=\"card shadow rounded my-3\">\r\n        <div class=\"card-body\">\r\n          <img src={{job.company_logo}} alt=\"logo\" width=\"85px\" height=\"85px\" class=\"float-right\"/>\r\n          <b>Position : </b>{{job.title}} <br>\r\n          <b>Company : </b><a href={{job.company_url}} class=\"card-link\">{{job.company}}</a> <br/>\r\n          <b>Location : </b>{{job.location}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card shadow rounded my-3\">\r\n        <div class=\"card-body\">\r\n          <b>Description</b><br>\r\n          {{job.description}}\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card shadow rounded my-3 \" >\r\n        <div class=\"card-body\">\r\n          <b>How to Apply ?</b> <br>\r\n          {{job.how_to_apply}}\r\n          <br/>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"my-3\">\r\n        <form class=\"form-inline pb-3\">\r\n          <button class=\"btn btn-primary font-weight-bold mr-3 shadow\" type=\"submit\">\r\n            Bookmark&nbsp;&nbsp;<i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i></button>\r\n          <button class=\"btn btn-primary font-weight-bold mr-3 shadow\" type=\"submit\">\r\n            Apply\r\n          </button>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/view-job/view-job.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/view-job/view-job.component.ts ***!
  \***********************************************************/
/*! exports provided: ViewJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewJobComponent", function() { return ViewJobComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Job__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Job */ "./src/app/models/Job.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_job_list_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/job-list.service.client */ "./src/app/services/job-list.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewJobComponent = /** @class */ (function () {
    function ViewJobComponent(jobService, route) {
        var _this = this;
        this.jobService = jobService;
        this.route = route;
        this.job = new _models_Job__WEBPACK_IMPORTED_MODULE_1__["Job"]();
        this.route.params.subscribe(function (param) {
            _this.jobId = param['jobId'];
        });
        console.log(this.jobId);
        if (this.jobId != null) {
            this.jobService.findAllJobs().then(function (jobs) {
                for (var j in jobs) {
                    if (jobs[j].id === _this.jobId) {
                        _this.job = jobs[j];
                    }
                }
            });
            console.log(this.job);
        }
    }
    ViewJobComponent.prototype.ngOnInit = function () {
    };
    ViewJobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-job',
            template: __webpack_require__(/*! ./view-job.component.html */ "./src/app/components/view-job/view-job.component.html"),
            styles: [__webpack_require__(/*! ./view-job.component.css */ "./src/app/components/view-job/view-job.component.css")]
        }),
        __metadata("design:paramtypes", [_services_job_list_service_client__WEBPACK_IMPORTED_MODULE_3__["JobListServiceClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ViewJobComponent);
    return ViewJobComponent;
}());



/***/ }),

/***/ "./src/app/models/Job.ts":
/*!*******************************!*\
  !*** ./src/app/models/Job.ts ***!
  \*******************************/
/*! exports provided: Job */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Job", function() { return Job; });
var Job = /** @class */ (function () {
    function Job() {
    }
    return Job;
}());



/***/ }),

/***/ "./src/app/services/job-list.service.client.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/job-list.service.client.ts ***!
  \*****************************************************/
/*! exports provided: JobListServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobListServiceClient", function() { return JobListServiceClient; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);

var JobListServiceClient = /** @class */ (function () {
    function JobListServiceClient() {
    }
    JobListServiceClient.prototype.findAllJobs = function () {
        return jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
            url: 'https://jobs.github.com/positions.json?markdown=true',
            dataType: 'jsonp'
        });
    };
    JobListServiceClient.prototype.findFilteredJobs = function (location, keyword) {
        console.log('service');
        return jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
            url: 'https://jobs.github.com/positions.json?description=' + keyword + '&location=' + location,
            dataType: 'jsonp'
        });
    };
    JobListServiceClient.prototype.filteredSearch = function (obj) {
        var url = 'https://jobs.github.com/positions.json?';
        for (var o in obj) {
            if (obj[o] === 'Full Time') {
                url = url + o + '=Full%20Time' + '&';
            }
            else {
                url = url + o + '=' + obj[o] + '&';
            }
        }
        console.log(url);
        return jquery__WEBPACK_IMPORTED_MODULE_0__["ajax"]({
            url: url,
            dataType: 'jsonp'
        });
    };
    return JobListServiceClient;
}());

// import * as $ from 'jquery';
// export class JobListServiceClient {
//
//
//   findAllJobs(callback) {
//     return $.ajax({
//       url: 'https://jobs.github.com/positions.json',
//       dataType: 'jsonp',
//       success: function (res) {
//         console.log('hhgfghf');
//         console.log(res);
//       }
//     });
//   }
// }


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\1st - Career\NEU_start\@@Technical\2 - Summer 1.0\2.0 - Web Dev CS5610\project\submission\job-portal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map