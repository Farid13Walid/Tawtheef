import React from 'react'
import style from './SingleJop.module.css'
import logoJop from '../../assets/job_logo_5.jpg'
import pictureJop from '../../assets/job_single_img_1.jpg'

export default function SingleJop() {
  return <> 
  <div className=" container p-5 my-5 ">

       <div className=" w-50 d-flex ">
        <img src={logoJop} alt="" className=' border border-2 w-25 rounded-4' />
        <div className="w-50 d-flex justify-content-center align-items-start flex-column ms-4">
          <h3 className=' fw-bold '>Product  Designer</h3>

          <div className="d-flex justify-content-center align-items-center mt-3">
            <p className='me-4 text-secondary '><i class="fa-solid fa-briefcase me-2"></i>Puma</p>
            <p className='me-4 text-secondary'><i class="fa-solid fa-location-dot me-2"></i>Puma</p>
            <p className='me-4 text-primary'><i class="fa-regular fa-clock me-2 text-secondary"></i>Full Time</p>
          </div>
        </div>
       </div>

       <div className='d-flex mt-4'>
        <div className="  '" style={{width:'65%'}}>
          <img src={pictureJop} alt="" className='w-100 mb-b-4 rounded-4' />

          <div className="my-5">
          <h3 className=' text-primary mb-4'><i class="fa-solid fa-align-left me-4"></i>Job Description</h3>
          <p className=' text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus.Velit unde aliquam et voluptas reiciendis non sapiente labore, deleniti asperiores blanditiis nihil quia officiis dolor vero iste dolore vel molestiae saepe. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!</p>
          </div>

          
          <div className="my-5">
          <h3 className=' text-primary mb-4'><i class="fa-solid fa-rocket-launch me-3"></i>Responsibilities</h3>
          <p className=' text-secondary'><i class="fa-solid fa-circle-check me-3"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <p className=' text-secondary'><i class="fa-solid fa-circle-check me-3"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <p className=' text-secondary'><i class="fa-solid fa-circle-check me-3"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <p className=' text-secondary'><i class="fa-solid fa-circle-check me-3"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <p className=' text-secondary'><i class="fa-solid fa-circle-check me-3"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>

          <div className="my-5">
          <h3 className=' text-primary mb-4'><i class="fa-solid fa-book me-3"></i>Education + Experience</h3>
          <p className=' text-secondary'><i class="fa-solid fa-circle-check me-3"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <p className=' text-secondary'><i class="fa-solid fa-circle-check me-3"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <p className=' text-secondary'><i class="fa-solid fa-circle-check me-3"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <p className=' text-secondary'><i class="fa-solid fa-circle-check me-3"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <p className=' text-secondary'><i class="fa-solid fa-circle-check me-3"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>

          <div className="my-5">
          <h3 className=' text-primary mb-4'><i class="fa-solid fa-bookmark me-3"></i>Other Benifits</h3>
          <p className=' text-secondary'><i class="fa-solid fa-circle-check me-3"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <p className=' text-secondary'><i class="fa-solid fa-circle-check me-3"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <p className=' text-secondary'><i class="fa-solid fa-circle-check me-3"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <p className=' text-secondary'><i class="fa-solid fa-circle-check me-3"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          <p className=' text-secondary'><i class="fa-solid fa-circle-check me-3"></i>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
          </div>

          <div className="w-100 my-5">
          <button className='btn  btn-outline-secondary px-5 py-3 rounded-3 text-dark ' style={{width:'45%'}}><i class="fa-solid fa-heart me-3"></i>Save jop</button>
          <button className='btn  btn-primary px-5 py-3 rounded-3 text-white w-50 ms-4'style={{width:'45%'}} >Apply Now</button>
           </div>

        </div>

        <div className="d-flex flex-column ms-4" style={{width:'33%'}}>
        <div className=" bg-body-secondary p-5 pb-4 rounded-4"  >
          <h3 className='mb-2 fw-bold text-primary'>Job Summary</h3>
          <p className=" text-secondary fs-6 mt-3"><span className=' fw-bold fs-5 text-dark'>Published on : </span>April 14, 2019</p>
          <p className=" text-secondary fs-6 mt-3"><span className=' fw-bold fs-5 text-dark'>Vacancy: </span>20</p>
          <p className=" text-secondary fs-6 mt-3"><span className=' fw-bold fs-5 text-dark'>Employment Status: </span>Full-time</p>
          <p className=" text-secondary fs-6 mt-3"><span className=' fw-bold fs-5 text-dark'>Experience: </span>2 to 3 year(s)</p>
          <p className=" text-secondary fs-6 mt-3"><span className=' fw-bold fs-5 text-dark'>Job Location: </span>New York City</p>
          <p className=" text-secondary fs-6 mt-3"><span className=' fw-bold fs-5 text-dark'>Salary: </span>$60k - $100k</p>
          <p className=" text-secondary fs-6 mt-3"><span className=' fw-bold fs-5 text-dark'>Gender: </span>Any</p>
          <p className=" text-secondary fs-6 mt-3"><span className=' fw-bold fs-6 text-dark'>Application Deadline: </span>April 28, 2019</p>
        </div>
  
         <div className="bg-body-secondary  p-4 mt-5  rounded-4">

          <h3 className=' fw-bold text-primary'>Share</h3>
          <div className="d-flex justify-content-start mt-3">
            <i class="fa-brands fa-facebook-f text-primary me-4 fs-5"></i>
            <i class="fa-brands fa-twitter text-primary me-4 fs-5"></i>
            <i class="fa-brands fa-linkedin-in text-primary me-4 fs-5"></i>
          </div>
         </div>
        </div>

       </div>

       </div>
  </> 
    
}