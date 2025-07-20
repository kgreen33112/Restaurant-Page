export {generateHomePage};

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
            <div class="hero-image">
                <img src="https://cdn.pixabay.com/photo/2017/09/04/18/39/coffee-2714970_1280.jpg">
            </div>
        </div>
    </section>`;
  };
  
