export default function(timeStamp, time){
  const date = new Date(timeStamp*1000);
  const Y = date.getFullYear();
  const M = date.getMonth()+1;
  const D = date.getDate();
  let str = `${Y}-${M}-${D}`
  if(time){
    const H = date.getHours();
    const M = date.getMinutes();
    const S = date.getSeconds()
    str += ` ${H}时${M}分${S}秒`
  }
  return str;
}
