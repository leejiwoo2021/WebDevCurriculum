"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Menu_saveButton, _Menu_newButton, _Menu_saveAsButton;
class Menu {
    constructor() {
        _Menu_saveButton.set(this, document.querySelector('.l-save-button'));
        _Menu_newButton.set(this, document.querySelector('.l-new-button'));
        _Menu_saveAsButton.set(this, document.querySelector('.l-saveAs-button'));
        if (!localStorage.getItem('token'))
            location.href = '/login';
        this.addNewEvent();
        this.addSaveEvent();
        this.addSaveAsEvent();
    }
    addNewEvent() {
        var _a;
        const newEvent = new CustomEvent('newFile', {
            bubbles: true,
        });
        (_a = __classPrivateFieldGet(this, _Menu_newButton, "f")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            var _a;
            (_a = __classPrivateFieldGet(this, _Menu_newButton, "f")) === null || _a === void 0 ? void 0 : _a.dispatchEvent(newEvent);
        });
    }
    addSaveEvent() {
        var _a;
        const saveEvent = new CustomEvent('saveFile', {
            bubbles: true,
        });
        (_a = __classPrivateFieldGet(this, _Menu_saveButton, "f")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            var _a;
            (_a = __classPrivateFieldGet(this, _Menu_saveButton, "f")) === null || _a === void 0 ? void 0 : _a.dispatchEvent(saveEvent);
        });
    }
    addSaveAsEvent() {
        var _a;
        const saveAsEvent = new CustomEvent('saveAsFile', {
            bubbles: true,
        });
        (_a = __classPrivateFieldGet(this, _Menu_saveAsButton, "f")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            var _a;
            (_a = __classPrivateFieldGet(this, _Menu_saveAsButton, "f")) === null || _a === void 0 ? void 0 : _a.dispatchEvent(saveAsEvent);
        });
    }
    setSaveButtonDisable() {
        var _a, _b, _c;
        (_a = __classPrivateFieldGet(this, _Menu_saveButton, "f")) === null || _a === void 0 ? void 0 : _a.classList.remove('t-save-button');
        (_b = __classPrivateFieldGet(this, _Menu_saveButton, "f")) === null || _b === void 0 ? void 0 : _b.classList.add('t-save-button-disable');
        (_c = __classPrivateFieldGet(this, _Menu_saveButton, "f")) === null || _c === void 0 ? void 0 : _c.setAttribute('disable', 'true');
    }
    setSaveButtonAvailable() {
        var _a, _b, _c;
        (_a = __classPrivateFieldGet(this, _Menu_saveButton, "f")) === null || _a === void 0 ? void 0 : _a.classList.remove('t-save-button-disable');
        (_b = __classPrivateFieldGet(this, _Menu_saveButton, "f")) === null || _b === void 0 ? void 0 : _b.classList.add('t-save-button');
        (_c = __classPrivateFieldGet(this, _Menu_saveButton, "f")) === null || _c === void 0 ? void 0 : _c.setAttribute('disable', 'false');
    }
}
_Menu_saveButton = new WeakMap(), _Menu_newButton = new WeakMap(), _Menu_saveAsButton = new WeakMap();
