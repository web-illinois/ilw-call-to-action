import { LitElement, html } from 'lit';
import styles from './ilw-call-to-action.styles';
import './ilw-call-to-action.css';

class CallToAction extends LitElement {

    static get properties() {
        return {
            theme: { type: String, attribute: true }
        };
    }

    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.theme = '';
    }

    render() {
        return html`
      <div>
          <slot></slot>
      </div>
    `;
    }
}

customElements.define('ilw-call-to-action', CallToAction);