/**
 *使用mockjs来mock数据，提供mock数据接口
 */

import Mock from 'mockjs'
import data from './data.json'

//注册接口
Mock.mock('/api/products', {
  code: 0,
  data: data.products
})
Mock.mock('/api/seller', {
  code: 0,
  data: data.seller
})
