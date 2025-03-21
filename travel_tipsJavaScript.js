window.onload = function() {
  const urlParams = new URLSearchParams(window.location.search);
  const cardNumber = urlParams.get('card');
  
  const tipTitle = document.getElementById('tip-title');
  const tipImage = document.getElementById('tip-image');
  const tipDescription = document.getElementById('tip-description');
  
  const tips = {
    1: {
      title: "WHAT ARE THE MOST IMPORTANT THINGS TO BRING?",
      image: "../img/section-contents/travel1.jpg",
      description: "When traveling, it's important to prioritize packing essential items for a smooth and comfortable journey. First, ensure you have all necessary travel documents, including your passport or ID, visa (if applicable), flight or train tickets, hotel booking confirmations, travel insurance details, and a list of emergency contacts. Next, bring along money and payment methods, such as local currency, credit or debit cards, and a secure wallet or money belt to keep your funds safe. For clothing, pack comfortable shoes for walking, weather-appropriate attire, extra layers for varying temperatures, and swimwear if applicable. Don't forget personal care items like toiletries (toothbrush, soap, etc.), essential medications (with prescriptions), hand sanitizer, and sunscreen. For electronics, make sure to bring your phone with a charger and power bank, a laptop or tablet (if necessary), a camera, and headphones for entertainment or comfort. In terms of health and safety, pack a first aid kit with basic supplies, face masks (if needed), bug repellent, a water bottle to stay hydrated, and a travel pillow or blanket for long journeys. When it comes to your luggage essentials, be sure to have a suitcase or backpack, locks for security, packing cubes or organizers for efficient packing, and Ziploc bags for liquids or wet items. Travel accessories like a guidebook or maps, a language translation app (if necessary), and a travel journal can enhance your experience, while non-perishable snacks and a refillable water bottle will help keep you energized and hydrated. Finally, it’s wise to bring backup essentials, such as a backup credit or debit card, photocopies of important documents, and a list of emergency contacts in case of unforeseen circumstances. By packing in this order, you’ll be well-prepared for any situation during your trip."
    },
    2: {
      title: "HOW TO PACK LIGHT",
      image: "../img/section-contents/travel2.jpg",
      description: "Packing light can make travel much more convenient and stress-free. Start by choosing a versatile bag, like a carry-on suitcase or small backpack, which forces you to limit what you bring. Select clothes that can be easily mixed and matched, focusing on neutral colors and lightweight, wrinkle-resistant fabrics. Roll your clothes instead of folding them to save space, and use packing cubes to stay organized. Limit toiletries by packing only the essentials in travel-sized containers, and consider solid versions like shampoo bars. Wear your heaviest items, such as bulky shoes and jackets, during travel to save space in your bag. Plan to do laundry during your trip to reduce the number of clothes you need. Avoid packing unnecessary “just in case” items, and only bring the essentials. Minimize electronics by sticking to devices you’ll actually use, such as a phone and tablet, and consider an e-reader instead of multiple books. By following these tips, you can pack efficiently and enjoy a lighter, more manageable travel experience."
    },
    3: {
      title: "HOW TO NAVIGATE AIRPORTS EASILY",
      image: "../img/section-contents/travel3.jpg",
      description: "Navigating airports smoothly starts with preparation. Check in online ahead of time, know your terminal and gate, and use the airport’s app for real-time updates. Arrive early—2-3 hours for domestic and 3 hours for international flights—to allow ample time for check-in and security. Consider TSA PreCheck or Global Entry for expedited screening. Once at the airport, follow clear signage, and ask staff for help if needed. Be ready for security with liquids in a resealable bag and electronics easily accessible. Keep your passport, ID, and boarding pass within easy reach, and familiarize yourself with the airport layout. Stay alert for boarding announcements and check display boards for updates. Finally, stay hydrated and bring snacks to avoid overpriced airport options. With these tips, you’ll navigate airports more easily and reduce travel stress."
    },
    4: {
      title: "BEST APPS FOR TRAVELERS",
      image: "../img/section-contents/travel4.jpg",
      description: "There are several apps that can make traveling easier and more efficient. Google Maps offers reliable navigation and local recommendations, while TripIt organizes your travel itinerary in one place. Skyscanner helps you compare flight prices and track deals, and Airbnb provides unique accommodation options. For currency conversion, XE Currency offers live exchange rates, and PackPoint helps you create customized packing lists. Google Translate breaks down language barriers, while Hopper predicts the best times to book flights. Citymapper and Waze are great for navigating public transport and driving with real-time updates. These apps help streamline your travel experience, save money, and ensure you stay informed."
    },
    5: {
      title: "STAY HYDRATED DURING TRAVEL",
      image: "../img/section-contents/travel5.jpg",
      description: "Staying hydrated during travel is essential to maintaining your energy and health, especially when you're on long flights, train journeys, or exploring a new city. Air travel, in particular, can be dehydrating due to the dry cabin air, while walking around unfamiliar places in hot weather can quickly lead to fatigue. Carrying a reusable water bottle is a simple yet effective way to ensure you're drinking enough throughout the day. Many airports and transportation hubs have water refill stations, so you can easily top up your bottle after security checks. Staying hydrated will help combat jet lag, improve your focus, and keep you feeling energized as you enjoy your trip."
    }
  };

  
  if (tips[cardNumber]) {
    tipTitle.textContent = tips[cardNumber].title;
    tipImage.src = tips[cardNumber].image;
    tipDescription.textContent = tips[cardNumber].description;
  }
};