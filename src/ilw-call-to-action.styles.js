import { css } from 'lit';

export default css`
:host {
    display: block;
}
.call-to-action {
    display: flex;
    flex-direction: row;
    justify-content: center;

    column-gap: var(--ilw-call-to-action--icon-margin);
    row-gap: var(--ilw-call-to-action--icon-margin);
}


@container (width <= 650px) {
    .call-to-action {
        flex-direction: column;
        align-items: center;
    }
}

.call-to-action-icon {
    display: none;
    color: var(--ilw-call-to-action--icon-color);
    max-width: var(--ilw-call-to-action--icon-width);
    max-height: var(--ilw-call-to-action--icon-height);
    flex: 1;

    ::slotted(*) {
        display: block;
        min-width: var(--ilw-call-to-action--icon-width);
    }
}

.graphic .call-to-action-icon {
    display: block;
}

.call-to-action-content {
    max-width: var(--ilw-call-to-action--content-max-width);
    flex: 1;
}
`;