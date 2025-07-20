export {generateContactPage};

function generateContactPage () {
    const content = document.getElementById('content');
    content.innerHTML = 
    `<section id="contact" class="contact-section page-section">
        <div class="container">
            <h2 class="section-title">Visit Us</h2>
            <div class="contact-content">
                <div class="contact-info">
                    <div class="contact-item">
                        <i class="fas fa-map-marker-alt"></i>
                            <div>
                                <h3>Location</h3>
                                <p>123 Coffee Street<br>Example, City 12345</p>
                            </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-clock"></i>
                            <div>
                                <h3>Hours</h3>
                                <p>Mon-Fri: 6:00 AM - 9:00 PM<br>Sat-Sun: 7:00 AM - 10:00 PM</p>
                            </div>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-phone"</i>
                            <div>
                                <h3>Phone</h3>
                                <p>(555)-123-4567</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
  };
  
  
  

  