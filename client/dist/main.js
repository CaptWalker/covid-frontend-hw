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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"App\">\r\n  <app-ui-shell></app-ui-shell>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".App {\n  font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;\n  font-weight: 400;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxkaHJ1dlxcRGVza3RvcFxcb2NcXGNvdmlkLWZyb250ZW5kLWh3XFxjbGllbnQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlFQUFpRTtFQUNqRSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuQXBwIHtcclxuICBmb250LWZhbWlseTogJ0lCTSBQbGV4IFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'catalyst-webui-angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! carbon-components-angular */ "./node_modules/carbon-components-angular/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_shell_ui_shell_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui-shell/ui-shell.component */ "./src/app/ui-shell/ui-shell.component.ts");
/* harmony import */ var _display_form_display_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./display-form/display-form.component */ "./src/app/display-form/display-form.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table-list/table-list.component */ "./src/app/table-list/table-list.component.ts");
/**
 * Copyright 2019 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the 'License'); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _ui_shell_ui_shell_component__WEBPACK_IMPORTED_MODULE_5__["UiShellComponent"],
                _display_form_display_form_component__WEBPACK_IMPORTED_MODULE_6__["DisplayFormComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _table_list_table_list_component__WEBPACK_IMPORTED_MODULE_8__["TableListComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["UIShellModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"],
                carbon_components_angular__WEBPACK_IMPORTED_MODULE_3__["StructuredListModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/display-form/display-form.component.html":
/*!**********************************************************!*\
  !*** ./src/app/display-form/display-form.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bx--grid\">\r\n  <app-header [title]=\"'Display Form'\" [subtitle]=\"'Displays a model object as a form in a read only display.'\">\r\n  </app-header>\r\n  <div className=\"bx--row\">\r\n    <div className=\"bx--col-xs-12\">\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/display-form/display-form.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/display-form/display-form.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rpc3BsYXktZm9ybS9kaXNwbGF5LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/display-form/display-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/display-form/display-form.component.ts ***!
  \********************************************************/
/*! exports provided: DisplayFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayFormComponent", function() { return DisplayFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DisplayFormComponent = /** @class */ (function () {
    function DisplayFormComponent() {
    }
    DisplayFormComponent.prototype.ngOnInit = function () {
    };
    DisplayFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display-form',
            template: __webpack_require__(/*! ./display-form.component.html */ "./src/app/display-form/display-form.component.html"),
            styles: [__webpack_require__(/*! ./display-form.component.scss */ "./src/app/display-form/display-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DisplayFormComponent);
    return DisplayFormComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bx--row pattern-description\">\r\n  <div class=\"bx--col-xs-12\">\r\n    <h1 class=\"pattern-title\">{{title}}</h1>\r\n    <div data-notification class=\"bx--inline-notification bx--inline-notification--info\" role=\"alert\">\r\n      <div class=\"bx--inline-notification__details\">\r\n        <svg class=\"bx--inline-notification__icon\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\"\r\n          xmlns=\"http://www.w3.org/2000/svg\">\r\n          <path d=\"M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm1-3V7H7v6h2zM8 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z\" />\r\n        </svg>\r\n        <div class=\"bx--inline-notification__text-wrapper\">\r\n          <p class=\"bx--inline-notification__title\"></p>\r\n          <p class=\"bx--inline-notification__subtitle\">{{subtitle}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pattern-description {\n  padding: 20px 0 20px 0;\n  line-height: 1.5; }\n\n.pattern-title {\n  font-size: 2rem;\n  font-weight: 800; }\n\n.bx--inline-notification__icon {\n  display: inline-block !important; }\n\n.bx--inline-notification__text-wrapper {\n  max-width: 100% !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcZGhydXZcXERlc2t0b3BcXG9jXFxjb3ZpZC1mcm9udGVuZC1od1xcY2xpZW50L3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsZ0NBQWdDLEVBQUE7O0FBRWxDO0VBQ0UsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhdHRlcm4tZGVzY3JpcHRpb24ge1xyXG4gIHBhZGRpbmc6IDIwcHggMCAyMHB4IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG4ucGF0dGVybi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuLmJ4LS1pbmxpbmUtbm90aWZpY2F0aW9uX19pY29uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG4uYngtLWlubGluZS1ub3RpZmljYXRpb25fX3RleHQtd3JhcHBlciB7XHJcbiAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "subtitle", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/table-list/table-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/table-list/table-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bx--grid\">\r\n  <app-header title='Table List' \r\n    subtitle='This pattern will display an array of model objects in a multi column grid/table'>\r\n  </app-header>\r\n  <div className=\"bx--row\">\r\n    <div className=\"bx--col-xs-12\">\r\n        <ibm-structured-list [border]=\"true\" [selection]=\"true\" \r\n          (selected)=\"onSelected($event)\">\r\n            <ibm-list-header>\r\n              <ibm-list-column>Name</ibm-list-column>\r\n              <ibm-list-column>Address</ibm-list-column>\r\n              <ibm-list-column>City</ibm-list-column>\r\n              <ibm-list-column>State</ibm-list-column>\r\n              <ibm-list-column>Zip Code</ibm-list-column>\r\n              <ibm-list-column>Country</ibm-list-column>\r\n            </ibm-list-header>\r\n            \r\n            <ibm-list-row *ngFor=\"let row of data\" [value]=\"row.Name\">\r\n              <ibm-list-column>{{row.Name}}</ibm-list-column>\r\n              <ibm-list-column>{{row.Address}}</ibm-list-column>\r\n              <ibm-list-column>{{row.City}}</ibm-list-column>\r\n              <ibm-list-column>{{row.State}}</ibm-list-column>\r\n              <ibm-list-column>{{row.ZipCode}}</ibm-list-column>\r\n              <ibm-list-column>{{row.Country}}</ibm-list-column>\r\n            </ibm-list-row>\r\n          </ibm-structured-list>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/table-list/table-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/table-list/table-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYmxlLWxpc3QvdGFibGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/table-list/table-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/table-list/table-list.component.ts ***!
  \****************************************************/
/*! exports provided: TableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableListComponent", function() { return TableListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TableListComponent = /** @class */ (function () {
    function TableListComponent() {
        this.selected = {};
        this.data = [
            {
                Name: 'Lin',
                Address: '123 Main Street',
                City: 'Austin',
                State: 'TX',
                ZipCode: '12345',
                Country: 'United States'
            },
            {
                Name: 'Mak',
                Address: '45 2nd Street',
                City: 'Austin',
                State: 'TX',
                ZipCode: '78766',
                Country: 'United States'
            },
            {
                Name: 'Joe',
                Address: '40 Down Street',
                City: 'San Francisco',
                State: 'CA',
                ZipCode: '90706',
                Country: 'United States'
            }
        ];
    }
    TableListComponent.prototype.ngOnInit = function () {
    };
    TableListComponent.prototype.onSelected = function (obj) {
        this.selected = obj;
    };
    TableListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table-list',
            template: __webpack_require__(/*! ./table-list.component.html */ "./src/app/table-list/table-list.component.html"),
            styles: [__webpack_require__(/*! ./table-list.component.scss */ "./src/app/table-list/table-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableListComponent);
    return TableListComponent;
}());



/***/ }),

/***/ "./src/app/ui-shell/ui-shell.component.html":
/*!**************************************************!*\
  !*** ./src/app/ui-shell/ui-shell.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ibm-header (menuClicked)=\"menuClicked()\" name=\"Cloud Garage Catalyst\"></ibm-header>\r\n<ibm-sidenav expanded=\"true\">\r\n  <ibm-sidenav-menu title=\"12 Design Patterns\" expanded=\"true\">\r\n    <svg icon width=\"20\" height=\"20\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" aria-hidden=\"true\">\r\n      <path d=\"M8.24 25.14L7 26.67a14 14 0 0 0 4.18 2.44l.68-1.88a12\r\n          12 0 0 1-3.62-2.09zm-4.05-7.07l-2 .35A13.89 13.89 0 0 0 3.86\r\n          23l1.73-1a11.9 11.9 0 0 1-1.4-3.93zm7.63-13.31l-.68-1.88A14\r\n          14 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1zM5.59\r\n          10L3.86 9a13.89 13.89 0 0 0-1.64 4.54l2 .35A11.9 11.9 0 0 1 5.59\r\n          10zM16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28z\" />\r\n    </svg>\r\n    <ibm-sidenav-item [active]=\"patternName === 'Display Form' ? true : false\" (click)=\"onSelect('Display Form')\">Display Form</ibm-sidenav-item>\r\n    <ibm-sidenav-item [active]=\"patternName === 'Validating Form' ? true : false\" (click)=\"onSelect('Validating Form')\">Validating Form</ibm-sidenav-item>\r\n    <ibm-sidenav-item [active]=\"patternName === 'Update Form' ? true : false\" (click)=\"onSelect('Update Form')\">Update Form</ibm-sidenav-item>\r\n    <ibm-sidenav-item [active]=\"patternName === 'Validating Form Wizard 1' ? true : false\" (click)=\"onSelect('Validating Form Wizard 1')\">Validating Form Wizard 1</ibm-sidenav-item>\r\n    <ibm-sidenav-item [active]=\"patternName === 'Validating Form Wizard 2' ? true : false\" (click)=\"onSelect('Validating Form Wizard 2')\">Validating Form Wizard 2</ibm-sidenav-item>\r\n    <ibm-sidenav-item [active]=\"patternName === 'Simple List' ? true : false\" (click)=\"onSelect('Simple List')\">Simple List</ibm-sidenav-item>\r\n    <ibm-sidenav-item [active]=\"patternName === 'Table List' ? true : false\" (click)=\"onSelect('Table List')\">Table List</ibm-sidenav-item>\r\n    <ibm-sidenav-item [active]=\"patternName === 'List to List' ? true : false\" (click)=\"onSelect('List to List')\">List to List</ibm-sidenav-item>\r\n    <ibm-sidenav-item [active]=\"patternName === 'Linked List' ? true : false\" (click)=\"onSelect('Linked List')\">Linked List</ibm-sidenav-item>\r\n    <ibm-sidenav-item [active]=\"patternName === 'Master Detail' ? true : false\" (click)=\"onSelect('Master Detail')\">Master Detail</ibm-sidenav-item>\r\n    <ibm-sidenav-item [active]=\"patternName === 'Create, Read, Update, Delete' ? true : false\" (click)=\"onSelect('Create, Read, Update, Delete')\">Create, Read, Update, Delete</ibm-sidenav-item>\r\n    <ibm-sidenav-item [active]=\"patternName === 'Search List' ? true : false\" (click)=\"onSelect('Search List')\">Search List</ibm-sidenav-item>\r\n    <ibm-sidenav-item [active]=\"patternName === 'Search Form' ? true : false\" (click)=\"onSelect('Search Form')\">Search Form</ibm-sidenav-item>\r\n  </ibm-sidenav-menu>\r\n</ibm-sidenav>\r\n<div class=\"bx--content pattern-container\" [ngSwitch]=\"patternName\">\r\n  <app-display-form *ngSwitchCase=\"'Display Form'\">Display Form</app-display-form>\r\n  <div *ngSwitchCase=\"'Validating Form'\">Validating Form</div>\r\n  <div *ngSwitchCase=\"'Update Form'\">Update Form</div>\r\n  <div *ngSwitchCase=\"'Validating Form Wizard 1'\">Validating Form Wizard 1</div>\r\n  <div *ngSwitchCase=\"'Validating Form Wizard 2'\">Validating Form Wizard 2</div>\r\n  <div *ngSwitchCase=\"'Simple List'\">Simple List</div>\r\n  <app-table-list *ngSwitchCase=\"'Table List'\">Table List</app-table-list>\r\n  <div *ngSwitchCase=\"'List to List'\">List to List</div>\r\n  <div *ngSwitchCase=\"'Linked List'\">Linked List</div>\r\n  <div *ngSwitchCase=\"'Master Detail'\">Master Detail</div>\r\n  <div *ngSwitchCase=\"'Create, Read, Update, Delete'\">Create, Read, Update, Delete</div>\r\n  <div *ngSwitchCase=\"'Search List'\">Search List</div>\r\n  <div *ngSwitchCase=\"'Search Form'\">Search Form</div>\r\n  <div *ngSwitchDefault></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-shell/ui-shell.component.scss":
/*!**************************************************!*\
  !*** ./src/app/ui-shell/ui-shell.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pattern-container {\n  padding-left: 100px;\n  padding-right: 100px;\n  padding-bottom: 100px;\n  text-align: left;\n  background-color: lightgray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWktc2hlbGwvQzpcXFVzZXJzXFxkaHJ1dlxcRGVza3RvcFxcb2NcXGNvdmlkLWZyb250ZW5kLWh3XFxjbGllbnQvc3JjXFxhcHBcXHVpLXNoZWxsXFx1aS1zaGVsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VpLXNoZWxsL3VpLXNoZWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhdHRlcm4tY29udGFpbmVyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/ui-shell/ui-shell.component.ts":
/*!************************************************!*\
  !*** ./src/app/ui-shell/ui-shell.component.ts ***!
  \************************************************/
/*! exports provided: UiShellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiShellComponent", function() { return UiShellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UiShellComponent = /** @class */ (function () {
    function UiShellComponent() {
        this.patternName = 'Display Form';
    }
    UiShellComponent.prototype.ngOnInit = function () { };
    UiShellComponent.prototype.menuClicked = function () { };
    UiShellComponent.prototype.onSelect = function (name) {
        this.patternName = name;
    };
    UiShellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ui-shell',
            template: __webpack_require__(/*! ./ui-shell.component.html */ "./src/app/ui-shell/ui-shell.component.html"),
            styles: [__webpack_require__(/*! ./ui-shell.component.scss */ "./src/app/ui-shell/ui-shell.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UiShellComponent);
    return UiShellComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dhruv\Desktop\oc\covid-frontend-hw\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map