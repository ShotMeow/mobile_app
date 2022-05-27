import { Container, Subtitle } from "../../assets/styles/generalStyles"
import { ReviewDescription, ReviewHeader, ReviewIcon, ReviewInfo, ReviewJob, ReviewName, ReviewsBlock, Slide } from "./Reviews.styles"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { reviewsData } from "./Reviews.data";

const Reviews = () => {
  return (
    <ReviewsBlock initial={{ marginTop: '200px', opacity: 0 }}
    whileInView={{ marginTop: '0px', opacity: 1 }}
    viewport={{ once: true }} id="reviews">
      <Container>
        <Subtitle>Отзывы клиентов</Subtitle>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={30}
          breakpoints={{
            1000: {
              slidesPerView: 2
            }
          }}
          style={{ marginTop: '20px' }}
        >
          {reviewsData.map(review => <SwiperSlide key={review.id} style={{width: '45%'}}>
            <Slide>
              <ReviewHeader>
                <ReviewIcon src={review.image} />
                <ReviewInfo>
                  <ReviewName>{review.name}</ReviewName>
                  <ReviewJob>{review.job}</ReviewJob>
                </ReviewInfo>
              </ReviewHeader>
              <ReviewDescription>{review.description}</ReviewDescription>
            </Slide>
          </SwiperSlide>
          )}
        </Swiper>
      </Container>
    </ReviewsBlock>
  )
}

export default Reviews