// import component Dashboard
import CarouselComponent from "./component/carousel";
import Facility from "./component/facility";
import Galery from "./component/galery";
import Testimonial from "./component/testimonial";
import Post from "./component/post";
import Address from "./component/address";

// import LayOut
import Layout from "./Layout";
import VisiMisi from "./component/visiMisi";

function DashboardLayout() {
  return (
    <>
      <Layout>
        <div key="carousel">
          <CarouselComponent />
        </div>
        <div key="visiMisi">
          <VisiMisi />
        </div>
        <div key="facility">
          <Facility />
        </div>
        <div key="gallery">
          <Galery />
        </div>
        <div key="testimonial">
          <Testimonial />
        </div>
        <div key="blogPost">
          <Post />
        </div>
        <div key="address">
          <Address />
        </div>
      </Layout>
    </>
  );
}

export default DashboardLayout;
