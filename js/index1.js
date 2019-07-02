"use strict";

Vue.component('party-index', {
    render: function anonymous() {
        var _vm = this;

        var _h = _vm.$createElement;

        var _c = _vm._self._c || _h;

        return _c('div', {
            staticClass: "container"
        }, [_c('div', {
            staticClass: "title"
        }), _vm._v(" "), _c('div', {
            staticClass: "org"
        }, [_c('img', {
            attrs: {
                "src": "img/index/org_logo.png",
                "alt": ""
            }
        }), _vm._v(" "), _c('h3', {
            staticStyle: {
                "color": "#f2f2f2"
            }
        }, [_vm._v(" " + _vm._s(_vm.currentOrg.name))])]), _vm._v(" "), _c('div', {
            staticClass: "content"
        }, [_c('div', {
            staticClass: "content_left"
        }, [_c('div', [_vm._m(0), _vm._v(" "), _c('vue-seamless-scroll', {
            staticClass: "warp",
            attrs: {
                "data": _vm.parActivity.currentMonth
            }
        }, [_c('ul', {
            ref: "listItem",
            staticClass: "item"
        }, _vm._l(_vm.parActivity.currentMonth, function (item, index) {
            return _c('li', {
                staticStyle: {
                    "width": "300px"
                }
            }, [_c('span', [_vm._v(_vm._s(index + 1) + "、" + _vm._s(item.title))]), _vm._v(" "), _c('span', {
                staticStyle: {
                    "float": "right",
                    "font-size": "20px"
                }
            }, [_vm._v(_vm._s(item.month))])]);
        }), 0)])], 1), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), _c('div', [_vm._m(1), _vm._v(" "), _c('vue-seamless-scroll', {
            staticClass: "warp",
            attrs: {
                "data": _vm.parActivity.nextMonth
            }
        }, [_c('ul', {
            ref: "listItem",
            staticClass: "item"
        }, _vm._l(_vm.parActivity.nextMonth, function (item, index) {
            return _c('li', {
                staticStyle: {
                    "width": "300px"
                }
            }, [_c('span', [_vm._v(_vm._s(index + 1) + "、" + _vm._s(item.title))]), _vm._v(" "), _c('span', {
                staticStyle: {
                    "float": "right",
                    "font-size": "20px"
                }
            }, [_vm._v(_vm._s(item.month))])]);
        }), 0)])], 1)]), _vm._v(" "), _c('div', {
            staticClass: "content_right"
        }, [_c('div', {
            staticStyle: {
                "position": "relative",
                "z-index": "10"
            }
        }, [_c('h1', {
            staticStyle: {
                "color": "white",
                "margin": "0 auto 40px auto",
                "text-align": "center"
            }
        }, [_vm._v("本月任务")]), _vm._v(" "), _c('swiper', {
            ref: "awesomeSwiperA",
            attrs: {
                "options": _vm.swipperOptions
            }
        }, _vm._l(_vm.todoList, function (item, index) {
            return _c('swiper-slide', {
                key: item.id
            }, [_c('div', {
                staticClass: "activity_detail"
            }, [_c('h1', {
                staticStyle: {
                    "position": "relative",
                    "top": "60px",
                    "left": "60px"
                }
            }, [_c('img', {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: item.taskType === 'Party',
                    expression: "item.taskType === 'Party'"
                }],
                staticStyle: {
                    "width": "45px",
                    "height": "45px",
                    "vertical-align": "bottom"
                },
                attrs: {
                    "src": "/img/party-logo.png",
                    "alt": "党建logo"
                }
            }), _vm._v(" "), _c('img', {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: item.taskType === 'DistLearning',
                    expression: "item.taskType === 'DistLearning'"
                }],
                staticStyle: {
                    "width": "45px",
                    "height": "45px",
                    "vertical-align": "bottom"
                },
                attrs: {
                    "src": "/img/learning-logo.png",
                    "alt": "远教logo"
                }
            }), _vm._v("\r\n                                        " + _vm._s(item.title))]), _vm._v(" "), _c('div', {
                staticStyle: {
                    "position": "relative",
                    "top": "100px",
                    "left": "60px",
                    "font-size": "24px"
                }
            }, [_c('el-row', {
                staticStyle: {
                    "margin": "15px 0"
                }
            }, [_c('el-col', {
                staticStyle: {
                    "width": "140px"
                }
            }, [_vm._v("任务类型：")]), _vm._v(" "), _c('el-col', {
                staticStyle: {
                    "width": "480px"
                }
            }, [_vm._v(_vm._s(item.type))])], 1), _vm._v(" "), _c('el-row', {
                staticStyle: {
                    "margin": "15px 0"
                }
            }, [_c('el-col', {
                staticStyle: {
                    "width": "140px"
                }
            }, [_vm._v("任务分值：")]), _vm._v(" "), _c('el-col', {
                staticStyle: {
                    "width": "480px"
                }
            }, [_vm._v(_vm._s(item.score) + "分")])], 1), _vm._v(" "), _c('el-row', {
                staticStyle: {
                    "margin": "15px 0"
                }
            }, [_c('el-col', {
                staticStyle: {
                    "width": "140px"
                }
            }, [_vm._v("截止日期：")]), _vm._v(" "), _c('el-col', {
                staticStyle: {
                    "width": "480px"
                }
            }, [_vm._v(_vm._s(item.month))])], 1), _vm._v(" "), _c('el-row', {
                staticStyle: {
                    "margin": "15px 0"
                }
            }, [_c('el-col', {
                staticStyle: {
                    "width": "140px"
                }
            }, [_vm._v("任务内容：")]), _vm._v(" "), _c('el-col', {
                staticStyle: {
                    "width": "480px"
                }
            }, [_vm._v(_vm._s(item.context))])], 1), _vm._v(" "), _c('div', {
                staticStyle: {
                    "float": "right"
                }
            }, [item.status === '2' ? _c('img', {
                staticClass: "status-img",
                attrs: {
                    "src": "img/finished.png",
                    "alt": ""
                }
            }) : item.status === '1' ? _c('img', {
                staticClass: "status-img",
                attrs: {
                    "src": "img/review.png",
                    "alt": ""
                }
            }) : item.status === '0' ? _c('img', {
                staticClass: "status-img",
                attrs: {
                    "src": "img/wait_acting.png",
                    "alt": ""
                }
            }) : _vm._e()])], 1)])]);
        }), 1)], 1), _vm._v(" "), _c('div', {
            staticClass: "swiper-pagination",
            attrs: {
                "slot": "pagination"
            },
            slot: "pagination"
        })])])]);
    },
    staticRenderFns: [function anonymous() {
        var _vm = this;

        var _h = _vm.$createElement;

        var _c = _vm._self._c || _h;

        return _c('div', {
            staticClass: "left_title"
        }, [_c('img', {
            attrs: {
                "src": "img/index/acting.png",
                "alt": ""
            }
        }), _c('h2', [_vm._v(" 本月执行中")])]);
    }, function anonymous() {
        var _vm = this;

        var _h = _vm.$createElement;

        var _c = _vm._self._c || _h;

        return _c('div', {
            staticClass: "left_title"
        }, [_c('img', {
            attrs: {
                "src": "img/index/plan.png",
                "alt": ""
            }
        }), _c('h2', [_vm._v(" 下月待执行")])]);
    }],
    data: function data() {
        return {
            swipperOptions: {
                effect: 'coverflow',
                grabCursor: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflowEffect: {
                    rotate: 50,
                    stretch: 250,
                    depth: 400,
                    modifier: 1,
                    slideShadows: true
                },
                pagination: {
                    el: '.swiper-pagination'
                },
                on: {
                    progress: function progress(_progress) {
                        for (i = 0; i < this.slides.length; i++) {
                            var slide = this.slides.eq(i);
                            var slideProgress = this.slides[i].progress;
                            modify = 1;

                            if (Math.abs(slideProgress) > 1) {
                                modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                            }

                            translate = slideProgress * modify * 260 + 'px';
                            scale = 1 - Math.abs(slideProgress) / 5;
                            zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                            slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                            slide.css('zIndex', zIndex);
                            slide.css('opacity', 1);

                            if (Math.abs(slideProgress) > 3) {
                                slide.css('opacity', 0);
                            }
                        }
                    },
                    setTransition: function setTransition(transition) {
                        for (var _i = 0; _i < this.slides.length; _i++) {
                            var slide = this.slides.eq(_i);
                            slide.transition(transition);
                        }
                    }
                }
            },
            currentOrg: {},
            parActivity: {},
            todoList: [],
            number: window.hardware ? window.hardware.STB.serialNumber : '02117616500012212'
        };
    },
    methods: {
        init: function init() {
            var _this = this;

            var KEY = {
                UP: 28,
                DOWN: 29,
                LEFT: 30,
                RIGHT: 31,
                ENTER: 13,
                BACK: 114,
                EXIT: 61
            };

            var keyDown = function keyDown(evt) {
                evt = evt ? evt : window.event ? window.event : ""; //兼容IE和Firefox获得keyBoardEvent对象

                var keyCode = evt.keyCode ? evt.keyCode : evt.which;

                switch (keyCode) {
                    case KEY.DOWN:
                    case KEY.UP:
                    case KEY.LEFT:
                        _this.$refs.awesomeSwiperA.slidePrev();

                    case KEY.RIGHT:
                        _this.$refs.awesomeSwiperA.slideNext();

                    case KEY.ENTER:
                        var index = _this.$refs.awesomeSwiperA.activeIndex;
                        var activity = _this.todoList[index];
                        window.location = "/party_activity_detail.html?activityId=".concat(activity.id, "&organizationId=").concat(_this.currentOrg.organizationId);

                    default:
                }

                return false;
            };

            document.onirkeypress = keyDown;
            document.onkeydown = keyDown;
        }
    },
    created: function created() {
        var _this2 = this;

        this.$http.get('/identity/parActivity/tv/index').then(function (data) {
            _this2.parActivity = data.data.content;
        });
        this.$http.get("/identity/parActivityObject/number/".concat(this.number)).then(function (data) {
            _this2.todoList = data.data.content;
        });
        this.$http.get("/identity/parCamera/number/".concat(this.number)).then(function (data) {
            _this2.currentOrg = data.data.content;
        });
    }
});