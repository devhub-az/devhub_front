module.exports = (function (e) {
    var t = {};
    function n(o) {
        if (t[o]) return t[o].exports;
        var i = (t[o] = { i: o, l: !1, exports: {} });
        return e[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
        (n.m = e),
            (n.c = t),
            (n.d = function (e, t, o) {
                n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
            }),
            (n.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
            }),
            (n.t = function (e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                var o = Object.create(null);
                if ((n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                    for (var i in e)
                        n.d(
                            o,
                            i,
                            function (t) {
                                return e[t];
                            }.bind(null, i)
                        );
                return o;
            }),
            (n.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                            return e.default;
                        }
                        : function () {
                            return e;
                        };
                return n.d(t, "a", t), t;
            }),
            (n.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ""),
            n((n.s = 0))
    );
})([
    function (e, t, n) {
        "use strict";
        n.r(t);
        var o = function () {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return e.isOpen
                ? n(
                    "div",
                    { ref: "container", staticClass: "fslightbox-container fslightbox-full-dimension fslightbox-fade-in-strong" },
                    [
                        n("Captions", { attrs: { "fs-lightbox-index": this.fsLightboxIndex } }),
                        e._v(" "),
                        n("Naver", { attrs: { "fs-lightbox-index": this.fsLightboxIndex } }),
                        e._v(" "),
                        n("SourceWrappersContainer", { attrs: { "fs-lightbox-index": this.fsLightboxIndex } }),
                        e._v(" "),
                        n("SlideButtons", { attrs: { "fs-lightbox-index": this.fsLightboxIndex } }),
                        e._v(" "),
                        n("SlideshowBar", { attrs: { "fs-lightbox-index": this.fsLightboxIndex } }),
                        e._v(" "),
                        n("SlideSwipingHoverer", { attrs: { "fs-lightbox-index": this.fsLightboxIndex } }),
                        e._v(" "),
                        n("Thumbs", { attrs: { "fs-lightbox-index": this.fsLightboxIndex } }),
                    ],
                    1
                )
                : e._e();
        };
        o._withStripped = !0;
        var i = "fslightbox-",
            r = "".concat(i, "styles"),
            s = "".concat(i, "cursor-grabbing"),
            a = "".concat(i, "flex-centered"),
            c = "".concat(i, "open"),
            u = "".concat(i, "transform-transition"),
            l = "".concat(i, "fade-in"),
            h = "".concat(i, "fade-out"),
            d = l + "-strong",
            p = h + "-strong",
            f = "".concat(i, "caption") + "-active",
            m = "".concat(i, "opacity-"),
            b = "".concat(m, "0"),
            g = "".concat(m, "1"),
            x = "".concat(i, "source"),
            v = "".concat(x, "-wrappers-container-pinching"),
            S = "".concat(i, "thumb"),
            w = S + "s-active",
            L = S + "-active";
        function T() {
            var e = document.createElement("style");
            (e.className = r), e.appendChild(document.createTextNode("/** CSS WAS HERE **/")), document.head.appendChild(e);
        }
        function I(e) {
            return (I =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                    }
                    : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(e);
        }
        "object" === ("undefined" == typeof document ? "undefined" : I(document)) && T();
        var C = [];
        function y(e, t) {
            var n = e.classList;
            n.contains(t) && n.remove(t);
        }
        function _(e) {
            var t = this,
                n = e.componentsServices,
                o = n.isFullscreenOpenManager,
                i = n.isLightboxOpenManager,
                r = e.core,
                s = r.eventsDispatcher,
                a = r.fullscreenToggler,
                u = r.globalEventsController,
                l = r.scrollbarRecompensor,
                h = r.slideshowManager,
                d = r.zoomer,
                f = e.elements,
                m = e.props,
                b = e.sourcesPointerProps,
                g = e.thumbsSwipingProps;
            (this.isLightboxFadingOut = !1),
                (this.runActions = function () {
                    (t.isLightboxFadingOut = !0),
                        f.container.classList.add(p),
                        u.removeListeners(),
                        d.ifZoomingResetZoom(),
                        h.resetSlideshow(),
                    m.exitFullscreenOnClose && o.get() && a.exitFullscreen(),
                        s.dispatch("onBeforeClose"),
                        setTimeout(function () {
                            (t.isLightboxFadingOut = !1),
                                (b.isPointering = !1),
                            g && (g.isPointering = !1),
                                f.container.classList.remove(p),
                                document.documentElement.classList.remove(c),
                                l.removeRecompense(),
                                i.set(!1),
                                s.dispatch("onClose");
                        }, 220);
                });
        }
        function A(e, t) {
            var n = [];
            return function () {
                n.push(!0),
                    setTimeout(function () {
                        n.pop(), n.length || e();
                    }, t);
            };
        }
        function E(e) {
            var t = e.collections.sourceMainWrapperTransformers,
                n = e.componentsServices,
                o = e.core,
                i = o.captionsActioner,
                r = o.classFacade,
                s = o.eventsDispatcher,
                a = o.slideIndexChanger,
                c = o.sourceDisplayFacade,
                l = o.stageManager,
                d = o.thumbsTransformer,
                p = o.zoomer,
                f = e.elements.sourceAnimationWrappers,
                m = e.props,
                b = m.disableThumbs,
                g = m.initialAnimation,
                x = m.slideChangeAnimation,
                v = e.stageIndexes,
                S = A(function () {
                    r.removeFromEachElementClassIfContains("sourceAnimationWrappers", h);
                }, 250);
            (a.changeTo = function (t) {
                !(function (e, t) {
                    var n = e.elements.thumbs,
                        o = e.stageIndexes;
                    n && n[o.current] && (n[o.current].classList.remove(L), n[t].classList.add(L));
                })(e, t),
                    p.ifZoomingResetZoom(),
                    i.changeActiveCaptionFromTo(v.current, t),
                    (v.current = t),
                    l.updateStageIndexes(),
                b || d.transformToCurrentWithTransition(),
                    n.setSlideNumber(t + 1),
                    c.displaySourcesWhichShouldBeDisplayed(),
                    s.dispatch("onSlideChange");
            }),
                (a.jumpTo = function (e) {
                    var n = v.current;
                    a.changeTo(e),
                        r.removeFromEachElementClassIfContains("sourceMainWrappers", u),
                        y(f[n], g),
                        y(f[n], x),
                        f[n].classList.add(h),
                        y(f[e], g),
                        y(f[e], h),
                        f[e].classList.add(x),
                        S(),
                        t[e].zero(),
                        setTimeout(function () {
                            n !== v.current && t[n].negative();
                        }, 220);
                });
        }
        function W(e) {
            var t = e.core,
                n = t.clickZoomer,
                o = t.lightboxCloser,
                i = t.fullscreenToggler,
                r = t.slideChangeFacade,
                s = t.slideshowManager,
                a = t.thumbsToggler,
                c = e.props;
            this.listener = function (e) {
                if ("Space" !== e.code)
                    switch (e.key) {
                        case "Escape":
                            o.closeLightbox();
                            break;
                        case "ArrowLeft":
                            r.changeToPrevious();
                            break;
                        case "ArrowRight":
                            r.changeToNext();
                            break;
                        case "t":
                            c.disableThumbs || a.toggleThumbs();
                            break;
                        case "+":
                            n.zoomIn();
                            break;
                        case "-":
                            n.zoomOut();
                            break;
                        case "F11":
                            e.preventDefault(), i.enterFullscreen();
                    }
                else s.toggleSlideshow();
            };
        }
        function z(e) {
            return e.touches ? e.touches[0].clientY : e.clientY;
        }
        function B(e) {
            var t = e.collections.sourceMainWrapperTransformers,
                n = e.core.zoomer,
                o = e.data,
                i = e.sourcesPointerProps;
            (this.runZoomingPinchActionsForHypot = function (e) {
                var t = e - i.pinchedHypot,
                    r = o.zoom + (t / Math.hypot(innerWidth, innerHeight)) * 10;
                r < 0.9 && (r = 0.9), n.zoomTo(r), (i.pinchedHypot = e);
            }),
                (this.translateSourceMainWrapperAtIndexUsingMethod = function (e, n) {
                    t[e].translate(i.swipedX)[n]();
                });
        }
        function F(e) {
            return Math.hypot(e.touches[0].pageX - e.touches[1].pageX, e.touches[0].pageY - e.touches[1].pageY);
        }
        function M(e) {
            return e.touches ? e.touches[0].clientX : e.clientX;
        }
        function N(e) {
            var t = e.collections.sourceMainWrapperTransformers,
                n = e.componentsServices,
                o = e.core.pointeringBucket,
                i = e.data,
                r = e.resolve,
                s = e.sourcesPointerProps,
                a = e.stageIndexes,
                c = r(B);
            (this.runActions = function (e) {
                o.runSwipingMoveActionsForPropsAndEvent(s, e), n.showSlideSwipingHovererIfNotYet();
            }),
                (this.runPinchActions = function (e) {
                    var t = F(e);
                    s.pinchedHypot ? c.runZoomingPinchActionsForHypot(t) : (s.pinchedHypot = t);
                }),
                (this.runNormalSwipeActions = function () {
                    c.translateSourceMainWrapperAtIndexUsingMethod(a.current, "zero"),
                        void 0 !== a.previous && s.swipedX > 0
                            ? c.translateSourceMainWrapperAtIndexUsingMethod(a.previous, "negative")
                            : void 0 !== a.next && s.swipedX < 0 && c.translateSourceMainWrapperAtIndexUsingMethod(a.next, "positive");
                }),
                (this.runZoomSwipeActions = function (e) {
                    (s.swipedX = (M(e) - s.downClientX) / i.zoom), (s.swipedY = (z(e) - s.downClientY) / i.zoom), t[a.current].translate(s.upSwipedX + s.swipedX, s.upSwipedY + s.swipedY).zero();
                });
        }
        function O() {
            var e = !1;
            return function () {
                return (
                    !e &&
                    ((e = !0),
                        requestAnimationFrame(function () {
                            e = !1;
                        }),
                        !0)
                );
            };
        }
        function P(e) {
            var t = O();
            return function () {
                return e.isPointering && t();
            };
        }
        function k(e) {
            return e.touches ? e.touches.length : 0;
        }
        function D(e) {
            var t = e.data,
                n = e.props,
                o = e.resolve,
                i = e.sourcesPointerProps,
                r = P(i),
                s = o(N);
            this.listener = function (e) {
                r() && (s.runActions(e), k(e) && i.isPinching ? s.runPinchActions(e) : 1 === t.zoom ? (1 === n.sources.length ? (i.swipedX = 1) : s.runNormalSwipeActions(e)) : s.runZoomSwipeActions(e));
            };
        }
        function H(e) {
            var t = e.collections.sourceMainWrapperTransformers,
                n = e.core,
                o = n.slideIndexChanger,
                i = n.clickZoomer,
                r = e.data,
                s = e.elements.sourceMainWrappers,
                a = e.sourcesPointerProps,
                c = e.stageIndexes;
            (this.runPositiveSwipedXActions = function () {
                void 0 === c.previous || (l("positive"), o.changeTo(c.previous)), l("zero");
            }),
                (this.runNegativeSwipedXActions = function () {
                    void 0 === c.next || (l("negative"), o.changeTo(c.next)), l("zero");
                }),
                (this.saveCurrentsourceMainWrapperPosition = function () {
                    (a.upSwipedX = t[c.current].getTranslateX()), (a.upSwipedY = t[c.current].getTranslateY());
                }),
                (this.runSourceDownEventTargetActions = function () {
                    r.zoom <= 1 ? i.zoomIn() : i.zoomOut();
                });
            var l = function (e) {
                s[c.current].classList.add(u), t[c.current][e]();
            };
        }
        function $(e) {
            var t = e.componentsServices,
                n = e.core,
                o = n.lightboxCloser,
                i = n.pointeringBucket,
                r = e.data,
                s = e.elements,
                a = e.resolve,
                c = e.sourcesPointerProps,
                u = a(H);
            (this.runActions = function () {
                t.hideSlideSwipingHoverer(), (c.isPinching = !1), (c.pinchedHypot = 0), i.runSwipingTopActionsForPropsAndEvent(c), y(s.sourceWrappersContainer, v);
            }),
                (this.runSwipeActions = function () {
                    1 === r.zoom ? (c.swipedX > 0 ? u.runPositiveSwipedXActions() : u.runNegativeSwipedXActions()) : u.saveCurrentsourceMainWrapperPosition();
                }),
                (this.runNoSwipeActions = function () {
                    c.isSourceDownEventTarget ? u.runSourceDownEventTargetActions() : o.closeLightbox();
                });
        }
        function R(e) {
            var t = e.data,
                n = e.resolve,
                o = e.sourcesPointerProps,
                i = e.core.zoomer,
                r = n($);
            this.listener = function (e) {
                o.isPointering && (o.isPinching || (o.swipedX ? r.runSwipeActions() : r.runNoSwipeActions()), r.runActions(e), t.zoom < 1 && (i.zoomTo(1), i.stopZooming()));
            };
        }
        function U(e) {
            var t = e.componentsServices,
                n = e.core.pointeringBucket,
                o = e.data,
                i = e.elements,
                r = e.thumbsSwipingProps;
            this.runActions = function (e) {
                n.runSwipingMoveActionsForPropsAndEvent(r, e), (i.thumbsInner.style.transform = "translateX(".concat(o.thumbsTransform + r.swipedX, "px)")), t.showThumbsCursorerIfNotYet();
            };
        }
        function Y(e) {
            var t = e.data,
                n = e.resolve,
                o = P(e.thumbsSwipingProps),
                i = n(U);
            this.listener = function (e) {
                t.thumbsInnerWidth > innerWidth && o() && i.runActions(e);
            };
        }
        function X(e) {
            var t = e.componentsServices,
                n = e.data,
                o = e.core,
                i = o.slideIndexChanger,
                r = o.thumbsTransformTransitioner,
                s = o.pointeringBucket,
                a = e.elements,
                c = e.thumbsSwipingProps,
                u = a.thumbsWrappers;
            (this.runNoSwipeActionsForEvent = function (e) {
                c.isPointering = !1;
                for (var t = 0; t < a.thumbsWrappers.length; t++) if (u[t] && u[t].contains(e.target)) return void i.jumpTo(t);
            }),
                (this.runActions = function () {
                    if ((t.hideThumbsCursorer(), (n.thumbsTransform += c.swipedX), s.runSwipingTopActionsForPropsAndEvent(c), n.thumbsTransform > 0)) return l(0);
                    n.thumbsTransform < innerWidth - n.thumbsInnerWidth - 9 && l(innerWidth - n.thumbsInnerWidth - 9);
                });
            var l = function (e) {
                (n.thumbsTransform = e),
                    r.callActionWithTransition(function () {
                        a.thumbsInner.style.transform = "translateX(".concat(e, "px)");
                    });
            };
        }
        function j(e) {
            var t = e.resolve,
                n = e.thumbsSwipingProps,
                o = t(X);
            this.listener = function (e) {
                n.isPointering && (n.swipedX ? o.runActions() : o.runNoSwipeActionsForEvent(e));
            };
        }
        function Z(e) {
            var t = e.core.inactiver,
                n = e.props,
                o = e.resolve,
                i = o(D),
                r = o(R),
                s = o(Y),
                a = o(j);
            (this.moveListener = function (e) {
                t.listener(e), i.listener(e), n.disableThumbs || s.listener(e);
            }),
                (this.upListener = function (e) {
                    r.listener(e), n.disableThumbs || a.listener(e);
                });
        }
        function V() {
            return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        }
        function q(e) {
            return !e.touches || e.touches.length <= 2;
        }
        function J(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return G(e);
                })(e) ||
                (function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                })(e) ||
                (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return G(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return G(e, t);
                })(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function G(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o;
        }
        function K(e, t, n) {
            return function () {
                for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++) i[r] = arguments[r];
                var s = n ? [].concat(J(n), i) : i;
                t.apply(void 0, J(s)) && e.apply(void 0, i);
            };
        }
        function Q(e) {
            var t = e.core.zoomer,
                n = e.data;
            this.listener = function (e) {
                if (1 === n.zoom) {
                    if (e.deltaY > 0) return;
                    t.startZooming();
                }
                var o = 0.1 * n.zoom,
                    i = n.zoom;
                e.deltaY < 0 ? (i += o) : (i -= o) < 1 && (i = 1), t.zoomTo(i), 1 === i && t.stopZooming();
            };
        }
        function ee(e) {
            return !e.sourcesPointerProps.isPointering;
        }
        function te(e) {
            var t,
                n = e.props,
                o = 0,
                i = {};
            (this.getSourceTypeFromLocalStorageByUrl = function (e) {
                return t[e] ? t[e] : r(e);
            }),
                (this.handleReceivedSourceTypeForUrl = function (e, n) {
                    !1 === i[n] &&
                    (o--,
                        "invalid" !== e ? (i[n] = e) : delete i[n],
                    0 === o &&
                    (!(function (e, t) {
                        for (var n in t) e[n] = t[n];
                    })(t, i),
                        localStorage.setItem("fslightbox-types", JSON.stringify(t))));
                });
            var r = function (e) {
                o++, (i[e] = !1);
            };
            n.disableLocalStorage
                ? ((this.getSourceTypeFromLocalStorageByUrl = function () {}), (this.handleReceivedSourceTypeForUrl = function () {}))
                : (t = JSON.parse(localStorage.getItem("fslightbox-types"))) || ((t = {}), (this.getSourceTypeFromLocalStorageByUrl = r));
        }
        function ne(e, t, n, o) {
            var i = e.data,
                r = e.elements.sources,
                s = n / o,
                a = 0;
            this.adjustSize = function () {
                if ((a = i.maxSourceWidth / s) < i.maxSourceHeight) return n < i.maxSourceWidth && (a = o), c();
                (a = o > i.maxSourceHeight ? i.maxSourceHeight : o), c();
            };
            var c = function () {
                var e = r[t].style;
                (e.width = a * s + "px"), (e.height = a + "px");
            };
        }
        function oe(e, t, n, o) {
            var i = this,
                r = e.collections,
                s = r.sourceSizers,
                a = (r.sourcesTransformers, e.componentsServices.hideLoaderCollection),
                c = e.core.sourceEnhancementWrappersTransformer,
                u = e.elements,
                l = u.sourceAnimationWrappers,
                h = u.sources,
                d = e.props.initialAnimation,
                p = e.resolve;
            (this.runNormalLoadActions = function () {
                h[t].classList.add(g), l[t].classList.add(d), a[t](), s[t].adjustSize(), c.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(t);
            }),
                (this.runInitialLoadActions = function () {
                    (s[t] = p(ne, [t, n, o])), i.runNormalLoadActions();
                });
        }
        function ie(e, t) {
            var n = this,
                o = e.elements.sources,
                i = e.props.maxYoutubeVideoDimensions,
                r = e.resolve;
            (this.handleImageLoad = function (e) {
                var t = e.target,
                    o = t.width,
                    i = t.height;
                n.handleImageLoad = s(o, i);
            }),
                (this.handleVideoLoad = function (e) {
                    var t = e.target,
                        o = t.videoWidth,
                        i = t.videoHeight;
                    n.handleVideoLoad = s(o, i);
                }),
                (this.handleYoutubeLoad = function () {
                    var e = 1920,
                        t = 1080;
                    i && ((e = i.width), (t = i.height)), (n.handleYoutubeLoad = s(e, t));
                }),
                (this.handleCustomLoad = function () {
                    var e = o[t];
                    n.handleCustomLoad = s(e.offsetWidth, e.offsetHeight);
                });
            var s = function (e, n) {
                var o = r(oe, [t, e, n]);
                return o.runInitialLoadActions(), o.runNormalLoadActions;
            };
        }
        function re(e) {
            var t = e.componentsServices,
                n = e.data,
                o = e.elements.thumbsPropedComponents,
                i = e.props,
                r = i.showThumbsOnMount,
                s = i.sources,
                a = i.thumbs;
            this.buildThumbForTypeAndIndex = function (e, i) {
                a && a[i] ? (o[i] = { component: "Thumb", props: { i: i, src: a[i] } }) : (o[i] = "image" === e ? { component: "Thumb", props: { i: i, src: s[i] } } : { component: "InvalidThumb", props: { i: i } }),
                t.isLightboxOpenManager.get() && (r || n.isThumbing) && t.updateThumbsInner();
            };
        }
        function se(e) {
            var t,
                n = e.collections.sourcesLoadsHandlers,
                o = e.componentsServices,
                i = o.isLightboxOpenManager,
                r = o.updateSourceAnimationWrapperCollection,
                s = e.elements.sourceComponents,
                a = e.props.disableThumbs,
                c = e.resolve;
            a || (t = c(re)),
                (this.runActionsForSourceTypeAndIndex = function (e, o) {
                    var u;
                    switch (("invalid" !== e && (n[o] = c(ie, [o])), e)) {
                        case "image":
                            u = "Imager";
                            break;
                        case "video":
                            u = "Videor";
                            break;
                        case "youtube":
                            u = "Youtuber";
                            break;
                        case "custom":
                            u = "Customer";
                            break;
                        default:
                            u = "Invalider";
                    }
                    (s[o] = u), i.get() && r[o](), a || t.buildThumbForTypeAndIndex(e, o);
                });
        }
        function ae(e) {
            var t,
                n,
                o,
                i,
                r,
                s = e.collections.xhrs,
                a = {
                    isUrlYoutubeOne: function (e) {
                        var t = document.createElement("a");
                        return (t.href = e), "www.youtube.com" === t.hostname;
                    },
                    getTypeFromResponseContentType: function (e) {
                        return e.slice(0, e.indexOf("/"));
                    },
                };
            (this.setUrlToCheck = function (e) {
                t = e;
            }),
                (this.getSourceType = function (e) {
                    if (a.isUrlYoutubeOne(t)) return e("youtube");
                    (o = e), (i = new XMLHttpRequest()), s.push(i), i.open("GET", t, !0), (i.onreadystatechange = c), i.send();
                });
            var c = function () {
                    if (4 === i.readyState && 0 === i.status && !r) return u();
                    if (2 === i.readyState) {
                        if (200 !== i.status && 206 !== i.status) return (r = !0), u();
                        (r = !0), h(a.getTypeFromResponseContentType(i.getResponseHeader("content-type"))), l();
                    }
                },
                u = function () {
                    (n = "invalid"), l();
                },
                l = function () {
                    i.abort(), o(n);
                },
                h = function (e) {
                    switch (e) {
                        case "image":
                            n = "image";
                            break;
                        case "video":
                            n = "video";
                            break;
                        default:
                            n = "invalid";
                    }
                };
        }
        function ce(e, t, n) {
            var o = e.props,
                i = o.types,
                r = o.type,
                s = o.sources,
                a = e.resolve;
            (this.getTypeSetByClientForIndex = function (e) {
                var t;
                return i && i[e] ? (t = i[e]) : r && (t = r), t;
            }),
                (this.retrieveTypeWithXhrForIndex = function (e) {
                    var o = a(ae);
                    o.setUrlToCheck(s[e]),
                        o.getSourceType(function (o) {
                            t.handleReceivedSourceTypeForUrl(o, s[e]), n.runActionsForSourceTypeAndIndex(o, e);
                        });
                });
        }
        function ue(e) {
            var t = e.data,
                n = e.core.eventsDispatcher;
            (t.isInitialized = !0),
                (function (e) {
                    for (var t = e.props.sources, n = e.resolve, o = n(te), i = n(se), r = n(ce, [o, i]), s = 0; s < t.length; s++)
                        if ("string" == typeof t[s]) {
                            var a = r.getTypeSetByClientForIndex(s);
                            if (a) i.runActionsForSourceTypeAndIndex(a, s);
                            else {
                                var c = o.getSourceTypeFromLocalStorageByUrl(t[s]);
                                c ? i.runActionsForSourceTypeAndIndex(c, s) : r.retrieveTypeWithXhrForIndex(s);
                            }
                        } else i.runActionsForSourceTypeAndIndex("custom", s);
                })(e),
                n.dispatch("onInit");
        }
        function le(e) {
            var t = e.core,
                n = t.slideshowManager,
                o = t.slideChangeFacade,
                i = e.componentsServices,
                r = e.elements,
                s = e.props,
                a = 0,
                c = !1;
            function u() {
                r.slideshowBar.classList.remove(g), i.stopSlideshow(), (c = !1);
            }
            function l() {
                var e = (a += 16.67) / s.slideshowTime;
                (r.slideshowBar.style.width = e * innerWidth + "px"), e >= 1 && ((a = 0), o.changeToNext()), c && requestAnimationFrame(l);
            }
            (n.toggleSlideshow = function () {
                c ? u() : ((c = !0), r.slideshowBar.classList.add(g), i.startSlideshow(), l());
            }),
                (n.resetSlideshow = function () {
                    (a = 0), c && u();
                });
        }
        function he(e) {
            var t = e.data,
                n = e.elements,
                o = e.stageIndexes;
            (this.runOpacity0ActionUsingMethod = function (e) {
                n.slideButtonPrevious && (n.slideButtonPrevious.classList[e](b), n.slideButtonNext.classList[e](b));
            }),
                (this.runActiveEnhancementActionUsingMethod = function (e) {
                    t.isThumbing ? n.thumbsContainer.classList[e](w) : n.captions[o.current] && n.captions[o.current].classList[e](f);
                });
        }
        function de(e, t) {
            var n = e.classList;
            n.contains(t) || n.add(t);
        }
        function pe(e) {
            var t = e.core.zoomer,
                n = e.data,
                o = e.elements,
                i = e.sourcesPointerProps;
            this.runPinchActions = function (e) {
                (i.isPinching = !0), (i.pinchedHypot = F(e)), de(o.sourceWrappersContainer, v), 1 === n.zoom && t.startZooming();
            };
        }
        function fe(e) {
            var t,
                n,
                o,
                i = e.data,
                r = e.elements,
                s = i.captionHeights,
                a = i.notThumbedSourceEnhancementWrapperScales,
                c = i.notThumbedSourceEnhancementWrapperTranslatesY,
                u = r.sourceEnhancementWrappers,
                l = r.sources;
            (this.setUpThumbedEnhancementWrapperTransform = function () {
                (t = r.thumbsContainer.offsetHeight), (n = i.thumbedSourceEnhancementWrapperTranslateY), (o = "translateY(".concat(n, "px) scale(").concat(i.thumbedSourceEnhancementWrapperScale, ")"));
            }),
                (this.setUpNotThumbedEnhancementWrapperTransformAtIndex = function (e) {
                    (t = s[e]), (n = c[e]), (o = "translateY(".concat(n, "px) scale(").concat(a[e], ")"));
                }),
                (this.ifSourceIsLoadedTransformEnhancementWrapperAtIndex = function (e) {
                    l[e] && (innerWidth < innerHeight && l[e].offsetWidth > l[e].offsetHeight + t ? (u[e].style.transform = "translateY(".concat(n / 2, "px) scale(1)")) : (u[e].style.transform = o));
                });
        }
        function me(e) {
            var t, n, o;
            !(function (e) {
                var t = e.core.captionsActioner,
                    n = e.data,
                    o = e.elements.captions;
                t.changeActiveCaptionFromTo = function (e, t) {
                    n.isThumbing || (i(e, y), i(t, de));
                };
                var i = function (e, t) {
                    o[e] && t(o[e], f);
                };
            })(e),
                (n = (t = e).core.classFacade),
                (o = t.elements),
                (n.removeFromEachElementClassIfContains = function (e, t) {
                    for (var n = 0; n < o[e].length; n++) y(o[e][n], t);
                }),
                (function (e) {
                    var t = e.core,
                        n = t.clickZoomer,
                        o = t.zoomer,
                        i = e.data,
                        r = e.elements,
                        s = e.props.zoomIncrement,
                        a = A(function () {
                            y(r.sourceWrappersContainer, u);
                        }, 300);
                    (n.zoomIn = function () {
                        c(), l(i.zoom + s);
                    }),
                        (n.zoomOut = function () {
                            i.zoom - s <= 1 ? 1 !== i.zoom && (l(1), o.stopZooming()) : (c(), l(i.zoom - s), 1 === i.zoom && o.stopZooming());
                        });
                    var c = function () {
                            1 === i.zoom && o.startZooming();
                        },
                        l = function (e) {
                            de(r.sourceWrappersContainer, u), o.zoomTo(e), a();
                        };
                })(e),
                (function (e) {
                    var t = e.core.eventsDispatcher,
                        n = e.props;
                    t.dispatch = function (t) {
                        n[t] && n[t](e);
                    };
                })(e),
                (function (e) {
                    var t = e.componentsServices.isFullscreenOpenManager,
                        n = e.core.fullscreenToggler;
                    (n.enterFullscreen = function () {
                        t.set(!0);
                        var e = document.documentElement;
                        e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
                    }),
                        (n.exitFullscreen = function () {
                            t.set(!1),
                                document.exitFullscreen
                                    ? document.exitFullscreen()
                                    : document.mozCancelFullScreen
                                        ? document.mozCancelFullScreen()
                                        : document.webkitExitFullscreen
                                            ? document.webkitExitFullscreen()
                                            : document.msExitFullscreen && document.msExitFullscreen();
                        });
                })(e),
                (function (e) {
                    var t,
                        n,
                        o,
                        i = e.core,
                        r = i.inactiver,
                        s = i.globalEventsController,
                        a = i.windowResizeActioner,
                        c = e.middleware,
                        u = e.resolve,
                        l = u(Z),
                        h = u(W),
                        d = u(Q);
                    (s.addListeners = function () {
                        V()
                            ? ((t = K(l.moveListener, q)),
                                (n = K(l.upListener, q)),
                                document.addEventListener("touchstart", r.listener, { passive: !0 }),
                                document.addEventListener("touchmove", t, { passive: !0 }),
                                document.addEventListener("touchend", n))
                            : (document.addEventListener("mousedown", r.listener), document.addEventListener("mousemove", l.moveListener), document.addEventListener("mouseup", l.upListener)),
                            addEventListener("resize", a.runActions),
                            document.addEventListener("keydown", h.listener);
                        var e = O();
                        (o = c(
                            (o = function (t) {
                                return e() && d.listener(t);
                            }),
                            ee
                        )),
                            document.addEventListener("wheel", o);
                    }),
                        (s.removeListeners = function () {
                            V()
                                ? (document.removeEventListener("touchstart", r.listener), document.removeEventListener("touchmove", t), document.removeEventListener("touchend", n))
                                : (document.removeEventListener("mousedown", r.listener), document.removeEventListener("mousemove", l.moveListener), document.removeEventListener("mouseup", l.upListener)),
                                removeEventListener("resize", a.runActions),
                                document.removeEventListener("keydown", h.listener),
                                document.removeEventListener("wheel", o);
                        });
                })(e),
                (function (e) {
                    var t = e.core.inactiver,
                        n = e.data,
                        o = e.elements,
                        i = e.props.UIFadeOutTime,
                        r = !1,
                        s = A(function () {
                            (r = !0), a(c);
                        }, i);
                    t.listener = function () {
                        s(), r && (a(u), (r = !1));
                    };
                    var a = function (e) {
                            e(o.nav), 1 === n.zoom && o.slideButtonPrevious && (e(o.slideButtonPrevious), e(o.slideButtonNext)), n.isThumbing && e(o.thumbsContainer);
                        },
                        c = function (e) {
                            e.classList.add(b);
                        },
                        u = function (e) {
                            e.classList.remove(b);
                        };
                })(e),
                (function (e) {
                    var t = e.core.lightboxCloser,
                        n = (0, e.resolve)(_);
                    t.closeLightbox = function () {
                        n.isLightboxFadingOut || n.runActions();
                    };
                })(e),
                (function (e) {
                    var t = e.componentsServices.isLightboxOpenManager,
                        n = e.core,
                        o = n.lightboxOpener,
                        i = n.lightboxOpenActioner;
                    o.openLightbox = function () {
                        i.runBeforeRenderActions(), t.set(!0, i.runAfterRenderActions);
                    };
                })(e),
                (function (e) {
                    var t = e.collections.sourceMainWrapperTransformers,
                        n = e.core,
                        o = n.eventsDispatcher,
                        i = n.lightboxOpenActioner,
                        r = n.globalEventsController,
                        s = n.scrollbarRecompensor,
                        a = n.sourceDisplayFacade,
                        u = n.stageManager,
                        l = n.windowResizeActioner,
                        h = e.data,
                        d = e.props.sources,
                        p = e.stageIndexes;
                    (i.runBeforeRenderActions = function () {
                        h.unloadedThumbsCount = d.length;
                    }),
                        (i.runAfterRenderActions = function () {
                            u.updateStageIndexes(),
                                document.documentElement.classList.add(c),
                                s.addRecompense(),
                                r.addListeners(),
                                l.runActions(),
                                t[p.current].zero(),
                                o.dispatch("onOpen"),
                                h.isInitialized ? (o.dispatch("onShow"), a.displaySourcesWhichShouldBeDisplayed()) : ue(e);
                        });
                })(e),
                (function (e) {
                    var t = e.componentsServices.isLightboxOpenManager,
                        n = e.core,
                        o = n.lightboxUpdater,
                        i = n.lightboxCloser,
                        r = n.lightboxOpener,
                        s = n.slideIndexChanger,
                        a = e.stageIndexes;
                    (o.handleTogglerUpdate = function () {
                        t.get() ? i.closeLightbox() : r.openLightbox();
                    }),
                        (o.runCurrentStageIndexUpdateActionsFor = function (e) {
                            e !== a.current && (t.get() ? s.jumpTo(e) : (a.current = e));
                        });
                })(e),
                (function (e) {
                    var t = e.data,
                        n = e.core.scrollbarRecompensor;
                    n.addRecompense = function () {
                        "complete" === document.readyState
                            ? o()
                            : window.addEventListener("load", function () {
                                o(), (n.addRecompense = o);
                            });
                    };
                    var o = function () {
                        document.body.offsetHeight > window.innerHeight;
                    };
                    n.removeRecompense = function () {};
                })(e),
                le(e),
                (function (e) {
                    var t = e.core,
                        n = t.slideChangeFacade,
                        o = t.slideIndexChanger,
                        i = t.stageManager;
                    e.props.sources.length > 1
                        ? ((n.changeToPrevious = function () {
                            o.jumpTo(i.getPreviousSlideIndex());
                        }),
                            (n.changeToNext = function () {
                                o.jumpTo(i.getNextSlideIndex());
                            }))
                        : ((n.changeToPrevious = function () {}), (n.changeToNext = function () {}));
                })(e),
                E(e),
                (function (e) {
                    var t = e.core.sourceEnhancementWrappersTransformer,
                        n = e.data,
                        o = (0, e.resolve)(fe);
                    (t.ifSourceIsLoadedTransformEnhancementWrapperAtIndex = function (e) {
                        n.isThumbing ? o.setUpThumbedEnhancementWrapperTransform() : o.setUpNotThumbedEnhancementWrapperTransformAtIndex(e), o.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e);
                    }),
                        (t.ifSourceIsLoadedTransformThumbedEnhancementWrapperAtIndex = function (e) {
                            o.setUpThumbedEnhancementWrapperTransform(e), o.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e);
                        }),
                        (t.ifSourceIsLoadedTransformNotThumbedEnhancementWrapperAtIndex = function (e) {
                            o.setUpNotThumbedEnhancementWrapperTransformAtIndex(e), o.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e);
                        });
                })(e),
                (function (e) {
                    var t = e.core.sourceDisplayFacade,
                        n = e.componentsServices.updateSourceAnimationWrapperCollection,
                        o = e.stageIndexes,
                        i = e.props.loadOnlyCurrentSource;
                    t.displaySourcesWhichShouldBeDisplayed = function () {
                        if (i) n[o.current]();
                        else for (var e in o) void 0 !== o[e] && n[o[e]]();
                    };
                })(e),
                (function (e) {
                    var t = e.core,
                        n = t.classFacade,
                        o = t.sourcesPointerDown,
                        i = t.pointeringBucket,
                        r = e.elements.sources,
                        s = e.resolve,
                        a = e.sourcesPointerProps,
                        c = e.stageIndexes,
                        l = s(pe);
                    o.listener = function (e) {
                        "VIDEO" === e.target.tagName || e.touches || e.preventDefault(),
                            i.runSwipingDownActionsForPropsAndEvent(a, e),
                            (a.isMoveCallFirst = !0),
                            (a.downClientY = z(e)),
                            2 === k(e) ? l.runPinchActions(e) : n.removeFromEachElementClassIfContains("sourceMainWrappers", u);
                        var t = r[c.current];
                        t && t.contains(e.target) ? (a.isSourceDownEventTarget = !0) : (a.isSourceDownEventTarget = !1);
                    };
                })(e),
                (function (e) {
                    var t = e.stageIndexes,
                        n = e.core.stageManager,
                        o = e.props.sources.length - 1;
                    (n.getPreviousSlideIndex = function () {
                        return 0 === t.current ? o : t.current - 1;
                    }),
                        (n.getNextSlideIndex = function () {
                            return t.current === o ? 0 : t.current + 1;
                        }),
                        (n.updateStageIndexes =
                            0 === o
                                ? function () {}
                                : 1 === o
                                    ? function () {
                                        0 === t.current ? ((t.next = 1), delete t.previous) : ((t.previous = 0), delete t.next);
                                    }
                                    : function () {
                                        (t.previous = n.getPreviousSlideIndex()), (t.next = n.getNextSlideIndex());
                                    }),
                        (n.isSourceInStage =
                            o <= 2
                                ? function () {
                                    return !0;
                                }
                                : function (e) {
                                    var n = t.current;
                                    if ((0 === n && e === o) || (n === o && 0 === e)) return !0;
                                    var i = n - e;
                                    return -1 === i || 0 === i || 1 === i;
                                });
                })(e),
                (function (e) {
                    var t = e.core.pointeringBucket,
                        n = e.elements;
                    (t.runSwipingDownActionsForPropsAndEvent = function (e, t) {
                        (e.isPointering = !0), (e.downClientX = M(t)), (e.swipedX = 0);
                    }),
                        (t.runSwipingMoveActionsForPropsAndEvent = function (e, t) {
                            de(n.container, s), (e.swipedX = M(t) - e.downClientX);
                        }),
                        (t.runSwipingTopActionsForPropsAndEvent = function (e) {
                            y(n.container, s), (e.isPointering = !1);
                        });
                })(e),
                (function (e) {
                    var t = e.collections,
                        n = t.sourceMainWrapperTransformers,
                        o = t.sourceSizers,
                        i = e.core,
                        r = i.sourceEnhancementWrappersTransformer,
                        s = i.windowResizeActioner,
                        a = i.thumbsTransformer,
                        c = e.data,
                        l = e.elements,
                        h = e.props,
                        d = h.disableThumbs,
                        p = h.sources,
                        f = e.stageIndexes,
                        m = c.captionHeights,
                        b = c.notThumbedSourceEnhancementWrapperScales,
                        g = c.notThumbedSourceEnhancementWrapperTranslatesY,
                        x = l.captions,
                        v = l.sourceMainWrappers,
                        S = l.thumbs;
                    (s.runActions = function () {
                        innerWidth < 1025 ? (c.maxSourceWidth = innerWidth - 30) : (c.maxSourceWidth = innerWidth - 130),
                            d ? (c.maxSourceHeight = innerHeight - (innerWidth < 1025 ? 270 : 130)) : (c.maxSourceHeight = innerHeight - (innerWidth < 1025 ? 270 : 130) - (l.thumbsContainer.offsetHeight / 2)),
                        d || ((c.thumbedSourceEnhancementWrapperScale = 1 - l.thumbsContainer.offsetHeight / innerHeight), (c.thumbedSourceEnhancementWrapperTranslateY = -l.thumbsContainer.offsetHeight / 2)),
                        0 === c.unloadedThumbsCount && s.runThumbsActions();
                        for (var e = 0; e < p.length; e++) {
                            if (x[e]) {
                                m[e] = x[e].offsetHeight;
                                var t = m[e] - 25;
                                (b[e] = 1 - t / innerHeight), (g[e] = -t / 2);
                            } else (b[e] = 1), (g[e] = 0);
                            y(v[e], u), r.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e), e !== f.current && n[e].negative(), o[e] && o[e].adjustSize();
                        }
                    }),
                        (s.runThumbsActions = function () {
                            c.thumbsInnerWidth = 0;
                            for (var e = 0; e < p.length; e++) c.thumbsInnerWidth += S[e].offsetWidth + 8;
                            a.transformToCurrent();
                        });
                })(e),
                (function (e) {
                    var t = e.collections.sourceMainWrapperTransformers,
                        n = e.core.zoomer,
                        o = e.data,
                        i = e.elements,
                        r = e.resolve,
                        s = e.sourcesPointerProps,
                        a = e.stageIndexes,
                        c = i.sources,
                        l = i.sourceMainWrappers,
                        h = r(he);
                    (n.zoomTo = function (e) {
                        (o.zoom = p(e)), (i.sourceWrappersContainer.style.transform = "scale(".concat(o.zoom, ")"));
                    }),
                        (n.ifZoomingResetZoom = function () {
                            1 !== o.zoom && (n.zoomTo(1), n.stopZooming());
                        }),
                        (n.startZooming = function () {
                            document.body.classList.add('zooming')
                            d("grab"), h.runOpacity0ActionUsingMethod("add"), h.runActiveEnhancementActionUsingMethod("remove");
                        }),
                        (n.stopZooming = function () {
                            document.body.classList.remove('zooming');
                            d("zoom-in"), h.runOpacity0ActionUsingMethod("remove"), h.runActiveEnhancementActionUsingMethod("add"), l[a.current].classList.add(u), t[a.current].translate(0, 0).zero(), (s.upSwipedX = 0), (s.upSwipedY = 0);
                        });
                    var d = function (e) {
                            c[a.current] && (c[a.current].style.cursor = e);
                        },
                        p = function (e) {
                            return parseFloat(e.toPrecision(12));
                        };
                })(e);
        }
        function be(e, t) {
            var n = this,
                o = e.elements.sourceMainWrappers,
                i = e.props,
                r = 0,
                s = 0,
                a = 0;
            (this.translate = function (e, t) {
                return (s = e), void 0 !== t && (a = t), n;
            }),
                (this.getTranslateX = function () {
                    return r;
                }),
                (this.getTranslateY = function () {
                    return a;
                }),
                (this.negative = function () {
                    c(-(1 + i.slideDistance) * innerWidth);
                }),
                (this.zero = function () {
                    c(0);
                }),
                (this.positive = function () {
                    c((1 + i.slideDistance) * innerWidth);
                });
            var c = function (e) {
                    (r = e + s), u(), (s = 0);
                },
                u = function () {
                    o[t].style.transform = "translate(".concat(r, "px, ").concat(a, "px)");
                };
        }
        function ge(e) {
            for (var t = e.props.sources, n = e.resolve, o = [], i = 0; i < t.length; i++) {
                var r = n(be, [i]);
                o.push(r);
            }
            return o;
        }
        function xe(e) {
            var t = e.componentsServices,
                n = e.core,
                o = n.sourceEnhancementWrappersTransformer,
                i = n.zoomer,
                r = e.data,
                s = e.elements,
                a = e.props.sources,
                c = e.stageIndexes;
            (this.openThumbs = function () {
                i.ifZoomingResetZoom(), s.thumbsContainer.classList.add(w), u("remove"), (r.isThumbing = !0);
                for (var e = 0; e < a.length; e++) o.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e);
                r.unloadedThumbsCount && t.updateThumbsInner();
            }),
                (this.closeThumbs = function () {
                    i.ifZoomingResetZoom(), s.thumbsContainer.classList.remove(w), u("add"), (r.isThumbing = !1);
                    for (var e = 0; e < a.length; e++) o.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e);
                });
            var u = function (e) {
                s.captions[c.current] && s.captions[c.current].classList[e](f);
            };
        }
        function ve(e) {
            var t = e.data,
                n = e.elements,
                o = e.stageIndexes;
            (this.runActions = function () {
                y(n.thumbsContainer, a);
                var e = innerWidth / 2,
                    r = n.thumbsWrappers[o.current],
                    s = r.offsetLeft + r.offsetWidth / 2,
                    c = t.thumbsInnerWidth - s;
                s > e && c > e ? i(e - s) : s > e ? i(innerWidth - t.thumbsInnerWidth - 9) : c > e && i(0);
            }),
                (this.runToThinThumbsActions = function () {
                    de(n.thumbsContainer, a), i(0);
                });
            var i = function (e) {
                (t.thumbsTransform = e), (n.thumbsInner.style.transform = "translateX(".concat(e, "px)"));
            };
        }
        function Se(e) {
            var t,
                n,
                o,
                i,
                r,
                s = e.core,
                a = e.collections,
                c = e.componentsServices,
                l = e.data,
                h = e.elements,
                d = e.props;
            (c.showThumbsCursorerIfNotYet = null),
                (c.hideThumbsLoader = null),
                (c.hideThumbsCursorer = null),
                (l.thumbsInnerWidth = null),
                (l.unloadedThumbsCount = d.sources.length),
                (l.thumbsTransform = 0),
                (l.isThumbing = d.showThumbsOnMount),
                (l.thumbedSourcesOutersScale = null),
                (e.thumbsSwipingProps = { isPointering: !1, downClientX: null, swipedX: null }),
                (a.thumbsRenderFunctions = []),
                (s.thumbLoadHandler = {}),
                (s.thumbsOpeningActions = {}),
                (s.thumbsTransformer = {}),
                (s.thumbsTransformTransitioner = {}),
                (s.thumbsToggler = {}),
                (s.thumbsSwipingDown = {}),
                (h.thumbsContainer = null),
                (h.thumbs = []),
                (h.thumbsWrappers = []),
                (h.thumbsPropedComponents = []),
                (h.thumbsInner = null),
                (function (e) {
                    var t = e.core,
                        n = t.thumbLoadHandler,
                        o = t.windowResizeActioner,
                        i = e.componentsServices,
                        r = e.data,
                        s = e.elements.thumbsWrappers;
                    n.handleLoad = function () {
                        if ((r.unloadedThumbsCount--, 0 === r.unloadedThumbsCount)) {
                            for (var e = 0; e < s.length; e++) s[e].classList.add(g);
                            o.runThumbsActions(), i.hideThumbsLoader();
                        }
                    };
                })(e),
                (function (e) {
                    var t = e.core.thumbsToggler,
                        n = e.data,
                        o = (0, e.resolve)(xe);
                    t.toggleThumbs = function () {
                        n.isThumbing ? o.closeThumbs() : o.openThumbs();
                    };
                })(e),
                (function (e) {
                    var t = e.core,
                        n = t.thumbsTransformer,
                        o = t.thumbsTransformTransitioner,
                        i = e.data,
                        r = (0, e.resolve)(ve);
                    (n.transformToCurrent = function () {
                        i.thumbsInnerWidth > innerWidth ? r.runActions() : r.runToThinThumbsActions();
                    }),
                        (n.transformToCurrentWithTransition = function () {
                            i.thumbsInnerWidth > innerWidth && o.callActionWithTransition(r.runActions);
                        });
                })(e),
                (function (e) {
                    var t = e.core.thumbsTransformTransitioner,
                        n = e.elements,
                        o = A(function () {
                            n.thumbsInner.classList.remove(u);
                        }, 250);
                    t.callActionWithTransition = function (e) {
                        n.thumbsInner.classList.add(u), e(), o();
                    };
                })(e),
                (n = (t = e).core),
                (o = n.thumbsSwipingDown),
                (i = n.pointeringBucket),
                (r = t.thumbsSwipingProps),
                (o.listener = function (e) {
                    i.runSwipingDownActionsForPropsAndEvent(r, e), e.touches || e.preventDefault();
                });
        }
        var we = {
                thumbs: {
                    width: "17px",
                    height: "17px",
                    viewBox: "0 0 22 22",
                    d:
                        "M 3 2 C 2.448 2 2 2.448 2 3 L 2 6 C 2 6.552 2.448 7 3 7 L 6 7 C 6.552 7 7 6.552 7 6 L 7 3 C 7 2.448 6.552 2 6 2 L 3 2 z M 10 2 C 9.448 2 9 2.448 9 3 L 9 6 C 9 6.552 9.448 7 10 7 L 13 7 C 13.552 7 14 6.552 14 6 L 14 3 C 14 2.448 13.552 2 13 2 L 10 2 z M 17 2 C 16.448 2 16 2.448 16 3 L 16 6 C 16 6.552 16.448 7 17 7 L 20 7 C 20.552 7 21 6.552 21 6 L 21 3 C 21 2.448 20.552 2 20 2 L 17 2 z M 3 9 C 2.448 9 2 9.448 2 10 L 2 13 C 2 13.552 2.448 14 3 14 L 6 14 C 6.552 14 7 13.552 7 13 L 7 10 C 7 9.448 6.552 9 6 9 L 3 9 z M 10 9 C 9.448 9 9 9.448 9 10 L 9 13 C 9 13.552 9.448 14 10 14 L 13 14 C 13.552 14 14 13.552 14 13 L 14 10 C 14 9.448 13.552 9 13 9 L 10 9 z M 17 9 C 16.448 9 16 9.448 16 10 L 16 13 C 16 13.552 16.448 14 17 14 L 20 14 C 20.552 14 21 13.552 21 13 L 21 10 C 21 9.448 20.552 9 20 9 L 17 9 z M 3 16 C 2.448 16 2 16.448 2 17 L 2 20 C 2 20.552 2.448 21 3 21 L 6 21 C 6.552 21 7 20.552 7 20 L 7 17 C 7 16.448 6.552 16 6 16 L 3 16 z M 10 16 C 9.448 16 9 16.448 9 17 L 9 20 C 9 20.552 9.448 21 10 21 L 13 21 C 13.552 21 14 20.552 14 20 L 14 17 C 14 16.448 13.552 16 13 16 L 10 16 z M 17 16 C 16.448 16 16 16.448 16 17 L 16 20 C 16 20.552 16.448 21 17 21 L 20 21 C 20.552 21 21 20.552 21 20 L 21 17 C 21 16.448 20.552 16 20 16 L 17 16 z",
                    title: "Thumbnails",
                },
                zoomOut: {
                    width: "16px",
                    height: "16px",
                    viewBox: "0 0 16 16",
                    d:
                        "M10.081 1.022A6.56 6.56 0 003.289.875 6.564 6.564 0 00.858 9.81a.625.625 0 001.086-.62 5.31 5.31 0 112.019 2.005.625.625 0 10-.613 1.09 6.559 6.559 0 007.372-.651l4.212 4.184a.625.625 0 10.88-.887l-4.206-4.178a6.558 6.558 0 00-1.527-9.73zM3.402 6.035a.632.632 0 01.447-.185h5.98a.632.632 0 010 1.265h-5.98a.632.632 0 01-.447-1.08z",
                    title: "Zoom out",
                },
                zoomIn: {
                    width: "16px",
                    height: "16px",
                    viewBox: "0 0 16 16",
                    d:
                        "M10.081 1.022A6.559 6.559 0 003.289.875 6.564 6.564 0 00.858 9.81a.625.625 0 101.086-.62 5.31 5.31 0 112.019 2.005.625.625 0 00-.613 1.09 6.559 6.559 0 007.372-.651l4.212 4.184a.624.624 0 10.88-.887l-4.206-4.178a6.559 6.559 0 00-1.527-9.73zM6.076 2.476A.6.6 0 017.1 2.9v3h3a.6.6 0 110 1.2h-3v3a.6.6 0 01-1.2 0v-3h-3a.6.6 0 010-1.2h3v-3a.6.6 0 01.176-.424z",
                    title: "Zoom in",
                },
                slideshow: {
                    start: {
                        width: "14px",
                        height: "16px",
                        viewBox: "0 0 14 16",
                        d:
                            "M12.781 6.153L3.331.328A2.185 2.185 0 000 2.19v11.6A2.208 2.208 0 002.18 16h.01a2.193 2.193 0 001.133-.34.624.624 0 10-.65-1.066.958.958 0 01-.486.158.969.969 0 01-.939-.966V2.19a.937.937 0 011.428-.8l9.45 5.825a.937.937 0 010 1.6L5.29 13a.624.624 0 10.652 1.064l6.832-4.183a2.184 2.184 0 00.008-3.726l-.001-.002z",
                        title: "Turn on slideshow",
                    },
                    pause: {
                        width: "14px",
                        height: "16px",
                        viewBox: "0 0 10 18",
                        d: "M1.533.9a.633.633 0 00-.633.633v14.934a.633.633 0 001.267 0V1.533A.633.633 0 001.533.9zM9 .9a.633.633 0 00-.633.633v14.934a.633.633 0 001.266 0V1.533A.633.633 0 009 .9z",
                        title: "Turn off slideshow",
                    },
                },
                fullscreen: {
                    enter: { width: "20px", height: "20px", viewBox: "0 0 18 18", d: "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z", title: "Enter fullscreen" },
                    exit: {
                        width: "24px",
                        height: "24px",
                        viewBox: "0 0 950 1024",
                        d: "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z",
                        title: "Exit fullscreen",
                    },
                },
                close: {
                    width: "16px",
                    height: "16px",
                    viewBox: "0 0 18 18",
                    d:
                        "M.698 16.43a.855.855 0 001.448.634L9 10.21l6.834 6.834a.855.855 0 001.23-1.187L10.21 9.003l6.836-6.836.007-.008A.854.854 0 0015.846.952L9.003 7.795 2.167.96A.854.854 0 001.21.786L1.169.744.956.957a.854.854 0 000 1.207L7.792 9 .958 15.834a.855.855 0 00-.26.597z",
                    title: "Close",
                },
            },
            Le = {
                previous: {
                    width: "9px",
                    height: "15px",
                    viewBox: "0 0 9 15",
                    d:
                        "M.876 7.55l6.229 6.229a.767.767 0 001.083 0l.459-.46a.767.767 0 000-1.082L3.415 7.005l5.236-5.236a.767.767 0 000-1.083l-.459-.46a.767.767 0 00-1.083 0L.875 6.462a.773.773 0 000 1.086l.001.004z",
                    title: "Previous",
                },
                next: {
                    width: "9px",
                    height: "15px",
                    viewBox: "0 0 9 15",
                    d:
                        "M8.124 7.55L1.895 13.78a.767.767 0 01-1.083 0l-.459-.46a.767.767 0 010-1.082l5.232-5.232L.349 1.769a.767.767 0 010-1.083l.459-.46a.767.767 0 011.083 0l6.234 6.235a.773.773 0 010 1.086l-.001.004z",
                    title: "Next",
                },
            };
        function Te(e) {
            return (Te =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                        return typeof e;
                    }
                    : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                    })(e);
        }
        function Ie(e, t) {
            if ("object" === Te(t)) for (var n in e) "object" === Te(t[n]) ? Ie(e[n], t[n]) : t[n] && (e[n] = t[n]);
        }
        function Ce(e, t, n) {
            return (Ce = ye()
                ? Reflect.construct
                : function (e, t, n) {
                    var o = [null];
                    o.push.apply(o, t);
                    var i = new (Function.bind.apply(e, o))();
                    return n && _e(i, n.prototype), i;
                }).apply(null, arguments);
        }
        function ye() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
            } catch (e) {
                return !1;
            }
        }
        function _e(e, t) {
            return (_e =
                Object.setPrototypeOf ||
                function (e, t) {
                    return (e.__proto__ = t), e;
                })(e, t);
        }
        function Ae(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return Ee(e);
                })(e) ||
                (function (e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                })(e) ||
                (function (e, t) {
                    if (!e) return;
                    if ("string" == typeof e) return Ee(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Ee(e, t);
                })(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                })()
            );
        }
        function Ee(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o;
        }
        function We(e) {
            var t,
                n,
                o,
                i,
                r,
                s,
                a,
                c = this;
            (this.props = e),
                (this.data = {
                    isInitialized: !1,
                    maxSourceWidth: 0,
                    maxSourceHeight: 0,
                    scrollbarWidth: 0,
                    toolbarButtons: we,
                    slideButtons: Le,
                    captionHeights: [],
                    notThumbedSourceEnhancementWrapperScales: [],
                    notThumbedSourceEnhancementWrapperTranslatesY: [],
                    thumbedSourceEnhancementWrapperTranslateY: null,
                    zoom: 1,
                }),
                (this.sourcesPointerProps = { isPointering: !1, downClientX: null, downClientY: null, isSourceDownEventTarget: !1, isMoveCallFirst: !1, swipedX: 0, swipedY: 0, upSwipedX: 0, upSwipedY: 0, pinchedHypot: 0 }),
                (this.stageIndexes = {
                    previous: void 0,
                    current: ((t = this), (n = t.data.sources), (o = t.props), (i = o.slide), (r = o.sourceIndex), (s = o.source), (a = 0), s ? (a = n.indexOf(s)) : r ? (a = r) : i && (a = i - 1), a),
                    next: void 0,
                }),
                (this.componentsServices = {
                    isLightboxOpenManager: {},
                    setSlideNumber: null,
                    isFullscreenOpenManager: {},
                    hideLoaderCollection: [],
                    updateSourceAnimationWrapperCollection: [],
                    showSlideSwipingHovererIfNotYet: null,
                    hideSlideSwipingHoverer: null,
                    startSlideshow: null,
                    stopSlideshow: null,
                }),
                (this.elements = {
                    captions: [],
                    container: null,
                    nav: null,
                    sourceWrappersContainer: null,
                    slideshowBar: null,
                    sourceAnimationWrappers: [],
                    sourceComponents: [],
                    sourceEnhancementWrappers: [],
                    sourceMainWrappers: [],
                    sources: [],
                }),
                (this.middleware = function (e, t) {
                    return K(e, t, [c]);
                }),
                (this.resolve = function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return t.unshift(c), Ce(e, Ae(t));
                }),
                (this.collections = { sourceMainWrapperTransformers: ge(this), sourcesLoadsHandlers: [], sourceSizers: [], xhrs: [] }),
                (this.core = {
                    captionsActioner: {},
                    classFacade: {},
                    clickZoomer: {},
                    eventsDispatcher: {},
                    fullscreenToggler: {},
                    globalEventsController: {},
                    inactiver: {},
                    lightboxCloser: {},
                    lightboxOpener: {},
                    lightboxOpenActioner: {},
                    lightboxUpdater: {},
                    scrollbarRecompensor: {},
                    slideshowManager: {},
                    slideChangeFacade: {},
                    slideIndexChanger: {},
                    sourceEnhancementWrappersTransformer: {},
                    sourceDisplayFacade: {},
                    sourcesPointerDown: {},
                    stageManager: {},
                    pointeringBucket: {},
                    windowResizeActioner: {},
                    zoomer: {},
                }),
                Ie(this.data.slideButtons, e.slideButtons),
                Ie(this.data.toolbarButtons, e.toolbarButtons),
                Se(this),
                me(this);
        }
        var ze = function () {
            var e = this.$createElement,
                t = this._self._c || e;
            return t(
                "div",
                { ref: "nav", staticClass: "fslightbox-nav" },
                [t("Toolbar", { attrs: { "fs-lightbox-index": this.fsLightboxIndex } }), this._v(" "), this.hasMoreThanSource ? t("SlideNumber", { attrs: { "fs-lightbox-index": this.fsLightboxIndex } }) : this._e()],
                1
            );
        };
        ze._withStripped = !0;
        var Be = function () {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n(
                "div",
                { staticClass: "fslightbox-toolbar" },
                [
                    e._l(e.customToolbarButtons, function (t, o) {
                        return e.customToolbarButtons
                            ? n("OneStateButton", {
                                key: o,
                                attrs: {
                                    "button-data": t,
                                    "on-click": function () {
                                        return t.onClick(e.fsLightbox);
                                    },
                                },
                            })
                            : e._e();
                    }),
                    e._v(" "),
                    //   e.disableThumbs ? e._e() : n("OneStateButton", { attrs: { "button-data": e.toolbarButtonsData.thumbs, "on-click": e.toggleThumbs } }),
                    //   e._v(" "),
                    n("OneStateButton", { attrs: { "button-data": e.toolbarButtonsData.zoomIn, "on-click": e.zoomIn } }),
                    e._v(" "),
                    n("OneStateButton", { attrs: { "button-data": e.toolbarButtonsData.zoomOut, "on-click": e.zoomOut } }),
                    e._v(" "),
                    n("SlideshowButton", { attrs: { "fs-lightbox-index": e.fsLightboxIndex } }),
                    e._v(" "),
                    //   n("FullscreenButton", { attrs: { "fs-lightbox-index": e.fsLightboxIndex } }),
                    //   e._v(" "),
                    n("OneStateButton", { attrs: { "button-data": e.toolbarButtonsData.close, "on-click": e.closeLightbox } }),
                ],
                2
            );
        };
        Be._withStripped = !0;
        var Fe = function () {
            var e = this.$createElement;
            return (this._self._c || e)("ToolbarButton", {
                attrs: {
                    "on-click": this.getButtonData("onClick"),
                    "view-box": this.getButtonData("viewBox"),
                    width: this.getButtonData("width"),
                    height: this.getButtonData("height"),
                    d: this.getButtonData("d"),
                },
            });
        };
        Fe._withStripped = !0;
        var Me = function () {
            var e = this.$createElement,
                t = this._self._c || e;
            return t(
                "div",
                { staticClass: "fslightbox-toolbar-button fslightbox-flex-centered", attrs: { title: this.title }, on: { click: this.onClick } },
                [t("Svger", { attrs: { "view-box": this.viewBox, width: this.width, height: this.height, d: this.d } })],
                1
            );
        };
        Me._withStripped = !0;
        var Ne = function () {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("svg", { attrs: { width: this.width, height: this.height, viewBox: this.viewBox, xmlns: "http://www.w3.org/2000/svg" } }, [t("path", { staticClass: "fslightbox-svg-path", attrs: { d: this.d } })]);
        };
        function Oe(e, t, n, o, i, r, s, a) {
            var c,
                u = "function" == typeof e ? e.options : e;
            if (
                (t && ((u.render = t), (u.staticRenderFns = n), (u._compiled = !0)),
                o && (u.functional = !0),
                r && (u._scopeId = "data-v-" + r),
                    s
                        ? ((c = function (e) {
                            (e = e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__),
                            i && i.call(this, e),
                            e && e._registeredComponents && e._registeredComponents.add(s);
                        }),
                            (u._ssrRegister = c))
                        : i &&
                        (c = a
                            ? function () {
                                i.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot);
                            }
                            : i),
                    c)
            )
                if (u.functional) {
                    u._injectStyles = c;
                    var l = u.render;
                    u.render = function (e, t) {
                        return c.call(t), l(e, t);
                    };
                } else {
                    var h = u.beforeCreate;
                    u.beforeCreate = h ? [].concat(h, c) : [c];
                }
            return { exports: e, options: u };
        }
        Ne._withStripped = !0;
        var Pe = Oe({ props: { width: String, height: String, viewBox: String, d: String } }, Ne, [], !1, null, null, null);
        Pe.options.__file = "src/components/helpers/Svger.vue";
        var ke = Pe.exports,
            De = Oe({ components: { Svger: ke }, props: { onClick: Function, width: String, height: String, viewBox: String, d: String, title: String } }, Me, [], !1, null, null, null);
        De.options.__file = "src/components/nav/toolbar/ToolbarButton.vue";
        var He = De.exports;
        function $e(e, t) {
            return { onClick: t, viewBox: e.viewBox, width: e.width, height: e.height, d: e.d, title: e.title };
        }
        var Re = Oe(
            {
                components: { ToolbarButton: He },
                props: { fsLightboxIndex: Number },
                data: function () {
                    return { isFullscreenOpen: !1 };
                },
                methods: {
                    getButtonData: function (e) {
                        var t = C[this.fsLightboxIndex],
                            n = t.core.fullscreenToggler,
                            o = n.exitFullscreen,
                            i = n.enterFullscreen,
                            r = t.data.toolbarButtons.fullscreen,
                            s = r.enter,
                            a = r.exit;
                        return (this.isFullscreenOpen ? $e(a, o) : $e(s, i))[e];
                    },
                },
                created: function () {
                    var e = this,
                        t = C[this.fsLightboxIndex].componentsServices.isFullscreenOpenManager;
                    (t.get = function () {
                        return e.isFullscreenOpen;
                    }),
                        (t.set = function (t) {
                            return (e.isFullscreenOpen = t);
                        });
                },
            },
            Fe,
            [],
            !1,
            null,
            null,
            null
        );
        Re.options.__file = "src/components/nav/toolbar/toolbar-buttons/FullscreenButton.vue";
        var Ue = Re.exports,
            Ye = function () {
                var e = this.$createElement;
                return (this._self._c || e)("ToolbarButton", {
                    attrs: { "on-click": this.onClick, "view-box": this.buttonData.viewBox, width: this.buttonData.width, height: this.buttonData.height, d: this.buttonData.d, title: this.buttonData.title },
                });
            };
        Ye._withStripped = !0;
        var Xe = Oe({ props: { buttonData: Object, onClick: Function }, components: { ToolbarButton: He } }, Ye, [], !1, null, null, null);
        Xe.options.__file = "src/components/nav/toolbar/toolbar-buttons/OneStateButton.vue";
        var je = Xe.exports,
            Ze = function () {
                var e = this.$createElement;
                return (this._self._c || e)("ToolbarButton", {
                    attrs: {
                        "on-click": this.getButtonData("onClick"),
                        "view-box": this.getButtonData("viewBox"),
                        width: this.getButtonData("width"),
                        height: this.getButtonData("height"),
                        d: this.getButtonData("d"),
                    },
                });
            };
        Ze._withStripped = !0;
        var Ve = Oe(
            {
                components: { ToolbarButton: He },
                props: { fsLightboxIndex: Number },
                data: function () {
                    return { isSlideshowOn: !1 };
                },
                methods: {
                    getButtonData: function (e) {
                        var t = C[this.fsLightboxIndex],
                            n = t.core.slideshowManager.toggleSlideshow,
                            o = t.data.toolbarButtons.slideshow,
                            i = o.start,
                            r = o.pause;
                        return (this.isSlideshowOn ? $e(r, n) : $e(i, n))[e];
                    },
                },
                created: function () {
                    var e = this,
                        t = C[this.fsLightboxIndex].componentsServices;
                    (t.startSlideshow = function () {
                        return (e.isSlideshowOn = !0);
                    }),
                        (t.stopSlideshow = function () {
                            return (e.isSlideshowOn = !1);
                        });
                },
            },
            Ze,
            [],
            !1,
            null,
            null,
            null
        );
        Ve.options.__file = "src/components/nav/toolbar/toolbar-buttons/SlideshowButton.vue";
        var qe = Oe(
            {
                components: { SlideshowButton: Ve.exports, OneStateButton: je, FullscreenButton: Ue },
                props: { fsLightboxIndex: Number },
                data: function () {
                    var e = C[this.fsLightboxIndex],
                        t = e.core,
                        n = t.clickZoomer,
                        o = n.zoomIn,
                        i = n.zoomOut,
                        r = t.lightboxCloser.closeLightbox,
                        s = e.data.toolbarButtons,
                        a = e.props,
                        c = a.disableThumbs,
                        u = a.customToolbarButtons,
                        l = { fsLightbox: C[this.fsLightboxIndex], toolbarButtonsData: s, customToolbarButtons: u, closeLightbox: r, zoomIn: o, zoomOut: i, disableThumbs: c };
                    return c || (l.toggleThumbs = C[this.fsLightboxIndex].core.thumbsToggler.toggleThumbs), l;
                },
            },
            Be,
            [],
            !1,
            null,
            null,
            null
        );
        qe.options.__file = "src/components/nav/toolbar/Toolbar.vue";
        var Je = qe.exports,
            Ge = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", { ref: "source-number-outer", staticClass: "fslightbox-slide-number-container" }, [
                    n("div", { ref: "source-number-inner", staticClass: "fslightbox-flex-centered" }, [
                        n("span", { attrs: { "data-test-id": "slide-number" } }, [e._v(e._s(e.slide))]),
                        e._v(" "),
                        n("span", { staticClass: "fslightbox-slash" }),
                        e._v(" "),
                        n("span", [e._v(e._s(e.sourcesCount))]),
                    ]),
                ]);
            };
        Ge._withStripped = !0;
        var Ke = Oe(
            {
                props: { fsLightboxIndex: Number },
                data: function () {
                    return { slide: C[this.fsLightboxIndex].stageIndexes.current + 1, sourcesCount: C[this.fsLightboxIndex].props.sources.length };
                },
                created: function () {
                    var e = this;
                    C[this.fsLightboxIndex].componentsServices.setSlideNumber = function (t) {
                        return (e.slide = t);
                    };
                },
                mounted: function () {
                    this.$refs["source-number-inner"].offsetWidth > 55 && (this.$refs["source-number-outer"].style.justifyContent = "flex-start");
                },
            },
            Ge,
            [],
            !1,
            null,
            null,
            null
        );
        Ke.options.__file = "src/components/nav/SlideNumber.vue";
        var Qe = Oe(
            {
                components: { SlideNumber: Ke.exports, Toolbar: Je },
                props: { fsLightboxIndex: Number },
                data: function () {
                    return { hasMoreThanSource: C[this.fsLightboxIndex].props.sources.length > 1 };
                },
                mounted: function () {
                    C[this.fsLightboxIndex].elements.nav = this.$refs.nav;
                },
            },
            ze,
            [],
            !1,
            null,
            null,
            null
        );
        Qe.options.__file = "src/components/nav/Naver.vue";
        var et = Qe.exports,
            tt = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n(
                    "div",
                    { ref: "ref", staticClass: "fslightbox-source-wrappers-container fslightbox-absoluted fslightbox-full-dimension", attrs: { "data-test-id": "source-wrappers-container" } },
                    e._l(e.sourcesLength, function (t, o) {
                        return n("SourceMainWrapper", { key: o, attrs: { i: o, "fs-lightbox-index": e.fsLightboxIndex } });
                    }),
                    1
                );
            };
        tt._withStripped = !0;
        var nt = function () {
            var e = this.$createElement,
                t = this._self._c || e;
            return t(
                "div",
                { ref: "ref", staticClass: "fslightbox-absoluted fslightbox-full-dimension fslightbox-flex-centered", attrs: { "data-test-class": "source-main-wrapper" } },
                [t("SourceEnhancementWrapper", { attrs: { "fs-lightbox-index": this.fsLightboxIndex, i: this.i } }), this._v(" "), this.isSourceLoaded ? this._e() : t("Loader")],
                1
            );
        };
        nt._withStripped = !0;
        var ot = function () {
            var e = this.$createElement,
                t = this._self._c || e;
            return t(
                "div",
                { ref: "ref", staticClass: "fslightbox-transform-transition", attrs: { "data-test-class": "source-enhancement-wrapper" } },
                [t("source-animation-wrapper", { attrs: { "fs-lightbox-index": this.fsLightboxIndex, i: this.i } })],
                1
            );
        };
        ot._withStripped = !0;
        var it = function () {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { ref: "ref" }, [this.sourceComponent && this.shouldSourceBeRendered ? t(this.sourceComponent, { tag: "component", attrs: { "fs-lightbox-index": this.fsLightboxIndex, i: this.i } }) : this._e()], 1);
        };
        it._withStripped = !0;
        var rt = function () {
            var e = this.$createElement;
            return (this._self._c || e)("img", this._b({ ref: "ref", staticClass: "fslightbox-source", attrs: { src: this.src }, on: { load: this.onLoad } }, "img", this.customAttributes, !1));
        };
        rt._withStripped = !0;
        var st = Oe(
            {
                props: { fsLightboxIndex: Number, i: Number },
                data: function () {
                    var e = C[this.fsLightboxIndex],
                        t = e.collections.sourcesLoadsHandlers,
                        n = e.props,
                        o = n.customAttributes,
                        i = n.sources;
                    return { onLoad: t[this.i].handleImageLoad, src: i[this.i], customAttributes: o && o[this.i] };
                },
                mounted: function () {
                    C[this.fsLightboxIndex].elements.sources[this.i] = this.$refs.ref;
                },
            },
            rt,
            [],
            !1,
            null,
            null,
            null
        );
        st.options.__file = "src/components/sources/proper-sources/Imager.vue";
        var at = st.exports,
            ct = function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("video", this._b({ ref: "ref", staticClass: "fslightbox-source fslightbox-video", attrs: { controls: "" }, on: { loadedmetadata: this.onLoad } }, "video", this.customAttributes, !1), [
                    t("source", { attrs: { src: this.src } }),
                ]);
            };
        ct._withStripped = !0;
        var ut = Oe(
            {
                props: { fsLightboxIndex: Number, i: Number },
                data: function () {
                    var e = C[this.fsLightboxIndex],
                        t = e.collections.sourcesLoadsHandlers,
                        n = e.props,
                        o = n.customAttributes,
                        i = n.sources;
                    return { onLoad: t[this.i].handleVideoLoad, src: i[this.i], customAttributes: o && o[this.i] };
                },
                mounted: function () {
                    C[this.fsLightboxIndex].elements.sources[this.i] = this.$refs.ref;
                },
            },
            ct,
            [],
            !1,
            null,
            null,
            null
        );
        ut.options.__file = "src/components/sources/proper-sources/Videor.vue";
        var lt = ut.exports,
            ht = function () {
                var e = this.$createElement;
                return (this._self._c || e)("iframe", this._b({ ref: "ref", staticClass: "fslightbox-source fslightbox-youtube-iframe", attrs: { src: this.src, allowfullscreen: "" } }, "iframe", this.customAttributes, !1));
            };
        ht._withStripped = !0;
        var dt = Oe(
            {
                props: { fsLightboxIndex: Number, i: Number },
                data: function () {
                    var e,
                        t = C[this.fsLightboxIndex].props,
                        n = t.customAttributes,
                        o = t.sources;
                    return { src: "https://www.youtube.com/embed/".concat(((e = o[this.i]), e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2])), customAttributes: n && n[this.i] };
                },
                mounted: function () {
                    var e = C[this.fsLightboxIndex],
                        t = e.collections.sourcesLoadsHandlers;
                    (e.elements.sources[this.i] = this.$refs.ref), t[this.i].handleYoutubeLoad();
                },
            },
            ht,
            [],
            !1,
            null,
            null,
            null
        );
        dt.options.__file = "src/components/sources/proper-sources/Youtuber.vue";
        var pt = dt.exports,
            ft = function () {
                var e = this.$createElement;
                return (this._self._c || e)(this.component, this._b({ ref: "ref", tag: "component" }, "component", this.componentProps, !1));
            };
        function mt(e) {
            var t = { component: e, componentProps: {} };
            return e.component && ((t.component = e.component), (t.componentProps = e.props)), t;
        }
        ft._withStripped = !0;
        var bt = Oe(
            {
                props: { fsLightboxIndex: Number, i: Number },
                data: function () {
                    return mt(C[this.fsLightboxIndex].props.sources[this.i]);
                },
                mounted: function () {
                    var e = C[this.fsLightboxIndex],
                        t = e.collections.sourcesLoadsHandlers,
                        n = e.elements.sources;
                    (n[this.i] = this.$refs.ref.$el), n[this.i].classList.add(x), t[this.i].handleCustomLoad();
                },
            },
            ft,
            [],
            !1,
            null,
            null,
            null
        );
        bt.options.__file = "src/components/sources/proper-sources/Customer.vue";
        var gt = bt.exports,
            xt = function () {
                var e = this.$createElement;
                return (this._self._c || e)("div", { staticClass: "fslightbox-invalid-file-wrapper fslightbox-flex-centered" }, [this._v("\n    Invalid source\n")]);
            };
        xt._withStripped = !0;
        var vt = Oe(
            {
                props: { fsLightboxIndex: Number, i: Number },
                mounted: function () {
                    var e = C[this.fsLightboxIndex],
                        t = e.componentsServices.hideLoaderCollection,
                        n = e.elements.sourceMainWrappers;
                    t[this.i](), n[this.i].classList.add(d);
                },
            },
            xt,
            [],
            !1,
            null,
            null,
            null
        );
        vt.options.__file = "src/components/sources/proper-sources/Invalider.vue";
        var St = vt.exports,
            wt = Oe(
                {
                    props: { fsLightboxIndex: Number, i: Number },
                    components: { Imager: at, Videor: lt, Youtuber: pt, Customer: gt, Invalider: St },
                    data: function () {
                        var e = {};
                        return this.attachComponentDataToObject(e), e;
                    },
                    created: function () {
                        var e = this;
                        C[this.fsLightboxIndex].componentsServices.updateSourceAnimationWrapperCollection[this.i] = function () {
                            e.attachComponentDataToObject(e);
                        };
                    },
                    mounted: function () {
                        C[this.fsLightboxIndex].elements.sourceAnimationWrappers[this.i] = this.$refs.ref;
                    },
                    methods: {
                        attachComponentDataToObject: function (e) {
                            var t = C[this.fsLightboxIndex],
                                n = t.core.stageManager,
                                o = t.elements.sourceComponents,
                                i = t.props.loadOnlyCurrentSource,
                                r = t.stageIndexes;
                            (e.sourceComponent = o[this.i]), (e.shouldSourceBeRendered = this.i === r.current || (!i && n.isSourceInStage(this.i)));
                        },
                    },
                },
                it,
                [],
                !1,
                null,
                null,
                null
            );
        wt.options.__file = "src/components/sources/SourceAnimationWrapper.vue";
        var Lt = wt.exports,
            Tt = Oe(
                {
                    props: { fsLightboxIndex: Number, i: Number },
                    components: { SourceAnimationWrapper: Lt },
                    mounted: function () {
                        C[this.fsLightboxIndex].elements.sourceEnhancementWrappers[this.i] = this.$refs.ref;
                    },
                },
                ot,
                [],
                !1,
                null,
                null,
                null
            );
        Tt.options.__file = "src/components/sources/SourceEnhancementWrapper.vue";
        var It = Tt.exports,
            Ct = function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t("div", { class: this.className, attrs: { "data-test-id": this.testId } }, [t("div"), this._v(" "), t("div"), this._v(" "), t("div"), this._v(" "), t("div")]);
            };
        Ct._withStripped = !0;
        var yt = Oe(
            {
                props: { additionalClassName: String, testId: String },
                data: function () {
                    var e = "fslightbox-loader";
                    return this.additionalClassName && (e += " ".concat(this.additionalClassName)), { className: e };
                },
            },
            Ct,
            [],
            !1,
            null,
            null,
            null
        );
        yt.options.__file = "src/components/helpers/Loader.vue";
        var _t = yt.exports,
            At = Oe(
                {
                    props: { fsLightboxIndex: Number, i: Number },
                    components: { SourceEnhancementWrapper: It, Loader: _t },
                    data: function () {
                        return { isSourceLoaded: !1 };
                    },
                    created: function () {
                        var e = this;
                        C[this.fsLightboxIndex].componentsServices.hideLoaderCollection[this.i] = function () {
                            return (e.isSourceLoaded = !0);
                        };
                    },
                    mounted: function () {
                        C[this.fsLightboxIndex].elements.sourceMainWrappers[this.i] = this.$refs.ref;
                    },
                },
                nt,
                [],
                !1,
                null,
                null,
                null
            );
        At.options.__file = "src/components/sources/SourceMainWrapper.vue";
        var Et = At.exports;
        function Wt() {
            (this.getMouseDownListenerFunc = function (e) {
                return V() ? void 0 : K(e, q);
            }),
                (this.getTouchStartListenerForFunc = function (e) {
                    return V() ? K(e, q) : void 0;
                });
        }
        var zt = Oe(
            {
                props: { fsLightboxIndex: Number },
                components: { SourceMainWrapper: Et },
                data: function () {
                    return { sourcesLength: C[this.fsLightboxIndex].props.sources.length };
                },
                mounted: function () {
                    var e = C[this.fsLightboxIndex],
                        t = e.core.sourcesPointerDown.listener;
                    e.elements.sourceWrappersContainer = this.$refs.ref;
                    var n = new Wt();
                    this.$refs.ref.addEventListener("mousedown", n.getMouseDownListenerFunc(t)), this.$refs.ref.addEventListener("touchstart", n.getTouchStartListenerForFunc(t));
                },
            },
            tt,
            [],
            !1,
            null,
            null,
            null
        );
        zt.options.__file = "src/components/sources/SourceWrappersContainer.vue";
        var Bt = zt.exports,
            Ft = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return e.sourcesLength > 1
                    ? n(
                        "div",
                        [
                            n("SlideButton", { attrs: { "fs-lightbox-index": e.fsLightboxIndex, "on-click": e.changeToPrevious, "button-data": e.previousButtonData, name: "previous" } }),
                            e._v(" "),
                            n("SlideButton", { attrs: { "fs-lightbox-index": e.fsLightboxIndex, "on-click": e.changeToNext, "button-data": e.nextButtonData, name: "next" } }),
                        ],
                        1
                    )
                    : e._e();
            };
        Ft._withStripped = !0;
        var Mt = function () {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { ref: "ref", class: "fslightbox-slide-btn-container fslightbox-slide-btn-container-" + this.name, attrs: { title: this.buttonData.title }, on: { click: this.onClick } }, [
                t(
                    "div",
                    { staticClass: "fslightbox-slide-btn fslightbox-flex-centered" },
                    [t("Svger", { attrs: { "view-box": this.buttonData.viewBox, width: this.buttonData.width, height: this.buttonData.height, d: this.buttonData.d } })],
                    1
                ),
            ]);
        };
        Mt._withStripped = !0;
        var Nt = Oe(
            {
                components: { Svger: ke },
                props: { fsLightboxIndex: Number, onClick: Function, buttonData: Object, name: String },
                mounted: function () {
                    C[this.fsLightboxIndex].elements["slideButton".concat(this.name.toUpperCase().substr(0, 1) + this.name.substr(1))] = this.$refs.ref;
                },
            },
            Mt,
            [],
            !1,
            null,
            null,
            null
        );
        Nt.options.__file = "src/components/SlideButton.vue";
        var Ot = Nt.exports,
            Pt = Oe(
                {
                    props: { fsLightboxIndex: Number },
                    components: { SlideButton: Ot },
                    data: function () {
                        var e = C[this.fsLightboxIndex],
                            t = e.core.slideChangeFacade,
                            n = t.changeToPrevious,
                            o = t.changeToNext,
                            i = e.data.slideButtons,
                            r = i.previous,
                            s = i.next;
                        return { sourcesLength: e.props.sources.length, changeToPrevious: n, changeToNext: o, previousButtonData: r, nextButtonData: s };
                    },
                },
                Ft,
                [],
                !1,
                null,
                null,
                null
            );
        Pt.options.__file = "src/components/SlideButtons.vue";
        var kt = Pt.exports,
            Dt = function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return this.isSlideSwipingHovererShown ? t("div", { staticClass: "fslightbox-slide-swiping-hoverer fslightbox-full-dimension fslightbox-absoluted" }) : this._e();
            };
        Dt._withStripped = !0;
        var Ht = Oe(
            {
                props: { fsLightboxIndex: Number },
                data: function () {
                    return { isSlideSwipingHovererShown: !1 };
                },
                created: function () {
                    var e = this,
                        t = C[this.fsLightboxIndex].componentsServices;
                    (t.showSlideSwipingHovererIfNotYet = function () {
                        e.isSlideSwipingHovererShown || (e.isSlideSwipingHovererShown = !0);
                    }),
                        (t.hideSlideSwipingHoverer = function () {
                            e.isSlideSwipingHovererShown = !1;
                        });
                },
            },
            Dt,
            [],
            !1,
            null,
            null,
            null
        );
        Ht.options.__file = "src/components/SlideSwipingHoverer.vue";
        var $t = Ht.exports,
            Rt = function () {
                var e = this.$createElement;
                return (this._self._c || e)("div", { ref: "ref", staticClass: "fslightbox-slideshow-bar fslightbox-absoluted" });
            };
        Rt._withStripped = !0;
        var Ut = Oe(
            {
                props: { fsLightboxIndex: Number },
                mounted: function () {
                    C[this.fsLightboxIndex].elements.slideshowBar = this.$refs.ref;
                },
            },
            Rt,
            [],
            !1,
            null,
            null,
            null
        );
        Ut.options.__file = "src/components/SlideshowBar.vue";
        var Yt = Ut.exports;
        function Xt() {
            var e = localStorage.getItem("fslightbox-scrollbar-width");
            if (e) return e;
            var t = (function () {
                    var e = document.createElement("div"),
                        t = e.style;
                    return (t.visibility = "hidden"), (t.width = "100px"), (t.msOverflowStyle = "scrollbar"), (t.overflow = "scroll"), e;
                })(),
                n = (function () {
                    var e = document.createElement("div");
                    return (e.style.width = "100%"), e;
                })();
            document.body.appendChild(t);
            var o = t.offsetWidth;
            t.appendChild(n);
            var i = n.offsetWidth;
            document.body.removeChild(t);
            var r = o - i;
            return localStorage.setItem("fslightbox-scrollbar-width", r.toString()), r;
        }
        function jt(e) {
            var t = e.core.lightboxOpenActioner,
                n = t.runBeforeRenderActions,
                o = t.runAfterRenderActions,
                i = e.data,
                s = e.props.openOnMount;
            document.getElementsByClassName(r).length || T(), (i.scrollbarWidth = Xt()), s && (n(), o());
        }
        var Zt = function () {
            var e = this,
                t = e.$createElement,
                n = e._self._c || t;
            return n(
                "div",
                e._l(e.captions, function (t, o) {
                    return t ? n("Caption", { key: o, attrs: { "fs-lightbox-index": e.fsLightboxIndex, i: o } }) : e._e();
                }),
                1
            );
        };
        Zt._withStripped = !0;
        var Vt = function () {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { ref: "ref", class: this.className }, [t("div", { staticClass: "fslightbox-caption-inner" }, [t(this.component, this._b({ tag: "component" }, "component", this.componentProps, !1))], 1)]);
        };
        Vt._withStripped = !0;
        var qt = Oe(
            {
                props: { fsLightboxIndex: Number, i: Number },
                data: function () {
                    var e = C[this.fsLightboxIndex],
                        t = e.data.isThumbing,
                        n = e.props.captions,
                        o = e.stageIndexes,
                        i = mt(n[this.i]);
                    return (i.className = "fslightbox-caption fslightbox-flex-centered"), o.current !== this.i || t || (i.className += " fslightbox-caption-active"), i;
                },
                mounted: function () {
                    C[this.fsLightboxIndex].elements.captions[this.i] = this.$refs.ref;
                },
            },
            Vt,
            [],
            !1,
            null,
            null,
            null
        );
        qt.options.__file = "src/components/captions/Caption.vue";
        var Jt = Oe(
            {
                components: { Caption: qt.exports },
                props: { fsLightboxIndex: Number },
                data: function () {
                    return { captions: C[this.fsLightboxIndex].props.captions };
                },
            },
            Zt,
            [],
            !1,
            null,
            null,
            null
        );
        Jt.options.__file = "src/components/captions/Captions.vue";
        var Gt = Jt.exports,
            Kt = function () {
                var e = this.$createElement,
                    t = this._self._c || e;
                return t(
                    "div",
                    { ref: "ref", class: this.className },
                    [
                        t("ThumbsCursorer", { attrs: { "fs-lightbox-index": this.fsLightboxIndex } }),
                        this._v(" "),
                        t("ThumbsInner", { attrs: { "fs-lightbox-index": this.fsLightboxIndex } }),
                        this._v(" "),
                        this.areThumbsLoading ? t("Loader", { attrs: { testId: "thumbs-loader", "additional-class-name": "fslightbox-thumbs-loader" } }) : this._e(),
                    ],
                    1
                );
            };
        Kt._withStripped = !0;
        var Qt = function () {
            var e = this.$createElement,
                t = this._self._c || e;
            return this.isThumbsCursorerShown ? t("div", { staticClass: "fslightbox-thumbs-cursorer fslightbox-full-dimension fslightbox-absoluted" }) : this._e();
        };
        Qt._withStripped = !0;
        var en = Oe(
            {
                props: { fsLightboxIndex: Number },
                data: function () {
                    return { isThumbsCursorerShown: !1 };
                },
                created: function () {
                    var e = this,
                        t = C[this.fsLightboxIndex].componentsServices;
                    (t.showThumbsCursorerIfNotYet = function () {
                        e.isThumbsCursorerShown || (e.isThumbsCursorerShown = !0);
                    }),
                        (t.hideThumbsCursorer = function () {
                            e.isThumbsCursorerShown = !1;
                        });
                },
            },
            Qt,
            [],
            !1,
            null,
            null,
            null
        );
        en.options.__file = "src/components/thumbs/ThumbsCursorer.vue";
        var tn = en.exports,
            nn = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n(
                    "div",
                    { ref: "ref", staticClass: "fslightbox-thumbs-inner", attrs: { "data-test-id": "thumbs-inner" } },
                    e._l(e.children, function (t, o) {
                        return t ? n(t.component, e._b({ key: o, tag: "component", attrs: { "fs-lightbox-index": e.fsLightboxIndex } }, "component", t.props, !1)) : e._e();
                    }),
                    1
                );
            };
        nn._withStripped = !0;
        var on = function () {
            var e = this.$createElement,
                t = this._self._c || e;
            return t("div", { ref: "thumb-wrapper", staticClass: "fslightbox-thumb-invalid fslightbox-thumb-wrapper" }, [
                t(
                    "div",
                    { ref: "thumb", class: this.thumbClassName },
                    [
                        t("Svger", {
                            attrs: {
                                width: "22px",
                                height: "22px",
                                "view-box": "0 0 30 30",
                                d:
                                    "M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16.212,8l-0.2,9h-2.024l-0.2-9 H16.212z M15.003,22.189c-0.828,0-1.323-0.441-1.323-1.182c0-0.755,0.494-1.196,1.323-1.196c0.822,0,1.316,0.441,1.316,1.196 C16.319,21.748,15.825,22.189,15.003,22.189z",
                            },
                        }),
                    ],
                    1
                ),
            ]);
        };
        on._withStripped = !0;
        var rn = Oe(
            {
                components: { Svger: ke },
                props: { fsLightboxIndex: Number, i: Number },
                data: function () {
                    var e = { thumbClassName: "fslightbox-thumb fslightbox-flex-centered" };
                    return this.i === C[this.fsLightboxIndex].stageIndexes.current && (e.thumbClassName += " fslightbox-thumb-active"), e;
                },
                mounted: function () {
                    var e = C[this.fsLightboxIndex],
                        t = e.core.thumbLoadHandler.handleLoad,
                        n = e.elements,
                        o = n.thumbsWrappers,
                        i = n.thumbs;
                    (o[this.i] = this.$refs["thumb-wrapper"]), (i[this.i] = this.$refs.thumb), t();
                },
            },
            on,
            [],
            !1,
            null,
            null,
            null
        );
        rn.options.__file = "src/components/thumbs/InvalidThumb.vue";
        var sn = rn.exports,
            an = function () {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n(
                    "div",
                    { ref: "thumb-wrapper", staticClass: "fslightbox-thumb-wrapper" },
                    [
                        e.thumbIcon ? n("div", { staticClass: "fslightbox-thumb-wrapper-darkener" }) : e._e(),
                        e._v(" "),
                        e.thumbIcon ? n(e.thumbIcon.component, e._b({ tag: "component" }, "component", e.thumbIcon.componentProps, !1)) : e._e(),
                        e._v(" "),
                        n("img", { ref: "thumb", class: e.thumbClassName, attrs: { src: e.src, alt: e.src }, on: { load: e.onLoad } }),
                    ],
                    1
                );
            };
        an._withStripped = !0;
        var cn = Oe(
            {
                props: { fsLightboxIndex: Number, i: Number, src: String },
                data: function () {
                    var e = C[this.fsLightboxIndex],
                        t = e.core.thumbLoadHandler.handleLoad,
                        n = e.props.thumbsIcons,
                        o = e.stageIndexes,
                        i = { thumbIcon: null },
                        r = n && n[this.i];
                    return r && (i.thumbIcon = mt(r)), (i.onLoad = t), (i.thumbClassName = "fslightbox-thumb"), this.i === o.current && (i.thumbClassName += " fslightbox-thumb-active"), i;
                },
                mounted: function () {
                    var e = C[this.fsLightboxIndex].elements,
                        t = e.thumbsWrappers,
                        n = e.thumbs;
                    (t[this.i] = this.$refs["thumb-wrapper"]), (n[this.i] = this.$refs.thumb);
                },
            },
            an,
            [],
            !1,
            null,
            null,
            null
        );
        cn.options.__file = "src/components/thumbs/Thumb.vue";
        var un = cn.exports,
            ln = Oe(
                {
                    props: { fsLightboxIndex: Number },
                    components: { Loader: _t, Thumb: un, InvalidThumb: sn },
                    data: function () {
                        return { children: this.getChildren().slice() };
                    },
                    created: function () {
                        var e = this;
                        C[this.fsLightboxIndex].componentsServices.updateThumbsInner = function () {
                            e.children = e.getChildren().slice();
                        };
                    },
                    mounted: function () {
                        var e = C[this.fsLightboxIndex],
                            t = e.core.thumbsSwipingDown.listener;
                        e.elements.thumbsInner = this.$refs.ref;
                        var n = new Wt();
                        this.$refs.ref.addEventListener("mousedown", n.getMouseDownListenerFunc(t)), this.$refs.ref.addEventListener("touchstart", n.getTouchStartListenerForFunc(t));
                    },
                    methods: {
                        getChildren: function () {
                            return C[this.fsLightboxIndex].elements.thumbsPropedComponents;
                        },
                    },
                },
                nn,
                [],
                !1,
                null,
                null,
                null
            );
        ln.options.__file = "src/components/thumbs/ThumbsInner.vue";
        var hn = Oe(
            {
                components: { Loader: _t, ThumbsInner: ln.exports, ThumbsCursorer: tn },
                props: { fsLightboxIndex: Number },
                data: function () {
                    var e = { areThumbsLoading: !0, className: "fslightbox-thumbs" };
                    return C[this.fsLightboxIndex].data.isThumbing && (e.className += " fslightbox-thumbs-active"), e;
                },
                mounted: function () {
                    var e = this;
                    (C[this.fsLightboxIndex].elements.thumbsContainer = this.$refs.ref),
                        (C[this.fsLightboxIndex].componentsServices.hideThumbsLoader = function () {
                            e.areThumbsLoading = !1;
                        });
                },
            },
            Kt,
            [],
            !1,
            null,
            null,
            null
        );
        hn.options.__file = "src/components/thumbs/Thumbs.vue";
        var dn,
            pn = hn.exports,
            fn = Oe(
                {
                    props: {
                        toggler: Boolean,
                        sources: Array,
                        initialAnimation: { type: String, default: d },
                        slideChangeAnimation: { type: String, default: l },
                        captions: Array,
                        onOpen: Function,
                        onBeforeClose: Function,
                        onClose: Function,
                        onInit: Function,
                        onShow: Function,
                        onSlideChange: Function,
                        slide: Number,
                        source: String,
                        sourceIndex: Number,
                        customAttributes: Array,
                        maxYoutubeVideoDimensions: Object,
                        slideButtons: Object,
                        toolbarButtons: Object,
                        disableLocalStorage: Boolean,
                        types: Array,
                        type: String,
                        thumbs: Array,
                        disableThumbs: Boolean,
                        showThumbsOnMount: Boolean,
                        thumbsIcons: Array,
                        customToolbarButtons: Array,
                        exitFullscreenOnClose: Boolean,
                        loadOnlyCurrentSource: Boolean,
                        openOnMount: Boolean,
                        slideDistance: { type: Number, default: 0.3 },
                        slideshowTime: { type: Number, default: 3e3 },
                        UIFadeOutTime: { type: Number, default: 8e3 },
                        zoomIncrement: { type: Number, default: 0.25 },
                    },
                    components: { Thumbs: pn, Captions: Gt, Naver: et, SlideButtons: kt, SlideshowBar: Yt, SlideSwipingHoverer: $t, SourceWrappersContainer: Bt },
                    data: function () {
                        return { isOpen: this.openOnMount };
                    },
                    watch: {
                        slide: function (e) {
                            C[this.fsLightboxIndex].core.lightboxUpdater.runCurrentStageIndexUpdateActionsFor(e - 1);
                        },
                        sourceIndex: function (e) {
                            C[this.fsLightboxIndex].core.lightboxUpdater.runCurrentStageIndexUpdateActionsFor(e);
                        },
                        source: function (e) {
                            C[this.fsLightboxIndex].core.lightboxUpdater.runCurrentStageIndexUpdateActionsFor(this.sources.indexOf(e));
                        },
                        toggler: function () {
                            C[this.fsLightboxIndex].core.lightboxUpdater.handleTogglerUpdate();
                        },
                    },
                    created: function () {
                        var e = this;
                        this.fsLightboxIndex = C.push(new We(this)) - 1;
                        var t = C[this.fsLightboxIndex].componentsServices.isLightboxOpenManager;
                        (t.get = function () {
                            return e.isOpen;
                        }),
                            (t.set = function (t, n) {
                                (e.isOpen = t), n && (dn = n);
                            });
                    },
                    mounted: function () {
                        (C[this.fsLightboxIndex].elements.container = this.$refs.container), jt(C[this.fsLightboxIndex]);
                    },
                    updated: function () {
                        (C[this.fsLightboxIndex].elements.container = this.$refs.container), dn && dn(), (dn = null);
                    },
                },
                o,
                [],
                !1,
                null,
                null,
                null
            );
        fn.options.__file = "src/FsLightbox.vue";
        var mn = fn.exports;
        t.default = mn;
    },
]);
