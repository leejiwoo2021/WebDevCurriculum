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
var _Notepad_explorer, _Notepad_editor, _Notepad_menu, _Notepad_api, _Notepad_dom;
class Notepad {
    constructor() {
        /* TODO: 그 외에 또 어떤 클래스와 메소드가 정의되어야 할까요? */
        _Notepad_explorer.set(this, new Explorer());
        _Notepad_editor.set(this, new Editor());
        _Notepad_menu.set(this, new Menu());
        _Notepad_api.set(this, new Api());
        _Notepad_dom.set(this, document.querySelector('body'));
        this.addFileClickEvent();
        this.addEditorChangeEvent();
        this.addSaveEvent();
        this.addNewFileEvent();
        this.addSaveAsEvent();
    }
    addFileClickEvent() {
        var _a;
        (_a = __classPrivateFieldGet(this, _Notepad_dom, "f")) === null || _a === void 0 ? void 0 : _a.addEventListener('openFile', (e) => __awaiter(this, void 0, void 0, function* () {
            var _b, _c, _d, _e;
            const customEvent = e;
            const fileName = customEvent.detail.fileName;
            const currentFileName = __classPrivateFieldGet(this, _Notepad_explorer, "f").getActiveFileName();
            if (fileName === currentFileName)
                return;
            __classPrivateFieldGet(this, _Notepad_editor, "f").setContentTemp(currentFileName);
            __classPrivateFieldGet(this, _Notepad_explorer, "f").setButtonActive(fileName);
            const response = yield __classPrivateFieldGet(this, _Notepad_api, "f").getFile(fileName);
            const savedContent = (_c = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.file) === null || _c === void 0 ? void 0 : _c.content;
            if (savedContent)
                __classPrivateFieldGet(this, _Notepad_editor, "f").showContent(fileName, savedContent);
            if (__classPrivateFieldGet(this, _Notepad_editor, "f").getTemp(fileName)) {
                const savedFile = (_e = (_d = response === null || response === void 0 ? void 0 : response.data) === null || _d === void 0 ? void 0 : _d.file) === null || _e === void 0 ? void 0 : _e.content;
                const tempedFile = __classPrivateFieldGet(this, _Notepad_editor, "f").getTemp(fileName);
                if (savedFile && tempedFile && __classPrivateFieldGet(this, _Notepad_editor, "f").isEqual(savedFile, tempedFile))
                    __classPrivateFieldGet(this, _Notepad_menu, "f").setSaveButtonDisable();
                else
                    __classPrivateFieldGet(this, _Notepad_menu, "f").setSaveButtonAvailable();
            }
            else {
                __classPrivateFieldGet(this, _Notepad_menu, "f").setSaveButtonDisable();
            }
        }));
    }
    addEditorChangeEvent() {
        var _a;
        (_a = __classPrivateFieldGet(this, _Notepad_dom, "f")) === null || _a === void 0 ? void 0 : _a.addEventListener('editorChange', (e) => {
            var _a, _b;
            const activeFileName = __classPrivateFieldGet(this, _Notepad_explorer, "f").getActiveFileName();
            __classPrivateFieldGet(this, _Notepad_editor, "f").setContentTemp(activeFileName);
            const response = __classPrivateFieldGet(this, _Notepad_api, "f").getFileTemp(activeFileName);
            const savedFile = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.file) === null || _b === void 0 ? void 0 : _b.content;
            const tempedFile = __classPrivateFieldGet(this, _Notepad_editor, "f").getTemp(activeFileName);
            if (savedFile && tempedFile && __classPrivateFieldGet(this, _Notepad_editor, "f").isEqual(savedFile, tempedFile)) {
                __classPrivateFieldGet(this, _Notepad_menu, "f").setSaveButtonDisable();
                __classPrivateFieldGet(this, _Notepad_explorer, "f").setStateSaved();
            }
            else {
                __classPrivateFieldGet(this, _Notepad_menu, "f").setSaveButtonAvailable();
                __classPrivateFieldGet(this, _Notepad_explorer, "f").setStateNotSaved();
            }
        });
    }
    addSaveEvent() {
        var _a;
        (_a = __classPrivateFieldGet(this, _Notepad_dom, "f")) === null || _a === void 0 ? void 0 : _a.addEventListener('saveFile', () => __awaiter(this, void 0, void 0, function* () {
            const fileName = __classPrivateFieldGet(this, _Notepad_explorer, "f").getActiveFileName();
            if (fileName) {
                const contents = __classPrivateFieldGet(this, _Notepad_editor, "f").getContent();
                yield __classPrivateFieldGet(this, _Notepad_api, "f").saveFile(fileName, contents);
                __classPrivateFieldGet(this, _Notepad_menu, "f").setSaveButtonDisable();
                __classPrivateFieldGet(this, _Notepad_explorer, "f").setStateSaved();
            }
        }));
    }
    addNewFileEvent() {
        var _a;
        (_a = __classPrivateFieldGet(this, _Notepad_dom, "f")) === null || _a === void 0 ? void 0 : _a.addEventListener('newFile', () => __awaiter(this, void 0, void 0, function* () {
            var _b, _c;
            const fileName = prompt('파일 이름을 입력하세요');
            const response = yield __classPrivateFieldGet(this, _Notepad_api, "f").getFileNameList();
            const fileNameList = (_c = (_b = response === null || response === void 0 ? void 0 : response.data) === null || _b === void 0 ? void 0 : _b.info) === null || _c === void 0 ? void 0 : _c.list;
            if (!fileName) {
                alert('올바른 이름을 입력해주세요');
                return;
            }
            if ((fileNameList === null || fileNameList === void 0 ? void 0 : fileNameList.indexOf(fileName)) !== -1) {
                alert('중복된 이름이 존재합니다');
                return;
            }
            yield __classPrivateFieldGet(this, _Notepad_api, "f").saveFileAs(fileName, ['']);
            __classPrivateFieldGet(this, _Notepad_explorer, "f").addFileButton(fileName);
        }));
    }
    addSaveAsEvent() {
        var _a;
        (_a = __classPrivateFieldGet(this, _Notepad_dom, "f")) === null || _a === void 0 ? void 0 : _a.addEventListener('saveAsFile', () => __awaiter(this, void 0, void 0, function* () {
            const fileName = prompt('파일 이름을 입력하세요');
            if (!fileName) {
                alert('올바른 이름을 입력해주세요');
                return;
            }
            const contents = __classPrivateFieldGet(this, _Notepad_editor, "f").getContent();
            yield __classPrivateFieldGet(this, _Notepad_api, "f").saveFileAs(fileName, contents);
            __classPrivateFieldGet(this, _Notepad_editor, "f").removeTemp(fileName);
            __classPrivateFieldGet(this, _Notepad_explorer, "f").addFileButton(fileName);
        }));
    }
}
_Notepad_explorer = new WeakMap(), _Notepad_editor = new WeakMap(), _Notepad_menu = new WeakMap(), _Notepad_api = new WeakMap(), _Notepad_dom = new WeakMap();
