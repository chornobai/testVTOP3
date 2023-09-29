import Swiper from '../vendor/swiper';
const introBlock = document.querySelector('.intro-blog');


const initBlogSliders = () => {
  const blog = introBlock.querySelector('.swiper');

  const swiperBlog = new Swiper(blog, {
    direction: 'vertical',
    slidesPerView: 3,
    spaceBetween: 30,

  });
};

const initBlogSlider = () => {
  if (introBlock) {
    initBlogSliders();
  }
};

window.initBlogSlider = initBlogSlider;

export {initBlogSlider};
