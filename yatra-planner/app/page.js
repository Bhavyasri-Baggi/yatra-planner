"use client";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to YatraONE</h1>
      <div className="buttons">
        <button className="btn primary">Plan a Trip</button>
        <button className="btn secondary">Explore Destinations</button>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(to right, #4facfe, #00f2fe);
          font-family: Arial, Helvetica, sans-serif;
        }

        h1 {
          color: white;
          font-size: 3rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        .buttons {
          display: flex;
          gap: 1.5rem;
        }

        .btn {
          padding: 0.75rem 1.5rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .btn.primary {
          background-color: #0070f3;
          color: white;
        }

        .btn.primary:hover {
          background-color: #005bb5;
        }

        .btn.secondary {
          background-color: white;
          color: #0070f3;
          border: 2px solid #0070f3;
        }

        .btn.secondary:hover {
          background-color: #e6f0ff;
        }
      `}</style>
    </div>
  );
}
