# Accessibility Screen Reader Assignment

These two HTML files copy the course examples, with indentation added for readability.

- `inaccessible.html` contains the first example, including its intentional accessibility omissions.
- `accessible.html` contains the second example, including its language, image description, labels, landmarks, and ARIA labels.

The logo uses the original course URL and needs an internet connection. The Home, About, and Contact links keep the course's `#` placeholders. No additional pages or form service are included.

## Open the examples on Windows

1. Download the ZIP and select **Extract All**. The extracted folder is `Accessibility-Screen-Reader-Assignment`.
2. If you want the files in your local project, copy that folder into your `HTML-AND-CSS-PROJECTS` folder.
3. Double-click `inaccessible.html` to open it in your browser. If Windows opens an editor, right-click the file, select **Open with**, and choose Microsoft Edge or Google Chrome.
4. Press **Windows + Ctrl + Enter** to turn on Narrator. Return to the webpage if Narrator Home opens.
5. Use **Caps Lock + Ctrl + R** to read from the beginning. Caps Lock is a default Narrator key; Insert can also be used.
6. Press **Tab** to visit the button, form fields, Submit control, and links. Listen to the names Narrator announces. Press **Enter** on Click Me to hear the alert, then dismiss it.
7. Open `accessible.html` and repeat the same reading and keyboard navigation.
8. Press **Windows + Ctrl + Enter** to turn Narrator off when finished.

## Compare what you hear

| Item | First example | Second example |
| --- | --- | --- |
| Language | No page language declared | English declared with `lang="en"` |
| Button | Visible text supplies its name | ARIA supplies the name “Click this button to learn more” |
| Logo | No authored alternative text | Authored description in `alt` |
| Name and Email | Adjacent text without associated labels | Each label is associated with its input using `for` and `id` |
| Page regions | No header, main, or navigation landmarks | Semantic header, main, and navigation regions |
| Links | Visible text supplies their names | More descriptive names supplied with ARIA |

Exact announcements can vary with browser and Narrator settings. Record what you actually hear; the screen-reader listening step must be completed on your computer.

## Microsoft instructions

- [Narrator keyboard commands](https://support.microsoft.com/en-us/accessibility/windows/narrator/appendix-b-narrator-keyboard-commands-and-touch-gestures)
- [Reading text with Narrator](https://support.microsoft.com/en-us/accessibility/windows/narrator/chapter-4-reading-text)

## Listening notes

After testing both pages, write your observations here or in your course notes:

- Button announcement:
- Logo announcement:
- Name and Email field announcements:
- Navigation and page-region announcements:

Do not mark the listening step complete until you have used Narrator on both pages.
