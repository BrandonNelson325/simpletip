(() => {
var exports = {};
exports.id = "bundle";
exports.ids = ["bundle"];
exports.modules = {

/***/ "./app sync recursive \\.(xml%7Cjs%7C(?<%21\\.d\\.)ts%7Cs?css)$":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./app-root.xml": "./app/app-root.xml",
	"./app.css": "./app/app.css",
	"./app.ts": "./app/app.ts",
	"./main-page.ts": "./app/main-page.ts",
	"./main-page.xml": "./app/main-page.xml",
	"./main-view-model.ts": "./app/main-view-model.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./app sync recursive \\.(xml%7Cjs%7C(?<%21\\.d\\.)ts%7Cs?css)$";

/***/ }),

/***/ "./app/app.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/app.css");
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@nativescript/core/application/application.ios.js");
// Added by app-css-loader


_nativescript_core__WEBPACK_IMPORTED_MODULE_1__.Application.run({ moduleName: 'app-root' });


if (true) {
    let hash = __webpack_require__.h();
    let hmrBootEmittedSymbol = Symbol.for('HMRBootEmitted');
    let originalLiveSyncSymbol = Symbol.for('OriginalLiveSync');
    let hmrRuntimeLastLiveSyncSymbol = Symbol.for('HMRRuntimeLastLiveSync');
    const logVerbose = (title, ...info) => {
        if (false) {}
    };
    const setStatus = (hash, status, message, ...info) => {
        // format is important - CLI expects this exact format
        console.log(`[HMR][${hash}] ${status} | ${message}`);
        if (info === null || info === void 0 ? void 0 : info.length) {
            logVerbose('Additional Info', info);
        }
        // return true if operation was successful
        return status === 'success';
    };
    const applyOptions = {
        ignoreUnaccepted: false,
        ignoreDeclined: false,
        ignoreErrored: false,
        onDeclined(info) {
            setStatus(hash, 'failure', 'A module has been declined.', info);
        },
        onUnaccepted(info) {
            setStatus(hash, 'failure', 'A module has not been accepted.', info);
        },
        onAccepted(info) {
            // console.log('accepted', info)
            logVerbose('Module Accepted', info);
        },
        onDisposed(info) {
            // console.log('disposed', info)
            logVerbose('Module Disposed', info);
        },
        onErrored(info) {
            setStatus(hash, 'failure', 'A module has errored.', info);
        },
    };
    const checkAndApply = async () => {
        hash = __webpack_require__.h();
        const modules = await module.hot.check().catch((error) => {
            return setStatus(hash, 'failure', 'Failed to check.', error.message || error.stack);
        });
        if (!modules) {
            logVerbose('No modules to apply.');
            return false;
        }
        const appliedModules = await module.hot
            .apply(applyOptions)
            .catch((error) => {
            return setStatus(hash, 'failure', 'Failed to apply.', error.message || error.stack);
        });
        if (!appliedModules) {
            logVerbose('No modules applied.');
            return false;
        }
        return setStatus(hash, 'success', 'Successfully applied update.');
    };
    const requireExists = (path) => {
        try {
            global['require'](path);
            return true;
        }
        catch (err) {
            return false;
        }
    };
    const hasUpdate = () => {
        return [
            `~/bundle.${__webpack_require__.h()}.hot-update.json`,
            `~/runtime.${__webpack_require__.h()}.hot-update.json`,
        ].some((path) => requireExists(path));
    };
    if (global.__onLiveSync !== global[hmrRuntimeLastLiveSyncSymbol]) {
        // we store the original liveSync here in case this code runs again
        // which happens when you module.hot.accept() the main file
        global[originalLiveSyncSymbol] = global.__onLiveSync;
    }
    global[hmrRuntimeLastLiveSyncSymbol] = async function () {
        logVerbose('LiveSync');
        if (!hasUpdate()) {
            return false;
        }
        if (!(await checkAndApply())) {
            return false;
        }
        await global[originalLiveSyncSymbol]();
    };
    global.__onLiveSync = global[hmrRuntimeLastLiveSyncSymbol];
    if (!global[hmrBootEmittedSymbol]) {
        global[hmrBootEmittedSymbol] = true;
        setStatus(hash, 'boot', 'HMR Enabled - waiting for changes...');
    }
}


/***/ }),

/***/ "./app/app.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* CSS2JSON */

const ___CSS2JSON_LOADER_EXPORT___ = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":["*","::before","::after"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":["::backdrop"],"declarations":[{"type":"declaration","property":"--tw-border-spacing-x","value":"0"},{"type":"declaration","property":"--tw-border-spacing-y","value":"0"},{"type":"declaration","property":"--tw-translate-x","value":"0"},{"type":"declaration","property":"--tw-translate-y","value":"0"},{"type":"declaration","property":"--tw-rotate","value":"0"},{"type":"declaration","property":"--tw-skew-x","value":"0"},{"type":"declaration","property":"--tw-skew-y","value":"0"},{"type":"declaration","property":"--tw-scale-x","value":"1"},{"type":"declaration","property":"--tw-scale-y","value":"1"},{"type":"declaration","property":"--tw-pan-x","value":""},{"type":"declaration","property":"--tw-pan-y","value":""},{"type":"declaration","property":"--tw-pinch-zoom","value":""},{"type":"declaration","property":"--tw-scroll-snap-strictness","value":"proximity"},{"type":"declaration","property":"--tw-gradient-from-position","value":""},{"type":"declaration","property":"--tw-gradient-via-position","value":""},{"type":"declaration","property":"--tw-gradient-to-position","value":""},{"type":"declaration","property":"--tw-blur","value":""},{"type":"declaration","property":"--tw-brightness","value":""},{"type":"declaration","property":"--tw-contrast","value":""},{"type":"declaration","property":"--tw-grayscale","value":""},{"type":"declaration","property":"--tw-hue-rotate","value":""},{"type":"declaration","property":"--tw-invert","value":""},{"type":"declaration","property":"--tw-saturate","value":""},{"type":"declaration","property":"--tw-sepia","value":""},{"type":"declaration","property":"--tw-drop-shadow","value":""},{"type":"declaration","property":"--tw-backdrop-blur","value":""},{"type":"declaration","property":"--tw-backdrop-brightness","value":""},{"type":"declaration","property":"--tw-backdrop-contrast","value":""},{"type":"declaration","property":"--tw-backdrop-grayscale","value":""},{"type":"declaration","property":"--tw-backdrop-hue-rotate","value":""},{"type":"declaration","property":"--tw-backdrop-invert","value":""},{"type":"declaration","property":"--tw-backdrop-opacity","value":""},{"type":"declaration","property":"--tw-backdrop-saturate","value":""},{"type":"declaration","property":"--tw-backdrop-sepia","value":""},{"type":"declaration","property":"--tw-contain-size","value":""},{"type":"declaration","property":"--tw-contain-layout","value":""},{"type":"declaration","property":"--tw-contain-paint","value":""},{"type":"declaration","property":"--tw-contain-style","value":""}]},{"type":"rule","selectors":[".m-1"],"declarations":[{"type":"declaration","property":"margin","value":"4"}]},{"type":"rule","selectors":[".mb-1"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"4"}]},{"type":"rule","selectors":[".mb-2"],"declarations":[{"type":"declaration","property":"margin-bottom","value":"8"}]},{"type":"rule","selectors":[".mt-2"],"declarations":[{"type":"declaration","property":"margin-top","value":"8"}]},{"type":"rule","selectors":[".h-16"],"declarations":[{"type":"declaration","property":"height","value":"64"}]},{"type":"rule","selectors":[".space-y-2 > * + *"],"declarations":[{"type":"declaration","property":"--tw-space-y-reverse","value":"0"},{"type":"declaration","property":"margin-top","value":"calc(8 * calc(1 - var(--tw-space-y-reverse)))"},{"type":"declaration","property":"margin-bottom","value":"calc(8 * var(--tw-space-y-reverse))"}]},{"type":"rule","selectors":[".rounded-lg"],"declarations":[{"type":"declaration","property":"border-radius","value":"8"}]},{"type":"rule","selectors":[".rounded-xl"],"declarations":[{"type":"declaration","property":"border-radius","value":"12"}]},{"type":"rule","selectors":[".border"],"declarations":[{"type":"declaration","property":"border-width","value":"1px"}]},{"type":"rule","selectors":[".border-2"],"declarations":[{"type":"declaration","property":"border-width","value":"2px"}]},{"type":"rule","selectors":[".border-gray-600"],"declarations":[{"type":"declaration","property":"--tw-border-opacity","value":"1"},{"type":"declaration","property":"border-color","value":"rgb(75 85 99 / var(--tw-border-opacity))"}]},{"type":"rule","selectors":[".border-gray-700"],"declarations":[{"type":"declaration","property":"--tw-border-opacity","value":"1"},{"type":"declaration","property":"border-color","value":"rgb(55 65 81 / var(--tw-border-opacity))"}]},{"type":"rule","selectors":[".border-purple-600"],"declarations":[{"type":"declaration","property":"--tw-border-opacity","value":"1"},{"type":"declaration","property":"border-color","value":"rgb(147 51 234 / var(--tw-border-opacity))"}]},{"type":"rule","selectors":[".bg-black"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(0 0 0 / var(--tw-bg-opacity))"}]},{"type":"rule","selectors":[".bg-gray-800"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(31 41 55 / var(--tw-bg-opacity))"}]},{"type":"rule","selectors":[".bg-gray-900"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(17 24 39 / var(--tw-bg-opacity))"}]},{"type":"rule","selectors":[".bg-purple-600"],"declarations":[{"type":"declaration","property":"--tw-bg-opacity","value":"1"},{"type":"declaration","property":"background-color","value":"rgb(147 51 234 / var(--tw-bg-opacity))"}]},{"type":"rule","selectors":[".p-2"],"declarations":[{"type":"declaration","property":"padding","value":"8"}]},{"type":"rule","selectors":[".p-3"],"declarations":[{"type":"declaration","property":"padding","value":"12"}]},{"type":"rule","selectors":[".p-4"],"declarations":[{"type":"declaration","property":"padding","value":"16"}]},{"type":"rule","selectors":[".text-center"],"declarations":[{"type":"declaration","property":"text-align","value":"center"}]},{"type":"rule","selectors":[".text-2xl"],"declarations":[{"type":"declaration","property":"font-size","value":"24"},{"type":"declaration","property":"line-height","value":"32"}]},{"type":"rule","selectors":[".text-3xl"],"declarations":[{"type":"declaration","property":"font-size","value":"30"},{"type":"declaration","property":"line-height","value":"36"}]},{"type":"rule","selectors":[".text-4xl"],"declarations":[{"type":"declaration","property":"font-size","value":"36"},{"type":"declaration","property":"line-height","value":"40"}]},{"type":"rule","selectors":[".text-lg"],"declarations":[{"type":"declaration","property":"font-size","value":"18"},{"type":"declaration","property":"line-height","value":"28"}]},{"type":"rule","selectors":[".text-sm"],"declarations":[{"type":"declaration","property":"font-size","value":"14"},{"type":"declaration","property":"line-height","value":"20"}]},{"type":"rule","selectors":[".text-xl"],"declarations":[{"type":"declaration","property":"font-size","value":"20"},{"type":"declaration","property":"line-height","value":"28"}]},{"type":"rule","selectors":[".font-bold"],"declarations":[{"type":"declaration","property":"font-weight","value":"700"}]},{"type":"rule","selectors":[".font-semibold"],"declarations":[{"type":"declaration","property":"font-weight","value":"600"}]},{"type":"rule","selectors":[".text-gray-400"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(156 163 175 / var(--tw-text-opacity))"}]},{"type":"rule","selectors":[".text-purple-400"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(192 132 252 / var(--tw-text-opacity))"}]},{"type":"rule","selectors":[".text-white"],"declarations":[{"type":"declaration","property":"--tw-text-opacity","value":"1"},{"type":"declaration","property":"color","value":"rgb(255 255 255 / var(--tw-text-opacity))"}]},{"type":"rule","selectors":[".shadow-inner"],"declarations":[{"type":"declaration","property":"box-shadow","value":"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}]},{"type":"rule","selectors":[".shadow-lg"],"declarations":[{"type":"declaration","property":"box-shadow","value":"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"}]}],"parsingErrors":[]}}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS2JSON_LOADER_EXPORT___);
const { addTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
addTaggedAdditionalCSS(___CSS2JSON_LOADER_EXPORT___, "/Users/bnelson/PersonalDev/simpletip/app/app.css")
if(true) {
	module.hot.accept()
	module.hot.dispose(() => {
		const { removeTaggedAdditionalCSS } = __webpack_require__("./node_modules/@nativescript/core/ui/styling/style-scope.js");
		removeTaggedAdditionalCSS("/Users/bnelson/PersonalDev/simpletip/app/app.css")
	})
}

/***/ }),

/***/ "./app/main-page.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   navigatingTo: () => (/* binding */ navigatingTo)
/* harmony export */ });
/* harmony import */ var _main_view_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./app/main-view-model.ts");

function navigatingTo(args) {
    const page = args.object;
    page.bindingContext = new _main_view_model__WEBPACK_IMPORTED_MODULE_0__.TipCalculatorModel();
}

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-page.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/main-view-model.ts":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TipCalculatorModel: () => (/* binding */ TipCalculatorModel)
/* harmony export */ });
/* harmony import */ var _nativescript_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@nativescript/core/data/observable/index.js");

class TipCalculatorModel extends _nativescript_core__WEBPACK_IMPORTED_MODULE_0__.Observable {
    constructor() {
        super();
        this._billAmount = '';
        this._tipPercentage = 18;
        this._tipAmount = '$0.00';
        this._totalAmount = '$0.00';
        this.calculateTip();
    }
    get billAmount() {
        return this._billAmount ? `$${this._billAmount}` : '';
    }
    setBillAmount(value) {
        if (this._billAmount !== value) {
            this._billAmount = value;
            this.notifyPropertyChange('billAmount', this.billAmount);
            this.calculateTip();
        }
    }
    get tipPercentage() {
        return this._tipPercentage;
    }
    set tipPercentage(value) {
        try {
            const newValue = Math.round(Number(value));
            if (!isNaN(newValue) && newValue >= 0 && newValue <= 30 && this._tipPercentage !== newValue) {
                this._tipPercentage = newValue;
                this.notifyPropertyChange('tipPercentage', newValue);
                this.calculateTip();
            }
        }
        catch (error) {
            console.error('Error in tipPercentage setter:', error);
            this._tipPercentage = 18;
            this.notifyPropertyChange('tipPercentage', 18);
            this.calculateTip();
        }
    }
    get tipAmount() {
        return this._tipAmount;
    }
    set tipAmount(value) {
        if (this._tipAmount !== value) {
            this._tipAmount = value;
            this.notifyPropertyChange('tipAmount', value);
        }
    }
    get totalAmount() {
        return this._totalAmount;
    }
    set totalAmount(value) {
        if (this._totalAmount !== value) {
            this._totalAmount = value;
            this.notifyPropertyChange('totalAmount', value);
        }
    }
    onKeyPress(args) {
        const button = args.object;
        const key = button.text;
        // Don't allow multiple decimal points
        if (key === '.' && this._billAmount.includes('.')) {
            return;
        }
        // Limit to 2 decimal places
        if (this._billAmount.includes('.')) {
            const [, decimal] = this._billAmount.split('.');
            if (decimal && decimal.length >= 2) {
                return;
            }
        }
        // Limit the total length of the number
        if (this._billAmount.length >= 8) {
            return;
        }
        // Don't allow leading zeros unless it's a decimal
        if (this._billAmount === '0' && key !== '.') {
            this.setBillAmount(key);
            return;
        }
        this.setBillAmount(this._billAmount + key);
    }
    onBackspace() {
        if (this._billAmount.length > 0) {
            this.setBillAmount(this._billAmount.slice(0, -1));
        }
    }
    setTip16() {
        this.tipPercentage = 16;
    }
    setTip18() {
        this.tipPercentage = 18;
    }
    setTip20() {
        this.tipPercentage = 20;
    }
    onClear() {
        this.setBillAmount('');
        this.tipPercentage = 18;
        this.calculateTip();
    }
    calculateTip() {
        try {
            const bill = parseFloat(this._billAmount) || 0;
            const tipPercent = this._tipPercentage / 100;
            if (isNaN(bill) || isNaN(tipPercent)) {
                throw new Error('Invalid numbers for calculation');
            }
            const tip = bill * tipPercent;
            const total = bill + tip;
            if (isNaN(tip) || isNaN(total)) {
                throw new Error('Invalid calculation result');
            }
            this.tipAmount = `$${tip.toFixed(2)}`;
            this.totalAmount = `$${total.toFixed(2)}`;
        }
        catch (error) {
            console.error('Error in calculateTip:', error);
            this.tipAmount = '$0.00';
            this.totalAmount = '$0.00';
        }
    }
}

/* NATIVESCRIPT-HOT-LOADER */
if( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./main-view-model.ts")) {
	module.hot.accept()
}

/***/ }),

/***/ "./app/app-root.xml":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<Frame defaultPage=\"main-page\">\n</Frame>\n"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);
if(true) {
	module.hot.accept()
	// module.hot.dispose(() => {})
}

/***/ }),

/***/ "./app/main-page.xml":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* XML-NAMESPACE-LOADER */
const ___XML_NAMESPACE_LOADER_EXPORT___ = "<Page xmlns=\"http://schemas.nativescript.org/tns.xsd\" navigatingTo=\"navigatingTo\" class=\"bg-black\">\n    <ActionBar title=\"Simple Tip\" class=\"bg-purple-600 text-white\" />\n    \n    <GridLayout rows=\"*, auto, auto\" class=\"bg-black\">\n        <ScrollView row=\"0\">\n            <StackLayout class=\"p-4 space-y-2\">\n                <GridLayout columns=\"*, auto\" class=\"mb-1\">\n                    <Label col=\"0\" text=\"Bill Amount\" class=\"text-lg font-semibold text-white\" />\n                    <Button col=\"1\" text=\"Clear\" tap=\"{{ onClear }}\" \n                        class=\"text-purple-400\" />\n                </GridLayout>\n                \n                <Label \n                    text=\"{{ billAmount || '$0.00' }}\"\n                    class=\"p-3 bg-gray-800 border-2 border-gray-600 rounded-lg text-3xl text-center font-bold text-white\" />\n                \n                <GridLayout rows=\"auto\" columns=\"*, *, *\" class=\"mb-2 mt-2\">\n                    <Button col=\"0\" text=\"16%\" tap=\"{{ setTip16 }}\" \n                        class=\"m-1 p-4 text-xl font-bold rounded-xl {{ tipPercentage === 16 ? 'bg-purple-600 text-white shadow-inner' : 'bg-gray-800 text-purple-400 border-2 border-purple-600 shadow-lg' }}\" />\n                    <Button col=\"1\" text=\"18%\" tap=\"{{ setTip18 }}\" \n                        class=\"m-1 p-4 text-xl font-bold rounded-xl {{ tipPercentage === 18 ? 'bg-purple-600 text-white shadow-inner' : 'bg-gray-800 text-purple-400 border-2 border-purple-600 shadow-lg' }}\" />\n                    <Button col=\"2\" text=\"20%\" tap=\"{{ setTip20 }}\" \n                        class=\"m-1 p-4 text-xl font-bold rounded-xl {{ tipPercentage === 20 ? 'bg-purple-600 text-white shadow-inner' : 'bg-gray-800 text-purple-400 border-2 border-purple-600 shadow-lg' }}\" />\n                </GridLayout>\n                \n                <Slider \n                    value=\"{{ tipPercentage }}\" \n                    minValue=\"0\" \n                    maxValue=\"30\" \n                    class=\"mb-1\" />\n                <Label text=\"{{ tipPercentage + '%' }}\" class=\"text-center text-purple-400 text-4xl font-bold mb-1\" />\n                \n                <GridLayout rows=\"auto\" columns=\"*, *\" class=\"mt-2 bg-gray-800 p-3 rounded-lg\">\n                    <StackLayout col=\"0\" class=\"text-center\">\n                        <Label text=\"Tip Amount\" class=\"text-sm text-gray-400\" />\n                        <Label text=\"{{ tipAmount }}\" class=\"text-2xl font-bold text-purple-400\" />\n                    </StackLayout>\n                    <StackLayout col=\"1\" class=\"text-center\">\n                        <Label text=\"Total\" class=\"text-sm text-gray-400\" />\n                        <Label text=\"{{ totalAmount }}\" class=\"text-2xl font-bold text-purple-400\" />\n                    </StackLayout>\n                </GridLayout>\n            </StackLayout>\n        </ScrollView>\n\n        <!-- Custom Numeric Keypad -->\n        <GridLayout row=\"1\" rows=\"auto, auto, auto, auto\" columns=\"*, *, *\" class=\"bg-black p-2\">\n            <Button text=\"1\" tap=\"{{ onKeyPress }}\" class=\"m-1 p-4 text-2xl bg-gray-800 text-white border border-gray-700 rounded-xl\" row=\"0\" col=\"0\" />\n            <Button text=\"2\" tap=\"{{ onKeyPress }}\" class=\"m-1 p-4 text-2xl bg-gray-800 text-white border border-gray-700 rounded-xl\" row=\"0\" col=\"1\" />\n            <Button text=\"3\" tap=\"{{ onKeyPress }}\" class=\"m-1 p-4 text-2xl bg-gray-800 text-white border border-gray-700 rounded-xl\" row=\"0\" col=\"2\" />\n            \n            <Button text=\"4\" tap=\"{{ onKeyPress }}\" class=\"m-1 p-4 text-2xl bg-gray-800 text-white border border-gray-700 rounded-xl\" row=\"1\" col=\"0\" />\n            <Button text=\"5\" tap=\"{{ onKeyPress }}\" class=\"m-1 p-4 text-2xl bg-gray-800 text-white border border-gray-700 rounded-xl\" row=\"1\" col=\"1\" />\n            <Button text=\"6\" tap=\"{{ onKeyPress }}\" class=\"m-1 p-4 text-2xl bg-gray-800 text-white border border-gray-700 rounded-xl\" row=\"1\" col=\"2\" />\n            \n            <Button text=\"7\" tap=\"{{ onKeyPress }}\" class=\"m-1 p-4 text-2xl bg-gray-800 text-white border border-gray-700 rounded-xl\" row=\"2\" col=\"0\" />\n            <Button text=\"8\" tap=\"{{ onKeyPress }}\" class=\"m-1 p-4 text-2xl bg-gray-800 text-white border border-gray-700 rounded-xl\" row=\"2\" col=\"1\" />\n            <Button text=\"9\" tap=\"{{ onKeyPress }}\" class=\"m-1 p-4 text-2xl bg-gray-800 text-white border border-gray-700 rounded-xl\" row=\"2\" col=\"2\" />\n            \n            <Button text=\".\" tap=\"{{ onKeyPress }}\" class=\"m-1 p-4 text-2xl bg-gray-800 text-white border border-gray-700 rounded-xl\" row=\"3\" col=\"0\" />\n            <Button text=\"0\" tap=\"{{ onKeyPress }}\" class=\"m-1 p-4 text-2xl bg-gray-800 text-white border border-gray-700 rounded-xl\" row=\"3\" col=\"1\" />\n            <Button text=\"⌫\" tap=\"{{ onBackspace }}\" class=\"m-1 p-4 text-2xl bg-gray-800 text-white border border-gray-700 rounded-xl\" row=\"3\" col=\"2\" />\n        </GridLayout>\n\n        <!-- Ad Space -->\n        <StackLayout row=\"2\" class=\"bg-gray-900 h-16\"></StackLayout>\n    </GridLayout>\n</Page>"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___XML_NAMESPACE_LOADER_EXPORT___);
if(true) {
	module.hot.accept()
	// module.hot.dispose(() => {})
}

/***/ }),

/***/ "~/package.json":
/***/ ((module) => {

"use strict";
module.exports = require("~/package.json");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor"], () => (__webpack_exec__("./node_modules/@nativescript/core/globals/index.js"), __webpack_exec__("./node_modules/@nativescript/webpack/dist/stubs/virtual-entry-typescript.js"), __webpack_exec__("./node_modules/@nativescript/core/bundle-entry-points.js"), __webpack_exec__("./app/app.ts")));
var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMzQkEsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmxCOztBQUVBLHNDQUFzQyxrQ0FBa0MsVUFBVSxzRUFBc0Usb0VBQW9FLEVBQUUsb0VBQW9FLEVBQUUsK0RBQStELEVBQUUsK0RBQStELEVBQUUsMERBQTBELEVBQUUsMERBQTBELEVBQUUsMERBQTBELEVBQUUsMkRBQTJELEVBQUUsMkRBQTJELEVBQUUsd0RBQXdELEVBQUUsd0RBQXdELEVBQUUsNkRBQTZELEVBQUUsa0ZBQWtGLEVBQUUseUVBQXlFLEVBQUUsd0VBQXdFLEVBQUUsdUVBQXVFLEVBQUUsdURBQXVELEVBQUUsNkRBQTZELEVBQUUsMkRBQTJELEVBQUUsNERBQTRELEVBQUUsNkRBQTZELEVBQUUseURBQXlELEVBQUUsMkRBQTJELEVBQUUsd0RBQXdELEVBQUUsOERBQThELEVBQUUsZ0VBQWdFLEVBQUUsc0VBQXNFLEVBQUUsb0VBQW9FLEVBQUUscUVBQXFFLEVBQUUsc0VBQXNFLEVBQUUsa0VBQWtFLEVBQUUsbUVBQW1FLEVBQUUsb0VBQW9FLEVBQUUsaUVBQWlFLEVBQUUsK0RBQStELEVBQUUsaUVBQWlFLEVBQUUsZ0VBQWdFLEVBQUUsZ0VBQWdFLEVBQUUsRUFBRSwwREFBMEQsb0VBQW9FLEVBQUUsb0VBQW9FLEVBQUUsK0RBQStELEVBQUUsK0RBQStELEVBQUUsMERBQTBELEVBQUUsMERBQTBELEVBQUUsMERBQTBELEVBQUUsMkRBQTJELEVBQUUsMkRBQTJELEVBQUUsd0RBQXdELEVBQUUsd0RBQXdELEVBQUUsNkRBQTZELEVBQUUsa0ZBQWtGLEVBQUUseUVBQXlFLEVBQUUsd0VBQXdFLEVBQUUsdUVBQXVFLEVBQUUsdURBQXVELEVBQUUsNkRBQTZELEVBQUUsMkRBQTJELEVBQUUsNERBQTRELEVBQUUsNkRBQTZELEVBQUUseURBQXlELEVBQUUsMkRBQTJELEVBQUUsd0RBQXdELEVBQUUsOERBQThELEVBQUUsZ0VBQWdFLEVBQUUsc0VBQXNFLEVBQUUsb0VBQW9FLEVBQUUscUVBQXFFLEVBQUUsc0VBQXNFLEVBQUUsa0VBQWtFLEVBQUUsbUVBQW1FLEVBQUUsb0VBQW9FLEVBQUUsaUVBQWlFLEVBQUUsK0RBQStELEVBQUUsaUVBQWlFLEVBQUUsZ0VBQWdFLEVBQUUsZ0VBQWdFLEVBQUUsRUFBRSxvREFBb0QscURBQXFELEVBQUUsRUFBRSxxREFBcUQsNERBQTRELEVBQUUsRUFBRSxxREFBcUQsNERBQTRELEVBQUUsRUFBRSxxREFBcUQseURBQXlELEVBQUUsRUFBRSxxREFBcUQsc0RBQXNELEVBQUUsRUFBRSxrRUFBa0UsbUVBQW1FLEVBQUUscUdBQXFHLEVBQUUsOEZBQThGLEVBQUUsRUFBRSwyREFBMkQsNERBQTRELEVBQUUsRUFBRSwyREFBMkQsNkRBQTZELEVBQUUsRUFBRSx1REFBdUQsNkRBQTZELEVBQUUsRUFBRSx5REFBeUQsNkRBQTZELEVBQUUsRUFBRSxnRUFBZ0Usa0VBQWtFLEVBQUUsa0dBQWtHLEVBQUUsRUFBRSxnRUFBZ0Usa0VBQWtFLEVBQUUsa0dBQWtHLEVBQUUsRUFBRSxrRUFBa0Usa0VBQWtFLEVBQUUsb0dBQW9HLEVBQUUsRUFBRSx5REFBeUQsOERBQThELEVBQUUsK0ZBQStGLEVBQUUsRUFBRSw0REFBNEQsOERBQThELEVBQUUsa0dBQWtHLEVBQUUsRUFBRSw0REFBNEQsOERBQThELEVBQUUsa0dBQWtHLEVBQUUsRUFBRSw4REFBOEQsOERBQThELEVBQUUsb0dBQW9HLEVBQUUsRUFBRSxvREFBb0Qsc0RBQXNELEVBQUUsRUFBRSxvREFBb0QsdURBQXVELEVBQUUsRUFBRSxvREFBb0QsdURBQXVELEVBQUUsRUFBRSw0REFBNEQsOERBQThELEVBQUUsRUFBRSx5REFBeUQseURBQXlELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQseURBQXlELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQseURBQXlELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx3REFBd0QseURBQXlELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx3REFBd0QseURBQXlELEVBQUUsMkRBQTJELEVBQUUsRUFBRSx3REFBd0QseURBQXlELEVBQUUsMkRBQTJELEVBQUUsRUFBRSwwREFBMEQsNERBQTRELEVBQUUsRUFBRSw4REFBOEQsNERBQTRELEVBQUUsRUFBRSw4REFBOEQsZ0VBQWdFLEVBQUUsNEZBQTRGLEVBQUUsRUFBRSxnRUFBZ0UsZ0VBQWdFLEVBQUUsNEZBQTRGLEVBQUUsRUFBRSwyREFBMkQsZ0VBQWdFLEVBQUUsNEZBQTRGLEVBQUUsRUFBRSw2REFBNkQsbUpBQW1KLEVBQUUsRUFBRSwwREFBMEQsbUpBQW1KLEVBQUU7QUFDOXpWLGlFQUFlLDRCQUE0QjtBQUMzQyxRQUFRLHlCQUF5QixFQUFFLG1CQUFPLENBQUMsNkRBQTJDO0FBQ3RGO0FBQ0EsR0FBRyxJQUFVO0FBQ2IsQ0FBQyxpQkFBaUI7QUFDbEIsQ0FBQyxVQUFVO0FBQ1gsVUFBVSw0QkFBNEIsRUFBRSxtQkFBTyxDQUFDLDZEQUEyQztBQUMzRjtBQUNBLEVBQUU7QUFDRjs7Ozs7Ozs7Ozs7OztBQ1h1RDtBQUVoRCxTQUFTLFlBQVksQ0FBQyxJQUFlO0lBQ3hDLE1BQU0sSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGdFQUFrQixFQUFFLENBQUM7QUFDbkQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTitDO0FBRXpDLE1BQU0sa0JBQW1CLFNBQVEsMERBQVU7SUFNOUM7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQU5KLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLG1CQUFjLEdBQVcsRUFBRSxDQUFDO1FBQzVCLGVBQVUsR0FBVyxPQUFPLENBQUM7UUFDN0IsaUJBQVksR0FBVyxPQUFPLENBQUM7UUFJbkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxJQUFJLFVBQVU7UUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDMUQsQ0FBQztJQUVPLGFBQWEsQ0FBQyxLQUFhO1FBQy9CLElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxLQUFLLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDYixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDL0IsQ0FBQztJQUVELElBQUksYUFBYSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDO1lBQ0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFFBQVEsSUFBSSxDQUFDLElBQUksUUFBUSxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsY0FBYyxLQUFLLFFBQVEsRUFBRSxDQUFDO2dCQUMxRixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztnQkFDL0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFDckQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3hCLENBQUM7UUFDTCxDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJLFNBQVM7UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUksU0FBUyxDQUFDLEtBQWE7UUFDdkIsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUssRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbEQsQ0FBQztJQUNMLENBQUM7SUFFRCxJQUFJLFdBQVc7UUFDWCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQUksV0FBVyxDQUFDLEtBQWE7UUFDekIsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLEtBQUssRUFBRSxDQUFDO1lBQzlCLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1lBQzFCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDcEQsQ0FBQztJQUNMLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBUztRQUNoQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQzNCLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFFeEIsc0NBQXNDO1FBQ3RDLElBQUksR0FBRyxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ2hELE9BQU87UUFDWCxDQUFDO1FBRUQsNEJBQTRCO1FBQzVCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUNqQyxNQUFNLENBQUMsRUFBRSxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoRCxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNqQyxPQUFPO1lBQ1gsQ0FBQztRQUNMLENBQUM7UUFFRCx1Q0FBdUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUMvQixPQUFPO1FBQ1gsQ0FBQztRQUVELGtEQUFrRDtRQUNsRCxJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssR0FBRyxJQUFJLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLE9BQU87UUFDWCxDQUFDO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxPQUFPO1FBQ0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVPLFlBQVk7UUFDaEIsSUFBSSxDQUFDO1lBQ0QsTUFBTSxJQUFJLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0MsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBRyxHQUFHLENBQUM7WUFFN0MsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7Z0JBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztZQUN2RCxDQUFDO1lBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxHQUFHLFVBQVUsQ0FBQztZQUM5QixNQUFNLEtBQUssR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBRXpCLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO2dCQUM3QixNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDbEQsQ0FBQztZQUVELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM5QyxDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDL0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7WUFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDL0IsQ0FBQztJQUNMLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakpEO0FBQ0E7QUFDQSxpRUFBZSxpQ0FBaUM7QUFDaEQsR0FBRyxJQUFVO0FBQ2IsQ0FBQyxpQkFBaUI7QUFDbEIsK0JBQStCO0FBQy9COzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQSw4bEJBQThsQixVQUFVLG1LQUFtSyx3QkFBd0Isc1NBQXNTLFdBQVcsNkVBQTZFLHNJQUFzSSxtRUFBbUUsV0FBVyw2RUFBNkUsc0lBQXNJLG1FQUFtRSxXQUFXLDZFQUE2RSxzSUFBc0ksaUhBQWlILGdCQUFnQix3SkFBd0osc0JBQXNCLGlZQUFpWSxZQUFZLHNSQUFzUixjQUFjLHVXQUF1VyxhQUFhLHVKQUF1SixhQUFhLHVKQUF1SixhQUFhLHFLQUFxSyxhQUFhLHVKQUF1SixhQUFhLHVKQUF1SixhQUFhLHFLQUFxSyxhQUFhLHVKQUF1SixhQUFhLHVKQUF1SixhQUFhLHFLQUFxSyxhQUFhLHVKQUF1SixhQUFhLHVKQUF1SixjQUFjO0FBQ3AvSixpRUFBZSxpQ0FBaUM7QUFDaEQsR0FBRyxJQUFVO0FBQ2IsQ0FBQyxpQkFBaUI7QUFDbEIsK0JBQStCO0FBQy9COzs7Ozs7OztBQ1BBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC8uL2FwcC8gc3luYyBcXC4oeG1sJTdDanMlN0MoIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvYXBwLnRzIiwid2VicGFjazovL3N0YWNrYmxpdHotbmF0aXZlc2NyaXB0LXR5cGVzY3JpcHQvLi9hcHAvYXBwLmNzcyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL21haW4tcGFnZS50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL21haW4tdmlldy1tb2RlbC50cyIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL2FwcC1yb290LnhtbCIsIndlYnBhY2s6Ly9zdGFja2JsaXR6LW5hdGl2ZXNjcmlwdC10eXBlc2NyaXB0Ly4vYXBwL21haW4tcGFnZS54bWwiLCJ3ZWJwYWNrOi8vc3RhY2tibGl0ei1uYXRpdmVzY3JpcHQtdHlwZXNjcmlwdC9leHRlcm5hbCBjb21tb25qcyBcIn4vcGFja2FnZS5qc29uXCIiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2FwcC1yb290LnhtbFwiOiBcIi4vYXBwL2FwcC1yb290LnhtbFwiLFxuXHRcIi4vYXBwLmNzc1wiOiBcIi4vYXBwL2FwcC5jc3NcIixcblx0XCIuL2FwcC50c1wiOiBcIi4vYXBwL2FwcC50c1wiLFxuXHRcIi4vbWFpbi1wYWdlLnRzXCI6IFwiLi9hcHAvbWFpbi1wYWdlLnRzXCIsXG5cdFwiLi9tYWluLXBhZ2UueG1sXCI6IFwiLi9hcHAvbWFpbi1wYWdlLnhtbFwiLFxuXHRcIi4vbWFpbi12aWV3LW1vZGVsLnRzXCI6IFwiLi9hcHAvbWFpbi12aWV3LW1vZGVsLnRzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXBwIHN5bmMgcmVjdXJzaXZlIFxcXFwuKHhtbCU3Q2pzJTdDKD88JTIxXFxcXC5kXFxcXC4pdHMlN0NzP2NzcykkXCI7IiwiaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdAbmF0aXZlc2NyaXB0L2NvcmUnO1xuXG5BcHBsaWNhdGlvbi5ydW4oeyBtb2R1bGVOYW1lOiAnYXBwLXJvb3QnIH0pOyIsIi8qIENTUzJKU09OICovXG5cbmNvbnN0IF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX18gPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiKlwiLFwiOjpiZWZvcmVcIixcIjo6YWZ0ZXJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItc3BhY2luZy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdHJhbnNsYXRlLXhcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXJvdGF0ZVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNrZXcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNrZXcteVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXhcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY2FsZS15XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXhcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBhbi15XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1waW5jaC16b29tXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzXCIsXCJ2YWx1ZVwiOlwicHJveGltaXR5XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC1mcm9tLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmFkaWVudC12aWEtcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXRvLXBvc2l0aW9uXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ibHVyXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1icmlnaHRuZXNzXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250cmFzdFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JheXNjYWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1odWUtcm90YXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1pbnZlcnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNhdHVyYXRlXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1zZXBpYVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZHJvcC1zaGFkb3dcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atb3BhY2l0eVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXNpemVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tbGF5b3V0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXBhaW50XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1jb250YWluLXN0eWxlXCIsXCJ2YWx1ZVwiOlwiXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiOjpiYWNrZHJvcFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYm9yZGVyLXNwYWNpbmcteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1zcGFjaW5nLXlcIixcInZhbHVlXCI6XCIwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy10cmFuc2xhdGUteFwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRyYW5zbGF0ZS15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcm90YXRlXCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy14XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2tldy15XCIsXCJ2YWx1ZVwiOlwiMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2NhbGUteFwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjYWxlLXlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1wYW4teFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctcGFuLXlcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXBpbmNoLXpvb21cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3NcIixcInZhbHVlXCI6XCJwcm94aW1pdHlcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LWZyb20tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWdyYWRpZW50LXZpYS1wb3NpdGlvblwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctZ3JhZGllbnQtdG8tcG9zaXRpb25cIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJsdXJcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJyaWdodG5lc3NcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRyYXN0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ncmF5c2NhbGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWh1ZS1yb3RhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWludmVydFwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctc2F0dXJhdGVcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNlcGlhXCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1kcm9wLXNoYWRvd1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYmx1clwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzc1wiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtY29udHJhc3RcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJhY2tkcm9wLWdyYXlzY2FsZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3AtaW52ZXJ0XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iYWNrZHJvcC1zYXR1cmF0ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmFja2Ryb3Atc2VwaWFcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc2l6ZVwiLFwidmFsdWVcIjpcIlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctY29udGFpbi1sYXlvdXRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tcGFpbnRcIixcInZhbHVlXCI6XCJcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWNvbnRhaW4tc3R5bGVcIixcInZhbHVlXCI6XCJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubS0xXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luXCIsXCJ2YWx1ZVwiOlwiNFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5tYi0xXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIubWItMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCI4XCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLm10LTJcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5oLTE2XCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNjRcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc3BhY2UteS0yID4gKiArICpcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXNwYWNlLXktcmV2ZXJzZVwiLFwidmFsdWVcIjpcIjBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tdG9wXCIsXCJ2YWx1ZVwiOlwiY2FsYyg4ICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteS1yZXZlcnNlKSkpXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcImNhbGMoOCAqIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnJvdW5kZWQtbGdcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItcmFkaXVzXCIsXCJ2YWx1ZVwiOlwiOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5yb3VuZGVkLXhsXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLXJhZGl1c1wiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJvcmRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjFweFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib3JkZXItMlwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci13aWR0aFwiLFwidmFsdWVcIjpcIjJweFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5ib3JkZXItZ3JheS02MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJvcmRlci1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJvcmRlci1jb2xvclwiLFwidmFsdWVcIjpcInJnYig3NSA4NSA5OSAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYm9yZGVyLWdyYXktNzAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoNTUgNjUgODEgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJvcmRlci1wdXJwbGUtNjAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1ib3JkZXItb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMTQ3IDUxIDIzNCAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctYmxhY2tcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LWJnLW9wYWNpdHlcIixcInZhbHVlXCI6XCIxXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInJnYigwIDAgMCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKVwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5iZy1ncmF5LTgwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDMxIDQxIDU1IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnLWdyYXktOTAwXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiLS10dy1iZy1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCJyZ2IoMTcgMjQgMzkgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuYmctcHVycGxlLTYwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctYmctb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDE0NyA1MSAyMzQgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0yXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIucC0zXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwicGFkZGluZ1wiLFwidmFsdWVcIjpcIjEyXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnAtNFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInBhZGRpbmdcIixcInZhbHVlXCI6XCIxNlwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LWNlbnRlclwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcInRleHQtYWxpZ25cIixcInZhbHVlXCI6XCJjZW50ZXJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC0yeGxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyNFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImxpbmUtaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMzJcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC0zeGxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIzMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImxpbmUtaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMzZcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC00eGxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIzNlwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImxpbmUtaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiNDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC1sZ1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtc2l6ZVwiLFwidmFsdWVcIjpcIjE4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibGluZS1oZWlnaHRcIixcInZhbHVlXCI6XCIyOFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi50ZXh0LXNtXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMTRcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJsaW5lLWhlaWdodFwiLFwidmFsdWVcIjpcIjIwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQteGxcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJmb250LXNpemVcIixcInZhbHVlXCI6XCIyMFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImxpbmUtaGVpZ2h0XCIsXCJ2YWx1ZVwiOlwiMjhcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9udC1ib2xkXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC13ZWlnaHRcIixcInZhbHVlXCI6XCI3MDBcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuZm9udC1zZW1pYm9sZFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImZvbnQtd2VpZ2h0XCIsXCJ2YWx1ZVwiOlwiNjAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtZ3JheS00MDBcIl0sXCJkZWNsYXJhdGlvbnNcIjpbe1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCItLXR3LXRleHQtb3BhY2l0eVwiLFwidmFsdWVcIjpcIjFcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcInJnYigxNTYgMTYzIDE3NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnRleHQtcHVycGxlLTQwMFwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDE5MiAxMzIgMjUyIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIudGV4dC13aGl0ZVwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIi0tdHctdGV4dC1vcGFjaXR5XCIsXCJ2YWx1ZVwiOlwiMVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwicmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSlcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2hhZG93LWlubmVyXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm94LXNoYWRvd1wiLFwidmFsdWVcIjpcInZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdylcIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuc2hhZG93LWxnXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm94LXNoYWRvd1wiLFwidmFsdWVcIjpcInZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdylcIn1dfV0sXCJwYXJzaW5nRXJyb3JzXCI6W119fVxuZXhwb3J0IGRlZmF1bHQgX19fQ1NTMkpTT05fTE9BREVSX0VYUE9SVF9fX1xuY29uc3QgeyBhZGRUYWdnZWRBZGRpdGlvbmFsQ1NTIH0gPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlL3VpL3N0eWxpbmcvc3R5bGUtc2NvcGVcIik7XG5hZGRUYWdnZWRBZGRpdGlvbmFsQ1NTKF9fX0NTUzJKU09OX0xPQURFUl9FWFBPUlRfX18sIFwiL1VzZXJzL2JuZWxzb24vUGVyc29uYWxEZXYvc2ltcGxldGlwL2FwcC9hcHAuY3NzXCIpXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KClcblx0bW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcblx0XHRjb25zdCB7IHJlbW92ZVRhZ2dlZEFkZGl0aW9uYWxDU1MgfSA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvc3R5bGluZy9zdHlsZS1zY29wZVwiKTtcblx0XHRyZW1vdmVUYWdnZWRBZGRpdGlvbmFsQ1NTKFwiL1VzZXJzL2JuZWxzb24vUGVyc29uYWxEZXYvc2ltcGxldGlwL2FwcC9hcHAuY3NzXCIpXG5cdH0pXG59IiwiaW1wb3J0IHsgRXZlbnREYXRhLCBQYWdlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcbmltcG9ydCB7IFRpcENhbGN1bGF0b3JNb2RlbCB9IGZyb20gJy4vbWFpbi12aWV3LW1vZGVsJztcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBUaXBDYWxjdWxhdG9yTW9kZWwoKTtcbn0iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnQG5hdGl2ZXNjcmlwdC9jb3JlJztcblxuZXhwb3J0IGNsYXNzIFRpcENhbGN1bGF0b3JNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHByaXZhdGUgX2JpbGxBbW91bnQ6IHN0cmluZyA9ICcnO1xuICAgIHByaXZhdGUgX3RpcFBlcmNlbnRhZ2U6IG51bWJlciA9IDE4O1xuICAgIHByaXZhdGUgX3RpcEFtb3VudDogc3RyaW5nID0gJyQwLjAwJztcbiAgICBwcml2YXRlIF90b3RhbEFtb3VudDogc3RyaW5nID0gJyQwLjAwJztcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZVRpcCgpO1xuICAgIH1cblxuICAgIGdldCBiaWxsQW1vdW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaWxsQW1vdW50ID8gYCQke3RoaXMuX2JpbGxBbW91bnR9YCA6ICcnO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0QmlsbEFtb3VudCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLl9iaWxsQW1vdW50ICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fYmlsbEFtb3VudCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgnYmlsbEFtb3VudCcsIHRoaXMuYmlsbEFtb3VudCk7XG4gICAgICAgICAgICB0aGlzLmNhbGN1bGF0ZVRpcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHRpcFBlcmNlbnRhZ2UoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpcFBlcmNlbnRhZ2U7XG4gICAgfVxuXG4gICAgc2V0IHRpcFBlcmNlbnRhZ2UodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBNYXRoLnJvdW5kKE51bWJlcih2YWx1ZSkpO1xuICAgICAgICAgICAgaWYgKCFpc05hTihuZXdWYWx1ZSkgJiYgbmV3VmFsdWUgPj0gMCAmJiBuZXdWYWx1ZSA8PSAzMCAmJiB0aGlzLl90aXBQZXJjZW50YWdlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RpcFBlcmNlbnRhZ2UgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0aXBQZXJjZW50YWdlJywgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlVGlwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiB0aXBQZXJjZW50YWdlIHNldHRlcjonLCBlcnJvcik7XG4gICAgICAgICAgICB0aGlzLl90aXBQZXJjZW50YWdlID0gMTg7XG4gICAgICAgICAgICB0aGlzLm5vdGlmeVByb3BlcnR5Q2hhbmdlKCd0aXBQZXJjZW50YWdlJywgMTgpO1xuICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVUaXAoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldCB0aXBBbW91bnQoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RpcEFtb3VudDtcbiAgICB9XG5cbiAgICBzZXQgdGlwQW1vdW50KHZhbHVlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RpcEFtb3VudCAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX3RpcEFtb3VudCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgndGlwQW1vdW50JywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IHRvdGFsQW1vdW50KCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl90b3RhbEFtb3VudDtcbiAgICB9XG5cbiAgICBzZXQgdG90YWxBbW91bnQodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fdG90YWxBbW91bnQgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl90b3RhbEFtb3VudCA9IHZhbHVlO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnlQcm9wZXJ0eUNoYW5nZSgndG90YWxBbW91bnQnLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbktleVByZXNzKGFyZ3M6IGFueSkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBhcmdzLm9iamVjdDtcbiAgICAgICAgY29uc3Qga2V5ID0gYnV0dG9uLnRleHQ7XG5cbiAgICAgICAgLy8gRG9uJ3QgYWxsb3cgbXVsdGlwbGUgZGVjaW1hbCBwb2ludHNcbiAgICAgICAgaWYgKGtleSA9PT0gJy4nICYmIHRoaXMuX2JpbGxBbW91bnQuaW5jbHVkZXMoJy4nKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTGltaXQgdG8gMiBkZWNpbWFsIHBsYWNlc1xuICAgICAgICBpZiAodGhpcy5fYmlsbEFtb3VudC5pbmNsdWRlcygnLicpKSB7XG4gICAgICAgICAgICBjb25zdCBbLCBkZWNpbWFsXSA9IHRoaXMuX2JpbGxBbW91bnQuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGlmIChkZWNpbWFsICYmIGRlY2ltYWwubGVuZ3RoID49IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBMaW1pdCB0aGUgdG90YWwgbGVuZ3RoIG9mIHRoZSBudW1iZXJcbiAgICAgICAgaWYgKHRoaXMuX2JpbGxBbW91bnQubGVuZ3RoID49IDgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERvbid0IGFsbG93IGxlYWRpbmcgemVyb3MgdW5sZXNzIGl0J3MgYSBkZWNpbWFsXG4gICAgICAgIGlmICh0aGlzLl9iaWxsQW1vdW50ID09PSAnMCcgJiYga2V5ICE9PSAnLicpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QmlsbEFtb3VudChrZXkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRCaWxsQW1vdW50KHRoaXMuX2JpbGxBbW91bnQgKyBrZXkpO1xuICAgIH1cblxuICAgIG9uQmFja3NwYWNlKCkge1xuICAgICAgICBpZiAodGhpcy5fYmlsbEFtb3VudC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNldEJpbGxBbW91bnQodGhpcy5fYmlsbEFtb3VudC5zbGljZSgwLCAtMSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0VGlwMTYoKSB7XG4gICAgICAgIHRoaXMudGlwUGVyY2VudGFnZSA9IDE2O1xuICAgIH1cblxuICAgIHNldFRpcDE4KCkge1xuICAgICAgICB0aGlzLnRpcFBlcmNlbnRhZ2UgPSAxODtcbiAgICB9XG5cbiAgICBzZXRUaXAyMCgpIHtcbiAgICAgICAgdGhpcy50aXBQZXJjZW50YWdlID0gMjA7XG4gICAgfVxuXG4gICAgb25DbGVhcigpIHtcbiAgICAgICAgdGhpcy5zZXRCaWxsQW1vdW50KCcnKTtcbiAgICAgICAgdGhpcy50aXBQZXJjZW50YWdlID0gMTg7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlVGlwKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVUaXAoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBiaWxsID0gcGFyc2VGbG9hdCh0aGlzLl9iaWxsQW1vdW50KSB8fCAwO1xuICAgICAgICAgICAgY29uc3QgdGlwUGVyY2VudCA9IHRoaXMuX3RpcFBlcmNlbnRhZ2UgLyAxMDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChpc05hTihiaWxsKSB8fCBpc05hTih0aXBQZXJjZW50KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBudW1iZXJzIGZvciBjYWxjdWxhdGlvbicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0aXAgPSBiaWxsICogdGlwUGVyY2VudDtcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsID0gYmlsbCArIHRpcDtcblxuICAgICAgICAgICAgaWYgKGlzTmFOKHRpcCkgfHwgaXNOYU4odG90YWwpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGNhbGN1bGF0aW9uIHJlc3VsdCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRpcEFtb3VudCA9IGAkJHt0aXAudG9GaXhlZCgyKX1gO1xuICAgICAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9IGAkJHt0b3RhbC50b0ZpeGVkKDIpfWA7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBjYWxjdWxhdGVUaXA6JywgZXJyb3IpO1xuICAgICAgICAgICAgdGhpcy50aXBBbW91bnQgPSAnJDAuMDAnO1xuICAgICAgICAgICAgdGhpcy50b3RhbEFtb3VudCA9ICckMC4wMCc7XG4gICAgICAgIH1cbiAgICB9XG59IiwiXG4vKiBYTUwtTkFNRVNQQUNFLUxPQURFUiAqL1xuY29uc3QgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fID0gXCI8RnJhbWUgZGVmYXVsdFBhZ2U9XFxcIm1haW4tcGFnZVxcXCI+XFxuPC9GcmFtZT5cXG5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KClcblx0Ly8gbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHt9KVxufSIsIlxuLyogWE1MLU5BTUVTUEFDRS1MT0FERVIgKi9cbmNvbnN0IF9fX1hNTF9OQU1FU1BBQ0VfTE9BREVSX0VYUE9SVF9fXyA9IFwiPFBhZ2UgeG1sbnM9XFxcImh0dHA6Ly9zY2hlbWFzLm5hdGl2ZXNjcmlwdC5vcmcvdG5zLnhzZFxcXCIgbmF2aWdhdGluZ1RvPVxcXCJuYXZpZ2F0aW5nVG9cXFwiIGNsYXNzPVxcXCJiZy1ibGFja1xcXCI+XFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XFxcIlNpbXBsZSBUaXBcXFwiIGNsYXNzPVxcXCJiZy1wdXJwbGUtNjAwIHRleHQtd2hpdGVcXFwiIC8+XFxuICAgIFxcbiAgICA8R3JpZExheW91dCByb3dzPVxcXCIqLCBhdXRvLCBhdXRvXFxcIiBjbGFzcz1cXFwiYmctYmxhY2tcXFwiPlxcbiAgICAgICAgPFNjcm9sbFZpZXcgcm93PVxcXCIwXFxcIj5cXG4gICAgICAgICAgICA8U3RhY2tMYXlvdXQgY2xhc3M9XFxcInAtNCBzcGFjZS15LTJcXFwiPlxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCBjb2x1bW5zPVxcXCIqLCBhdXRvXFxcIiBjbGFzcz1cXFwibWItMVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCJCaWxsIEFtb3VudFxcXCIgY2xhc3M9XFxcInRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2w9XFxcIjFcXFwiIHRleHQ9XFxcIkNsZWFyXFxcIiB0YXA9XFxcInt7IG9uQ2xlYXIgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0LXB1cnBsZS00MDBcXFwiIC8+XFxuICAgICAgICAgICAgICAgIDwvR3JpZExheW91dD5cXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgICAgIDxMYWJlbCBcXG4gICAgICAgICAgICAgICAgICAgIHRleHQ9XFxcInt7IGJpbGxBbW91bnQgfHwgJyQwLjAwJyB9fVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJwLTMgYmctZ3JheS04MDAgYm9yZGVyLTIgYm9yZGVyLWdyYXktNjAwIHJvdW5kZWQtbGcgdGV4dC0zeGwgdGV4dC1jZW50ZXIgZm9udC1ib2xkIHRleHQtd2hpdGVcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvXFxcIiBjb2x1bW5zPVxcXCIqLCAqLCAqXFxcIiBjbGFzcz1cXFwibWItMiBtdC0yXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sPVxcXCIwXFxcIiB0ZXh0PVxcXCIxNiVcXFwiIHRhcD1cXFwie3sgc2V0VGlwMTYgfX1cXFwiIFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJtLTEgcC00IHRleHQteGwgZm9udC1ib2xkIHJvdW5kZWQteGwge3sgdGlwUGVyY2VudGFnZSA9PT0gMTYgPyAnYmctcHVycGxlLTYwMCB0ZXh0LXdoaXRlIHNoYWRvdy1pbm5lcicgOiAnYmctZ3JheS04MDAgdGV4dC1wdXJwbGUtNDAwIGJvcmRlci0yIGJvcmRlci1wdXJwbGUtNjAwIHNoYWRvdy1sZycgfX1cXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNvbD1cXFwiMVxcXCIgdGV4dD1cXFwiMTglXFxcIiB0YXA9XFxcInt7IHNldFRpcDE4IH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibS0xIHAtNCB0ZXh0LXhsIGZvbnQtYm9sZCByb3VuZGVkLXhsIHt7IHRpcFBlcmNlbnRhZ2UgPT09IDE4ID8gJ2JnLXB1cnBsZS02MDAgdGV4dC13aGl0ZSBzaGFkb3ctaW5uZXInIDogJ2JnLWdyYXktODAwIHRleHQtcHVycGxlLTQwMCBib3JkZXItMiBib3JkZXItcHVycGxlLTYwMCBzaGFkb3ctbGcnIH19XFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjb2w9XFxcIjJcXFwiIHRleHQ9XFxcIjIwJVxcXCIgdGFwPVxcXCJ7eyBzZXRUaXAyMCB9fVxcXCIgXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcIm0tMSBwLTQgdGV4dC14bCBmb250LWJvbGQgcm91bmRlZC14bCB7eyB0aXBQZXJjZW50YWdlID09PSAyMCA/ICdiZy1wdXJwbGUtNjAwIHRleHQtd2hpdGUgc2hhZG93LWlubmVyJyA6ICdiZy1ncmF5LTgwMCB0ZXh0LXB1cnBsZS00MDAgYm9yZGVyLTIgYm9yZGVyLXB1cnBsZS02MDAgc2hhZG93LWxnJyB9fVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPC9HcmlkTGF5b3V0PlxcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgPFNsaWRlciBcXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVxcXCJ7eyB0aXBQZXJjZW50YWdlIH19XFxcIiBcXG4gICAgICAgICAgICAgICAgICAgIG1pblZhbHVlPVxcXCIwXFxcIiBcXG4gICAgICAgICAgICAgICAgICAgIG1heFZhbHVlPVxcXCIzMFxcXCIgXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwibWItMVxcXCIgLz5cXG4gICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcInt7IHRpcFBlcmNlbnRhZ2UgKyAnJScgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlciB0ZXh0LXB1cnBsZS00MDAgdGV4dC00eGwgZm9udC1ib2xkIG1iLTFcXFwiIC8+XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICA8R3JpZExheW91dCByb3dzPVxcXCJhdXRvXFxcIiBjb2x1bW5zPVxcXCIqLCAqXFxcIiBjbGFzcz1cXFwibXQtMiBiZy1ncmF5LTgwMCBwLTMgcm91bmRlZC1sZ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8U3RhY2tMYXlvdXQgY29sPVxcXCIwXFxcIiBjbGFzcz1cXFwidGV4dC1jZW50ZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJUaXAgQW1vdW50XFxcIiBjbGFzcz1cXFwidGV4dC1zbSB0ZXh0LWdyYXktNDAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB0aXBBbW91bnQgfX1cXFwiIGNsYXNzPVxcXCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1wdXJwbGUtNDAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgICAgICAgICAgICAgIDxTdGFja0xheW91dCBjb2w9XFxcIjFcXFwiIGNsYXNzPVxcXCJ0ZXh0LWNlbnRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIHRleHQ9XFxcIlRvdGFsXFxcIiBjbGFzcz1cXFwidGV4dC1zbSB0ZXh0LWdyYXktNDAwXFxcIiAvPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCB0ZXh0PVxcXCJ7eyB0b3RhbEFtb3VudCB9fVxcXCIgY2xhc3M9XFxcInRleHQtMnhsIGZvbnQtYm9sZCB0ZXh0LXB1cnBsZS00MDBcXFwiIC8+XFxuICAgICAgICAgICAgICAgICAgICA8L1N0YWNrTGF5b3V0PlxcbiAgICAgICAgICAgICAgICA8L0dyaWRMYXlvdXQ+XFxuICAgICAgICAgICAgPC9TdGFja0xheW91dD5cXG4gICAgICAgIDwvU2Nyb2xsVmlldz5cXG5cXG4gICAgICAgIDwhLS0gQ3VzdG9tIE51bWVyaWMgS2V5cGFkIC0tPlxcbiAgICAgICAgPEdyaWRMYXlvdXQgcm93PVxcXCIxXFxcIiByb3dzPVxcXCJhdXRvLCBhdXRvLCBhdXRvLCBhdXRvXFxcIiBjb2x1bW5zPVxcXCIqLCAqLCAqXFxcIiBjbGFzcz1cXFwiYmctYmxhY2sgcC0yXFxcIj5cXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIjFcXFwiIHRhcD1cXFwie3sgb25LZXlQcmVzcyB9fVxcXCIgY2xhc3M9XFxcIm0tMSBwLTQgdGV4dC0yeGwgYmctZ3JheS04MDAgdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQteGxcXFwiIHJvdz1cXFwiMFxcXCIgY29sPVxcXCIwXFxcIiAvPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiMlxcXCIgdGFwPVxcXCJ7eyBvbktleVByZXNzIH19XFxcIiBjbGFzcz1cXFwibS0xIHAtNCB0ZXh0LTJ4bCBiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC14bFxcXCIgcm93PVxcXCIwXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCIzXFxcIiB0YXA9XFxcInt7IG9uS2V5UHJlc3MgfX1cXFwiIGNsYXNzPVxcXCJtLTEgcC00IHRleHQtMnhsIGJnLWdyYXktODAwIHRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTcwMCByb3VuZGVkLXhsXFxcIiByb3c9XFxcIjBcXFwiIGNvbD1cXFwiMlxcXCIgLz5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIjRcXFwiIHRhcD1cXFwie3sgb25LZXlQcmVzcyB9fVxcXCIgY2xhc3M9XFxcIm0tMSBwLTQgdGV4dC0yeGwgYmctZ3JheS04MDAgdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQteGxcXFwiIHJvdz1cXFwiMVxcXCIgY29sPVxcXCIwXFxcIiAvPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiNVxcXCIgdGFwPVxcXCJ7eyBvbktleVByZXNzIH19XFxcIiBjbGFzcz1cXFwibS0xIHAtNCB0ZXh0LTJ4bCBiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC14bFxcXCIgcm93PVxcXCIxXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCI2XFxcIiB0YXA9XFxcInt7IG9uS2V5UHJlc3MgfX1cXFwiIGNsYXNzPVxcXCJtLTEgcC00IHRleHQtMnhsIGJnLWdyYXktODAwIHRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTcwMCByb3VuZGVkLXhsXFxcIiByb3c9XFxcIjFcXFwiIGNvbD1cXFwiMlxcXCIgLz5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIjdcXFwiIHRhcD1cXFwie3sgb25LZXlQcmVzcyB9fVxcXCIgY2xhc3M9XFxcIm0tMSBwLTQgdGV4dC0yeGwgYmctZ3JheS04MDAgdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQteGxcXFwiIHJvdz1cXFwiMlxcXCIgY29sPVxcXCIwXFxcIiAvPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiOFxcXCIgdGFwPVxcXCJ7eyBvbktleVByZXNzIH19XFxcIiBjbGFzcz1cXFwibS0xIHAtNCB0ZXh0LTJ4bCBiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC14bFxcXCIgcm93PVxcXCIyXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCI5XFxcIiB0YXA9XFxcInt7IG9uS2V5UHJlc3MgfX1cXFwiIGNsYXNzPVxcXCJtLTEgcC00IHRleHQtMnhsIGJnLWdyYXktODAwIHRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTcwMCByb3VuZGVkLXhsXFxcIiByb3c9XFxcIjJcXFwiIGNvbD1cXFwiMlxcXCIgLz5cXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICA8QnV0dG9uIHRleHQ9XFxcIi5cXFwiIHRhcD1cXFwie3sgb25LZXlQcmVzcyB9fVxcXCIgY2xhc3M9XFxcIm0tMSBwLTQgdGV4dC0yeGwgYmctZ3JheS04MDAgdGV4dC13aGl0ZSBib3JkZXIgYm9yZGVyLWdyYXktNzAwIHJvdW5kZWQteGxcXFwiIHJvdz1cXFwiM1xcXCIgY29sPVxcXCIwXFxcIiAvPlxcbiAgICAgICAgICAgIDxCdXR0b24gdGV4dD1cXFwiMFxcXCIgdGFwPVxcXCJ7eyBvbktleVByZXNzIH19XFxcIiBjbGFzcz1cXFwibS0xIHAtNCB0ZXh0LTJ4bCBiZy1ncmF5LTgwMCB0ZXh0LXdoaXRlIGJvcmRlciBib3JkZXItZ3JheS03MDAgcm91bmRlZC14bFxcXCIgcm93PVxcXCIzXFxcIiBjb2w9XFxcIjFcXFwiIC8+XFxuICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0PVxcXCLijKtcXFwiIHRhcD1cXFwie3sgb25CYWNrc3BhY2UgfX1cXFwiIGNsYXNzPVxcXCJtLTEgcC00IHRleHQtMnhsIGJnLWdyYXktODAwIHRleHQtd2hpdGUgYm9yZGVyIGJvcmRlci1ncmF5LTcwMCByb3VuZGVkLXhsXFxcIiByb3c9XFxcIjNcXFwiIGNvbD1cXFwiMlxcXCIgLz5cXG4gICAgICAgIDwvR3JpZExheW91dD5cXG5cXG4gICAgICAgIDwhLS0gQWQgU3BhY2UgLS0+XFxuICAgICAgICA8U3RhY2tMYXlvdXQgcm93PVxcXCIyXFxcIiBjbGFzcz1cXFwiYmctZ3JheS05MDAgaC0xNlxcXCI+PC9TdGFja0xheW91dD5cXG4gICAgPC9HcmlkTGF5b3V0PlxcbjwvUGFnZT5cIlxuZXhwb3J0IGRlZmF1bHQgX19fWE1MX05BTUVTUEFDRV9MT0FERVJfRVhQT1JUX19fXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KClcblx0Ly8gbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHt9KVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIn4vcGFja2FnZS5qc29uXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==