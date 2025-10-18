# McDonald's Speedee Font

For the authentic McDonald's experience, you'll need to add the Speedee font files here:

- `speedee-regular.woff2`
- `speedee-bold.woff2`

Since McDonald's Speedee font is proprietary, you have a few options:

## Option 1: Use System Fonts (Current Setup)
The layout.tsx is configured to fallback to Arial/Helvetica, which closely matches McDonald's style.

## Option 2: Purchase/License Speedee Font
If you have legal access to the Speedee font files, place them in this directory.

## Option 3: Use a Similar Free Alternative
Consider these free alternatives that resemble McDonald's style:
- **Montserrat Bold** (Google Fonts)
- **Raleway Bold** (Google Fonts)
- **Roboto Bold** (Google Fonts)

To use Google Fonts instead, update `src/app/layout.tsx`:

```typescript
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
  variable: '--font-speedee',
  display: 'swap',
});
```

The current setup will use Arial/Helvetica which gives a clean, McDonald's-like appearance.
