"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Explorer_navElement, _Explorer_api;
class Explorer {
    constructor() {
        _Explorer_navElement.set(this, document.querySelector('.l-nav-container.t-nav-contaier'));
        _Explorer_api.set(this, new Api());
        (() => __awaiter(this, void 0, void 0, function* () {
            const response = yield __classPrivateFieldGet(this, _Explorer_api, "f").getFileNameList();
            response.data.info.list.forEach((fileName) => {
                this.addFileButton(fileName);
            });
            this.openFile(response.data.info.lastFile);
        }))();
    }
    addFileButton(fileName) {
        const fileButton = this.createButtonElement(fileName, '');
        const openEvent = new CustomEvent('openFile', {
            bubbles: true,
            detail: {
                fileName: fileName,
            },
        });
        fileButton.addEventListener('click', () => {
            fileButton.dispatchEvent(openEvent);
        });
        this.appendNewButton(fileButton);
    }
    createButtonElement(name, state) {
        const buttonTemplate = document.querySelector('#template-nav-button');
        const buttonClone = document.importNode(buttonTemplate.content, true);
        const buttonElement = buttonClone.querySelector('.l-nav-button.t-nav-button');
        const buttonTitle = buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.querySelector('h2');
        if (buttonTitle)
            buttonTitle.innerText = name;
        const buttonState = buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.querySelector('div');
        if (buttonState)
            buttonState.innerText = state;
        return buttonElement;
    }
    appendNewButton(buttonElement) {
        var _a;
        (_a = __classPrivateFieldGet(this, _Explorer_navElement, "f")) === null || _a === void 0 ? void 0 : _a.appendChild(buttonElement);
    }
    setButtonActive(name) {
        if (__classPrivateFieldGet(this, _Explorer_navElement, "f"))
            [...__classPrivateFieldGet(this, _Explorer_navElement, "f").children].forEach((button) => {
                var _a;
                const fileName = (_a = button.querySelector('h2')) === null || _a === void 0 ? void 0 : _a.innerHTML;
                if (name === fileName) {
                    button.classList.remove('t-nav-button');
                    button.classList.add('t-nav-button-active');
                }
                else {
                    button.classList.remove('t-nav-button-active');
                    button.classList.add('t-nav-button');
                }
            });
    }
    getButtonNameList() {
        const result = [];
        if (__classPrivateFieldGet(this, _Explorer_navElement, "f"))
            [...__classPrivateFieldGet(this, _Explorer_navElement, "f").children].forEach((button) => {
                var _a;
                const fileName = (_a = button.querySelector('h2')) === null || _a === void 0 ? void 0 : _a.innerHTML;
                if (fileName)
                    result.push(fileName);
            });
        return result;
    }
    getActiveFileName() {
        let result = '';
        if (__classPrivateFieldGet(this, _Explorer_navElement, "f"))
            [...__classPrivateFieldGet(this, _Explorer_navElement, "f").children].forEach((button) => {
                var _a;
                const fileName = (_a = button.querySelector('h2')) === null || _a === void 0 ? void 0 : _a.innerHTML;
                if (button.classList.contains('t-nav-button-active') && fileName)
                    result = fileName;
            });
        return result;
    }
    setStateNotSaved() {
        const activeName = this.getActiveFileName();
        if (__classPrivateFieldGet(this, _Explorer_navElement, "f"))
            [...__classPrivateFieldGet(this, _Explorer_navElement, "f").children].forEach((button) => {
                var _a;
                const fileName = (_a = button.querySelector('h2')) === null || _a === void 0 ? void 0 : _a.innerHTML;
                if (activeName === fileName) {
                    const stateLabel = button.querySelector('div');
                    if (stateLabel)
                        stateLabel.innerHTML = 'Not Saved';
                }
            });
    }
    setStateSaved() {
        const activeName = this.getActiveFileName();
        if (__classPrivateFieldGet(this, _Explorer_navElement, "f"))
            [...__classPrivateFieldGet(this, _Explorer_navElement, "f").children].forEach((button) => {
                var _a;
                const fileName = (_a = button.querySelector('h2')) === null || _a === void 0 ? void 0 : _a.innerHTML;
                if (activeName === fileName) {
                    const stateLabel = button.querySelector('div');
                    if (stateLabel)
                        stateLabel.innerHTML = '';
                }
            });
    }
    openFile(name) {
        if (__classPrivateFieldGet(this, _Explorer_navElement, "f"))
            [...__classPrivateFieldGet(this, _Explorer_navElement, "f").children].forEach((button) => {
                var _a;
                const buttonElement = button;
                const fileName = (_a = buttonElement.querySelector('h2')) === null || _a === void 0 ? void 0 : _a.innerHTML;
                if (fileName === name)
                    buttonElement.click();
            });
    }
}
_Explorer_navElement = new WeakMap(), _Explorer_api = new WeakMap();
