import Link from "next/link";
import React from "react";

function Home({ title, id, price, meterage,kind, roomCount, img ,degree,usage,details}) {
  return (
    <div className="card">
      <img src={img} alt="House 6" className="card__img" />
      <h5 className="card__title">{title}</h5>
      <span className="card__like">
        <i className="fa fa-heart">{id}</i>
      </span>
      <div className="card__details">
        <span className="">
          <i className="fa fa-map-marker card__icon"></i>
        </span>
        <p className="card__text usage">{kind}</p>
        <span className="">
          <i className="fa fa-user card__icon"></i>
        </span>
        <p className="card__text"> </p>
        <span className="">
          <i className="fa fa-expand card__icon"></i>
        </span>
        <p className="card__text">{degree}</p>
        <span className="">
          <i className="fa fa-key card__icon"></i>
        </span>
        <p className="card__text">{price} تومان</p>
      </div>

      <Link href={`/ads/${id}`} className="btnj det btn-brown btn-card">
جزئیات بیشتر
      </Link>
    </div>
  );
}

export default Home;
