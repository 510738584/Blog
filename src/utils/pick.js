export default function pick(obj, ...prop){
  let res = {};
  for(let item in obj){
    if(prop.includes(item)){
      res[item] = obj[item]
    }
  }
  return res;
}
