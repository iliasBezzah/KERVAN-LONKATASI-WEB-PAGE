// Kervan Lokantası - QR Code Digital Menu Application Logic

let currentLang = localStorage.getItem('kervan_lang') || 'tr';
let currentTheme = localStorage.getItem('kervan_theme') || 'light';
let activeCategory = 'all';
let activeFilter = 'all';
let searchQuery = '';
let cart = JSON.parse(localStorage.getItem('kervan_cart')) || [];
let currentModalItem = null;
let currentModalQty = 1;
let isProgrammaticScroll = false;

// Translations Dictionary
const I18N = {
  tr: {
    table: "Masa",
    searchPlaceholder: "Yemek veya çorba ara...",
    all: "Tümü",
    allCategories: "Tüm Kategoriler",
    popular: "⭐ Çok Satanlar",
    meat: "🥩 Etli",
    chicken: "🍗 Tavuk",
    vegetarian: "🌱 Vejetaryen",
    special: "👑 Safranbolu Özel",
    addToOrder: "Siparişe Ekle",
    orderTray: "Sipariş Listem",
    total: "Toplam",
    viewOrder: "Siparişi Gör",
    clearTray: "Temizle",
    callWaiter: "Garson Çağır",
    waiterCalled: "🔔 Garsonunuz Masanıza Yönlendirildi!",
    showToWaiter: "Garsona Göster",
    sendWhatsapp: "WhatsApp ile İlet",
    emptyCart: "Sipariş listeniz henüz boş.",
    emptySearch: "Aramanıza uygun lezzet bulunamadı.",
    allergens: "Alerjenler",
    calories: "Kalori",
    qrCodeGenerator: "Masa QR Kodu Üret",
    printTableCard: "Masa Standı Yazdır",
    callRest: "Ara & Rezervasyon",
    hoursTitle: "Çalışma Saatleri",
    addressTitle: "Adresimiz",
    taxNote: "Fiyatlarımıza KDV dahildir • Fiyat Güncelleme Tarihi: 17.08.2026",
    close: "Kapat",
    orderSummary: "Masa Sipariş Özeti",
    itemAdded: "Siparişe eklendi"
  },
  en: {
    table: "Table",
    searchPlaceholder: "Search dishes, soups...",
    all: "All",
    allCategories: "All Categories",
    popular: "⭐ Popular",
    meat: "🥩 Meat",
    chicken: "🍗 Chicken",
    vegetarian: "🌱 Vegetarian",
    special: "👑 Regional Specialty",
    addToOrder: "Add to Order",
    orderTray: "My Order Tray",
    total: "Total",
    viewOrder: "View Order",
    clearTray: "Clear",
    callWaiter: "Call Waiter",
    waiterCalled: "🔔 Waiter has been notified for your table!",
    showToWaiter: "Show to Waiter",
    sendWhatsapp: "Send via WhatsApp",
    emptyCart: "Your order tray is currently empty.",
    emptySearch: "No dishes found matching your search.",
    allergens: "Allergens",
    calories: "Calories",
    qrCodeGenerator: "Generate Table QR",
    printTableCard: "Print Table Stand",
    callRest: "Call Restaurant",
    hoursTitle: "Working Hours",
    addressTitle: "Our Address",
    taxNote: "All prices include VAT • Price Update Date: 17.08.2026",
    close: "Close",
    orderSummary: "Table Order Summary",
    itemAdded: "Added to order"
  }
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(currentTheme);
  renderCategoryNav();
  renderFilterPills();
  renderMenu();
  updateCartUI();
  setupEventListeners();
  setupSearch();
  setupScrollSpy();
});

// Theme Management
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('kervan_theme', theme);
  const themeBtn = document.getElementById('themeToggleBtn');
  if (themeBtn) {
    themeBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

// Switch Language
function toggleLanguage() {
  currentLang = currentLang === 'tr' ? 'en' : 'tr';
  localStorage.setItem('kervan_lang', currentLang);
  document.getElementById('langToggleBtn').textContent = currentLang === 'tr' ? 'EN' : 'TR';
  
  renderCategoryNav();
  renderFilterPills();
  renderMenu();
  updateCartUI();
  updateStaticTexts();
}

function updateStaticTexts() {
  const heroTagline = document.getElementById('heroTagline');
  if (heroTagline) heroTagline.textContent = RESTAURANT_CONFIG.tagline[currentLang];

  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.placeholder = I18N[currentLang].searchPlaceholder;

  const taxNoteText = document.getElementById('taxNoteText');
  if (taxNoteText) taxNoteText.textContent = I18N[currentLang].taxNote;

  const cartDrawerTitle = document.getElementById('cartDrawerTitle');
  if (cartDrawerTitle) cartDrawerTitle.textContent = I18N[currentLang].orderTray;

  const callWaiterText = document.getElementById('callWaiterText');
  if (callWaiterText) callWaiterText.textContent = I18N[currentLang].callWaiter;

  const hoursTitleText = document.getElementById('hoursTitleText');
  if (hoursTitleText) hoursTitleText.textContent = I18N[currentLang].hoursTitle;

  const hoursValText = document.getElementById('hoursValText');
  if (hoursValText) hoursValText.textContent = RESTAURANT_CONFIG.workingHours[currentLang];
}

// Render Sticky Category Navigation Bar
function renderCategoryNav() {
  const container = document.getElementById('categoryNavScroll');
  if (!container) return;

  let html = `
    <button class="cat-btn ${activeCategory === 'all' ? 'active' : ''}" data-cat="all" onclick="selectCategory('all')">
      ✨ ${I18N[currentLang].all}
    </button>
  `;

  MENU_CATEGORIES.forEach(cat => {
    const isActive = activeCategory === cat.id ? 'active' : '';
    html += `
      <button class="cat-btn ${isActive}" data-cat="${cat.id}" onclick="selectCategory('${cat.id}')">
        ${cat.icon} ${cat.name[currentLang]}
      </button>
    `;
  });

  container.innerHTML = html;
}

// Render Dietary / Tag Filters
function renderFilterPills() {
  const container = document.getElementById('filterPillsBar');
  if (!container) return;

  const filters = [
    { id: 'all', label: I18N[currentLang].all },
    { id: 'popular', label: I18N[currentLang].popular },
    { id: 'special', label: I18N[currentLang].special },
    { id: 'meat', label: I18N[currentLang].meat },
    { id: 'chicken', label: I18N[currentLang].chicken },
    { id: 'vegetarian', label: I18N[currentLang].vegetarian }
  ];

  let html = '';
  filters.forEach(f => {
    const isActive = activeFilter === f.id ? 'active' : '';
    html += `
      <button class="filter-pill ${isActive}" onclick="selectFilter('${f.id}')">
        ${f.label}
      </button>
    `;
  });

  container.innerHTML = html;
}

// Handle Category Selection with Smooth Movement
function selectCategory(catId) {
  activeCategory = catId;
  updateActiveCategoryButton(catId);

  // If user was searching or filtering, clear to show all categories
  if (searchQuery) {
    searchQuery = '';
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    const searchClear = document.getElementById('searchClear');
    if (searchClear) searchClear.style.display = 'none';
    renderMenu();
  }

  isProgrammaticScroll = true;

  if (catId === 'all') {
    const menuContainer = document.getElementById('menuContainer');
    if (menuContainer) {
      const yOffset = -140;
      const y = menuContainer.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  } else {
    const section = document.getElementById(`section-${catId}`);
    if (section) {
      const yOffset = -140; // Height of sticky top bar + category bar
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  setTimeout(() => {
    isProgrammaticScroll = false;
  }, 700);
}

function updateActiveCategoryButton(catId) {
  document.querySelectorAll('.cat-btn').forEach(btn => {
    if (btn.getAttribute('data-cat') === catId) {
      btn.classList.add('active');
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    } else {
      btn.classList.remove('active');
    }
  });
}

function selectFilter(filterId) {
  activeFilter = filterId;
  renderFilterPills();
  renderMenu();
}

// Render Menu Items
function renderMenu() {
  const container = document.getElementById('menuContainer');
  if (!container) return;

  // If searching or using dietary filter
  if (searchQuery || activeFilter !== 'all') {
    let filteredItems = MENU_ITEMS.filter(item => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const nameMatch = (item.name.tr + " " + item.name.en).toLowerCase().includes(q);
        const descMatch = (item.description.tr + " " + item.description.en).toLowerCase().includes(q);
        if (!nameMatch && !descMatch) return false;
      }
      if (activeFilter !== 'all') {
        if (!item.tags.includes(activeFilter)) return false;
      }
      return true;
    });

    if (filteredItems.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <p><strong>${I18N[currentLang].emptySearch}</strong></p>
        </div>
      `;
      return;
    }

    let html = '<div class="category-section"><div class="menu-grid">';
    filteredItems.forEach(item => {
      html += createItemCardHTML(item);
    });
    html += '</div></div>';
    container.innerHTML = html;
    return;
  }

  // Full Menu rendering grouped by Category with explicit IDs for smooth navigation
  let fullHTML = '';
  MENU_CATEGORIES.forEach(cat => {
    const catItems = MENU_ITEMS.filter(item => item.categoryId === cat.id);
    if (catItems.length === 0) return;

    fullHTML += `
      <section class="category-section" id="section-${cat.id}">
        <div class="category-header">
          <div class="category-title-group">
            <span class="cat-icon-lg">${cat.icon}</span>
            <h2 class="category-title">${cat.name[currentLang]}</h2>
          </div>
          <span class="category-count">${catItems.length}</span>
        </div>
        <p class="category-desc">${cat.description[currentLang]}</p>
        <div class="menu-grid">
          ${catItems.map(item => createItemCardHTML(item)).join('')}
        </div>
      </section>
    `;
  });

  container.innerHTML = fullHTML;
}

// Automatic ScrollSpy: updates active category tab while scrolling
function setupScrollSpy() {
  window.addEventListener('scroll', () => {
    if (isProgrammaticScroll || searchQuery || activeFilter !== 'all') return;

    const sections = MENU_CATEGORIES.map(cat => document.getElementById(`section-${cat.id}`)).filter(Boolean);
    const scrollPosition = window.pageYOffset + 180;

    let currentSectionId = 'all';

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section && section.offsetTop <= scrollPosition) {
        currentSectionId = section.id.replace('section-', '');
        break;
      }
    }

    if (window.pageYOffset < 150) {
      currentSectionId = 'all';
    }

    if (activeCategory !== currentSectionId) {
      activeCategory = currentSectionId;
      updateActiveCategoryButton(currentSectionId);
    }
  }, { passive: true });
}

function createItemCardHTML(item) {
  let badgeHTML = '';
  if (item.tags.includes('special')) {
    badgeHTML = `<span class="card-badge" style="background:#fee2e2; color:#991b1b;">👑 Safranbolu</span>`;
  } else if (item.tags.includes('popular')) {
    badgeHTML = `<span class="card-badge">⭐ Çok Satan</span>`;
  }

  return `
    <div class="menu-card" onclick="openItemModal('${item.id}')">
      <div class="card-content">
        <div class="card-top-info">
          <div class="card-header-row">
            <h3 class="card-title">${item.name[currentLang]}</h3>
            ${badgeHTML}
          </div>
          <p class="card-desc">${item.description[currentLang]}</p>
        </div>
        <div class="card-footer-row">
          <span class="card-price">${item.price} ${RESTAURANT_CONFIG.currency}</span>
          <button class="add-btn" onclick="event.stopPropagation(); quickAddToCart('${item.id}')" title="Siparişe Ekle">
            +
          </button>
        </div>
      </div>
    </div>
  `;
}

// Item Modal Dialog
function openItemModal(itemId) {
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  currentModalItem = item;
  currentModalQty = 1;

  document.getElementById('modalItemTitle').textContent = item.name[currentLang];
  document.getElementById('modalItemPrice').textContent = `${item.price} ${RESTAURANT_CONFIG.currency}`;
  document.getElementById('modalItemDesc').textContent = item.description[currentLang];
  document.getElementById('modalQtyVal').textContent = currentModalQty;
  document.getElementById('modalAddBtnText').textContent = `${I18N[currentLang].addToOrder} • ${item.price} ${RESTAURANT_CONFIG.currency}`;

  let tagsHTML = `
    <span class="meta-tag">🔥 ${item.calories}</span>
  `;
  if (item.tags.includes('vegetarian')) tagsHTML += `<span class="meta-tag" style="background:#dcfce7; color:#166534;">🌱 ${currentLang === 'tr' ? 'Vejetaryen' : 'Vegetarian'}</span>`;
  if (item.tags.includes('special')) tagsHTML += `<span class="meta-tag" style="background:#fef3c7; color:#92400e;">👑 ${currentLang === 'tr' ? 'Safranbolu Özel' : 'Regional Special'}</span>`;
  
  document.getElementById('modalMetaTags').innerHTML = tagsHTML;

  const modal = document.getElementById('itemModal');
  modal.classList.add('active');
}

function closeItemModal() {
  document.getElementById('itemModal').classList.remove('active');
  currentModalItem = null;
}

function changeModalQty(delta) {
  currentModalQty = Math.max(1, currentModalQty + delta);
  document.getElementById('modalQtyVal').textContent = currentModalQty;
  if (currentModalItem) {
    const total = currentModalItem.price * currentModalQty;
    document.getElementById('modalAddBtnText').textContent = `${I18N[currentLang].addToOrder} • ${total} ${RESTAURANT_CONFIG.currency}`;
  }
}

function confirmModalAddToCart() {
  if (!currentModalItem) return;
  addToCart(currentModalItem.id, currentModalQty);
  closeItemModal();
  showToast(`✅ ${currentModalItem.name[currentLang]} ${I18N[currentLang].itemAdded}`);
}

function quickAddToCart(itemId) {
  addToCart(itemId, 1);
  const item = MENU_ITEMS.find(i => i.id === itemId);
  if (item) {
    showToast(`✅ ${item.name[currentLang]} ${I18N[currentLang].itemAdded}`);
  }
}

// Cart & Order Drawer Logic
function addToCart(itemId, qty = 1) {
  const existing = cart.find(c => c.id === itemId);
  if (existing) {
    existing.count += qty;
  } else {
    cart.push({ id: itemId, count: qty });
  }
  saveCart();
  updateCartUI();
}

function updateCartQty(itemId, delta) {
  const itemIndex = cart.findIndex(c => c.id === itemId);
  if (itemIndex === -1) return;

  cart[itemIndex].count += delta;
  if (cart[itemIndex].count <= 0) {
    cart.splice(itemIndex, 1);
  }
  saveCart();
  updateCartUI();
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
  toggleCartDrawer(false);
}

function saveCart() {
  localStorage.setItem('kervan_cart', JSON.stringify(cart));
}

function calculateCartTotals() {
  let totalCount = 0;
  let totalPrice = 0;
  cart.forEach(c => {
    const item = MENU_ITEMS.find(i => i.id === c.id);
    if (item) {
      totalCount += c.count;
      totalPrice += item.price * c.count;
    }
  });
  return { totalCount, totalPrice };
}

function updateCartUI() {
  const { totalCount, totalPrice } = calculateCartTotals();
  const bottomBar = document.getElementById('bottomOrderBar');

  if (totalCount > 0) {
    bottomBar.style.display = 'block';
    document.getElementById('bottomBarBadge').textContent = totalCount;
    document.getElementById('bottomBarTotal').textContent = `${totalPrice} ${RESTAURANT_CONFIG.currency}`;
    document.getElementById('bottomBarTitle').textContent = I18N[currentLang].orderTray;
    document.getElementById('bottomBarBtnText').textContent = I18N[currentLang].viewOrder;
  } else {
    bottomBar.style.display = 'none';
  }

  const cartList = document.getElementById('cartItemsList');
  if (cartList) {
    if (cart.length === 0) {
      cartList.innerHTML = `<p style="text-align:center; padding:20px; color:var(--text-muted);">${I18N[currentLang].emptyCart}</p>`;
      document.getElementById('cartDrawerTotal').textContent = `0 ${RESTAURANT_CONFIG.currency}`;
    } else {
      let html = '';
      cart.forEach(c => {
        const item = MENU_ITEMS.find(i => i.id === c.id);
        if (!item) return;
        const lineTotal = item.price * c.count;
        html += `
          <div class="cart-item">
            <div class="cart-item-info">
              <div class="cart-item-name">${item.name[currentLang]}</div>
              <div class="cart-item-unit-price">${item.price} ${RESTAURANT_CONFIG.currency} × ${c.count}</div>
            </div>
            <div class="cart-item-actions">
              <button class="qty-btn" style="width:28px;height:28px;font-size:1rem;" onclick="updateCartQty('${item.id}', -1)">-</button>
              <span style="font-weight:700; width:16px; text-align:center;">${c.count}</span>
              <button class="qty-btn" style="width:28px;height:28px;font-size:1rem;" onclick="updateCartQty('${item.id}', 1)">+</button>
              <span class="cart-item-total">${lineTotal} ₺</span>
            </div>
          </div>
        `;
      });
      cartList.innerHTML = html;
      document.getElementById('cartDrawerTotal').textContent = `${totalPrice} ${RESTAURANT_CONFIG.currency}`;
    }
  }
}

function toggleCartDrawer(show) {
  const drawer = document.getElementById('cartDrawerModal');
  if (show === undefined) {
    drawer.classList.toggle('active');
  } else if (show) {
    drawer.classList.add('active');
  } else {
    drawer.classList.remove('active');
  }
}

// Show Fullscreen Waiter Note Mode
function showWaiterMode() {
  const { totalCount, totalPrice } = calculateCartTotals();
  if (totalCount === 0) return;

  let orderText = `📋 *KERVAN LOKANTASI SİPARİŞİ*\n--------------------------\n`;
  cart.forEach(c => {
    const item = MENU_ITEMS.find(i => i.id === c.id);
    if (item) {
      orderText += `• ${c.count}x ${item.name.tr} (${item.price * c.count} ₺)\n`;
    }
  });
  orderText += `--------------------------\n💰 *TOPLAM HESAP: ${totalPrice} ₺*`;

  alert(orderText);
}

function sendOrderViaWhatsApp() {
  const { totalCount, totalPrice } = calculateCartTotals();
  if (totalCount === 0) return;

  let msg = `Merhaba Kervan Lokantası, siparişimiz:\n\n`;
  cart.forEach(c => {
    const item = MENU_ITEMS.find(i => i.id === c.id);
    if (item) {
      msg += `• ${c.count} adet ${item.name.tr} (${item.price * c.count} TL)\n`;
    }
  });
  msg += `\nToplam Tutar: ${totalPrice} TL`;

  const waUrl = `https://wa.me/${RESTAURANT_CONFIG.phoneClean}?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
}

// Call Waiter Interaction
function callWaiter() {
  showToast(I18N[currentLang].waiterCalled);
}

function showToast(msg) {
  const toast = document.getElementById('toastMsg');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// Search Setup
function setupSearch() {
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    searchClear.style.display = searchQuery ? 'block' : 'none';
    renderMenu();
  });

  searchClear.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClear.style.display = 'none';
    renderMenu();
  });
}

// QR Code Generator Modal
function openQRModal() {
  const qrModal = document.getElementById('qrModal');
  qrModal.classList.add('active');
  generateTableQR();
}

function closeQRModal() {
  document.getElementById('qrModal').classList.remove('active');
}

function generateTableQR() {
  const inputTable = document.getElementById('qrTableInput')?.value || '1';
  const qrContainer = document.getElementById('qrCanvasContainer');
  if (!qrContainer) return;
  qrContainer.innerHTML = '';

  let baseUrl = document.getElementById('qrCustomUrlInput')?.value?.trim();
  if (!baseUrl) {
    baseUrl = window.location.href.split('?')[0];
  }
  
  const separator = baseUrl.includes('?') ? '&' : '?';
  const targetUrl = `${baseUrl}${separator}table=${inputTable}`;

  const qrImg = document.createElement('img');
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(targetUrl)}`;
  qrImg.alt = `Masa ${inputTable} QR Code`;
  qrImg.style.width = "180px";
  qrImg.style.height = "180px";
  qrImg.style.borderRadius = "8px";
  qrContainer.appendChild(qrImg);

  const qrTargetUrl = document.getElementById('qrTargetUrl');
  if (qrTargetUrl) qrTargetUrl.textContent = targetUrl;
}

function setupEventListeners() {
  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  });
}
