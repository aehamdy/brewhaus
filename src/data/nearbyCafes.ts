type nearbyCafeItem = {
  id: number;
  state: string;
  address: string;
  city: string;
  timings: string;
  location: string;
};

const nearbyCafesList: nearbyCafeItem[] = [
  {
    id: 1,
    state: "Brooklyn",
    address: "123 Bedford Ave",
    city: "Brooklyn, NY 11211",
    timings: "7AM - 7PM",
    location: "https://www.google.com/maps",
  },
  {
    id: 2,
    state: "Manhattan",
    address: "456 Spring St",
    city: "New York, NY 10012",
    timings: "7AM - 8PM",
    location: "https://www.google.com/maps",
  },
  {
    id: 3,
    state: "Queens",
    address: "789 Broadway",
    city: "Queens, NY 11106",
    timings: "7AM - 6PM",
    location: "https://www.google.com/maps",
  },
  {
    id: 4,
    state: "Queens",
    address: "134-16 36th Road",
    city: "Flushing, NY 11354",
    timings: "8AM - 6PM",
    location: "https://www.google.com/maps",
  },
];

export default nearbyCafesList;
