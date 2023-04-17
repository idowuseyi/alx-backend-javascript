export default function returnHowManyArguments(...args) {
  let nArgs = 0;
  for (let arg of args) nArgs += 1;
  return nArgs;
}