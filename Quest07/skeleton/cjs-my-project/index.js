// TODO: cjs-package와 esm-package의 함수와 클래스들을 가져다 쓰고 활용하려면 어떻게 해야 할까요?

const cjsPkg = require('../cjs-package/index.js');

const cjsClass = new cjsPkg.CjsUtilClass(5);

console.log(cjsClass.foo);
cjsClass.double();
console.log(cjsClass.foo);
console.log(cjsPkg.cjsUtilFunction('aAbBcC'));

(async function esmImport() {
  const { EsmUtilClass, esmUtilFunction } = await import(
    '../esm-package/index.mjs'
  );

  const esmClass = new EsmUtilClass(3);
  console.log(esmClass.foo);
  esmClass.double();
  console.log(esmClass.foo);
  console.log(esmUtilFunction('dDeEfF'));
})();
