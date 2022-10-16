const list = [
  {
    id: 1,
    title: "Mặt Nạ Innisfree Capsule Recipe Pack 10ml",
    price: 36000,
    img: "https://www.kosmebox.com/image/cache/data/ReplaceImages/INSC56-320x320.jpg",
    amount: 1,
  },
  {
    id: 2,
    title: "Che Khuyết Điểm Innisfree Mineral Stick Concealer 2g [HSD 12/2022]",
    price: 44700,
    img: "https://www.kosmebox.com/image/cache/data/INNISFREE/Mineral-Stick-Concealer/but-che-khuyet-diem-innisfree-mineral-stick-concealer-jeju-cosmetics-1-320x320.jpg",
    amount: 1,
  },
  {
    id: 3,
    title: "Sữa Rửa Mặt Soonsiki Clean Sebum Clay Pack To Form 120ml",
    price: 69000,
    img: "https://www.kosmebox.com/image/cache/data/SOONSIKI/sua-rua-mat-soonsiki-clean-sebum-clay-pack-to-form-120ml/Clean-Sebum-Clay-Pack-To-Form-4-320x320.jpg",
    amount: 1,
  },
  {
    id: 4,
    title:
      "Che Khuyết Điểm Siêu Đa Năng The Face Shop Concealer Dual Veil 8.1g [V201]",
    price: 193000,
    img: "https://www.kosmebox.com/image/cache/data/THEFACESHOP/the-face-shop-concealer-dual-veil-trolls-8-1g/che-khuyet-diem-moi-mat-va-mat-the-face-shop-concealer-dual-veil-trolls-8-1g-5-320x320.jpg",
    amount: 1,
  },
  {
    id: 5,
    title: "Cọ Tô Màu Mày Etude House Color My Brows Cara 4.5g [HSD 6/2022]",
    price: 142500,
    img: "https://www.kosmebox.com/image/cache/data/ETUDEHOUSE/color-my-brows-cara/Etude-House-Color-My-Brows-Cara-320x320.jpg",
    amount: 1,
  },
  {
    id: 6,
    title:
      "Tinh Chất Giúp Da Trẻ Hóa Rạng Rỡ The Face Shop Yehwadam Hwansaenggo Rejuvenating Radiance Serum 45ml",
    price: 900000,
    img: "https://www.kosmebox.com/image/cache/data/THEFACESHOP/the-face-shop-yehwadam-hwansaenggo-rejuvenating-radiance-serum-45ml/AVA-500x500.jpg",
    amount: 1,
  },
  {
    id: 7,
    title: "Phấn Phủ Nén Kiềm Dầu Siêu Mịn Innisfree Pore Blur Pact 12.5g",
    price: 290000,
    img: "https://www.kosmebox.com/image/cache/data/INNISFREE/phan-phu-nen-kiem-dau-sieu-min-innisfree-pore-blur-pact-12-5g/Pore-Blur-Pact-500x500.jpg",
    amount: 1,
  },
  {
    id: 8,
    title:
      "Bộ Dưỡng Trắng Da, Se Khít Lỗ Chân Lông Innisfree Brightening Pore Set (4 Sản Phẩm)",
    price: 1750000,
    img: "https://www.kosmebox.com/image/cache/data/INNISFREE/bo-duong-trang-da-se-khit-lo-chan-long-innisfree-brightening-pore-set-4-san-pham/bo-duong-trang-da-se-khit-lo-chan-long-innisfree-brightening-pore-set-4-san-pham-10-500x500.jpg",
    amount: 1,
  },
  {
    id: 9,
    title:
      "Xịt Khoáng Dưỡng Ẩm The Face Shop Argan Oil In Water Radiating Moisture Mist ",
    price: 179000,
    img: "https://www.kosmebox.com/image/cache/data/the%20face%20shop/THEFACESHOP%20ARGAN%20OIL%20IN%20WATER%20RADIATING%20MOISTURE%20MIST/F-500x500.png",
    amount: 1,
  },
  {
    id: 10,
    title:
      "Mặt Nạ Lột Mụn Mũi The Face Shop Jeju Volcanic Lava Peel-Off Clay Nose Mask 50g",
    price: 129000,
    img: "https://www.kosmebox.com/image/cache/data/THEFACESHOP/chinh-sua-hinh-anh/jeju-volcanic-lava-impurity-removing-nose-pack-1-500x500.jpg",
    amount: 1,
  },
  {
    id: 11,
    title:
      "Nước Dưỡng Tóc Tinh Dầu Bưởi Giảm Gãy Rụng Và Làm Mềm Tóc Cocoon Pomelo Hair Tonic 140ML",
    price: 116000,
    img: "https://www.kosmebox.com/image/cache/data/X%E1%BB%8Bt%20t%C3%B3c%20cocoon/nuoc-duong-toc-tinh-dau-buoi-cocoon%20(1)-500x500.jpg",
    amount: 1,
  },
  {
    id: 12,
    title: "Kem Trị Mụn Phục Hồi Da Medi-Peel Centella Mezzo Cream 30ml",
    price: 197000,
    img: "https://www.kosmebox.com/image/cache/data/Medi-Peel/kem-tri-mun-phuc-hoi-da-medi-peel-centella-mezzo-cream-30ml/kem-tri-mun-phuc-hoi-da-medi-peel-centella-mezzo-cream-30ml-7-500x500.jpg",
    amount: 1,
  },
  {
    id: 13,
    title:
      "Thạch Hoa Hồng Cấp Ẩm Dưỡng Da Cocoon Rose Aqua Gel Cream Hydrate & Nourish Skin",
    price: 185000,
    img: "https://www.kosmebox.com/image/cache/data/14_Tha%CC%A3ch%20Hoa%20Ho%CC%82%CC%80ng%20Du%CC%9Bo%CC%9B%CC%83ng%20A%CC%82%CC%89m%2030ml/2-500x500.png",
    amount: 1,
  },
  {
    id: 14,
    title:
      "Nước Hoa Hồng Dưỡng Ẩm Và Trị Mụn 30 Ngày Some By Mi AHA-BHA-PHA 30 Days Miracle Toner 150ML",
    price: 232000,
    img: "https://www.kosmebox.com/image/cache/data/Somebymi/nuoc-hoa-hong-tri-mun-than-ki-some-by-mi-aha-bha-pha-30-days-miracle-toner3-500x500.jpg",
    amount: 1,
  },
  {
    id: 15,
    title: "[New Color] Son Tint Lì Mềm Mịn Môi Romand Juicy Lasting Tint 4.8g",
    price: 144000,
    img: "https://www.kosmebox.com/image/cache/data/Romand/son-tint-li-min-moi-romand-juicy-lasting-tint/Romand-Juicy-Lasting-Tint-21-500x500.jpg",
    amount: 1,
  },
];

export default list;
