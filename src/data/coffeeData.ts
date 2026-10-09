export interface CoffeeProduct {
  id: string;
  nameEn: string;
  nameKr: string;
  tagline: string;
  roastLevel: 'Light' | 'Medium' | 'Dark' | 'Reserve';
  roastDots: number; // 1 to 5
  origin: string;
  altitude: string;
  process: string;
  notes: string[];
  priceUSD: number;
  priceKRW: number;
  weight: string;
  image: string;
  isDrop?: boolean;
  dropNumber?: string;
  limitedStock?: number;
  moodMatchId?: string;
}

export interface MoodOption {
  id: string;
  timeSlot: string;
  titleEn: string;
  titleKr: string;
  vibeDescriptionEn: string;
  vibeDescriptionKr: string;
  flavorProfile: string;
  soundGenre: string;
  coffeePairingId: string;
  ambientTrackTitle: string;
  bpm: number;
  colorAccent: string;
}

export interface SoundTrack {
  id: string;
  titleEn: string;
  titleKr: string;
  artist: string;
  duration: string;
  durationSeconds: number;
  genre: string;
  moodId: string;
  frequencyHz: number; // For synth sound generation
}

export interface SeoulLocation {
  id: string;
  nameEn: string;
  nameKr: string;
  district: string;
  districtKr: string;
  address: string;
  signatureDrink: string;
  musicFocus: string;
  openingHours: string;
  image: string;
  coordinates: { x: number; y: number }; // Relative map coordinate %
}

export interface CollectibleCard {
  id: string;
  series: string;
  cardNumber: string;
  titleEn: string;
  titleKr: string;
  tier: 'SILVER' | 'GOLD' | 'HOLOGRAPHIC';
  rarityPercent: string;
  editionLimit: string;
  perkEn: string;
  perkKr: string;
  image: string;
}

export const MOOD_DATA: MoodOption[] = [
  {
    id: 'dawn',
    timeSlot: '07:00 AM',
    titleEn: 'Seongsu Dawn Mist',
    titleKr: '성수 새벽 안개',
    vibeDescriptionEn: 'Crisp morning clarity, soft daylight on raw concrete, contemplative focus.',
    vibeDescriptionKr: '새벽의 맑은 공기, 차분한 콘크리트 빛과 몰입의 시간.',
    flavorProfile: 'White Peach • Jasmine • Bergamot',
    soundGenre: 'Acoustic Lo-Fi Indie',
    coffeePairingId: 'seongsu-edition',
    ambientTrackTitle: 'Dawn Dew on Seongsu Rooftops',
    bpm: 72,
    colorAccent: '#C8B58A',
  },
  {
    id: 'groove',
    timeSlot: '02:00 PM',
    titleEn: 'Hongdae Creative Pulse',
    titleKr: '홍대 크리에이티브 펄스',
    vibeDescriptionEn: 'Dynamic rhythm, vintage boutique energy, spontaneous creative ideas.',
    vibeDescriptionKr: '거리의 활력, 감각적인 비트와 넘치는 영감의 오후.',
    flavorProfile: 'Tangerine Zest • Wild Honey • Sweet Lychee',
    soundGenre: 'Seoul City Pop & Nu-Disco',
    coffeePairingId: 'bukchon-gesha',
    ambientTrackTitle: 'Wausan-ro Sunlit Grooves',
    bpm: 98,
    colorAccent: '#A63D32',
  },
  {
    id: 'lounge',
    timeSlot: '08:30 PM',
    titleEn: 'Hannam Vinyl Nocturne',
    titleKr: '한남 바이닐 녹턴',
    vibeDescriptionEn: 'Deep mahogany wood, warm analog warmth, intimate dusk conversations.',
    vibeDescriptionKr: '따뜻한 아날로그 턴테이블, 깊어가는 밤의 벨벳 사운드.',
    flavorProfile: 'Dark Cacao 85% • Toasted Almond • Smoked Vanilla',
    soundGenre: 'Korean Neo-Soul & Jazz',
    coffeePairingId: 'nocturne-blend',
    ambientTrackTitle: 'Midnight Needle Drop in Hannam',
    bpm: 80,
    colorAccent: '#5A3825',
  },
  {
    id: 'midnight',
    timeSlot: '01:00 AM',
    titleEn: 'Euljiro Neon Reverie',
    titleKr: '을지로 네온 몽상',
    vibeDescriptionEn: 'Alleyway neon glow, cinematic synth basslines, cold drip perfection.',
    vibeDescriptionKr: '을지로 골목길의 네온, 몽환적인 신스웨이브와 깊은 리저브.',
    flavorProfile: 'Black Cherry • Oak Cask • Cardamom Spice',
    soundGenre: 'Deep K-Electronic & Synthwave',
    coffeePairingId: 'hanjeongpan-cask',
    ambientTrackTitle: 'Iron Alley Cybernetic Blues',
    bpm: 112,
    colorAccent: '#111111',
  },
];

export const COFFEE_PRODUCTS: CoffeeProduct[] = [
  {
    id: 'seongsu-edition',
    nameEn: 'Seongsu-dong Edition 01',
    nameKr: '성수동 에디션 01 (워시드)',
    tagline: 'Flagship light roast celebrating converted warehouse café architecture.',
    roastLevel: 'Light',
    roastDots: 2,
    origin: 'Ethiopia Yirgacheffe G1 (Idido)',
    altitude: '2,150m ASL',
    process: 'Double Washed & Slow Dried',
    notes: ['Bergamot Blossom', 'White Peach', 'Meyer Lemon'],
    priceUSD: 24,
    priceKRW: 32000,
    weight: '250g / 8.8oz',
    image: '/images/hero-cafe.jpg',
    limitedStock: 38,
    moodMatchId: 'dawn',
  },
  {
    id: 'bukchon-gesha',
    nameEn: 'Bukchon Heritage Gesha',
    nameKr: '북촌 헤리티지 게이샤 (내추럴)',
    tagline: 'Artisanal single origin honoring traditional Hanok ceramic craft.',
    roastLevel: 'Medium',
    roastDots: 3,
    origin: 'Colombia Huila Finca La Palma',
    altitude: '1,950m ASL',
    process: 'Anaerobic Natural (96hr Ferment)',
    notes: ['Wild Jasmine', 'Candied Apricot', 'Orange Blossom Honey'],
    priceUSD: 36,
    priceKRW: 48000,
    weight: '200g / 7.0oz',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1000&auto=format&fit=crop',
    limitedStock: 19,
    moodMatchId: 'groove',
  },
  {
    id: 'nocturne-blend',
    nameEn: 'Nocturne Dark Espresso Blend',
    nameKr: '녹턴 다크 에스프레소 블렌드',
    tagline: 'Calibrated specifically for Seoul listening bars and rich milk cortados.',
    roastLevel: 'Dark',
    roastDots: 5,
    origin: 'Guatemala Antigua & Sumatra Mandheling',
    altitude: '1,700m ASL',
    process: 'Wet-Hulled & Washed Blend',
    notes: ['85% Cacao Ganache', 'Smoked Bourbon Vanilla', 'Roasted Hazelnut'],
    priceUSD: 22,
    priceKRW: 29000,
    weight: '250g / 8.8oz',
    image: '/images/coffee-bag-nocturne.jpg',
    limitedStock: 64,
    moodMatchId: 'lounge',
  },
  {
    id: 'hanjeongpan-cask',
    nameEn: 'Hanjeongpan Cask Reserve Drop 04',
    nameKr: '한정판 드롭 04: 캐스크 에이지드 리저브',
    tagline: 'Limited 100-batch release aged in traditional Korean distilled liquor barrels.',
    roastLevel: 'Reserve',
    roastDots: 4,
    origin: 'Costa Rica Tarrazu Micro-Lot',
    altitude: '2,050m ASL',
    process: 'Soju Oak Cask Fermented Natural',
    notes: ['Dark Plum Compote', 'Oak Vanilla', 'Warm Cinnamon'],
    priceUSD: 45,
    priceKRW: 60000,
    weight: '200g / 7.0oz',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1000&auto=format&fit=crop',
    isDrop: true,
    dropNumber: 'DROP-04',
    limitedStock: 14,
    moodMatchId: 'midnight',
  },
  {
    id: 'euljiro-drip-box',
    nameEn: 'Euljiro Vintage Drip Bag Box',
    nameKr: '을지로 빈티지 드립백 박스 (10개입)',
    tagline: 'Individually wrapped single-cup pour overs wrapped in Bojagi-inspired sleeve.',
    roastLevel: 'Medium',
    roastDots: 3,
    origin: 'Multi-Origin Curated Selection',
    altitude: '1,800m+ ASL',
    process: 'Artisanal Filter Grind & Nitrogen Flushed',
    notes: ['Milk Chocolate', 'Pecan Praline', 'Sweet Apple'],
    priceUSD: 26,
    priceKRW: 34000,
    weight: '10 Sachets (12g ea)',
    image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000&auto=format&fit=crop',
    limitedStock: 50,
  },
  {
    id: 'kpop-matte-tumbler',
    nameEn: 'Seongsu Ceramic Matte Tumbler',
    nameKr: '성수 세라믹 매트 텀블러 (500ml)',
    tagline: 'Double-walled vacuum insulated ceramic-lined vessel in Ink Black finish.',
    roastLevel: 'Reserve',
    roastDots: 1,
    origin: 'Crafted in Seoul, Korea',
    altitude: 'Limited Lifestyle Drop',
    process: 'Matte Ceramic Lining + 304 Stainless',
    notes: ['24hr Cold • 12hr Hot', 'Spill-Proof Magnetic Cap', 'Hangul Laser Etched'],
    priceUSD: 38,
    priceKRW: 52000,
    weight: '500ml / 17oz',
    image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?q=80&w=1000&auto=format&fit=crop',
    limitedStock: 25,
  },
];

export const SOUND_TRACKS: SoundTrack[] = [
  {
    id: 'track-1',
    titleEn: 'Dawn Dew on Seongsu Rooftops',
    titleKr: '성수동 옥상의 아침 이슬',
    artist: 'K-Sound Acoustic Lab feat. Minho',
    duration: '03:45',
    durationSeconds: 225,
    genre: 'Morning Lo-Fi & Coffee Pour',
    moodId: 'dawn',
    frequencyHz: 432,
  },
  {
    id: 'track-2',
    titleEn: 'Wausan-ro Sunlit Grooves',
    titleKr: '와우산로 햇살 아래 그루브',
    artist: 'Seoul Vinyl Collective',
    duration: '04:12',
    durationSeconds: 252,
    genre: 'Korean City Pop Beats',
    moodId: 'groove',
    frequencyHz: 528,
  },
  {
    id: 'track-3',
    titleEn: 'Midnight Needle Drop in Hannam',
    titleKr: '한남동 한밤의 바늘 소리',
    artist: 'Bojagi Jazz Quartet',
    duration: '05:30',
    durationSeconds: 330,
    genre: 'Warm Analog Neo-Soul',
    moodId: 'lounge',
    frequencyHz: 396,
  },
  {
    id: 'track-4',
    titleEn: 'Iron Alley Cybernetic Blues',
    titleKr: '을지로 철공소의 사이버네틱 블루스',
    artist: 'DJ Euljiro Soundworks',
    duration: '04:48',
    durationSeconds: 288,
    genre: 'Deep K-Electronic Ambient',
    moodId: 'midnight',
    frequencyHz: 639,
  },
];

export const SEOUL_RADAR_LOCATIONS: SeoulLocation[] = [
  {
    id: 'seongsu',
    nameEn: 'Seongsu Converted Warehouse Atelier',
    nameKr: '성수 컨버티드 웨어하우스 아틀리에',
    district: 'Seongsu-dong',
    districtKr: '성수동 (성동구)',
    address: '28 Yeonmujang-gil, Seongdong-gu, Seoul',
    signatureDrink: 'Seongsu Cream Dirty Cold Brew',
    musicFocus: 'Direct Vinyl Turntable & Ambient Lo-Fi',
    openingHours: '08:00 – 22:00 Daily',
    image: '/images/hero-cafe.jpg',
    coordinates: { x: 72, y: 55 },
  },
  {
    id: 'hongdae',
    nameEn: 'Hongdae Sound & Sensory Taproom',
    nameKr: '홍대 사운드 & 센서리 탭룸',
    district: 'Hongdae',
    districtKr: '홍대 (마포구)',
    address: '14 Wausan-ro 29-gil, Mapo-gu, Seoul',
    signatureDrink: 'Tangerine Sparkling Cascara Tonic',
    musicFocus: 'Indie K-Rock & Analog Cassette Deck',
    openingHours: '11:00 – 24:00 Daily',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop',
    coordinates: { x: 28, y: 45 },
  },
  {
    id: 'hannam',
    nameEn: 'Hannam Mahogany Listening Bar',
    nameKr: '한남 마호가니 리스닝 바',
    district: 'Hannam-dong',
    districtKr: '한남동 (용산구)',
    address: '68 Itaewon-ro 54-gil, Yongsan-gu, Seoul',
    signatureDrink: 'Smoked Single Malt Espresso',
    musicFocus: 'Rare Korean Funk, Soul & Jazz Vinyls',
    openingHours: '14:00 – 02:00 Tue–Sun',
    image: '/images/ksound-lounge.jpg',
    coordinates: { x: 50, y: 62 },
  },
  {
    id: 'samcheong',
    nameEn: 'Bukchon Hanok Quiet Brewroom',
    nameKr: '북촌 한옥 고요의 브루룸',
    district: 'Samcheong / Bukchon',
    districtKr: '삼청동 • 북촌 (종로구)',
    address: '42 Bukchon-ro 5-gil, Jongno-gu, Seoul',
    signatureDrink: 'Traditional Ceramic Pour-Over Gesha',
    musicFocus: 'Gayageum Ambient & Rain Soundscapes',
    openingHours: '09:00 – 19:00 Daily',
    image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=1000&auto=format&fit=crop',
    coordinates: { x: 48, y: 28 },
  },
];

export const COLLECTIBLE_CARDS: CollectibleCard[] = [
  {
    id: 'card-01',
    series: 'VOL. 01 — THE CRAFT MASTER',
    cardNumber: '#01 / 500',
    titleEn: 'The Seongsu Barista',
    titleKr: '성수 바리스타 (마스터 골드)',
    tier: 'GOLD',
    rarityPercent: 'SSR 98.4%',
    editionLimit: 'Strictly 500 Worldwide',
    perkEn: 'Unlocks VIP tasting flights at Seongsu Atelier + 15% D2C recurring discount.',
    perkKr: '성수 아틀리에 VIP 테이스팅 및 전 제품 15% 상시 할인 멤버십 혜택.',
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 'card-02',
    series: 'VOL. 01 — THE ACOUSTIC RESONANCE',
    cardNumber: '#02 / 100',
    titleEn: 'Midnight Vinyl Master',
    titleKr: '미드나잇 바이닐 마스터 (홀로그램)',
    tier: 'HOLOGRAPHIC',
    rarityPercent: 'UR 99.8%',
    editionLimit: 'Ultra-Rare 100 Pieces',
    perkEn: 'Access to unreleased K-Sound master audio stems & limited drop early-access 1hr ahead.',
    perkKr: '미발매 K-Sound 원본 음원 스트리밍 및 모든 한정판 1시간 사전 구매 권한.',
    image: '/images/ksound-lounge.jpg',
  },
  {
    id: 'card-03',
    series: 'VOL. 01 — THE TRADITIONAL ROOTS',
    cardNumber: '#03 / 1000',
    titleEn: 'Bukchon Ceramic Gooseneck',
    titleKr: '북촌 도자기 드립 포트 (실버 에디션)',
    tier: 'SILVER',
    rarityPercent: 'SR 94.2%',
    editionLimit: '1,000 Minted Copies',
    perkEn: 'Free shipping on all Korean roast bean boxes and seasonal gift wraps.',
    perkKr: '모든 로스팅 원두 및 선물용 보자기 패키지 무료 배송 특권.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop',
  },
];

export interface EditorialStory {
  id: string;
  categoryEn: string;
  categoryKr: string;
  titleEn: string;
  titleKr: string;
  excerptEn: string;
  excerptKr: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
}

export const EDITORIAL_STORIES: EditorialStory[] = [
  {
    id: 'story-01',
    categoryEn: 'CULTURE & URBANISM',
    categoryKr: '문화 및 도시 디자인',
    titleEn: 'Why Seongsu-dong Redefined the Architecture of Modern Coffee',
    titleKr: '성수동의 붉은 벽돌과 콘크리트가 세계 커피 문화를 다시 쓴 이유',
    excerptEn: 'From industrial leather workshops to high-ceiling temples of extraction, how Seoul transformed industrial raw aesthetics into a global lifestyle standard.',
    excerptKr: '붉은 벽돌의 수제화 공장에서 하이엔드 스페셜티 커피의 성지로. 서울 성수동이 구축한 인더스트리얼 감성과 미학의 세계적 영향력.',
    readTime: '6 min read',
    date: 'OCT 2026',
    author: 'Jinwoo Park, Architectural Curator',
    image: '/images/hero-cafe.jpg',
  },
  {
    id: 'story-02',
    categoryEn: 'ACOUSTICS & SENSORY',
    categoryKr: '음향과 미각의 과학',
    titleEn: 'Sound & Crema: How Sound Wave Frequencies Shape Flavor Notes',
    titleKr: '사운드와 크레마: 음향 주파수가 원두의 산미와 단맛을 증폭시키는 과학',
    excerptEn: 'Examining the psychoacoustic connection between 432Hz ambient soundscapes and the perceived sweetness of high-altitude Ethiopian coffees.',
    excerptKr: '432Hz의 따뜻한 사운드 주파수와 에티오피아 고지대 원두의 섬세한 단맛 사이의 심리음향학적 상관관계를 증명합니다.',
    readTime: '8 min read',
    date: 'SEP 2026',
    author: 'Eunji Kim, Sensory Sound Designer',
    image: '/images/ksound-lounge.jpg',
  },
  {
    id: 'story-03',
    categoryEn: 'TRADITION TO FUTURE',
    categoryKr: '전통과 현대의 조화',
    titleEn: 'The Art of Bojagi: Sustainable Wrapping for the Digital Era',
    titleKr: '보자기 미학: 디지털 시대에 재해석된 한국 전통 포장과 촉각의 가치',
    excerptEn: 'How ancient fabric folding techniques provide tactile warmth to modern direct-to-consumer luxury packaging.',
    excerptKr: '소중한 마음을 감싸는 한국의 전통 보자기 매듭법이 현대 D2C 친환경 럭셔리 패키지에 전하는 온기와 촉각적 경험.',
    readTime: '5 min read',
    date: 'AUG 2026',
    author: 'Soo-Hyun Lee, Material Designer',
    image: '/images/coffee-bag-nocturne.jpg',
  },
];
