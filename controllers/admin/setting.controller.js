// [GET] /admin/profile
module.exports.index = (req, res) => {
    res.render("admin/pages/setting/index", {
      pageTitle: "Thông tin cá nhân"
    });
  }

// [GET] /admin/profile
module.exports.salarySetting = (req, res) => {
    res.render("admin/pages/setting/salarySetting", {
      pageTitle: "Thông tin cá nhân"
    });
  }