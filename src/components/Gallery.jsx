import { Link } from "react-router-dom";
import { GalleryItem } from "./GalleryItem";

import "./style/Gallery.scss";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="card-wrapper">
        {GalleryItem.map((item, index) => {
          return (
            <>
              <div key={index} className="card">
                <div className="card-overlay">
                  <h1 className="card-overlay-heading">{item.foodName}</h1>
                  <p className="card-overlay-paragraph">{item.price}</p>
                  <Link to="/cart">
                    <button type="button" className="card-overlay-btn">
                      order
                    </button>
                  </Link>
                </div>
                <img
                  key={item.id}
                  src={item.pic}
                  alt="food"
                  className="card-img"
                />
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
