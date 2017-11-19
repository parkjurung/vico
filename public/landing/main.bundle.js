webpackJsonp([2,5],{

/***/ 369:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 369;


/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(390);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_locale_service__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(171);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(localizationService, router) {
        this.localizationService = localizationService;
        this.router = router;
        this.localization = {
            "_type": "korean",
            "nav_home": "Home",
            "nav_product": "Survey",
            "nav_faq": "Contact",
            "nav_logo_image": "https://pplink.net/images/landing/logo.png",
            "head_top": "Video Commerce의 새로운 형태",
            "head_body": "Live Commerce 에 대한\n여러분의 의견이 필요합니다",
            "head_button": "빠른 시작",
            "head_footer": "Google Chrome 브라우저를 이용해주세요. iOS는 현재 지원하지 않습니다.",
            "head_background": "https://pplink.net/images/landing/tablet.jpg",
            "title_feature": "설문 조사",
            "feature_title_6": "다자간 연결 지원",
            "feature_content_1": "빠르게 연결용 URL을 생성하고\n웹브라우저를 통해 상대와 즉각 연결",
            "feature_content_2": "마우스, 디지타이저 등을 지원하는\n끊김없이 부드럽게 그려지는 전자칠판",
            "feature_content_3": "서버리스 시스템 구성으로\n클라이언트간 초고속 동기화 가능",
            "feature_content_4": "Secure RTP Protocol 연결로\n도청위협 없이 안전한 통신 환경",
            "feature_content_5": "차트, 수식 등을 포함한\n문서를 함께 보며 작업하는 협업 환경",
            "feature_content_6": "웹, 모바일 등 다양한 환경의 사용자간\n다자간 연결을 지원[2018년 예정]",
            "title_howto": "How To Use",
            "howto_title_1": "빠른시작 버튼 클릭",
            "howto_title_2": "웹캠 및 마이크 설정 확인",
            "howto_title_3": "URL 복사 후 공유",
            "howto_content_1": "홈페이지 상단 빠른 시작 버튼을 누르면\n연결이 자동 생성됩니다.",
            "howto_content_2": "웹캠과 마이크 사용을 확인해주세요.\n웹캠이 없어도 사용이 가능합니다.",
            "howto_content_3": "브라우저 주소창의 주소를 복사하여\n연결하고 싶은 사람에게 보내세요!",
            "howto_image_1": "https://pplink.net/images/landing/howto/howto01.png",
            "howto_image_2": "https://pplink.net/images/landing/howto/howto02.png",
            "howto_image_3": "https://pplink.net/images/landing/howto/howto03.png",
            "more_info": "더 자세한 플링크 캔버스 사용법 보기 [클릭]",
            "more_info_title": "ppLINK Canvas 사용법",
            "title_faq": "의견 수렴",
            "howto_details": [
                {
                    "src": "https://pplink.net/images/landing/howto_detail/drawing.png"
                },
                {
                    "src": "https://pplink.net/images/landing/howto_detail/drawing line.png"
                },
                {
                    "src": "https://pplink.net/images/landing/howto_detail/erasing.png"
                },
                {
                    "src": "https://pplink.net/images/landing/howto_detail/erasing mass.png"
                },
                {
                    "src": "https://pplink.net/images/landing/howto_detail/moving.png"
                },
                {
                    "src": "https://pplink.net/images/landing/howto_detail/enlarge.png"
                },
                {
                    "src": "https://pplink.net/images/landing/howto_detail/subnote.png"
                },
                {
                    "src": "https://pplink.net/images/landing/howto_detail/adding file.png"
                }
            ],
            "faq": [
                {
                    "question": "연결하기 위해 필요한 프로그램은 무엇인가요?",
                    "answer": "연결하기 위해 특별히 필요한 프로그램은 바로 **Chrome** 입니다.\nGoogle의 Chrome을 설치해주세요. [[Chrome 다운받기]](https://google.com/chrome/browser)"
                },
                {
                    "question": "iOS에서는 언제부터 이용할 수 있나요?",
                    "answer": "최근에 Apple에서 WebRTC가 지원되는 **Safari 11.0**을 출시했습니다.\niOS 11.0 부터 Safari로 ppLINK Canvas를 이용하실 수 있습니다. [[Safari 11.0]](https://developer.apple.com/library/content/releasenotes/General/WhatsNewInSafari/Safari_11_0/Safari_11_0.html)"
                },
                {
                    "question": "어떤 파일들을 상대방과 공유할 수 있나요?",
                    "answer": "현재 **png, jpg, gif** 등 그림파일만 공유가능합니다.\n빠른 시일내에 pdf 공유를 구현할 예정입니다."
                },
                {
                    "question": ".doc, .pdf, .ppt, .xls 등의 파일을 공유하며 작업하고 싶은데 어떻게 할 수 있나요?",
                    "answer": " .pdf 파일은 [[pdf2png.com]](http://pdf2png.com/) 등 무료 변환 사이트에서 그림파일(png, jpg, gif)로 변환 후 사용하실 수 있습니다.\npdf이외의 문서파일은 Word, PowerPoint, Excel 등에서 pdf로 저장 후 그림파일로 변환하여 사용하시면 됩니다. 곧 별도의 변환 과정 필요없이 바로 문서를 공유할 수 있습니다."
                },
                {
                    "question": "ppLINK 제품이 적용된 서비스는 어떤 것이 있나요?",
                    "answer": "현재 ppLINK가 직접 운영중인 화상과외 서비스 [수파자](https://supaja.com) 에서 ppLINK 제품을 적용하여 운영하고 있습니다. [[수파자 바로가기]](https://supaja.com)"
                },
                {
                    "question": "더 궁금한 점이나 개선사항을 어떻게 전달할 수 있나요?",
                    "answer": " 모든 궁금한 점은 [support@pplink.net](mailto:support@pplink.net)으로 문의주시면 빠르게 답변드리겠습니다.\n또한 제품이나 서비스와 관련하여 우선적으로 개발이 되길 희망하는 기능이 있다면 적극 반영하도록 하겠습니다"
                }
            ],
            "address": "(주)플링크 | 서울특별시 관악구 봉천로 472, B101",
            "registration_number": "사업자등록번호:691-81-00197 대표이사:최필준",
            "communication_merchant_number": "통신판매번호:2016-서울관악-0274",
            "communication_merchant_url": "http://www.ftc.go.kr/info/bizinfo/communicationView.jsp?apv_perm_no=2015322…rea1=&area2=&currpage=1&searchKey=04&searchVal=6918100197&stdate=&enddate="
        };
        this.tempRoomId = this.generateNum(8);
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.localizationService.load_localization('korean')
        //   .subscribe(res => this.localization = res);
        window['init_custom_js'](); // apply legacy codes
    };
    AppComponent.prototype.generateNum = function (digits) {
        var result = Math.floor(Math.random() * Math.pow(10, digits)) + '';
        while (result.length < digits) {
            result = '0' + result;
        }
        return result;
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.router.url === '/howto') {
                console.log('@@@ here is howto');
                _this.howToModal.show();
            }
        }, 0);
    };
    AppComponent.prototype.modalShown = function () {
        this.router.navigate(['/howto']);
    };
    AppComponent.prototype.modalHidden = function () {
        this.router.navigate(['/']);
    };
    AppComponent.prototype.changeLocale = function () {
        var _this = this;
        if (this.localization['_type'] === 'korean') {
            this.localizationService.load_localization('english')
                .subscribe(function (res) { return _this.localization = res; });
        }
        else {
            this.localizationService.load_localization('korean')
                .subscribe(function (res) { return _this.localization = res; });
        }
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('howToModal'),
    __metadata("design:type", Object)
], AppComponent.prototype, "howToModal", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(531),
        styles: [__webpack_require__(451)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_locale_service__["a" /* LocalizationService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_locale_service__["a" /* LocalizationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_locale_service__["a" /* LocalizationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_markdown__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__howto_howto_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_video_video_component__ = __webpack_require__(387);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// router
var appRoutes = [
    { path: 'howto', component: __WEBPACK_IMPORTED_MODULE_8__howto_howto_component__["a" /* HowtoComponent */] },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__howto_howto_component__["a" /* HowtoComponent */],
            __WEBPACK_IMPORTED_MODULE_9__component_video_video_component__["a" /* VideoComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_markdown__["a" /* MarkdownModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["a" /* AccordionModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["b" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOCALE_FETCH_URL; });
var LOCALE_FETCH_URL = 'https://pplink.net/locale/';
//# sourceMappingURL=app.urls.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoComponent = (function () {
    function VideoComponent() {
    }
    VideoComponent.prototype.ngOnInit = function () {
        var $ = window['$'];
        $(function () {
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                stagePadding: 50,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });
        });
    };
    return VideoComponent;
}());
VideoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-video',
        template: __webpack_require__(532),
        styles: [__webpack_require__(452)]
    }),
    __metadata("design:paramtypes", [])
], VideoComponent);

//# sourceMappingURL=video.component.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowtoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HowtoComponent = (function () {
    function HowtoComponent() {
    }
    return HowtoComponent;
}());
HowtoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Component */])({
        selector: 'app-howto',
        template: __webpack_require__(533),
        styles: [__webpack_require__(453)]
    }),
    __metadata("design:paramtypes", [])
], HowtoComponent);

//# sourceMappingURL=howto.component.js.map

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_urls__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalizationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocalizationService = (function () {
    function LocalizationService(http) {
        this.http = http;
    }
    LocalizationService.prototype.load_localization = function (locale) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_urls__["a" /* LOCALE_FETCH_URL */] + locale, {})
            .map(function (res) { return res.json(); });
    };
    return LocalizationService;
}());
LocalizationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], LocalizationService);

var _a;
//# sourceMappingURL=locale.service.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 451:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, ".item-wrap {\n  width: 200px;\n  background-color: white;\n  height: 116px;\n  padding-top: 12px;\n  border-radius: 10px;\n  margin-bottom: 12px;\n  margin-top: 12px; }\n\n.owl-item {\n  width: 210px; }\n\n.display {\n  width: 350px;\n  margin: 0 auto;\n  padding: 20px;\n  background-color: black;\n  border: 1px solid black;\n  border-radius: 10px; }\n\nbutton {\n  cursor: pointer; }\n\nvideo {\n  width: 100%; }\n\n.video-wrap {\n  position: relative;\n  padding-bottom: -5px; }\n\n.cover {\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 5px;\n  height: 50px;\n  /* FF3.6-15 */\n  /* Chrome10-25,Safari5.1-6 */\n  background: linear-gradient(to bottom, transparent 0%, black 100%);\n  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */ }\n\n.items {\n  background-color: black;\n  margin-top: -5px; }\n\n.photo {\n  float: left;\n  width: 80px; }\n\n.info {\n  float: left;\n  width: 100px;\n  margin-left: 12px; }\n\n.info h5, .btn, p {\n  font-size: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 531:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-custom navbar-fixed-top is-transparent\">\n  <div class=\"container\"><!-- Brand Title-->\n    <div class=\"navbar-header pull-left\"><a class=\"navbar-brand navbar-brand-custom page-scroll\"\n                                            href=\"#page-top\">Vico</a></div>\n    <div class=\"navbar-collapse navbar-left\" id=\"main-navbar\">\n      <ul class=\"nav navbar-nav pull-right\" id=\"scroll-nav\">\n        <li style=\"width:50px;\"> &nbsp;</li>\n        <li><a class=\"page-scroll\" href=\"#page-top\">{{localization.nav_home}}</a></li>\n        <li><a class=\"page-scroll\" href=\"#product\">{{localization.nav_product}}</a></li>\n        <li><a class=\"page-scroll\" href=\"#faq\">{{localization.nav_faq}}</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<!-- Header-->\n<header class=\"header-custom\" [ngStyle]=\"{'background-image':'url('+localization.head_background+')'}\">\n  <div class=\"screen\">\n  </div>\n  <div class=\"container\">\n    <div class=\"row curtain\">\n      <div class=\"site-heading\" id=\"page-top\">\n        <div class=\"wow zoomIn text-center\" data-wow-delay=\"0.1s\">\n          <div class=\"head-wrapper col-sm-9 col-md-6 wow zoomIn text-center\"\n               data-wow-delay=\".1s\">\n            <div class=\"main-head\">\n              <!--<h5>{{localization.head_top}}</h5>-->\n              <hr class=\"small\" style=\"margin-top: 10px;\"/>\n              <h1>{{localization.head_body}}</h1>\n              <!--<div class=\"play-video-link-wrapper\"><a-->\n              <!--class=\"btn btn-default btn-lg btn-blue goto-free-trial\" [href]=\"'https://pplink.net/join/'+tempRoomId\">{{localization.head_button}}</a>-->\n              <!--</div>-->\n              <!--<h6>{{localization.head_footer}}</h6>-->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n\n<!-- survey -->\n<div class=\"sections-wrapper\" style=\"margin-top: 30px;\">\n  <section class=\"section-custom\">\n    <div class=\"container section-content\" style=\"padding-top: 0;\">\n      <h2 class=\"text-center section-title\" id=\"product\">{{localization.title_feature}}</h2>\n\n      <div class=\"row section-content no-border-bottom points\">\n        <div class=\"col-sm-offset-2 col-sm-8 wow fadeIn point\" data-wow-delay=\".15s\">\n          <p>\n            1. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세\n          </p>\n          <div class=\"input-group compact\">\n            <span class=\"input-group-addon\">\n              <input type=\"radio\" name=\"1\">\n            </span>\n            <div type=\"text\" class=\"form-control\">아아아아아아아</div>\n          </div><!-- /input-group -->\n          <div class=\"input-group compact\">\n            <span class=\"input-group-addon\">\n              <input type=\"radio\" name=\"1\">\n            </span>\n            <div type=\"text\" class=\"form-control\">아아아아아아아</div>\n          </div><!-- /input-group -->\n          <div class=\"input-group compact\">\n            <span class=\"input-group-addon\">\n              <input type=\"radio\" name=\"1\">\n            </span>\n            <div type=\"text\" class=\"form-control\">아아아아아아아</div>\n          </div><!-- /input-group -->\n          <div class=\"input-group compact\">\n            <span class=\"input-group-addon\">\n              <input type=\"radio\" name=\"1\">\n            </span>\n            <div type=\"text\" class=\"form-control\">아아아아아아아</div>\n          </div><!-- /input-group -->\n          <div class=\"input-group compact\">\n            <span class=\"input-group-addon\">\n              <input type=\"radio\" name=\"1\">\n            </span>\n            <input type=\"text\" class=\"form-control\" placeholder=\"기타\">\n          </div><!-- /input-group -->\n        </div>\n      </div>\n\n\n      <div class=\"row section-content no-border-bottom points\">\n        <div class=\"col-sm-offset-2 col-sm-8 wow fadeIn point\" data-wow-delay=\".15s\">\n          <p>\n            2. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세\n          </p>\n          <div class=\"input-group compact\">\n            <span class=\"input-group-addon\">\n              <input type=\"checkbox\" name=\"1\">\n            </span>\n            <div type=\"text\" class=\"form-control\">아아아아아아아</div>\n          </div><!-- /input-group -->\n          <div class=\"input-group compact\">\n            <span class=\"input-group-addon\">\n              <input type=\"checkbox\" name=\"1\">\n            </span>\n            <div type=\"text\" class=\"form-control\">아아아아아아아</div>\n          </div><!-- /input-group -->\n          <div class=\"input-group compact\">\n            <span class=\"input-group-addon\">\n              <input type=\"checkbox\" name=\"1\">\n            </span>\n            <div type=\"text\" class=\"form-control\">아아아아아아아</div>\n          </div><!-- /input-group -->\n          <div class=\"input-group compact\">\n            <span class=\"input-group-addon\">\n              <input type=\"checkbox\" name=\"1\">\n            </span>\n            <div type=\"text\" class=\"form-control\">아아아아아아아</div>\n          </div><!-- /input-group -->\n          <div class=\"input-group compact\">\n            <span class=\"input-group-addon\">\n              <input type=\"checkbox\" name=\"1\">\n            </span>\n            <input type=\"text\" class=\"form-control\" placeholder=\"기타\">\n          </div><!-- /input-group -->\n        </div>\n      </div>\n      <app-video></app-video>\n      <div class=\"row section-content no-border-bottom points\">\n        <div class=\"col-sm-offset-2 col-sm-8 wow fadeIn point\" data-wow-delay=\".15s\">\n          <p>\n            3. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세\n          </p>\n          <div class=\"input-group compact\">\n            <span class=\"input-group-addon\">\n              <input type=\"radio\" name=\"2\">\n            </span>\n            <div type=\"text\" class=\"form-control\">아아아아아아아</div>\n          </div><!-- /input-group -->\n          <div class=\"input-group compact\">\n            <span class=\"input-group-addon\">\n              <input type=\"radio\" name=\"2\">\n            </span>\n            <div type=\"text\" class=\"form-control\">아아아아아아아</div>\n          </div><!-- /input-group -->\n          <div class=\"input-group compact\">\n            <span class=\"input-group-addon\">\n              <input type=\"radio\" name=\"2\">\n            </span>\n            <div type=\"text\" class=\"form-control\">아아아아아아아</div>\n          </div><!-- /input-group -->\n          <div class=\"input-group compact\">\n            <span class=\"input-group-addon\">\n              <input type=\"radio\" name=\"2\">\n            </span>\n            <div type=\"text\" class=\"form-control\">아아아아아아아</div>\n          </div><!-- /input-group -->\n          <div class=\"input-group compact\">\n            <span class=\"input-group-addon\">\n              <input type=\"radio\" name=\"2\">\n            </span>\n            <input type=\"text\" class=\"form-control\" placeholder=\"기타\">\n          </div><!-- /input-group -->\n        </div>\n      </div>\n      <button class=\"btn-blue\" style=\"margin: 0 auto; display:block; width:150px; padding:10px 0\">제출</button>\n    </div>\n  </section>\n  <section id=\"faq\" class=\"section-custom wow fadeIn\" style=\"margin-top:20px;\">\n    <div class=\"container\">\n      <h2 class=\"text-center section-title\">{{localization.title_faq}}</h2>\n      <div class=\"row section-content\" style=\"padding-top: 20px;\">\n        <div class=\"col-md-8 col-md-offset-2\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"이메일\">\n          <textarea type=\"text\" class=\"form-control\" placeholder=\"제안 사항\" style=\"margin-top:12px; resize:vertical;\"></textarea>\n          <br>\n          <button class=\"btn-blue\" style=\"margin: 0 auto; display:block; width:150px; padding:10px 0\">제출</button>\n        </div>\n      </div>\n    </div>\n  </section>\n</div>\n\n"

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

module.exports = "<div class=\"display\">\n  <div class=\"video-wrap\">\n    <video id=\"video\" src=\"landing/assets/videos/vico-video.mp4\"></video>\n    <div class=\"cover\"></div>\n  </div>\n  <div class=\"items\">\n    <div class=\"owl-carousel\">\n      <div class=\"item\">\n        <div class=\"item-wrap\">\n          <div class=\"photo\"\n               style=\"height:110px; background-repeat: no-repeat; background-image: url(http://noonoofingers.com/web/product/extra/big/201710/936_shop1_350848.jpg); background-position: center center; background-size: contain;\"></div>\n          <div class=\"info\">\n            <h5 class=\"item-title\">Twinkle Leaf</h5>\n            <p>27,000원</p>\n            <button class=\"btn btn-primary\">구매하기</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"item\">\n        <div class=\"item-wrap\">\n          <div class=\"photo\"\n               style=\"height:110px; background-repeat: no-repeat; background-image: url(http://noonoofingers.com/web/product/extra/big/201710/938_shop1_312108.jpg); background-position: center center; background-size: contain;\"></div>\n          <div class=\"info\">\n            <h5 class=\"item-title\">Love Star</h5>\n            <p>45,000원</p>\n            <button class=\"btn btn-primary\">구매하기</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"item\">\n        <div class=\"item-wrap\">\n          <div class=\"photo\"\n               style=\"height:110px; background-repeat: no-repeat; background-image: url(http://noonoofingers.com/web/product/extra/big/201710/935_shop1_763535.jpg); background-position: center center; background-size: contain;\"></div>\n          <div class=\"info\">\n            <h5 class=\"item-title\">Twinkle Flower</h5>\n            <p>45,000원</p>\n            <button class=\"btn btn-primary\">구매하기</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"item\">\n        <div class=\"item-wrap\">\n          <div class=\"photo\"\n               style=\"height:110px; background-repeat: no-repeat; background-image: url(http://noonoofingers.com/web/product/extra/big/201710/937_shop1_878202.jpg); background-position: center center; background-size: contain;\"></div>\n          <div class=\"info\">\n            <h5 class=\"item-title\">Dream Start</h5>\n            <p>45,000원</p>\n            <button class=\"btn btn-primary\">구매하기</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 533:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 806:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(370);


/***/ })

},[806]);
//# sourceMappingURL=main.bundle.js.map