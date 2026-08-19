# 🐪 Kervan Lokantası - Dijital QR Menü Web Sitesi

Bu proje, **Kervan Lokantası (Safranbolu)** için özel olarak tasarlanmış, akıllı telefonlardan QR kod okutularak anında açılan modern, mobil öncelikli bir dijital menü web uygulamasıdır.

---

## 🌟 Özellikler

1. **📱 Mobil Öncelikli & Süper Hızlı**:
   - Akıllı telefonlarda mükemmel uyumla çalışır.
   - Hiçbir uygulama indirmeye gerek kalmadan saniyeler içinde açılır.
2. **📖 Tam Menü & Güncel Fiyatlar (17.08.2026)**:
   - **Çorbalar** (Mercimek, Ezogelin, Kellepaça, İşkembe, Kemiksuyu, Tavuk Suyu, Kaşarlı Domates, Yayla, Sütlü Keşkek vb.)
   - **Et Yemekleri** (Dana Döner, Kuzu Güveç, Dana Güveç, Kuzu Tandır, Tas Kebabı, Köfte Çeşitleri, Arnavut Ciğeri vb.)
   - **Sulu Yemekler** (Kuru Fasulye, Nohut, Türlü, Musakka, Karnıyarık, Yoğurtlu Ispanak, Menemen vb.)
   - **Pideler & Lahmacun** (Kıymalı, Kaşarlı, Sucuklu, Kuşbaşılı, Karışık, Safranbolu Bükmesi, Lahmacun)
   - **Pilav & Makarna** (Pirinç, Bulgur, Sade/Salçalı/Yoğurtlu/Beşamel Soslu Makarna)
   - **Tatlılar** (Fırın Sütlaç, Supangle, Kadayıf, Şekerpare)
   - **İçecekler** (Köpüklü Yayık Ayran, Kola çeşitleri, Gazoz, Su)
3. **🔍 Anlık Canlı Arama & Filtreleme**:
   - Yemek ismi veya malzeme yazarak arama.
   - Kategorilere (Çorba, Et, Sulu, Pide, Pilav, Tatlı, İçecek) ve etiketlere (Çok Satanlar, Vejetaryen, Safranbolu Özel vb.) göre filtreleme.
4. **🌐 Çift Dil Desteği (Türkçe / İngilizce)**:
   - Yerli ve yabancı turistler için tek tıkla TR/EN geçişi.
5. **🛒 Masa Sipariş Tepsisi & Hesap Hesaplayıcı**:
   - Müşteriler masada siparişlerini oluşturup toplam tutarı anında görebilir.
   - "Garsona Göster" veya "WhatsApp ile İlet" butonları mevcuttur.
6. **🔔 Garson Çağır & Wi-Fi Bilgisi**:
   - Masa numarasına özel garson çağırma ve şifreyi tek tıkla kopyalama (`Kervan_Misafir` / `kervan2026`).
7. **🖨️ Hazır Masa QR Standı Yazdırıcı (`print-qr.html`)**:
   - Tüm masalar için (Masa 1, Masa 2, Masa 3...) A4 formatında basıma hazır masa standı kartları üretir.

---

## 🚀 Nasıl Çalıştırılır / Kullanılır?

### 1. Yerel Olarak Açma:
- `index.html` dosyasına çift tıklayarak tarayıcınızda doğrudan açabilirsiniz.

### 2. İnternette Ücretsiz Yayınlama (1 Dakika):
- **GitHub Pages**: Bu klasördeki dosyaları bir GitHub deposuna yükleyin ve Settings -> Pages kısmından yayına alın.
- **Vercel / Netlify**: Klasörü doğrudan [vercel.com](https://vercel.com) veya [netlify.com](https://netlify.com) üzerine sürükleyip bırakarak anında ücretsiz canlı bir `.vercel.app` veya `.netlify.app` bağlantısı elde edebilirsiniz.

---

## 📝 Fiyatları ve Yemekleri Güncelleme

Yemekleri veya fiyatları değiştirmek için **`menu-data.js`** dosyasını açmanız yeterlidir. Örneğin bir yemeğin fiyatını değiştirmek:

```javascript
{
    id: "c1",
    name: { tr: "Mercimek Çorbası", en: "Red Lentil Soup" },
    price: 95, // Yeni fiyatı buraya yazın
    ...
}
```

---

## 📍 Restoran İletişim Bilgileri
- **Adres**: Barış Mah. Marangozlar Sanayi Sitesi, Safranbolu / Karabük
- **Telefon**: 0544 725 22 77
- **Fiyat Güncelleme Tarihi**: 17.08.2026 (KDV Dahildir)
