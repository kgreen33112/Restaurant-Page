

// Generate home page
function generateHomePage() {
    const content = document.getElementById('content');
    content.innerHTML = 
    `<section class="hero">
        <div class="hero-content">
            <div class="hero-title">
                <h2>Welcome to the Daily Grind</h2>
            </div>
            <div class="hero-subtitle">
                <p>Your neighborhood coffeeshop serving delicious food and amazing coffee</p>
            </div>
            <div class="cta-btn">
                <button type="button">View Our Menu</button>
            </div>
            <div class="hero-image">
                <img src="https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg">
            </div>
        </div>
    </section>`;
  };
  
  generateHomePage();
  
  const homeBtn = document.getElementById("homeBtn");
  homeBtn.onclick = generateHomePage;
  
  // Generate Menu
  function generateMenuPage() {
    const content = document.getElementById('content');
    
    content.innerHTML =
    `<section id="menu" class="menu-section page-section">
        <div class="container">
            <h2 class="section-title">Our Menu</h2>
            <p class="section-subtitle">Freshly prepared daily</p>
            <div class="menu-categories">
                <button class="category-btn active" data-category="breakfast">
                    <i class="fas fa-sun"</i>Breakfast
                </button>
                <button id="lunchBtn" class="category-btn" data-category="lunch">
                    <i class="fas fa-hamburger"</i>Lunch
                </button>
                <button class="category-btn" data-category="coffee">
                    <i class="fas fa-coffee"</i>Coffee
                </button>
            </div>
            <div class="menu-grid">
                <div id="breakfast" class="menu-category breakfast active">
                    <div class="menu-item">
                        <div class="item-info">
                            <h3>Classic Breakfast Sandwich</h3>
                            <p>Fresh eggs, bacon, cheese on artisan bread</p>
                        </div>
                        <span class="price">$8.99</span>
                    </div>
                    <div class="menu-item>">
                        <div class="item-info">
                            <h3>Avocado Toast</h3>
                            <p>Smashed avocado, cherry tomatoes, feta cheese</p>
                        </div>
                        <span class="price">$9.99</span>
                    </div>
                    <div class="menu-item">
                        <div class="item-info">
                            <h3>Greek Yogurt Bowl</h3>
                            <p>Fresh berries, granola, honey drizzle</p>
                        </div>
                        <span class="price">$7.99</span>
                    </div>
                </div>
                <div id="lunch" class="menu-category lunch">
                    <div class="menu-item">
                        <div class="item-info">
                            <h3>Grilled Chicken Wrap</h3>
                            <p>Grilled chicken, mixed greens, tomatoes, ranch</p>
                        </div>
                        <span class="price">$11.99</span>
                    </div>
                    <div class="menu-item">
                        <div class="item-info">              
                            <h3>Turkey Club Sandwich</h3>
                            <p>Sliced turkey, bacon, lettuce, tomato, mayo</p>
                        </div>
                        <span class="price">$12.99</span>
                    </div>
                </div>
                <div id="coffee" class="menu-category coffee">
                    <div class="menu-item">
                        <div class="item-info">
                            <h3>Mocha</h3>
                            <p>Espresso, steamed milk, chocolate</p>
                        </div>
                        <span class="price">$4.99</span>
                    </div>
                    <div class="menu-item">
                        <div class="item-info">
                            <h3>Latte</h3>
                            <p>Espresso, steamed milk, flavor of choice</p>
                        </div>
                        <span class="price">$4.99</span>
                    </div>
                    <div class="menu-item">
                        <div class="item-info">
                            <h3>French press</h3>
                            <p>Ground coffee of choice</p>
                        </div>
                        <span class="price">$3.99</span>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
  };
  
  generateMenuPage();
  const menuBtn = document.getElementById("menuBtn");
  menuBtn.onclick = generateMenuPage;
  
  
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
  
  
  
  generateContactPage()
  const contactBtn = document.getElementById('contactBtn');
  
  contactBtn.onclick = generateContactPage;
  
  window.onload = generateHomePage();