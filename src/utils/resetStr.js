export default function(val, len){
  if(val.length > len){
    return val.substr(0,len) + '...'
  }else {
    return val
  }
}