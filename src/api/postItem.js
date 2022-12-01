import ins from '@/api/request.js';
export default async function(obj){
  return await ins.get('/addBlog.php',{params:obj})
}