"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_domain_Test_pages_public_homepage_Homepage_js"],{

/***/ "./resources/js/domain/Test/pages/public/homepage/Homepage.js":
/*!********************************************************************!*\
  !*** ./resources/js/domain/Test/pages/public/homepage/Homepage.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../components/Shared/Layout/Public/LayoutPublic'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _HomepageBanner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomepageBanner */ "./resources/js/domain/Test/pages/public/homepage/HomepageBanner.js");
/* harmony import */ var _HomepageCollections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomepageCollections */ "./resources/js/domain/Test/pages/public/homepage/HomepageCollections.js");
/* harmony import */ var _HomepageCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HomepageCategories */ "./resources/js/domain/Test/pages/public/homepage/HomepageCategories.js");
/* harmony import */ var _HomepageFavorites__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HomepageFavorites */ "./resources/js/domain/Test/pages/public/homepage/HomepageFavorites.js");
/* harmony import */ var _HomepagePlatform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HomepagePlatform */ "./resources/js/domain/Test/pages/public/homepage/HomepagePlatform.js");
/* harmony import */ var _HomepageTestimonials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./HomepageTestimonials */ "./resources/js/domain/Test/pages/public/homepage/HomepageTestimonials.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










var Homepage = function Homepage() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../../components/Shared/Layout/Public/LayoutPublic'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    headerBg: "NO_IMAGE",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_HomepageBanner__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_HomepageCollections__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_HomepageCategories__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_HomepageFavorites__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_HomepagePlatform__WEBPACK_IMPORTED_MODULE_5__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_HomepageTestimonials__WEBPACK_IMPORTED_MODULE_6__["default"], {})]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Homepage);

/***/ }),

/***/ "./resources/js/domain/Test/pages/public/homepage/HomepageBanner.js":
/*!**************************************************************************!*\
  !*** ./resources/js/domain/Test/pages/public/homepage/HomepageBanner.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var _utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils/hooks */ "./resources/js/utils/hooks.js");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/helpers */ "./resources/js/utils/helpers.js");
/* harmony import */ var _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../assets/images/public/image-collection-nft-2.jpg */ "./resources/assets/images/public/image-collection-nft-2.jpg");
/* harmony import */ var _assets_images_public_image_main_nfc_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../assets/images/public/image-main-nfc.jpg */ "./resources/assets/images/public/image-main-nfc.jpg");
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










var HomepageBanner = function HomepageBanner() {
  var slickSliderRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();

  var _useWindowResized = (0,_utils_hooks__WEBPACK_IMPORTED_MODULE_2__.useWindowResized)(),
      _useWindowResized2 = _slicedToArray(_useWindowResized, 1),
      screenWidth = _useWindowResized2[0];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_3__.calculateSlickToWindowOffset)(slickSliderRef, screenWidth);
  }, [screenWidth]);
  var settings = {
    className: 'slick-overflow-right',
    arrows: false,
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '10%',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // onReInit: () => calculateSlickToWindowOffset(slickSliderRef, screenWidth),
    responsive: [{
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: '16px'
      }
    }]
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("section", {
    className: "homepage__banner",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "section__bg"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "homepage__banner-grid",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "homepage__banner-title",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h1", {
            className: "public-h1 text-white",
            children: ["Cr\xE9ez, g\xE9rez et partagez", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "text-light-green-2",
              children: "vos collections num\xE9riques NFTs"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h3", {
            className: "homepage__subtitle text-white",
            children: ["Plongez dans le monde des NFTs avec WawStreet,", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
              children: "la plateforme belge"
            }), " pour collectionner vos cr\xE9ations NFTs"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "homepage__banner-description",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul", {
            className: "list__cubes",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
              children: ["Des ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("b", {
                children: "collections exclusives"
              }), " et des ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("b", {
                children: "cr\xE9ateurs locaux"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
              children: ["Acheter et vendre ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("b", {
                children: "vos NFTs en euros"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
              children: ["Des ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("b", {
                children: "NFTs rares et certifi\xE9s"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            className: "homepage__subtitle mb-lg",
            children: "Entrez dans l\u2019univers des NFTs avec Wawstreet !"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
            className: "btn btn-turquoise btn-public btn-md",
            children: "Voir les collections"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: "homepage__banner-slider",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
            className: "homepage__subtitle text-white mb-lg",
            children: "Les nouvelles mises en vente"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "homepage__banner-slick",
            ref: slickSliderRef,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_slick__WEBPACK_IMPORTED_MODULE_1__["default"], _objectSpread(_objectSpread({}, settings), {}, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "slide__content",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "card card__slider card__hoverable card__square-base",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "card__header card__square",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "card__hover-content",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: "card card--md",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                          className: "card__body",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                            children: "Harp in a post-digital World - Prelude"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                            children: "Exclusive digital VR experience"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                          className: "card__footer card__footer--border",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                            className: "card__slider-nft",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                              className: "badge card__slider-nft-owner",
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                                className: "badge__thumbnail",
                                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                                  src: _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
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
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                              className: "card__slider-nft-info",
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
                                children: "5 d\xE9tenteurs"
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                                children: "Prix minimum: 150\u20AC"
                              })]
                            })]
                          })
                        })]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "card__thumbnail",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                        src: _assets_images_public_image_main_nfc_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],
                        alt: "banner slider thumbnail"
                      })
                    })]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "slide__content",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "card card__slider card__hoverable card__square-base",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "card__header card__square",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "card__hover-content",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: "card card--md",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                          className: "card__body",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                            children: "Harp in a post-digital World - Prelude"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                            children: "Exclusive digital VR experience"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                          className: "card__footer card__footer--border",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                            className: "card__slider-nft",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                              className: "badge card__slider-nft-owner",
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                                className: "badge__thumbnail",
                                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                                  src: _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
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
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                              className: "card__slider-nft-info",
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
                                children: "5 d\xE9tenteurs"
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                                children: "Prix minimum: 150\u20AC"
                              })]
                            })]
                          })
                        })]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "card__thumbnail",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                        src: _assets_images_public_image_main_nfc_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],
                        alt: "banner slider thumbnail"
                      })
                    })]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "slide__content",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "card card__slider card__hoverable card__square-base",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "card__header card__square",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "card__hover-content",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: "card card--md",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                          className: "card__body",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
                            children: "Harp in a post-digital World - Prelude"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                            children: "Exclusive digital VR experience"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                          className: "card__footer card__footer--border",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                            className: "card__slider-nft",
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                              className: "badge card__slider-nft-owner",
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                                className: "badge__thumbnail",
                                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                                  src: _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_4__["default"],
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
                            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                              className: "card__slider-nft-info",
                              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h5", {
                                children: "5 d\xE9tenteurs"
                              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                                children: "Prix minimum: 150\u20AC"
                              })]
                            })]
                          })
                        })]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "card__thumbnail",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                        src: _assets_images_public_image_main_nfc_jpg__WEBPACK_IMPORTED_MODULE_5__["default"],
                        alt: "banner slider thumbnail"
                      })
                    })]
                  })
                })
              })]
            }))
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomepageBanner);

/***/ }),

/***/ "./resources/js/domain/Test/pages/public/homepage/HomepageCategories.js":
/*!******************************************************************************!*\
  !*** ./resources/js/domain/Test/pages/public/homepage/HomepageCategories.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../assets/images/public/image-collection-nft-2.jpg */ "./resources/assets/images/public/image-collection-nft-2.jpg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var HomepageCategories = function HomepageCategories() {
  var settings = {
    className: 'slick-centered',
    arrows: false,
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '10%',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 576
    }, {
      breakpoint: 10000,
      settings: 'unslick'
    }]
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("section", {
    className: "homepage__categories",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h2", {
        className: "public-h2 text-dark-blue-2 text-center mb-lg",
        children: "Les categories"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("h3", {
        className: "homepage__subtitle text-light-green-1 mb-xl text-center",
        children: ["Explorez ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("b", {
          children: "nos collections uniques"
        }), " class\xE9es par cat\xE9gories"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "homepage__categories-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_slick__WEBPACK_IMPORTED_MODULE_0__["default"], _objectSpread(_objectSpread({}, settings), {}, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "card card--md",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "card__header card__section--no-top-padding",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "card__thumbnail",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "card__thumbnail--ratio-071",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                    src: _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
                    alt: "Card thumbnail"
                  })
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "card__body text-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h5", {
                className: "public-h5",
                children: "Soaring Hearts"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "card card--md",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "card__header card__section--no-top-padding",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "card__thumbnail",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "card__thumbnail--ratio-071",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                    src: _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
                    alt: "Card thumbnail"
                  })
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "card__body text-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h5", {
                className: "public-h5",
                children: "Soaring Hearts"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "card card--md",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "card__header card__section--no-top-padding",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "card__thumbnail",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "card__thumbnail--ratio-071",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                    src: _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
                    alt: "Card thumbnail"
                  })
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "card__body text-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h5", {
                className: "public-h5",
                children: "Soaring Hearts"
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: "card card--md",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "card__header card__section--no-top-padding",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                className: "card__thumbnail",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
                  className: "card__thumbnail--ratio-071",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("img", {
                    src: _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
                    alt: "Card thumbnail"
                  })
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
              className: "card__body text-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("h5", {
                className: "public-h5",
                children: "Soaring Hearts"
              })
            })]
          })]
        }))
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomepageCategories);

/***/ }),

/***/ "./resources/js/domain/Test/pages/public/homepage/HomepageCollections.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/domain/Test/pages/public/homepage/HomepageCollections.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var _assets_images_public_image_main_nfc_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../assets/images/public/image-main-nfc.jpg */ "./resources/assets/images/public/image-main-nfc.jpg");
/* harmony import */ var _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../assets/images/public/image-collection-nft-2.jpg */ "./resources/assets/images/public/image-collection-nft-2.jpg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var HomepageCollections = function HomepageCollections() {
  var settings = {
    className: 'slick-centered',
    arrows: true,
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '30%',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 992,
      settings: {
        arrows: false,
        centerPadding: '15%'
      }
    }, {
      breakpoint: 576,
      settings: {
        arrows: false,
        centerPadding: '10%'
      }
    }]
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
    className: "homepage__collections",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
      className: "public-h2 text-white",
      children: "Nouvelles collections"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "homepage__collections-slick",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_slick__WEBPACK_IMPORTED_MODULE_0__["default"], _objectSpread(_objectSpread({}, settings), {}, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "slide__content",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "card card__slider card__hoverable card__square-base",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "card__header card__square",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "card__hover-content",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "card card--md",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "card__body",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                      children: "Harp in a post-digital World - Prelude"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                      children: "Exclusive digital VR experience"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "card__footer card__footer--border",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      className: "card__slider-nft",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "badge card__slider-nft-owner",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                          className: "badge__thumbnail",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                            src: _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
                            alt: "User thumbnail"
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                          className: "badge__body",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h5", {
                            className: "public-h5",
                            children: "Johan Govaerts"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                            children: "12 available arts on sale"
                          })]
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "card__slider-nft-info",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h5", {
                          children: "5 d\xE9tenteurs"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                          children: "Prix minimum: 150\u20AC"
                        })]
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "card__thumbnail",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                  src: _assets_images_public_image_main_nfc_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
                  alt: "banner slider thumbnail"
                })
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "slide__content",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "card card__slider card__hoverable card__square-base",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "card__header card__square",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "card__hover-content",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "card card--md",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "card__body",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                      children: "Harp in a post-digital World - Prelude"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                      children: "Exclusive digital VR experience"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "card__footer card__footer--border",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      className: "card__slider-nft",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "badge card__slider-nft-owner",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                          className: "badge__thumbnail",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                            src: _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
                            alt: "User thumbnail"
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                          className: "badge__body",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h5", {
                            className: "public-h5",
                            children: "Johan Govaerts"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                            children: "12 available arts on sale"
                          })]
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "card__slider-nft-info",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h5", {
                          children: "5 d\xE9tenteurs"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                          children: "Prix minimum: 150\u20AC"
                        })]
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "card__thumbnail",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                  src: _assets_images_public_image_main_nfc_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
                  alt: "banner slider thumbnail"
                })
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "slide__content",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "card card__slider card__hoverable card__square-base",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "card__header card__square",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "card__hover-content",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "card card--md",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "card__body",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                      children: "Harp in a post-digital World - Prelude"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                      children: "Exclusive digital VR experience"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "card__footer card__footer--border",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      className: "card__slider-nft",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "badge card__slider-nft-owner",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                          className: "badge__thumbnail",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                            src: _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
                            alt: "User thumbnail"
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                          className: "badge__body",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h5", {
                            className: "public-h5",
                            children: "Johan Govaerts"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                            children: "12 available arts on sale"
                          })]
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "card__slider-nft-info",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h5", {
                          children: "5 d\xE9tenteurs"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                          children: "Prix minimum: 150\u20AC"
                        })]
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "card__thumbnail",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                  src: _assets_images_public_image_main_nfc_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
                  alt: "banner slider thumbnail"
                })
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "slide__content",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "card card__slider card__hoverable card__square-base",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "card__header card__square",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "card__hover-content",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "card card--md",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "card__body",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                      children: "Harp in a post-digital World - Prelude"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                      children: "Exclusive digital VR experience"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "card__footer card__footer--border",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      className: "card__slider-nft",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "badge card__slider-nft-owner",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                          className: "badge__thumbnail",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                            src: _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
                            alt: "User thumbnail"
                          })
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                          className: "badge__body",
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h5", {
                            className: "public-h5",
                            children: "Johan Govaerts"
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                            children: "12 available arts on sale"
                          })]
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "card__slider-nft-info",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h5", {
                          children: "5 d\xE9tenteurs"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                          children: "Prix minimum: 150\u20AC"
                        })]
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "card__thumbnail",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
                  src: _assets_images_public_image_main_nfc_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
                  alt: "banner slider thumbnail"
                })
              })]
            })
          })
        })]
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h3", {
      className: "homepage__subtitle text-white mb-sm",
      children: ["Decouvrez toutes les creations et ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("b", {
        children: "demarrez votre collection"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
      className: "btn btn-turquoise btn-md btn-public",
      children: "Voir les collections"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomepageCollections);

/***/ }),

/***/ "./resources/js/domain/Test/pages/public/homepage/HomepageFavorites.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/domain/Test/pages/public/homepage/HomepageFavorites.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../assets/images/public/image-collection-nft-2.jpg */ "./resources/assets/images/public/image-collection-nft-2.jpg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var HomepageFavorites = function HomepageFavorites() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section", {
    className: "homepage__favorites",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
        className: "public-h2 text-dark-blue-2 text-center mb-lg",
        children: "Nos recent coups de coeur"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "homepage__favorites-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          className: "homepage__subtitle text-center",
          children: "Top collections"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "row",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "card card__horizontal card__favorites",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "card__thumbnail",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                  src: _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_0__["default"],
                  alt: "card thumbnail"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "card__body-wrapper",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "card__body",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h5", {
                    className: "card__body-header public-h5",
                    children: "Meebits"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    children: "Floor price: \u20AC150"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "card__footer",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    children: "3 Owners"
                  })
                })]
              })]
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "homepage__favorites-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h3", {
          className: "homepage__subtitle text-center",
          children: "Top Createurs"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "card card__horizontal card__favorites",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "card__thumbnail",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                  src: _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_0__["default"],
                  alt: "card thumbnail"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "card__body-wrapper",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "card__body",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h5", {
                    className: "card__body-header public-h5",
                    children: "Meebits"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    children: "Floor price: \u20AC150"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "card__footer",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    children: "3 Owners"
                  })
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "card card__horizontal card__favorites",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "card__thumbnail",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                  src: _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_0__["default"],
                  alt: "card thumbnail"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "card__body-wrapper",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "card__body",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h5", {
                    className: "card__body-header public-h5",
                    children: "Meebits"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    children: "Floor price: \u20AC150"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "card__footer",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    children: "3 Owners"
                  })
                })]
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "col-lg-4 col-md-6",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "card card__horizontal card__favorites",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                className: "card__thumbnail",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                  src: _assets_images_public_image_collection_nft_2_jpg__WEBPACK_IMPORTED_MODULE_0__["default"],
                  alt: "card thumbnail"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "card__body-wrapper",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                  className: "card__body",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h5", {
                    className: "card__body-header public-h5",
                    children: "Meebits"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    children: "Floor price: \u20AC150"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "card__footer",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                    children: "3 Owners"
                  })
                })]
              })]
            })
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomepageFavorites);

/***/ }),

/***/ "./resources/js/domain/Test/pages/public/homepage/HomepagePlatform.js":
/*!****************************************************************************!*\
  !*** ./resources/js/domain/Test/pages/public/homepage/HomepagePlatform.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var _shared_TabList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/TabList */ "./resources/js/domain/Test/pages/public/homepage/shared/TabList.js");
/* harmony import */ var _assets_logo_Logo_Wawstreet_White_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../assets/logo/Logo-Wawstreet-White.svg */ "./resources/assets/logo/Logo-Wawstreet-White.svg");
/* harmony import */ var _assets_icons_public_icon_usp_chat_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../assets/icons/public/icon-usp-chat.svg */ "./resources/assets/icons/public/icon-usp-chat.svg");
/* harmony import */ var _assets_icons_public_icon_usp_process_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../assets/icons/public/icon-usp-process.svg */ "./resources/assets/icons/public/icon-usp-process.svg");
/* harmony import */ var _assets_icons_public_icon_usp_start_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../assets/icons/public/icon-usp-start.svg */ "./resources/assets/icons/public/icon-usp-start.svg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var HomepagePlatform = function HomepagePlatform() {
  var settings = {
    className: 'slick-overflow-right',
    arrows: false,
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '18%',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 576
    }, {
      breakpoint: 10000,
      settings: 'unslick'
    }]
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
    className: "homepage__platform",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "homepage__platform-logo",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
          src: _assets_logo_Logo_Wawstreet_White_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
          alt: "Wawsteet brand mark"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
        className: "public-h2 text-white text-center mb-lg",
        children: "Une plateforme d\xE9di\xE9e aux cr\xE9ateurs et collectionneurs"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h3", {
        className: "public-h3 text-light-green-2 text-center",
        children: "Que vous soyez cr\xE9ateur ou collectionneur, WawStreet vous accompagne dans la gestion compl\xE8te de vos cr\xE9ations NFT"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_shared_TabList__WEBPACK_IMPORTED_MODULE_1__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "homepage__onboarding text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_slick__WEBPACK_IMPORTED_MODULE_0__["default"], _objectSpread(_objectSpread({}, settings), {}, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "homepage__onboarding-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "homepage__onboarding-icon",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: _assets_icons_public_icon_usp_process_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
                alt: "onboarding icon"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
              className: "public-h4 homepage__onboarding-title",
              children: "Choisissez vos cr\xE9ations, WawStreet s\u2019occupe de tout le reste"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "homepage__onboarding-text",
              children: "Nam porttitor blandit accumsan ut dictum sem, a pretium dui. In malesuada enim in dolor euismod."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "homepage__onboarding-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "homepage__onboarding-icon",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: _assets_icons_public_icon_usp_chat_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
                alt: "onboarding icon"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
              className: "public-h4 homepage__onboarding-title",
              children: "Vous pouvez compter sur le support de WawStreet \xE0 chaque \xE9tape"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "homepage__onboarding-text",
              children: "Nam porttitor blandit accumsan ut dictum sem, a pretium dui. In malesuada enim in dolor euismod."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: "homepage__onboarding-item",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "homepage__onboarding-icon",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                src: _assets_icons_public_icon_usp_start_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
                alt: "onboarding icon"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h4", {
              className: "public-h4 homepage__onboarding-title",
              children: ["Nous mettons vos cr\xE9ations en valeur au sein de nos collections et nos publications", ' ']
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
              className: "homepage__onboarding-text",
              children: "Nam porttitor blandit accumsan ut dictum sem, a pretium dui. In malesuada enim in dolor euismod."
            })]
          })]
        })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
          className: "btn btn-turquoise btn-public btn-md mt-xxxl",
          children: "Nous contacter"
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomepagePlatform);

/***/ }),

/***/ "./resources/js/domain/Test/pages/public/homepage/HomepageTestimonials.js":
/*!********************************************************************************!*\
  !*** ./resources/js/domain/Test/pages/public/homepage/HomepageTestimonials.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_public_image_nft_jungle_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../assets/images/public/image-nft-jungle.jpg */ "./resources/assets/images/public/image-nft-jungle.jpg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var HomepageTestimonials = function HomepageTestimonials() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section", {
    className: "homepage__testimonials",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "section__bg",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        src: _assets_images_public_image_nft_jungle_jpg__WEBPACK_IMPORTED_MODULE_0__["default"],
        alt: ""
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "card card__horizontal card__testimonials card--xl",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "card__testimonials-user text-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "card__thumbnail card__thumbnail--circle",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: _assets_images_public_image_nft_jungle_jpg__WEBPACK_IMPORTED_MODULE_0__["default"],
              alt: "user thumbnail"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
            className: "public-h4 card__testimonials-username",
            children: "MIDAM"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "card__testimonials-jobtitle",
            children: "Dessinateur"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "card__body",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h5", {
            className: "card__testimonials-details-title card__body-header",
            children: "MIDAM, dessinateur de Kid Paddle"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h6", {
            className: "card__testimonials-details",
            children: "Je ne suis pas branch\xE9 tech, mais je veux participer \xE0 cette nouvelle \xE9volution de l\u2019art et de ce que proposent les NFTs. Je me lance avec WawStreet !"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "card__head--mobile",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
            className: "public-h4 card__testimonials-username",
            children: "MIDAM"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
            className: "card__testimonials-jobtitle",
            children: "Dessinateur"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "row",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "col-12 col-md-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "flex-align-center homepage__testimonials-user",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              src: _assets_images_public_image_nft_jungle_jpg__WEBPACK_IMPORTED_MODULE_0__["default"],
              alt: "user thumbnail"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
                className: "public-h4",
                children: "MIDAM"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h4", {
                className: "public-h4",
                children: ["12 ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  children: "available arts on sale"
                })]
              })]
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "col-12 col-md-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "homepage__testimonials-stats",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
              className: "public-h4 text-light-green-2",
              children: " +600.50%"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h4", {
              className: "public-h4",
              children: "\u20AC12,636"
            })]
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomepageTestimonials);

/***/ }),

/***/ "./resources/js/domain/Test/pages/public/homepage/shared/TabList.js":
/*!**************************************************************************!*\
  !*** ./resources/js/domain/Test/pages/public/homepage/shared/TabList.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utils */ "./resources/js/utils/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/useTranslation.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var TabList = function TabList(props) {
  var _props$listClass;

  var _useTranslation = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)(),
      t = _useTranslation.t;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: (_props$listClass = props.listClass) !== null && _props$listClass !== void 0 ? _props$listClass : 'tabs-pill',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_1__.Link, {
      className: "tabs-pill__item active",
      url: "/",
      href: "/",
      children: t('category.category_tab')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_utils__WEBPACK_IMPORTED_MODULE_1__.Link, {
      className: "tabs-pill__item",
      url: "/",
      href: "/",
      children: t('category.sub_category_tab')
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabList);

/***/ }),

/***/ "./resources/js/utils/api.js":
/*!***********************************!*\
  !*** ./resources/js/utils/api.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "api": () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

var api = (axios__WEBPACK_IMPORTED_MODULE_0___default());
api.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response && [401, 403, 419, 503].includes(error.response.status)) {
    window.location.replace("/error/".concat(error.response.status));
    return false;
  } else {
    return Promise.reject(error);
  }
});

/***/ }),

/***/ "./resources/js/utils/auth.js":
/*!************************************!*\
  !*** ./resources/js/utils/auth.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "can": () => (/* binding */ can),
/* harmony export */   "has": () => (/* binding */ has)
/* harmony export */ });
var has = function has(auth) {
  if (!auth) {
    return false;
  }

  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
    if (auth.roles.includes(i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1])) {
      return true;
    }
  }

  return false;
};
var can = function can(auth) {
  if (!auth) {
    return false;
  }

  for (var i = 0; i < (arguments.length <= 1 ? 0 : arguments.length - 1); i++) {
    if (auth.permissions.includes(i + 1 < 1 || arguments.length <= i + 1 ? undefined : arguments[i + 1])) {
      return true;
    }
  }

  return false;
};

/***/ }),

/***/ "./resources/js/utils/conditionalWrapper.js":
/*!**************************************************!*\
  !*** ./resources/js/utils/conditionalWrapper.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConditionalWrapper": () => (/* binding */ ConditionalWrapper)
/* harmony export */ });
var ConditionalWrapper = function ConditionalWrapper(_ref) {
  var condition = _ref.condition,
      wrapper = _ref.wrapper,
      children = _ref.children;
  return condition ? wrapper(children) : children;
};

/***/ }),

/***/ "./resources/js/utils/fileDownload.js":
/*!********************************************!*\
  !*** ./resources/js/utils/fileDownload.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fileDownload": () => (/* binding */ fileDownload)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./resources/js/utils/api.js");

var fileDownload = function fileDownload(url, callback, errorCallback) {
  (0,_api__WEBPACK_IMPORTED_MODULE_0__.api)({
    url: url,
    method: 'GET',
    responseType: 'blob' // important

  }).then(function (response) {
    var filename = response.headers['content-disposition'].split(';').find(function (n) {
      return n.includes('filename=');
    }).replace('filename=', '').replace(/"/g, '').trim();
    var blob = new Blob([response.data]); // eslint-disable-line

    if (typeof window.navigator.msSaveBlob !== 'undefined') {
      // IE workaround for "HTML7007: One or more blob URLs were
      // revoked by closing the blob for which they were created.
      // These URLs will no longer resolve as the data backing
      // the URL has been freed."
      window.navigator.msSaveBlob(blob, filename);
    } else {
      var blobURL = window.URL.createObjectURL(blob);
      var tempLink = document.createElement('a');
      tempLink.style.display = 'none';
      tempLink.href = blobURL;
      tempLink.setAttribute('download', filename); // Safari thinks _blank anchor are pop ups. We only want to set _blank
      // target if the browser does not support the HTML5 download attribute.
      // This allows you to download files in desktop safari if pop up blocking
      // is enabled.

      if (typeof tempLink.download === 'undefined') {
        tempLink.setAttribute('target', '_blank');
      }

      document.body.appendChild(tempLink);
      tempLink.click(); // Fixes "webkit blob resource error 1"

      setTimeout(function () {
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(blobURL);
      }, 0);
    }

    if (callback) {
      callback();
    }
  })["catch"](function (error) {
    if (errorCallback) {
      errorCallback(error);
    }
  });
};

/***/ }),

/***/ "./resources/js/utils/forms.js":
/*!*************************************!*\
  !*** ./resources/js/utils/forms.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleApiFormErrors": () => (/* binding */ handleApiFormErrors),
/* harmony export */   "handleFormErrors": () => (/* binding */ handleFormErrors),
/* harmony export */   "validateFormData": () => (/* binding */ validateFormData)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./resources/js/utils/index.js");

var handleFormErrors = function handleFormErrors(formRef, errors) {
  if (!!errors && !!Object.keys(errors).length) {
    formRef.current.setErrors(errors);
    formRef.current.setSubmitting(false);
  }
};
var handleApiFormErrors = function handleApiFormErrors(error, setErrors) {
  if (error.response.status === 422) {
    setErrors(error.response.data.errors);
  } else {
    window.location.replace("/error/".concat(error.response.status));
  }
};
var validateFormData = function validateFormData(values, rules) {
  var messages = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var attributeNames = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var errors = {};
  var validation = new _utils__WEBPACK_IMPORTED_MODULE_0__.Validate(values, rules, messages);
  validation.setAttributeNames(attributeNames);

  if (validation.fails()) {
    errors = validation.errors.errors;
  }

  return errors;
};

/***/ }),

/***/ "./resources/js/utils/ga.js":
/*!**********************************!*\
  !*** ./resources/js/utils/ga.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventTrack": () => (/* binding */ eventTrack)
/* harmony export */ });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/dist/js.cookie.mjs");


var eventTrack = function eventTrack(category, action, label, value) {
  if (js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get('analytics-cookies') === 'true') {
    var data = {
      category: category,
      action: action,
      label: label
    };

    if (value) {
      data.value = value;
    }

    react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].event(data);
  }
};

/***/ }),

/***/ "./resources/js/utils/helpers.js":
/*!***************************************!*\
  !*** ./resources/js/utils/helpers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calculateSlickToWindowOffset": () => (/* binding */ calculateSlickToWindowOffset),
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "flatArrayObject": () => (/* binding */ flatArrayObject),
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "isRequiredFromRules": () => (/* binding */ isRequiredFromRules),
/* harmony export */   "objectToQuerystring": () => (/* binding */ objectToQuerystring),
/* harmony export */   "parseQueryString": () => (/* binding */ parseQueryString),
/* harmony export */   "stringSplice": () => (/* binding */ stringSplice),
/* harmony export */   "trans": () => (/* binding */ trans)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parse/index.js");
var _this = undefined;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


var el = document.getElementById('app');
var initialPageData = JSON.parse(el.dataset.page);
var parseQueryString = function parseQueryString() {
  var str = window.location.search;
  var objURL = {};
  str.replace(new RegExp('([^?=&]+)(=([^&]*))?', 'g'), // eslint-disable-line
  function ($0, $1, $2, $3) {
    objURL[$1] = $3;
  });
  return objURL;
};
var objectToQuerystring = function objectToQuerystring(params) {
  var result = '';

  function convertJsonToQueryString(data, progress, name) {
    name = name || '';
    progress = progress || '';

    if (data && _typeof(data) === 'object') {
      Object.keys(data).forEach(function (key) {
        var value = data[key];

        if (key !== 'Cell' && key !== 'Filter' && key !== 'filterMethod' && key !== 'Expander') {
          if (name === '') {
            convertJsonToQueryString(value, progress, key);
          } else {
            convertJsonToQueryString(value, progress, name + '[' + key + ']');
          }
        }
      });
    } else {
      result = result ? result.concat('&') : result.concat('?');
      result = result.concat("".concat(name, "=").concat(data));
    }
  }

  convertJsonToQueryString(params);
  return result;
};
var formatDate = function formatDate(date) {
  return date ? (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(date, 'yyyy-MM-dd HH:mm:ss', new Date()) : null;
};
var isRequiredFromRules = function isRequiredFromRules(rules) {
  var returnValue = false;

  if (Array.isArray(rules)) {
    rules.forEach(function (rule) {
      if (rule === 'required') {
        returnValue = true;
      }
    });
  }

  if (typeof rules === 'string') {
    rules.split('|').forEach(function (rule) {
      if (rule === 'required') {
        returnValue = true;
      }
    });
  }

  return returnValue;
};
var flatArrayObject = function flatArrayObject(array, property) {
  var result = [];
  array.forEach(function (a) {
    result.push(a);

    if (Array.isArray(a[property])) {
      result = result.concat(flatArrayObject(a[property], property));
    }
  });
  return result;
};
var debounce = function debounce(func, limit) {
  var lastFunc;
  var context = _this;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(lastFunc);
    lastFunc = setTimeout(function () {
      func.apply(context, args);
    }, limit);
  };
};
var calculateSlickToWindowOffset = function calculateSlickToWindowOffset(sliderRef, windowWidth) {
  var orientation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'right';
  var slickSliderWrapper = sliderRef.current;

  if (slickSliderWrapper) {
    var slickPosition = slickSliderWrapper.getBoundingClientRect();
    var spaceToOffset = Math.floor(windowWidth - slickPosition[orientation]);
    var slickSliderEle = slickSliderWrapper.querySelector(".slick-overflow-".concat(orientation));
    slickSliderEle.setAttribute('style', "margin-".concat(orientation, ": -").concat(spaceToOffset, "px"));
  }
};
var trans = function trans(key) {
  if (key[initialPageData.props.app.locale]) {
    return key[initialPageData.props.app.locale];
  }

  return key.en;
};
var stringSplice = function stringSplice(str, index, charDelete, add) {
  // This does not mutate original string
  // handle from end of string if index is negative
  if (index < 0) {
    index = str.length + index;

    if (index < 0) {
      index = 0;
    }
  }

  var firstSlice = str.slice(0, index);
  var secondSlice = '';

  if (charDelete !== undefined && charDelete !== null && charDelete > 0) {
    firstSlice = str.slice(0, index);
    secondSlice = str.slice(charDelete, str.length);
  }

  return firstSlice + (add || '') + secondSlice;
};

/***/ }),

/***/ "./resources/js/utils/hooks.js":
/*!*************************************!*\
  !*** ./resources/js/utils/hooks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePrevious": () => (/* binding */ usePrevious),
/* harmony export */   "useWindowResized": () => (/* binding */ useWindowResized)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./resources/js/utils/helpers.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var usePrevious = function usePrevious(value) {
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(); // Store current value in ref

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    ref.current = value;
  }, [value]); // Only re-run if value changes
  // Return previous value (happens before update in useEffect above)

  return ref.current;
};
var useWindowResized = function useWindowResized() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([0, 0]),
      _useState2 = _slicedToArray(_useState, 2),
      size = _useState2[0],
      setSize = _useState2[1];

  var html = document.querySelector('html');

  var updateSize = function updateSize() {
    setSize([html.clientWidth, html.clientHeight]);
  };

  var debouncedUpdateSize = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.debounce)(updateSize, 200);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    window.addEventListener('resize', debouncedUpdateSize);
    updateSize();
    return function () {
      return window.removeEventListener('resize', debouncedUpdateSize);
    };
  }, []);
  return size;
};

/***/ }),

/***/ "./resources/js/utils/index.js":
/*!*************************************!*\
  !*** ./resources/js/utils/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConditionalWrapper": () => (/* reexport safe */ _conditionalWrapper__WEBPACK_IMPORTED_MODULE_6__.ConditionalWrapper),
/* harmony export */   "Link": () => (/* reexport safe */ _link__WEBPACK_IMPORTED_MODULE_0__.Link),
/* harmony export */   "Validate": () => (/* reexport safe */ _validator__WEBPACK_IMPORTED_MODULE_3__.Validate),
/* harmony export */   "api": () => (/* reexport safe */ _api__WEBPACK_IMPORTED_MODULE_2__.api),
/* harmony export */   "calculateSlickToWindowOffset": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_5__.calculateSlickToWindowOffset),
/* harmony export */   "can": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_1__.can),
/* harmony export */   "debounce": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_5__.debounce),
/* harmony export */   "eventTrack": () => (/* reexport safe */ _ga__WEBPACK_IMPORTED_MODULE_9__.eventTrack),
/* harmony export */   "fileDownload": () => (/* reexport safe */ _fileDownload__WEBPACK_IMPORTED_MODULE_7__.fileDownload),
/* harmony export */   "flatArrayObject": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_5__.flatArrayObject),
/* harmony export */   "formatDate": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_5__.formatDate),
/* harmony export */   "handleApiFormErrors": () => (/* reexport safe */ _forms__WEBPACK_IMPORTED_MODULE_10__.handleApiFormErrors),
/* harmony export */   "handleFormErrors": () => (/* reexport safe */ _forms__WEBPACK_IMPORTED_MODULE_10__.handleFormErrors),
/* harmony export */   "has": () => (/* reexport safe */ _auth__WEBPACK_IMPORTED_MODULE_1__.has),
/* harmony export */   "isRequiredFromRules": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_5__.isRequiredFromRules),
/* harmony export */   "objectToQuerystring": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_5__.objectToQuerystring),
/* harmony export */   "parseQueryString": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_5__.parseQueryString),
/* harmony export */   "route": () => (/* reexport safe */ _route__WEBPACK_IMPORTED_MODULE_4__.route),
/* harmony export */   "stringSplice": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_5__.stringSplice),
/* harmony export */   "trans": () => (/* reexport safe */ _helpers__WEBPACK_IMPORTED_MODULE_5__.trans),
/* harmony export */   "usePrevious": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_8__.usePrevious),
/* harmony export */   "useWindowResized": () => (/* reexport safe */ _hooks__WEBPACK_IMPORTED_MODULE_8__.useWindowResized),
/* harmony export */   "validateFormData": () => (/* reexport safe */ _forms__WEBPACK_IMPORTED_MODULE_10__.validateFormData)
/* harmony export */ });
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link */ "./resources/js/utils/link.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./resources/js/utils/auth.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ "./resources/js/utils/api.js");
/* harmony import */ var _validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./validator */ "./resources/js/utils/validator.js");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./route */ "./resources/js/utils/route.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./resources/js/utils/helpers.js");
/* harmony import */ var _conditionalWrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conditionalWrapper */ "./resources/js/utils/conditionalWrapper.js");
/* harmony import */ var _fileDownload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fileDownload */ "./resources/js/utils/fileDownload.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks */ "./resources/js/utils/hooks.js");
/* harmony import */ var _ga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ga */ "./resources/js/utils/ga.js");
/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./forms */ "./resources/js/utils/forms.js");












/***/ }),

/***/ "./resources/js/utils/link.js":
/*!************************************!*\
  !*** ./resources/js/utils/link.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Link": () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Link = function Link(_ref) {
  var href = _ref.href,
      url = _ref.url,
      activeClass = _ref.activeClass,
      method = _ref.method,
      children = _ref.children,
      className = _ref.className,
      data = _ref.data;
  var linkClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, _defineProperty({}, activeClass || 'active', url && url.current === (href.replace(/^\/|\/$/g, '') || '/')));
  var queryParams = '';

  if ((!method || method.toLowerCase() === 'get') && !!data) {
    queryParams = "?".concat(Object.keys(data).map(function (d) {
      return "".concat(d, "=").concat(data[d]);
    }).join('&'));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.InertiaLink, {
    href: "".concat(href).concat(queryParams),
    className: linkClass,
    method: method || 'get',
    data: queryParams ? null : data,
    children: children
  });
};

/***/ }),

/***/ "./resources/js/utils/route.js":
/*!*************************************!*\
  !*** ./resources/js/utils/route.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "route": () => (/* binding */ route)
/* harmony export */ });
var route = function route(string, params) {
  if (params && Object.keys(params).length > 0) {
    Object.keys(params).forEach(function (key, i) {
      if (params[key] !== undefined && params[key] !== null) {
        string = string.replace(new RegExp('%' + key + '%', 'g'), params[key]);
      }
    });
  }

  return string;
};

/***/ }),

/***/ "./resources/js/utils/validator.js":
/*!*****************************************!*\
  !*** ./resources/js/utils/validator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Validate": () => (/* binding */ Validate)
/* harmony export */ });
/* harmony import */ var validatorjs_dist_validator_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validatorjs/dist/validator.min */ "./node_modules/validatorjs/dist/validator.min.js");
/* harmony import */ var validatorjs_dist_validator_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validatorjs_dist_validator_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! i18next */ "./node_modules/i18next/dist/esm/i18next.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/Translation.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ "./node_modules/react-dom/server.browser.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _i18n$t;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import Validator from 'validatorjs'



var Validate = (validatorjs_dist_validator_min__WEBPACK_IMPORTED_MODULE_0___default());
/**
 * Overwrite default validation messages
 */

var customMessages = (_i18n$t = i18next__WEBPACK_IMPORTED_MODULE_1__["default"].t('validation')) !== null && _i18n$t !== void 0 ? _i18n$t : {};

if (typeof customMessages === 'string') {
  customMessages = {};
}

var defaultMessages = Validate.getMessages(i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language);

if (!defaultMessages) {
  var _Validate$getMessages;

  defaultMessages = (_Validate$getMessages = Validate.getMessages(i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language.split('_')[0])) !== null && _Validate$getMessages !== void 0 ? _Validate$getMessages : {};
}

customMessages.attributes = _objectSpread(_objectSpread({}, defaultMessages.attributes), customMessages.attributes);

var messages = _objectSpread(_objectSpread({}, defaultMessages), customMessages);

Validate.useLang(i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language);
Validate.setMessages(i18next__WEBPACK_IMPORTED_MODULE_1__["default"].language, messages);
/**
 * Custom validation rules (example)
 */
// validator.register('strong_password', function(value, requirement, attribute) { // requirement parameter defaults to null
//     return value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
// },'The :attribute should contain at least one uppercase, lowercase and special (!@#$%*?1234567890) character.');

validatorjs_dist_validator_min__WEBPACK_IMPORTED_MODULE_0___default().register('username', function (value, requirement, attribute) {
  return value.match(/^[a-zA-Z0-9&-_@*+=.,;:!?@$!%*?&#]*$/) && !value.match(/\S+@\S+\.\S+/);
}, 'The :attribute must have numbers letters special characters and must not be an email address');
validatorjs_dist_validator_min__WEBPACK_IMPORTED_MODULE_0___default().register('strong_password', function (value, requirement, attribute) {
  return value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-.\/:;<=>?@\[\\\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-.\/:;<=>?@\[\\\]^_`{|}~àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸåÅæÆœŒçÇðÐß]{14,}$/); // eslint-disable-line
}, (0,html_react_parser__WEBPACK_IMPORTED_MODULE_4__["default"])((0,react_dom_server__WEBPACK_IMPORTED_MODULE_3__.renderToString)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_i18next__WEBPACK_IMPORTED_MODULE_6__.Translation, {
  children: function children(t, _ref) {
    var i18n = _ref.i18n;
    return t('passwords.criteria');
  }
}))));

/***/ }),

/***/ "./resources/assets/icons/public/icon-usp-chat.svg":
/*!*********************************************************!*\
  !*** ./resources/assets/icons/public/icon-usp-chat.svg ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-usp-chat.svg?e0c40ce89a1f1d486b3856475af137a5");

/***/ }),

/***/ "./resources/assets/icons/public/icon-usp-process.svg":
/*!************************************************************!*\
  !*** ./resources/assets/icons/public/icon-usp-process.svg ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-usp-process.svg?1117fbae27f68eea047124096a5c6fbf");

/***/ }),

/***/ "./resources/assets/icons/public/icon-usp-start.svg":
/*!**********************************************************!*\
  !*** ./resources/assets/icons/public/icon-usp-start.svg ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/icon-usp-start.svg?88d5c34a1baece08c1770d6f264fb8bb");

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

/***/ }),

/***/ "./resources/assets/images/public/image-main-nfc.jpg":
/*!***********************************************************!*\
  !*** ./resources/assets/images/public/image-main-nfc.jpg ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/image-main-nfc.jpg?aec2d6f3a8122fa20753853ff37218a6");

/***/ }),

/***/ "./resources/assets/images/public/image-nft-jungle.jpg":
/*!*************************************************************!*\
  !*** ./resources/assets/images/public/image-nft-jungle.jpg ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/image-nft-jungle.jpg?ff00025ad2aee428e48a43212d0a11c0");

/***/ }),

/***/ "./resources/assets/logo/Logo-Wawstreet-White.svg":
/*!********************************************************!*\
  !*** ./resources/assets/logo/Logo-Wawstreet-White.svg ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/Logo-Wawstreet-White.svg?6949e861b705a6b4c14abbaec2687ff0");

/***/ })

}]);
//# sourceMappingURL=resources_js_domain_Test_pages_public_homepage_Homepage_js.js.map?id=93b3c174e702245c