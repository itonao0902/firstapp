const express = require('express');
const router = express.Router();

//サーバーサイドの処理を読み込み
const allPosts = require('../controllers/posts/allPosts');
const createGet = require('../controllers/posts/createGet');
const createPost = require('../controllers/posts/createPost');

//リクエストに対する実行処理を定義
router.get('/posts', allPosts);               //投稿一覧表 
router.get('/posts/create', createGet);       //投稿画面表示 Get
router.post('/posts/create', createPost);       //投稿処理

// ここでのルーターはexpress.Router(); 
// module.exports = router;役目の認識 ここはルーターですよの意
module.exports = router;