/**
 * Toy Town - Main Application Logic
 * Brand Colors: #fed41e (Sunny Yellow) & #ec4d2d (Poppy Red)
 * Prices in INR (Indian Rupee - MRP ₹)
 */

// ---------------- 20 TOYS CATALOG DATA (PRICED IN INR / MRP) ----------------
const TOYS_DATA = [
  // 1. Toy Car 🚗
  {
    id: "toy-1",
    name: "Toy Car 🚗",
    category: "vehicles",
    categoryLabel: "Vehicles & Wheels",
    price: "₹349",
    age: "Ages 3+",
    rating: 4.9,
    reviews: 95,
    inStock: true,
    stockText: "Best Seller",
    img: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?auto=format&fit=crop&w=600&q=80",
    desc: "A sleek, die-cast speed racer with smooth-rolling rubber wheels, vibrant metallic finish, and opening doors. Perfect for indoor zooming and ramp racing!",
    features: [
      "Heavy-duty die-cast metal body with rounded edges",
      "Pull-back-and-go friction motor mechanism",
      "Non-toxic chip-resistant paint finish",
      "Compatible with standard wooden and plastic race tracks"
    ]
  },

  // 2. Remote-Control Car
  {
    id: "toy-2",
    name: "Remote-Control Car",
    category: "vehicles",
    categoryLabel: "Vehicles & Wheels",
    price: "₹1,499",
    age: "Ages 6+",
    rating: 5.0,
    reviews: 142,
    inStock: true,
    stockText: "In Stock",
    img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80",
    desc: "High-octane 2.4GHz rechargeable RC racer equipped with shock-absorbing suspension, drift tires, and ergonomic dual-stick controller.",
    features: [
      "2.4GHz interference-free frequency for multiplayer racing",
      "Up to 25 km/h top speed with responsive steering",
      "USB rechargeable lithium battery included (35 min playtime)",
      "LED headlights for thrilling night races"
    ]
  },

  // 3. Toy Bus
  {
    id: "toy-3",
    name: "Toy Bus",
    category: "vehicles",
    categoryLabel: "Vehicles & Wheels",
    price: "₹499",
    age: "Ages 3+",
    rating: 4.8,
    reviews: 68,
    inStock: true,
    stockText: "In Stock",
    img: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=600&q=80",
    desc: "Iconic bright yellow city transit bus with functional folding swing doors, passenger seats, and rolling wheels. Encourages social storytelling!",
    features: [
      "Working door lever to open and close side doors",
      "Realistic interior seating for small figures",
      "Durable drop-resistant ABS polymer construct",
      "Friction-powered forward drive"
    ]
  },

  // 4. Toy Truck
  {
    id: "toy-4",
    name: "Toy Truck",
    category: "vehicles",
    categoryLabel: "Vehicles & Wheels",
    price: "₹599",
    age: "Ages 2+",
    rating: 4.9,
    reviews: 110,
    inStock: true,
    stockText: "Popular Pick",
    img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80",
    desc: "A rugged, heavy-duty hauling truck with a tilting dump bed, deep-tread tires, and sturdy cab. Ready for backyard sandbox excavation missions!",
    features: [
      "Movable dump bed with easy-pour lever",
      "Oversized chunky tires that glide through sand and carpets",
      "BPA, PVC, and phthalate-free child-safe plastics",
      "Easy to rinse and dishwasher-safe clean"
    ]
  },

  // 5. Toy Train 🚂
  {
    id: "toy-5",
    name: "Toy Train 🚂",
    category: "vehicles",
    categoryLabel: "Vehicles & Wheels",
    price: "₹1,199",
    age: "Ages 3+",
    rating: 5.0,
    reviews: 124,
    inStock: true,
    stockText: "Staff Favorite",
    img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=600&q=80",
    desc: "Classic magnetic locomotive engine with passenger carriage and coal tender. Smooth polished natural wood and vibrant primary colors bring the railway alive.",
    features: [
      "Magnetic coupling system connects front & back effortlessly",
      "Solid beechwood body with non-toxic water-based color",
      "Universal fit for all leading wooden train track sets",
      "Includes miniature wooden train conductor figurine"
    ]
  },

  // 6. Toy Helicopter
  {
    id: "toy-6",
    name: "Toy Helicopter",
    category: "vehicles",
    categoryLabel: "Vehicles & Wheels",
    price: "₹899",
    age: "Ages 4+",
    rating: 4.7,
    reviews: 53,
    inStock: true,
    stockText: "In Stock",
    img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80",
    desc: "Sky patrol rescue helicopter with spinning main and tail rotors, lowering rescue winch basket, and slide-open cockpit door.",
    features: [
      "Manual push-button rotor spin mechanism",
      "Functional rescue basket with winding cable hook",
      "Lightweight impact-resistant aerospace-grade plastic",
      "Fun sound effects and emergency flash beacons"
    ]
  },

  // 7. Toy Airplane ✈️
  {
    id: "toy-7",
    name: "Toy Airplane ✈️",
    category: "vehicles",
    categoryLabel: "Vehicles & Wheels",
    price: "₹699",
    age: "Ages 3+",
    rating: 4.8,
    reviews: 77,
    inStock: true,
    stockText: "In Stock",
    img: "images/toy-airplane.jpg",
    desc: "Aerobus high-speed RC airliner with wireless remote controller, brilliant LED flashing lights, realistic jet engines, and smooth rolling ground action!",
    features: [
      "Comes with wireless handheld dual-lever remote controller",
      "Vibrant multi-color flashing fuselage and wing LED lights",
      "Sturdy drop-resistant aircraft body with smooth rolling wheels",
      "Includes full-color display gift box packaging"
    ]
  },

  // 8. Toy Motorcycle
  {
    id: "toy-8",
    name: "Toy Motorcycle",
    category: "vehicles",
    categoryLabel: "Vehicles & Wheels",
    price: "₹449",
    age: "Ages 3+",
    rating: 4.6,
    reviews: 49,
    inStock: true,
    stockText: "In Stock",
    img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=600&q=80",
    desc: "Sporty, aerodynamic miniature street bike with steerable handlebars, working kickstand, and realistic exhaust and engine detailing.",
    features: [
      "Working handlebar steering and spring rear suspension",
      "Fold-down parking kickstand for bedroom shelf display",
      "Grip rubber racing compound tires",
      "1:18 scale replica with high-gloss metallic finish"
    ]
  },

  // 9. Toy Tractor
  {
    id: "toy-9",
    name: "Toy Tractor",
    category: "vehicles",
    categoryLabel: "Vehicles & Wheels",
    price: "₹549",
    age: "Ages 2+",
    rating: 4.9,
    reviews: 63,
    inStock: true,
    stockText: "In Stock",
    img: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=600&q=80",
    desc: "Country farm tractor with giant treaded rear wheels, front loader bucket, and detachable harvest wagon trailer for carrying blocks and small toys.",
    features: [
      "Front scoop tilts and locks at multiple angles",
      "Detachable utility trailer hitch",
      "Heavy-duty construction made for mud, grass, and sandbox play",
      "Ergonomic handle designed for toddler palms"
    ]
  },

  // 10. Toy Boat
  {
    id: "toy-10",
    name: "Toy Boat",
    category: "vehicles",
    categoryLabel: "Vehicles & Wheels",
    price: "₹399",
    age: "Ages 1+",
    rating: 4.8,
    reviews: 82,
    inStock: true,
    stockText: "Water Safe",
    img: "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&w=600&q=80",
    desc: "Floatable seaworthy bath and pool boat with water scoop cabin, pouring funnel, and spinning paddle wheel. Turns every bath into a nautical adventure!",
    features: [
      "100% airtight buoyant hull (guaranteed not to sink)",
      "Mold-resistant open drainage design for instant drying",
      "Removable captain figurine included",
      "Safe in bubble baths, splash pools, and beach waves"
    ]
  },

  // 11. Doll
  {
    id: "toy-11",
    name: "Doll",
    category: "dolls",
    categoryLabel: "Dolls & Playhouses",
    price: "₹799",
    age: "Ages 2+",
    rating: 4.9,
    reviews: 91,
    inStock: true,
    stockText: "In Stock",
    img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=600&q=80",
    desc: "A gentle, huggable soft-bodied baby doll with realistic blinking sleeping eyes, sweet knitted overalls, and a removable pacifier.",
    features: [
      "Soft cuddly plush body with supple vinyl head and limbs",
      "Eyes close naturally when laid down for bedtime",
      "Machine washable removable clothing set",
      "Gentle baby powder scent (hypoallergenic)"
    ]
  },

  // 12. Barbie-style Doll
  {
    id: "toy-12",
    name: "Barbie-style Doll",
    category: "dolls",
    categoryLabel: "Dolls & Playhouses",
    price: "₹999",
    age: "Ages 4+",
    rating: 4.8,
    reviews: 115,
    inStock: true,
    stockText: "Top Pick",
    img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
    desc: "Glamorous fashionista doll featuring brushable silky hair, stylish mix-and-match runway outfits, chic footwear, and miniature handbag accessories.",
    features: [
      "11 articulated poseable joints (knees, elbows, wrists)",
      "Extra outfit change and two pairs of matching shoes included",
      "Premium silky rooted hair that can be braided and styled",
      "Comes with miniature hairbrush and sunglasses"
    ]
  },

  // 13. Doll House
  {
    id: "toy-13",
    name: "Doll House",
    category: "dolls",
    categoryLabel: "Dolls & Playhouses",
    price: "₹2,999",
    age: "Ages 3+",
    rating: 5.0,
    reviews: 78,
    inStock: false,
    stockText: "Only 2 Left",
    img: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80",
    desc: "A magnificent 3-story wooden townhouse with 5 decorated rooms, open balcony terrace, working elevator glider, and 15 wooden miniature furniture pieces.",
    features: [
      "Heirloom sturdy FSC-certified solid wood structure",
      "Includes 15 hand-painted furniture items (bed, sofa, tub, table)",
      "Sliding manual elevator connects ground to top floor",
      "Spacious open-front design allows multiple kids to play together"
    ]
  },

  // 14. Teddy Bear 🧸
  {
    id: "toy-14",
    name: "Teddy Bear 🧸",
    category: "plush",
    categoryLabel: "Plush & Soft Toys",
    price: "₹699",
    age: "Ages 0+",
    rating: 5.0,
    reviews: 160,
    inStock: true,
    stockText: "Customer Favorite",
    img: "https://images.unsplash.com/photo-1559454403-b8fb88521f11?auto=format&fit=crop&w=600&q=80",
    desc: "The quintessential childhood companion. Wonderfully fluffy, stitched with heartfelt care, embroidered eyes for infant safety, and a silky satin neck ribbon.",
    features: [
      "100% hypoallergenic cloud-soft plush fibers",
      "Securely embroidered facial features (zero loose choke hazards)",
      "Machine washable on cold gentle cycle",
      "Includes personalized adoption tag with date of birth"
    ]
  },

  // 15. Soft Animal Toys
  {
    id: "toy-15",
    name: "Soft Animal Toys",
    category: "plush",
    categoryLabel: "Plush & Soft Toys",
    price: "₹499",
    age: "Ages 0+",
    rating: 4.8,
    reviews: 84,
    inStock: true,
    stockText: "In Stock",
    img: "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=600&q=80",
    desc: "An adorable squad of huggable wild animal friends (bunny, puppy, elephant, and kitten) with ultra-plush velvety fur and gentle rattle bell chimes.",
    features: [
      "Internal sensory crinkle ears and soft chime bell",
      "Compact travel size perfect for stroller and car seat rides",
      "Velvet-soft textures stimulate tactile development",
      "Safe from birth (newborn certified)"
    ]
  },

  // 16. Toy Kitchen Set
  {
    id: "toy-16",
    name: "Toy Kitchen Set",
    category: "pretend",
    categoryLabel: "Pretend Play Sets",
    price: "₹1,899",
    age: "Ages 3+",
    rating: 4.9,
    reviews: 104,
    inStock: true,
    stockText: "Top Seller",
    img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80",
    desc: "Junior master chef cooking station featuring clicking stove knobs, stainless-steel pots & pans, spatulas, salt & pepper shakers, and sliceable velcro play veggies.",
    features: [
      "22-piece cookware set including pots, skillet, lid, and utensils",
      "Crunch-sound velcro cutting vegetables and wooden knife",
      "Click-clack turning heat dials mimic real burners",
      "Develops fine motor skills, sharing, and healthy food habits"
    ]
  },

  // 17. Doctor Set
  {
    id: "toy-17",
    name: "Doctor Set",
    category: "pretend",
    categoryLabel: "Pretend Play Sets",
    price: "₹749",
    age: "Ages 3+",
    rating: 4.9,
    reviews: 92,
    inStock: true,
    stockText: "In Stock",
    img: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80",
    desc: "Complete 18-piece medical checkup kit in a snap-shut doctor's emergency briefcase. Helps alleviate real doctor anxiety through imaginative play!",
    features: [
      "Real working heartbeat sounds on battery stethoscope",
      "Includes thermometer with slide-changing temperature reading",
      "Reflex hammer, spring syringe, blood pressure cuff, & bandage",
      "Sturdy snap-lock carry case keeps all instruments organized"
    ]
  },

  // 18. Makeup Toy Set
  {
    id: "toy-18",
    name: "Makeup Toy Set",
    category: "pretend",
    categoryLabel: "Pretend Play Sets",
    price: "₹649",
    age: "Ages 3+",
    rating: 4.7,
    reviews: 67,
    inStock: true,
    stockText: "100% Mess-Free",
    img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
    desc: "Completely mess-free pretend beauty kit! Looks and feels authentic with faux pressed powders, soft brushes, lipstick tube, and glitter vanity bag without any actual pigment or stains.",
    features: [
      "Zero powders, dyes, or chemicals — 100% simulated pretend makeup",
      "Real soft-bristle cosmetic application brushes",
      "Shatter-proof vanity mirror compact",
      "Glittery zip makeup pouch holds the whole cosmetic collection"
    ]
  },

  // 19. Tea Set
  {
    id: "toy-19",
    name: "Tea Set",
    category: "pretend",
    categoryLabel: "Pretend Play Sets",
    price: "₹699",
    age: "Ages 3+",
    rating: 4.8,
    reviews: 73,
    inStock: true,
    stockText: "In Stock",
    img: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    desc: "Charming afternoon garden tea party set complete with teapot, 4 cups & saucers, serving tray, sugar bowl, and wooden pretend pastry treats.",
    features: [
      "Shatterproof food-grade tin and wooden pastry biscuits",
      "Spill-proof pouring spout on teapot for real water play",
      "Pastel floral pattern adds storybook elegance",
      "Encourages hospitality, polite manners, and turn-taking"
    ]
  },

  // 20. Building Blocks
  {
    id: "toy-20",
    name: "Building Blocks",
    category: "blocks",
    categoryLabel: "Building Blocks",
    price: "₹1,099",
    age: "Ages 1.5+",
    rating: 5.0,
    reviews: 175,
    inStock: true,
    stockText: "Essential Toy",
    img: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=600&q=80",
    desc: "A massive 100-piece bucket of solid hardwood building blocks in 9 geometric shapes and vibrant primary colors. Endless towers, castles, bridges, and creative fun!",
    features: [
      "100 solid natural beechwood blocks with rounded corners",
      "Dyed with certified non-toxic water-based paints",
      "Develops spatial reasoning, architectural balance, & fine motor grip",
      "Comes in a sturdy storage tub with a shape-sorter lid"
    ]
  }
];

// ---------------- DOM ELEMENT REFERENCES ----------------
const elements = {
  header: document.getElementById('header'),
  mobileToggle: document.getElementById('mobileToggle'),
  mobileOverlay: document.getElementById('mobileOverlay'),
  mobileDrawer: document.getElementById('mobileDrawer'),
  drawerClose: document.getElementById('drawerClose'),
  drawerLinks: document.querySelectorAll('.drawer-link'),
  toysGrid: document.getElementById('toysGrid'),
  filterBtns: document.querySelectorAll('.filter-btn'),
  modal: document.getElementById('toyModal'),
  modalClose: document.getElementById('modalClose'),
  modalBody: document.getElementById('modalBody'),
  inquiryForm: document.getElementById('toyInquiryForm'),
  submitBtn: document.getElementById('submitBtn'),
  formSuccessBox: document.getElementById('formSuccessBox'),
  resetFormBtn: document.getElementById('resetFormBtn'),
  toyInterestInput: document.getElementById('toyInterest'),
  inquiryTypeSelect: document.getElementById('inquiryType'),
  liveStatusBadge: document.getElementById('liveStatusBadge'),
  hoursList: document.getElementById('hoursList'),
  toast: document.getElementById('toastNotification'),
  toastMessage: document.getElementById('toastMessage'),
  faqItems: document.querySelectorAll('.faq-item'),
  currentYear: document.getElementById('currentYear')
};

// ---------------- INITIALIZATION ----------------
document.addEventListener('DOMContentLoaded', () => {
  if (elements.currentYear) {
    elements.currentYear.textContent = new Date().getFullYear();
  }

  // Render toys with MRP in INR
  renderToys(TOYS_DATA);

  // Initialize live store hours
  calculateStoreStatus();

  // Setup event listeners
  setupNavigation();
  setupFilterButtons();
  setupModal();
  setupFormValidation();
  setupFAQAccordion();
  setupScrollEffects();
});

// ---------------- RENDER TOY CARDS ----------------
function renderToys(toys) {
  if (!elements.toysGrid) return;
  elements.toysGrid.innerHTML = '';

  if (toys.length === 0) {
    elements.toysGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px;">
        <i class="fa-solid fa-box-open" style="font-size: 3rem; color: #cbd5e1; margin-bottom: 12px;"></i>
        <h3 style="font-family: var(--font-heading); color: var(--text-dark);">No toys found in this category</h3>
        <p style="color: var(--text-muted);">Check back soon or ask us about custom toy orders!</p>
      </div>
    `;
    return;
  }

  toys.forEach(toy => {
    const card = document.createElement('article');
    card.className = 'toy-card';
    card.setAttribute('data-category', toy.category);

    const isLowStock = toy.stockText.toLowerCase().includes('left');

    card.innerHTML = `
      <div class="toy-card-media">
        <img src="${toy.img}" alt="${toy.name}" class="toy-img" loading="lazy">
        <span class="toy-age-tag"><i class="fa-solid fa-child"></i> ${toy.age}</span>
        <span class="toy-stock-tag ${isLowStock ? 'low-stock' : ''}">
          <i class="fa-solid ${isLowStock ? 'fa-hourglass-half' : 'fa-check'}"></i> ${toy.stockText}
        </span>
      </div>
      <div class="toy-card-body">
        <div class="toy-category-crumb">${toy.categoryLabel}</div>
        <h3 class="toy-title">${toy.name}</h3>
        <div class="toy-stars">
          ${'★'.repeat(Math.floor(toy.rating))}
          <span class="toy-review-count">(${toy.reviews} reviews)</span>
        </div>
        <p class="toy-short-desc">${truncateText(toy.desc, 95)}</p>
        <div class="toy-card-footer">
          <span class="toy-price">${toy.price}</span>
          <button class="toy-quick-btn" onclick="openToyModal('${toy.id}')" aria-label="Quick view of ${toy.name}">
            <i class="fa-solid fa-eye"></i> Quick View
          </button>
        </div>
      </div>
    `;

    elements.toysGrid.appendChild(card);
  });
}

function truncateText(text, length) {
  if (text.length <= length) return text;
  return text.substr(0, length) + '...';
}

// ---------------- FILTERING LOGIC ----------------
function setupFilterButtons() {
  elements.filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      elements.filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-category');
      if (category === 'all') {
        renderToys(TOYS_DATA);
      } else {
        const filtered = TOYS_DATA.filter(t => t.category === category);
        renderToys(filtered);
      }
    });
  });
}

window.filterToys = function(category) {
  elements.filterBtns.forEach(b => {
    if (b.getAttribute('data-category') === category) {
      b.click();
    }
  });
};

// ---------------- MODAL LOGIC ----------------
function setupModal() {
  if (elements.modalClose) {
    elements.modalClose.addEventListener('click', closeToyModal);
  }

  if (elements.modal) {
    elements.modal.addEventListener('click', (e) => {
      if (e.target === elements.modal) {
        closeToyModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && elements.modal && elements.modal.classList.contains('open')) {
      closeToyModal();
    }
  });
}

window.openToyModal = function(toyId) {
  const toy = TOYS_DATA.find(t => t.id === toyId);
  if (!toy || !elements.modalBody) return;

  const featuresList = toy.features.map(f => `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`).join('');

  elements.modalBody.innerHTML = `
    <div class="modal-toy-grid">
      <div class="modal-toy-media">
        <img src="${toy.img}" alt="${toy.name}">
      </div>
      <div class="modal-toy-content">
        <div class="modal-toy-header">
          <div class="toy-category-crumb">${toy.categoryLabel}</div>
          <h2 class="modal-toy-title">${toy.name}</h2>
          <div class="modal-meta-row">
            <span class="toy-age-tag"><i class="fa-solid fa-child"></i> ${toy.age}</span>
            <span class="toy-stock-tag"><i class="fa-solid fa-check"></i> ${toy.stockText}</span>
          </div>
          <div class="modal-toy-price-wrap">
            <span class="modal-toy-price">${toy.price}</span>
            <small class="tax-tag">(Inclusive of all taxes)</small>
          </div>
        </div>

        <p class="modal-toy-desc">${toy.desc}</p>

        <ul class="modal-specs-list">
          ${featuresList}
        </ul>

        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <button class="btn btn-primary btn-block" onclick="inquireFromModal('${toy.name.replace(/'/g, "\\'")}')">
            <i class="fa-solid fa-paper-plane"></i> Inquire / Reserve This Toy
          </button>
        </div>
      </div>
    </div>
  `;

  elements.modal.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closeToyModal = function() {
  if (elements.modal) {
    elements.modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};

window.inquireFromModal = function(toyName) {
  closeToyModal();
  if (elements.toyInterestInput) {
    elements.toyInterestInput.value = toyName;
  }
  if (elements.inquiryTypeSelect) {
    elements.inquiryTypeSelect.value = 'stock';
  }

  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      const messageInput = document.getElementById('userMessage');
      if (messageInput) messageInput.focus();
    }, 600);
  }
};

// ---------------- LIVE STORE STATUS CALCULATION ----------------
function calculateStoreStatus() {
  const now = new Date();
  const day = now.getDay();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const schedule = {
    0: { isClosed: true, label: "Sunday", closeStr: "Closed", openStr: null },
    1: { open: 10 * 60, close: 19 * 60, label: "Monday", closeStr: "7:00 PM", openStr: "10:00 AM" },
    2: { open: 10 * 60, close: 19 * 60, label: "Tuesday", closeStr: "7:00 PM", openStr: "10:00 AM" },
    3: { open: 10 * 60, close: 19 * 60, label: "Wednesday", closeStr: "7:00 PM", openStr: "10:00 AM" },
    4: { open: 10 * 60, close: 19 * 60, label: "Thursday", closeStr: "7:00 PM", openStr: "10:00 AM" },
    5: { open: 10 * 60, close: 20 * 60, label: "Friday", closeStr: "8:00 PM", openStr: "10:00 AM" },
    6: { open: 9 * 60,  close: 19 * 60, label: "Saturday", closeStr: "7:00 PM", openStr: "9:00 AM" }
  };

  const dayRows = document.querySelectorAll('.hours-list li');
  dayRows.forEach(row => {
    if (parseInt(row.getAttribute('data-day'), 10) === day) {
      row.classList.add('today-highlight');
      const dayNameSpan = row.querySelector('.day-name');
      if (dayNameSpan && !dayNameSpan.innerHTML.includes('(Today)')) {
        dayNameSpan.innerHTML += ' <span style="color:var(--brand-red); font-weight:700;">(Today)</span>';
      }
    }
  });

  const todaySchedule = schedule[day];
  const isOpen = !todaySchedule.isClosed && (currentMinutes >= todaySchedule.open && currentMinutes < todaySchedule.close);

  if (elements.liveStatusBadge) {
    if (isOpen) {
      elements.liveStatusBadge.className = 'live-status-pill open';
      elements.liveStatusBadge.innerHTML = `<span class="status-dot"></span> Open Now • Closes at ${todaySchedule.closeStr}`;
    } else {
      elements.liveStatusBadge.className = 'live-status-pill closed';
      if (todaySchedule.isClosed) {
        elements.liveStatusBadge.innerHTML = `<span class="status-dot"></span> Closed Today (Sunday) • Opens Monday at 10:00 AM`;
      } else if (currentMinutes < todaySchedule.open) {
        elements.liveStatusBadge.innerHTML = `<span class="status-dot"></span> Closed Now • Opens at ${todaySchedule.openStr} today`;
      } else {
        if (day === 6) {
          elements.liveStatusBadge.innerHTML = `<span class="status-dot"></span> Closed Now • Opens Monday at 10:00 AM`;
        } else {
          let nextDay = day + 1;
          elements.liveStatusBadge.innerHTML = `<span class="status-dot"></span> Closed Now • Opens at ${schedule[nextDay].openStr} tomorrow`;
        }
      }
    }
  }
}

// ---------------- FORM HANDLING & VALIDATION ----------------
function setupFormValidation() {
  if (!elements.inquiryForm) return;

  const nameInput = document.getElementById('userName');
  const emailInput = document.getElementById('userEmail');
  const messageInput = document.getElementById('userMessage');

  elements.inquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    if (!nameInput.value.trim()) {
      markFieldError('userName', true);
      isValid = false;
    } else {
      markFieldError('userName', false);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      markFieldError('userEmail', true);
      isValid = false;
    } else {
      markFieldError('userEmail', false);
    }

    if (!messageInput.value.trim()) {
      markFieldError('userMessage', true);
      isValid = false;
    } else {
      markFieldError('userMessage', false);
    }

    if (!isValid) return;

    elements.submitBtn.classList.add('loading');
    elements.submitBtn.disabled = true;

    setTimeout(() => {
      elements.submitBtn.classList.remove('loading');
      elements.submitBtn.disabled = false;

      fireBrandConfetti();

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const phone = (document.getElementById('userPhone')?.value || '').trim() || 'Not specified';
      const toy = elements.toyInterestInput.value.trim() || 'General Inquiry';
      const type = elements.inquiryTypeSelect.options[elements.inquiryTypeSelect.selectedIndex].text;
      const message = messageInput.value.trim();

      // Construct formatted WhatsApp booking text
      const whatsappText = `*NEW TOY TOWN BOOKING / INQUIRY* 🧸
━━━━━━━━━━━━━━━━━━━━
👤 *Customer Name:* ${name}
📞 *Phone:* ${phone}
📧 *Email:* ${email}
🏷️ *Booking Type:* ${type}
🎁 *Toy Item:* ${toy}
💬 *Message:*
"${message}"
━━━━━━━━━━━━━━━━━━━━
📍 *Shop:* Toy Town (Guwahati, Near NH-37)
📞 *Store WhatsApp:* +91 8822593562`;

      const whatsappUrl = `https://wa.me/918822593562?text=${encodeURIComponent(whatsappText)}`;

      // Update link for direct button
      const directWhatsAppBtn = document.getElementById('directWhatsAppBtn');
      if (directWhatsAppBtn) {
        directWhatsAppBtn.href = whatsappUrl;
      }

      // 1. Dispatch background email notification to sonu0429@gmail.com
      fetch("https://formsubmit.co/ajax/sonu0429@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `🧸 New Toy Town Booking: ${name} - ${toy}`,
          Customer_Name: name,
          Customer_Phone: phone,
          Customer_Email: email,
          Booking_Type: type,
          Toy_Selected: toy,
          Message: message,
          Store: "Toy Town - Guwahati, Near NH-37 (781029)",
          Recipient_Email: "sonu0429@gmail.com",
          Store_WhatsApp: "+91 8822593562"
        })
      }).catch(err => console.log("Email dispatch status:", err));

      // 2. Automatically open WhatsApp with pre-filled details
      window.open(whatsappUrl, '_blank');

      const successDetails = document.getElementById('successDetailsPill');
      if (successDetails) {
        successDetails.innerHTML = `
          <strong>Customer:</strong> ${name} &bull; <strong>Phone:</strong> ${phone}<br>
          <strong>Booking Type:</strong> ${type}<br>
          <strong>Toy Selected:</strong> ${toy}<br>
          <div style="margin-top: 8px; display: flex; flex-direction: column; gap: 4px;">
            <span style="color:#16a34a; font-weight:700;"><i class="fa-brands fa-whatsapp"></i> Sent to WhatsApp (+91 8822593562)</span>
            <span style="color:#0284c7; font-weight:700;"><i class="fa-solid fa-envelope-circle-check"></i> Instant email notification sent to sonu0429@gmail.com</span>
          </div>
        `;
      }

      elements.inquiryForm.style.display = 'none';
      elements.formSuccessBox.classList.add('show');

      showToast("📱 WhatsApp opened & email alert sent to sonu0429@gmail.com!");
    }, 800);
  });

  if (elements.resetFormBtn) {
    elements.resetFormBtn.addEventListener('click', () => {
      elements.inquiryForm.reset();
      elements.inquiryForm.style.display = 'block';
      elements.formSuccessBox.classList.remove('show');
    });
  }

  [nameInput, emailInput, messageInput].forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        markFieldError(input.id, false);
      });
    }
  });
}

function markFieldError(inputId, hasError) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const formGroup = input.closest('.form-group');
  if (formGroup) {
    if (hasError) {
      formGroup.classList.add('has-error');
    } else {
      formGroup.classList.remove('has-error');
    }
  }
}

// ---------------- CELEBRATORY CONFETTI WITH BRAND COLORS ----------------
function fireBrandConfetti() {
  if (typeof window.confetti === 'function') {
    window.confetti({
      particleCount: 110,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#fed41e', '#ec4d2d', '#fa7921', '#fffae0', '#d97706']
    });
  }
}

// ---------------- BIRTHDAY CLUB SIGNUP ----------------
window.handleClubSubmit = function() {
  const clubEmail = document.getElementById('clubEmail');
  if (clubEmail && clubEmail.value.trim()) {
    fireBrandConfetti();
    showToast("🎈 Welcome to Toy Town VIP Club! Enjoy your 20% gift coupon.");
    clubEmail.value = '';
  }
};

// ---------------- TOAST NOTIFICATION ----------------
function showToast(message) {
  if (!elements.toast || !elements.toastMessage) return;
  elements.toastMessage.textContent = message;
  elements.toast.classList.add('show');
  setTimeout(() => {
    elements.toast.classList.remove('show');
  }, 4000);
}

// ---------------- FAQ ACCORDION ----------------
function setupFAQAccordion() {
  elements.faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        elements.faqItems.forEach(i => i.classList.remove('active'));
        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

// ---------------- NAVIGATION & SCROLL ----------------
function setupNavigation() {
  if (elements.mobileToggle) {
    elements.mobileToggle.addEventListener('click', () => {
      elements.mobileDrawer.classList.add('open');
      elements.mobileOverlay.classList.add('open');
    });
  }

  const closeDrawer = () => {
    if (elements.mobileDrawer) elements.mobileDrawer.classList.remove('open');
    if (elements.mobileOverlay) elements.mobileOverlay.classList.remove('open');
  };

  if (elements.drawerClose) elements.drawerClose.addEventListener('click', closeDrawer);
  if (elements.mobileOverlay) elements.mobileOverlay.addEventListener('click', closeDrawer);

  elements.drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function setupScrollEffects() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      elements.header.classList.add('scrolled');
    } else {
      elements.header.classList.remove('scrolled');
    }
  });
}
