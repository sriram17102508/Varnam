/* ============================================================
   VARNAM AI CHATBOT — Full Knowledge Base
   Knows everything about Varnam platform
   ============================================================ */

const VARNAM_KB = {
  // ── PLATFORM INFO ──────────────────────────────────────────
  platform: {
    name: "Varnam",
    tagline: "India's Premier Wedding Planning Platform",
    founded: "2024",
    headquarters: "Mumbai, India",
    coverage: "180+ cities across India",
    stats: {
      weddings: "50,000+",
      vendors: "12,000+",
      venues: "5,000+",
      budgetManaged: "₹500 Crore+",
      rating: "4.9★",
      cities: "180+"
    },
    pages: ["Home", "Venues", "Vendors", "Themes", "Dashboard", "Budget Tracker"],
    features: ["Smart Dashboard", "AI Wedding Planner", "Guest Manager", "Budget Intelligence",
      "Vendor Marketplace", "Digital Invite Studio", "Wedding Website Builder",
      "QR Check-ins & Live Wall", "Venue Booking Marketplace"]
  },

  // ── VENUES ─────────────────────────────────────────────────
  venues: {
    total: "54+",
    types: ["Palace & Fort", "Beach", "Garden", "Luxury Hotel", "Destination", "Heritage Haveli", "Backwaters", "Himalayan", "Desert Camp", "Wildlife Resort"],
    topVenues: [
      { name: "Umaid Bhawan Palace", city: "Jodhpur", state: "Rajasthan", type: "Palace", rating: "4.9", price: "₹8L–₹25L/day", capacity: "2,000", badge: "Heritage Iconic" },
      { name: "Taj Lake Palace", city: "Udaipur", state: "Rajasthan", type: "Palace", rating: "5.0", price: "₹12L–₹40L/day", capacity: "500", badge: "Floating Palace" },
      { name: "Rambagh Palace", city: "Jaipur", state: "Rajasthan", type: "Palace", rating: "5.0", price: "₹10L–₹35L/day", capacity: "700", badge: "Maharaja Palace" },
      { name: "The Leela Goa", city: "Cavelossim", state: "Goa", type: "Beach", rating: "4.8", price: "₹5L–₹15L/day", capacity: "800", badge: "Beachfront Luxury" },
      { name: "ITC Grand Chola", city: "Chennai", state: "Tamil Nadu", type: "Luxury", rating: "4.9", price: "₹4L–₹12L/day", capacity: "1,500", badge: "30,000 sqft Ballroom" },
      { name: "Oberoi Amarvilas", city: "Agra", state: "Uttar Pradesh", type: "Luxury", rating: "4.9", price: "₹6L–₹20L/day", capacity: "600", badge: "Taj Mahal Views" },
      { name: "Six Senses Fort Barwara", city: "Sawai Madhopur", state: "Rajasthan", type: "Destination", rating: "5.0", price: "₹25L–₹70L/day", capacity: "150", badge: "Ultra Exclusive" },
      { name: "Ananda in the Himalayas", city: "Rishikesh", state: "Uttarakhand", type: "Destination", rating: "4.8", price: "₹15L–₹45L/day", capacity: "150", badge: "Himalayan Retreat" },
      { name: "Vivanta Dal View", city: "Srinagar", state: "J&K", type: "Destination", rating: "4.7", price: "₹5L–₹14L/day", capacity: "200", badge: "Dal Lake" },
      { name: "Kumarakom Lake Resort", city: "Kumarakom", state: "Kerala", type: "Destination", rating: "4.9", price: "₹3L–₹9L/day", capacity: "300", badge: "Kerala Backwaters" },
      { name: "Fern Valley Estate", city: "Coorg", state: "Karnataka", type: "Garden", rating: "4.7", price: "₹2L–₹6L/day", capacity: "400", badge: "Hill Garden" },
      { name: "Grand Hyatt Mumbai", city: "Mumbai", state: "Maharashtra", type: "Luxury", rating: "4.8", price: "₹5L–₹15L/day", capacity: "2,500", badge: "India's Largest Ballroom" },
    ],
    filters: ["City", "Type", "Budget", "Capacity", "Rating"],
    bookingProcess: "Search → Filter → View Details → Send Inquiry → Confirm & Pay"
  },

  // ── VENDORS ────────────────────────────────────────────────
  vendors: {
    total: "12,000+",
    categories: [
      { name: "Photographers", count: "3,100+", icon: "📸" },
      { name: "Videographers", count: "1,200+", icon: "🎬" },
      { name: "Makeup Artists", count: "2,400+", icon: "💄" },
      { name: "Mehndi Artists", count: "1,500+", icon: "🌿" },
      { name: "Decorators", count: "2,000+", icon: "🌺" },
      { name: "Caterers", count: "1,800+", icon: "🍛" },
      { name: "DJs & Music", count: "900+", icon: "🎵" },
      { name: "Chefs", count: "600+", icon: "👨‍🍳" },
      { name: "Wedding Planners", count: "450+", icon: "📋" },
      { name: "Venues", count: "5,200+", icon: "🏰" },
    ],
    featured: [
      { name: "Joseph Radhik", type: "Photographer", city: "Mumbai", rating: "4.9", reviews: "847", price: "₹1,50,000", speciality: "Cinematic storytelling, Bollywood weddings" },
      { name: "Namrata Soni", type: "Makeup Artist", city: "Mumbai", rating: "5.0", reviews: "1,200+", price: "₹75,000", speciality: "Celebrity bridal makeup, airbrush" },
      { name: "Ferns N Petals Events", type: "Decorator", city: "Delhi (PAN India)", rating: "4.8", reviews: "2,300+", price: "₹2,00,000", speciality: "Floral installations, themed décor" },
      { name: "Taj Catering Services", type: "Caterer", city: "Mumbai, Delhi, Bangalore", rating: "4.9", reviews: "3,100+", price: "₹1,200/plate", speciality: "Multi-cuisine, live stations, luxury feasts" },
      { name: "Saurabh Garg Films", type: "Videographer", city: "Delhi NCR", rating: "4.8", reviews: "562", price: "₹2,50,000", speciality: "Cinematic films, drone, same-day edit" },
      { name: "Mehndi by Reena", type: "Mehndi Artist", city: "Jaipur, Delhi", rating: "4.9", reviews: "1,800+", price: "₹15,000", speciality: "Traditional Rajasthani, Mughal, Arabic" },
      { name: "DJ Suketu", type: "DJ", city: "Mumbai, Goa", rating: "4.8", reviews: "423", price: "₹80,000", speciality: "Bollywood, Punjabi, international sets" },
      { name: "Wedtree Events", type: "Planner", city: "Mumbai", rating: "4.7", reviews: "789", price: "₹3,00,000", speciality: "Full service, destination weddings" },
      { name: "Chef Ramakrishnan", type: "Chef", city: "Chennai, Bangalore", rating: "4.9", reviews: "340", price: "₹800/plate", speciality: "Kerala Sadya, Tamil Nadu traditional" },
    ],
    verification: "3-step: Document verification → Portfolio review → Background check",
    badges: ["Verified ✓", "Premium", "Top Rated ⭐", "Celebrity Artist", "PAN India"],
  },

  // ── THEMES ─────────────────────────────────────────────────
  themes: {
    total: 20,
    list: [
      { num: "01", name: "Royal / Palace Wedding", vibe: "Opulent décor, gold mandap, heritage palaces, elephant processions" },
      { num: "02", name: "Traditional South Indian", vibe: "Silk sarees, jasmine garlands, Vedic rituals, temple settings" },
      { num: "03", name: "Beach Wedding", vibe: "Sunset vows, floral arches, Goa & Kerala coastal shores" },
      { num: "04", name: "Garden Wedding", vibe: "Lush botanicals, pastel palette, outdoor pavilions" },
      { num: "05", name: "Minimalist Wedding", vibe: "Clean lines, neutral tones, understated luxury" },
      { num: "06", name: "Boho Wedding", vibe: "Macramé, wildflowers, earth tones, outdoor ceremony" },
      { num: "07", name: "Rustic Wedding", vibe: "Barn vibes, wooden accents, mason jars, fairy lights" },
      { num: "08", name: "Contemporary Glam", vibe: "Crystal chandeliers, velvet drapes, metallic accents" },
      { num: "09", name: "Pastel Wedding", vibe: "Blush pinks, soft lavender, dreamy florals" },
      { num: "10", name: "White & Gold Elegant", vibe: "Pure whites, gilded accents, ballroom grandeur" },
      { num: "11", name: "Red & Gold Theme", vibe: "Classic bridal red, North Indian traditions" },
      { num: "12", name: "Floral Garden Theme", vibe: "Bloom archways, wildflower aisles, greenhouse reception" },
      { num: "13", name: "Candlelight Theme", vibe: "Warm candles, amber hues, intimate evening ceremony" },
      { num: "14", name: "Fairytale Wedding", vibe: "Enchanted forest, twinkling lights, castle venue" },
      { num: "15", name: "Old Money Aesthetic", vibe: "Heritage estates, classic British style, understated wealth" },
      { num: "16", name: "Korean Minimal", vibe: "White studio vibes, soft textures, Hanbok-inspired palette" },
      { num: "17", name: "Destination Wedding", vibe: "Santorini, Maldives, Rajasthan, Bali, Europe" },
      { num: "18", name: "Luxury Resort Wedding", vibe: "5-star infinity pools, all-inclusive grandeur" },
      { num: "19", name: "Temple Theme", vibe: "Sacred spaces, diyas, flower offerings, spiritual ambiance" },
      { num: "20", name: "Sunset Cocktail Theme", vibe: "Rooftop venue, golden hour, signature cocktails, live music" },
    ]
  },

  // ── DASHBOARD ──────────────────────────────────────────────
  dashboard: {
    features: ["Wedding countdown timer", "Planning progress tracker", "Budget analytics", "Guest RSVP status", "Vendor booking tracker", "Event timeline", "Task checklist", "Mini calendar", "Recent activity feed", "Vendor messaging", "Guest table management"],
    tabs: ["Overview", "Checklist", "Timeline", "Budget", "Guest Manager", "My Vendors", "Messages"],
    events: ["Engagement", "Mehndi", "Haldi", "Sangeet", "Reception", "Wedding Ceremony"]
  },

  // ── BUDGET ─────────────────────────────────────────────────
  budget: {
    categories: ["Venue", "Catering", "Photography", "Décor", "Outfits & Jewellery", "Mehndi", "Music & DJ", "Invitations", "Transportation", "Accommodation", "Gifts & Return Gifts", "Miscellaneous"],
    avgBudgets: {
      budget: "₹5L – ₹15L",
      medium: "₹15L – ₹40L",
      luxury: "₹40L – ₹1Cr",
      ultraLuxury: "₹1Cr+"
    },
    typicalSplit: "Venue 35% · Catering 25% · Photography 12% · Décor 15% · Outfits 8% · Others 5%",
    features: ["Real-time expense tracking", "Category-wise breakdown", "AI budget predictions", "Overspend alerts", "Payment reminders", "Installment tracking", "Downloadable reports"]
  },

  // ── REGISTRATION ───────────────────────────────────────────
  registration: {
    userTypes: ["Couple / Guest", "Organizer / Vendor"],
    userSignup: ["First Name", "Last Name", "Email", "Phone", "Role (Bride/Groom/Family/Guest)", "Password"],
    vendorSignup: [
      "Full Name", "Display / Business Name", "Email Address", "Phone / WhatsApp", "Alternate Phone", "Gender",
      "Category", "Sub-speciality", "Years of Experience", "No. of Weddings Done",
      "Primary City", "Cities You Serve", "Travel availability",
      "Starting Price (₹)", "Price Type", "Packages Description",
      "About Your Work", "Portfolio / Website URL", "Instagram Handle", "YouTube / Vimeo",
      "Facebook Page", "Languages Spoken", "GST Number", "Aadhar / PAN for KYC",
      "Password", "Confirm Password"
    ],
    vendorCategories: ["Photographer", "Videographer", "Makeup Artist", "Mehndi Artist", "Decorator / Florist",
      "Caterer", "DJ / Musician", "Chef", "Wedding Planner", "Venue Owner",
      "Bridal Wear Designer", "Jeweller", "Choreographer", "Priest / Pandit",
      "Invitation Designer", "Transportation", "Honeymoon Planner"],
    verificationTime: "24–48 hours after submission",
    loginOptions: ["Email + Password", "Google OAuth", "Phone OTP"]
  },

  // ── WEDDING PLANNING TIPS ──────────────────────────────────
  planningTips: {
    timeline: {
      "12+ months": "Set date, book venue, shortlist photographers, set budget",
      "9 months": "Book caterer, decorator, makeup artist, mehndi artist",
      "6 months": "Send save-the-dates, book DJ, honeymoon planning",
      "3 months": "Send formal invitations, confirm all vendors, plan menus",
      "1 month": "Finalise seating, send RSVP reminders, confirm headcount",
      "1 week": "Final vendor walkthrough, day-of timeline distribution",
      "Day of": "Relax — let Varnam's timeline handle it!"
    },
    budgetTips: [
      "Book venue 12+ months early for off-season discounts",
      "Photographers booked 6+ months early get 15–20% early bird discounts",
      "Weekday weddings cost 20–30% less than weekends",
      "Combine Sangeet + Mehndi events to save on venue cost",
      "Negotiate package deals when booking multiple vendors together"
    ]
  },

  // ── FAQ ───────────────────────────────────────────────────
  faq: [
    { q: "How does the AI planner work?", a: "Varnam's AI is trained on 50,000+ Indian weddings. It learns your traditions, budget, guest count, and preferences to deliver personalized recommendations for venues, vendors, themes, and timelines." },
    { q: "Are all vendors verified?", a: "Yes! Every vendor undergoes 3-step verification: document authentication, portfolio review, and client reference checks. Badges reflect ongoing performance based on real couple reviews." },
    { q: "Can I manage multiple events?", a: "Absolutely! Varnam supports full multi-event planning with separate guest lists, vendor bookings, budgets, and timelines for Engagement, Haldi, Mehndi, Sangeet, Reception, and Wedding Ceremony." },
    { q: "How do digital invitations work?", a: "Choose from 200+ animated templates, customize in minutes, and share via WhatsApp, email, or QR code. The RSVP dashboard tracks confirmed, pending, and declined responses in real time." },
    { q: "Is my data secure?", a: "We use 256-bit SSL encryption for all data and RBI-compliant payment gateways. Your data is never sold to third parties. Full account deletion available anytime." },
    { q: "How do I register as a vendor?", a: "Click 'Vendor Registration' in the nav or footer. Fill the complete form with your personal details, business info, pricing, portfolio links, and KYC documents. Verification takes 24–48 hours." },
    { q: "What cities does Varnam cover?", a: "Varnam covers 180+ cities including Mumbai, Delhi, Bangalore, Chennai, Hyderabad, Jaipur, Udaipur, Goa, Kolkata, Pune, Coorg, Rishikesh, Jaisalmer, Srinagar, and many more." },
    { q: "How does venue booking work?", a: "Browse 5,000+ venues, use filters (city, type, budget, capacity), view full details and amenities, then send a booking inquiry. The venue responds within 24 hours to confirm availability." },
  ],

  // ── NAVIGATION / PAGES ─────────────────────────────────────
  navigation: {
    pages: {
      "home / index": "Landing page with all features, themes, vendors, testimonials",
      "venues": "54+ venue listings with filters, search, and detailed modal with inquiry form",
      "vendors": "12,000+ vendor listings by category with full profile modals and inquiry",
      "themes": "20 wedding themes in a carousel + popup grid",
      "dashboard": "Full wedding planning dashboard with 7 tabs",
      "budget": "Budget tracker with categories, charts, payment tracking"
    }
  }
};

// ── INTENT DETECTION ─────────────────────────────────────────
function detectIntent(msg) {
  const m = msg.toLowerCase();
  if (/venue|palace|hotel|beach|garden|resort|fort|location|place|hall|banquet/i.test(m)) return 'venues';
  if (/vendor|photographer|photo|makeup|mehnd|decor|cater|dj|music|chef|planner|video|artist/i.test(m)) return 'vendors';
  if (/theme|style|aesthetic|royal|boho|rustic|minimal|pastel|candlelight|fairytale/i.test(m)) return 'themes';
  if (/budget|cost|price|money|spend|afford|cheap|expensive|how much/i.test(m)) return 'budget';
  if (/register|signup|sign up|join|organizer|list my|add my|vendor registration|my business/i.test(m)) return 'registration';
  if (/dashboard|checklist|task|guest|rsvp|plan|timeline|calendar|countdown/i.test(m)) return 'dashboard';
  if (/hello|hi|hey|namaste|vanakkam|good|start|help|assist|what can|who are you/i.test(m)) return 'greeting';
  if (/tip|advice|guide|when|how long|planning|timeline|checklist/i.test(m)) return 'tips';
  if (/city|cities|where|cover|available|india/i.test(m)) return 'cities';
  if (/faq|question|how does|what is|explain|tell me about/i.test(m)) return 'faq';
  if (/navigate|go to|open|page|where is|find/i.test(m)) return 'navigation';
  if (/varnam|platform|about|what is varnam|feature|app|website/i.test(m)) return 'platform';
  if (/contact|support|help|email|phone|reach/i.test(m)) return 'contact';
  return 'general';
}

// ── RESPONSE GENERATOR ───────────────────────────────────────
function generateResponse(msg) {
  const intent = detectIntent(msg);
  const m = msg.toLowerCase();

  switch (intent) {

    case 'greeting':
      return `Vanakkam! 🌸 I'm **VaranAI**, your personal wedding planning assistant.\n\nI can help you with:\n• 🏰 Finding the perfect **venue** (54+ options)\n• 🎯 Discovering **vendors** (12,00,000+ verified professionals)\n• 🎨 Exploring **20 wedding themes**\n• 💰 **Budget planning** & tips\n• 📊 Using the **Dashboard** features\n• 📝 **Vendor registration** guidance\n• 🗺️ Navigating any page on Varnam\n\nWhat would you like to explore first?`;

    case 'venues': {
      const cities = ['mumbai','delhi','jaipur','udaipur','goa','bangalore','chennai','hyderabad','agra','coorg','jodhpur','jaisalmer','kerala','rishikesh','manali','shimla','srinagar','kolkata','pune','mysore'];
      const found = cities.find(c => m.includes(c));
      if (found) {
        const cityVenues = VARNAM_KB.venues.topVenues.filter(v =>
          v.city.toLowerCase().includes(found) || v.state.toLowerCase().includes(found)
        );
        if (cityVenues.length) {
          return `Here are top venues near **${found.charAt(0).toUpperCase()+found.slice(1)}**:\n\n${cityVenues.map(v =>
            `🏰 **${v.name}**\n   📍 ${v.city}, ${v.state}\n   ⭐ ${v.rating} · 👥 ${v.capacity} guests · 💰 ${v.price}`
          ).join('\n\n')}\n\n➡️ [Browse all venues →](venues.html)`;
        }
      }
      if (/beach/i.test(m)) {
        const bv = VARNAM_KB.venues.topVenues.filter(v => v.type === 'Beach');
        return `🌊 **Top Beach Wedding Venues on Varnam:**\n\n${bv.map(v => `• **${v.name}**, ${v.city}\n  ⭐ ${v.rating} · 💰 ${v.price} · 👥 ${v.capacity} guests`).join('\n\n')}\n\n➡️ [View all beach venues →](venues.html)`;
      }
      if (/palace|fort|royal|heritage/i.test(m)) {
        const pv = VARNAM_KB.venues.topVenues.filter(v => v.type === 'Palace');
        return `👑 **Top Palace & Heritage Venues:**\n\n${pv.map(v => `• **${v.name}**, ${v.city}\n  ⭐ ${v.rating} · 💰 ${v.price} · ${v.badge}`).join('\n\n')}\n\n➡️ [Browse all venues →](venues.html)`;
      }
      const top5 = VARNAM_KB.venues.topVenues.slice(0,5);
      return `🏰 Varnam has **${VARNAM_KB.venues.total} verified venues** across India!\n\n**Our most popular venues:**\n${top5.map(v => `• **${v.name}** — ${v.city} · ⭐${v.rating} · ${v.price}`).join('\n')}\n\n**Venue types available:**\n${VARNAM_KB.venues.types.join(' · ')}\n\nYou can filter by city, type, budget, and capacity on the venues page.\n\n➡️ [Explore all venues →](venues.html)`;
    }

    case 'vendors': {
      const categories = {
        'photo': VARNAM_KB.vendors.featured.filter(v => v.type === 'Photographer'),
        'makeup': VARNAM_KB.vendors.featured.filter(v => v.type === 'Makeup Artist'),
        'decor': VARNAM_KB.vendors.featured.filter(v => v.type === 'Decorator'),
        'cater': VARNAM_KB.vendors.featured.filter(v => v.type === 'Caterer'),
        'mehndi': VARNAM_KB.vendors.featured.filter(v => v.type === 'Mehndi Artist'),
        'dj': VARNAM_KB.vendors.featured.filter(v => v.type === 'DJ'),
        'planner': VARNAM_KB.vendors.featured.filter(v => v.type === 'Planner'),
        'chef': VARNAM_KB.vendors.featured.filter(v => v.type === 'Chef'),
        'video': VARNAM_KB.vendors.featured.filter(v => v.type === 'Videographer'),
      };
      for (const [key, list] of Object.entries(categories)) {
        if (m.includes(key) && list.length) {
          return `Here are top **${list[0].type}s** on Varnam:\n\n${list.map(v =>
            `🎯 **${v.name}**\n   📍 ${v.city}\n   ⭐ ${v.rating} (${v.reviews} reviews)\n   💰 Starting ${v.price}\n   ✨ ${v.speciality}`
          ).join('\n\n')}\n\n➡️ [Browse all ${list[0].type}s →](vendors.html?cat=${key})`;
        }
      }
      return `🎯 Varnam has **${VARNAM_KB.vendors.total} verified wedding professionals!**\n\n**Browse by category:**\n${VARNAM_KB.vendors.categories.map(c => `${c.icon} **${c.name}** — ${c.count}`).join('\n')}\n\n**Vendor verification:** ${VARNAM_KB.vendors.verification}\n\n**Trust badges:** ${VARNAM_KB.vendors.badges.join(' · ')}\n\n➡️ [Explore all vendors →](vendors.html)`;
    }

    case 'themes': {
      const themeMatch = VARNAM_KB.themes.list.find(t =>
        m.includes(t.name.toLowerCase().split(' ')[0].toLowerCase()) ||
        t.name.toLowerCase().split(' ').some(w => w.length > 4 && m.includes(w.toLowerCase()))
      );
      if (themeMatch) {
        return `🎨 **${themeMatch.name}**\n\n✨ **Vibe:** ${themeMatch.vibe}\n\nThis is theme #${themeMatch.num} of 20 on Varnam. You can view all themes in a beautiful carousel on the home page, or click "View All Themes" to see all 20 in a popup grid.\n\n➡️ [Explore all themes →](themes.html)`;
      }
      return `🎨 Varnam features **20 stunning wedding themes:**\n\n${VARNAM_KB.themes.list.slice(0,10).map(t => `**${t.num}.** ${t.name} — *${t.vibe.split(',')[0]}*`).join('\n')}\n\n…and **10 more** including Floral Garden, Candlelight, Fairytale, Old Money, Korean Minimal, Destination, Luxury Resort, Temple, and Sunset Cocktail.\n\nYou can browse them as a **horizontal carousel** on the home page. Click "View All Themes" to see all 20 in a popup!\n\n➡️ [View all themes →](themes.html)`;
    }

    case 'budget': {
      if (/tip|save|reduce|cheap|discount/i.test(m)) {
        return `💡 **Varnam Budget Saving Tips:**\n\n${VARNAM_KB.planningTips.budgetTips.map((t,i) => `${i+1}. ${t}`).join('\n')}\n\n**Typical budget split for a wedding:**\n${VARNAM_KB.budget.typicalSplit}\n\n➡️ [Open Budget Tracker →](dashboard.html?tab=budget)`;
      }
      return `💰 **Budget Planning on Varnam:**\n\n**Average wedding budgets:**\n• Budget: ${VARNAM_KB.budget.avgBudgets.budget}\n• Medium: ${VARNAM_KB.budget.avgBudgets.medium}\n• Luxury: ${VARNAM_KB.budget.avgBudgets.luxury}\n• Ultra Luxury: ${VARNAM_KB.budget.avgBudgets.ultraLuxury}\n\n**Typical split:**\n${VARNAM_KB.budget.typicalSplit}\n\n**Budget tracker features:**\n${VARNAM_KB.budget.features.map(f => `• ${f}`).join('\n')}\n\n**Categories tracked:**\n${VARNAM_KB.budget.categories.join(' · ')}\n\n➡️ [Open Budget Tracker →](dashboard.html?tab=budget)`;
    }

    case 'registration': {
      if (/user|couple|bride|groom|guest/i.test(m)) {
        return `👰 **Sign up as a Couple / Guest:**\n\nFields required:\n${VARNAM_KB.registration.userSignup.map(f => `• ${f}`).join('\n')}\n\n**Login options:** ${VARNAM_KB.registration.loginOptions.join(', ')}\n\nClick **"Get Started"** button in the navigation to begin!`;
      }
      return `🎯 **Register as a Vendor / Organizer:**\n\nComplete form with:\n\n**Personal:** ${VARNAM_KB.registration.vendorSignup.slice(0,6).join(', ')}\n\n**Business:** ${VARNAM_KB.registration.vendorSignup.slice(6,14).join(', ')}\n\n**Pricing:** Starting price, price type, packages\n\n**Portfolio:** Website URL, Instagram, YouTube, Facebook\n\n**KYC:** Languages, GST Number, Aadhar/PAN\n\n**Categories available:**\n${VARNAM_KB.registration.vendorCategories.slice(0,9).join(', ')} and more\n\n⏱️ **Verification time:** ${VARNAM_KB.registration.verificationTime}\n\nClick **"Vendor Registration"** in the footer or nav to get started!`;
    }

    case 'dashboard': {
      if (/guest/i.test(m)) {
        return `👥 **Guest Manager (Dashboard):**\n\n• View all guests in a searchable, filterable table\n• Track RSVP status: Confirmed / Pending / Declined\n• Manage meal preferences (Veg, Non-veg, Jain, Vegan)\n• Assign table numbers and seating\n• Export guest list as CSV\n• Add, edit, or remove guests\n• See guest stats: 218 confirmed, 92 pending, 32 declined (example)\n• Visual RSVP donut chart\n\n➡️ [Open Dashboard →](dashboard.html)`;
      }
      if (/checklist|task/i.test(m)) {
        return `✅ **Wedding Checklist (Dashboard):**\n\nTracks pending & completed tasks:\n• Overdue tasks flagged in red\n• Click any task to mark complete\n• Shows due dates\n• Categories: Venue, Vendors, Invites, Guests, Day-of\n\n**Sample tasks:**\n• Book DJ for Sangeet\n• Confirm videographer\n• Finalise menu with caterer\n• Send remaining invitations\n• Arrange guest accommodation\n\n➡️ [Open Checklist →](dashboard.html)`;
      }
      return `📊 **Varnam Dashboard Features:**\n\n**7 powerful tabs:**\n${VARNAM_KB.dashboard.tabs.map(t => `• ${t}`).join('\n')}\n\n**Key features:**\n${VARNAM_KB.dashboard.features.slice(0,6).map(f => `• ${f}`).join('\n')}\n\n**Events tracked:**\n${VARNAM_KB.dashboard.events.join(' → ')}\n\nThe dashboard shows your live wedding countdown, planning progress (73%), vendor booking status, RSVP stats, and budget breakdown all in one view.\n\n➡️ [Open Dashboard →](dashboard.html)`;
    }

    case 'tips': {
      return `📋 **Wedding Planning Timeline (What to do when):**\n\n${Object.entries(VARNAM_KB.planningTips.timeline).map(([k,v]) => `**${k}:** ${v}`).join('\n\n')}\n\n💡 **Budget Tips:**\n${VARNAM_KB.planningTips.budgetTips.slice(0,3).map((t,i) => `${i+1}. ${t}`).join('\n')}\n\n➡️ [Start planning on Dashboard →](dashboard.html)`;
    }

    case 'cities':
      return `🗺️ **Varnam covers 180+ cities across India!**\n\nMajor cities include:\n\n**North India:** Delhi, Jaipur, Udaipur, Jodhpur, Agra, Jaisalmer, Chandigarh, Shimla, Manali, Rishikesh, Srinagar\n\n**South India:** Mumbai, Bangalore, Chennai, Hyderabad, Coorg, Mysore, Pondicherry, Kochi, Kumarakom, Munnar\n\n**East & West:** Kolkata, Pune, Goa, Ahmedabad, Surat\n\n**Destinations:** Lakshadweep, Jim Corbett, Hampi, Ooty, Andaman\n\nVendors can also travel for destination weddings — check individual vendor profiles for travel availability.`;

    case 'faq': {
      const relevant = VARNAM_KB.faq.find(f =>
        f.q.toLowerCase().split(' ').some(w => w.length > 3 && m.includes(w.toLowerCase()))
      );
      if (relevant) return `❓ **${relevant.q}**\n\n${relevant.a}`;
      return `❓ **Frequently Asked Questions:**\n\n${VARNAM_KB.faq.slice(0,5).map(f => `**Q: ${f.q}**\nA: ${f.a}`).join('\n\n')}\n\nAsk me any specific question and I'll give you a detailed answer!`;
    }

    case 'navigation':
      return `🗺️ **Varnam Page Guide:**\n\n${Object.entries(VARNAM_KB.navigation.pages).map(([page, desc]) => `• **${page.charAt(0).toUpperCase()+page.slice(1)}** → ${desc}`).join('\n')}\n\nAll pages are accessible from the **navigation bar** at the top of every page. The footer also has quick links to Dashboard, Budget Tracker, Themes, Venues, and All Vendors.`;

    case 'platform':
      return `✦ **About Varnam:**\n\n${VARNAM_KB.platform.tagline}\n\n**Founded:** ${VARNAM_KB.platform.founded}\n**HQ:** ${VARNAM_KB.platform.headquarters}\n**Coverage:** ${VARNAM_KB.platform.coverage}\n\n**Key Stats:**\n• 🎊 ${VARNAM_KB.platform.stats.weddings} weddings planned\n• 🎯 ${VARNAM_KB.platform.stats.vendors} verified vendors\n• 🏰 ${VARNAM_KB.platform.stats.venues} venues listed\n• 💰 ${VARNAM_KB.platform.stats.budgetManaged} budgets managed\n• ⭐ ${VARNAM_KB.platform.stats.rating} average rating\n\n**8 Core Features:**\n${VARNAM_KB.platform.features.map(f => `• ${f}`).join('\n')}\n\n➡️ [Explore Varnam →](index.html)`;

    case 'contact':
      return `📞 **Contact & Support:**\n\n• **Email:** support@varnam.in\n• **WhatsApp:** +91 98765 43210\n• **For vendor queries:** vendors@varnam.in\n• **Business hours:** 9 AM – 9 PM, 7 days\n\n**For urgent wedding day support:** Our Luxury Concierge plan includes 24/7 hotline support.\n\nYou can also visit our [Contact page →](contact.html) or reach us through the Dashboard chat for booking-related queries.`;

    default:
      return `I can help you with anything about Varnam! 🌸 Try asking me about:\n\n• 🏰 **Venues** — "Show me beach venues" or "Venues in Goa"\n• 🎯 **Vendors** — "Find photographers" or "Best makeup artists"\n• 🎨 **Themes** — "Tell me about Royal Wedding theme"\n• 💰 **Budget** — "How much does a wedding cost?"\n• 📊 **Dashboard** — "How does guest manager work?"\n• 📝 **Registration** — "How do I register as a vendor?"\n• 🗺️ **Navigation** — "Where can I find venues?"\n• 💡 **Planning Tips** — "When should I book my venue?"\n\nWhat would you like to know?`;
  }
}

// ── CHATBOT UI BUILDER ───────────────────────────────────────
const PEACOCK_IMG = `<img src="peacock.png" alt="VaranAI" style="width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block;" />`;

function initVarnamChatbot() {
  // Inject styles
  const style = document.createElement('style');
  style.textContent = `
    #vchat-bubble{
      position:fixed;bottom:2rem;right:2rem;z-index:8000;
      width:56px;height:56px;border-radius:50%;
      background:linear-gradient(135deg,#E5C158,#800020);
      border:1px solid rgba(229,193,88,0.4);cursor:pointer;
      display:flex;align-items:center;justify-content:center;
      box-shadow:0 8px 32px rgba(128,0,32,0.4);
      transition:all .3s cubic-bezier(.23,1,.32,1);
      animation:chatPulse 3s ease-in-out infinite;
    }
    @keyframes chatPulse{0%,100%{box-shadow:0 8px 32px rgba(128,0,32,.4);}50%{box-shadow:0 8px 48px rgba(128,0,32,.65);}}
    #vchat-bubble:hover{transform:scale(1.1);box-shadow:0 12px 40px rgba(128,0,32,.65);}
    #vchat-bubble.open{animation:none;background:linear-gradient(135deg,#9E7B15,#500010);}
    .vchat-bubble-icon {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.3s;
    }
    #vchat-scroll-top {
      position: fixed;
      bottom: 6.2rem;
      right: 2.25rem;
      z-index: 7998;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: #140a0c;
      border: 1px solid rgba(229,193,88,0.4);
      color: #E5C158;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 16px rgba(0,0,0,0.5);
      transition: all 0.3s cubic-bezier(.23,1,.32,1);
      opacity: 0;
      visibility: hidden;
      transform: translateY(10px);
    }
    #vchat-scroll-top.visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    #vchat-scroll-top:hover {
      background: #E5C158;
      color: #140a0c;
      border-color: #E5C158;
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(229,193,88,0.4);
    }
    #vchat-notif{
      position:absolute;top:-4px;right:-4px;
      width:18px;height:18px;border-radius:50%;
      background:#E85D30;color:#fff;
      font-family:'Manrope',sans-serif;font-size:.6rem;font-weight:700;
      display:flex;align-items:center;justify-content:center;
      border:2px solid #080608;
      animation:notifBounce .6s ease infinite alternate;
    }
    @keyframes notifBounce{from{transform:scale(1);}to{transform:scale(1.2);}}
    #vchat-window{
      position:fixed;bottom:5.5rem;right:2rem;z-index:7999;
      width:400px;height:580px;
      background:#140a0c;
      border:1px solid rgba(229,193,88,.25);
      border-radius:20px;
      display:flex;flex-direction:column;
      box-shadow:0 32px 80px rgba(0,0,0,.7);
      transform:scale(.92) translateY(20px);
      opacity:0;visibility:hidden;
      transition:all .35s cubic-bezier(.23,1,.32,1);
      overflow:hidden;
    }
    #vchat-window.open{transform:scale(1) translateY(0);opacity:1;visibility:visible;}
    #vchat-header{
      padding:1rem 1.25rem;
      background:linear-gradient(135deg,rgba(229,193,88,.15),rgba(128,0,32,.2));
      border-bottom:1px solid rgba(229,193,88,.25);
      display:flex;align-items:center;gap:.75rem;
      flex-shrink:0;
    }
    .vchat-av{
      width:38px;height:38px;border-radius:10px;
      background:linear-gradient(135deg,#E5C158,#800020);
      display:flex;align-items:center;justify-content:center;
      padding:4px;flex-shrink:0;
    }
    .vchat-header-info{flex:1;}
    .vchat-name{font-family:'Manrope',sans-serif;font-size:.88rem;font-weight:700;color:#F0EAE2;}
    .vchat-status{font-family:'DM Mono',monospace;font-size:.58rem;color:#5ABA7A;letter-spacing:.08em;display:flex;align-items:center;gap:.35rem;}
    .vchat-status::before{content:'';width:6px;height:6px;border-radius:50%;background:#3A9A5A;}
    #vchat-close{background:none;border:none;color:#6A5A50;font-size:1.1rem;cursor:pointer;padding:.25rem;border-radius:50%;transition:color .2s;}
    #vchat-close:hover{color:#E5C158;}
    #vchat-messages{
      flex:1;overflow-y:auto;
      padding:1rem;
      display:flex;flex-direction:column;gap:.75rem;
      scrollbar-width:thin;scrollbar-color:#9E7B15 transparent;
    }
    #vchat-messages::-webkit-scrollbar{width:3px;}
    #vchat-messages::-webkit-scrollbar-thumb{background:#9E7B15;border-radius:2px;}
    .vchat-msg{display:flex;gap:.5rem;align-items:flex-start;}
    .vchat-msg.user{flex-direction:row-reverse;}
    .vchat-msg-av{
      width:28px;height:28px;border-radius:7px;
      display:flex;align-items:center;justify-content:center;
      font-size:.8rem;flex-shrink:0;
    }
    .vchat-msg-av.bot{background:rgba(229,193,88,.15);border:1px solid rgba(229,193,88,.25);color:#E5C158;padding:3px;}
    .vchat-msg-av.user{background:rgba(128,0,32,.15);border:1px solid rgba(128,0,32,.2);}
    .vchat-bubble{
      padding:.65rem .9rem;border-radius:12px;
      font-family:'Manrope',sans-serif;font-size:.8rem;line-height:1.6;
      max-width:290px;word-wrap:break-word;
    }
    .vchat-msg.bot .vchat-bubble{
      background:rgba(255,255,255,.05);
      border:1px solid rgba(255,255,255,.07);
      color:#A89888;
      border-radius:3px 12px 12px 12px;
    }
    .vchat-msg.user .vchat-bubble{
      background:linear-gradient(135deg,rgba(229,193,88,.2),rgba(128,0,32,.25));
      border:1px solid rgba(229,193,88,.25);
      color:#F0EAE2;
      border-radius:12px 3px 12px 12px;
    }
    .vchat-bubble strong{color:#F0EAE2;font-weight:700;}
    .vchat-bubble a{color:#E5C158;text-decoration:none;font-weight:600;}
    .vchat-bubble a:hover{text-decoration:underline;}
    .vchat-typing{
      display:flex;gap:.3rem;align-items:center;
      padding:.65rem .9rem;background:rgba(255,255,255,.05);
      border:1px solid rgba(255,255,255,.07);border-radius:12px;
      max-width:70px;
    }
    .vchat-typing span{
      width:6px;height:6px;border-radius:50%;background:#6A5A50;
      animation:typingDot 1.4s ease-in-out infinite;
    }
    .vchat-typing span:nth-child(2){animation-delay:.2s;}
    .vchat-typing span:nth-child(3){animation-delay:.4s;}
    @keyframes typingDot{0%,60%,100%{transform:translateY(0);}30%{transform:translateY(-6px);background:#E5C158;}}
    #vchat-quick{
      padding:.75rem 1rem;
      display:flex;gap:.4rem;flex-wrap:wrap;
      border-top:1px solid rgba(255,255,255,.05);
      flex-shrink:0;
    }
    .vchat-quick-btn{
      padding:.3rem .7rem;border-radius:100px;
      font-family:'Manrope',sans-serif;font-size:.7rem;font-weight:600;
      border:1px solid rgba(229,193,88,.25);
      background:rgba(229,193,88,.06);color:#E5C158;
      cursor:pointer;transition:all .2s;white-space:nowrap;
    }
    .vchat-quick-btn:hover{background:rgba(229,193,88,.15);border-color:rgba(229,193,88,.45);}
    #vchat-input-row{
      padding:1rem;border-top:1px solid rgba(255,255,255,.07);
      display:flex;gap:.5rem;flex-shrink:0;
    }
    #vchat-input{
      flex:1;background:rgba(255,255,255,.05);
      border:1px solid rgba(255,255,255,.1);border-radius:10px;
      padding:.6rem .9rem;
      font-family:'Manrope',sans-serif;font-size:.82rem;
      color:#F0EAE2;outline:none;transition:border-color .2s;
    }
    #vchat-input:focus{border-color:rgba(229,193,88,.45);}
    #vchat-input::placeholder{color:#6A5A50;}
    #vchat-send{
      width:38px;height:38px;border-radius:10px;flex-shrink:0;
      background:linear-gradient(135deg,#E5C158,#800020);
      border:none;cursor:pointer;
      display:flex;align-items:center;justify-content:center;
      color:#fff;font-size:1rem;transition:all .2s;
    }
    #vchat-send:hover{transform:scale(1.08);box-shadow:0 4px 20px rgba(128,0,32,.45);}
    @media(max-width:480px){
      #vchat-window{width:calc(100vw - 2rem);right:1rem;bottom:5rem;}
    }
  `;
  document.head.appendChild(style);

  // Build HTML
  const chatHTML = `
    <button id="vchat-scroll-top" onclick="scrollToTop()">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
    </button>
    <div id="vchat-window">
      <div id="vchat-header">
        <div class="vchat-av">${PEACOCK_IMG}</div>
        <div class="vchat-header-info">
          <div class="vchat-name">VaranAI Assistant</div>
          <div class="vchat-status">Online · Ready to help</div>
        </div>
        <button id="vchat-close" onclick="toggleChat()">✕</button>
      </div>
      <div id="vchat-messages"></div>
      <div id="vchat-quick">
        <button class="vchat-quick-btn" onclick="quickAsk('Show me top venues')">🏰 Top Venues</button>
        <button class="vchat-quick-btn" onclick="quickAsk('Find photographers')">📸 Photographers</button>
        <button class="vchat-quick-btn" onclick="quickAsk('Show all themes')">🎨 Themes</button>
        <button class="vchat-quick-btn" onclick="quickAsk('Budget planning tips')">💰 Budget</button>
        <button class="vchat-quick-btn" onclick="quickAsk('How do I register as a vendor?')">📝 Register</button>
        <button class="vchat-quick-btn" onclick="quickAsk('How does the dashboard work?')">📊 Dashboard</button>
      </div>
      <div id="vchat-input-row">
        <input id="vchat-input" placeholder="Ask me anything about weddings…" onkeydown="if(event.key==='Enter')vchatSend()">
        <button id="vchat-send" onclick="vchatSend()">→</button>
      </div>
    </div>
    <button id="vchat-bubble" onclick="toggleChat()">
      <span class="vchat-bubble-icon">${PEACOCK_IMG}</span>
      <div id="vchat-notif">AI</div>
    </button>
  `;
  const wrapper = document.createElement('div');
  wrapper.innerHTML = chatHTML;
  document.body.appendChild(wrapper);

  // Initial greeting message
  setTimeout(() => {
    appendBotMsg("Vanakkam! 🌸 I'm **VaranAI**, your personal wedding planning assistant. I know everything about this platform — venues, vendors, themes, budget, registration, and more!\n\nWhat would you like to explore?");
  }, 800);

  // Scroll to Top Listener
  window.addEventListener('scroll', () => {
    const st = document.getElementById('vchat-scroll-top');
    if (st) {
      if (window.scrollY > 300) {
        st.classList.add('visible');
      } else {
        st.classList.remove('visible');
      }
    }
  });
}

// Global Scroll to Top Function
window.scrollToTop = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// ── CHAT FUNCTIONS ───────────────────────────────────────────
let chatOpen = false;

function toggleChat() {
  chatOpen = !chatOpen;
  const win = document.getElementById('vchat-window');
  const btn = document.getElementById('vchat-bubble');
  const notif = document.getElementById('vchat-notif');
  if (chatOpen) {
    win.classList.add('open');
    btn.classList.add('open');
    btn.querySelector('.vchat-bubble-icon').innerHTML = '✕';
    btn.querySelector('.vchat-bubble-icon').style.fontSize = '1.3rem';
    btn.querySelector('.vchat-bubble-icon').style.color = '#FFF';
    if (notif) notif.style.display = 'none';
    document.getElementById('vchat-input').focus();
  } else {
    win.classList.remove('open');
    btn.classList.remove('open');
    btn.querySelector('.vchat-bubble-icon').innerHTML = PEACOCK_IMG;
    btn.querySelector('.vchat-bubble-icon').style.fontSize = '';
    btn.querySelector('.vchat-bubble-icon').style.color = '';
  }
}

function appendBotMsg(text) {
  const msgs = document.getElementById('vchat-messages');
  if (!msgs) return;
  const div = document.createElement('div');
  div.className = 'vchat-msg bot';
  // Format markdown-like bold and links
  const formatted = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    .replace(/\n/g, '<br>');
  div.innerHTML = `
    <div class="vchat-msg-av bot">${PEACOCK_IMG}</div>
    <div class="vchat-bubble">${formatted}</div>
  `;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function appendUserMsg(text) {
  const msgs = document.getElementById('vchat-messages');
  if (!msgs) return;
  const div = document.createElement('div');
  div.className = 'vchat-msg user';
  div.innerHTML = `
    <div class="vchat-msg-av user">👤</div>
    <div class="vchat-bubble">${text}</div>
  `;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTyping() {
  const msgs = document.getElementById('vchat-messages');
  const div = document.createElement('div');
  div.className = 'vchat-msg bot';
  div.id = 'vchat-typing';
  div.innerHTML = `
    <div class="vchat-msg-av bot">${PEACOCK_IMG}</div>
    <div class="vchat-typing"><span></span><span></span><span></span></div>
  `;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return div;
}

function removeTyping() {
  const t = document.getElementById('vchat-typing');
  if (t) t.remove();
}

function vchatSend() {
  const input = document.getElementById('vchat-input');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  appendUserMsg(text);
  const typing = showTyping();
  const delay = 600 + Math.random() * 600;
  setTimeout(() => {
    removeTyping();
    const response = generateResponse(text);
    appendBotMsg(response);
  }, delay);
}

function quickAsk(text) {
  if (!chatOpen) toggleChat();
  setTimeout(() => {
    appendUserMsg(text);
    const typing = showTyping();
    setTimeout(() => {
      removeTyping();
      appendBotMsg(generateResponse(text));
    }, 800);
  }, 100);
}

// ── AUTO INIT ────────────────────────────────────────────────
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVarnamChatbot);
} else {
  initVarnamChatbot();
}
