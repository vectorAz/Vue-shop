import Mock from 'mockjs'
import data from './data.json' //ES6模块化语法加载一个json字符串后会自动解析为js对象

// console.log('mockServer')
// 指定监听的url和对应的json数据模板
Mock.mock('/goods', {
  code: 0,
  data: data.goods
})
Mock.mock('/ratings', {
  code: 0,
  data: data.ratings
})
Mock.mock('/info', {
  code: 0,
  data: data.info
})

// console.log('mock');

// export default xxx  不需要暴露