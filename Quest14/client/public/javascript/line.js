"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Line_lineElement;
class Line {
    constructor(text) {
        _Line_lineElement.set(this, void 0);
        this.createLineElement(text);
    }
    createLineElement(text) {
        const lineTemplate = document.querySelector('#template-editor-line');
        const lineClone = document.importNode(lineTemplate.content, true);
        const newLineElement = lineClone.querySelector('p');
        if (newLineElement) {
            __classPrivateFieldSet(this, _Line_lineElement, newLineElement, "f");
            __classPrivateFieldGet(this, _Line_lineElement, "f").innerHTML = text;
        }
    }
    getElement() {
        return __classPrivateFieldGet(this, _Line_lineElement, "f");
    }
}
_Line_lineElement = new WeakMap();
