// [GET] /admin/profile
module.exports.index = (req, res) => {
    res.render("admin/pages/doctor/index", {
      pageTitle: "Thông tin cá nhân"
    });
  }


module.exports.add = (req, res) => {
    res.render("admin/pages/doctor/add", {
      pageTitle: "Thông tin cá nhân"
    });
  }

  
module.exports.schedule = (req, res) => {
    res.render("admin/pages/doctor/schedule", {
      pageTitle: "Thông tin cá nhân"
    });
  }


