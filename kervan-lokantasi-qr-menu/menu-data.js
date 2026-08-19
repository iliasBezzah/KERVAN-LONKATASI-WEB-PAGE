// Kervan Lokantası - Dijital Menü Veritabanı
// Fiyat Güncelleme Tarihi: 17.08.2026

const RESTAURANT_CONFIG = {
    name: "Kervan Lokantası",
    tagline: {
        tr: "Geleneksel Safranbolu & Türk Mutfağı",
        en: "Traditional Safranbolu & Turkish Cuisine"
    },
    address: "Barış Mah. Marangozlar Sanayi Sitesi, Safranbolu / Karabük",
    phone: "0544 725 22 77",
    phoneClean: "905447252277",
    workingHours: {
        tr: "Hergün: 08:00 - 18:30",
        en: "Every day: 08:00 - 18:30"
    },
    currency: "₺",
    taxIncludedText: {
        tr: "Fiyatlarımıza KDV dahildir • Fiyat Güncelleme Tarihi: 17.08.2026",
        en: "All prices include VAT • Price Update Date: 17.08.2026"
    }
};

const MENU_CATEGORIES = [
    {
        id: "corbalar",
        name: { tr: "Çorbalar", en: "Soups" },
        icon: "🍲",
        description: { tr: "Güne sıcak ve lezzetli bir başlangıç", en: "Warm and delicious starters" }
    },
    {
        id: "et_yemekleri",
        name: { tr: "Et Yemekleri", en: "Meat & Grills" },
        icon: "🥩",
        description: { tr: "Usta ellerden fırın, güveç ve ızgara lezzetleri", en: "Oven, casserole, and grilled specialties" }
    },
    {
        id: "sulu_yemekler",
        name: { tr: "Sulu Yemekler", en: "Home-style Stews" },
        icon: "🥘",
        description: { tr: "Günün taze pişmiş geleneksel tencere yemekleri", en: "Freshly cooked traditional pot dishes" }
    },
    {
        id: "pideler",
        name: { tr: "Pideler & Lahmacun", en: "Pides & Flatbreads" },
        icon: "🥖",
        description: { tr: "Taş fırında çıtır çıtır pişen lezzetler", en: "Stone-oven baked crispy delicacies" }
    },
    {
        id: "pilav_makarna",
        name: { tr: "Pilav & Makarna", en: "Rice & Pastas" },
        icon: "🍚",
        description: { tr: "Yemeklerinizin vazgeçilmez tamamlayıcıları", en: "Perfect complements to your meal" }
    },
    {
        id: "tatlilar",
        name: { tr: "Tatlılar", en: "Desserts" },
        icon: "🍮",
        description: { tr: "Geleneksel lokanta tatlıları", en: "Traditional sweet treats" }
    },
    {
        id: "icecekler",
        name: { tr: "İçecekler", en: "Beverages" },
        icon: "🥤",
        description: { tr: "Soğuk ve ferahlatıcı içecekler", en: "Cold and refreshing drinks" }
    }
];

const MENU_ITEMS = [
    // ================== ÇORBALAR ==================
    {
        id: "c1",
        categoryId: "corbalar",
        name: { tr: "Mercimek Çorbası", en: "Red Lentil Soup" },
        price: 90,
        image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Tereyağlı, geleneksel süzme kırmızı mercimek çorbası.", en: "Traditional strained red lentil soup with melted butter." },
        tags: ["popular", "vegetarian"],
        calories: "180 kcal",
        allergens: { tr: "Gluten, Süt Ürünü", en: "Gluten, Dairy" }
    },
    {
        id: "c2",
        categoryId: "corbalar",
        name: { tr: "Ezogelin Çorbası", en: "Ezogelin Soup" },
        price: 90,
        image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Bulgur, pirinç, nane ve baharatlarla zenginleştirilmiş lezzet.", en: "Rich soup with lentils, bulgur, mint, and special spices." },
        tags: ["popular"],
        calories: "190 kcal",
        allergens: { tr: "Gluten", en: "Gluten" }
    },
    {
        id: "c3",
        categoryId: "corbalar",
        name: { tr: "Kellepaça Çorbası", en: "Traditional Kelle Paça Soup" },
        price: 150,
        image: "https://images.unsplash.com/photo-1594041680534-e8c8cdebd659?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Özel sarımsak ve sirke sosu ile servis edilen şifa kaynağı çorba.", en: "Traditional collagen-rich soup served with garlic & vinegar sauce." },
        tags: ["popular", "meat"],
        calories: "320 kcal",
        allergens: { tr: "Sarımsak", en: "Garlic" }
    },
    {
        id: "c4",
        categoryId: "corbalar",
        name: { tr: "İşkembe Çorbası", en: "Tripe Soup (İşkembe)" },
        price: 150,
        image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Klasik terbiyeli işkembe çorbası, sarımsak ve sirke ile.", en: "Classic seasoned tripe soup with garlic-vinegar dressing." },
        tags: ["meat"],
        calories: "280 kcal",
        allergens: { tr: "Yumurta, Süt Ürünü", en: "Egg, Dairy" }
    },
    {
        id: "c5",
        categoryId: "corbalar",
        name: { tr: "Kemiksuyu Çorbası", en: "Bone Broth Soup" },
        price: 90,
        image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Uzun süre kaynatılmış ilikli dana kemiği suyu ile hazırlanan şifa deposu.", en: "Slow-simmered rich beef marrow bone broth soup." },
        tags: ["meat"],
        calories: "160 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "c6",
        categoryId: "corbalar",
        name: { tr: "Tavuk Suyu Çorbası", en: "Chicken Broth Soup" },
        price: 90,
        image: "https://images.unsplash.com/photo-1588566565463-180a5b2090f2?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Didiklenmiş tavuk eti ve tel şehriye ile.", en: "Hearty chicken soup with shredded chicken meat and vermicelli." },
        tags: ["chicken"],
        calories: "170 kcal",
        allergens: { tr: "Gluten", en: "Gluten" }
    },
    {
        id: "c7",
        categoryId: "corbalar",
        name: { tr: "Kaşarlı Domates Çorbası", en: "Tomato Soup with Melted Cheese" },
        price: 90,
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Taze domateslerden, rendelenmiş kaşar peyniri eşliğinde.", en: "Fresh tomato soup topped with melted aged kashar cheese." },
        tags: ["vegetarian"],
        calories: "210 kcal",
        allergens: { tr: "Süt Ürünü, Gluten", en: "Dairy, Gluten" }
    },
    {
        id: "c8",
        categoryId: "corbalar",
        name: { tr: "Yayla Çorbası", en: "Yayla Yogurt Soup" },
        price: 90,
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Yoğurt, nane ve pirincin enfes uyumu.", en: "Refreshing yogurt, rice, and butter-mint infused soup." },
        tags: ["vegetarian"],
        calories: "160 kcal",
        allergens: { tr: "Süt Ürünü, Yumurta", en: "Dairy, Egg" }
    },
    {
        id: "c9",
        categoryId: "corbalar",
        name: { tr: "Tel Şehriye Çorbası", en: "Vermicelli Soup" },
        price: 90,
        image: "https://images.unsplash.com/photo-1612927601601-6638404737ce?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Domates soslu ve tereyağlı leziz tel şehriye çorbası.", en: "Delicate vermicelli noodle soup in a rich tomato-butter broth." },
        tags: ["vegetarian"],
        calories: "150 kcal",
        allergens: { tr: "Gluten", en: "Gluten" }
    },
    {
        id: "c10",
        categoryId: "corbalar",
        name: { tr: "Tarhana Çorbası", en: "Traditional Tarhana Soup" },
        price: 90,
        image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Ev yapımı organik tarhana ve tereyağı lezzeti.", en: "Authentic homemade fermented grain & yogurt Tarhana soup." },
        tags: ["popular", "vegetarian"],
        calories: "175 kcal",
        allergens: { tr: "Gluten, Süt Ürünü", en: "Gluten, Dairy" }
    },
    {
        id: "c11",
        categoryId: "corbalar",
        name: { tr: "Sütlü Keşkek Çorbası", en: "Milky Keskek Soup" },
        price: 90,
        image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Safranbolu usulü dövme buğday ve süt ile pişirilmiş yöresel lezzet.", en: "Safranbolu regional specialty cooked with pounded wheat and milk." },
        tags: ["special", "vegetarian"],
        calories: "220 kcal",
        allergens: { tr: "Gluten, Süt Ürünü", en: "Gluten, Dairy" }
    },

    // ================== ET YEMEKLERİ ==================
    {
        id: "e1",
        categoryId: "et_yemekleri",
        name: { tr: "Dana Et Döner (130g)", en: "Beef Doner Kebab (130g)" },
        price: 450,
        image: "https://images.unsplash.com/photo-1644365760927-142f3ea9fc69?auto=format&fit=crop&w=600&q=80",
        description: { tr: "130 gram yaprak dana etinden meşe odununda dinlenmiş enfes döner porsiyon.", en: "130g portion of prime marinated beef doner/shawarma slices." },
        tags: ["popular", "meat"],
        calories: "520 kcal",
        allergens: { tr: "Gluten", en: "Gluten" }
    },
    {
        id: "e2",
        categoryId: "et_yemekleri",
        name: { tr: "Kuzu Güveç", en: "Lamb Casserole (Güveç)" },
        price: 450,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Toprak güveçte lokum gibi kuzu eti, domates, biber ve sarımsak.", en: "Tender lamb baked slowly in clay pot with tomatoes and peppers." },
        tags: ["popular", "meat", "special"],
        calories: "580 kcal",
        allergens: { tr: "Sarımsak", en: "Garlic" }
    },
    {
        id: "e3",
        categoryId: "et_yemekleri",
        name: { tr: "Dana Güveç", en: "Beef Casserole" },
        price: 400,
        image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Fırınlanmış dana kuşbaşı et ve sebzelerin güveç uyumu.", en: "Slow cooked tender beef cubes with vegetables in clay pot." },
        tags: ["meat"],
        calories: "510 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "e4",
        categoryId: "et_yemekleri",
        name: { tr: "Kuzu Tandır", en: "Roasted Lamb Tandır" },
        price: 450,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Fırında ağır ateşte pişmiş nar gibi yumuşacık kuzu tandır.", en: "Mouth-melting slow roasted tender lamb." },
        tags: ["popular", "meat", "special"],
        calories: "620 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "e5",
        categoryId: "et_yemekleri",
        name: { tr: "Et Sote", en: "Sautéed Beef" },
        price: 350,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Tavada tereyağında renkli biberler ve domatesle sotelenmiş dana eti.", en: "Sautéed diced beef with bell peppers and tomatoes." },
        tags: ["meat"],
        calories: "440 kcal",
        allergens: { tr: "Tereyağı", en: "Butter" }
    },
    {
        id: "e6",
        categoryId: "et_yemekleri",
        name: { tr: "Tas Kebabı", en: "Tas Kebab (Beef Stew)" },
        price: 350,
        image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Lokanta usulü nefis soslu dana et parçaları ve küp patates.", en: "Traditional braised beef stew with potatoes in rich tomato sauce." },
        tags: ["popular", "meat"],
        calories: "480 kcal",
        allergens: { tr: "Gluten", en: "Gluten" }
    },
    {
        id: "e7",
        categoryId: "et_yemekleri",
        name: { tr: "İzmir Köfte", en: "İzmir Style Meatballs" },
        price: 300,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Fırında patates dilimleri ve domates sosu ile pişmiş sulu köfteler.", en: "Baked oval beef meatballs with sliced potatoes and tomato sauce." },
        tags: ["meat"],
        calories: "460 kcal",
        allergens: { tr: "Gluten, Yumurta", en: "Gluten, Egg" }
    },
    {
        id: "e8",
        categoryId: "et_yemekleri",
        name: { tr: "Terbiyeli Köfte", en: "Meatballs in Lemon-Egg Sauce" },
        price: 300,
        image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Limon ve yumurta terbiyeli, sebzeli yumuşacık sulu köfte.", en: "Tender meatballs with diced carrots and potatoes in lemon sauce." },
        tags: ["meat"],
        calories: "410 kcal",
        allergens: { tr: "Yumurta, Gluten", en: "Egg, Gluten" }
    },
    {
        id: "e9",
        categoryId: "et_yemekleri",
        name: { tr: "Kiremitte Köfte", en: "Clay-Tile Baked Meatballs" },
        price: 350,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Kiremit güveçte kaşar eritmeli, domates soslu sıcak köfte.", en: "Meatballs baked in clay plate with melted kashar cheese." },
        tags: ["popular", "meat"],
        calories: "540 kcal",
        allergens: { tr: "Süt Ürünü, Gluten", en: "Dairy, Gluten" }
    },
    {
        id: "e10",
        categoryId: "et_yemekleri",
        name: { tr: "Izgara Köfte", en: "Grilled Meatballs" },
        price: 350,
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Kömür ızgarasında pişmiş dana köfte, közlenmiş biber ve domatesle.", en: "Charcoal-grilled seasoned meatballs served with roasted peppers." },
        tags: ["popular", "meat"],
        calories: "450 kcal",
        allergens: { tr: "Gluten", en: "Gluten" }
    },
    {
        id: "e11",
        categoryId: "et_yemekleri",
        name: { tr: "Kadınbudu Köfte", en: "Kadınbudu Meatballs" },
        price: 350,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Pirinçli kıymalı köfte harcının yumurtaya bulanıp kızartılmasıyla yapılan nefis lezzet.", en: "Pan-fried rice and minced meat patties coated in egg batter." },
        tags: ["meat"],
        calories: "490 kcal",
        allergens: { tr: "Yumurta, Gluten", en: "Egg, Gluten" }
    },
    {
        id: "e12",
        categoryId: "et_yemekleri",
        name: { tr: "Sebzeli Kebap", en: "Vegetable Meat Kebab" },
        price: 350,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Kuşbaşı et, patlıcan, kabak ve domatesin fırınlanmış lezzeti.", en: "Baked tender beef pieces with eggplant and fresh vegetables." },
        tags: ["meat"],
        calories: "420 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "e13",
        categoryId: "et_yemekleri",
        name: { tr: "Orman Kebabı", en: "Orman Kebab (Forest Stew)" },
        price: 300,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Bezelye, havuç, patates ve kekikli dana eti yemeği.", en: "Beef stew with sweet green peas, carrots, and potatoes." },
        tags: ["meat"],
        calories: "430 kcal",
        allergens: { tr: "Gluten", en: "Gluten" }
    },
    {
        id: "e14",
        categoryId: "et_yemekleri",
        name: { tr: "Arnavut Ciğeri", en: "Albanian Fried Liver" },
        price: 350,
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Küp dana ciğeri, sumaklı soğan ve maydanoz salatası ile.", en: "Crispy fried calf liver cubes served with sumac-onion salad." },
        tags: ["popular", "meat", "special"],
        calories: "460 kcal",
        allergens: { tr: "Gluten", en: "Gluten" }
    },
    {
        id: "e15",
        categoryId: "et_yemekleri",
        name: { tr: "Ciğer Sote", en: "Sautéed Liver" },
        price: 300,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Domates, biber ve baharatlarla tavada sotelenmiş taze ciğer.", en: "Tender liver sautéed with tomatoes and spices." },
        tags: ["meat"],
        calories: "390 kcal",
        allergens: { tr: "Yok", en: "None" }
    },

    // ================== SULU YEMEKLER ==================
    {
        id: "s1",
        categoryId: "sulu_yemekler",
        name: { tr: "Kuru Fasulye", en: "Turkish White Bean Stew" },
        price: 90,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Lokanta klasiği, tereyağlı kıvamında nefis kuru fasulye.", en: "Signature Turkish slow-cooked white beans in tomato-butter sauce." },
        tags: ["popular", "vegetarian"],
        calories: "340 kcal",
        allergens: { tr: "Tereyağı", en: "Butter" }
    },
    {
        id: "s2",
        categoryId: "sulu_yemekler",
        name: { tr: "Nohut", en: "Chickpea Stew" },
        price: 90,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Salçalı ve tereyağlı geleneksel nohut yemeği.", en: "Tender chickpeas simmered with onions and tomato paste." },
        tags: ["vegetarian"],
        calories: "320 kcal",
        allergens: { tr: "Tereyağı", en: "Butter" }
    },
    {
        id: "s3",
        categoryId: "sulu_yemekler",
        name: { tr: "Barbunya", en: "Pinto Beans in Olive Oil" },
        price: 90,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Havuç ve patatesli zeytinyağlı taze barbunya.", en: "Pinto beans simmered in olive oil with carrots and potatoes." },
        tags: ["vegetarian"],
        calories: "290 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "s4",
        categoryId: "sulu_yemekler",
        name: { tr: "Taze Fasulye", en: "Green Beans Stew" },
        price: 100,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Taze yeşil fasulye, domates ve zeytinyağı ile hafif yemek.", en: "Tender flat green beans stewed with fresh tomatoes." },
        tags: ["vegetarian"],
        calories: "180 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "s5",
        categoryId: "sulu_yemekler",
        name: { tr: "Etli Türlü", en: "Meat & Vegetable Stew" },
        price: 130,
        image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Patlıcan, kabak, fasulye, patates ve dana kuşbaşı et.", en: "Hearty mixed vegetable and tender beef stew." },
        tags: ["meat"],
        calories: "360 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "s6",
        categoryId: "sulu_yemekler",
        name: { tr: "Yoğurtlu Ispanak", en: "Spinach with Garlic Yogurt" },
        price: 100,
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Zeytinyağlı taze ıspanak, üzeri sarımsaklı süzme yoğurt ile.", en: "Sautéed spinach served with garlic strained yogurt." },
        tags: ["vegetarian"],
        calories: "210 kcal",
        allergens: { tr: "Süt Ürünü", en: "Dairy" }
    },
    {
        id: "s7",
        categoryId: "sulu_yemekler",
        name: { tr: "Yumurtalı Ispanak", en: "Spinach with Fried Eggs" },
        price: 120,
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Kavrulmuş ıspanak üzerinde taze köy yumurtası.", en: "Sautéed seasoned spinach topped with cracked eggs." },
        tags: ["vegetarian"],
        calories: "260 kcal",
        allergens: { tr: "Yumurta", en: "Egg" }
    },
    {
        id: "s8",
        categoryId: "sulu_yemekler",
        name: { tr: "Tavuk Sote", en: "Chicken Sauté" },
        price: 170,
        image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Biber ve domates eşliğinde pişirilmiş tavuk göğsü.", en: "Tender chicken breast sautéed with bell peppers and tomatoes." },
        tags: ["popular", "chicken"],
        calories: "340 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "s9",
        categoryId: "sulu_yemekler",
        name: { tr: "Tavuk Haşlama", en: "Boiled Chicken Stew" },
        price: 170,
        image: "https://images.unsplash.com/photo-1588566565463-180a5b2090f2?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Havuç ve patatesli leziz tavuk but haşlama.", en: "Healthy boiled chicken served with potatoes and carrots." },
        tags: ["chicken"],
        calories: "310 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "s10",
        categoryId: "sulu_yemekler",
        name: { tr: "Tavuk But Kızartma", en: "Roasted Chicken Leg" },
        price: 170,
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Fırında nar gibi kızarmış sulu tavuk budu.", en: "Crispy golden oven-roasted whole chicken leg." },
        tags: ["chicken"],
        calories: "390 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "s11",
        categoryId: "sulu_yemekler",
        name: { tr: "Fırında Karnabahar", en: "Baked Cauliflower" },
        price: 120,
        image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Fırınlanmış soslu ve baharatlı lezzetli karnabahar.", en: "Golden baked spiced cauliflower florets." },
        tags: ["vegetarian"],
        calories: "170 kcal",
        allergens: { tr: "Gluten, Süt Ürünü", en: "Gluten, Dairy" }
    },
    {
        id: "s12",
        categoryId: "sulu_yemekler",
        name: { tr: "Patlıcan Musakka", en: "Eggplant Moussaka" },
        price: 170,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Kızarmış patlıcan ve kıymalı harcın fırında buluşması.", en: "Layers of tender sautéed eggplant and seasoned minced meat." },
        tags: ["popular", "meat"],
        calories: "410 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "s13",
        categoryId: "sulu_yemekler",
        name: { tr: "Karnıyarık", en: "Karnıyarık (Stuffed Eggplant)" },
        price: 170,
        image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Kıymalı, soğanlı harçla doldurulmuş fırın patlıcan.", en: "Whole roasted eggplant stuffed with minced meat and onions." },
        tags: ["popular", "meat", "special"],
        calories: "380 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "s14",
        categoryId: "sulu_yemekler",
        name: { tr: "Fırın Patates", en: "Oven Baked Potatoes" },
        price: 130,
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Baharatlı, dışı çıtır içi yumuşak fırın patates dilimleri.", en: "Herbed crispy oven baked potato wedges." },
        tags: ["vegetarian"],
        calories: "240 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "s15",
        categoryId: "sulu_yemekler",
        name: { tr: "Etli Patates", en: "Beef & Potato Stew" },
        price: 150,
        image: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Dana kuşbaşı etli ve salçalı klasik patates yemeği.", en: "Classic potato and beef cube stew in tomato sauce." },
        tags: ["meat"],
        calories: "370 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "s16",
        categoryId: "sulu_yemekler",
        name: { tr: "Etli Bamya", en: "Okra Stew with Beef" },
        price: 150,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Limonlu, hafif ekşili dana etli taze bamya yemeği.", en: "Tender baby okra stewed with beef in lemon-tomato sauce." },
        tags: ["meat"],
        calories: "280 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "s17",
        categoryId: "sulu_yemekler",
        name: { tr: "Yoğurtlu Biber Dolma", en: "Stuffed Peppers with Yogurt" },
        price: 100,
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Pirinç harçlı dolmalık biber, yanında süzme yoğurt ile.", en: "Bell peppers stuffed with seasoned rice, served with yogurt." },
        tags: ["vegetarian"],
        calories: "260 kcal",
        allergens: { tr: "Süt Ürünü", en: "Dairy" }
    },
    {
        id: "s18",
        categoryId: "sulu_yemekler",
        name: { tr: "Kabak Dolma", en: "Stuffed Zucchini with Yogurt" },
        price: 100,
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Hafif ve lezzetli pirinç dolgulu kabak dolması.", en: "Tender zucchini stuffed with herbs and rice." },
        tags: ["vegetarian"],
        calories: "230 kcal",
        allergens: { tr: "Süt Ürünü", en: "Dairy" }
    },
    {
        id: "s19",
        categoryId: "sulu_yemekler",
        name: { tr: "Kıymalı Yumurta", en: "Minced Meat with Eggs" },
        price: 200,
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Tereyağında kavrulmuş leziz kıyma üzerine kırılmış yumurta.", en: "Sautéed minced beef scrambled with whole eggs in butter." },
        tags: ["meat"],
        calories: "450 kcal",
        allergens: { tr: "Yumurta, Tereyağı", en: "Egg, Butter" }
    },
    {
        id: "s20",
        categoryId: "sulu_yemekler",
        name: { tr: "Menemen", en: "Turkish Menemen" },
        price: 100,
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Taze domates, yeşil biber, tereyağı ve yumurtanın nefis lezzeti.", en: "Traditional scrambled eggs with green peppers and tomatoes." },
        tags: ["popular", "vegetarian"],
        calories: "290 kcal",
        allergens: { tr: "Yumurta, Tereyağı", en: "Egg, Butter" }
    },

    // ================== PİDELER & LAHMACUN ==================
    {
        id: "p1",
        categoryId: "pideler",
        name: { tr: "Kıymalı Pide", en: "Minced Meat Pide" },
        price: 300,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Taş fırında çıtır çıtır pişen bol baharatlı kıymalı pide.", en: "Crispy flatbread with seasoned minced beef, onion, and parsley." },
        tags: ["popular", "meat"],
        calories: "580 kcal",
        allergens: { tr: "Gluten", en: "Gluten" }
    },
    {
        id: "p2",
        categoryId: "pideler",
        name: { tr: "Kaşarlı Pide", en: "Cheese Pide (Kaşarlı)" },
        price: 350,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Bol uzayan kaşar peyniri ve tereyağı kenarlı çıtır pide.", en: "Crispy stone-baked pide packed with melted kashar cheese." },
        tags: ["vegetarian"],
        calories: "620 kcal",
        allergens: { tr: "Gluten, Süt Ürünü", en: "Gluten, Dairy" }
    },
    {
        id: "p3",
        categoryId: "pideler",
        name: { tr: "Sucuklu Pide", en: "Turkish Sucuk & Cheese Pide" },
        price: 350,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Kayseri sucuğu ve erimiş kaşar peyniri bir arada.", en: "Spiced Turkish beef sausage slices with melted cheese." },
        tags: ["popular", "meat"],
        calories: "690 kcal",
        allergens: { tr: "Gluten, Süt Ürünü", en: "Gluten, Dairy" }
    },
    {
        id: "p4",
        categoryId: "pideler",
        name: { tr: "Kuşbaşılı Pide", en: "Diced Beef (Kuşbaşılı) Pide" },
        price: 350,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Marine edilmiş yumuşacık dana kuşbaşı eti, domates ve biber.", en: "Hand-cut marinated tender beef chunks and ripe tomatoes." },
        tags: ["meat", "popular"],
        calories: "610 kcal",
        allergens: { tr: "Gluten", en: "Gluten" }
    },
    {
        id: "p5",
        categoryId: "pideler",
        name: { tr: "Karışık Pide", en: "Mixed Special Pide" },
        price: 350,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Kuşbaşı et, sucuk, kıyma ve erimiş kaşar peyniri lezzeti.", en: "Loaded combination of diced beef, sucuk, minced meat, and cheese." },
        tags: ["popular", "meat", "special"],
        calories: "740 kcal",
        allergens: { tr: "Gluten, Süt Ürünü", en: "Gluten, Dairy" }
    },
    {
        id: "p6",
        categoryId: "pideler",
        name: { tr: "Safranbolu Bükmesi", en: "Safranbolu Bükmesi (Specialty)" },
        price: 250,
        image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Safranbolu'nun tescilli ıspanaklı veya kıymalı meşhur kapalı bükmesi.", en: "Safranbolu's famous folded flaky pastry with spinach or minced meat." },
        tags: ["popular", "special"],
        calories: "480 kcal",
        allergens: { tr: "Gluten, Tereyağı", en: "Gluten, Butter" }
    },
    {
        id: "p7",
        categoryId: "pideler",
        name: { tr: "Lahmacun", en: "Turkish Crispy Lahmacun" },
        price: 150,
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
        description: { tr: "İncecik çıtır hamur üzerinde özel harmanlanmış kıymalı lahmacun.", en: "Ultra-thin crispy flatbread topped with finely spiced minced beef." },
        tags: ["popular", "meat"],
        calories: "290 kcal",
        allergens: { tr: "Gluten", en: "Gluten" }
    },

    // ================== PİLAVLAR VE MAKARNALAR ==================
    {
        id: "pm1",
        categoryId: "pilav_makarna",
        name: { tr: "Pirinç Pilavı", en: "Butter Rice Pilaf" },
        price: 90,
        image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Tane tane dökülen tereyağlı ve şehriyeli baldo pirinç pilavı.", en: "Fluffy Baldo rice pilaf cooked in rich real butter." },
        tags: ["popular", "vegetarian"],
        calories: "280 kcal",
        allergens: { tr: "Gluten, Tereyağı", en: "Gluten, Butter" }
    },
    {
        id: "pm2",
        categoryId: "pilav_makarna",
        name: { tr: "Bulgur Pilavı", en: "Bulgur Pilaf" },
        price: 90,
        image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Domates ve biber salçasıyla pişmiş nefis köy bulgur pilavı.", en: "Cracked wheat bulgur cooked with roasted peppers and butter." },
        tags: ["vegetarian"],
        calories: "250 kcal",
        allergens: { tr: "Gluten, Tereyağı", en: "Gluten, Butter" }
    },
    {
        id: "pm3",
        categoryId: "pilav_makarna",
        name: { tr: "Sade Makarna", en: "Plain Buttered Pasta" },
        price: 100,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Tereyağında sotelenmiş klasik lokanta makarnası.", en: "Classic comfort pasta tossed in melted pure butter." },
        tags: ["vegetarian"],
        calories: "310 kcal",
        allergens: { tr: "Gluten, Süt Ürünü", en: "Gluten, Dairy" }
    },
    {
        id: "pm4",
        categoryId: "pilav_makarna",
        name: { tr: "Salçalı Makarna", en: "Pasta with Tomato Sauce" },
        price: 100,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Geleneksel ev salçalı ve baharatlı lezzetli makarna.", en: "Pasta coated in savory homemade tomato paste sauce." },
        tags: ["vegetarian"],
        calories: "320 kcal",
        allergens: { tr: "Gluten", en: "Gluten" }
    },
    {
        id: "pm5",
        categoryId: "pilav_makarna",
        name: { tr: "Yoğurtlu Makarna", en: "Pasta with Garlic Yogurt" },
        price: 100,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Üzeri sarımsaklı süzme yoğurt ve kızgın tereyağlı sos ile.", en: "Pasta topped with garlic yogurt and sizzling butter sauce." },
        tags: ["vegetarian"],
        calories: "350 kcal",
        allergens: { tr: "Gluten, Süt Ürünü", en: "Gluten, Dairy" }
    },
    {
        id: "pm6",
        categoryId: "pilav_makarna",
        name: { tr: "Beşamel Soslu Makarna", en: "Baked Béchamel Pasta" },
        price: 100,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Fırında üzeri nar gibi kızarmış kaşarlı ve beşamel soslu fırın makarna.", en: "Oven-baked pasta in rich béchamel sauce with melted cheese." },
        tags: ["popular", "vegetarian"],
        calories: "420 kcal",
        allergens: { tr: "Gluten, Süt Ürünü", en: "Gluten, Dairy" }
    },

    // ================== TATLILAR ==================
    {
        id: "t1",
        categoryId: "tatlilar",
        name: { tr: "Fırın Sütlaç", en: "Baked Rice Pudding (Sütlaç)" },
        price: 100,
        image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Toprak kasede üstü yanık fırınlanmış kıvamında enfes sütlaç.", en: "Slow-baked caramelized vanilla rice pudding in an earthenware bowl." },
        tags: ["popular", "vegetarian", "special"],
        calories: "290 kcal",
        allergens: { tr: "Süt Ürünü", en: "Dairy" }
    },
    {
        id: "t2",
        categoryId: "tatlilar",
        name: { tr: "Supangle", en: "Chocolate Supangle Pudding" },
        price: 100,
        image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Yoğun bitter çikolatalı ve kek tabanlı nefis tatlı.", en: "Silky rich chocolate pudding layered over a soft sponge cake base." },
        tags: ["popular", "vegetarian"],
        calories: "320 kcal",
        allergens: { tr: "Süt Ürünü, Gluten", en: "Dairy, Gluten" }
    },
    {
        id: "t3",
        categoryId: "tatlilar",
        name: { tr: "Kadayıf", en: "Crispy Kadayıf with Walnuts" },
        price: 100,
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Altın sarısı çıtır tel kadayıf, bol ceviz ve tam kıvamında şerbetiyle.", en: "Golden shredded pastry packed with crushed walnuts and syrup." },
        tags: ["popular", "vegetarian"],
        calories: "430 kcal",
        allergens: { tr: "Gluten, Ceviz, Süt Ürünü", en: "Gluten, Walnuts, Dairy" }
    },
    {
        id: "t4",
        categoryId: "tatlilar",
        name: { tr: "Şekerpare", en: "Şekerpare (Syrup Cookies)" },
        price: 100,
        image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Ağızda dağılan fındıklı ve şerbetli geleneksel Türk tatlısı.", en: "Soft semolina almond cookies soaked in fragrant syrup." },
        tags: ["vegetarian"],
        calories: "360 kcal",
        allergens: { tr: "Gluten, Fındık, Yumurta", en: "Gluten, Hazelnuts, Egg" }
    },

    // ================== İÇECEKLER ==================
    {
        id: "i1",
        categoryId: "icecekler",
        name: { tr: "Köpüklü Yayık Ayran", en: "Traditional Foamy Ayran" },
        price: 30,
        image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Doğal yoğurttan taze çırpılmış bol köpüklü soğuk ayran.", en: "Traditional chilled salted yogurt drink, frothy and refreshing." },
        tags: ["popular", "vegetarian"],
        calories: "75 kcal",
        allergens: { tr: "Süt Ürünü", en: "Dairy" }
    },
    {
        id: "i2",
        categoryId: "icecekler",
        name: { tr: "Şişe Kola", en: "Bottle Coca-Cola (Glass)" },
        price: 40,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Cam şişe soğuk kola (200 ml).", en: "Ice cold glass bottle soda." },
        tags: [],
        calories: "105 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "i3",
        categoryId: "icecekler",
        name: { tr: "Kutu Kola", en: "Can Coca-Cola (330ml)" },
        price: 60,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Soğuk kutu kola (330 ml).", en: "Chilled canned soda." },
        tags: [],
        calories: "140 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "i4",
        categoryId: "icecekler",
        name: { tr: "1 Litre Kola", en: "1 Liter Cola" },
        price: 70,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Aile boyu 1 Litre şişe kola.", en: "1 Liter bottle soda." },
        tags: [],
        calories: "420 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "i5",
        categoryId: "icecekler",
        name: { tr: "2.5 Litre Kola", en: "2.5 Liter Cola" },
        price: 90,
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Büyük boy 2.5 Litre şişe kola.", en: "2.5 Liter large bottle soda." },
        tags: [],
        calories: "1050 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "i6",
        categoryId: "icecekler",
        name: { tr: "Sade Gazoz", en: "Classic Sparkling Soda (Gazoz)" },
        price: 40,
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Geleneksel cam şişe ferahlatıcı sade gazoz.", en: "Crisp traditional sparkling soda in glass bottle." },
        tags: [],
        calories: "90 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "i7",
        categoryId: "icecekler",
        name: { tr: "Meyveli Gazoz", en: "Fruit Flavored Soda" },
        price: 40,
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80",
        description: { tr: "Portakallı veya limonlu serinletici gazoz.", en: "Refreshing citrus fruit sparkling beverage." },
        tags: [],
        calories: "95 kcal",
        allergens: { tr: "Yok", en: "None" }
    },
    {
        id: "i8",
        categoryId: "icecekler",
        name: { tr: "Doğal Kaynak Suyu", en: "Natural Spring Water" },
        price: 10,
        image: "https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&w=600&q=80",
        description: { tr: "0.5 Litre soğuk doğal kaynak suyu.", en: "0.5L pure chilled natural spring water." },
        tags: ["popular"],
        calories: "0 kcal",
        allergens: { tr: "Yok", en: "None" }
    }
];
