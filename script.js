 // ---- BACKGROUND SLIDESHOW (6 sec rotation) ----
    const slides = document.querySelectorAll('#bgSlideshow .bg-slide');
    let currentSlide = 0;
    if(slides.length) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 6000);
    }

    // Modal handling
    const modal = document.getElementById('infoModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    const closeModalBtn = document.getElementById('closeModalBtn');

    function showModal(title, message) {
        modalTitle.innerText = title;
        modalText.innerText = message;
        modal.style.display = 'flex';
    }
    closeModalBtn.addEventListener('click', () => { modal.style.display = 'none'; });
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

    // "CLICK HERE" button action
    document.getElementById('clickHereBtn').addEventListener('click', () => {
        showModal('EXCLUSIVE ACCESS', '✨ Thank you for your interest! ✨\n\nYou will be redirected to our private collection preview. Please check your email for updates from Chrome Hearts Botswana. \n\n Stay rebellious.');
    });

    // Footer legal buttons
    document.getElementById('copyrightBtn').addEventListener('click', () => {
        showModal('COPYRIGHT', '© Chrome Hearts & BIDA25. All designs, trademarks, logos, and product images are exclusive property of Chrome Hearts LLC. Unauthorized reproduction, distribution, or usage is strictly prohibited. All rights reserved worldwide.');
    });
    document.getElementById('legalBtn').addEventListener('click', () => {
        showModal('LEGAL INFORMATION', 'Terms of use: By accessing this website, you agree to our terms. Chrome Hearts Botswana operates under official license. All sales are final for limited collections. Liability limited to the maximum extent permitted by law. Disputes governed by Botswana jurisdiction.');
    });
    document.getElementById('privacyBtn').addEventListener('click', () => {
        showModal('PRIVACY POLICY', 'We collect personal information only when you voluntarily contact us. Your data is used solely to respond to inquiries and improve our services. We never share your information with third parties. You may request data deletion at any time.');
    });

    // Contact form
    document.getElementById('sendMsgBtn').addEventListener('click', () => {
        const name = document.getElementById('contactName').value.trim();
        if (name) alert(`✨ Thank you ${name}, our gothic concierge will contact you soon.`);
        else alert("Please enter your name.");
    });

    // Smooth scroll functions removed – navigation now uses separate HTML pages (index.html, about.html, product.html, contact.html, location.html)
    // No need for scroll listeners, as links point to external files.

    // Initialize Map (Leaflet)
    function initMap() {
        const mapContainer = document.getElementById('mapContainer');
        if (mapContainer) {
            const map = L.map('mapContainer').setView([-24.6282, 25.9231], 14);
            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
            }).addTo(map);
            L.marker([-24.6282, 25.9231]).addTo(map).bindPopup('<b>Chrome Hearts Botswana</b><br>Plot 179, Gaborone International Commerce Park').openPopup();
        }
    }
    setTimeout(initMap, 200);
// BACKGROUND SLIDESHOW
    const bgSlides = document.querySelectorAll('#bgSlideshow .bg-slide');
    let currentBgIndex = 0;
    if (bgSlides.length) {
        setInterval(() => {
            bgSlides[currentBgIndex].classList.remove('active');
            currentBgIndex = (currentBgIndex + 1) % bgSlides.length;
            bgSlides[currentBgIndex].classList.add('active');
        }, 6000);
    }

    // OVERLAY TOGGLES (visual effect only)
    const bgContainer = document.getElementById('bgSlideshow');
    document.getElementById('transparentWhiteOverlayBtn')?.addEventListener('click', () => {
        bgContainer.classList.remove('dark-override');
        showPopup("Overlay Mode", "Transparent White overlay active.");
    });
    document.getElementById('darkCherryOverlayBtn')?.addEventListener('click', () => {
        bgContainer.classList.add('dark-override');
        showPopup("Overlay Mode", "Dark Cherry accent applied.");
    });

    // MODAL
    const modal = document.getElementById('infoModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    const closeModalBtn = document.getElementById('closeModalBtn');
    function showPopup(title, message) {
        modalTitle.innerText = title;
        modalText.innerText = message;
        modal.style.display = 'flex';
    }
    closeModalBtn.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if (e.target === modal) modal.style.display = 'none'; });

    // SEARCH (simple popup)
    const searchInput = document.getElementById('globalSearchInput');
    const searchIcon = document.getElementById('searchIconBtn');
    function handleSearch() {
        let q = searchInput.value.trim();
        showPopup("🔍 Ethereal Search", q ? `You searched for "${q}". A specialist will reply soon.` : "Enter keywords like 'cross pendant'.");
    }
    searchIcon.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSearch(); });

    // CONTACT PAGE INTERACTIONS
    document.getElementById('sendLiveMsgBtn')?.addEventListener('click', () => {
        let name = document.getElementById('chatName').value.trim();
        let msg = document.getElementById('chatMsg').value.trim();
        if (!name && !msg) showPopup("Silent Whisper", "Please leave a name or message.");
        else {
            showPopup("Message Sent", `Thank you ${name || "guest"}. We'll reply soon.`);
            document.getElementById('chatName').value = '';
            document.getElementById('chatMsg').value = '';
        }
    });
    document.getElementById('requestCallBtnNew')?.addEventListener('click', () => {
        let phone = document.getElementById('callbackPhoneInput').value.trim();
        if (!phone) showPopup("Callback", "Enter your phone number.");
        else {
            showPopup("Callback Scheduled", `We'll call ${phone} within 24h.`);
            document.getElementById('callbackPhoneInput').value = '';
        }
    });
    document.getElementById('openMapBtn')?.addEventListener('click', () => showPopup("Map", "Gaborone International Commerce Park, Plot 179. Contact for directions."));
    document.getElementById('copyrightModalBtn')?.addEventListener('click', () => showPopup("COPYRIGHT", "© Chrome Hearts LLC. All rights reserved."));
    document.getElementById('legalModalBtn')?.addEventListener('click', () => showPopup("LEGAL", "Terms apply. Disputes under Botswana law."));
    document.getElementById('privacyModalBtn')?.addEventListener('click', () => showPopup("PRIVACY", "Your data is never shared."));
    document.getElementById('emailCopyTrigger')?.addEventListener('click', (e) => {
        e.preventDefault();
        navigator.clipboard.writeText('chromehearts@gmail.com').then(() => showPopup("Email", "Copied to clipboard."));
    });
     // ---- BACKGROUND SLIDESHOW (6 sec rotation) ----
    const slides = document.querySelectorAll('#bgSlideshow .bg-slide');
    let currentSlide = 0;
    if(slides.length) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 6000);
    }

    // ---- PRODUCT DATA (3 products: Footwear, Accessories, Clothing with realistic Chrome Hearts style) ----
    const products = [
        { 
            id: 1, 
            name: "Chrome Hearts Leather Crusher Boots", 
            category: "FOOTWEAR",
            price: 1899, 
            originalPrice: 2799, 
            image: "data:image/jpeg;base64,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", 
            link: "https://www.chromehearts.com/footwear/crusher-boots",
            description: "Handcrafted leather boots with gothic silver hardware. Rugged sole, cross embossing, worn by rock icons worldwide."
        },
        { 
            id: 2, 
            name: "Chrome Hearts Cemetery Sterling Ring", 
            category: "ACCESSORIES",
            price: 1299, 
            originalPrice: 1999, 
            image: "data:image/jpeg;base64,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", 
            link: "https://www.chromehearts.com/accessories/cemetery-ring",
            description: ".925 sterling silver ring with cemetery cross engraving. A signature piece from the iconic collection."
        },
        { 
            id: 3, 
            name: "Chrome Hearts Gothic Cross Hoodie", 
            category: "CLOTHING",
            price: 1599, 
            originalPrice: 2499, 
            image: "data:image/jpeg;base64,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", 
            link: "https://www.chromehearts.com/clothing/cross-hoodie",
            description: "Premium cotton hoodie with embroidered cross patches, oversized fit, gothic streetwear essential."
        }
    ];

    const productGrid = document.getElementById('productGrid');
    function renderProducts() {
        productGrid.innerHTML = products.map(p => `
            <div class="product-card" data-id="${p.id}" data-name="${p.name.replace(/['"]/g, '&quot;')}" data-desc="${p.description.replace(/['"]/g, '&quot;')}">
                <div class="product-img"><img src="${p.image}" loading="lazy" alt="${p.name}"></div>
                <div class="product-category"><i class="fas ${p.category === 'FOOTWEAR' ? 'fa-shoe-prints' : (p.category === 'ACCESSORIES' ? 'fa-gem' : 'fa-tshirt')}"></i> ${p.category}</div>
                <div class="product-title">${p.name}</div>
                <div class="price">P ${p.price.toFixed(2)} <span style="text-decoration:line-through; font-size:0.9rem; color:#b28b7a;">P ${p.originalPrice.toFixed(2)}</span> <span class="discount-badge" style="background:#ffe0d0; border-radius:40px; font-size:0.7rem; padding:2px 8px;">SALE</span></div>
                <a href="${p.link}" target="_blank" class="product-link" onclick="event.stopPropagation();">View Product →</a>
                <button class="add-cart-btn" data-id="${p.id}"><i class="fas fa-cart-plus"></i> Add to cart</button>
            </div>
        `).join('');
        document.querySelectorAll('.add-cart-btn').forEach(btn => btn.addEventListener('click', (e) => { e.stopPropagation(); addToCart(parseInt(btn.dataset.id)); }));
        document.querySelectorAll('.product-card').forEach(card => card.addEventListener('click', (e) => { if(e.target.classList.contains('add-cart-btn') || e.target.tagName === 'A') return; showModal("✨ "+card.dataset.name, card.dataset.desc); }));
    }

    // Cart logic
    let cart = [];
    const cartCountSpan = document.getElementById('cartCount');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartItemsList = document.getElementById('cartItemsList');
    const cartTotalSpan = document.getElementById('cartTotal');
    const closeCartBtn = document.getElementById('closeCartBtn');
    const proceedCheckout = document.getElementById('proceedCheckoutBtn');

    function addToCart(id) { let p = products.find(p => p.id === id); let existing = cart.find(i => i.id === id); existing ? existing.quantity++ : cart.push({ id, name: p.name, price: p.price, quantity: 1 }); updateCartUI(); openCartDrawer(); }
    function updateCartUI() { cartCountSpan.innerText = cart.reduce((s,i)=>s+i.quantity,0); renderCartItems(); cartTotalSpan.innerText = `Total: P ${cart.reduce((s,i)=>s+(i.price*i.quantity),0).toFixed(2)}`; }
    function renderCartItems() { if(cart.length===0) { cartItemsList.innerHTML = '<div style="padding:2rem; text-align:center;">🖤 Your cart is empty</div>'; return; } cartItemsList.innerHTML = cart.map(i => `<div class="cart-item"><div><strong>${i.name}</strong><br>P ${i.price}</div><div class="cart-item-quantity"><button class="qty-dec" data-id="${i.id}">-</button><span>${i.quantity}</span><button class="qty-inc" data-id="${i.id}">+</button><button class="cart-remove" data-id="${i.id}"><i class="fas fa-trash-alt"></i></button></div></div>`).join(''); attachCartEvents(); }
    function attachCartEvents() { document.querySelectorAll('.qty-dec').forEach(b => b.addEventListener('click', () => { let id = parseInt(b.dataset.id); let ci = cart.find(c => c.id === id); if(ci) { ci.quantity>1 ? ci.quantity-- : cart = cart.filter(c=>c.id!==id); updateCartUI(); } })); document.querySelectorAll('.qty-inc').forEach(b => b.addEventListener('click', () => { let id = parseInt(b.dataset.id); let ci = cart.find(c => c.id === id); if(ci) ci.quantity++; updateCartUI(); })); document.querySelectorAll('.cart-remove').forEach(b => b.addEventListener('click', () => { cart = cart.filter(c => c.id !== parseInt(b.dataset.id)); updateCartUI(); })); }
    function openCartDrawer() { cartOverlay.style.display = 'flex'; renderCartItems(); }
    function closeCartDrawer() { cartOverlay.style.display = 'none'; }
    document.getElementById('cartIcon').addEventListener('click', openCartDrawer);
    closeCartBtn.addEventListener('click', closeCartDrawer);

    // Payment modal
    const paymentModal = document.getElementById('paymentModal');
    const paymentSummaryDiv = document.getElementById('paymentSummary');
    const confirmPayBtn = document.getElementById('confirmPayBtn');
    const closePayBtn = document.getElementById('closePayBtn');
    proceedCheckout.addEventListener('click', () => { if(cart.length===0) { alert("Your cart is empty."); return; } const total = cart.reduce((s,i)=>s+(i.price*i.quantity),0); paymentSummaryDiv.innerHTML = `<strong>ORDER SUMMARY</strong><br>${cart.map(i=>`${i.name} x${i.quantity} = P ${(i.price*i.quantity).toFixed(2)}`).join('<br>')}<hr><strong>TOTAL: P ${total.toFixed(2)}</strong>`; paymentModal.style.display = 'flex'; closeCartDrawer(); });
    closePayBtn.addEventListener('click', () => paymentModal.style.display = 'none');
    confirmPayBtn.addEventListener('click', () => { let name = document.getElementById('cardName').value.trim(); if(!name || !document.getElementById('cardNumber').value) { alert("Fill payment details."); return; } alert(`🖤 ORDER CONFIRMED, ${name}! Total ${cartTotalSpan.innerText} BWP. Thank you for embracing Chrome Hearts.`); cart = []; updateCartUI(); paymentModal.style.display = 'none'; document.getElementById('cardName').value = ''; document.getElementById('cardNumber').value = ''; document.getElementById('expiry').value = ''; document.getElementById('cvv').value = ''; document.getElementById('billingAddress').value = ''; });

    // Legal modals
    const legalModal = document.getElementById('legalModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalTextElem = document.getElementById('modalText');
    function showModal(title, text) { modalTitle.innerText = title; modalTextElem.innerText = text; legalModal.style.display = 'flex'; }
    document.querySelector('.close-modal-btn')?.addEventListener('click', () => legalModal.style.display = 'none');
    document.getElementById('copyrightBtn')?.addEventListener('click', () => showModal('COPYRIGHT', '© Chrome Hearts & BIDA25. All designs, trademarks and products are exclusive property of Chrome Hearts LLC. Unauthorized reproduction prohibited.'));
    document.getElementById('legalBtn')?.addEventListener('click', () => showModal('LEGAL', 'Terms of use: By using this site you agree to our policies. Chrome Hearts Botswana operates under license. All sales final for limited editions.'));
    document.getElementById('privacyBtn')?.addEventListener('click', () => showModal('PRIVACY', 'We respect your privacy. Data collected via contact form is used solely for inquiry responses. No third-party sharing.'));

    // Contact message
    document.getElementById('sendMsgBtn')?.addEventListener('click', () => { let n = document.getElementById('contactName').value; if(n) alert(`✨ Thank you ${n}, our gothic concierge will contact you soon.`); else alert("Please enter your name."); });

    // Search filter (filters products by name)
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if(!query) renderProducts();
        else {
            const filtered = products.filter(p => p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query));
            productGrid.innerHTML = filtered.map(p => `
                <div class="product-card" data-id="${p.id}" data-name="${p.name.replace(/['"]/g, '&quot;')}" data-desc="${p.description.replace(/['"]/g, '&quot;')}">
                    <div class="product-img"><img src="${p.image}" alt="${p.name}"></div>
                    <div class="product-category"><i class="fas ${p.category === 'FOOTWEAR' ? 'fa-shoe-prints' : (p.category === 'ACCESSORIES' ? 'fa-gem' : 'fa-tshirt')}"></i> ${p.category}</div>
                    <div class="product-title">${p.name}</div>
                    <div class="price">P ${p.price.toFixed(2)} <span style="text-decoration:line-through;">P ${p.originalPrice}</span> <span class="discount-badge">SALE</span></div>
                    <a href="${p.link}" target="_blank" class="product-link">View Product →</a>
                    <button class="add-cart-btn" data-id="${p.id}"><i class="fas fa-cart-plus"></i> Add to cart</button>
                </div>
            `).join('');
            document.querySelectorAll('.add-cart-btn').forEach(btn => btn.addEventListener('click', (e) => { e.stopPropagation(); addToCart(parseInt(btn.dataset.id)); }));
            document.querySelectorAll('.product-card').forEach(card => card.addEventListener('click', (e) => { if(e.target.classList.contains('add-cart-btn') || e.target.tagName === 'A') return; showModal(card.dataset.name, card.dataset.desc); }));
        }
    }
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') performSearch(); });

    // Initialize Map (Leaflet) for index page
    function initMap() {
        const mapContainer = document.getElementById('mapContainer');
        if(mapContainer) {
            const map = L.map('mapContainer').setView([-24.6282, 25.9231], 14);
            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', { attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>' }).addTo(map);
            L.marker([-24.6282, 25.9231]).addTo(map).bindPopup('<b>Chrome Hearts Botswana</b><br>Plot 179, Gaborone International Commerce Park').openPopup();
        }
    }
    setTimeout(initMap, 200);
    renderProducts();
    updateCartUI();
     // ======================= BACKGROUND SLIDESHOW =======================
    const slides = document.querySelectorAll('#bgSlideshow .bg-slide');
    let currentSlide = 0;
    if(slides.length) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5500);
    }

    // ======================= CART SYSTEM (localStorage based, cross-page sync) =======================
    let cart = [];

    function loadCart() {
        const stored = localStorage.getItem('chrome_cart');
        if(stored) {
            try { cart = JSON.parse(stored); } catch(e) { cart = []; }
        } else cart = [];
        updateCartUI();
    }
    function saveCart() {
        localStorage.setItem('chrome_cart', JSON.stringify(cart));
        updateCartUI();
    }
    function updateCartUI() {
        const count = cart.reduce((s,i)=>s+i.quantity,0);
        document.getElementById('cartCount').innerText = count;
        renderCartItems();
        const total = cart.reduce((s,i)=>s+(i.price*i.quantity),0);
        document.getElementById('cartTotal').innerText = `Total: P ${total.toFixed(2)}`;
    }
    function renderCartItems() {
        const container = document.getElementById('cartItemsList');
        if(!container) return;
        if(cart.length===0) { container.innerHTML = '<div style="padding:2rem; text-align:center;">🗝️ Your cart is empty</div>'; return; }
        container.innerHTML = cart.map(i => `
            <div class="cart-item">
                <div><strong>${i.name}</strong><br>P ${i.price}</div>
                <div class="cart-item-quantity">
                    <button class="qty-dec" data-id="${i.id}">-</button><span>${i.quantity}</span>
                    <button class="qty-inc" data-id="${i.id}">+</button>
                    <button class="cart-remove" data-id="${i.id}"><i class="fas fa-trash-alt"></i></button>
                </div>
            </div>
        `).join('');
        document.querySelectorAll('.qty-dec').forEach(btn => btn.addEventListener('click', () => { let id = parseInt(btn.dataset.id); let ci = cart.find(c => c.id === id); if(ci) { ci.quantity>1 ? ci.quantity-- : cart = cart.filter(c=>c.id!==id); saveCart(); } }));
        document.querySelectorAll('.qty-inc').forEach(btn => btn.addEventListener('click', () => { let id = parseInt(btn.dataset.id); let ci = cart.find(c => c.id === id); if(ci) { ci.quantity++; saveCart(); } }));
        document.querySelectorAll('.cart-remove').forEach(btn => btn.addEventListener('click', () => { let id = parseInt(btn.dataset.id); cart = cart.filter(c => c.id !== id); saveCart(); }));
    }
    function openCartDrawer() { document.getElementById('cartOverlay').style.display = 'flex'; renderCartItems(); }
    function closeCartDrawer() { document.getElementById('cartOverlay').style.display = 'none'; }
    document.getElementById('cartIcon')?.addEventListener('click', openCartDrawer);
    document.getElementById('closeCartBtn')?.addEventListener('click', closeCartDrawer);
    // Checkout & payment modal
    const paymentModal = document.getElementById('paymentModal');
    const proceedBtn = document.getElementById('proceedCheckoutBtn');
    const confirmPay = document.getElementById('confirmPayBtn');
    const closePay = document.getElementById('closePayBtn');
    proceedBtn?.addEventListener('click', () => {
        if(cart.length===0) { alert("Your cart is empty."); return; }
        const total = cart.reduce((s,i)=>s+(i.price*i.quantity),0);
        const summary = `<strong>ORDER SUMMARY</strong><br>${cart.map(i=>`${i.name} x${i.quantity} = P ${(i.price*i.quantity).toFixed(2)}`).join('<br>')}<hr><strong>TOTAL: P ${total.toFixed(2)}</strong>`;
        document.getElementById('paymentSummary').innerHTML = summary;
        paymentModal.style.display = 'flex';
        closeCartDrawer();
    });
    confirmPay?.addEventListener('click', () => {
        const name = document.getElementById('cardName').value.trim();
        if(!name || !document.getElementById('cardNumber').value.trim()) { alert("Please fill payment details."); return; }
        alert(`🖤 ORDER CONFIRMED, ${name}! Total ${cart.reduce((s,i)=>s+(i.price*i.quantity),0).toFixed(2)} BWP. Thank you for embracing Chrome Hearts.`);
        cart = []; saveCart(); paymentModal.style.display = 'none';
        document.getElementById('cardName').value = ''; document.getElementById('cardNumber').value = ''; document.getElementById('expiry').value = ''; document.getElementById('cvv').value = ''; document.getElementById('billingAddress').value = '';
    });
    closePay?.addEventListener('click', () => paymentModal.style.display = 'none');

    // ======================= LOCATION MAP (Leaflet) =======================
    function initMap() {
        const mapContainer = document.getElementById('locationMap');
        if(mapContainer) {
            const atelierCoords = [-24.6282, 25.9231]; // Gaborone International Commerce Park
            const map = L.map('locationMap').setView(atelierCoords, 15);
            L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> | Chrome Hearts Atelier'
            }).addTo(map);
            const customIcon = L.divIcon({ html: '<i class="fas fa-cross" style="font-size:28px; color:#bc5d3e; text-shadow:0 0 4px white;"></i>', iconSize: [28,28], className: 'custom-marker' });
            L.marker(atelierCoords, { icon: customIcon }).addTo(map)
                .bindPopup('<b>CHROME HEARTS BOTSWANA</b><br>Plot 179, Gaborone International Commerce Park<br><i>Private showroom, silver atelier</i>')
                .openPopup();
            // Add decorative circle
            L.circle(atelierCoords, { radius: 200, color: '#d87a5a', weight: 1, fillOpacity: 0.1 }).addTo(map);
        }
    }
    setTimeout(initMap, 300);

    // Google Maps directions
    document.getElementById('getDirectionsBtn')?.addEventListener('click', () => {
        const address = encodeURIComponent("Plot 179, Gaborone International Commerce Park, Gaborone, Botswana");
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, '_blank');
    });

    // ======================= SEARCH / MODALS / LEGAL =======================
    const searchInput = document.getElementById('globalSearchInput');
    const searchBtn = document.getElementById('globalSearchBtn');
    function handleGlobalSearch() {
        let q = searchInput.value.trim();
        showInfoModal("🔍 Ethereal Search", q ? `You searched for "${q}". A specialist will contact you soon.` : "Enter keywords like 'cross pendant, silver ring, hoodie'.");
    }
    searchBtn?.addEventListener('click', handleGlobalSearch);
    searchInput?.addEventListener('keypress', (e) => { if(e.key === 'Enter') handleGlobalSearch(); });

    const infoModal = document.getElementById('infoModal');
    const modalTitleSpan = document.getElementById('modalTitle');
    const modalTextSpan = document.getElementById('modalText');
    function showInfoModal(title, msg) {
        modalTitleSpan.innerText = title;
        modalTextSpan.innerText = msg;
        infoModal.style.display = 'flex';
    }
    document.querySelectorAll('.close-modal-btn').forEach(btn => btn.addEventListener('click', () => infoModal.style.display = 'none'));
    document.getElementById('copyrightBtn')?.addEventListener('click', () => showInfoModal('COPYRIGHT', '© Chrome Hearts LLC. All rights reserved. All designs and trademarks are property of Chrome Hearts.'));
    document.getElementById('legalBtn')?.addEventListener('click', () => showInfoModal('LEGAL', 'Terms of use: By accessing this site you agree to our policies. Disputes under Botswana law.'));
    document.getElementById('privacyBtn')?.addEventListener('click', () => showInfoModal('PRIVACY', 'Your data is never sold. Contact info used solely for concierge services. GDPR compliant.'));

    // load cart from localStorage on page load
    loadCart();
    // ---------- BACKGROUND SLIDESHOW ----------
    const slides = document.querySelectorAll('#bgSlideshow .bg-slide');
    let currentSlide = 0;
    if(slides.length) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 6000);
    }

    // ---------- FAKE USER DATABASE (localStorage) ----------
    function getUsers() { return JSON.parse(localStorage.getItem('chrome_users') || '[]'); }
    function saveUsers(users) { localStorage.setItem('chrome_users', JSON.stringify(users)); }

    // ---------- LOGIN / SIGNUP LOGIC ----------
    const loginFormDiv = document.getElementById('loginForm');
    const signupFormDiv = document.getElementById('signupForm');
    const showLoginBtn = document.getElementById('showLoginBtn');
    const showSignupBtn = document.getElementById('showSignupBtn');
    const doLogin = document.getElementById('doLogin');
    const doSignup = document.getElementById('doSignup');
    const authMessage = document.getElementById('authMessage');

    showLoginBtn.addEventListener('click', () => {
        showLoginBtn.classList.add('active');
        showSignupBtn.classList.remove('active');
        loginFormDiv.style.display = 'block';
        signupFormDiv.style.display = 'none';
        authMessage.innerHTML = '';
    });
    showSignupBtn.addEventListener('click', () => {
        showSignupBtn.classList.add('active');
        showLoginBtn.classList.remove('active');
        loginFormDiv.style.display = 'none';
        signupFormDiv.style.display = 'block';
        authMessage.innerHTML = '';
    });

    doSignup.addEventListener('click', () => {
        const name = document.getElementById('signupName').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const pwd = document.getElementById('signupPassword').value.trim();
        if(!name || !email || !pwd) {
            authMessage.innerHTML = '<span style="color:#b44e2c;">❌ Please fill all fields.</span>';
            return;
        }
        let users = getUsers();
        if(users.find(u => u.email === email)) {
            authMessage.innerHTML = '<span style="color:#b44e2c;">⚠️ User already exists. Please login.</span>';
            return;
        }
        users.push({ name, email, password: pwd });
        saveUsers(users);
        authMessage.innerHTML = '<span style="color:#2c6e2c;">✅ Account created! Please login now.</span>';
        // clear fields
        document.getElementById('signupName').value = '';
        document.getElementById('signupEmail').value = '';
        document.getElementById('signupPassword').value = '';
        // switch to login
        showLoginBtn.click();
    });

    doLogin.addEventListener('click', () => {
        const email = document.getElementById('loginEmail').value.trim();
        const pwd = document.getElementById('loginPassword').value.trim();
        const users = getUsers();
        const user = users.find(u => u.email === email && u.password === pwd);
        if(user) {
            authMessage.innerHTML = `<span style="color:#2c6e2c;">✨ Welcome back, ${user.name}! You are now logged into the Chrome Hearts atelier. ✨</span>`;
            // Optionally redirect or simulate logged-in state
        } else {
            authMessage.innerHTML = '<span style="color:#b44e2c;">❌ Invalid email or password. Please sign up first.</span>';
        }
    });

    // ---------- LANGUAGE SELECTION (with flags) ----------
    const langOptions = document.querySelectorAll('.lang-option');
    const selectedLangDisplay = document.getElementById('selectedLangDisplay');
    let currentLang = 'en';
    langOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            langOptions.forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            currentLang = opt.dataset.lang;
            let langName = opt.innerText.trim();
            selectedLangDisplay.innerText = `Selected: ${langName}`;
            // You could implement actual language change, but for demo we just store preference
            localStorage.setItem('preferred_lang', currentLang);
        });
    });
    // default English selected
    document.querySelector('.lang-option[data-lang="en"]').classList.add('selected');

    // ---------- COUNTRY SELECTION (all African countries with flags) ----------
    const africanCountries = [
        { name: "Botswana", code: "bw", flag: "https://flagcdn.com/bw.svg" },
        { name: "South Africa", code: "za", flag: "https://flagcdn.com/za.svg" },
        { name: "Nigeria", code: "ng", flag: "https://flagcdn.com/ng.svg" },
        { name: "Kenya", code: "ke", flag: "https://flagcdn.com/ke.svg" },
        { name: "Ghana", code: "gh", flag: "https://flagcdn.com/gh.svg" },
        { name: "Egypt", code: "eg", flag: "https://flagcdn.com/eg.svg" },
        { name: "Morocco", code: "ma", flag: "https://flagcdn.com/ma.svg" },
        { name: "Tanzania", code: "tz", flag: "https://flagcdn.com/tz.svg" },
        { name: "Uganda", code: "ug", flag: "https://flagcdn.com/ug.svg" },
        { name: "Zimbabwe", code: "zw", flag: "https://flagcdn.com/zw.svg" },
        { name: "Zambia", code: "zm", flag: "https://flagcdn.com/zm.svg" },
        { name: "Mozambique", code: "mz", flag: "https://flagcdn.com/mz.svg" },
        { name: "Angola", code: "ao", flag: "https://flagcdn.com/ao.svg" },
        { name: "Namibia", code: "na", flag: "https://flagcdn.com/na.svg" },
        { name: "Senegal", code: "sn", flag: "https://flagcdn.com/sn.svg" },
        { name: "Ivory Coast", code: "ci", flag: "https://flagcdn.com/ci.svg" },
        { name: "Cameroon", code: "cm", flag: "https://flagcdn.com/cm.svg" },
        { name: "Ethiopia", code: "et", flag: "https://flagcdn.com/et.svg" },
        { name: "Rwanda", code: "rw", flag: "https://flagcdn.com/rw.svg" },
        { name: "Sudan", code: "sd", flag: "https://flagcdn.com/sd.svg" },
        { name: "Algeria", code: "dz", flag: "https://flagcdn.com/dz.svg" },
        { name: "Tunisia", code: "tn", flag: "https://flagcdn.com/tn.svg" },
        { name: "Libya", code: "ly", flag: "https://flagcdn.com/ly.svg" },
        { name: "Malawi", code: "mw", flag: "https://flagcdn.com/mw.svg" },
        { name: "Mauritius", code: "mu", flag: "https://flagcdn.com/mu.svg" },
        { name: "Seychelles", code: "sc", flag: "https://flagcdn.com/sc.svg" }
    ];
    const countryListDiv = document.getElementById('countryList');
    const selectedCountryDisplay = document.getElementById('selectedCountryDisplay');
    let currentCountry = "Botswana";

    function renderCountryList() {
        countryListDiv.innerHTML = africanCountries.map(c => `
            <div class="country-option" data-country="${c.name}" data-code="${c.code}">
                <img src="${c.flag}" alt="${c.name}" style="width: 28px; height: 20px; object-fit: cover; border-radius: 4px;">
                <span>${c.name}</span>
            </div>
        `).join('');
        // add event listeners
        document.querySelectorAll('.country-option').forEach(opt => {
            opt.addEventListener('click', () => {
                document.querySelectorAll('.country-option').forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
                currentCountry = opt.dataset.country;
                selectedCountryDisplay.innerText = `Selected: ${currentCountry}`;
                localStorage.setItem('user_country', currentCountry);
            });
        });
        // highlight default Botswana
        const defaultCountry = document.querySelector('.country-option[data-country="Botswana"]');
        if(defaultCountry) defaultCountry.classList.add('selected');
    }
    renderCountryList();

    // ---------- EXPANDABLE TERMS & PRIVACY ----------
    const termsHeader = document.getElementById('termsHeader');
    const privacyHeader = document.getElementById('privacyHeader');
    const termsContent = document.getElementById('termsContent');
    const privacyContent = document.getElementById('privacyContent');

    function toggleSection(header, content) {
        header.addEventListener('click', () => {
            content.classList.toggle('open');
            const icon = header.querySelector('.fa-chevron-down');
            if(icon) {
                if(content.classList.contains('open')) {
                    icon.style.transform = 'rotate(180deg)';
                } else {
                    icon.style.transform = 'rotate(0deg)';
                }
            }
        });
    }
    toggleSection(termsHeader, termsContent);
    toggleSection(privacyHeader, privacyContent);
    // preload icons
    const downIcons = document.querySelectorAll('.legal-header .fa-chevron-down');
    downIcons.forEach(icon => { icon.style.transition = 'transform 0.3s'; });

    // Load saved preferences from localStorage if any
    const savedLang = localStorage.getItem('preferred_lang');
    if(savedLang) {
        const savedLangElem = document.querySelector(`.lang-option[data-lang="${savedLang}"]`);
        if(savedLangElem) savedLangElem.click();
    }
    const savedCountry = localStorage.getItem('user_country');
    if(savedCountry) {
        const savedCountryElem = document.querySelector(`.country-option[data-country="${savedCountry}"]`);
        if(savedCountryElem) savedCountryElem.click();
    }