```markdown
# v0template

## Getting Started

After creating your project from this template, you need to install the dependencies:

```bash
pnpm install
```

This will install all the necessary packages and run the setup script to generate the `.env` file if it doesn't already exist.

### Running the Development Server

To start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Adding Code to `MainComponent`

After setting up the project, you can start adding your code to `MainComponent.tsx`. This is the main entry point for your application's UI.

```typescript
// Example of adding content to MainComponent.tsx
import { Button } from "@/components/ui/button"

export default function MainComponent() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
            <h1 className="text-4xl font-bold mb-8">Welcome to v0template</h1>
            <Button>Click me</Button>
        </main>
    )
}
```

## Using `shadcn/ui` for Components

To add components from `shadcn/ui` via v0.dev:



1. Visit [v0.dev](https://v0.dev) and choose the components you need.
2. Copy the code provided by `shadcn/ui`.
3. Paste it into your project under the `components/` directory.
4. Import and use these components in your pages or other components as needed.

### Example of adding a button if its needed by your component from v0 --- using shadcn
```bash
 npx shadcn-ui@latest add button   
```


## Building

To build your project for production:

```bash
pnpm run build
```

This will create a static export of your project in the `/{projectName}` directory and process it with `kkProcess.js`.

## Creating a GitHub Repository

To create a GitHub repository for your project:

```bash
pnpm run create-github
```

This script uses the GitHub CLI, so make sure you have it installed and authenticated.
