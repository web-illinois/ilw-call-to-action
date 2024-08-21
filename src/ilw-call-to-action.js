import { LitElement, html } from 'lit';
import styles from './ilw-call-to-action.styles';
import './ilw-call-to-action.css';
import { classMap } from "lit/directives/class-map.js";

class CallToAction extends LitElement {

    static get properties() {
        return {
            theme: {},
            align: {},
            _hasGraphic: { state: true, type: Boolean },
        };
    }

    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.theme = 'gray';
        this.align = 'left';
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

customElements.define('ilw-call-to-action', CallToAction);