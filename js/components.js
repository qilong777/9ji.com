class NavTab {
    constructor(data) {
        this.ele = null;
        // this.active = null;
        this.init(data);
    }

    createEle(data) {
        let html = data.map((ele, index) => {
            let hotsHTML = ele.hots.map((ele) => {
                return `
                    <a href="javascrpit:void(0)">${ele}</a>
                `;
            }).join("");

            let detailsHTML = ele.details.map((ele) => {
                let itemsHTML = ele.items.map((ele) => {
                    return `
                        <a href="javascrpit:void(0)">${ele}</a>
                    `
                }).join("");
                return `
                <div class="item">
                    <h4>${ele.title}</h4>
                    <p>
                        ${itemsHTML}
                    </p>
                </div>
                `
            }).join("");
            return `
            <dl>
                <dt>
                    <p>
                        <i class="icon icon${index + 1}"></i>
                        <a class="title" href="javascrpit:void(0)" title=${ele.title}>${ele.title}</a>
                        <span>></span>
                    </p>

                    <span class="hot">
                        ${hotsHTML}
                    </span>
                </dt>
                <dd>
                    <div class="left fl">
                        ${detailsHTML}
                    </div>
                    <div class="right fr">
                        <a href="#">
                            <img src=${ele.src[0]} alt="" width="200" height="230">
                        </a>
                        <a href="#">
                            <img src=${ele.src[1]} alt="" width="200" height="230">
                        </a>
                    </div>
                </dd>
            </dl>
            `
        }).join("");
        html = "<div class='nav-menu'>" + html + "</div>";
        let div = document.createElement("div");
        div.className = "wrapper con";
        div.innerHTML = html;
        document.body.appendChild(div);
        return div;
    }

    init(data) {
        this.ele = this.createEle(data);
        this.addMouseEnter(this.ele.firstElementChild);
        this.addMouseLeave(this.ele.firstElementChild);
    }

    addMouseEnter(ele) {
        ele.addEventListener("mouseenter", (e) => {
            e = e || window.event;
            let target = e.target || e.srcElement;
            if (target.nodeName == "DL") {
                target.className = "active";
            }
        }, true)
    }

    addMouseLeave(ele) {
        ele.addEventListener("mouseleave", (e) => {
            e = e || window.event;
            let target = e.target || e.srcElement;
            if (target.nodeName == "DL") {
                target.className = "";
            }
        }, true)
    }
}


class Banner {
    constructor(data) {
        this.timer = null;
        this.index = 0;
        this.init(data)
    }

    createEle(data) {
        let imgHTML = "";
        let btnHTML = "";
        data.forEach((ele, index) => {
            if (index == 0) {
                imgHTML += `<li class="active"><a href="#"><img src=${ele.src} alt=""></a></li>`;
                btnHTML += `<li class="active"></li>`;
            }
            else {
                imgHTML += `<li><a href="#"><img src=${ele.src} alt=""></a></li>`;
                btnHTML += `<li></li>`;
            }
        });
        imgHTML = `<ul class="banner-img">${imgHTML}</ul>`;
        btnHTML = `<ul class="banner-btns">${btnHTML}</ul>`;
        let html = `
        <div class="banner">
        ${imgHTML}${btnHTML}
        <a class="banner-left"></a>
        <a class="banner-right"></a>
        </div>`;
        var div = document.createElement("div");
        div.className = "banner-wrap con";
        div.innerHTML = html;
        document.body.appendChild(div);
        return div;
    }

    addEvent() {
        this.btnsClickEvent(this.ele.getElementsByClassName("banner-btns")[0]);
        this.clickEvent(this.ele.getElementsByClassName("banner-left")[0]);
        this.clickEvent(this.ele.getElementsByClassName("banner-right")[0]);
        this.mouseEnterEvent(this.ele.firstElementChild);
        this.mouseLeaveEvent(this.ele.firstElementChild);
    }

    btnsClickEvent(ele) {
        ele.onclick = (e) => {
            e = e || window.event;
            let target = e.target || e.srcElement;
            if (target.nodeName != "LI") {
                return;
            }
            this.toggle([].indexOf.call(ele.children, target));
        }
    }

    clickEvent(ele) {
        let len = this.oBtnsLis.length;
        let nowIndex;
        ele.onclick = () => {
            if (ele.className == "banner-left") {
                nowIndex = (this.index - 1 + len) % len;
            } else {
                nowIndex = (this.index + 1) % len;
            }
            this.toggle(nowIndex);
        }
    }

    mouseEnterEvent(ele) {
        ele.onmouseenter = () => {
            ele.className = "banner hover";
            clearInterval(this.timer);
        }
    }

    mouseLeaveEvent(ele) {
        ele.onmouseleave = () => {
            ele.className = "banner";
            this.move();
        }
    }

    move() {
        this.timer = setInterval(() => {
            let index = this.index;
            this.toggle((index + 1) % this.oImgLis.length);
        }, 2000);
    }

    toggle(nowIndex) {
        this.oBtnsLis[this.index].className = "";
        this.oImgLis[this.index].className = "";
        this.index = nowIndex;
        this.oBtnsLis[nowIndex].className = "active";
        this.oImgLis[nowIndex].className = "active";
    }

    init(data) {
        this.ele = this.createEle(data);
        this.oImgLis = this.ele.querySelectorAll(".banner-img li");
        this.oBtnsLis = this.ele.querySelectorAll(".banner-btns li");
        this.move();
        this.addEvent();
    }
}


class FloorShow {
    constructor() {

    }

    init(data) {
        this.ele = this.createEle(data);
    }

    createEle(data) {
        var floorHtml = data.map(function (ele, index) {
            var len = ele.center.name.length;
            var centerADHtml = `<ul class="centerAD fl">`,
                rightADHtml = `<div class="rightAD fl">`,
                footerAHtml = "";
            for (var i = 0; i < len; i++) {
                centerADHtml += `
                <li class="centerAD-list">
                    <a href="#">
                        <div class="AD-info" style="color: ${ele.color};">
                            <h3>${ele.center.name[i]}</h3>
                            <p>${ele.center.detail[i]}</p>
                            <div class="price">
                                ${ele.center.price[i]}
                            </div>
                        </div>
                        <img src=${ele.center.img[i]} alt="">
                    </a>
                </li>
                `
            }
            centerADHtml += "</ul>"
            len = ele.right.name.length;
            for (i = 0; i < len; i++) {
                rightADHtml += `
                <a href="#" title=${ele.right.name[i]}>
                    <div class="AD-info" style="color: ${ele.color};">
                        <h3>${ele.right.name[i]}</h3>
                        <p>${ele.right.detail[i]}</p>
                    </div>
                    <img src=${ele.right.img[i]} alt="">
                </a>
                `
            }
            rightADHtml += "</div>";
            footerAHtml = ele.footer.map(function (element) {
                return `<a style="color: ${ele.color}" href="#">${element}</a>`
            }).join("");
            return `
            <div id="floor${index + 1}" class="floor">
                <div class="floor-title">
                    <a href="#">
                        <img src=${ele.title} alt="">
                    </a>
                </div>
                <div class="floor-main">
                    <div class="leftAD fl">
                        <a class="leftAD-top" href="#" title="${ele.left.name}">
                            <div class="AD-info" style="color: ${ele.color};">
                                <h3>${ele.left.name}</h3>
                                <p>${ele.left.detail}</p>
                            </div>
                            <img src=${ele.left.img} alt=${ele.left.name}>
                        </a>

                        <div class="hot-rank" style="background-color: ${ele.color};">

                            <a class="leftAD-bottom" href="#" title=${ele.left.name} style="background-color: ${ele.color};">
                                ${ele.left.name}
                                <i>></i>
                            </a>
                            <dl>
                                <dt>热销榜</dt>
                                <dd>
                                    <span><a href="#">${ele.left.hot[0]}</a></span>
                                    <span><a href="#">${ele.left.hot[1]}</a></span>
                                    <span><a href="#">${ele.left.hot[2]}</a></span>
                                    <span><a href="#">${ele.left.hot[3]}</a></span>
                                </dd>
                            </dl>
                        </div>
                    </div>
                    ${centerADHtml}
                    ${rightADHtml}
                </div>
                <div class="floor-footer">
                    <div class="footer-bg" style="background: ${ele.color}"></div>
                    <div class="footer-content clearfix">
                        <span style="color: ${ele.color}">品质推荐</span>
                        ${footerAHtml}
                    </div>
                </div>
                
            </div>
            `;
        }).join("");

        var html = `
            <div class="title">
                <img src="images/jiyoupai.png" width="1200">
            </div>
            ${floorHtml}
        `;

        var div = document.createElement("div");
        div.className = "floor-container con";
        div.innerHTML = html;
        document.body.appendChild(div);
        return div;
    }
}


class Tab {
    constructor() {

    }

    init(data) {
        this.ele = this.createEle(data);
        this.oLis = this.ele.getElementsByTagName("li");
        this.firstY = document.getElementsByClassName("floor-container")[0].offsetTop;
        this.floorHeight = parseInt(getComputedStyle(document.getElementById("floor1")).height) + parseInt(getComputedStyle(document.getElementById("floor1")).marginBottom);
        this.addEvent(this.ele);
    }

    createEle(data) {
        var tab = document.createElement("ul");
        tab.id = "tab";
        tab.style["margin-left"] = "-50px";
        var html = data.map(function (ele, index) {
            if (index == 0) {
                return `<li class="active" style="line-height:${ele["line-height"]};">${ele.name}</li>`
            }
            return `<li style="line-height:${ele["line-height"]};">${ele.name}</li>`;
        }).join("");
        tab.innerHTML = html;
        document.querySelector(".wrapper").appendChild(tab);
        return tab;
    }

    addEvent(ele) {
        this.resizeEvent(ele);
        this.scrollEvent(ele);
        this.clickEvent(ele);
    }

    resizeEvent(ele) {
        window.onresize = function () {
            if (ele.offsetLeft < 0) {
                ele.style["margin-left"] = "-15px";
            } else if (ele.offsetLeft >= 36) {
                ele.style["margin-left"] = "-50px";
            }
        };
    }

    scrollEvent(ele) {
        var active = ele.getElementsByClassName("active")[0];
        this.index = Array.prototype.indexOf.call(this.oLis, active);
        var self = this;
        window.onscroll = function () {
            if (window.scrollY >= 330) {
                ele.style.opacity = "1";
            } else {
                ele.style.opacity = "0";
            }
            var floor = Math.floor((window.scrollY - 330) / self.floorHeight);
            if (floor == -1) {
                floor = 0;
            }
            self.oLis[self.index].className = "";
            self.oLis[floor].className = "active";
            self.index = floor;
            // console.log("ok");
        }
    }

    clickEvent(ele) {
        var self = this;
        var timer;
        var from, to;
        ele.onclick = function (e) {
            e = e || window.event;
            var target = e.target || e.srcElement;
            if (target.nodeName != "LI") {
                return;
            }
            from = self.index;
            self.oLis[from].className = "";
            target.className = "active";
            to = Array.prototype.indexOf.call(self.oLis, target);
            self.index = to;
            if (timer) {
                clearInterval(timer);
            }
            timer = setInterval(function () {
                if (from < to && scrollY < to * self.floorHeight + 350) {
                    window.scrollBy(0, 10 * (to - from));
                }
                else if (from > to && scrollY > to * self.floorHeight + 350) {
                    window.scrollBy(0, -10 * (from - to));
                }
                else {
                    clearInterval(timer);
                }
            }, 10);

        }
    }
}
