export interface Jet {
  id: string
  name: string
  manufacturer: string
  capacity: number
  range: number
  speed: number
  image: string
  description: string
  features: string[]
  pricePerHour: number
}

export const jets: Jet[] = [
  {
    id: "cessna-citation-xls",
    name: "Cessna Citation XLS+",
    manufacturer: "Cessna",
    capacity: 8,
    range: 3889,
    speed: 441,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
    description: "A sleek midsize private jet offering exceptional performance and comfort.",
    features: ["Wi-Fi", "Entertainment System", "Luxury Seating", "Galley"],
    pricePerHour: 8500,
  },
  {
    id: "bombardier-challenger-605",
    name: "Bombardier Challenger 605",
    manufacturer: "Bombardier",
    capacity: 12,
    range: 7400,
    speed: 459,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
    description: "Long-range luxury jet with spacious cabin and premium amenities.",
    features: ["Stand-up Cabin", "Full Galley", "Entertainment", "Wi-Fi", "Lavatory"],
    pricePerHour: 12000,
  },
  {
    id: "gulfstream-g450",
    name: "Gulfstream G450",
    manufacturer: "Gulfstream",
    capacity: 14,
    range: 8000,
    speed: 488,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
    description: "High-end Gulfstream jet in glossy white, the pinnacle of luxury aviation.",
    features: ["Ultra-Luxury Interior", "Full Bar", "Conference Area", "Sleeping Quarters", "Wi-Fi"],
    pricePerHour: 18000,
  },
  {
    id: "hawker-900xp",
    name: "Hawker 900XP",
    manufacturer: "Hawker",
    capacity: 8,
    range: 4800,
    speed: 425,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
    description: "Compact business jet perfect for regional travel with premium comfort.",
    features: ["Comfortable Seating", "Entertainment", "Wi-Fi", "Galley"],
    pricePerHour: 7500,
  },
  {
    id: "embraer-phenom-300",
    name: "Embraer Phenom 300",
    manufacturer: "Embraer",
    capacity: 7,
    range: 3650,
    speed: 453,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=600&fit=crop",
    description: "Light jet with premium cabin, ideal for shorter luxury flights.",
    features: ["Premium Cabin", "Entertainment", "Wi-Fi", "Refreshment Center"],
    pricePerHour: 6500,
  },
]

