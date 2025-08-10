
import React, { useEffect } from 'react';
import style from './About.module.css';
import sqImg6 from '../../assets/sq_img_6.jpg';
import sqImg8 from '../../assets/sq_img_8.jpg';
import person6 from '../../assets/person_6.jpg';
import person5 from '../../assets/person_5.jpg';

export default function About() {
  useEffect(() => {
    const counters = document.querySelectorAll(`.${style.counter}`);
    const speed = 100;

    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }, []);

  return (
    <div className="">
     
      {/* About Us */}
      <section className={`${style.heroImage } ${style.aboutSection} text-white `}>
        <div className=' position-relative  w-100 h-100 d-flex align-items-center justify-content-start ps-5'>
          <h1 className="fw-bold ps-5">About Us</h1>
        </div>
      </section>

      {/* إحصائيات */}
      <section className={`${style['stats-section']} text-white text-center py-5 bg-primary`}>
        <div className="container">
          <h2 className="fw-bold">JobBoard Site Stats</h2>
          <p className="mb-5">
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita unde
            <br />
            officiis recusandae saepe, qui excepturi corrupti.
          </p>
          <div className="row">
            <div className="col-md-3 mb-4">
              <h1 className={style.counter} data-target="1930">0</h1>
              <p>Candidates</p>
            </div>
            <div className="col-md-3 mb-4">
              <h1 className={style.counter} data-target="54">0</h1>
              <p>Jobs Posted</p>
            </div>
            <div className="col-md-3 mb-4">
              <h1 className={style.counter} data-target="120">0</h1>
              <p>Jobs Filled</p>
            </div>
            <div className="col-md-3 mb-4">
              <h1 className={style.counter} data-target="550">0</h1>
              <p>Companies</p>
            </div>
          </div>
        </div>
      </section>
    
      {/* قسم الفيديو + النص */}
      <section className={`py-5 ${style['video-section']}`}>
        <div className="container">
          <div className="row align-items-center">

            {/* الصورة + أيقونة الفيديو */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="position-relative">
                <img src={sqImg6} alt="Developers" className="img-fluid" />
                <a
                  href="https://vimeo.com/317571768"
                  target="_blank"
                  rel="noreferrer"
                  className={`${style['play-button']} position-absolute top-50 start-50 translate-middle`}
                >
                  &#9658;
                </a>
              </div>
            </div>

            {/* النص */}
            <div className="col-lg-6">
              <h2 className="fw-bold">JobBoard For Freelancers, Web Developers</h2>
              <p className="text-muted">
                 <br/>
                Eveniet voluptatibus voluptates suscipit minima, cum voluptatum ut dolor, sed facere corporis qui,
                ea quisquam quis odit minus nulla vitae. Sit, voluptatem.
              </p>
              <p className="text-muted">
                Ipsum harum assumenda in eum vel eveniet numquam, cumque vero vitae enim cupiditate deserunt eligendi officia
                modi consectetur. Expedita tempora quos nobis earum hic ex asperiores quisquam optio nostrum sit!
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* قسم الفيديو + النص */}
      <section className={`py-5 ${style['video-section']}`}>
        <div className="container">
          <div className="row align-items-center">

            {/* النص */}
            <div className="col-lg-6">
              <h2 className="fw-bold">JobBoard For Workers</h2>
              <p className="text-muted">
                 <br/>
                Eveniet voluptatibus voluptates suscipit minima, cum voluptatum ut dolor, sed facere corporis qui, ea quisquam quis odit minus nulla vitae. Sit, voluptatem.
              </p>
              <p className="text-muted">
                Ipsum harum assumenda in eum vel eveniet numquam, cumque vero vitae enim cupiditate deserunt eligendi officia modi consectetur. Expedita tempora quos nobis earum hic ex asperiores quisquam optio nostrum sit!
              </p>
            </div>

            {/* الصورة + أيقونة الفيديو */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="position-relative">
                <img src={sqImg8} alt="Developers" className="img-fluid" />
                <a
                  href="https://vimeo.com/317571768"
                  target="_blank"
                  rel="noreferrer"
                  className={`${style['play-button']} position-absolute top-50 start-50 translate-middle`}
                >
                  &#9658;
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Team */}
      <div className="text-center">
        <h2 className="fw-bold"><br /><br />Our Team</h2>
      </div>

      {/* عضو الفريق 1 */}
      <section className={`py-5 ${style['video-section']}`}>
        <div className="container">
          <div className="row align-items-center">

            {/* الصورة */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="position-relative">
                <img src={person6} alt="Developers" className="img-fluid" />
              </div>
            </div>

            {/* النص */}
            <div className="col-lg-6">
              <h2 className="fw-bold">Elisabeth Smith</h2>
              <p className="text-muted">
                 <br/>
                Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae voluptatibus ut? Ex vel ad explicabo iure ipsa possimus consectetur neque rem molestiae eligendi velit?.
              </p>
              <div className={style['social-icons']}>
                <a href="#" className="me-3"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="me-3"><i className="fab fa-instagram"></i></a>
                <a href="#" className="me-3"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* عضو الفريق 2 */}
      <section className={`py-5 ${style['video-section']}`}>
        <div className="container py-5">
          <div className="row align-items-center">

            {/* النص */}
            <div className="col-lg-6">
              <h2 className="fw-bold">Chintan Patel</h2>
              <p className="text-muted">
                 <br/>
                Soluta quasi cum delectus eum facilis recusandae nesciunt molestias accusantium libero dolores repellat id in dolorem laborum ad modi qui at quas dolorum voluptatem voluptatum repudiandae voluptatibus ut? Ex vel ad explicabo iure ipsa possimus consectetur neque rem molestiae eligendi velit?.
              </p>
              <div className={style['social-icons']}>
                <a href="#" className="me-3"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="me-3"><i className="fab fa-instagram"></i></a>
                <a href="#" className="me-3"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>

            {/* الصورة */}
            <div className="col-lg-6 mb-4 mb-lg-0 ">
              <div className="position-relative">
                <img src={person5} alt="Developers" className="img-fluid" />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
