import React from "react";
import styles from "./CompanyLogos.module.css"; // لو حابب تحط تنسيقات إضافية

const CompanyLogos = () => {
  const logos = [
    { src: "images/logo_mailchimp.svg", alt: "Mailchimp" },
    { src: "images/logo_paypal.svg", alt: "PayPal" },
    { src: "images/logo_stripe.svg", alt: "Stripe" },
    { src: "images/logo_visa.svg", alt: "Visa" },
    { src: "images/logo_apple.svg", alt: "Apple" },
    { src: "images/logo_tinder.svg", alt: "Tinder" },
    { src: "images/logo_sony.svg", alt: "Sony" },
    { src: "images/logo_airbnb.svg", alt: "Airbnb" },
  ];

  return (
    <section className="site-section py-4">
      <div className="container">
        {/* العنوان + الوصف */}
        <div className="row align-items-center">
          <div className="col-12 text-center mt-4 mb-5">
            <div className="row justify-content-center">
              <div className="col-md-7">
                <h2 className="section-title mb-2">Company We've Helped</h2>
                <p className="lead">
                  Porro error reiciendis commodi beatae omnis similique voluptate
                  rerum ipsam fugit mollitia ipsum facilis expedita tempora
                  suscipit iste
                </p>
              </div>
            </div>
          </div>

          {/* الصور */}
          {logos.map((logo, index) => (
            <div
              key={index}
              className="col-6 col-lg-3 col-md-6 text-center mb-4"
            >
              <img src={logo.src} alt={logo.alt} className="img-fluid "
              style={{ maxWidth: "150px" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyLogos;
