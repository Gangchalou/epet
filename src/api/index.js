import ajax from './ajax'
//获取首页信息
export const reqHomepage = () => ajax('/homepage')
//获取全部信息
export const reqAllbrands = () => ajax('/allbrands')
//获取分类信息
export const reqCategorys = () => ajax('/class/classer')
//获取品牌信息
export const reqBrand = () => ajax('/brand/brand')
