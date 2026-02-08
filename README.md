# 🤖 Android Mülakat Uzmanı (Android Interview Master)

Android Mülakat Uzmanı, Android geliştiricileri için modern mülakat hazırlık süreçlerini yapay zeka ile birleştiren kapsamlı bir platformdur. 270'den fazla kategoriye ayrılmış soru ve Gemini AI tabanlı kişiselleştirilmiş geri bildirim sistemi ile mülakatlara hazırlanmak hiç bu kadar kolay olmamıştı.

![Android Mülakat Uzmanı](/public/assets/logo.png)

## ✨ Özellikler

- 📱 **270+ Profesyonel Soru:** Core Android, Lifecycle, UI/Compose, Networking ve daha birçok kategoride güncel mülakat soruları.
- 🤖 **Yapay Zeka (Gemini 3.0 Flash Preview) Entegrasyonu:** Cevaplarınızı gerçek zamanlı olarak değerlendiren ve size "Expert" seviyesinde geri bildirim veren AI asistanı.
- 🌍 **Çift Dilli Hazırlık:** Soruları hem Türkçe hem de İngilizce cevaplayabilme ve mülakat diline uygun analiz alma imkanı.
- 🎓 **Seviyeye Göre Geri Bildirim:** Junior, Mid-level veya Senior seviyelerinden kendinize uygun olanı seçin, AI size o seviyenin beklentilerine göre yanıt versin.
- 🕒 **Analiz Geçmişi:** Geçmişte yaptığınız analizleri kaydedin ve dropdown menü üzerinden dilediğiniz zaman tekrar inceleyin.
- 🌙 **Karanlık Mod (Dark Mode):** Göz yorgunluğunu azaltan modern ve şık karanlık tema desteği.
- 📊 **İlerleme Takibi:** Hangi bölümde kaç soru cevapladığınızı gösteren gerçek zamanlı ilerleme çubukları.

## 🚀 Teknolojiler

- **Frontend:** React, Vite
- **Animasyonlar:** Framer Motion
- **İkonlar:** Lucide React
- **Yapay Zeka:** Google Gemini AI API (`gemini-3-flash-preview`)
- **Stil:** Modern CSS Custom Properties & Glassmorphism

## 🛠️ Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için şu adımları izleyin:

1.  **Repoyu klonlayın:**
    ```bash
    git clone https://github.com/Bekir-Caglar/AndroidInterview.git
    cd AndroidInterview
    ```

2.  **Bağımlılıkları yükleyin:**
    ```bash
    npm install
    ```

3.  **Uygulamayı başlatın:**
    ```bash
    npm run dev
    ```

4.  **Gemini API Key:** Uygulama içindeki "AI Konfigürasyonu" panelinden [Google AI Studio](https://aistudio.google.com/app/apikey)'dan aldığınız ücretsiz API anahtarını girerek AI özelliklerini aktif edebilirsiniz.

## 📝 Notlar

- Bu uygulama, mülakat hazırlık sürecinizi hızlandırmak için geliştirilmiştir. 
- API anahtarınız yerel tarayıcı hafızasında (`localStorage`) saklanır; sunucuya gönderilmez.
- Analizleriniz de aynı şekilde tarayıcınızda saklanır, sayfayı yenilediğinizde kaybolmaz.

---

**Geliştiren:** [Bekir-Caglar](https://github.com/Bekir-Caglar)
