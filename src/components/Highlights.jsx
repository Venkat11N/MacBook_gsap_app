const Highlights = () => {
  return (
    <section id="highlights">
      <h2>Highlights</h2>
      <div className="masonry">
        <div className="left-column">
          <div>
            <p>M4 Chip</p>
          </div>
          <p>Ultra Retina XDR Display</p>
          <div>
            <p>All-Day Battery Life</p>
          </div>
        </div>
        <div className="right-column">
          <p>Apple Pencil Pro</p>
          <div className="apple-gradient">
            <p>
              <span>Dynamic Caching</span>
            </p>
          </div>
          <div>
            <p>
              <span className="green-gradient">Thunderbolt 4</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;