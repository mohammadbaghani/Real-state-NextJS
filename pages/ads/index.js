import React, { useEffect, useState } from "react";
import db from "./../../data/db.json";
import Home from "@/components/modules/Ad";
import Head from 'next/head';
function index() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("-1");
  const [homes, setHomes] = useState([...db.homes]);

  useEffect(() => {
    const newHomes = db.homes.filter((home) => home.title.includes(search));
    setHomes(newHomes);
  }, [search]);


  useEffect(() => {
    switch (sort) {


      case "car": {

        const ne = [...db.homes].filter((home) => home.kind === 'اجاره');
        setHomes(ne);
        break;
      }

      case "room": {

        const newHomes = [...db.homes].filter((home) => home.kind === 'رهن');
        setHomes(newHomes);
        break;
      }

      case "meterage": {

        const n = [...db.homes].filter((home) => home.kind === 'فروش');
        setHomes(n);
        break;
      }


      case "digital": {

        const n = [...db.homes].filter((home) => home.kind === 'تجاری');
        setHomes(n);
        break;
      }


      case "shop": {

        const n = [...db.homes].filter((home) => home.kind === 'shop');
        setHomes(n);
        break;
      }
      default: {
        setHomes([...db.homes]);
      }

    }
  }, [sort]);

  return (
    <>

      <Head>     <title>
        Ads List- لیست آگهی ها</title>


      </Head>

      <div className="home-section" id="houses">

        <div className="parent-all">
          <p className="vijeh">
            املاک لاکچری
          </p>  <p className="vijeh key">
            ملکینو
          </p>
          <p className="vijeh jahani">معرفی برترین املاک تهران
          </p>
        </div>

        <div className="home-filter-search">
          <div className="home-filter">
            <select defaultValue={sort} onChange={(e) => setSort(e.target.value)} className="allgroups">
              <option value="-1" className="allgroups">همه دسته بندی ها</option>
              <option value="meterage">فروش</option>
 
              <option value="room" >رهن</option>
              <option value="car" >اجاره</option>
              <option value="digital">تجاری</option>
            </select>
          </div>
          <div className="home-search">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجو در تمام پروفایل ها"
            />
          </div>
        </div>

        <div className="homes">
          {homes.map((home) => (
            <Home key={home.id} {...home} />
          ))}
        </div>


      </div></>

  );
}

export default index;
