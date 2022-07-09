# Pipo
Convert any text to [Pipo case](https://twitter.com/pipogorosito10/status/1523492594017177602?s=20&t=Mf34y9ojUpe-FanXcJjTPA) !!!!!

## Usage
### Basic example
```typescript
import pipo from "pipo-case";

const text = "que impotencia loco, me enferma las injusticias";

pipo(text); // Que impotencia loco,me enferma las injusticias !!!!!
```
### Options
- `intensity`: amount of anger that Pipo feels (default 5, min 0, max 10)

```typescript
pipo(text, { intensity: 7 });
```
