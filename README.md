# MIC — Mamoun International Center

website for **مركز المأمون الدولي**, showcasing its training courses, services, student work, and latest news.

## Features

- Responsive layout for desktop and mobile.
- Course catalog and individual course pages.
- About, services, student work, and contact pages.
- Homepage news section prepared to load published posts from WordPress.

## Built with

React, Vite, React Router, CSS, and Lucide icons.

## Language and appearance

Use the header controls to switch between Arabic and English, or choose Light,
Dark, or System appearance. Preferences are remembered on the current browser.
Arabic uses the existing routes; English uses `/en/` (for example `/en/courses`).
Language switching reloads the equivalent page so course and service data also
use the selected language. Theme changes apply immediately.

Translations are in `src/i18n/ar.json` and `src/i18n/en.json`; shared theme colors
are in `src/styles/variables.css`. WordPress articles remain in their original
language until translated content is connected. Run `npm test` to check translation
coverage, language paths, and preference initialization.
