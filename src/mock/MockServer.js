
import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/homepage',{code:0, data: data.homepage});
Mock.mock('/allbrands',{code:0, data: data.allbrands});
Mock.mock('/class/classer',{code:0, data: data.categorys});
Mock.mock('/brand/brand',{code:0, data: data.brand});






