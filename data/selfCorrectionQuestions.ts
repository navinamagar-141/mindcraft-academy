export type PracticeQuestion = {
  question: string;
  options: [string, string, string, string];
  answer: number;
  explanation: string;
  hint: string;
};

export const practiceQuestions: [PracticeQuestion[], PracticeQuestion[], PracticeQuestion[]] = [
    [
      {
        question: "Which HTML element is best for the main content of a page?",
        options: ["<main>", "<span>", "<footer>", "<small>"],
        answer: 0,
        explanation: "The main element identifies the page content that is unique to that page.",
        hint: "Choose the semantic element intended for the page’s central content.",
      },
      {
        question: "Which CSS property changes the space inside an element’s border?",
        options: ["margin", "padding", "outline", "display"],
        answer: 1,
        explanation: "Padding adds space between an element’s content and its border.",
        hint: "Think about the space inside the element, not around it.",
      },
      {
        question: "What does a JavaScript const declaration prevent?",
        options: ["Changing the binding to a new value", "Reading the value", "Using the value in a function", "Storing an object"],
        answer: 0,
        explanation: "A const binding cannot be reassigned, although an object stored in it can still be changed.",
        hint: "Consider whether const protects the variable binding or every value inside it.",
      },
      {
        question: "In Git, which command records staged changes in a new commit?",
        options: ["git status", "git log", "git commit", "git diff"],
        answer: 2,
        explanation: "git commit creates a repository snapshot from the changes that are staged.",
        hint: "Pick the command that saves a snapshot, rather than showing information.",
      },
    ],
    [
      {
        question: "Which change fixes this JavaScript code so it can run: if (isReady) { console.log(\"Ready\");",
        options: ["Add a closing brace after the console log", "Replace if with for", "Put a comma after isReady", "Remove the opening brace"],
        answer: 0,
        explanation: "The closing brace marks the end of the block that runs when the condition is true.",
        hint: "Check that every opening curly brace has a matching closing brace.",
      },
      {
        question: "A React list renders with a warning about missing keys. What information is missing?",
        options: ["A stable key for each list item", "A different font for each item", "A click handler on the list", "A CSS file for every item"],
        answer: 0,
        explanation: "React uses a stable key to match list items between renders.",
        hint: "The warning is about how React identifies each item when the list changes.",
      },
      {
        question: "A Python file reports an IndentationError after an if statement. What should you inspect first?",
        options: ["Whether the next line is consistently indented", "Whether the file has a CSS import", "Whether the variable is uppercase", "Whether the browser cache is clear"],
        answer: 0,
        explanation: "Python uses consistent indentation to define the body of an if statement.",
        hint: "Look at the whitespace that marks the block under the condition.",
      },
      {
        question: "Why can putting untrusted text into innerHTML be unsafe?",
        options: ["It can make the browser interpret injected markup or script", "It automatically encrypts the text", "It prevents the page from loading CSS", "It makes every image load twice"],
        answer: 0,
        explanation: "The browser parses innerHTML as markup, so untrusted input can introduce executable content.",
        hint: "Ask whether the browser treats the supplied value as plain text or as HTML.",
      },
    ],
    [
      {
        question: "A button label feels cramped inside its border. Which CSS change adds room around the label without increasing the outside gap?",
        options: ["Add padding to the button", "Add margin to the button", "Set the button to display: none", "Change its text-align"],
        answer: 0,
        explanation: "Padding creates space between the button label and its border without adding an outside margin.",
        hint: "Choose the property that controls space between content and its border.",
      },
      {
        question: "A React list changes order and shows the wrong item state. Which fix is best?",
        options: ["Use a stable unique item ID as each key", "Use the array position as every key", "Remove keys from the list", "Give every item the same key"],
        answer: 0,
        explanation: "A stable unique ID lets React keep each item’s identity when the order changes.",
        hint: "The key should stay attached to the same item even when the list is rearranged.",
      },
      {
        question: "A page inserts a visitor’s comment into the DOM. Which option reduces script injection risk?",
        options: ["Render the value as text content", "Add the value directly to innerHTML", "Disable all browser updates", "Hide the comment with CSS"],
        answer: 0,
        explanation: "Text rendering displays the comment as text instead of asking the browser to parse it as markup.",
        hint: "Choose the approach that does not interpret the visitor’s input as HTML.",
      },
      {
        question: "You want to keep a local feature branch after integrating its changes into main. What should you do?",
        options: ["Merge the branch and keep it", "Delete the whole repository", "Run git status until it disappears", "Rename every commit"],
        answer: 0,
        explanation: "Merging brings the branch changes into main while leaving the source branch available.",
        hint: "Look for the Git action that integrates changes without removing the branch.",
      },
    ],
];
