/*
  # Sample Admin User Setup
  
  Bu migration sadece admin_users tablosuna örnek bir kayıt ekler.
  Gerçek kullanıcı hesabını Supabase Auth'da manuel oluşturmanız gerekir.
  
  1. Supabase Dashboard > Authentication > Users
  2. "Add User" ile hesap oluşturun
  3. Bu migration çalıştırılarak admin yetkisi verilir
*/

-- Örnek admin kullanıcısı ekle (sadece yetki için, gerçek hesap Auth'da oluşturulmalı)
INSERT INTO admin_users (email, role) 
VALUES ('admin@dalzemin.com', 'admin')
ON CONFLICT (email) DO NOTHING;

-- Test kullanıcısı da eklenebilir
INSERT INTO admin_users (email, role) 
VALUES ('test@dalzemin.com', 'admin')
ON CONFLICT (email) DO NOTHING;