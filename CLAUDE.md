# Claude Code - Pravidla pro tento projekt

## Aktualizace knihoven

Při aktualizaci npm knihoven vždy:

1. Aktualizovat verzi přímo v `package.json`
2. Spustit `npm install` pro synchronizaci `node_modules` a `package-lock.json`

Nepoužívat pouze `npm update`, protože ten neaktualizuje verzi v `package.json`.
