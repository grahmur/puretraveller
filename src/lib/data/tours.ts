import { Tour } from "@/lib/types";

export const tours: Tour[] = [
  // ─── Tour 1: Manali - Leh Highway ───────────────────────────────────
  {
    id: "tour-001",
    slug: "manali-leh-highway",
    name: "Manali - Leh Highway",
    subtitle: "Conquer the world's most iconic high-altitude motorcycle highway",
    type: "bike",
    region: "ladakh",
    difficulty: "challenging",
    duration: { days: 10, nights: 9 },
    distance: 480,
    maxAltitude: 5328,
    startLocation: "Manali",
    endLocation: "Leh",
    overview:
      "Ride the legendary Manali-Leh Highway, a 480 km ribbon of asphalt winding through the mighty Himalayas. Cross five high-altitude passes including the formidable Khardung La at 5,328m, camp beside turquoise high-altitude lakes, and experience the raw, untamed beauty of Ladakh's moon-like landscapes. This is the definitive Himalayan motorcycling adventure — challenging roads, stunning vistas, and the unmatched thrill of riding through some of the highest motorable passes on Earth.",
    highlights: [
      "Ride over Khardung La (5,328m) — one of the world's highest motorable passes",
      "Camp under a billion stars at the surreal Sarchu plateau",
      "Witness the stunning confluence of Indus and Zanskar rivers at Nimmu",
      "Explore the ancient monasteries of Thiksey and Hemis in Ladakh",
      "Marvel at the 22 hairpin bends of the Gata Loops",
      "Ride through the dramatic More Plains — a 40 km stretch of straight tarmac at 4,800m",
      "Cross Baralacha La, Lachung La, and Tanglang La passes in a single expedition",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali",
        description:
          "Arrive in Manali and check into your hotel. Meet your fellow riders and the expedition team over a welcome dinner. Attend a comprehensive briefing covering the route, riding formations, safety protocols, and altitude sickness awareness. Use the evening to acclimatise and explore Old Manali's charming cafes.",
        stayAt: "Hotel in Manali",
        altitude: 2050,
      },
      {
        day: 2,
        title: "Manali to Jispa | Crossing Rohtang La",
        description:
          "Begin the adventure by crossing Rohtang La (3,978m). Descend into the lush Lahaul Valley through Keylong. Ride along the Bhaga River to reach the picturesque village of Jispa, nestled beside a gushing stream. The landscape transforms dramatically from pine forests to stark mountain desert.",
        stayAt: "Camps/Homestay in Jispa",
        altitude: 3200,
      },
      {
        day: 3,
        title: "Jispa to Sarchu | Into the Trans-Himalayas",
        description:
          "Today you enter the trans-Himalayan region. Cross Baralacha La (4,890m) where three major mountain ranges meet. Marvel at the stunning Suraj Tal lake before descending to Sarchu — a high-altitude plateau on the Himachal-Ladakh border. Overnight in tented accommodation under a canopy of stars.",
        stayAt: "Camp at Sarchu",
        altitude: 4290,
      },
      {
        day: 4,
        title: "Sarchu to Leh | The Grand Approach",
        description:
          "The longest and most demanding riding day. Navigate the 22 hairpin bends of the Gata Loops, cross the vast More Plains, and conquer Tanglang La (5,328m) — the second-highest point on the highway. The descent into Leh is nothing short of spectacular as the Indus Valley unfolds before you.",
        stayAt: "Hotel in Leh",
        altitude: 3500,
      },
      {
        day: 5,
        title: "Leh | Rest and Acclimatisation",
        description:
          "A well-deserved rest day in Leh. Explore the historic Leh Palace and the bustling local market at your own pace. Visit Shanti Stupa for panoramic views of the town. This day is crucial for acclimatisation before tackling Khardung La. Get your bikes serviced and equipment checked.",
        stayAt: "Hotel in Leh",
        altitude: 3500,
      },
      {
        day: 6,
        title: "Leh to Nubra Valley via Khardung La",
        description:
          "The day you've been waiting for — ride up to Khardung La (5,328m), the world's highest all-season motorable pass. The thin air and biting wind add to the sense of achievement. Descend into the surreal Nubra Valley with its sand dunes, Bactrian camels, and the charming Diskit Monastery perched dramatically on a hilltop.",
        stayAt: "Camp in Nubra Valley",
        altitude: 3048,
      },
      {
        day: 7,
        title: "Nubra Valley to Pangong Tso | The Road Less Travelled",
        description:
          "Take the scenic back route through Shyok Valley to reach the breathtaking Pangong Tso — a high-altitude lake stretching 134 km across the India-China border. The ever-changing shades of blue will leave you spellbound. Watch the sunset paint the surrounding mountains in hues of gold and amber.",
        stayAt: "Camp near Pangong Tso",
        altitude: 4250,
      },
      {
        day: 8,
        title: "Pangong Tso to Leh | The Return",
        description:
          "Catch the sunrise over Pangong Tso — a memory that will stay with you forever. Ride back to Leh via Chang La (5,360m), one of the highest passes in the region. The afternoon is free for souvenir shopping at Leh Market or relaxing at a rooftop café overlooking the town.",
        stayAt: "Hotel in Leh",
        altitude: 3500,
      },
      {
        day: 9,
        title: "Leh | Monasteries and Culture",
        description:
          "Explore the spiritual heart of Ladakh. Visit Thiksey Monastery, often called the 'Mini Potala', and the ancient Hemis Monastery, the largest in Ladakh. Witness the confluence of the Indus and Zanskar rivers at Nimmu. Wrap up the day with a celebratory farewell dinner with the entire group.",
        stayAt: "Hotel in Leh",
        altitude: 3500,
      },
      {
        day: 10,
        title: "Departure from Leh",
        description:
          "After breakfast, the expedition officially concludes. Transfer to Leh Airport for your onward journey, carrying memories of the most epic motorcycle ride of your life.",
      },
    ],
    images: ["/images/tours/manali-leh-highway.webp"],
    featured: true,
    style: "raid",
    departures: [
      { date: "2026-07-15", spotsLeft: 4, guaranteed: true },
      { date: "2026-08-01", spotsLeft: 8, guaranteed: true },
      { date: "2026-08-20", spotsLeft: 6, guaranteed: false },
      { date: "2026-09-05", spotsLeft: 10, guaranteed: false },
    ],
    rating: 4.9,
    reviewCount: 128,
    priceRange: { min: 24999, max: 49999 },
    packages: [
      {
        id: "mlh-basic",
        name: "Rider Only",
        tier: "basic",
        description:
          "Perfect for experienced riders who prefer to arrange their own stays and meals. Includes motorcycle rental, fuel, and a dedicated road captain.",
        price: 24999,
        inclusions: [
          { icon: "\uD83C\uDFCD\uFE0F", label: "Royal Enfield Himalayan 411cc motorcycle rental" },
          { icon: "\u26FD", label: "Unlimited fuel for the entire journey" },
          { icon: "\uD83D\uDC68\u200D\u2708\uFE0F", label: "Experienced road captain and mechanic" },
          { icon: "\uD83D\uDEE0\uFE0F", label: "Basic spare parts and puncture repair kit" },
          { icon: "\uD83D\uDEE1\uFE0F", label: "Riding gear on request (helmet, knee & elbow guards)" },
          { icon: "\uD83C\uDFE5", label: "All inner line permits and green fee processing" },
        ],
      },
      {
        id: "mlh-standard",
        name: "Rider + Stay",
        tier: "standard",
        description:
          "Our most popular package — full riding experience with comfortable accommodations and breakfasts sorted at every stop.",
        price: 37999,
        label: "Most Popular",
        inclusions: [
          { icon: "\uD83C\uDFCD\uFE0F", label: "Royal Enfield Himalayan 411cc motorcycle rental" },
          { icon: "\u26FD", label: "Unlimited fuel for the entire journey" },
          { icon: "\uD83D\uDC68\u200D\u2708\uFE0F", label: "Experienced road captain and mechanic" },
          { icon: "\uD83D\uDEE0\uFE0F", label: "Basic spare parts and puncture repair kit" },
          { icon: "\uD83C\uDFE8", label: "9 nights accommodation (hotels, camps & homestays)" },
          { icon: "\uD83C\uDF73", label: "Daily breakfast and dinner throughout the trip" },
        ],
      },
      {
        id: "mlh-premium",
        name: "All Inclusive",
        tier: "premium",
        description:
          "The ultimate hassle-free expedition. Everything is taken care of — from your airport pickup to premium stays and all meals.",
        price: 49999,
        inclusions: [
          { icon: "\uD83C\uDFCD\uFE0F", label: "Royal Enfield Himalayan 411cc motorcycle rental" },
          { icon: "\u26FD", label: "Unlimited fuel for the entire journey" },
          { icon: "\uD83D\uDC68\u200D\u2708\uFE0F", label: "Experienced road captain, mechanic, and backup vehicle" },
          { icon: "\u2708\uFE0F", label: "Airport transfers (pickup & drop) in private vehicle" },
          { icon: "\uD83C\uDFE8", label: "9 nights premium accommodation with attached washrooms" },
          { icon: "\uD83C\uDF7D\uFE0F", label: "All meals — breakfast, lunch, dinner, and evening tea" },
        ],
      },
    ],
    included: [
      "Royal Enfield Himalayan 411cc motorcycle (or similar) with fuel",
      "All inner line permits, environmental fees, and toll charges",
      "Services of an experienced road captain and back-up mechanic",
      "Basic spare parts kit and medical first-aid box",
      "Puncture repair and minor mechanical on-road assistance",
      "Oxygen cylinder carried in backup vehicle for altitude emergencies",
    ],
    excluded: [
      "Security deposit for motorcycle rental (₹10,000, refundable)",
      "Any damage to the motorcycle beyond normal wear and tear",
      "Personal travel insurance (mandatory, must cover high-altitude motorbiking)",
      "Any personal expenses such as snacks, beverages, laundry, or tips",
      "Airfare or transportation to Manali and return from Leh",
      "Cost incurred due to roadblocks, landslides, or unforeseen events",
    ],
    thingsToCarry: [
      "Valid driving licence (original + 2 photocopies) and ID proof",
      "Riding jacket with CE-certified armour, riding pants or knee guards",
      "Full-face helmet (DOT/ECE certified), riding gloves, and sturdy ankle-length boots",
      "Thermal innerwear, 2-3 quick-dry t-shirts, and a heavy down jacket for sub-zero nights",
      "Sunscreen SPF 50+, UV-protection sunglasses, lip balm, and a wide-brim hat",
      "Personal medication, Diamox (for altitude), painkillers, and a reusable water bottle",
    ],
    faqs: [
      {
        question: "Do I need prior high-altitude riding experience for this trip?",
        answer:
          "While prior high-altitude experience is helpful, it is not mandatory. Our road captain provides detailed daily briefings, and the itinerary is designed with gradual altitude gain to help your body acclimatise. You should be comfortable riding a 200cc+ motorcycle on mountain roads. First-time Himalayan riders are welcome if they possess solid riding fundamentals.",
      },
      {
        question: "What happens if my motorcycle breaks down in a remote area?",
        answer:
          "A dedicated mechanic travels with the group (or in the backup vehicle behind the group) and carries essential spare parts like clutch cables, brake pads, tubes, and spark plugs. Most common issues are resolved roadside within 30 minutes. In the rare event of a major failure, the backup vehicle can transport you and the bike to the nearest town for repairs.",
      },
      {
        question: "Is the standard package accommodation heated and comfortable?",
        answer:
          "Accommodation varies by location. In Manali, Leh, and Nubra you stay in comfortable hotels or guesthouses with hot water and electricity. At Sarchu and Pangong Tso, you stay in Swiss tents with heavy blankets — these campsites are basic but cosy. Most high-altitude camps have shared washroom facilities. The premium package upgrades you to attached-bathroom tents where available.",
      },
      {
        question: "What is the best time of year to ride the Manali-Leh Highway?",
        answer:
          "The Manali-Leh Highway is typically open from mid-June to late September, with July and August being the prime months. During this window the snow has cleared from the high passes, the weather is relatively stable, and the road conditions are at their best. Early June can feature lingering snow crossings, while September offers stunning autumn colours but colder nights.",
      },
    ],
  },

  // ─── Tour 2: Spiti Valley Circuit ────────────────────────────────────
  {
    id: "tour-002",
    slug: "spiti-valley-circuit",
    name: "Spiti Valley Circuit",
    subtitle: "The ultimate Himalayan circuit through the barren, hauntingly beautiful Spiti Valley",
    type: "bike",
    region: "himachal",
    difficulty: "challenging",
    duration: { days: 8, nights: 7 },
    distance: 750,
    maxAltitude: 4590,
    startLocation: "Shimla",
    endLocation: "Manali",
    overview:
      "Embark on a mesmerising 750 km loop through the cold desert of Spiti Valley, starting from the charming hill station of Shimla and ending in Manali. Ride through jaw-dropping gorges carved by the Spiti River, visit 1,000-year-old monasteries clinging to cliffsides, and cross the formidable Kunzum Pass at 4,590m. This circuit offers an ever-changing canvas — from the lush forests of Kinnaur to the stark, lunar terrain of Spiti and finally the green Lahaul Valley.",
    highlights: [
      "Cross the dramatic Kunzum Pass (4,590m) — the gateway to Spiti Valley",
      "Visit Key Monastery — a 1,000-year-old monastic complex perched atop a hill",
      "Mail a postcard from the world's highest post office in Hikkim (4,400m)",
      "Ride alongside the powerful Spiti River through deep gorges and canyons",
      "Explore the ancient mummy of Giu village, naturally preserved for over 500 years",
      "Witness the stunning Chandratal Lake — the 'Moon Lake' at 4,300m",
    ],
    itinerary: [
      {
        day: 1,
        title: "Shimla to Sangla | Into Kinnaur",
        description:
          "Depart Shimla early and ride along the Sutlej River through the apple orchards of Kinnaur. Pass through the impressive Tranda Dhank rock cut road and the engineering marvel of the Karcham Wangtoo Dam. Reach the beautiful village of Sangla, set against the backdrop of the Kinner Kailash range.",
        stayAt: "Homestay in Sangla Valley",
        altitude: 2680,
      },
      {
        day: 2,
        title: "Sangla to Kalpa | Apple Country",
        description:
          "Spend the morning exploring Chitkul, the last inhabited village on the Indo-Tibetan border. In the afternoon ride to Kalpa, a paradise of apple orchards and cedar forests. The evening views of the Kinner Kailash peak glowing golden at sunset are simply unforgettable.",
        stayAt: "Hotel in Kalpa",
        altitude: 2960,
      },
      {
        day: 3,
        title: "Kalpa to Tabo | The Gateway to Spiti",
        description:
          "Leave Kinnaur behind and enter Spiti proper. The landscape transforms dramatically as vegetation gives way to stark, colourful rock formations. Visit the ancient Nako Lake and village before descending into the Spiti Valley. Reach Tabo, home to the 1,020-year-old Tabo Monastery — the 'Ajanta of the Himalayas'.",
        stayAt: "Homestay in Tabo",
        altitude: 3280,
      },
      {
        day: 4,
        title: "Tabo to Kaza via Dhankar | Monasteries and Marvels",
        description:
          "Ride along the Spiti River to the dramatically situated Dhankar Monastery, perched on a 300m cliff-edge spur. Continue to Kaza, the administrative capital of Spiti. En route, visit the Pin Valley National Park entry point. Spend the evening exploring the Kaza market and trying local Spitian cuisine.",
        stayAt: "Hotel in Kaza",
        altitude: 3650,
      },
      {
        day: 5,
        title: "Kaza | Key, Kibber, Hikkim, Langza",
        description:
          "A day dedicated to exploring the jewels around Kaza. Visit the iconic Key Monastery at sunrise, then ride up to Kibber village — once the highest motorable village in the world. Send postcards from Hikkim's tiny post office and see the Langza Buddha statue overlooking the entire valley with snow peaks in the background.",
        stayAt: "Hotel in Kaza",
        altitude: 3650,
      },
      {
        day: 6,
        title: "Kaza to Chandratal Lake | The Moon Lake",
        description:
          "Cross the Kunzum Pass (4,590m) — the gatekeeper between Spiti and Lahaul. At the summit, stop to offer prayers at the Kunzum Mata temple. Descend to the breathtaking Chandratal Lake, whose crystal-clear waters reflect the surrounding peaks. Camp beside this high-altitude wonder and watch the Milky Way emerge after dark.",
        stayAt: "Camp near Chandratal Lake",
        altitude: 4300,
      },
      {
        day: 7,
        title: "Chandratal to Manali | Lahaul's Green Embrace",
        description:
          "Wake up to a stunning sunrise over Chandratal. Ride down through the lush green Lahaul Valley, passing through Batal and Chhatru. Cross the Rohtang Pass (3,978m) and descend into Manali's cedar forests. Celebrate completing the epic Spiti Circuit with a hot meal and a comfortable bed.",
        stayAt: "Hotel in Manali",
        altitude: 2050,
      },
      {
        day: 8,
        title: "Departure from Manali",
        description:
          "After breakfast, the journey concludes. Transfer to Manali bus stand or Bhuntar Airport at your convenience. Bid farewell to new friends, carrying a camera roll full of jaw-dropping landscapes and a heart full of Spiti's raw, untamed beauty.",
      },
    ],
    images: ["/images/tours/spiti-valley-circuit.webp", "/images/tours/spiti-valley-circuit-2.webp"],
    featured: true,
    style: "raid",
    departures: [
      { date: "2026-07-20", spotsLeft: 5, guaranteed: true },
      { date: "2026-08-10", spotsLeft: 7, guaranteed: true },
      { date: "2026-08-28", spotsLeft: 9, guaranteed: false },
      { date: "2026-09-15", spotsLeft: 3, guaranteed: false },
    ],
    rating: 4.8,
    reviewCount: 94,
    priceRange: { min: 19999, max: 42999 },
    packages: [
      {
        id: "svc-basic",
        name: "Rider Only",
        tier: "basic",
        description:
          "Ideal for independent riders. Motorcycle, fuel, and road captain included — arrange your own stays and meals along the route.",
        price: 19999,
        inclusions: [
          { icon: "\uD83C\uDFCD\uFE0F", label: "Royal Enfield Himalayan 411cc motorcycle rental" },
          { icon: "\u26FD", label: "Unlimited fuel for the entire 750 km circuit" },
          { icon: "\uD83D\uDC68\u200D\u2708\uFE0F", label: "Experienced road captain and support mechanic" },
          { icon: "\uD83D\uDEE0\uFE0F", label: "Essential spare parts and emergency toolkit" },
          { icon: "\uD83D\uDEE1\uFE0F", label: "Basic riding safety gear available on request" },
          { icon: "\uD83C\uDFE5", label: "All necessary permits and environmental cess fees" },
        ],
      },
      {
        id: "svc-standard",
        name: "Rider + Stay",
        tier: "standard",
        description:
          "Our most booked option — ride worry-free with comfortable stays and breakfasts sorted at every stop.",
        price: 32999,
        label: "Most Popular",
        inclusions: [
          { icon: "\uD83C\uDFCD\uFE0F", label: "Royal Enfield Himalayan 411cc motorcycle rental" },
          { icon: "\u26FD", label: "Unlimited fuel for the entire 750 km circuit" },
          { icon: "\uD83D\uDC68\u200D\u2708\uFE0F", label: "Experienced road captain and support mechanic" },
          { icon: "\uD83C\uDFE8", label: "7 nights accommodation (hotels, homestays & camps)" },
          { icon: "\uD83C\uDF73", label: "Daily breakfast and dinner across all stops" },
          { icon: "\uD83D\uDEE0\uFE0F", label: "Essential spare parts and emergency toolkit" },
        ],
      },
      {
        id: "svc-premium",
        name: "All Inclusive",
        tier: "premium",
        description:
          "The all-in Spiti experience. Premium stays, all meals, backup vehicle, and airport transfers included.",
        price: 42999,
        inclusions: [
          { icon: "\uD83C\uDFCD\uFE0F", label: "Royal Enfield Himalayan 411cc motorcycle rental" },
          { icon: "\u26FD", label: "Unlimited fuel for the entire 750 km circuit" },
          { icon: "\uD83D\uDC68\u200D\u2708\uFE0F", label: "Road captain, mechanic, and dedicated 4x4 backup vehicle" },
          { icon: "\u2708\uFE0F", label: "Airport/station transfers at Shimla and Manali" },
          { icon: "\uD83C\uDFE8", label: "7 nights premium accommodation with attached washrooms" },
          { icon: "\uD83C\uDF7D\uFE0F", label: "All meals — breakfast, lunch, dinner, and evening snacks" },
        ],
      },
    ],
    included: [
      "Royal Enfield Himalayan 411cc motorcycle with unlimited fuel",
      "All inner line permits, environmental fees, and toll charges",
      "Experienced road captain and back-up mechanic riding with the group",
      "Essential spare parts kit and medical first-aid box",
      "Puncture repair and mechanical assistance throughout the trip",
      "Oxygen support for high-altitude emergencies",
    ],
    excluded: [
      "Security deposit for motorcycle (₹10,000, fully refundable upon return)",
      "Any damage to motorcycle beyond normal wear and tear",
      "Personal travel insurance covering high-altitude motorbiking",
      "Snacks, beverages, bottled water, laundry, and personal shopping",
      "Transportation to Shimla start point and from Manali end point",
      "Any costs arising from road closures, landslides, or weather delays",
    ],
    thingsToCarry: [
      "Valid Indian driving licence with at least a learner's permit for geared motorcycles",
      "Riding jacket, knee guards or riding pants, and sturdy leather or touring boots",
      "Full-face helmet, anti-glare riding gloves, and UV-protection goggles",
      "Thermal inner layers, fleece jacket, windproof outer shell, and down feather jacket",
      "High SPF sunscreen, lip balm, moisturiser, and a reusable insulated water bottle",
      "Personal medical kit: Diamox for altitude, basic painkillers, band-aids, and any prescription medicines",
    ],
    faqs: [
      {
        question: "Is the Spiti Circuit more difficult than the Manali-Leh Highway?",
        answer:
          "Both routes have their unique challenges. The Spiti Circuit covers more distance (750 km vs 480 km) and features rougher roads with more water crossings, especially between Kaza and Chandratal. However, the maximum altitude is lower (4,590m at Kunzum Pass vs 5,328m at Khardung La). Many riders consider Spiti technically more demanding but slightly less punishing in terms of altitude. Both are rated 'challenging' and require solid riding skills.",
      },
      {
        question: "What type of accommodation can I expect in Spiti?",
        answer:
          "Spiti is remote, and accommodation reflects this. In Sangla, Kalpa, Kaza, and Manali you get comfortable hotel rooms or guesthouses with geysers for hot water. In Tabo, you stay at a family-run homestay with basic but clean rooms and authentic home-cooked meals. At Chandratal, you camp in Swiss tents with heavy blankets. Washrooms may be shared at homestays and camps. This rustic charm is part of the authentic Spiti experience.",
      },
      {
        question: "Will I get mobile network and internet connectivity during the trip?",
        answer:
          "Connectivity is very limited in Spiti. BSNL postpaid works in Kaza and a few other spots, while other networks are unreliable. Internet is available at cafés in Kaza via satellite-based Wi-Fi. Expect to be completely disconnected for most of the journey — consider this a blessing in disguise and an opportunity to truly immerse yourself in the landscape.",
      },
      {
        question: "What is the best season for the Spiti Valley Circuit?",
        answer:
          "The ideal window is mid-June to late September. July and August offer the most accessible road conditions as the snow has fully melted from Kunzum Pass. June sees some snow patches on the pass which can be adventurous to cross. September brings crisp, clear skies and stunning autumn colours, though nights become significantly colder. The route is closed from October to May due to heavy snowfall on Kunzum Pass.",
      },
    ],
  },

  // ─── Tour 3: Kashmir Great Lakes Trek ────────────────────────────────
  {
    id: "tour-003",
    slug: "kashmir-great-lakes-trek",
    name: "Kashmir Great Lakes Trek",
    subtitle: "Trek through alpine paradise, crossing seven pristine glacial lakes in the Pir Panjal range",
    type: "regular",
    region: "kashmir",
    difficulty: "moderate",
    duration: { days: 7, nights: 6 },
    maxAltitude: 4200,
    startLocation: "Srinagar",
    endLocation: "Srinagar",
    overview:
      "Widely regarded as India's most beautiful trek, the Kashmir Great Lakes Trek takes you through a breathtaking alpine wonderland of seven glacial lakes, each a different shade of blue and green. Crossing four high-altitude passes (up to 4,200m), the trail winds through vast meadows carpeted with wildflowers, past thundering streams, and alongside snow-capped peaks of the Pir Panjal range. Every campsite is postcard-worthy, and the ever-changing landscape ensures no two days feel the same.",
    highlights: [
      "Camp beside the turquoise Vishansar and Krishansar twin lakes at 3,700m",
      "Witness Gadsar Lake — known as the 'Lake of Flowers' for its floral shoreline",
      "Cross the Gadsar Pass (4,200m) with panoramic views of the Kashmir Valley",
      "Trek through endless meadows of wildflowers in peak season (July-August)",
      "Experience the emerald-green Gangabal twin lakes beneath Mount Harmukh",
      "Watch the golden sunrise paint the surrounding 5,000m+ peaks every morning",
    ],
    itinerary: [
      {
        day: 1,
        title: "Srinagar to Sonamarg | Shikara Ride & Drive",
        description:
          "Arrive in Srinagar and take a traditional Shikara ride on Dal Lake, passing floating gardens and ornate houseboats. Drive 3 hours through pine forests and Sindh River gorges to reach Sonamarg, the 'Meadow of Gold'. Attend the trek briefing, check your equipment, and enjoy the crisp mountain air of this basecamp town.",
        stayAt: "Hotel in Sonamarg",
        altitude: 2800,
      },
      {
        day: 2,
        title: "Sonamarg to Nichnai | The First Ascent",
        description:
          "The trek begins through dense maple and pine forests, crossing the crystal-clear Nichnai stream. The trail climbs steadily past shepherd huts and grazing meadows. After a steady 5-6 hour ascent, arrive at Nichnai campsite — a lush green bowl surrounded by snow-dusted ridges. The silence here, broken only by gurgling stream water, is deeply therapeutic.",
        stayAt: "Camp at Nichnai",
        altitude: 3500,
      },
      {
        day: 3,
        title: "Nichnai to Vishansar Lake | Crossing Nichnai Pass",
        description:
          "Today's highlight is crossing the Nichnai Pass (4,100m). The climb is gradual and rewarding, with the landscape opening into sweeping alpine meadows. From the pass, catch your first glimpse of the Vishansar Valley descending below. Descend to the stunning Vishansar Lake — its turquoise waters reflecting the surrounding peaks — and set up camp by its shore.",
        stayAt: "Camp at Vishansar Lake",
        altitude: 3700,
      },
      {
        day: 4,
        title: "Vishansar to Gadsar | Twin Lakes & The Flower Lake",
        description:
          "Wake up to the reflection of the Kishansar peak in the lake's still morning waters. A short hike takes you to Krishansar Lake, Vishansar's twin. Then climb to Gadsar Pass (4,200m), the highest point on the trek. The descent leads to Gadsar Lake — renowned for the thousands of alpine flowers that bloom along its banks in July and August. This is the most photogenic stretch of the entire trek.",
        stayAt: "Camp at Gadsar Lake",
        altitude: 3600,
      },
      {
        day: 5,
        title: "Gadsar to Satsar | Seven Small Lakes",
        description:
          "A relatively easy day trekking through rolling meadows to the Satsar campsite. Satsar, meaning 'seven lakes', is a collection of small interconnected water bodies scattered across a high plateau. The campsite offers magnificent views of the Harmukh massif and the distant Nanga Parbat on clear days. Spend the afternoon exploring the nearby lakes.",
        stayAt: "Camp at Satsar",
        altitude: 3650,
      },
      {
        day: 6,
        title: "Satsar to Gangabal Lakes | The Emerald Twins",
        description:
          "Descend through rocky moraines and finally arrive at the Gangabal twin lakes — two stunning emerald-green lakes nestled at the base of Mount Harmukh (5,142m). This is the trekkers' last campsite and one of the most spiritually significant — the lakes are considered sacred and feature in Hindu mythology. Enjoy the final sunset on the trail, with trout rising in the lake's glassy surface.",
        stayAt: "Camp at Gangabal Lakes",
        altitude: 3570,
      },
      {
        day: 7,
        title: "Gangabal to Naranag | Descent & Return to Srinagar",
        description:
          "The final day brings a steep 4-hour descent through pine forests to the Naranag village, home to an 8th-century Shiva temple. Vehicles meet you here for the drive back to Srinagar (2 hours). The trek officially ends at Srinagar, where you can freshen up before heading to the airport or extending your stay to explore the city.",
      },
    ],
    images: ["/images/tours/kashmir-great-lakes-trek.webp"],
    featured: true,
    style: "discovery",
    departures: [
      { date: "2026-07-25", spotsLeft: 6, guaranteed: true },
      { date: "2026-08-12", spotsLeft: 8, guaranteed: true },
      { date: "2026-08-30", spotsLeft: 5, guaranteed: false },
      { date: "2026-09-12", spotsLeft: 11, guaranteed: false },
    ],
    rating: 4.9,
    reviewCount: 67,
    priceRange: { min: 14999, max: 32999 },
    packages: [
      {
        id: "kgl-basic",
        name: "Trek Only",
        tier: "basic",
        description:
          "For experienced trekkers who have their own gear and prefer a guided-only experience on the trail.",
        price: 14999,
        inclusions: [
          { icon: "\uD83E\uDD7E", label: "Certified mountain trek leader and local guide" },
          { icon: "\uD83C\uDFC6", label: "All trekking permits and forest entry fees" },
          { icon: "\u26D5", label: "Camping at designated campsites with basic kitchen tent" },
          { icon: "\uD83E\uDE7A", label: "Crampons and gaiters for snow patches (on request)" },
          { icon: "\uD83E\uDDFA", label: "First-aid kit, medical backup, and oxygen cylinder" },
        ],
      },
      {
        id: "kgl-standard",
        name: "Trek + Meals",
        tier: "standard",
        description:
          "Our most popular trekking package — professional guidance plus nourishing meals that keep you going.",
        price: 24999,
        label: "Most Popular",
        inclusions: [
          { icon: "\uD83E\uDD7E", label: "Certified mountain trek leader and support staff" },
          { icon: "\uD83C\uDFC6", label: "All trekking permits and forest entry fees" },
          { icon: "\u26D5", label: "High-quality tents (twin sharing), sleeping bags, and mattresses" },
          { icon: "\uD83C\uDF73", label: "Wholesome vegetarian meals from day 2 lunch to day 7 breakfast" },
          { icon: "\uD83E\uDDFA", label: "First-aid kit, medical backup, and oxygen cylinder" },
          { icon: "\uD83C\uDF92", label: "Common camping equipment: toilet tent, dining tent, stools" },
        ],
      },
      {
        id: "kgl-premium",
        name: "All Inclusive",
        tier: "premium",
        description:
          "The complete Kashmir trekking experience — gear, meals, porters, transfers, and a Shikara ride included.",
        price: 32999,
        inclusions: [
          { icon: "\uD83E\uDD7E", label: "Certified mountain trek leader, guide, cook, and porter team" },
          { icon: "\uD83C\uDFC6", label: "All permits, insurance for staff, and forest fees" },
          { icon: "\uD83C\uDFE8", label: "Hotel accommodation in Sonamarg (1 night) + 5 nights camping" },
          { icon: "\uD83C\uDF7D\uFE0F", label: "All meals from packed lunch day 1 to breakfast day 7" },
          { icon: "\uD83C\uDF92", label: "Personal porter for up to 12 kg luggage (one porter per trekker)" },
          { icon: "\uD83D\uDEA4", label: "Shikara ride on Dal Lake + Srinagar-Sonamarg transfers" },
        ],
      },
    ],
    included: [
      "Certified and experienced trek leader with knowledge of local terrain and weather",
      "All forest permits, camping fees, and wildlife entry charges",
      "Trek-grade tents (twin sharing), sleeping bags rated to -10°C, and insulated mats",
      "Common camping equipment: dining tent, toilet tent, stools, and kitchen setup",
      "Medical kit, oximeter, blood pressure monitor, and supplemental oxygen",
      "Crampons and gaiters provided when snow crossings are anticipated",
    ],
    excluded: [
      "Personal trekking gear (trekking poles, backpack, trekking shoes can be rented separately)",
      "Travel insurance covering high-altitude trekking (mandatory for participation)",
      "Any meals or accommodation in Srinagar beyond the trek dates",
      "Personal expenses: snacks, beverages, bottled water, tips for staff",
      "Transportation to and from Srinagar (flight, train, or bus)",
      "Costs arising from weather disruptions, early descent, or medical evacuation",
    ],
    thingsToCarry: [
      "Sturdy waterproof trekking boots with ankle support and good grip",
      "Backpack (50-60 litres) with rain cover for personal gear",
      "Trekking pole (adjustable, preferably with carbide tip for rocky terrain)",
      "Layered clothing: thermal base layer, fleece mid-layer, and waterproof windcheater",
      "Sun cap, woollen cap, UV-protection sunglasses, and SPF 50+ sunscreen",
      "Personal medication, water bottle (1 litre x 2), and small headlamp with spare batteries",
    ],
    faqs: [
      {
        question: "How fit do I need to be for the Kashmir Great Lakes Trek?",
        answer:
          "This is a moderate-grade trek. You should be able to walk 6-8 hours on undulating terrain with a 8-10 kg backpack. We recommend starting a fitness routine at least 4 weeks before the trek — focus on cardio (jogging, cycling, swimming), leg strength (squats, lunges, stair climbing), and a few long practice walks with your loaded backpack. If you can comfortably jog 5 km in under 35 minutes, you're well prepared.",
      },
      {
        question: "What is the best time to see the wildflowers in full bloom?",
        answer:
          "The wildflowers along the Kashmir Great Lakes trek peak during the last two weeks of July and the first half of August. This is when the Gadsar Lake area transforms into a natural garden with hundreds of species in bloom — blue poppies, forget-me-nots, potentillas, and dozens of varieties of daisies. The meadows are at their lushest green, and the weather is generally pleasant with temperatures ranging from 5°C to 20°C.",
      },
      {
        question: "Is there a risk of altitude sickness on this trek?",
        answer:
          "Altitude sickness can affect anyone above 3,000m regardless of fitness level. Our itinerary includes gradual altitude gain for natural acclimatisation. The highest sleep altitude is 3,700m (Vishansar), and the highest pass is 4,200m (Gadsar Pass). Our trek leaders are trained in identifying early AMS symptoms and carry a pulse oximeter, blood pressure monitor, and supplemental oxygen. We also include Diamox in our medical kit and advise trekkers to hydrate constantly.",
      },
      {
        question: "How cold does it get at night during the trek?",
        answer:
          "Nighttime temperatures at campsites range from 2°C to 8°C in peak summer (July-August), and can dip to -2°C in early June or late September. We provide sleeping bags rated to -10°C which keep you warm and comfortable. You should carry thermal inners and a fleece layer to wear inside the sleeping bag. During the day, temperatures range from 12°C to 22°C, making it pleasant for trekking in a t-shirt or light jacket.",
      },
    ],
  },

  // ─── Tour 4: Zanskar Valley Expedition ──────────────────────────────
  {
    id: "tour-004",
    slug: "zanskar-valley-expedition",
    name: "Zanskar Valley Expedition",
    subtitle: "Ride into the forbidden kingdom — an extreme 1,200 km odyssey through Ladakh and Zanskar",
    type: "bike",
    region: "ladakh",
    difficulty: "extreme",
    duration: { days: 14, nights: 13 },
    distance: 1200,
    maxAltitude: 5359,
    startLocation: "Manali",
    endLocation: "Leh",
    overview:
      "The Zanskar Valley Expedition is our most ambitious motorcycle journey — a gruelling 1,200 km loop that ventures deep into one of the most remote inhabited regions on Earth. Starting from Manali and ending in Leh, this expedition crosses the Shingo La pass into the isolated Zanskar Valley, follows the mighty Zanskar River, climbs the formidable Penzi La (4,400m), and skirts the legendary Suru Valley before joining the Srinagar-Leh Highway. This is not a ride for the faint-hearted — it is a life-changing expedition through landscapes so dramatic they defy description.",
    highlights: [
      "Cross the remote Shingo La (5,090m) — the traditional gateway to Zanskar",
      "Ride through the entire length of the Zanskar Valley, one of the last truly isolated Himalayan kingdoms",
      "Visit the thousand-year-old Phuktal Monastery built into a cliffside cave",
      "Camp beside the turquoise Suru River with views of Nun and Kun peaks (7,000m+)",
      "Climb the double-humped Penzi La (4,400m) — the roof of Zanskar",
      "Traverse five distinct Himalayan regions: Lahaul, Zanskar, Suru, Dras, and Ladakh",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Manali | Briefing & Preparation",
        description:
          "Arrive in Manali and settle into your hotel. The expedition leader conducts a comprehensive briefing covering the Zanskar route, weather expectations, altitude protocol, and emergency procedures. Bike allocation, document verification, and gear check are completed today. Enjoy a welcome dinner with your fellow expedition members.",
        stayAt: "Hotel in Manali",
        altitude: 2050,
      },
      {
        day: 2,
        title: "Manali to Jispa | The Warm-Up Ride",
        description:
          "A comfortable opening day to get familiar with your motorcycle. Cross Rohtang La into Lahaul Valley. Ride through Keylong and stop at the ancient Triloknath Temple en route to Jispa. The smooth tarmac and gentle gradients of this section serve as an ideal warm-up for the demanding days ahead.",
        stayAt: "Camps near Jispa",
        altitude: 3200,
      },
      {
        day: 3,
        title: "Jispa to Purne | Entering Zanskar via Shingo La",
        description:
          "The real expedition begins. From Darcha, a rugged dirt track climbs steeply towards Shingo La (5,090m). The rocky, narrow trail demands intense focus and technical riding skill. Descend into Zanskar through the stunning Kargyak Valley with its dramatic rock formations. Reach the remote village of Purne, where the warmth of Zanskari hospitality awaits.",
        stayAt: "Homestay in Purne",
        altitude: 3800,
      },
      {
        day: 4,
        title: "Purne to Padum | Phuktal Monastery",
        description:
          "A short ride to the trailhead, followed by a 2-hour round-trip hike to the extraordinary Phuktal Monastery — a honeycomb of cells built into a natural cave amphitheatre on a cliff face. Continue riding to Padum, the administrative capital of Zanskar. Explore the ancient Sani Monastery and Stupa, one of the oldest Buddhist sites in the region.",
        stayAt: "Guesthouse in Padum",
        altitude: 3500,
      },
      {
        day: 5,
        title: "Padum | Rest & Explore Zanskar's Heart",
        description:
          "A well-earned rest day in Padum. Visit the impressive Karsha Monastery, the largest monastic complex in Zanskar, dramatically perched on a hill overlooking the valley. Explore the local market, interact with Zanskari families, and sample traditional butter tea. Get your bike serviced at the local mechanic before the long ride ahead.",
        stayAt: "Guesthouse in Padum",
        altitude: 3500,
      },
      {
        day: 6,
        title: "Padum to Rangdum | The South Zanskar Trail",
        description:
          "Ride south through the starkly beautiful landscape of upper Zanskar. The route winds along the Tsarap Chu river, passing through tiny villages untouched by modernity. The road is rough and progress is slow, but the sheer isolation and raw beauty make every kilometre worthwhile. Reach Rangdum, a tiny settlement dominated by its 18th-century monastery on a hillock.",
        stayAt: "Camp at Rangdum",
        altitude: 3650,
      },
      {
        day: 7,
        title: "Rangdum to Sankoo | Penzi La & Drang Drung Glacier",
        description:
          "Climb Penzi La (4,400m), the highest point on the Zanskar Highway. From the pass, witness the breathtaking Drang Drung Glacier — a massive river of ice snaking down from the high peaks. Descend into the lush Suru Valley, a startling contrast of green fields against barren brown mountains. The Nun and Kun massifs dominate the skyline all the way to Sankoo.",
        stayAt: "Homestay in Sankoo",
        altitude: 2800,
      },
      {
        day: 8,
        title: "Sankoo to Kargil | Suru Valley Grandeur",
        description:
          "A relatively easy ride following the Suru River downstream. Stop frequently to photograph the ever-changing perspective of Nun Kun peaks. Visit the 7th-century rock-cut Maitreya Buddha at Kartse Khar. Arrive in Kargil by mid-afternoon — a good opportunity for a hot shower, proper laundry, and reconnecting with the internet after six days offline in Zanskar.",
        stayAt: "Hotel in Kargil",
        altitude: 2676,
      },
      {
        day: 9,
        title: "Kargil to Leh | The War Memorial & Lamayuru",
        description:
          "Join the Srinagar-Leh Highway. Pay respects at the Kargil War Memorial in Dras. Ride through the 'Moonland' — the surreal, eroded landscape around Lamayuru Monastery, one of Ladakh's oldest. Descend past the confluence of Indus and Zanskar at Nimmu before arriving in Leh. The contrast between Zanskar's extreme isolation and Leh's vibrant energy is palpable.",
        stayAt: "Hotel in Leh",
        altitude: 3500,
      },
      {
        day: 10,
        title: "Leh | Rest & Acclimatisation",
        description:
          "A full rest day to recover from the demanding ride through Zanskar. Explore Leh at your leisure — visit the Leh Palace, Shanti Stupa, and the colourful street markets. Get your motorcycle thoroughly serviced at our recommended workshop. This rest day also helps with acclimatisation before the high-altitude passes of the coming days.",
        stayAt: "Hotel in Leh",
        altitude: 3500,
      },
      {
        day: 11,
        title: "Leh to Nubra Valley | Khardung La",
        description:
          "Tackle Khardung La (5,359m), the highest point of the expedition. The thin air at the summit is intoxicating — in every sense. Descend through dramatic switchbacks into the Nubra Valley. Visit the 32-metre Maitreya Buddha at Diskit Monastery and take a sunset camel ride on the famed sand dunes of Hunder, with Bactrian camels plodding beneath snow-capped peaks.",
        stayAt: "Camp in Nubra Valley",
        altitude: 3048,
      },
      {
        day: 12,
        title: "Nubra Valley to Pangong Tso | Via Agham-Shyok",
        description:
          "A challenging off-road ride along the Shyok River to reach Pangong Tso. The road is unpaved, thrilling, and spectacular — crossing narrow bridges over turquoise glacial streams. Arrive at Pangong Tso in time for the golden hour, when the lake shifts from deep indigo to brilliant turquoise against the setting sun. Camp right beside the lake shore.",
        stayAt: "Camp at Pangong Tso",
        altitude: 4250,
      },
      {
        day: 13,
        title: "Pangong Tso to Leh | Via Chang La",
        description:
          "Catch the magical sunrise over Pangong Tso before beginning the return journey. Cross Chang La (5,360m) — one of the world's highest motorable passes. Stop at the Chang La temple and enjoy a cup of black tea at the Indian Army's high-altitude tea point. Arrive in Leh by afternoon for the farewell dinner — a celebration of completing one of India's most demanding motorcycle expeditions.",
        stayAt: "Hotel in Leh",
        altitude: 3500,
      },
      {
        day: 14,
        title: "Departure from Leh",
        description:
          "After a final breakfast, transfer to Leh Airport. You leave not just with photographs, but with the deep satisfaction of having ridden through Zanskar — one of the last road trips in India that truly earns the word 'expedition'.",
      },
    ],
    images: ["/images/tours/zanskar-valley-expedition.webp"],
    featured: true,
    style: "raid",
    departures: [
      { date: "2026-07-10", spotsLeft: 3, guaranteed: true },
      { date: "2026-08-05", spotsLeft: 6, guaranteed: true },
      { date: "2026-08-25", spotsLeft: 7, guaranteed: false },
    ],
    rating: 4.9,
    reviewCount: 53,
    priceRange: { min: 39999, max: 69999 },
    packages: [
      {
        id: "zve-basic",
        name: "Rider Only",
        tier: "basic",
        description:
          "For seasoned expedition riders. Motorcycle, fuel, and road captain included — you handle your own stays and meals throughout.",
        price: 39999,
        inclusions: [
          { icon: "\uD83C\uDFCD\uFE0F", label: "Royal Enfield Himalayan 450cc motorcycle rental" },
          { icon: "\u26FD", label: "Unlimited fuel for the full 1,200 km expedition" },
          { icon: "\uD83D\uDC68\u200D\u2708\uFE0F", label: "Expedition leader, road captain, and mechanic" },
          { icon: "\uD83D\uDEE0\uFE0F", label: "Comprehensive spare parts kit and advanced repair tools" },
          { icon: "\uD83C\uDFE5", label: "All permits: ILP, Zanskar entry, environmental fees, border passes" },
          { icon: "\uD83D\uDE91", label: "4x4 backup vehicle carrying fuel, spares, and emergency supplies" },
        ],
      },
      {
        id: "zve-standard",
        name: "Rider + Stay",
        tier: "standard",
        description:
          "Our recommended option — focus purely on the ride while we handle your accommodation and half-board meals.",
        price: 54999,
        label: "Most Popular",
        inclusions: [
          { icon: "\uD83C\uDFCD\uFE0F", label: "Royal Enfield Himalayan 450cc motorcycle rental" },
          { icon: "\u26FD", label: "Unlimited fuel for the full 1,200 km expedition" },
          { icon: "\uD83D\uDC68\u200D\u2708\uFE0F", label: "Expedition leader, road captain, mechanic, and backup driver" },
          { icon: "\uD83C\uDFE8", label: "13 nights accommodation (hotels, camps, homestays, guesthouses)" },
          { icon: "\uD83C\uDF73", label: "Daily breakfast and dinner across all 13 stops" },
          { icon: "\uD83D\uDE91", label: "4x4 backup vehicle carrying fuel, spares, luggage, and medical supplies" },
        ],
      },
      {
        id: "zve-premium",
        name: "All Inclusive",
        tier: "premium",
        description:
          "The definitive Zanskar experience. All-inclusive expedition with premium stays, all meals, porters, and transfers.",
        price: 69999,
        inclusions: [
          { icon: "\uD83C\uDFCD\uFE0F", label: "Royal Enfield Himalayan 450cc motorcycle rental" },
          { icon: "\u26FD", label: "Unlimited fuel for the full 1,200 km expedition" },
          { icon: "\uD83D\uDC68\u200D\u2708\uFE0F", label: "Expedition leader, road captain, mechanic, driver, and porter team" },
          { icon: "\u2708\uFE0F", label: "Airport transfers (Manali pickup & Leh drop) in private SUV" },
          { icon: "\uD83C\uDFE8", label: "13 nights premium accommodation with attached baths where available" },
          { icon: "\uD83C\uDF7D\uFE0F", label: "All meals — breakfast, packed lunch, dinner, and trail snacks" },
        ],
      },
    ],
    included: [
      "Royal Enfield Himalayan 450cc motorcycle with unlimited fuel for the full expedition",
      "4x4 backup vehicle carrying fuel, luggage, spares, and emergency supplies",
      "Experienced expedition leader, road captain, and certified mechanic",
      "All permits including ILP, Zanskar entry fee, environmental cess, and border area passes",
      "Comprehensive medical kit, pulse oximeter, BP monitor, and supplemental oxygen",
      "Satellite communication device (for emergency use in Zanskar's no-network zones)",
    ],
    excluded: [
      "Motorcycle security deposit (₹10,000, refundable on safe return)",
      "Major motorcycle damage caused by rider negligence or off-road misuse",
      "Travel and medical insurance with high-altitude motorbiking and evacuation cover",
      "Personal expenses: laundry, phone calls, snacks, beverages, mineral water, tips",
      "Transportation to Manali and return from Leh (flights, buses, or personal vehicle)",
      "Any costs arising from route changes due to political unrest, road closure, or natural calamity",
    ],
    thingsToCarry: [
      "Valid driving licence, passport-sized photos (for permits), and government ID proof",
      "Full riding gear: armoured jacket, riding pants or knee guards, gloves, and sturdy boots",
      "DOT/ECE-certified full-face helmet with fog-resistant visor",
      "Extreme cold weather layers: thermal innerwear, down jacket rated below -10°C, windproof shell",
      "High SPF sunscreen, UV goggles, balaclava, neck gaiter, and insulated water bottle",
      "Personal medication, Diamox (acetazolamide), anti-diarrhoeal tablets, and rehydration salts",
    ],
    faqs: [
      {
        question: "What makes this expedition 'extreme' compared to other bike tours?",
        answer:
          "The Zanskar expedition is rated 'extreme' because of its length (14 days / 1,200 km), remote nature (large sections have no mobile network, petrol pumps, or medical facilities for 3-4 consecutive days), and the technical difficulty of the Shingo La and Penzi La crossings. Roads in Zanskar are unpaved, rocky, and include multiple water crossings. Riders must be physically fit, mentally resilient, and have prior experience riding on broken mountain roads. This is an expedition, not a tour — the distinction matters.",
      },
      {
        question: "Is there fuel availability along the Zanskar route?",
        answer:
          "Fuel availability is a major logistical challenge. There are no petrol pumps between Darcha (near Jispa) and Kargil — a stretch of roughly 450 km over 5-6 days. Our backup vehicle carries sufficient fuel reserves for the entire group, and the standard and premium packages include unlimited fuel for the full expedition. On basic packages, we provide fuel from the backup vehicle and charge at actual pump rate. We also coordinate with dhaba owners in Padum who sometimes stock emergency fuel.",
      },
      {
        question: "What happens in case of a medical emergency in Zanskar?",
        answer:
          "Medical infrastructure in Zanskar is extremely limited. Padum has a small government hospital for basic treatment. Our expedition carries a comprehensive medical kit, supplemental oxygen, and a satellite communication device (InReach/SatPhone) for SOS situations. The backup vehicle can evacuate a rider to Kargil (6-8 hours from Padum) where better medical facilities exist. All participants must carry personal travel insurance that specifically covers high-altitude motorbiking, helicopter evacuation, and medical repatriation.",
      },
      {
        question: "Can I bring my own motorcycle on this expedition?",
        answer:
          "Absolutely. Many experienced riders prefer their own motorcycles for such long expeditions. Your bike must be a 200cc+ dual-sport or adventure motorcycle in excellent mechanical condition with fresh tyres (preferably knobby or 50/50 dual-sport tyres). We recommend carrying your own spares specific to your motorcycle model. The backup vehicle can carry one personal motorcycle spare-parts bag per rider. Please inform us at the time of booking and we'll adjust the package price accordingly (deduct bike rental cost from the package).",
      },
    ],
  },

  // ─── Tour 5: Valley of Flowers Trek ─────────────────────────────────
  {
    id: "tour-005",
    slug: "valley-of-flowers-trek",
    name: "Valley of Flowers Trek",
    subtitle: "Walk through a UNESCO World Heritage Site carpeted with over 500 species of wildflowers",
    type: "regular",
    region: "uttarakhand",
    difficulty: "moderate",
    duration: { days: 6, nights: 5 },
    maxAltitude: 3658,
    startLocation: "Haridwar",
    endLocation: "Haridwar",
    overview:
      "Discover the enchanting Valley of Flowers, a UNESCO World Heritage Site nestled in the Garhwal Himalayas. This moderate trek takes you through a fairy-tale landscape where the valley floor erupts in a riot of colours each monsoon — blue poppies, Himalayan bellflowers, cobra lilies, and the rare Brahma Kamal. Combined with a visit to Hemkund Sahib, the high-altitude Sikh shrine beside a glacial lake, this trek is a perfect blend of botanical wonder and spiritual experience.",
    highlights: [
      "Walk through the Valley of Flowers National Park, home to over 500 flowering species",
      "Spot rare Himalayan flora including the Brahma Kamal, Blue Poppy, and Cobra Lily",
      "Visit Hemkund Sahib (4,329m), one of the highest Sikh pilgrimage sites in the world",
      "Trek alongside the thundering Pushpawati River through dense oak and rhododendron forests",
      "Explore the charming Himalayan village of Ghangaria at the confluence of two valleys",
    ],
    itinerary: [
      {
        day: 1,
        title: "Haridwar to Govindghat | The Gateway Drive",
        description:
          "Depart Haridwar early morning for a scenic 10-hour drive through the Garhwal Himalayas. The road follows the Alaknanda River past the Panch Prayag confluences — Devprayag, Rudraprayag, Karnaprayag, Nandaprayag, and Vishnuprayag. Pass through the spiritual town of Joshimath before arriving at Govindghat, the trailhead base in the evening.",
        stayAt: "Hotel in Govindghat",
        altitude: 1828,
      },
      {
        day: 2,
        title: "Govindghat to Ghangaria | The Ascent",
        description:
          "Begin the 13 km trek from Govindghat to Ghangaria. The well-marked trail climbs steadily alongside the roaring Lakshman Ganga River. The initial section passes through terraced fields and pine forests, gradually giving way to mixed forests of oak, maple, and rhododendron. Ghangaria is the last inhabited point and serves as the base for both the Valley of Flowers and Hemkund Sahib.",
        stayAt: "Hotel/Camp in Ghangaria",
        altitude: 3049,
      },
      {
        day: 3,
        title: "Valley of Flowers | Into the Blooming Wonderland",
        description:
          "The day you've been dreaming of — enter the Valley of Flowers National Park. A gentle 3 km walk from Ghangaria leads to the valley entrance. Once inside, the landscape opens into a vast, U-shaped alpine valley stretching for 10 km. Millions of flowers carpet the ground in every direction — anemones, primulas, geraniums, marsh marigolds, and dozens of orchid varieties. The valley is criss-crossed by crystal-clear streams and framed by snow-dusted peaks. Spend the entire day exploring, photographing, and simply being present in this botanical paradise.",
        stayAt: "Hotel/Camp in Ghangaria",
        altitude: 3049,
      },
      {
        day: 4,
        title: "Hemkund Sahib | The High-Altitude Pilgrimage",
        description:
          "An early start for the steep 6 km ascent to Hemkund Sahib (4,329m). The climb is strenuous but immensely rewarding. At the top, discover the pristine Hemkund Lake — its crystal-clear waters reflecting the seven surrounding snow peaks. The Gurudwara stands serenely on the lake's edge. Partake in the community kitchen's (langar) simple, nourishing meal served to all pilgrims. The descent back to Ghangaria takes about 2.5 hours.",
        stayAt: "Hotel/Camp in Ghangaria",
        altitude: 3049,
      },
      {
        day: 5,
        title: "Ghangaria to Govindghat | The Return Descent",
        description:
          "Retrace your steps down the 13 km trail to Govindghat. The descent is faster and easier and offers a different perspective on the familiar landscape. Arrive by early afternoon with time to rest tired legs and reflect on the journey. Evening is free to explore the riverside ghats and temples of Govindghat.",
        stayAt: "Hotel in Govindghat",
        altitude: 1828,
      },
      {
        day: 6,
        title: "Govindghat to Haridwar | Journey Home",
        description:
          "After breakfast, drive back to Haridwar. Reflect on three magical days spent in one of the most beautiful valleys on Earth. Arrive in Haridwar by evening for onward connections. The Ganga Aarti at Har Ki Pauri makes for a fitting spiritual conclusion to your Himalayan journey.",
      },
    ],
    images: ["https://images.unsplash.com/photo-1601203184018-6e1a8d739628?w=800&h=600&fit=crop"],
    featured: false,
    style: "discovery",
    departures: [
      { date: "2026-07-15", spotsLeft: 8, guaranteed: true },
      { date: "2026-08-01", spotsLeft: 10, guaranteed: true },
      { date: "2026-08-15", spotsLeft: 5, guaranteed: false },
    ],
    rating: 4.7,
    reviewCount: 89,
    priceRange: { min: 11999, max: 24999 },
    packages: [
      {
        id: "vof-basic",
        name: "Trek Only",
        tier: "basic",
        description:
          "For independent trekkers — includes guide, permits, and camping arrangements on the trail.",
        price: 11999,
        inclusions: [
          { icon: "\uD83E\uDD7E", label: "Experienced local trek guide with botanical knowledge" },
          { icon: "\uD83C\uDFC6", label: "Valley of Flowers entry fee and forest permits" },
          { icon: "\u26D5", label: "Camping at designated sites with basic kitchen setup" },
          { icon: "\uD83E\uDDFA", label: "Basic first-aid kit and on-trail medical support" },
        ],
      },
      {
        id: "vof-standard",
        name: "Trek + Meals",
        tier: "standard",
        description:
          "Our most popular option — enjoy the trek with guides, accommodation, and delicious meals taken care of.",
        price: 18999,
        label: "Most Popular",
        inclusions: [
          { icon: "\uD83E\uDD7E", label: "Experienced trek leader, guide, and support staff" },
          { icon: "\uD83C\uDFC6", label: "All park entry fees, forest permits, and camping charges" },
          { icon: "\uD83C\uDFE8", label: "5 nights accommodation (hotels in Govindghat, camps in Ghangaria)" },
          { icon: "\uD83C\uDF73", label: "Nutritious vegetarian meals from day 1 dinner to day 6 breakfast" },
          { icon: "\u26D5", label: "Twin-sharing tents, sleeping bags, and insulated sleeping mats" },
          { icon: "\uD83E\uDDFA", label: "Comprehensive medical kit with oximeter and oxygen support" },
        ],
      },
      {
        id: "vof-premium",
        name: "All Inclusive",
        tier: "premium",
        description:
          "The complete Valley of Flowers experience — transfers, stays, all meals, porters, and a dedicated naturalist guide.",
        price: 24999,
        inclusions: [
          { icon: "\uD83E\uDD7E", label: "Trek leader, naturalist guide, cook, and porter team" },
          { icon: "\uD83D\uDE90", label: "Haridwar-Govindghat-Haridwar transport in comfortable SUV/Tempo" },
          { icon: "\uD83C\uDFE8", label: "5 nights premium accommodation (best available at each stop)" },
          { icon: "\uD83C\uDF7D\uFE0F", label: "All meals — breakfast, packed lunch, dinner, and trail refreshments" },
          { icon: "\uD83C\uDF92", label: "Personal porter for 10 kg luggage (mules/porters on trail)" },
          { icon: "\uD83C\uDFC6", label: "All permits, entry fees, and mandatory insurance coverage" },
        ],
      },
    ],
    included: [
      "Experienced trek leader and local guide with detailed knowledge of valley flora",
      "Valley of Flowers National Park entry fee and all forest camping permits",
      "Tented accommodation (twin-sharing) with sleeping bags and insulated mats",
      "Common camping equipment: dining tent, toilet tent, kitchen tent, stools",
      "First-aid medical kit, pulse oximeter, blood pressure monitor, and oxygen cylinder",
      "Mules/porters for carrying camping equipment and common supplies",
    ],
    excluded: [
      "Personal trekking gear (trekking poles, backpack, shoes — available for rent)",
      "Travel insurance covering high-altitude trekking and medical emergencies",
      "Any meals or accommodation in destinations before/after scheduled itinerary",
      "Personal expenses: snacks, bottled water, soft drinks, laundry, tips, phone charging",
      "Transportation from hometown to Haridwar and return",
      "Any cost arising from early termination due to weather or medical reasons",
    ],
    thingsToCarry: [
      "Comfortable waterproof trekking shoes with good grip and ankle support",
      "Daypack (20-30 litres) for trail essentials and a duffel bag for camping gear",
      "Rain jacket/poncho — rain is frequent during the Valley of Flowers season",
      "Warm layers: fleece jacket and thermal inners for cold nights at Ghangaria",
      "Sun hat, sunglasses, sunscreen SPF 50+, and insect repellent spray",
      "Personal water bottle (1 litre x 2), headlamp, trekking pole, and camera",
    ],
    faqs: [
      {
        question: "When is the Valley of Flowers in full bloom?",
        answer:
          "The valley is accessible from June to September, with the peak blooming period being mid-July to mid-August. During this window, over 500 species of wildflowers carpet the valley floor — it is an explosion of colour. Early June offers fewer flowers but clearer skies and snow patches, while September features late-blooming species and golden autumn hues. The park remains closed from November to May due to heavy snowfall.",
      },
      {
        question: "Is this trek suitable for children and older adults?",
        answer:
          "Yes, the Valley of Flowers trek is one of the more accessible Himalayan treks. Children aged 8+ with prior walking experience and older adults (up to 65 years) in good health have completed it successfully. The trail from Govindghat to Ghangaria is a well-defined mule path with a steady, non-technical gradient. However, the Hemkund Sahib day (day 4) is steep and can be skipped by those who find it too demanding. We recommend a basic fitness assessment before booking.",
      },
      {
        question: "Are there mules or porters available for carrying luggage or if I get tired?",
        answer:
          "Yes, porters and mules are available at Govindghat and Ghangaria for carrying personal luggage. In the premium package, one personal porter (carrying up to 10 kg) is included in the price. For other packages, porters can be hired directly at reasonable daily rates (approximately ₹600-800 per day). If you feel unwell or exhausted during the trek, a mule can be arranged to carry you back — the cost varies but is typically ₹1,500-2,000 for the Govindghat-Ghangaria stretch.",
      },
    ],
  },

  // ─── Tour 6: Kinnaur - Kalpa Weekend Ride ────────────────────────────
  {
    id: "tour-006",
    slug: "kinnaur-kalpa-weekend-ride",
    name: "Kinnaur - Kalpa Weekend Ride",
    subtitle: "A quick escape into Kinnaur's apple orchards, cedar forests, and Himalayan vistas",
    type: "bike",
    region: "himachal",
    difficulty: "moderate",
    duration: { days: 4, nights: 3 },
    distance: 550,
    maxAltitude: 3450,
    startLocation: "Chandigarh",
    endLocation: "Chandigarh",
    overview:
      "Escape the city chaos with this perfectly crafted weekend motorcycle ride into the enchanting Kinnaur Valley. Over four crisp days, ride along the Sutlej River, wind through fragrant pine and cedar forests, and arrive in Kalpa — a paradise of apple orchards set against the magnificent Kinner Kailash massif. This compact adventure packs stunning Himalayan scenery, smooth twisties, and authentic Kinnauri hospitality into a single long weekend.",
    highlights: [
      "Watch the Kinner Kailash peak glow golden at sunset from a Kalpa orchard",
      "Ride through the dramatic Tranda Dhank rock-cut road along the Sutlej gorge",
      "Explore the last village on the Indo-Tibet border — Chitkul (3,450m)",
      "Visit the ancient Kamru Fort, a 15th-century marvel of Kinnauri architecture",
      "Taste fresh Kinnauri apples straight from the orchard and sip local seabuckthorn tea",
    ],
    itinerary: [
      {
        day: 1,
        title: "Chandigarh to Narkanda | The Himalayan Foothills",
        description:
          "Pick up your motorcycle in Chandigarh and head north. The initial highway section through Kalka and Solan is smooth and fast. As you climb towards Shimla and beyond, the landscape changes — the air gets crisper and the hillsides greener. Reach Narkanda, a charming hill station at 2,700m surrounded by apple orchards and dense deodar forests, by late afternoon. Enjoy panoramic sunset views of the distant Dhauladhar range.",
        stayAt: "Hotel in Narkanda",
        altitude: 2700,
      },
      {
        day: 2,
        title: "Narkanda to Kalpa | Entering Kinnaur",
        description:
          "The ride today is pure motorcycling bliss. Descend from Narkanda to Rampur Bushahr, then follow the Sutlej River deep into Kinnaur. Pass through the engineering marvel of the Tranda Dhank rock-cut road and the massive Karcham Wangtoo Dam. The road hugs the cliff face as the river thunders hundreds of feet below. Arrive in Kalpa by afternoon — check into your orchard-facing room and spend the evening wandering through apple trees with the Kinner Kailash massif towering overhead.",
        stayAt: "Hotel in Kalpa",
        altitude: 2960,
      },
      {
        day: 3,
        title: "Kalpa to Chitkul & Back | The Border Village",
        description:
          "Ride further into Kinnaur's interior to reach Chitkul, the last inhabited village on the old Hindustan-Tibet road. At 3,450m, Chitkul is surrounded by snow peaks and grazing meadows. The Baspa River gushes through this idyllic village. Visit the small wooden Chitkul Mathi temple and enjoy a meal at one of the dhabas serving hearty rajma-chawal. Ride back to Kalpa in the evening for a final night under Kinnaur's starlit sky.",
        stayAt: "Hotel in Kalpa",
        altitude: 2960,
      },
      {
        day: 4,
        title: "Kalpa to Chandigarh | The Long Cruise Home",
        description:
          "Start early for the longest riding day. Soak in one last view of Kinner Kailash at sunrise before descending through Kinnaur's apple valleys. Retrace the route through Rampur, Narkanda, and Shimla, with the Sutlej River as your constant companion. The afternoon ride through the Shivalik foothills brings you back to Chandigarh by evening. Return the motorcycle and conclude a weekend well spent — 550 km of pure Himalayan riding done right.",
      },
    ],
    images: ["https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&h=600&fit=crop"],
    featured: false,
    style: "liberty",
    departures: [
      { date: "2026-07-10", spotsLeft: 6, guaranteed: true },
      { date: "2026-07-24", spotsLeft: 9, guaranteed: true },
      { date: "2026-08-07", spotsLeft: 12, guaranteed: false },
      { date: "2026-09-04", spotsLeft: 7, guaranteed: false },
      { date: "2026-10-16", spotsLeft: 10, guaranteed: false },
    ],
    rating: 4.7,
    reviewCount: 45,
    priceRange: { min: 9999, max: 19999 },
    packages: [
      {
        id: "kkw-basic",
        name: "Rider Only",
        tier: "basic",
        description:
          "Motorcycle rental and fuel included — ideal for riders who prefer flexibility in their stays and meals.",
        price: 9999,
        inclusions: [
          { icon: "\uD83C\uDFCD\uFE0F", label: "Royal Enfield Classic 350cc motorcycle rental" },
          { icon: "\u26FD", label: "Fuel for the entire 550 km weekend route" },
          { icon: "\uD83D\uDC68\u200D\u2708\uFE0F", label: "Experienced road captain leading the group" },
          { icon: "\uD83D\uDEE0\uFE0F", label: "Basic toolkit, puncture repair kit, and spare tube" },
          { icon: "\uD83C\uDFE5", label: "Route planning, maps, and navigational support" },
        ],
      },
      {
        id: "kkw-standard",
        name: "Rider + Stay",
        tier: "standard",
        description:
          "Enjoy the ride with comfortable accommodation and breakfast sorted at each stop — our best-selling pack.",
        price: 14999,
        label: "Most Popular",
        inclusions: [
          { icon: "\uD83C\uDFCD\uFE0F", label: "Royal Enfield Classic 350cc motorcycle rental" },
          { icon: "\u26FD", label: "Fuel for the entire 550 km weekend route" },
          { icon: "\uD83D\uDC68\u200D\u2708\uFE0F", label: "Experienced road captain and support mechanic" },
          { icon: "\uD83C\uDFE8", label: "3 nights accommodation (1 night Narkanda + 2 nights Kalpa)" },
          { icon: "\uD83C\uDF73", label: "Daily breakfast served at all hotels" },
          { icon: "\uD83D\uDEE0\uFE0F", label: "Basic toolkit and on-road mechanical assistance" },
        ],
      },
      {
        id: "kkw-premium",
        name: "All Inclusive",
        tier: "premium",
        description:
          "The complete weekend getaway — premium rooms, all meals, transfers, and a backup vehicle for luggage.",
        price: 19999,
        inclusions: [
          { icon: "\uD83C\uDFCD\uFE0F", label: "Royal Enfield Classic 350cc motorcycle rental" },
          { icon: "\u26FD", label: "Fuel for the entire 550 km weekend route" },
          { icon: "\uD83D\uDC68\u200D\u2708\uFE0F", label: "Road captain, mechanic, and backup vehicle driver" },
          { icon: "\uD83C\uDFE8", label: "3 nights premium rooms with Kinner Kailash views" },
          { icon: "\uD83C\uDF7D\uFE0F", label: "All meals — breakfast, lunch on road, dinner at hotels" },
          { icon: "\uD83D\uDE91", label: "Luggage backup vehicle so you ride light and fast" },
        ],
      },
    ],
    included: [
      "Royal Enfield Classic 350cc motorcycle with all necessary documentation",
      "Fuel for the complete 550 km route",
      "Experienced road captain familiar with the Kinnaur region",
      "Essential toolkit, puncture repair kit, and spare clutch/throttle cables",
      "Route navigation, daily briefings, and riding formation guidance",
      "First-aid medical kit carried by the road captain",
    ],
    excluded: [
      "Motorcycle security deposit (₹10,000, refundable upon safe return in Chandigarh)",
      "Any fines for traffic violations or speeding during the ride",
      "Personal riding gear (can be rented at nominal additional cost)",
      "Meals other than those specified in the package inclusions",
      "Personal expenses: snacks, beverages, mineral water, souvenirs, tips",
      "Transportation to/from Chandigarh for the start and end of the ride",
    ],
    thingsToCarry: [
      "Valid driving licence for geared motorcycles (original + copy)",
      "Riding jacket with armour, knee guards, full-face helmet, and riding gloves",
      "Sturdy ankle-length boots with good grip (avoid canvas or sports shoes)",
      "Warm mid-layer: fleece or light down jacket for chilly Kinnaur evenings",
      "Sunscreen SPF 30+, UV-protection sunglasses, and a neck gaiter for dust",
      "Power bank for phone charging and a compact rain jacket for unexpected showers",
    ],
    faqs: [
      {
        question: "I only have a weekend — is 4 days really enough for this ride?",
        answer:
          "Absolutely — this trip was designed precisely for the weekend warrior. With Chandigarh as the start point (easy to reach by flight or overnight bus from Delhi), the first riding day begins early Thursday or Friday. By day 4 (Sunday/Monday evening), you're back in Chandigarh. The 550 km distance is well distributed — day 1 and day 4 are riding-heavy (220 km each), while day 2 and day 3 allow you to actually experience Kalpa and Chitkul. Many of our riders take a Friday leave and are back at their desk by Tuesday.",
      },
      {
        question: "What are the road conditions like on this route?",
        answer:
          "The Chandigarh-Narkanda section is excellent tarmac with smooth twisties. Beyond Rampur, the road narrows and sections can be rough due to ongoing hydroelectric project construction. Between Wangtoo and Kalpa, expect a mix of well-surfaced road and occasional broken patches — nothing technical, but requiring attention. The Kalpa-Chitkul road is a narrow mountain road but in generally good condition. Overall, this is a moderate-grade ride suitable for riders with 6+ months of mountain riding experience.",
      },
      {
        question: "What's the best time of year for the Kinnaur-Kalpa ride?",
        answer:
          "The ride is excellent from April to November. April-May offers clear skies and pleasant temperatures with snow still visible on high peaks. September-October treats you to freshly harvested Kinnauri apples and stunning autumn colours. June-August is monsoon season — rain can make roads slippery but the greenery is breathtaking. Our personal favourite is late October when the apple orchards are golden and the Kinner Kailash massif is dusted with the season's first snowfall, creating incredible photo opportunities.",
      },
    ],
  },

  // ─── Tour 7: Amritsar - Dharamshala Heritage ────────────────────────
  {
    id: "tour-007",
    slug: "amritsar-dharamshala-heritage",
    name: "Amritsar - Dharamshala Heritage",
    subtitle: "Journey from the Golden Temple to the Dalai Lama's abode — Punjab and Himachal's sacred circuit",
    type: "regular",
    region: "punjab",
    difficulty: "easy",
    duration: { days: 5, nights: 4 },
    startLocation: "Amritsar",
    endLocation: "Dharamshala",
    overview:
      "Embark on a soulful cultural journey connecting two of North India's most profound destinations. Begin in Amritsar, the spiritual heart of Sikhism, marvelling at the Golden Temple's ethereal beauty and the patriotic fervour of the Wagah Border ceremony. Travel through the green heartland of Punjab before ascending into the Dhauladhar mountains to reach Dharamshala — the tranquil seat of the Dalai Lama. This easy-paced heritage circuit offers a perfect blend of spirituality, history, and mountain serenity, ideal for culture enthusiasts and families alike.",
    highlights: [
      "Experience the Golden Temple at dawn when the Sarovar reflects the golden sanctum",
      "Witness the electrifying Wagah Border retreat ceremony between India and Pakistan",
      "Visit Jallianwala Bagh, the poignant memorial of India's freedom struggle",
      "Explore McLeod Ganj's charming lanes, Tibetan monasteries, and café culture",
      "Attend a morning prayer session at the Dalai Lama's Namgyal Monastery",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Amritsar | The Holy City",
        description:
          "Arrive in Amritsar and check into your hotel. Late afternoon, visit the Partition Museum to understand the history of the 1947 Partition. As evening descends, walk to the Golden Temple — witness the Palki Sahib ceremony as the Guru Granth Sahib is carried to the sanctum. The temple, illuminated against the night sky, reflected perfectly in the sacred Sarovar, is a sight that stays with you forever. End the day with langar — the world's largest community kitchen serving 100,000+ meals daily.",
        stayAt: "Hotel in Amritsar",
      },
      {
        day: 2,
        title: "Amritsar | Golden Temple, Jallianwala Bagh & Wagah Border",
        description:
          "Start before sunrise to witness the Golden Temple at its most magical — the first rays of sun gilding the Harmandir Sahib as morning prayers echo across the Sarovar. After breakfast, visit Jallianwala Bagh, a sobering memorial to the 1919 massacre. In the afternoon, make your way to the Wagah-Attari border (30 km from Amritsar) to experience the Beating Retreat ceremony — an exhilarating, high-energy display of coordination between Indian and Pakistani border guards. Return to Amritsar for the evening.",
        stayAt: "Hotel in Amritsar",
      },
      {
        day: 3,
        title: "Amritsar to Dharamshala | Punjab to the Mountains",
        description:
          "After breakfast, embark on a scenic 5-hour drive from the fertile plains of Punjab to the foothills of the Dhauladhar range. The road passes through Pathankot and enters Himachal Pradesh at the Kangra Valley. Arrive in Dharamshala by afternoon. Check into your hotel and spend the evening at leisure, exploring the local market in Lower Dharamshala or simply soaking in the mountain views from your balcony.",
        stayAt: "Hotel in Dharamshala",
      },
      {
        day: 4,
        title: "McLeod Ganj | Monasteries, Cafés & Tibetan Culture",
        description:
          "Drive 10 km uphill to McLeod Ganj, the 'Little Lhasa' of India. Visit the Tsuglagkhang Complex — the Dalai Lama's temple, residence, and the Namgyal Monastery. Explore the Tibet Museum documenting the Tibetan diaspora's journey. Walk through the bustling streets lined with Tibetan handicraft shops, prayer flag sellers, and charming cafés. Try authentic Tibetan momos, thukpa, and butter tea at a local eatery. In the evening, take a short hike to the serene Bhagsunag Waterfall and its adjacent Shiva temple.",
        stayAt: "Hotel in Dharamshala",
      },
      {
        day: 5,
        title: "Dharamshala | Departure",
        description:
          "After breakfast, transfer to Dharamsala bus stand or Gaggal Airport for your onward journey. For those with later departures, visit the Kangra Art Museum or the Norbulingka Institute — a centre dedicated to preserving Tibetan arts and crafts. The tour concludes having connected you to two of India's most powerful spiritual traditions.",
      },
    ],
    images: ["https://images.unsplash.com/photo-1599033712733-c4de79fccfc9?w=800&h=600&fit=crop"],
    featured: false,
    style: "discovery",
    departures: [
      { date: "2026-07-20", spotsLeft: 10, guaranteed: true },
      { date: "2026-08-15", spotsLeft: 8, guaranteed: true },
      { date: "2026-09-10", spotsLeft: 12, guaranteed: false },
      { date: "2026-10-05", spotsLeft: 9, guaranteed: false },
      { date: "2026-11-20", spotsLeft: 11, guaranteed: false },
    ],
    rating: 4.6,
    reviewCount: 38,
    priceRange: { min: 8999, max: 19999 },
    packages: [
      {
        id: "adh-basic",
        name: "Tour Only",
        tier: "basic",
        description:
          "Guided heritage tour with local experts — ideal for backpackers who book their own stays and meals.",
        price: 8999,
        inclusions: [
          { icon: "\uD83E\uDD7E", label: "Expert heritage guide in Amritsar and McLeod Ganj" },
          { icon: "\uD83D\uDE8D", label: "All inter-city transfers in comfortable AC vehicle" },
          { icon: "\uD83C\uDFC6", label: "Entry fees to all included monuments and museums" },
          { icon: "\uD83C\uDFDF\uFE0F", label: "Wagah Border VIP seating arrangement" },
        ],
      },
      {
        id: "adh-standard",
        name: "Tour + Stay",
        tier: "standard",
        description:
          "Our most popular heritage experience — guided tour with comfortable accommodation and breakfasts.",
        price: 14999,
        label: "Most Popular",
        inclusions: [
          { icon: "\uD83E\uDD7E", label: "Expert heritage guides at all major sites" },
          { icon: "\uD83D\uDE8D", label: "All inter-city transfers and local sightseeing in AC vehicle" },
          { icon: "\uD83C\uDFE8", label: "4 nights hotel accommodation (2 Amritsar + 2 Dharamshala)" },
          { icon: "\uD83C\uDF73", label: "Daily breakfast at hotels and one traditional Punjabi dinner" },
          { icon: "\uD83C\uDFC6", label: "Entry fees and Wagah Border VIP seating included" },
          { icon: "\uD83C\uDFDF\uFE0F", label: "Dedicated tour coordinator for the entire duration" },
        ],
      },
      {
        id: "adh-premium",
        name: "All Inclusive",
        tier: "premium",
        description:
          "The complete heritage immersion — premium stays, all meals, private transfers, and exclusive cultural experiences.",
        price: 19999,
        inclusions: [
          { icon: "\uD83E\uDD7E", label: "Private expert heritage guide for the entire tour" },
          { icon: "\uD83D\uDE97", label: "Private AC SUV with dedicated chauffeur throughout" },
          { icon: "\uD83C\uDFE8", label: "4 nights premium hotels (heritage property in Amritsar)" },
          { icon: "\uD83C\uDF7D\uFE0F", label: "All meals — breakfast, lunch, and dinner at curated restaurants" },
          { icon: "\uD83C\uDFC6", label: "All entry fees, Wagah VIP seating, and exclusive monastery access" },
          { icon: "\uD83C\uDFA8", label: "Private cooking demo (Amritsari kulcha) and Tibetan art workshop" },
        ],
      },
    ],
    included: [
      "Knowledgeable heritage guide for all major attractions in Amritsar and Dharamshala",
      "Comfortable AC vehicle for all inter-city travel and local sightseeing",
      "Wagah Border ceremony VIP seating (closer to the action, less crowd)",
      "Entry tickets to Golden Temple Museum, Jallianwala Bagh, and Tibet Museum",
      "Dedicated tour coordinator available on call throughout the trip",
      "All tolls, parking fees, driver allowances, and interstate taxes",
    ],
    excluded: [
      "Flight, train, or bus tickets to Amritsar and return from Dharamshala",
      "Camera/video fees at monuments where applicable (usually nominal)",
      "Personal expenses: shopping, telephone calls, laundry, room service",
      "Meals not specified in the package inclusions",
      "Any optional activities: ropeway rides, additional excursions, or shopping tours",
      "Tips for guides, drivers, and hotel staff (optional but appreciated)",
    ],
    thingsToCarry: [
      "Valid government-issued photo ID (Aadhaar card, driving licence, or passport)",
      "Comfortable walking shoes — you'll be on your feet exploring temples and markets",
      "Modest clothing for religious sites: cover shoulders and knees at Golden Temple and monasteries",
      "Warm jacket, scarf, and gloves for chilly Dharamshala evenings regardless of season",
      "Sunscreen, sunglasses, hat, and a reusable water bottle for daytime excursions",
      "Small daypack for carrying essentials during full-day sightseeing outings",
    ],
    faqs: [
      {
        question: "Is this tour suitable for senior citizens and children?",
        answer:
          "Yes, this is an 'easy' rated tour specifically designed to be comfortable for all age groups. There is no trekking or physically demanding activity involved. The sightseeing involves moderate walking at monuments. The Golden Temple complex has smooth marble pathways and Volvo golf carts for elderly visitors. The drive from Amritsar to Dharamshala (5 hours) is on a well-maintained highway with restroom stops. We've had guests aged 8 to 78 enjoy this tour thoroughly.",
      },
      {
        question: "When is the best time to visit the Golden Temple?",
        answer:
          "The Golden Temple is beautiful year-round, but the experience varies. October to March offers pleasant daytime weather and the temple looks especially gorgeous on full-moon nights when the gold is reflected in the Sarovar. November brings Guru Nanak Jayanti — the temple is decorated with thousands of lights and is truly spectacular. April-June is hot in Amritsar (35-42°C) but Dharamshala remains pleasant. July-September brings monsoon with fewer crowds and lush green landscapes. Our itinerary includes both a sunrise and evening visit to experience the temple in different lights.",
      },
      {
        question: "Can I meet the Dalai Lama during the Dharamshala visit?",
        answer:
          "While a private audience with His Holiness the Dalai Lama is not guaranteed, he does deliver public teachings at the Tsuglagkhang Complex on certain dates — if your tour coincides with one of these teachings, we can adjust the itinerary to include attendance. Even without a personal meeting, visiting the Namgyal Monastery during the morning prayer (6:00 AM) is a deeply moving experience as hundreds of monks chant in unison. The Tibet Museum and the Norbulingka Institute offer profound insights into Tibetan Buddhism and culture.",
      },
    ],
  },

  // ─── Tour 8: Chopta - Tungnath Winter Trek ──────────────────────────
  {
    id: "tour-008",
    slug: "chopta-tungnath-winter-trek",
    name: "Chopta - Tungnath Winter Trek",
    subtitle: "Snow trek to the world's highest Shiva temple in the heart of Uttarakhand's mini-Switzerland",
    type: "regular",
    region: "uttarakhand",
    difficulty: "moderate",
    duration: { days: 4, nights: 3 },
    maxAltitude: 3680,
    startLocation: "Rishikesh",
    endLocation: "Rishikesh",
    overview:
      "Experience the magic of a Himalayan winter on this compact 4-day trek to Tungnath, the world's highest Shiva temple at 3,680m. Starting from Rishikesh, drive through the snow-laden forests of the Kedarnath Wildlife Sanctuary to reach Chopta — a pristine meadow often called 'Mini Switzerland'. The snow trail to Tungnath is straight out of a winter fairy-tale: oak and rhododendron trees draped in white, crisp mountain air, and the majestic Chaukhamba, Nanda Devi, and Trishul peaks forming your constant backdrop.",
    highlights: [
      "Trek through a winter wonderland of snow-covered oak and rhododendron forests",
      "Visit Tungnath Temple (3,680m) — the highest Shiva temple and third Panch Kedar",
      "Witness panoramic views of Nanda Devi, Trishul, and Chaukhamba from Chandrashila",
      "Stay at Chopta, Uttarakhand's most picturesque meadow surrounded by Himalayan peaks",
      "Experience the mystical Deoria Tal — a crystal-clear lake reflecting Chaukhamba peak",
    ],
    itinerary: [
      {
        day: 1,
        title: "Rishikesh to Chopta | The Alpine Drive",
        description:
          "Depart Rishikesh early morning for a scenic 7-8 hour drive through the Garhwal Himalayas. The road follows the Ganga and later the Mandakini River through Devprayag and Rudraprayag. Climb through dense forests of the Kedarnath Wildlife Sanctuary. The landscape transforms as you gain altitude — from subtropical foliage to alpine meadows. Arrive in Chopta by evening, a pristine meadow valley blanketed in white during winter months. Check into your lodge and enjoy the silence of the mountains.",
        stayAt: "Lodge/Camp in Chopta",
        altitude: 2700,
      },
      {
        day: 2,
        title: "Chopta to Tungnath & Chandrashila | The Summit Day",
        description:
          "Start early after a warm breakfast for the highlight of the trek. The 3.5 km trail from Chopta to Tungnath is a steady climb through snow-covered forests. In winter (December-February), the trail is under 2-4 feet of snow, turning it into a magical white corridor. Reach the ancient Tungnath Temple — made of stone, standing silently against the elements for over 1,000 years. After paying respects, continue another 1.5 km to Chandrashila (3,990m if fully done) for a 360-degree panorama of the Garhwal Himalayas — Nanda Devi, Trishul, Bandarpunch, and Chaukhamba all visible in a single sweep. Descend back to Chopta by afternoon.",
        stayAt: "Lodge/Camp in Chopta",
        altitude: 2700,
      },
      {
        day: 3,
        title: "Chopta to Deoria Tal | The Reflection Lake",
        description:
          "Drive 30 minutes to Sari village, the trailhead for Deoria Tal. A gentle 2.5 km ascent through rhododendron and oak forests leads to this breathtaking high-altitude lake. On clear days, Deoria Tal perfectly mirrors the Chaukhamba massif in its emerald-green waters — a photographer's dream. Spend a couple of hours at the lake, enjoy a packed lunch by its shore, and then descend back to Sari. Drive back to Chopta for a cosy bonfire evening with the group.",
        stayAt: "Lodge/Camp in Chopta",
        altitude: 2700,
      },
      {
        day: 4,
        title: "Chopta to Rishikesh | Journey Home",
        description:
          "Wake up to one final sunrise over the snow peaks. After breakfast, drive back to Rishikesh. Reflect on the compact but immensely fulfilling winter adventure — the snow-laden forests, the ancient temple at the top of the world, and the silent grandeur of the Garhwal Himalayas. Arrive in Rishikesh by evening for onward connections. For those with time, an evening Ganga Aarti at Triveni Ghat is the perfect spiritual bookend.",
      },
    ],
    images: ["/images/tours/chopta-tungnath-winter-trek.webp"],
    featured: false,
    style: "discovery",
    departures: [
      { date: "2026-12-15", spotsLeft: 5, guaranteed: true },
      { date: "2027-01-10", spotsLeft: 8, guaranteed: true },
      { date: "2027-01-25", spotsLeft: 10, guaranteed: false },
      { date: "2027-02-10", spotsLeft: 6, guaranteed: false },
    ],
    rating: 4.8,
    reviewCount: 72,
    priceRange: { min: 7999, max: 16999 },
    packages: [
      {
        id: "ctw-basic",
        name: "Trek Only",
        tier: "basic",
        description:
          "Guided winter trek — includes guide, permits, and basic equipment. Arrange your own transport and stays.",
        price: 7999,
        inclusions: [
          { icon: "\uD83E\uDD7E", label: "Experienced winter trek guide with snow navigation skills" },
          { icon: "\uD83C\uDFC6", label: "Forest entry permits and trekking registration" },
          { icon: "\u27A1\uFE0F", label: "Crampons, gaiters, and trekking poles for snow terrain" },
          { icon: "\uD83E\uDDFA", label: "First-aid kit, emergency thermal blanket, and hand warmers" },
        ],
      },
      {
        id: "ctw-standard",
        name: "Trek + Stay",
        tier: "standard",
        description:
          "Our most popular winter package — cosy accommodation, warm meals, and all snow trekking gear provided.",
        price: 11999,
        label: "Most Popular",
        inclusions: [
          { icon: "\uD83E\uDD7E", label: "Experienced winter trek leader and local guide" },
          { icon: "\uD83C\uDFC6", label: "All forest permits and trekking registration fees" },
          { icon: "\uD83C\uDFE8", label: "3 nights cosy lodge/camp accommodation in Chopta with heating" },
          { icon: "\uD83C\uDF73", label: "Warm nutritious meals from day 1 dinner to day 4 breakfast" },
          { icon: "\u27A1\uFE0F", label: "Crampons, gaiters, trekking poles, and headlamp provided" },
          { icon: "\uD83E\uDDFA", label: "Comprehensive medical kit with oximeter and oxygen support" },
        ],
      },
      {
        id: "ctw-premium",
        name: "All Inclusive",
        tier: "premium",
        description:
          "The ultimate winter trek — private transport, premium heated accommodation, all meals, and a personal porter.",
        price: 16999,
        inclusions: [
          { icon: "\uD83E\uDD7E", label: "Private winter trek guide and dedicated support staff" },
          { icon: "\uD83D\uDE90", label: "Private AC SUV for Rishikesh-Chopta-Rishikesh round trip" },
          { icon: "\uD83C\uDFE8", label: "3 nights premium heated lodge with attached bathrooms" },
          { icon: "\uD83C\uDF7D\uFE0F", label: "All meals — hot breakfast, packed lunch, dinner, and evening bonfire snacks" },
          { icon: "\u27A1\uFE0F", label: "Full winter gear: crampons, gaiters, poles, headlamp, and insulated jacket" },
          { icon: "\uD83C\uDF92", label: "Personal porter for 8 kg luggage and trail refreshments" },
        ],
      },
    ],
    included: [
      "Experienced trek leader with winter Himalayan trekking and snow navigation expertise",
      "Forest entry permits, camping charges, and mandatory trekker registration",
      "Winter trekking equipment: crampons, gaiters, and trekking poles for each participant",
      "Cozy lodge or camp accommodation with adequate heating and warm bedding",
      "First-aid medical kit, pulse oximeter, blood pressure monitor, and oxygen cylinder",
      "Bonfire in the evening (wood availability permitting) for group bonding under the stars",
    ],
    excluded: [
      "Personal winter clothing (thermals, down jacket, snow gloves — available for rent)",
      "Travel insurance covering winter trekking and emergency evacuation",
      "Any meals or accommodation before/after the scheduled trek dates",
      "Personal expenses: snacks, packaged drinking water, tips for guide and staff",
      "Mules or additional porters beyond those included in the selected package",
      "Cost arising from road closures due to heavy snowfall (alternate arrangements at extra cost)",
    ],
    thingsToCarry: [
      "Waterproof high-ankle trekking boots — essential for walking in deep snow",
      "Extreme winter clothing: thermal base layers, heavy fleece, and a down jacket rated below -10°C",
      "Snowproof gloves (preferably mittens), thick woollen socks (2-3 pairs), and a woollen balaclava",
      "UV-protection sunglasses or snow goggles — snow blindness is a real risk in bright snow",
      "Sunscreen SPF 50+ and high-altitude lip balm — UV reflection off snow is intense",
      "Personal water bottle (insulated/thermos) and high-energy snacks (chocolate, dry fruits, energy bars)",
    ],
    faqs: [
      {
        question: "I've never trekked in snow before — is this suitable for beginners?",
        answer:
          "Yes, the Chopta-Tungnath trek is one of the best entry points for winter trekking in India. The distance to Tungnath from Chopta is only 3.5 km (one way) on a well-defined trail that locals and pilgrims use even in winter. Our guides provide crampons and gaiters, and teach you the basics of walking in snow. The key challenge is the cold, not technical difficulty. As long as you have moderate fitness (you can walk 5 km in a city park) and are adequately dressed, you'll do fine. Many of our guests are first-time snow trekkers.",
      },
      {
        question: "Can the Tungnath temple be entered in winter?",
        answer:
          "The Tungnath temple closes for winter in early November, usually after Diwali, and reopens in April-May. The deity (the symbolic Shiva image) is moved to the Markandeya temple in Makkumath village for winter worship. However, reaching the temple structure itself is still an incredible experience — the ancient stone edifice standing alone in a vast white landscape is deeply atmospheric. You can circumambulate the temple structure and the views from the temple courtyard are the same year-round.",
      },
      {
        question: "What if there is too much snow and the road to Chopta gets blocked?",
        answer:
          "The road to Chopta (NH-107) is maintained by the BRO (Border Roads Organisation) and is usually kept open throughout winter. In the rare event of an exceptionally heavy snowfall blocking the road, our backup plan involves reaching Chopta via Ukhimath and walking the last few kilometres, or alternatively, trekking to Deoria Tal and nearby winter-accessible viewpoints. In extreme conditions where the trip cannot proceed, we offer a full reschedule or refund (minus the permit processing fee). Our team monitors weather conditions daily during December-February and communicates proactively with booked participants.",
      },
    ],
  },
];
