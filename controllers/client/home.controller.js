
// [GET] /
module.exports.index = async (req, res) => {
 
  res.render("client/pages/index", {
    pageTitle: "Trang chủ",
  });
}