import { useRouter } from "next/router";
import React from "react";
import fs from 'fs/promises';
import Image from 'next/image';
import path from 'path';
import Head from 'next/head';
function SingleHome(props) {
  const { home } = props;

  return (
    <>
      <Head>
        <title>{home?.title}</title>
      </Head>
      <div className="cont-det">
        <div className="home-details">
          <div className="home-details-top">
            <div className="home-img">
              <img src={home?.img} alt="" />
            </div>
            <div className="home-interduce">
              <div className="home-title">
                <h1>
                  <span className="home-title-name">{home?.title}</span>
                  <span>{home?.price}تومان</span>
                </h1>
                <div className="tags">
                  <span className="tag green-tag"> {home?.firstbenefit}</span>
                  <span className="tag brown-tag">{home?.secondbenefit}</span>
                </div>
                <div className="adrress">آدرس :{home?.location}</div>
              </div>
              <div className="home-review">
                <div className="home-review-top">
                  <h2>تایید شده</h2>
                  <p className="">
                    <span>کد آگهی : </span>
                    <span>{home?.code}</span>
                  </p>
                </div>
                <ul className="home-review-bottom">
                  <li>
                    <span>{home?.vahed} : </span>
                    <span>{home?.vahedcount}</span>
                  </li>
                  <li>
                    <span>تعداد اتاق ها  : </span>
                    <span>{home?.roomCount}</span>
                  </li>
                  <li>
                    <span></span>
                    <span></span>
                  </li>
                  <li>

                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="home-details-bottom">
            <div className="home-details-description">
              <p className="">توضیحات</p>
              <p className="">
                {home?.desc}
              </p>
            </div>
          </div>

        </div>
      </div>


    </>

  );

}
async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'db.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productId = params.id; const data = await getData();
  const product = data.homes.find(product => product.id === productId);
  if (!product) {
    return { notFound: true };
  }
  return {
    props: {
      home: product,
    }
  };
}
export async function getStaticPaths() {
  const data = await getData();
  const ids = data.homes.map(product => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { id: id } }));
  return {
    paths: pathsWithParams,
    fallback: true
  }
}
export default SingleHome;
