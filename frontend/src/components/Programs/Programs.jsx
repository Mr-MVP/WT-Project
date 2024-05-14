import React from 'react'
import './Programs.css'
import smile_img from '../../assets/program.jpg'
const Programs = () => {
    return (
        <div className='program'>
            <div className="program-left">
                <img src={smile_img} alt="" className='smile-img' />
            </div>
            <div className="program-right">
                <h3>Building a Brighter Future, Together</h3>
                <h2>Spreading Smiles</h2>
                <p>
                    At Udaan, we understand that the journey towards a brighter future is not one that can be taken alone. It requires collaboration, compassion, and a shared commitment to making a difference.
                </p>
                <p>
                    Together, we can provide orphaned children with the love, support, and opportunities they need to thrive. Join us in building a world where every child has the chance to dream, to learn, and to succeed. Together, we can create a brighter future for all.
                </p>
            </div>
        </div>
    )
}

export default Programs