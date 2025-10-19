# Images Folder

This folder contains all the images used in the ProFile AI application.

## Logo Files
Place your logo files here, such as:
- `logo.png` - Main logo
- `logo.svg` - Vector logo
- `favicon.ico` - Browser favicon

## Usage in Components
To use images in your Angular components, reference them like this:

```typescript
// In your component
logoPath = 'assets/images/logo.png';
```

```html
<!-- In your template -->
<img [src]="logoPath" alt="ProFile AI Logo">
```

## Supported Formats
- PNG
- JPG/JPEG
- SVG
- ICO (for favicons)
- WebP
