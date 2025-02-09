import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function VideoPage() {
  const navigate = useNavigate();
  const [loves, setLoves] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const audioRef = useRef(null);
  const heartPool = useRef([]);
  const isAnimating = useRef(false);

  const loveSongs = [
    {
      title: "Perfect Love 💑",
      url: "Dil Bechara A.r. Rahman 320 Kbps.mp3",
      artist: "Love Melody"
    },
    {
      title: "Forever With You 💖",
      url: "Ishq Mein Nadaaniyan 320 Kbps.mp3",
      artist: "Heart Beats"
    },
    {
      title: "Our Sweet Moments 💝",
      url: "Kesariya - Brahmastra 320 Kbps.mp3",
      artist: "Love Notes"
    },
    {
      title: "Moonlight Romance 🌙",
      url: "Aashiqui The Love Theme Aashiqui 2 320 Kbps.mp3",
      artist: "Starlight Serenades"
    },
    {
      title: "Love's Embrace 🤗",
      url: "Titli Chennai Express 320 Kbps.mp3",
      artist: "Tender Hearts"
    },
    {
      title: "Dancing in Love 💃",
      url: "Mat Aazma Re Murder 3 320 Kbps.mp3",
      artist: "Rhythm of Hearts"
    },
    {
      title: "Sweet Dreams 💫",
      url: "Hum Jee Lenge Murder 3 320 Kbps.mp3",
      artist: "Night Whispers"
    },
    {
      title: "Heart's Symphony ❤️",
      url: "Dil Ibaadat Tum Mile Original Motion Picturetrack 320 Kbps.mp3",
      artist: "Love Orchestra"
    },
    
  ];

  useEffect(() => {
    // Initialize heart pool with different heart emojis
    const heartEmojis = ['💝', '💖', '💗', '💓', '💕'];
    for (let i = 0; i < 30; i++) {
      const heart = document.createElement('div');
      heart.className = 'floating-heart';
      heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
      heart.style.display = 'none';
      document.body.appendChild(heart);
      heartPool.current.push(heart);
    }

    return () => {
      heartPool.current.forEach(heart => heart.remove());
    };
  }, []);

  useEffect(() => {
    // Initialize audio
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // Set initial volume
      audioRef.current.addEventListener('ended', playNext);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('ended', playNext);
      }
    };
  }, []);

  const togglePlay = useCallback(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Load the song if not loaded
        audioRef.current.load();
        // Play the song
        audioRef.current.play().catch(error => {
          console.log("Playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const playNext = useCallback(() => {
    setCurrentSong((prev) => {
      const nextSong = (prev + 1) % loveSongs.length;
      if (audioRef.current) {
        audioRef.current.src = loveSongs[nextSong].url;
        if (isPlaying) {
          audioRef.current.play().catch(error => {
            console.log("Playback failed:", error);
          });
        }
      }
      return nextSong;
    });
  }, [loveSongs.length, isPlaying]);

  const playPrevious = useCallback(() => {
    setCurrentSong((prev) => {
      const prevSong = (prev - 1 + loveSongs.length) % loveSongs.length;
      if (audioRef.current) {
        audioRef.current.src = loveSongs[prevSong].url;
        if (isPlaying) {
          audioRef.current.play().catch(error => {
            console.log("Playback failed:", error);
          });
        }
      }
      return prevSong;
    });
  }, [loveSongs.length, isPlaying]);

  const getHeartFromPool = useCallback(() => {
    return heartPool.current.find(heart => heart.style.display === 'none');
  }, []);

  const createBloomingHeart = useCallback((button, isCenter = false) => {
    const heart = getHeartFromPool();
    if (!heart) return;

    const rect = button.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    heart.style.display = 'block';
    heart.style.opacity = '0';
    heart.style.transform = 'translate(-50%, -50%) scale(0)';
    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;

    requestAnimationFrame(() => {
      if (isCenter) {
        // Center heart animation
        heart.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        heart.style.transform = `translate(-50%, -50%) scale(2)`;
        heart.style.opacity = '1';

        setTimeout(() => {
          heart.style.opacity = '0';
          heart.style.transform = 'translate(-50%, -50%) scale(3)';
          setTimeout(() => {
            heart.style.display = 'none';
            heart.style.transform = 'none';
          }, 500);
        }, 400);
      } else {
        // Outer hearts animation
        const angle = (Math.random() * 360) * (Math.PI / 180);
        const distance = 30 + Math.random() * 60;
        const destinationX = Math.cos(angle) * distance;
        const destinationY = Math.sin(angle) * distance;

        heart.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        heart.style.transform = `translate(calc(-50% + ${destinationX}px), calc(-50% + ${destinationY}px)) scale(${0.5 + Math.random() * 0.5}) rotate(${Math.random() * 360}deg)`;
        heart.style.opacity = '1';

        setTimeout(() => {
          heart.style.opacity = '0';
          heart.style.transform += ' scale(0)';
          setTimeout(() => {
            heart.style.display = 'none';
            heart.style.transform = 'none';
          }, 800);
        }, 600);
      }
    });
  }, [getHeartFromPool]);

  const handleLoveClick = useCallback((index) => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    setLoves(prev => ({
      ...prev,
      [index]: (prev[index] || 0) + 1
    }));

    const button = document.querySelector(`#love-btn-${index}`);
    if (button) {
      button.classList.add('love-btn-active');
      
      // Create center heart
      createBloomingHeart(button, true);
      
      // Create outer hearts
      const heartCount = 15;
      const delay = 30;

      for (let i = 0; i < heartCount; i++) {
        setTimeout(() => {
          createBloomingHeart(button, false);
          if (i === heartCount - 1) {
            setTimeout(() => {
              isAnimating.current = false;
              button.classList.remove('love-btn-active');
            }, 300);
          }
        }, i * delay);
      }
    }
  }, [createBloomingHeart]);

  const handleShare = useCallback((message) => {
    const text = encodeURIComponent(
      `💝 Sharing love and joy! ✨\n\n${message}`
    );
    
    const whatsappUrl = `https://wa.me/919040507085?text=${text}`;
    window.open(whatsappUrl, '_blank');
  }, []);

  const sendLoveMessage = useCallback(() => {
    const button = document.querySelector('.share-love-btn');
    if (button) {
      // Add click effect
      button.classList.add('share-love-btn-active');
      
      // Create floating hearts and sparkles
      for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.className = i % 2 === 0 ? 'floating-share-heart' : 'floating-share-sparkle';
        particle.innerHTML = i % 2 === 0 ? '💝' : '✨';
        
        const angle = (i / 12) * Math.PI * 2;
        const x = Math.cos(angle) * 50;
        const y = Math.sin(angle) * 50;
        
        particle.style.left = `calc(50% + ${x}px)`;
        particle.style.top = `calc(50% + ${y}px)`;
        particle.style.animationDelay = `${i * 0.1}s`;
        
        button.appendChild(particle);
        
        setTimeout(() => {
          particle.remove();
        }, 1000);
      }
      
      setTimeout(() => {
        button.classList.remove('share-love-btn-active');
      }, 500);
    }

    const currentSongTitle = loveSongs[currentSong].title;
    const currentArtist = loveSongs[currentSong].artist;
    
    const message = encodeURIComponent(
      `💝 Sharing this beautiful love song with you!\n\n` +
      `🎵 ${currentSongTitle}\n` +
      `🎨 ${currentArtist}\n\n` +
      `With all my love and affection 💖\n` +
      `Every beat of this song reminds me of you ✨\n` +
      `Forever yours 💑`
    );
    
    const whatsappUrl = `https://wa.me/919040507085?text=${message}`;
    window.open(whatsappUrl, '_blank');
  }, [currentSong, loveSongs]);

  return (
    <div className="video-page">
      <div className="rose-shower"></div>
      <div className="floating-hearts"></div>
      
      <div className="navigation-buttons">
        <button className="nav-btn love-message-btn" onClick={() => navigate('/special-message')}>
          <span className="btn-icon">💌</span>
          <span className="btn-text">Back to Special Message</span>
          <span className="btn-sparkles">✨</span>
        </button>
      </div>

      <div className="video-content">
        <h1 className="video-title">Our Love's Melody 🎵</h1>
        <p className="video-subtitle">Every song tells our beautiful story 💝</p>

        <div className="music-player">
          <audio
            ref={audioRef}
            src={loveSongs[currentSong].url}
            preload="auto"
          />
          <div className="music-info">
            <h3 className="song-title">{loveSongs[currentSong].title}</h3>
            <p className="song-artist">{loveSongs[currentSong].artist}</p>
          </div>
          <div className="music-controls">
            <button className="control-btn" onClick={playPrevious}>
              <span>⏮️</span>
            </button>
            <button className="control-btn play-btn" onClick={togglePlay}>
              <span>{isPlaying ? '⏸️' : '▶️'}</span>
            </button>
            <button className="control-btn" onClick={playNext}>
              <span>⏭️</span>
            </button>
          </div>
          <div className="share-love-section">
            <button 
              className="share-love-btn" 
              onClick={sendLoveMessage}
            >
              <div className="btn-content">
                <span className="btn-icon">💌</span>
                <span className="btn-text">Share Love</span>
                <span className="btn-sparkles">✨</span>
              </div>
              <div className="btn-glow"></div>
            </button>
          </div>
        </div>

        <div className="memory-counter">
          <div className="counter-item">
            <span className="counter-number">∞</span>
            <span className="counter-label">Songs of Love</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPage; 