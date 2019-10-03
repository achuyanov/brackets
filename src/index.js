module.exports = function check(str, bracketsConfig) {
  const leftBrs = {};
  const rightBrs = {};
  const brStack = [];

  bracketsConfig.forEach(brPair => {
    leftBrs[brPair[0]] = brPair[1];
    rightBrs[brPair[1]] = brPair[0];
  });

  for (let br of str) {

    if (rightBrs.hasOwnProperty(br)) {
        if ( (brStack.length==0) ) {
          if (rightBrs[br] = leftBrs[br]) {
            brStack.push(br);
          } else {
            return false;
          }
        }
        else {
            let lastBr = brStack[brStack.length-1];
            if (leftBrs[lastBr] == br) {
                brStack.pop();
            } else {
               brStack.push(br);
            }
        }
    } else {
        brStack.push(br);
    }
 }
 
  return (brStack.length == 0);
}
