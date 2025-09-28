export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
      <h1>Home Screen</h1>

      <div style={{ margin: "20px" }}>
        <label>Search Temple: </label>
        <input type="text" placeholder="Enter temple name..." style={{ padding: "8px", borderRadius: "6px" }} />
        <button style={{ marginLeft: "10px", padding: "8px 12px", borderRadius: "6px", background: "#007bff", color: "#fff", border: "none" }}>
          Search
        </button>
      </div>

      <div style={{ background: "#fff", margin: "20px auto", padding: "20px", maxWidth: "600px", borderRadius: "12px", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
        <h2>Meenakshi Temple</h2>
        <p><b>Location:</b> Madurai, Tamil Nadu</p>
        <p><b>History:</b> Historic temple dedicated to goddess Meenakshi.</p>
        <p><b>Route:</b> Start → Highway → Madurai → Temple</p>
        <p><i>Image not found</i></p>
      </div>

      <button className="btn">Plan My Yatra</button>
      <button className="btn">Nearby Temples</button>
      <button className="btn">My Bookings</button>
      <button className="btn">Suggested Trips Carousel</button>

      <style jsx>{`
        .btn {
          display: block;
          margin: 15px auto;
          padding: 12px 20px;
          width: 250px;
          border: none;
          border-radius: 8px;
          background: #007bff;
          color: #fff;
          font-size: 1rem;
          cursor: pointer;
          transition: 0.3s;
        }
        .btn:hover {
          background: #0056b3;
        }
      `}</style>
    </div>
  );
}
