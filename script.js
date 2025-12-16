"use strict";

//TODO  🟦 Module 7 - DOM Manipulation: Lesson 06. Traversing The DOM - Elements

//? In this lesson you learn how to move around the DOM starting from a known element:
//  • Up to its parent.
//  • Down to its children.
//  • Sideways to its siblings.
//  • Up the tree to find the nearest ancestor matching a selector.
//  You will use this heavily in any non-trivial UI.
//  We will focus on element-based traversal (ignoring text nodes, whitespace, etc.).

//TODO  Step 1. What “Traversing the DOM” Means

//? So far, you mainly:
//  • Selected elements from document (e.g. document.querySelector('.task')).
//  • Applied changes directly to those selected elements.

//? DOM traversal is about moving relative to an element:
//  • “From this button, get its parent <section>”
//  • “From this card, get the grid it belongs to”
//  • “From this list item, get the whole list and then all list items”

//* This allows more flexible and reusable code, because you do not always need to know global selectors. You can start from a specific element (for example, the one that triggered an event) and traverse from there.


//TODO  Step 2. Core Element Traversal Properties

//  We will use your existing HTML structure mentally as an example (nav list, tasks, cards grid, buttons).

//? 2.1 parentElement
//  Move up one level to the parent element.

const featuredCard = document.querySelector('.card.featured');
const grid = featuredCard.parentElement;                            //  <section id="section5" class="grid five">

//  • Returns the parent element, or null if there is none.
//  • Ignores non-element nodes.

//? 2.2 children
//  Move down to all direct child elements.

const grid = document.querySelector('.gird');
const cards = grid.children;                                        //  HTMLCollection of .card elements

//  • children returns an HTMLCollection of the element’s child elements (no text nodes).
//  • You can access them by index: cards[0], cards[1], etc.

//? 2.3 firstElementChild / lastElementChild

//  Quick access to first and last child elements:

const firstCard = grid.firstElementChild;
const lastCard = grid.lastElementChild;

//  Very useful when structure is consistent (e.g. first card = "main" card).

//? 2.4 nextElementSibling / previousElementSibling

//  Move horizontally between elements at the same level.

const firstTask = document.querySelector('.tasks .task');
const secondTask = firstTask.nextElementSibling;
const zeroTask = secondTask.previousElementSibling;

//  You can chain these if needed, but do it carefully:

const thirdTask = firstTask.nextElementSibling?.nextElementSibling;

//* (?. optional chaining guards against null);

//TODO  Step 3. closest(selector) – Traversing Up by Selector

//  "closest" is extremely powerful when you have a deeply nested element and you want to find the nearest ancestor that matches a selector.

const clickedEl = document.querySelector('.card.featured');

const section = clickedEl.closest('section');                           // nearest ancestor <section>
const grid    = clickedEl.closest('.grid');                             // nearest ancestor with class="grid"
const main    = clickedEl.closest('#main');                             // nearest ancestor with id="main"

//  • It starts from the element itself and goes upwards.
//  • Returns the first matching ancestor (or the element itself), or null if none match.

//* You will use "closest" a lot later with event delegation (e.g. “Was the click inside a .card?” “Which .task was clicked?”).


//TODO  Step 4. Working with Collections from Traversal

//  Remember:
//  • children returns an HTMLCollection.
//  • Sibling traversals return single elements.
//  You often combine traversal + selection:

const featuredCard = document.querySelector('.card.featured');

//  Get the grid
const grid = featuredCard.closest('.grid');

//  Get all cards inside the same grid
const cards = grid.children;                                            //  HTMLCollection

//  Convert to array and do something
const cardArray = Array.from(cards);
cardArray.forEach((card, index) => {
    card.dataset.index = index;
});

//* This pattern is at the heart of context-aware scripts: start from one element, then find related elements around it.


//TODO  Step 5. Guided Practice – Using Your Current HTML

//  Assume your current HTML (the one you just showed: nav list, tasks, grid with cards, buttons) and a single app.js.
//  Please implement the following steps in app.js. You can keep your previous Lesson 05 code and add these beneath it, or comment some parts out if the console feels noisy.



































