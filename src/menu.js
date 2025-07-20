export { generateMenuPage };  
  // Generate Menu
  function generateMenuPage() {
    const content = document.getElementById('content');
    
    content.innerHTML =
    `<section id="menu" class="menu-section">
        <div class="container">
            <h2 class="section-title">Our Menu</h2>
            <p class="section-subtitle">Freshly prepared daily</p>
            <div class="menu-grid">
                    <div class="menu-category">
                        <h3>Breakfast</h3><i class="fas fa-sun"></i>
                        <div class="menu-item">
                            <div class="item-info">
                                <h3>Classic Breakfast Sandwich</h3>
                                <p>Fresh eggs, bacon, cheese on artisan bread</p>
                            </div>
                            <span class="price">$8.99</span>
                        </div>
                        <div class="menu-item">
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
                    <div class="menu-category">
                        <h3>Lunch</h3><i class="fas fa-hamburger"></i>
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
                    <div class="menu-category">
                        <h3>Coffee</h3><i class="fas fa-coffee"></i>
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
        </div>
    </section>`;
  };
