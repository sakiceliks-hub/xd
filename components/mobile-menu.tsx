"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, X } from "lucide-react"

interface MobileMenuProps {
  onClose: () => void
}

// Kategori verilerini ayrı bir nesne olarak tanımla
const menuCategories = [
  {
    title: "Zemin Betonları",
    items: [
      "Endüstriyel Beton Uygulama",
      "Baskı Beton Uygulama"
    ]
  },
  {
    title: "Beton Parlatma",
    items: [] // Buraya alt öğeler eklenebilir
  },
  {
    title: "Epoksi Zemin Kaplama",
    items: [] // Buraya alt öğeler eklenebilir
  },
  {
    title: "Zemin Sistemleri",
    items: [
      "Terrazzo",
      "Epoksi Terrazzo Kaplama",
      "Çimento Terrazzo Kaplama",
      "Pebbledeck",
      "Betonage",
      "Sagalassos",
      "Olympos",
      "Çimento Esaslı Kaplamalar",
      "Kuvars Agregalı Zemin Kaplama",
      "Poliüretan Beton Kaplama",
      "Sıvı Yüzey Sertleştirici (Lityum Silikat)",
      "Mastertop 135 PG",
      "Beton Zemin Restorasyonu",
      "Poliüretan Kaplama",
      "Akrilik Kaplama",
      "SBR + EPDM Kaplama"
    ]
  }
]

const mainMenuItems = [
  "Hakkımızda",
  "Neden Biz?",
  "Bizden Haberler",
  "Ürünler",
  "Galeri",
  "Referanslar",
  "İletişim"
]

export function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="flex h-full flex-col bg-gray-900 text-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex flex-col">
          <Image 
            src="/images/logo.png" 
            alt="Dalzemin Logo" 
            width={150} 
            height={40} 
            className="h-10 object-contain" 
          />
          <span className="text-lg font-bold mt-2">Kurumsal</span>
        </div>
        
        {/* Dil seçici ve kapatma butonu */}
        <div className="flex items-center gap-2">
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-transparent border-white text-white hover:bg-white/10"
              >
                <span className="font-medium">TR</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-800 text-white border-gray-700">
              <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer">EN</DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-gray-700 cursor-pointer">DE</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          
          <Button 
            variant="ghost" 
            size="icon"
            style={{display:'none'}} 
            onClick={(e) => {
              e.preventDefault()
              onClose()
            }}
            className="hover:bg-white/10"
          >
            <X className="h-6 w-6 text-orange-500" />
            <span className="sr-only">Menüyü Kapat</span>
          </Button>
        </div>
      </div>

      {/* Ana Menü */}
      <nav className="flex-1 overflow-y-auto pr-4">
        <ul className="space-y-4 text-lg">
          {mainMenuItems.map((item) => (
            <li key={item}>
              <Link 
                href="#" 
                className="hover:text-orange-500 transition-colors" 
                onClick={(e) => {
                  e.preventDefault()
                  onClose()
                }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Kategoriler */}
        {menuCategories.map((category) => (
          <div key={category.title} className="mt-8">
            <h3 className="text-orange-500 text-xl font-bold mb-4">
              {category.title}
            </h3>
            
            {category.items.length > 0 && (
              <ul className="space-y-2 text-base">
                {category.items.map((item) => (
                  <li key={item}>
                    <Link 
                      href="#" 
                      className="hover:text-orange-500 transition-colors"
                      onClick={(e) => {
                        e.preventDefault()
                        onClose()
                      }}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </div>
  )
}