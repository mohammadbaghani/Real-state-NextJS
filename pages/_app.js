import "@/styles/globals.css";
import Link from "next/link";
import Head from 'next/head';
export default function App({ Component, pageProps }) {
  return (<>

    <Head>     <title>
Melkino- ملکینو</title>
    </Head>

    <div className="container">
      <div className="sidebar">
        <input
          type="checkbox"
          name="toggle"
          id="sidebar-toggle"
          className="sidebar__input"
        />
        <label htmlFor="sidebar-toggle" className="sidebar__label">
          <div className="sidebar__btn"></div>
        </label>

        <div className="sidebar__bg"></div>
        <ul className="list">
          <li className="list__item">
            <a href='/' className="list__link">
              صفحه اصلی
            </a>
          </li>        <li className="list__item">
            <a href="/ads" className="list__link">
              آگهی ها
            </a>
          </li>
          <li className="list__item">
            <a href="/register" className="list__link">
              ثبت نام
            </a>
          </li>



        </ul>
      </div>

      <header className="header">

        <h3 className="u-heading-3 u-heading--light">آگهی خودتان:</h3>
        <h1 className="u-heading-1">ملکی نو با ملکینو  !</h1>
        <h1 className="tt"></h1>
        <Link href="/ads" className="btne header__btn btn-brown">
          مشاهده آگهی ها
        </Link>

        <p className="seeon__text">کافی است به ما بسپارید</p>

      </header>

      <div className="real-tors">
        <p className="real-tors__tittle">سه مشتری برتر</p>
        <div className="real-tors__list">
          <img
            src="/img/realtor-1.jpeg"
            alt="real-tors top 1"
            className="real-tors__img"
          />
          <div className="real-tors__details">
            <h3 className="u-heading-3 u-heading--white">مهدی ایلخانی نسب</h3>
            <p className="real-tors__text">9 آگهی</p>
          </div>

          <img
            src="/img/realtor-2.jpeg"
            alt="real-tors top 2"
            className="real-tors__img"
          />
          <div className="real-tors__details">
            <h3 className="u-heading-3 u-heading--white">کوثر بهشتی</h3>
            <p className="real-tors__text">7 آگهی</p>
          </div>

          <img
            src="/img/realtor-3.jpeg"
            alt="real-tors top 3"
            className="real-tors__img"
          />
          <div className="real-tors__details">
            <h3 className="u-heading-3 u-heading--white">عرشیا احسنی</h3>
            <p className="real-tors__text">5 آگهی</p>
          </div>
        </div>
      </div>

      <Component {...pageProps} />

      <footer className="footer">
        <ul className="nav">
          <li className="nav__item">
            <a href="#" className="nav__link">
              آگهی خود را پیدا کنید
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              درخواست ثبت آگهی
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              لیست آگهی ها
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              با ما تماس بگیرید
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              آگهی خود را ارسال کنید
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              با ما کار کنید
            </a>
          </li>
        </ul>


      </footer>
    </div>
  </>

  );
}
