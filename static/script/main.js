(function() {

    function browserLanguage() {
        var nav = navigator;
        var lang = (nav.browserLanguage || nav.language || nav.userLanguage || "").substr(0, 2);
        return "zh" //lang === "zh" ? "zh" : "en"
    }
    var currentLang = browserLanguage()

    require([currentLang], function(langBag) {
        var menuNodes = []
        var vm = avalon.define(avalon.mix(langBag, {
            $id: "main",
            userLanguage: currentLang,
            headerPath:"header.html",
            loginPath:"login.html",
            infoPath: "zh/projectInfo/doing.html",
            todoPath: "zh/toDo/leaving.html",
            personPath: "zh/personManage/lionService.html",
            currentIndex: 0,
            // personal_project_summary:[
            //     {},
            //     {},
            //     {}
            // ],
            arrayLoginAndreg:[{
                src: "login.html",
                text: "登录"
            }],
            arrayPersonManager: [{
                src: "zh/personManage/lionService.html",
                text: "狮子特工"
            }, {
                src: "zh/personManage/productGroup.html",
                text: "产品组"
            }, {
                src: "zh/personManage/designGroup.html",
                text: "设计组"
            }, {
                src: "zh/personManage/frontEndGroup.html",
                text: "前端开发组"
            }, {
                src: "zh/personManage/severDevGroup.html",
                text: "后端开发组"
            }, {
                src: "zh/personManage/testGroup.html",
                text: "测试组"
            }, {
                src: "zh/personManage/other-1.html",
                text: "其他一组"
            }, {
                src: "zh/personManage/other-2.html",
                text: "其他二组"
            }, {
                src: "zh/personManage/other-3.html",
                text: "其他三组"
            }, {
                src: "zh/personManage/other-4.html",
                text: "其他四组"
            }],

            arrayProjectInfo: [{
                src: "zh/projectInfo/doing.html",
                text: "进行中"
            }, {
                src: "zh/projectInfo/un-start.html",
                text: "未开始"
            }, {
                src: "zh/projectInfo/finished.html",
                text: "已完成"
            }],

            arrayToDo: [{
                    src: "zh/toDo/leaving.html",
                    text: "请假"
                }, {
                    src: "zh/toDo/overTime.html",
                    text: "加班"
                }, {
                    src: "zh/toDo/check.html",
                    text: "审核"
                }

            ],

            arrayPaging: [{}, {}, {}],
            getOut:function(newPath,e){
                e.preventDefault();
                vm.loginPath = newPath;
                // alert("===抱歉！注册/登录模块已写好，会尽快发布====");
            },

            changePersonManager: function(newPath, e) {
                e.preventDefault();
                vm.personPath = newPath;
            },

            projectInfoChange: function(newPath, e) {
                e.preventDefault();
                vm.infoPath = newPath;
            },

            todoChange: function(newPath, e) {
                e.preventDefault();
                vm.todoPath = newPath;
            },

            active: function($index) {
                vm.currentIndex = $index;
                currentIndex = currentIndex + 1;
            },

            currentPath: currentLang + "/index.html#zh/leaving.html",

            collectMenu: function() {
                avalon.Array.ensure(menuNodes, this)
            },
            //  concepts: [],//form langBag
            //  statics: {},//form langBag
            //  engineering: [], //form langBag
            //  mobiles: [],//form langBag
            // bindings: [{
            //     name: "ms-controller",
            //     id: "controller"
            // }, {
            //     name: "one-time",
            //     id: "one-time"
            // }, {
            //     name: "component",
            //     id: "component"
            // }, {
            //     name: "ms-important",
            //     id: "controller"
            // }, {
            //     name: "ms-skip",
            //     id: "controller"
            // }, {
            //     name: "ms-text",
            //     id: "text"
            // }, {
            //     name: "ms-html",
            //     id: "text"
            // }, {
            //     name: "ms-visible",
            //     id: "visible"
            // }, {
            //     name: "directive",
            //     id: "directive"
            // }, {
            //     name: "ms-if",
            //     id: "if"
            // }, {
            //     name: "ms-data-*",
            //     id: "data"
            // }, {
            //     name: "ms-attr-*",
            //     id: "attr"
            // }, {
            //     name: "ms-class-*",
            //     id: "class"
            // }, {
            //     name: "ms-active-*",
            //     id: "class"
            // }, {
            //     name: "ms-effect",
            //     id: "effect"
            // }, {
            //     name: "ms-hover-*",
            //     id: "class"
            // }, {
            //     name: "ms-css-*",
            //     id: "css"
            // }, {
            //     name: "ms-on-*",
            //     id: "on"
            // }, {
            //     name: "ms-include",
            //     id: "include"
            // }, {
            //     name: "ms-duplex",
            //     id: "duplex"
            // }, {
            //     name: "ms-repeat",
            //     id: "repeat"
            // }, {
            //     name: "ms-each",
            //     id: "repeat"
            // }, {
            //     name: "ms-with",
            //     id: "repeat"
            // }, {
            //     name: "ms-widget",
            //     id: "widget"
            // }, {
            //     name: "ms-l20n",
            //     id: "l20n"
            // }].sort(),

            // filters: [{
            //     name: "html",
            //     id: "html"
            // }, {
            //     name: "uppercase",
            //     id: "uppercase"
            // }, {
            //     name: "lowercase",
            //     id: "lowercase"
            // }, {
            //     name: "currency",
            //     id: "currency"
            // }, {
            //     name: "number",
            //     id: "number"
            // }, {
            //     name: "escape",
            //     id: "escape"
            // }, {
            //     name: "truncate",
            //     id: "truncate"
            // }, {
            //     name: "sanitize",
            //     id: "sanitize"
            // }, {
            //     name: "date",
            //     id: "date"
            // }],
            // components: [
            //     {
            //         name: "mmRouter",
            //         id: "mmRouter"
            //     }
            // ],
            supportSVG: !!window.dispatchEvent,

            changePath: function() {
                var next = this
                setTimeout(function() {
                    vm.currentPath = location.href.split("#")[1]
                    try {
                        window.scrollTo({
                            left: 0,
                            top: 0,
                            behavior: 'smooth'
                        })
                    } catch (e) {
                        window.scrollTo(0, 0)
                    }
                })
                if (next.nodeName === "A" && next.parentNode.nodeName !== "LI") {
                    while (next = next.nextSibling) {
                        if (next.nodeType === 1) {
                            break
                        }
                    }
                    menuNodes.forEach(function(el) {
                        el.style.display = el === next ? "" : "none"
                    })
                }

            },

            highlight: function() {
                SyntaxHighlighter.highlight()
            }
        }))

        var href = location.href
        if (href.indexOf("#zh") !== -1 || href.indexOf("#en") !== -1) {
            vm.currentPath = href.split("#")[1]
                // alert( vm.currentPath);
        }

        avalon.scan(document.documentElement, vm)
    })

})()
