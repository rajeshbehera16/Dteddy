import { useState, useEffect, useRef } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import VideoPage from './components/VideoPage'

function HomePage() {
  const navigate = useNavigate();
  const [message, setMessage] = useState("Happy Teddy Day!")

  const messages = [
    "Happy Teddy Day!",
    "Hugs are the best medicine!",
    "You're beary special!",
    "Life is better with teddies!",
  ]

  const handleClick = () => {
    navigate('/love-message');
  }

  return (
    <div className="teddy-container">
      <h1>{message}</h1>
      <div className="teddy-image">
        <img 
          src="https://cdn.pixabay.com/photo/2014/11/09/21/44/teddy-bear-524251_1280.jpg" 
          alt="Cute Teddy Bear" 
          className="teddy"
        />
      </div>
      <div className="card">
        <button onClick={handleClick}>
          Click for a Beary Special Message!
        </button>
        <p>
          Send virtual hugs to someone special today! 🧸
        </p>
      </div>
    </div>
  )
}

function SpecialMessage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const navigate = useNavigate();
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize audio
    audioRef.current = new Audio('Kaise Hua Kabir Singh 320 Kbps.mp3');
    audioRef.current.volume = 0.3;

    return () => {
      // Cleanup
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.log("Playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="special-container">
      <div className="rose-shower"></div>
      <div className="floating-music-player">
        <button onClick={toggleMusic} className={`music-btn ${isPlaying ? 'playing' : ''}`}>
          {isPlaying ? '🎵 Pause Music' : '🎵 Play Music'}
        </button>
      </div>

      <div className="navigation-buttons">
        <button className="nav-btn love-message-btn" onClick={() => navigate('/love-message')}>
          <span className="btn-icon">💌</span>
          <span className="btn-text">Back to Love Message</span>
          <span className="btn-sparkles">✨</span>
        </button>
        <button className="nav-btn video-btn" onClick={() => navigate('/videos')}>
          <span className="btn-icon">🎥</span>
          <span className="btn-text">Our Love's Melody</span>
          <span className="btn-hearts">💝</span>
        </button>
      </div>

      <div className="special-content">
        <h1 className="special-title">My Special Love Note 🌹</h1>
        <div className="rose-heart">
          
        </div>

        <div className="love-letter">
          <div className="letter-header">My Dearest Love ❤️</div>
          <div className="letter-content">
            <p>As I write this letter, my heart dances with joy thinking of you. Every precious moment we share is like a star in my universe, twinkling with endless love and happiness. Each beat of my heart whispers your name, creating a symphony of love that echoes through eternity.</p>
            
            <p>You are my first thought at dawn, my last whisper at night, and every beautiful dream in between. Your smile lights up my darkest days, and your love gives me the strength to move mountains. In your laughter, I find pure joy; in your eyes, I see my future.</p>
            
            <p>In this vast world, my heart found its home in yours. Your love is the melody that makes my soul sing, the warmth that keeps me cozy, and the anchor that keeps me grounded. Like a compass pointing north, my heart always leads me to you.</p>
            
            <p>Your love makes my world not just complete, but magical in every way possible. With you, even ordinary moments become extraordinary memories. Every touch, every glance, every shared silence is a treasure I hold dear.</p>
            
            <p>You're the missing piece to my puzzle, the answer to my prayers, and the dream I never knew I had. Your presence in my life is like a beautiful garden where love blooms endlessly.</p>
          </div>
        </div>

        <div className="special-message">
          <div className="poem-title">A Love Poem For You 🌹</div>
          <div className="poem-content">
            <p>Like a rose that blooms in spring's gentle embrace,</p>
            <p>My love for you grows with time and grace.</p>
            <p>Each petal holds a memory so dear,</p>
            <p>Of laughter shared and moments sincere.</p>
            <br/>
            <p>Each thorn represents our strength together,</p>
            <p>Through storms and sunshine, now and forever.</p>
            <p>You're my sunshine in the morning light,</p>
            <p>My guiding star through the darkest night.</p>
            <br/>
            <p>Making every moment perfectly bright,</p>
            <p>With love that makes everything feel right.</p>
            <p>Forever yours, in joy and in pain,</p>
            <p>Until the stars forget to shine again. ❤️</p>
          </div>
        </div>

        <div className="love-quotes">
          <div className="quote-section-title">Words From My Heart 💝</div>
          <div className="quote-card">
            <div className="quote-icon">❝</div>
            <p>In your eyes, I found my home - a sanctuary of endless love. In your heart, I found my love - pure and unconditional. In your soul, I found my purpose - to cherish and protect you forever. Every moment with you is a blessing I thank the universe for.</p>
            <div className="quote-icon-end">❞</div>
          </div>
          <div className="quote-card">
            <div className="quote-icon">❝</div>
            <p>Every moment with you feels like a beautiful dream I never want to wake up from. Your love is the poetry my heart writes, the song my soul sings, and the happiness my life needs. You are the masterpiece of my heart's gallery.</p>
            <div className="quote-icon-end">❞</div>
          </div>
          <div className="quote-card">
            <div className="quote-icon">❝</div>
            <p>With you, every sunrise brings new hope, every sunset paints new dreams, and every heartbeat writes a new chapter in our endless love story. You make my world brighter just by being in it.</p>
            <div className="quote-icon-end">❞</div>
          </div>
          <div className="quote-card">
            <div className="quote-icon">❝</div>
            <p>In the garden of love, you are my most beautiful flower, blooming with grace, radiating with warmth, and filling my life with colors I never knew existed. Your love is the rainbow after every storm.</p>
            <div className="quote-icon-end">❞</div>
          </div>
        </div>

        <div className="memory-timeline">
          <h2>Our Beautiful Journey 💑</h2>
          <div className="timeline-event">
            <div className="event-date">First Meeting</div>
            <div className="event-description">
              <p>The day our eyes met and hearts connected</p>
              <span className="event-emoji">👀💘</span>
            </div>
          </div>
          <div className="timeline-event">
            <div className="event-date">First Date</div>
            <div className="event-description">
              <p>A magical evening that started our journey</p>
              <span className="event-emoji">🌹✨</span>
            </div>
          </div>
          <div className="timeline-event">
            <div className="event-date">First Kiss</div>
            <div className="event-description">
              <p>When time stood still for us</p>
              <span className="event-emoji">💋💫</span>
            </div>
          </div>
        </div>

        <div className="love-reasons">
          <h2>Why I Love You 💖</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <span className="reason-icon">😊</span>
              <p>Your beautiful smile brightens my day</p>
            </div>
            <div className="reason-card">
              <span className="reason-icon">💭</span>
              <p>Your thoughts inspire me</p>
            </div>
            <div className="reason-card">
              <span className="reason-icon">🤗</span>
              <p>Your hugs feel like home</p>
            </div>
            <div className="reason-card">
              <span className="reason-icon">💫</span>
              <p>Your love makes me complete</p>
            </div>
          </div>
        </div>

        <div className="love-promise">
          <h2>My Promises to You 🤍</h2>
          <div className="promise-grid">
            <div className="promise-item">
              <span className="promise-icon">💝</span>
              <p>To cherish every moment with you</p>
            </div>
            <div className="promise-item">
              <span className="promise-icon">🌟</span>
              <p>To be your strength in tough times</p>
            </div>
            <div className="promise-item">
              <span className="promise-icon">🤗</span>
              <p>To hold you close forever</p>
            </div>
            <div className="promise-item">
              <span className="promise-icon">💑</span>
              <p>To grow old together</p>
            </div>
          </div>
        </div>

        <div className="future-dreams">
          <h2>Our Future Together 🌈</h2>
          <div className="dreams-content">
            <div className="dream-item">
              <span className="dream-icon">🏡</span>
              <p>Building our dream home</p>
            </div>
            <div className="dream-item">
              <span className="dream-icon">✈️</span>
              <p>Traveling the world together</p>
            </div>
            <div className="dream-item">
              <span className="dream-icon">👶</span>
              <p>Starting our family</p>
            </div>
            <div className="dream-item">
              <span className="dream-icon">👴👵</span>
              <p>Growing old side by side</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoveMessage() {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [showLoveNote, setShowLoveNote] = useState(false);
  const [showKiss, setShowKiss] = useState(false);
  const [showMusicNote, setShowMusicNote] = useState(false);

  // Start background music when component mounts
  useEffect(() => {
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.volume = 0.3; // Set lower volume for background music
  }, []);

  const toggleMusic = () => {
    const audio = document.getElementById('bgMusic');
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
      // Create floating music notes when music starts
      for (let i = 0; i < 5; i++) {
        const note = document.createElement('div');
        note.className = 'floating-note';
        note.innerHTML = ['🎵', '🎶', '♪', '♫'][Math.floor(Math.random() * 4)];
        note.style.left = `${Math.random() * 100}%`;
        note.style.animationDelay = `${i * 0.2}s`;
        document.body.appendChild(note);
        
        setTimeout(() => {
          document.body.removeChild(note);
        }, 4000);
      }
    }
    setIsPlaying(!isPlaying);
  };

  const sendVirtualHug = () => {
    setShowLoveNote(true);
    setTimeout(() => setShowLoveNote(false), 3000);
  };

  const sendVirtualKiss = () => {
    setShowKiss(true);
    // Create multiple flying kisses
    for (let i = 0; i < 5; i++) {
      const kiss = document.createElement('div');
      kiss.className = 'flying-kiss';
      kiss.innerHTML = '💋';
      kiss.style.left = `${Math.random() * 100}%`;
      kiss.style.animationDelay = `${i * 0.3}s`;
      document.body.appendChild(kiss);
      
      // Remove the kiss element after animation
      setTimeout(() => {
        document.body.removeChild(kiss);
      }, 3000);
    }
    setTimeout(() => setShowKiss(false), 3000);
  };

  const shareLoveSong = () => {
    const loveSong = document.getElementById('loveSong');
    const bgMusic = document.getElementById('bgMusic');
    
    // Lower background music volume
    bgMusic.volume = 0.1;
    
    loveSong.currentTime = 0;
    loveSong.volume = 0.7;
    loveSong.play();
    
    // Restore background music volume after love song ends
    loveSong.onended = () => {
      bgMusic.volume = 0.3;
    };

    setShowMusicNote(true);
    
    // Create floating music notes
    for (let i = 0; i < 10; i++) {
      const note = document.createElement('div');
      note.className = 'floating-note';
      note.innerHTML = ['🎵', '🎶', '♪', '♫'][Math.floor(Math.random() * 4)];
      note.style.left = `${Math.random() * 100}%`;
      note.style.animationDelay = `${i * 0.2}s`;
      document.body.appendChild(note);
      
      setTimeout(() => {
        document.body.removeChild(note);
      }, 4000);
    }
    
    setTimeout(() => setShowMusicNote(false), 3000);
  };

  const goToSpecialMessage = () => {
    navigate('/special-message');
  };

  const startDate = new Date('2024-07-14'); 
  const today = new Date();
  const daysTogether = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  const hoursTogether = daysTogether * 24;
  const minutesTogether = hoursTogether * 60;

  const milestones = [
    {
      icon: '💘',
      text: 'First Met',
      date: 'Feb 14, 2023',
      description: 'The day our story began',
      color: '#ff69b4',
      animation: 'heartBeat'
    },
    {
      icon: '💝',
      text: 'First Date',
      date: 'Sept 21, 2024',
      description: 'A magical evening together',
      color: '#e91e63',
      animation: 'pulse'
    },
    {
      icon: '💖',
      text: 'First Kiss',
      date: 'Sept 21, 2024',
      description: 'A moment of pure magic',
      color: '#ff4081',
      animation: 'bounce'
    },
    {
      icon: '🌹',
      text: 'First "I Love You"',
      date: 'Aug 11, 2024',
      description: 'Words from the heart',
      color: '#d81b60',
      animation: 'swing'
    },
    {
      icon: '🏡',
      text: 'First Trip Together',
      date: 'Sept 21, 2024',
      description: 'Adventure of a lifetime',
      color: '#c2185b',
      animation: 'tada'
    },
    {
      icon: '🎁',
      text: 'First Anniversary',
      date: 'Aug 11, 2025',
      description: 'One year of endless love',
      color: '#ad1457',
      animation: 'rubberBand'
    }
  ];

  return (
    <div className="love-container">
      {showLoveNote && (
        <div className="floating-love-note">
          🌹 Virtual hug sent with lots of love! 🤗
        </div>
      )}
      
      {showKiss && (
        <div className="kiss-message">
          💝 Blowing you a sweet kiss! 💋
        </div>
      )}

      {showMusicNote && (
        <div className="music-message">
          💝 Sharing our special love song! 🎵
        </div>
      )}

      <div className="floating-music-player">
        <button onClick={toggleMusic} className={`music-btn ${isPlaying ? 'playing' : ''}`}>
          {isPlaying ? '🎵 Pause Music' : '🎵 Play Music'}
        </button>
        <audio id="bgMusic" loop>
          <source src="Tu Har Lamha Khamoshiyan 128 Kbps.mp3?autoplay=true" />
        </audio>
        <audio id="loveSong">
          <source src="Main Agar Kahoon - Om Shanti Om 320 Kbps.mp3" type="audio/mp3" />
        </audio>
      </div>

      <div className="falling-hearts"></div>

      <h1 className="animated-title">My Beary Special Message For You ❤️</h1>
      
      <div className="love-content">
        <div className="teddy-showcase">
          <img 
            src="https://files.oaiusercontent.com/file-NA3LAGD53CpwZyy9ceBg8C?se=2025-02-08T19%3A32%3A14Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db29ed22c-8d65-4d4f-9e78-ca58d3ce18bc.webp&sig=7UWCr8VbVCOKCMNKoJl36nTrgORtCfEwG5OvWRsBg2w%3D" 
            alt="Love Teddy" 
            className="love-teddy"
          />
          <div className="teddy-hearts">
            <span>💝</span>
            <span>💖</span>
            <span>💕</span>
          </div>
        </div>

        <div className="love-message-card">
          <div className="card-front">
            <p>Just like this teddy bear,</p>
            <p>My love for you is soft, warm, and always there.</p>
            <p>You make my heart smile every single day,</p>
            <p>And I'll love you forever in every way! 💝</p>
          </div>
        </div>

        <div className="countdown-section">
          <h3 className="love-journey-title">Our Love Journey 💑</h3>
          <div className="love-stats">
            <div className="stat-item" data-aos="fade-up" data-aos-delay="100">
              <div className="stat-circle">
                <span className="stat-number counter">{daysTogether}</span>
                <div className="stat-ring"></div>
                <div className="stat-hearts">
                  <span>💖</span>
                  <span>💝</span>
                  <span>💕</span>
                </div>
              </div>
              <span className="stat-label">Days Together</span>
              <span className="stat-subtitle">Every day with you is a blessing</span>
              <div className="stat-detail">
                That's {Math.floor(daysTogether/365)} years and {daysTogether%365} days of pure joy
                <div className="extra-stats">
                  <p>✨ {daysTogether * 24 * 60} minutes of laughter</p>
                  <p>💫 {daysTogether * 3} shared smiles</p>
                  <p>💝 {daysTogether * 1000} heartbeats in sync</p>
                  <p>🌟 Countless precious memories together</p>
                </div>
              </div>
            </div>

            <div className="stat-item" data-aos="fade-up" data-aos-delay="200">
              <div className="stat-circle">
                <span className="stat-number counter">{hoursTogether}</span>
                <div className="stat-ring"></div>
                <div className="stat-hearts">
                  <span>💘</span>
                  <span>💗</span>
                  <span>💓</span>
                </div>
              </div>
              <span className="stat-label">Hours of Joy</span>
              <span className="stat-subtitle">Time flies when I'm with you</span>
              <div className="stat-detail">
                Each hour filled with precious memories
              </div>
            </div>

            <div className="stat-item" data-aos="fade-up" data-aos-delay="300">
              <div className="stat-circle infinite-circle">
                <span className="stat-number">∞</span>
                <div className="stat-ring"></div>
                <div className="stat-hearts">
                  <span>💝</span>
                  <span>💖</span>
                  <span>💗</span>
                </div>
              </div>
              <span className="stat-label">Moments of Love</span>
              <span className="stat-subtitle">Forever and always</span>
              <div className="stat-detail">
                Countless beautiful moments together
              </div>
            </div>
          </div>

          <div className="love-counter-facts">
            <div className="counter-fact">
              <span className="fact-icon">🌅</span>
              <span className="fact-text">{daysTogether} sunrises shared</span>
            </div>
            <div className="counter-fact">
              <span className="fact-icon">🌙</span>
              <span className="fact-text">{daysTogether} sunsets cherished</span>
            </div>
            <div className="counter-fact">
              <span className="fact-icon">💝</span>
              <span className="fact-text">{minutesTogether.toLocaleString()} minutes of happiness</span>
            </div>
          </div>

          <div className="journey-milestones">
            {milestones.map((milestone, index) => (
              <div 
                className="milestone-card" 
                key={index}
                data-aos={milestone.animation}
                data-aos-delay={index * 100}
                style={{'--milestone-color': milestone.color}}
              >
                <div className="milestone-icon-wrapper">
                  <span className="milestone-icon">{milestone.icon}</span>
                </div>
                <div className="milestone-content">
                  <h4 className="milestone-title">{milestone.text}</h4>
                  <div className="milestone-date-wrapper">
                    <span className="milestone-date">{milestone.date}</span>
                  </div>
                  <p className="milestone-description">{milestone.description}</p>
                </div>
                <div className="milestone-hearts">
                  <span>💕</span>
                  <span>💖</span>
                  <span>💝</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="love-poem-section">
          <h3>A Poem Just For You 📝</h3>
          <div className="poem-content">
            <p>In this world of endless space,</p>
            <p>You're my heart's special place.</p>
            <p>Like a teddy soft and true,</p>
            <p>My love grows each day for you.</p>
            <p>Every moment, every smile,</p>
            <p>Makes this journey so worthwhile.</p>
          </div>
        </div>

        <div className="love-reasons">
          <h3>Why You're Special 💫</h3>
          <div className="reasons-grid">
            <div className="reason-card">
              <span className="reason-icon">💖</span>
              <p>Your beautiful smile</p>
            </div>
            <div className="reason-card">
              <span className="reason-icon">✨</span>
              <p>Your caring heart</p>
            </div>
            <div className="reason-card">
              <span className="reason-icon">🌟</span>
              <p>Your amazing spirit</p>
            </div>
            <div className="reason-card">
              <span className="reason-icon">🎭</span>
              <p>Your cute expressions</p>
            </div>
          </div>
        </div>

        <div className="love-timeline">
          <h3>Our Love Story Timeline 📅</h3>
          <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-date">First Meet</div>
              <div className="timeline-content">
                <p>The day our eyes met and hearts connected 💘</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">First Date</div>
              <div className="timeline-content">
                <p>A magical evening that started our journey 🌹</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">First Kiss</div>
              <div className="timeline-content">
                <p>When time stood still for us 💋</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">Today</div>
              <div className="timeline-content">
                <p>Still falling more in love every day 💑</p>
              </div>
            </div>
          </div>
        </div>

        <div className="interactive-love-section">
          <h3>Express Your Love 💌</h3>
          <div className="love-buttons">
            <button className="love-action-btn" onClick={sendVirtualHug}>
              Send Virtual Hug 🤗
            </button>
            <button className="love-action-btn" onClick={sendVirtualKiss}>
              Blow a Kiss 💋
            </button>
            <button className="love-action-btn" onClick={shareLoveSong}>
              Share Love Song 🎵
            </button>
            <button className="love-action-btn" onClick={goToSpecialMessage}>
              Something Special 🎁
            </button>
          </div>
        </div>

        <div className="love-promise-section">
          <h3>My Promises To You 🤝</h3>
          <div className="promises-container">
            <div className="promise-item">
              <span>💝</span>
              <p>To always be there for you</p>
            </div>
            <div className="promise-item">
              <span>💫</span>
              <p>To make you smile every day</p>
            </div>
            <div className="promise-item">
              <span>🌙</span>
              <p>To love you more with each passing day</p>
            </div>
            <div className="promise-item">
              <span>⭐</span>
              <p>To be your forever teddy bear</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/love-message" element={<LoveMessage />} />
        <Route path="/special-message" element={<SpecialMessage />} />
        <Route path="/videos" element={<VideoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
