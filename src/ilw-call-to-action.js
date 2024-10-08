import {LitElement, html, unsafeCSS} from "lit";
import styles from "./ilw-call-to-action.styles.css?inline";
import "./ilw-call-to-action.css";
import { classMap } from "lit/directives/class-map.js";

class CallToAction extends LitElement {
    static get properties() {
        return {
            theme: {},
            align: {},
            width: {},
            _hasGraphic: { state: true, type: Boolean },
        };
    }

    static get styles() {
        return unsafeCSS(styles);
    }

    constructor() {
        super();
        this.theme = "gray";
        this.align = "left";
        this.width = "auto";
        this._hasGraphic = false;
    }

    /**
     * Tracks if there's an icon, so we can hide the container for it when it's
     * not present.
     *
     * @private
     */
    _slotsChanged() {
        const icons = this.shadowRoot.querySelector("slot[name=icon]");
        if (icons.assignedElements().length > 0) {
            this._hasGraphic = true;
            return;
        }
        this._hasGraphic = false;
    }

    render() {
        const classes = {
            "call-to-action": true,
            graphic: this._hasGraphic,
            fixed: this.width === "full",
            page: this.width === "page",
        };
        return html`
            <div class=${classMap(classes)}>
                <div class="call-to-action-icon">
                    <slot name="icon" @slotchange=${this._slotsChanged}></slot>
                </div>
                <div class="call-to-action-content">
                    <slot></slot>
                </div>
            </div>
        `;
    }
}

customElements.define("ilw-call-to-action", CallToAction);
