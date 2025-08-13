# Admin Hesabı Kurulum Talimatları

## 1. Supabase Dashboard'a Gidin
- Supabase projenizin dashboard'ına gidin
- Authentication > Users sekmesine tıklayın

## 2. Admin Kullanıcısı Oluşturun
- "Add User" butonuna tıklayın
- Email: `admin@dalzemin.com`
- Password: İstediğiniz güçlü bir şifre (örn: `Admin123!`)
- "Create User" butonuna tıklayın

## 3. Admin Yetkisi Verin
Supabase SQL Editor'da şu komutu çalıştırın:

```sql
INSERT INTO admin_users (email, role) 
VALUES ('admin@dalzemin.com', 'admin');
```

## 4. Giriş Yapın
- `/admin/login` sayfasına gidin
- Email: `admin@dalzemin.com`
- Password: Oluşturduğunuz şifre

## Alternatif: Hızlı Test Hesabı
Eğer hızlı test için geçici bir hesap istiyorsanız:

Email: `test@dalzemin.com`
Password: `Test123!`

Bu hesabı da aynı şekilde Supabase'de oluşturup admin_users tablosuna ekleyin.

## Güvenlik Notları
- Üretim ortamında güçlü şifreler kullanın
- Admin email adresini gerçek email adresinizle değiştirin
- İlk girişten sonra şifrenizi değiştirin