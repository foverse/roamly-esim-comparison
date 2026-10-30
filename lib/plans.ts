export type Destination = "japan" | "france" | "thailand" | "usa";

export const destinations = {
  japan: { en: "Japan", fr: "Japon", es: "Japón", code: "JP" },
  france: { en: "France", fr: "France", es: "Francia", code: "FR" },
  thailand: { en: "Thailand", fr: "Thaïlande", es: "Tailandia", code: "TH" },
  usa: { en: "United States", fr: "États-Unis", es: "Estados Unidos", code: "US" },
} as const;

export type Plan = {
  id: number;
  provider: string;
  mark: string;
  color: string;
  destinations: Destination[];
  dataGb: number | null;
  days: number;
  network: "5G" | "4G/LTE";
  priceEur: number;
  rating: number;
  reviews: number;
  hotspot: "yes" | "limited";
  tag?: "bestValue" | "popular";
};

export const plans: Plan[] = [
  { id: 1, provider: "Saily", mark: "S", color: "#6d5dfc", destinations: ["japan", "france", "thailand", "usa"], dataGb: 10, days: 30, network: "5G", priceEur: 17.99, rating: 4.8, reviews: 2840, hotspot: "yes", tag: "bestValue" },
  { id: 2, provider: "Airalo", mark: "A", color: "#ef5b7c", destinations: ["japan", "france", "thailand", "usa"], dataGb: 20, days: 30, network: "5G", priceEur: 29.5, rating: 4.7, reviews: 8210, hotspot: "yes", tag: "popular" },
  { id: 3, provider: "MobiMatter", mark: "M", color: "#0a856d", destinations: ["japan", "france", "thailand"], dataGb: 15, days: 30, network: "5G", priceEur: 22.49, rating: 4.6, reviews: 1460, hotspot: "yes" },
  { id: 4, provider: "Holafly", mark: "H", color: "#fd5a2a", destinations: ["japan", "france", "thailand", "usa"], dataGb: null, days: 10, network: "5G", priceEur: 33.9, rating: 4.7, reviews: 5190, hotspot: "limited" },
  { id: 5, provider: "Nomad", mark: "N", color: "#2b63d9", destinations: ["japan", "france", "thailand", "usa"], dataGb: 5, days: 15, network: "4G/LTE", priceEur: 10.5, rating: 4.5, reviews: 2110, hotspot: "yes" },
  { id: 6, provider: "Ubigi", mark: "U", color: "#e42b35", destinations: ["japan", "france", "usa"], dataGb: 10, days: 30, network: "5G", priceEur: 19, rating: 4.5, reviews: 1870, hotspot: "yes" },
  { id: 7, provider: "Jetpac", mark: "J", color: "#0c73df", destinations: ["japan", "thailand", "usa"], dataGb: 3, days: 7, network: "4G/LTE", priceEur: 5, rating: 4.4, reviews: 940, hotspot: "yes" },
  { id: 8, provider: "aloSIM", mark: "a", color: "#111827", destinations: ["france", "thailand", "usa"], dataGb: 10, days: 30, network: "5G", priceEur: 20.5, rating: 4.6, reviews: 1260, hotspot: "yes" },
  { id: 9, provider: "GigSky", mark: "G", color: "#f7b500", destinations: ["japan", "france", "usa"], dataGb: null, days: 7, network: "5G", priceEur: 24.99, rating: 4.3, reviews: 730, hotspot: "limited" },
  { id: 10, provider: "SimOptions", mark: "SO", color: "#1f4c8c", destinations: ["france", "thailand"], dataGb: 20, days: 30, network: "4G/LTE", priceEur: 27.9, rating: 4.4, reviews: 890, hotspot: "yes" },
];
