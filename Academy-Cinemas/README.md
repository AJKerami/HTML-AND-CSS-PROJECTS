# Academy Cinemas — working draft

This project includes the features visible in the supplied short tutorial recording and the Bootstrap footer required by the GitHub Submission Assignment. Matching every part of the full 12-part Bootstrap series remains to be verified.

## Assignment checklist

| Requirement | Status |
| --- | --- |
| Push Academy-Cinemas to HTML-AND-CSS-PROJECTS | Folder uploaded. |
| Add a footer using Bootstrap | Implemented directly in index.html. |
| Include all code from the 12-part Bootstrap series | Pending comparison with the complete series. |
| Submit the repository URL at the academy | Pending; the submission-page URL and an accessible session are needed. |

## Open the website

Download the repository and open `Academy-Cinemas/index.html` in a browser, or use Visual Studio Code and Live Server. All artwork, scripts, and stylesheets are local, including Bootstrap's grid, so the page can render offline. External social links require internet access.

## Included features

- Burgundy-and-gold theme, navigation, and responsive layout.
- Movie cards for Ben-Hur, The Day the Earth Stood Still, and Vertigo.
- Ticket selection with example showtimes, quantity validation, and a preview dialog. No tickets are sold or reserved.
- Contact form validation and a live status message. No messages are sent or stored.
- Semantic sections, form labels, image descriptions, a skip link, keyboard focus styles, reduced-motion support, data attributes, and a favicon data URL.
- Bootstrap footer with contact information, social links, and copyright.

The footer uses `.container`, `.row.g-4`, and three `.col-12.col-md-4` sections. They stack below 768 pixels and form three columns from 768 pixels upward. Contact details are fictional, as the assignment permits; social links lead to the platforms' home pages.

## Files

- `index.html`: page, forms, and footer.
- `css/style.css`: custom cinema styles.
- `css/bootstrap-grid.min.css`: official Bootstrap 5.2.3 grid.
- `css/bootstrap-LICENSE.txt`: Bootstrap's MIT license.
- `js/script.js`: movie selection, ticket preview, and contact validation.
- `images/*.svg`: original temporary movie artwork.
- `movies.txt`: draft descriptions and sample showtimes.

## Remaining course materials

Provide the remaining tutorial instructions or a code checklist and the course downloads: `ben-hur.jpg`, `earth-stood-still.jpg`, `vertigo.jpg`, `logo.png`, `theater-curtains.jpg`, and the original `movies.txt`. Replace temporary assets and draft content if required by the full tutorial. The movie, ticket, and contact sections currently use custom HTML, CSS, and JavaScript; the footer now uses Bootstrap's grid.

## Validation

Source checks verify local stylesheet links, the Bootstrap footer grid, its three sections, unique IDs, linked headings, section links, contact links, and copyright text. Earlier JavaScript syntax and simulated logic checks passed for the ticket and contact demos.

Actual browser rendering, native form behavior, dialog focus, and mobile layout remain unverified because the browser executable was unavailable and its download failed.

## References and submission

[Bootstrap 5.2 grid documentation](https://getbootstrap.com/docs/5.2/layout/grid/)

The supplied submission page asks for the repository URL:

https://github.com/AJKerami/HTML-AND-CSS-PROJECTS

Uploading code to GitHub does not submit the assignment to the academy.
