import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
// import Preloader from "../components/Preloader/Preloader";
import Preloader from "../components/Preloader/Preloader";
import favicon from "../assets/favicon.png";
import Banner from "../components/Banner/Banner";
import Adventure from "../components/Adventure/Adventure";
import Products from "../components/Products/Products";
import Location from "../components/Location/Location";
import Teams from "../components/Teams/Teams";
import CTA from "../components/CTA/CTA";
import Blogs from "../components/Blogs/Blogs";
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Fishing Frenzy | Fishing HTML Website Template</title>
        <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      </Helmet>

      {isLoading ? (
        <Preloader></Preloader>
      ) : (
        <>
          <main>
            <Banner></Banner>
            <Adventure></Adventure>
            <Products></Products>
            <Location></Location>
            <Teams></Teams>
            <Blogs></Blogs>
            <CTA></CTA>
          </main>
        </>
      )}
    </>
  );
};

export default Home;
