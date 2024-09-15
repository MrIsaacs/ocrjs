# Changelog

## v1.0.1

### ⚠️ Breaking Changes

This upgrade introduces breaking changes due to framework and API updates to leverage the latest Nuxt3 features. The project structure now includes `layouts`, `pages`, and `public` directories specific to Nuxt3. SCSS and usebootstrap support has been integrated for enhanced styling capabilities, and Pinia is now used for more efficient state management. The `dist` folder has been removed as its generation will be managed by the CI/CD pipeline.

Additionally, TypeScript support has been introduced with updated configuration to improve development and type safety.

### 🚀 Enhancements

- **nuxt:** Migrate project to Nuxt3 framework ([2d2633e](https://github.com/MrIsaacs/ocrjs/commit/2d2633e))
- **nuxt:** Add `layouts`, `pages` and `public` directories ([0364fa4](https://github.com/MrIsaacs/ocrjs/commit/0364fa4))
- **scss:** Integrate SCSS into project ([246afda](https://github.com/MrIsaacs/ocrjs/commit/246afda))
- **store:** Add Pinia for state management ([743be8d](https://github.com/MrIsaacs/ocrjs/commit/743be8d))
- **frontend:** Add usebootstrap for template development ([0ceddcd](https://github.com/MrIsaacs/ocrjs/commit/0ceddcd))

### 🩹 Fixes

- **component:** Rename `PictureHandler` to `ImageHandler` ([ae23d8c](https://github.com/MrIsaacs/ocrjs/commit/ae23d8c))
- **template:** Adjust components and correct missing parts ([8ea54ce](https://github.com/MrIsaacs/ocrjs/commit/8ea54ce))

### 💅 Refactors

- Remove and reorganize files and folders ([a48fe8c](https://github.com/MrIsaacs/ocrjs/commit/a48fe8c))

### 📖 Documentation

- Introduce changelogs to enhance project documentation ([8a27f03](https://github.com/MrIsaacs/ocrjs/commit/a48fe8c))

### 🏡 Chore

- Update base URL configuration ([ed18976](https://github.com/MrIsaacs/ocrjs/commit/ed18976))
- **build:** Remove `dist` folder for CI deployment ([9b1cf18](https://github.com/MrIsaacs/ocrjs/commit/9b1cf18))
- **deps:** Update dependecies for Nuxt3 changes ([0ceddcd](https://github.com/MrIsaacs/ocrjs/commit/0ceddcd))


### ❤️ Contributors

- Ivan Ilic ([@MrIsaacs](http://github.com/MrIsaacs))

## v0.3.1

### 🚀 Enhancements

- **PictureHandler:** Add an upload file button ([ce05f43](https://github.com/MrIsaacs/ocrjs/commit/ce05f43))
- **Modal:** Add component modal ([ea5df54](https://github.com/MrIsaacs/ocrjs/commit/ea5df54))
- **Modal:** Add Modal to view and scan images ([a24e7da](https://github.com/MrIsaacs/ocrjs/commit/a24e7da))

### 🩹 Fixes

- **ocrjs:** Change props to data ([0154358](https://github.com/MrIsaacs/ocrjs/commit/0154358))
- **mobile-view:** No scalable view on mobile ([f6ebe86](https://github.com/MrIsaacs/ocrjs/commit/f6ebe86))
- **PictureHandler:** Remove heading from component ([85f12e5](https://github.com/MrIsaacs/ocrjs/commit/85f12e5))
- **PictureHandler:** Change props to data ([18fd35a](https://github.com/MrIsaacs/ocrjs/commit/18fd35a))
- **lang:** Remove not used language package ([a1e88e0](https://github.com/MrIsaacs/ocrjs/commit/a1e88e0))
- **Modal:** Seperate save and exit button ([a22b3bb](https://github.com/MrIsaacs/ocrjs/commit/a22b3bb))
- **Modal:** Allow save if scanned text exists ([9a08620](https://github.com/MrIsaacs/ocrjs/commit/9a08620))

### 💅 Refactors

- Update code according to rules ([5fa6016](https://github.com/MrIsaacs/ocrjs/commit/5fa6016))
- Rename file- and component-variables ([ade02cd](https://github.com/MrIsaacs/ocrjs/commit/ade02cd))

### 🏡 Chore

- **deps:** Update version and dependencies ([f8052f6](https://github.com/MrIsaacs/ocrjs/commit/f8052f6), [a7a8652](https://github.com/MrIsaacs/ocrjs/commit/a7a8652))
- **eslint:** Customize coding rules ([06a0e1c](https://github.com/MrIsaacs/ocrjs/commit/06a0e1c))
- **page:** Change name and title in page ([46646ae](https://github.com/MrIsaacs/ocrjs/commit/46646ae))

### ❤️ Contributors

- Ivan Ilic ([@MrIsaacs](http://github.com/MrIsaacs))

