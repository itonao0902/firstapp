const express = require('express');
const router = express.Router();

//サーバーサイドの処理を読み込み
const allPosts = require('../controllers/posts/allPosts');

//リクエストに対する実行処理を定義
router.get('/posts', allPosts);               //投稿一覧表示

// ここでのルーターはexpress.Router(); 
// module.exports = router;役目の認識 ここはルーターですよの意
module.exports = router;