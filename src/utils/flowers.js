const flowers = [
  {
    id: 1,
    name: "Sunshine Bouquet",
    price: 18.99,
    color: "Yellow",
    description: "Yellow sun flower bouquet",
    image:
      "https://images.unsplash.com/photo-1629386255808-c3ceb405173c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1bmZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Birthday",
  },
  {
    id: 2,
    name: "Classic Rose Bouquet",
    price: 24.99,
    color: "Red",
    description: "Red rose and white orchid flowers",
    image:
      "https://images.unsplash.com/photo-1522142540300-60ae5b4bc569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJvc2UlMjAlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Romance",
  },
  {
    id: 3,
    name: "Pretty in Pink Bouquet",
    price: 22.99,
    color: "Pink",
    description: "Pink rose bouquet",
    image:
      "https://images.unsplash.com/photo-1533793241176-a270e75ef2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHBpbmslMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Celebration",
  },
  {
    id: 4,
    name: "Purple Dream Bouquet",
    price: 29.99,
    color: "Purple",
    description: "A purple bouquet",
    image:
      "https://images.unsplash.com/photo-1659519677228-4ae11f3f79d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzg3fHxwdXJwbGUlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Sympathy",
  },
  {
    id: 5,
    name: "Sweet Baby Bouquet",
    price: 15.99,
    color: "Pink",
    description: "Pink and white peony bouquet",
    image:
      "https://images.unsplash.com/photo-1549576351-2b0829ac81f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGluayUyMGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "New Baby",
  },
  {
    id: 6,
    name: "Bright Blooms Bouquet",
    price: 42.99,
    color: "Mixed",
    description: "Bouquet of colorful flowers",
    image:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Thank You",
  },
  {
    id: 7,
    name: "Home Sweet Home Bouquet",
    price: 34.99,
    color: "Mixed",
    description: "pink yellow and green flowers in vase",
    image:
      "https://images.unsplash.com/photo-1572267381748-9e0a20a97844?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "New Home",
  },
  {
    id: 8,
    name: "Roses and Lilies Bouquet",
    price: 37.99,
    color: ["Pink", "red"],
    description: "pink and red flower bouguet",
    image:
      "https://images.unsplash.com/photo-1521543832500-49e69fb2bea2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Romance",
  },
  {
    id: 9,
    name: "Purple Rain Bouquet",
    price: 23.99,
    color: ["Purple", "blue"],
    description: "purple and blue flowers",
    image:
      "https://images.unsplash.com/photo-1561128290-005859246e58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Romance",
  },
  {
    id: 10,
    name: "Pure Joy Bouquet",
    price: 17.99,
    color: "Yellow",
    description: "white and yellow on green leaves",
    image:
      "https://images.unsplash.com/photo-1593704192197-d674dc9c913f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzY2fHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "New Baby",
  },
  {
    id: 11,
    name: "Harmony Garden Bouquet",
    price: 28.99,
    color: "Mixed",
    description: "assorted flowers in clear glass vase",
    image:
      "https://images.unsplash.com/photo-1550237390-96532abac3ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Sympathy",
  },
  {
    id: 12,
    name: "Country Charm Bouquet",
    price: 21.99,
    color: ["Pink", "yellow"],
    description: "Pink and yellow bouquet",
    image:
      "https://images.unsplash.com/photo-1589217289787-879b47f6edab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQxfHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Celebration",
  },
  {
    id: 13,
    name: "Enchanted Forest Bouquet",
    price: 36.99,
    color: "Mixed",
    description: "Forest flowers in basket",
    image:
      "https://images.unsplash.com/photo-1494336956603-39a3641efa1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU4fHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Romance",
  },
  {
    id: 14,
    name: "Eternal Love Bouquet",
    price: 32.99,
    color: "Red",
    description: "red and white bouquet",
    image:
      "https://images.unsplash.com/photo-1599791095997-5cf38bb5ff69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc3fHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Anniversary",
  },
  {
    id: "15",
    name: "Summer Breeze Bouquet",
    price: 25.99,
    color: "Mixed",
    description: "Summer flowers",
    image:
      "https://images.unsplash.com/photo-1602135452565-7b9ba2b1d1dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Celebration",
  },
  {
    id: "16",
    name: "Cheerful Wishes Bouquet",
    price: 19.99,
    color: "Yellow",
    description: "white and yellow arrangement",
    image:
      "https://images.unsplash.com/photo-1546778763-d09b214ed1b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzU0fHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Celebration",
  },
  {
    id: "17",
    name: "Mellow Melodies Bouquet",
    price: 26.99,
    color: "Pink",
    description: "white and pink rose bouquet",
    image:
      "https://images.unsplash.com/photo-1562443089-c9e27ff4b560?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzcwfHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Romance",
  },
  {
    id: "18",
    name: "Heavenly Peace Bouquet",
    price: 22.99,
    color: "White",
    description: "white flower in blue vase",
    image:
      "https://images.unsplash.com/photo-1616432541912-fbc3dff3a9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDcyfHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Sympathy",
  },
  {
    id: "19",
    name: "Pure Serenity Bouquet",
    price: 35.99,
    color: "White",
    description: "white rose bouquet",
    image:
      "https://images.unsplash.com/photo-1588097747106-5f07b7dd4133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDA3fHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Sympathy",
  },
  {
    id: "20",
    name: "Anniversary Splendor Bouquet",
    price: 32.99,
    color: "Red",
    description: "red roses and tulips in a vase",
    image:
      "https://images.unsplash.com/photo-1572096570533-7a483e1dd0ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjE4fHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Anniversary",
  },
];

export default flowers;
