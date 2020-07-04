# SquirrelChatUi
![Available on npm](https://img.shields.io/npm/v/@schoolsquirrel/squirrel-chat-ui)
[![Release](https://github.com/SchoolSquirrel/SquirrelChatUI/workflows/Release/badge.svg)](https://github.com/SchoolSquirrel/SquirrelChatUI/actions)
[![Lint](https://github.com/SchoolSquirrel/SquirrelChatUI/workflows/Lint/badge.svg)](https://github.com/SchoolSquirrel/SquirrelChatUI/actions)
[![Deploy Demo](https://github.com/SchoolSquirrel/SquirrelChatUI/workflows/Deploy%20Demo/badge.svg)](https://github.com/SchoolSquirrel/SquirrelChatUI/actions)
[![License](https://img.shields.io/badge/License-MIT-blue)](./LICENSE.md)
[![GitHub last commit](https://img.shields.io/github/last-commit/SchoolSquirrel/SquirrelChatUI?color=brightgreen)](https://github.com/SchoolSquirrel/SquirrelChatUI/commits)
[![Maintenance](https://img.shields.io/maintenance/yes/2020)](https://github.com/SchoolSquirrel/SquirrelChatUI/commits)

## Overview
Todo (screenshots, description, feature list)

## Usage
ToDo (code example, installation instructions)

## Development
1. Open `projects/demo/src/app/app.module.ts` and change the `import` line of the library from `import { SquirrelChatUiModule } from "@schoolsquirrel/squirrel-chat-ui";` to `import { SquirrelChatUiModule } from "../../../squirrel-chat-ui/src/public-api";`. **NEVER COMMIT THIS CHANGE!** The demo would still work, but if someone copies the demo code, it would not work as users would install it via npm and they would not have the library source code.
2. Run `npm start`

### How we should actually do it
> For "professional" Angular library development, you would run the `ng build --watch` comand, which watches the files and always compiles the the lib into the `dist` folder. Then, you'd tell TypeScript in the `tsconfig.json` to resolve the libary as a local directory, like so:
```json
"paths": {
  "@schoolsquirrel/squirrel-chat-ui": [
    "dist/@schoolsquirrel/squirrel-chat-ui"
  ]
}
```
> _However_, this didn't work for me, I always got a bunch of errors, because the build was half done but the `ng serve` command would already try to rebuild. But that's how you're supposed to do it.