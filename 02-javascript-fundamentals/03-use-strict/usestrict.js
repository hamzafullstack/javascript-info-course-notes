// The modern mode: "use strict"
// Enables stricter, safer JavaScript starting from ES5.
// Helps catch silent errors and enforce better rules.

// Usage: must be the very first statement in a script or function
'use strict'; // whole script runs in strict mode
alert('some code');

// WRONG placement example: ignored if not at the very top
alert('some code');
"use strict"; // ignored, strict mode NOT enabled here

// Once enabled, strict mode cannot be turned off

// Developer consoles don't default to strict mode
// To force strict mode in snippets, wrap in an IIFE:
(function () {
  'use strict';
  console.log('hello world');
})();

// In modern JS, classes and modules use strict mode automatically
// → no need to add the directive manually inside them
