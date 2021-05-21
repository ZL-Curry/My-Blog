// 保存模拟数据路径
import Mock from 'mockjs'

//          路径             访问方法   模拟数据方法 
// Mock.mock(/\/test\/getName/,'get',test.getName)
import { getData } from './test.js'

Mock.setup({
  timeout: '200-500'
})

Mock.mock('/hotproduct', 'get', getData('hotData'));
Mock.mock('/map', 'get', getData('mapData'));
Mock.mock('/rank', 'get', getData('rankData'));
Mock.mock('/seller', 'get', getData('sellerData'));
Mock.mock('/stock', 'get', getData('stockData'));
Mock.mock('/trend', 'get', getData('trendData'));