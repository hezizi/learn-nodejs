// 路由模块，主要负责路由判断

// 1. 创建一个router对象
const express = require('express');
const router = express.Router();

// 2. 通过router对象设置（挂载路由）
router.get('/', (req, res) => {

})
router.get('/login', (req, res) => {

})
router.get('/register', (req, res) => {

})
router.get('/list', (req, res) => {

})

// 3. 返回router
module.exports = router;
