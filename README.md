# ilw-call-to-action

Links: **[ilw-call-to-action in Builder](https://builder3.toolkit.illinois.edu/component/ilw-call-to-action/index.html)** | 
[Illinois Web Theme](https://webtheme.illinois.edu/) | 
[Toolkit Development](https://github.com/web-illinois/toolkit-management)

## Overview

The call to action component is used to prompt visitors to perform an action or a few related actions, such as subscribing to a newsletter or beginning an application.

It can contain a link or group of links and may include an icon. It uses a background that contrasts with content around it to draw attention and add visual separation.

By default, the call to action is shown with a gray background and start-aligned
text. There are a few attributes to control the component:

- The left side can have an icon using `slot="icon"`, which will move to be above
  the heading in smaller screen sizes.
- Color themes for `white`, `blue`, `blue-gradient`, `orange` and `orange-gradient`. For example, `theme="blue"`.
- Text content can be centered using `align="center"`. With large screen sizes,
  the icon slot will remain on the left, and the text center aligns in its 
  container.

## Code Examples

```html
<ilw-call-to-action>
    <img src="https://cdn.brand.illinois.edu/icons/solid/white/comment.svg" alt="" slot="icon">
    <h3>Training Opportunities</h3>
    <p>Need more in-depth guidance on building Illinois websites? Check out these resources.</p>
    <ul class="ilw-buttons">
        <li><a href="#">Brand training resources</a></li>
        <li><a href="#">Web components guides</a></li>
    </ul>
</ilw-call-to-action>
```

## Accessibility Notes

- Make sure to use the **correct heading level** in relation to the call to
  action's position in the page.
- The **icon** should always be decorative, and as such should have an empty
  `alt=""` attribute. For inline `svg`, use `aria-hidden="true"`.
- **Centered text** can be harder to read, so avoid using longer text when
  center aligning.
- Make sure links and buttons are descriptive.

## Upgrade Process

When upgrading from the v2 toolkit component, the following changes are needed:

- Rename all `il-call-to-action` to `ilw-call-to-action`.
- Replace uses of the theme classes with an attribute:
  - `class="il-theme-gray"` -> `theme="gray"`
  - `class="il-theme-blue"` -> `theme="blue"`
  - `class="il-theme-white"` -> `theme="white"`
  - `class="il-theme-blue-gradient"` -> `theme="blue-gradient"`
- Replace uses of the alignment classes with an attribute:
  - `class="il-align-left"` -> `align="left"`
  - `class="il-align-center"` -> `align="center"`
