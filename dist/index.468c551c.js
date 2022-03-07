// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3ibEg":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "42036d7a98ade5a7";
module.bundle.HMR_BUNDLE_ID = "ee5b4658468c551c";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"b9BDZ":[function(require,module,exports) {
var _app = require("./classes/app");
var _model = require("./model");
var _mainCss = require("./styles/main.css");
new _app.App(_model.model).init();

},{"./classes/app":"kLPu9","./model":"4ntFQ","./styles/main.css":"6AdiW"}],"kLPu9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "App", ()=>App
);
var _site = require("./site");
var _sidebar = require("./sidebar");
class App {
    constructor(model){
        this.model = model;
    }
    init() {
        const site = new _site.Site("#site");
        site.render(this.model);
        const updateCallback = ()=>{
            site.render(this.model);
            const sidebar = new _sidebar.Sidebar("#panel", updateCallback);
        };
        const sidebar = new _sidebar.Sidebar("#panel", updateCallback);
    }
}

},{"./site":"3jnVN","./sidebar":"yEgb4","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"3jnVN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Site", ()=>Site
);
class Site {
    constructor(selector){
        this.$el = document.querySelector(selector);
    }
    render(model) {
        this.$el.innerHTML = "";
        model.forEach((block)=>{
            this.$el.insertAdjacentHTML("beforeend", block.toHTML());
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"j7FRh":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"yEgb4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Sidebar", ()=>Sidebar
);
var _model = require("../model");
var _utils = require("../utils");
var _blocks = require("./blocks");
class Sidebar {
    constructor(selector, updateCallback){
        this.$el = document.querySelector(selector);
        this.update = updateCallback;
        this.init();
    }
    init() {
        this.$el.innerHTML = "";
        this.$el.insertAdjacentHTML("afterbegin", this.template);
        window.remove = this.remove.bind(this);
        window.apply = this.apply.bind(this);
        window.addBlock = this.addBlock.bind(this);
        window.moveUp = this.moveUp.bind(this);
        window.moveDown = this.moveDown.bind(this);
    }
    get template() {
        let template = _model.model.map((x, i)=>{
            let inputs = [
                _utils.inputBlock("value", _utils.css(x.value))
            ];
            inputs.push(...Object.keys(x.options).map((k)=>{
                return _utils.inputBlock(k, _utils.css(x.options[k]));
            }));
            return _utils.formBlock(x.constructor.name, inputs, i, _model.model.length);
        });
        template.push(_utils.addingBlock(Object.keys(_blocks.blocks)));
        return template.join("");
    }
    apply(event, index) {
        event.preventDefault();
        _model.model[index].setValueFromForm(event.target);
        _model.model[index].setOptionsFromForm(event.target);
        this.update();
    }
    remove(index) {
        _model.model.splice(index, 1);
        this.update();
    }
    addBlock(event) {
        if (event.target.value) {
            let block = new _blocks.blocks[event.target.value]("", {
            });
            block.resetOptions();
            _model.model.push(block);
            this.update();
        }
    }
    moveUp(index) {
        if (index <= 0 || index >= _model.model.length) return;
        var block = _model.model[index];
        _model.model.splice(index, 1);
        _model.model.splice(index - 1, 0, block);
        this.update();
    }
    moveDown(index) {
        if (index < 0 || index >= _model.model.length - 1) return;
        var block = _model.model[index];
        _model.model.splice(index, 1);
        _model.model.splice(index + 1, 0, block);
        this.update();
    }
}

},{"../model":"4ntFQ","../utils":"4iA3n","./blocks":"366ns","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"4ntFQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "model", ()=>model
);
var _imagePng = require("./assets/image.png");
var _imagePngDefault = parcelHelpers.interopDefault(_imagePng);
var _blocks = require("./classes/blocks");
let model = [
    new _blocks.TitleBlock("Конструктор сайтов на чистом JavaScript", {
        tag: "h2",
        styles: {
            background: "linear-gradient(to right, #ff0099, #493240)",
            color: "#fff",
            "text-align": "center",
            padding: "1.5rem"
        }
    }),
    new _blocks.ImageBlock(_imagePngDefault.default, {
        styles: {
            padding: "2rem 0",
            display: "flex",
            "justify-content": "center"
        },
        imageStyles: {
            width: "500px",
            height: "auto"
        },
        alt: "Это картинка"
    }),
    new _blocks.ColumnsBlock([
        "Приложение на чистом JavaScript, без использования библиотек",
        "Узнаешь как работают принципы SOLID и ООП в JavaScript за один курс",
        "JavaScript - это просто, интересно. Научись создавать любые UI своими руками", 
    ], {
        styles: {
            background: "linear-gradient(to bottom, #8e2de2, #4a00e0)",
            padding: "2rem",
            color: "#fff",
            "font-weight": "bold"
        }
    }),
    new _blocks.TextBlock(`Крутые видео и уроки по JavaScript тут: Владилен Минин. Тут ты найдешь исчерпывающую информацию по любым аспектам языка, 
        любым фреймворкам, такие как: React, Vue, Angular, Node, Svelte, Express, Next, Nuxt и многое другое. Присоединяйся!`, {
        styles: {
            background: "linear-gradient(to left, #f2994a, #f2c94c)",
            padding: "1rem",
            "font-weight": "bold"
        }
    }), 
];

},{"./assets/image.png":"6XoCX","./classes/blocks":"366ns","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"6XoCX":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('ksLvA') + "image.f6771317.png" + "?" + Date.now();

},{"./helpers/bundle-url":"hPpBg"}],"hPpBg":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"366ns":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Block", ()=>Block
);
parcelHelpers.export(exports, "TitleBlock", ()=>TitleBlock
);
parcelHelpers.export(exports, "ImageBlock", ()=>ImageBlock
);
parcelHelpers.export(exports, "ColumnsBlock", ()=>ColumnsBlock
);
parcelHelpers.export(exports, "TextBlock", ()=>TextBlock
);
parcelHelpers.export(exports, "blocks", ()=>blocks
);
var _utils = require("../utils");
class Block {
    constructor(value, options){
        this.value = value;
        this.options = options;
        Block.prototype.optionsParams = {
            styles: ""
        }; //possible options and their default values
    }
    toHTML() {
        throw new Error("метод toHTML не реализован");
    }
    setValueFromForm(form) {
        this.value = form.value.value;
    }
    setOptionsFromForm(form) {
        for(let key in this.optionsParams)this.options[key] = form[key].value;
    }
    resetOptions() {
        for(let key in this.optionsParams)this.options[key] = this.optionsParams[key];
    }
}
class TitleBlock extends Block {
    constructor(value, options){
        super(value, options);
        this.optionsParams = {
            ...super.optionsParams,
            tag: "h1"
        };
    }
    toHTML() {
        let ops = this.options;
        ops.tag = ops.tag || "h1";
        return _utils.row(_utils.col(`<${ops.tag}>${this.value}</${ops.tag}>`), _utils.css(ops.styles));
    }
}
class ImageBlock extends Block {
    constructor(value, options){
        super(value, options);
        this.optionsParams = {
            ...super.optionsParams,
            imageStyles: "",
            alt: ""
        };
    }
    toHTML() {
        const { imageStyles: is , alt ="" , styles  } = this.options;
        return _utils.row(`<img src="${this.value}" alt="${alt}" style="${_utils.css(is)}"></img>`, _utils.css(styles));
    }
}
class ColumnsBlock extends Block {
    constructor(value, options){
        super(value, options);
        this.optionsParams = {
            ...super.optionsParams
        };
    }
    toHTML() {
        let html = this.value.map(_utils.col).join("");
        return _utils.row(html, _utils.css(this.options.styles));
    }
    setValueFromForm(form) {
        this.value = form.value.value.split(";").map((x)=>x.split(":")[1].trim()
        );
    }
}
class TextBlock extends Block {
    constructor(value, options){
        super(value, options);
        this.optionsParams = {
            ...super.optionsParams
        };
    }
    toHTML() {
        return _utils.row(_utils.col(`<p>${this.value}</p>`), _utils.css(this.options.styles));
    }
}
const blocks = {
    TitleBlock,
    ImageBlock,
    ColumnsBlock,
    TextBlock
};

},{"../utils":"4iA3n","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"4iA3n":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "row", ()=>row
);
parcelHelpers.export(exports, "col", ()=>col
);
parcelHelpers.export(exports, "css", ()=>css
);
parcelHelpers.export(exports, "formBlock", ()=>formBlock
);
parcelHelpers.export(exports, "inputBlock", ()=>inputBlock
);
parcelHelpers.export(exports, "addingBlock", ()=>addingBlock
);
function row(content, styles = "") {
    return `<div class="row" style="${styles}">${content}</div>`;
}
function col(content) {
    return `<div class="col-sm">${content}</div>`;
}
function css(styles = {
}) {
    if (typeof styles === "string") return styles;
    const toString = (key)=>`${key}: ${styles[key]}`
    ;
    return Object.keys(styles).map(toString).join(";");
}
function formBlock(type, inputBlocks, index, length) {
    let inner = inputBlocks.join("");
    return `
    <form onsubmit="apply(event, ${index})">
        <h5>${type}</h5>
        ${inner}
        <button type="submit" class="btn btn-primary btn-sm">Сохранить</button>
        <button type="button" class="btn btn-danger btn-sm" onclick="remove(${index})">Удалить</button>
        <button type="button" class="btn btn-secondary btn-sm" onclick="moveUp(${index})" ${index === 0 ? "disabled" : ""}>↑</button>
        <button type="button" class="btn btn-secondary btn-sm" onclick="moveDown(${index})" ${index === length - 1 ? "disabled" : ""}>↓</button>
        </form>
    <hr />
    `;
}
function inputBlock(name, value) {
    return `
        <div class="form-group">
            <labe>${name}<input class="form-control form-control-sm" name="${name}" value="${value}"></label>
        </div>
    `;
}
function addingBlock(blockList) {
    let list = [
        `<option selected value="">Add Block:</div>`
    ];
    list.push(...blockList.map((x)=>`<option value="${x}"> - ${x}</div>`
    ));
    return `
    <select class="form-select" onchange="addBlock(event)">${list.join("")}
    </select>    
    `;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"6AdiW":[function() {},{}]},["3ibEg","b9BDZ"], "b9BDZ", "parcelRequire3b32")

