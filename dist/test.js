"use strict";

var _templateObject = _taggedTemplateLiteral(["<p>", " has sent you a message.</p>"], ["<p>", " has sent you a message.</p>"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 * FileName test
 * Date 2016-07-01
 * Created by jianglinj
 */

var sender = '<script>alert("haha");</script>';
var message = SaferHTML(_templateObject, sender);

function SaferHTML(templateData) {
    var s = templateData[0];
    for (var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);

        // Escape special characters in the substitution.
        s += arg.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

        // Don't escape special characters in the template.
        s += templateData[i];
    }
    return s;
}
console.log(String.raw({ raw: 'test' }, 3));