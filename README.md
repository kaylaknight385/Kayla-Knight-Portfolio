# Custom Portfolio Site

A Y2K-inspired, pastel-themed personal portfolio website built with React and Vite. Features a draggable music player, animated popups, guestbook, and nostalgic web aesthetics.

## Features

- **Draggable Music Player** - iPod-style music player with custom playlist that you can drag around the screen (with cute doll sprites that follow it!)
- **Interactive Popups** - Random motivational messages that appear across the page
- **Guestbook** - Let visitors leave messages
- **Custom Cursor** - Unique cursor design for that authentic Y2K feel
- **Sakura Petals** - Animated falling petals in the background
- **Responsive Navigation** - Multi-page navigation (Home, About, Projects, Contact)
- **Pastel Aesthetic** - Pink, lavender, and peach color palette with pixel fonts

## Tech Stack

- React 18
- Vite
- react-draggable
- Custom CSS animations
- Font Awesome icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open your browser to the localhost URL shown in the terminal (usually http://localhost:5173)

## Project Structure

```
src/
├── components/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   ├── Navigation.jsx
│   ├── MusicPlayer.jsx
│   ├── PopupWindow.jsx
│   ├── PopupManager.jsx
│   └── Guestbook.jsx
├── assets/
│   ├── images/
│   ├── cutefooont/
│   ├── cursoooor/
│   └── music/
├── App.jsx
├── index.css
└── main.jsx
```

## Music Player

The music player includes tracks from:
- JT
- Rico Nasty
- Summer Walker
- Keri Hilson
- Young Dolph
- And more!

##  Customization

- Update colors in `index.css` (CSS variables in `:root`)
- Add your own music files to `src/music/`
- Customize popup messages in `PopupManager.jsx`
- Change fonts in `src/assets/cutefooont/`

## License

Personal portfolio project - feel free to use as inspiration!
