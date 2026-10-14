# Bootstrap Albums Challenge

This is a customized copy of the Album template from the official Bootstrap 5.3.3 examples download, as specified in the course screenshot.

## What was completed

1. Reviewed the official [Bootstrap Album example](https://getbootstrap.com/docs/5.3/examples/album/).
2. Created a new `index.html` from the 5.3.3 Album template.
3. Kept the original album layout, nine-card Bootstrap grid, navigation collapse, and light/dark theme controls.
4. Replaced all nine placeholder thumbnails and generic paragraphs with original renovation SVG illustrations and distinct descriptions.

The required browser execution step remains pending on the student's computer. The cloud browser blocks local `file:` URLs, so no successful browser-rendering check is claimed.

## Open it on Windows

1. On the repository page, choose **Code → Download ZIP**.
2. Extract the ZIP.
3. Open `Bootstrap-Albums-Challenge/index.html` in Chrome or Edge.
4. Keep the `css`, `js`, and `images` folders beside the HTML file.

Bootstrap, scripts, styles, and images are included locally, so the album works without downloading dependencies at runtime.

## Customized content

The nine cards cover a kitchen, basement, bathroom, porch, flooring, paint palette, lighting, storage, and garden patio. These are concept illustrations, not claims of completed client projects.

**View** opens each SVG image. **Details** opens a Bootstrap modal with the selected image and description. The navigation menu and theme switcher are preserved from the template.

## Files

- `index.html`: customized Album template.
- `template/album-original.html`: unchanged original from the downloaded examples archive, retained for comparison. Its original relative paths are not intended to run in this folder.
- `images/*.svg`: nine original illustrations created for this exercise.
- `css/bootstrap.min.css` and `js/bootstrap.bundle.min.js`: official Bootstrap 5.3.3 assets.
- `css/style.css`: small visual customizations.
- `js/album.js`: fills the shared details modal using the selected card.
- `js/color-modes.js`: Bootstrap's theme switcher, adapted to tolerate browsers with unavailable local storage.
- `LICENSE-bootstrap.txt`: Bootstrap's MIT license.

## Validation

Source checks cover nine unique image files, card titles and descriptions, valid local asset links, unique HTML IDs, ARIA and Bootstrap target references, valid SVG XML, Bootstrap 5.3.3 version markers, and JavaScript syntax.

Browser layout, image loading, modal interaction, and theme switching still need to be checked by opening the page.

## Template attribution

Bootstrap Album example and dependencies: the [official 5.3.3 examples archive](https://github.com/twbs/bootstrap/releases/download/v5.3.3/bootstrap-5.3.3-examples.zip), by the Bootstrap contributors.

The theme switcher retains its original copyright and [Creative Commons Attribution 3.0](https://creativecommons.org/licenses/by/3.0/) notice. Its storage helpers were adapted for this project. Bootstrap's CSS and JavaScript bundle are under the MIT license included here.

## GitHub location

https://github.com/AJKerami/HTML-AND-CSS-PROJECTS/tree/main/Bootstrap-Albums-Challenge

Uploading the folder to GitHub does not submit it to the academy portal.

