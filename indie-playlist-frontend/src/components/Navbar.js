/* 🛠 General Navbar Styling */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  }
  
  /* 🎵 Logo Styling */
  .logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    text-shadow: 0px 0px 10px #ff00ff;
  }
  
  /* 📌 Navbar Links */
  .navbar ul {
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 0;
    margin: 0;
  }
  
  .navbar ul li {
    display: inline;
  }
  
  .navbar ul li a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    font-size: 1rem;
    transition: all 0.3s;
    padding: 8px 12px;
    border-radius: 5px;
  }
  
  .navbar ul li a:hover {
    color: #ff00ff;
    text-shadow: 0px 0px 10px #ff00ff;
    background: rgba(255, 255, 255, 0.2);
  }
  
  /* 🌙 Dark Mode Toggle Button */
  .dark-mode-toggle {
    background: linear-gradient(45deg, #ff00ff, #00ffff);
    border: none;
    padding: 8px 12px;
    color: white;
    cursor: pointer;
    border-radius: 8px;
    font-weight: bold;
    font-size: 0.9rem;
    transition: all 0.3s ease-in-out;
    outline: none;
  }
  
  .dark-mode-toggle:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 15px rgba(0, 255, 255, 0.6);
  }
  
  /* 📱 Responsive Design */
  @media (max-width: 768px) {
    .navbar {
      flex-direction: column;
      align-items: center;
      padding: 10px;
    }
  
    .navbar ul {
      flex-direction: column;
      gap: 10px;
    }
  
    .dark-mode-toggle {
      margin-top: 10px;
    }
  }
  