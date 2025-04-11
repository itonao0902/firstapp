const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient();
// 上記二つはプリズマ（モデル）を使ってDBにアクセスする時に必ず必要なコード


module.exports = async (req, res) => {
  const posts = await prisma.post.findMany();
  res.render("posts/allPosts", {posts});
};

// req res はコントローラーだけ！ 
// module.exports = (req, res) => { でここがコントローラーだとわかる
//  つまり、ルーターの次の場所