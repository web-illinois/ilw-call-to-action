import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-call-to-action";

const content = html`
    <ilw-call-to-action id="one">
        <ilw-icon slot="icon" icon="faq"></ilw-icon>
        <h2>Get started today</h2>
        <p>Enroll in a class after you are admitted as a non-degree student. Enroll in a class after you are admitted as
            a
            non-degree student. Enroll in a class after you are admitted as a non-degree student.</p>
        <ul class="ilw-buttons">
            <li><a href="#">Register <span class="ilw-sr-only">for classes</span></a></li>
            <li><a href="#">Contact us</a></li>
        </ul>
    </ilw-call-to-action>
`;

test("Renders heading", async () => {
    const screen = render(content);
    const element = screen.getByText("Get started today");
    await expect.element(element).toBeVisible();
});