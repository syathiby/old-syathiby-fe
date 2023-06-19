import Navbar from "./component/navbar"
import CarouselComponent from "./component/carousel"
import Facility from "./component/facility"
import Galery from "./component/galery"
import Testimonial from "./component/testimonial"
import Post from "./component/post"
import Address from "./component/address"
import FooterN from "./component/footer"

function DashboardLayout() {

    return (
        <>
            <div className="py-4 px-4 shadow-xl">
                <Navbar />
            </div>
            <div className="py-2">
                <CarouselComponent />
            </div>
            <div>
                <Facility />
            </div>
            <div>
                <Galery />
            </div>
            <div>
                <Testimonial />
            </div>
            <div>
                <Post />
            </div>
            <div>
                <Address />
            </div>
            <div>
                <FooterN />
            </div>
        </>
    )

}

export default DashboardLayout