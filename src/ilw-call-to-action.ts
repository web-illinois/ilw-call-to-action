import { html, LitElement, unsafeCSS } from "lit";
// @ts-ignore
import styles from "./ilw-call-to-action.styles.css?inline";
import "./ilw-call-to-action.css";
import { classMap } from "lit/directives/class-map.js";

import { customElement, property, state } from "lit/decorators.js";

@customElement("ilw-call-to-action")
export default class CallToAction extends LitElement {
    @property()
    theme: string = "";

    @property()
    align: string = "";

    @property()
    width: string = "";

    @state()
    _hasGraphic: boolean | undefined = undefined;

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
        const icons = this.shadowRoot?.querySelector<HTMLSlotElement>("slot[name=icon]");
        if (icons?.assignedElements()?.length) {
            this._hasGraphic = true;
            return;
        }
        this._hasGraphic = false;
    }

    render() {
        const classes = {
            "call-to-action": true,
            graphic: !!this._hasGraphic,
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

declare global {
    interface HTMLElementTagNameMap {
        "ilw-call-to-action": CallToAction;
    }
}
