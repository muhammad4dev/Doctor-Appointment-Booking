# Doctor Appointment Booking Interface

A modern, responsive, and accessible web application for booking doctor appointments. Built with React, TypeScript, and Tailwind CSS.

## Features

- 👩‍⚕️ Browse and filter doctors by specialty, availability, and location
- 📅 Interactive calendar for appointment date selection
- ⏰ Time slot picker with real-time availability
- 📝 Patient information collection form
- 📱 Fully responsive design (mobile-first approach)
- ♿ WCAG 2.1 Level AA compliant
- 🗓️ Google Calendar integration
- 💾 Local storage for appointment persistence

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
- Vite (build tool)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── components/
│   ├── appointments/    # Appointment management
│   ├── booking/        # Booking flow components
│   └── doctor/         # Doctor directory components
├── contexts/           # React context providers
├── data/              # Mock data and constants
└── types/             # TypeScript interfaces
```

## Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader compatibility
- High contrast ratios
- Touch-friendly targets

## AI Tools Used in Development

This project was developed with the assistance of AI tools to enhance the development process:

1. **Code Structure**: AI helped design a scalable component architecture and type system.

2. **Accessibility**: AI assisted in implementing WCAG guidelines and ARIA attributes.

3. **Mock Data**: AI generated realistic doctor profiles and appointment slots.

4. **Component Logic**: AI helped optimize state management and component interactions.

5. **Styling**: AI provided Tailwind CSS class combinations for responsive design.

## License

MIT

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
