	//var d = document; console.log(d);
	//var b = d.body; console.log(b);

	//EventTarget.prototype.on = function (type, listener, useCapture) {
	//	this.addEventListener(type, listener, useCapture);
	//	return this;
	//}

	//b.on('click', function () { console.log('click'); })
	//	.on('search', function () { console.log('search'); })
	//		.on('blur', function () { console.log('blur'); });

	//EventTarget.prototype.trigger = function (eventName) {
	//	var customEvent = new CustomEvent(eventName);
	//	this.dispatchEvent(customEvent);
	//	return this;
	//}

//var $ = function O(selector) {
//	return document.querySelector(selector);
//}


//querySelector
//(function(global) {
//	function jQuery(selector) {
//		document.querySelector(selector);
//	}

//	global.$ = global.jQuery = jQuery;
//})(window);

//selectorAll
(function (global) {
	function jQuery(selector) {
		var result = document.querySelectorAll(selector);
		//return result == 1 ? result[0] : result;
		switch (result.length) {
			case 0:
				return null;
			case 1:
				return result[0];
			default:
				return result;
		}
	}

	global.$ = global.jQuery = jQuery;

	HTMLElement.prototype.textt = function (strText) {
		//set Case
		if (strText) {
			this.innerText = strText;
		//get Case
		} else {
			return this.innerText;
		}
	}

	HTMLElement.prototype.val = function (strVal) {
		//if (strVal) {
		//	return (this.value = strVal, this)
		//} else {
		//	return this.value;
		//}

		if (null == strVal) {
			return this.value;
		} else {
			return this.value = strVal;
		}
	}

	HTMLElement.prototype.html = function (strHtml) {
		if (strHtml) {
			return (this.innerHTML = strHtml, this);
		} else {
			return this.innerHTML;
		}
	}

	HTMLElement.prototype.tooltip = function (strTitle) {

		if (null == strTitle) {
			return this.getAttribute('title');
		} else {
			return (this.setAttribute('title', strTitle), this);
		}
		

		//if (strTitle) {
		//	return (this.title = strTitle, this);
		//} else {
		//	return this.title;
		//}
	}

	HTMLElement.prototype.attr = function (attrName, attrValue) {
		switch (arguments.length) {
			case 1:
				return this.getAttribute(attrName);
			case 2:
				return (this.setAttribute(attrName, attrValue), this);
		}
	}

	HTMLElement.prototype.css = function (styleName, styleValue) {
		switch (arguments.length) {
			case 1:
				return this.style[styleName];
			case 2:
				return (this.style[styleName] = styleValue, this);
		}
	}
})(window);