import ins from '@/api/request.js';


export default async function (page = 1){
  return await ins.get(`/showBlog.php`,{
    params:{
      page
    }
  })
}