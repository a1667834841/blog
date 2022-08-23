import axios from "axios"

// axios.defaults.baseURL="/api"
/**
 * 获取文章信息
 *   formData: {
        cid: "100056701",
        size: 500,
        prev: 0,
        order: "earliest",
        sample: false,
      },
 * @param {表单} formData 
 * @returns 
 */
async function getArticles(formData) {
  var articleList = []
  await axios.post("/api/serv/v1/column/articles", formData).then((resp) => {
    console.log(resp.data.data.list);
    articleList = resp.data.data.list;
  });
  return articleList
}



/**
 * 获取评论
 * {"aid":248880,"prev":0}
 * @param {表单} articleFrom 
 * @returns 
 */
export async function getComments(articleFrom) {
  var commentList = []
  await axios
    .post("/api/serv/v1/comments", articleFrom)
    .then((resp) => {

      commentList = resp.data.data.list;
      console.log("this.commentList:" + this.commentList)

    });
  return commentList
}

/**
 * 搜索文章
 * @param {表单} searchForm 
 * @returns 
 */
async function searthArticles(searchForm) {
  var articleList = []
  await axios.post("/api/serv/v3/search", searchForm).then((resp) => {
    console.log(resp.data.data);
    let columnList = [];
    let list = resp.data.data.list;
    for (var i = 0; i < list.length; i++) {
      let item = list[i];
      if (item.item_type != "article") {
        continue;
      }
      columnList[i] = {
        id: list[i].article.id,
        article_title:
          list[i].article.title +
          "(" +
          list[i].article.product_author +
          ")",
        type: "article",
      };
    }
    articleList = columnList;
  });
  return articleList
}


var formData = {
  cid: "100056701",
  size: 500,
  prev: 0,
  order: "earliest",
  sample: false,
}

//   getArticles(formData)

export default{
  getArticles,
  searthArticles,
  getComments
}


