import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  Trophy, 
  Users, 
  CheckCircle2,
  Ruler,
  Paintbrush,
  LayoutGrid,
  Grid3X3,
  Sparkles,
  Waves,
  Home,
  Quote,
  Droplets,
  PaintRoller
} from 'lucide-react';

export const COMPANAY_NAME = "Khahlula Mbulazi (Private) Limited";
export const MOTTO = "Your Vision, Our Structure ~ Client focused.";
export const TAGLINE = "We build with pride.";

export const CONTACT_INFO = {
  phones: ["+263 774 562 012", "073 417 6803", "068 089 2753"],
  email: "khahlulambulazi@gmail.com",
  address: "Century House East, 38 Nelson Mandela Avenue, Causeway, Harare, Zimbabwe"
};

export const ROUTES = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Starlink', path: '/services#starlink-installations' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Reviews', path: '/reviews' },
  { name: 'Location', path: '/location' },
  { name: 'Contact', path: '/contact' },
];

export const SERVICES = [
  {
    id: 'house-plans',
    title: 'House Plans',
    slug: 'house-plans',
    tagline: 'Expert architectural drafts and 3D house designs.',
    icon: Ruler,
    image: 'https://i.8upload.com/image/39aadeaf0a8f57ea/screenshot-2026-05-21-162917.jpg',
    description: 'We turn your dreams into actionable blueprints. Our architectural team specializes in creating detailed 3D house drafts and structural plans tailored to your lifestyle.',
    includes: ['3D architectural rendering', 'Structural engineering drafts', 'Council approval assistance', 'Custom layout design']
  },
  {
    id: 'building-construction',
    title: 'Building Construction',
    slug: 'building-construction',
    tagline: 'Residential and commercial properties built to last.',
    icon: Building2,
    image: 'https://i.postimg.cc/tTG1VGMf/house-built-2.jpg',
    description: 'From luxury residential homes to scalable commercial complexes, we execute construction projects with the highest level of structural integrity and modern finish.',
    includes: ['New residential builds', 'Commercial office blocks', 'Warehousing solutions', 'Project management']
  },
  {
    id: 'painting',
    title: 'Painting',
    slug: 'painting',
    tagline: 'Professional interior and exterior painting finishes.',
    icon: Paintbrush,
    image: 'https://i.postimg.cc/FRXfJX64/Workers-building-image.jpg',
    description: 'Precision painting and plastering services for a flawless finish. We use premium grade materials to ensure durability and aesthetic excellence.',
    includes: ['Interior wall painting', 'Exterior weatherproofing', 'Decorative finishes', 'Surface preparation']
  },
  {
    id: 'tiling',
    title: 'Tiling',
    slug: 'tiling',
    tagline: 'Precision floor and wall tiling installation.',
    icon: LayoutGrid,
    image: 'https://i.8upload.com/image/2bd28f02e8b46431/whatsapp-image-2026-05-20-at-15-44-52.jpg',
    gallery: [
      'https://i.8upload.com/image/2bd28f02e8b46431/whatsapp-image-2026-05-20-at-15-44-52.jpg',
      'https://i.8upload.com/image/ca1250fd5379556a/whatsapp-image-2026-05-20-at-15-44-52-1.jpg'
    ],
    description: 'Expert tiling installation for any space. Whether it is a kitchen, bathroom, or industrial floor, we ensure perfectly aligned, long-lasting tiles.',
    includes: ['Ceramic & Porcelain tiling', 'Marble & Granite installation', 'Bathroom renovations', 'Backsplash tiling']
  },
  {
    id: 'paving',
    title: 'Paving',
    slug: 'paving',
    tagline: 'Quality brick and stone paving for every layout.',
    icon: Grid3X3,
    image: 'https://i.postimg.cc/3NNWsXfS/outdoor-tiling-bricks2.jpg',
    description: 'Transform your driveways and walkways with our precision paving services. Durable, stylish, and built to withstand heavy traffic.',
    includes: ['Driveway paving', 'Walkway & Patio design', 'Industrial yard paving', 'Stone & Brick masonry']
  },
  {
    id: 'epoxy-floor',
    title: 'Epoxy Floor',
    slug: 'epoxy-floor',
    tagline: 'High-gloss, modern metallic showroom floors.',
    icon: Sparkles,
    image: 'https://i.postimg.cc/Gtt9WFgz/modernhome-dining.jpg',
    description: 'Modernize your garage, showroom, or workspace with high-performance epoxy flooring. Seamless, durable, and available in various metallic finishes.',
    includes: ['Metallic epoxy finishes', 'Industrial floor coatings', 'Garage floor protective layers', 'Showroom flooring']
  },
  {
    id: 'gamazine-walls',
    title: 'Gamazine Walls',
    slug: 'gamazine-walls',
    tagline: 'Premium, low-maintenance gamazine wall coatings and specialized texture finishes.',
    icon: PaintRoller,
    image: 'https://i.8upload.com/image/66e09bec0d3abc74/whatsapp-image-2026-05-18-at-20-13-45-1.jpg',
    description: 'Apply a sophisticated, textured look to your walls with Gamazine. This architectural coating is not only beautiful but also weather-resistant and durable.',
    includes: ['Textured wall application', 'Granite wall coatings', 'Interior & Exterior Gamazine', 'Custom color matching']
  },
  {
    id: 'roofing',
    title: 'Roofing',
    slug: 'roofing',
    tagline: 'Comprehensive roofing installations, trusses, and structural waterproofing solutions.',
    icon: Home,
    image: 'https://i.8upload.com/image/793b1971818e1d16/roofing.jpg',
    description: 'Protect your investment with professional roofing. We install modern, weather-resistant roofs using premium materials for long-term peace of mind.',
    includes: ['Roof truss installation', 'Tile & Sheet roofing', 'Leak repairs & maintenance', 'Fascia & Guttering']
  },
  {
    id: 'damp-treatment',
    title: 'Damp Treatment',
    slug: 'damp-treatment',
    tagline: 'Advanced rising damp diagnostics, wall treatment, and long-term moisture barrier installations.',
    icon: Droplets,
    image: 'https://i.postimg.cc/DZ3Wb3Mt/Foundation-house.jpg',
    description: 'KHAHLULA MBULAZI PROJECTS is there to rescue you from your damp issues. We provide professional rising damp treatment and dampproofing solutions to protect your property.',
    includes: ['Drilling and Dryzone injection', 'Rising damp treatment', 'Waterproofing slurry application', 'Professional plastering finishes'],
    process: {
      title: 'Our Rising Damp Treatment Process',
      steps: [
        'Mark a straight line on the wall which is 1 metre high from the ground level.',
        'Chop off all the plaster in the dampzone area and clean the surrounding area.',
        'Drill holes on the wall one line on top of the damp proofing course (ensure spacing is 120mm from each hole).',
        'Inject the DRYZONE treatment cream into all the drilled holes.',
        'Close all the holes so that the Dryzone cream is properly sealed inside.',
        'Apply a first coat of slurry mixture on the wall horizontally with correct mixing proportions.',
        'Allow sufficient drying time, then apply a second coat of the slurry mixture.',
        'Once fully cured, the walls are ready to be plastered and the damp problem is solved.'
      ]
    }
  }
];

export const PROJECTS = [
  // --- RESIDENTIAL PROJECTS ---
  {
    title: "Structural Roof Truss Installation",
    category: "Residential",
    image: "https://i.8upload.com/image/805d43f83c878406/9819cad4-f8c3-4fcb-ae82-bd6468781c37.jpg",
    images: [
      "https://i.8upload.com/image/805d43f83c878406/9819cad4-f8c3-4fcb-ae82-bd6468781c37.jpg",
      "https://i.8upload.com/image/5bb3c1bdc8e7717a/84883b59-d81a-469e-bf25-78b1dfb45436.jpg",
      "https://i.8upload.com/image/87dbb3094658be95/e64286a1-dd0b-41b0-91f4-2951021b3d0e.jpg",
      "https://i.8upload.com/image/fe2a7c928f9fb1fb/75393a96-73c8-4ebb-bfe0-676023764b95.jpg",
      "https://i.8upload.com/image/5c6ffcdb1b5b64a2/a8e025a6-743b-4fb9-bdd8-5c891acc669d.jpg",
      "https://i.8upload.com/image/dc1e4b8aa0f111c7/16cac8fd-3518-4382-b6a0-9e3babf7e717.jpg",
      "https://i.8upload.com/image/c1f886d226494211/1ffb10e0-d675-43dc-8221-d69b1dc6505d.jpg"
    ],
    description: "Precision framing and installation of a complex engineered timber roof truss system on a modern residential build."
  },
  {
    title: 'Residential Trenching & Excavation',
    category: 'Residential',
    image: 'https://i.postimg.cc/DZ3Wb3Mt/Foundation-house.jpg',
    description: 'Precision ground layout and trenching phase for a residential foundation.'
  },
  {
    title: 'Foundation Reinforcement & Brickwork',
    category: 'Residential',
    image: 'https://i.postimg.cc/hjRJ7R5k/House-foundation-workes.jpg',
    description: 'Laying the initial foundation courses and engineering brick blockwork.'
  },
  {
    title: 'Structural Footings & Foundation Walls',
    category: 'Residential',
    image: 'https://i.postimg.cc/9MH4qHk5/House-building-workers.jpg',
    description: 'Establishing the core structural load-bearing footprint.'
  },
  {
    title: 'Brickwork Superstructure (Framing Phase)',
    category: 'Residential',
    image: 'https://i.postimg.cc/j5YWJY1T/House-building-image.jpg',
    description: 'Advanced wall construction showing window lintel placements.'
  },
  {
    title: 'Precision Superstructure Engineering',
    category: 'Residential',
    image: 'https://i.postimg.cc/FRXfJX64/Workers-building-image.jpg',
    images: [
      'https://i.postimg.cc/FRXfJX64/Workers-building-image.jpg',
      'https://i.8upload.com/image/ba525a37aa1e8244/whatsapp-image-2026-07-03-at-16-42-11.jpg'
    ],
    description: 'Vertical wall alignments and column framing on-site.'
  },
  {
    title: "Monolithic Residential Brick Shell",
    category: "Residential",
    image: "https://i.postimg.cc/k4PVtPpL/house-built.jpg",
    images: [
      "https://i.postimg.cc/k4PVtPpL/house-built.jpg",
      "https://i.postimg.cc/tTG1VGMf/house-built-2.jpg"
    ],
    description: "Completed load-bearing brick shell structures, showcasing pristine vertical wall alignments and internal room zoning fully prepped for roof timber installations."
  },
  {
    title: 'Boundary & Perimeter Wall Construction',
    category: 'Residential',
    image: 'https://i.postimg.cc/G2nBsnf2/Wall-image.jpg',
    description: 'Heavy-duty perimeter security brickwork engineered for estate protection.'
  },
  {
    title: "Premium Thatch Backyard Gazebo",
    category: "Residential",
    image: "https://i.8upload.com/image/8e1e13b7320164ea/whatsapp-image-2026-05-18-at-20-41-41-1.jpg",
    images: [
      "https://i.8upload.com/image/8e1e13b7320164ea/whatsapp-image-2026-05-18-at-20-41-41-1.jpg",
      "https://i.8upload.com/image/c0e4edd186480554/whatsapp-image-2026-05-18-at-20-41-41.jpg"
    ],
    description: "Full construction timeline of an elegant poolside gazebo, featuring precision-crafted timber framework skeleton detailing leading into a premium completed thatched roof structure."
  },
  {
    title: 'Multi-Room Brick Superstructure',
    category: 'Residential',
    image: 'https://i.8upload.com/image/6e833ca6ba65535a/whatsapp-image-2026-05-18-at-20-13-46-1.jpg',
    images: [
      'https://i.8upload.com/image/6e833ca6ba65535a/whatsapp-image-2026-05-18-at-20-13-46-1.jpg',
      'https://i.8upload.com/image/b7a61767b9e480fb/b28c3d19-98c4-4f26-ae24-f7734a576e97.jpg',
      'https://i.8upload.com/image/3317dced2adab2ca/73bdec27-0c34-4f54-84e6-8016b8da206d.jpg',
      'https://i.8upload.com/image/c2dfd442d4e04fb6/1705fa92-491c-42d2-8d9c-23c250ee6ac2.jpg'
    ],
    description: 'Extensive residential building layout.'
  },
  {
    title: "Lodge Build & Structural Shell",
    category: "Residential",
    image: "https://i.8upload.com/image/eb129a25b834b267/whatsapp-image-2026-05-18-at-20-13-46.jpg",
    images: [
      "https://i.8upload.com/image/eb129a25b834b267/whatsapp-image-2026-05-18-at-20-13-46.jpg",
      "https://i.8upload.com/image/d4fd330f359d2e2e/whatsapp-image-2026-05-18-at-20-13-45-2.jpg"
    ],
    description: "Comprehensive structural brickwork, window framing, and premium thatch roof installation for a luxury lodge development."
  },
  {
    title: 'Outer Shell Structural Masonry',
    category: 'Residential',
    image: 'https://i.8upload.com/image/66e09bec0d3abc74/whatsapp-image-2026-05-18-at-20-13-45-1.jpg',
    description: 'Clean vertical wall alignments.'
  },
  {
    title: 'Heavy-Duty Structural Columns',
    category: 'Residential',
    image: 'https://i.8upload.com/image/06d5ca499ebea88b/whatsapp-image-2026-05-18-at-20-13-45.jpg',
    description: 'Reinforced masonry pillars built to support heavy loads.'
  },
  {
    title: "Modern Residential House Completion",
    category: "Residential",
    image: "https://i.8upload.com/image/f97a1466b540984d/whatsapp-image-2026-05-18-at-20-13-44-2.jpg",
    images: [
      "https://i.8upload.com/image/f97a1466b540984d/whatsapp-image-2026-05-18-at-20-13-44-2.jpg",
      "https://i.8upload.com/image/b5ba2add623bb472/whatsapp-image-2026-05-18-at-20-13-44-1.jpg",
      "https://i.8upload.com/image/e9ba4a758489f8b9/whatsapp-image-2026-07-03-at-16-56-01.jpg"
    ],
    description: "Comprehensive exterior development showcasing structural brick face layout, progressive plastering applications, crisp corner plaster profiling, and roof tile installation phases."
  },
  {
    title: "Residential Sanitary Infrastructure",
    category: 'Residential',
    image: 'https://i.8upload.com/image/c8da66f06d6ce686/whatsapp-image-2026-05-18-at-20-13-44.jpg',
    description: "Precision molding and installation of a clean, durable concrete sanitary toilet pedestal system."
  },
  {
    title: "Concrete Washbasin & Masonry Support",
    category: 'Residential',
    image: 'https://i.8upload.com/image/c6bfc6503fddc2c0/whatsapp-image-2026-05-18-at-20-13-43-1.jpg',
    description: "Installation of a heavy-duty double concrete utility sink mounted on custom masonry brick and plaster pillars."
  },

  // --- TILING PROJECTS ---
  {
    title: 'Luxury Master Bathroom Tiling',
    category: 'Tiling',
    image: 'https://i.postimg.cc/Rhhqk7b5/modernbathroomtiles.jpg',
    description: 'Premium floor-to-ceiling porcelain tile installation.'
  },
  {
    title: 'Contemporary Bathroom Wall Tiling',
    category: 'Tiling',
    image: 'https://i.postimg.cc/kgqD9PHh/bathroom-tiles.jpg',
    description: 'High-end minimalist wall tiling with clean, seamless grout lines.'
  },
  {
    title: 'Bespoke Ensuite Tile Finish',
    category: 'Tiling',
    image: 'https://i.postimg.cc/7Z9hZQv1/bathroom-tiles-2.jpg',
    description: 'Durable, moisture-resistant tile work tailored for executive ensuite designs.'
  },
  {
    title: 'Luxury Walk-In Shower Surround',
    category: 'Tiling',
    image: 'https://i.postimg.cc/d0JQMRhM/shower-tiles.jpg',
    description: 'Intricate accent tile patterns for a modern, walk-in shower oasis.'
  },
  {
    title: 'Vanity & Integrated Sink Tiling',
    category: 'Tiling',
    image: 'https://i.postimg.cc/g0Gc9yn4/bathroom-sink-shower.jpg',
    description: 'Precision-cut tile framing around premium bathroom vanities and basins.'
  },
  {
    title: 'Bathroom Prep & Waterproofing (In Progress)',
    category: 'Tiling',
    image: 'https://i.postimg.cc/vZbDMwKP/bathroomworkinprogress.jpg',
    description: 'Raw site phase showcasing precise leveling and structural layout.'
  },
  {
    title: 'Executive Kitchen Backsplash',
    category: 'Tiling',
    image: 'https://i.postimg.cc/zvv3sC22/kitchen-carbinet.jpg',
    description: 'Elegant ceramic tile layout complementing custom kitchen cabinets.'
  },
  {
    title: 'Modern Kitchen Cabinet Tile Trim',
    category: 'Tiling',
    image: 'https://i.postimg.cc/L55hctQt/kitchen-carbinet2.jpg',
    description: 'Seamless tile-to-joinery finishing for highly functional kitchen areas.'
  },
  {
    title: 'High-Gloss Open Plan Dining Floors',
    category: 'Tiling',
    image: 'https://i.postimg.cc/Gtt9WFgz/modernhome-dining.jpg',
    description: 'Large-format premium floor tiles designed for open-plan dining and living spaces.'
  },
  {
    title: 'Precision-Cut Tiled Staircase',
    category: 'Tiling',
    image: 'https://i.postimg.cc/yN76qhkc/staircase.jpg',
    description: 'Complex tile work executed on internal steps and risers for high-traffic durability.'
  },
  {
    title: 'Heavy-Duty Exterior Patio Tiling',
    category: 'Tiling',
    image: 'https://i.postimg.cc/7hhbF3tn/outdoor-tiling-bricks.jpg',
    description: 'Weatherproof, non-slip outdoor tile formatting for veranda areas.'
  },
  {
    title: 'Outdoor Walkway & Brick Paving',
    category: 'Tiling',
    image: 'https://i.postimg.cc/3NNWsXfS/outdoor-tiling-bricks2.jpg',
    description: 'Robust external tiling layout designed for luxury driveway entries.'
  },
  {
    title: 'Precision Corner Tile Trim',
    category: 'Tiling',
    image: 'https://i.8upload.com/image/3c2ebd2688ef22fa/whatsapp-image-2026-05-18-at-20-27-07.jpg',
    description: 'Crisp, professionally engineered edge alignments.'
  },
  {
    title: "Floating Architectural Concrete Pavers",
    category: "Tiling",
    image: "https://i.8upload.com/image/2bd28f02e8b46431/whatsapp-image-2026-05-20-at-15-44-52.jpg",
    images: [
      "https://i.8upload.com/image/2bd28f02e8b46431/whatsapp-image-2026-05-20-at-15-44-52.jpg",
      "https://i.8upload.com/image/ca1250fd5379556a/whatsapp-image-2026-05-20-at-15-44-52-1.jpg"
    ],
    description: "Precision layout and installation of premium floating concrete slab steps and modern exterior hardscape paving."
  },

  // --- EVERYTHING ELSE ---
  // Civil & Structural Infrastructure
  {
    title: "Premium Steel Carport / Industrial Shed Construction",
    category: "Civil & Structural Infrastructure",
    image: "https://i.8upload.com/image/1fc4b4e611a1568f/fdeb910a-6434-4c6f-8222-30f5350c536f.jpg",
    description: "The robust structural steel framework of a custom-built metal carport or utility storage shed, engineered for weather resilience and high-durability coverage."
  },
  {
    title: "Precision Concrete Foundations and Steel Reinforcement",
    category: "Civil & Structural Infrastructure",
    image: "https://i.8upload.com/image/8a63c1d668887d70/8b27552f-b2f5-46e6-87ba-f57d2170d9da.jpg",
    description: "Large-scale concrete foundation blocks with embedded anchor bolts and intricate rebar cages, ready for massive industrial building structural supports."
  },
  {
    title: "Robust Perimeter Boundary Fencing",
    category: "Civil & Structural Infrastructure",
    image: "https://i.8upload.com/image/c6b2a03e0b7d7a23/8c0e1f82-f2b7-48e7-95c1-f3b24732246f.jpg",
    description: "Durable white concrete pillars with customized dark steel infill panels, providing secure and aesthetically pleasing perimeter fencing for commercial properties."
  },
  {
    title: "Specialized High-Altitude Structural Work",
    category: "Civil & Structural Infrastructure",
    image: "https://i.8upload.com/image/0a2fd0afc9fbf5e4/6e394fe9-960d-4914-b772-81390dce29c6.jpg",
    description: "An experienced technician performing complex structural adjustments on massive steel beams at height, showcasing specialized large-span engineering."
  },
  {
    title: "Large Open-Sided Pavilion & Gazebo Frame",
    category: "Civil & Structural Infrastructure",
    image: "https://i.8upload.com/image/611ebfff36914d41/daed3cdf-84a5-47e2-95de-c40574cbabb1.jpg",
    description: "The intricate timber skeleton frame of a massive open-sided pavilion and gazebo structure under construction, highlighting heavy-duty rafter alignment and expert load-bearing joinery."
  },

  // Commercial & Leisure Developments
  {
    title: "Custom Thatched Gazebo Construction",
    category: "Commercial & Leisure Developments",
    image: "https://i.8upload.com/image/cca62464d6468ed3/e410ecaa-c81a-4232-82af-09ebc641f84c.jpg",
    description: "Specialized construction of authentic, custom-built thatched gazebos featuring heavy-duty timber supports and intricate thatching, blending leisure design with robust structural integrity."
  },

  // Structural Construction & Fabrication
  {
    title: "Engineered Heavy-Duty Steel Frame",
    category: "Structural Construction & Fabrication",
    image: "https://i.8upload.com/image/7ec9876693947918/0736b356-f221-4cb8-a68d-647077b78434.jpg",
    description: "Heavy-duty, precision-engineered steel structural frame assembly, showcasing elite steel fabrication and load-bearing design serving as the backbone for major developments."
  },

  // Civil & Support Infrastructure
  {
    title: "Security Barbed Wire Fencing Installation",
    category: "Civil & Support Infrastructure",
    image: "https://i.8upload.com/image/d41dd73129e0f0dc/a6ca4de6-6131-4d3e-a358-011252cba63a.jpg",
    description: "Installation of high-security multi-strand barbed wire fencing mounted on reinforced concrete boundary pillars, providing robust perimeter protection for industrial and commercial sites."
  },

  // Custom Trailer & Bakkie Body Fabrication
  {
    title: "Specialized Livestock Crate & utility Cage Body",
    category: "Custom Trailer & Bakkie Body Fabrication",
    image: "https://i.8upload.com/image/ccbd67ebf25a5187/8228ff6e-50ff-40bd-8f1b-51c91dafb0b7.jpg",
    description: "Precision-fabricated heavy-duty steel cage body specifically engineered as a livestock crate, custom-designed to be mounted securely onto utility vehicles (bakkies/pickups) or trailers for agricultural logistics."
  },

  // Trailer Assembly & Transport Engineering
  {
    title: "Custom Dual-Axle Utility Trailer Build",
    category: "Trailer Assembly & Transport Engineering",
    image: "https://i.8upload.com/image/0fa23c333170515b/fb39ab7d-f46e-4d0b-b910-72dff311a4fd.jpg",
    images: [
      "https://i.8upload.com/image/0fa23c333170515b/fb39ab7d-f46e-4d0b-b910-72dff311a4fd.jpg",
      "https://i.8upload.com/image/bcc92b25ee245903/f8ee397c-28cd-4866-a923-ef0ecdd49c1a.jpg"
    ],
    description: "Full fabrication and assembly of a heavy-duty dual-axle utility trailer, featuring a robust steel cage framework, custom cross-membered deck framing, integrated wheel arches, and complete road-ready electrical and reflective installations."
  },
  {
    title: "Hand-Crafted Trailer Chassis Profile",
    category: "Trailer Assembly & Transport Engineering",
    image: "https://i.8upload.com/image/3c84e4b45bc51f72/104213c6-a615-4ed8-b695-ead11fd587a3.jpg",
    description: "A broad side view of the dual-axle trailer's structural core, emphasizing the clean lines and solid construction of the hand-crafted chassis and drawbar."
  }
];


export const REVIEWS = [
  {
    name: 'Tinashe Marowa',
    company: 'Capital Investments',
    rating: 5,
    text: 'Khahlula Mbulazi delivered our office building ahead of schedule. Their attention to structural detail is unmatched in Harare.'
  },
  {
    name: 'Sarah Moyo',
    company: 'Homeowner',
    rating: 5,
    text: 'Building my dream home was stressful until I hired KM. They handled everything from the first brick to the final painting.'
  },
  {
    name: 'John Banda',
    company: 'Lupane Local Council',
    rating: 5,
    text: 'A highly professional civil works team. Their grading and drainage systems have held up perfectly through three rainy seasons.'
  }
];

export const LOCATIONS = {
  harare: {
    address: 'Century House East\n38 Nelson Mandela Avenue, Causeway\nHarare, Zimbabwe',
    phone: '+263 77 123 4567',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
    mapUrl: 'https://maps.google.com/maps?q=Century+House+East,+38+Nelson+Mandela+Avenue,+Causeway,+Harare,+Zimbabwe&t=&z=16&ie=UTF8&iwloc=&output=embed'
  },
  bulawayo: {
    address: 'Corner 6th Avenue and Jason Moyo Camperdome house No. 67',
    phone: '+263 71 987 6543',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM',
    mapUrl: 'https://maps.google.com/maps?q=Corner+6th+Avenue+and+Jason+Moyo+Camperdome+house+No.+67,+Bulawayo,+Zimbabwe&t=&z=16&ie=UTF8&iwloc=&output=embed'
  }
};
