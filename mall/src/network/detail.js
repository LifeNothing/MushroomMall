import {request} from "./request";
export function getDetail(iid){
  return request(
    {
      url: '/detail' ,
      params: {
        iid
      }
    }
  )
}
export class Goods{
  constructor(result) {
    this.title = result.itemInfo.title
    this.desc = result.itemInfo.desc
    this.newPrice = result.itemInfo.price
    this.oldPrice = result.itemInfo.oldPrice
    this.discount = result.itemInfo.discountDesc
    this.columns = result.columns
    this.services = result.services
    this.realPrice = result.itemInfo.lowNowPrice
    this.detailImage=result.detailInfo.detailImage
    this.topImages=result.itemInfo.topImages

  }
}
export function getCurrentTime() {
  //获取当前时间并打印
  const _this = this;
  let yy = new Date().getFullYear();
  let mm = new Date().getMonth()+1;
  let dd = new Date().getDate();
  let hh = new Date().getHours();
  let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
  let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
  _this.gettime = yy+'/'+mm+'/'+dd+' '+hh+':'+mf+':'+ss;
}
