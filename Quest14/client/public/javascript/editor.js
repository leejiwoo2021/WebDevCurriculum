"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Editor_editorElement, _Editor_tempData;
class Editor {
    constructor() {
        _Editor_editorElement.set(this, document.querySelector('#editor'));
        _Editor_tempData.set(this, new Map());
        this.addChangeEvent();
    }
    addChangeEvent() {
        var _a;
        const changeEvent = new CustomEvent('editorChange', { bubbles: true });
        (_a = __classPrivateFieldGet(this, _Editor_editorElement, "f")) === null || _a === void 0 ? void 0 : _a.addEventListener('keyup', () => {
            var _a;
            (_a = __classPrivateFieldGet(this, _Editor_editorElement, "f")) === null || _a === void 0 ? void 0 : _a.dispatchEvent(changeEvent);
        });
    }
    getContent() {
        if (__classPrivateFieldGet(this, _Editor_editorElement, "f"))
            return [...__classPrivateFieldGet(this, _Editor_editorElement, "f").children].map((element) => element.innerHTML);
        else
            return [''];
    }
    showContent(fileName, savedContent) {
        const fileData = __classPrivateFieldGet(this, _Editor_tempData, "f").has(fileName) ? __classPrivateFieldGet(this, _Editor_tempData, "f").get(fileName) : savedContent;
        // if (fileData === null) fileData = [''];
        if (__classPrivateFieldGet(this, _Editor_editorElement, "f"))
            __classPrivateFieldGet(this, _Editor_editorElement, "f").innerHTML = '';
        fileData.forEach((text) => {
            var _a;
            (_a = __classPrivateFieldGet(this, _Editor_editorElement, "f")) === null || _a === void 0 ? void 0 : _a.appendChild(new Line(text).getElement());
        });
    }
    getTemp(key) {
        return __classPrivateFieldGet(this, _Editor_tempData, "f").get(key);
    }
    setContentTemp(fileName) {
        if (fileName) {
            const content = this.getContent();
            __classPrivateFieldGet(this, _Editor_tempData, "f").set(fileName, content);
        }
    }
    removeTemp(key) {
        __classPrivateFieldGet(this, _Editor_tempData, "f").delete(key);
    }
    isEqual(arr1, arr2) {
        if (arr1.length !== arr2.length)
            return false;
        for (let i = 0; i < arr1.length; i++)
            if (arr1[i] !== arr2[i])
                return false;
        return true;
    }
}
_Editor_editorElement = new WeakMap(), _Editor_tempData = new WeakMap();
