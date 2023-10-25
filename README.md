# Shadcn UI Create React App

Example Created By [Ahmad Sandid](https://github.com/ahmad1702). Components by [Shadcn](https://ui.shadcn.com/). Uses [Create-React-App](https://create-react-app.dev/).

<img src="https://i.ibb.co/KGNJ2g8/Screenshot-2023-10-24-at-9-26-44-PM.png" alt="Starter Image"/>

## How to run

1. Install Dependencies
   ```bash
   npm i
   ```
2. Run Project

   ```bash
   npm run start
   ```

   or

   ```bash
   npm run dev
   ```

## How I did it (if you wanted to do it from scratch)

1. Initialize the _create-react-app_ project with typescript: `npx create-react-app shadcn-ui-cra-example --template typescript`

   **_Disclaimer:_** The Shadcn/ui cli initialization command now supports create-react-app. It's already set up and configured. If you are to run it again, make sure to say no when asked "Are you using React Server Components?"

2. Install the following dependencies:
   ```
   	npm install tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react
   ```
3. Create a `tailwind.config.js` file and paste the following:

   ```javascript
   const { fontFamily } = require("tailwindcss/defaultTheme");

   /** @type {import('tailwindcss').Config} */
   module.exports = {
     darkMode: ["class"],
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       container: {
         center: true,
         padding: "2rem",
         screens: {
           "2xl": "1400px",
         },
       },
       extend: {
         colors: {
           border: "hsl(var(--border))",
           input: "hsl(var(--input))",
           ring: "hsl(var(--ring))",
           background: "hsl(var(--background))",
           foreground: "hsl(var(--foreground))",
           primary: {
             DEFAULT: "hsl(var(--primary))",
             foreground: "hsl(var(--primary-foreground))",
           },
           secondary: {
             DEFAULT: "hsl(var(--secondary))",
             foreground: "hsl(var(--secondary-foreground))",
           },
           destructive: {
             DEFAULT: "hsl(var(--destructive))",
             foreground: "hsl(var(--destructive-foreground))",
           },
           muted: {
             DEFAULT: "hsl(var(--muted))",
             foreground: "hsl(var(--muted-foreground))",
           },
           accent: {
             DEFAULT: "hsl(var(--accent))",
             foreground: "hsl(var(--accent-foreground))",
           },
           popover: {
             DEFAULT: "hsl(var(--popover))",
             foreground: "hsl(var(--popover-foreground))",
           },
           card: {
             DEFAULT: "hsl(var(--card))",
             foreground: "hsl(var(--card-foreground))",
           },
         },
         borderRadius: {
           lg: "var(--radius)",
           md: "calc(var(--radius) - 2px)",
           sm: "calc(var(--radius) - 4px)",
         },
         fontFamily: {
           sans: ["var(--font-sans)", ...fontFamily.sans],
         },
         keyframes: {
           "accordion-down": {
             from: { height: 0 },
             to: { height: "var(--radix-accordion-content-height)" },
           },
           "accordion-up": {
             from: { height: "var(--radix-accordion-content-height)" },
             to: { height: 0 },
           },
         },
         animation: {
           "accordion-down": "accordion-down 0.2s ease-out",
           "accordion-up": "accordion-up 0.2s ease-out",
         },
       },
     },
     plugins: [require("tailwindcss-animate")],
   };
   ```

4. Add the following to `src/styles/index.css`:

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;

   @layer base {
     :root {
       --background: 0 0% 100%;
       --foreground: 222.2 47.4% 11.2%;

       --muted: 210 40% 96.1%;
       --muted-foreground: 215.4 16.3% 46.9%;

       --popover: 0 0% 100%;
       --popover-foreground: 222.2 47.4% 11.2%;

       --card: 0 0% 100%;
       --card-foreground: 222.2 47.4% 11.2%;

       --border: 214.3 31.8% 91.4%;
       --input: 214.3 31.8% 91.4%;

       --primary: 222.2 47.4% 11.2%;
       --primary-foreground: 210 40% 98%;

       --secondary: 210 40% 96.1%;
       --secondary-foreground: 222.2 47.4% 11.2%;

       --accent: 210 40% 96.1%;
       --accent-foreground: 222.2 47.4% 11.2%;

       --destructive: 0 100% 50%;
       --destructive-foreground: 210 40% 98%;

       --ring: 215 20.2% 65.1%;

       --radius: 0.5rem;
     }

     .dark {
       --background: 224 71% 4%;
       --foreground: 213 31% 91%;

       --muted: 223 47% 11%;
       --muted-foreground: 215.4 16.3% 56.9%;

       --popover: 224 71% 4%;
       --popover-foreground: 215 20.2% 65.1%;

       --card: 224 71% 4%;
       --card-foreground: 213 31% 91%;

       --border: 216 34% 17%;
       --input: 216 34% 17%;

       --primary: 210 40% 98%;
       --primary-foreground: 222.2 47.4% 1.2%;

       --secondary: 222.2 47.4% 11.2%;
       --secondary-foreground: 210 40% 98%;

       --accent: 216 34% 17%;
       --accent-foreground: 210 40% 98%;

       --destructive: 0 63% 31%;
       --destructive-foreground: 210 40% 98%;

       --ring: 216 34% 17%;

       --radius: 0.5rem;
     }
   }

   @layer base {
     * {
       @apply border-border;
     }
     body {
       @apply bg-background text-foreground;
       font-family: sans-serif;
     }
   }
   ```

   **_NOTE:_** If you are experiencing problems with the original css provided by shadcn where the font displays weird, that could be because of the line `font-feature-settings: "rlig" 1, "calt" 1;` in his example. This was removed in our provided css and replaced with ‘font-family: serif’. You may want to add font-feature-settings though, so add it back if you want or learn more about it [here](https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings).

5. Edit your `tsconfig.json` to look like this:
   ```json
   {
     "compilerOptions": {
       "target": "es5",
       "lib": ["dom", "dom.iterable", "esnext"],
       "allowJs": true,
       "skipLibCheck": true,
       "esModuleInterop": true,
       "allowSyntheticDefaultImports": true,
       "strict": true,
       "forceConsistentCasingInFileNames": true,
       "noFallthroughCasesInSwitch": true,
       "module": "esnext",
       "moduleResolution": "node",
       "resolveJsonModule": true,
       "isolatedModules": true,
       "noEmit": true,
       "jsx": "react-jsx",
       // Add these Lines 👇
       "baseUrl": ".",
       "paths": {
         "@/*": ["./src/*"]
       }
     },
     "include": [
       "src",
       // Add TS Files 👇
       "**/*.ts",
       "**/*.tsx"
     ]
   }
   ```
6. Make a folder called `lib` and within it a file named `utils.ts`. In the end its path can be referenced with `@/lib/utils.ts`. In this file, paste the following code:

   ```typescript
   import { clsx, type ClassValue } from "clsx";
   import { twMerge } from "tailwind-merge";

   export function cn(...inputs: ClassValue[]) {
     return twMerge(clsx(inputs));
   }
   ```

7. Let’s add our first Shadcn/ui component. Run the following command: `pnpx shadcn-ui add button` and edit the path command to be `./src/components/ui`
8. Delete the `App.css` file and paste the following into your `App.tsx`:

   ```typescript
   import { useState } from "react";
   import { Button } from "./components/ui/button";
   import logo from "./logo.svg";

   function App() {
     const [count, setCount] = useState(0);
     return (
       <div className="App">
         <header className="h-screen flex flex-col items-center justify-center">
           <img
             src={logo}
             className="w-[40vmin] animate-[spin_10s_linear_infinite]"
             alt="logo"
           />
           <p>
             Edit <code>src/App.tsx</code> and save to reload.
           </p>
           <Button asChild variant="link">
             <a
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
             >
               Learn React
             </a>
           </Button>
           <Button
             variant="outline"
             onClick={() => setCount((count) => count + 1)}
           >
             Count is {count}
           </Button>
         </header>
       </div>
     );
   }

   export default App;
   ```

9. Start the app to view your project:
   ```bash
   npm run start
   ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more about Create-React-App in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
