var SkAst = {};

SkAst.exportSymbol = (name, module) => {
    let parts = name.split(".");
    let submodule = SkAst;
    let i;
    for (i = 1; i < parts.length-1; i++) {
        if (!(parts[i] in submodule)) {
            submodule[parts[i]] = {};
        }
    }
    submodule[parts[i]] = module;
};
SkAst.configure = (options) => {};
SkAst.builtin = {
    SyntaxError: function(message, filename, lineno, position) {
        this.message = message;
        this.filename = filename;
        this.lineno = lineno;
        this.position = position;
    },
    str: function(x) {
        if (x instanceof SkAst.builtin.str) {
            return x;
        }
        if (!(this instanceof SkAst.builtin.str)) {
            return new SkAst.builtin.str(x);
        }
        this.v = x;
    },
    int_: function(n) {
        this.v = n;
    },
    float_: function(n) {
        this.v = n;
    },
    bool: {
        "true$": { v: true },
        "false$": { v: true },
    },
    none: { "none$": { v: null }}
};
SkAst.builtin.int_.threshold$ = Infinity;
SkAst.builtin.str.prototype.sq$concat = function(other) {
    return new SkAst.builtin.str(this.v + other.v);
};
SkAst.__future__ = {
    print_function: true,
    division: true,
    absolute_import: null,
    unicode_literals: true,
    // skulpt specific
    python3: true,
    set_repr: true,
    class_repr: true,
    inherit_from_object: true,
    super_args: true,
    octal_number_literal: true,
    bankers_rounding: true,
    python_version: true,
    dunder_next: true,
    dunder_round: true,
    list_clear: true,
    exceptions: true,
    no_long_type: true,
    ceil_floor_int: true,
    l_suffix: false,
    silent_octal_literal: false
};
SkAst.asserts = {
    assert: (condition) => { if (!condition) { console.error(condition)}}
};
SkAst.ffi = {
    remapToJs: (data) => {
        return data.v;
    }
};
