const bikes = [
    // Commuter Bikes - 10 products
    { id: 1, name: "Hero MotoCorp Splendor", category: "Commuter", engine: "97.2cc", mileage: "100 kmpl", price: 1599000, originalPrice: 1699000, image: "bike-1.jpg", features: ["Reliable", "Fuel-Efficient"], rating: 4.5 },
    { id: 2, name: "Honda CD 110 Dream", category: "Commuter", engine: "110cc", mileage: "98 kmpl", price: 193080, originalPrice: 293080, image: "bike-2.jpg", features: ["Smooth", "Durable"], rating: 4.6 },
    { id: 3, name: "Bajaj Platina 100", category: "Commuter", engine: "102cc", mileage: "96 kmpl", price: 155000, originalPrice: 160000, image: "bike-3.jpg", features: ["Budget", "Reliable"], rating: 4.3 },
    { id: 4, name: "TVS Star City+", category: "Commuter", engine: "110cc", mileage: "88 kmpl", price: 2250000, originalPrice: 2300000, image: "bike-4.jpg", features: ["Strong Build", "Sporty"], rating: 4.4 },
    { id: 5, name: "Mahindra Centuro", category: "Commuter", engine: "100cc", mileage: "92 kmpl", price: 182000, originalPrice: 192000, image: "bike-5.jpg", features: ["Economical", "Comfortable"], rating: 4.2 },
    { id: 6, name: "Bajaj CT 100", category: "Commuter", engine: "99.27cc", mileage: "95 kmpl", price: 950000, originalPrice: 1000000, image: "bike-6.jpg", features: ["Budget", "Simple"], rating: 4.1 },
    { id: 7, name: "Hero MotoCorp Passion", category: "Commuter", engine: "110cc", mileage: "85 kmpl", price: 915000, originalPrice: 980000, image: "bike-7.jpg", features: ["Sporty Look", "Reliable"], rating: 4.5 },
    { id: 8, name: "Honda CB Shine", category: "Commuter", engine: "125cc", mileage: "85 kmpl", price: 1640000, originalPrice: 1700000, image: "bike-8.jpg", features: ["Premium Feel", "Fast"], rating: 4.7 },
    { id: 9, name: "Bajaj Pulsar 125", category: "Commuter", engine: "125cc", mileage: "75 kmpl", price: 2670000, originalPrice: 3670000, image: "bike-9.jpg", features: ["Sporty", "Modern"], rating: 4.6 },
    { id: 10, name: "TVS Apache RTR 160", category: "Commuter", engine: "160cc", mileage: "65 kmpl", price: 320000, originalPrice: 420000, image: "bike-10.jpg", features: ["Performance", "Handling"], rating: 4.8 },

    // Sports Bikes - 10 products
    { id: 11, name: "Yamaha YZF R15 V4", category: "Sports", engine: "155cc", mileage: "60 kmpl", price: 139999, originalPrice: 159999, image: "bike-11.jpg", features: ["Racing", "Lightweight"], rating: 4.8 },
    { id: 12, name: "Bajaj Pulsar NS 200", category: "Sports", engine: "199.5cc", mileage: "50 kmpl", price: 118999, originalPrice: 135999, image: "bike-12.jpg", features: ["Aggressive", "Powerful"], rating: 4.7 },
    { id: 13, name: "Honda CB 200R", category: "Sports", engine: "199cc", mileage: "52 kmpl", price: 124999, originalPrice: 142999, image: "bike-13.jpg", features: ["Modern Design", "Responsive"], rating: 4.6 },
    { id: 14, name: "Bajaj Pulsar 250", category: "Sports", engine: "249.4cc", mileage: "45 kmpl", price: 135999, originalPrice: 155999, image: "bike-14.jpg", features: ["Powerful", "Aggressive"], rating: 4.7 },
    { id: 15, name: "KTM Duke 250", category: "Sports", engine: "248.8cc", mileage: "40 kmpl", price: 198999, originalPrice: 225999, image: "bike-15.jpg", features: ["Performance", "Handling"], rating: 4.9 },
    { id: 16, name: "Honda CBR 250R", category: "Sports", engine: "249cc", mileage: "42 kmpl", price: 179999, originalPrice: 205999, image: "bike-16.jpg", features: ["Sporty", "Reliable"], rating: 4.8 },
    { id: 17, name: "Yamaha YZF R3", category: "Sports", engine: "321cc", mileage: "35 kmpl", price: 349999, originalPrice: 399999, image: "bike-17.jpg", features: ["Premium", "International"], rating: 4.9 },
    { id: 18, name: "Bajaj Dominar 400", category: "Sports", engine: "373.3cc", mileage: "32 kmpl", price: 189999, originalPrice: 215999, image: "bike-18.jpg", features: ["Power", "Cruising"], rating: 4.8 },
    { id: 19, name: "TVS Apache RR 310", category: "Sports", engine: "311cc", mileage: "38 kmpl", price: 215999, originalPrice: 245999, image: "bike-19.jpg", features: ["Aggressive", "Track-Ready"], rating: 4.7 },
    { id: 20, name: "KTM 390 Duke", category: "Sports", engine: "373.3cc", mileage: "35 kmpl", price: 269999, originalPrice: 305999, image: "bike-20.jpg", features: ["Performance King", "Affordable"], rating: 4.9 },

    // Cruiser Bikes - 10 products
    { id: 21, name: "Harley-Davidson Street 500", category: "Cruiser", engine: "500cc", mileage: "30 kmpl", price: 449999, originalPrice: 509999, image: "bike-21.jpg", features: ["American", "Iconic"], rating: 4.8 },
    { id: 22, name: "Royal Enfield Classic 350", category: "Cruiser", engine: "349cc", mileage: "35 kmpl", price: 168999, originalPrice: 189999, image: "bike-22.jpg", features: ["Retro", "Comfortable"], rating: 4.7 },
    { id: 23, name: "Bajaj Avenger 220", category: "Cruiser", engine: "220cc", mileage: "50 kmpl", price: 98999, originalPrice: 115999, image: "bike-23.jpg", features: ["Cruising", "Style"], rating: 4.5 },
    { id: 24, name: "Suzuki Intruder 150", category: "Cruiser", engine: "155cc", mileage: "60 kmpl", price: 112999, originalPrice: 129999, image: "bike-24.jpg", features: ["Low Seat", "Comfortable"], rating: 4.6 },
    { id: 25, name: "Royal Enfield Bullet 350", category: "Cruiser", engine: "349cc", mileage: "33 kmpl", price: 154999, originalPrice: 175999, image: "bike-25.jpg", features: ["Legend", "Powerful"], rating: 4.8 },
    { id: 26, name: "Honda Shadow 350", category: "Cruiser", engine: "348cc", mileage: "36 kmpl", price: 199999, originalPrice: 225999, image: "bike-26.jpg", features: ["Smooth", "Comfortable"], rating: 4.7 },
    { id: 27, name: "Bajaj Avenger 400", category: "Cruiser", engine: "374.3cc", mileage: "28 kmpl", price: 169999, originalPrice: 192999, image: "bike-27.jpg", features: ["Power", "Cruiser Style"], rating: 4.6 },
    { id: 28, name: "Yamaha Bolt 950", category: "Cruiser", engine: "941cc", mileage: "15 kmpl", price: 799999, originalPrice: 899999, image: "bike-28.jpg", features: ["V-Twin", "Powerful"], rating: 4.9 },
    { id: 29, name: "Royal Enfield Interceptor 650", category: "Cruiser", engine: "648cc", mileage: "32 kmpl", price: 369999, originalPrice: 415999, image: "bike-29.jpg", features: ["Classic", "Smooth"], rating: 4.9 },
    { id: 30, name: "Suzuki Gixxer 250", category: "Cruiser", engine: "250cc", mileage: "38 kmpl", price: 189999, originalPrice: 215999, image: "bike-30.jpg", features: ["Affordable", "Reliable"], rating: 4.5 },

    // Adventure Bikes - 10 products
    { id: 31, name: "Royal Enfield Himalayan", category: "Adventure", engine: "411cc", mileage: "30 kmpl", price: 192999, originalPrice: 219999, image: "bike-31.jpg", features: ["Off-Road", "Versatile"], rating: 4.8 },
    { id: 32, name: "Bajaj Dominar 250", category: "Adventure", engine: "248.8cc", mileage: "38 kmpl", price: 149999, originalPrice: 169999, image: "bike-32.jpg", features: ["Adventure", "Reliable"], rating: 4.6 },
    { id: 33, name: "Hero MotoCorp XPulse 200", category: "Adventure", engine: "199.6cc", mileage: "45 kmpl", price: 109999, originalPrice: 125999, image: "bike-33.jpg", features: ["Budget Adventure", "Off-Road"], rating: 4.5 },
    { id: 34, name: "Mahindra Mojo XT300", category: "Adventure", engine: "300cc", mileage: "32 kmpl", price: 175999, originalPrice: 199999, image: "bike-34.jpg", features: ["Adventure", "Tech"], rating: 4.7 },
    { id: 35, name: "BMW G 310 GS", category: "Adventure", engine: "313cc", mileage: "35 kmpl", price: 349999, originalPrice: 395999, image: "bike-35.jpg", features: ["German Engineering", "Adventure"], rating: 4.9 },
    { id: 36, name: "KTM 390 Adventure", category: "Adventure", engine: "373.3cc", mileage: "33 kmpl", price: 299999, originalPrice: 339999, image: "bike-36.jpg", features: ["Off-Road", "Performance"], rating: 4.9 },
    { id: 37, name: "Suzuki V-Strom 250", category: "Adventure", engine: "249cc", mileage: "40 kmpl", price: 249999, originalPrice: 285999, image: "bike-37.jpg", features: ["Touring", "Reliable"], rating: 4.7 },
    { id: 38, name: "Royal Enfield Meteor Fireball", category: "Adventure", engine: "349cc", mileage: "32 kmpl", price: 168999, originalPrice: 189999, image: "bike-38.jpg", features: ["Adventure Cruiser", "Comfort"], rating: 4.6 },
    { id: 39, name: "Hero XPulse 400", category: "Adventure", engine: "394cc", mileage: "28 kmpl", price: 179999, originalPrice: 205999, image: "bike-39.jpg", features: ["Adventure", "Powerful"], rating: 4.8 },
    { id: 40, name: "Himalayan BS6 411", category: "Adventure", engine: "411cc", mileage: "28 kmpl", price: 199999, originalPrice: 225999, image: "bike-40.jpg", features: ["Off-Road Beast", "Durable"], rating: 4.9 }
];

let cart = JSON.parse(localStorage.getItem('bikecart')) || [];
updateCartCount();

function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    if (!featuredContainer) return;

    const featured = bikes.slice(0, 8);
    featured.forEach(bike => {
        const discount = Math.round(((bike.originalPrice - bike.price) / bike.originalPrice) * 100);
        const element = document.createElement('div');
        element.className = 'product-card';
        element.innerHTML = `
            <div class="product-image"><img src="${bike.image}" alt="${bike.name}" style="width:100%;height:100%;object-fit:contain;padding:10px;"></div>
            <div class="product-info">
                <div class="product-category">${bike.category}</div>
                <div class="product-name">${bike.name}</div>
                <div class="product-features">
                    <span>${bike.engine}</span>
                    <span>${bike.mileage}</span>
                </div>
                <div class="product-rating">${'⭐'.repeat(Math.floor(bike.rating))} ${bike.rating}</div>
                <div>
                    <span class="product-price">₹${bike.price.toLocaleString('en-IN')}</span>
                    <span class="product-original-price">₹${bike.originalPrice.toLocaleString('en-IN')}</span>
                    <span class="product-discount">${discount}% OFF</span>
                </div>
                <button class="btn-buy" onclick="addToCart(${bike.id})">Add to Cart</button>
            </div>
        `;
        element.onclick = () => viewProductDetail(bike.id);
        element.querySelector('.btn-buy').onclick = (e) => {
            e.stopPropagation();
            addToCart(bike.id);
        };
        featuredContainer.appendChild(element);
    });
}

function addToCart(bikeId) {
    const bike = bikes.find(b => b.id === bikeId);
    if (!bike) return;

    const existingItem = cart.find(item => item.id === bikeId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...bike, quantity: 1 });
    }

    localStorage.setItem('bikecart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${bike.name} added to cart!`);
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const total = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = total;
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

function viewProductDetail(bikeId) {
    const bike = bikes.find(b => b.id === bikeId);
    if (!bike) return;

    localStorage.setItem('selectedBike', JSON.stringify(bike));
    window.location.href = 'product-detail.html';
}

function loadAllProducts(category = 'all') {
    const container = document.getElementById('products-container');
    if (!container) return;

    container.innerHTML = '';
    const filtered = category === 'all' ? bikes : bikes.filter(b => b.category === category);

    filtered.forEach(bike => {
        const discount = Math.round(((bike.originalPrice - bike.price) / bike.originalPrice) * 100);
        const element = document.createElement('div');
        element.className = 'product-card';
        element.innerHTML = `
            <div class="product-image"><img src="${bike.image}" alt="${bike.name}" style="width:100%;height:100%;object-fit:contain;padding:10px;"></div>
            <div class="product-info">
                <div class="product-category">${bike.category}</div>
                <div class="product-name">${bike.name}</div>
                <div class="product-features">
                    <span>${bike.engine}</span>
                    <span>${bike.mileage}</span>
                </div>
                <div class="product-rating">${'⭐'.repeat(Math.floor(bike.rating))} ${bike.rating}</div>
                <div>
                    <span class="product-price">₹${bike.price.toLocaleString('en-IN')}</span>
                    <span class="product-original-price">₹${bike.originalPrice.toLocaleString('en-IN')}</span>
                    <span class="product-discount">${discount}% OFF</span>
                </div>
                <button class="btn-buy" onclick="addToCart(${bike.id})">Add to Cart</button>
            </div>
        `;
        element.onclick = () => viewProductDetail(bike.id);
        element.querySelector('.btn-buy').onclick = (e) => {
            e.stopPropagation();
            addToCart(bike.id);
        };
        container.appendChild(element);
    });
}

function updateQuantity(bikeId, quantity) {
    const item = cart.find(item => item.id === bikeId);
    if (item) {
        item.quantity = Math.max(1, quantity);
        localStorage.setItem('bikecart', JSON.stringify(cart));
        loadCartPage();
    }
}

function removeFromCart(bikeId) {
    cart = cart.filter(item => item.id !== bikeId);
    localStorage.setItem('bikecart', JSON.stringify(cart));
    updateCartCount();
    loadCartPage();
}

function loadCartPage() {
    const container = document.getElementById('cart-items');
    const summaryContainer = document.getElementById('cart-summary');
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Start shopping to add bikes to your cart</p>
                <a href="products.html" class="btn-primary" style="display: inline-block; margin-top: 20px;">Continue Shopping</a>
            </div>
        `;
        if (summaryContainer) summaryContainer.style.display = 'none';
        return;
    }

    container.innerHTML = '';
    let subtotal = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-image"><img src="${item.image}" alt="${item.name}" style="width:80px;height:80px;object-fit:contain;"/></div>
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</div>
                <div>${item.engine} | ${item.mileage}</div>
            </div>
            <div class="cart-item-qty">
                <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                <span>${item.quantity}</span>
                <button onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <div style="text-align: right;">
                <div class="cart-item-price">₹${itemTotal.toLocaleString('en-IN')}</div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        container.appendChild(cartItem);
    });

    if (summaryContainer) {
        const tax = Math.round(subtotal * 0.05);
        const shipping = subtotal > 50000 ? 0 : 500;
        const total = subtotal + tax + shipping;

        summaryContainer.innerHTML = `
            <div class="summary-row">
                <span>Subtotal</span>
                <span>₹${subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div class="summary-row">
                <span>Tax (5%)</span>
                <span>₹${tax.toLocaleString('en-IN')}</span>
            </div>
            <div class="summary-row">
                <span>Shipping</span>
                <span>${shipping === 0 ? 'FREE' : '₹' + shipping}</span>
            </div>
            <div class="summary-row total">
                <span>Total</span>
                <span>₹${total.toLocaleString('en-IN')}</span>
            </div>
            <button class="checkout-btn" onclick="goToCheckout()">Proceed to Checkout</button>
            <a href="products.html" style="display: block; text-align: center; margin-top: 15px; color: #3498db; text-decoration: none;">Continue Shopping</a>
        `;
    }
}

function goToCheckout() {
    if (cart.length > 0) {
        window.location.href = 'checkout.html';
    } else {
        showNotification('Cart is empty!');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
    loadFeaturedProducts();
});

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email')?.value;
    const password = document.getElementById('password')?.value;

    if (email && password) {
        localStorage.setItem('userEmail', email);
        showNotification('Login successful!');
        setTimeout(() => {
            window.location.href = 'home.html';
        }, 1500);
    }
}

function logout() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('bikecart');
    cart = [];
    updateCartCount();
    window.location.href = 'home.html';
}

function filterFeaturedBikes() {
    const searchTerm = document.getElementById('featured-search')?.value.toLowerCase().trim();
    const featuredContainer = document.getElementById('featured-products');
    if (!featuredContainer) return;

    const featured = bikes.slice(0, 8);
    const filtered = searchTerm ? featured.filter(bike => 
        bike.name.toLowerCase().includes(searchTerm) ||
        bike.category.toLowerCase().includes(searchTerm) ||
        bike.engine.toLowerCase().includes(searchTerm)
    ) : featured;

    featuredContainer.innerHTML = '';
    
    if (filtered.length === 0) {
        featuredContainer.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #999;"><p>No bikes found matching your search.</p></div>';
        return;
    }

    filtered.forEach(bike => {
        const discount = Math.round(((bike.originalPrice - bike.price) / bike.originalPrice) * 100);
        const element = document.createElement('div');
        element.className = 'product-card';
        element.innerHTML = `
            <div class="product-image"><img src="${bike.image}" alt="${bike.name}" style="width:100%;height:100%;object-fit:contain;padding:10px;"></div>
            <div class="product-info">
                <div class="product-category">${bike.category}</div>
                <div class="product-name">${bike.name}</div>
                <div class="product-features">
                    <span>${bike.engine}</span>
                    <span>${bike.mileage}</span>
                </div>
                <div class="product-rating">${'⭐'.repeat(Math.floor(bike.rating))} ${bike.rating}</div>
                <div>
                    <span class="product-price">₹${bike.price.toLocaleString('en-IN')}</span>
                    <span class="product-original-price">₹${bike.originalPrice.toLocaleString('en-IN')}</span>
                    <span class="product-discount">${discount}% OFF</span>
                </div>
                <button class="btn-buy" onclick="addToCart(${bike.id})">Add to Cart</button>
            </div>
        `;
        element.onclick = () => viewProductDetail(bike.id);
        element.querySelector('.btn-buy').onclick = (e) => {
            e.stopPropagation();
            addToCart(bike.id);
        };
        featuredContainer.appendChild(element);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('featured-search');
    if (searchInput) {
        searchInput.addEventListener('input', filterFeaturedBikes);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
            }
        });
    }
});

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
