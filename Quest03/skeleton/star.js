const input = Number(window.prompt('몇개를 찍을까요?'));

run(input);

function run(count){
  const printStack = new Array();
  const maxStarCount = getLastStarCount(count);
  let starStr = getStarStr(maxStarCount);
  let tabStr = '';

  while(starStr.length > 0){
    printStack.unshift(tabStr + starStr)
    tabStr += ' '
    starStr = popTwoStar(starStr);
  }
  
  print(printStack);
}

function getLastStarCount(count){
  let result = 1;

  for(let index=1; index<count;index++)
    result += 2;

  return result;
}

function print(stack){
  stack.forEach((line) => console.log(line));
}

function getStarStr(count){
  let result = '';
  for(let index=0;index<count;index++)
    result+='*';
  return result;
}

function popTwoStar(starStr){
  if(starStr.length >= 3)
    return starStr.substr(0,starStr.length-2);

  return '';
}