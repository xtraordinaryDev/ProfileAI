"use strict";
(self["webpackChunkprofile_ai"] = self["webpackChunkprofile_ai"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



class AppComponent {
  constructor() {
    this.title = 'ProFile AI';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 0,
      consts: [[1, "app-container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      styles: [".app-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: linear-gradient(135deg, #E0E0E0 0%, #F5F5F5 50%, #E0E0E0 100%);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNFLGlCQUFBO0VBQ0EsMEVBQUE7QUFBTiIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIC5hcHAtY29udGFpbmVyIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI0UwRTBFMCAwJSwgI0Y1RjVGNSA1MCUsICNFMEUwRTAgMTAwJSk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2181:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routes: () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/login/login.component */ 205);
/* harmony import */ var _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/chat/chat.component */ 191);
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/profile/profile.component */ 1245);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);




const routes = [{
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
}, {
  path: 'login',
  component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'chat',
  component: _components_chat_chat_component__WEBPACK_IMPORTED_MODULE_1__.ChatComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard]
}, {
  path: 'profile',
  component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard]
}, {
  path: '**',
  redirectTo: '/login'
}];

/***/ }),

/***/ 191:
/*!***************************************************!*\
  !*** ./src/app/components/chat/chat.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatComponent: () => (/* binding */ ChatComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/chat.service */ 856);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);








const _c0 = ["messagesContainer"];
const _c1 = ["messageInput"];
function ChatComponent_div_17_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "AI");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ChatComponent_div_17_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "U");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function ChatComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ChatComponent_div_17_div_1_Template, 3, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 26)(3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ChatComponent_div_17_div_8_Template, 3, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("user-message", message_r2.isUser)("ai-message", !message_r2.isUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !message_r2.isUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](message_r2.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 8, message_r2.timestamp, "short"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", message_r2.isUser);
  }
}
function ChatComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32)(1, "div", 29)(2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "AI");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 26)(5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span")(7, "span")(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
class ChatComponent {
  constructor(chatService, authService, router) {
    this.chatService = chatService;
    this.authService = authService;
    this.router = router;
    this.messages = [];
    this.messageText = '';
    this.isTyping = false;
  }
  ngOnInit() {
    this.messagesSubscription = this.chatService.messages$.subscribe(messages => {
      this.messages = messages;
      setTimeout(() => this.scrollToBottom(), 100);
    });
  }
  ngOnDestroy() {
    if (this.messagesSubscription) {
      this.messagesSubscription.unsubscribe();
    }
  }
  sendMessage() {
    if (this.messageText.trim() && !this.isTyping) {
      const message = this.messageText.trim();
      this.messageText = '';
      this.adjustTextareaHeight();
      this.chatService.sendMessage(message);
      this.isTyping = true;
      // Stop typing indicator after a delay
      setTimeout(() => {
        this.isTyping = false;
      }, 2000);
    }
  }
  onEnterKey(event) {
    const keyboardEvent = event;
    if (keyboardEvent.key === 'Enter' && !keyboardEvent.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
  adjustTextareaHeight() {
    if (this.messageInput?.nativeElement) {
      const textarea = this.messageInput.nativeElement;
      textarea.style.height = 'auto';
      textarea.style.height = Math.min(textarea.scrollHeight, 120) + 'px';
    }
  }
  scrollToBottom() {
    if (this.messagesContainer) {
      const element = this.messagesContainer.nativeElement;
      element.scrollTop = element.scrollHeight;
    }
  }
  goToProfile() {
    this.router.navigate(['/profile']);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  static {
    this.ɵfac = function ChatComponent_Factory(t) {
      return new (t || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_0__.ChatService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ChatComponent,
      selectors: [["app-chat"]],
      viewQuery: function ChatComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.messagesContainer = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.messageInput = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 29,
      vars: 4,
      consts: [["messagesContainer", ""], ["messageForm", "ngForm"], ["messageInput", ""], [1, "chat-container"], [1, "chat-header"], [1, "header-left"], [1, "logo"], ["src", "assets/images/ProfileAILogoTransparent.png", "alt", "ProFile AI", 1, "logo-image"], [1, "logo-text"], [1, "ai"], [1, "header-right"], [1, "btn", "btn-secondary", 3, "click"], [1, "chat-area"], [1, "messages-container"], ["class", "message", 3, "user-message", "ai-message", 4, "ngFor", "ngForOf"], ["class", "message ai-message typing", 4, "ngIf"], [1, "input-area"], [3, "ngSubmit"], [1, "input-container"], ["name", "messageText", "placeholder", "Ask me anything about building your profile...", "rows", "1", 3, "ngModelChange", "keydown.enter", "input", "ngModel"], ["type", "submit", 1, "send-button", 3, "disabled"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none"], ["d", "M22 2L11 13", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M22 2L15 22L11 13L2 9L22 2Z", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "message"], ["class", "message-avatar", 4, "ngIf"], [1, "message-content"], [1, "message-text"], [1, "message-time"], [1, "message-avatar"], [1, "avatar-icon"], [1, "avatar-icon", "user"], [1, "message", "ai-message", "typing"], [1, "typing-indicator"]],
      template: function ChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3)(1, "header", 4)(2, "div", 5)(3, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " ProFile");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "AI");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 10)(10, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.goToProfile());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " View Profile ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.logout());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Logout ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 12)(15, "div", 13, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, ChatComponent_div_17_Template, 9, 11, "div", 14)(18, ChatComponent_div_18_Template, 9, 0, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 16)(20, "form", 17, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ChatComponent_Template_form_ngSubmit_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.sendMessage());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 18)(23, "textarea", 19, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ChatComponent_Template_textarea_ngModelChange_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.messageText, $event) || (ctx.messageText = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.enter", function ChatComponent_Template_textarea_keydown_enter_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.onEnterKey($event));
          })("input", function ChatComponent_Template_textarea_input_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.adjustTextareaHeight());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "svg", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "path", 22)(28, "path", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.messages);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isTyping);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.messageText);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.messageText.trim() || ctx.isTyping);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
      styles: [".chat-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: white;\n}\n\n.chat-header[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 1px solid var(--border-light);\n  padding: 16px 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 10px rgba(26, 58, 107, 0.05);\n}\n\n.header-left[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.logo-image[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n  filter: drop-shadow(0 2px 4px rgba(26, 58, 107, 0.2));\n  transition: transform 0.3s ease;\n}\n\n.logo-image[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--primary-dark);\n}\n\n.logo-text[_ngcontent-%COMP%]   .ai[_ngcontent-%COMP%] {\n  color: var(--primary-bright);\n  margin-left: 4px;\n}\n\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 14px;\n  text-decoration: none;\n  display: inline-block;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--primary-dark);\n  border: 1px solid var(--primary-dark);\n}\n\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  color: white;\n}\n\n.chat-area[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.messages-container[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.message[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  max-width: 80%;\n}\n\n.user-message[_ngcontent-%COMP%] {\n  align-self: flex-end;\n  flex-direction: row-reverse;\n}\n\n.ai-message[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n\n.message-avatar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n\n.avatar-icon[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  font-size: 12px;\n}\n\n.ai-message[_ngcontent-%COMP%]   .avatar-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-bright) 100%);\n  color: white;\n}\n\n.user-message[_ngcontent-%COMP%]   .avatar-icon[_ngcontent-%COMP%] {\n  background: var(--primary-bright);\n  color: white;\n}\n\n.message-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.message-text[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  padding: 12px 16px;\n  border-radius: 18px;\n  font-size: 14px;\n  line-height: 1.4;\n  word-wrap: break-word;\n}\n\n.user-message[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%] {\n  background: var(--primary-bright);\n  color: white;\n}\n\n.message-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: var(--text-light);\n  margin-top: 4px;\n  text-align: right;\n}\n\n.user-message[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.typing-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n  padding: 12px 16px;\n}\n\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: var(--primary-bright);\n  animation: _ngcontent-%COMP%_typing 1.4s infinite ease-in-out;\n}\n\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n\n.typing-indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n\n@keyframes _ngcontent-%COMP%_typing {\n  0%, 60%, 100% {\n    transform: translateY(0);\n    opacity: 0.4;\n  }\n  30% {\n    transform: translateY(-10px);\n    opacity: 1;\n  }\n}\n.input-area[_ngcontent-%COMP%] {\n  background: white;\n  border-top: 1px solid var(--border-light);\n  padding: 16px 24px;\n}\n\n.input-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n  background: #f8f9fa;\n  border-radius: 24px;\n  padding: 8px 16px;\n  border: 2px solid transparent;\n  transition: border-color 0.3s ease;\n}\n\n.input-container[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--primary-bright);\n}\n\n.input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  resize: none;\n  font-family: inherit;\n  font-size: 14px;\n  line-height: 1.4;\n  max-height: 120px;\n  min-height: 20px;\n}\n\n.input-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-light);\n}\n\n.send-button[_ngcontent-%COMP%] {\n  background: var(--primary-bright);\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  flex-shrink: 0;\n}\n\n.send-button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--primary-dark);\n  transform: scale(1.05);\n}\n\n.send-button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n@media (max-width: 768px) {\n  .chat-header[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .header-right[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 12px;\n  }\n  .messages-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .message[_ngcontent-%COMP%] {\n    max-width: 90%;\n  }\n  .input-area[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxREFBQTtFQUNBLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQ0FBQTtBQUNGOztBQUVBO0VBQ0UsK0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLHVGQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxPQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUNBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQ0FBQTtBQUNGOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdCQUFBO0lBQ0EsWUFBQTtFQUNGO0VBQ0E7SUFDRSw0QkFBQTtJQUNBLFVBQUE7RUFDRjtBQUNGO0FBRUE7RUFDRSxpQkFBQTtFQUNBLHlDQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtDQUFBO0FBQUY7O0FBR0E7RUFDRSxtQ0FBQTtBQUFGOztBQUdBO0VBQ0UsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSx3QkFBQTtBQUFGOztBQUdBO0VBQ0UsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLCtCQUFBO0VBQ0Esc0JBQUE7QUFBRjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0U7SUFDRSxrQkFBQTtFQUFGO0VBR0E7SUFDRSxRQUFBO0VBREY7RUFJQTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtFQUZGO0VBS0E7SUFDRSxhQUFBO0VBSEY7RUFNQTtJQUNFLGNBQUE7RUFKRjtFQU9BO0lBQ0Usa0JBQUE7RUFMRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG5cclxuLmNoYXQtaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcclxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMjYsIDU4LCAxMDcsIDAuMDUpO1xyXG59XHJcblxyXG4uaGVhZGVyLWxlZnQgLmxvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDEycHg7XHJcbn1cclxuXHJcbi5sb2dvLWltYWdlIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMnB4IDRweCByZ2JhKDI2LCA1OCwgMTA3LCAwLjIpKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlO1xyXG59XHJcblxyXG4ubG9nby1pbWFnZTpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG5cclxuLmxvZ28tdGV4dCB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XHJcbn1cclxuXHJcbi5sb2dvLXRleHQgLmFpIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1icmlnaHQpO1xyXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItcmlnaHQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAxMnB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBwYWRkaW5nOiA4cHggMTZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5idG4tc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWRhcmspO1xyXG59XHJcblxyXG4uYnRuLXNlY29uZGFyeTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1kYXJrKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jaGF0LWFyZWEge1xyXG4gIGZsZXg6IDE7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tZXNzYWdlcy1jb250YWluZXIge1xyXG4gIGZsZXg6IDE7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMTJweDtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLnVzZXItbWVzc2FnZSB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG59XHJcblxyXG4uYWktbWVzc2FnZSB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG5cclxuLm1lc3NhZ2UtYXZhdGFyIHtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmF2YXRhci1pY29uIHtcclxuICB3aWR0aDogMzJweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmFpLW1lc3NhZ2UgLmF2YXRhci1pY29uIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWRhcmspIDAlLCB2YXIoLS1wcmltYXJ5LWJyaWdodCkgMTAwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udXNlci1tZXNzYWdlIC5hdmF0YXItaWNvbiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1icmlnaHQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1lc3NhZ2UtY29udGVudCB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLm1lc3NhZ2UtdGV4dCB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcbi51c2VyLW1lc3NhZ2UgLm1lc3NhZ2UtdGV4dCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1icmlnaHQpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1lc3NhZ2UtdGltZSB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi51c2VyLW1lc3NhZ2UgLm1lc3NhZ2UtdGltZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLnR5cGluZy1pbmRpY2F0b3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA0cHg7XHJcbiAgcGFkZGluZzogMTJweCAxNnB4O1xyXG59XHJcblxyXG4udHlwaW5nLWluZGljYXRvciBzcGFuIHtcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWJyaWdodCk7XHJcbiAgYW5pbWF0aW9uOiB0eXBpbmcgMS40cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnR5cGluZy1pbmRpY2F0b3Igc3BhbjpudGgtY2hpbGQoMikge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC4ycztcclxufVxyXG5cclxuLnR5cGluZy1pbmRpY2F0b3Igc3BhbjpudGgtY2hpbGQoMykge1xyXG4gIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxufVxyXG5cclxuQGtleWZyYW1lcyB0eXBpbmcge1xyXG4gIDAlLCA2MCUsIDEwMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgb3BhY2l0eTogMC40O1xyXG4gIH1cclxuICAzMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4uaW5wdXQtYXJlYSB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XHJcbiAgcGFkZGluZzogMTZweCAyNHB4O1xyXG59XHJcblxyXG4uaW5wdXQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBnYXA6IDEycHg7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcclxuICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5pbnB1dC1jb250YWluZXI6Zm9jdXMtd2l0aGluIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktYnJpZ2h0KTtcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYSB7XHJcbiAgZmxleDogMTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICByZXNpemU6IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgbWF4LWhlaWdodDogMTIwcHg7XHJcbiAgbWluLWhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxufVxyXG5cclxuLnNlbmQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWJyaWdodCk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLnNlbmQtYnV0dG9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbi5zZW5kLWJ1dHRvbjpkaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC41O1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jaGF0LWhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItcmlnaHQge1xyXG4gICAgZ2FwOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4ge1xyXG4gICAgcGFkZGluZzogNnB4IDEycHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tZXNzYWdlcy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLm1lc3NhZ2Uge1xyXG4gICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnB1dC1hcmVhIHtcclxuICAgIHBhZGRpbmc6IDEycHggMTZweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 205:
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);







function LoginComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password must be at least 6 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Sign In");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function LoginComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Signing In...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class LoginComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.email = '';
    this.password = '';
    this.isLoading = false;
    this.showSignup = false;
  }
  onSubmit() {
    if (this.email && this.password) {
      this.isLoading = true;
      // Simulate API call delay
      setTimeout(() => {
        const success = this.authService.login(this.email, this.password);
        this.isLoading = false;
        if (success) {
          this.router.navigate(['/chat']);
        } else {
          alert('Invalid credentials. Please try again.');
        }
      }, 1500);
    }
  }
  demoLogin() {
    this.email = 'demo@profileai.com';
    this.password = 'demo123';
    this.onSubmit();
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 38,
      vars: 7,
      consts: [["loginForm", "ngForm"], ["emailInput", "ngModel"], ["passwordInput", "ngModel"], [1, "login-container"], [1, "login-card"], [1, "logo"], ["src", "assets/images/ProfileAILogoTransparent.png", "alt", "ProFile AI", 1, "logo-image"], [1, "logo-text"], [1, "ai"], [1, "subtitle"], [3, "ngSubmit"], [1, "input-group"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", "email", "", "placeholder", "Enter your email", 3, "ngModelChange", "ngModel"], ["class", "error-message", 4, "ngIf"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "required", "", "minlength", "6", "placeholder", "Enter your password", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "full-width", 3, "disabled"], [4, "ngIf"], [1, "divider"], [1, "btn", "btn-secondary", "full-width", 3, "click"], [1, "signup-link"], ["href", "#", 3, "click"], [1, "error-message"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3)(1, "div", 4)(2, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " ProFile");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "AI");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Welcome Back");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Sign in to continue building your AI-powered profile");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "form", 10, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 11)(15, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Email Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 13, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.email, $event) || (ctx.email = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LoginComponent_div_19_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 11)(21, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 16, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.password, $event) || (ctx.password = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, LoginComponent_div_25_Template, 2, 0, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, LoginComponent_span_27_Template, 2, 0, "span", 18)(28, LoginComponent_span_28_Template, 2, 0, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 19)(30, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "or");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.demoLogin());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Try Demo Account ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, " Don't have an account? ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "a", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_36_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            ctx.showSignup = true;
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event.preventDefault());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Sign up here");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          const loginForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);
          const emailInput_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
          const passwordInput_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", emailInput_r3.invalid && emailInput_r3.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.password);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", passwordInput_r4.invalid && passwordInput_r4.touched);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", loginForm_r2.invalid || ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
      styles: [".login-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n}\n\n.login-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 20px;\n  box-shadow: 0 20px 60px rgba(26, 58, 107, 0.15);\n  padding: 48px;\n  width: 100%;\n  max-width: 450px;\n  text-align: center;\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  margin-bottom: 32px;\n}\n\n.logo-image[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  object-fit: contain;\n  filter: drop-shadow(0 4px 8px rgba(26, 58, 107, 0.2));\n  transition: transform 0.3s ease;\n}\n\n.logo-image[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 600;\n  color: var(--primary-dark);\n}\n\n.logo-text[_ngcontent-%COMP%]   .ai[_ngcontent-%COMP%] {\n  color: var(--primary-bright);\n  margin-left: 8px;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  margin-bottom: 8px;\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  margin-bottom: 32px;\n  font-size: 16px;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-bottom: 24px;\n}\n\n.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: var(--text-dark);\n  font-size: 14px;\n}\n\n.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  border: 2px solid var(--border-light);\n  border-radius: 12px;\n  font-size: 16px;\n  transition: all 0.3s ease;\n  font-family: inherit;\n}\n\n.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-bright);\n  box-shadow: 0 0 0 3px rgba(0, 153, 255, 0.1);\n}\n\n.error-message[_ngcontent-%COMP%] {\n  color: #e74c3c;\n  font-size: 12px;\n  margin-top: 4px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 16px;\n  border: none;\n  border-radius: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 16px;\n  margin-bottom: 16px;\n}\n\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.divider[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: center;\n  margin: 24px 0;\n}\n\n.divider[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: var(--border-light);\n}\n\n.divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: white;\n  padding: 0 16px;\n  color: var(--text-light);\n  font-size: 14px;\n}\n\n.signup-link[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  font-size: 14px;\n  margin-top: 24px;\n}\n\n.signup-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary-bright);\n  text-decoration: none;\n  font-weight: 500;\n}\n\n.signup-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n\n@media (max-width: 480px) {\n  .login-card[_ngcontent-%COMP%] {\n    padding: 32px 24px;\n    margin: 16px;\n  }\n  .logo[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscURBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSw0Q0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0VBQ0Y7RUFFQTtJQUNFLHNCQUFBO0lBQ0EsU0FBQTtFQUFGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tY29udGFpbmVyIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLmxvZ2luLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggcmdiYSgyNiwgNTgsIDEwNywgMC4xNSk7XHJcbiAgcGFkZGluZzogNDhweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxufVxyXG5cclxuLmxvZ28taW1hZ2Uge1xyXG4gIHdpZHRoOiA1NnB4O1xyXG4gIGhlaWdodDogNTZweDtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCA0cHggOHB4IHJnYmEoMjYsIDU4LCAxMDcsIDAuMikpO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5sb2dvLWltYWdlOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcblxyXG4ubG9nby10ZXh0IHtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcclxufVxyXG5cclxuLmxvZ28tdGV4dCAuYWkge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJyaWdodCk7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxufVxyXG5cclxuaDIge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5pbnB1dC1ncm91cCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWRhcmspO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIGlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvcmRlci1saWdodCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwIGlucHV0OmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1icmlnaHQpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDE1MywgMjU1LCAwLjEpO1xyXG59XHJcblxyXG4uZXJyb3ItbWVzc2FnZSB7XHJcbiAgY29sb3I6ICNlNzRjM2M7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uYnRuOmRpc2FibGVkIHtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxufVxyXG5cclxuLmRpdmlkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAyNHB4IDA7XHJcbn1cclxuXHJcbi5kaXZpZGVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJvcmRlci1saWdodCk7XHJcbn1cclxuXHJcbi5kaXZpZGVyIHNwYW4ge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDAgMTZweDtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc2lnbnVwLWxpbmsge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG5cclxuLnNpZ251cC1saW5rIGEge1xyXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJyaWdodCk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zaWdudXAtbGluayBhOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgLmxvZ2luLWNhcmQge1xyXG4gICAgcGFkZGluZzogMzJweCAyNHB4O1xyXG4gICAgbWFyZ2luOiAxNnB4O1xyXG4gIH1cclxuICBcclxuICAubG9nbyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxMnB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 1245:
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileComponent: () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/profile.service */ 5251);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);








function ProfileComponent_span_51_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_span_51_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const skill_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.removeSkill(skill_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_span_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProfileComponent_span_51_button_2_Template, 2, 0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const skill_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", skill_r2, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.editMode);
  }
}
function ProfileComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38)(1, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ProfileComponent_div_52_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx_r2.newSkill, $event) || (ctx_r2.newSkill = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("keydown.enter", function ProfileComponent_div_52_Template_input_keydown_enter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.addSkill());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_div_52_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.addSkill());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.newSkill);
  }
}
function ProfileComponent_div_57_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_div_57_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.removeExperience(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40)(1, "div", 41)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ProfileComponent_div_57_button_10_Template, 2, 0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const exp_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](exp_r7.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](exp_r7.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](exp_r7.duration);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](exp_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.editMode);
  }
}
function ProfileComponent_button_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_button_58_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.addExperience());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Add Experience ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_63_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_div_63_button_8_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.removeEducation(i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ProfileComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 47)(1, "div", 48)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ProfileComponent_div_63_button_8_Template, 2, 0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const edu_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](edu_r11.degree);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](edu_r11.institution);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](edu_r11.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.editMode);
  }
}
function ProfileComponent_button_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_button_64_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.addEducation());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Add Education ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class ProfileComponent {
  constructor(profileService, authService, router) {
    this.profileService = profileService;
    this.authService = authService;
    this.router = router;
    this.profile = null;
    this.profileForm = {
      name: '',
      title: '',
      summary: '',
      skills: [],
      experience: [],
      education: []
    };
    this.editMode = false;
    this.newSkill = '';
  }
  ngOnInit() {
    this.profileSubscription = this.profileService.profile$.subscribe(profile => {
      this.profile = profile;
      if (profile) {
        this.profileForm = {
          ...profile
        };
      } else {
        // Initialize with user email if no profile exists
        const email = this.authService.getCurrentUser();
        this.profileForm = {
          name: '',
          title: '',
          summary: '',
          email: email || '',
          skills: [],
          experience: [],
          education: [],
          contact: {
            email: email || ''
          }
        };
      }
    });
  }
  ngOnDestroy() {
    if (this.profileSubscription) {
      this.profileSubscription.unsubscribe();
    }
  }
  getInitials() {
    if (this.profileForm.name) {
      return this.profileForm.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    }
    return 'U';
  }
  addSkill() {
    if (this.newSkill.trim() && !this.profileForm.skills?.includes(this.newSkill.trim())) {
      this.profileForm.skills = [...(this.profileForm.skills || []), this.newSkill.trim()];
      this.newSkill = '';
    }
  }
  removeSkill(skill) {
    this.profileForm.skills = this.profileForm.skills?.filter(s => s !== skill) || [];
  }
  addExperience() {
    const newExp = {
      id: Date.now().toString(),
      company: '',
      position: '',
      duration: '',
      description: ''
    };
    this.profileForm.experience = [...(this.profileForm.experience || []), newExp];
  }
  removeExperience(index) {
    this.profileForm.experience = this.profileForm.experience?.filter((_, i) => i !== index) || [];
  }
  addEducation() {
    const newEdu = {
      id: Date.now().toString(),
      institution: '',
      degree: '',
      year: ''
    };
    this.profileForm.education = [...(this.profileForm.education || []), newEdu];
  }
  removeEducation(index) {
    this.profileForm.education = this.profileForm.education?.filter((_, i) => i !== index) || [];
  }
  saveProfile() {
    if (this.profileForm) {
      this.profileService.updateProfile(this.profileForm);
      this.editMode = false;
    }
  }
  goToChat() {
    this.router.navigate(['/chat']);
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
  static {
    this.ɵfac = function ProfileComponent_Factory(t) {
      return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_profile_service__WEBPACK_IMPORTED_MODULE_0__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: ProfileComponent,
      selectors: [["app-profile"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵStandaloneFeature"]],
      decls: 65,
      vars: 17,
      consts: [[1, "profile-container"], [1, "profile-header"], [1, "header-left"], [1, "logo"], ["src", "assets/images/ProfileAILogoTransparent.png", "alt", "ProFile AI", 1, "logo-image"], [1, "logo-text"], [1, "ai"], [1, "header-right"], [1, "btn", "btn-secondary", 3, "click"], [1, "profile-content"], [1, "profile-sidebar"], [1, "profile-card"], [1, "profile-avatar"], [1, "avatar-icon"], [1, "profile-title"], [1, "profile-email"], [1, "profile-actions"], [1, "btn", "btn-primary", 3, "click"], [1, "profile-main"], [1, "card"], [1, "form-grid"], [1, "input-group"], ["placeholder", "Enter your full name", 3, "ngModelChange", "ngModel", "readonly"], ["placeholder", "e.g., Software Engineer, Marketing Manager", 3, "ngModelChange", "ngModel", "readonly"], [1, "input-group", "full-width"], ["rows", "4", "placeholder", "Write a brief summary of your professional background and goals...", 3, "ngModelChange", "ngModel", "readonly"], [1, "skills-container"], [1, "skills-list"], ["class", "skill-tag", 4, "ngFor", "ngForOf"], ["class", "add-skill", 4, "ngIf"], [1, "experience-list"], ["class", "experience-item", 4, "ngFor", "ngForOf"], ["class", "btn btn-secondary", 3, "click", 4, "ngIf"], [1, "education-list"], ["class", "education-item", 4, "ngFor", "ngForOf"], [1, "skill-tag"], ["class", "remove-skill", 3, "click", 4, "ngIf"], [1, "remove-skill", 3, "click"], [1, "add-skill"], ["placeholder", "Add a skill", 3, "ngModelChange", "keydown.enter", "ngModel"], [1, "experience-item"], [1, "experience-content"], [1, "company"], [1, "duration"], [1, "description"], ["class", "remove-item", 3, "click", 4, "ngIf"], [1, "remove-item", 3, "click"], [1, "education-item"], [1, "education-content"], [1, "institution"], [1, "year"]],
      template: function ProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " ProFile");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "AI");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7)(10, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_10_listener() {
            return ctx.goToChat();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Back to Chat ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_12_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, " Logout ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "div", 12)(18, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "p", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 16)(27, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfileComponent_Template_button_click_27_listener() {
            return ctx.editMode = !ctx.editMode;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 18)(30, "div", 19)(31, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Basic Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 20)(34, "div", 21)(35, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Full Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.profileForm.name, $event) || (ctx.profileForm.name = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 21)(39, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Professional Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ProfileComponent_Template_input_ngModelChange_41_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.profileForm.title, $event) || (ctx.profileForm.title = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 24)(43, "label");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Professional Summary");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "textarea", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayListener"]("ngModelChange", function ProfileComponent_Template_textarea_ngModelChange_45_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayBindingSet"](ctx.profileForm.summary, $event) || (ctx.profileForm.summary = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 19)(47, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Skills");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 26)(50, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](51, ProfileComponent_span_51_Template, 3, 2, "span", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, ProfileComponent_div_52_Template, 4, 1, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 19)(54, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Work Experience");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, ProfileComponent_div_57_Template, 11, 5, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](58, ProfileComponent_button_58_Template, 2, 0, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "div", 19)(60, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Education");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](63, ProfileComponent_div_63_Template, 9, 4, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](64, ProfileComponent_button_64_Template, 2, 0, "button", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.getInitials());
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx.profile == null ? null : ctx.profile.name) || "Your Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx.profile == null ? null : ctx.profile.title) || "Your Title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"]((ctx.profile == null ? null : ctx.profile.email) || "your.email@example.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.editMode ? "Save Changes" : "Edit Profile", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.profileForm.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx.editMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.profileForm.title);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx.editMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtwoWayProperty"]("ngModel", ctx.profileForm.summary);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx.editMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.profileForm.skills);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.editMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.profileForm.experience);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.editMode);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.profileForm.education);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.editMode);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
      styles: [".profile-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f8f9fa;\n}\n\n.profile-header[_ngcontent-%COMP%] {\n  background: white;\n  border-bottom: 1px solid var(--border-light);\n  padding: 16px 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0 2px 10px rgba(26, 58, 107, 0.05);\n}\n\n.header-left[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.logo-image[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  object-fit: contain;\n  filter: drop-shadow(0 2px 4px rgba(26, 58, 107, 0.2));\n  transition: transform 0.3s ease;\n}\n\n.logo-image[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.logo-text[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--primary-dark);\n}\n\n.logo-text[_ngcontent-%COMP%]   .ai[_ngcontent-%COMP%] {\n  color: var(--primary-bright);\n  margin-left: 4px;\n}\n\n.header-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n  font-size: 14px;\n  text-decoration: none;\n  display: inline-block;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-bright) 100%);\n  color: white;\n}\n\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 25px var(--shadow);\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--primary-dark);\n  border: 1px solid var(--primary-dark);\n}\n\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: var(--primary-dark);\n  color: white;\n}\n\n.profile-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  gap: 24px;\n  padding: 24px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n.profile-sidebar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 24px;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n\n.profile-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 24px;\n  text-align: center;\n  box-shadow: 0 4px 20px var(--shadow);\n}\n\n.profile-avatar[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n\n.avatar-icon[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-bright) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 700;\n  font-size: 24px;\n  margin: 0 auto;\n}\n\n.profile-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  margin-bottom: 8px;\n  font-size: 20px;\n}\n\n.profile-title[_ngcontent-%COMP%] {\n  color: var(--primary-bright);\n  font-weight: 500;\n  margin-bottom: 8px;\n}\n\n.profile-email[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  font-size: 14px;\n  margin-bottom: 20px;\n}\n\n.profile-actions[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.profile-main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 16px;\n  padding: 24px;\n  box-shadow: 0 4px 20px var(--shadow);\n}\n\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  margin-bottom: 20px;\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n\n.input-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--text-dark);\n  margin-bottom: 8px;\n  font-size: 14px;\n}\n\n.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border: 2px solid var(--border-light);\n  border-radius: 8px;\n  font-size: 14px;\n  transition: border-color 0.3s ease;\n  font-family: inherit;\n}\n\n.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .input-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-bright);\n}\n\n.input-group[_ngcontent-%COMP%]   input[readonly][_ngcontent-%COMP%], .input-group[_ngcontent-%COMP%]   textarea[readonly][_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  cursor: default;\n}\n\n.skills-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.skills-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n\n.skill-tag[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-bright) 100%);\n  color: white;\n  padding: 6px 12px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.remove-skill[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: white;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 1;\n  padding: 0;\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.remove-skill[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.add-skill[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n\n.add-skill[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 8px 12px;\n  border: 2px solid var(--border-light);\n  border-radius: 20px;\n  font-size: 12px;\n}\n\n.add-skill[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  font-size: 12px;\n}\n\n.experience-list[_ngcontent-%COMP%], .education-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-bottom: 16px;\n}\n\n.experience-item[_ngcontent-%COMP%], .education-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 16px;\n  background: #f8f9fa;\n  border-radius: 8px;\n  border-left: 4px solid var(--primary-bright);\n}\n\n.experience-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .education-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--primary-dark);\n  margin-bottom: 4px;\n  font-size: 16px;\n}\n\n.company[_ngcontent-%COMP%], .institution[_ngcontent-%COMP%] {\n  color: var(--primary-bright);\n  font-weight: 500;\n  margin-bottom: 4px;\n}\n\n.duration[_ngcontent-%COMP%], .year[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  font-size: 12px;\n  margin-bottom: 8px;\n}\n\n.description[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  font-size: 14px;\n  line-height: 1.4;\n}\n\n.remove-item[_ngcontent-%COMP%] {\n  background: #e74c3c;\n  color: white;\n  border: none;\n  border-radius: 50%;\n  width: 24px;\n  height: 24px;\n  cursor: pointer;\n  font-size: 16px;\n  line-height: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.remove-item[_ngcontent-%COMP%]:hover {\n  background: #c0392b;\n}\n\n@media (max-width: 1024px) {\n  .profile-content[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n    padding: 16px;\n  }\n  .profile-sidebar[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 768px) {\n  .profile-header[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .header-right[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 6px 12px;\n    font-size: 12px;\n  }\n  .card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQUFOOztBQUdJO0VBQ0UsaUJBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQUFOOztBQUdJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHFEQUFBO0VBQ0EsK0JBQUE7QUFBTjs7QUFHSTtFQUNFLHNCQUFBO0FBQU47O0FBR0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQUFOOztBQUdJO0VBQ0UsNEJBQUE7RUFDQSxnQkFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFBTjs7QUFHSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQUFOOztBQUdJO0VBQ0UsdUZBQUE7RUFDQSxZQUFBO0FBQU47O0FBR0k7RUFDRSwyQkFBQTtFQUNBLG9DQUFBO0FBQU47O0FBR0k7RUFDRSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUNBQUE7QUFBTjs7QUFHSTtFQUNFLCtCQUFBO0VBQ0EsWUFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFBTjs7QUFHSTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7QUFBTjs7QUFHSTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQUFOOztBQUdJO0VBQ0UsbUJBQUE7QUFBTjs7QUFHSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1RkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFBTjs7QUFHSTtFQUNFLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQU47O0FBR0k7RUFDRSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBTjs7QUFHSTtFQUNFLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBQU47O0FBR0k7RUFDRSxnQkFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQUFOOztBQUdJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQUFOOztBQUdJO0VBQ0UsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFOOztBQUdJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtBQUFOOztBQUdJO0VBQ0UsaUJBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUFOOztBQUdJO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFOOztBQUdJOztFQUVFLGtCQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0FBQU47O0FBR0k7O0VBRUUsYUFBQTtFQUNBLG1DQUFBO0FBQU47O0FBR0k7O0VBRUUsbUJBQUE7RUFDQSxlQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBQU47O0FBR0k7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7QUFBTjs7QUFHSTtFQUNFLHVGQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FBQU47O0FBR0k7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFOOztBQUdJO0VBQ0Usb0NBQUE7QUFBTjs7QUFHSTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUFBTjs7QUFHSTtFQUNFLE9BQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQU47O0FBR0k7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFBTjs7QUFHSTs7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFBTjs7QUFHSTs7RUFFRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUFBTjs7QUFHSTs7RUFFRSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUFOOztBQUdJOztFQUVFLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFOOztBQUdJOztFQUVFLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQU47O0FBR0k7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUFOOztBQUdJO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUFOOztBQUdJO0VBQ0UsbUJBQUE7QUFBTjs7QUFHSTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtFQUFOO0VBR0k7SUFDRSxnQkFBQTtFQUROO0VBSUk7SUFDRSwwQkFBQTtFQUZOO0FBQ0Y7QUFLSTtFQUNFO0lBQ0Usa0JBQUE7RUFITjtFQU1JO0lBQ0UsUUFBQTtFQUpOO0VBT0k7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUFMTjtFQVFJO0lBQ0UsYUFBQTtFQU5OO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAucHJvZmlsZS1jb250YWluZXIge1xuICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICAgIH1cbiAgICBcbiAgICAucHJvZmlsZS1oZWFkZXIge1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICAgIHBhZGRpbmc6IDE2cHggMjRweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDI2LCA1OCwgMTA3LCAwLjA1KTtcbiAgICB9XG4gICAgXG4gICAgLmhlYWRlci1sZWZ0IC5sb2dvIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgIH1cbiAgICBcbiAgICAubG9nby1pbWFnZSB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gICAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMnB4IDRweCByZ2JhKDI2LCA1OCwgMTA3LCAwLjIpKTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XG4gICAgfVxuICAgIFxuICAgIC5sb2dvLWltYWdlOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgfVxuICAgIFxuICAgIC5sb2dvLXRleHQge1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xuICAgIH1cbiAgICBcbiAgICAubG9nby10ZXh0IC5haSB7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1icmlnaHQpO1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICB9XG4gICAgXG4gICAgLmhlYWRlci1yaWdodCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiAxMnB4O1xuICAgIH1cbiAgICBcbiAgICAuYnRuIHtcbiAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuICAgIFxuICAgIC5idG4tcHJpbWFyeSB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWRhcmspIDAlLCB2YXIoLS1wcmltYXJ5LWJyaWdodCkgMTAwJSk7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICAgIFxuICAgIC5idG4tcHJpbWFyeTpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgICBib3gtc2hhZG93OiAwIDhweCAyNXB4IHZhcigtLXNoYWRvdyk7XG4gICAgfVxuICAgIFxuICAgIC5idG4tc2Vjb25kYXJ5IHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1wcmltYXJ5LWRhcmspO1xuICAgIH1cbiAgICBcbiAgICAuYnRuLXNlY29uZGFyeTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBcbiAgICAucHJvZmlsZS1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwMHB4IDFmcjtcbiAgICAgIGdhcDogMjRweDtcbiAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBcbiAgICAucHJvZmlsZS1zaWRlYmFyIHtcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICB0b3A6IDI0cHg7XG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIH1cbiAgICBcbiAgICAucHJvZmlsZS1jYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCAyMHB4IHZhcigtLXNoYWRvdyk7XG4gICAgfVxuICAgIFxuICAgIC5wcm9maWxlLWF2YXRhciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cbiAgICBcbiAgICAuYXZhdGFyLWljb24ge1xuICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1wcmltYXJ5LWRhcmspIDAlLCB2YXIoLS1wcmltYXJ5LWJyaWdodCkgMTAwJSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbiAgICBcbiAgICAucHJvZmlsZS1jYXJkIGgzIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICAucHJvZmlsZS10aXRsZSB7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1icmlnaHQpO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG4gICAgXG4gICAgLnByb2ZpbGUtZW1haWwge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgXG4gICAgLnByb2ZpbGUtYWN0aW9ucyB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICAucHJvZmlsZS1tYWluIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAyNHB4O1xuICAgIH1cbiAgICBcbiAgICAuY2FyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMjBweCB2YXIoLS1zaGFkb3cpO1xuICAgIH1cbiAgICBcbiAgICAuY2FyZCBoMiB7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cbiAgICBcbiAgICAuZm9ybS1ncmlkIHtcbiAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICBnYXA6IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIC5mdWxsLXdpZHRoIHtcbiAgICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XG4gICAgfVxuICAgIFxuICAgIC5pbnB1dC1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG4gICAgXG4gICAgLmlucHV0LWdyb3VwIGxhYmVsIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1kYXJrKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgXG4gICAgLmlucHV0LWdyb3VwIGlucHV0LFxuICAgIC5pbnB1dC1ncm91cCB0ZXh0YXJlYSB7XG4gICAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1ib3JkZXItbGlnaHQpO1xuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuM3MgZWFzZTtcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIH1cbiAgICBcbiAgICAuaW5wdXQtZ3JvdXAgaW5wdXQ6Zm9jdXMsXG4gICAgLmlucHV0LWdyb3VwIHRleHRhcmVhOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktYnJpZ2h0KTtcbiAgICB9XG4gICAgXG4gICAgLmlucHV0LWdyb3VwIGlucHV0W3JlYWRvbmx5XSxcbiAgICAuaW5wdXQtZ3JvdXAgdGV4dGFyZWFbcmVhZG9ubHldIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgfVxuICAgIFxuICAgIC5za2lsbHMtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAxNnB4O1xuICAgIH1cbiAgICBcbiAgICAuc2tpbGxzLWxpc3Qge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGdhcDogOHB4O1xuICAgIH1cbiAgICBcbiAgICAuc2tpbGwtdGFnIHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXByaW1hcnktZGFyaykgMCUsIHZhcigtLXByaW1hcnktYnJpZ2h0KSAxMDAlKTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogNnB4O1xuICAgIH1cbiAgICBcbiAgICAucmVtb3ZlLXNraWxsIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB3aWR0aDogMTZweDtcbiAgICAgIGhlaWdodDogMTZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5yZW1vdmUtc2tpbGw6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuICAgIH1cbiAgICBcbiAgICAuYWRkLXNraWxsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBnYXA6IDhweDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5hZGQtc2tpbGwgaW5wdXQge1xuICAgICAgZmxleDogMTtcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9yZGVyLWxpZ2h0KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuICAgIFxuICAgIC5hZGQtc2tpbGwgLmJ0biB7XG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG4gICAgXG4gICAgLmV4cGVyaWVuY2UtbGlzdCxcbiAgICAuZWR1Y2F0aW9uLWxpc3Qge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDE2cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cbiAgICBcbiAgICAuZXhwZXJpZW5jZS1pdGVtLFxuICAgIC5lZHVjYXRpb24taXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdmFyKC0tcHJpbWFyeS1icmlnaHQpO1xuICAgIH1cbiAgICBcbiAgICAuZXhwZXJpZW5jZS1jb250ZW50IGg0LFxuICAgIC5lZHVjYXRpb24tY29udGVudCBoNCB7XG4gICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG4gICAgXG4gICAgLmNvbXBhbnksXG4gICAgLmluc3RpdHV0aW9uIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWJyaWdodCk7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cbiAgICBcbiAgICAuZHVyYXRpb24sXG4gICAgLnllYXIge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbiAgICBcbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgY29sb3I6IHZhcigtLXRleHQtZGFyayk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgIH1cbiAgICBcbiAgICAucmVtb3ZlLWl0ZW0ge1xuICAgICAgYmFja2dyb3VuZDogI2U3NGMzYztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICAucmVtb3ZlLWl0ZW06aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2MwMzkyYjtcbiAgICB9XG4gICAgXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAgICAgLnByb2ZpbGUtY29udGVudCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgICAgICBnYXA6IDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5wcm9maWxlLXNpZGViYXIge1xuICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgfVxuICAgICAgXG4gICAgICAuZm9ybS1ncmlkIHtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgLnByb2ZpbGUtaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogMTJweCAxNnB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuaGVhZGVyLXJpZ2h0IHtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC5idG4ge1xuICAgICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAuY2FyZCB7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 1620:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/auth.service */ 4796);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);



class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate() {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4796:
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class AuthService {
  constructor() {
    this.isLoggedInSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isLoggedIn$ = this.isLoggedInSubject.asObservable();
    // Check if user is already logged in (from localStorage)
    const token = localStorage.getItem('authToken');
    if (token) {
      this.isLoggedInSubject.next(true);
    }
  }
  login(email, password) {
    // Simple mock authentication - in real app, this would call an API
    if (email && password) {
      const token = 'mock-jwt-token-' + Date.now();
      localStorage.setItem('authToken', token);
      localStorage.setItem('userEmail', email);
      this.isLoggedInSubject.next(true);
      return true;
    }
    return false;
  }
  logout() {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userEmail');
    this.isLoggedInSubject.next(false);
  }
  isAuthenticated() {
    return this.isLoggedInSubject.value;
  }
  getCurrentUser() {
    return localStorage.getItem('userEmail');
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 856:
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatService: () => (/* binding */ ChatService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class ChatService {
  constructor() {
    this.messagesSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.messages$ = this.messagesSubject.asObservable();
    // Initialize with welcome message
    this.addMessage('Hello! I\'m ProFile AI. I can help you build your professional profile. What would you like to know about yourself?', false);
  }
  addMessage(text, isUser) {
    const message = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date()
    };
    const currentMessages = this.messagesSubject.value;
    this.messagesSubject.next([...currentMessages, message]);
  }
  sendMessage(text) {
    this.addMessage(text, true);
    // Simulate AI response (in real app, this would call an API)
    setTimeout(() => {
      const responses = ["That's interesting! Tell me more about your experience in that area.", "I can help you highlight that skill in your profile. What specific achievements do you have?", "Great! Let me help you structure that information for your professional profile.", "I understand. Can you provide more details about your background?", "That's a valuable skill! How long have you been working with that technology?", "I can help you create a compelling summary of your experience. What are your main strengths?", "Excellent! Let's work on presenting that in a way that stands out to employers.", "I'd love to learn more about your career goals and how I can help you achieve them."];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      this.addMessage(randomResponse, false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  }
  clearMessages() {
    this.messagesSubject.next([]);
  }
  static {
    this.ɵfac = function ChatService_Factory(t) {
      return new (t || ChatService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ChatService,
      factory: ChatService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5251:
/*!*********************************************!*\
  !*** ./src/app/services/profile.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileService: () => (/* binding */ ProfileService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class ProfileService {
  constructor() {
    this.profileSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.profile$ = this.profileSubject.asObservable();
    // Load profile from localStorage if exists
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      this.profileSubject.next(JSON.parse(savedProfile));
    }
  }
  updateProfile(profile) {
    const currentProfile = this.profileSubject.value;
    const updatedProfile = {
      ...currentProfile,
      ...profile
    };
    this.profileSubject.next(updatedProfile);
    localStorage.setItem('userProfile', JSON.stringify(updatedProfile));
  }
  addExperience(experience) {
    const currentProfile = this.profileSubject.value;
    if (currentProfile) {
      const newExperience = {
        ...experience,
        id: Date.now().toString()
      };
      const updatedProfile = {
        ...currentProfile,
        experience: [...currentProfile.experience, newExperience]
      };
      this.updateProfile(updatedProfile);
    }
  }
  addEducation(education) {
    const currentProfile = this.profileSubject.value;
    if (currentProfile) {
      const newEducation = {
        ...education,
        id: Date.now().toString()
      };
      const updatedProfile = {
        ...currentProfile,
        education: [...currentProfile.education, newEducation]
      };
      this.updateProfile(updatedProfile);
    }
  }
  addSkill(skill) {
    const currentProfile = this.profileSubject.value;
    if (currentProfile && !currentProfile.skills.includes(skill)) {
      const updatedProfile = {
        ...currentProfile,
        skills: [...currentProfile.skills, skill]
      };
      this.updateProfile(updatedProfile);
    }
  }
  removeSkill(skill) {
    const currentProfile = this.profileSubject.value;
    if (currentProfile) {
      const updatedProfile = {
        ...currentProfile,
        skills: currentProfile.skills.filter(s => s !== skill)
      };
      this.updateProfile(updatedProfile);
    }
  }
  getProfile() {
    return this.profileSubject.value;
  }
  static {
    this.ɵfac = function ProfileService_Factory(t) {
      return new (t || ProfileService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ProfileService,
      factory: ProfileService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _app_app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.routes */ 2181);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);





(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
  providers: [(0,_angular_router__WEBPACK_IMPORTED_MODULE_3__.provideRouter)(_app_app_routes__WEBPACK_IMPORTED_MODULE_1__.routes), (0,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.provideAnimations)()]
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map