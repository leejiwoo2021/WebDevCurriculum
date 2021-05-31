// TODO: cjs-package와 esm-package의 함수와 클래스들을 가져다 쓰고 활용하려면 어떻게 해야 할까요?

import { EsmUtilClass, esmUtilFunction } from 'esm';
import cjs from 'cjs';
const { CjsUtilClass, cjsUtilFunction } = cjs;

const esmClass = new EsmUtilClass(7);
const cjsClass = new CjsUtilClass(7);

console.log(esmClass.foo);
esmClass.double();
console.log(esmClass.foo);
console.log(esmUtilFunction('gGhHiI'));

console.log(cjsClass.foo);
cjsClass.double();
console.log(cjsClass.foo);
console.log(cjsUtilFunction('gGhHiI'));
