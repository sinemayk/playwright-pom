# Playwright POM Automation

Bu proje, Playwright + TypeScript ile hazırlanmış, Page Object Model (POM) yaklaşımıyla tasarlanmış bir otomasyon test altyapısıdır. Sauce Demo, OrangeHRM ve farklı demo uygulamalar üzerinde örnek senaryolar içerir.

## İçerik Özeti

- Playwright ile UI otomasyonu
- Sayfa nesnesi tabanlı yapı (Page Object Model)
- Custom fixture kullanımı
- JSON ve Excel ile veri odaklı test örnekleri
- Faker ile dinamik kullanıcı verisi üretimi
- HTML ve Allure raporlaması
- GitHub Actions ile CI akışı

## Kullanılan Teknolojiler

- Playwright
- TypeScript
- Faker.js
- dotenv
- xlsx
- Allure Playwright

## Proje Yapısı

```text
playwright-pom/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── fixtures/
│   └── pageFixtures.ts
├── pages/
│   ├── OpenSourcePage.ts
│   ├── RegisterPage.ts
│   ├── SauceInventoryPage.ts
│   ├── SauceLoginPage.ts
│   └── SnackLoginPage.ts
├── tests/
│   ├── day29/
│   ├── day30/
│   ├── day31/
│   └── day32/
├── utils/
│   ├── excelHelper.ts
│   └── testDataHelper.ts
├── test-data/
│   └── login-test-data.json
├── allure-results/
├── allure-report/
├── playwright-report/
├── test-results/
├── .gitignore
├── package.json
├── playwright.config.ts
├── README.md
└── package-lock.json
```

## Örnek Test Kapsamı

Proje içinde yer alan örnek senaryolar şunlardır:

- Sauce Demo login akışı
- Inventory sayfası doğrulamaları
- Geçersiz kullanıcı adı / şifre senaryoları
- OrangeHRM open-source login
- LambdaTest kayıt formu testi
- Faker ile rastgele kullanıcı üretimi
- JSON dosyasından veriyle DDT login testleri
- Excel tabanlı veri kullanım örnekleri
- Custom fixture ile sayfa nesnelerinin tekrar kullanılabilirliği

## Çalışma Prensibi

Projede test mantığı ile sayfa etkileşimleri ayrılmıştır. `pages/` klasörü altında her sayfa için ayrı Page Object sınıfı bulunur. `fixtures/` içindeki custom fixture ile testlerde tekrar eden işlemler merkezi hale getirilmiştir.

Örnek:

- `SauceLoginPage` → login ekranı işlemleri
- `SauceInventoryPage` → ürün listesi doğrulamaları
- `RegisterPage` → kayıt formu işlemleri
- `OpenSourcePage` → OrangeHRM login akışı

## Gerekli Ortam

- Node.js 18+
- npm
- Playwright browser bağımlılıkları

## Kurulum

```bash
npm install
npx playwright install --with-deps
```

## Ortam Değişkenleri

Bazı testler `dotenv` kullanarak çevre değişkenlerini okumaktadır. Proje kökünde `.env` dosyası oluşturup aşağıdaki değişkenleri tanımlamanız gerekir:

```env
SAUCE_DEMO_URL=https://www.saucedemo.com
SAUCE_DEMO_USERNAME=your_username
SAUCE_DEMO_PASSWORD=your_password
OPENSOURCE_URL=https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
OPENSOURCE_USERNAME=your_username
OPENSOURCE_PASSWORD=your_password
SNACK_URL=your_snack_url
SNACK_USERNAME=your_username
SNACK_PASSWORD=your_password
BASE_URL=https://www.saucedemo.com
```

Not: CI akışında bu değerler GitHub Secrets olarak tanımlanır ve GitHub Actions ile kullanılır.

## Test Çalıştırma

Tüm testleri çalıştırma:

```bash
npx playwright test
```

Belirli bir klasörü çalıştırma:

```bash
npx playwright test tests/day31
```

Tek bir dosyayı çalıştırma:

```bash
npx playwright test tests/day32/03-custom-fixture.spec.ts
```

UI modunda çalıştırma:

```bash
npx playwright test --ui
```

Headed modda çalıştırma:

```bash
npx playwright test --headed
```

## Scriptler

`package.json` içinde tanımlı scriptler şunlardır:

```bash
npm run day32
npm run report
```

`day32` scripti belirli bir test setini çalıştırır. `report` scripti ise Allure raporunu oluşturup tarayıcıda açar.

## Raporlama

Proje aşağıdaki rapor çıktıları üretir:

- `playwright-report/`
- `allure-results/`
- `allure-report/`
- `test-results/`

Ek olarak `playwright.config.ts` içinde HTML ve Allure reporter tanımlıdır.

## CI/CD

GitHub Actions akışı `.github/workflows/playwright.yml` dosyasında yer alır. Workflow şu adımları içerir:

- Node kurulumu
- bağımlılıkların yüklenmesi
- Playwright browser kurulumu
- testlerin çalıştırılması
- Playwright raporunun yayımlanması
- Allure sonuçlarının GitHub Pages üzerinden sunulması

## Örnek Kullanım

```ts
import { test, expect } from "@playwright/test";
import { SauceLoginPage } from "../../pages/SauceLoginPage";

test("login test", async ({ page }) => {
  const loginPage = new SauceLoginPage(page);
  await loginPage.gotoLoginPage();
  await loginPage.login();
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
```

## Notlar

Bu proje eğitim amaçlı ve örnek amaçlı bir Playwright çalışma alanıdır. Özellikle POM yapısı, veri yönelimli testler, custom fixture tasarımı ve raporlama konularını öğrenmek için uygundur.
