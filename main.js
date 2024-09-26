"use strict";
window.addEventListener("DOMContentLoaded", () => {
    const plugs = new Plugs("button");
});
class Plugs {
    /**
     * @param buttonEl CSS selector of the button
     */
    constructor(buttonEl) {
        var _a;
        this.button = document.querySelector(buttonEl);
        (_a = this.button) === null || _a === void 0 ? void 0 : _a.addEventListener("click", this.toggleTheme.bind(this));
    }
    /**
     * Set the theme to light or dark.
     */
    toggleTheme() {
        var _a, _b;
        const pressed = ((_a = this.button) === null || _a === void 0 ? void 0 : _a.getAttribute("aria-pressed")) === "true";
        // set `aria-pressed`; when first applied, it’ll allow the CSS animations to be run
        (_b = this.button) === null || _b === void 0 ? void 0 : _b.setAttribute("aria-pressed", `${!pressed}`);
        // set the opposite value for the document
        document.documentElement.setAttribute("data-dark", `${pressed}`);
    }
}