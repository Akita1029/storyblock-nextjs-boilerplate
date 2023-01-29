"use strict";
(() => {
var exports = {};
exports.id = 211;
exports.ids = [211];
exports.modules = {

/***/ 959:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ exit)
/* harmony export */ });
async function exit(req, res) {
    const { slug =""  } = req.query;
    // Exit the current user from "Preview Mode". This function accepts no args.
    res.clearPreviewData();
    // set the cookies to None
    const cookies = res.getHeader("Set-Cookie");
    res.setHeader("Set-Cookie", cookies.map((cookie)=>cookie.replace("SameSite=Lax", "SameSite=None;Secure")));
    // Redirect the user back to the index page.
    res.redirect(`/${slug}`);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(959));
module.exports = __webpack_exports__;

})();