"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_domain_Test_pages_public_collections_ExploreCollections_js"],{

/***/ "./resources/js/components/Accordion/Accordion.js":
/*!********************************************************!*\
  !*** ./resources/js/components/Accordion/Accordion.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Accordion": () => (/* binding */ Accordion)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _kunukn_react_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @kunukn/react-collapse */ "./node_modules/@kunukn/react-collapse/dist/Collapse.umd.js");
/* harmony import */ var _kunukn_react_collapse__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kunukn_react_collapse__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var Accordion = function Accordion(_ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen,
      heading = _ref.heading,
      onToggle = _ref.onToggle,
      customWrapperClass = _ref.customWrapperClass,
      _ref$labelColor = _ref.labelColor,
      labelColor = _ref$labelColor === void 0 ? '' : _ref$labelColor;
  var isOpenClass = isOpen ? ' open' : '';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "accordion ".concat(customWrapperClass || ''),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "accordion__button".concat(isOpenClass).concat(labelColor),
      onClick: onToggle,
      children: heading
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((_kunukn_react_collapse__WEBPACK_IMPORTED_MODULE_1___default()), {
      overflowOnExpanded: true,
      isOpen: isOpen,
      children: children
    })]
  });
};

/***/ }),

/***/ "./resources/js/domain/Test/components/RadioTab.js":
/*!*********************************************************!*\
  !*** ./resources/js/domain/Test/components/RadioTab.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var RadioTab = function RadioTab(_ref) {
  var values = _ref.values,
      name = _ref.name;
  var value = values.value,
      label = values.label;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "input-element input-radio-tab",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "input-wrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
        type: "radio",
        id: "".concat(name, "-radio-input-").concat(label),
        value: value.toString(),
        name: name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
        htmlFor: "".concat(name, "-radio-input-").concat(label),
        children: label
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RadioTab);

/***/ }),

/***/ "./resources/js/domain/Test/pages/public/collections/ExploreCollections.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/domain/Test/pages/public/collections/ExploreCollections.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var _components_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../components/Accordion/Accordion */ "./resources/js/components/Accordion/Accordion.js");
/* harmony import */ var _components_RadioTab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/RadioTab */ "./resources/js/domain/Test/components/RadioTab.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../components/Shared/Layout/Public/LayoutPublic'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../assets/images/public/image-collection-nft-2.jpg */ "./resources/assets/images/public/image-collection-nft-2.jpg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var collectionCategories = ['art', 'sport', 'collectible', 'music', 'cards', 'design', 'films', 'dancing', 'beatbox', 'extreme'];
var collectionSubcategories = [{
  id: 1,
  subcol_name: 'Football',
  subcol_items: [{
    id: 1,
    subcal_item_name: 'Club',
    subcal_item_content: ['Belgique', 'France', 'Italy', 'Hollande']
  }, {
    id: 2,
    subcal_item_name: 'Joueur',
    subcal_item_content: ['Belgique', 'France', 'Italy', 'Hollande']
  }, {
    id: 3,
    subcal_item_name: 'Pays',
    subcal_item_content: ['Belgique', 'France', 'Italy', 'Hollande']
  }]
}, {
  id: 2,
  subcol_name: 'Equitation',
  subcol_items: [{
    id: 1,
    subcal_item_name: 'Club'
  }, {
    id: 2,
    subcal_item_name: 'Joueur'
  }, {
    id: 3,
    subcal_item_name: 'Pays'
  }]
}, {
  id: 3,
  subcol_name: 'Tennis',
  subcol_items: [{
    id: 1,
    subcal_item_name: 'Club'
  }, {
    id: 2,
    subcal_item_name: 'Joueur'
  }, {
    id: 3,
    subcal_item_name: 'Pays'
  }]
}, {
  id: 4,
  subcol_name: 'Basket',
  subcol_items: [{
    id: 1,
    subcal_item_name: 'Club'
  }, {
    id: 2,
    subcal_item_name: 'Joueur'
  }, {
    id: 3,
    subcal_item_name: 'Pays'
  }]
}];

var ExploreCollections = function ExploreCollections() {
  var sliderRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      activeCollSubcat = _useState2[0],
      setActiveCollSubcat = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      activeCollSubcatItem = _useState4[0],
      setActiveCollSubcatItem = _useState4[1];

  var setIsOpenCollSubcat = function setIsOpenCollSubcat(activeCollSubcatLocal) {
    setActiveCollSubcat(activeCollSubcat === activeCollSubcatLocal ? null : activeCollSubcatLocal);
    setActiveCollSubcatItem(null);
  };

  var setIsOpenCollSubcatItem = function setIsOpenCollSubcatItem(activeCollSubcatItemLocal) {
    setActiveCollSubcatItem(activeCollSubcat === activeCollSubcatItemLocal ? null : activeCollSubcatItemLocal);
  };

  var settings = {
    arrows: true,
    dots: false,
    infinite: false,
    // must have finite slides for the radios to work
    // variableWidth: true, // there is a glitch with this option in that it leaves empty space at end of slide track (shows the number of numberOfSlides)
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 2
      }
    }]
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../components/Shared/Layout/Public/LayoutPublic'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "pb-xxxl",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h1", {
          className: "text-dark-green text-center mv-xl",
          children: "Explore Collections"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "slider-radio-tab mb-xl",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_slick__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread(_objectSpread({}, settings), {}, {
            ref: sliderRef,
            children: collectionCategories.map(function (item, index) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_RadioTab__WEBPACK_IMPORTED_MODULE_3__["default"], {
                name: "collections-radio-tab",
                values: {
                  value: item,
                  label: item
                }
              }, "".concat(item, "-radio-input-").concat(index));
            })
          }))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "col-xl-3 col-md-4 col-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("aside", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "block__white",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("nav", {
                  children: collectionSubcategories.map(function (collection) {
                    var _collection$subcol_it;

                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_2__.Accordion, {
                      isOpen: activeCollSubcat === collection.id,
                      onToggle: function onToggle() {
                        return setIsOpenCollSubcat(collection.id);
                      },
                      customWrapperClass: "accordion__aside",
                      heading: collection.subcol_name,
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                        className: "accordion__body",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
                          className: "list",
                          children: (_collection$subcol_it = collection.subcol_items) === null || _collection$subcol_it === void 0 ? void 0 : _collection$subcol_it.map(function (item) {
                            var _item$subcal_item_con;

                            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_2__.Accordion, {
                                isOpen: activeCollSubcatItem === item.id,
                                onToggle: function onToggle() {
                                  return setIsOpenCollSubcatItem(item.id);
                                },
                                customWrapperClass: "accordion__aside accordion__aside--second",
                                heading: item.subcal_item_name,
                                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                                  className: "accordion__body",
                                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("ul", {
                                    className: "list",
                                    children: (_item$subcal_item_con = item.subcal_item_content) === null || _item$subcal_item_con === void 0 ? void 0 : _item$subcal_item_con.map(function (content) {
                                      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("li", {
                                        children: content
                                      }, 'content-item-' + content);
                                    })
                                  })
                                })
                              })
                            }, 'coll-item-' + item.id);
                          })
                        })
                      })
                    }, 'coll-subcat-' + collection.id);
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "block__dark-green mv-xl",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
                  className: "public-h5 text-light-green-1 mb-md",
                  children: "About our collections"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                  className: "text-white text-14",
                  children: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime delectus alias impedit optio obcaecati! Omnis sit dicta maxime cupiditate et iure a adipisci quaerat distinctio dolorum, laudantium aperiam modi dolores!"
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "col-xl-9 col-md-8 col-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "card__wrapper",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "row",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "col-xl-4 col-md-6",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "card card--borders card--md",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "card__header",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                        className: "card__thumbnail mt-xxs",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                          className: "card__thumbnail--square",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                            src: _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],
                            alt: "Card thumbnail"
                          })
                        })
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "card__body",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
                        className: "card__title text-primary",
                        children: "Jungle of Dreams"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                        children: "An exclusive collection of 5 limited edition picture cards."
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h5", {
                        className: "text-uppercase mt-lg",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                          className: "text-primary",
                          children: "24"
                        }), " creations"]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "card__footer card__section--no-h-padding",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                        className: "card__border-top card__section--h-padding card__section--top-padding",
                        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                          className: "badge",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                            className: "badge__thumbnail",
                            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                              src: _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],
                              alt: "User thumbnail"
                            })
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                            className: "badge__body",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
                              className: "public-h5",
                              children: "Johan Govaerts"
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                              children: "12 available arts on sale"
                            })]
                          })]
                        })
                      })
                    })]
                  })
                })
              })
            })
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExploreCollections);

/***/ }),

/***/ "./resources/assets/images/public/image-collection-nft-2.jpg":
/*!*******************************************************************!*\
  !*** ./resources/assets/images/public/image-collection-nft-2.jpg ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/image-collection-nft-2.jpg?b849a10ebe0cfb5fd0757ebb17050ba1");

/***/ })

}]);
//# sourceMappingURL=resources_js_domain_Test_pages_public_collections_ExploreCollections_js.js.map?id=72773d64eb2d5e4f