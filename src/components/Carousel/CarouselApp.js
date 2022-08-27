import { Carousel } from "react-carousel-minimal";
import carousel from "../../carousel.json";

function CarouselApp() {
  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="AppCarousel">
      <div>
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={carousel}
            time={2000}
            width="850px"
            // height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
          />
        </div>
      </div>
    </div>
  );
}

export default CarouselApp;
