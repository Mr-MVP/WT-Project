import '../css/Homepage.css'

export default function Homepage() {
    return (
        <div>

            <header>
                <h1>Events Conducted By NGO's</h1>
            </header>

            <div className="container">
           
                {/* <div className="cards"> */}
                    <a href="#">
                    <div className="card" id="money">
                        <div className="card-content">
                            
                            <h3>Money Donation</h3>
                            <p>
Non-governmental organizations (NGOs) play a crucial role in channeling financial resources towards various humanitarian and developmental causes. Money donations to NGOs enable these organizations to implement projects that address pressing social issues, such as poverty alleviation, education, healthcare, and disaster relief. By pooling funds from individual donors, corporations, and philanthropic foundations, NGOs can effectively mobilize and distribute aid where it is most needed. Transparency and accountability in the management of these funds are paramount, as they build trust with donors and ensure that the maximum possible impact is achieved. Through strategic partnerships and innovative fundraising campaigns, NGOs not only raise money but also raise awareness, fostering a global community committed to positive change.</p>
                           
                        </div>
                    </div>
                        </a>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <a href="#">
                    <div className="card" id="evt">
                        <div className="card-content">
                            <h3>Events / Rallies !!</h3>
                            <p>Rallies organized by non-governmental organizations (NGOs) serve as powerful tools for advocacy and raising public awareness about various social, environmental, and political issues. These gatherings bring together diverse groups of people who share a common cause, amplifying their collective voice to influence policy makers and public opinion. Whether addressing climate change, human rights, or healthcare reforms, NGO-led rallies create visible and impactful demonstrations of support that can lead to significant societal shifts. These events often feature speeches by activists, experts, and affected individuals, along with creative displays like banners, art installations, and performances, to engage and inspire participants. By mobilizing communities and drawing media attention, rallies help to sustain momentum for ongoing campaigns and highlight the urgency of the issues at hand, ultimately driving progress and fostering a culture of civic engagement and activism.</p>
                        </div>
                    </div>
                    </a>
                    <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    <a href="#">
                    <div className="card" id="abt">
                        <div className="card-content">
                            <h3>Importance..!</h3>
                            <p>
Non-governmental organizations (NGOs) are crucial for supporting poor and disabled children by providing essential services and advocacy that significantly improve their quality of life. NGOs often offer access to healthcare, specialized medical treatments, and rehabilitation services that these children might otherwise be unable to afford or reach​ (Aid Expo)​. They also implement educational programs tailored to the needs of disabled children, ensuring they receive a quality education and the opportunity to thrive academically​ (Aid Expo)​​ (World Wildlife Fund)​. Furthermore, NGOs advocate for the rights and inclusion of disabled and impoverished children, working to eliminate barriers and discrimination they face. By empowering families and communities through resources and training, NGOs help create a supportive environment that promotes the well-being and development of these vulnerable children​ (UNEP - UN Environment Programme)​.</p>
                        </div>
                    </div>
                    </a>

                {/* </div> */}
            </div>


            <footer>
    <div class="footer-container">
        <div class="footer-section">
            <h4>Contact Us</h4>
            <p>Email: MAM_b22@ce.vjti.co.in</p>
            <p>Phone: +91 8649435545</p>
            <p>Address: Matunga, vjti, india</p>
        </div>
        <div class="footer-section">
            <h4>Follow Us</h4>
            <p><a href="#">Facebook</a></p>
            <p><a href="#">Twitter</a></p>
            <p><a href="#">Instagram</a></p>
        </div>
        <div class="footer-section">
            <h4>Quick Links</h4>
            <p><a href="#">Home</a></p>
            <p><a href="#">About</a></p>
            <p><a href="#">Services</a></p>
            <p><a href="#">Contact</a></p>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2024 NGO Organization. All rights reserved.</p>
    </div>
</footer>

        </div>
    )
}

