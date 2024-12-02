// [GET] /admin/profile
module.exports.index = (req, res) => {
    res.render("admin/pages/patient/index", {
      pageTitle: "Thông tin cá nhân"
    });
  }