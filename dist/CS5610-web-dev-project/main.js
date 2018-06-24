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

module.exports = "/*!* Sticky footer styles*/\r\n/*-------------------------------------------------- *!*/\r\n/*.footer {*/\r\n/*position: absolute;*/\r\n/*bottom: 0;*/\r\n/*width: 100%;*/\r\n/*!* Set the fixed height of the footer here *!*/\r\n/*height: 60px;*/\r\n/*line-height: 60px; !* Vertically center the text there *!*/\r\n/*background-color: #f5f5f5;*/\r\n/*}*/\r\n/*.footer > .container {*/\r\n/*padding-right: 15px;*/\r\n/*padding-left: 15px;*/\r\n/*}*/\r\n/*code {*/\r\n/*font-size: 80%;*/\r\n/*}*/\r\n/*.title{*/\r\n/*font-family: \"Fira Code Retina\";*/\r\n/*}*/\r\n/*.nav-link{*/\r\n/*font-family: \"Arial\";*/\r\n/*font-size: large;*/\r\n/*}*/\r\n.cont {\r\n  padding: 160px 15px 0;\r\n  height: 100%;\r\n  margin-bottom: 65px;\r\n}\r\n.title {\r\n  font-family: \"Fira Code Retina\";\r\n  font-size: 50px;\r\n}\r\n.nav-link {\r\n  font-family: \"Arial\";\r\n  font-size: large;\r\n\r\n}\r\n.navbar {\r\n\r\n  height: 140px;\r\n  background-color: #cccccc;\r\n  /*background-image: linear-gradient(black,whitesmoke);*/\r\n  background-image: url('naphtali-marshall-45606-unsplash.jpg');\r\n  /*background-size: contain;*/\r\n\r\n}\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-nav-bar></app-nav-bar>-->\r\n\r\n<nav class=\"navbar navbar-expand-md  fixed-top navbar-dark bg-dark\">\r\n\r\n  <a class=\"navbar-brand \" href=\"#\"><i class=\"fa fa-bullhorn fa-4x\"></i></a>\r\n  <a class=\"navbar-brand \" href=\"#\"><h1 class=\"title\">Job Portal</h1></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\r\n          aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"btn btn-outline-light font-weight-light ml-3\" [routerLinkActive]=\"['active']\" routerLink=\"/home\" >Home </a>\r\n        <!--<span class=\"sr-only\">(current)</span>-->\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"btn btn-outline-light font-weight-light ml-3\" [routerLinkActive]=\"['active']\"\r\n           routerLink=\"/job-list/{{' '}}/{{' '}}\">Jobs</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a [hidden]=\"!(user != null && user.role === 'JobSeeker')\" class=\"btn btn-outline-light\r\n        font-weight-light ml-3\"\r\n           [routerLinkActive]=\"['active']\" routerLink=\"/profile-seeker\" >Profile</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a [hidden]=\"!(user != null && user.role === 'Recruiter')\" class=\"btn btn-outline-light\r\n        font-weight-light ml-3\"\r\n           [routerLinkActive]=\"['active']\" routerLink=\"/profile-recruiter\" >Profile</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a [hidden]=\"!(user != null && user.role === 'JobSeeker')\" class=\"btn btn-outline-light\r\n        font-weight-light ml-3\"\r\n           [routerLinkActive]=\"['active']\" routerLink=\"/dashboard-seeker\" >Dashboard</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a [hidden]=\"!(user != null && user.role === 'Recruiter')\" class=\"btn btn-outline-light\r\n        font-weight-light ml-3\"\r\n           [routerLinkActive]=\"['active']\" routerLink=\"/dashboard-recruiter\" >Dashboard</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a [hidden]=\"!(user != null && user.role === 'Admin')\" class=\"btn btn-outline-light\r\n         font-weight-light ml-3\"\r\n           [routerLinkActive]=\"['active']\" routerLink=\"/admin\" >Admin</a>\r\n      </li>\r\n\r\n    </ul>\r\n    <form class=\"form-inline mt-2 mt-md-0\">\r\n      <!--<input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">-->\r\n      <button [hidden]=\"!(user === null)\" class=\"btn btn-outline-light\r\n       font-weight-light ml-3\" routerLink=\"/login\" [routerLinkActive]=\"['active']\"\r\n              type=\"button\">Login</button>\r\n\r\n      <h5 [hidden]=\"user===null\"class=\"text-light my-1 mr-1\"><i [hidden]=\"user===null\" class=\"fa fa-user text-light\"></i>\r\n        {{user!=null && user.username}}</h5>\r\n      <button [hidden]=\"user===null\" class=\"btn btn-outline-light\r\n       font-weight-light ml-3\" (click)=\"logout()\"\r\n              type=\"button\">Logout</button>\r\n      <button class=\"btn btn-outline-light\r\n      font-weight-light ml-3\" routerLink=\"/register\" [routerLinkActive]=\"['active']\"\r\n              type=\"button\">Sign Up</button>\r\n    </form>\r\n  </div>\r\n\r\n  <!--<div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">-->\r\n  <!--<ul class=\"navbar-nav mr-auto\">-->\r\n  <!--<li class=\"nav-item\">-->\r\n  <!--<a class=\"btn btn-outline-light font-weight-light ml-5\" [routerLinkActive]=\"['active']\" routerLink=\"/home\">Home</a>-->\r\n  <!--&lt;!&ndash;<span class=\"sr-only\">(current)</span>&ndash;&gt;-->\r\n  <!--</li>-->\r\n  <!--<li class=\"nav-item\">-->\r\n  <!--<a class=\"btn btn-outline-light font-weight-light ml-3\" [routerLinkActive]=\"['active']\" routerLink=\"/job-list/{{' '}}/{{' '}}\">Jobs</a>-->\r\n  <!--</li>-->\r\n  <!--</ul>-->\r\n  <!--<form class=\"form-inline mt-2 mt-md-0\">-->\r\n  <!--&lt;!&ndash;<input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">&ndash;&gt;-->\r\n  <!--<button class=\"btn btn-outline-light font-weight-light my-2 my-sm-0 mr-4\" routerLink=\"/login\" [routerLinkActive]=\"['active']\"-->\r\n  <!--type=\"button\">Login-->\r\n  <!--</button>-->\r\n  <!--<button class=\"btn btn-outline-light font-weight-light my-2 my-sm-0 mr-2\" [routerLinkActive]=\"['active']\" routerLink=\"/register\"-->\r\n  <!--type=\"button\">Sign Up-->\r\n  <!--</button>-->\r\n  <!--</form>-->\r\n  <!--</div>-->\r\n</nav>\r\n\r\n<div class=\"cont\">\r\n<router-outlet (activate)=\"sessionCheck()\" ></router-outlet>\r\n</div>\r\n\r\n<!--<footer class=\"footer bg-dark\">-->\r\n  <!--<div class=\"container text-center\">-->\r\n    <!--<span class=\"text-muted\">@copyright Shubham Rastogi</span>-->\r\n  <!--</div>-->\r\n<!--</footer>-->\r\n\r\n<!--<app-footer></app-footer>-->\r\n\r\n\r\n"

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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
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



var AppComponent = /** @class */ (function () {
    function AppComponent(userService, router) {
        // this.router.events.subscribe(() => this.sessionCheck());
        this.userService = userService;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.sessionCheck = function () {
        var _this = this;
        this.userService.findLoggedUser().then(function (user) { return _this.user = user; });
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().then(function () { return _this.router.navigate(['*']); })
            .then(function () {
            return _this.userService.findLoggedUser().then(function (user) { return _this.user = user; });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_recruiter_profile_recruiter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/profile-recruiter/profile-recruiter.component */ "./src/app/components/profile-recruiter/profile-recruiter.component.ts");
/* harmony import */ var _components_profile_seeker_profile_seeker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile-seeker/profile-seeker.component */ "./src/app/components/profile-seeker/profile-seeker.component.ts");
/* harmony import */ var _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/nav-bar/nav-bar.component */ "./src/app/components/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_job_board_job_board_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/job-board/job-board.component */ "./src/app/components/job-board/job-board.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_view_job_view_job_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/view-job/view-job.component */ "./src/app/components/view-job/view-job.component.ts");
/* harmony import */ var _services_job_listing_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/job-listing.service */ "./src/app/services/job-listing.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _components_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/job-list/job-list.component */ "./src/app/components/job-list/job-list.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_post_job_post_job_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/post-job/post-job.component */ "./src/app/components/post-job/post-job.component.ts");
/* harmony import */ var _services_save_job_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/save-job.service */ "./src/app/services/save-job.service.ts");
/* harmony import */ var _components_experience_list_experience_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/experience-list/experience-list.component */ "./src/app/components/experience-list/experience-list.component.ts");
/* harmony import */ var _components_award_list_award_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/award-list/award-list.component */ "./src/app/components/award-list/award-list.component.ts");
/* harmony import */ var _components_skill_list_skill_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/skill-list/skill-list.component */ "./src/app/components/skill-list/skill-list.component.ts");
/* harmony import */ var _components_education_list_education_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/education-list/education-list.component */ "./src/app/components/education-list/education-list.component.ts");
/* harmony import */ var _components_extra_curricular_list_extra_curricular_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/extra-curricular-list/extra-curricular-list.component */ "./src/app/components/extra-curricular-list/extra-curricular-list.component.ts");
/* harmony import */ var _components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/project-list/project-list.component */ "./src/app/components/project-list/project-list.component.ts");
/* harmony import */ var _components_certificate_list_certificate_list_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/certificate-list/certificate-list.component */ "./src/app/components/certificate-list/certificate-list.component.ts");
/* harmony import */ var _components_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/personal-info/personal-info.component */ "./src/app/components/personal-info/personal-info.component.ts");
/* harmony import */ var _components_user_sidebar_user_sidebar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/user-sidebar/user-sidebar.component */ "./src/app/components/user-sidebar/user-sidebar.component.ts");
/* harmony import */ var _components_job_seeker_dashboard_job_seeker_dashboard_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/job-seeker-dashboard/job-seeker-dashboard.component */ "./src/app/components/job-seeker-dashboard/job-seeker-dashboard.component.ts");
/* harmony import */ var _components_recruiter_dashboard_recruiter_dashboard_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/recruiter-dashboard/recruiter-dashboard.component */ "./src/app/components/recruiter-dashboard/recruiter-dashboard.component.ts");
/* harmony import */ var _services_job_posting_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/job-posting.service */ "./src/app/services/job-posting.service.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_profile_recruiter_profile_recruiter_component__WEBPACK_IMPORTED_MODULE_6__["ProfileRecruiterComponent"],
                _components_profile_seeker_profile_seeker_component__WEBPACK_IMPORTED_MODULE_7__["ProfileSeekerComponent"],
                _components_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_8__["NavBarComponent"],
                _components_job_board_job_board_component__WEBPACK_IMPORTED_MODULE_9__["JobBoardComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _components_job_board_job_board_component__WEBPACK_IMPORTED_MODULE_9__["SearchFilterPipe"],
                _components_view_job_view_job_component__WEBPACK_IMPORTED_MODULE_11__["ViewJobComponent"],
                _components_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_14__["JobListComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_16__["AdminComponent"],
                _components_post_job_post_job_component__WEBPACK_IMPORTED_MODULE_17__["PostJobComponent"],
                _components_experience_list_experience_list_component__WEBPACK_IMPORTED_MODULE_19__["ExperienceListComponent"],
                _components_award_list_award_list_component__WEBPACK_IMPORTED_MODULE_20__["AwardListComponent"],
                _components_skill_list_skill_list_component__WEBPACK_IMPORTED_MODULE_21__["SkillListComponent"],
                _components_education_list_education_list_component__WEBPACK_IMPORTED_MODULE_22__["EducationListComponent"],
                _components_extra_curricular_list_extra_curricular_list_component__WEBPACK_IMPORTED_MODULE_23__["ExtraCurricularListComponent"],
                _components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_24__["ProjectListComponent"],
                _components_certificate_list_certificate_list_component__WEBPACK_IMPORTED_MODULE_25__["CertificateListComponent"],
                _components_personal_info_personal_info_component__WEBPACK_IMPORTED_MODULE_26__["PersonalInfoComponent"],
                _components_user_sidebar_user_sidebar_component__WEBPACK_IMPORTED_MODULE_27__["UserSidebarComponent"],
                _components_job_seeker_dashboard_job_seeker_dashboard_component__WEBPACK_IMPORTED_MODULE_28__["JobSeekerDashboardComponent"],
                _components_recruiter_dashboard_recruiter_dashboard_component__WEBPACK_IMPORTED_MODULE_29__["RecruiterDashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_3__["routing"]
            ],
            providers: [
                _services_job_listing_service__WEBPACK_IMPORTED_MODULE_12__["JobListingService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"],
                _services_save_job_service__WEBPACK_IMPORTED_MODULE_18__["SaveJobService"],
                _services_job_posting_service__WEBPACK_IMPORTED_MODULE_30__["JobPostingService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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
/* harmony import */ var _components_view_job_view_job_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/view-job/view-job.component */ "./src/app/components/view-job/view-job.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_post_job_post_job_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/post-job/post-job.component */ "./src/app/components/post-job/post-job.component.ts");
/* harmony import */ var _components_job_seeker_dashboard_job_seeker_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/job-seeker-dashboard/job-seeker-dashboard.component */ "./src/app/components/job-seeker-dashboard/job-seeker-dashboard.component.ts");
/* harmony import */ var _components_recruiter_dashboard_recruiter_dashboard_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/recruiter-dashboard/recruiter-dashboard.component */ "./src/app/components/recruiter-dashboard/recruiter-dashboard.component.ts");












var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _components_job_board_job_board_component__WEBPACK_IMPORTED_MODULE_1__["JobBoardComponent"] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'job-list/:location/:keyword', component: _components_job_list_job_list_component__WEBPACK_IMPORTED_MODULE_2__["JobListComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'profile-recruiter', component: _components_profile_recruiter_profile_recruiter_component__WEBPACK_IMPORTED_MODULE_4__["ProfileRecruiterComponent"] },
    { path: 'profile-seeker', component: _components_profile_seeker_profile_seeker_component__WEBPACK_IMPORTED_MODULE_5__["ProfileSeekerComponent"] },
    { path: 'dashboard-recruiter', component: _components_recruiter_dashboard_recruiter_dashboard_component__WEBPACK_IMPORTED_MODULE_11__["RecruiterDashboardComponent"] },
    { path: 'dashboard-seeker', component: _components_job_seeker_dashboard_job_seeker_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["JobSeekerDashboardComponent"] },
    { path: 'job-list/:location/:keyword/view-job/:jobId', component: _components_view_job_view_job_component__WEBPACK_IMPORTED_MODULE_6__["ViewJobComponent"] },
    { path: 'post', component: _components_post_job_post_job_component__WEBPACK_IMPORTED_MODULE_9__["PostJobComponent"] },
    { path: '**', component: _components_job_board_job_board_component__WEBPACK_IMPORTED_MODULE_1__["JobBoardComponent"] } // last
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/admin/admin.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/admin/admin.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row navbar navbar-expand-lg  bg-dark text-light m-3\">\r\n  <div class=\"col text-center\">\r\n    <h3>Pending Recruiter List</h3>\r\n  </div>\r\n</div>\r\n\r\n<div *ngFor=\"let user of users\" class=\"m-3\">\r\n  <div class=\"row bg-white border shadow text-dark p-2 mx-3\" data-toggle=\"collapse\">\r\n    <div class=\"col\">\r\n      <h5>{{user.username}}</h5>\r\n    </div>\r\n    <div class=\"col\">\r\n      <button class=\"btn btn-success float-right ml-2\" (click)=\"approveUser(user._id)\" >Approve</button>\r\n      <button class=\"btn btn-danger float-right\" (click)=\"rejectUser(user._id)\" >Reject</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(userService) {
        this.userService = userService;
        this.users = [];
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.fetchPendingUser();
    };
    AdminComponent.prototype.fetchPendingUser = function () {
        var _this = this;
        this.userService.findPendingRecruiters().then(function (user) { return _this.users = user; });
    };
    AdminComponent.prototype.approveUser = function (id) {
        var _this = this;
        this.userService.approveRecruiter(id).then(function () { return _this.fetchPendingUser(); });
    };
    AdminComponent.prototype.rejectUser = function (id) {
        var _this = this;
        this.userService.rejectRecruiter(id).then(function () { return _this.fetchPendingUser(); });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/components/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/award-list/award-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/award-list/award-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/award-list/award-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/award-list/award-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card rounded shadow\">\r\n  <div class=\"card-header\">\r\n    <button class=\"btn btn-outline-primary rounded float-right\"><i class=\"fas fa-plus\"></i></button>\r\n    <h3> Awards </h3>\r\n  </div>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">\r\n      <i class=\"float-right btn btn-light fas fa-angle-down\"></i>\r\n      Award 1\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      <i class=\"float-right btn btn-light fas fa-angle-down\"></i>\r\n      Award 2\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/award-list/award-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/award-list/award-list.component.ts ***!
  \***************************************************************/
/*! exports provided: AwardListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardListComponent", function() { return AwardListComponent; });
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

var AwardListComponent = /** @class */ (function () {
    function AwardListComponent() {
    }
    AwardListComponent.prototype.ngOnInit = function () {
    };
    AwardListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-award-list',
            template: __webpack_require__(/*! ./award-list.component.html */ "./src/app/components/award-list/award-list.component.html"),
            styles: [__webpack_require__(/*! ./award-list.component.css */ "./src/app/components/award-list/award-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AwardListComponent);
    return AwardListComponent;
}());



/***/ }),

/***/ "./src/app/components/certificate-list/certificate-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/certificate-list/certificate-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/certificate-list/certificate-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/certificate-list/certificate-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card rounded shadow\">\r\n  <div class=\"card-header\">\r\n    <button class=\"btn btn-outline-primary rounded float-right\"><i class=\"fas fa-plus\"></i></button>\r\n    <h3> Certificates </h3>\r\n  </div>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">\r\n      <i class=\"float-right btn btn-light fas fa-angle-down\"></i>\r\n      certificate 1\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      <i class=\"float-right btn btn-light fas fa-angle-down\"></i>\r\n     certificate 2\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/certificate-list/certificate-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/certificate-list/certificate-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: CertificateListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificateListComponent", function() { return CertificateListComponent; });
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

var CertificateListComponent = /** @class */ (function () {
    function CertificateListComponent() {
    }
    CertificateListComponent.prototype.ngOnInit = function () {
    };
    CertificateListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-certificate-list',
            template: __webpack_require__(/*! ./certificate-list.component.html */ "./src/app/components/certificate-list/certificate-list.component.html"),
            styles: [__webpack_require__(/*! ./certificate-list.component.css */ "./src/app/components/certificate-list/certificate-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CertificateListComponent);
    return CertificateListComponent;
}());



/***/ }),

/***/ "./src/app/components/education-list/education-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/education-list/education-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/education-list/education-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/education-list/education-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card rounded shadow\" [hidden]=addMode>\r\n  <div class=\"card-header\">\r\n    <button class=\"btn btn-outline-primary rounded float-right\"\r\n            (click)=\"add()\"\r\n            [disabled]=addMode><i class=\"fas fa-plus\"></i></button>\r\n    <h3> Education </h3>\r\n  </div>\r\n  <ul class=\"list-group\">\r\n\r\n    <li class=\"list-group-item\" *ngFor=\"let edu of education\">\r\n      <i class=\"float-right btn btn-light fas fa-angle-down\"\r\n         (click)=\"edit(edu, edu._id)\"></i>\r\n      <span style=\"font-size: 28px; font-weight: bold; color:black;\"> {{edu.institute}} </span> <br/>\r\n      <span style=\"font-size: 24px; font-weight: normal; color:grey;\"> {{edu.degree}} </span> <br/>\r\n      <span style=\"font-size: 22px; font-weight: normal; color:grey;\"> {{edu.fieldOfStudy}} </span> <br/>\r\n      <span style=\"font-size: 22px; font-weight: normal; color:black;\"> {{edu.location}} </span> <br/>\r\n\r\n      <div [ngSwitch]=\"edu.ongoingStatus\">\r\n        <span style=\"font-size: 20px; font-weight: normal; color:gray;\" *ngSwitchCase=\"'true'\">\r\n        {{edu.startDate}} &nbsp;&nbsp;-&nbsp;&nbsp;Present\r\n      </span>\r\n        <span style=\"font-size: 20px; font-weight: normal; color:gray;\" *ngSwitchCase=\"'false'\">\r\n        {{edu.startDate}} &nbsp;&nbsp;-&nbsp;&nbsp;{{edu.endDate}}\r\n      </span>\r\n      </div>\r\n      <p style=\"white-space: pre-line; font-size: 22px;\">\r\n        {{edu.description}}\r\n      </p>\r\n      <div [hidden]=\"!getEditMode(edu._id)\" class=\"mt-1 border-top pt-2\" style=\"border-top-color: darkgray;\">\r\n        <i class=\"float-right btn btn-outline-danger far fa-trash-alt py-2 px-2\"\r\n           (click)=\"delete(edu._id)\"></i>\r\n        <h4>Update Education</h4>\r\n        <form>\r\n          <div class=\"form-group row mx-2 mt-2\">\r\n\r\n            <!--institute-->\r\n\r\n            <label for=\"institute2\" class=\"text-center col-form-label\">\r\n              Institute </label>\r\n            <input [ngModelOptions]=\"{standalone: true}\"\r\n                   [(ngModel)]=\"institute\"\r\n                   id=\"institute2\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"E.g. Northeastern University\">\r\n\r\n            <!--degree-->\r\n\r\n            <label for=\"degree2\" class=\"text-center col-form-label\">\r\n              Degree </label>\r\n            <input [ngModelOptions]=\"{standalone: true}\"\r\n                   [(ngModel)]=\"degree\"\r\n                   id=\"degree2\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"E.g. Masters in Computer Science\">\r\n\r\n            <!--Field of Study-->\r\n\r\n            <label for=\"field2\" class=\"text-center col-form-label\">\r\n             Field of Study </label>\r\n            <input [ngModelOptions]=\"{standalone: true}\"\r\n                   [(ngModel)]=\"fieldOfStudy\"\r\n                   id=\"field2\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"Field of Study\">\r\n\r\n            <!--Location-->\r\n\r\n            <label for=\"location2\" class=\"text-center col-form-label\">\r\n              Location </label>\r\n            <input [ngModelOptions]=\"{standalone: true}\"\r\n                   [(ngModel)]=\"location\"\r\n                   id=\"location2\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"Location\">\r\n\r\n          </div>\r\n          <!--Dates-->\r\n\r\n          <div class=\"form-group row mt-2\">\r\n            <div class=\"col\">\r\n              <label class=\"text-center col-form-label\">\r\n                From </label>\r\n              <select class=\"form-control\">\r\n                <option *ngFor=\"let month of months\">{{month}}</option>\r\n              </select>\r\n              <select class=\"form-control mt-3\">\r\n                <option *ngFor=\"let year of years\">{{year}}</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"col\">\r\n              <label class=\"text-center col-form-label\">\r\n                To </label>\r\n              <span [hidden]=!ongoingStatus> <br/> Present </span>\r\n              <select class=\"form-control\" [hidden]=ongoingStatus>\r\n                <option *ngFor=\"let month of months\">{{month}}</option>\r\n              </select>\r\n              <select class=\"form-control mt-3\" [hidden]=ongoingStatus>\r\n                <option *ngFor=\"let year of years\">{{year}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"custom-control custom-checkbox form-group row mx-2 mb-1\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\" id=\"check4\"\r\n                   [checked]=\"ongoingStatus\" (change)=\"ongoingStatus = !ongoingStatus; check()\"  name=\"ongoingStatus\">\r\n            <label class=\"custom-control-label\" for=\"check4\">I presently work here.</label>\r\n          </div>\r\n\r\n          <!--Description-->\r\n\r\n          <div class=\"form-group row mx-2\">\r\n            <label for=\"desc2\" class=\"text-center col-form-label\">\r\n              Description </label>\r\n            <textarea [ngModelOptions]=\"{standalone: true}\"\r\n                      [(ngModel)]=\"description\"\r\n                      id=\"desc2\"\r\n                      class=\"form-control\"\r\n                      rows=\"4\"\r\n                      placeholder=\"\">\r\n        </textarea>\r\n\r\n            <button class=\"btn btn-block mt-2\"\r\n                    style=\"color: white; background-color: green\"\r\n                    (click)=\"update()\">\r\n              Update education\r\n            </button>\r\n            <button class=\"btn btn-secondary btn-block mt-2\"\r\n                    (click)=\"cancelEdit()\">\r\n              Cancel\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n\r\n<!--Add Education-->\r\n\r\n<div class=\"card rounded shadow\" [hidden]=\"!addMode\">\r\n  <div class=\"card-header\">\r\n    <button class=\"btn btn-outline-primary rounded float-right\"\r\n            (click)=\"add()\"\r\n            [disabled]=addMode><i class=\"fas fa-plus\"></i></button>\r\n    <h3> Education </h3>\r\n  </div>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">\r\n      <!--<i class=\"float-right btn btn-light fas fa-angle-down\"></i>-->\r\n\r\n      <h4>Add new education</h4>\r\n      <form>\r\n        <div class=\"form-group row mx-2 mt-2\">\r\n\r\n          <!--institute-->\r\n\r\n          <label for=\"institute1\" class=\"text-center col-form-label\">\r\n            Institute </label>\r\n          <input [ngModelOptions]=\"{standalone: true}\"\r\n                 [(ngModel)]=\"institute\"\r\n                 id=\"institute1\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"E.g. Northeastern University\">\r\n\r\n          <!--degree-->\r\n\r\n          <label for=\"degree1\" class=\"text-center col-form-label\">\r\n            Degree </label>\r\n          <input [ngModelOptions]=\"{standalone: true}\"\r\n                 [(ngModel)]=\"degree\"\r\n                 id=\"degree1\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"E.g. Masters in Computer Science\">\r\n\r\n          <!--Field of Study-->\r\n\r\n          <label for=\"field1\" class=\"text-center col-form-label\">\r\n            Field of Study </label>\r\n          <input [ngModelOptions]=\"{standalone: true}\"\r\n                 [(ngModel)]=\"fieldOfStudy\"\r\n                 id=\"field1\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"Field of Study\">\r\n\r\n          <!--Location-->\r\n\r\n          <label for=\"location1\" class=\"text-center col-form-label\">\r\n            Location </label>\r\n          <input [ngModelOptions]=\"{standalone: true}\"\r\n                 [(ngModel)]=\"location\"\r\n                 id=\"location1\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"Location\">\r\n\r\n        </div>\r\n        <!--Dates-->\r\n\r\n        <div class=\"form-group row mt-2\">\r\n          <div class=\"col\">\r\n            <label class=\"text-center col-form-label\">\r\n              From </label>\r\n            <select class=\"form-control\"\r\n                    [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"startMonth\">\r\n              <option *ngFor=\"let month of months\" [ngValue]=\"startMonth\">{{month}}</option>\r\n            </select>\r\n            <select class=\"form-control mt-3\"\r\n                    [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"startYear\">\r\n              <option [(ngValue)]=\"startYear\" *ngFor=\"let year of years\">{{year}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"col\">\r\n            <label class=\"text-center col-form-label\">\r\n              To </label>\r\n            <span [hidden]=!ongoingStatus> <br/> Present </span>\r\n            <select class=\"form-control\" [hidden]=ongoingStatus\r\n                    [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"endMonth\">\r\n              <option *ngFor=\"let month of months\">{{month}}</option>\r\n            </select>\r\n            <select class=\"form-control mt-3\" [hidden]=ongoingStatus\r\n                    [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"endYear\">\r\n              <option *ngFor=\"let year of years\">{{year}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"custom-control custom-checkbox form-group row mx-2 mb-1\">\r\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"check3\"\r\n                 [checked]=\"ongoingStatus\" (change)=\"ongoingStatus = !ongoingStatus; check()\"  name=\"ongoingStatus\">\r\n          <label class=\"custom-control-label\" for=\"check3\">I presently work here.</label>\r\n        </div>\r\n\r\n        <!--Description-->\r\n\r\n        <div class=\"form-group row mx-2\">\r\n          <label for=\"desc1\" class=\"text-center col-form-label\">\r\n            Description </label>\r\n          <textarea [ngModelOptions]=\"{standalone: true}\"\r\n                    [(ngModel)]=\"description\"\r\n                    id=\"desc1\"\r\n                    class=\"form-control\"\r\n                    rows=\"4\"\r\n                    placeholder=\"\">\r\n          </textarea>\r\n\r\n\r\n          <button id=\"createBtn\"\r\n                  class=\"btn btn-block mt-3\"\r\n                  style=\"color: white; background-color: orange\"\r\n                  (click)=\"create()\">\r\n            Add Education\r\n          </button>\r\n          <button id=\"cancelBtn\"\r\n                  class=\"btn btn-secondary btn-block mt-2\"\r\n                  (click)=\"cancelAdd()\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </li>\r\n\r\n    <li class=\"list-group-item\" *ngFor=\"let edu of education\">\r\n      <i class=\"float-right btn btn-light fas fa-angle-down\"\r\n         (click)=\"edit(edu, edu._id)\"></i>\r\n      <span style=\"font-size: 28px; font-weight: bold; color:black;\"> {{edu.institute}} </span> <br/>\r\n      <span style=\"font-size: 24px; font-weight: normal; color:grey;\"> {{edu.degree}} </span> <br/>\r\n      <span style=\"font-size: 22px; font-weight: normal; color:grey;\"> {{edu.fieldOfStudy}} </span> <br/>\r\n      <span style=\"font-size: 22px; font-weight: normal; color:black;\"> {{edu.location}} </span> <br/>\r\n\r\n      <div [ngSwitch]=\"edu.ongoingStatus\">\r\n        <span style=\"font-size: 20px; font-weight: normal; color:gray;\" *ngSwitchCase=\"'true'\">\r\n        {{edu.startDate}} &nbsp;&nbsp;-&nbsp;&nbsp;Present\r\n      </span>\r\n        <span style=\"font-size: 20px; font-weight: normal; color:gray;\" *ngSwitchCase=\"'false'\">\r\n        {{edu.startDate}} &nbsp;&nbsp;-&nbsp;&nbsp;{{edu.endDate}}\r\n      </span>\r\n      </div>\r\n      <p style=\"white-space: pre-line; font-size: 22px;\">\r\n        {{edu.description}}\r\n      </p>\r\n    </li>\r\n\r\n\r\n  </ul>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/education-list/education-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/education-list/education-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: EducationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationListComponent", function() { return EducationListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_education_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/education.service */ "./src/app/services/education.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EducationListComponent = /** @class */ (function () {
    function EducationListComponent(userService, educationService) {
        this.userService = userService;
        this.educationService = educationService;
        this.addMode = false;
        this.editMode = false;
        this.months = [
            'Month',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        this.years = [
            'Year',
            '2005',
            '2006',
            '2007',
            '2008',
            '2009',
            '2010',
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018'
        ];
        this.startMonth = 'month';
        this.startYear = 'year';
        this.endMonth = 'month';
        this.endYear = 'year';
        this.updateId = '';
        this.education = [];
    }
    EducationListComponent.prototype.edit = function (education, updateId) {
        this.institute = education.institute;
        this.location = education.location;
        this.ongoingStatus = education.ongoingStatus;
        this.startDate = education.startDate;
        this.endDate = education.endDate;
        this.description = education.description;
        this.degree = education.degree;
        this.fieldOfStudy = education.fieldOfStudy;
        this.updateId = updateId;
        console.log('update id : ', updateId);
        this.editMode = true;
    };
    EducationListComponent.prototype.getEditMode = function (updateId) {
        if (this.updateId === updateId && this.editMode === true) {
            return true;
        }
        else {
            return false;
        }
    };
    EducationListComponent.prototype.check = function () {
        console.log(this.ongoingStatus);
    };
    EducationListComponent.prototype.add = function () {
        this.institute = '';
        this.location = '';
        this.ongoingStatus = '';
        this.startDate = '';
        this.endDate = '';
        this.description = '';
        this.degree = '';
        this.fieldOfStudy = '';
        this.addMode = true;
    };
    EducationListComponent.prototype.create = function () {
        var _this = this;
        var newEducation = {
            institute: this.institute,
            location: this.location,
            startDate: this.startDate,
            endDate: this.endDate,
            ongoingStatus: this.ongoingStatus,
            description: this.description,
            fieldOfStudy: this.fieldOfStudy,
            degree: this.degree
        };
        this.educationService.createEducation(newEducation)
            .then(function (response) {
            console.log('Add new education : ', response);
            _this.educationService.findEducationByUserId()
                .then(function (educationArray) {
                console.log('educations array : ', educationArray);
                _this.education = educationArray;
            });
        });
        this.addMode = false;
    };
    EducationListComponent.prototype.delete = function (id) {
        var _this = this;
        this.educationService.deleteEducation(id)
            .then(function (response) {
            _this.educationService.findEducationByUserId()
                .then(function (educationArray) {
                console.log('educations array : ', educationArray);
                _this.education = educationArray;
            });
        });
    };
    EducationListComponent.prototype.update = function () {
        var _this = this;
        console.log('Update new education as : ');
        // this.startDate = this.startMonth + ' ' + this.startYear;
        // console.log('Start Date : ', this.startDate);
        // this.endDate = this.endMonth + ' ' + this.endYear;
        // console.log('End Date : ', this.endDate);
        var updatedEducation = {
            degree: this.degree,
            fieldOfStudy: this.fieldOfStudy,
            institute: this.institute,
            location: this.location,
            startDate: this.startDate,
            endDate: this.endDate,
            ongoingStatus: this.ongoingStatus,
            description: this.description
        };
        this.editMode = false;
        this.educationService.updateEducation(this.updateId, updatedEducation)
            .then(function (response) {
            console.log('Updated in DB : ', response);
            _this.educationService.findEducationByUserId()
                .then(function (educationArray) {
                console.log('educations array : ', educationArray);
                _this.education = educationArray;
            });
        });
    };
    EducationListComponent.prototype.cancelAdd = function () {
        this.addMode = false;
    };
    EducationListComponent.prototype.cancelEdit = function () {
        console.log('in cancel update ---');
        console.log(this.editMode);
        this.editMode = false;
        console.log(this.editMode);
    };
    EducationListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.findLoggedUser()
            .then(function (user) {
            _this.user = user;
            if (user !== null) {
                _this.educationService.findEducationByUserId()
                    .then(function (educationArray) {
                    console.log('educations array : ', educationArray);
                    _this.education = educationArray;
                });
            }
        });
    };
    EducationListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-education-list',
            template: __webpack_require__(/*! ./education-list.component.html */ "./src/app/components/education-list/education-list.component.html"),
            styles: [__webpack_require__(/*! ./education-list.component.css */ "./src/app/components/education-list/education-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_education_service__WEBPACK_IMPORTED_MODULE_2__["EducationService"]])
    ], EducationListComponent);
    return EducationListComponent;
}());



/***/ }),

/***/ "./src/app/components/experience-list/experience-list.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/experience-list/experience-list.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/experience-list/experience-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/experience-list/experience-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card rounded shadow\" [hidden]=addMode>\r\n  <div class=\"card-header\">\r\n    <button class=\"btn btn-outline-primary rounded float-right\"\r\n            (click)=\"add()\"\r\n            [disabled]=addMode><i class=\"fas fa-plus\"></i></button>\r\n    <h3> Experience </h3>\r\n  </div>\r\n  <ul class=\"list-group\">\r\n\r\n    <li class=\"list-group-item\" *ngFor=\"let experience of experiences\">\r\n      <i class=\"float-right btn btn-light fas fa-angle-down\"\r\n         (click)=\"edit(experience, experience._id)\"></i>\r\n\r\n      <span style=\"font-size: 28px; font-weight: bold; color:black;\"> {{experience.title}} </span> <br/>\r\n      <span style=\"font-size: 22px; font-weight: normal; color:black;\"> {{experience.company}} </span> <br/>\r\n      <span style=\"font-size: 22px; font-weight: normal; color:black;\"> {{experience.location}} </span> <br/>\r\n      <div [ngSwitch]=\"experience.ongoingStatus\">\r\n        <span style=\"font-size: 20px; font-weight: normal; color:gray;\" *ngSwitchCase=\"'true'\">\r\n        {{experience.startDate.month}} {{experience.startDate.year}}&nbsp;&nbsp;-&nbsp;&nbsp;Present\r\n      </span>\r\n        <span style=\"font-size: 20px; font-weight: normal; color:gray;\" *ngSwitchCase=\"'false'\">\r\n        {{experience.startDate.month}} {{experience.startDate.year}} &nbsp;&nbsp;-&nbsp;&nbsp;{{experience.endDate.month}} {{experience.endDate.year}}\r\n      </span>\r\n      </div>\r\n      <p style=\"white-space: pre-line; font-size: 22px;\">\r\n        {{experience.description}}\r\n      </p>\r\n      <div [hidden]=\"!getEditMode(experience._id)\" class=\"mt-1 border-top pt-2\" style=\"border-top-color: darkgray;\">\r\n        <i class=\"float-right btn btn-outline-danger far fa-trash-alt py-2 px-2\"\r\n           (click)=\"delete(experience._id)\"></i>\r\n        <h4>Update Experience</h4>\r\n        <form>\r\n          <div class=\"form-group row mx-2 mt-2\">\r\n\r\n            <!--Title-->\r\n\r\n            <label for=\"title2\" class=\"text-center col-form-label\">\r\n              Title </label>\r\n            <input [ngModelOptions]=\"{standalone: true}\"\r\n                   [(ngModel)]=\"title\"\r\n                   id=\"title2\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"E.g. Software Engineering Intern\">\r\n\r\n            <!--Company-->\r\n\r\n            <label for=\"company2\" class=\"text-center col-form-label\">\r\n              Company </label>\r\n            <input [ngModelOptions]=\"{standalone: true}\"\r\n                   [(ngModel)]=\"company\"\r\n                   id=\"company2\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"E.g. Google\">\r\n\r\n            <!--Location-->\r\n\r\n            <label for=\"location2\" class=\"text-center col-form-label\">\r\n              Location </label>\r\n            <input [ngModelOptions]=\"{standalone: true}\"\r\n                   [(ngModel)]=\"location\"\r\n                   id=\"location2\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"Location\">\r\n\r\n          </div>\r\n\r\n          <!--Dates-->\r\n\r\n          <div class=\"form-group row mt-2\">\r\n            <div class=\"col\">\r\n              <label class=\"text-center col-form-label\">\r\n                From </label>\r\n              <select class=\"form-control\"\r\n                      [(ngModel)]=\"startMonth\" name=\"startMonth\">\r\n                <option *ngFor=\"let month of months\" [ngValue]=\"month\"\r\n                        [disabled]=\"disableMonth(month)\">{{month}}</option>\r\n              </select>\r\n              <select class=\"form-control mt-3\" name=\"startYear\"\r\n                      [(ngModel)]=\"startYear\">\r\n                <option *ngFor=\"let year of years\" [ngValue]=\"year\"\r\n                        [disabled]=\"disableYear(year)\">{{year}}</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"col\">\r\n              <label class=\"text-center col-form-label\">\r\n                To </label>\r\n              <span [hidden]=ongoingStatus> <br/> Present </span>\r\n              <select class=\"form-control\" [hidden]=!ongoingStatus [(ngModel)]=\"endMonth\" name=\"endMonth\">\r\n                <option *ngFor=\"let month of months\" [ngValue]=\"month\"\r\n                        [disabled]=\"disableMonth(month)\">{{month}}</option>\r\n              </select>\r\n              <select class=\"form-control mt-3\" [hidden]=!ongoingStatus\r\n                      [(ngModel)]=\"endYear\" name=\"endYear\">\r\n                <option *ngFor=\"let year of years\" [ngValue]=\"year\"\r\n                        [disabled]=\"disableYear(year)\">{{year}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"custom-control custom-checkbox form-group row mx-2 mb-1\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\" id={{updateId}}\r\n                   [checked]=\"!ongoingStatus\" (change)=\"checkStatus(ongoingStatus)\" name=\"ongoingStatus\">\r\n            <label class=\"custom-control-label\" for={{updateId}}>I presently work here.</label>\r\n          </div>\r\n\r\n          <!--Description-->\r\n\r\n          <div class=\"form-group row mx-2\">\r\n            <label for=\"desc2\" class=\"text-center col-form-label\">\r\n              Description </label>\r\n            <textarea [ngModelOptions]=\"{standalone: true}\"\r\n                      [(ngModel)]=\"description\"\r\n                      id=\"desc2\"\r\n                      class=\"form-control\"\r\n                      rows=\"4\"\r\n                      placeholder=\"\">\r\n        </textarea>\r\n\r\n            <button class=\"btn btn-block mt-2\"\r\n                    style=\"color: white; background-color: green\"\r\n                    (click)=\"update()\">\r\n              Update Experience\r\n            </button>\r\n            <button class=\"btn btn-secondary btn-block mt-2\"\r\n                    (click)=\"cancelEdit()\">\r\n              Cancel\r\n            </button>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</div>\r\n\r\n\r\n<!--Add Experience-->\r\n\r\n<div class=\"card rounded shadow\" [hidden]=\"!addMode\">\r\n  <div class=\"card-header\">\r\n    <button class=\"btn btn-outline-primary rounded float-right\"\r\n            (click)=\"add()\"\r\n            [disabled]=addMode><i class=\"fas fa-plus\"></i></button>\r\n    <h3> Experience </h3>\r\n  </div>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">\r\n      <!--<i class=\"float-right btn btn-light fas fa-angle-down\"></i>-->\r\n\r\n      <h4>Add new Experience</h4>\r\n      <form>\r\n        <div class=\"form-group row mx-2 mt-2\">\r\n\r\n          <!--Title-->\r\n\r\n          <label for=\"title1\" class=\"text-center col-form-label\">\r\n            Title </label>\r\n          <input [ngModelOptions]=\"{standalone: true}\"\r\n                 [(ngModel)]=\"title\"\r\n                 id=\"title1\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"E.g. Software Engineering Intern\">\r\n\r\n          <!--Company-->\r\n\r\n          <label for=\"company1\" class=\"text-center col-form-label\">\r\n            Company </label>\r\n          <input [ngModelOptions]=\"{standalone: true}\"\r\n                 [(ngModel)]=\"company\"\r\n                 id=\"company1\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"E.g. Google\">\r\n\r\n          <!--Location-->\r\n\r\n          <label for=\"location1\" class=\"text-center col-form-label\">\r\n            Location </label>\r\n          <input [ngModelOptions]=\"{standalone: true}\"\r\n                 [(ngModel)]=\"location\"\r\n                 id=\"location1\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"Location\">\r\n\r\n        </div>\r\n        <!--Dates-->\r\n\r\n        <div class=\"form-group row mt-2\">\r\n          <div class=\"col\">\r\n            <label class=\"text-center col-form-label\">\r\n              From </label>\r\n            <select class=\"form-control\"\r\n                    [(ngModel)]=\"startMonth\" name=\"startMonth\">\r\n              <option *ngFor=\"let month of months\" [ngValue]=\"month\"\r\n                      [disabled]=\"disableMonth(month)\">{{month}}</option>\r\n            </select>\r\n            <select class=\"form-control mt-3\" name=\"startYear\"\r\n                    [(ngModel)]=\"startYear\">\r\n              <option *ngFor=\"let year of years\" [ngValue]=\"year\"\r\n                      [disabled]=\"disableYear(year)\">{{year}}</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"col\">\r\n            <label class=\"text-center col-form-label\">\r\n              To </label>\r\n            <span [hidden]=!ongoingStatus> <br/> Present </span>\r\n            <select class=\"form-control\" [hidden]=ongoingStatus [(ngModel)]=\"endMonth\" name=\"endMonth\">\r\n              <option *ngFor=\"let month of months\" [ngValue]=\"month\"\r\n                      [disabled]=\"disableMonth(month)\">{{month}}</option>\r\n            </select>\r\n            <select class=\"form-control mt-3\" [hidden]=ongoingStatus\r\n                    [(ngModel)]=\"endYear\" name=\"endYear\">\r\n              <option *ngFor=\"let year of years\" [ngValue]=\"year\"\r\n                      [disabled]=\"disableYear(year)\">{{year}}</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"custom-control custom-checkbox form-group row mx-2 mb-1\">\r\n          <input type=\"checkbox\" class=\"custom-control-input\" id=\"check1\"\r\n                 [checked]=\"ongoingStatus\" (change)=\"checkStatus(ongoingStatus)\" name=\"ongoingStatus\">\r\n          <label class=\"custom-control-label\" for=\"check1\">I presently work here.</label>\r\n        </div>\r\n\r\n        <!--Description-->\r\n\r\n        <div class=\"form-group row mx-2\">\r\n          <label for=\"desc1\" class=\"text-center col-form-label\">\r\n            Description </label>\r\n          <textarea [ngModelOptions]=\"{standalone: true}\"\r\n                    [(ngModel)]=\"description\"\r\n                    id=\"desc1\"\r\n                    class=\"form-control\"\r\n                    rows=\"4\"\r\n                    placeholder=\"\">\r\n          </textarea>\r\n\r\n\r\n          <button id=\"createBtn\"\r\n                  class=\"btn btn-block mt-3\"\r\n                  style=\"color: white; background-color: orange\"\r\n                  (click)=\"create()\">\r\n            Add Experience\r\n          </button>\r\n          <button id=\"cancelBtn\"\r\n                  class=\"btn btn-secondary btn-block mt-2\"\r\n                  (click)=\"cancelAdd()\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </li>\r\n    <li class=\"list-group-item\" *ngFor=\"let experience of experiences\">\r\n      <!--<i class=\"float-right btn btn-light fas fa-angle-down\"></i>-->\r\n      <span style=\"font-size: 28px; font-weight: bold; color:black;\"> {{experience.title}} </span> <br/>\r\n      <span style=\"font-size: 22px; font-weight: normal; color:black;\"> {{experience.company}} </span> <br/>\r\n      <span style=\"font-size: 22px; font-weight: normal; color:black;\"> {{experience.location}} </span> <br/>\r\n      <div [ngSwitch]=\"experience.ongoingStatus\">\r\n        <span style=\"font-size: 20px; font-weight: normal; color:gray;\" *ngSwitchCase=\"'true'\">\r\n        {{experience.startDate}} &nbsp;&nbsp;-&nbsp;&nbsp;Present\r\n      </span>\r\n        <span style=\"font-size: 20px; font-weight: normal; color:gray;\" *ngSwitchCase=\"'false'\">\r\n        {{experience.startDate}} &nbsp;&nbsp;-&nbsp;&nbsp;{{experience.endDate}}\r\n      </span>\r\n      </div>\r\n      <p style=\"white-space: pre-line; font-size: 22px;\">\r\n        {{experience.description}}\r\n      </p>\r\n    </li>\r\n\r\n  </ul>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/experience-list/experience-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/experience-list/experience-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: ExperienceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceListComponent", function() { return ExperienceListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_experience_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/experience.service */ "./src/app/services/experience.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExperienceListComponent = /** @class */ (function () {
    // experiences = [
    //   { _id: 1,
    //     title: 'Software Engineering Intern',
    //     company: 'Google',
    //     location: 'Palo Alto, Califoria',
    //     startDate: 'January 2018',
    //     endDate: 'April 2018',
    //     ongoingStatus: 'false',
    //     description: 'It was an awesome experience interning at Google.'
    //   },
    //   { _id: 2,
    //     title: 'Machine Learning Intern',
    //     company: 'Google',
    //     location: 'Palo Alto, Califoria',
    //     startDate: 'January 2018',
    //     endDate: 'April 2018',
    //     ongoingStatus: 'false',
    //     description: 'It was an awesome experience interning at Google.'
    //   }
    // ];
    function ExperienceListComponent(userService, experienceService) {
        this.userService = userService;
        this.experienceService = experienceService;
        this.addMode = false;
        this.editMode = false;
        this.months = [
            'Month',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        this.years = [
            'Year',
            '2005',
            '2006',
            '2007',
            '2008',
            '2009',
            '2010',
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018'
        ];
        this.startMonth = 'Month';
        this.startYear = 'Year';
        this.endMonth = 'Month';
        this.endYear = 'Year';
        this.updateId = '';
        this.experiences = [];
    }
    ExperienceListComponent.prototype.edit = function (experience, updateId) {
        this.title = experience.title;
        this.company = experience.company;
        this.location = experience.location;
        this.ongoingStatus = experience.ongoingStatus;
        console.log('DB ongoingStatus :', this.ongoingStatus);
        this.startMonth = experience.startDate.month;
        this.endMonth = experience.endDate.month;
        this.startYear = experience.startDate.year;
        this.endYear = experience.endDate.year;
        this.description = experience.description;
        this.updateId = updateId;
        // console.log('update id : ', updateId);
        this.editMode = true;
    };
    ExperienceListComponent.prototype.disableMonth = function (mm) {
        if (mm === 'Month') {
            return true;
        }
        else {
            return false;
        }
    };
    ExperienceListComponent.prototype.disableYear = function (yy) {
        if (yy === 'Year') {
            return true;
        }
        else {
            return false;
        }
    };
    ExperienceListComponent.prototype.getEditMode = function (updateId) {
        if (this.updateId === updateId && this.editMode === true) {
            return true;
        }
        else {
            return false;
        }
    };
    ExperienceListComponent.prototype.checkStatus = function (status) {
        this.ongoingStatus = !status;
        console.log('New status : ', this.ongoingStatus);
    };
    ExperienceListComponent.prototype.add = function () {
        this.title = '';
        this.company = '';
        this.location = '';
        this.startMonth = 'Month';
        this.startYear = 'Year';
        this.endMonth = 'Month';
        this.endYear = 'Year';
        this.ongoingStatus = false; // present working on this job
        this.description = '';
        this.addMode = true;
    };
    ExperienceListComponent.prototype.create = function () {
        var _this = this;
        var newExperience = {
            title: this.title,
            company: this.company,
            location: this.location,
            startDate: { 'month': this.startMonth, 'year': this.startYear },
            endDate: { 'month': this.endMonth, 'year': this.endYear },
            ongoingStatus: this.ongoingStatus,
            description: this.description
        };
        this.experienceService.createExperience(newExperience)
            .then(function (response) {
            console.log('Add new experience : ', response);
            _this.experienceService.findExperienceByUserId()
                .then(function (experiences) {
                console.log('Experiences array : ', experiences);
                _this.experiences = experiences;
            });
        });
        this.addMode = false;
    };
    ExperienceListComponent.prototype.delete = function (id) {
        var _this = this;
        this.experienceService.deleteExperience(id)
            .then(function (response) {
            _this.experienceService.findExperienceByUserId()
                .then(function (experiences) {
                console.log('Experiences array : ', experiences);
                _this.experiences = experiences;
            });
        });
    };
    ExperienceListComponent.prototype.update = function () {
        var _this = this;
        // this.startDate = this.startMonth + ' ' + this.startYear;
        // console.log('Start Date : ', this.startDate);
        // this.endDate = this.endMonth + ' ' + this.endYear;
        // console.log('End Date : ', this.endDate);
        console.log('Updated new ongoing status as : ', !this.ongoingStatus);
        var updatedExperience = {
            title: this.title,
            company: this.company,
            location: this.location,
            startDate: { 'month': this.startMonth, 'year': this.startYear },
            endDate: { 'month': this.endMonth, 'year': this.endYear },
            ongoingStatus: !this.ongoingStatus,
            description: this.description
        };
        // console.log('Update new experience as : ');
        // console.log(updatedExperience);
        this.editMode = false;
        this.experienceService.updateExperience(this.updateId, updatedExperience)
            .then(function (response) {
            // console.log('Updated in DB : ', response);
            _this.experienceService.findExperienceByUserId()
                .then(function (experiences) {
                console.log('Experiences array : ', experiences);
                _this.experiences = experiences;
            });
        });
    };
    ExperienceListComponent.prototype.cancelAdd = function () {
        this.addMode = false;
    };
    ExperienceListComponent.prototype.cancelEdit = function () {
        // console.log('in cancel update ---');
        this.editMode = false;
        // console.log(this.editMode);
    };
    ExperienceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.findLoggedUser()
            .then(function (user) {
            _this.user = user;
            if (user !== null) {
                if (_this.ongoingStatus === undefined) {
                    _this.ongoingStatus = false;
                }
                else {
                    _this.ongoingStatus = user.ongoingStatus;
                }
                _this.experienceService.findExperienceByUserId()
                    .then(function (experiences) {
                    console.log('Experiences array : ', experiences);
                    _this.experiences = experiences;
                });
            }
        });
    };
    ExperienceListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experience-list',
            template: __webpack_require__(/*! ./experience-list.component.html */ "./src/app/components/experience-list/experience-list.component.html"),
            styles: [__webpack_require__(/*! ./experience-list.component.css */ "./src/app/components/experience-list/experience-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _services_experience_service__WEBPACK_IMPORTED_MODULE_2__["ExperienceService"]])
    ], ExperienceListComponent);
    return ExperienceListComponent;
}());



/***/ }),

/***/ "./src/app/components/extra-curricular-list/extra-curricular-list.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/extra-curricular-list/extra-curricular-list.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/extra-curricular-list/extra-curricular-list.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/components/extra-curricular-list/extra-curricular-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card rounded shadow my-3\">\r\n  <div class=\"card-header\">\r\n    <button class=\"btn btn-outline-primary rounded float-right\"><i class=\"fas fa-plus\"></i></button>\r\n    <h3> Extra Curricular </h3>\r\n  </div>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">\r\n      <i class=\"float-right btn btn-light fas fa-angle-down\"></i>\r\n      Martial Arts\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      <i class=\"float-right btn btn-light fas fa-angle-down\"></i>\r\n      Rock Climbing\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/extra-curricular-list/extra-curricular-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/extra-curricular-list/extra-curricular-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ExtraCurricularListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtraCurricularListComponent", function() { return ExtraCurricularListComponent; });
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

var ExtraCurricularListComponent = /** @class */ (function () {
    function ExtraCurricularListComponent() {
    }
    ExtraCurricularListComponent.prototype.ngOnInit = function () {
    };
    ExtraCurricularListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-extra-curricular-list',
            template: __webpack_require__(/*! ./extra-curricular-list.component.html */ "./src/app/components/extra-curricular-list/extra-curricular-list.component.html"),
            styles: [__webpack_require__(/*! ./extra-curricular-list.component.css */ "./src/app/components/extra-curricular-list/extra-curricular-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExtraCurricularListComponent);
    return ExtraCurricularListComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.footer {\r\n  /*position: absolute;*/\r\n  bottom: 0;\r\n  width: 100%;\r\n  /* Set the fixed height of the footer here */\r\n  height: 100px;\r\n  line-height: 60px; /* Vertically center the text there */\r\n  background-color: #f5f5f5;\r\n  /*background-image: linear-gradient(white,black);*/\r\n  background-image: url('naphtali-marshall-45606-unsplash.jpg');\r\n\r\n}\r\n\r\n.footer > .container {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  text-align: center;\r\n  -webkit-text-decoration: whitesmoke;\r\n          text-decoration: whitesmoke;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer fixed-bottom bg-dark\">\r\n  <div class=\"container text-light \">\r\n    Made with <i class=\"fa fa-heart\" aria-hidden=\"true\" style=\"color: red;\"></i>\r\n    by <a href=\"https://karantyagi.github.io/\">Karan</a> &\r\n    <a href=\"https://www.linkedin.com/in/shubham-rastogi70/\">Shubham</a> @\r\n    <a href=\"https://www.ccis.northeastern.edu\" target=\"_blank\">Northeastern</a>, Summer 2018.\r\n  </div>\r\n</footer>\r\n"

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

module.exports = ".active.joblist {\r\n  background-color: rgba(0, 170, 255, 0.65);\r\n  border-top-color: whitesmoke;\r\n  border-bottom-color: rgba(0, 170, 255, 0);\r\n  border-right-color: rgba(0, 170, 255, 0.02);\r\n  border-left-color: rgba(0, 170, 255, 0.02);\r\n  /*border-color: rgba(0, 170, 255, 0.65);*/\r\n}\r\n\r\n.active.joblist a {\r\n  color: white;\r\n}\r\n\r\n.background-pic{\r\n  background-image: url('paul-hanaoka-299941-unsplash.jpg');\r\n  background-size: contain;\r\n}\r\n\r\n.heading{\r\n\r\n  font-family: \"Bookman Old Style\";\r\n  background-color: rgba(15, 15, 15 ,0.6);\r\n\r\n}\r\n\r\n.dropdown-menu{\r\n  position: absolute;\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/job-list/job-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/job-list/job-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rounded bg-light p-5 background-pic\">\r\n  <h1 class=\" text-center text-light rounded shadow p-2 mb-4 heading\">Job Listings\r\n  </h1>\r\n  <div class=\"row mb-5\">\r\n    <div class=\"col-3\">\r\n      <div class=\"input-group\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\" id=\"\"><i class=\"fa fa-search\"></i></span>\r\n        </div>\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Keyword or Title\" aria-label=\"Keyword or Title\"\r\n               aria-describedby=\"basic-addon1\" [(ngModel)]=\"keywordOrTitle\" name=\"keywordOrTitle\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-3\">\r\n      <div class=\"input-group\">\r\n        <div class=\"input-group-prepend\">\r\n          <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-map-marker\"></i></span>\r\n        </div>\r\n        <input type=\"text\" autocomplete=\"off\" class=\"form-control dropdown-toggle\" id=\"dropdownMenuLink\"\r\n               placeholder=\"Location\" aria-label=\"Location\"\r\n               aria-describedby=\"basic-addon1\"\r\n               [(ngModel)]=\"location\" #stateSelect=\"ngModel\"\r\n               name=\"location\" data-toggle=\"dropdown\">\r\n        <div class=\"dropdown-menu dropdown-menu-input float-right\">\r\n          <h6 class=\"dropdown-header\">Select location</h6>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <div class=\"dropdown-item\" *ngFor=\"let state of states | searchFilter: location\"\r\n               (click)=\"setVal(state); location='' \">{{state}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-2 m-0\">\r\n      <div class=\"btn-group\">\r\n        <button type=\"button\" class=\"btn btn-light border-secondary dropdown-toggle\" data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <span style=\"color:gray;\">Type:</span>\r\n        </button>\r\n\r\n        <div class=\"dropdown-menu\">\r\n          <h6 class=\"dropdown-header\">Select Job Type</h6>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <div class=\"dropdown-item\" *ngFor=\"let jobType of typeList\"\r\n               (click)=\"setJobType(jobType)\">{{jobType}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-2 m-0\">\r\n      <div class=\"btn-group\">\r\n        <button type=\"button\" class=\"btn btn-light border-secondary dropdown-toggle\" data-toggle=\"dropdown\"\r\n                aria-haspopup=\"true\" aria-expanded=\"false\">\r\n          <span style=\"color:gray;\">Company:</span>\r\n        </button>\r\n\r\n        <div class=\"dropdown-menu\">\r\n          <h6 class=\"dropdown-header\">Select company</h6>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <div class=\"dropdown-item\" *ngFor=\"let c of companyList\"\r\n               (click)=\"setCompany(c)\">{{c}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col-2 m-0\">\r\n      <!--<button class=\"btn btn-light font-weight-bold\" (click)=\"searchJob();\" >-->\r\n      <!--Search-->\r\n      <!--</button>-->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row mb-5\">\r\n    <ul class=\"nav nav-pills\">\r\n      <li class=\"nav-item\" *ngFor=\"let item of filterItems; let i = index\" [attr.data-index]=\"i\">\r\n        <div class=\"nav-link bg-white mx-3\" href=\"#\">\r\n          {{item.val}}\r\n          <i class=\"fa fa-times ml-3\" (click)=\"removeItems(item,i)\"></i>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <ul class=\"list-group\">\r\n    <li *ngFor=\"let job of jobs\"\r\n        class=\"list-group-item bg-light my-2 rounded shadow-sm\">\r\n      <div class=\"row text-dark\">\r\n        <div class=\"col-8\">\r\n          <h5 style=\"color: rgba(0,123,255,0.85);\">\r\n            <a routerLink=\"view-job/{{job.id}}|{{job.jobSource}}\">{{job.title}}</a></h5>\r\n        </div>\r\n        <div class=\"col-4\" style=\"text-align: right\">\r\n          {{job.location}}\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-8\">{{job.company}} | {{job.type}}</div>\r\n        <div class=\"col-4\" style=\"text-align: right\">\r\n          <small>Posted on: {{job.created_at}}</small>\r\n        </div>\r\n      </div>\r\n\r\n    </li>\r\n  </ul>\r\n  <nav class=\"mt-2 marginFooter\">\r\n    <ul class=\"pagination justify-content-center\">\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\r\n          <span aria-hidden=\"true\">&laquo;</span>\r\n          <span class=\"sr-only\">Previous</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\r\n          <span aria-hidden=\"true\">&raquo;</span>\r\n          <span class=\"sr-only\">Next</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </nav>\r\n</div>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_job_listing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/job-listing.service */ "./src/app/services/job-listing.service.ts");
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
    // states = ['Alaska',
    //   'Alabama',
    //   'Arkansas',
    //   'American Samoa',
    //   'Arizona',
    //   'California',
    //   'Colorado',
    //   'Connecticut',
    //   'District of Columbia',
    //   'Delaware',
    //   'Florida',
    //   'Georgia',
    //   'Guam',
    //   'Hawaii',
    //   'Iowa',
    //   'Idaho',
    //   'Illinois',
    //   'Indiana',
    //   'Kansas',
    //   'Kentucky',
    //   'Louisiana',
    //   'Massachusetts',
    //   'Maryland',
    //   'Maine',
    //   'Michigan',
    //   'Minnesota',
    //   'Missouri',
    //   'Mississippi',
    //   'Montana',
    //   'North Carolina',
    //   'North Dakota',
    //   'Nebraska',
    //   'New Hampshire',
    //   'New Jersey',
    //   'New Mexico',
    //   'Nevada',
    //   'New York',
    //   'Ohio',
    //   'Oklahoma',
    //   'Oregon',
    //   'Pennsylvania',
    //   'Puerto Rico',
    //   'Rhode Island',
    //   'South Carolina',
    //   'South Dakota',
    //   'Tennessee',
    //   'Texas',
    //   'Utah',
    //   'Virginia',
    //   'Virgin Islands',
    //   'Vermont',
    //   'Washington',
    //   'Wisconsin',
    //   'West Virginia',
    //   'Wyoming'];
    function JobListComponent(service, route) {
        this.service = service;
        this.route = route;
        this.jobs = [];
        this.filterCriteria = {};
        this.filterItems = [];
        this.states = [];
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
    JobListComponent.prototype.setVal = function (location) {
        this.location = location;
        this.filterCriteria['location'] = location;
        this.filterItems = this.filterItems.filter(function (obj) { return obj.type != 'location'; });
        this.filterItems.push({ type: 'location', val: location });
        this.searchJob();
    };
    JobListComponent.prototype.setCompany = function (company) {
        this.company = company;
        this.filterCriteria['company'] = company;
        this.filterItems = this.filterItems.filter(function (obj) { return obj.type != 'company'; });
        this.filterItems.push({ type: 'company', val: company });
        this.searchJob();
    };
    JobListComponent.prototype.setJobType = function (type) {
        this.type = type;
        this.filterCriteria['type'] = type;
        this.filterItems = this.filterItems.filter(function (obj) { return obj.type != 'type'; });
        this.filterItems.push({ type: 'type', val: type });
        this.searchJob();
    };
    JobListComponent.prototype.removeItems = function (item, i) {
        this.filterItems.splice(i, 1);
        delete this.filterCriteria[item.type];
        this.searchJob();
    };
    JobListComponent.prototype.searchJob = function () {
        var _this = this;
        this.service.findAllJobs().then(function (jobs) {
            _this.jobs = jobs;
            _this.jobs.forEach(function (job, index) {
                var d = new Date(job.created_at);
                job.created_at = d.toDateString();
                job.jobSource = 'github';
                // this.jobs[index] = job;
            });
            _this.companyList = _this.jobs.map(function (item) { return item.company; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
            _this.typeList = _this.jobs.map(function (item) { return item.type; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
            _this.states = _this.jobs.map(function (item) { return item.location; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
        }).then(function () {
            var _loop_1 = function (filter) {
                if (true) {
                    console.log(_this.filterCriteria[filter]);
                    console.log(filter);
                    _this.jobs = _this.jobs.filter(function (value) { return value[filter] === _this.filterCriteria[filter]; });
                    console.log(_this.jobs);
                }
            };
            for (var filter in _this.filterCriteria) {
                _loop_1(filter);
            }
        });
        console.log(this.jobs);
    };
    JobListComponent.prototype.fetchAllJobs = function () {
        var _this = this;
        this.service.findAllJobs().then(function (jobs) {
            _this.jobs = jobs;
            _this.jobs.forEach(function (job, index) {
                var d = new Date(job.created_at);
                job.created_at = d.toDateString();
                job.jobSource = 'github';
                // this.jobs[index] = job;
            });
            _this.companyList = _this.jobs.map(function (item) { return item.company; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
            _this.typeList = _this.jobs.map(function (item) { return item.type; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
            _this.states = _this.jobs.map(function (item) { return item.location; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
        });
    };
    JobListComponent.prototype.fetchFilteredJobs = function (location, keyword) {
        var _this = this;
        this.service.findFilteredJobs(location, keyword).then(function (jobs) {
            _this.jobs = jobs;
            _this.jobs.forEach(function (job, index) {
                var d = new Date(job.created_at);
                job.created_at = d.toDateString();
                job.jobSource = 'github';
                // this.jobs[index] = job;
            });
            _this.companyList = _this.jobs.map(function (item) { return item.company; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
            _this.typeList = _this.jobs.map(function (item) { return item.type; })
                .filter(function (value, index, self) { return self.indexOf(value) === index; });
            _this.states = _this.jobs.map(function (item) { return item.location; })
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
        __metadata("design:paramtypes", [_services_job_listing_service__WEBPACK_IMPORTED_MODULE_2__["JobListingService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], JobListComponent);
    return JobListComponent;
}());



/***/ }),

/***/ "./src/app/components/job-seeker-dashboard/job-seeker-dashboard.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/job-seeker-dashboard/job-seeker-dashboard.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero{\r\n  background-image: url('mark-cruz-230099-unsplash.jpg');\r\n  background-size: contain;\r\n}\r\n\r\n.dropdown-menu{\r\n  position: absolute;\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n  background: lightgrey;\r\n}\r\n\r\n/*.dropdown-toggle{*/\r\n\r\n/*border-radius: 5px;*/\r\n\r\n/*}*/\r\n\r\n.stats{\r\n  font-size: 25px;\r\n}\r\n\r\n.back{\r\n  background-color: rgba(66, 212,244, 0.2);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/job-seeker-dashboard/job-seeker-dashboard.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/job-seeker-dashboard/job-seeker-dashboard.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"ml-3\">\r\n    <app-user-sidebar></app-user-sidebar>\r\n  </div>\r\n  <div class=\"col\">\r\n    <div class=\"row bg-dark p-3 mx-2\">\r\n      <div class=\"col-5\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\" id=\"\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input type=\"text\" class=\"form-control\" placeholder=\"Keyword or Title\" aria-label=\"Keyword or Title\"\r\n                 aria-describedby=\"basic-addon1\" [(ngModel)]=\"keywordOrTitle\" name=\"keywordOrTitle\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col-5\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-prepend \">\r\n            <span class=\"input-group-text\" id=\"basic-addon1\"><i class=\"fa fa-map-marker\"></i></span>\r\n          </div>\r\n          <input type=\"text\" autocomplete=\"off\" class=\"form-control dropdown-toggle\" id=\"dropdownMenuLink\"\r\n                 placeholder=\"Location\" aria-label=\"Location\"\r\n                 aria-describedby=\"basic-addon1\" [(ngModel)]=\"location\"\r\n                 name=\"location\" data-toggle=\"dropdown\">\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n            <div *ngFor=\"let state of states | searchFilter: getInputVal()\" (click)=\"setVal(state)\"\r\n                 class=\"dropdown-item\">{{state}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-2\">\r\n        <button class=\"btn btn-primary float-right btn-block\"\r\n                routerLink=\"/job-list/{{location!='' && location!=null ? location:' '}}/{{keywordOrTitle!='' &&\r\n              keywordOrTitle!=null? keywordOrTitle: ' '}}\">Search\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mx-2 p-3 mt-3 bg-white border bounceOutUp\">\r\n      <div class=\"col stats text-center text-muted\">\r\n        <span class=\"float-right\"><span class=\"text-primary\">{{jobsSaved}}</span> Saved Job</span>\r\n        <span class=\"float-left\"><span class=\"text-primary\">{{jobsSaved}}</span> Applied Jobs</span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mx-2 mt-3 bg-white border bounceOutUp\">\r\n      <div class=\"col-12 stats text-center text-muted\">\r\n        <div class=\"row text-center border-bottom\">\r\n          <div class=\"col p-2\">Jobs</div>\r\n        </div>\r\n        <div class=\"row back\">\r\n          <div class=\"col\">\r\n            <div class=\"row mx-2 p-2 m-3 bg-white border\">\r\n              <div class=\"col-10\">\r\n              </div>\r\n              <div class=\"col-1\">\r\n                <button class=\"btn btn-success\">Apply</button>\r\n              </div>\r\n              <div class=\"col-1\">\r\n                <button [hidden]=\"false\" class=\"btn btn-danger\">Save</button>\r\n                <button [hidden]=\"true\" class=\"btn btn-danger\">UnSave</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/job-seeker-dashboard/job-seeker-dashboard.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/job-seeker-dashboard/job-seeker-dashboard.component.ts ***!
  \***********************************************************************************/
/*! exports provided: JobSeekerDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobSeekerDashboardComponent", function() { return JobSeekerDashboardComponent; });
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


var JobSeekerDashboardComponent = /** @class */ (function () {
    function JobSeekerDashboardComponent(router) {
        this.router = router;
        this.jobsSaved = 0;
        this.jobsApplied = 0;
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
    JobSeekerDashboardComponent.prototype.setVal = function (val) {
        this.location = val;
    };
    JobSeekerDashboardComponent.prototype.getInputVal = function () {
        return this.location;
    };
    JobSeekerDashboardComponent.prototype.ngOnInit = function () {
    };
    JobSeekerDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-job-seeker-dashboard',
            template: __webpack_require__(/*! ./job-seeker-dashboard.component.html */ "./src/app/components/job-seeker-dashboard/job-seeker-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./job-seeker-dashboard.component.css */ "./src/app/components/job-seeker-dashboard/job-seeker-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], JobSeekerDashboardComponent);
    return JobSeekerDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*.alert{*/\r\n  /*display: none;*/\r\n  /*}*/\r\n  .mandatory{\r\n  color:red;\r\n}\r\n  .needs-validation {\r\n  width: 100%;\r\n  max-width: 1200px;\r\n  padding: 130px;\r\n  margin: auto;\r\n  font-family: \"Bookman Old Style\";\r\n  background-color: rgba(15, 15, 15 ,0.6);\r\n}\r\n  .ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n  .ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n  .background-pic{\r\n  background-image: url('paul-hanaoka-299941-unsplash.jpg');\r\n  background-size: cover;\r\n  font-family: SansSerif;\r\n  font-size: 1.3rem;\r\n  height:100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"content background-pic\">\r\n  <div class=\"rounded bg-light p-5 background-pic text-light\">\r\n    <form class=\"needs-validation\" #form=\"ngForm\">\r\n      <div class=\"alert alert-danger\" role=\"alert\" [hidden]=\"!badUserNamePass\">\r\n        Entered a wrong username or password!!\r\n      </div>\r\n      <div class=\"alert alert-danger\" role=\"alert\" [hidden]=\"!verificationPending\">\r\n        Verification for recruiter role pending!!\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"username\" class=\"col-sm-3 col-form-label\">Username<span class=\"mandatory\">*</span></label>\r\n\r\n        <div class=\"col-sm-9\">\r\n          <input type=\"text\" placeholder=\"Xyz\" id=\"username\" class=\"form-control\"\r\n                 required [(ngModel)]=\"username\" name=\"username\" #userName=\"ngModel\" >\r\n          <div [hidden]=\"userName.valid || userName.pristine\"  class=\"mt-2 alert alert-danger\">\r\n            Username required!!\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"form-group row\">\r\n        <label for=\"password\" class=\"col-sm-3 col-form-label\">Password<span class=\"mandatory\">*</span></label>\r\n\r\n        <div class=\"col-sm-9\">\r\n          <input type=\"password\" placeholder=\"123qwe#$\" id=\"password\" class=\"form-control\" required\r\n                  [(ngModel)]=\"password\" name=\"password\" #pass=\"ngModel\">\r\n          <div [hidden]=\"pass.valid || pass.pristine\" class=\"mt-2 alert alert-danger\">\r\n            Password required!!\r\n          </div>\r\n          <div class=\"invalid-feedback invalid-password\">\r\n            Please enter a valid password!!\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group row\">\r\n        <span class=\"col-sm-3\"></span>\r\n        <div class=\"col-sm-9 d-inline-block\">\r\n          <div class=\"py-1\">\r\n            <button type=\"button\" class=\"btn btn-success form-control\" id=\"login\"\r\n                    (click)=\"login(username,password);  form.reset();\" [disabled]=\"!form.form.valid\"\r\n            >Sign In</button>\r\n          </div>\r\n          <!--<div class=\"py-1 d-inline\">-->\r\n            <!--<a href=\"\" class=\"float-left forgot-pass\" data-toggle=\"modal\" data-target=\"#forgotPassword\">Forgot-->\r\n              <!--Password?</a>-->\r\n            <!--&lt;!&ndash;<a href=\"../register/register.template.client.html\" class=\"float-right\">Sign Up</a>&ndash;&gt;-->\r\n          <!--</div>-->\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <!-- Modal -->\r\n    <div class=\"modal fade\" id=\"forgotPassword\" tabindex=\"-1\" role=\"dialog\"\r\n         aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header \">\r\n            <h5 class=\"modal-title\" id=\"modalTitle\">Forgot Password</h5>\r\n\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n            <h6 id=\"modal-text\" class=\"py-2\">Enter valid Username and Email Id to Reset password</h6>\r\n            <form class=\"needs-validation\" novalidate>\r\n              <div class=\"form-group row\">\r\n                <label for=\"usernameVerify\" class=\"col-sm-2 col-form-label\">Username</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"text\" placeholder=\"Username\" id=\"usernameVerify\" class=\"form-control\"\r\n                         required>\r\n\r\n                  <div class=\"invalid-feedback invalid-username-verify\">\r\n                    Please enter a valid username!!\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group row\">\r\n                <label for=\"resetEmail\" class=\"col-sm-2 col-form-label\">Email</label>\r\n                <div class=\"col-sm-10\">\r\n                  <input type=\"email\" placeholder=\"abc@xyz.com\" id=\"resetEmail\" class=\"form-control\"\r\n                         required>\r\n\r\n                  <div class=\"invalid-feedback invalid-username-verify\">\r\n                    Please enter a valid email!!\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary close-modal\" data-dismiss=\"modal\">Close</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" id=\"sendEmail\">Send Email</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</section>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
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
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.badUserNamePass = false;
        this.verificationPending = false;
    }
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        this.userService
            .login(username, password)
            .then(function (obj) {
            if (obj.status === 'success') {
                if (obj.role === 'JobSeeker') {
                    _this.router.navigate(['profile-seeker']);
                }
                else if (obj.role === 'Admin') {
                    _this.router.navigate(['admin']);
                }
                else {
                    _this.router.navigate(['profile-recruiter']);
                }
                // if (user.username === 'admin') {
                //   this.router.navigate(['admin']);
                // } else if (user.username === 'faculty') {
                //   this.router.navigate(['faculty']);
                // } else {
                //   this.router.navigate(['profile']);
                // }
            }
            else if (obj.status === 'user does not exists') {
                _this.badUserNamePass = true;
                _this.verificationPending = false;
            }
            else {
                _this.badUserNamePass = false;
                _this.verificationPending = true;
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
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

module.exports = "<nav class=\"navbar navbar-expand-md  fixed-top navbar-dark bg-dark\">\r\n\r\n  <a class=\"navbar-brand \" href=\"#\"><i class=\"fa fa-bullhorn fa-4x\"></i></a>\r\n  <a class=\"navbar-brand \" href=\"#\"><h1 class=\"title\">Job Portal</h1></a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\"\r\n          aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"btn btn-outline-light font-weight-light ml-3\" [routerLinkActive]=\"['active']\" routerLink=\"/home\" >Home </a>\r\n        <!--<span class=\"sr-only\">(current)</span>-->\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"btn btn-outline-light font-weight-light ml-3\" [routerLinkActive]=\"['active']\"\r\n           routerLink=\"/job-list/{{' '}}/{{' '}}\">Jobs</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\">\r\n        <a [hidden]=\"!(user != null && user.role === 'JobSeeker')\" class=\"btn btn-outline-light\r\n        font-weight-light ml-3\"\r\n           [routerLinkActive]=\"['active']\" routerLink=\"/profile-seeker\" >Profile</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a [hidden]=\"!(user != null && user.role === 'Recruiter')\" class=\"btn btn-outline-light\r\n        font-weight-light ml-3\"\r\n           [routerLinkActive]=\"['active']\" routerLink=\"/profile-recruiter\" >Profile</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a [hidden]=\"!(user != null && user.role === 'JobSeeker')\" class=\"btn btn-outline-light\r\n        font-weight-light ml-3\"\r\n           [routerLinkActive]=\"['active']\" routerLink=\"/dashboard-seeker\" >Dashboard</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a [hidden]=\"!(user != null && user.role === 'Recruiter')\" class=\"btn btn-outline-light\r\n        font-weight-light ml-3\"\r\n           [routerLinkActive]=\"['active']\" routerLink=\"/dashboard-recruiter\" >Dashboard</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a [hidden]=\"!(user != null && user.role === 'Admin')\" class=\"btn btn-outline-light\r\n         font-weight-light ml-3\"\r\n           [routerLinkActive]=\"['active']\" routerLink=\"/admin\" >Admin</a>\r\n      </li>\r\n\r\n    </ul>\r\n    <form class=\"form-inline mt-2 mt-md-0\">\r\n      <!--<input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">-->\r\n      <button [hidden]=\"!(user === null)\" class=\"btn btn-outline-light\r\n       font-weight-light ml-3\" routerLink=\"/login\" [routerLinkActive]=\"['active']\"\r\n              type=\"button\">Login</button>\r\n\r\n      <h5 [hidden]=\"user===null\"class=\"text-light my-1 mr-1\"><i [hidden]=\"user===null\" class=\"fa fa-user text-light\"></i>\r\n        {{user!=null && user.username}}</h5>\r\n      <button [hidden]=\"user===null\" class=\"btn btn-outline-light\r\n       font-weight-light ml-3\" (click)=\"logout()\"\r\n              type=\"button\">Logout</button>\r\n      <button class=\"btn btn-outline-light\r\n      font-weight-light ml-3\" routerLink=\"/register\" [routerLinkActive]=\"['active']\"\r\n              type=\"button\">Sign Up</button>\r\n    </form>\r\n  </div>\r\n\r\n  <!--<div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">-->\r\n    <!--<ul class=\"navbar-nav mr-auto\">-->\r\n      <!--<li class=\"nav-item\">-->\r\n        <!--<a class=\"btn btn-outline-light font-weight-light ml-5\" [routerLinkActive]=\"['active']\" routerLink=\"/home\">Home</a>-->\r\n        <!--&lt;!&ndash;<span class=\"sr-only\">(current)</span>&ndash;&gt;-->\r\n      <!--</li>-->\r\n      <!--<li class=\"nav-item\">-->\r\n        <!--<a class=\"btn btn-outline-light font-weight-light ml-3\" [routerLinkActive]=\"['active']\" routerLink=\"/job-list/{{' '}}/{{' '}}\">Jobs</a>-->\r\n      <!--</li>-->\r\n    <!--</ul>-->\r\n    <!--<form class=\"form-inline mt-2 mt-md-0\">-->\r\n      <!--&lt;!&ndash;<input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">&ndash;&gt;-->\r\n      <!--<button class=\"btn btn-outline-light font-weight-light my-2 my-sm-0 mr-4\" routerLink=\"/login\" [routerLinkActive]=\"['active']\"-->\r\n              <!--type=\"button\">Login-->\r\n      <!--</button>-->\r\n      <!--<button class=\"btn btn-outline-light font-weight-light my-2 my-sm-0 mr-2\" [routerLinkActive]=\"['active']\" routerLink=\"/register\"-->\r\n              <!--type=\"button\">Sign Up-->\r\n      <!--</button>-->\r\n    <!--</form>-->\r\n  <!--</div>-->\r\n</nav>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
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
    function NavBarComponent(userService, router) {
        // this.router.events.subscribe(() => this.sessionCheck());
        this.userService = userService;
        this.router = router;
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.sessionCheck = function () {
        var _this = this;
        this.userService.findLoggedUser().then(function (user) { return _this.user = user; });
    };
    NavBarComponent.prototype.logout = function () {
        var _this = this;
        this.userService.logout().then(function () { return _this.router.navigate(['*']); })
            .then(function () {
            return _this.userService.findLoggedUser().then(function (user) { return _this.user = user; });
        });
    };
    NavBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/components/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/components/nav-bar/nav-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/components/personal-info/personal-info.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/personal-info/personal-info.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/personal-info/personal-info.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/personal-info/personal-info.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card rounded \">\r\n  <div class=\"card-header\">\r\n    <button class=\"btn btn-outline-primary rounded float-right\"\r\n            [disabled]=editMode\r\n            (click)=\"edit()\">\r\n      <i class=\"fas fa-pencil-alt\"></i></button>\r\n    <h3 [hidden]=\"editMode\"> Personal Information </h3>\r\n    <h3 [hidden]=\"!editMode\" style=\"color:orange\"> Update Personal Information </h3>\r\n  </div>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\" style=\"font-size: 24px;\" [hidden]=\"editMode\">\r\n      <!--<i class=\"float-right btn btn-light fas fa-angle-down\"></i>-->\r\n      <span style=\"font-weight: bold; font-size: 26px;\">\r\n        {{firstName}} {{lastName}}\r\n        <br/>\r\n      </span>\r\n      <span style=\"font-style: italic; color: grey;\">\r\n        <b>Username :</b> {{username}}\r\n      <br/>\r\n        <!--<b>Password :</b> {{password}}-->\r\n        <!--<br/>-->\r\n      </span>\r\n      <span>\r\n        <!--FirstName :-->\r\n        <!--<br/>-->\r\n        <!--LastName :-->\r\n        <!--<br/>-->\r\n        <i class=\"fas fa-envelope\"></i> {{email}}\r\n        <br/>\r\n        <i class=\"fas fa-phone\"></i>&nbsp;{{phone}}\r\n        <br/>\r\n        <hr/>\r\n        <!--<a href=\"#\"><i class=\"fab fa-facebook fa-2x\"></i></a> &nbsp;-->\r\n      </span>\r\n      <span>\r\n        <a href={{linkedin}} target=\"_blank\"><i class=\"fab fa-linkedin fa-2x\"></i></a> &nbsp;\r\n        <a href={{github}} target=\"_blank\"><i class=\"fab fa-github fa-2x\"></i></a> &nbsp;\r\n        <a href={{facebook}} target=\"_blank\"><i class=\"fab fa-facebook-square fa-2x\"></i></a> &nbsp;\r\n        <a href={{twitter}} target=\"_blank\"><i class=\"fab fa-twitter fa-2x\"></i></a> &nbsp;\r\n      </span>\r\n    </li>\r\n    <li class=\"list-group-item\" style=\"font-size: 24px;\" [hidden]=!editMode>\r\n      <form>\r\n        <div class=\"form-group row mx-2 mt-2\">\r\n\r\n          <!--Username-->\r\n          <label for=\"username\" class=\"text-center col-form-label\">\r\n            Username</label>\r\n          <input [ngModelOptions]=\"{standalone: true}\"\r\n                 [(ngModel)]=\"username\"\r\n                 id=\"username\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"Username\">\r\n\r\n          <!--&lt;!&ndash;Password&ndash;&gt;-->\r\n          <!--<label for=\"password\" class=\"text-center col-form-label\">-->\r\n            <!--Password</label>-->\r\n          <!--<input [ngModelOptions]=\"{standalone: true}\"-->\r\n                 <!--[(ngModel)]=\"password\"-->\r\n                 <!--id=\"password\"-->\r\n                 <!--class=\"form-control\"-->\r\n                 <!--placeholder=\"Password\"-->\r\n                 <!--disabled>-->\r\n\r\n          <!--First Name-->\r\n          <label for=\"firstname\" class=\"text-center col-form-label\">\r\n            First Name</label>\r\n          <input [ngModelOptions]=\"{standalone: true}\"\r\n                 [(ngModel)]=\"firstName\"\r\n                 id=\"firstname\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"First Name\">\r\n\r\n          <!--Last Name-->\r\n          <label for=\"lastname\" class=\"text-center col-form-label\">\r\n            Last Name</label>\r\n          <input [ngModelOptions]=\"{standalone: true}\"\r\n                 [(ngModel)]=\"lastName\"\r\n                 id=\"lastname\"\r\n                 class=\"form-control\"\r\n                 placeholder=\"Last Name\">\r\n\r\n          <!--email-->\r\n          <label for=\"email\" class=\"text-center col-form-label\">\r\n            Email</label>\r\n          <div class=\"input-group mb-2\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\">\r\n                <i class=\"fas fa-envelope\"></i>\r\n              </div>\r\n            </div>\r\n            <input [ngModelOptions]=\"{standalone: true}\"\r\n                   [(ngModel)]=\"email\"\r\n                   id=\"email\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"abc@xyz.com\">\r\n          </div>\r\n\r\n          <!--phone-->\r\n          <label for=\"phone\" class=\"text-center col-form-label\">\r\n            Phone</label>\r\n          <div class=\"input-group mb-2\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\">\r\n                <i class=\"fas fa-phone\"></i>\r\n              </div>\r\n            </div>\r\n            <input [ngModelOptions]=\"{standalone: true}\"\r\n                   [(ngModel)]=\"phone\"\r\n                   id=\"phone\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"(555) 111-2222\">\r\n          </div>\r\n\r\n          <!--Social contacts-->\r\n\r\n          <!--linkedin-->\r\n          <label class=\"text-center col-form-label\" for=\"in\">LinkedIn</label>\r\n          <div class=\"input-group mb-2\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\">\r\n                <i class=\"fab fa-linkedin\"></i>\r\n              </div>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" id=\"in\" placeholder=\"url\"\r\n                   [ngModelOptions]=\"{standalone: true}\"\r\n                   [(ngModel)]=\"linkedin\">\r\n          </div>\r\n\r\n          <!--github-->\r\n          <label class=\"text-center col-form-label\" for=\"github\">Github</label>\r\n          <div class=\"input-group mb-2\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\">\r\n                <i class=\"fab fa-github\"></i>\r\n              </div>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" id=\"github\" placeholder=\"url\"\r\n                   [ngModelOptions]=\"{standalone: true}\"\r\n                   [(ngModel)]=\"github\">\r\n          </div>\r\n\r\n          <!--twitter-->\r\n          <label class=\"text-center col-form-label\" for=\"tweet\">Twitter</label>\r\n          <div class=\"input-group mb-2\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\">\r\n                <i class=\"fab fa-twitter\"></i>\r\n              </div>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" id=\"tweet\" placeholder=\"url\"\r\n                   [ngModelOptions]=\"{standalone: true}\"\r\n                   [(ngModel)]=\"twitter\">\r\n          </div>\r\n\r\n          <!--Facebook-->\r\n          <label class=\"text-center col-form-label\" for=\"fb\">Facebook</label>\r\n          <div class=\"input-group mb-2\">\r\n            <div class=\"input-group-prepend\">\r\n              <div class=\"input-group-text\">\r\n                <i class=\"fab fa-facebook-square\"></i>\r\n              </div>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" id=\"fb\" placeholder=\"url\"\r\n                   [ngModelOptions]=\"{standalone: true}\"\r\n                   [(ngModel)]=\"facebook\">\r\n          </div>\r\n\r\n          <button id=\"createBtn\"\r\n                  class=\"btn btn-block mt-3\"\r\n                  style=\"color: white; background-color: orange\"\r\n                  (click)=\"update()\">\r\n            Update Info\r\n          </button>\r\n          <button id=\"cancelBtn\"\r\n                  class=\"btn btn-secondary btn-block mt-2\"\r\n                  (click)=\"cancel()\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/personal-info/personal-info.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/personal-info/personal-info.component.ts ***!
  \*********************************************************************/
/*! exports provided: PersonalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalInfoComponent", function() { return PersonalInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersonalInfoComponent = /** @class */ (function () {
    function PersonalInfoComponent(userService) {
        this.userService = userService;
        this.updateId = '';
        this.username = '';
        this.password = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.phone = '';
        this.facebook = '';
        this.linkedin = '';
        this.github = '';
        this.twitter = '';
        this.editMode = false;
    }
    PersonalInfoComponent.prototype.edit = function () {
        this.editMode = true;
    };
    PersonalInfoComponent.prototype.cancel = function () {
        this.editMode = false;
    };
    PersonalInfoComponent.prototype.update = function () {
        var social = [
            { 'socialtype': 'github', 'url': this.github },
            { 'socialtype': 'linkedin', 'url': this.linkedin },
            { 'socialtype': 'facebook', 'url': this.facebook },
            { 'socialtype': 'twitter', 'url': this.twitter }
        ];
        var updateduser = {
            'username': this.username,
            // 'password': this.password,
            'firstName': this.firstName,
            'lastName': this.lastName,
            'email': this.email,
            'phone': this.phone,
            'socialContact': social
        };
        // console.log('Update ID : ', this.updateId);
        // console.log('Update as : ', updateduser);
        this.editMode = false;
        this.userService.updateUserProfile(updateduser)
            .then(function (updatedUser) {
            console.log('Update success');
        });
    };
    PersonalInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.findLoggedUser()
            .then(function (user) {
            _this.user = user;
            if (user !== null) {
                if (user.firstName === undefined) {
                    _this.editMode = true;
                }
                _this.updateId = user._id;
                _this.username = user.username;
                _this.password = user.password;
                _this.firstName = user.firstName;
                _this.lastName = user.lastName;
                _this.email = user.email;
                _this.phone = user.phone;
                if (user.socialContact.length !== 0) {
                    _this.socialContact = user.socialContact;
                    _this.facebook = _this.socialContact.find(function (s) { return s.socialtype === 'facebook'; }).url;
                    _this.github = _this.socialContact.find(function (s) { return s.socialtype === 'github'; }).url;
                    _this.linkedin = _this.socialContact.find(function (s) { return s.socialtype === 'linkedin'; }).url;
                    _this.twitter = _this.socialContact.find(function (s) { return s.socialtype === 'twitter'; }).url;
                }
                console.log(_this.user);
            }
            else {
                console.log('User : null');
            }
        });
    };
    PersonalInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-personal-info',
            template: __webpack_require__(/*! ./personal-info.component.html */ "./src/app/components/personal-info/personal-info.component.html"),
            styles: [__webpack_require__(/*! ./personal-info.component.css */ "./src/app/components/personal-info/personal-info.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], PersonalInfoComponent);
    return PersonalInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/post-job/post-job.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/post-job/post-job.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainContainer{\r\n\r\n  background-image: url('joanna-kosinska-439234-unsplash.jpg');\r\n  /*background-size: 100% 20%;*/\r\n  background-size: contain;\r\n  height: 300px;\r\n}\r\n\r\n.container{\r\n  margin-top:50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/post-job/post-job.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/post-job/post-job.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<!--<div class=\"mainContainer pb-5\">-->\r\n  <!--<div class=\"h-25\"></div>-->\r\n  <!--<div class=\"bg-white bounceOutRight border container  p-5\">-->\r\n     <!--<div class=\"row\">-->\r\n    <!--<div class=\"col-sm-2 \">-->\r\n      <!--<img class=\"mt-3\" src=\"./../../../assets/images/paul-hanaoka-299941-unsplash.jpg\" width=\"120px\" height=\"140px\"/>-->\r\n    <!--</div>-->\r\n    <!--<div class=\"col-sm-10\">-->\r\n      <!--<i class=\"fa fa-2x fa-pencil float-right\" ></i>-->\r\n      <!--<h1 class=\"p-0\">Software Engineer</h1>-->\r\n\r\n      <!--<h3 class=\"text-muted\" >JP Morgan</h3>-->\r\n      <!--<small>Posted 2  days ago : 33 views</small> <br>-->\r\n      <!--<div class=\"d-inline-block mt-3\">-->\r\n        <!--<button class=\"btn btn-outline-primary mr-3\">Save</button>-->\r\n        <!--<button class=\"btn btn-primary\">Apply</button>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n  <!--</div>-->\r\n  <!--<div class=\"bg-white bounceOutRight border container mt-4 p-5 mb-4\">-->\r\n    <!--<div class=\"row\">-->\r\n      <!--<div class=\"col-sm-8\">-->\r\n        <!--<h2>Job Description</h2>-->\r\n        <!--<p class=\"text-left\"> Lorem Ipsum L Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum-->\r\n          <!--orem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum-->\r\n          <!--Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum-->\r\n          <!--Lorem Ipsum Lorem Ipsum</p>-->\r\n        <!--<br>-->\r\n        <!--<br>-->\r\n        <!--<h4 >Key Responsibilty</h4>-->\r\n        <!--<ul class=\"mt-4\">-->\r\n          <!--<li>-->\r\n            <!--<p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>-->\r\n          <!--</li>-->\r\n          <!--<li>-->\r\n            <!--<p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>-->\r\n          <!--</li>-->\r\n          <!--<li>-->\r\n            <!--<p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>-->\r\n          <!--</li>-->\r\n          <!--<li>-->\r\n            <!--<p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>-->\r\n          <!--</li>-->\r\n        <!--</ul>-->\r\n        <!--<br>-->\r\n        <!--<br>-->\r\n        <!--<h4 >Requirements</h4>-->\r\n        <!--<ul class=\"mt-4\">-->\r\n          <!--<li>-->\r\n            <!--<p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>-->\r\n          <!--</li>-->\r\n          <!--<li>-->\r\n            <!--<p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>-->\r\n          <!--</li>-->\r\n          <!--<li>-->\r\n            <!--<p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>-->\r\n          <!--</li>-->\r\n          <!--<li>-->\r\n            <!--<p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>-->\r\n          <!--</li>-->\r\n        <!--</ul>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"col-sm-4 pr-3\">-->\r\n        <!--<i class=\"fa fa-2x fa-pencil float-right\"></i>-->\r\n         <!--<h5 class=\"mt-3\">Seniority Level</h5>-->\r\n          <!--<h6 class=\"text-muted\">Mid-Senior Level</h6>-->\r\n         <!--<h5 class=\"mt-3\">Industry</h5>-->\r\n        <!--<h6 class=\"text-muted\">Banking</h6>-->\r\n        <!--<h5 class=\"mt-3\">Employment Type</h5>-->\r\n        <!--<h6 class=\"text-muted\">Banking</h6>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n\r\n\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/app/components/post-job/post-job.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/post-job/post-job.component.ts ***!
  \***********************************************************/
/*! exports provided: PostJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostJobComponent", function() { return PostJobComponent; });
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

var PostJobComponent = /** @class */ (function () {
    function PostJobComponent() {
    }
    PostJobComponent.prototype.ngOnInit = function () {
    };
    PostJobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-job',
            template: __webpack_require__(/*! ./post-job.component.html */ "./src/app/components/post-job/post-job.component.html"),
            styles: [__webpack_require__(/*! ./post-job.component.css */ "./src/app/components/post-job/post-job.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostJobComponent);
    return PostJobComponent;
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

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"mt-3 ml-4\">\r\n      <app-user-sidebar></app-user-sidebar>\r\n    </div>\r\n    <div class=\"col bg-light\">\r\n      <!--<h2  class=\"text text-center\" style=\"color: dimgrey;\"> User Profile</h2>-->\r\n      <div class=\" ml-4 mt-0 mb-5\">\r\n        <ul class=\"list-group border-0 mb-2\">\r\n          <li class=\"list-group-item border-0 \">\r\n            <app-personal-info></app-personal-info>\r\n          </li>\r\n          <li class=\"list-group-item border-0 \">\r\n            <app-experience-list></app-experience-list>\r\n          </li>\r\n          <li class=\"list-group-item border-0 mb-4\">\r\n            <app-education-list></app-education-list>\r\n          </li>\r\n          <!--<li class=\"list-group-item border-0 \">-->\r\n            <!--<app-skill-list></app-skill-list>-->\r\n          <!--</li>-->\r\n          <!--<li class=\"list-group-item border-0 mb-4\">-->\r\n            <!--<app-project-list></app-project-list>-->\r\n          <!--</li>-->\r\n          <!--<li class=\"list-group-item border-0 \">-->\r\n            <!--<app-award-list></app-award-list>-->\r\n          <!--</li>-->\r\n          <!--<li class=\"list-group-item border-0 \">-->\r\n            <!--<app-certificate-list></app-certificate-list>-->\r\n          <!--</li>-->\r\n          <!--<li class=\"list-group-item border-0 mb-5\">-->\r\n            <!--<app-extra-curricular-list></app-extra-curricular-list>-->\r\n          <!--</li>-->\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

/***/ "./src/app/components/project-list/project-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/project-list/project-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/project-list/project-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/project-list/project-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card rounded shadow\">\r\n  <div class=\"card-header\">\r\n    <button class=\"btn btn-outline-primary rounded float-right\"><i class=\"fas fa-plus\"></i></button>\r\n    <h3> Projects </h3>\r\n  </div>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">\r\n      <i class=\"float-right btn btn-light fas fa-angle-down\"></i>\r\n      Project 1\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      <i class=\"float-right btn btn-light fas fa-angle-down\"></i>\r\n      Project 2\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      <i class=\"float-right btn btn-light fas fa-angle-down\"></i>\r\n      Project 3\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      <i class=\"float-right btn btn-light fas fa-angle-down\"></i>\r\n      Project 4\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      <i class=\"float-right btn btn-light fas fa-angle-down\"></i>\r\n      Project 5\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/project-list/project-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/project-list/project-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function() { return ProjectListComponent; });
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

var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent() {
    }
    ProjectListComponent.prototype.ngOnInit = function () {
    };
    ProjectListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-list',
            template: __webpack_require__(/*! ./project-list.component.html */ "./src/app/components/project-list/project-list.component.html"),
            styles: [__webpack_require__(/*! ./project-list.component.css */ "./src/app/components/project-list/project-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectListComponent);
    return ProjectListComponent;
}());



/***/ }),

/***/ "./src/app/components/recruiter-dashboard/recruiter-dashboard.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/recruiter-dashboard/recruiter-dashboard.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/recruiter-dashboard/recruiter-dashboard.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/recruiter-dashboard/recruiter-dashboard.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <!-- Button trigger modal -->\r\n  <button type=\"button\" class=\"btn btn-lg btn-outline-primary shadow\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\r\n    Add new Job\r\n  </button>\r\n\r\n  <!-- Modal -->\r\n  <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Add new Job</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <!--Job Title-->\r\n          <input\r\n            class=\"form-control mb-2\"\r\n            placeholder=\"Job Title\">\r\n\r\n          <!--Company-->\r\n          <input\r\n            class=\"form-control mb-2\"\r\n            placeholder=\"Company\">\r\n\r\n          <!--Location-->\r\n          <input\r\n            class=\"form-control mb-2\"\r\n            placeholder=\"Location\">\r\n\r\n          <!-- Date Posted -->\r\n          <label for=\"dateposted\" class=\"text-center col-form-label\">\r\n            Date Posted</label>\r\n          <input type=\"date\"\r\n                 id=\"dateposted\"\r\n                 class=\"form-control\">\r\n\r\n          <hr>\r\n\r\n          <h5 style=\"color:dimgrey;\">Add more job details</h5>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"inputState\">Job Type</label>\r\n            <select id=\"inputState\" class=\"form-control\">\r\n              <option disabled>Choose one...</option>\r\n              <option value=\"Fulltime\">Fulltime</option>\r\n              <option value=\"Contract\">Contract</option>\r\n              <option value=\"Internship\">Internship</option>\r\n              <option value=\"Coop\">Coop</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"status\">Status</label>\r\n            <select id=\"status\" class=\"form-control\">\r\n              <option disabled>Choose one...</option>\r\n              <option value=\"Fulltime\">Positions open</option>\r\n              <option value=\"Contract\">Closed</option>\r\n            </select>\r\n          </div>\r\n\r\n          <!--Dates-->\r\n\r\n          <div class=\"form-group row mt-2\">\r\n            <div class=\"col\">\r\n              <label class=\"text-center col-form-label\">\r\n                Start Date </label>\r\n              <select class=\"form-control\">\r\n                <option *ngFor=\"let month of months\">{{month}}</option>\r\n              </select>\r\n              <select class=\"form-control mt-3\">\r\n                <option *ngFor=\"let year of years\">{{year}}</option>\r\n              </select>\r\n            </div>\r\n\r\n            <div class=\"col\">\r\n              <label class=\"text-center col-form-label\">\r\n                End Date </label>\r\n              <select class=\"form-control\">\r\n                <option *ngFor=\"let month of months\">{{month}}</option>\r\n              </select>\r\n              <select class=\"form-control mt-3\">\r\n                <option *ngFor=\"let year of years\">{{year}}</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n\r\n          <!--Add Responsibilities-->\r\n          <button class=\"btn btn-block btn-outline-primary\"\r\n                  (click)=\"addResponsibility()\">\r\n            <i class=\"fas fa-plus\"></i>&nbsp;Add Responsibilities</button>\r\n          <input type=\"text\"\r\n                 class=\"form-control my-2\"\r\n                 placeholder=\"Add a responsibility bullet ...\"\r\n                 *ngFor=\"let res of responsibilities\">\r\n\r\n          <!--Add Minimum Qualification Required-->\r\n          <button class=\"btn btn-block btn-outline-primary\"\r\n                  (click)=\"addMinQualifications()\">\r\n            <i class=\"fas fa-plus\"></i>&nbsp;Add Minimum Qualifications</button>\r\n          <input type=\"text\"\r\n                 class=\"form-control my-2\"\r\n                 placeholder=\"Add a qualifiaction needed for the job position ...\"\r\n                 *ngFor=\"let qualification of minQualification\">\r\n\r\n          <!--Add Skills Required-->\r\n          <button class=\"btn btn-block btn-outline-primary\"\r\n                  (click)=\"addRequiredSkills()\">\r\n            <i class=\"fas fa-plus\"></i>&nbsp;Add Required Skills</button>\r\n          <input type=\"text\"\r\n                 class=\"form-control my-2\"\r\n                 placeholder=\"Add a skill required for the job ...\"\r\n                 *ngFor=\"let skill of skillsRequired\">\r\n        </div>\r\n        <div class=\"py-3\">\r\n          <hr>\r\n          <button type=\"button\" class=\"btn btn-primary float-left ml-3\">Save Job </button>\r\n          <button type=\"button\" class=\"btn btn-secondary float-right mr-3\" data-dismiss=\"modal\">\r\n            &nbsp;Cancel&nbsp;\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/recruiter-dashboard/recruiter-dashboard.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/recruiter-dashboard/recruiter-dashboard.component.ts ***!
  \*********************************************************************************/
/*! exports provided: RecruiterDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecruiterDashboardComponent", function() { return RecruiterDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_job_listing_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/job-listing.service */ "./src/app/services/job-listing.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_save_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/save-job.service */ "./src/app/services/save-job.service.ts");
/* harmony import */ var _models_Job__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/Job */ "./src/app/models/Job.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RecruiterDashboardComponent = /** @class */ (function () {
    function RecruiterDashboardComponent(jobService, route, saveJobService) {
        var _this = this;
        this.jobService = jobService;
        this.route = route;
        this.saveJobService = saveJobService;
        this.job = new _models_Job__WEBPACK_IMPORTED_MODULE_4__["Job"]();
        this.skillsRequired = [];
        this.responsibilities = [];
        this.minQualification = [];
        this.months = [
            'Month',
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        this.years = [
            'Year',
            '2005',
            '2006',
            '2007',
            '2008',
            '2009',
            '2010',
            '2011',
            '2012',
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018'
        ];
        this.route.params.subscribe(function (param) {
            _this.jobId = param['jobId'];
        });
        console.log(this.jobId);
        if (this.jobId != null) {
            this.jobService.findAllJobs().then(function (jobs) {
                for (var j in jobs) {
                    if (jobs[j].id === _this.jobId) {
                        var d = new Date(jobs[j].created_at);
                        _this.job = jobs[j];
                        _this.job.created_at = d.toDateString();
                    }
                }
            });
            console.log(this.job);
        }
    }
    RecruiterDashboardComponent.prototype.saveJobId = function (id) {
    };
    RecruiterDashboardComponent.prototype.addResponsibility = function () {
        this.responsibilities.push('');
        console.log('No. of Reponsibilities : ', this.responsibilities.length);
    };
    RecruiterDashboardComponent.prototype.addMinQualifications = function () {
        this.minQualification.push('');
        console.log('No. of Qualifications : ', this.minQualification.length);
    };
    RecruiterDashboardComponent.prototype.addRequiredSkills = function () {
        this.skillsRequired.push('');
        console.log('No. of Required Skills: ', this.skillsRequired.length);
    };
    RecruiterDashboardComponent.prototype.ngOnInit = function () {
    };
    RecruiterDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recruiter-dashboard',
            template: __webpack_require__(/*! ./recruiter-dashboard.component.html */ "./src/app/components/recruiter-dashboard/recruiter-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./recruiter-dashboard.component.css */ "./src/app/components/recruiter-dashboard/recruiter-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_job_listing_service__WEBPACK_IMPORTED_MODULE_1__["JobListingService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_save_job_service__WEBPACK_IMPORTED_MODULE_3__["SaveJobService"]])
    ], RecruiterDashboardComponent);
    return RecruiterDashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.mandatory{\r\n  color:red;\r\n}\r\n\r\n.needs-validation {\r\n  width: 100%;\r\n  max-width: 1200px;\r\n  padding: 60px;\r\n  margin: auto;\r\n  font-family: \"Bookman Old Style\";\r\n  background-color: rgba(15, 15, 15 ,0.6);\r\n\r\n}\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n  border-left: 5px solid #42A948; /* green */\r\n}\r\n\r\n.ng-invalid:not(form)  {\r\n  border-left: 5px solid #a94442; /* red */\r\n}\r\n\r\n.background-pic{\r\n  background-image: url('paul-hanaoka-299941-unsplash.jpg');\r\n  background-size: cover;\r\n  font-family: SansSerif;\r\n  font-size: 1.3rem;\r\n  height:100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"rounded bg-light p-5 background-pic text-light\">\r\n\r\n  <form class=\"needs-validation\" #form=\"ngForm\">\r\n\r\n    <!--<div class=\"alert alert-success\" role=\"alert\">-->\r\n    <!--<strong>User registered successfully!!</strong>-->\r\n    <!--</div>-->\r\n    <div class=\"alert alert-danger\" [hidden]=\"!usernameExists\">\r\n      Username already exists user another one !\r\n    </div>\r\n    <div class=\"alert alert-success\" [hidden]=\"!successMsg\">\r\n      User Registered under Recruiter Role. Please wait until verification complete. You will get notification\r\n      on the registered email within 24 hours !!\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"username\" class=\"col-sm-3 col-form-label\">Username<span class=\"mandatory\">*</span></label>\r\n\r\n      <div class=\"col-sm-9\">\r\n        <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" placeholder=\"Username\"\r\n               id=\"username\" class=\"form-control\" required #userName=\"ngModel\">\r\n        <div [hidden]=\"userName.valid || userName.pristine\" class=\"mt-2 alert alert-danger\">\r\n          Username required!!\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"form-group row\">\r\n      <label for=\"password\" class=\"col-sm-3 col-form-label\">Password<span class=\"mandatory\">*</span></label>\r\n\r\n      <div class=\"col-sm-9\">\r\n        <input type=\"password\" placeholder=\"123qwe#$\" [(ngModel)]=\"password\" name=\"password\"\r\n               id=\"password\" class=\"form-control\" required #pass=\"ngModel\">\r\n        <div [hidden]=\"pass.valid || pass.pristine\" class=\"mt-2 alert alert-danger\">\r\n          Password required!!\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"form-group row\">\r\n      <label for=\"verifypass\" class=\"col-sm-3 col-form-label\">Verify Password<span class=\"mandatory\">*</span></label>\r\n\r\n      <div class=\"col-sm-9\">\r\n        <input type=\"password\" placeholder=\"123qwe#$\" id=\"verifypass\"\r\n               [(ngModel)]=\"verifyPassword\" name=\"verifyPassword\" class=\"form-control\" [pattern]=\"password\" required\r\n               #vPass=\"ngModel\">\r\n        <div [hidden]=\"vPass.valid || vPass.pristine\" class=\"mt-2 alert alert-danger\">\r\n          Password do not match!!\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\">\r\n\r\n      <label for=\"inlineRadio1\" class=\"col-sm-3 col-form-label\">Role<span class=\"mandatory\">*</span></label>\r\n\r\n      <div class=\"col-sm-9\">\r\n        <div class=\"form-check form-check-inline bg-light text-dark rounded py-2 px-3\">\r\n          <input class=\"form-check-input \" type=\"radio\" name=\"role\"\r\n                 id=\"inlineRadio1\" [(ngModel)]=\"role\" value=\"JobSeeker\">\r\n          <label class=\"form-check-label\" for=\"inlineRadio1\">JobSeeker</label>\r\n        </div>\r\n        <div class=\"form-check form-check-inline bg-light text-dark rounded ml-2 py-2 px-3\">\r\n          <input class=\"form-check-input\" type=\"radio\" name=\"role\"\r\n                 id=\"inlineRadio2\" [(ngModel)]=\"role\" value=\"Recruiter\">\r\n          <label class=\"form-check-label\" for=\"inlineRadio1\">Recruiter</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group row\" [hidden]=\"role==='JobSeeker'\">\r\n      <label for=\"email\" class=\"col-sm-3 col-form-label \">Email<span class=\"mandatory\">*</span></label>\r\n      <div class=\"col-sm-9\">\r\n        <input type=\"email\" placeholder=\"abc@xyz.com\" email=\"true\" [(ngModel)]=\"email\"\r\n               id=\"email\" name=\"email\" class=\"form-control\" #emailId=\"ngModel\" [required]=\"role !== 'JobSeeker'\" >\r\n        <div [hidden]=\"emailId.valid || emailId.pristine\" class=\"mt-2 alert alert-danger\">\r\n          Please enter a valid email!!\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group row\">\r\n      <span class=\"col-sm-3\"></span>\r\n      <div class=\"col-sm-9 d-inline-block\">\r\n        <div class=\"py-1\">\r\n          <button type=\"button\" (click)=\"register(username, password, role, email ); form.reset(); \"\r\n                  [disabled]=\"!form.form.valid\"\r\n                  class=\"btn btn-success form-control\" id=\"signup\">Sign Up\r\n          </button>\r\n        </div>\r\n        <!--<div class=\"py-1\">-->\r\n        <!--<a href=\"../login/login.template.client.html\">Login</a>-->\r\n        <!--</div>-->\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service) {
        this.router = router;
        this.service = service;
        this.role = 'JobSeeker';
        this.usernameExists = false;
        this.successMsg = false;
    }
    RegisterComponent.prototype.register = function (username, password, role, email) {
        var _this = this;
        var user;
        if (role === 'Recruiter') {
            user = { username: username, password: password, role: role, email: email };
        }
        else {
            user = { username: username, password: password, role: role };
        }
        this.service
            .register(user)
            .then(function (res) {
            if (res.status === true) {
                if (role === 'JobSeeker') {
                    _this.router.navigate(['profile-seeker']);
                }
                else {
                    _this.successMsg = true;
                    _this.usernameExists = false;
                    _this.role = 'JobSeeker';
                }
            }
            else {
                _this.usernameExists = true;
                _this.role = 'JobSeeker';
                _this.successMsg = false;
            }
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/skill-list/skill-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/skill-list/skill-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/skill-list/skill-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/skill-list/skill-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card rounded shadow\">\r\n  <div class=\"card-header\">\r\n    <button class=\"btn btn-outline-primary rounded float-right\"><i class=\"fas fa-plus\"></i></button>\r\n    <h3> Skills </h3>\r\n  </div>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">\r\n      <i class=\"float-right btn btn-light fas fa-angle-down\"></i>\r\n      skill 1\r\n    </li>\r\n    <li class=\"list-group-item\">\r\n      <i class=\"float-right btn btn-light fas fa-angle-down\"></i>\r\n      Skill 2\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/skill-list/skill-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/skill-list/skill-list.component.ts ***!
  \***************************************************************/
/*! exports provided: SkillListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillListComponent", function() { return SkillListComponent; });
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

var SkillListComponent = /** @class */ (function () {
    function SkillListComponent() {
    }
    SkillListComponent.prototype.ngOnInit = function () {
    };
    SkillListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skill-list',
            template: __webpack_require__(/*! ./skill-list.component.html */ "./src/app/components/skill-list/skill-list.component.html"),
            styles: [__webpack_require__(/*! ./skill-list.component.css */ "./src/app/components/skill-list/skill-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SkillListComponent);
    return SkillListComponent;
}());



/***/ }),

/***/ "./src/app/components/user-sidebar/user-sidebar.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-sidebar/user-sidebar.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-sidebar/user-sidebar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-sidebar/user-sidebar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group border rounded shadow bg-light\" [hidden] = editMode>\r\n  <li class=\"list-group-item border border-light mt-2 bg-light\">\r\n\r\n    <img src=\"../../assets/images/displayPic/dp.jpg\" class=\"rounded\"\r\n         alt=\"profile picture\" width=\"250px\">\r\n    <!--<button class=\"btn btn-primary rounded btn-block\">-->\r\n      <!--<i class=\"fa fa-pencil\"></i>-->\r\n    <!--</button>-->\r\n  </li>\r\n  <li class=\"list-group-item border border-light mt-0 mb-0 py-1 bg-light\">\r\n      <!--<input type=\"file\" class=\"form-control-file\" id=\"exampleFormControlFile1\">-->\r\n    <form ngNoForm action=\"https://job-portal-server.herokuapp.com/api/upload\"\r\n          method=\"post\"\r\n          enctype=\"multipart/form-data\">\r\n      <input name=\"myFile\"\r\n             type=\"file\"\r\n             class=\"form-control\"/>\r\n      <button type=\"submit\"\r\n              class=\"btn btn-block btn-primary mt-2\">\r\n        Upload Image\r\n      </button>\r\n    </form>\r\n\r\n  </li>\r\n\r\n  <li class=\"list-group-item border border-light bg-light\">\r\n    <span style=\"font-size: 25px; font-weight: bold;\">{{firstName}} {{lastName}} </span>\r\n  </li>\r\n  <li class=\"list-group-item border border-light mt-1 py-1 bg-light\" ([ngModel])=tagline>\r\n    <pre\r\n      class=\"mx-0 my-0\" style=\"white-space: pre-line; font-size: 22px; color:grey;\">\r\n      {{tagline}}\r\n      </pre>\r\n  </li>\r\n  <li class=\"list-group-item border border-light mt-1 mb-2 bg-light\">\r\n    <button class=\"btn btn-primary rounded btn-block\" (click)=\"editBio()\">\r\n      Edit Bio\r\n    </button>\r\n  </li>\r\n  <!--<li class=\"list-group-item border border-white mt-0 py-0 mb-0\">-->\r\n  <!--<hr/>-->\r\n  <!--</li>-->\r\n  <!--<li class=\"list-group-item border border-white mt-1 py-1\">-->\r\n  <!--<pre class=\"mx-0 my-0\" style=\"white-space: pre-line; font-size: 18px; color:grey;\"><i class=\"fas fa-map-marker-alt\"></i>&nbsp;Boston, MA-->\r\n  <!--<i class=\"fas fa-envelope\"></i>&nbsp;tyagi.k@husky.neu.edu-->\r\n  <!--</pre>-->\r\n  <!--</li>-->\r\n</ul>\r\n\r\n<ul class=\"list-group border rounded shadow bg-light\"\r\n    [hidden]=\"!editMode\">\r\n  <li class=\"list-group-item border border-light mt-2 bg-light\">\r\n    <img src=\"../../assets/images/displayPic/dp.jpg\" class=\"rounded\"\r\n         alt=\"profile picture\" width=\"250px\">\r\n  </li>\r\n  <li class=\"list-group-item border border-light mt-2 mb-0 py-1 bg-light\">\r\n    <span style=\"font-size: 25px; font-weight: bold\">{{user}} </span>\r\n  </li>\r\n  <li class=\"list-group-item border border-light mt-1 py-1 bg-light\">\r\n      <textarea class=\"mx-0 my-0\" rows=\"5\" cols=\"31\"\r\n                [ngModelOptions]=\"{standalone: true}\"\r\n                [(ngModel)]=\"tagline\"\r\n                placeholder = \"Add Bio\">\r\n      </textarea>\r\n  </li>\r\n  <li class=\"list-group-item border border-light mt-1 mb-2 bg-light\">\r\n    <button class=\"btn btn-success rounded\" (click)=\"saveBio()\">\r\n      &nbsp;Save&nbsp;\r\n    </button>\r\n    <button class=\"btn btn-grey rounded ml-2\" (click)=\"cancel()\">\r\n      Cancel\r\n    </button>\r\n  </li>\r\n</ul>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/user-sidebar/user-sidebar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-sidebar/user-sidebar.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSidebarComponent", function() { return UserSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserSidebarComponent = /** @class */ (function () {
    function UserSidebarComponent(userService) {
        this.userService = userService;
        this.editMode = false;
        this.uploadPicture = true;
        this.firstName = 'firstName';
        this.lastName = 'lastName';
        // tagline = '🎓 CS Grad Northeastern,\n' +
        //   '        University\n' +
        //   '        📌 Actively seeking co-op/\n' +
        //   '        internship starting Jan 2019';
        this.tagline = ' 📑 Add a bio !';
    }
    UserSidebarComponent.prototype.editBio = function () {
        this.editMode = true;
    };
    UserSidebarComponent.prototype.saveBio = function () {
        console.log('New Bio : ', this.tagline);
        var updateduser = {
            'tagline': this.tagline,
        };
        this.editMode = false;
        this.userService.updateUserProfile(updateduser)
            .then(function (updatedUser) {
            console.log('Update success');
        });
    };
    UserSidebarComponent.prototype.cancel = function () {
        this.editMode = false;
    };
    UserSidebarComponent.prototype.isDefined = function () {
        if (this.tagline === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    UserSidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.findLoggedUser()
            .then(function (user) {
            _this.user = user;
            if (user !== null) {
                console.log('Bio : ', _this.tagline);
                if (user.tagline !== undefined) {
                    _this.tagline = user.tagline;
                }
                if (user.firstName !== undefined) {
                    _this.firstName = user.firstName;
                }
                if (user.lastName !== undefined) {
                    _this.lastName = user.lastName;
                }
            }
        });
    };
    UserSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-sidebar',
            template: __webpack_require__(/*! ./user-sidebar.component.html */ "./src/app/components/user-sidebar/user-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./user-sidebar.component.css */ "./src/app/components/user-sidebar/user-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], UserSidebarComponent);
    return UserSidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/view-job/view-job.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/view-job/view-job.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/*.background-pic {*/\r\n  /*background-image: url('./../../../assets/images/paul-hanaoka-299941-unsplash.jpg');*/\r\n  /*background-size: contain;*/\r\n  /*}*/\r\n  /*.heading {*/\r\n  /*font-family: \"Bookman Old Style\";*/\r\n  /*background-color: rgba(15, 15, 15 ,0.6);*/\r\n  /*}*/\r\n  .mainContainer{\r\n\r\n  background-image: url('joanna-kosinska-439234-unsplash.jpg');\r\n  /*background-size: 100% 20%;*/\r\n  background-size: contain;\r\n  height: 300px;\r\n}\r\n  .container{\r\n  margin-top:50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/view-job/view-job.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/view-job/view-job.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"rounded bg-light p-5 background-pic\">-->\r\n  <!--<div class=\"row\">-->\r\n    <!--<div class=\"col\">-->\r\n      <!--<h1 class=\"text-center text-light-->\r\n       <!--rounded shadow p-2 mb-4 heading\">-->\r\n        <!--{{job.title}}-->\r\n      <!--</h1>-->\r\n\r\n\r\n      <!--<div class=\"card shadow rounded my-3\">-->\r\n        <!--<div class=\"card-body\">-->\r\n          <!--<img src={{job.company_logo}} alt=\"logo\" width=\"85px\" height=\"85px\" class=\"float-right\"/>-->\r\n          <!--<b>Position : </b>{{job.title}} <br>-->\r\n          <!--<b>Company : </b><a href={{job.company_url}} class=\"card-link\">{{job.company}}</a> <br/>-->\r\n          <!--<b>Location : </b>{{job.location}}-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n\r\n      <!--<div class=\"card shadow rounded my-3\">-->\r\n        <!--<div class=\"card-body\">-->\r\n          <!--<b>Description</b><br>-->\r\n          <!--{{job.description}}-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n\r\n      <!--<div class=\"card shadow rounded my-3 \" >-->\r\n        <!--<div class=\"card-body\">-->\r\n          <!--<b>How to Apply ?</b> <br>-->\r\n          <!--{{job.how_to_apply}}-->\r\n          <!--<br/>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n\r\n      <!--<div class=\"my-3\">-->\r\n        <!--<form class=\"form-inline pb-3\">-->\r\n          <!--<button class=\"btn btn-primary font-weight-bold mr-3 shadow\" type=\"submit\">-->\r\n            <!--Bookmark&nbsp;&nbsp;<i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i></button>-->\r\n          <!--<button class=\"btn btn-primary font-weight-bold mr-3 shadow\" type=\"submit\">-->\r\n            <!--Apply-->\r\n          <!--</button>-->\r\n        <!--</form>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n\r\n\r\n<!--</div>-->\r\n\r\n<div class=\"mainContainer pb-5\">\r\n  <div class=\"h-25\"></div>\r\n  <div class=\"bg-white bounceOutRight border container  p-5\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-2 \">\r\n        <img class=\"mt-3\" alt=\"Image not found\" src=\"{{job.company_logo}}\" width=\"120px\" height=\"140px\"/>\r\n      </div>\r\n      <div class=\"col-sm-10\">\r\n        <i class=\"fa fa-2x fa-pencil float-right\" ></i>\r\n        <h1 class=\"p-0\">{{job.title}}</h1>\r\n\r\n        <h3 class=\"text-muted\" >{{job.company}} | {{job.location}} </h3>\r\n        <small>Posted : {{job.created_at}}</small> <br>\r\n        <div class=\"d-inline-block mt-3\">\r\n          <!--{{user.role}}-->\r\n          <button [ngClass]=\"{ 'disabled': !(user != null && user.role === 'JobSeeker')}\"\r\n                  [disabled]=\"!(user!=null && user.role === 'JobSeeker') \" [hidden]=\"alreadySavedCheck || alreadyAppliedCheck\"\r\n                  class=\"btn btn-outline-primary mr-3\" (click)=\"saveJobId(job)\">Save</button>\r\n          <button [ngClass]=\"{ 'disabled': !(user != null && user.role === 'JobSeeker')}\"\r\n                  [disabled]=\"!(user!=null && user.role === 'JobSeeker')\" [hidden]=\"!alreadySavedCheck || alreadyAppliedCheck\"\r\n                  class=\"btn btn-outline-primary mr-3\" (click)=\"deleteJobId(job)\">UnSave</button>\r\n          <a [ngClass]=\"{ 'disabled': !(user != null && user.role === 'JobSeeker')}\"\r\n             class=\"btn  btn-primary\" (click)=\"applyJob(job);\"  [hidden]=\"alreadyAppliedCheck\" >Apply</a>\r\n          <div class=\"btn btn-primary disabled\" [hidden]=\"!alreadyAppliedCheck\">Applied</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bg-white bounceOutRight border container mt-4 p-5 mb-4\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-8\" [innerHTML]=\"job.description\" [hidden]=\"job.jobSource!='github'\"></div>\r\n      <div class=\"col-sm-8\" [innerHTML]=\"job.description\" [hidden]=\"job.jobSource=='github'\">\r\n        <h2>Job Description</h2>\r\n        <p class=\"text-left\">{{job.description}}</p>\r\n        <br>\r\n        <br>\r\n        <h4 >Key Responsibilty</h4>\r\n        <ul class=\"mt-4\">\r\n          <li>\r\n            <p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>\r\n          </li>\r\n          <li>\r\n            <p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>\r\n          </li>\r\n          <li>\r\n            <p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>\r\n          </li>\r\n          <li>\r\n            <p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>\r\n          </li>\r\n        </ul>\r\n        <br>\r\n        <br>\r\n        <h4 >Requirements</h4>\r\n        <ul class=\"mt-4\">\r\n          <li>\r\n            <p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>\r\n          </li>\r\n          <li>\r\n            <p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>\r\n          </li>\r\n          <li>\r\n            <p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>\r\n          </li>\r\n          <li>\r\n            <p>Lorem ipsun Lorem ipsunLorem ipsunLorem ipsunLorem ipsun</p>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"col-sm-4 pr-3\">\r\n        <i class=\"fa fa-2x fa-pencil float-right\"></i>\r\n        <h5 class=\"mt-3\">Seniority Level</h5>\r\n        <h6 class=\"text-muted\">{{job.title}}</h6>\r\n        <h5 class=\"mt-3\">Industry</h5>\r\n        <h6 class=\"text-muted\">{{job.title}}</h6>\r\n        <h5 class=\"mt-3\">Employment Type</h5>\r\n        <h6 class=\"text-muted\">{{job.type}}</h6>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _services_job_listing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/job-listing.service */ "./src/app/services/job-listing.service.ts");
/* harmony import */ var _services_save_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/save-job.service */ "./src/app/services/save-job.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_job_posting_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/job-posting.service */ "./src/app/services/job-posting.service.ts");
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
    function ViewJobComponent(jobService, route, saveJobService, userService, jobPosting) {
        var _this = this;
        this.jobService = jobService;
        this.route = route;
        this.saveJobService = saveJobService;
        this.userService = userService;
        this.jobPosting = jobPosting;
        this.job = new _models_Job__WEBPACK_IMPORTED_MODULE_1__["Job"]();
        this.user = null;
        this.jobApplications = [];
        this.alreadySavedCheck = false;
        this.alreadyAppliedCheck = false;
        this.postings = [];
        this.route.params.subscribe(function (param) {
            var detail = param['jobId'].split('|');
            _this.jobId = detail[0];
            _this.jobSource = detail[1];
        });
        if (this.jobId != null) {
            this.jobService.findAllJobs().then(function (jobs) {
                for (var j in jobs) {
                    if (jobs[j].id === _this.jobId) {
                        var d = new Date(jobs[j].created_at);
                        _this.job = jobs[j];
                        _this.job.jobSource = _this.jobSource;
                        _this.job.created_at = d.toDateString();
                    }
                }
                // console.log(this.job);
            }).then(function () { return jobPosting.getAllJobPostings().then(function (postings) {
                console.log(postings);
                _this.postings = postings;
                _this.postings.forEach(function (posting) {
                    if (posting._id === _this.jobId) {
                        _this.job = posting;
                        _this.job.jobSource = _this.jobSource;
                    }
                });
            }).then(function () { return _this.userService.findLoggedUser().then(function (user) { return _this.user = user; }); }).then(function () {
                return _this.getJobApplication();
            }); });
        }
    }
    ViewJobComponent.prototype.getJobApplication = function () {
        var _this = this;
        this.saveJobService.getAllJobApplicationForUser().then(function (jobApplications) {
            if (jobApplications.status != null && jobApplications.status === 'session expired') {
                _this.jobApplications = [];
            }
            else {
                _this.jobApplications = jobApplications;
            }
        }).then(function () {
            console.log(_this.jobApplications);
            _this.jobApplications.forEach(function (jobApp) {
                if (_this.jobSource === 'github' &&
                    jobApp.gitHubJobId === _this.jobId) {
                    if (jobApp.status === 'save') {
                        _this.alreadySavedCheck = true;
                    }
                    else {
                        _this.alreadyAppliedCheck = true;
                    }
                }
                else if (_this.jobSource !== 'github' &&
                    jobApp.jobPosting === _this.jobId) {
                    if (jobApp.status === 'save') {
                        _this.alreadySavedCheck = true;
                    }
                    else {
                        _this.alreadyAppliedCheck = true;
                    }
                }
            });
        });
    };
    ViewJobComponent.prototype.saveJobId = function (job) {
        var _this = this;
        var jobApplication;
        console.log(job.jobSource);
        if (job.jobSource === 'github') {
            jobApplication = { dateApplied: new Date(), status: 'save', jobSource: job.jobSource, gitHubJobId: job.id };
        }
        else {
            jobApplication = { dateApplied: new Date(), status: 'save', jobSource: job.jobSource, jobPosting: job._id };
        }
        this.alreadySavedCheck = false;
        this.alreadyAppliedCheck = false;
        this.saveJobService.createJobApplication(jobApplication).then(function () { return _this.getJobApplication(); });
    };
    ViewJobComponent.prototype.deleteJobId = function (job) {
        var _this = this;
        this.alreadySavedCheck = false;
        this.alreadyAppliedCheck = false;
        var id;
        if (job.jobSource === 'github') {
            id = job.id;
        }
        else {
            id = job._id;
        }
        this.saveJobService.deleteJobApplicationByJobPosting(id, job.jobSource).then(function () { return _this.getJobApplication(); });
    };
    ViewJobComponent.prototype.applyJob = function (job) {
        var _this = this;
        var jobApplication;
        console.log(job.jobSource);
        if (job.jobSource === 'github') {
            jobApplication = { dateApplied: new Date(), status: 'applied', jobSource: job.jobSource, gitHubJobId: job.id };
        }
        else {
            jobApplication = { dateApplied: new Date(), status: 'applied', jobSource: job.jobSource, jobPosting: job._id };
        }
        var id;
        if (job.jobSource === 'github') {
            id = job.id;
        }
        else {
            id = job._id;
        }
        this.alreadySavedCheck = false;
        this.alreadyAppliedCheck = false;
        this.saveJobService.deleteJobApplicationByJobPosting(id, job.jobSource).then(function () {
            return _this.saveJobService.createJobApplication(jobApplication).then(function () { return _this.getJobApplication(); });
        });
    };
    ViewJobComponent.prototype.ngOnInit = function () {
    };
    ViewJobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-job',
            template: __webpack_require__(/*! ./view-job.component.html */ "./src/app/components/view-job/view-job.component.html"),
            styles: [__webpack_require__(/*! ./view-job.component.css */ "./src/app/components/view-job/view-job.component.css")]
        }),
        __metadata("design:paramtypes", [_services_job_listing_service__WEBPACK_IMPORTED_MODULE_3__["JobListingService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_save_job_service__WEBPACK_IMPORTED_MODULE_4__["SaveJobService"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_job_posting_service__WEBPACK_IMPORTED_MODULE_6__["JobPostingService"]])
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

/***/ "./src/app/services/education.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/education.service.ts ***!
  \***********************************************/
/*! exports provided: EducationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationService", function() { return EducationService; });
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

var EducationService = /** @class */ (function () {
    function EducationService() {
        var base;
        if (!location.toString().includes('localhost')) {
            base = 'https://job-portal-server.herokuapp.com';
        }
        else {
            base = 'http://localhost:5500';
        }
        this.url = base + '/api/education';
    }
    EducationService.prototype.findEducationByUserId = function () {
        console.log('test pass');
        return fetch(this.url + '/user', {
            credentials: 'include',
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    EducationService.prototype.updateEducation = function (educationId, education) {
        // console.log(JSON.stringify(user));
        return fetch(this.url + '/' + educationId, {
            method: 'PUT',
            body: JSON.stringify(education),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    EducationService.prototype.createEducation = function (education) {
        // console.log(JSON.stringify(user));
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(education),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    EducationService.prototype.deleteEducation = function (Id) {
        return fetch(this.url + '/' + Id, {
            method: 'DELETE',
            credentials: 'include'
        });
    };
    EducationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], EducationService);
    return EducationService;
}());



/***/ }),

/***/ "./src/app/services/experience.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/experience.service.ts ***!
  \************************************************/
/*! exports provided: ExperienceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceService", function() { return ExperienceService; });
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

var ExperienceService = /** @class */ (function () {
    function ExperienceService() {
        var base;
        if (!location.toString().includes('localhost')) {
            base = 'https://job-portal-server.herokuapp.com';
        }
        else {
            base = 'http://localhost:5500';
        }
        this.url = base + '/api/experience';
    }
    ExperienceService.prototype.findExperienceByUserId = function () {
        return fetch(this.url + '/user', {
            credentials: 'include',
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    ExperienceService.prototype.updateExperience = function (experienceId, experience) {
        // console.log(JSON.stringify(user));
        return fetch(this.url + '/' + experienceId, {
            method: 'PUT',
            body: JSON.stringify(experience),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    ExperienceService.prototype.createExperience = function (experience) {
        // console.log(JSON.stringify(user));
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(experience),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    };
    ExperienceService.prototype.deleteExperience = function (Id) {
        return fetch(this.url + '/' + Id, {
            method: 'DELETE',
            credentials: 'include'
        });
    };
    ExperienceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ExperienceService);
    return ExperienceService;
}());



/***/ }),

/***/ "./src/app/services/job-listing.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/job-listing.service.ts ***!
  \*************************************************/
/*! exports provided: JobListingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobListingService", function() { return JobListingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JobListingService = /** @class */ (function () {
    function JobListingService() {
    }
    JobListingService.prototype.findAllJobs = function () {
        return jquery__WEBPACK_IMPORTED_MODULE_1__["ajax"]({
            url: 'https://jobs.github.com/positions.json?markdown=true',
            dataType: 'jsonp'
        });
    };
    JobListingService.prototype.findFilteredJobs = function (location, keyword) {
        console.log('service');
        return jquery__WEBPACK_IMPORTED_MODULE_1__["ajax"]({
            url: 'https://jobs.github.com/positions.json?description=' + keyword + '&location=' + location,
            dataType: 'jsonp'
        });
    };
    JobListingService.prototype.findAllJobPortalJobs = function () {
    };
    JobListingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], JobListingService);
    return JobListingService;
}());



/***/ }),

/***/ "./src/app/services/job-posting.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/job-posting.service.ts ***!
  \*************************************************/
/*! exports provided: JobPostingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobPostingService", function() { return JobPostingService; });
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

var JobPostingService = /** @class */ (function () {
    function JobPostingService() {
        var base;
        if (!location.toString().includes('localhost')) {
            base = 'https://job-portal-server.herokuapp.com';
        }
        else {
            base = 'http://localhost:5500';
        }
        this.url = base + '/api/jobPosting';
        this.allJobPostingUrl = base + '/api/allJobPosting';
    }
    JobPostingService.prototype.createJobPosting = function (jobPosting) {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(jobPosting),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    JobPostingService.prototype.updateJobPosting = function (jobPostingId, jobPosting) {
        return fetch(this.url + '/' + jobPostingId, {
            method: 'PUT',
            body: JSON.stringify(jobPosting),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    JobPostingService.prototype.deleteJobPosting = function (jobPostingId) {
        return fetch(this.url + '/' + jobPostingId, {
            method: 'DELETE',
            credentials: 'include'
        });
    };
    JobPostingService.prototype.getAllJobPostingForUser = function () {
        return fetch(this.url, {
            credentials: 'include'
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    JobPostingService.prototype.getAllJobPostings = function () {
        // console.log('in here');
        return fetch(this.allJobPostingUrl, {
            credentials: 'include'
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    JobPostingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], JobPostingService);
    return JobPostingService;
}());



/***/ }),

/***/ "./src/app/services/save-job.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/save-job.service.ts ***!
  \**********************************************/
/*! exports provided: SaveJobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveJobService", function() { return SaveJobService; });
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

var SaveJobService = /** @class */ (function () {
    function SaveJobService() {
        var base;
        if (!location.toString().includes('localhost')) {
            base = 'https://job-portal-server.herokuapp.com';
        }
        else {
            base = 'http://localhost:5500';
        }
        this.url = base + '/api/jobApplication';
    }
    SaveJobService.prototype.createJobApplication = function (jobApplication) {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(jobApplication),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    SaveJobService.prototype.updateJobApplication = function (jobApplicationId, jobApplication) {
        return fetch(this.url + '/' + jobApplicationId, {
            method: 'PUT',
            body: JSON.stringify(jobApplication),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    SaveJobService.prototype.deleteJobApplication = function (jobApplicationId) {
        return fetch(this.url + '/' + jobApplicationId, {
            method: 'DELETE',
            credentials: 'include'
        });
    };
    SaveJobService.prototype.deleteJobApplicationByJobPosting = function (jobApplicationId, source) {
        return fetch(this.url + '/' + jobApplicationId + '/' + source, {
            method: 'DELETE',
            credentials: 'include'
        });
    };
    SaveJobService.prototype.getAllJobApplicationForUser = function () {
        return fetch(this.url, {
            credentials: 'include'
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    SaveJobService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], SaveJobService);
    return SaveJobService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
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

var UserService = /** @class */ (function () {
    function UserService() {
        var base;
        if (!location.toString().includes('localhost')) {
            base = 'https://job-portal-server.herokuapp.com';
        }
        else {
            base = 'http://localhost:5500';
        }
        this.url = base + '/api/user';
        this.urlRegister = base + '/api/register';
        this.urlLoggedUser = base + '/api/profile';
        this.urlUpdateProfile = base + '/api/profile';
        this.urlLogin = base + '/api/login';
        this.urlPassReset = base + '/api/reset';
        this.urlVerifyUsername = base + '/api/verify';
        this.urlLogout = base + '/api/logout';
        this.urlDeleteProfile = base + '/api/user';
        this.urlApproveRecruiter = base + '/api/approve';
        this.urlPending = base + '/api/pending';
    }
    UserService.prototype.register = function (user) {
        return fetch(this.urlRegister, {
            method: 'POST',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    UserService.prototype.login = function (username, password) {
        return fetch(this.urlLogin, {
            method: 'POST',
            body: JSON.stringify({ username: username, password: password }),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    UserService.prototype.logout = function () {
        return fetch(this.urlLogout, {
            method: 'POST',
            credentials: 'include',
        });
    };
    UserService.prototype.findLoggedUser = function () {
        console.log('sadasdas');
        return fetch(this.urlLoggedUser, {
            credentials: 'include',
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    UserService.prototype.updateUserProfile = function (user) {
        return fetch(this.urlUpdateProfile, {
            method: 'PUT',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    // deleteUser(userId) {
    //   return fetch(this.url + '/' + userId, {
    //     method: 'DELETE',
    //   });
    // }
    UserService.prototype.approveRecruiter = function (userId) {
        return fetch(this.urlApproveRecruiter + '/' + userId, {
            method: 'POST',
            credentials: 'include'
        });
    };
    UserService.prototype.rejectRecruiter = function (userId) {
        return fetch(this.url + '/' + userId, {
            method: 'DELETE',
            credentials: 'include'
        });
    };
    UserService.prototype.findPendingRecruiters = function () {
        return fetch(this.urlPending, {
            credentials: 'include'
        }).then(function (response) {
            if (response.headers.get('content-type') != null) {
                return response.json();
            }
            else {
                return null;
            }
        });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



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

module.exports = __webpack_require__(/*! F:\Project\job-portal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map