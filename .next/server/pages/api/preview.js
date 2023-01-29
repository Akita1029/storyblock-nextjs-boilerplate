"use strict";
(() => {
var exports = {};
exports.id = 157;
exports.ids = [157];
exports.modules = {

/***/ 676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ preview)
/* harmony export */ });
async function preview(req, res) {
    const { slug =""  } = req.query;
    // get the storyblok params for the bridge to work
    const params = req.url.split("?");
    // Check the secret and next parameters
    // This secret should only be known to this API route and the CMS
    if (req.query.secret !== "MY_SECRET_TOKEN") {
        return res.status(401).json({
            message: "Invalid token"
        });
    }
    // Enable Preview Mode by setting the cookies
    res.setPreviewData({});
    // Set cookie to None, so it can be read in the Storyblok iframe
    const cookies = res.getHeader("Set-Cookie");
    res.setHeader("Set-Cookie", cookies.map((cookie)=>cookie.replace("SameSite=Lax", "SameSite=None;Secure")));
    // Redirect to the path from entry
    res.redirect(`/${slug}?${params[1]}`);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(676));
module.exports = __webpack_exports__;

})();