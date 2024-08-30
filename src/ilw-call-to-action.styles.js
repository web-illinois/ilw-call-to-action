import { css } from 'lit';

export default css`
:host {
    display: block;
}
.call-to-action {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: var(--ilw-call-to-action--background);
    padding-top: var(--ilw-call-to-action--padding-top);
    padding-right: var(--ilw-call-to-action--padding-right);
    padding-bottom: var(--ilw-call-to-action--padding-bottom);
    padding-left: var(--ilw-call-to-action--padding-left);

    column-gap: var(--ilw-call-to-action--icon-margin);
    row-gap: var(--ilw-call-to-action--icon-margin);
}
    
.call-to-action.fixed {
    left:50%;
    margin-left:-50vw;
    margin-right:-50vw;
    padding-left:0;
    padding-right:0;
    position:relative;
    right:50%;
    width: 100vw;
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