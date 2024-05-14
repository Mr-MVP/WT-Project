import React from 'react'
import smile_img_2 from '../../assets/logo/program_2.jpg'
const Programs_2 = () => {
  
    return (
        <div className='program'>
            <div className="program-left">
            <h3>The Heart of Our Mission</h3>
                <h2>Creating Opportunities</h2>
                <p>
                    For orphaned children, the journey towards a brighter future can often feel daunting. However, at Udaan, we see potential, not obstacles. Through our comprehensive programs and support services, we aim to equip these children with the tools they need to succeed.
                </p>
                <p>
                    From education and healthcare to emotional support and life skills training, we are committed to creating opportunities that empower orphaned children to reach their full potential.
                </p>
            </div>
            <div className="program-right">
            <img src={smile_img_2} alt="" className='smile-img'/>
            </div>
        </div>
      )
  
}

export default Programs_2