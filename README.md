# Frontend UI Components Implementation

## Overview
This project implements pixel-perfect UI components based on Figma design specifications for Taskina Pty Ltd's frontend assessment. The implementation focuses on creating reusable, accessible, and interactive components using React and TypeScript.

## Live Demo
🔗 [View Live Demo](https://react-ts-front-task.vercel.app/)

## Features
- 🎨 Pixel-perfect implementation of Figma design
- 🔷 Modern React with TypeScript
- 📱 Responsive and interactive components
- ♿ Accessible UI components
- 🎯 Clean and maintainable code structure

## Tech Stack
- React 18
- TypeScript
- CSS Modules
- Vite (Build tool)

## Components

### Button
```typescript
import Button from './components/ui/Button';

<Button 
  text="Done" 
  variant="primary" 
  onClick={() => {}} 
/>
```
Props:
- `text`: string - Button label
- `variant`: 'primary' | 'blue' - Button style variant
- `onClick`: () => void - Click handler

### Dropdown
```typescript
import Dropdown from './components/ui/Dropdown';

<Dropdown 
  mainoption="All Pages" 
  options={["Page 1", "Page 2"]} 
/>
```
Props:
- `mainoption`: string - Default selected option
- `options`: string[] - Array of available options

### Card
```typescript
import Card from './components/ui/Card';

<Card>
  {/* Card content */}
</Card>
```
Props:
- `children`: ReactNode - Card content

## Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation
1. Clone the repository
```bash
git clone https://github.com/Ayat166/react-ts-front-task.git
cd react-ts-front-task
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start development server
```bash
npm run dev
# or
yarn dev
```

## Project Structure
```
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── LineDropdown.tsx
│   │   └── Checkbox.tsx
|   ├── Dropdown.tsx
|   ├── ListItem.tsx 
│   └── Card.tsx
├── styles/
│   ├── button.css
│   ├── card.css
│   ├── checkbox.css
│   ├── linedropdown.css
│   ├── listitems.css
│   ├── global.css
│   └── variables.css
├── App.tsx
└── main.tsx
```

## Accessibility Features
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management
- High contrast colors
- Screen reader friendly structure

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact
Ayat - [GitHub Profile](https://github.com/Ayat166)

Project Link: [https://github.com/Ayat166/react-ts-front-task](https://github.com/Ayat166/react-ts-front-task)
