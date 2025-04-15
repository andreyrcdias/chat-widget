'use client';
import { RasaLinkButton as RasaLinkButtonElement, defineCustomElement as defineRasaLinkButton } from "@rasahq/chat-widget-ui/dist/components/rasa-link-button.js";
import { createComponent } from '@stencil/react-output-target/runtime';
import React from 'react';
const RasaLinkButton = createComponent({
    tagName: 'rasa-link-button',
    elementClass: RasaLinkButtonElement,
    react: React,
    events: {},
    defineCustomElement: defineRasaLinkButton
});
export default RasaLinkButton;
//# sourceMappingURL=RasaLinkButton.js.map