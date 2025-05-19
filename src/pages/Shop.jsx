import Description from "../components/Description/Description";
import ProductLayout from "../components/Shop/ProductLayout";
import CTA from "../components/CTA/CTA";
import Pagination from "../components/Shop/Pagination";

const Shop = () => {
  return (
    <>
      <Pagination></Pagination>
      <Description></Description>
      <ProductLayout></ProductLayout>
      <CTA></CTA>
    </>
  );
};

export default Shop;
