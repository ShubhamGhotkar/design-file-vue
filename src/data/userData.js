export let userData = {
  wayFair: [],
  localHost: [],
};
console.log(userData);
export function pushToArray(data) {
  userData.push(data);
  console.log("userData", userData);
}
