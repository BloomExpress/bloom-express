const flowers = [
  {
    id: 1,
    name: "Sunshine Bouquet",
    price: 18.99,
    color: ["Yellow", "Orange", "Brown"],
    description:
      "Brighten up your day with this stunning Sunshine Bouquet.It features beautiful yellow sunflowers combined with delicate purple flowers, creating a perfect harmony of colors.Whether it's a birthday celebration or a special occasion, this bouquet is sure to bring joy and happiness to your loved ones. Share the warmth of the sun and the beauty of nature with this lovely arrangement",
    image:
      "https://images.unsplash.com/photo-1629386255808-c3ceb405173c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1bmZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Birthday",
    isAvailable: true,
    isFeatured: true,
    customerReviews: [
      { rating: 4.2, review: "Beautiful bouquet! Highly recommended." },
    ],
  },
  {
    id: 2,
    name: "Classic Rose Bouquet",
    price: 24.99,
    color: ["Red", "White"],
    description:
      "Ignite the flames of romance with our Classic Rose Bouquet. This exquisite arrangement features passionate red roses and elegant white orchids, symbolizing the purity of love and devotion. Surprise your significant other with this timeless expression of affection, perfect for anniversaries, Valentine's Day, or any romantic occasion. Let the flowers convey the depth of your emotions and make your moments unforgettable.",
    image:
      "https://images.unsplash.com/photo-1522142540300-60ae5b4bc569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJvc2UlMjAlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Romance",
    isAvailable: true,
    isFeatured: false,
    customerReviews: [
      { rating: 4, review: "Beautiful bouquet! Highly recommended." },
    ],
  },
  {
    id: 3,
    name: "Pretty in Pink Bouquet",
    price: 22.99,
    color: ["Red"],
    description:
      "Capture the essence of elegance and grace with our Pretty in Pink Bouquet. This enchanting arrangement showcases a delightful mix of pink roses, symbolizing admiration, and red roses, symbolizing love. It's the perfect gift to celebrate joyous moments or express your deepest feelings on special occasions. Let these exquisite flowers speak the language of love and create cherished memories that will last forever.",
    image:
      "https://images.unsplash.com/photo-1533793241176-a270e75ef2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHBpbmslMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Celebration",
    isAvailable: true,
    isFeatured: true,
    customerReviews: [
      { rating: 2.6, review: "Beautiful bouquet! Highly recommended." },
    ],
  },
  {
    id: 4,
    name: "Purple Dream Bouquet",
    price: 29.99,
    color: ["Purple", "White", "Pink"],
    description:
      "Capture the essence of elegance and grace with our Pretty in Pink Bouquet. This enchanting arrangement showcases a delightful mix of pink roses, symbolizing admiration, and red roses, symbolizing love. It's the perfect gift to celebrate joyous moments or express your deepest feelings on special occasions. Let these exquisite flowers speak the language of love and create cherished memories that will last forever.",
    image:
      "https://images.unsplash.com/photo-1659519677228-4ae11f3f79d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzg3fHxwdXJwbGUlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Sympathy",
    isAvailable: false,
    isFeatured: false,
    customerReviews: [
      { rating: 3.6, review: "Beautiful bouquet! Highly recommended." },
    ],
  },
  {
    id: 5,
    name: "Sweet Baby Bouquet",
    price: 15.99,
    color: ["White", "yellow"],
    description:
      "Capture the essence of elegance and grace with our Pretty in Pink Bouquet. This enchanting arrangement showcases a delightful mix of pink roses, symbolizing admiration, and red roses, symbolizing love. It's the perfect gift to celebrate joyous moments or express your deepest feelings on special occasions. Let these exquisite flowers speak the language of love and create cherished memories that will last forever.",
    image:
      "https://images.unsplash.com/photo-1549576351-2b0829ac81f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGluayUyMGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "New Baby",
    isAvailable: true,
    isFeatured: false,
    customerReviews: [
      { rating: 2.5, review: "Beautiful bouquet! Highly recommended." },
    ],
  },
  {
    id: 6,
    name: "Bright Blooms Bouquet",
    price: 42.99,
    color: ["Orange", "Purple", "White"],
    description:
      "Capture the essence of elegance and grace with our Pretty in Pink Bouquet. This enchanting arrangement showcases a delightful mix of pink roses, symbolizing admiration, and red roses, symbolizing love. It's the perfect gift to celebrate joyous moments or express your deepest feelings on special occasions. Let these exquisite flowers speak the language of love and create cherished memories that will last forever.",
    image:
      "https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Thank You",
    isAvailable: true,
    isFeatured: true,
    customerReviews: [
      { rating: 4.0, review: "Beautiful bouquet! Highly recommended." },
    ],
  },
  {
    id: 7,
    name: "Sweet Home Bouquet",
    price: 34.99,
    color: ["Pink", "Yellow", "White"],
    description:
      "Capture the essence of elegance and grace with our Pretty in Pink Bouquet. This enchanting arrangement showcases a delightful mix of pink roses, symbolizing admiration, and red roses, symbolizing love. It's the perfect gift to celebrate joyous moments or express your deepest feelings on special occasions. Let these exquisite flowers speak the language of love and create cherished memories that will last forever.",
    image:
      "https://images.unsplash.com/photo-1572267381748-9e0a20a97844?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAzfHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "New Home",
    isAvailable: true,
    isFeatured: false,
    customerReviews: [
      { rating: 3.4, review: "Beautiful bouquet! Highly recommended." },
    ],
  },
  {
    id: 8,
    name: "Roses and Lilies Bouquet",
    price: 37.99,
    color: ["Pink", "red"],
    description:
      "Capture the essence of elegance and grace with our Pretty in Pink Bouquet. This enchanting arrangement showcases a delightful mix of pink roses, symbolizing admiration, and red roses, symbolizing love. It's the perfect gift to celebrate joyous moments or express your deepest feelings on special occasions. Let these exquisite flowers speak the language of love and create cherished memories that will last forever.",
    image:
      "https://images.unsplash.com/photo-1521543832500-49e69fb2bea2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Romance",
    isAvailable: true,
    isFeatured: true,
    customerReviews: [
      { rating: 3.8, review: "Beautiful bouquet! Highly recommended." },
    ],
  },
  {
    id: 9,
    name: "Purple Rain Bouquet",
    price: 23.99,
    color: ["Purple", "blue"],
    description:
      "Capture the essence of elegance and grace with our Pretty in Pink Bouquet. This enchanting arrangement showcases a delightful mix of pink roses, symbolizing admiration, and red roses, symbolizing love. It's the perfect gift to celebrate joyous moments or express your deepest feelings on special occasions. Let these exquisite flowers speak the language of love and create cherished memories that will last forever.",
    image:
      "https://images.unsplash.com/photo-1561128290-005859246e58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Romance",
    isAvailable: true,
    isFeatured: false,
    customerReviews: [
      { rating: 2.7, review: "Beautiful bouquet! Highly recommended." },
    ],
  },
  {
    id: 10,
    name: "Pure Joy Bouquet",
    price: 17.99,
    color: ["White", "Yellow", "Green"],
    description:
      "Capture the essence of elegance and grace with our Pretty in Pink Bouquet. This enchanting arrangement showcases a delightful mix of pink roses, symbolizing admiration, and red roses, symbolizing love. It's the perfect gift to celebrate joyous moments or express your deepest feelings on special occasions. Let these exquisite flowers speak the language of love and create cherished memories that will last forever.",
    image:
      "https://images.unsplash.com/photo-1593704192197-d674dc9c913f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzY2fHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "New Baby",
    isAvailable: false,
    isFeatured: true,
    customerReviews: [
      { rating: 3.3, review: "Beautiful bouquet! Highly recommended." },
    ],
  },
  {
    id: 11,
    name: "Harmony Garden Bouquet",
    price: 28.99,
    color: ["Yellow", "Pink", "Orange"],
    description:
      "Capture the essence of elegance and grace with our Pretty in Pink Bouquet. This enchanting arrangement showcases a delightful mix of pink roses, symbolizing admiration, and red roses, symbolizing love. It's the perfect gift to celebrate joyous moments or express your deepest feelings on special occasions. Let these exquisite flowers speak the language of love and create cherished memories that will last forever.",
    image:
      "https://images.unsplash.com/photo-1550237390-96532abac3ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Sympathy",
    isAvailable: true,
    isFeatured: false,
    customerReviews: [
      { rating: 2.6, review: "Beautiful bouquet! Highly recommended." },
    ],
  },
  {
    id: 12,
    name: "Country Charm Bouquet",
    price: 21.99,
    color: ["Orange", "Purple", "White"],
    description:
      "Capture the essence of elegance and grace with our Pretty in Pink Bouquet. This enchanting arrangement showcases a delightful mix of pink roses, symbolizing admiration, and red roses, symbolizing love. It's the perfect gift to celebrate joyous moments or express your deepest feelings on special occasions. Let these exquisite flowers speak the language of love and create cherished memories that will last forever.",
    image:
      "https://images.unsplash.com/photo-1589217289787-879b47f6edab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjQxfHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Celebration",
    isAvailable: true,
    isFeatured: false,
    customerReviews: [
      { rating: 2.9, review: "Beautiful bouquet! Highly recommended." },
    ],
  },
  {
    id: 13,
    name: "Enchanted Forest Bouquet",
    price: 36.99,
    color: ["White", "Green", "Orange"],
    description:
      "Capture the essence of elegance and grace with our Pretty in Pink Bouquet. This enchanting arrangement showcases a delightful mix of pink roses, symbolizing admiration, and red roses, symbolizing love. It's the perfect gift to celebrate joyous moments or express your deepest feelings on special occasions. Let these exquisite flowers speak the language of love and create cherished memories that will last forever.",
    image:
      "https://images.unsplash.com/photo-1494336956603-39a3641efa1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjU4fHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Romance",
    isAvailable: true,
    isFeatured: false,
    customerReviews: [
      { rating: 2.5, review: "Beautiful bouquet! Highly recommended." },
    ],
  },
  {
    id: 14,
    name: "Eternal Love Bouquet",
    price: 34.99,
    color: ["Orange", "Red", "White"],
    description:
      "Capture the essence of elegance and grace with our Pretty in Pink Bouquet. This enchanting arrangement showcases a delightful mix of pink roses, symbolizing admiration, and red roses, symbolizing love. It's the perfect gift to celebrate joyous moments or express your deepest feelings on special occasions. Let these exquisite flowers speak the language of love and create cherished memories that will last forever.",
    image:
      "https://images.unsplash.com/photo-1599791095997-5cf38bb5ff69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc3fHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Anniversary",
    isAvailable: true,
    isFeatured: false,
    customerReviews: [
      { rating: 1.9, review: "Beautiful bouquet! Highly recommended." },
    ],
  },
  {
    id: 15,
    name: "Summer Breeze Bouquet",
    price: 25.99,
    color: ["Yellow", "Orange", "White"],
    description:
      "Capture the essence of elegance and grace with our Pretty in Pink Bouquet. This enchanting arrangement showcases a delightful mix of pink roses, symbolizing admiration, and red roses, symbolizing love. It's the perfect gift to celebrate joyous moments or express your deepest feelings on special occasions. Let these exquisite flowers speak the language of love and create cherished memories that will last forever.",
    image:
      "https://images.unsplash.com/photo-1602135452565-7b9ba2b1d1dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Celebration",
    isAvailable: true,
    isFeatured: false,
    customerReviews: [
      { rating: 2.5, review: "Beautiful bouquet! Highly recommended." },
    ],
  },
  {
    id: 16,
    name: "Cheerful Wishes Bouquet",
    price: 19.99,
    color: ["Yellow", "Orange", "White"],
    description:
      "Capture the essence of elegance and grace with our Pretty in Pink Bouquet. This enchanting arrangement showcases a delightful mix of pink roses, symbolizing admiration, and red roses, symbolizing love. It's the perfect gift to celebrate joyous moments or express your deepest feelings on special occasions. Let these exquisite flowers speak the language of love and create cherished memories that will last forever.",
    image:
      "https://images.unsplash.com/photo-1546778763-d09b214ed1b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzU0fHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Celebration",
    isAvailable: true,
    isFeatured: false,
    customerReviews: [
      { rating: 4.6, review: "Beautiful bouquet! Highly recommended." },
    ],
  },
  {
    id: 17,
    name: "Mellow Melodies Bouquet",
    price: 26.99,
    color: ["White", "Yellow", "Pink"],
    description:
      "Capture the essence of elegance and grace with our Pretty in Pink Bouquet. This enchanting arrangement showcases a delightful mix of pink roses, symbolizing admiration, and red roses, symbolizing love. It's the perfect gift to celebrate joyous moments or express your deepest feelings on special occasions. Let these exquisite flowers speak the language of love and create cherished memories that will last forever.",
    image:
      "https://images.unsplash.com/photo-1562443089-c9e27ff4b560?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzcwfHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Romance",
    isAvailable: true,
    isFeatured: false,
    customerReviews: [
      { rating: 4.2, review: "Beautiful bouquet! Highly recommended." },
    ],
  },
  {
    id: 18,
    name: "Heavenly Peace Bouquet",
    price: 22.99,
    color: ["White", "Purple", "Green"],
    description:
      "Capture the essence of elegance and grace with our Pretty in Pink Bouquet. This enchanting arrangement showcases a delightful mix of pink roses, symbolizing admiration, and red roses, symbolizing love. It's the perfect gift to celebrate joyous moments or express your deepest feelings on special occasions. Let these exquisite flowers speak the language of love and create cherished memories that will last forever.",
    image:
      "https://images.unsplash.com/photo-1616432541912-fbc3dff3a9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDcyfHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Sympathy",
    isAvailable: true,
    isFeatured: true,
    customerReviews: [
      { rating: 4.3, review: "Beautiful bouquet! Highly recommended." },
    ],
  },
  {
    id: 19,
    name: "Pure Serenity Bouquet",
    price: 35.99,
    color: ["White", "Green"],
    description:
      "Capture the essence of elegance and grace with our Pretty in Pink Bouquet. This enchanting arrangement showcases a delightful mix of pink roses, symbolizing admiration, and red roses, symbolizing love. It's the perfect gift to celebrate joyous moments or express your deepest feelings on special occasions. Let these exquisite flowers speak the language of love and create cherished memories that will last forever.",
    image:
      "https://images.unsplash.com/photo-1588097747106-5f07b7dd4133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDA3fHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Sympathy",
    isAvailable: true,
    isFeatured: false,
    customerReviews: [
      { rating: 4.5, review: "Beautiful bouquet! Highly recommended." },
    ],
  },
  {
    id: 20,
    name: "Anniversary Bouquet",
    price: 32.99,
    color: ["Pink", "Red"],
    description:
      "Capture the essence of elegance and grace with our Pretty in Pink Bouquet. This enchanting arrangement showcases a delightful mix of pink roses, symbolizing admiration, and red roses, symbolizing love. It's the perfect gift to celebrate joyous moments or express your deepest feelings on special occasions. Let these exquisite flowers speak the language of love and create cherished memories that will last forever.",
    image:
      "https://images.unsplash.com/photo-1572096570533-7a483e1dd0ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjE4fHxmbG93ZXIlMjBib3VxdWV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Anniversary",
    isAvailable: true,
    isFeatured: false,
    customerReviews: [
      { rating: 3.8, review: "Beautiful bouquet! Highly recommended." },
    ],
  },
];

export default flowers;
