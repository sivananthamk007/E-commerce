const products_datas = [
  {
    id: 1,
    name: "Men's Sneakers  Olive",
    category: "Footwear",
    price: 2499,
    rating: 4.6,
    stock: 22,
    discountPercentage: 12,
    brand: "SneakFit",
    description:
      "Stylish olive sneakers for men with comfortable sole and durable material.",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTnQhd3fHlKaqQaJV-gKXh0qJGWn6zTA9OTB4uOYvbZwAN0bFx_hwCii2hfMae1HDv-tVc-itsv1o2ZHoFl5J-gIipKwYmJoho0YHspHsW38gsmp8K_DM05MQ",
  },
  {
    id: 2,
    name: "Red Nike Trainer",
    category: "Footwear",
    price: 2799,
    rating: 4.7,
    stock: 15,
    discountPercentage: 10,
    brand: "Nike",
    description:
      "High-performance red trainers from Nike, built for speed and comfort.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s",
  },
  {
    id: 3,
    name: "Black Running Shoe",
    category: "Footwear",
    price: 1999,
    rating: 4.3,
    stock: 30,
    discountPercentage: 15,
    brand: "Abros",
    description: "Durable and breathable running shoes for daily workouts.",
    image:
      "https://abrosshoes.com/cdn/shop/files/Black_0001_000A2970.jpg?v=1737962866",
  },
  {
    id: 4,
    name: "White Minimal Sneakers",
    category: "Footwear",
    price: 2199,
    rating: 4.4,
    stock: 25,
    discountPercentage: 8,
    brand: "SneakCraft",
    description:
      "Clean and minimal design sneakers perfect for any casual outfit.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFe59eHJcJe9Am5UQautuESLWu48hhvO0xw&s",
  },
  {
    id: 5,
    name: "Smartwatch Pro",
    category: "Electronics",
    price: 5999,
    rating: 4.5,
    stock: 12,
    discountPercentage: 18,
    brand: "CromaTech",
    description:
      "Feature-rich smartwatch with heart rate, steps, and notifications monitoring.",
    image:
      "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Wearable%20Devices/Images/308381_0_dj8b4g.png?updatedAt=1752306068029?tr=w-600",
  },
  {
    id: 6,
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 2999,
    rating: 4.4,
    stock: 0,
    discountPercentage: 11,
    brand: "SoundCore",
    description:
      "Compact and powerful earbuds with noise cancellation and long battery life.",
    image: "https://m.media-amazon.com/images/I/51pycg0MGxL.jpg",
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 2299,
    rating: 4.5,
    stock: 21,
    discountPercentage: 14,
    brand: "BoomBox",
    description: "Portable speaker with rich sound quality and deep bass.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cYWSaBNIhOPF2gguIun1olGtIYrHAlOO7w&s",
  },
  {
    id: 8,
    name: "DSLR Camera",
    category: "Electronics",
    price: 39999,
    rating: 4.7,
    stock: 6,
    discountPercentage: 9,
    brand: "Canon",
    description:
      "Capture high-resolution images and videos with this professional DSLR camera.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9NQ-uNFQhWOugVMOVsmPtSC2ReYCA7riSnlUzEYsenTyzSaCuu9hzOWBCHZc3XpG196k&usqp=CAU",
  },
  {
    id: 9,
    name: "Office Backpack",
    category: "Bags",
    price: 1699,
    rating: 4.3,
    stock: 17,
    discountPercentage: 13,
    brand: "UrbanEdge",
    description:
      "Spacious and professional backpack ideal for office and travel use.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkBzQBxGnzJ7QxNrI5P1HJp93Bodu9EAnRPg&s",
  },
  {
    id: 10,
    name: "Travel Luggage Bag",
    category: "Bags",
    price: 2499,
    rating: 4.4,
    stock: 15,
    discountPercentage: 17,
    brand: "GlobeTrek",
    description:
      "Lightweight and durable travel bag perfect for long vacations.",
    image:
      "https://media.istockphoto.com/id/1400155112/photo/yellow-suitcase-flying-on-white-background.jpg?s=612x612&w=0&k=20&c=U5x1IIaOXIDZ-Q59mvDD4V-I8bWnFWZ7flh03Up3sZ4=",
  },
  {
    id: 11,
    name: "Women's Handbag",
    category: "Accessories",
    price: 1299,
    rating: 4.1,
    stock: 18,
    discountPercentage: 12,
    brand: "Dreubea",
    description:
      "Elegant and spacious handbag suitable for casual and formal use.",
    image:
      "https://images-cdn.ubuy.co.in/6692a54378b2891e5e653a09-dreubea-womens-handbag-tote-shoulder.jpg",
  },
  {
    id: 12,
    name: "Leather Wallet",
    category: "Accessories",
    price: 699,
    rating: 4.2,
    stock: 50,
    discountPercentage: 10,
    brand: "Van Heusen",
    description:
      "Classic leather wallet with multiple compartments and RFID protection.",
    image:
      "https://imagescdn.vanheusenindia.com/img/app/product/3/39726061-15077966.jpg?auto=format&w=390",
  },
  {
    id: 13,
    name: "Laptop Stand",
    category: "Accessories",
    price: 1099,
    rating: 4.2,
    stock: 19,
    discountPercentage: 15,
    brand: "PackHacker",
    description: "Ergonomic laptop stand to reduce strain and improve posture.",
    image:
      "https://cdn.packhacker.com/2024/05/8e7299ff-featured-best-laptop-stand.jpg",
  },
  {
    id: 14,
    name: "Casual T-Shirt",
    category: "Clothing",
    price: 599,
    rating: 4.2,
    stock: 36,
    discountPercentage: 10,
    brand: "BasicStyle",
    description: "Soft and breathable casual t-shirt for everyday wear.",
    image: "https://m.media-amazon.com/images/I/61kHoFE8mAL._UY1100_.jpg",
  },
  {
    id: 15,
    name: "Ethnic Saree",
    category: "Clothing",
    price: 2199,
    rating: 4.6,
    stock: 12,
    discountPercentage: 20,
    brand: "Mirraw",
    description: "Elegant ethnic saree with rich design and premium fabric.",
    image:
      "https://assets0.mirraw.com/images/12804106/image_zoom.jpeg?1725278688",
  },
  {
    id: 16,
    name: "Women’s Kurti",
    category: "Clothing",
    price: 1299,
    rating: 4.3,
    stock: 33,
    discountPercentage: 15,
    brand: "FabIndia",
    description:
      "Comfortable and stylish kurti perfect for festive and casual occasions.",
    image: "https://m.media-amazon.com/images/I/81ewj7FFTfL._UY350_.jpg",
  },
  {
    id: 17,
    name: "Denim Jeans",
    category: "Clothing",
    price: 1499,
    rating: 4.0,
    stock: 31,
    discountPercentage: 10,
    brand: "Levi's",
    description:
      "Trendy denim jeans with a comfortable fit and long-lasting fabric.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwcWX4wGY4yMAPTkiOGRlta18RHNSBnNEY0w&s",
  },
  {
    id: 18,
    name: "Sunglasses",
    category: "Accessories",
    price: 899,
    rating: 4.1,
    stock: 24,
    discountPercentage: 13,
    brand: "H&M",
    description: "UV-protected stylish sunglasses to elevate your fashion.",
    image:
      "https://image.hm.com/assets/hm/5e/6d/5e6d71668f8a498e3808bd01db5fe69895b19e57.jpg?imwidth=768",
  },
  {
    id: 19,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 799,
    rating: 4.1,
    stock: 29,
    discountPercentage: 16,
    brand: "Logitech",
    description: "Smooth and precise wireless mouse with ergonomic design.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIjqMTCg7UjNi48kwEgCSxadlwJlok9pkJmA&s",
  },
  {
    id: 20,
    name: "Headphones",
    category: "Electronics",
    price: 1899,
    rating: 4.3,
    stock: 27,
    discountPercentage: 14,
    brand: "AJIO",
    description:
      "High-quality headphones with deep bass and crystal-clear audio.",
    image:
      "https://assets.ajio.com/medias/sys_master/root/20250109/70lZ/677fce37663dbe1c5fc91947/-473Wx593H-4937118640-multi-MODEL.jpg",
  },
];

export default products_datas;
