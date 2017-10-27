/*
* by willwang
* */

var $ = function () {
    return new Base()
};

/*
* 获取节点的方法
* 实现连缀词法
* */
function Base() {
    this.elements = [];
    this.getId = function (id) {
        // console.log("this: ", this);
        var e = document.getElementById(id);
        this.elements.push(e);
        return this;
    };
    this.getTagName = function (tagName) {
        var e = document.getElementsByTagName(tagName);
        console.log("e: ", e);
        for (var i in e) {
            this.elements.push(e[i]);
        }
        // console.log("elements: ", this.elements)
        return this;
    }
}

Base.prototype.css = function (attr, value) {
    // 对指定节点元素设置属性和值
    var els = this.elements;
    for (var i in els) {
        els[i].style[attr] = value;
    }
    return this;
};

Base.prototype.html = function (str) {
    for (var i in this.elements) {
        this.elements[i].innerHTML = str;
    }
    return this;
};