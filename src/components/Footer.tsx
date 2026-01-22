import { useState, useEffect, useRef } from 'react';
import { Terminal, ArrowUp, Heart } from 'lucide-react';

function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [terminalText, setTerminalText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 300;

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    let animationId: number;

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0ea5e9';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 300;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Terminal typing effect
  useEffect(() => {
    const messages = [
      '> portfolio.initialize()',
      '> status: ONLINE',
      '> response_time: < 24 hours',
      '> ready_to_collaborate: true',
    ];

    let messageIndex = 0;
    let charIndex = 0;
    let currentText = '';

    const type = () => {
      if (messageIndex < messages.length) {
        if (charIndex < messages[messageIndex].length) {
          currentText += messages[messageIndex][charIndex];
          setTerminalText(currentText);
          charIndex++;
          setTimeout(type, 50);
        } else {
          currentText += '\n';
          setTerminalText(currentText);
          messageIndex++;
          charIndex = 0;
          setTimeout(type, 800);
        }
      } else {
        setTimeout(() => {
          setTerminalText('');
          messageIndex = 0;
          charIndex = 0;
          currentText = '';
          type();
        }, 3000);
      }
    };

    type();
  }, []);

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-0 pb-8 overflow-hidden bg-transparent">
      {/* Matrix Rain Background */}
      <div className="relative w-full h-72">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ opacity: 0.15 }}
        />
        
        {/* Terminal Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
          <div className="w-full max-w-4xl">
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg overflow-hidden border border-blue-500/50 shadow-2xl shadow-blue-500/20">
              <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2 border-b border-blue-500/30">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center space-x-2 text-blue-400 text-sm ml-4">
                  <Terminal size={16} />
                  <span className="font-mono">portfolio.terminal</span>
                </div>
              </div>
              <div className="p-6 font-mono text-sm min-h-32">
                <div className="text-blue-400">
                  {terminalText.split('\n').map((line, i) => (
                    <div key={i} className="mb-1">{line}</div>
                  ))}
                  {showCursor && <span className="inline-block w-2 h-4 bg-blue-400 ml-1"></span>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 relative z-10 mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="border-t border-gray-800/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm flex items-center gap-2">
                © {new Date().getFullYear()} Portfolio. Made with Naveeth
              </p>
              
              <button
                onClick={scrollToTop}
                className="mt-4 md:mt-0 group"
              >
                <div className="px-4 py-2 bg-gray-900/50 backdrop-blur-sm rounded-full border border-gray-800 hover:border-blue-500 transition-all flex items-center justify-center hover:scale-110">
                  <ArrowUp className="text-blue-500 group-hover:animate-bounce" size={20} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;