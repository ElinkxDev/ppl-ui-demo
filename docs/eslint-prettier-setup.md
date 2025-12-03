# ESLint + Prettier + Husky Setup pro React + TypeScript + Vite projekt

## 1. Instalace závislostí

```bash
npm install -D eslint @eslint/js typescript-eslint eslint-plugin-react eslint-plugin-react-hooks prettier eslint-config-prettier husky lint-staged vite-plugin-checker
```

## 2. Konfigurace Prettier

### `.prettierrc`

```json
{
  "printWidth": 120,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": false,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "bracketSameLine": false,
  "arrowParens": "avoid",
  "proseWrap": "always"
}
```

### `.prettierignore`

```
dist
node_modules
package-lock.json
```

## 3. Konfigurace ESLint

### `eslint.config.js`

```javascript
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  prettier
);
```

## 4. Konfigurace Vite (TypeScript kontrola při vývoji)

### `vite.config.ts`

```typescript
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), checker({ typescript: true })],
  // ... zbytek konfigurace
});
```

## 5. Konfigurace VS Code

### `.vscode/settings.json`

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAllEslint": "explicit"
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
}
```

## 6. Konfigurace package.json

### Scripty

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "typecheck": "tsc --noEmit",
    "preview": "vite preview",
    "lint": "eslint .",
    "lint:fix": "eslint . --fix",
    "format": "prettier --write .",
    "format:check": "prettier --check .",
    "prepare": "husky"
  }
}
```

### lint-staged

```json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,css,md}": ["prettier --write"]
  }
}
```

## 7. Inicializace Husky

```bash
npx husky init
```

### `.husky/pre-commit`

```bash
npx lint-staged
```

## 8. První spuštění

Po dokončení konfigurace spusťte:

```bash
# Oprava ESLint chyb
npm run lint:fix

# Formátování všech souborů
npm run format

# Ověření, že build prochází
npm run build
```

## Přehled funkcí

| Funkce                 | Popis                                          |
| ---------------------- | ---------------------------------------------- |
| `npm run lint`         | Kontrola kódu ESLintem                         |
| `npm run lint:fix`     | Automatická oprava ESLint chyb                 |
| `npm run format`       | Formátování všech souborů Prettierem           |
| `npm run format:check` | Kontrola formátování (bez změn)                |
| `npm run typecheck`    | Kontrola TypeScript typů                       |
| `npm run build`        | TypeScript kontrola + produkční build          |
| `npm run dev`          | Dev server s real-time TypeScript kontrolou    |
| Pre-commit hook        | Automatický lint + format před každým commitem |
| VS Code format on save | Automatické formátování při uložení souboru    |

## Poznámky

- **eslint-plugin-tailwindcss** není zahrnut, protože zatím nepodporuje Tailwind CSS v4. Až bude dostupná kompatibilní
  verze, můžete ho přidat.
- **vite-plugin-checker** zobrazuje TypeScript chyby přímo v prohlížeči během vývoje.
- Build selže, pokud jsou v kódu typové chyby (díky `tsc --noEmit` před `vite build`).
