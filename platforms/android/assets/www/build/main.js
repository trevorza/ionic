webpackJsonp([6],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SearchResultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SearchResultPage = (function () {
    function SearchResultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.post = {
            "images": ["./assets/images/listing/200x200basquet.png",
                "./assets/images/listing/200x200swimming.png",
                "./assets/images/listing/300x300ExtremeSports.png"],
            "address": "Sample Address",
            "likesCount": 53,
            "commentsCount": 5,
            "meLikes": false,
            "date": "2017-11-20",
            "comments": [{ "name": "Sinho0689", "comment": "seems good" },
                { "name": "Sinho0689", "comment": "seems good" },
                { "name": "Sinho0689", "comment": "seems good" }]
        };
        this.title = navParams.get('item');
    }
    SearchResultPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchResultPage');
    };
    return SearchResultPage;
}());
SearchResultPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-search-result',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/search-result/search-result.html"*/'<!--\n  Generated template for the SearchResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-item no-lines>\n      <ion-slides pager loop="true">\n        <ion-slide *ngFor="let slide of post.images">\n          <preload-image src="{{slide}}" [ratio]="{w:1, h:1}"></preload-image>\n        </ion-slide>\n      </ion-slides>\n      <ion-row>\n        <ion-col width-75>\n          <a>\n            model\n          </a>\n        </ion-col>\n        <ion-col width-25>\n          <p>{{post.date}}</p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <p>{{post.address}}</p>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row no-padding class="actions-row">\n        <ion-col no-padding width-30 text-left>\n          <button class="action-button" ion-button clear small icon-left (click)="likePoast(post)">\n            <ion-icon isActive="{{post.liked}}" name=\'heart\' color="danger" *ngIf="post.meLikes"></ion-icon>\n            <ion-icon isActive="{{post.liked}}" name=\'heart\' color="dark" *ngIf="!post.meLikes"></ion-icon>\n            {{post.likesCount}} {{\'LIKES\' | translate}}\n          </button>\n        </ion-col>\n        <ion-col no-padding width-45 text-center>\n          <button class="action-button" ion-button clear small icon-left (click)="commentPost(post)">\n            <ion-icon name=\'chatbubbles\' color="danger"></ion-icon>\n            {{post.commentsCount}} {{\'COMMENTS\' | translate}}\n          </button>\n        </ion-col>\n        <ion-col no-padding width-25 text-right>\n          <button class="action-button" ion-button clear small icon-left (click)="sharePost(post)">\n            <ion-icon name=\'share-alt\'></ion-icon>\n            {{\'SHARE\' | translate}}\n          </button>\n        </ion-col>\n      </ion-row>\n  \n      <ion-row>\n        <ion-col>\n          <p>\n            {{post.comments[0].name}} {{\': \'}} {{post.comments[0].comment}}\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <p>\n            {{post.comments[1].name}} {{\': \'}} {{post.comments[1].comment}}\n          </p>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <p>\n            {{post.comments[2].name}} {{\': \'}} {{post.comments[2].comment}}\n          </p>\n        </ion-col>\n      </ion-row>\n  \n    </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/search-result/search-result.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], SearchResultPage);

//# sourceMappingURL=search-result.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FollowersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FollowersPage = (function () {
    function FollowersPage(menu, navParams) {
        this.menu = menu;
        this.navParams = navParams;
        this.followers = [];
        this.followings = [];
        this.selectedTab = 'follower';
        this.followers = navParams.get('followers');
        this.followings = navParams.get('followings');
    }
    FollowersPage.prototype.ionViewDidEnter = function () {
        // the root left menu should be disabled on this page
        this.menu.enable(false);
    };
    FollowersPage.prototype.ionViewWillLeave = function () {
        // enable the root left menu when leaving the tutorial page
        this.menu.enable(true);
    };
    FollowersPage.prototype.onFollowers = function () {
        this.selectedTab = 'follower';
    };
    FollowersPage.prototype.onFollowings = function () {
        this.selectedTab = 'following';
    };
    return FollowersPage;
}());
FollowersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'followers-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/followers/followers.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'FOLLOWERS\' | translate }}{{\'/\'}}{{\'FOLLOWING\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="followers-content">\n  <!-- <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar> -->\n  \n   <div class="tabs-group">\n    <span class="tab-span">\n      <a (click)="onFollowers()">\n        <font color="selected" *ngIf="selectedTab==\'follower\'">{{"FOLLOWERS" | translate}}</font>\n        <font color="#afabb3" *ngIf="selectedTab!=\'follower\'">{{"FOLLOWERS" | translate}}</font>\n      </a>\n    </span>\n    <span class="tab-span">\n      <a (click)="onFollowings()">\n        <font color="selected" *ngIf="selectedTab==\'following\'">{{"FOLLOWING" | translate}}</font>\n        <font color="#afabb3" *ngIf="selectedTab!=\'following\'">{{"FOLLOWING" | translate}}</font>\n      </a>\n    </span>\n  </div>\n\n  <ion-list class="followers-list" *ngIf="selectedTab==\'follower\'">\n    <ion-item class="list-item" *ngFor="let item of followers">\n      <ion-thumbnail item-left>\n        <preload-image [ratio]="{w:1, h:1}" [src]="item.image" alt="item.name" title="item.name" class="profile-image"></preload-image>\n      </ion-thumbnail>\n      <h2 class="item-title">{{item.name}}</h2>\n      <p class="item-description" rows="2">{{item.about}}</p>\n      <button class="relation-button" [ngClass]="{following: !item.inverse_relation}" ion-button item-right>\n        {{\'ADD_FRIEND\'| translate}}\n      </button>\n    </ion-item>\n  </ion-list>\n\n  <ion-list class="followers-list" *ngIf="selectedTab==\'following\'">\n    <ion-item class="list-item" *ngFor="let item of followings">\n      <ion-thumbnail item-left>\n        <preload-image [ratio]="{w:1, h:1}" [src]="item.image" alt="item.name" title="item.name" class="profile-image"></preload-image>\n      </ion-thumbnail>\n      <h2 class="item-title">{{item.name}}</h2>\n      <p class="item-description" rows="2">{{item.about}}</p>\n      <button class="remove-button" [ngClass]="{following: !item.inverse_relation}" ion-button item-right>\n        <img src="../../assets/images/settings/cancel.png" class="remove-image"/>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/followers/followers.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], FollowersPage);

//# sourceMappingURL=followers.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsOfServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TermsOfServicePage = (function () {
    function TermsOfServicePage(view) {
        this.view = view;
    }
    TermsOfServicePage.prototype.dismiss = function () {
        this.view.dismiss();
    };
    return TermsOfServicePage;
}());
TermsOfServicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'terms-of-service-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/terms-of-service/terms-of-service.html"*/'<ion-header class="terms-header legal-header">\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span showWhen="ios">{{\'CANCEL\' | translate }}</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      Terms of Service\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="terms-content legal-content">\n  <p>{{\'LAST_MODIFIED\' | translate }}: Nov 14, 2016</p>\n  <h4 class="legal-title">{{\'WELCOME_TO\' | translate}} ion2FullApp!</h4>\n  <p>Thanks for using our products and services (“Services”). Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n  <h4 class="legal-title">{{\'USING_OUR_SERVICES\' | translate}}</h4>\n  <p>You must follow any policies made available to you within the Services.</p>\n  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n  <h4 class="legal-title">{{\'ABOUT_THIS_TERMS\' | translate}}</h4>\n  <p>We may modify these terms or any additional terms that apply to a Service to, for example, reflect changes to the law or changes to our Services. You should look at the terms regularly. We’ll post notice of modifications to these terms on this page. We’ll post notice of modified additional terms in the applicable Service. Changes will not apply retroactively and will become effective no sooner than fourteen days after they are posted. However, changes addressing new functions for a Service or changes made for legal reasons will be effective immediately. If you do not agree to the modified terms for a Service, you should discontinue your use of that Service.</p>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/terms-of-service/terms-of-service.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
], TermsOfServicePage);

//# sourceMappingURL=terms-of-service.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrivacyPolicyPage = (function () {
    function PrivacyPolicyPage(view) {
        this.view = view;
    }
    PrivacyPolicyPage.prototype.dismiss = function () {
        this.view.dismiss();
    };
    return PrivacyPolicyPage;
}());
PrivacyPolicyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'privacy-policy-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/privacy-policy/privacy-policy.html"*/'<ion-header class="privacy-header legal-header">\n  <ion-toolbar>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span showWhen="ios">{{\'CANCEL\' | translate}}</span>\n        <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      {{\'PRIVACY_POLICY\' | translate }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="privacy-content legal-content">\n  <p>{{\'LAST_MODIFIED\' | translate }}: Nov 14, 2016</p>\n  <h4 class="legal-title">{{\'WELCOME_TO\' | translate}} ion2FullApp!</h4>\n  <p>Thanks for using our products and services (“Services”). Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n  <h4 class="legal-title">{{\'USING_OUR_SERVICES\' | translate}}</h4>\n  <p>You must follow any policies made available to you within the Services.</p>\n  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>\n  <h4 class="legal-title">{{\'ABOUT_THIS_TERMS\' | translate}}</h4>\n  <p>We may modify these terms or any additional terms that apply to a Service to, for example, reflect changes to the law or changes to our Services. You should look at the terms regularly. We’ll post notice of modifications to these terms on this page. We’ll post notice of modified additional terms in the applicable Service. Changes will not apply retroactively and will become effective no sooner than fourteen days after they are posted. However, changes addressing new functions for a Service or changes made for legal reasons will be effective immediately. If you do not agree to the modified terms for a Service, you should discontinue your use of that Service.</p>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/privacy-policy/privacy-policy.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ViewController */]])
], PrivacyPolicyPage);

//# sourceMappingURL=privacy-policy.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WalkthroughPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_navigation_tabs_navigation__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WalkthroughPage = (function () {
    function WalkthroughPage(nav) {
        this.nav = nav;
    }
    WalkthroughPage.prototype.skipIntro = function () {
        // You can skip to main app
        // this.nav.setRoot(TabsNavigationPage);
        // Or you can skip to last slide (login/signup slide)
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_navigation_tabs_navigation__["a" /* TabsNavigationPage */]);
    };
    WalkthroughPage.prototype.onSlideChanged = function () {
        // If it's the last slide, then hide the 'Skip' button on the header
    };
    return WalkthroughPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Slides */])
], WalkthroughPage.prototype, "slider", void 0);
WalkthroughPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'walkthrough-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/walkthrough/walkthrough.html"*/'<ion-header class="walkthrough-header">\n  <ion-toolbar>\n    <ion-buttons end>\n      <button ion-button class="skip-button" (click)="skipIntro()">{{\'SKIP\' | translate}}</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="walkthrough-content">\n  <ion-slides #slider (ionSlideDidChange)="onSlideChanged()" pager="true">\n    <ion-slide class="slide-1">\n      <ion-row class="intro-image-row">\n        <ion-col center width-64 no-padding>\n          <preload-image [ratio]="{w:1, h:1}" src="./assets/images/logo_white.png" alt="app logo" title="ion2FullApp"></preload-image>\n        </ion-col>\n      </ion-row>\n      <h2 class="main-title">{{\'WELCOME!\' | translate}}</h2>\n      <p class="intro-text">\n        This is the new <b>Ionic 3</b> Full App Template\n      </p>\n      <p class="intro-text">\n        ELITE version\n      </p>\n    </ion-slide>\n    <ion-slide class="slide-2">\n      <ion-row class="intro-image-row">\n        <ion-col center width-64 no-padding>\n          <preload-image [ratio]="{w:1, h:1}" src="./assets/images/slide-2-img.png" alt="slide 2 img" title="ion2FullApp"></preload-image>\n        </ion-col>\n      </ion-row>\n      <h2 class="main-title">{{\'WAKE_UP!\' | translate}}</h2>\n      <p class="intro-text">\n        We should get started.\n      </p>\n      <p class="intro-text">\n        Here we have a beautiful walkthrough\n      </p>\n    </ion-slide>\n    <ion-slide class="slide-3">\n      <ion-row class="intro-image-row">\n        <ion-col center width-64 no-padding>\n          <preload-image [ratio]="{w:1, h:1}" src="./assets/images/slide-3-img.png" alt="slide 3 img" title="ion2FullApp"></preload-image>\n        </ion-col>\n      </ion-row>\n      <h2 class="main-title">{{\'GET_READY!\' | translate}}</h2>\n      <p class="intro-text">\n        Soon your app will look and feel awesome!\n      </p>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/walkthrough/walkthrough.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
], WalkthroughPage);

//# sourceMappingURL=walkthrough.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_model__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__feed_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FeedPage = (function () {
    function FeedPage(nav, feedService, navParams, loadingCtrl, socialSharing) {
        this.nav = nav;
        this.feedService = feedService;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.socialSharing = socialSharing;
        this.feed = new __WEBPACK_IMPORTED_MODULE_4__feed_model__["a" /* FeedModel */]();
        this.feed.category = navParams.get('category');
        this.loading = this.loadingCtrl.create();
    }
    FeedPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.feedService
            .getPosts()
            .then(function (posts) {
            _this.feed.posts = posts;
            _this.loading.dismiss();
        });
    };
    FeedPage.prototype.goToProfile = function (event, item) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */], {
            user: item
        });
    };
    FeedPage.prototype.getRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    FeedPage.prototype.sharePost = function (post) {
        //this code is to use the social sharing plugin
        // message, subject, file, url
        this.socialSharing.share(post.description, post.title, post.image, null)
            .then(function () {
            console.log('Success!');
        })
            .catch(function () {
            console.log('Error');
        });
    };
    return FeedPage;
}());
FeedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'feed-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/feed/feed.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <span>{{ feed.category.title }}</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="feed-content">\n  <div class="feed-item" *ngFor="let post of feed.posts">\n    <ion-card>\n      <preload-image [ratio]="{w:3, h:2}" [src]="post.image" title="post.title"></preload-image>\n      <ion-card-content>\n        <ion-card-title class="item-title">\n          {{post.title}}\n        </ion-card-title>\n        <p class="item-text">\n          {{post.description}}\n        </p>\n      </ion-card-content>\n      <ion-row no-padding class="actions-row">\n        <ion-col no-padding width-30 text-left>\n          <button class="action-button" ion-button clear small icon-left>\n            <ion-icon isActive="{{post.liked}}" name=\'heart\'></ion-icon>\n            {{post.likes}} {{\'LIKES\' | translate}}\n          </button>\n        </ion-col>\n        <ion-col no-padding width-45 text-center>\n          <button class="action-button" ion-button clear small icon-left>\n            <ion-icon name=\'chatbubbles\'></ion-icon>\n            {{post.comments}} {{\'COMMENTS\' | translate}}\n          </button>\n        </ion-col>\n        <ion-col no-padding width-25 text-right>\n          <button class="action-button" ion-button clear small (click)="sharePost(post)" icon-left>\n            <ion-icon name=\'share-alt\'></ion-icon>\n            {{\'SHARE\' | translate}}\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/feed/feed.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__feed_service__["a" /* FeedService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]])
], FeedPage);

//# sourceMappingURL=feed.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageEditPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageEditPage = (function () {
    function ImageEditPage(menu, app, navParams, translate, loadingCtrl, imagePicker, nav) {
        this.menu = menu;
        this.app = app;
        this.navParams = navParams;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
        this.nav = nav;
        this.loading = this.loadingCtrl.create();
        this.image = navParams.get("image");
    }
    ImageEditPage.prototype.ionViewDidLoad = function () {
    };
    ImageEditPage.prototype.onCancel = function () {
        this.nav.pop();
    };
    ImageEditPage.prototype.onApply = function () {
        this.nav.pop();
    };
    ImageEditPage.prototype.refreshImage = function () {
    };
    return ImageEditPage;
}());
ImageEditPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'imageedit-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/imageedit/imageedit.html"*/'<ion-content class="image-edit-content">\n\n  <preload-image [ratio]="{w:1, h:1}" [src]="image"></preload-image>\n\n  <ion-item>\n    <ion-label><ion-icon small name="sunny"></ion-icon>{{\'BRIGHTNESS\' | translate}}</ion-label>\n    <ion-range min="-100" max="100" [(ngModel)]="brightness" color="secondary" ionChange="refreshImage()">\n      <ion-label range-left>-1</ion-label>\n      <ion-label range-right>1</ion-label>\n    </ion-range>\n  </ion-item>\n\n  <ion-item>\n    <ion-label><ion-icon small name="contrast"></ion-icon>{{\'SHARPNESS\' | translate}}</ion-label>\n    <ion-range min="-100" max="100" [(ngModel)]="sharpness" color="secondary"ionChange="refreshImage()">\n      <ion-label range-left>-1</ion-label>\n      <ion-label range-right>1</ion-label>\n    </ion-range>\n  </ion-item>\n\n  <div class="buttons">\n    <a (click)="onCancel()">\n      <div class="cancelBtn">\n        {{\'CANCEL\' | translate}}\n      </div>\n    </a>\n    <a (click)="onApply()">\n      <div class="applyBtn">\n        {{\'APPLY\' | translate}}\n      </div>\n    </a>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/imageedit/imageedit.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
], ImageEditPage);

//# sourceMappingURL=imageedit.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileService = (function () {
    function ProfileService(http, nativeStorage) {
        this.http = http;
        this.nativeStorage = nativeStorage;
    }
    ProfileService.prototype.getData = function () {
        return this.http.get('./assets/example_data/profile.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProfileService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ProfileService.prototype.getUserImage = function () {
        return this.nativeStorage.getItem('profileImage');
    };
    ProfileService.prototype.setUserImage = function (newImage) {
        this.nativeStorage.setItem('profileImage', newImage);
    };
    return ProfileService;
}());
ProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */]])
], ProfileService);

//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = counterRangeValidator;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CounterInput; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var noop = function () { };
function counterRangeValidator(maxValue, minValue) {
    return function (c) {
        var err = {
            rangeError: {
                given: c.value,
                max: maxValue || 10,
                min: minValue || 0
            }
        };
        return (c.value > +maxValue || c.value < +minValue) ? err : null;
    };
}
var CounterInput = CounterInput_1 = (function () {
    function CounterInput() {
        this.propagateChange = noop;
        this.validateFn = noop;
        this._counterValue = 0;
    }
    Object.defineProperty(CounterInput.prototype, "counterValue", {
        get: function () {
            return this._counterValue;
        },
        set: function (val) {
            this._counterValue = val;
            this.propagateChange(val);
        },
        enumerable: true,
        configurable: true
    });
    CounterInput.prototype.ngOnChanges = function (inputs) {
        if (inputs.counterRangeMax || inputs.counterRangeMin) {
            this.validateFn = counterRangeValidator(this.counterRangeMax, this.counterRangeMin);
        }
    };
    CounterInput.prototype.writeValue = function (value) {
        if (value) {
            this.counterValue = value;
        }
    };
    CounterInput.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    CounterInput.prototype.registerOnTouched = function () { };
    CounterInput.prototype.increase = function () {
        this.counterValue++;
    };
    CounterInput.prototype.decrease = function () {
        this.counterValue--;
    };
    CounterInput.prototype.validate = function (c) {
        return this.validateFn(c);
    };
    return CounterInput;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('counterValue'),
    __metadata("design:type", Object)
], CounterInput.prototype, "_counterValue", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('max'),
    __metadata("design:type", Object)
], CounterInput.prototype, "counterRangeMax", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('min'),
    __metadata("design:type", Object)
], CounterInput.prototype, "counterRangeMin", void 0);
CounterInput = CounterInput_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'counter-input',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/components/counter-input/counter-input.html"*/'<button ion-button icon-only class="counter-icon" (click)="decrease()">\n  <ion-icon name="remove"></ion-icon>\n</button>\n<span class="counter-inner">{{counterValue}}</span>\n<button ion-button icon-only class="counter-icon" (click)="increase()">\n  <ion-icon name="add"></ion-icon>\n</button>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/components/counter-input/counter-input.html"*/,
        host: {
            'class': 'counter-input'
        },
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CounterInput_1; }), multi: true },
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CounterInput_1; }), multi: true }
        ]
    })
], CounterInput);

var CounterInput_1;
//# sourceMappingURL=counter-input.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_result_search_result__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SearchPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SearchPage = (function () {
    function SearchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedTab = 4;
        this.items = [
            "Amsterdam",
            "Amsterdam",
            "Amsterdam",
            "Amsterdam",
            "Amsterdam",
            "Amsterdam",
            "Amsterdam",
            "Amsterdam",
            "Amsterdam",
            "Amsterdam",
            "Amsterdam",
            "Amsterdam",
        ];
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
        this.loadMap();
    };
    SearchPage.prototype.onBack = function () {
        this.navCtrl.pop();
    };
    SearchPage.prototype.onClickTab = function (value) {
        this.selectedTab = value;
        console.log('----clicked----');
        if (value == 4) {
            this.loadMap();
        }
    };
    SearchPage.prototype.onItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_result_search_result__["a" /* SearchResultPage */], { item: item });
    };
    SearchPage.prototype.loadMap = function () {
        var latLng = new google.maps.LatLng(-34.9290, 138.6010);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    return SearchPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], SearchPage.prototype, "mapElement", void 0);
SearchPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-search',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/search/search.html"*/'<!--\n  Generated template for the SearchPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <div style="display: flex; align-items: center;">\n    <span>\n      <a (click)="onBack()">\n        <img src="../../assets/images/search/Back.png"/>\n      </a>\n    </span>\n    <span style="flex: 1;">\n      <ion-searchbar [showCancelButton]="shouldShowCancel" [(ngModel)]="searchText"></ion-searchbar>\n    </span>\n  </div>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="tab-container">\n    <span>\n      <a (click)="onClickTab(1)">\n        <ion-icon name="menu" class="icon-size selected" *ngIf="selectedTab == 1"></ion-icon>\n        <ion-icon name="menu" class="icon-size unselected" *ngIf="selectedTab != 1"></ion-icon>\n      </a>\n    </span>\n    <span>\n      <a (click)="onClickTab(2)">\n        <ion-icon name="person" class="icon-size selected"  *ngIf="selectedTab == 2"></ion-icon>\n        <ion-icon name="person" class="icon-size unselected"  *ngIf="selectedTab != 2"></ion-icon>\n      </a>\n    </span>\n    <span>\n      <a (click)="onClickTab(3)">\n        <ion-icon name="water" class="icon-size selected" *ngIf="selectedTab == 3"></ion-icon>\n        <ion-icon name="water" class="icon-size unselected" *ngIf="selectedTab != 3"></ion-icon>\n      </a>\n    </span>\n    <span>\n      <a (click)="onClickTab(4)">\n        <ion-icon name="pin" class="icon-size selected" *ngIf="selectedTab == 4"></ion-icon>\n        <ion-icon name="pin" class="icon-size unselected" *ngIf="selectedTab != 4"></ion-icon>\n      </a>\n    </span>\n  </div>\n\n  <div *ngIf="selectedTab == 1">\n    <ion-list>\n      <ion-item *ngFor="let item of items">\n        <a (click)="onItem(item)">\n           {{item}}\n        </a>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div *ngIf="selectedTab == 4"  class="map-container">\n    <div #map id="map"></div>\n  </div>\n  \n\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/search/search.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], SearchPage);

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SearchResultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ImageViewDetailPage = (function () {
    function ImageViewDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.selectedTab = "vr"; // vr, photo
        this.profileImage = "../../assets/images/notifications/100x100Notification1.jpeg";
        this.profileName = "Test Title";
        this.post = navParams.get('item');
    }
    ImageViewDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImageViewDetailPage');
        this.loadMap();
    };
    ImageViewDetailPage.prototype.onBack = function () {
        console.log('----back----');
        this.navCtrl.pop();
    };
    ImageViewDetailPage.prototype.loadMap = function () {
        var latLng = new google.maps.LatLng(-34.9290, 138.6010);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    return ImageViewDetailPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], ImageViewDetailPage.prototype, "mapElement", void 0);
ImageViewDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-imageview-detail',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/imageviewdetail/imageview-detail.html"*/'<!--\n  Generated template for the SearchResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton color="light">\n    <div style="display: flex; align-items: center; background-color:white;">\n      <span>\n        <a (click)="onBack()">\n          <img src="../../assets/images/homeHeader/back.png" />\n        </a>\n      </span>\n      <div style="flex: 1; text-align: center;">\n        {{profileName}}\n      </div>\n      <span>\n        <a (click)="onNotificationPage()">\n          <img src="../../assets/images/homeHeader/chat.png" />\n        </a>\n      </span>\n      <span>\n        <a (click)="onClickMenu()">\n          <img src="../../assets/images/homeHeader/menu.png" />\n        </a>\n      </span>\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="main-content">\n  <div>\n    content\n  </div>\n  <div #map class="map-view" ></div>\n</ion-content>\n\n<ion-footer>\n  <ion-item class="footer-item">\n    <div class="footer-image" item-left>\n      <img class="user-image" src="{{profileImage}}" />\n    </div>\n    <div class="footer-content">\n      <p class="item-title">\n        {{profileName}}\n      </p>\n    </div>\n    <ion-note class="item-time" item-right>\n      <div>\n        <button icon-only ion-button clear small class="del-button">\n          <ion-icon name=\'heart\' color="dark"></ion-icon>\n        </button>\n      </div>\n    </ion-note>\n  </ion-item>\n</ion-footer>'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/imageviewdetail/imageview-detail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
], ImageViewDetailPage);

//# sourceMappingURL=imageview-detail.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__imageviewdetail_imageview_detail__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








/**
 * Generated class for the SearchResultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ImageViewPage = (function () {
    function ImageViewPage(navCtrl, socialSharing, _renderer2, _document, actionsheetCtrl, toastCtrl, translate, clipboard, platform, alertCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.socialSharing = socialSharing;
        this._renderer2 = _renderer2;
        this._document = _document;
        this.actionsheetCtrl = actionsheetCtrl;
        this.toastCtrl = toastCtrl;
        this.translate = translate;
        this.clipboard = clipboard;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.navParams = navParams;
        this.selectedTab = "vr"; // vr, photo
        this.profileImage = "../../assets/images/notifications/100x100Notification1.jpeg";
        this.profileName = "Test Title";
        this.post = navParams.get('item');
    }
    ImageViewPage.prototype.ngOnInit = function () {
        if (this.selectedTab == "vr")
            this.selectVR();
    };
    ImageViewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ImageViewPage');
    };
    ImageViewPage.prototype.onBack = function () {
        console.log('----back----');
        this.navCtrl.pop();
    };
    ImageViewPage.prototype.selectPhoto = function () {
        console.log('--photo--');
        this.selectedTab = "photo";
    };
    ImageViewPage.prototype.selectVR = function () {
        var _this = this;
        console.log('--photo--');
        this.selectedTab = "vr";
        setTimeout(function () {
            var s = _this._renderer2.createElement('script');
            s.text = "\n          embedpano({swf:\"./assets/krpano/krpano-tour.swf\", xml:\"./assets/krpano/krpano-tour.xml\", target:\"pano\", html5:\"auto\", mobilescale:1.0, passQueryParameters:true});\n      ";
            _this._renderer2.appendChild(_this._document.body, s);
        }, 100);
        //this.tempView = embedpano({ swf: "../../assets/krpano/krpano-tour.swf", xml: "../../assets/krpano/krpano-tour.xml", target: "pano", html5: "auto", mobilescale: 1.0, passQueryParameters: true });
    };
    ImageViewPage.prototype.showDetail = function () {
        console.log('--todetail---');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__imageviewdetail_imageview_detail__["a" /* ImageViewDetailPage */], { item: this.post });
    };
    ImageViewPage.prototype.onNotificationPage = function () {
    };
    ImageViewPage.prototype.onClickMenu = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].forkJoin(this.translate.get('COPY_URL_LINK'), this.translate.get('SHARE'), this.translate.get('EDIT'), this.translate.get('RE_POST'), this.translate.get('REMOVE'), this.translate.get('CURRENT_POSTING_WILL_BE_RE_POSTED_AGAIN_NOW_DO_YOU_WANT_TO_RE_POST'), this.translate.get('CURRENT_POSTING_WILL_BE_REMOVED_DO_YOU_WANT_TO_CONTINUE'), this.translate.get('CANCEL')).subscribe(function (data) {
            _this.clipboardToast = _this.toastCtrl.create({
                message: data[4],
                duration: 3000,
                position: 'bottom'
            });
            _this.moreActionSheet = _this.actionsheetCtrl.create({
                title: 'Select an action',
                buttons: [
                    {
                        text: data[0],
                        role: 'destructive',
                        icon: !_this.platform.is('ios') ? 'link' : null,
                        handler: function () {
                            //this.clipboard.copy(this.profile.user.image);
                            _this.clipboard.paste().then(function (resolve) {
                                _this.clipboardToast.present();
                            }, function (reject) {
                            });
                        }
                    },
                    {
                        text: data[1],
                        role: 'destructive',
                        icon: !_this.platform.is('ios') ? 'share' : null,
                        handler: function () {
                        }
                    },
                    {
                        text: data[2],
                        role: 'destructive',
                        icon: !_this.platform.is('ios') ? 'create' : null,
                        handler: function () {
                        }
                    },
                    {
                        text: data[3],
                        role: 'destructive',
                        icon: !_this.platform.is('ios') ? 'redo' : null,
                        handler: function () {
                            var confirm = _this.alertCtrl.create({
                                title: "ALERT",
                                message: data[5],
                                buttons: [
                                    {
                                        text: data[7],
                                        handler: function () {
                                        }
                                    },
                                    {
                                        text: data[3],
                                        handler: function () {
                                        }
                                    }
                                ]
                            });
                            confirm.present();
                        }
                    },
                    {
                        text: data[4],
                        role: 'destructive',
                        icon: !_this.platform.is('ios') ? 'trash' : null,
                        handler: function () {
                            var confirm = _this.alertCtrl.create({
                                title: "ALERT",
                                message: data[6],
                                buttons: [
                                    {
                                        text: data[7],
                                        handler: function () {
                                        }
                                    },
                                    {
                                        text: data[4],
                                        handler: function () {
                                        }
                                    }
                                ]
                            });
                            confirm.present();
                        }
                    }
                ]
            });
            _this.moreActionSheet.present();
        });
    };
    return ImageViewPage;
}());
ImageViewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-imageview',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/imageview/imageview.html"*/'<!--\n  Generated template for the SearchResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton color="light">\n    <div style="display: flex; align-items: center; background-color:white;">\n      <span>\n        <a (click)="onBack()">\n          <img src="../../assets/images/homeHeader/back.png" />\n        </a>\n      </span>\n      <ion-segment style="flex: 1; margin: 10px;" [(ngModel)]="selectedTab" class="segment-buttons">\n        <ion-segment-button value="vr" class="selected" *ngIf="selectedTab==\'vr\'" (ionSelect)="selectVR()">\n          <font class="selected-font">VR</font>\n        </ion-segment-button>\n        <ion-segment-button value="vr" class="unselected" *ngIf="selectedTab!=\'vr\'" (ionSelect)="selectVR()">\n          <font class="unselected-font">VR</font>\n        </ion-segment-button>\n        <ion-segment-button value="photo" class="selected" *ngIf="selectedTab==\'photo\'" (ionSelect)="selectPhoto()">\n          <font class="selected-font">PHOTO</font>\n        </ion-segment-button>\n        <ion-segment-button value="photo" class="unselected" *ngIf="selectedTab!=\'photo\'" (ionSelect)="selectPhoto()">\n          <font class="unselected-font">PHOTO</font>\n        </ion-segment-button>\n      </ion-segment>\n      <span>\n        <a (click)="onNotificationPage()">\n          <img src="../../assets/images/homeHeader/chat.png" />\n        </a>\n      </span>\n      <span>\n        <a (click)="onClickMenu()">\n          <img src="../../assets/images/homeHeader/menu.png" />\n        </a>\n      </span>\n    </div>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="main-content">\n  <div *ngIf="selectedTab==\'vr\'" style="width:100%;height:100%;">\n    <div id="pano" style="width:100%;height:100%;">\n    </div>\n  </div>\n\n  <div *ngIf="selectedTab==\'photo\'"  class="slide-view">\n    <ion-slides pager loop="true">\n      <ion-slide *ngFor="let slide of post.images">\n        <img src="{{slide}}" class="slide-image"/>\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-item class="footer-item">\n    <div class="footer-image" item-left>\n      <img class="user-image" src="{{profileImage}}" />\n    </div>\n    <div class="footer-content">\n      <a (click)="showDetail()"><p class="item-title">\n        {{profileName}}\n      </p></a>\n    </div>\n    <ion-note class="item-time" item-right>\n      <div>\n        <button icon-only ion-button clear small class="del-button">\n          <ion-icon name=\'heart\' color="dark"></ion-icon>\n        </button>\n      </div>\n    </ion-note>\n  </ion-item>\n</ion-footer>'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/imageview/imageview.html"*/,
    }),
    __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], Object, __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__["a" /* Clipboard */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavParams */]])
], ImageViewPage);

//# sourceMappingURL=imageview.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SearchResultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ChangePasswordPage = (function () {
    function ChangePasswordPage(navCtrl, navParams, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchResultPage');
    };
    ChangePasswordPage.prototype.onBack = function () {
        console.log('back');
        this.navCtrl.pop();
    };
    ChangePasswordPage.prototype.onSave = function () {
        this.navCtrl.pop();
    };
    return ChangePasswordPage;
}());
ChangePasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-change-password',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/change-password/change-password.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <div style="display: flex; align-items: center;">\n      <span>\n        <a (click)="onBack()">\n          <img src="../../assets/images/settings/cancel.png" />\n        </a>\n      </span>\n      <span style="flex: 1; text-align: center; color: white;">\n        {{\'CHANGE_PWD\' | translate}}\n      </span>\n      <span>\n        <a (click)="onSave()">\n          <img src="../../assets/images/settings/save.png" />\n        </a>\n      </span>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-item>\n      <ion-label floating>{{\'CURRENT_PW\'|translate }}</ion-label>\n      <ion-input [(ngModel)]="currentPassword" type="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>{{\'NEW_PW\'|translate }}</ion-label>\n      <ion-input [(ngModel)]="newPassword" type="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label floating>{{\'CONFIRM_PW\'|translate }}</ion-label>\n      <ion-input [(ngModel)]="confirmPassword" type="password"></ion-input>\n    </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/change-password/change-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], ChangePasswordPage);

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SearchResultPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AppSettingPage = (function () {
    function AppSettingPage(navCtrl, navParams, translate) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.defulatLanguage = 'ko';
        this.sharePosition = false;
        this.receiveImpSMS = false;
        this.alertDistance = 2;
        this.fontSize = 'small';
    }
    AppSettingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchResultPage');
    };
    AppSettingPage.prototype.onBack = function () {
        console.log('back');
        this.navCtrl.pop();
    };
    AppSettingPage.prototype.onSave = function () {
        this.navCtrl.pop();
    };
    return AppSettingPage;
}());
AppSettingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-app-setting',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/app-setting/app-setting.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <div style="display: flex; align-items: center;">\n      <span>\n        <a (click)="onBack()">\n          <img src="../../assets/images/settings/cancel.png" />\n        </a>\n      </span>\n      <span style="flex: 1; text-align: center; color: white;">\n        {{\'SETTINGS\' | translate}}\n      </span>\n      <span>\n        <a (click)="onSave()">\n          <img src="../../assets/images/settings/save.png" />\n        </a>\n      </span>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<!-- \n   "DEFAULT_LANGUAGE": "기본 언어", "SHARE_MY_GPS_INFO": "내 위치정보 이용", "RECEIVING_IMPO_SMS": "중요정보 메시지 알림", "ALERT_DISTANCE": "알림\n  거리 범위", "FONT_SIZE": "폰트 크기" -->\n  <ion-item class="setting-item">\n    <ion-label>{{\'DEFAULT_LANGUAGE\' | translate}}</ion-label>\n    <ion-select [(ngModel)]="defulatLanguage">\n      <ion-option value="en">English</ion-option>\n      <ion-option value="ko">Korean</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item class="setting-item">\n    <ion-label>{{\'SHARE_MY_GPS_INFO\' | translate}}</ion-label>\n    <ion-toggle [(ngModel)]="sharePosition"></ion-toggle>\n  </ion-item>\n\n  <ion-item class="setting-item">\n    <ion-label>{{\'RECEIVING_IMPO_SMS\' | translate}}</ion-label>\n    <ion-toggle [(ngModel)]="receiveImpSMS"></ion-toggle>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>{{\'ALERT_DISTANCE\' | translate}}</ion-label>\n    <ion-range min="0" max="200" [(ngModel)]="alertDistance" color="secondary">\n      <ion-label range-left>1m</ion-label>\n      <ion-label range-right>200m</ion-label>\n    </ion-range>\n  </ion-item>\n\n  <ion-item class="setting-item">\n    <ion-label>{{\'FONT_SIZE\' | translate}}</ion-label>\n    <ion-select [(ngModel)]="fontSize">\n      <ion-option value="small">Small</ion-option>\n      <ion-option value="medium">medium</ion-option>\n      <ion-option value="big">big</ion-option>\n    </ion-select>\n  </ion-item>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/app-setting/app-setting.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], AppSettingPage);

//# sourceMappingURL=app-setting.js.map

/***/ }),

/***/ 183:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 183;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/app-setting/app-setting.module": [
		725,
		5
	],
	"../pages/change-password/change-password.module": [
		724,
		4
	],
	"../pages/imageview/imageview.module": [
		723,
		3
	],
	"../pages/imageviewdetail/imageview-detail.module": [
		722,
		2
	],
	"../pages/search-result/search-result.module": [
		720,
		1
	],
	"../pages/search/search.module": [
		721,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 226;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__feed_feed__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comments_comments__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__listing_model__ = __webpack_require__(671);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__listing_service__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__notifications_notifications__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_search__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__imageview_imageview__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var ListingPage = (function () {
    function ListingPage(app, menu, nav, listingService, loadingCtrl, authService, translate, actionsheetCtrl, platform, clipboard, socialSharing, toastCtrl) {
        var _this = this;
        this.app = app;
        this.menu = menu;
        this.nav = nav;
        this.listingService = listingService;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.translate = translate;
        this.actionsheetCtrl = actionsheetCtrl;
        this.platform = platform;
        this.clipboard = clipboard;
        this.socialSharing = socialSharing;
        this.toastCtrl = toastCtrl;
        this.listing = new __WEBPACK_IMPORTED_MODULE_8__listing_model__["a" /* ListingModel */]();
        this.searchText = '';
        this.selectedCategory = '';
        this.infiniteScrollVisible = true;
        this.posts = [];
        this.postToShare = undefined;
        this.loading = this.loadingCtrl.create();
        this.translate.onLangChange.subscribe(function (event) {
            if (event.lang == 'ar') {
                platform.setDir('rtl', true);
                platform.setDir('ltr', false);
            }
            else {
                platform.setDir('ltr', true);
                platform.setDir('rtl', false);
            }
            __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].forkJoin(_this.translate.get('SHARE'), _this.translate.get('COPY_LINK'), _this.translate.get('REPORT'), _this.translate.get('LINK_POST_COPY_CLIPBOARD')).subscribe(function (data) {
                _this.clipboardToast = _this.toastCtrl.create({
                    message: data[3],
                    duration: 3000,
                    position: 'bottom'
                });
                _this.shareActionSheet = _this.actionsheetCtrl.create({
                    title: 'Select an action',
                    buttons: [
                        {
                            text: data[0],
                            role: 'destructive',
                            icon: !_this.platform.is('ios') ? 'share' : null,
                            handler: function () {
                                _this.socialSharing.share(_this.postToShare.comments[0].comment, _this.postToShare.date, _this.postToShare.images[0])
                                    .then(function () {
                                    console.log('Success!');
                                })
                                    .catch(function () {
                                    console.log('Error');
                                });
                            }
                        },
                        {
                            text: data[1],
                            role: 'destructive',
                            icon: !_this.platform.is('ios') ? 'link' : null,
                            handler: function () {
                                _this.clipboard.copy(_this.postToShare.images[0]);
                                _this.clipboard.paste().then(function (resolve) {
                                    _this.clipboardToast.present();
                                }, function (reject) {
                                });
                            }
                        },
                        {
                            text: data[2],
                            role: 'destructive',
                            icon: !_this.platform.is('ios') ? 'paper' : null,
                            handler: function () {
                            }
                        }
                    ]
                });
            });
        });
    }
    ListingPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.listingService
            .getData()
            .then(function (data) {
            _this.listing.banner_image = data.banner_image;
            _this.listing.banner_title = data.banner_title;
            _this.listing.populars = data.populars;
            _this.listing.categories = data.categories;
            _this.listing.posts = data.posts;
            _this.loading.dismiss();
            _this.initPosts();
        });
    };
    ListingPage.prototype.onCategory = function (popular) {
        this.selectedCategory = popular.title;
    };
    ListingPage.prototype.goToFeed = function (category) {
        console.log("Clicked goToFeed", category);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__feed_feed__["a" /* FeedPage */], { category: category });
    };
    ListingPage.prototype.initPosts = function () {
        this.posts = [];
        for (var i = 0; i < 5; i++) {
            if (this.posts.length == this.listing.posts.length) {
                this.infiniteScrollVisible = false;
                break;
            }
            else {
                this.posts.push(this.listing.posts[this.posts.length]);
            }
        }
    };
    ListingPage.prototype.doPostsInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            for (var i = 0; i < 5; i++) {
                if (_this.posts.length == _this.listing.posts.length) {
                    _this.infiniteScrollVisible = false;
                    break;
                }
                else {
                    _this.posts.push(_this.listing.posts[_this.posts.length]);
                }
            }
            infiniteScroll.complete();
        }, 500);
    };
    ListingPage.prototype.likePoast = function (post) {
        post.meLikes = !post.meLikes;
    };
    ListingPage.prototype.commentPost = function (post) {
        console.log('---Post Comment---');
        this.menu.close();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__comments_comments__["a" /* CommentsPage */], {
            post: post
        });
    };
    ListingPage.prototype.sharePost = function (post) {
        this.postToShare = post;
        this.shareActionSheet.present();
    };
    ListingPage.prototype.onNotificationPage = function () {
        this.menu.close();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_12__notifications_notifications__["a" /* NotificationsPage */]);
    };
    ListingPage.prototype.onSearchbarFocus = function () {
        console.log('---focus---');
        this.menu.close();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_13__search_search__["a" /* SearchPage */]);
    };
    ListingPage.prototype.toImageView = function (item) {
        this.menu.close();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_14__imageview_imageview__["a" /* ImageViewPage */], { item: item });
    };
    return ListingPage;
}());
ListingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'listing-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/listing/listing.html"*/'<ion-header class="listing-header">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <div style="display: flex;\n		align-items: center;">\n      <span style="flex: 1;">\n        <ion-searchbar [showCancelButton]="shouldShowCancel" [(ngModel)]="searchText"(ionFocus)="onSearchbarFocus()"></ion-searchbar>\n      </span>\n       \n      <span>\n        <a><img src="../../assets/images/homeHeader/target.png"/></a>\n      </span>\n      \n      <span *ngIf="authService.authenticated()">\n        <a (click)="onNotificationPage()"><img src="../../assets/images/homeHeader/envelope.png"/></a>\n      </span>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="listing-content">\n  <background-image class="image-heading" [src]="listing.banner_image">\n    <ion-row class="heading-row">\n      <ion-col no-padding offset-100>\n        <h2 class="main-title">{{listing.banner_title}}</h2>\n      </ion-col>\n    </ion-row>\n  </background-image>\n  <h4 class="categories-title">{{\'POPULAR\' | translate}}</h4>\n  <ion-scroll scrollX="true" class="horizontal-categories">\n    <ion-row class="categories-row">\n      <ion-col width-30 class="horizontal-item"  *ngFor="let popular of listing.populars">\n        <preload-image [ratio]="{w:1, h:1}" [src]="popular.image" title="popular.title" *ngIf="selectedCategory == popular.title" class="selectedCategory"></preload-image>\n        <a (click)="onCategory(popular)"><preload-image [ratio]="{w:1, h:1}" [src]="popular.image" title="popular.title" *ngIf="selectedCategory != popular.title"></preload-image></a>\n      </ion-col>\n    </ion-row>\n  </ion-scroll>\n\n    <ion-card *ngFor="let post of posts">\n      <ion-card-content>\n        <ion-slides pager loop="true">\n          <ion-slide *ngFor="let slide of post.images">\n            <preload-image src="{{slide}}" [ratio]="{w:1, h:1}" (click)="toImageView(post)"></preload-image>\n          </ion-slide>\n        </ion-slides>\n        <ion-row>\n          <ion-col width-75>\n            <a>\n              model\n            </a>\n          </ion-col>\n          <ion-col width-25>\n            <p>{{post.date}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p>{{post.address}}</p>\n          </ion-col>\n        </ion-row>\n\n        <ion-row no-padding class="actions-row">\n          <ion-col no-padding width-30 text-left>\n            <button class="action-button" ion-button clear small  icon-left (click)="likePoast(post)">\n              <ion-icon isActive="{{post.liked}}" name=\'heart\' color="danger" *ngIf="post.meLikes"></ion-icon>\n              <ion-icon isActive="{{post.liked}}" name=\'heart\' color="dark" *ngIf="!post.meLikes"></ion-icon>\n                {{post.likesCount}} {{\'LIKES\' | translate}}\n            </button>\n          </ion-col>\n            <ion-col no-padding width-45 text-center>\n              <button class="action-button" ion-button clear small icon-left (click)="commentPost(post)">\n                <ion-icon name=\'chatbubbles\' color="danger"></ion-icon>\n                  {{post.commentsCount}} {{\'COMMENTS\' | translate}}\n              </button>\n            </ion-col>\n            <ion-col no-padding width-25 text-right>\n              <button class="action-button" ion-button clear small icon-left (click)="sharePost(post)">\n                <ion-icon name=\'share-alt\'></ion-icon>\n                {{\'SHARE\' | translate}}\n              </button>\n            </ion-col>\n          </ion-row>\n\n          <ion-row >\n            <ion-col>\n              <p>\n                {{post.comments[0].name}} {{\':   \'}} {{post.comments[0].comment}}\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row >\n            <ion-col>\n              <p>\n                {{post.comments[1].name}} {{\':   \'}} {{post.comments[1].comment}}\n              </p>\n            </ion-col>\n          </ion-row>\n          <ion-row >\n            <ion-col>\n              <p>\n                {{post.comments[2].name}} {{\':   \'}} {{post.comments[2].comment}}\n              </p>\n            </ion-col>\n          </ion-row>\n\n      </ion-card-content>        \n    </ion-card>\n\n    <ion-infinite-scroll (ionInfinite)="doPostsInfinite($event)" *ngIf="infiniteScrollVisible">\n      <ion-infinite-content>\n        <div style="margin: 0 auto;">\n          <p style="text-align: center;">\n            Loading\n          </p>\n        </div>\n      </ion-infinite-content>\n    </ion-infinite-scroll>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/listing/listing.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_9__listing_service__["a" /* ListingService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__["a" /* Clipboard */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
], ListingPage);

//# sourceMappingURL=listing.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedService = (function () {
    function FeedService(http) {
        this.http = http;
    }
    FeedService.prototype.getPosts = function () {
        return this.http.get('./assets/example_data/feed.json')
            .toPromise()
            .then(function (response) { return response.json().feed; })
            .catch(this.handleError);
    };
    FeedService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return FeedService;
}());
FeedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], FeedService);

//# sourceMappingURL=feed.service.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comments_model__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comments_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_profile__ = __webpack_require__(69);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CommentsPage = (function () {
    function CommentsPage(app, menu, nav, commentsService, loadingCtrl) {
        this.app = app;
        this.menu = menu;
        this.nav = nav;
        this.commentsService = commentsService;
        this.loadingCtrl = loadingCtrl;
        this.comments = new __WEBPACK_IMPORTED_MODULE_3__comments_model__["a" /* CommentsModel */]();
        this.curComments = [];
        this.commentsShowCount = 10;
        this.infiniteScrollVisible = true;
        this.loading = this.loadingCtrl.create();
    }
    CommentsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.commentsService
            .getData()
            .then(function (data) {
            _this.comments = data;
            _this.loading.dismiss();
            _this.initCurComments();
        })
            .catch(function (err) {
        });
    };
    CommentsPage.prototype.initCurComments = function () {
        this.curComments = [];
        for (var i = 0; i < this.commentsShowCount; i++) {
            if (this.curComments.length == this.comments.comments.length) {
                this.infiniteScrollVisible = false;
                break;
            }
            else {
                this.curComments.push(this.comments.comments[this.curComments.length]);
            }
        }
    };
    CommentsPage.prototype.doCommentsInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            for (var i = 0; i < _this.commentsShowCount; i++) {
                if (_this.curComments.length == _this.comments.comments.length) {
                    _this.infiniteScrollVisible = false;
                    break;
                }
                else {
                    _this.curComments.push(_this.comments.comments[_this.curComments.length]);
                }
            }
            infiniteScroll.complete();
        }, 500);
    };
    CommentsPage.prototype.replyComment = function (comment) {
    };
    CommentsPage.prototype.deleteComment = function (comment) {
    };
    CommentsPage.prototype.likeComment = function (comment) {
    };
    CommentsPage.prototype.sendReply = function () {
    };
    CommentsPage.prototype.goToProfile = function (comment) {
        this.menu.close();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_5__profile_profile__["a" /* ProfilePage */], {
            comment: comment
        });
    };
    return CommentsPage;
}());
CommentsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'comments-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/comments/comments.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'COMMENTS\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="comments-content">\n  <ion-item-group>\n    <ion-item class="comment-item" *ngFor="let comment of curComments">\n      <ion-avatar item-left>\n        <preload-image class="user-image" [ratio]="{w:1, h:1}" [src]="comment.image" (click)="goToProfile(comment)"></preload-image>\n      </ion-avatar>\n      <h2 class="item-title">{{comment.name}}</h2>\n      <p class="item-description">{{comment.comment}}</p>\n        <div>\n          <button class="action-button" ion-button clear small (click)="replyComment(comment)">\n            {{\'REPLY\' | translate}}\n          </button>\n          <button *ngIf="comment.isMine" class="action-button" ion-button clear small (click)="deleteComment(comment)">\n            {{\'DELETE\' | translate}}\n          </button>\n        </div>\n      <ion-note class="item-time" item-right>\n        <div>\n        {{comment.date}}\n        </div>\n        <div>\n        <button class="action-button" ion-button clear small  icon-left (click)="likeComment(comment)">\n          <ion-icon  name=\'heart\' color="danger" *ngIf="comment.likes"></ion-icon>\n          <ion-icon  name=\'heart\' color="dark" *ngIf="!comment.likes"></ion-icon>\n          {{comment.likesCount}}\n        </button>\n        </div>\n      </ion-note>\n    </ion-item>\n  </ion-item-group>\n\n\n  <ion-infinite-scroll (ionInfinite)="doCommentsInfinite($event)" *ngIf="infiniteScrollVisible">\n      <ion-infinite-content>\n        <div style="margin: 0 auto;">\n          <p style="text-align: center;">\n            Loading\n          </p>\n        </div>\n      </ion-infinite-content>\n  </ion-infinite-scroll>\n</ion-content>\n\n<ion-footer>\n  <ion-item class="commentFooter">\n    <ion-input type="text" placeholder="{{\'REPLYWRITE\' | translate}}"></ion-input>\n    <ion-icon item-right name="send" (click)="sendReply()"></ion-icon>\n  </ion-item>\n</ion-footer>'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/comments/comments.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__comments_service__["a" /* CommentsService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], CommentsPage);

//# sourceMappingURL=comments.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentsService = (function () {
    function CommentsService(http) {
        this.http = http;
    }
    CommentsService.prototype.getData = function () {
        return this.http.get('./assets/example_data/comments.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CommentsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return CommentsService;
}());
CommentsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], CommentsService);

//# sourceMappingURL=comments.service.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListingService = (function () {
    function ListingService(http) {
        this.http = http;
    }
    ListingService.prototype.getData = function () {
        return this.http.get('./assets/example_data/listing.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ListingService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ListingService;
}());
ListingService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ListingService);

//# sourceMappingURL=listing.service.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotificationsService = (function () {
    function NotificationsService(http) {
        this.http = http;
    }
    NotificationsService.prototype.getData = function () {
        return this.http.get('./assets/example_data/notifications.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    NotificationsService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return NotificationsService;
}());
NotificationsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], NotificationsService);

//# sourceMappingURL=notifications.service.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WritingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__write_normal_write_normal__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__imageedit_imageedit__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WritingPage = (function () {
    function WritingPage(menu, app, navParams, translate, loadingCtrl, imagePicker, nav) {
        this.menu = menu;
        this.app = app;
        this.navParams = navParams;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
        this.nav = nav;
        this.images = [
            "./assets/images/listing/200x200basquet.png",
            "./assets/images/listing/200x200swimming.png",
            "./assets/images/listing/300x300ExtremeSports.png"
        ];
        this.loading = this.loadingCtrl.create();
    }
    WritingPage.prototype.ionViewDidLoad = function () {
    };
    WritingPage.prototype.onClickNext = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__write_normal_write_normal__["a" /* WritingNormalPage */]);
    };
    WritingPage.prototype.addVRPicture = function () {
        var _this = this;
        this.imagePicker.getPictures({ maximumImagesCount: 15 }).then(function (results) {
            console.log(results);
            _this.images.push(results);
        }, function (err) { return console.log(err); });
    };
    WritingPage.prototype.editImage = function (image) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__imageedit_imageedit__["a" /* ImageEditPage */], { image: image });
    };
    WritingPage.prototype.removeImage = function (image) {
    };
    return WritingPage;
}());
WritingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'writing-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/writing/writing.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="flex: 1;"><font style="text-align: center;">\n        {{\'WRITING\' | translate}} - {{\'VR_PHOTO\' | translate}} {{\'ADD\' | translate}}\n    </font></ion-title>\n    <ion-buttons end>\n      <button ion-button (click)="onClickNext()">\n        <span class="next-btn">{{\'NEXT\' | translate}}</span>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="write-content">\n<button ion-button (click)="addVRPicture()"  class="add-vr-action">\n  <span>{{\'ADD_VR_PICTURE\' | translate}}</span>\n</button>\n\n  <div class="images-content">\n    <ion-row>\n      <ion-col width-50 class="one-image-container" *ngFor="let image of images">\n        <preload-image [ratio]="{w:1, h:1}" [src]="image"></preload-image>\n        <div class="buttons">\n          <button ion-button (click)="editImage(image)" class="action-button">\n            <span>{{\'EDIT\' | translate}}</span>\n          </button>\n          <button ion-button (click)="removeImage(image)" class="action-button">\n            <span>{{\'REMOVE\' | translate}}</span>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class="rules-content">\n    <p>\n      - VR images are mostly 2:1\n    </p>\n    <p>\n      - At least one VR image is required\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/writing/writing.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
], WritingPage);

//# sourceMappingURL=writing.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WritingNormalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__imageedit_imageedit__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__writing_add_writing_add__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WritingNormalPage = (function () {
    function WritingNormalPage(menu, app, navParams, translate, loadingCtrl, imagePicker, nav) {
        this.menu = menu;
        this.app = app;
        this.navParams = navParams;
        this.translate = translate;
        this.loadingCtrl = loadingCtrl;
        this.imagePicker = imagePicker;
        this.nav = nav;
        this.images = [
            "./assets/images/listing/200x200basquet.png",
            "./assets/images/listing/200x200swimming.png",
            "./assets/images/listing/300x300ExtremeSports.png"
        ];
        this.loading = this.loadingCtrl.create();
    }
    WritingNormalPage.prototype.ionViewDidLoad = function () {
    };
    WritingNormalPage.prototype.onClickNext = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__writing_add_writing_add__["a" /* WritingAddPage */]);
    };
    WritingNormalPage.prototype.addVRPicture = function () {
        var _this = this;
        this.imagePicker.getPictures({ maximumImagesCount: 15 }).then(function (results) {
            console.log(results);
            _this.images.push(results);
        }, function (err) { return console.log(err); });
    };
    WritingNormalPage.prototype.editImage = function (image) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__imageedit_imageedit__["a" /* ImageEditPage */], { image: image });
    };
    WritingNormalPage.prototype.removeImage = function (image) {
    };
    return WritingNormalPage;
}());
WritingNormalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'write-normal-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/write-normal/write-normal.html"*/'\n<ion-header>\n  <ion-navbar>\n      <ion-title style="flex: 1;"><font style="text-align: center;">{{\'WRITING\' | translate}} - {{\'NORMAL_PHOTO\' | translate}} {{\'ADD\' | translate}}</font></ion-title>\n      <ion-buttons end>\n        <button ion-button (click)="onClickNext()">\n          <span class="next-btn">{{\'NEXT\' | translate}}</span>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="write-content">\n  <button ion-button (click)="addVRPicture()" class="add-vr-action">\n    <span>{{\'ADD_NORMAL_PICTURE\' | translate}}</span>\n  </button>\n\n  <div class="images-content">\n    <ion-row>\n      <ion-col width-50 class="one-image-container" *ngFor="let image of images">\n        <preload-image [ratio]="{w:1, h:1}" [src]="image"></preload-image>\n        <div class="buttons">\n          <button ion-button (click)="editImage(image)" class="action-button">\n            <span>{{\'EDIT\' | translate}}</span>\n          </button>\n          <button ion-button (click)="removeImage(image)" class="action-button">\n            <span>{{\'REMOVE\' | translate}}</span>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class="rules-content">\n    <p>\n      - VR images are mostly 2:1\n    </p>\n    <p>\n      - At least one VR image is required\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/write-normal/write-normal.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
], WritingNormalPage);

//# sourceMappingURL=write-normal.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WritingAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WritingAddPage = (function () {
    function WritingAddPage(app, menu, nav, loadingCtrl, translate, platform) {
        this.app = app;
        this.menu = menu;
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.platform = platform;
        this.loading = this.loadingCtrl.create();
    }
    WritingAddPage.prototype.ionViewDidLoad = function () {
        this.loadMap();
    };
    WritingAddPage.prototype.loadMap = function () {
        var latLng = new google.maps.LatLng(-34.9290, 138.6010);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    return WritingAddPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], WritingAddPage.prototype, "mapElement", void 0);
WritingAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'writing-add-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/writing-add/writing-add.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'WRITING\' | translate }} - {{ \'ADDITIONAL_INFO\' | translate }}</ion-title>\n    <ion-buttons end>\n      <button class="finish-btn">\n        {{ \'FINISH\' | translate }}\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="main-content">\n\n  <div #map id="map"></div>\n\n  <ion-row class="search-group">\n    <ion-col class="one-button">\n      <div class="button-content">\n        <ion-icon name="search"></ion-icon>\n         {{ \'ADDRESS_SEARCH\' | translate }}\n      </div>\n    </ion-col>\n    <ion-col class="one-button">\n      <div class="button-content">\n        <ion-icon name="wifi"></ion-icon>\n         {{ \'CURRENT_LOCATION\' | translate }}\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-item>\n    <ion-label item-left>{{ \'STREET_ADDRESS\' | translate }}</ion-label>\n    <ion-input type="text" [(ngModel)]="streetAddress"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label item-left>{{ \'DETAIL_ADDRESS\' | translate }}</ion-label>\n    <ion-input type="text" [(ngModel)]="detailAddress"></ion-input>\n  </ion-item>\n\n  <ion-label class="comment">\n     {{ \'INPUT_DETAIL_ADDRESS\' | translate }}\n  </ion-label>\n\n  <ion-item>\n    <ion-label item-left>{{ \'PUBLIC_PRIVATE\' | translate }}</ion-label>\n    <ion-select [(ngModel)]="public_or_private">\n      <ion-option value="public">{{ \'PUBLIC\' | translate }}</ion-option>\n      <ion-option value="private">{{ \'PRIVATE\' | translate }}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-label class="comment1">{{ \'CATEGORY\' | translate }}</ion-label>\n  <ion-item>\n    <ion-select [(ngModel)]="category">\n      <ion-option value="public">{{ \'PUBLIC\' | translate }}</ion-option>\n      <ion-option value="private">{{ \'PRIVATE\' | translate }}</ion-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-label class="comment1">{{ \'TITLE\' | translate }}</ion-label>\n  <ion-input type="text" [(ngModel)]="title" class="input1"></ion-input>\n\n  <ion-label class="comment1">{{ \'DETAILS\' | translate }}</ion-label>\n  <ion-textarea type="text" [(ngModel)]="content" class="input1"></ion-textarea>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/writing-add/writing-add.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
], WritingAddPage);

//# sourceMappingURL=writing-add.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapTypePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_open_native_settings__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feed_feed__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_type_service__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__search_result_search_result__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_diagnostic__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var MapTypePage = (function () {
    function MapTypePage(app, menu, nav, mapTypeService, loadingCtrl, authService, translate, actionsheetCtrl, platform, clipboard, socialSharing, toastCtrl, alertCtrl, diagnostic, openNativeSettings) {
        this.app = app;
        this.menu = menu;
        this.nav = nav;
        this.mapTypeService = mapTypeService;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.translate = translate;
        this.actionsheetCtrl = actionsheetCtrl;
        this.platform = platform;
        this.clipboard = clipboard;
        this.socialSharing = socialSharing;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.diagnostic = diagnostic;
        this.openNativeSettings = openNativeSettings;
        this.searchText = '';
        this.selectedCategory = '';
        this.loading = this.loadingCtrl.create();
    }
    MapTypePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.mapTypeService
            .getData()
            .then(function (data) {
            _this.categories = data.categories;
            _this.loading.dismiss();
        });
        this.checkGPS();
    };
    MapTypePage.prototype.checkGPS = function () {
        var _this = this;
        this.diagnostic.isLocationAvailable().then(function (isAvailable) {
            console.log(isAvailable);
            if (isAvailable) {
                _this.loadMap();
                return;
            }
            else {
                _this.showAlertController();
            }
        }).catch(function (e) { return console.log(e); });
    };
    MapTypePage.prototype.loadMap = function () {
        var latLng = new google.maps.LatLng(-34.9290, 138.6010);
        var mapOptions = {
            center: latLng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    };
    MapTypePage.prototype.toList = function () {
        this.menu.close();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_11__search_result_search_result__["a" /* SearchResultPage */]);
    };
    MapTypePage.prototype.onCategory = function (popular) {
        this.selectedCategory = popular.title;
    };
    MapTypePage.prototype.goToFeed = function (category) {
        console.log("Clicked goToFeed", category);
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__feed_feed__["a" /* FeedPage */], { category: category });
    };
    MapTypePage.prototype.showAlertController = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].forkJoin(this.translate.get('GPS_INFO_IS_NOT_AVAILABLE'), this.translate.get('CURRENT_LOCATION_CANT_BE_DETACTED'), this.translate.get('CONFIRM'), this.translate.get('CANCEL')).subscribe(function (data) {
            var confirm = _this.alertCtrl.create({
                title: data[0],
                message: data[1],
                buttons: [
                    {
                        text: data[3],
                        handler: function () {
                            console.log('Disagree clicked');
                        }
                    },
                    {
                        text: data[2],
                        handler: function () {
                            _this.diagnostic.requestLocationAuthorization("always")
                                .then(function (res) {
                                console.log(res);
                                if (res == "GRANTED") {
                                    _this.loadMap();
                                }
                            })
                                .catch(function (err) { console.log(err); });
                        }
                    }
                ]
            });
            confirm.present();
        });
    };
    return MapTypePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], MapTypePage.prototype, "mapElement", void 0);
MapTypePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'map-type-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/map-type/map-type.html"*/'<ion-header class="listing-header">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <div style="display: flex;\n		align-items: center;">\n      <span style="flex: 1;">\n        <ion-searchbar [showCancelButton]="shouldShowCancel" [(ngModel)]="searchText"></ion-searchbar>\n      </span>\n       \n      <span>\n        <a><img src="../../assets/images/homeHeader/target.png"/></a>\n      </span>\n      \n      <span *ngIf="authService.authenticated()">\n        <a (click)="onNotificationPage()"><img src="../../assets/images/homeHeader/envelope.png"/></a>\n      </span>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="listing-content">\n  <ion-scroll scrollX="true" class="horizontal-categories">\n    <ion-row class="categories-row">\n      <ion-col width-30 class="horizontal-item"  *ngFor="let category of categories">\n        <preload-image [ratio]="{w:1, h:1}" [src]="category.image" title="popular.title" *ngIf="selectedCategory == category.title" class="selectedCategory"></preload-image>\n        <a (click)="onCategory(category)"><preload-image [ratio]="{w:1, h:1}" [src]="category.image" title="popular.title" *ngIf="selectedCategory != category.title"></preload-image></a>\n      </ion-col>\n    </ion-row>\n  </ion-scroll>\n\n  <div #map id="map"></div>\n\n  <button class="list-button" ion-button small (click)="toList()" icon-left>\n    <ion-icon name=\'list\' color="white"></ion-icon>\n     {{\'LIST\' | translate}}\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/map-type/map-type.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_8__map_type_service__["a" /* MapTypeService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__["a" /* Clipboard */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_diagnostic__["a" /* Diagnostic */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_open_native_settings__["a" /* OpenNativeSettings */]])
], MapTypePage);

//# sourceMappingURL=map-type.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapTypeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapTypeService = (function () {
    function MapTypeService(http) {
        this.http = http;
    }
    MapTypeService.prototype.getData = function () {
        return this.http.get('./assets/example_data/listing.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MapTypeService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return MapTypeService;
}());
MapTypeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], MapTypeService);

//# sourceMappingURL=map-type.service.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help_help__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gallery_gallery__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CameraPage = (function () {
    function CameraPage(nav, loadingCtrl, events, app, menu) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.app = app;
        this.menu = menu;
    }
    CameraPage.prototype.toVRSetting = function () {
    };
    CameraPage.prototype.toGallery = function () {
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__gallery_gallery__["a" /* GalleryPage */]);
    };
    CameraPage.prototype.toHelp = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__help_help__["a" /* HelpPage */]);
    };
    return CameraPage;
}());
CameraPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'camera-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/camera/camera.html"*/'<ion-header class="chatting-header">\n  <ion-navbar>\n    <ion-title>{{\'VR_CAMERA_MANAGEMENT\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="camera-content">\n\n  <a (click)="toVRSetting()">\n    <div class="one-action-container">\n      <ion-icon name="camera" color="#929292" class="action-icon"></ion-icon>\n      <div>\n        {{\'CONNECT_TO_VR_CAMERA\' | translate}}\n      </div>\n    </div>\n  </a>\n\n  <a (click)="toGallery()">\n    <div class="one-action-container">\n      <ion-icon name="photos" color="#929292" class="action-icon"></ion-icon>\n      <div>\n        {{\'GALLERY\' | translate}}\n      </div>\n    </div>\n  </a>\n\n  <a (click)="toHelp()">\n    <div class="one-action-container">\n      <ion-icon name="help-circle" color="#929292" class="action-icon"></ion-icon>\n      <div>\n        {{\'HELP\' | translate}}\n      </div>\n    </div>\n  </a>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/camera/camera.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
], CameraPage);

//# sourceMappingURL=camera.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HelpPage = (function () {
    function HelpPage(nav, loadingCtrl, events, app, menu) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.app = app;
        this.menu = menu;
        this.images = [
            "./assets/images/listing/200x200basquet.png",
            "./assets/images/listing/200x200swimming.png",
            "./assets/images/listing/200x200basquet.png",
            "./assets/images/listing/200x200swimming.png",
            "./assets/images/listing/200x200basquet.png",
            "./assets/images/listing/200x200swimming.png",
            "./assets/images/listing/200x200basquet.png",
            "./assets/images/listing/200x200swimming.png"
        ];
    }
    return HelpPage;
}());
HelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'help-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/help/help.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'HELP\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="help-content">\n\n  <ion-slides pager loop="true">\n    <ion-slide *ngFor="let slide of images">\n      <img src="{{slide}}" class="slide-image"/>\n    </ion-slide>\n  </ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/help/help.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
], HelpPage);

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gallery_detail_gallery_detail__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GalleryPage = (function () {
    function GalleryPage(nav, loadingCtrl, events, app, menu) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.app = app;
        this.menu = menu;
        this.m_bSelect = false;
        this.m_bAllSelected = false;
        this.selectedCount = 0;
        this.selectedTab = "vr";
        this.images = [
            {
                image: "./assets/images/listing/200x200basquet.png",
                selected: false
            },
            {
                image: "./assets/images/listing/200x200swimming.png",
                selected: false
            },
            {
                image: "./assets/images/listing/200x200basquet.png",
                selected: false
            },
            {
                image: "./assets/images/listing/200x200swimming.png",
                selected: false
            },
            {
                image: "./assets/images/listing/200x200basquet.png",
                selected: false
            },
            {
                image: "./assets/images/listing/200x200swimming.png",
                selected: false
            }
        ];
    }
    GalleryPage.prototype.onBack = function () {
        this.nav.pop();
    };
    GalleryPage.prototype.onDownload = function () {
        this.m_bSelect = true;
    };
    GalleryPage.prototype.onTrash = function () {
    };
    GalleryPage.prototype.onSelectAll = function () {
        this.m_bAllSelected = !this.m_bAllSelected;
    };
    GalleryPage.prototype.onSelectImage = function (image) {
        image.selected = !image.selected;
    };
    GalleryPage.prototype.selectMachine = function () {
        this.selectedTab = "mine";
    };
    GalleryPage.prototype.selectVR = function () {
        this.selectedTab = "vr";
    };
    GalleryPage.prototype.onImageDetial = function (image) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__gallery_detail_gallery_detail__["a" /* GalleryDetailPage */]);
    };
    return GalleryPage;
}());
GalleryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'gallery-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/gallery/gallery.html"*/'<ion-header>\n  <ion-navbar hideBackButton color="light">\n    <div style="display: flex; align-items: center;" *ngIf="!m_bSelect">\n      <span style="font-size: 150%; margin: 5px;">\n        <a (click)="onBack()">\n          <img src="../../assets/images/homeheader/white-back.png" width="30px" height="30px"/>\n        </a>\n      </span>\n\n      <div style="flex: 1; font-size: 150%; color: #5f5f5f; text-align: center;">\n        {{\'VR_PHOTO_MANAGEMENT\' | translate}}\n      </div>\n\n      <span style="font-size: 150%; margin: 5px;">\n        <a (click)="onDownload()">\n          <ion-icon name="cloud-download" color="#5f5f5f"></ion-icon>\n        </a>\n      </span>\n\n      <span style="font-size: 150%; margin: 5px;">\n        <a (click)="onTrash()">\n          <ion-icon name="trash" color="#5f5f5f"></ion-icon>\n        </a>\n      </span>\n    </div>\n\n    <div style="display: flex; align-items: center;" *ngIf="m_bSelect">\n      <span style="font-size: 150%; margin: 5px;">\n        <a (click)="onSelectAll()">\n          <img *ngIf="!m_bAllSelected" src="../../assets/images/gallery/uncheckbox1.png" width="20px" height="20px"/>\n          <img *ngIf="m_bAllSelected" src="../../assets/images/gallery/checkbox1.png"  width="20px" height="20px"/>\n          <font class="all-text">{{\'ALL\' | translate}}</font>\n        </a>\n      </span>\n    \n      <div style="flex: 1; font-size: 150%; color: #5f5f5f; text-align: center;">\n        {{selectedCount}}{{\'_PHOTOS_SELECTED\' | translate}}\n      </div>\n    \n      <span class="get-photo">\n        <a (click)="onTrash()">\n          <font class="text">{{\'GET_PHOTOS\' | translate}}</font>\n        </a>\n      </span>\n    </div>\n    \n  </ion-navbar>\n</ion-header>\n\n\n<!-- "ALL": "전체",\n  "_PHOTOS_SELECTED": "개 사진 선택",\n  "GET_PHOTOS": "가져오기",\n  "VR_CAMERA": "VR 카메라",\n  "MY_DEVICE": "내 기기" -->\n\n<ion-content class="gallery-content">\n\n  <ion-row>\n    <ion-col width-50 class="gallery-item" *ngFor="let image of images">\n      <a (click)="onImageDetial(image)"><img src="{{image.image}}"/></a>\n      <div *ngIf="m_bSelect" class="check-box">\n        <a (click)="onSelectImage(image)">\n          <img *ngIf="image.selected" src="../../assets/images/gallery/checkbox.png"  width="30px" height="30px"/>\n          <img *ngIf="!image.selected" src="../../assets/images/gallery/uncheckbox.png"  width="30px" height="30px"/>\n        </a>\n      </div>\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n\n<ion-footer class="footer">\n  <ion-segment [(ngModel)]="selectedTab" class="segment-buttons">\n    <ion-segment-button value="vr" class="selected" *ngIf="selectedTab==\'vr\'" (ionSelect)="selectVR()">\n      <font class="selected-font">{{\'VR_CAMERA\'  | translate }}</font>\n    </ion-segment-button>\n    <ion-segment-button value="vr" class="unselected" *ngIf="selectedTab!=\'vr\'" (ionSelect)="selectVR()">\n      <font class="unselected-font">{{\'VR_CAMERA\'  | translate }}</font>\n    </ion-segment-button>\n    <ion-segment-button value="mine" class="selected" *ngIf="selectedTab==\'mine\'" (ionSelect)="selectMachine()">\n      <font class="selected-font">{{\'MY_DEVICE\'  | translate }}</font>\n    </ion-segment-button>\n    <ion-segment-button value="mine" class="unselected" *ngIf="selectedTab!=\'mine\'" (ionSelect)="selectMachine()">\n      <font class="unselected-font">{{\'MY_DEVICE\'  | translate }}</font>\n    </ion-segment-button>\n  </ion-segment>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/gallery/gallery.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
], GalleryPage);

//# sourceMappingURL=gallery.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryDetailPage = (function () {
    function GalleryDetailPage(nav, loadingCtrl, events, app, menu) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.app = app;
        this.menu = menu;
        this.m_bSelect = false;
        this.m_bAllSelected = false;
        this.selectedCount = 0;
        this.selectedTab = "vr";
        this.image = "./assets/images/listing/200x200basquet.png";
    }
    GalleryDetailPage.prototype.onBack = function () {
        this.nav.pop();
    };
    return GalleryDetailPage;
}());
GalleryDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'gallery-detail-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/gallery-detail/gallery-detail.html"*/'\n<ion-content class="gallery-detail-content">\n\n  <div class="back-btn">\n    <span style="font-size: 150%; margin: 5px;">\n      <a (click)="onBack()">\n        <img src="../../assets/images/homeheader/white-back.png"/>\n      </a>\n    </span>\n  </div>\n    \n  <img src="{{image}}" class="main-image" width="100%" height="100%"/>\n\n\n  <div class="footer">\n      <span class="action-btn">\n        <a (click)="onBack()">\n          <img src="../../assets/images/homeheader/zoom plus.png" width="25px" height="25px"/>\n        </a>\n      </span>\n      <span class="action-btn">\n        <a (click)="onBack()">\n          <img src="../../assets/images/homeheader/zoom minus.png" width="25px" height="25px"/>\n        </a>\n      </span>\n      <span class="action-btn">\n        <a (click)="onBack()">\n          <img src="../../assets/images/homeheader/zoom plus.png" width="25px" height="25px"/>\n        </a>\n      </span>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/gallery-detail/gallery-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
], GalleryDetailPage);

//# sourceMappingURL=gallery-detail.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserModel */
/* unused harmony export ProfilePostModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileModel; });
var UserModel = (function () {
    function UserModel() {
    }
    return UserModel;
}());

var ProfilePostModel = (function () {
    function ProfilePostModel() {
        this.likes = 0;
        this.comments = 0;
        this.liked = false;
    }
    return ProfilePostModel;
}());

var ProfileModel = (function () {
    function ProfileModel() {
        this.user = new UserModel();
        this.following = [];
        this.followers = [];
        this.posts = [];
    }
    return ProfileModel;
}());

//# sourceMappingURL=profile.model.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LanguageService = (function () {
    function LanguageService() {
        this.languages = new Array();
        this.languages.push({ name: "English", code: "en" }, { name: "Spanish", code: "es" }, { name: "Arabic", code: "ar" }, { name: "Korean", code: "ko" });
    }
    LanguageService.prototype.getLanguages = function () {
        return this.languages;
    };
    return LanguageService;
}());
LanguageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], LanguageService);

//# sourceMappingURL=language.service.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__followers_followers__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__other_profile_model__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__other_profile_service__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Rx__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__notifications_notifications__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var OtherProfilePage = (function () {
    function OtherProfilePage(menu, app, navParams, profileService, translate, authService, loadingCtrl, socialSharing, actionsheetCtrl, platform, clipboard, events, toastCtrl, nav) {
        this.menu = menu;
        this.app = app;
        this.navParams = navParams;
        this.profileService = profileService;
        this.translate = translate;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.socialSharing = socialSharing;
        this.actionsheetCtrl = actionsheetCtrl;
        this.platform = platform;
        this.clipboard = clipboard;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.profile = new __WEBPACK_IMPORTED_MODULE_5__other_profile_model__["a" /* ProfileModel */]();
        this.moreActionSheet = undefined;
        this.curNotifications = [
            {
                "name": "Martin",
                "image": "./assets/images/notifications/100x100Notification1.jpeg",
                "msgType": 1,
                "date": "5:03 pm",
                "isRead": true
            },
            {
                "name": "Martin",
                "image": "./assets/images/notifications/100x100Notification1.jpeg",
                "msgType": 2,
                "date": "5:03 pm",
                "isRead": false
            }
        ];
        this.post1 = {
            "images": ["./assets/images/listing/200x200basquet.png",
                "./assets/images/listing/200x200swimming.png",
                "./assets/images/listing/300x300ExtremeSports.png"],
            "address": "Sample Address",
            "likesCount": 53,
            "commentsCount": 5,
            "meLikes": false,
            "date": "2017-11-20",
            "comments": [{ "name": "Sinho0689", "comment": "seems good" },
                { "name": "Sinho0689", "comment": "seems good" },
                { "name": "Sinho0689", "comment": "seems good" }]
        };
        this.display = "myphoto";
        this.loading = this.loadingCtrl.create();
    }
    OtherProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.profileService.getData()
            .then(function (data) {
            _this.profile.user = data.user;
            _this.profile.following = data.following;
            _this.profile.followers = data.followers;
            _this.profile.posts = data.posts;
            _this.loading.dismiss();
        });
    };
    OtherProfilePage.prototype.goToFollowList = function () {
        // close the menu when clicking a link from the menu
        this.menu.close();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__followers_followers__["a" /* FollowersPage */], {
            followers: this.profile.followers,
            followings: this.profile.following
        });
    };
    OtherProfilePage.prototype.goToSettings = function () {
        // close the menu when clicking a link from the menu
        this.menu.close();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */]);
    };
    OtherProfilePage.prototype.onSegmentChanged = function (segmentButton) {
        // console.log('Segment changed to', segmentButton.value);
    };
    OtherProfilePage.prototype.onSegmentSelected = function (segmentButton) {
        // console.log('Segment selected', segmentButton.value);
    };
    OtherProfilePage.prototype.sharePost = function (post) {
        //this code is to use the social sharing plugin
        // message, subject, file, url
        this.socialSharing.share(post.description, post.title, post.image)
            .then(function () {
            console.log('Success!');
        })
            .catch(function () {
            console.log('Error');
        });
    };
    OtherProfilePage.prototype.onClickMenu = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_11_rxjs_Observable__["Observable"].forkJoin(this.translate.get('LINK_PROFILE_COPY_CLIPBOARD')).subscribe(function (data) {
            _this.clipboardToast = _this.toastCtrl.create({
                message: data[4],
                duration: 3000,
                position: 'bottom'
            });
            _this.clipboard.copy(_this.profile.user.image);
            _this.clipboard.paste().then(function (resolve) {
                _this.clipboardToast.present();
            }, function (reject) {
            });
        });
    };
    OtherProfilePage.prototype.toNotificationPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_12__notifications_notifications__["a" /* NotificationsPage */]);
    };
    OtherProfilePage.prototype.addFriend = function () {
    };
    return OtherProfilePage;
}());
OtherProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'other-profile-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/other-profile/other-profile.html"*/'<ion-header>\n  <ion-navbar>\n    <div style="display: flex; align-items: center;">\n      <ion-title style="flex: 1;"><font style="text-align: center;">{{\'PROFILE\' | translate}}</font></ion-title>\n\n      <span>\n        <a (click)="onClickMenu()"><img src="../../assets/images/homeHeader/menu.png"/></a>\n      </span>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="profile-content">\n  <div class="user-details">\n    <ion-row class="user-main-data-row">\n      <ion-col no-padding width-33>\n        <preload-image class="user-image" [ratio]="{w:1, h:1}" [(src)]="profile.user.image" alt="profile.user.name" title="profile.user.name"></preload-image>\n      </ion-col>\n      <ion-col no-padding>\n        <ion-row class="social-presence-row">\n          <ion-col width-50 class="social-presence-item">\n            <a (click)="goToFollowList()">\n              <ion-icon name=\'heart\' color="danger" style="font-size: 200%;"></ion-icon>\n              <h2 class="social-presence-value">{{profile.followers.length}}</h2>\n            </a>\n          </ion-col>\n          <ion-col width-50 class="social-presence-item">\n            <a>\n              <ion-icon name=\'star\' color="#333333" style="font-size: 200%;"></ion-icon>\n              <h4 class="social-presence-title">business</h4>\n            </a>\n          </ion-col>\n        </ion-row>\n        <ion-row class="profile-action-row">\n          <ion-col no-padding>\n            <button ion-button block small (click)="addFriend()">\n              {{\'ADD_FRIEND\' | translate}}\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <div class="social-group">\n      <span>\n        <a (click)="onChatting()">\n          <img src="../../assets/images/social/chatting.png" class="social-img" />\n        </a>\n      </span>\n      <span>\n        <a (click)="onChatting()">\n          <img src="../../assets/images/social/telephone.jpg" class="social-img" />\n        </a>\n      </span>\n      <span>\n        <a (click)="onChatting()">\n          <img src="../../assets/images/social/website.png" class="social-img" />\n        </a>\n      </span>\n      <span>\n        <a (click)="onChatting()">\n          <img src="../../assets/images/social/facebook.png" class="social-img" />\n        </a>\n      </span>\n      <span>\n        <a (click)="onChatting()">\n          <img src="../../assets/images/social/instagram.png" class="social-img" />\n        </a>\n      </span>\n      <span>\n        <a (click)="onChatting()">\n          <img src="../../assets/images/social/blog.jpeg" class="social-img" />\n        </a>\n      </span>\n      <span>\n        <a (click)="onChatting()">\n          <img src="../../assets/images/social/twitter.png" class="social-img" />\n        </a>\n      </span>\n    </div>\n\n    <ion-row wrap class="user-bio-row">\n      <ion-col no-padding width-50>\n        <h2 class="user-name">{{profile.user.name}}</h2>\n      </ion-col>\n      <ion-col no-padding width-50>\n        <span class="user-location">{{profile.user.location}}</span>\n      </ion-col>\n      <ion-col no-padding width-100>\n        <p class="user-description">\n          {{profile.user.about}}\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-segment class="user-content-segment" [(ngModel)]="display" (ionChange)="onSegmentChanged($event)">\n      <ion-segment-button value="myphoto" (ionSelect)="onSegmentSelected($event)">\n        {{\'MY_PICTURE\' | translate}}\n      </ion-segment-button>\n      <ion-segment-button value="notices" (ionSelect)="onSegmentSelected($event)">\n        {{\'NOTICES\' | translate}}\n      </ion-segment-button>\n      <ion-segment-button value="carephoto" (ionSelect)="onSegmentSelected($event)">\n        {{\'Care_PICTURE\' | translate}}\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <div [ngSwitch]="display" class="user-content">\n    <div *ngSwitchCase="\'myphoto\'" class="list-view">\n      <div class="list-item" *ngFor="let post of profile.posts">\n        <span class="item-date">{{post.date}}</span>\n        <ion-card>\n          <preload-image [ratio]="{w:1, h:1}" [src]="post.image" title=""></preload-image>\n          <ion-card-content>\n            <p class="item-text">\n              {{post.description}}\n            </p>\n          </ion-card-content>\n          <ion-row no-padding class="actions-row">\n            <ion-col no-padding width-30 text-left>\n              <button class="action-button" ion-button clear small color="danger" icon-left>\n                <ion-icon isActive="{{post.liked}}" name=\'heart\'></ion-icon>\n                  {{post.likes}} {{\'LIKES\' | translate}}\n              </button>\n            </ion-col>\n            <ion-col no-padding width-45 text-center>\n              <button class="action-button" ion-button clear small color="danger" icon-left>\n                <ion-icon name=\'chatbubbles\'></ion-icon>\n                  {{post.comments}} {{\'COMMENTS\' | translate}}\n              </button>\n            </ion-col>\n            <ion-col no-padding width-25 text-right>\n              <button class="action-button" ion-button clear small color="danger" icon-left (click)="sharePost(post)">\n                <ion-icon name=\'share-alt\'></ion-icon>\n                {{\'SHARE\' | translate}}\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </div>\n    </div>\n    <div *ngSwitchCase="\'notices\'" class="grid-view">\n      \n        <ion-item class="notification-item" *ngFor="let notification of curNotifications">\n          <a (click)="toNotificationPage()">\n            <ion-avatar item-left>\n              <preload-image class="user-image" [ratio]="{w:1, h:1}" [src]="notification.image"></preload-image>\n            </ion-avatar>\n          </a>\n          <div class="item-body-unread" *ngIf="!notification.isRead">\n            <p class="item-title">\n      \n              {{notification.name}}\n              <font style="color: black;" *ngIf="notification.msgType==1">{{\'POSTED_NEW_POSTING\' | translate}}</font>\n              <font style="color: black;" *ngIf="notification.msgType==2">{{\'SENT_1_1_MESSAGE\' | translate}}</font>\n              <font style="color: black;" *ngIf="notification.msgType==3">{{\'ADDED_ME_AS_FRIEND\' | translate}}</font>\n              <font style="color: black;" *ngIf="notification.msgType==4">{{\'COMMENTED_ON_MY_POSTING\' | translate}}</font>\n      \n            </p>\n          </div>\n          <div class="item-body-read" *ngIf="notification.isRead">\n            <p class="item-title">\n      \n              {{notification.name}}\n              <font style="color: black;" *ngIf="notification.msgType==1">{{\'POSTED_NEW_POSTING\' | translate}}</font>\n              <font style="color: black;" *ngIf="notification.msgType==2">{{\'SENT_1_1_MESSAGE\' | translate}}</font>\n              <font style="color: black;" *ngIf="notification.msgType==3">{{\'ADDED_ME_AS_FRIEND\' | translate}}</font>\n              <font style="color: black;" *ngIf="notification.msgType==4">{{\'COMMENTED_ON_MY_POSTING\' | translate}}</font>\n      \n            </p>\n          </div>\n          <ion-note class="item-time" item-right>\n            <div>\n              {{notification.date}}\n            </div>\n            <div>\n              <button icon-only ion-button clear small class="del-button">\n                <ion-icon name=\'close\' color="dark"></ion-icon>\n              </button>\n            </div>\n          </ion-note>\n        </ion-item>\n\n    </div>\n    <div *ngSwitchCase="\'carephoto\'" class="grid-view">\n      <ion-item  *ngFor="let post of profile.posts">\n        <ion-row wrap class="grid-row">\n          <preload-image [ratio]="{w:1, h:1}" [src]="post.image" title="ion2FullApp"></preload-image>\n        </ion-row>\n        <ion-row>\n          <ion-col width-75>\n            <a>\n              model\n            </a>\n          </ion-col>\n          <ion-col width-25>\n            <p>{{post1.date}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p>{{post1.address}}</p>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row no-padding class="actions-row">\n          <ion-col no-padding width-30 text-left>\n            <button class="action-button" ion-button clear small icon-left (click)="likePoast(post)">\n              <ion-icon isActive="{{post.liked}}" name=\'heart\' color="danger" *ngIf="post1.meLikes"></ion-icon>\n              <ion-icon isActive="{{post.liked}}" name=\'heart\' color="dark" *ngIf="!post1.meLikes"></ion-icon>\n              {{post1.likesCount}} {{\'LIKES\' | translate}}\n            </button>\n          </ion-col>\n          <ion-col no-padding width-45 text-center>\n            <button class="action-button" ion-button clear small icon-left (click)="commentPost(post)">\n              <ion-icon name=\'chatbubbles\' color="danger"></ion-icon>\n              {{post1.commentsCount}} {{\'COMMENTS\' | translate}}\n            </button>\n          </ion-col>\n          <ion-col no-padding width-25 text-right>\n            <button class="action-button" ion-button clear small icon-left (click)="sharePost(post)">\n              <ion-icon name=\'share-alt\'></ion-icon>\n              {{\'SHARE\' | translate}}\n            </button>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row>\n          <ion-col>\n            <p>\n              {{post1.comments[0].name}} {{\': \'}} {{post1.comments[0].comment}}\n            </p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p>\n              {{post1.comments[1].name}} {{\': \'}} {{post1.comments[1].comment}}\n            </p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p>\n              {{post1.comments[2].name}} {{\': \'}} {{post1.comments[2].comment}}\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/other-profile/other-profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__other_profile_service__["a" /* OtherProfileService */],
        __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_8__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__["a" /* Clipboard */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
], OtherProfilePage);

//# sourceMappingURL=other-profile.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtherProfileService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OtherProfileService = (function () {
    function OtherProfileService(http, nativeStorage) {
        this.http = http;
        this.nativeStorage = nativeStorage;
    }
    OtherProfileService.prototype.getData = function () {
        return this.http.get('./assets/example_data/profile.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    OtherProfileService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    OtherProfileService.prototype.getUserImage = function () {
        return this.nativeStorage.getItem('profileImage');
    };
    OtherProfileService.prototype.setUserImage = function (newImage) {
        this.nativeStorage.setItem('profileImage', newImage);
    };
    return OtherProfileService;
}());
OtherProfileService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */]])
], OtherProfileService);

//# sourceMappingURL=other-profile.service.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__form_layout_form_layout__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filters_filters__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__form_validations_form_validations__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FormsPage = (function () {
    function FormsPage(nav, translate) {
        this.nav = nav;
        this.translate = translate;
    }
    FormsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].forkJoin(this.translate.get('FORMS_EXAMPLES'), this.translate.get('FILTERS'), this.translate.get('FORM_VALIDATIONS')).subscribe(function (data) {
            _this.items = [
                { title: data[0], component: __WEBPACK_IMPORTED_MODULE_2__form_layout_form_layout__["a" /* FormLayoutPage */] },
                { title: data[1], component: __WEBPACK_IMPORTED_MODULE_3__filters_filters__["a" /* FiltersPage */] },
                { title: data[2], component: __WEBPACK_IMPORTED_MODULE_4__form_validations_form_validations__["a" /* FormValidationsPage */] }
            ];
        });
    };
    FormsPage.prototype.itemTapped = function (event, item) {
        this.nav.push(item.component);
    };
    return FormsPage;
}());
FormsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'forms-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/forms/forms.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{\'FORMS\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="forms-content">\n  <ion-list class="forms-list">\n    <button class="list-item" ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-row no-padding>\n        <ion-col no-padding class="item-content">\n          <h3 class="item-title">{{item.title}}</h3>\n          <span class="item-note" *ngIf="item.note">{{item.note}}</span>\n        </ion-col>\n        <ion-col no-padding width-10 class="item-icon">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/forms/forms.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
], FormsPage);

//# sourceMappingURL=forms.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormLayoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_counter_input_counter_input__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_crop__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FormLayoutPage = (function () {
    function FormLayoutPage(nav, alertCtrl, cropService, imagePicker) {
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.cropService = cropService;
        this.imagePicker = imagePicker;
        this.section = "event";
        this.post_form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            description: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            servings: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](2, Object(__WEBPACK_IMPORTED_MODULE_3__components_counter_input_counter_input__["b" /* counterRangeValidator */])(10, 1)),
            time: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('01:30', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            temperature: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](180)
        });
        this.event_form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            title: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            location: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            from_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('2016-09-18', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            from_time: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('13:00', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            to_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            to_time: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
        this.card_form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            card_number: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            card_holder: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            cvc: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            exp_date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            save_card: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](true, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
    }
    FormLayoutPage.prototype.onSegmentChanged = function (segmentButton) {
        // console.log('Segment changed to', segmentButton.value);
    };
    FormLayoutPage.prototype.onSegmentSelected = function (segmentButton) {
        // console.log('Segment selected', segmentButton.value);
    };
    FormLayoutPage.prototype.createPost = function () {
        console.log(this.post_form.value);
    };
    FormLayoutPage.prototype.createEvent = function () {
        console.log(this.event_form.value);
    };
    FormLayoutPage.prototype.createCard = function () {
        console.log(this.card_form.value);
    };
    FormLayoutPage.prototype.chooseCategory = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            cssClass: 'category-prompt'
        });
        alert.setTitle('Category');
        alert.addInput({
            type: 'checkbox',
            label: 'Alderaan',
            value: 'value1',
            checked: true
        });
        alert.addInput({
            type: 'checkbox',
            label: 'Bespin',
            value: 'value2'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'Confirm',
            handler: function (data) {
                console.log('Checkbox data:', data);
                _this.categories_checkbox_open = false;
                _this.categories_checkbox_result = data;
            }
        });
        alert.present().then(function () {
            _this.categories_checkbox_open = true;
        });
    };
    FormLayoutPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission().then(function (result) {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({ maximumImagesCount: 1 }).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.cropService.crop(results[i], { quality: 75 }).then(function (newImage) {
                            _this.selected_image = newImage;
                        }, function (error) { return console.error("Error cropping image", error); });
                    }
                }, function (err) { return console.log(err); });
            }
        });
    };
    return FormLayoutPage;
}());
FormLayoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'form-layout-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/form-layout/form-layout.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'FORMS_EXAMPLES\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="forms-examples-content">\n  <ion-segment class="forms-examples-segment" [(ngModel)]="section" (ionChange)="onSegmentChanged($event)">\n    <ion-segment-button value="post" (ionSelect)="onSegmentSelected($event)">\n      {{\'POST\' | translate}}\n    </ion-segment-button>\n    <ion-segment-button value="event" (ionSelect)="onSegmentSelected($event)">\n      {{\'EVENT\' | translate}}\n    </ion-segment-button>\n    <ion-segment-button value="card" (ionSelect)="onSegmentSelected($event)">\n      {{\'CARD\' | translate}}\n    </ion-segment-button>\n  </ion-segment>\n  <div [ngSwitch]="section" class="forms-wrapper">\n    <div *ngSwitchCase="\'post\'" class="post-example-view">\n      <form class="sample-form post-form" [formGroup]="post_form" (ngSubmit)="createPost()">\n        <section class="form-section">\n          <ion-item>\n            <ion-input type="text" placeholder="Title: e.g. Krabby Patty" formControlName="title"></ion-input>\n          </ion-item>\n          <button *ngIf="!selected_image" ion-button block large class="upload-image-button" (click)="openImagePicker()">\n            <ion-icon name="camera"></ion-icon>\n            <h3 class="button-title">{{\'UPLOAD_AN_IMAGE\' | translate}}</h3>\n          </button>\n          <preload-image *ngIf="selected_image" [ratio]="{w:1, h:1}" [src]="selected_image" alt="this is the image" title="IMAGE!"></preload-image>\n        </section>\n        <ion-item>\n          <ion-textarea rows="7" placeholder="Write a description or something..." formControlName="description"></ion-textarea>\n        </ion-item>\n        <section class="form-section">\n          <button ion-button block icon-right class="choose-category-button" (click)="chooseCategory()">\n            {{\'CHOOSE_CATEGORY\' | translate}}\n            <ion-icon name="add"></ion-icon>\n          </button>\n        </section>\n        <h2 class="section-title">{{\'SERVES_TIMES_TEMPS\' | translate}}</h2>\n        <ion-item class="counter-item">\n          <span class="counter-label">{{\'SERVINGS\' | translate}}</span>\n          <counter-input formControlName="servings"></counter-input>\n        </ion-item>\n        <ion-item class="time-item">\n          <ion-label>{{\'TIME\' | translate}}</ion-label>\n          <ion-datetime formControlName="time" displayFormat="h:mm" pickerFormat="h mm"></ion-datetime>\n        </ion-item>\n        <ion-item class="range-item">\n          <ion-label>\n            <h2 class="range-label">{{\'TEMPERATURE\' | translate}}</h2>\n            <h3 class="range-value">{{post_form.controls.temperature.value}} &deg;C</h3>\n          </ion-label>\n          <ion-range formControlName="temperature" min="0" max="220" step="5" snaps="true" pin="false"></ion-range>\n        </ion-item>\n        <section class="form-section">\n          <button ion-button block class="form-action-button create-post-button" type="submit" [disabled]="!post_form.valid">Post!</button>\n        </section>\n      </form>\n    </div>\n    <div *ngSwitchCase="\'event\'" class="event-example-view">\n      <form class="sample-form event-form" [formGroup]="event_form" (ngSubmit)="createEvent()">\n        <section class="form-section">\n          <h2 class="section-title">{{\'ADD_AN_EVENT\' | translate}}</h2>\n          <ion-item>\n            <ion-input type="text" placeholder="Event title" formControlName="title"></ion-input>\n          </ion-item>\n          <ion-item icon-right>\n            <ion-input type="text" placeholder="Location" formControlName="location"></ion-input>\n            <ion-icon name="navigate" item-right></ion-icon>\n          </ion-item>\n          <ion-row no-padding class="multi-input-row">\n            <ion-col no-padding width-60>\n              <ion-item class="multi-input time-item">\n                <ion-label floating>{{\'FROM\' | translate }}</ion-label>\n                <ion-datetime formControlName="from_date" displayFormat="DD/MM/YY" pickerFormat="DD-MM-YYYY"></ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col no-padding width-40>\n              <ion-item class="multi-input time-item">\n                <ion-datetime formControlName="from_time" displayFormat="h mm a" pickerFormat="h mm A"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row no-padding class="multi-input-row">\n            <ion-col no-padding width-60>\n              <ion-item class="multi-input time-item">\n                <ion-label floating>{{\'TO\' | translate}}</ion-label>\n                <ion-datetime formControlName="to_date" displayFormat="DD/MM/YY" pickerFormat="DD-MM-YYYY"></ion-datetime>\n              </ion-item>\n            </ion-col>\n            <ion-col no-padding width-40>\n              <ion-item class="multi-input time-item">\n                <ion-datetime formControlName="to_time" displayFormat="h mm a" pickerFormat="h mm A"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </section>\n        <section class="form-section">\n          <button ion-button block class="form-action-button create-event-button" type="submit" [disabled]="!event_form.valid">Done!</button>\n        </section>\n      </form>\n    </div>\n    <div *ngSwitchCase="\'card\'" class="card-example-view">\n      <form class="sample-form card-form" [formGroup]="card_form" (ngSubmit)="createCard()">\n        <section class="form-section">\n          <h2 class="section-title">{{\'CREDICT_CARD_INFORMATION\' | translate}}</h2>\n          <ion-item>\n            <ion-label floating>{{\'CARD_NUMBER\' | translate}}</ion-label>\n            <ion-input type="text" formControlName="card_number"></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{\'CARD_HOLDER\' | translate}}</ion-label>\n            <ion-input type="text" formControlName="card_holder"></ion-input>\n          </ion-item>\n          <ion-row no-padding class="multi-input-row">\n            <ion-col no-padding width-50>\n              <ion-item class="multi-input">\n                <ion-label floating>CVC</ion-label>\n                <ion-input type="text" formControlName="cvc"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col no-padding width-50>\n              <ion-item class="multi-input time-item">\n                <ion-label floating>{{\'EXP_DATE\' | translate}}</ion-label>\n                <ion-datetime formControlName="exp_date" displayFormat="MM/YYYY" pickerFormat="MM-YYYY"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </section>\n        <ion-list class="card-preferences">\n          <ion-item class="switcher-item">\n            <ion-label>{{\'SAVE_THIS_CARD\' | translate}}</ion-label>\n            <ion-toggle formControlName="save_card"></ion-toggle>\n          </ion-item>\n        </ion-list>\n        <section class="form-section">\n          <button ion-button block class="form-action-button create-card-button" type="submit" [disabled]="!card_form.valid">Confirm</button>\n        </section>\n      </form>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/form-layout/form-layout.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_crop__["a" /* Crop */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_image_picker__["a" /* ImagePicker */]])
], FormLayoutPage);

//# sourceMappingURL=form-layout.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_counter_input_counter_input__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FiltersPage = (function () {
    function FiltersPage(nav) {
        this.nav = nav;
        this.rangeForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            single: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](25),
            dual: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]({ lower: 33, upper: 60 })
        });
        this.checkboxForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            person_1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](true),
            person_2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false),
            person_3: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false),
            person_4: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](true),
            person_5: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false)
        });
        this.radioForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            selected_option: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('apple')
        });
        this.checkboxTagsForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            tag_1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false),
            tag_2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false),
            tag_3: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](true),
            tag_4: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](true),
            tag_5: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false),
            tag_6: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false),
            tag_7: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](true),
            tag_8: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false)
        });
        this.radioTagsForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            selected_option: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('any')
        });
        this.switchersForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            notifications: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](true),
            email_notifications: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false)
        });
        this.counterForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            counter: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](5, Object(__WEBPACK_IMPORTED_MODULE_3__components_counter_input_counter_input__["b" /* counterRangeValidator */])(7, 1)),
            counter2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](2, Object(__WEBPACK_IMPORTED_MODULE_3__components_counter_input_counter_input__["b" /* counterRangeValidator */])(5, 1))
        });
        this.ratingForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            rate: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](2.5),
            rate2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](1.5)
        });
        this.radioColorForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            selected_color: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('#fc9961')
        });
    }
    FiltersPage.prototype.rangeChange = function (range) {
        console.log("range, change, ratio: " + range.ratio + ", value: " + range.value);
    };
    return FiltersPage;
}());
FiltersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'filters-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/filters/filters.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'FILTERS\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="filters-content">\n  <ion-item-group class="filters-group">\n    <ion-item-divider>{{ \'RANGE\' | translate }}</ion-item-divider>\n    <form [formGroup]="rangeForm">\n      <ion-list class="range-list">\n        <ion-item class="range-item">\n          <ion-label>\n            <h3 class="range-value">{{rangeForm.controls.dual.value.lower}}</h3>\n            <h2 class="range-label">{{ \'QUANTITY\' | translate }}</h2>\n            <h3 class="range-value">{{rangeForm.controls.dual.value.upper}}</h3>\n          </ion-label>\n          <ion-range dualKnobs="true" formControlName="dual" (ionChange)="rangeChange($event)" min="21" max="72" step="3" snaps="true" pin="false"></ion-range>\n        </ion-item>\n        <ion-item class="range-item single-range">\n          <ion-label>\n            <h2 class="range-label">{{ \'AMOUNT\' | translate }}</h2>\n            <h3 class="range-value">{{rangeForm.controls.single.value}}</h3>\n          </ion-label>\n          <ion-range formControlName="single" (ionChange)="rangeChange($event)" min="0" max="50" step="1" snaps="true" pin="false"></ion-range>\n        </ion-item>\n      </ion-list>\n    </form>\n\n    <ion-item-divider>{{\'MULTIPLE_ITEMS\' | translate}}</ion-item-divider>\n    <form [formGroup]="checkboxForm">\n      <ion-list class="checkbox-list">\n        <ion-item class="checkbox-item">\n          <ion-label>Sophia Martin</ion-label>\n          <ion-checkbox formControlName="person_1"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-item">\n          <ion-label>Mattie Abbott</ion-label>\n          <ion-checkbox formControlName="person_2"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-item">\n          <ion-label>Marguerite Alvarez</ion-label>\n          <ion-checkbox formControlName="person_3"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-item">\n          <ion-label>Lewis Padilla</ion-label>\n          <ion-checkbox formControlName="person_4"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-item">\n          <ion-label>Nannie Willis</ion-label>\n          <ion-checkbox formControlName="person_5"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </form>\n\n    <ion-item-divider>{{ \'PICK_ONE\' | translate }}</ion-item-divider>\n    <form [formGroup]="radioForm">\n      <ion-list class="radio-group" radio-group formControlName="selected_option">\n        <ion-item class="radio-item">\n          <ion-label>Apple</ion-label>\n          <ion-radio item-left value="apple"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-item">\n          <ion-label>Banana</ion-label>\n          <ion-radio item-left value="banana"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-item">\n          <ion-label>Orange</ion-label>\n          <ion-radio item-left value="orange" disabled="true"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-item">\n          <ion-label>Kiwi</ion-label>\n          <ion-radio item-left value="kiwi"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </form>\n\n    <ion-item-divider>{{ \'TAGS_(MULTIPLE)\' | translate }}</ion-item-divider>\n    <form [formGroup]="checkboxTagsForm">\n      <ion-list class="checkbox-tags">\n        <ion-item class="checkbox-tag">\n          <ion-label>Indonesia</ion-label>\n          <ion-checkbox formControlName="tag_1"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Pitcairn Islands</ion-label>\n          <ion-checkbox formControlName="tag_2"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Malta</ion-label>\n          <ion-checkbox formControlName="tag_3"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Sierra Leone</ion-label>\n          <ion-checkbox formControlName="tag_4"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Dominican Republic</ion-label>\n          <ion-checkbox formControlName="tag_5"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Antigua and Barbuda</ion-label>\n          <ion-checkbox formControlName="tag_6"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Macedonia</ion-label>\n          <ion-checkbox formControlName="tag_7"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Vietnam</ion-label>\n          <ion-checkbox formControlName="tag_8"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </form>\n\n    <ion-item-divider>{{ \'MORE_TAGS_(MULTIPLE)\' | translate }}</ion-item-divider>\n    <form [formGroup]="checkboxTagsForm">\n      <ion-list class="checkbox-tags rounded-tags">\n        <ion-item class="checkbox-tag">\n          <ion-label>Indonesia</ion-label>\n          <ion-checkbox formControlName="tag_1"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Pitcairn Islands</ion-label>\n          <ion-checkbox formControlName="tag_2"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Malta</ion-label>\n          <ion-checkbox formControlName="tag_3"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Sierra Leone</ion-label>\n          <ion-checkbox formControlName="tag_4"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Dominican Republic</ion-label>\n          <ion-checkbox formControlName="tag_5"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Antigua and Barbuda</ion-label>\n          <ion-checkbox formControlName="tag_6"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Macedonia</ion-label>\n          <ion-checkbox formControlName="tag_7"></ion-checkbox>\n        </ion-item>\n        <ion-item class="checkbox-tag">\n          <ion-label>Vietnam</ion-label>\n          <ion-checkbox formControlName="tag_8"></ion-checkbox>\n        </ion-item>\n      </ion-list>\n    </form>\n\n    <ion-item-divider>{{ \'BUDGET_(RADIO_TAGS)\' | translate }}</ion-item-divider>\n    <form [formGroup]="radioTagsForm">\n      <ion-list class="radio-tags" radio-group formControlName="selected_option">\n        <ion-item class="radio-tag">\n          <ion-label>Any</ion-label>\n          <ion-radio value="any"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag">\n          <ion-label>\n            <span>&#36;</span>\n          </ion-label>\n          <ion-radio value="1"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag">\n          <ion-label>\n            <span>&#36;&#36;</span>\n          </ion-label>\n          <ion-radio value="2" disabled="true"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag">\n          <ion-label>\n            <span>&#36;&#36;&#36;</span>\n          </ion-label>\n          <ion-radio value="3"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </form>\n\n    <ion-item-divider>{{ \'SWITCHERS\' | translate }}</ion-item-divider>\n    <form [formGroup]="switchersForm">\n      <ion-list class="switchers-list">\n        <ion-item class="switcher-item">\n          <ion-label>Notifications</ion-label>\n          <ion-toggle formControlName="notifications"></ion-toggle>\n        </ion-item>\n        <ion-item class="switcher-item">\n          <ion-label>Email notifications</ion-label>\n          <ion-toggle formControlName="email_notifications"></ion-toggle>\n        </ion-item>\n      </ion-list>\n    </form>\n\n    <ion-item-divider>{{ \'ADD_&_SUBTRACT\' | translate }}</ion-item-divider>\n    <form [formGroup]="counterForm">\n      <ion-list class="counter-list">\n        <ion-item class="counter-item">\n          <span class="counter-label">Amount</span>\n          <counter-input formControlName="counter"></counter-input>\n        </ion-item>\n        <ion-item class="counter-item">\n          <span class="counter-label">Bedrooms</span>\n          <span class="counter-value">{{counterForm.controls.counter2.value}}</span>\n          <counter-input formControlName="counter2" basic></counter-input>\n        </ion-item>\n      </ion-list>\n    </form>\n\n    <ion-item-divider>{{ \'RATING\' | translate }}</ion-item-divider>\n    <form [formGroup]="ratingForm">\n      <ion-list class="ratings-list">\n        <ion-item class="rating-item">\n          <span class="rating-label">Minimum</span>\n          <rating formControlName="rate" max="5"></rating>\n        </ion-item>\n        <ion-item class="rating-item">\n          <span class="rating-label">Read Only</span>\n          <rating formControlName="rate2" max="3" read-only="true"></rating>\n        </ion-item>\n      </ion-list>\n    </form>\n\n    <ion-item-divider>{{ \'COLOR\' | translate }}</ion-item-divider>\n    <form [formGroup]="radioColorForm">\n      <ion-list class="radio-tags color-tags" radio-group formControlName="selected_color">\n        <ion-item class="radio-tag" color-radio="#fc6161">\n          <ion-label>Red</ion-label>\n          <ion-radio value="#fc6161"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag" color-radio="#fc9961">\n          <ion-radio value="#fc9961"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag" color-radio="#fcea61">\n          <ion-label>Yellow</ion-label>\n          <ion-radio value="#fcea61" disabled="true"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag" color-radio="#affc61">\n          <ion-label>Green</ion-label>\n          <ion-radio value="#affc61"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag" color-radio="#61fcc5">\n          <ion-radio value="#61fcc5"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag" color-radio="#fc61ad">\n          <ion-radio value="#fc61ad"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag" color-radio="#b561fc">\n          <ion-radio value="#b561fc"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag" color-radio="#6182fc">\n          <ion-radio value="#6182fc"></ion-radio>\n        </ion-item>\n        <ion-item class="radio-tag" color-radio="#61d1fc">\n          <ion-radio value="#61d1fc"></ion-radio>\n        </ion-item>\n      </ion-list>\n    </form>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/filters/filters.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
], FiltersPage);

//# sourceMappingURL=filters.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormValidationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_validators_username_validator__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_validators_password_validator__ = __webpack_require__(675);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_validators_phone_validator__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_validations_model__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_text_mask_addons_dist_emailMask__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_text_mask_addons_dist_emailMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_text_mask_addons_dist_emailMask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FormValidationsPage = (function () {
    function FormValidationsPage(navCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.emailMask = __WEBPACK_IMPORTED_MODULE_7_text_mask_addons_dist_emailMask___default.a;
        this.validation_messages = {
            'username': [
                { type: 'required', message: 'Username is required.' },
                { type: 'minlength', message: 'Username must be at least 5 characters long.' },
                { type: 'maxlength', message: 'Username cannot be more than 25 characters long.' },
                { type: 'pattern', message: 'Your username must contain only numbers and letters.' },
                { type: 'validUsername', message: 'Your username has already been taken.' }
            ],
            'name': [
                { type: 'required', message: 'Name is required.' }
            ],
            'lastname': [
                { type: 'required', message: 'Last name is required.' }
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'phone': [
                { type: 'required', message: 'Phone is required.' },
                { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 5 characters long.' },
                { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
            ],
            'confirm_password': [
                { type: 'required', message: 'Confirm password is required' }
            ],
            'matching_passwords': [
                { type: 'areEqual', message: 'Password mismatch' }
            ],
            'terms': [
                { type: 'pattern', message: 'You must accept terms and conditions.' }
            ],
        };
    }
    FormValidationsPage.prototype.ionViewWillLoad = function () {
        this.countries = [
            new __WEBPACK_IMPORTED_MODULE_6__form_validations_model__["a" /* Country */]('UY', 'Uruguay'),
            new __WEBPACK_IMPORTED_MODULE_6__form_validations_model__["a" /* Country */]('US', 'United States'),
            new __WEBPACK_IMPORTED_MODULE_6__form_validations_model__["a" /* Country */]('AR', 'Argentina')
        ];
        this.genders = [
            "Male",
            "Female"
        ];
        this.matching_passwords_group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
            confirm_password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required)
        }, function (formGroup) {
            return __WEBPACK_IMPORTED_MODULE_4__components_validators_password_validator__["a" /* PasswordValidator */].areEqual(formGroup);
        });
        var country = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](this.countries[0], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        var phone = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_5__components_validators_phone_validator__["a" /* PhoneValidator */].validCountryPhone(country)
        ]));
        this.country_phone_group = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            country: country,
            phone: phone
        });
        this.validations_form = this.formBuilder.group({
            username: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_3__components_validators_username_validator__["a" /* UsernameValidator */].validUsername,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(25),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(5),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            ])),
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            lastname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            gender: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](this.genders[0], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required),
            country_phone: this.country_phone_group,
            matching_passwords: this.matching_passwords_group,
            terms: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](true, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern('true'))
        });
    };
    FormValidationsPage.prototype.onSubmit = function (values) {
        console.log(values);
    };
    return FormValidationsPage;
}());
FormValidationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'form-validations-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/form-validations/form-validations.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'FORM_VALIDATIONS\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="forms-validations-content">\n  <form class="sample-form validations-form" [formGroup]="validations_form"  (ngSubmit)="onSubmit(validations_form.value)">\n    <section class="form-section">\n      <h2 class="section-title">{{\'BASIC_VALIDATIONS\' | translate}}</h2>\n      <ion-item>\n        <ion-label floating>{{\'USERNAME\' | translate}}</ion-label>\n        <ion-input type="text" formControlName="username" class="form-controll" required></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.username">\n          <div class="error-message" *ngIf="validations_form.get(\'username\').hasError(validation.type) && (validations_form.get(\'username\').dirty || validations_form.get(\'username\').touched)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label floating>{{\'NAME\' | translate}}</ion-label>\n        <ion-input type="text" formControlName="name"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.name">\n          <div class="error-message" *ngIf="validations_form.get(\'name\').hasError(validation.type) && (validations_form.get(\'name\').dirty || validations_form.get(\'name\').touched)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label floating>{{\'LAST_NAME\' | translate}}</ion-label>\n        <ion-input type="text" formControlName="lastname"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.lastname">\n          <div class="error-message" *ngIf="validations_form.get(\'lastname\').hasError(validation.type) && (validations_form.get(\'lastname\').dirty || validations_form.get(\'lastname\').touched)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label floating>{{\'EMAIL\' | translate}}</ion-label>\n        <ion-input [textMask]="emailMask" type="text" formControlName="email"></ion-input>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.email">\n          <div class="error-message" *ngIf="validations_form.get(\'email\').hasError(validation.type) && (validations_form.get(\'email\').dirty || validations_form.get(\'email\').touched)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n      <ion-item>\n        <ion-label floating>{{\'GENDER\' | translate}}</ion-label>\n        <ion-select formControlName="gender" cancelText="{{ \'CANCEL\' | translate }}" okText="{{ \'OK\' | translate }}">\n          <ion-option *ngFor="let gender of genders" [value]="gender" >{{ gender }}</ion-option>\n        </ion-select>\n      </ion-item>\n    </section>\n\n    <section class="form-section">\n      <h2 class="section-title">{{\'PHONE_VALIDATIONS\' | translate}}</h2>\n      <div formGroupName="country_phone">\n        <ion-item>\n          <ion-label floating>{{\'COUNTRY\' | translate}}</ion-label>\n          <ion-select formControlName="country" cancelText="{{ \'CANCEL\' | translate }}" okText="{{ \'OK\' | translate }}">\n            <ion-option *ngFor="let item of countries" [value]="item" >{{item.name}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item>\n          <ion-input [textMask]="{mask: validations_form.value.country_phone.country.phone_mask}" placeholder="{{ validations_form.value.country_phone.country.sample_phone }}" type="text" formControlName="phone"></ion-input>\n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.phone">\n            <div class="error-message" *ngIf="validations_form.get(\'country_phone\').get(\'phone\').hasError(validation.type) && (validations_form.get(\'country_phone\').get(\'phone\').dirty || validations_form.get(\'country_phone\').get(\'phone\').touched)">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </section>\n\n    <section class="form-section">\n      <h2 class="section-title">{{\'PASSWORD_VALIDATIONS\' | translate}}</h2>\n      <div formGroupName="matching_passwords">\n        <ion-item>\n          <ion-label floating>{{\'PASSWORD\' | translate}}</ion-label>\n          <ion-input type="password" formControlName="password"></ion-input>\n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.password">\n            <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').get(\'password\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'password\').dirty || validations_form.get(\'matching_passwords\').get(\'password\').touched)">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n\n        <ion-item>\n          <ion-label floating>{{\'CONFIRM_PASSWORD\' | translate}}</ion-label>\n          <ion-input type="password" formControlName="confirm_password"></ion-input>\n        </ion-item>\n        <div class="validation-errors">\n          <ng-container *ngFor="let validation of validation_messages.confirm_password">\n            <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').get(\'confirm_password\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'confirm_password\').dirty || validations_form.get(\'matching_passwords\').get(\'confirm_password\').touched)">\n              {{ validation.message }}\n            </div>\n          </ng-container>\n        </div>\n      </div>\n      <!-- These validations are for the form group -->\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.matching_passwords">\n          <div class="error-message" *ngIf="validations_form.get(\'matching_passwords\').hasError(validation.type) && (validations_form.get(\'matching_passwords\').get(\'confirm_password\').dirty || validations_form.get(\'matching_passwords\').get(\'confirm_password\').touched)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n    </section>\n\n    <section class="form-section">\n      <h2 class="section-title">{{\'ACCEPT_TERMS_VALIDATIONS\' | translate}}</h2>\n      <ion-item class="terms-item">\n        <ion-label>I accept terms and conditions</ion-label>\n        <ion-checkbox formControlName="terms"></ion-checkbox>\n      </ion-item>\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.terms">\n          <div class="error-message" *ngIf="validations_form.get(\'terms\').hasError(validation.type) && (validations_form.get(\'terms\').dirty || validations_form.get(\'terms\').touched)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n    </section>\n\n    <button ion-button full type="submit" [disabled]="!validations_form.valid">{{\'SUBMIT\' | translate}}</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/form-validations/form-validations.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
], FormValidationsPage);

//# sourceMappingURL=form-validations.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_schedule__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_1_list_1__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_2_list_2__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__grid_grid__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__notifications_notifications__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LayoutsPage = (function () {
    function LayoutsPage(nav, translate) {
        this.nav = nav;
        this.translate = translate;
    }
    LayoutsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8_rxjs_Observable__["Observable"].forkJoin(this.translate.get('SCHEDULE'), this.translate.get('LISTS'), this.translate.get('LISTS'), this.translate.get('GRID'), this.translate.get('NOTIFICATIONS'), this.translate.get('PROFILE')).subscribe(function (data) {
            _this.items = [
                { title: data[0], component: __WEBPACK_IMPORTED_MODULE_2__schedule_schedule__["a" /* SchedulePage */] },
                { title: data[1], note: '(Big)', component: __WEBPACK_IMPORTED_MODULE_3__list_1_list_1__["a" /* List1Page */] },
                { title: data[2], note: '(Mini)', component: __WEBPACK_IMPORTED_MODULE_4__list_2_list_2__["a" /* List2Page */] },
                { title: data[3], component: __WEBPACK_IMPORTED_MODULE_5__grid_grid__["a" /* GridPage */] },
                { title: data[4], component: __WEBPACK_IMPORTED_MODULE_6__notifications_notifications__["a" /* NotificationsPage */] },
                { title: data[5], component: __WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* ProfilePage */] },
            ];
        });
    };
    LayoutsPage.prototype.itemTapped = function (event, item) {
        this.nav.push(item.component);
    };
    return LayoutsPage;
}());
LayoutsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'layouts-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/layouts/layouts.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'LAYOUTS\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="layouts-content">\n  <ion-list class="layouts-list">\n    <button class="list-item" ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-row no-padding>\n        <ion-col no-padding class="item-content">\n          <h3 class="item-title">{{item.title}}</h3>\n          <span class="item-note" *ngIf="item.note">{{item.note}}</span>\n        </ion-col>\n        <ion-col no-padding width-10 class="item-icon">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/layouts/layouts.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */]])
], LayoutsPage);

//# sourceMappingURL=layouts.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__schedule_model__ = __webpack_require__(679);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__schedule_service__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SchedulePage = (function () {
    function SchedulePage(nav, scheduleService, loadingCtrl) {
        this.nav = nav;
        this.scheduleService = scheduleService;
        this.loadingCtrl = loadingCtrl;
        this.schedule = new __WEBPACK_IMPORTED_MODULE_3__schedule_model__["a" /* ScheduleModel */]();
        this.segment = "today";
        this.loading = this.loadingCtrl.create();
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.scheduleService
            .getData()
            .then(function (data) {
            _this.schedule.today = data.today;
            _this.schedule.upcoming = data.upcoming;
            _this.loading.dismiss();
        });
    };
    SchedulePage.prototype.onSegmentChanged = function (segmentButton) {
        // console.log('Segment changed to', segmentButton.value);
    };
    SchedulePage.prototype.onSegmentSelected = function (segmentButton) {
        // console.log('Segment selected', segmentButton.value);
    };
    return SchedulePage;
}());
SchedulePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'schedule-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/schedule/schedule.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'SCHEDULE\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="schedule-content">\n  <ion-segment class="schedule-segment" [(ngModel)]="segment" (ionChange)="onSegmentChanged($event)">\n    <ion-segment-button value="today" (ionSelect)="onSegmentSelected($event)">\n      {{\'TODAY\' | translate}}\n    </ion-segment-button>\n    <ion-segment-button value="upcoming" (ionSelect)="onSegmentSelected($event)">\n      {{\'UPCOMING\' | translate}}\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]="segment">\n    <div *ngSwitchCase="\'today\'">\n      <ion-list class="schedule-list">\n        <ion-item class="schedule-item" *ngFor="let item of schedule.today">\n          <ion-row>\n            <ion-col width-20 class="schedule-date">\n              <h2 class="schedule-day">{{item.date.day}}</h2>\n              <h3 class="schedule-month">{{item.date.month_name}}</h3>\n              <h4 class="schedule-time">{{item.date.time}}</h4>\n            </ion-col>\n            <ion-col width-80 class="schedule-data">\n              <div class="data-item">\n                <div class="item-content">\n                  <h2 class="item-title one-line">{{item.subject}}</h2>\n                  <div class="item-description">\n                    <ion-icon class="description-icon" name="clock"></ion-icon>\n                    <p class="description-text">{{item.date.full}}</p>\n                  </div>\n                  <div class="item-description">\n                    <ion-icon class="description-icon" name="navigate"></ion-icon>\n                    <p class="description-text one-line">{{item.location}}</p>\n                  </div>\n                </div>\n                <ion-icon class="item-icon" name="arrow-forward"></ion-icon>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div *ngSwitchCase="\'upcoming\'">\n      <ion-list class="schedule-list">\n        <ion-item class="schedule-item" *ngFor="let item of schedule.upcoming">\n          <ion-row>\n            <ion-col width-20 class="schedule-date">\n              <h2 class="schedule-day">{{item.date.day}}</h2>\n              <h3 class="schedule-month">{{item.date.month_name}}</h3>\n              <h4 class="schedule-time">{{item.date.time}}</h4>\n            </ion-col>\n            <ion-col width-80 class="schedule-data">\n              <div class="data-item">\n                <div class="item-content">\n                  <h2 class="item-title one-line">{{item.subject}}</h2>\n                  <div class="item-description">\n                    <ion-icon class="description-icon" name="clock"></ion-icon>\n                    <p class="description-text">{{item.date.full}}</p>\n                  </div>\n                  <div class="item-description">\n                    <ion-icon class="description-icon" name="navigate"></ion-icon>\n                    <p class="description-text one-line">{{item.location}}</p>\n                  </div>\n                </div>\n                <ion-icon class="item-icon" name="arrow-forward"></ion-icon>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/schedule/schedule.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__schedule_service__["a" /* ScheduleService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], SchedulePage);

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScheduleService = (function () {
    function ScheduleService(http) {
        this.http = http;
    }
    ScheduleService.prototype.getData = function () {
        return this.http.get('./assets/example_data/schedule.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ScheduleService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return ScheduleService;
}());
ScheduleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ScheduleService);

//# sourceMappingURL=schedule.service.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_1_model__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_1_service__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var List1Page = (function () {
    function List1Page(nav, list1Service, loadingCtrl) {
        this.nav = nav;
        this.list1Service = list1Service;
        this.loadingCtrl = loadingCtrl;
        this.list1 = new __WEBPACK_IMPORTED_MODULE_3__list_1_model__["a" /* List1Model */]();
        this.loading = this.loadingCtrl.create();
    }
    List1Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.list1Service
            .getData()
            .then(function (data) {
            _this.list1.items = data.items;
            _this.loading.dismiss();
        });
    };
    return List1Page;
}());
List1Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'list-1-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/list-1/list-1.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'LIST_BIG\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="list-big-content">\n  <div class="list-big">\n    <ion-list>\n      <button class="list-item" ion-item *ngFor="let item of list1.items">\n        <ion-row no-padding class="content-row">\n          <ion-col no-padding width-33 class="item-avatar">\n            <preload-image class="avatar-image" [ratio]="{w:1, h:1}" [src]="item.image"></preload-image>\n          </ion-col>\n          <ion-col no-padding width-57 class="item-content">\n            <h3 class="item-title">{{item.name}}</h3>\n            <p class="item-description" rows="3">{{item.description}}</p>\n            <!-- You can change the rows quantity by using rows="X", where X can be any number for example: rows="4" -->\n          </ion-col>\n          <ion-col no-padding width-10 class="item-icon">\n            <ion-icon name="arrow-forward"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/list-1/list-1.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__list_1_service__["a" /* List1Service */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], List1Page);

//# sourceMappingURL=list-1.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List1Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var List1Service = (function () {
    function List1Service(http) {
        this.http = http;
    }
    List1Service.prototype.getData = function () {
        return this.http.get('./assets/example_data/lists.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    List1Service.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return List1Service;
}());
List1Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], List1Service);

//# sourceMappingURL=list-1.service.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_2_model__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_2_service__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var List2Page = (function () {
    function List2Page(nav, list2Service, loadingCtrl) {
        this.nav = nav;
        this.list2Service = list2Service;
        this.loadingCtrl = loadingCtrl;
        this.list2 = new __WEBPACK_IMPORTED_MODULE_3__list_2_model__["a" /* List2Model */]();
        this.loading = this.loadingCtrl.create();
    }
    List2Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.list2Service
            .getData()
            .then(function (data) {
            _this.list2.items = data.items;
            _this.loading.dismiss();
        });
    };
    return List2Page;
}());
List2Page = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'list-2-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/list-2/list-2.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'LIST_MINI\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="list-mini-content">\n  <div class="list-mini">\n    <ion-list>\n      <button class="list-item" ion-item *ngFor="let item of list2.items">\n        <ion-row no-padding class="content-row one-line">\n          <!-- You can limit the rows of the description by using the class one-line. If you remove it, all the content from the row will be shown -->\n          <ion-col no-padding width-18 class="item-avatar">\n            <preload-image class="avatar-image" [ratio]="{w:1, h:1}" [src]="item.image"></preload-image>\n          </ion-col>\n          <ion-col no-padding width-72 class="item-content">\n            <h3 class="item-title">{{item.name}}</h3>\n            <p class="item-description">{{item.description}}</p>\n          </ion-col>\n          <ion-col no-padding width-10 class="item-icon">\n            <ion-icon name="arrow-forward"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </button>\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/list-2/list-2.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__list_2_service__["a" /* List2Service */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], List2Page);

//# sourceMappingURL=list-2.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List2Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var List2Service = (function () {
    function List2Service(http) {
        this.http = http;
    }
    List2Service.prototype.getData = function () {
        return this.http.get('./assets/example_data/lists.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    List2Service.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return List2Service;
}());
List2Service = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], List2Service);

//# sourceMappingURL=list-2.service.js.map

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GridPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GridPage = (function () {
    function GridPage(nav) {
        this.nav = nav;
    }
    return GridPage;
}());
GridPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'grid-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/grid/grid.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'GRID\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-group>\n    <ion-item-divider>{{\'GRID_EXAMPLE\' | translate}} #1</ion-item-divider>\n    <ion-row class="grid-1 grid-example">\n      <ion-col width-100 class="grid-item">\n        <div class="grid-item-wrapper">\n          <div class="grid-item-inner multi-line">\n            <h2 class="item-title">1</h2>\n            <h2 class="item-title">1</h2>\n            <h2 class="item-title">1</h2>\n            <h2 class="item-title">1</h2>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col width-50 class="grid-item" *ngFor="let item of [2, 3, 4, 5, 6]">\n        <div class="grid-item-wrapper">\n          <div class="grid-item-inner">\n            <h2 class="item-title">{{ item }}</h2>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-item-divider>{{\'GRID_EXAMPLE\' | translate}} #2</ion-item-divider>\n    <ion-row class="grid-2 grid-example">\n      <ion-col width-66 class="grid-item">\n        <div class="grid-item-wrapper">\n          <div class="grid-item-inner multi-line">\n            <h2 class="item-title">1</h2>\n            <h2 class="item-title">1</h2>\n            <h2 class="item-title">1</h2>\n          </div>\n        </div>\n      </ion-col>\n      <ion-col width-33 class="grid-item">\n        <ion-row class="double-item">\n          <ion-col width-100 class="grid-item" *ngFor="let item of [2, 3]">\n            <div class="grid-item-wrapper">\n              <div class="grid-item-inner">\n                <h2 class="item-title">{{ item }}</h2>\n              </div>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n      <ion-col width-33 class="grid-item" *ngFor="let item of [4, 5, 6, 7]">\n        <div class="grid-item-wrapper">\n          <div class="grid-item-inner">\n            <h2 class="item-title">{{ item }}</h2>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-item-divider>{{\'GRID_EXAMPLE\' | translate}} #3</ion-item-divider>\n    <ion-row class="grid-3 grid-example">\n      <ion-col width-50 class="grid-item" *ngFor="let item of [1, 2, 3, 4, 5, 6, 7]">\n        <div class="grid-item-wrapper">\n          <div class="grid-item-inner">\n            <h2 class="item-title">{{ item }}</h2>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-item-divider>{{\'GRID_EXAMPLE\' | translate}} #4</ion-item-divider>\n    <ion-row class="grid-3 grid-example">\n      <ion-col width-33 class="grid-item" *ngFor="let item of [1, 2, 3, 4, 5, 6, 7]">\n        <div class="grid-item-wrapper">\n          <div class="grid-item-inner">\n            <h2 class="item-title">{{ item }}</h2>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/grid/grid.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
], GridPage);

//# sourceMappingURL=grid.js.map

/***/ }),

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FunctionalitiesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maps_maps__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facebook_login_facebook_login__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__google_login_google_login__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__twitter_login_twitter_login__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_card_contact_card__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ads_ads__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__video_playlist_video_playlist__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var FunctionalitiesPage = (function () {
    function FunctionalitiesPage(nav, translate) {
        this.nav = nav;
        this.translate = translate;
    }
    FunctionalitiesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_9_rxjs_Observable__["Observable"].forkJoin(this.translate.get('FACEBOOK_INTEGRATION'), this.translate.get('GOOGLE_INTEGRATION'), this.translate.get('TWITTER_INTEGRATION'), this.translate.get('CONTACT_CARD'), this.translate.get('MAPS'), this.translate.get('VIDEO_PLAYLIST'), this.translate.get('ADS')).subscribe(function (data) {
            _this.items = [
                { title: data[0], component: __WEBPACK_IMPORTED_MODULE_3__facebook_login_facebook_login__["a" /* FacebookLoginPage */] },
                { title: data[1], component: __WEBPACK_IMPORTED_MODULE_4__google_login_google_login__["a" /* GoogleLoginPage */] },
                { title: data[2], component: __WEBPACK_IMPORTED_MODULE_5__twitter_login_twitter_login__["a" /* TwitterLoginPage */] },
                { title: data[3], component: __WEBPACK_IMPORTED_MODULE_6__contact_card_contact_card__["a" /* ContactCardPage */] },
                { title: data[4], component: __WEBPACK_IMPORTED_MODULE_2__maps_maps__["a" /* MapsPage */] },
                { title: data[5], component: __WEBPACK_IMPORTED_MODULE_8__video_playlist_video_playlist__["a" /* VideoPlaylistPage */] },
                { title: data[6], component: __WEBPACK_IMPORTED_MODULE_7__ads_ads__["a" /* AdsPage */] }
            ];
        });
    };
    FunctionalitiesPage.prototype.itemTapped = function (event, item) {
        this.nav.push(item.component);
    };
    return FunctionalitiesPage;
}());
FunctionalitiesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'functionalities-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/functionalities/functionalities.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{\'FUNCTIONALITIES\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="functionalities-content">\n  <ion-list class="functionalities-list">\n    <button class="list-item" ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-row no-padding>\n        <ion-col no-padding class="item-content">\n          <h3 class="item-title">{{item.title}}</h3>\n          <span class="item-note" *ngIf="item.note">{{item.note}}</span>\n        </ion-col>\n        <ion-col no-padding width-10 class="item-icon">\n          <ion-icon name="arrow-forward"></ion-icon>\n        </ion-col>\n      </ion-row>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/functionalities/functionalities.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["c" /* TranslateService */]])
], FunctionalitiesPage);

//# sourceMappingURL=functionalities.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_google_map_google_map__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__maps_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__maps_model__ = __webpack_require__(682);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MapsPage = (function () {
    function MapsPage(nav, loadingCtrl, toastCtrl, GoogleMapsService, geolocation, keyboard) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.GoogleMapsService = GoogleMapsService;
        this.geolocation = geolocation;
        this.keyboard = keyboard;
        this.map_model = new __WEBPACK_IMPORTED_MODULE_7__maps_model__["a" /* MapsModel */]();
    }
    MapsPage.prototype.ngOnInit = function () {
        var _this = this;
        var _loading = this.loadingCtrl.create();
        _loading.present();
        this._GoogleMap.$mapReady.subscribe(function (map) {
            _this.map_model.init(map);
            _loading.dismiss();
        });
    };
    MapsPage.prototype.searchPlacesPredictions = function (query) {
        var env = this;
        if (query !== "") {
            env.GoogleMapsService.getPlacePredictions(query).subscribe(function (places_predictions) {
                env.map_model.search_places_predictions = places_predictions;
            }, function (e) {
                console.log('onError: %s', e);
            }, function () {
                console.log('onCompleted');
            });
        }
        else {
            env.map_model.search_places_predictions = [];
        }
    };
    MapsPage.prototype.setOrigin = function (location) {
        var env = this;
        // Clean map
        env.map_model.cleanMap();
        // Set the origin for later directions
        env.map_model.directions_origin.location = location;
        env.map_model.addPlaceToMap(location, '#00e9d5');
        // With this result we should find restaurants (*places) arround this location and then show them in the map
        // Now we are able to search *restaurants near this location
        env.GoogleMapsService.getPlacesNearby(location).subscribe(function (nearby_places) {
            // Create a location bound to center the map based on the results
            var bound = new google.maps.LatLngBounds();
            for (var i = 0; i < nearby_places.length; i++) {
                bound.extend(nearby_places[i].geometry.location);
                env.map_model.addNearbyPlace(nearby_places[i]);
            }
            // Select first place to give a hint to the user about how this works
            env.choosePlace(env.map_model.nearby_places[0]);
            // To fit map with places
            env.map_model.map.fitBounds(bound);
        }, function (e) {
            console.log('onError: %s', e);
        }, function () {
            console.log('onCompleted');
        });
    };
    MapsPage.prototype.selectSearchResult = function (place) {
        var env = this;
        env.map_model.search_query = place.description;
        env.map_model.search_places_predictions = [];
        // We need to get the location from this place. Let's geocode this place!
        env.GoogleMapsService.geocodePlace(place.place_id).subscribe(function (place_location) {
            env.setOrigin(place_location);
        }, function (e) {
            console.log('onError: %s', e);
        }, function () {
            console.log('onCompleted');
        });
    };
    MapsPage.prototype.clearSearch = function () {
        var env = this;
        this.keyboard.close();
        // Clean map
        env.map_model.cleanMap();
    };
    MapsPage.prototype.geolocateMe = function () {
        var env = this, _loading = env.loadingCtrl.create();
        _loading.present();
        this.geolocation.getCurrentPosition().then(function (position) {
            var current_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            env.map_model.search_query = position.coords.latitude.toFixed(2) + ", " + position.coords.longitude.toFixed(2);
            env.setOrigin(current_location);
            env.map_model.using_geolocation = true;
            _loading.dismiss();
        }).catch(function (error) {
            console.log('Error getting location', error);
            _loading.dismiss();
        });
    };
    MapsPage.prototype.choosePlace = function (place) {
        var _this = this;
        var env = this;
        // Check if the place is not already selected
        if (!place.selected) {
            // De-select previous places
            env.map_model.deselectPlaces();
            // Select current place
            place.select();
            // Get both route directions and distance between the two locations
            var directions_observable = env.GoogleMapsService
                .getDirections(env.map_model.directions_origin.location, place.location), distance_observable = env.GoogleMapsService
                .getDistanceMatrix(env.map_model.directions_origin.location, place.location);
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(directions_observable, distance_observable).subscribe(function (data) {
                var directions = data[0], distance = data[1].rows[0].elements[0].distance.text, duration = data[1].rows[0].elements[0].duration.text;
                env.map_model.directions_display.setDirections(directions);
                if (env.toast) {
                    env.toast.dismiss();
                }
                env.toast = _this.toastCtrl.create({
                    message: 'That\'s ' + distance + ' away and will take ' + duration,
                    duration: 2000
                });
                env.toast.present();
            }, function (e) {
                console.log('onError: %s', e);
            }, function () {
                console.log('onCompleted');
            });
        }
    };
    return MapsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__components_google_map_google_map__["a" /* GoogleMap */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__components_google_map_google_map__["a" /* GoogleMap */])
], MapsPage.prototype, "_GoogleMap", void 0);
MapsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'maps-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/maps/maps.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'GOOGLE_MAPS\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-row no-padding class="map-row">\n    <ion-col no-padding class="map-col">\n      <div class="search-container">\n        <!-- <ion-toolbar class="search-toolbar transparent-background"> -->\n        <ion-toolbar class="search-toolbar">\n          <ion-buttons start>\n            <button ion-button icon-only (click)="geolocateMe()" class="geolocation-button" [ngClass]="{\'using-geolocation\': map_model.using_geolocation}">\n              <ion-icon name="locate"></ion-icon>\n            </button>\n          </ion-buttons>\n          <ion-searchbar class="search-places-bar" placeholder="Search places near location" [(ngModel)]="map_model.search_query" (ionInput)="searchPlacesPredictions(map_model.search_query)" (ionClear)="clearSearch()"></ion-searchbar>\n        </ion-toolbar>\n        <ion-list [hidden]="map_model.search_places_predictions.length == 0" class="search-options-list">\n          <ion-item *ngFor="let place of map_model.search_places_predictions" tappable (click)="selectSearchResult(place)">\n            {{ place.description }}\n          </ion-item>\n        </ion-list>\n      </div>\n      <div class="map-container">\n        <google-map [options]="map_model.map_options"></google-map>\n      </div>\n      <ion-scroll [hidden]="map_model.nearby_places.length == 0" scrollX="true" class="nearby-places-container">\n        <ion-row class="nearby-places-row">\n          <ion-col width-64 class="place-item-outer" *ngFor="let place of map_model.nearby_places" [ngClass]="{\'selected-place\': place.selected}" (click)="choosePlace(place)">\n            <ion-card class="place-card">\n              <background-image class="place-image-heading" [src]="place.details.image">\n                <ion-row class="heading-row">\n                  <ion-col no-padding width-100>\n                    <h2 class="place-title">{{ place.details.name }}</h2>\n                  </ion-col>\n                </ion-row>\n              </background-image>\n              <div class="place-details-container">\n                <ion-row class="details-row">\n                  <ion-col no-padding width-50>\n                    <span class="opening-hours" [ngClass]="{\'opened\': (place.details && place.details.opening_hours && place.details.opening_hours.open_now), \'closed\': !(place.details && place.details.opening_hours && place.details.opening_hours.open_now)}">\n                      {{ (place.details && place.details.opening_hours && place.details.opening_hours.open_now) ? \'OPENED\' : \'CLOSED\' }}\n                    </span>\n                  </ion-col>\n                  <ion-col no-padding width-50>\n                    <div class="place-rating">\n                      <ion-item class="rating-item">\n                        <rating [(ngModel)]="place.details.rating" max="5" read-only="true"></rating>\n                      </ion-item>\n                    </div>\n                  </ion-col>\n                </ion-row>\n                <ion-list class="details-list" no-lines>\n                  <ion-item class="place-location">\n                    <ion-avatar item-left>\n                      <ion-icon name="pin"></ion-icon>\n                    </ion-avatar>\n                    <span class="location-text">{{ place.details.vicinity }}</span>\n                  </ion-item>\n                </ion-list>\n              </div>\n            </ion-card>\n          </ion-col>\n        </ion-row>\n      </ion-scroll>\n    </ion-col>\n  </ion-row>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/maps/maps.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_6__maps_service__["a" /* GoogleMapsService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */]])
], MapsPage);

//# sourceMappingURL=maps.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMap; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleMap = (function () {
    function GoogleMap(_elementRef) {
        this._elementRef = _elementRef;
        this._mapOptions = {
            zoom: 15
        };
        this.$mapReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._mapIdledOnce = false;
    }
    Object.defineProperty(GoogleMap.prototype, "options", {
        set: function (val) {
            if (Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(val)) {
                this._mapOptions = val;
            }
        },
        enumerable: true,
        configurable: true
    });
    GoogleMap.prototype.ngOnInit = function () {
        this.initMap();
    };
    GoogleMap.prototype.initMap = function () {
        var _this = this;
        this._el = this._elementRef.nativeElement;
        this._map = new google.maps.Map(this._el, this._mapOptions);
        // Workarround for init method: try to catch the first idel event after the map cretion (this._mapIdledOnce). The following idle events don't matter.
        var _ready_listener = this._map.addListener('idle', function () {
            console.log("mapReady - IDLE");
            if (!_this._mapIdledOnce) {
                _this.$mapReady.emit(_this._map);
                _this._mapIdledOnce = true;
                // Stop listening to event, the map is ready
                google.maps.event.removeListener(_ready_listener);
            }
        });
    };
    return GoogleMap;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], GoogleMap.prototype, "options", null);
GoogleMap = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'google-map',
        template: ''
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], GoogleMap);

//# sourceMappingURL=google-map.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoogleMapsService = (function () {
    // There are some issues with async observers (https://gist.github.com/endash/1f961830d0c5b744598a)
    //    - That's why we need to use ngZones
    // Here's another post explaining the issue (http://stackoverflow.com/a/38100262/1116959)
    //    - Seems that google.maps API is not patched by Angular's zone
    function GoogleMapsService(zone) {
        this.zone = zone;
        this._AutocompleteService = new google.maps.places.AutocompleteService();
        this._Geocoder = new google.maps.Geocoder;
        // As we are already using a map, we don't need to pass the map element to the PlacesServices (https://groups.google.com/forum/#!topic/google-maps-js-api-v3/QJ67k-ATuFg)
        this._PlacesService = new google.maps.places.PlacesService(document.createElement("div"));
        this._DirectionsService = new google.maps.DirectionsService;
        this._DistanceMatrixService = new google.maps.DistanceMatrixService;
    }
    // Caveat:  As we are using Observable.create don't forget a well-formed finite Observable must attempt to call
    //          either the observer’s onCompleted method exactly once or its onError method exactly once, and must not
    //          thereafter attempt to call any of the observer’s other methods.
    //    - http://reactivex.io/documentation/operators/create.html
    //    - http://stackoverflow.com/a/38376519/1116959
    // https://developers.google.com/maps/documentation/javascript/reference#AutocompletePrediction
    GoogleMapsService.prototype.getPlacePredictions = function (query) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._AutocompleteService.getPlacePredictions({ input: query }, function (places_predictions, status) {
                if (status != google.maps.places.PlacesServiceStatus.OK) {
                    _this.zone.run(function () {
                        observer.next([]);
                        observer.complete();
                    });
                }
                else {
                    _this.zone.run(function () {
                        observer.next(places_predictions);
                        observer.complete();
                    });
                }
            });
        });
    };
    GoogleMapsService.prototype.geocodePlace = function (placeId) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._Geocoder.geocode({ 'placeId': placeId }, function (results, status) {
                if (status.toString() === 'OK') {
                    if (results[0]) {
                        _this.zone.run(function () {
                            observer.next(results[0].geometry.location);
                            observer.complete();
                        });
                    }
                    else {
                        _this.zone.run(function () {
                            observer.error(new Error("no results"));
                        });
                    }
                }
                else {
                    _this.zone.run(function () {
                        observer.error(new Error("error"));
                    });
                }
            });
        });
    };
    // https://developers.google.com/maps/documentation/javascript/reference#PlaceResult
    GoogleMapsService.prototype.getPlacesNearby = function (location) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._PlacesService.nearbySearch({
                location: location,
                radius: 500,
                types: ['restaurant']
            }, function (results, status) {
                if (status != google.maps.places.PlacesServiceStatus.OK) {
                    _this.zone.run(function () {
                        observer.next([]);
                        observer.complete();
                    });
                }
                else {
                    _this.zone.run(function () {
                        observer.next(results);
                        observer.complete();
                    });
                }
            });
        });
    };
    // https://developers.google.com/maps/documentation/javascript/reference#DirectionsResult
    GoogleMapsService.prototype.getDirections = function (origin, destination) {
        var _this = this;
        var _origin = {
            location: origin
        }, _destination = {
            location: destination
        }, route_query = {
            origin: _origin,
            destination: _destination,
            travelMode: google.maps.TravelMode.WALKING
        };
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._DirectionsService.route(route_query, function (route, status) {
                if (status.toString() === 'OK') {
                    _this.zone.run(function () {
                        // Yield a single value and complete
                        observer.next(route);
                        observer.complete();
                    });
                }
                else {
                    _this.zone.run(function () {
                        observer.error(new Error("error due to " + status));
                    });
                }
            });
        });
    };
    GoogleMapsService.prototype.getDistanceMatrix = function (origin, destination) {
        var _this = this;
        var _origin = {
            location: origin
        }, _destination = {
            location: destination
        }, distance_query = {
            origins: [_origin],
            destinations: [_destination],
            travelMode: google.maps.TravelMode.WALKING,
            unitSystem: google.maps.UnitSystem.METRIC
        };
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            _this._DistanceMatrixService.getDistanceMatrix(distance_query, function (distance, status) {
                if (status.toString() === 'OK') {
                    _this.zone.run(function () {
                        // Yield a single value and complete
                        observer.next(distance);
                        observer.complete();
                    });
                }
                else {
                    _this.zone.run(function () {
                        observer.error(new Error("error due to " + status));
                    });
                }
            });
        });
    };
    return GoogleMapsService;
}());
GoogleMapsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
], GoogleMapsService);

//# sourceMappingURL=maps.service.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facebook_user_model__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facebook_login_service__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FacebookLoginPage = (function () {
    function FacebookLoginPage(nav, facebookLoginService, loadingCtrl) {
        this.nav = nav;
        this.facebookLoginService = facebookLoginService;
        this.loadingCtrl = loadingCtrl;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__facebook_user_model__["a" /* FacebookUserModel */]();
        this.loading = this.loadingCtrl.create();
    }
    FacebookLoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.facebookLoginService.getFacebookUser()
            .then(function (user) {
            _this.user = user;
            _this.loading.dismiss();
        }, function (error) {
            console.log(error);
            _this.loading.dismiss();
        });
    };
    FacebookLoginPage.prototype.doFacebookLogout = function () {
        var _this = this;
        this.facebookLoginService.doFacebookLogout()
            .then(function (res) {
            _this.user = new __WEBPACK_IMPORTED_MODULE_2__facebook_user_model__["a" /* FacebookUserModel */]();
        }, function (error) {
            console.log("Facebook logout error", error);
        });
    };
    FacebookLoginPage.prototype.doFacebookLogin = function () {
        var _this = this;
        this.facebookLoginService.doFacebookLogin()
            .then(function (user) {
            _this.user = user;
        }, function (err) {
            console.log("Facebook Login error", err);
        });
    };
    return FacebookLoginPage;
}());
FacebookLoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'facebook-login-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/facebook-login/facebook-login.html"*/'<ion-header class="facebook-header">\n  <ion-navbar>\n    <ion-title>{{\'FACEBOOK\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="facebook-integration-content" [ngClass]="{connected: user.userId}">\n  <div *ngIf="!user.userId">\n    <h1 class="no-connection-message">{{\'NOT_LOGGED_FACEBOOK\' | translate}}</h1>\n    <ion-row *ngIf="!user.userId" class="actions-row facebook-connect-row">\n      <ion-col no-padding width-100>\n        <button ion-button block class="auth-action-button facebook-auth-button" (click)="doFacebookLogin()">{{\'CONNECT_WITH_FACEBOOK\' | translate}}</button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-card class="facebook-card" *ngIf="user.userId">\n    <background-image class="user-image-heading" [src]="user.image">\n      <ion-row class="heading-row">\n        <ion-col no-padding width-72 class="user-details-col">\n          <h2 class="user-name">{{user.name}}</h2>\n        </ion-col>\n        <ion-col no-padding width-28 class="user-details-col">\n          <ion-icon *ngIf="(user.gender | lowercase) == \'female\'" class="user-gender-icon" name="female"></ion-icon>\n          <ion-icon *ngIf="(user.gender | lowercase) == \'male\'" class="user-gender-icon" name="male"></ion-icon>\n          <span class="user-gender">{{user.gender}}</span>\n        </ion-col>\n      </ion-row>\n    </background-image>\n    <h3 class="divider-heading">{{ \'FRIENDS\' | translate }}</h3>\n    <ion-row class="friends-row">\n      <ion-col no-padding class="friend-col" *ngFor="let friend_image of user.friends">\n        <preload-image class="rounded-image" [ratio]="{w:1, h:1}" [src]="friend_image" alt="facebook friend" title="facebook friend"></preload-image>\n      </ion-col>\n      <ion-col no-padding class="friend-col">\n        <h3 class="more-friends">22</h3>\n      </ion-col>\n    </ion-row>\n    <h3 class="divider-heading">{{\'PHOTOS\' | translate }}</h3>\n    <ion-row class="photos-row" wrap>\n      <ion-col no-padding width-25 class="photo-col" *ngFor="let photo of user.photos; let i = index">\n        <preload-image [ratio]="{w:1, h:1}" [src]="photo" alt="facebook photo" title="facebook photo"></preload-image>\n        <div *ngIf="i == (user.photos.length -1)" class="has-more-images">\n          <h3 class="images-count">107</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="actions-row">\n      <ion-col no-padding width-100>\n        <button ion-button block class="auth-action-button logout-button" (click)="doFacebookLogout()">{{ \'LOG_OUT\' | translate}}</button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/facebook-login/facebook-login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__facebook_login_service__["a" /* FacebookLoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], FacebookLoginPage);

//# sourceMappingURL=facebook-login.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__google_user_model__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__google_login_service__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleLoginPage = (function () {
    function GoogleLoginPage(navCtrl, googleLoginService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.googleLoginService = googleLoginService;
        this.loadingCtrl = loadingCtrl;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__google_user_model__["a" /* GoogleUserModel */]();
        this.loading = this.loadingCtrl.create();
    }
    GoogleLoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.googleLoginService.getGoogleUser()
            .then(function (user) {
            _this.user = user;
            _this.loading.dismiss();
        }, function (error) {
            console.log(error);
            _this.loading.dismiss();
        });
    };
    GoogleLoginPage.prototype.doGoogleLogout = function () {
        var _this = this;
        this.googleLoginService.doGoogleLogout()
            .then(function (res) {
            _this.user = new __WEBPACK_IMPORTED_MODULE_2__google_user_model__["a" /* GoogleUserModel */]();
        }, function (error) {
            console.log("Google logout error", error);
        });
    };
    GoogleLoginPage.prototype.doGoogleLogin = function () {
        var _this = this;
        this.googleLoginService.doGoogleLogin()
            .then(function (user) {
            _this.user = user;
        }, function (err) {
            console.log("Google Login error", err);
        });
    };
    return GoogleLoginPage;
}());
GoogleLoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'google-login-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/google-login/google-login.html"*/'<ion-header class="google-header">\n  <ion-navbar>\n    <ion-title>Google</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="google-integration-content">\n\n  <div *ngIf="!user.userId">\n    <h1 class="no-connection-message">{{ \'NOT_LOGGED_GOOGLE\' | translate }}</h1>\n    <ion-row class="actions-row google-connect-row">\n      <ion-col no-padding width-100>\n        <button ion-button block class="auth-action-button google-auth-button" (click)="doGoogleLogin()">{{ \'CONNECT_WITH_GOOGLE\' | translate}}</button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf="user.userId">\n    <background-image class="user-image-heading" [src]="user.image"></background-image>\n    <ion-row class="contact-details-row" wrap>\n      <ion-col no-padding width-100>\n        <h2 class="contact-name">{{user.name}}</h2>\n      </ion-col>\n      <ion-col no-padding width-100>\n        <p class="contact-description">\n          {{user.email}}\n        </p>\n      </ion-col>\n    </ion-row>\n    <h3 class="divider-heading">{{\'FRIENDS\' | translate}}</h3>\n    <ion-row class="friends-row">\n      <ion-col no-padding class="friend-col" *ngFor="let friend_image of user.friends">\n        <preload-image class="rounded-image" [ratio]="{w:1, h:1}" [src]="friend_image" alt="google friend" title="google friend"></preload-image>\n        <h4 class="friend-name">Tom</h4>\n      </ion-col>\n      <ion-col no-padding class="friend-col">\n        <div class="more-friends">\n          <h3 class="more-friends-text">22</h3>\n        </div>\n      </ion-col>\n    </ion-row>\n    <h3 class="divider-heading">{{\'PHOTOS\' | translate}}</h3>\n    <ion-scroll scrollX="true" class="horizontal-photos-scroll">\n      <ion-row class="photos-row">\n        <ion-col no-padding width-30 class="photo-col" *ngFor="let photo of user.photos; let i = index">\n          <preload-image [ratio]="{w:1, h:1}" [src]="photo" alt="google photo" title="google photo"></preload-image>\n          <div *ngIf="i == (user.photos.length -1)" class="has-more-images">\n            <h3 class="images-count">107</h3>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-scroll>\n    <ion-row class="actions-row">\n      <ion-col no-padding width-100>\n        <button ion-button block class="auth-action-button logout-button" (click)="doGoogleLogout()">{{ \'LOG_OUT\' | translate }}</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/google-login/google-login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__google_login_service__["a" /* GoogleLoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], GoogleLoginPage);

//# sourceMappingURL=google-login.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterLoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__twitter_user_model__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__twitter_login_service__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TwitterLoginPage = (function () {
    function TwitterLoginPage(navCtrl, twitterLoginService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.twitterLoginService = twitterLoginService;
        this.loadingCtrl = loadingCtrl;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__twitter_user_model__["a" /* TwitterUserModel */]();
        this.loading = this.loadingCtrl.create();
    }
    TwitterLoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.twitterLoginService.getTwitterUser()
            .then(function (user) {
            _this.user = user;
            _this.loading.dismiss();
        }, function (err) {
            console.log(err);
            _this.loading.dismiss();
        });
    };
    TwitterLoginPage.prototype.doTwitterLogout = function () {
        var _this = this;
        this.twitterLoginService.doTwitterLogout()
            .then(function (res) {
            _this.user = new __WEBPACK_IMPORTED_MODULE_2__twitter_user_model__["a" /* TwitterUserModel */]();
        }, function (err) {
            console.log("Twitter logout error", err);
        });
    };
    TwitterLoginPage.prototype.doTwitterLogin = function () {
        var _this = this;
        this.twitterLoginService.doTwitterLogin()
            .then(function (user) {
            _this.user = user;
        }, function (err) {
            console.log("Twitter Login error", err);
        });
    };
    return TwitterLoginPage;
}());
TwitterLoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'twitter-login-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/twitter-login/twitter-login.html"*/'<ion-header class="twitter-header">\n  <ion-navbar>\n    <ion-title>{{\'TWITTER\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="twitter-integration-content" [ngClass]="{connected: user.userId}">\n\n  <div *ngIf="!user.userId">\n    <h1 class="no-connection-message">{{\'NOT_LOGGED_TWITTER\' | translate}}</h1>\n    <ion-row class="actions-row twitter-connect-row">\n      <ion-col no-padding width-100>\n        <button ion-button block class="auth-action-button twitter-auth-button" (click)="doTwitterLogin()">{{\'CONNECT_WITH_TWITTER\' | translate}}</button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div *ngIf="user.userId">\n    <ion-row class="main-user-data-row">\n      <ion-col no-padding width-100>\n        <preload-image class="twitter-user-image" [ratio]="{w:1, h:1}" [src]="user.image" alt="twitter user image" title="twitter user image"></preload-image>\n      </ion-col>\n      <ion-col class="social-connections-col" no-padding width-50>\n        <span class="connection-type">Followers</span>\n        <h2 class="connection-number">{{ user.followers }}</h2>\n      </ion-col>\n      <ion-col class="social-connections-col" no-padding width-50>\n        <span class="connection-type">Following</span>\n        <h2 class="connection-number">{{ user.following }}</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row class="user-extended-data-row">\n      <ion-col no-padding width-100>\n        <h2 class="user-display-name">{{ user.name }}</h2>\n        <h3 class="user-username">@{{ user.screenName }}</h3>\n        <p class="user-description">{{ user.description }}</p>\n        <div class="user-location">\n          <ion-icon class="location-icon" name="ios-pin-outline"></ion-icon>\n          <span class="location-name">{{ user.location }}</span>\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row class="actions-row">\n      <ion-col no-padding width-100>\n        <button ion-button block class="auth-action-button logout-button" (click)="doTwitterLogout()">{{\'LOG_OUT\' | translate}}</button>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/twitter-login/twitter-login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__twitter_login_service__["a" /* TwitterLoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], TwitterLoginPage);

//# sourceMappingURL=twitter-login.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactCardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_model__ = __webpack_require__(686);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactCardPage = (function () {
    function ContactCardPage(navCtrl, emailComposer, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.emailComposer = emailComposer;
        this.inAppBrowser = inAppBrowser;
        this.contact = new __WEBPACK_IMPORTED_MODULE_4__contact_model__["a" /* ContactModel */]();
    }
    //Note: we commented this method because the Call Number plugin was unstable and causing lots of errors. If you want to use it please go: https://ionicframework.com/docs/native/call-number/
    // call(number: string){
    //   this.callNumber.callNumber(number, true)
    //   .then(() => console.log('Launched dialer!'))
    //   .catch(() => console.log('Error launching dialer'));
    // }
    ContactCardPage.prototype.sendMail = function () {
        //for more option please go here: http://ionicframework.com/docs/native/email-composer/
        var email = {
            to: 'contact@ionicthemes.com',
            subject: 'This app is the best!',
            body: "Hello, I'm trying this fantastic app that will save me hours of development"
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    };
    ContactCardPage.prototype.openInAppBrowser = function (website) {
        this.inAppBrowser.create(website, '_blank', "location=yes");
    };
    return ContactCardPage;
}());
ContactCardPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'contact-card-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/contact-card/contact-card.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'CONTACT_CARD\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="contact-card-content">\n  <ion-slides class="contact-slides" pager="true" autoplay="4000" loop="false">\n    <ion-slide class="contact-slide" *ngFor="let image of contact.images">\n      <background-image class="slide-image" [src]="image"></background-image>\n    </ion-slide>\n  </ion-slides>\n  <ion-row class="contact-details-row" wrap>\n    <ion-col no-padding width-65>\n      <h2 class="contact-name">{{ contact.name }}</h2>\n    </ion-col>\n    <ion-col no-padding width-35 class="rating-col">\n      <div class="contact-rating">\n        <ion-item class="rating-item">\n          <rating [(ngModel)]="contact.rating" max="5" read-only="true"></rating>\n        </ion-item>\n      </div>\n    </ion-col>\n    <ion-col no-padding width-100>\n      <p class="contact-description">\n        Today opens from 8:30 am to 6:00 pm\n      </p>\n    </ion-col>\n  </ion-row>\n  <div class="button-bar">\n    <!-- <button ion-button primary (click)="call(contact.phone)"> -->\n    <button ion-button primary>\n      <ion-icon name="call"></ion-icon>\n    </button>\n    <button ion-button primary (click)="sendMail(contact.email)">\n      <ion-icon name="mail"></ion-icon>\n    </button>\n    <button ion-button primary (click)="openInAppBrowser(contact.website)">\n      <ion-icon name="globe"></ion-icon>\n    </button>\n  </div>\n  <preload-image [ratio]="{w:4, h:3}" src="https://maps.googleapis.com/maps/api/staticmap?center=40.785091,-73.968285&zoom=15&size=400x300&scale=2&markers=icon:https://s3-us-west-2.amazonaws.com/ionicthemes-apps-assets/ion2FullApp/pin.min.png|40.785091,-73.968285" alt="{{ contact.name }} location map" title="{{ contact.name }} - {{ contact.address }}"></preload-image>\n  <ion-list class="details-list">\n    <ion-item class="detail-item">\n      <ion-avatar item-left>\n        <ion-icon name="pin"></ion-icon>\n      </ion-avatar>\n      <span class="detail-text">{{ contact.address }}</span>\n    </ion-item>\n    <ion-item class="detail-item">\n      <ion-avatar item-left>\n        <ion-icon name="globe"></ion-icon>\n      </ion-avatar>\n      <span class="detail-text">{{ contact.website }}</span>\n    </ion-item>\n    <ion-item class="detail-item">\n      <ion-avatar item-left>\n        <ion-icon name="call"></ion-icon>\n      </ion-avatar>\n      <span class="detail-text">{{ contact.phone }}</span>\n    </ion-item>\n    <ion-item class="detail-item">\n      <ion-avatar item-left>\n        <ion-icon name="mail"></ion-icon>\n      </ion-avatar>\n      <span class="detail-text">{{ contact.email }}</span>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/contact-card/contact-card.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], ContactCardPage);

//# sourceMappingURL=contact-card.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__ = __webpack_require__(353);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdsPage = (function () {
    function AdsPage(nav, admob, toastCtrl) {
        this.nav = nav;
        this.admob = admob;
        this.toastCtrl = toastCtrl;
        this.bannerConfig = {
            // add your banner config here
            // for the sake of this example we will just use the test config
            isTesting: true,
            autoShow: true,
        };
        this.interstitialConfig = {
            // add your config here
            // for the sake of this example we will just use the test config
            isTesting: true,
            autoShow: true,
        };
    }
    AdsPage.prototype.ionViewWillLoad = function () {
        this.admob.banner.config(this.bannerConfig);
        this.admob.interstitial.config(this.interstitialConfig);
    };
    AdsPage.prototype.showBanner = function () {
        var toast = this.toastCtrl.create({
            message: 'Your ad is being created...',
            duration: 3000,
            position: 'top'
        });
        toast.present();
        this.admob.banner.prepare()
            .then(function () {
            // banner Ad is ready
            // if we set autoShow to false, then we will need to call the show method here
        })
            .catch(function (e) { return console.log(e); });
    };
    AdsPage.prototype.removeBanner = function () {
        this.admob.banner.remove()
            .then(function () {
            console.log("removeBanner");
        })
            .catch(function (e) { return console.log(e); });
    };
    AdsPage.prototype.showInterstitial = function () {
        this.admob.interstitial.prepare()
            .then(function () {
            // interstitial Ad is ready
            // if we set autoShow to false, then we will need to call the show method here
        })
            .catch(function (e) { return console.log(e); });
    };
    return AdsPage;
}());
AdsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ads-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/ads/ads.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Ads</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h2 class="ads-heading">Earn money displaying ads in your app</h2>\n  <div class="ad-button-outer" (click)="showInterstitial()">\n    <ion-row class="ad-button-row">\n      <ion-col class="illustration-col" no-padding col-5>\n        <preload-image class="interstitial-illustration" [ratio]="{w:60, h:71}" src="./assets/images/ads/instertitial-illustration.png" alt="interstitial illustration" title="interstitial illustration"></preload-image>\n      </ion-col>\n      <ion-col class="text-col" col-7>\n        <h3 class="ad-button-text">{{\'SHOW_INTERSTITIAL\' | translate}}</h3>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class="ad-button-outer" (click)="showBanner()">\n    <ion-row class="ad-button-row" no-padding>\n      <ion-col class="text-col" col-7>\n        <h3 class="ad-button-text">{{\'SHOW_BANNER\' | translate}}</h3>\n      </ion-col>\n      <ion-col class="illustration-col" no-padding col-5>\n        <preload-image class="banner-illustration" [ratio]="{w:60, h:71}" src="./assets/images/ads/banner-illustration.png" alt="banner illustration" title="banner illustration"></preload-image>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n\n<ion-footer class="ads-footer">\n  <ion-toolbar>\n    <button class="remove-ad-button" ion-button block (click)="removeBanner()">{{\'REMOVE_BANNER\' | translate}}</button>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/ads/ads.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_admob_free__["a" /* AdMobFree */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */]])
], AdsPage);

//# sourceMappingURL=ads.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPlaylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_playlist_model__ = __webpack_require__(687);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoPlaylistPage = (function () {
    function VideoPlaylistPage(nav, loadingCtrl, socialSharing) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.socialSharing = socialSharing;
        this.start_playing = false;
        this.video_playlist_model = new __WEBPACK_IMPORTED_MODULE_3__video_playlist_model__["a" /* VideoPlaylistModel */]();
    }
    VideoPlaylistPage.prototype.createLoader = function () {
        this.loading = this.loadingCtrl.create();
    };
    VideoPlaylistPage.prototype.presentLoader = function () {
        // Check if the current instance is usable
        if (this.loading === undefined || (this.loading !== undefined && this.loading.instance === null)) {
            // If it's not usable, then create a new one
            this.createLoader();
        }
        this.loading.present();
    };
    VideoPlaylistPage.prototype.dismissLoader = function () {
        // Check if the current instance is usable
        if (this.loading !== undefined) {
            // If it's not usable, then create a new one
            this.loading.dismiss();
        }
    };
    VideoPlaylistPage.prototype.playMedia = function (media) {
        // Check if this media is not the same we are currently playing
        if (media !== this.video_playlist_model.selected_video) {
            this.presentLoader();
            // Change sources
            this.video_playlist_model.selected_video = media;
            // When changing sources we wait until the metadata is loaded and then we start playing the video
        }
    };
    VideoPlaylistPage.prototype.onPlayerReady = function (api) {
        this.api = api;
        this.api.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.playVideo.bind(this));
    };
    VideoPlaylistPage.prototype.playVideo = function () {
        if (this.start_playing) {
            this.dismissLoader();
            this.api.play();
        }
        else {
            this.start_playing = true;
        }
    };
    VideoPlaylistPage.prototype.shareVideo = function () {
        var current_video = this.video_playlist_model.selected_video;
        //this code is to use the social sharing plugin
        // message, subject, file, url
        this.socialSharing.share(current_video.description, current_video.title, current_video.thumbnail, null)
            .then(function () {
            console.log('Success!');
        })
            .catch(function () {
            console.log('Error');
        });
    };
    return VideoPlaylistPage;
}());
VideoPlaylistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'video-playlist-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/video-playlist/video-playlist.html"*/'<ion-header class="video-playlist-header">\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{\'VIDEO_PLAYLIST\' | translate}}</ion-title>\n    <ion-buttons end>\n      <button class="share-button" ion-button icon-only (click)="shareVideo()">\n        <ion-icon name="md-share"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="video-playlist-content">\n	<div class="video-player-container">\n		<vg-player class="video-player" (onPlayerReady)="onPlayerReady($event)">\n			<vg-buffering></vg-buffering>\n			<vg-overlay-play></vg-overlay-play>\n\n			<vg-controls [vgAutohide]="true" [vgAutohideTime]="5">\n				<ion-row class="controls-row">\n					<ion-col no-padding width-18>\n						<vg-time-display [vgProperty]="\'current\'" [vgFormat]="\'mm:ss\'"></vg-time-display>\n					</ion-col>\n					<ion-col no-padding width-64>\n						<vg-scrub-bar>\n								<vg-scrub-bar-current-time></vg-scrub-bar-current-time>\n								<vg-scrub-bar-buffering-time></vg-scrub-bar-buffering-time>\n						</vg-scrub-bar>\n					</ion-col>\n					<ion-col no-padding width-18>\n						<vg-time-display [vgProperty]="\'left\'" [vgFormat]="\'mm:ss\'"></vg-time-display>\n					</ion-col>\n				</ion-row>\n	    </vg-controls>\n\n			<video class="expand-horizontally" #player_video [vgMedia]="player_video" id="player-video" preload="auto">\n	      <source *ngFor="let video of video_playlist_model.selected_video.sources" [src]="video.src" [type]="video.type">\n	    </video>\n	  </vg-player>\n	</div>\n\n	<ion-row class="video-data-row">\n		<ion-col no-padding>\n			<h2 class="video-title">{{ video_playlist_model.selected_video.title }}</h2>\n			<p class="video-description">{{ video_playlist_model.selected_video.description }}</p>\n		</ion-col>\n	</ion-row>\n\n	<ion-list class="video-playlist">\n	  <ion-item class="playlist-item" *ngFor="let media of video_playlist_model.video_playlist">\n			<ion-thumbnail class="media-thumbnail" item-left (click)="playMedia(media)">\n	      <preload-image class="media-thumbnail-image" [ratio]="{w:16, h:9}" [src]="media.thumbnail"></preload-image>\n	    </ion-thumbnail>\n			<h2 class="media-title">{{ media.title }}</h2>\n	    <p class="media-description" rows="2">{{ media.description }}</p>\n	  </ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/video-playlist/video-playlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_social_sharing__["a" /* SocialSharing */]])
], VideoPlaylistPage);

//# sourceMappingURL=video-playlist.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattingNoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facebook_login_facebook_login_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__google_login_google_login_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__twitter_login_twitter_login_service__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChattingNoPage = (function () {
    function ChattingNoPage(nav, facebookLoginService, googleLoginService, twitterLoginService, loadingCtrl, authService, events, app, menu) {
        this.nav = nav;
        this.facebookLoginService = facebookLoginService;
        this.googleLoginService = googleLoginService;
        this.twitterLoginService = twitterLoginService;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.events = events;
        this.app = app;
        this.menu = menu;
        var v = localStorage.getItem('chatting_first');
        if (v == undefined) {
            localStorage.setItem('chatting_first', "no");
            this.events.publish('chatting_first');
        }
    }
    ChattingNoPage.prototype.onCheckFriends = function () {
    };
    return ChattingNoPage;
}());
ChattingNoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chatting-no-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/chatting-no/chatting-no.html"*/'<ion-header class="login-header auth-header">\n  <ion-navbar>\n    <ion-title>{{\'CHATTING\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="chatting-content">\n\n  <img src="../assets/images/user/unregister.png" class="welcome-image" />\n  <div class="welcome-text">\n    {{\'START_CHATTING_WITH_FRIENDS\' | translate}}\n  </div>\n  <a (click)="onCheckFriends()">\n    <div class="check-friend">\n      {{\'CHECK_MY_FRIENDS\' | translate}}\n    </div>\n  </a>\n  <img class="chatting-image" src="../../assets/images/listing/200x200basquet.png"/>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/chatting-no/chatting-no.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__facebook_login_facebook_login_service__["a" /* FacebookLoginService */],
        __WEBPACK_IMPORTED_MODULE_4__google_login_google_login_service__["a" /* GoogleLoginService */],
        __WEBPACK_IMPORTED_MODULE_5__twitter_login_twitter_login_service__["a" /* TwitterLoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
], ChattingNoPage);

//# sourceMappingURL=chatting-no.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattingYesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChattingYesPage = (function () {
    function ChattingYesPage(nav, loadingCtrl, events, app, menu) {
        this.nav = nav;
        this.loadingCtrl = loadingCtrl;
        this.events = events;
        this.app = app;
        this.menu = menu;
        this.room = "default";
        this.invite = "default";
        this.messages = [
            { message: "Test Message", mine: false },
            { message: "Test Message", mine: false },
            { message: "Test Message", mine: false },
            { message: "Test Message", mine: false },
            { message: "Test Message", mine: true },
            { message: "Test Message", mine: false },
            { message: "Test Message", mine: false },
            { message: "Test Message", mine: false },
            { message: "Test Message", mine: true },
            { message: "Test Message", mine: false },
            { message: "Test Message", mine: false },
            { message: "Test Message", mine: true },
            { message: "Test Message", mine: false }
        ];
    }
    return ChattingYesPage;
}());
ChattingYesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'chatting-yes-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/chatting-yes/chatting-yes.html"*/'<ion-header class="chatting-header">\n  <ion-navbar>\n    <ion-title>{{\'CHATTING\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="chatting-content">\n\n  <ion-row class="select-group" no-lines>\n\n    <ion-col style="flex: 1;">\n      <ion-select [(ngModel)]="room">\n        <ion-option value="default">In Room</ion-option>\n        <ion-option value="f">Female</ion-option>\n        <ion-option value="m">Male</ion-option>\n      </ion-select>\n    </ion-col>\n\n    <ion-col style="flex: 1;">\n      <ion-select [(ngModel)]="invite">\n        <ion-option value="default">Invite</ion-option>\n        <ion-option value="f">Female</ion-option>\n        <ion-option value="m">Male</ion-option>\n      </ion-select>\n    </ion-col>\n\n  </ion-row >\n\n  <div class="chat-content">\n    <div *ngFor="let message of messages">\n      <span class="my-message">\n      {{message.message}}\n      </span>\n    </div>\n  </div>\n  \n</ion-content>\n\n<ion-footer class="chatting-footer">\n  <ion-input type="text" [(ngModel)]="message" class="message-input"></ion-input>\n  <button icon-only ion-button clear class="send-button">\n    <ion-icon name=\'send\' color="dark"></ion-icon>\n  </button>\n</ion-footer>'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/chatting-yes/chatting-yes.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
], ChattingYesPage);

//# sourceMappingURL=chatting-yes.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_navigation_tabs_navigation__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__facebook_login_facebook_login_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__google_login_google_login_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__twitter_login_twitter_login_service__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginPage = (function () {
    function LoginPage(nav, facebookLoginService, googleLoginService, twitterLoginService, loadingCtrl, authService, events, app, menu) {
        this.nav = nav;
        this.facebookLoginService = facebookLoginService;
        this.googleLoginService = googleLoginService;
        this.twitterLoginService = twitterLoginService;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.events = events;
        this.app = app;
        this.menu = menu;
        this.displayTab = "login";
        this.main_page = { component: __WEBPACK_IMPORTED_MODULE_3__tabs_navigation_tabs_navigation__["a" /* TabsNavigationPage */] };
        this.login = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            nickname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            memberType: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
        });
    }
    LoginPage.prototype.doLogin = function () {
        this.authService.login();
        this.events.publish('authenticate');
        this.menu.close();
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_navigation_tabs_navigation__["a" /* TabsNavigationPage */]);
    };
    LoginPage.prototype.doGoogleLogin = function () {
        var _this = this;
        console.log('---google login---');
        this.loading = this.loadingCtrl.create();
        // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app
        this.googleLoginService.trySilentLogin()
            .then(function (data) {
            // user is previously logged with Google and we have his data we will let him access the app
            _this.nav.setRoot(_this.main_page.component);
        }, function (error) {
            //we don't have the user data so we will ask him to log in
            _this.googleLoginService.doGoogleLogin()
                .then(function (res) {
                _this.loading.dismiss();
                _this.nav.setRoot(_this.main_page.component);
            }, function (err) {
                console.log("Google Login error", err);
            });
        });
    };
    LoginPage.prototype.goToSignup = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.doGoogleSignup = function () {
        this.loading = this.loadingCtrl.create();
        // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app
        var env = this;
        this.googleLoginService.trySilentLogin()
            .then(function (data) {
            // user is previously logged with Google and we have his data we will let him access the app
        }, function (error) {
            //we don't have the user data so we will ask him to log in
            env.googleLoginService.doGoogleLogin()
                .then(function (res) {
                env.loading.dismiss();
                env.nav.setRoot(env.main_page.component);
            }, function (err) {
                console.log("Google Login error", err);
                env.loading.dismiss();
            });
        });
    };
    LoginPage.prototype.goToForgotPassword = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__forgot_password_forgot_password__["a" /* ForgotPasswordPage */]);
    };
    LoginPage.prototype.onSegmentSelected = function (segmentButton) {
        // console.log('Segment selected', segmentButton.value);
        this.displayTab = segmentButton.value;
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/login/login.html"*/'<ion-header class="login-header auth-header">\n  <ion-navbar>\n    <ion-title>{{\'SIGN_IN\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content auth-content">\n\n  <img src="../assets/images/user/unregister.png" class="userImage" />\n\n  <ion-segment class="user-content-segment" [(ngModel)]="display" (ionChange)="onSegmentChanged($event)">\n    <ion-segment-button value="login" (ionSelect)="onSegmentSelected($event)">\n      Log In\n    </ion-segment-button>\n    <ion-segment-button value="signup" (ionSelect)="onSegmentSelected($event)">\n      Sign Up\n    </ion-segment-button>\n  </ion-segment>\n\n  <div [ngSwitch]="displayTab">\n    <div *ngSwitchCase="\'login\'">\n      \n      <form class="login-form auth-form" [formGroup]="login" (ngSubmit)="doLogin()">\n\n      <ion-item no-lines no-padding>\n        <a (click)="doGoogleLogin()">\n        <div class="google-action-button">\n          <img src="../../assets/images/social/google.png"/>\n          <font class="google-action-span">&nbsp; LOG IN WITH GOOGLE</font>\n        </div></a>\n      </ion-item>\n      <p class="auth-divider">\n        Or\n      </p>\n      \n        <ion-item no-lines class="cred-input-item">\n          <ion-label  class="cred-icon"><ion-icon  name=\'person\' color="#aeaeae"></ion-icon></ion-label>\n          <ion-input type="email" placeholder="yours@example.com" formControlName="email" class="cred-input"></ion-input>\n        </ion-item>\n\n        <br>\n      \n          <ion-item  no-lines class="cred-input-item">\n            <ion-label class="cred-icon"><ion-icon  name=\'lock\' color="#aeaeae"></ion-icon></ion-label>\n            <ion-input type="password" placeholder="Password" formControlName="password" class="cred-input"></ion-input>\n          </ion-item>\n        <button ion-button block clear class="forgot-button" (click)="goToForgotPassword()">{{\'FORGOT_PASSWORD?\' | translate }}</button>\n        \n      </form>\n    </div>\n    <div *ngSwitchCase="\'signup\'">\n      <form class="login-form auth-form" [formGroup]="login" (ngSubmit)="doLogin()">\n\n      <ion-item no-lines no-padding>\n        <div class="google-action-button">\n          <img src="../../assets/images/social/google.png"/>\n          <font class="google-action-span">&nbsp; SIGN UP WITH GOOGLE</font>\n        </div>\n      </ion-item>\n      <p class="auth-divider">\n        Or\n      </p>\n      \n        <ion-item no-lines class="cred-input-item">\n          <ion-label  class="cred-icon"><ion-icon  name=\'person\' color="#aeaeae"></ion-icon></ion-label>\n          <ion-input type="email" placeholder="yours@example.com" formControlName="email" class="cred-input"></ion-input>\n        </ion-item>\n\n        <br>\n      \n          <ion-item  no-lines class="cred-input-item">\n            <ion-label class="cred-icon"><ion-icon  name=\'lock\' color="#aeaeae"></ion-icon></ion-label>\n            <ion-input type="password" placeholder="Password" formControlName="password" class="cred-input"></ion-input>\n          </ion-item>\n\n          <ion-item  no-lines class="nickname-input-item">\n            <ion-input type="text" placeholder="{{\'NICKNAME_INPUT\' | translate}}({{\'REQUIRED\' | translate}})" formControlName="nickname" class="nickname-input"></ion-input>\n          </ion-item>\n        \n          <ion-item>\n            <ion-label>{{\'Member_TYPE\' | translate}}({{\'REQUIRED\' | translate}})</ion-label>\n            <ion-select formControlName="memberType">\n              <ion-option value="normal">{{\'NORMAL_MEMBER\' | translate}}</ion-option>\n              <ion-option value="business">{{\'BUSINESS_MEMBER\' | translate}}</ion-option>\n            </ion-select>\n          </ion-item>\n        \n      </form>\n    </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <button *ngIf="displayTab == \'login\'" ion-button block class="action-button" type="submit" (click)="doLogin()">{{\'LOG_IN\' | translate}}</button>\n\n  <button *ngIf="displayTab == \'signup\'" ion-button block class="action-button" type="submit">{{\'SIGN_UP\' | translate}}</button>\n\n</ion-footer>'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_7__facebook_login_facebook_login_service__["a" /* FacebookLoginService */],
        __WEBPACK_IMPORTED_MODULE_8__google_login_google_login_service__["a" /* GoogleLoginService */],
        __WEBPACK_IMPORTED_MODULE_9__twitter_login_twitter_login_service__["a" /* TwitterLoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms_of_service_terms_of_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_navigation_tabs_navigation__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__facebook_login_facebook_login_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__google_login_google_login_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__twitter_login_twitter_login_service__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SignupPage = (function () {
    function SignupPage(nav, modal, facebookLoginService, googleLoginService, twitterLoginService, loadingCtrl) {
        this.nav = nav;
        this.modal = modal;
        this.facebookLoginService = facebookLoginService;
        this.googleLoginService = googleLoginService;
        this.twitterLoginService = twitterLoginService;
        this.loadingCtrl = loadingCtrl;
        this.main_page = { component: __WEBPACK_IMPORTED_MODULE_5__tabs_navigation_tabs_navigation__["a" /* TabsNavigationPage */] };
        this.signup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('test', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required),
            confirm_password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('test', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
    }
    SignupPage.prototype.doSignup = function () {
        this.nav.setRoot(this.main_page.component);
    };
    SignupPage.prototype.doFacebookSignup = function () {
        this.loading = this.loadingCtrl.create();
        // Here we will check if the user is already logged in
        // because we don't want to ask users to log in each time they open the app
        var env = this;
        this.facebookLoginService.getFacebookUser()
            .then(function (data) {
            // user is previously logged with FB and we have his data we will let him access the app
            env.nav.setRoot(env.main_page.component);
        }, function (error) {
            //we don't have the user data so we will ask him to log in
            env.facebookLoginService.doFacebookLogin()
                .then(function (res) {
                env.loading.dismiss();
                env.nav.setRoot(env.main_page.component);
            }, function (err) {
                console.log("Facebook Login error", err);
                env.loading.dismiss();
            });
        });
    };
    SignupPage.prototype.doTwitterSignup = function () {
        this.loading = this.loadingCtrl.create();
        // Here we will check if the user is already logged in
        // because we don't want to ask users to log in each time they open the app
        var env = this;
        this.twitterLoginService.getTwitterUser()
            .then(function (data) {
            // user is previously logged with FB and we have his data we will let him access the app
            env.nav.setRoot(env.main_page.component);
        }, function (error) {
            //we don't have the user data so we will ask him to log in
            env.twitterLoginService.doTwitterLogin()
                .then(function (res) {
                env.loading.dismiss();
                env.nav.setRoot(env.main_page.component);
            }, function (err) {
                console.log("Facebook Login error", err);
                env.loading.dismiss();
            });
        });
    };
    SignupPage.prototype.doGoogleSignup = function () {
        this.loading = this.loadingCtrl.create();
        // Here we will check if the user is already logged in because we don't want to ask users to log in each time they open the app
        var env = this;
        this.googleLoginService.trySilentLogin()
            .then(function (data) {
            // user is previously logged with Google and we have his data we will let him access the app
            env.nav.setRoot(env.main_page.component);
        }, function (error) {
            //we don't have the user data so we will ask him to log in
            env.googleLoginService.doGoogleLogin()
                .then(function (res) {
                env.loading.dismiss();
                env.nav.setRoot(env.main_page.component);
            }, function (err) {
                console.log("Google Login error", err);
                env.loading.dismiss();
            });
        });
    };
    SignupPage.prototype.showTermsModal = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__terms_of_service_terms_of_service__["a" /* TermsOfServicePage */]);
        modal.present();
    };
    SignupPage.prototype.showPrivacyModal = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */]);
        modal.present();
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'signup-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/signup/signup.html"*/'<ion-header class="signup-header auth-header">\n  <ion-navbar>\n    <ion-title>{{\'SIGN_UP\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="signup-content auth-content">\n  <h2 class="auth-title">{{\'CREATE_AN_ACCOUNT\' | translate}}</h2>\n  <form class="signup-form auth-form" [formGroup]="signup" (ngSubmit)="doSignup()">\n    <ion-item>\n      <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n    </ion-item>\n    <show-hide-container>\n      <ion-item>\n        <ion-input type="password" placeholder="Password" formControlName="password" show-hide-input></ion-input>\n      </ion-item>\n    </show-hide-container>\n    <show-hide-container>\n      <ion-item>\n        <ion-input type="password" placeholder="Confirm password" formControlName="confirm_password" show-hide-input></ion-input>\n      </ion-item>\n    </show-hide-container>\n    <button ion-button block class="auth-action-button signup-button" type="submit" [disabled]="!signup.valid">{{\'SIGN_UP\' | translate}}</button>\n  </form>\n  <p class="auth-divider">\n    Or\n  </p>\n  <button ion-button block class="facebook-auth-button" (click)="doFacebookSignup()">{{\'SIGN_UP_WITH_FACEBOOK\' | translate}}</button>\n  <button ion-button block class="google-auth-button" (click)="doGoogleSignup()">{{\'SIGN_UP_WITH_GOOGLE\' | translate}}</button>\n  <button ion-button block class="twitter-auth-button" (click)="doTwitterSignup()">{{\'SIGN_UP_WITH_TWITTER\' | translate}}</button>\n  <p class="legal-stuff">\n    {{\'AGREEMENT_TEXT\' | translate}} <a class="legal-action" (click)="showPrivacyModal()">{{\'PRIVACY_POLICY\' | translate}}</a> {{\'AND\' | translate}} <a class="legal-action" (click)="showTermsModal()">{{\'TERMS_OF_USE\' | translate}}</a>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/signup/signup.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__facebook_login_facebook_login_service__["a" /* FacebookLoginService */],
        __WEBPACK_IMPORTED_MODULE_7__google_login_google_login_service__["a" /* GoogleLoginService */],
        __WEBPACK_IMPORTED_MODULE_8__twitter_login_twitter_login_service__["a" /* TwitterLoginService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_navigation_tabs_navigation__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(nav) {
        this.nav = nav;
        this.main_page = { component: __WEBPACK_IMPORTED_MODULE_3__tabs_navigation_tabs_navigation__["a" /* TabsNavigationPage */] };
        this.forgot_password = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required)
        });
    }
    ForgotPasswordPage.prototype.recoverPassword = function () {
        console.log(this.forgot_password.value);
        this.nav.setRoot(this.main_page.component);
    };
    return ForgotPasswordPage;
}());
ForgotPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'forgot-password-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/forgot-password/forgot-password.html"*/'<ion-header class="forgot-password-header auth-header">\n  <ion-navbar>\n    <ion-title>{{\'FORGOT_PASSWORD?\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="forgot-password-content auth-content">\n  <h2 class="auth-title">{{ \'RECOVER_YOUR_PASSWORD\' | translate }}</h2>\n  <p class="recover-message">\n    {{ \'RECOVER_MESSAGE\' | translate }}\n  </p>\n  <form class="forgot-password-form auth-form" [formGroup]="forgot_password" (ngSubmit)="recoverPassword()">\n    <ion-item>\n      <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n    </ion-item>\n    <button ion-button block class="auth-action-button recover-password-button" type="submit" [disabled]="!forgot_password.valid">Reset password</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/forgot-password/forgot-password.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
], ForgotPasswordPage);

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowHideInput; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowHideInput = (function () {
    function ShowHideInput(el) {
        this.el = el;
        this.type = 'password';
    }
    ShowHideInput.prototype.changeType = function (type) {
        this.type = type;
        this.el.nativeElement.children[0].type = this.type;
    };
    return ShowHideInput;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])(),
    __metadata("design:type", String)
], ShowHideInput.prototype, "type", void 0);
ShowHideInput = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[show-hide-input]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], ShowHideInput);

//# sourceMappingURL=show-hide-input.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(369);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_clipboard__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_open_native_settings__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_listing_listing__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_feed_feed__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_followers_followers__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_layouts_layouts__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_forms_forms__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_notifications_notifications__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_comments_comments__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_other_profile_other_profile__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_imageview_imageview__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_imageviewdetail_imageview_detail__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_writing_writing__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_write_normal_write_normal__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_chatting_no_chatting_no__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_chatting_yes_chatting_yes__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_camera_camera__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_imageedit_imageedit__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_app_setting_app_setting__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_tabs_navigation_tabs_navigation__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_walkthrough_walkthrough__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_settings_settings__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_signup_signup__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_forgot_password_forgot_password__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_schedule_schedule__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_ads_ads__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_list_1_list_1__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_list_2_list_2__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_grid_grid__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_form_layout_form_layout__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_filters_filters__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_map_type_map_type__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_terms_of_service_terms_of_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_privacy_policy_privacy_policy__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_form_validations_form_validations__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_search_search__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_search_result_search_result__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_gallery_detail_gallery_detail__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_writing_add_writing_add__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_preload_image_preload_image__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_background_image_background_image__ = __webpack_require__(691);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_show_hide_password_show_hide_container__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_show_hide_password_show_hide_input__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_color_radio_color_radio__ = __webpack_require__(693);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_counter_input_counter_input__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_rating_rating__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__components_google_map_google_map__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_feed_feed_service__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_listing_listing_service__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__pages_map_type_map_type_service__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__pages_profile_profile_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__pages_other_profile_other_profile_service__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__pages_notifications_notifications_service__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__pages_comments_comments_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__pages_list_1_list_1_service__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__pages_list_2_list_2_service__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__pages_schedule_schedule_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__pages_facebook_login_facebook_login_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__pages_google_login_google_login_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__pages_twitter_login_twitter_login_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__pages_maps_maps_service__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__pages_help_help__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__pages_gallery_gallery__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__ionic_native_social_sharing__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__ionic_native_native_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__ionic_native_in_app_browser__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__ionic_native_facebook__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__ionic_native_google_plus__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__ionic_native_keyboard__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__ionic_native_geolocation__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__ionic_native_twitter_connect__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__ionic_native_admob_free__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__ionic_native_app_rate__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__ionic_native_image_picker__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__ionic_native_crop__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__ionic_native_email_composer__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__pages_change_password_change_password__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__pages_functionalities_functionalities__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__pages_maps_maps__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__pages_facebook_login_facebook_login__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_92__pages_google_login_google_login__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_93__pages_twitter_login_twitter_login__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_94__pages_contact_card_contact_card__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_95__pages_video_playlist_video_playlist__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_96__components_video_player_video_player_module__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_97__components_validators_validators_module__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_98__providers_language_language_service__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_99__providers_auth_service_auth_service__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























































































// Functionalities












function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_4__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_listing_listing__["a" /* ListingPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_feed_feed__["a" /* FeedPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_followers_followers__["a" /* FollowersPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_layouts_layouts__["a" /* LayoutsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_forms_forms__["a" /* FormsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_comments_comments__["a" /* CommentsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_tabs_navigation_tabs_navigation__["a" /* TabsNavigationPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_walkthrough_walkthrough__["a" /* WalkthroughPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_schedule_schedule__["a" /* SchedulePage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_list_1_list_1__["a" /* List1Page */],
            __WEBPACK_IMPORTED_MODULE_36__pages_list_2_list_2__["a" /* List2Page */],
            __WEBPACK_IMPORTED_MODULE_37__pages_grid_grid__["a" /* GridPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_form_layout_form_layout__["a" /* FormLayoutPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_filters_filters__["a" /* FiltersPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_terms_of_service_terms_of_service__["a" /* TermsOfServicePage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
            __WEBPACK_IMPORTED_MODULE_90__pages_maps_maps__["a" /* MapsPage */],
            __WEBPACK_IMPORTED_MODULE_89__pages_functionalities_functionalities__["a" /* FunctionalitiesPage */],
            __WEBPACK_IMPORTED_MODULE_91__pages_facebook_login_facebook_login__["a" /* FacebookLoginPage */],
            __WEBPACK_IMPORTED_MODULE_92__pages_google_login_google_login__["a" /* GoogleLoginPage */],
            __WEBPACK_IMPORTED_MODULE_94__pages_contact_card_contact_card__["a" /* ContactCardPage */],
            __WEBPACK_IMPORTED_MODULE_93__pages_twitter_login_twitter_login__["a" /* TwitterLoginPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_ads_ads__["a" /* AdsPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_form_validations_form_validations__["a" /* FormValidationsPage */],
            __WEBPACK_IMPORTED_MODULE_95__pages_video_playlist_video_playlist__["a" /* VideoPlaylistPage */],
            __WEBPACK_IMPORTED_MODULE_48__components_preload_image_preload_image__["a" /* PreloadImage */],
            __WEBPACK_IMPORTED_MODULE_49__components_background_image_background_image__["a" /* BackgroundImage */],
            __WEBPACK_IMPORTED_MODULE_50__components_show_hide_password_show_hide_container__["a" /* ShowHideContainer */],
            __WEBPACK_IMPORTED_MODULE_51__components_show_hide_password_show_hide_input__["a" /* ShowHideInput */],
            __WEBPACK_IMPORTED_MODULE_52__components_color_radio_color_radio__["a" /* ColorRadio */],
            __WEBPACK_IMPORTED_MODULE_53__components_counter_input_counter_input__["a" /* CounterInput */],
            __WEBPACK_IMPORTED_MODULE_54__components_rating_rating__["a" /* Rating */],
            __WEBPACK_IMPORTED_MODULE_55__components_google_map_google_map__["a" /* GoogleMap */],
            __WEBPACK_IMPORTED_MODULE_40__pages_map_type_map_type__["a" /* MapTypePage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_search_result_search_result__["a" /* SearchResultPage */],
            __WEBPACK_IMPORTED_MODULE_88__pages_change_password_change_password__["a" /* ChangePasswordPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_app_setting_app_setting__["a" /* AppSettingPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_other_profile_other_profile__["a" /* OtherProfilePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_imageview_imageview__["a" /* ImageViewPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_imageviewdetail_imageview_detail__["a" /* ImageViewDetailPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_writing_writing__["a" /* WritingPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_imageedit_imageedit__["a" /* ImageEditPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_write_normal_write_normal__["a" /* WritingNormalPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_chatting_no_chatting_no__["a" /* ChattingNoPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_chatting_yes_chatting_yes__["a" /* ChattingYesPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_camera_camera__["a" /* CameraPage */],
            __WEBPACK_IMPORTED_MODULE_70__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_71__pages_gallery_gallery__["a" /* GalleryPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_gallery_detail_gallery_detail__["a" /* GalleryDetailPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_writing_add_writing_add__["a" /* WritingAddPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_72__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {
                modalEnter: 'modal-slide-in',
                modalLeave: 'modal-slide-out',
                pageTransition: 'ios-transition',
                swipeBackEnabled: false
            }, {
                links: [
                    { loadChildren: '../pages/search-result/search-result.module#SearchResultPageModule', name: 'SearchResultPage', segment: 'search-result', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/imageviewdetail/imageview-detail.module#ImageViewDetailPageModule', name: 'ImageViewDetailPage', segment: 'imageview-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/imageview/imageview.module#ImageViewPageModule', name: 'ImageViewPage', segment: 'imageview', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/change-password/change-password.module#ChangePasswordPageModule', name: 'ChangePasswordPage', segment: 'change-password', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/app-setting/app-setting.module#AppSettingPageModule', name: 'AppSettingPage', segment: 'app-setting', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_96__components_video_player_video_player_module__["a" /* VideoPlayerModule */],
            __WEBPACK_IMPORTED_MODULE_97__components_validators_validators_module__["a" /* ValidatorsModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_9__pages_listing_listing__["a" /* ListingPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_feed_feed__["a" /* FeedPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_followers_followers__["a" /* FollowersPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_layouts_layouts__["a" /* LayoutsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_forms_forms__["a" /* FormsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_comments_comments__["a" /* CommentsPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_tabs_navigation_tabs_navigation__["a" /* TabsNavigationPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_walkthrough_walkthrough__["a" /* WalkthroughPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_schedule_schedule__["a" /* SchedulePage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_list_1_list_1__["a" /* List1Page */],
            __WEBPACK_IMPORTED_MODULE_36__pages_list_2_list_2__["a" /* List2Page */],
            __WEBPACK_IMPORTED_MODULE_37__pages_grid_grid__["a" /* GridPage */],
            __WEBPACK_IMPORTED_MODULE_38__pages_form_layout_form_layout__["a" /* FormLayoutPage */],
            __WEBPACK_IMPORTED_MODULE_39__pages_filters_filters__["a" /* FiltersPage */],
            __WEBPACK_IMPORTED_MODULE_41__pages_terms_of_service_terms_of_service__["a" /* TermsOfServicePage */],
            __WEBPACK_IMPORTED_MODULE_42__pages_privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */],
            __WEBPACK_IMPORTED_MODULE_90__pages_maps_maps__["a" /* MapsPage */],
            __WEBPACK_IMPORTED_MODULE_89__pages_functionalities_functionalities__["a" /* FunctionalitiesPage */],
            __WEBPACK_IMPORTED_MODULE_91__pages_facebook_login_facebook_login__["a" /* FacebookLoginPage */],
            __WEBPACK_IMPORTED_MODULE_92__pages_google_login_google_login__["a" /* GoogleLoginPage */],
            __WEBPACK_IMPORTED_MODULE_94__pages_contact_card_contact_card__["a" /* ContactCardPage */],
            __WEBPACK_IMPORTED_MODULE_93__pages_twitter_login_twitter_login__["a" /* TwitterLoginPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_ads_ads__["a" /* AdsPage */],
            __WEBPACK_IMPORTED_MODULE_43__pages_form_validations_form_validations__["a" /* FormValidationsPage */],
            __WEBPACK_IMPORTED_MODULE_95__pages_video_playlist_video_playlist__["a" /* VideoPlaylistPage */],
            __WEBPACK_IMPORTED_MODULE_40__pages_map_type_map_type__["a" /* MapTypePage */],
            __WEBPACK_IMPORTED_MODULE_44__pages_search_search__["a" /* SearchPage */],
            __WEBPACK_IMPORTED_MODULE_45__pages_search_result_search_result__["a" /* SearchResultPage */],
            __WEBPACK_IMPORTED_MODULE_88__pages_change_password_change_password__["a" /* ChangePasswordPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_app_setting_app_setting__["a" /* AppSettingPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_other_profile_other_profile__["a" /* OtherProfilePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_imageview_imageview__["a" /* ImageViewPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_imageviewdetail_imageview_detail__["a" /* ImageViewDetailPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_writing_writing__["a" /* WritingPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_imageedit_imageedit__["a" /* ImageEditPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_write_normal_write_normal__["a" /* WritingNormalPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_chatting_no_chatting_no__["a" /* ChattingNoPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_chatting_yes_chatting_yes__["a" /* ChattingYesPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_camera_camera__["a" /* CameraPage */],
            __WEBPACK_IMPORTED_MODULE_70__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_71__pages_gallery_gallery__["a" /* GalleryPage */],
            __WEBPACK_IMPORTED_MODULE_46__pages_gallery_detail_gallery_detail__["a" /* GalleryDetailPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_writing_add_writing_add__["a" /* WritingAddPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_56__pages_feed_feed_service__["a" /* FeedService */],
            __WEBPACK_IMPORTED_MODULE_57__pages_listing_listing_service__["a" /* ListingService */],
            __WEBPACK_IMPORTED_MODULE_59__pages_profile_profile_service__["a" /* ProfileService */],
            __WEBPACK_IMPORTED_MODULE_60__pages_other_profile_other_profile_service__["a" /* OtherProfileService */],
            __WEBPACK_IMPORTED_MODULE_61__pages_notifications_notifications_service__["a" /* NotificationsService */],
            __WEBPACK_IMPORTED_MODULE_62__pages_comments_comments_service__["a" /* CommentsService */],
            __WEBPACK_IMPORTED_MODULE_63__pages_list_1_list_1_service__["a" /* List1Service */],
            __WEBPACK_IMPORTED_MODULE_64__pages_list_2_list_2_service__["a" /* List2Service */],
            __WEBPACK_IMPORTED_MODULE_65__pages_schedule_schedule_service__["a" /* ScheduleService */],
            __WEBPACK_IMPORTED_MODULE_58__pages_map_type_map_type_service__["a" /* MapTypeService */],
            __WEBPACK_IMPORTED_MODULE_66__pages_facebook_login_facebook_login_service__["a" /* FacebookLoginService */],
            __WEBPACK_IMPORTED_MODULE_67__pages_google_login_google_login_service__["a" /* GoogleLoginService */],
            __WEBPACK_IMPORTED_MODULE_68__pages_twitter_login_twitter_login_service__["a" /* TwitterLoginService */],
            __WEBPACK_IMPORTED_MODULE_69__pages_maps_maps_service__["a" /* GoogleMapsService */],
            __WEBPACK_IMPORTED_MODULE_98__providers_language_language_service__["a" /* LanguageService */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_clipboard__["a" /* Clipboard */],
            __WEBPACK_IMPORTED_MODULE_73__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_74__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_75__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_76__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_77__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_78__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_79__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_80__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_81__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_82__ionic_native_twitter_connect__["a" /* TwitterConnect */],
            __WEBPACK_IMPORTED_MODULE_83__ionic_native_admob_free__["a" /* AdMobFree */],
            __WEBPACK_IMPORTED_MODULE_84__ionic_native_app_rate__["a" /* AppRate */],
            __WEBPACK_IMPORTED_MODULE_85__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_86__ionic_native_crop__["a" /* Crop */],
            __WEBPACK_IMPORTED_MODULE_87__ionic_native_email_composer__["a" /* EmailComposer */],
            __WEBPACK_IMPORTED_MODULE_99__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_open_native_settings__["a" /* OpenNativeSettings */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_navigation_tabs_navigation__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_forms_forms__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_layouts_layouts__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_walkthrough_walkthrough__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_functionalities_functionalities__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_chatting_no_chatting_no__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_chatting_yes_chatting_yes__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_login_login__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var MyApp = (function () {
    function MyApp(platform, menu, app, splashScreen, statusBar, translate, toastCtrl, authService, events) {
        var _this = this;
        this.menu = menu;
        this.app = app;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.translate = translate;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.events = events;
        this.isInitialOpen = true;
        // make WalkthroughPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_10__pages_walkthrough_walkthrough__["a" /* WalkthroughPage */];
        // rootPage: any = FunctionalitiesPage;
        // rootPage: any = TabsNavigationPage;
        this.textDir = "ltr";
        translate.setDefaultLang('en');
        translate.use('ko');
        var isInit = localStorage.getItem('isInit');
        if (isInit == undefined) {
            localStorage.setItem('isInit', JSON.stringify(true));
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_tabs_navigation_tabs_navigation__["a" /* TabsNavigationPage */];
        }
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.splashScreen.hide();
            _this.statusBar.styleDefault();
        });
        this.translate.onLangChange.subscribe(function (event) {
            if (event.lang == 'ar') {
                platform.setDir('rtl', true);
                platform.setDir('ltr', false);
            }
            else {
                platform.setDir('ltr', true);
                platform.setDir('rtl', false);
            }
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(_this.translate.get('PROFILE'), _this.translate.get('CHATTING'), _this.translate.get('EVENT_BLOG'), _this.translate.get('FREQ_QUESTIONS'), _this.translate.get('CUSTOMER_CENTER'), _this.translate.get('LOGIN_SIGNUP')).subscribe(function (data) {
                if (_this.authService.authenticated()) {
                    var chatting_first = localStorage.getItem('chatting_first');
                    _this.pages = [
                        { title: data[0], icon: 'person', component: __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */] },
                        { title: data[1], icon: 'create', component: (chatting_first == undefined ? __WEBPACK_IMPORTED_MODULE_13__pages_chatting_no_chatting_no__["a" /* ChattingNoPage */] : __WEBPACK_IMPORTED_MODULE_14__pages_chatting_yes_chatting_yes__["a" /* ChattingYesPage */]) },
                        { title: data[2], icon: 'code', component: __WEBPACK_IMPORTED_MODULE_12__pages_functionalities_functionalities__["a" /* FunctionalitiesPage */] },
                        { title: data[3], icon: 'grid', component: __WEBPACK_IMPORTED_MODULE_9__pages_layouts_layouts__["a" /* LayoutsPage */] },
                        { title: data[4], icon: 'settings', component: __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */] }
                    ];
                }
                else {
                    _this.pages = [
                        { title: data[5], icon: 'person', component: __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */] },
                        { title: 'Forms', icon: 'create', component: undefined },
                        { title: data[2], icon: 'code', component: __WEBPACK_IMPORTED_MODULE_12__pages_functionalities_functionalities__["a" /* FunctionalitiesPage */] },
                        { title: data[3], icon: 'grid', component: __WEBPACK_IMPORTED_MODULE_9__pages_layouts_layouts__["a" /* LayoutsPage */] },
                        { title: data[4], icon: 'settings', component: __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */] }
                    ];
                }
            });
        });
        events.subscribe('authenticate', function () {
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(_this.translate.get('PROFILE'), _this.translate.get('CHATTING'), _this.translate.get('EVENT_BLOG'), _this.translate.get('FREQ_QUESTIONS'), _this.translate.get('CUSTOMER_CENTER'), _this.translate.get('LOGIN_SIGNUP')).subscribe(function (data) {
                if (_this.authService.authenticated()) {
                    _this.pages = [
                        { title: data[0], icon: 'person', component: __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */] },
                        { title: data[1], icon: 'create', component: __WEBPACK_IMPORTED_MODULE_8__pages_forms_forms__["a" /* FormsPage */] },
                        { title: data[2], icon: 'code', component: __WEBPACK_IMPORTED_MODULE_12__pages_functionalities_functionalities__["a" /* FunctionalitiesPage */] },
                        { title: data[3], icon: 'grid', component: __WEBPACK_IMPORTED_MODULE_9__pages_layouts_layouts__["a" /* LayoutsPage */] },
                        { title: data[4], icon: 'settings', component: __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */] }
                    ];
                }
                else {
                    _this.pages = [
                        { title: data[5], icon: 'person', component: __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */] },
                        { title: 'Forms', icon: 'create', component: undefined },
                        { title: data[2], icon: 'code', component: __WEBPACK_IMPORTED_MODULE_12__pages_functionalities_functionalities__["a" /* FunctionalitiesPage */] },
                        { title: data[3], icon: 'grid', component: __WEBPACK_IMPORTED_MODULE_9__pages_layouts_layouts__["a" /* LayoutsPage */] },
                        { title: data[4], icon: 'settings', component: __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */] }
                    ];
                }
            });
        });
        events.subscribe('chatting_first', function () {
            __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].forkJoin(_this.translate.get('PROFILE'), _this.translate.get('CHATTING'), _this.translate.get('EVENT_BLOG'), _this.translate.get('FREQ_QUESTIONS'), _this.translate.get('CUSTOMER_CENTER'), _this.translate.get('LOGIN_SIGNUP')).subscribe(function (data) {
                if (_this.authService.authenticated()) {
                    var chatting_first = localStorage.getItem('chatting_first');
                    _this.pages = [
                        { title: data[0], icon: 'person', component: __WEBPACK_IMPORTED_MODULE_6__pages_profile_profile__["a" /* ProfilePage */] },
                        { title: data[1], icon: 'create', component: (chatting_first == undefined ? __WEBPACK_IMPORTED_MODULE_13__pages_chatting_no_chatting_no__["a" /* ChattingNoPage */] : __WEBPACK_IMPORTED_MODULE_14__pages_chatting_yes_chatting_yes__["a" /* ChattingYesPage */]) },
                        { title: data[2], icon: 'code', component: __WEBPACK_IMPORTED_MODULE_12__pages_functionalities_functionalities__["a" /* FunctionalitiesPage */] },
                        { title: data[3], icon: 'grid', component: __WEBPACK_IMPORTED_MODULE_9__pages_layouts_layouts__["a" /* LayoutsPage */] },
                        { title: data[4], icon: 'settings', component: __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */] }
                    ];
                }
                else {
                    _this.pages = [
                        { title: data[5], icon: 'person', component: __WEBPACK_IMPORTED_MODULE_15__pages_login_login__["a" /* LoginPage */] },
                        { title: 'Forms', icon: 'create', component: undefined },
                        { title: data[2], icon: 'code', component: __WEBPACK_IMPORTED_MODULE_12__pages_functionalities_functionalities__["a" /* FunctionalitiesPage */] },
                        { title: data[3], icon: 'grid', component: __WEBPACK_IMPORTED_MODULE_9__pages_layouts_layouts__["a" /* LayoutsPage */] },
                        { title: data[4], icon: 'settings', component: __WEBPACK_IMPORTED_MODULE_11__pages_settings_settings__["a" /* SettingsPage */] }
                    ];
                }
            });
        });
    }
    MyApp.prototype.ionViewEnter = function () {
        console.log('-------');
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.pushPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        if (page.component == undefined) {
            return;
        }
        // rootNav is now deprecated (since beta 11) (https://forum.ionicframework.com/t/cant-access-rootnav-after-upgrade-to-beta-11/59889)
        this.app.getRootNav().push(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/app/app.html"*/'<ion-menu [content]="content" [swipeEnabled]="false">\n  <ion-content class="menu-content">\n    <ion-list class="menu-list">\n      <div>\n        <img *ngIf="authService.authenticated()" src="../assets/images/user/register.png" class="userImage" />\n        <img *ngIf="!authService.authenticated()" src="../assets/images/user/unregister.png" class="userImage" />\n      </div>\n      <button ion-item detail-none *ngFor="let page of pages" (click)="pushPage(page)">\n        <ion-icon *ngIf="page.icon" name="{{page.icon}}" item-left></ion-icon>\n        {{page.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipe-back-enabled="false"></ion-nav>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AuthServiceProvider = (function () {
    function AuthServiceProvider(http) {
        this.http = http;
        console.log('Hello AuthServiceProvider Provider');
    }
    AuthServiceProvider.prototype.login = function () {
        localStorage.setItem('logged_in', '1');
    };
    AuthServiceProvider.prototype.logout = function () {
        localStorage.clear();
    };
    AuthServiceProvider.prototype.authenticated = function () {
        var logged = localStorage.getItem('logged_in');
        return logged == '1';
    };
    ;
    return AuthServiceProvider;
}());
AuthServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], AuthServiceProvider);

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsNavigationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listing_listing__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications_notifications__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__writing_writing__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_type_map_type__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__camera_camera__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsNavigationPage = (function () {
    function TabsNavigationPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__listing_listing__["a" /* ListingPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__map_type_map_type__["a" /* MapTypePage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__notifications_notifications__["a" /* NotificationsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_3__writing_writing__["a" /* WritingPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_5__camera_camera__["a" /* CameraPage */];
    }
    return TabsNavigationPage;
}());
TabsNavigationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'tabs-navigation',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/tabs-navigation/tabs-navigation.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="{{\'LISTING\' | translate}}" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="{{\'PROFILE\' | translate}}" tabIcon="pin"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="{{\'NOTIFICATIONS\' | translate}}" tabIcon="heart"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="{{\'PROFILE\' | translate}}" tabIcon="cloud-upload"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="{{\'NOTIFICATIONS\' | translate}}" tabIcon="camera"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/tabs-navigation/tabs-navigation.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsNavigationPage);

//# sourceMappingURL=tabs-navigation.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_model__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_service__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NotificationsPage = (function () {
    function NotificationsPage(nav, notificationsService, loadingCtrl) {
        this.nav = nav;
        this.notificationsService = notificationsService;
        this.loadingCtrl = loadingCtrl;
        this.notifications = new __WEBPACK_IMPORTED_MODULE_3__notifications_model__["a" /* NotificationsModel */]();
        this.infiniteScrollVisible = true;
        this.curNotifications = [];
        this.notificationShowCount = 10;
        this.loading = this.loadingCtrl.create();
    }
    NotificationsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.notificationsService
            .getData()
            .then(function (data) {
            _this.notifications = data;
            _this.loading.dismiss();
            _this.initNotifications();
        });
    };
    NotificationsPage.prototype.initNotifications = function () {
        this.curNotifications = [];
        for (var i = 0; i < this.notificationShowCount; i++) {
            if (this.curNotifications.length == this.notifications.notifications.length) {
                this.infiniteScrollVisible = false;
                break;
            }
            else {
                this.curNotifications.push(this.notifications.notifications[this.curNotifications.length]);
            }
        }
    };
    NotificationsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            for (var i = 0; i < _this.notificationShowCount; i++) {
                if (_this.curNotifications.length == _this.notifications.notifications.length) {
                    _this.infiniteScrollVisible = false;
                    break;
                }
                else {
                    _this.curNotifications.push(_this.notifications.notifications[_this.curNotifications.length]);
                }
            }
            infiniteScroll.complete();
        }, 500);
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'notifications-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/notifications/notifications.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{\'NOTIFICATIONS\' | translate}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="notifications-content">\n  <ion-item-group>\n    <ion-item class="notification-item" *ngFor="let notification of curNotifications">\n      <ion-avatar item-left>\n        <preload-image class="user-image" [ratio]="{w:1, h:1}" [src]="notification.image"></preload-image>\n      </ion-avatar>\n      <div class="item-body-unread" *ngIf="!notification.isRead">\n        <p class="item-title">\n\n          {{notification.name}}\n          <font style="color: black;" *ngIf="notification.msgType==1">{{\'POSTED_NEW_POSTING\' | translate}}</font>\n          <font style="color: black;" *ngIf="notification.msgType==2">{{\'SENT_1_1_MESSAGE\' | translate}}</font>\n          <font style="color: black;" *ngIf="notification.msgType==3">{{\'ADDED_ME_AS_FRIEND\' | translate}}</font>\n          <font style="color: black;" *ngIf="notification.msgType==4">{{\'COMMENTED_ON_MY_POSTING\' | translate}}</font>\n\n        </p>\n      </div>\n      <div class="item-body-read" *ngIf="notification.isRead">\n        <p class="item-title">\n\n          {{notification.name}}\n          <font style="color: black;" *ngIf="notification.msgType==1">{{\'POSTED_NEW_POSTING\' | translate}}</font>\n          <font style="color: black;" *ngIf="notification.msgType==2">{{\'SENT_1_1_MESSAGE\' | translate}}</font>\n          <font style="color: black;" *ngIf="notification.msgType==3">{{\'ADDED_ME_AS_FRIEND\' | translate}}</font>\n          <font style="color: black;" *ngIf="notification.msgType==4">{{\'COMMENTED_ON_MY_POSTING\' | translate}}</font>\n\n        </p>\n      </div>\n      <ion-note class="item-time" item-right>\n        <div>\n          {{notification.date}}\n        </div>\n        <div>\n          <button icon-only ion-button clear small class="del-button">\n            <ion-icon  name=\'close\' color="dark"></ion-icon>      \n          </button>\n        </div>\n      </ion-note>\n    </ion-item>\n  </ion-item-group>\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="infiniteScrollVisible">\n    <ion-infinite-content>\n      <div style="margin: 0 auto;">\n        <p style="text-align: center;">\n          Loading\n        </p>\n      </div>\n    </ion-infinite-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/notifications/notifications.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__notifications_service__["a" /* NotificationsService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FeedPostModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedModel; });
var FeedPostModel = (function () {
    function FeedPostModel() {
        this.likes = 0;
        this.comments = 0;
        this.liked = false;
    }
    return FeedPostModel;
}());

var FeedModel = (function () {
    function FeedModel() {
    }
    return FeedModel;
}());

//# sourceMappingURL=feed.model.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CommentModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsModel; });
var CommentModel = (function () {
    function CommentModel() {
    }
    return CommentModel;
}());

var CommentsModel = (function () {
    function CommentsModel() {
    }
    return CommentsModel;
}());

//# sourceMappingURL=comments.model.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingModel; });
/* unused harmony export ListingItemModel */
/* unused harmony export PostItemModel */
/* unused harmony export CommentItemModel */
var ListingModel = (function () {
    function ListingModel() {
    }
    return ListingModel;
}());

var ListingItemModel = (function () {
    function ListingItemModel() {
    }
    return ListingItemModel;
}());

var PostItemModel = (function () {
    function PostItemModel() {
    }
    return PostItemModel;
}());

var CommentItemModel = (function () {
    function CommentItemModel() {
    }
    return CommentItemModel;
}());

//# sourceMappingURL=listing.model.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NotificationModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsModel; });
var NotificationModel = (function () {
    function NotificationModel() {
    }
    return NotificationModel;
}());

var NotificationsModel = (function () {
    function NotificationsModel() {
    }
    return NotificationsModel;
}());

//# sourceMappingURL=notifications.model.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UserModel */
/* unused harmony export ProfilePostModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileModel; });
var UserModel = (function () {
    function UserModel() {
    }
    return UserModel;
}());

var ProfilePostModel = (function () {
    function ProfilePostModel() {
        this.likes = 0;
        this.comments = 0;
        this.liked = false;
    }
    return ProfilePostModel;
}());

var ProfileModel = (function () {
    function ProfileModel() {
        this.user = new UserModel();
        this.following = [];
        this.followers = [];
        this.posts = [];
    }
    return ProfileModel;
}());

//# sourceMappingURL=other-profile.model.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernameValidator; });
var UsernameValidator = (function () {
    function UsernameValidator() {
    }
    UsernameValidator.validUsername = function (fc) {
        if (fc.value.toLowerCase() === "abc123" || fc.value.toLowerCase() === "123abc") {
            return {
                validUsername: true
            };
        }
        else {
            return null;
        }
    };
    return UsernameValidator;
}());

//# sourceMappingURL=username.validator.js.map

/***/ }),

/***/ 675:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordValidator; });
var PasswordValidator = (function () {
    function PasswordValidator() {
    }
    // Inspired on: http://plnkr.co/edit/Zcbg2T3tOxYmhxs7vaAm?p=preview
    PasswordValidator.areEqual = function (formGroup) {
        var val;
        var valid = true;
        for (var key in formGroup.controls) {
            if (formGroup.controls.hasOwnProperty(key)) {
                var control = formGroup.controls[key];
                if (val === undefined) {
                    val = control.value;
                }
                else {
                    if (val !== control.value) {
                        valid = false;
                        break;
                    }
                }
            }
        }
        if (valid) {
            return null;
        }
        return {
            areEqual: true
        };
    };
    return PasswordValidator;
}());

//# sourceMappingURL=password.validator.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_google_libphonenumber__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_google_libphonenumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_google_libphonenumber__);

var PhoneValidator = (function () {
    function PhoneValidator() {
    }
    return PhoneValidator;
}());

// Inspired on: https://github.com/yuyang041060120/ng2-validation/blob/master/src/equal-to/validator.ts
PhoneValidator.validCountryPhone = function (countryControl) {
    var subscribe = false;
    return function (phoneControl) {
        if (!subscribe) {
            subscribe = true;
            countryControl.valueChanges.subscribe(function () {
                phoneControl.updateValueAndValidity();
            });
        }
        if (phoneControl.value !== "") {
            try {
                var phoneUtil = __WEBPACK_IMPORTED_MODULE_0_google_libphonenumber___default.a.PhoneNumberUtil.getInstance();
                var phoneNumber = "" + phoneControl.value + "", region = countryControl.value.iso, number = phoneUtil.parse(phoneNumber, region), isValidNumber = phoneUtil.isValidNumber(number);
                if (isValidNumber) {
                    return null;
                }
            }
            catch (e) {
                // console.log(e);
                return {
                    validCountryPhone: true
                };
            }
            return {
                validCountryPhone: true
            };
        }
        else {
            return null;
        }
    };
};
//# sourceMappingURL=phone.validator.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Country; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_google_libphonenumber__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_google_libphonenumber___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_google_libphonenumber__);

var Country = (function () {
    function Country(iso, name) {
        this.iso = iso;
        this.name = name;
        var phoneUtil = __WEBPACK_IMPORTED_MODULE_0_google_libphonenumber___default.a.PhoneNumberUtil.getInstance(), PNF = __WEBPACK_IMPORTED_MODULE_0_google_libphonenumber___default.a.PhoneNumberFormat, PNT = __WEBPACK_IMPORTED_MODULE_0_google_libphonenumber___default.a.PhoneNumberType, country_example_number = phoneUtil.getExampleNumberForType(this.iso, PNT.MOBILE), 
        // We need to define what kind of country phone number type we are going to use as a mask.
        // You can choose between many types including:
        //    - FIXED_LINE
        //    - MOBILE
        //    - For more types please refer to google libphonenumber repo (https://github.com/googlei18n/libphonenumber/blob/f9e9424769964ce1970c6ed2bd60b25b976dfe6f/javascript/i18n/phonenumbers/phonenumberutil.js#L913)
        example_number_formatted = phoneUtil.format(country_example_number, PNF.NATIONAL);
        // We need to define how are we going to format the phone number
        // You can choose between many formats including:
        //    - NATIONAL
        //    - INTERNATIONAL
        //    - E164
        //    - RFC3966
        this.sample_phone = example_number_formatted;
        this.code = "+" + country_example_number.getCountryCode();
        // Now let's transform the formatted example number into a valid text-mask
        // Inspired in text-mask example (https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#included-conformtomask)
        this.phone_mask = this.getMaskFromString(example_number_formatted);
    }
    Country.prototype.getMaskFromString = function (string) {
        var _string_chars = string.split(''), _digit_reg_exp = new RegExp(/\d/), _mask = _string_chars.map(function (char) {
            // Replace any digit with a digit RegExp
            return (_digit_reg_exp.test(char)) ? _digit_reg_exp : char;
        });
        return _mask;
    };
    return Country;
}());

//# sourceMappingURL=form-validations.model.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EventModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleModel; });
/* unused harmony export EventDate */
var EventModel = (function () {
    function EventModel() {
    }
    return EventModel;
}());

var ScheduleModel = (function () {
    function ScheduleModel() {
        this.today = [];
        this.upcoming = [];
    }
    return ScheduleModel;
}());

var EventDate = (function () {
    function EventDate() {
    }
    return EventDate;
}());

//# sourceMappingURL=schedule.model.js.map

/***/ }),

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ListModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List1Model; });
var ListModel = (function () {
    function ListModel() {
    }
    return ListModel;
}());

var List1Model = (function () {
    function List1Model() {
    }
    return List1Model;
}());

//# sourceMappingURL=list-1.model.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ListModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List2Model; });
var ListModel = (function () {
    function ListModel() {
    }
    return ListModel;
}());

var List2Model = (function () {
    function List2Model() {
    }
    return List2Model;
}());

//# sourceMappingURL=list-2.model.js.map

/***/ }),

/***/ 682:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsModel; });
/* unused harmony export MapPlace */
var MapsModel = (function () {
    function MapsModel() {
        this.map_options = {
            center: { lat: 40.785091, lng: -73.968285 },
            zoom: 13,
            disableDefaultUI: true
        };
        this.map_places = [];
        this.search_query = '';
        this.search_places_predictions = [];
        this.nearby_places = [];
        this.directions_origin = new MapPlace();
        this.using_geolocation = false;
    }
    // https://developers.google.com/maps/documentation/javascript/reference#Map
    MapsModel.prototype.init = function (map) {
        this.map = map;
        // https://developers.google.com/maps/documentation/javascript/reference#DirectionsRenderer
        this.directions_display = new google.maps.DirectionsRenderer({
            map: this.map,
            suppressMarkers: true,
            preserveViewport: true
        });
    };
    MapsModel.prototype.cleanMap = function () {
        // Empty nearby places array
        this.nearby_places = [];
        // To clear previous directions
        this.directions_display.setDirections({ routes: [] });
        // To remove all previous markers from the map
        this.map_places.forEach(function (place) {
            place.marker.setMap(null);
        });
        // Empty markers array
        this.map_places = [];
        this.using_geolocation = false;
    };
    MapsModel.prototype.addPlaceToMap = function (location, color) {
        if (color === void 0) { color = '#333333'; }
        var _map_place = new MapPlace();
        _map_place.location = location;
        _map_place.marker = new google.maps.Marker({
            position: location,
            map: this.map,
            icon: MapPlace.createIcon(color)
        });
        this.map_places.push(_map_place);
        return _map_place;
    };
    MapsModel.prototype.addNearbyPlace = function (place_result) {
        var _map_place = this.addPlaceToMap(place_result.geometry.location, '#666666');
        // This is an extra attribute for nearby places only
        _map_place.details = place_result;
        var getRandom = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        // Add a random image
        _map_place.details["image"] = "./assets/images/maps/place-" + getRandom(1, 9) + ".jpg";
        this.nearby_places.push(_map_place);
    };
    MapsModel.prototype.deselectPlaces = function () {
        this.nearby_places.forEach(function (place) {
            place.deselect();
        });
    };
    return MapsModel;
}());

var MapPlace = (function () {
    function MapPlace() {
        this.selected = false;
    }
    // https://developers.google.com/maps/documentation/javascript/reference#Symbol
    MapPlace.createIcon = function (color) {
        var _icon = {
            path: "M144 400c80 0 144 -60 144 -134c0 -104 -144 -282 -144 -282s-144 178 -144 282c0 74 64 134 144 134zM144 209c26 0 47 21 47 47s-21 47 -47 47s-47 -21 -47 -47s21 -47 47 -47z",
            fillColor: color,
            fillOpacity: .6,
            anchor: new google.maps.Point(0, 0),
            strokeWeight: 0,
            scale: 0.08,
            rotation: 180
        };
        return _icon;
    };
    MapPlace.prototype.setIcon = function (color) {
        this.marker.setIcon(MapPlace.createIcon(color));
    };
    MapPlace.prototype.deselect = function () {
        this.selected = false;
        this.setIcon('#666666');
    };
    MapPlace.prototype.select = function () {
        this.selected = true;
        this.setIcon('#ae75e7');
    };
    return MapPlace;
}());

//# sourceMappingURL=maps.model.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookUserModel; });
var FacebookUserModel = (function () {
    function FacebookUserModel() {
        this.friends = [];
        this.photos = [];
    }
    return FacebookUserModel;
}());

//# sourceMappingURL=facebook-user.model.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleUserModel; });
var GoogleUserModel = (function () {
    function GoogleUserModel() {
        this.friends = [];
        this.photos = [];
    }
    return GoogleUserModel;
}());

//# sourceMappingURL=google-user.model.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterUserModel; });
var TwitterUserModel = (function () {
    function TwitterUserModel() {
    }
    return TwitterUserModel;
}());

//# sourceMappingURL=twitter-user.model.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModel; });
var ContactModel = (function () {
    function ContactModel() {
        this.images = [];
        this.images = [
            './assets/images/maps/place-1.jpg',
            './assets/images/maps/place-2.jpg',
            './assets/images/maps/place-3.jpg',
            './assets/images/maps/place-4.jpg'
        ];
        this.name = "Railway Cafe";
        this.rating = 4;
        this.email = "contact@ionicthemes.com";
        this.phone = "555-555-555";
        this.website = "https://ionicthemes.com";
        this.address = "7644 sable st";
    }
    return ContactModel;
}());

//# sourceMappingURL=contact.model.js.map

/***/ }),

/***/ 687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VideoModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPlaylistModel; });
var VideoModel = (function () {
    function VideoModel(title, description, thumbnail, sources) {
        this.title = title;
        this.description = description;
        this.thumbnail = thumbnail;
        this.sources = sources;
    }
    return VideoModel;
}());

var VideoPlaylistModel = (function () {
    function VideoPlaylistModel() {
        this.video_playlist = [];
        var __video_1 = new VideoModel('Big Buck Bunny', 'Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain\'t no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.', './assets/images/video-playlist/big_buck_bunny.png', [
            {
                src: './assets/videos/big_buck_bunny.mp4',
                type: 'video/mp4'
            }
        ]);
        var __video_2 = new VideoModel('EARTH: Seen From ISS Expedition 28 & 29', 'Thanks to NASA and the crews of ISS for this wonderful video footage.', './assets/images/video-playlist/earth_seen_from_iss.png', [
            {
                src: "http://static.videogular.com/assets/videos/videogular.mp4",
                type: "video/mp4"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.ogg",
                type: "video/ogg"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.webm",
                type: "video/webm"
            }
        ]);
        var __video_3 = new VideoModel('Elephant Dream', 'Elephants Dream is the world\'s first open movie, made entirely with open source graphics software such as Blender, and with all production files freely available to use however you please', './assets/images/video-playlist/elephants_dream.png', [
            {
                src: './assets/videos/elephants_dream.mp4',
                type: 'video/mp4'
            }
        ]);
        this.video_playlist.push(__video_1);
        this.video_playlist.push(__video_2);
        this.video_playlist.push(__video_3);
        this.selected_video = this.video_playlist[0];
    }
    return VideoPlaylistModel;
}());

//# sourceMappingURL=video-playlist.model.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__followers_followers__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_model__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_navigation_tabs_navigation__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__change_password_change_password__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_setting_app_setting__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_auth_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_Rx__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__notifications_notifications__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__other_profile_other_profile__ = __webpack_require__(322);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var ProfilePage = (function () {
    function ProfilePage(menu, app, navParams, profileService, translate, authService, loadingCtrl, socialSharing, actionsheetCtrl, platform, clipboard, events, toastCtrl, nav) {
        this.menu = menu;
        this.app = app;
        this.navParams = navParams;
        this.profileService = profileService;
        this.translate = translate;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.socialSharing = socialSharing;
        this.actionsheetCtrl = actionsheetCtrl;
        this.platform = platform;
        this.clipboard = clipboard;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.nav = nav;
        this.profile = new __WEBPACK_IMPORTED_MODULE_5__profile_model__["a" /* ProfileModel */]();
        this.moreActionSheet = undefined;
        this.curNotifications = [
            {
                "name": "Martin",
                "image": "./assets/images/notifications/100x100Notification1.jpeg",
                "msgType": 1,
                "date": "5:03 pm",
                "isRead": true
            },
            {
                "name": "Martin",
                "image": "./assets/images/notifications/100x100Notification1.jpeg",
                "msgType": 2,
                "date": "5:03 pm",
                "isRead": false
            }
        ];
        this.post1 = {
            "images": ["./assets/images/listing/200x200basquet.png",
                "./assets/images/listing/200x200swimming.png",
                "./assets/images/listing/300x300ExtremeSports.png"],
            "address": "Sample Address",
            "likesCount": 53,
            "commentsCount": 5,
            "meLikes": false,
            "date": "2017-11-20",
            "comments": [{ "name": "Sinho0689", "comment": "seems good" },
                { "name": "Sinho0689", "comment": "seems good" },
                { "name": "Sinho0689", "comment": "seems good" }]
        };
        this.display = "myphoto";
        this.loading = this.loadingCtrl.create();
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.profileService.getData()
            .then(function (data) {
            _this.profile.user = data.user;
            _this.profile.following = data.following;
            _this.profile.followers = data.followers;
            _this.profile.posts = data.posts;
            _this.loading.dismiss();
        });
    };
    ProfilePage.prototype.goToFollowList = function () {
        // close the menu when clicking a link from the menu
        this.menu.close();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_3__followers_followers__["a" /* FollowersPage */], {
            followers: this.profile.followers,
            followings: this.profile.following
        });
    };
    ProfilePage.prototype.goToSettings = function () {
        // close the menu when clicking a link from the menu
        this.menu.close();
        this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */]);
    };
    ProfilePage.prototype.onSegmentChanged = function (segmentButton) {
        // console.log('Segment changed to', segmentButton.value);
    };
    ProfilePage.prototype.onSegmentSelected = function (segmentButton) {
        // console.log('Segment selected', segmentButton.value);
    };
    ProfilePage.prototype.sharePost = function (post) {
        //this code is to use the social sharing plugin
        // message, subject, file, url
        this.socialSharing.share(post.description, post.title, post.image)
            .then(function () {
            console.log('Success!');
        })
            .catch(function () {
            console.log('Error');
        });
    };
    ProfilePage.prototype.onClickMenu = function () {
        var _this = this;
        console.log('---more---');
        if (this.moreActionSheet == undefined) {
        }
        __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"].forkJoin(this.translate.get('COPY_PROFILE_URL'), this.translate.get('CHANGE_PWD'), this.translate.get('SETTINGS'), this.translate.get('LOG_OUT'), this.translate.get('LINK_PROFILE_COPY_CLIPBOARD')).subscribe(function (data) {
            _this.clipboardToast = _this.toastCtrl.create({
                message: data[4],
                duration: 3000,
                position: 'bottom'
            });
            _this.moreActionSheet = _this.actionsheetCtrl.create({
                title: 'Select an action',
                buttons: [
                    {
                        text: data[0],
                        role: 'destructive',
                        icon: !_this.platform.is('ios') ? 'link' : null,
                        handler: function () {
                            _this.clipboard.copy(_this.profile.user.image);
                            _this.clipboard.paste().then(function (resolve) {
                                _this.clipboardToast.present();
                            }, function (reject) {
                            });
                        }
                    },
                    {
                        text: data[1],
                        role: 'destructive',
                        icon: !_this.platform.is('ios') ? 'lock' : null,
                        handler: function () {
                            console.log('Change PWD');
                            _this.menu.close();
                            _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_8__change_password_change_password__["a" /* ChangePasswordPage */]);
                        }
                    },
                    {
                        text: data[2],
                        role: 'destructive',
                        icon: !_this.platform.is('ios') ? 'settings' : null,
                        handler: function () {
                            console.log('setting');
                            _this.menu.close();
                            _this.app.getRootNav().push(__WEBPACK_IMPORTED_MODULE_9__app_setting_app_setting__["a" /* AppSettingPage */]);
                        }
                    },
                    {
                        text: data[3],
                        role: 'destructive',
                        icon: !_this.platform.is('ios') ? 'log-out' : null,
                        handler: function () {
                            _this.authService.logout();
                            _this.events.publish('authenticate');
                            _this.menu.close();
                            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_navigation_tabs_navigation__["a" /* TabsNavigationPage */]);
                        }
                    }
                ]
            });
            _this.moreActionSheet.present();
        });
    };
    ProfilePage.prototype.toNotificationPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_15__notifications_notifications__["a" /* NotificationsPage */]);
    };
    ProfilePage.prototype.toProfile = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_16__other_profile_other_profile__["a" /* OtherProfilePage */]);
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'profile-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/profile/profile.html"*/'<ion-header>\n  <ion-navbar>\n    <div style="display: flex; align-items: center;">\n      <ion-title style="flex: 1;"><font style="text-align: center;">{{\'PROFILE\' | translate}}</font></ion-title>\n      <span *ngIf="authService.authenticated()">\n        <a (click)="onNotificationPage()"><img src="../../assets/images/homeHeader/envelope.png"/></a>\n      </span>\n      <span>\n        <a (click)="onClickMenu()"><img src="../../assets/images/homeHeader/menu.png"/></a>\n      </span>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="profile-content">\n  <div class="user-details">\n    <ion-row class="user-main-data-row">\n      <ion-col no-padding width-33>\n        <preload-image class="user-image" [ratio]="{w:1, h:1}" [(src)]="profile.user.image" alt="profile.user.name" title="profile.user.name"></preload-image>\n      </ion-col>\n      <ion-col no-padding>\n        <ion-row class="social-presence-row">\n          <ion-col width-50 class="social-presence-item">\n            <a (click)="goToFollowList()">\n              <ion-icon name=\'heart\' color="danger" style="font-size: 200%;"></ion-icon>\n              <h2 class="social-presence-value">{{profile.followers.length}}</h2>\n            </a>\n          </ion-col>\n          <ion-col width-50 class="social-presence-item">\n            <a>\n              <ion-icon name=\'star\' color="#333333" style="font-size: 200%;"></ion-icon>\n              <h4 class="social-presence-title">business</h4>\n            </a>\n          </ion-col>\n        </ion-row>\n        <ion-row class="profile-action-row">\n          <ion-col no-padding>\n            <button ion-button block small (click)="goToSettings()">\n              {{\'EDIT_PROFILE\' | translate}}\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n\n    <div class="social-group">\n      <span>\n        <a (click)="onChatting()">\n          <img src="../../assets/images/social/chatting.png" class="social-img" />\n        </a>\n      </span>\n      <span>\n        <a (click)="onChatting()">\n          <img src="../../assets/images/social/telephone.jpg" class="social-img" />\n        </a>\n      </span>\n      <span>\n        <a (click)="onChatting()">\n          <img src="../../assets/images/social/website.png" class="social-img" />\n        </a>\n      </span>\n      <span>\n        <a (click)="onChatting()">\n          <img src="../../assets/images/social/facebook.png" class="social-img" />\n        </a>\n      </span>\n      <span>\n        <a (click)="onChatting()">\n          <img src="../../assets/images/social/instagram.png" class="social-img" />\n        </a>\n      </span>\n      <span>\n        <a (click)="onChatting()">\n          <img src="../../assets/images/social/blog.jpeg" class="social-img" />\n        </a>\n      </span>\n      <span>\n        <a (click)="onChatting()">\n          <img src="../../assets/images/social/twitter.png" class="social-img" />\n        </a>\n      </span>\n    </div>\n\n    <ion-row wrap class="user-bio-row">\n      <ion-col no-padding width-50>\n        <h2 class="user-name">{{profile.user.name}}</h2>\n      </ion-col>\n      <ion-col no-padding width-50>\n        <span class="user-location">{{profile.user.location}}</span>\n      </ion-col>\n      <ion-col no-padding width-100>\n        <p class="user-description">\n          {{profile.user.about}}\n        </p>\n      </ion-col>\n    </ion-row>\n    <ion-segment class="user-content-segment" [(ngModel)]="display" (ionChange)="onSegmentChanged($event)">\n      <ion-segment-button value="myphoto" (ionSelect)="onSegmentSelected($event)">\n        {{\'MY_PICTURE\' | translate}}\n      </ion-segment-button>\n      <ion-segment-button value="notices" (ionSelect)="onSegmentSelected($event)">\n        {{\'NOTICES\' | translate}}\n      </ion-segment-button>\n      <ion-segment-button value="carephoto" (ionSelect)="onSegmentSelected($event)">\n        {{\'Care_PICTURE\' | translate}}\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n  <div [ngSwitch]="display" class="user-content">\n    <div *ngSwitchCase="\'myphoto\'" class="list-view">\n      <div class="list-item" *ngFor="let post of profile.posts">\n        <span class="item-date">{{post.date}}</span>\n        <ion-card>\n          <preload-image [ratio]="{w:1, h:1}" [src]="post.image" title=""></preload-image>\n          <ion-card-content>\n            <p class="item-text">\n              {{post.description}}\n            </p>\n          </ion-card-content>\n          <ion-row no-padding class="actions-row">\n            <ion-col no-padding width-30 text-left>\n              <button class="action-button" ion-button clear small color="danger" icon-left>\n                <ion-icon isActive="{{post.liked}}" name=\'heart\'></ion-icon>\n                  {{post.likes}} {{\'LIKES\' | translate}}\n              </button>\n            </ion-col>\n            <ion-col no-padding width-45 text-center>\n              <button class="action-button" ion-button clear small color="danger" icon-left>\n                <ion-icon name=\'chatbubbles\'></ion-icon>\n                  {{post.comments}} {{\'COMMENTS\' | translate}}\n              </button>\n            </ion-col>\n            <ion-col no-padding width-25 text-right>\n              <button class="action-button" ion-button clear small color="danger" icon-left (click)="sharePost(post)">\n                <ion-icon name=\'share-alt\'></ion-icon>\n                {{\'SHARE\' | translate}}\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </div>\n    </div>\n    <div *ngSwitchCase="\'notices\'" class="grid-view">\n      \n        <ion-item class="notification-item" *ngFor="let notification of curNotifications">\n          <a (click)="toNotificationPage()">\n            <ion-avatar item-left>\n              <preload-image class="user-image" [ratio]="{w:1, h:1}" [src]="notification.image"></preload-image>\n            </ion-avatar>\n          </a>\n          <div class="item-body-unread" *ngIf="!notification.isRead">\n            <p class="item-title">\n      \n              {{notification.name}}\n              <font style="color: black;" *ngIf="notification.msgType==1">{{\'POSTED_NEW_POSTING\' | translate}}</font>\n              <font style="color: black;" *ngIf="notification.msgType==2">{{\'SENT_1_1_MESSAGE\' | translate}}</font>\n              <font style="color: black;" *ngIf="notification.msgType==3">{{\'ADDED_ME_AS_FRIEND\' | translate}}</font>\n              <font style="color: black;" *ngIf="notification.msgType==4">{{\'COMMENTED_ON_MY_POSTING\' | translate}}</font>\n      \n            </p>\n          </div>\n          <div class="item-body-read" *ngIf="notification.isRead">\n            <p class="item-title">\n      \n              {{notification.name}}\n              <font style="color: black;" *ngIf="notification.msgType==1">{{\'POSTED_NEW_POSTING\' | translate}}</font>\n              <font style="color: black;" *ngIf="notification.msgType==2">{{\'SENT_1_1_MESSAGE\' | translate}}</font>\n              <font style="color: black;" *ngIf="notification.msgType==3">{{\'ADDED_ME_AS_FRIEND\' | translate}}</font>\n              <font style="color: black;" *ngIf="notification.msgType==4">{{\'COMMENTED_ON_MY_POSTING\' | translate}}</font>\n      \n            </p>\n          </div>\n          <ion-note class="item-time" item-right>\n            <div>\n              {{notification.date}}\n            </div>\n            <div>\n              <button icon-only ion-button clear small class="del-button">\n                <ion-icon name=\'close\' color="dark"></ion-icon>\n              </button>\n            </div>\n          </ion-note>\n        </ion-item>\n\n    </div>\n    <div *ngSwitchCase="\'carephoto\'" class="grid-view">\n      <ion-item  *ngFor="let post of profile.posts">\n        <ion-row wrap class="grid-row">\n          <preload-image [ratio]="{w:1, h:1}" [src]="post.image" title="ion2FullApp"></preload-image>\n        </ion-row>\n        <ion-row>\n          <ion-col width-75>\n            <a (click)="toProfile()">\n              model\n            </a>\n          </ion-col>\n          <ion-col width-25>\n            <p>{{post1.date}}</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p>{{post1.address}}</p>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row no-padding class="actions-row">\n          <ion-col no-padding width-30 text-left>\n            <button class="action-button" ion-button clear small icon-left (click)="likePoast(post)">\n              <ion-icon isActive="{{post.liked}}" name=\'heart\' color="danger" *ngIf="post1.meLikes"></ion-icon>\n              <ion-icon isActive="{{post.liked}}" name=\'heart\' color="dark" *ngIf="!post1.meLikes"></ion-icon>\n              {{post1.likesCount}} {{\'LIKES\' | translate}}\n            </button>\n          </ion-col>\n          <ion-col no-padding width-45 text-center>\n            <button class="action-button" ion-button clear small icon-left (click)="commentPost(post)">\n              <ion-icon name=\'chatbubbles\' color="danger"></ion-icon>\n              {{post1.commentsCount}} {{\'COMMENTS\' | translate}}\n            </button>\n          </ion-col>\n          <ion-col no-padding width-25 text-right>\n            <button class="action-button" ion-button clear small icon-left (click)="sharePost(post)">\n              <ion-icon name=\'share-alt\'></ion-icon>\n              {{\'SHARE\' | translate}}\n            </button>\n          </ion-col>\n        </ion-row>\n        \n        <ion-row>\n          <ion-col>\n            <p>\n              {{post1.comments[0].name}} {{\': \'}} {{post1.comments[0].comment}}\n            </p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p>\n              {{post1.comments[1].name}} {{\': \'}} {{post1.comments[1].comment}}\n            </p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p>\n              {{post1.comments[2].name}} {{\': \'}} {{post1.comments[2].comment}}\n            </p>\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/profile/profile.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__profile_service__["a" /* ProfileService */],
        __WEBPACK_IMPORTED_MODULE_12__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_11__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_social_sharing__["a" /* SocialSharing */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_clipboard__["a" /* Clipboard */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloadImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreloadImage = (function () {
    function PreloadImage(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._src = '';
        this._img = new Image();
    }
    Object.defineProperty(PreloadImage.prototype, "src", {
        set: function (val) {
            this._src = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(val) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreloadImage.prototype, "ratio", {
        set: function (ratio) {
            this._ratio = ratio || null;
        },
        enumerable: true,
        configurable: true
    });
    PreloadImage.prototype.ngOnChanges = function (changes) {
        var ratio_height = (this._ratio.h / this._ratio.w * 100) + "%";
        // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'padding-bottom', ratio_height);
        this._update();
        // console.log("CHANGES preload-image", this._src);
        // console.log(changes['src'].isFirstChange());
    };
    PreloadImage.prototype._update = function () {
        var _this = this;
        if (Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(this.alt)) {
            this._img.alt = this.alt;
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(this.title)) {
            this._img.title = this.title;
        }
        this._img.addEventListener('load', function () {
            _this._elementRef.nativeElement.appendChild(_this._img);
            _this._loaded(true);
        });
        this._img.src = this._src;
        this._loaded(false);
    };
    PreloadImage.prototype._loaded = function (isLoaded) {
        this._elementRef.nativeElement.classList[isLoaded ? 'add' : 'remove']('img-loaded');
    };
    return PreloadImage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PreloadImage.prototype, "alt", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PreloadImage.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], PreloadImage.prototype, "src", null);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], PreloadImage.prototype, "ratio", null);
PreloadImage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'preload-image',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/components/preload-image/preload-image.html"*/'<ion-spinner name="bubbles"></ion-spinner>\n<ng-content></ng-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/components/preload-image/preload-image.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], PreloadImage);

//# sourceMappingURL=preload-image.js.map

/***/ }),

/***/ 691:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackgroundImage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__ = __webpack_require__(2);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackgroundImage = (function () {
    function BackgroundImage(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._src = '';
    }
    Object.defineProperty(BackgroundImage.prototype, "src", {
        set: function (val) {
            this._src = Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular_util_util__["l" /* isPresent */])(val) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    BackgroundImage.prototype.ngOnChanges = function (changes) {
        this._update();
        // console.log("CHANGES background-image", this._src);
        // console.log(changes['src'].isFirstChange());
    };
    BackgroundImage.prototype._update = function () {
        var _this = this;
        var img = new Image();
        img.addEventListener('load', function () {
            _this._elementRef.nativeElement.style.backgroundImage = 'url(' + _this._src + ')';
            _this._loaded(true);
        });
        img.src = this._src;
        this._loaded(false);
    };
    BackgroundImage.prototype._loaded = function (isLoaded) {
        this._elementRef.nativeElement.classList[isLoaded ? 'add' : 'remove']('img-loaded');
    };
    return BackgroundImage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], BackgroundImage.prototype, "class", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], BackgroundImage.prototype, "src", null);
BackgroundImage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'background-image',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/components/background-image/background-image.html"*/'<span class="bg-overlay"></span>\n<ion-spinner name="bubbles"></ion-spinner>\n<ng-content></ng-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/components/background-image/background-image.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], BackgroundImage);

//# sourceMappingURL=background-image.js.map

/***/ }),

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowHideContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__show_hide_input__ = __webpack_require__(360);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowHideContainer = (function () {
    function ShowHideContainer() {
        this.show = false;
    }
    ShowHideContainer.prototype.toggleShow = function () {
        this.show = !this.show;
        if (this.show) {
            this.input.changeType("text");
        }
        else {
            this.input.changeType("password");
        }
    };
    return ShowHideContainer;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])(__WEBPACK_IMPORTED_MODULE_1__show_hide_input__["a" /* ShowHideInput */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__show_hide_input__["a" /* ShowHideInput */])
], ShowHideContainer.prototype, "input", void 0);
ShowHideContainer = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'show-hide-container',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/components/show-hide-password/show-hide-password.html"*/'<ng-content></ng-content>\n<a class="type-toggle" (click)="toggleShow()">\n	<ion-icon class="show-option" [hidden]="show" name="eye"></ion-icon>\n	<ion-icon class="hide-option" [hidden]="!show" name="eye-off"></ion-icon>\n</a>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/components/show-hide-password/show-hide-password.html"*/,
        host: {
            'class': 'show-hide-password'
        }
    }),
    __metadata("design:paramtypes", [])
], ShowHideContainer);

//# sourceMappingURL=show-hide-container.js.map

/***/ }),

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorRadio; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorRadio = (function () {
    function ColorRadio(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ColorRadio.prototype.setColor = function (color) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
        this.renderer.setElementStyle(this.el.nativeElement, 'borderColor', color);
    };
    ColorRadio.prototype.ngOnInit = function () {
        console.log(this.color);
        this.setColor(this.color);
    };
    return ColorRadio;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('color-radio'),
    __metadata("design:type", String)
], ColorRadio.prototype, "color", void 0);
ColorRadio = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[color-radio]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
], ColorRadio);

//# sourceMappingURL=color-radio.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RATING_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var noop = function () { };
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return Rating; }),
    multi: true
};
var Rating = (function () {
    function Rating() {
        this.max = 5;
        this.readOnly = false;
        this.propagateChange = noop;
    }
    Rating.prototype.ngOnInit = function () {
        var states = [];
        for (var i = 0; i < this.max; i++) {
            if (this.innerValue > i && this.innerValue < i + 1) {
                states[i] = 2;
            }
            else if (this.innerValue > i) {
                states[i] = 1;
            }
            else {
                states[i] = 0;
            }
        }
        this.range = states;
    };
    Object.defineProperty(Rating.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (val) {
            if (val !== this.innerValue) {
                this.innerValue = val;
                this.propagateChange(val);
            }
        },
        enumerable: true,
        configurable: true
    });
    Rating.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    Rating.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    Rating.prototype.registerOnTouched = function () { };
    Rating.prototype.rate = function (amount) {
        if (!this.readOnly && amount >= 0 && amount <= this.range.length) {
            this.value = amount;
        }
    };
    return Rating;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], Rating.prototype, "max", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('read-only'),
    __metadata("design:type", Object)
], Rating.prototype, "readOnly", void 0);
Rating = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'rating',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/components/rating/rating.html"*/'<button class="rating-icon" ion-button icon-only round *ngFor="let r of range; let i = index" (click)="rate(i + 1)">\n	<ion-icon [name]="value === undefined ? (r === 1 ? \'star\' : (r === 2 ? \'star-half\' : \'star-outline\')) : (value > i ? (value < i+1 ? \'star-half\' : \'star\') : \'star-outline\')"></ion-icon>\n</button>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/components/rating/rating.html"*/,
        providers: [RATING_CONTROL_VALUE_ACCESSOR]
    })
], Rating);

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoPlayerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_videogular2_core__ = __webpack_require__(696);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_videogular2_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_videogular2_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_videogular2_controls__ = __webpack_require__(698);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_videogular2_controls___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_videogular2_controls__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_videogular2_overlay_play__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_videogular2_overlay_play___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_videogular2_overlay_play__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_videogular2_buffering__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_videogular2_buffering___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_videogular2_buffering__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Video stuff




var VideoPlayerModule = (function () {
    function VideoPlayerModule() {
    }
    return VideoPlayerModule;
}());
VideoPlayerModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_1_videogular2_core__["VgCoreModule"],
            __WEBPACK_IMPORTED_MODULE_2_videogular2_controls__["VgControlsModule"],
            __WEBPACK_IMPORTED_MODULE_3_videogular2_overlay_play__["VgOverlayPlayModule"],
            __WEBPACK_IMPORTED_MODULE_4_videogular2_buffering__["VgBufferingModule"]
        ]
    })
], VideoPlayerModule);

//# sourceMappingURL=video-player.module.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidatorsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_text_mask__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_text_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ValidatorsModule = (function () {
    function ValidatorsModule() {
    }
    return ValidatorsModule;
}());
ValidatorsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        exports: [
            __WEBPACK_IMPORTED_MODULE_1_angular2_text_mask__["TextMaskModule"]
        ]
    })
], ValidatorsModule);

//# sourceMappingURL=validators.module.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacebookLoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FacebookLoginService = (function () {
    function FacebookLoginService(http, nativeStorage, fb) {
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.fb = fb;
        this.FB_APP_ID = 826720427470540;
        this.fb.browserInit(this.FB_APP_ID, "v2.8");
    }
    FacebookLoginService.prototype.doFacebookLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //["public_profile"] is the array of permissions, you can add more if you need
            _this.fb.login(["public_profile"]).then(function (response) {
                //Getting name and gender properties
                _this.fb.api("/me?fields=name,gender", [])
                    .then(function (user) {
                    //now we have the users info, let's save it in the NativeStorage
                    _this.setFacebookUser(user)
                        .then(function (res) {
                        resolve(res);
                    });
                });
            }, function (err) {
                reject(err);
            });
        });
    };
    FacebookLoginService.prototype.doFacebookLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.fb.logout()
                .then(function (res) {
                //user logged out so we will remove him from the NativeStorage
                _this.nativeStorage.remove('facebook_user');
                resolve();
            }, function (err) {
                reject();
            });
        });
    };
    FacebookLoginService.prototype.getFacebookUser = function () {
        return this.nativeStorage.getItem('facebook_user');
    };
    FacebookLoginService.prototype.setFacebookUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getFriendsFakeData()
                .then(function (data) {
                resolve(_this.nativeStorage.setItem('facebook_user', {
                    userId: user.id,
                    name: user.name,
                    gender: user.gender,
                    image: "https://graph.facebook.com/" + user.id + "/picture?type=large",
                    friends: data.friends,
                    photos: data.photos
                }));
            });
        });
    };
    FacebookLoginService.prototype.getFriendsFakeData = function () {
        return this.http.get('./assets/example_data/social_integrations.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    FacebookLoginService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return FacebookLoginService;
}());
FacebookLoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */]])
], FacebookLoginService);

//# sourceMappingURL=facebook-login.service.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleLoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__ = __webpack_require__(59);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GoogleLoginService = (function () {
    function GoogleLoginService(http, nativeStorage, googlePlus) {
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.googlePlus = googlePlus;
        this.webClientId = "1092390853283-i98feg7fb1dlsm92kkcbim62855pepi8.apps.googleusercontent.com";
    }
    GoogleLoginService.prototype.trySilentLogin = function () {
        var _this = this;
        //checks if user is already signed in to the app and sign them in silently if they are.
        return new Promise(function (resolve, reject) {
            _this.googlePlus.trySilentLogin({
                'scopes': '',
                'webClientId': _this.webClientId,
                'offline': true
            })
                .then(function (user) {
                _this.setGoogleUser(user)
                    .then(function (res) {
                    resolve(res);
                });
            }, function (error) {
                reject(error);
            });
        });
    };
    GoogleLoginService.prototype.doGoogleLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.googlePlus.login({
                'scopes': '',
                'webClientId': _this.webClientId,
                'offline': true
            })
                .then(function (user) {
                _this.setGoogleUser(user)
                    .then(function (res) {
                    resolve(res);
                });
            }, function (error) {
                reject(error);
            });
        });
    };
    GoogleLoginService.prototype.doGoogleLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.googlePlus.logout()
                .then(function (response) {
                //user logged out so we will remove him from the NativeStorage
                _this.nativeStorage.remove('google_user');
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    GoogleLoginService.prototype.getGoogleUser = function () {
        return this.nativeStorage.getItem('google_user');
    };
    GoogleLoginService.prototype.setGoogleUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getFriendsFakeData()
                .then(function (data) {
                resolve(_this.nativeStorage.setItem('google_user', {
                    userId: user.userId,
                    name: user.displayName,
                    email: user.email,
                    image: user.imageUrl,
                    friends: data.friends,
                    photos: data.photos
                }));
            });
        });
    };
    GoogleLoginService.prototype.getFriendsFakeData = function () {
        return this.http.get('./assets/example_data/social_integrations.json')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    GoogleLoginService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return GoogleLoginService;
}());
GoogleLoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */]])
], GoogleLoginService);

//# sourceMappingURL=google-login.service.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwitterLoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_twitter_connect__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TwitterLoginService = (function () {
    function TwitterLoginService(http, nativeStorage, twitter) {
        this.http = http;
        this.nativeStorage = nativeStorage;
        this.twitter = twitter;
    }
    TwitterLoginService.prototype.doTwitterLogin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.twitter.login().then(function (resp) {
                //Getting user data
                _this.twitter.showUser().then(function (user) {
                    //now we have the users info, let's save it in the NativeStorage
                    _this.setTwitterUser(user).then(function (res) {
                        resolve(res);
                    });
                });
            }, function (error) {
                reject(error);
            });
        });
    };
    TwitterLoginService.prototype.doTwitterLogout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.twitter.logout().then(function (res) {
                //user logged out so we will remove him from the NativeStorage
                _this.nativeStorage.remove('twitter_user');
                resolve();
            }, function (error) {
                reject(error);
            });
        });
    };
    TwitterLoginService.prototype.getTwitterUser = function () {
        return this.nativeStorage.getItem('twitter_user');
    };
    TwitterLoginService.prototype.setTwitterUser = function (user) {
        var _this = this;
        console.log(user);
        return new Promise(function (resolve, reject) {
            resolve(_this.nativeStorage.setItem('twitter_user', {
                name: user.name,
                image: (user.profile_image_url).replace("_normal", ""),
                userId: user.id_str,
                following: user.friends_count,
                followers: user.followers_count,
                location: user.location,
                description: user.description,
                screenName: user.screen_name
            }));
        });
    };
    TwitterLoginService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return TwitterLoginService;
}());
TwitterLoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_twitter_connect__["a" /* TwitterConnect */]])
], TwitterLoginService);

//# sourceMappingURL=twitter-login.service.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__terms_of_service_terms_of_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__walkthrough_walkthrough__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_model__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_service__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_language_language_service__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_rate__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_image_picker__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_crop__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var SettingsPage = (function () {
    function SettingsPage(nav, modal, loadingCtrl, translate, languageService, profileService, appRate, imagePicker, cropService, platform) {
        this.nav = nav;
        this.modal = modal;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.languageService = languageService;
        this.profileService = profileService;
        this.appRate = appRate;
        this.imagePicker = imagePicker;
        this.cropService = cropService;
        this.platform = platform;
        // make WalkthroughPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__walkthrough_walkthrough__["a" /* WalkthroughPage */];
        this.profile = new __WEBPACK_IMPORTED_MODULE_7__profile_profile_model__["a" /* ProfileModel */]();
        this.loading = this.loadingCtrl.create();
        this.languages = this.languageService.getLanguages();
        this.settingsForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            image: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            nickname: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            phone: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            sex: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            facebook: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            instagram: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            blog: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            website: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](),
            twitter: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]()
        });
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.loading.present();
        this.profileService.getData().then(function (data) {
            _this.profile.user = data.user;
            // setValue: With setValue, you assign every form control value at once by passing in a data object whose properties exactly match the form model behind the FormGroup.
            // patchValue: With patchValue, you can assign values to specific controls in a FormGroup by supplying an object of key/value pairs for just the controls of interest.
            // More info: https://angular.io/docs/ts/latest/guide/reactive-forms.html#!#populate-the-form-model-with-_setvalue_-and-_patchvalue_
            _this.settingsForm.patchValue({
                image: data.user.image,
                nickname: data.user.nickname,
                phone: data.user.phone,
                sex: data.user.sex,
                facebook: data.user.facebook,
                instagram: data.user.instagram,
                blog: data.user.blog,
                website: data.user.website,
                twitter: data.user.twitter
            });
            _this.loading.dismiss();
            _this.settingsForm.get('language').valueChanges.subscribe(function (lang) {
                _this.setLanguage(lang);
            });
        });
    };
    SettingsPage.prototype.logout = function () {
        // navigate to the new page if it is not the current page
        this.nav.setRoot(this.rootPage);
    };
    SettingsPage.prototype.showTermsModal = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_3__terms_of_service_terms_of_service__["a" /* TermsOfServicePage */]);
        modal.present();
    };
    SettingsPage.prototype.showPrivacyModal = function () {
        var modal = this.modal.create(__WEBPACK_IMPORTED_MODULE_4__privacy_policy_privacy_policy__["a" /* PrivacyPolicyPage */]);
        modal.present();
    };
    SettingsPage.prototype.setLanguage = function (lang) {
        var language_to_set = this.translate.getDefaultLang();
        if (lang) {
            language_to_set = lang.code;
        }
        this.translate.setDefaultLang(language_to_set);
        this.translate.use(language_to_set);
    };
    SettingsPage.prototype.rateApp = function () {
        this.appRate.preferences.storeAppURL = {
            ios: '<my_app_id>',
            android: 'market://details?id=<package_name>',
            windows: 'ms-windows-store://review/?ProductId=<Store_ID>'
        };
        this.appRate.promptForRating(true);
    };
    SettingsPage.prototype.openImagePicker = function () {
        var _this = this;
        this.imagePicker.hasReadPermission().then(function (result) {
            if (result == false) {
                // no callbacks required as this opens a popup which returns async
                _this.imagePicker.requestReadPermission();
            }
            else if (result == true) {
                _this.imagePicker.getPictures({ maximumImagesCount: 1 }).then(function (results) {
                    for (var i = 0; i < results.length; i++) {
                        _this.cropService.crop(results[i], { quality: 75 }).then(function (newImage) {
                            _this.profileService.setUserImage(newImage);
                            _this.profile.user.image = newImage;
                        }, function (error) { return console.error("Error cropping image", error); });
                    }
                }, function (err) { return console.log(err); });
            }
        });
    };
    SettingsPage.prototype.onBack = function () {
        this.nav.pop();
    };
    SettingsPage.prototype.onSave = function () {
        this.nav.pop();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'settings-page',template:/*ion-inline-start:"/Volumes/WORK/SourceTree/Vgram/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar hideBackButton>\n    <div style="display: flex; align-items: center;">\n      <span>\n        <a (click)="onBack()">\n          <img src="../../assets/images/settings/cancel.png" />\n        </a>\n      </span>\n      <span style="flex: 1; text-align: center; color: white;">\n        {{\'SETTING\' | translate}}\n      </span>\n      <span>\n        <a (click)="onSave()">\n          <img src="../../assets/images/settings/save.png" />\n        </a>\n      </span>\n    </div>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="settings-content">\n  <div class="user-image-content">\n    <ion-row no-padding class="user-image-row">\n      <ion-col no-padding width-40>\n        <preload-image class="user-image" [ratio]="{w:1, h:1}" [src]="profile.user.image" alt="this is the image" title="IMAGE!"></preload-image>\n      </ion-col>\n    </ion-row>\n    <ion-row no-padding class="user-image-row">\n      <ion-col no-padding width-60>\n        <button class="image-action-button" ion-button outline block small (click)="openImagePicker()">{{ \'CHANGE_PROFILE_PICTURE\' | translate}}</button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <form [formGroup]="settingsForm" class="settings-form">\n    <ion-list class="user-data-content">\n      <ion-item>\n        <ion-label stacked>{{ \'NICKNAME\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="nickname"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>{{ \'PHONE_NUMBER\' | translate }}</ion-label>\n        <ion-input type="text" formControlName="phone"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label>{{ \'SEX\' | translate }}</ion-label>\n        <ion-select formControlName="sex">\n          <ion-option value="male">{{ \'SEX_MALE\' | translate }}</ion-option>\n          <ion-option value="female">{{ \'SEX_FEMALE\' | translate }}</ion-option>\n          <ion-option value="non">{{ \'SEX_NOT_SEL\' | translate }}</ion-option>\n        </ion-select>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>WEBSITE</ion-label>\n        <ion-textarea formControlName="website"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>FACEBOOK</ion-label>\n        <ion-textarea formControlName="facebook"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>INSTAGRAM</ion-label>\n        <ion-textarea formControlName="instagram"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>BLOG</ion-label>\n        <ion-textarea formControlName="blog"></ion-textarea>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>TWITTER</ion-label>\n        <ion-textarea formControlName="twitter"></ion-textarea>\n      </ion-item>\n    </ion-list>\n  </form>\n\n  <button class="alt-button logout-button" ion-button full icon-left (click)="logout()">\n    <ion-icon name="log-out"></ion-icon>\n    {{\'LOG_OUT\' | translate }}\n  </button>\n</ion-content>\n'/*ion-inline-end:"/Volumes/WORK/SourceTree/Vgram/src/pages/settings/settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_10__providers_language_language_service__["a" /* LanguageService */],
        __WEBPACK_IMPORTED_MODULE_8__profile_profile_service__["a" /* ProfileService */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_app_rate__["a" /* AppRate */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_image_picker__["a" /* ImagePicker */],
        __WEBPACK_IMPORTED_MODULE_13__ionic_native_crop__["a" /* Crop */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Platform */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ })

},[364]);
//# sourceMappingURL=main.js.map