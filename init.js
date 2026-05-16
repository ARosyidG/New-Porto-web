const fs = require("fs");
const directories = [
  "components",
  "layouts",
  "app/api",
  "public",
  "styles",
  "services",
  "utils",
  "hooks",
  "tests",
];

// Create directories if they don't already exist
directories.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created: ${dir}`);
  }
});

// Create essential boilerplate files
const boilerplateFiles = {
  "./styles/global.css": `body { margin: 0; font-family: sans-serif; }`,
  "./app/api/hello.ts": `export async function GET(req) {
  return Response.json({ message: "Hello from Next.js API!" });
}`,
  "./utils/helpers.ts": `// Helper functions for your portfolio
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};
`,
  "./hooks/useLocalStorage.ts": `import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(initialValue);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const item = typeof window !== 'undefined' ? window.localStorage?.getItem(key) : null;
    if (item) {
      setStoredValue(JSON.parse(item));
    }
    setIsLoaded(true);
  }, [key]);

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage?.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue, isLoaded] as const;
}
`,
};

Object.keys(boilerplateFiles).forEach((filePath) => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, boilerplateFiles[filePath]);
    console.log(`Created: ${filePath}`);
  }
});
