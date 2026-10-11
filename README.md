# QuickNotes

QuickNotes is a lightweight, browser-based note-taking application designed to help you quickly capture and organize your thoughts. Built with vanilla HTML, CSS, and JavaScript, it allows you to create categorized notes, search through them instantly, and ensures your data is never lost by saving everything locally in your browser.

## Features

- **Add & Categorize:** Create notes and assign them to Personal, Work, or Study categories.
- **Visual Organization:** Notes are displayed as clean cards with color-coded left borders based on their category.
- **Instant Search:** Filter your notes in real-time as you type in the search bar.
- **Data Validation:** Prevents empty notes and restricts note length to a maximum of 200 characters.
- **Local Persistence:** Notes are automatically saved to `localStorage` and survive page refreshes.
- **Responsive Design:** Fully responsive layout that adapts seamlessly to mobile screens.
- **Bulk Actions (Bonus):** Includes a "Clear All" button to wipe the board clean (with confirmation).

## How to Run Locally

1. Clone this repository or download the source code.
   ```bash
   git clone <repository-url>

2. Navigate to the project folder.
       cd quicknotes-app

3. Open the index.html file in any modern web browser (Chrome, Firefox, Safari, Edge) or use Live Server extension.


What I Learned
i) Semantic HTML & Accessibility: How to structure a document using semantic tags (<header>, <main>, <section>, <footer>) and properly link <label> elements to inputs for better accessibility.
ii) CSS Flexbox & Media Queries: How to use Flexbox to create a responsive form layout and apply @media queries to stack elements vertically on smaller screens.
iii) DOM Manipulation & Security: How to dynamically create and append elements using createElement and textContent instead of innerHTML to prevent XSS vulnerabilities when rendering user-generated text.
iv) Local Storage & State Management: How to persist data across page reloads using localStorage, JSON.stringify, and JSON.parse, and how to manage application state (adding, deleting, filtering) in JavaScript.