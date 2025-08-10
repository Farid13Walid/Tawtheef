import React from 'react'
import style from './Contact.module.css'
import person1 from '../../assets/person_1.jpg'
import person2 from '../../assets/person_2.jpg'

export default function Contact() {
  return <> 
    <section className={style.firstSection}>
      <div className={style.contactImg}>
        
      <div className={style.layer}></div>
      </div>
      <div className={style.contactTitle}>
        <h1 >Contact</h1>
      </div>
    </section>

    <section className={style.secondSection}>
      <div className={'container ${style.secondPart}'}>
        <div className="row flex-column flex-md-row">
          <div className="col-1 d-nono d-md-block"></div>
          
          <div className="col-12 col-lg-5">

            <div className={style.enterinfo}>
              <form>
                <div className={style.yourName}>
                  <div className="">
                    <div className="row flex-column flex-md-row">
                      <div className="col-12 col-md-6 ">
                        <div className="mb-3">
                          <label htmlFor="firstName" className='form-label '  style={{ fontSize: '20px'}}>First Name</label>
                          <input type="text" className='form-control  ' id='InputFirstName' aria-describedby='userNameHelp' />
                        </div>
                      </div>

                      <div className="col-12 col-md-6">
                        <div className="mb-3">
                          <label htmlFor="lastName" className='form-label' style={{ fontSize: '20px'}}>Last Name</label>
                          <input type="text" className='form-control' id='InputLastName' aria-describedby='userNameHelp' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="Email" className='form-label' style={{ fontSize: '20px'}}>Email</label>
                  <input type="email" className='form-control' id='InputEmail' aria-describedby='emailHelp' />
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className='form-label' style={{ fontSize: '20px'}}>Subject</label>
                  <input type="text" className='form-control' id='InputSubject' />
                </div>

                <div className="mb-3">
                  <label htmlFor="FormTextarea" className='form-label' style={{ fontSize: '20px'}}>Message</label>
                  <textarea name="msg" className='form-control' id="FormTextarea" rows={6} placeholder='Write your notes or questions here...'></textarea>
                </div>

                <div className="mb-3">
                  <button type='submit' className='btn btn-primary px-3 py-2'>Send Message</button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-1 d-none d-md-block"></div>

          <div className="col-12 col-lg-5 mt-5">

            <div className={style.intro}>
        
              <div className={style.introInformation1}>
                <h6>Address</h6>
                <p>Benha, Qalubia, Egypt</p>
              </div>
              <div className={style.introInformation2}>
                <h6>Phone</h6>
                <div className={style.btnInfo}>
                  <a href='#' className='info '>
                    <h6>+1 232 3235 324</h6>
                  </a>
                </div>
              </div>
              <div className={style.introInformation3}>
                <h6>Email Address</h6>
                <div className={style.btnInfo}>
                  <a href='#' className='info'><h6>youremail@domain.com</h6></a>
                </div>
              </div>
        
            </div>
          </div>
        </div>
      </div>
    </section>


    <section className="thirdSection bg-body-tertiary mt-5  p-5" style={{textAlign:'center'}}>
      <div className="thirdTitle">
        <h2 className='' style={{fontWeight:'bold'}}>Happy Candidates Says</h2>
      </div>
      

      <div className="container">
        <div className="row flex-column flex-md-row">
          <div className="col-1"></div>
          <div className="col-12 col-lg-5">
            <div className={style.staffBox}>
            <div className={style.opinion}>

            <p>“Ipsum harum assumenda in eum vel eveniet numquam cumque vero vitae enim cupiditate deserunt eligendi officia modi consectetur. Expedita tempora quos nobis earum hic ex asperiores quisquam optio nostrum sit”</p>
            </div>
            <div className={style.staffInfo}>
              <div className={style.staffImg}>
                <img src={person1} alt="person1" />
              </div>
              <div className={style.staffData}>
                <h6>Elisabeth Smith</h6>
                <p>Creative Director</p>
              </div>
            </div>
            </div>
          </div>

          <div className="col-12 col-lg-5">
            <div className={style.staffBox}>
              <div className={style.opinion}>
            <p>“Ipsum harum assumenda in eum vel eveniet numquam cumque vero vitae enim cupiditate deserunt eligendi officia modi consectetur. Expedita tempora quos nobis earum hic ex asperiores quisquam optio nostrum sit”</p>
              </div>
            <div className={style.staffInfo}>
              <div className={style.staffImg}>
                <img src={person2} alt="person2" />
              </div>
              <div className={style.staffData}>
                <h6>Chris Peter</h6>
                <p>Web Designer</p>
              </div>
            </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  </> 
    
}