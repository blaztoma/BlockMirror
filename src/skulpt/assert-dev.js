SkAst.asserts = {ENABLE_ASSERTS: true};

/**
 * Cause assertion failure when condition is false.
 * 
 * @param {*} condition condition to check
 * @param {string=} message error message
 */
SkAst.asserts.assert = function (condition, message) {
    if (SkAst.asserts.ENABLE_ASSERTS && !condition) {
        var msg = "Assertion failure";
        if (message) {
            msg = msg + ": " + message;
        }
        throw new Error(msg);
    }
    return condition;
};
SkAst.exportSymbol("Sk.asserts.assert", SkAst.asserts.assert);

/**
 * Cause assertion failure.
 * 
 * @param {string=} message error message
 */
SkAst.asserts.fail = function (message) {
    if (SkAst.asserts.ENABLE_ASSERTS) {
        var msg = "Assertion failure";
        if (message) {
            msg = msg + ": " + message;
        }
        throw new Error(msg);
    }
};
SkAst.exportSymbol("Sk.asserts.fail", SkAst.asserts.fail);
