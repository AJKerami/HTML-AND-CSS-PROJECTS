# Academy Cinemas — working draft

This student project follows the features visible in the supplied Academy Cinemas tutorial recording. It is a working draft, not a claim that every academy grading requirement is complete.

## Open the website

Download the repository and open `Academy-Cinemas/index.html` in a current browser, or open this folder in Visual Studio Code and use Live Server. The HTML, CSS, JavaScript, and SVG images are local, so the page has no external font, framework, or image dependency.

## Included features

- A burgundy-and-gold cinema theme, navigation, and responsive layout.
- Movie cards for Ben-Hur, The Day the Earth Stood Still, and Vertigo, matching the titles visible in the recording's starter-image list.
- A ticket demo with movie, sample showtime, and quantity selection; validation; and a keyboard-accessible preview dialog. It does not sell or reserve tickets.
- A contact demo with required fields, email validation, and a live status message. It does not send or store messages.
- Semantic page sections, form labels, descriptive image alternatives, a skip link, visible keyboard focus, reduced-motion support, `data-movie` attributes, and a small favicon embedded as a data URL.

## Files

- `index.html` — page structure and forms.
- `css/style.css` — styling and responsive rules.
- `js/script.js` — movie selection, ticket preview, and contact validation.
- `images/*.svg` — original temporary movie title artwork.
- `movies.txt` — draft descriptions and example showtimes.

## Needed before final academy submission

1. The full Assignment or Challenge instructions and grading checklist. Only lesson pages and a short tutorial excerpt were supplied.
2. The downloadable starter files shown in the recording: `ben-hur.jpg`, `earth-stood-still.jpg`, `vertigo.jpg`, `logo.png`, `theater-curtains.jpg`, and the original `movies.txt`. Replace the original temporary SVG artwork and draft text if those files are required.
3. Confirmation of any required filenames, exact design, Bootstrap version, or additional tutorial steps. This draft uses plain HTML, CSS, and JavaScript because a framework requirement was not supplied.
4. The academy assignment submission-page URL. No academy submission has been made.

Review the source and practice explaining the HTML sections, CSS grid and breakpoints, `data-*` attributes, form validation, and JavaScript event listeners before submitting.

## Suggested checks

Open the page at desktop and mobile widths. Choose each movie, try incomplete ticket entries and quantities outside 1–10, and check the preview with valid entries. Close the preview with its button or Escape. Test the contact form with an invalid email, missing fields, spaces-only content, and valid entries. Navigate using Tab to verify the links, form labels, and focus indicators.

## Validation completed

Local checks passed for JavaScript syntax; local file and section links; unique element IDs; field labels and validation attributes; ARIA references; SVG XML; and the favicon data URL. JavaScript logic checks in a simulated DOM passed for all three movie selections, invalid-form guards, singular/plural ticket summaries, spaces-only contact entries, text-only output, and status reset.

Actual browser rendering, native form behavior, dialog focus, and mobile layout still need manual review. The browser executable was unavailable in the build environment, and its download failed, so no browser-test pass is claimed.
