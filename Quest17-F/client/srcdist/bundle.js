/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../node_modules/css-loader/dist/runtime/cssWithMappingToString.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../node_modules/css-loader/dist/runtime/api.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Imports


var ___CSS_LOADER_EXPORT___ = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../node_modules/css-loader/dist/runtime/api.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../node_modules/css-loader/dist/runtime/cssWithMappingToString.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#app {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody {\n  margin: 0;\n  padding: 0;\n}\n.l-route-container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n", "",{"version":3,"sources":["webpack://./src/App.vue"],"names":[],"mappings":";AAcA;EACE,mCAAmC;EACnC,kCAAkC;AACpC;AAEA;EACE,SAAS;EACT,UAAU;AACZ;AAEA;EACE,YAAY;EACZ,aAAa;EACb,aAAa;EACb,iBAAiB;EACjB,mBAAmB;AACrB","sourcesContent":["<template>\n  <div class=\"l-route-container\">\n    <router-view />\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport { defineComponent } from 'vue';\nexport default defineComponent({\n  name: 'App',\n});\n</script>\n\n<style>\n#app {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n}\n\n.l-route-container {\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-flow: column;\n  align-items: center;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Login.vue?vue&type=style&index=0&id=26084dc2&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Login.vue?vue&type=style&index=0&id=26084dc2&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/css-loader/dist/runtime/api.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Imports


var ___CSS_LOADER_EXPORT___ = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/css-loader/dist/runtime/api.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.l-main-container[data-v-26084dc2] {\n  width: 900px;\n  height: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/views/Login.vue"],"names":[],"mappings":";AA2DA;EACE,YAAY;EACZ,YAAY;AACd","sourcesContent":["<template>\n  <div class=\"l-main-container\">\n    <Title text=\"Login\" />\n    <div>\n      <label>ID : </label>\n      <input v-model=\"id\" type=\"text\" placeholder=\"ID를 입력해주세요\" />\n      <label>PW : </label>\n      <input v-model=\"pw\" type=\"password\" placeholder=\"PW를 입력해주세요\" />\n      <button @click=\"onSubmit\" id=\"loginBtn\">로그인</button>\n    </div>\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport Title from '@/components/title/Title.vue';\nimport axios from 'axios';\nimport { defineComponent } from 'vue';\n\nexport default defineComponent({\n  name: 'Login',\n  components: { Title },\n  data() {\n    return {\n      id: '',\n      pw: '',\n    };\n  },\n  methods: {\n    async onSubmit(): Promise<void> {\n      if (!this.id || !this.pw) {\n        alert('ID와 패스워드를 모두 입력해주세요');\n        return;\n      }\n      const id = this.id;\n      const pw = this.pw;\n      try {\n        const response = await axios.post(\n          'https://localhost:8000/api/auth/login',\n          { id, pw },\n          {\n            headers: { 'Content-Type': 'application/json' },\n          }\n        );\n\n        if (response.status === 200) {\n          const token = response.data.token;\n          localStorage.setItem('token', token);\n          this.$router.push('/');\n        }\n      } catch (err) {\n        console.log(err);\n      }\n    },\n  },\n});\n</script>\n\n<!-- Add \"scoped\" attribute to limit CSS to this component only -->\n<style scoped>\n.l-main-container {\n  width: 900px;\n  height: 100%;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Main.vue?vue&type=style&index=0&id=c1f1971a&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Main.vue?vue&type=style&index=0&id=c1f1971a&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/css-loader/dist/runtime/api.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
// Imports


var ___CSS_LOADER_EXPORT___ = Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/css-loader/dist/runtime/api.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.l-main-container[data-v-c1f1971a] {\n  width: 900px;\n  height: 100%;\n}\n", "",{"version":3,"sources":["webpack://./src/views/Main.vue"],"names":[],"mappings":";AA0BA;EACE,YAAY;EACZ,YAAY;AACd","sourcesContent":["<template>\n  <div class=\"l-main-container\">\n    <Title text=\"TextEditor made by vue\" />\n    <Menu />\n    <Navigator />\n    <Editor />\n  </div>\n</template>\n\n<script lang=\"ts\">\nimport { defineComponent } from 'vue';\nimport Title from '@/components/title/Title.vue';\nimport Menu from '@/components/menu/Menu.vue';\nimport Navigator from '@/components/navigator/Navigator.vue';\nimport Editor from '@/components/editor/Editor.vue';\n\nexport default defineComponent({\n  name: 'Main',\n  components: { Title, Menu, Navigator, Editor },\n  mounted() {\n    if (!localStorage.getItem('token')) this.$router.push('/login');\n  },\n});\n</script>\n\n<style scoped>\n.l-main-container {\n  width: 900px;\n  height: 100%;\n}\n</style>\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/ts-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/App.vue?vue&type=script&lang=ts":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/App.vue?vue&type=script&lang=ts ***!
  \***************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

async function getFileInfo(fileName) {
    try {
        const response = await useAxios({
            query: `
    query {
      file(name: "${fileName}") {
        name
        content
      }
    }
  `,
        });
        return response;
    }
    catch (err) {
        throw new Error(err);
    }
}
async function getFileList() {
    try {
        const response = await useAxios({
            query: `
      query {
        info {
          list
          lastFile
        }
      }
    `,
        });
        return response;
    }
    catch (err) {
        throw new Error(err);
    }
}
async function saveFile(fileName, content) {
    try {
        await useAxios({
            query: `
    mutation {
      updateFile(name: "${fileName}" content: ${JSON.stringify(content)}){
        msg
      }
    }
  `,
        });
    }
    catch (err) {
        throw new Error(err);
    }
}
async function saveAsFile(fileName, content) {
    try {
        await useAxios({
            query: `
    mutation {
      createFile(name: "${fileName}" content:  ${JSON.stringify(content)}){
        msg
      }
    }
  `,
        });
    }
    catch (err) {
        throw new Error(err);
    }
}
async function addNewFile(fileName) {
    try {
        await useAxios({
            query: `
    mutation {
      createFile(name: "${fileName}" content:  ${JSON.stringify([''])}){
        msg
      }
    }
  `,
        });
    }
    catch (err) {
        throw new Error(err);
    }
}
async function useAxios(data) {
    const token = localStorage.getItem('token');
    try {
        const response = await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
            method: 'post',
            baseURL: 'https://localhost:8000/graphql',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
            data,
        });
        return response.data;
    }
    catch (err) {
        throw new Error(err);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ useAxios, addNewFile, saveAsFile, saveFile, getFileList, getFileInfo });


/***/ }),

/***/ "./node_modules/ts-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Login.vue?vue&type=script&lang=ts":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Login.vue?vue&type=script&lang=ts ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

async function getFileInfo(fileName) {
    try {
        const response = await useAxios({
            query: `
    query {
      file(name: "${fileName}") {
        name
        content
      }
    }
  `,
        });
        return response;
    }
    catch (err) {
        throw new Error(err);
    }
}
async function getFileList() {
    try {
        const response = await useAxios({
            query: `
      query {
        info {
          list
          lastFile
        }
      }
    `,
        });
        return response;
    }
    catch (err) {
        throw new Error(err);
    }
}
async function saveFile(fileName, content) {
    try {
        await useAxios({
            query: `
    mutation {
      updateFile(name: "${fileName}" content: ${JSON.stringify(content)}){
        msg
      }
    }
  `,
        });
    }
    catch (err) {
        throw new Error(err);
    }
}
async function saveAsFile(fileName, content) {
    try {
        await useAxios({
            query: `
    mutation {
      createFile(name: "${fileName}" content:  ${JSON.stringify(content)}){
        msg
      }
    }
  `,
        });
    }
    catch (err) {
        throw new Error(err);
    }
}
async function addNewFile(fileName) {
    try {
        await useAxios({
            query: `
    mutation {
      createFile(name: "${fileName}" content:  ${JSON.stringify([''])}){
        msg
      }
    }
  `,
        });
    }
    catch (err) {
        throw new Error(err);
    }
}
async function useAxios(data) {
    const token = localStorage.getItem('token');
    try {
        const response = await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
            method: 'post',
            baseURL: 'https://localhost:8000/graphql',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
            data,
        });
        return response.data;
    }
    catch (err) {
        throw new Error(err);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ useAxios, addNewFile, saveAsFile, saveFile, getFileList, getFileInfo });


/***/ }),

/***/ "./node_modules/ts-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Main.vue?vue&type=script&lang=ts":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Main.vue?vue&type=script&lang=ts ***!
  \**********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

async function getFileInfo(fileName) {
    try {
        const response = await useAxios({
            query: `
    query {
      file(name: "${fileName}") {
        name
        content
      }
    }
  `,
        });
        return response;
    }
    catch (err) {
        throw new Error(err);
    }
}
async function getFileList() {
    try {
        const response = await useAxios({
            query: `
      query {
        info {
          list
          lastFile
        }
      }
    `,
        });
        return response;
    }
    catch (err) {
        throw new Error(err);
    }
}
async function saveFile(fileName, content) {
    try {
        await useAxios({
            query: `
    mutation {
      updateFile(name: "${fileName}" content: ${JSON.stringify(content)}){
        msg
      }
    }
  `,
        });
    }
    catch (err) {
        throw new Error(err);
    }
}
async function saveAsFile(fileName, content) {
    try {
        await useAxios({
            query: `
    mutation {
      createFile(name: "${fileName}" content:  ${JSON.stringify(content)}){
        msg
      }
    }
  `,
        });
    }
    catch (err) {
        throw new Error(err);
    }
}
async function addNewFile(fileName) {
    try {
        await useAxios({
            query: `
    mutation {
      createFile(name: "${fileName}" content:  ${JSON.stringify([''])}){
        msg
      }
    }
  `,
        });
    }
    catch (err) {
        throw new Error(err);
    }
}
async function useAxios(data) {
    const token = localStorage.getItem('token');
    try {
        const response = await Object(function webpackMissingModule() { var e = new Error("Cannot find module 'axios'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
            method: 'post',
            baseURL: 'https://localhost:8000/graphql',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-type': 'application/json',
            },
            data,
        });
        return response.data;
    }
    catch (err) {
        throw new Error(err);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ useAxios, addNewFile, saveAsFile, saveFile, getFileList, getFileInfo });


/***/ }),

/***/ "./src/router/index.ts":
/*!*****************************!*\
  !*** ./src/router/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_Main_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/Main.vue */ "./src/views/Main.vue");
/* harmony import */ var _views_Login_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/Login.vue */ "./src/views/Login.vue");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-router'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const routes = [
    {
        path: '/',
        name: 'Main',
        component: _views_Main_vue__WEBPACK_IMPORTED_MODULE_0__.default,
    },
    {
        path: '/login',
        name: 'Login',
        component: _views_Login_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    },
];
const router = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-router'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    history: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-router'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
    routes,
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);


/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vuex'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    state: {
        selectedIndex: -1,
        selectedFileName: '',
        originContents: {},
        tempContents: {},
        fileList: [],
    },
    mutations: {
        updateFileList(state, newList) {
            state.fileList = newList;
        },
        addNewFileList(state, newFile) {
            state.fileList.push(newFile);
        },
        updateSelectedIndex(state, newIndex) {
            state.selectedIndex = newIndex;
        },
        updateSelectedFileName(state, fileName) {
            state.selectedFileName = fileName;
        },
        updateTempContents(state, { fileName, newContent }) {
            state.tempContents[fileName] = newContent;
        },
        updateOriginContents(state, { fileName, newContent }) {
            state.originContents[fileName] = newContent;
        },
    },
    actions: {},
    modules: {},
}));


/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './App.vue?vue&type=template&id=7ba5bd90'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=ts */ "./src/App.vue?vue&type=script&lang=ts");
/* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css");




;
_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.render = Object(function webpackMissingModule() { var e = new Error("Cannot find module './App.vue?vue&type=template&id=7ba5bd90'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
/* hot reload */
if (false) {}

_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/App.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/views/Login.vue":
/*!*****************************!*\
  !*** ./src/views/Login.vue ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './Login.vue?vue&type=template&id=26084dc2&scoped=true'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Login_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=ts */ "./src/views/Login.vue?vue&type=script&lang=ts");
/* harmony import */ var _Login_vue_vue_type_style_index_0_id_26084dc2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Login.vue?vue&type=style&index=0&id=26084dc2&scoped=true&lang=css */ "./src/views/Login.vue?vue&type=style&index=0&id=26084dc2&scoped=true&lang=css");




;
_Login_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.render = Object(function webpackMissingModule() { var e = new Error("Cannot find module './Login.vue?vue&type=template&id=26084dc2&scoped=true'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
_Login_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-26084dc2"
/* hot reload */
if (false) {}

_Login_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/views/Login.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Login_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/views/Main.vue":
/*!****************************!*\
  !*** ./src/views/Main.vue ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './Main.vue?vue&type=template&id=c1f1971a&scoped=true'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Main_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=ts */ "./src/views/Main.vue?vue&type=script&lang=ts");
/* harmony import */ var _Main_vue_vue_type_style_index_0_id_c1f1971a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main.vue?vue&type=style&index=0&id=c1f1971a&scoped=true&lang=css */ "./src/views/Main.vue?vue&type=style&index=0&id=c1f1971a&scoped=true&lang=css");




;
_Main_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.render = Object(function webpackMissingModule() { var e = new Error("Cannot find module './Main.vue?vue&type=template&id=c1f1971a&scoped=true'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
_Main_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.__scopeId = "data-v-c1f1971a"
/* hot reload */
if (false) {}

_Main_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default.__file = "src/views/Main.vue"

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Main_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_1__.default);

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=ts":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_App_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/ts-loader/index.js!../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./App.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/App.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/views/Login.vue?vue&type=script&lang=ts":
/*!*****************************************************!*\
  !*** ./src/views/Login.vue?vue&type=script&lang=ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Login_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Login_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./Login.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Login.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/views/Main.vue?vue&type=script&lang=ts":
/*!****************************************************!*\
  !*** ./src/views/Main.vue?vue&type=script&lang=ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_ts_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Main_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _node_modules_ts_loader_index_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Main_vue_vue_type_script_lang_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/ts-loader/index.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./Main.vue?vue&type=script&lang=ts */ "./node_modules/ts-loader/index.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Main.vue?vue&type=script&lang=ts");
 

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!*****************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader/index.js!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/views/Login.vue?vue&type=style&index=0&id=26084dc2&scoped=true&lang=css":
/*!*************************************************************************************!*\
  !*** ./src/views/Login.vue?vue&type=style&index=0&id=26084dc2&scoped=true&lang=css ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Login_vue_vue_type_style_index_0_id_26084dc2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./Login.vue?vue&type=style&index=0&id=26084dc2&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Login.vue?vue&type=style&index=0&id=26084dc2&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Login_vue_vue_type_style_index_0_id_26084dc2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Login_vue_vue_type_style_index_0_id_26084dc2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Login_vue_vue_type_style_index_0_id_26084dc2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Login_vue_vue_type_style_index_0_id_26084dc2_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./src/views/Main.vue?vue&type=style&index=0&id=c1f1971a&scoped=true&lang=css":
/*!************************************************************************************!*\
  !*** ./src/views/Main.vue?vue&type=style&index=0&id=c1f1971a&scoped=true&lang=css ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Main_vue_vue_type_style_index_0_id_c1f1971a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader/index.js!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./Main.vue?vue&type=style&index=0&id=c1f1971a&scoped=true&lang=css */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Main.vue?vue&type=style&index=0&id=c1f1971a&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Main_vue_vue_type_style_index_0_id_c1f1971a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Main_vue_vue_type_style_index_0_id_c1f1971a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Main_vue_vue_type_style_index_0_id_c1f1971a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_Main_vue_vue_type_style_index_0_id_c1f1971a_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/vue-loader/dist/stylePostLoader.js!../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("a8a805ac", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Login.vue?vue&type=style&index=0&id=26084dc2&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Login.vue?vue&type=style&index=0&id=26084dc2&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./Login.vue?vue&type=style&index=0&id=26084dc2&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Login.vue?vue&type=style&index=0&id=26084dc2&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4c324e5e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Main.vue?vue&type=style&index=0&id=c1f1971a&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Main.vue?vue&type=style&index=0&id=c1f1971a&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./Main.vue?vue&type=style&index=0&id=c1f1971a&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/Main.vue?vue&type=style&index=0&id=c1f1971a&scoped=true&lang=css");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! !../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("b99ea7a0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/lib/addStylesClient.js":
/*!**************************************************************!*\
  !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addStylesClient)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './listToStyles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(function webpackMissingModule() { var e = new Error("Cannot find module './listToStyles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(function webpackMissingModule() { var e = new Error("Cannot find module './listToStyles'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./src/store/index.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router */ "./src/router/index.ts");




Object(function webpackMissingModule() { var e = new Error("Cannot find module 'vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_App_vue__WEBPACK_IMPORTED_MODULE_1__.default).use(_store__WEBPACK_IMPORTED_MODULE_2__.default).use(_router__WEBPACK_IMPORTED_MODULE_3__.default).mount('#app');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvQXBwLnZ1ZT8wM2FmIiwid2VicGFjazovL2NsaWVudC8uL3NyYy92aWV3cy9Mb2dpbi52dWU/OGFlNiIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvdmlld3MvTWFpbi52dWU/ZmZiNCIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvQXBwLnZ1ZT9jODgxIiwid2VicGFjazovL2NsaWVudC8uL3NyYy92aWV3cy9Mb2dpbi52dWU/YmM0ZCIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvdmlld3MvTWFpbi52dWU/MTFlNSIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvcm91dGVyL2luZGV4LnRzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy9zdG9yZS9pbmRleC50cyIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvQXBwLnZ1ZSIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvdmlld3MvTG9naW4udnVlIiwid2VicGFjazovL2NsaWVudC8uL3NyYy92aWV3cy9NYWluLnZ1ZSIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvQXBwLnZ1ZT85M2UzIiwid2VicGFjazovL2NsaWVudC8uL3NyYy92aWV3cy9Mb2dpbi52dWU/ZDMxNCIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvdmlld3MvTWFpbi52dWU/NjY0NiIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvQXBwLnZ1ZT9iY2Y4Iiwid2VicGFjazovL2NsaWVudC8uL3NyYy92aWV3cy9Mb2dpbi52dWU/Zjk4ZiIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvdmlld3MvTWFpbi52dWU/YzgzNiIsIndlYnBhY2s6Ly9jbGllbnQvLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovL2NsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbGllbnQvLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDN0I7QUFDekYsOEJBQThCLDZLQUEyQixDQUFDLGdNQUFxQztBQUMvRjtBQUNBLGtEQUFrRCx3Q0FBd0MsdUNBQXVDLEdBQUcsUUFBUSxjQUFjLGVBQWUsR0FBRyxzQkFBc0IsaUJBQWlCLGtCQUFrQixrQkFBa0Isc0JBQXNCLHdCQUF3QixHQUFHLFNBQVMsMEVBQTBFLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSx1SkFBdUosa0JBQWtCLFlBQVksa0NBQWtDLG1CQUFtQixFQUFFLDhCQUE4Qix3Q0FBd0MsdUNBQXVDLEdBQUcsVUFBVSxjQUFjLGVBQWUsR0FBRyx3QkFBd0IsaUJBQWlCLGtCQUFrQixrQkFBa0Isc0JBQXNCLHdCQUF3QixHQUFHLCtCQUErQjtBQUM1aEM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUHZDO0FBQ3lIO0FBQzdCO0FBQzVGLDhCQUE4QixnTEFBMkIsQ0FBQyxtTUFBcUM7QUFDL0Y7QUFDQSxnRkFBZ0YsaUJBQWlCLGlCQUFpQixHQUFHLFNBQVMsa0ZBQWtGLE1BQU0sVUFBVSxVQUFVLDRlQUE0ZSw0QkFBNEIsVUFBVSxrQkFBa0IsWUFBWSxvQ0FBb0MsbUNBQW1DLFFBQVEsYUFBYSxjQUFjLHNDQUFzQyxLQUFLLGVBQWUsdUNBQXVDLG1DQUFtQyx1Q0FBdUMsaUJBQWlCLFNBQVMs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RCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ0o7QUFDQTtBQUNFO0FBRTlCLGtJQUFTLENBQUMsNkNBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQywyQ0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLDRDQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4jYXBwIHtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG59XFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4ubC1yb3V0ZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWZsb3c6IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9BcHAudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFjQTtFQUNFLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEM7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcbiAgPGRpdiBjbGFzcz1cXFwibC1yb3V0ZS1jb250YWluZXJcXFwiPlxcbiAgICA8cm91dGVyLXZpZXcgLz5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdCBsYW5nPVxcXCJ0c1xcXCI+XFxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJztcXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xcbiAgbmFtZTogJ0FwcCcsXFxufSk7XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcbiNhcHAge1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi5sLXJvdXRlLWNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubC1tYWluLWNvbnRhaW5lcltkYXRhLXYtMjYwODRkYzJdIHtcXG4gIHdpZHRoOiA5MDBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZpZXdzL0xvZ2luLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMkRBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2IGNsYXNzPVxcXCJsLW1haW4tY29udGFpbmVyXFxcIj5cXG4gICAgPFRpdGxlIHRleHQ9XFxcIkxvZ2luXFxcIiAvPlxcbiAgICA8ZGl2PlxcbiAgICAgIDxsYWJlbD5JRCA6IDwvbGFiZWw+XFxuICAgICAgPGlucHV0IHYtbW9kZWw9XFxcImlkXFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiBwbGFjZWhvbGRlcj1cXFwiSUTrpbwg7J6F66Cl7ZW07KO87IS47JqUXFxcIiAvPlxcbiAgICAgIDxsYWJlbD5QVyA6IDwvbGFiZWw+XFxuICAgICAgPGlucHV0IHYtbW9kZWw9XFxcInB3XFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgcGxhY2Vob2xkZXI9XFxcIlBX66W8IOyeheugpe2VtOyjvOyEuOyalFxcXCIgLz5cXG4gICAgICA8YnV0dG9uIEBjbGljaz1cXFwib25TdWJtaXRcXFwiIGlkPVxcXCJsb2dpbkJ0blxcXCI+66Gc6re47J24PC9idXR0b24+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0IGxhbmc9XFxcInRzXFxcIj5cXG5pbXBvcnQgVGl0bGUgZnJvbSAnQC9jb21wb25lbnRzL3RpdGxlL1RpdGxlLnZ1ZSc7XFxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcXG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnO1xcblxcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XFxuICBuYW1lOiAnTG9naW4nLFxcbiAgY29tcG9uZW50czogeyBUaXRsZSB9LFxcbiAgZGF0YSgpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBpZDogJycsXFxuICAgICAgcHc6ICcnLFxcbiAgICB9O1xcbiAgfSxcXG4gIG1ldGhvZHM6IHtcXG4gICAgYXN5bmMgb25TdWJtaXQoKTogUHJvbWlzZTx2b2lkPiB7XFxuICAgICAgaWYgKCF0aGlzLmlkIHx8ICF0aGlzLnB3KSB7XFxuICAgICAgICBhbGVydCgnSUTsmYAg7Yyo7Iqk7JuM65Oc66W8IOuqqOuRkCDsnoXroKXtlbTso7zshLjsmpQnKTtcXG4gICAgICAgIHJldHVybjtcXG4gICAgICB9XFxuICAgICAgY29uc3QgaWQgPSB0aGlzLmlkO1xcbiAgICAgIGNvbnN0IHB3ID0gdGhpcy5wdztcXG4gICAgICB0cnkge1xcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxcbiAgICAgICAgICAnaHR0cHM6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9sb2dpbicsXFxuICAgICAgICAgIHsgaWQsIHB3IH0sXFxuICAgICAgICAgIHtcXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcXG4gICAgICAgICAgfVxcbiAgICAgICAgKTtcXG5cXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xcbiAgICAgICAgICBjb25zdCB0b2tlbiA9IHJlc3BvbnNlLmRhdGEudG9rZW47XFxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcXG4gICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy8nKTtcXG4gICAgICAgIH1cXG4gICAgICB9IGNhdGNoIChlcnIpIHtcXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XFxuICAgICAgfVxcbiAgICB9LFxcbiAgfSxcXG59KTtcXG48L3NjcmlwdD5cXG5cXG48IS0tIEFkZCBcXFwic2NvcGVkXFxcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XFxuPHN0eWxlIHNjb3BlZD5cXG4ubC1tYWluLWNvbnRhaW5lciB7XFxuICB3aWR0aDogOTAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmwtbWFpbi1jb250YWluZXJbZGF0YS12LWMxZjE5NzFhXSB7XFxuICB3aWR0aDogOTAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9NYWluLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMEJBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuICA8ZGl2IGNsYXNzPVxcXCJsLW1haW4tY29udGFpbmVyXFxcIj5cXG4gICAgPFRpdGxlIHRleHQ9XFxcIlRleHRFZGl0b3IgbWFkZSBieSB2dWVcXFwiIC8+XFxuICAgIDxNZW51IC8+XFxuICAgIDxOYXZpZ2F0b3IgLz5cXG4gICAgPEVkaXRvciAvPlxcbiAgPC9kaXY+XFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0IGxhbmc9XFxcInRzXFxcIj5cXG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnO1xcbmltcG9ydCBUaXRsZSBmcm9tICdAL2NvbXBvbmVudHMvdGl0bGUvVGl0bGUudnVlJztcXG5pbXBvcnQgTWVudSBmcm9tICdAL2NvbXBvbmVudHMvbWVudS9NZW51LnZ1ZSc7XFxuaW1wb3J0IE5hdmlnYXRvciBmcm9tICdAL2NvbXBvbmVudHMvbmF2aWdhdG9yL05hdmlnYXRvci52dWUnO1xcbmltcG9ydCBFZGl0b3IgZnJvbSAnQC9jb21wb25lbnRzL2VkaXRvci9FZGl0b3IudnVlJztcXG5cXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xcbiAgbmFtZTogJ01haW4nLFxcbiAgY29tcG9uZW50czogeyBUaXRsZSwgTWVudSwgTmF2aWdhdG9yLCBFZGl0b3IgfSxcXG4gIG1vdW50ZWQoKSB7XFxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpIHRoaXMuJHJvdXRlci5wdXNoKCcvbG9naW4nKTtcXG4gIH0sXFxufSk7XFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG4ubC1tYWluLWNvbnRhaW5lciB7XFxuICB3aWR0aDogOTAwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJztcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdBcHAnLFxufSk7XG4iLCJcbmltcG9ydCBUaXRsZSBmcm9tICdAL2NvbXBvbmVudHMvdGl0bGUvVGl0bGUudnVlJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiAnTG9naW4nLFxuICBjb21wb25lbnRzOiB7IFRpdGxlIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiAnJyxcbiAgICAgIHB3OiAnJyxcbiAgICB9O1xuICB9LFxuICBtZXRob2RzOiB7XG4gICAgYXN5bmMgb25TdWJtaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICBpZiAoIXRoaXMuaWQgfHwgIXRoaXMucHcpIHtcbiAgICAgICAgYWxlcnQoJ0lE7JmAIO2MqOyKpOybjOuTnOulvCDrqqjrkZAg7J6F66Cl7ZW07KO87IS47JqUJyk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlkID0gdGhpcy5pZDtcbiAgICAgIGNvbnN0IHB3ID0gdGhpcy5wdztcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgICAnaHR0cHM6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvYXV0aC9sb2dpbicsXG4gICAgICAgICAgeyBpZCwgcHcgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICB9XG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgY29uc3QgdG9rZW4gPSByZXNwb25zZS5kYXRhLnRva2VuO1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKTtcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxufSk7XG4iLCJcbmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVGl0bGUgZnJvbSAnQC9jb21wb25lbnRzL3RpdGxlL1RpdGxlLnZ1ZSc7XG5pbXBvcnQgTWVudSBmcm9tICdAL2NvbXBvbmVudHMvbWVudS9NZW51LnZ1ZSc7XG5pbXBvcnQgTmF2aWdhdG9yIGZyb20gJ0AvY29tcG9uZW50cy9uYXZpZ2F0b3IvTmF2aWdhdG9yLnZ1ZSc7XG5pbXBvcnQgRWRpdG9yIGZyb20gJ0AvY29tcG9uZW50cy9lZGl0b3IvRWRpdG9yLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7XG4gIG5hbWU6ICdNYWluJyxcbiAgY29tcG9uZW50czogeyBUaXRsZSwgTWVudSwgTmF2aWdhdG9yLCBFZGl0b3IgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSB0aGlzLiRyb3V0ZXIucHVzaCgnL2xvZ2luJyk7XG4gIH0sXG59KTtcbiIsImltcG9ydCBNYWluIGZyb20gJy4uL3ZpZXdzL01haW4udnVlJztcbmltcG9ydCBMb2dpbiBmcm9tICcuLi92aWV3cy9Mb2dpbi52dWUnO1xuaW1wb3J0IHsgY3JlYXRlUm91dGVyLCBjcmVhdGVXZWJIaXN0b3J5LCBSb3V0ZVJlY29yZFJhdyB9IGZyb20gJ3Z1ZS1yb3V0ZXInO1xuXG5jb25zdCByb3V0ZXM6IEFycmF5PFJvdXRlUmVjb3JkUmF3PiA9IFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBuYW1lOiAnTWFpbicsXG4gICAgY29tcG9uZW50OiBNYWluLFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9sb2dpbicsXG4gICAgbmFtZTogJ0xvZ2luJyxcbiAgICBjb21wb25lbnQ6IExvZ2luLFxuICB9LFxuXTtcblxuY29uc3Qgcm91dGVyID0gY3JlYXRlUm91dGVyKHtcbiAgaGlzdG9yeTogY3JlYXRlV2ViSGlzdG9yeSgpLFxuICByb3V0ZXMsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUgfSBmcm9tICd2dWV4JztcblxuaW50ZXJmYWNlIGNvbnRlbnRzVHlwZSB7XG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ1tdO1xufVxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3RvcmUoe1xuICBzdGF0ZToge1xuICAgIHNlbGVjdGVkSW5kZXg6IC0xLFxuICAgIHNlbGVjdGVkRmlsZU5hbWU6ICcnLFxuICAgIG9yaWdpbkNvbnRlbnRzOiB7fSBhcyBjb250ZW50c1R5cGUsXG4gICAgdGVtcENvbnRlbnRzOiB7fSBhcyBjb250ZW50c1R5cGUsXG4gICAgZmlsZUxpc3Q6IFtdIGFzIHN0cmluZ1tdLFxuICB9LFxuICBtdXRhdGlvbnM6IHtcbiAgICB1cGRhdGVGaWxlTGlzdChzdGF0ZSwgbmV3TGlzdCkge1xuICAgICAgc3RhdGUuZmlsZUxpc3QgPSBuZXdMaXN0O1xuICAgIH0sXG5cbiAgICBhZGROZXdGaWxlTGlzdChzdGF0ZSwgbmV3RmlsZSkge1xuICAgICAgc3RhdGUuZmlsZUxpc3QucHVzaChuZXdGaWxlKTtcbiAgICB9LFxuXG4gICAgdXBkYXRlU2VsZWN0ZWRJbmRleChzdGF0ZSwgbmV3SW5kZXgpIHtcbiAgICAgIHN0YXRlLnNlbGVjdGVkSW5kZXggPSBuZXdJbmRleDtcbiAgICB9LFxuXG4gICAgdXBkYXRlU2VsZWN0ZWRGaWxlTmFtZShzdGF0ZSwgZmlsZU5hbWUpIHtcbiAgICAgIHN0YXRlLnNlbGVjdGVkRmlsZU5hbWUgPSBmaWxlTmFtZTtcbiAgICB9LFxuXG4gICAgdXBkYXRlVGVtcENvbnRlbnRzKHN0YXRlLCB7IGZpbGVOYW1lLCBuZXdDb250ZW50IH0pIHtcbiAgICAgIHN0YXRlLnRlbXBDb250ZW50c1tmaWxlTmFtZV0gPSBuZXdDb250ZW50O1xuICAgIH0sXG5cbiAgICB1cGRhdGVPcmlnaW5Db250ZW50cyhzdGF0ZSwgeyBmaWxlTmFtZSwgbmV3Q29udGVudCB9KSB7XG4gICAgICBzdGF0ZS5vcmlnaW5Db250ZW50c1tmaWxlTmFtZV0gPSBuZXdDb250ZW50O1xuICAgIH0sXG4gIH0sXG4gIGFjdGlvbnM6IHt9LFxuICBtb2R1bGVzOiB7fSxcbn0pO1xuIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiYTViZDkwJmxhbmc9Y3NzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHNjcmlwdC5fX2htcklkID0gXCI3YmE1YmQ5MFwiXG4gIGNvbnN0IGFwaSA9IF9fVlVFX0hNUl9SVU5USU1FX19cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIWFwaS5jcmVhdGVSZWNvcmQoJzdiYTViZDkwJywgc2NyaXB0KSkge1xuICAgIGFwaS5yZWxvYWQoJzdiYTViZDkwJywgc2NyaXB0KVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MFwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCc3YmE1YmQ5MCcsIHJlbmRlcilcbiAgfSlcblxufVxuXG5zY3JpcHQuX19maWxlID0gXCJzcmMvQXBwLnZ1ZVwiXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNjA4NGRjMiZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIlxuXG5pbXBvcnQgXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2MDg0ZGMyJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcbnNjcmlwdC5yZW5kZXIgPSByZW5kZXJcbnNjcmlwdC5fX3Njb3BlSWQgPSBcImRhdGEtdi0yNjA4NGRjMlwiXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICBzY3JpcHQuX19obXJJZCA9IFwiMjYwODRkYzJcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCcyNjA4NGRjMicsIHNjcmlwdCkpIHtcbiAgICBhcGkucmVsb2FkKCcyNjA4NGRjMicsIHNjcmlwdClcbiAgfVxuICBcbiAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNjA4NGRjMiZzY29wZWQ9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCcyNjA4NGRjMicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5zY3JpcHQuX19maWxlID0gXCJzcmMvdmlld3MvTG9naW4udnVlXCJcblxuZXhwb3J0IGRlZmF1bHQgc2NyaXB0IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vTWFpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzFmMTk3MWEmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5leHBvcnQgKiBmcm9tIFwiLi9NYWluLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz10c1wiXG5cbmltcG9ydCBcIi4vTWFpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMWYxOTcxYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG5zY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtYzFmMTk3MWFcIlxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgc2NyaXB0Ll9faG1ySWQgPSBcImMxZjE5NzFhXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnYzFmMTk3MWEnLCBzY3JpcHQpKSB7XG4gICAgYXBpLnJlbG9hZCgnYzFmMTk3MWEnLCBzY3JpcHQpXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NYWluLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMWYxOTcxYSZzY29wZWQ9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCdjMWYxOTcxYScsIHJlbmRlcilcbiAgfSlcblxufVxuXG5zY3JpcHQuX19maWxlID0gXCJzcmMvdmlld3MvTWFpbi52dWVcIlxuXG5leHBvcnQgZGVmYXVsdCBzY3JpcHQiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLnVzZVswXSEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLnVzZVswXSEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzBdIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy90cy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS51c2VbMF0hLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvdHMtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzBdIS4vTWFpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9dHNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL3RzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLnVzZVswXSEuL01haW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPXRzXCIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS51c2VbMF0hLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2JhNWJkOTAmbGFuZz1jc3NcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYThhODA1YWNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzBdIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiYTViZDkwJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzBdIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiYTViZDkwJmxhbmc9Y3NzXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLnVzZVswXSEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2MDg0ZGMyJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjRjMzI0ZTVlXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLnVzZVswXSEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2MDg0ZGMyJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzBdIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjYwODRkYzImc2NvcGVkPXRydWUmbGFuZz1jc3NcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzBdIS4vTWFpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMWYxOTcxYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJiOTllYTdhMFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS51c2VbMF0hLi9NYWluLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWMxZjE5NzFhJnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzBdIS4vTWFpbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1jMWYxOTcxYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbmltcG9ydCBsaXN0VG9TdHlsZXMgZnJvbSAnLi9saXN0VG9TdHlsZXMnXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxudmFyIG9wdGlvbnMgPSBudWxsXG52YXIgc3NySWRLZXkgPSAnZGF0YS12dWUtc3NyLWlkJ1xuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRTdHlsZXNDbGllbnQgKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uLCBfb3B0aW9ucykge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbJyArIHNzcklkS2V5ICsgJ349XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG4gIGlmIChvcHRpb25zLnNzcklkKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShzc3JJZEtleSwgb2JqLmlkKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlQXBwIH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJztcbmltcG9ydCBzdG9yZSBmcm9tICcuL3N0b3JlJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInO1xuXG5jcmVhdGVBcHAoQXBwKS51c2Uoc3RvcmUpLnVzZShyb3V0ZXIpLm1vdW50KCcjYXBwJyk7XG4iXSwic291cmNlUm9vdCI6IiJ9