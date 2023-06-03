# How to use '@' path alias in CRA

1. Install the <a href="https://github.com/dilanx/craco">craco</a> dependency:
   ```bash
   npm i -D @craco/craco
   ```
2. create 'craco.config.js' and past the following:

   ```javascript
   /* craco.config.js */
   const path = require(`path`);

   module.exports = {
     webpack: {
       alias: {
         "@": path.resolve(__dirname, "src/"),
       },
     },
   };
   ```

3. Use craco in package.json:
   ```json
   "scripts": {
   - "start": "npm start",
   - "build": "npm build",
   + "start": "craco start",
   + "build": "craco build",
     "eject": "react-scripts eject"
   },
   ```
4. You can now use the `@` path alias the same way its used in `shadcn/ui`:
   ```typescript
   import { cn } from "@/lib/utils";
   ```
