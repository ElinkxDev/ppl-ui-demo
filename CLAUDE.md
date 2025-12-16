# Claude Code - Pravidla pro tento projekt

## Aktualizace knihoven

Při aktualizaci npm knihoven vždy:

1. Aktualizovat verzi přímo v `package.json`
2. Spustit `npm install` pro synchronizaci `node_modules` a `package-lock.json`

Nepoužívat pouze `npm update`, protože ten neaktualizuje verzi v `package.json`.

### Windows - prevence vytváření souboru `nul`

Na Windows je `nul` rezervované jméno zařízení (podobně jako `con`, `prn`, `aux`). Při přesměrování výstupu do `nul` se
NESMÍ používat standardní syntax `> nul`, která může vytvořit soubor `nul` v repozitáři.

✅ **Správně:**

```bash
# Použít $null v PowerShell
command > $null 2>&1

# Nebo použít Out-Null
command | Out-Null

# V bash/git bash použít /dev/null
command > /dev/null 2>&1
```

❌ **Špatně:**

```bash
# ŠPATNĚ: Může vytvořit soubor "nul" v repozitáři
command > nul 2>&1
command 2>nul
```

**Důležité:** Pokud se soubor `nul` vytvoří, ihned jej smazat pomocí `rm nul` nebo `Remove-Item nul`.
