import './App.css'
import { LanguageProvider } from './context/LanguageProvider';
import { ThemeProvider } from './context/ThemeProvider';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className='min-h-screen bg-background text-foreground'>
          <Navigation />
          <main>
            <Hero/>
            <About />
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
