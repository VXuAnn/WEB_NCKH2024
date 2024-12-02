// [GET] /admin/profile
module.exports.index = (req, res) => {
    res.render("admin/pages/appointment/index", {
      pageTitle: "Thông tin cá nhân"
    });
  }