"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { AppLocale } from "@/types";

interface LanguageContextType {
  locale: AppLocale;
  setLocale: (locale: AppLocale) => void;
  dir: "ltr" | "rtl";
  t: (key: string) => string;
}

const translations: Record<AppLocale, Record<string, string>> = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.planner": "Plan Your Shoot",
    "nav.locations": "Locations",
    "nav.ai_preview": "AI Preview",
    "nav.pose_coach": "Pose Coach",
    "nav.budget": "Budget Calculator",
    "nav.booking": "Book Now",
    "nav.contact": "Contact",
    // Hero
    "hero.title": "Plan Your Cinematic Photoshoot in Istanbul",
    "hero.subtitle": "Choose your location, style, outfit and package — then book a premium photography or film session with Tavakoli Studio.",
    "hero.cta_plan": "Start Planning",
    "hero.cta_wa": "Book on WhatsApp",
    // Common
    "common.back": "Back",
    "common.next": "Next",
    "common.select": "Select",
    "common.selected": "✓ Selected",
    "common.loading": "Loading...",
    "common.submit": "Submit",
    "common.wa_cta": "Book on WhatsApp",
    "common.instagram": "Follow on Instagram",
    // Booking
    "booking.title": "Book Your Session",
    "booking.subtitle": "Fill in your details and we'll get back to you within 24 hours.",
    "booking.success": "Thank you! Your booking request has been received.",
    "booking.wa_followup": "Continue on WhatsApp",
    // Progress bar step labels
    "step.project": "Project",
    "step.location": "Location",
    "step.style": "Style",
    "step.outfit": "Outfit",
    "step.budget": "Budget",
    // Step X of 5
    "step.1of5": "Step 1 of 5",
    "step.2of5": "Step 2 of 5",
    "step.3of5": "Step 3 of 5",
    "step.4of5": "Step 4 of 5",
    "step.5of5": "Step 5 of 5",
    // Planner navigation
    "planner.back": "← Back",
    "planner.next": "Next →",
    "planner.see_plan": "See My Plan →",
    "planner.done.title": "Your plan is ready.",
    "planner.done.book_wa": "Book on WhatsApp",
    "planner.done.book_form": "Fill Booking Form",
    "planner.done.restart": "Start Over",
    // Step 1 – Project
    "p1.title": "What are we creating?",
    "p1.sub": "Choose your project type to begin.",
    // Step 2 – Location
    "p2.title": "Choose your location",
    "p2.sub": "Each location has a different mood, light and character.",
    "crowd.low": "low crowd",
    "crowd.medium": "medium crowd",
    "crowd.high": "high crowd",
    // Step 3 – Style
    "p3.title": "What visual style speaks to you?",
    "p3.sub": "This guides the lighting, editing and direction of your shoot.",
    // Step 4 – Outfit
    "p4.title": "Outfit Advisor",
    "p4.sub": "Personalized recommendations based on your location and style.",
    "outfit.color_rec": "Color Recommendation",
    "outfit.style_dir": "Style Direction",
    "outfit.avoid": "Avoid These",
    "outfit.couple": "Couple Coordination",
    "outfit.accessories": "Accessories",
    "outfit.style.cinematic": "Aim for timeless, structured pieces. Think film noir — dark coats, neutral tones, elegant silhouettes.",
    "outfit.style.luxury": "Full luxury styling. Evening gowns, tailored suits, statement accessories. Every detail counts.",
    "outfit.style.romantic": "Flowy fabrics, soft pastels, lace details. Think dreamlike and ethereal.",
    "outfit.style.editorial": "Bold choices. Strong silhouettes, high-fashion pieces, unexpected combinations.",
    "outfit.style.documentary": "Look like yourself, just polished. Natural, authentic — avoid costume-like outfits.",
    "outfit.style.minimal": "Clean lines, solid colors, premium basics. The less, the better.",
    "outfit.style.social-media": "Bright, eye-catching, Instagram-ready. Think trendy but tasteful.",
    "outfit.style.drone": "Colors that stand out from above — avoid blending into the environment.",
    "outfit.avoid.1": "Matching outfits that make you look like twins",
    "outfit.avoid.2": "Logos or graphic tees",
    "outfit.avoid.3": "Overly bright neon colors",
    "outfit.avoid.4": "Very short skirts in windy outdoor locations",
    "outfit.avoid.5": "All-black couple outfits in dark settings",
    "outfit.couple.1": "Coordinate colors, but don't match exactly",
    "outfit.couple.2": "One person can wear a pattern if the other is solid",
    "outfit.couple.3": "Consider your location's backdrop colors",
    "outfit.couple.4": "Comfort matters — if it's uncomfortable, it shows",
    "outfit.acc.1": "Delicate gold jewelry reflects beautifully on camera",
    "outfit.acc.2": "Scarves / shawls add movement and elegance",
    "outfit.acc.3": "Hats work for casual and editorial styles",
    "outfit.acc.4": "Keep it minimal — less is more on camera",
    // Step 5 – Budget
    "p5.title": "Build your budget",
    "p5.sub": "Select the services you're interested in. We'll show you an estimated range.",
    "budget.range": "Estimated Budget Range",
    "budget.note": "Final price depends on date, location, production needs and availability. This is an estimate to help you plan.",
    "budget.empty": "Select services above to see your estimated budget range.",
  },

  fa: {
    // Nav
    "nav.home": "خانه",
    "nav.planner": "برنامه‌ریزی عکاسی",
    "nav.locations": "لوکیشن‌ها",
    "nav.ai_preview": "پیش‌نمایش هوش مصنوعی",
    "nav.pose_coach": "آموزش پوز",
    "nav.budget": "محاسبه بودجه",
    "nav.booking": "رزرو",
    "nav.contact": "تماس",
    // Hero
    "hero.title": "عکاسی سینماتیک خود را در استانبول برنامه‌ریزی کنید",
    "hero.subtitle": "لوکیشن، سبک، لباس و پکیج خود را انتخاب کنید — سپس یک جلسه عکاسی یا فیلمبرداری با تاواکولی استودیو رزرو کنید.",
    "hero.cta_plan": "شروع برنامه‌ریزی",
    "hero.cta_wa": "رزرو از واتساپ",
    // Common
    "common.back": "بازگشت",
    "common.next": "بعدی",
    "common.select": "انتخاب",
    "common.selected": "✓ انتخاب شد",
    "common.loading": "در حال بارگذاری...",
    "common.submit": "ارسال",
    "common.wa_cta": "رزرو از واتساپ",
    "common.instagram": "دنبال کنید در اینستاگرام",
    // Booking
    "booking.title": "جلسه خود را رزرو کنید",
    "booking.subtitle": "اطلاعات خود را وارد کنید و ما ظرف ۲۴ ساعت با شما تماس خواهیم گرفت.",
    "booking.success": "ممنون! درخواست رزرو شما دریافت شد.",
    "booking.wa_followup": "ادامه در واتساپ",
    // Progress bar
    "step.project": "پروژه",
    "step.location": "لوکیشن",
    "step.style": "سبک",
    "step.outfit": "لباس",
    "step.budget": "بودجه",
    // Step X of 5
    "step.1of5": "مرحله ۱ از ۵",
    "step.2of5": "مرحله ۲ از ۵",
    "step.3of5": "مرحله ۳ از ۵",
    "step.4of5": "مرحله ۴ از ۵",
    "step.5of5": "مرحله ۵ از ۵",
    // Planner navigation
    "planner.back": "→ بازگشت",
    "planner.next": "بعدی ←",
    "planner.see_plan": "مشاهده برنامه‌ام ←",
    "planner.done.title": "برنامه شما آماده است.",
    "planner.done.book_wa": "رزرو از واتساپ",
    "planner.done.book_form": "تکمیل فرم رزرو",
    "planner.done.restart": "شروع مجدد",
    // Step 1
    "p1.title": "چه چیزی می‌سازیم؟",
    "p1.sub": "نوع پروژه خود را انتخاب کنید.",
    // Step 2
    "p2.title": "لوکیشن خود را انتخاب کنید",
    "p2.sub": "هر لوکیشن سبک، نور و ویژگی متفاوتی دارد.",
    "crowd.low": "شلوغی کم",
    "crowd.medium": "شلوغی متوسط",
    "crowd.high": "شلوغی زیاد",
    // Step 3
    "p3.title": "چه سبک بصری‌ای برای شما مناسب است؟",
    "p3.sub": "این سبک نورپردازی، ویرایش و جهت عکاسی را تعیین می‌کند.",
    // Step 4
    "p4.title": "راهنمای لباس",
    "p4.sub": "توصیه‌های شخصی بر اساس لوکیشن و سبک شما.",
    "outfit.color_rec": "توصیه رنگ",
    "outfit.style_dir": "راهنمای سبک",
    "outfit.avoid": "از این‌ها اجتناب کنید",
    "outfit.couple": "هماهنگی زوج",
    "outfit.accessories": "اکسسوری",
    "outfit.style.cinematic": "قطعاتی بی‌زمان و ساختاریافته. به سبک نوار فیلم فکر کنید — کت‌های تیره، رنگ‌های خنثی، سیلوئت‌های زیبا.",
    "outfit.style.luxury": "استایل لوکس کامل. لباس‌های شب، کت‌وشلوار دوخته‌شده، اکسسوری‌های چشم‌گیر. هر جزئیاتی مهم است.",
    "outfit.style.romantic": "پارچه‌های روان، رنگ‌های پاستل ملایم، جزئیات توری. رویایی و اثیری فکر کنید.",
    "outfit.style.editorial": "انتخاب‌های جسورانه. سیلوئت‌های قوی، قطعات مد روز، ترکیب‌های غیرمنتظره.",
    "outfit.style.documentary": "مثل خودتان باشید، فقط مرتب‌تر. طبیعی و اصیل — از لباس‌های تئاتری بپرهیزید.",
    "outfit.style.minimal": "خطوط تمیز، رنگ‌های یکدست، پایه‌های ممتاز. کمتر، بهتر.",
    "outfit.style.social-media": "روشن، چشم‌گیر، آماده برای اینستاگرام. ترندی اما زیبا فکر کنید.",
    "outfit.style.drone": "رنگ‌هایی که از بالا برجسته می‌شوند — از ترکیب با محیط اجتناب کنید.",
    "outfit.avoid.1": "لباس‌های یکسان که شما را مثل دوقلو نشان می‌دهند",
    "outfit.avoid.2": "لوگو یا تی‌شرت گرافیکی",
    "outfit.avoid.3": "رنگ‌های نئون بیش از حد روشن",
    "outfit.avoid.4": "دامن‌های خیلی کوتاه در مکان‌های بادی",
    "outfit.avoid.5": "لباس‌های زوجی تمام مشکی در محیط‌های تاریک",
    "outfit.couple.1": "رنگ‌ها را هماهنگ کنید، اما دقیقاً یکسان نباشند",
    "outfit.couple.2": "یک نفر می‌تواند طرح‌دار بپوشد اگر دیگری ساده باشد",
    "outfit.couple.3": "رنگ‌های پس‌زمینه لوکیشن را در نظر بگیرید",
    "outfit.couple.4": "راحتی اهمیت دارد — اگر ناراحت باشید، توی تصویر مشخص می‌شود",
    "outfit.acc.1": "جواهرات طلای ظریف در دوربین به زیبایی می‌درخشد",
    "outfit.acc.2": "روسری‌ها/شال‌ها حرکت و ظرافت می‌افزایند",
    "outfit.acc.3": "کلاه‌ها برای سبک‌های کژوال و ادیتوریال مناسب هستند",
    "outfit.acc.4": "کمینه نگه دارید — جلوی دوربین کمتر بهتر است",
    // Step 5
    "p5.title": "بودجه خود را بسازید",
    "p5.sub": "خدمات مورد نظر خود را انتخاب کنید. یک محدوده تخمینی نمایش داده می‌شود.",
    "budget.range": "محدوده بودجه تخمینی",
    "budget.note": "قیمت نهایی به تاریخ، لوکیشن، نیازهای تولید و دسترسی بستگی دارد. این یک تخمین برای کمک به برنامه‌ریزی شماست.",
    "budget.empty": "برای مشاهده محدوده بودجه، خدمات بالا را انتخاب کنید.",
  },

  tr: {
    // Nav
    "nav.home": "Ana Sayfa",
    "nav.planner": "Çekim Planla",
    "nav.locations": "Konumlar",
    "nav.ai_preview": "AI Önizleme",
    "nav.pose_coach": "Poz Koçu",
    "nav.budget": "Bütçe Hesaplayıcı",
    "nav.booking": "Rezervasyon",
    "nav.contact": "İletişim",
    // Hero
    "hero.title": "İstanbul'da Sinematik Fotoğraf Çekiminizi Planlayın",
    "hero.subtitle": "Konumunuzu, stilinizi, kıyafetinizi ve paketinizi seçin — ardından Tavakoli Studio ile premium bir fotoğraf veya film çekimi oturumu rezervasyonu yapın.",
    "hero.cta_plan": "Planlamaya Başla",
    "hero.cta_wa": "WhatsApp ile Rezervasyon",
    // Common
    "common.back": "Geri",
    "common.next": "İleri",
    "common.select": "Seç",
    "common.selected": "✓ Seçildi",
    "common.loading": "Yükleniyor...",
    "common.submit": "Gönder",
    "common.wa_cta": "WhatsApp ile Rezervasyon",
    "common.instagram": "Instagram'da Takip Et",
    // Booking
    "booking.title": "Oturumunuzu Rezerve Edin",
    "booking.subtitle": "Bilgilerinizi doldurun, 24 saat içinde size döneceğiz.",
    "booking.success": "Teşekkürler! Rezervasyon talebiniz alındı.",
    "booking.wa_followup": "WhatsApp'ta Devam Et",
    // Progress bar
    "step.project": "Proje",
    "step.location": "Konum",
    "step.style": "Stil",
    "step.outfit": "Kıyafet",
    "step.budget": "Bütçe",
    // Step X of 5
    "step.1of5": "Adım 1 / 5",
    "step.2of5": "Adım 2 / 5",
    "step.3of5": "Adım 3 / 5",
    "step.4of5": "Adım 4 / 5",
    "step.5of5": "Adım 5 / 5",
    // Planner navigation
    "planner.back": "← Geri",
    "planner.next": "İleri →",
    "planner.see_plan": "Planımı Gör →",
    "planner.done.title": "Planınız hazır.",
    "planner.done.book_wa": "WhatsApp ile Rezervasyon",
    "planner.done.book_form": "Rezervasyon Formunu Doldur",
    "planner.done.restart": "Yeniden Başla",
    // Step 1
    "p1.title": "Ne yaratıyoruz?",
    "p1.sub": "Proje türünüzü seçerek başlayın.",
    // Step 2
    "p2.title": "Konumunuzu seçin",
    "p2.sub": "Her konumun farklı bir atmosferi, ışığı ve karakteri var.",
    "crowd.low": "az kalabalık",
    "crowd.medium": "orta kalabalık",
    "crowd.high": "çok kalabalık",
    // Step 3
    "p3.title": "Hangi görsel stil size uygun?",
    "p3.sub": "Bu, çekimin aydınlatmasına, düzenlemesine ve yönüne rehberlik eder.",
    // Step 4
    "p4.title": "Kıyafet Danışmanı",
    "p4.sub": "Konumunuza ve stilinize göre kişiselleştirilmiş öneriler.",
    "outfit.color_rec": "Renk Önerisi",
    "outfit.style_dir": "Stil Yönü",
    "outfit.avoid": "Bunlardan Kaçının",
    "outfit.couple": "Çift Koordinasyonu",
    "outfit.accessories": "Aksesuar",
    "outfit.style.cinematic": "Zamansız, yapılandırılmış parçalar hedefleyin. Film noir — koyu paltolar, nötr tonlar, zarif silüetler.",
    "outfit.style.luxury": "Tam lüks stil. Gece elbiseleri, dikişli takım elbiseler, dikkat çekici aksesuarlar. Her detay önemli.",
    "outfit.style.romantic": "Akan kumaşlar, yumuşak pasteller, dantel detaylar. Rüya gibi ve eterik düşünün.",
    "outfit.style.editorial": "Cesur seçimler. Güçlü silüetler, yüksek moda parçalar, beklenmedik kombinasyonlar.",
    "outfit.style.documentary": "Kendiniz gibi görünün, sadece daha bakımlı. Doğal, özgün — kostüm gibi kıyafetlerden kaçının.",
    "outfit.style.minimal": "Temiz çizgiler, düz renkler, premium temel parçalar. Ne kadar az, o kadar iyi.",
    "outfit.style.social-media": "Parlak, çekici, Instagram'a hazır. Trend ama zevkli düşünün.",
    "outfit.style.drone": "Yukarıdan öne çıkan renkler — çevreyle karışmaktan kaçının.",
    "outfit.avoid.1": "Sizi ikiz gibi gösteren aynı kıyafetler",
    "outfit.avoid.2": "Logo veya grafik tişörtler",
    "outfit.avoid.3": "Aşırı parlak neon renkler",
    "outfit.avoid.4": "Rüzgarlı açık mekanlarda çok kısa etekler",
    "outfit.avoid.5": "Karanlık ortamlarda tamamen siyah çift kıyafetleri",
    "outfit.couple.1": "Renkleri koordine edin ama tam olarak aynı olmayın",
    "outfit.couple.2": "Biri düz giyiniyorsa diğeri desen giyebilir",
    "outfit.couple.3": "Konumun arka plan renklerini göz önünde bulundurun",
    "outfit.couple.4": "Konfor önemlidir — rahatsızsa, fotoğrafa yansır",
    "outfit.acc.1": "İnce altın takılar kamerada güzel yansır",
    "outfit.acc.2": "Eşarplar/şallar hareket ve zarafet katar",
    "outfit.acc.3": "Şapkalar casual ve editorial stiller için çalışır",
    "outfit.acc.4": "Minimalist tutun — kamerada az daha iyidir",
    // Step 5
    "p5.title": "Bütçenizi oluşturun",
    "p5.sub": "İlgilendiğiniz hizmetleri seçin. Size tahmini bir aralık göstereceğiz.",
    "budget.range": "Tahmini Bütçe Aralığı",
    "budget.note": "Son fiyat, tarihe, konuma, prodüksiyon ihtiyaçlarına ve uygunluğa bağlıdır. Bu, planlamanıza yardımcı olmak için bir tahmindir.",
    "budget.empty": "Tahmini bütçe aralığınızı görmek için yukarıdaki hizmetleri seçin.",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  dir: "ltr",
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<AppLocale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("app-locale") as AppLocale | null;
    if (saved && ["en", "fa", "tr"].includes(saved)) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (l: AppLocale) => {
    setLocaleState(l);
    localStorage.setItem("app-locale", l);
  };

  const dir = locale === "fa" ? "rtl" : "ltr";

  const t = (key: string): string => {
    return translations[locale][key] ?? translations["en"][key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, dir, t }}>
      <div dir={dir} lang={locale}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
