"use strict";

let hQuery = function (selector) {
	let el;

	let obj = {
		getEl(selector, internal) {
			if (internal) {
				el = selector.querySelector(internal);
				return this;
			}
			if (el) {
				return el;
			};
			return document.querySelector(selector);
		},
		addClass() {
			Array.from(arguments).forEach(elem => {
				el.classList.add(elem);
			});
			return this;
		},
		removeClass() {
			Array.from(arguments).forEach(elem => {
				el.classList.remove(elem);
			});
			return this;
		},
		hasClass(className) {
			return el.classList.contains(className);
		},
		toggleClass() {
			Array.from(arguments).forEach(elem => {
				el.classList.toggle(elem);
			});
			return this;
		},
		after(html) {
			el.outerHTML += html;
			return this;
		},
		before(html) {
			el.outerHTML = html + el.outerHTML;
			return this;
		},
		append(html) {
			el.innerHTML += html;
			return this;
		},
		prepend(html) {
			el.innerHTML = html + el.innerHTML;
		},
		attr(name, value) {
			if (typeof name == "string") {
				if (value) {
					el.setAttribute(name, value);
					return this;
				} else {
					return el.getAttribute(name);
				};
			} else {
				for (let i = 0; i < name.length; i++) {
					el.setAttribute(name[i], value[i]);
				};
				return this;
			};
		},
		children() {
			return el.children;
		},
		clone() {
			return el.cloneNode(true);
		},
		data() {
			if (arguments.length == 0) {
				return el.dataset;
			} else if (arguments.length == 1) {
				return el.dataset[Array.from(arguments)[0]];
			} else {
				el.dataset[Array.from(arguments)[0]] = Array.from(arguments)[1];
				return this;
			};
		},
		empty() {
			while (el.firstChild) {
				el.removeChild(el.firstChild);
			};
		},
		find(query) {
			return this.getEl(this.getEl(el), query);
		},
		on(event, callback) {
			el.addEventListener(event, callback);
			return this;
		},
		off(event, callback) {
			el.removeEventListener(event, callback);
			return this;
		},
		html(content) {
			if (content) {
				el.innerHTML = content;
				return this;
			} else {
				return el.innerHTML;
			};
		},
		text(content) {
			if (content) {
				el.innerText = content;
				return this;
			} else {
				return el.innerText;
			};
		},
		val(content) {
			if (content) {
				el.value = content;
				return this;
			} else {
				return el.value;
			};
		},
		parent() {
			return el.parentNode;
		},
		del() {
			el.remove();
			return this;
		},
		scroll() {
			el.scrollIntoView({ behavior: 'smooth' });
			return this;
		},
		size() {
			return el.getBoundingClientRect();
		},
		fadeOut(fast) {
			let fade = setInterval(function () {
				if (!el.style.opacity) {
					el.style.opacity = 1;
				}
				if (el.style.opacity > 0) {
					el.style.opacity -= 0.1;
				} else {
					clearInterval(fade);
				}
			}, fast);
			return this;
		},
		fadeIn(fast) {
			let fade = setInterval(function () {
				if (!el.style.opacity) {
					el.style.opacity = 0;
				}
				if (el.style.opacity < 1) {
					el.style.opacity = parseFloat(el.style.opacity) + 0.1;
				} else {
					clearInterval(fade);
				}
			}, fast);
			return this;
		},
		css(property, value) {
			if (value) {
				el.style[property] = value;
				return this;
			} else {
				return el.style[property];
			};
		}
	};

	el = obj.getEl(selector);
	return obj;
};

const h = hQuery;

document.onkeyup = function (e) {
    if (e.shiftKey && e.key == "D") {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("pzplUI_mode", "dark");
        } else {
            localStorage.setItem("pzplUI_mode", "light");
        }
    };
};

if (localStorage.getItem("pzplUI_mode") == "dark") {
    document.body.classList.add("dark-mode");
};

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("pzplUI_mode", "dark");
    } else {
        localStorage.setItem("pzplUI_mode", "light");
    }
};