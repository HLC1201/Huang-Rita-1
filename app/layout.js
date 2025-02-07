import { Geist, Geist_Mono } from "next/font/google";
import Chatbot from "@/components/Chatbot";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "我的網站",
  description: "請在此寫入你的網站敘述",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-TW">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col pt-16`}>
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-[0_2px_15px_-3px_rgba(255,170,0,0.2)] z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <a href="/" className="text-xl font-bold text-blue-800">
                  黃麗娟網站
                </a>
              </div>
              <div className="flex items-center space-x-6">
                <a href="/" className="text-blue-800 hover:text-blue-900 transition-colors">
                  首頁
                </a>
                <a href="/love" className="text-blue-800 hover:text-blue-900 transition-colors">
                  收藏最愛
                </a>
                <a href="/bad" className="text-blue-800 hover:text-blue-900 transition-colors">
                  採雷集
                </a>
                <a href="/contact" className="text-blue-800 hover:text-blue-900 transition-colors">
                  聯絡資訊
                </a>
                <a href="/todo-list" className="text-blue-800 hover:text-blue-900 transition-colors">
                  待辦事項
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">聯絡資訊</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                      <span>Email: contact@example.com</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                      <span>電話: (02) 1234-5678</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">社群媒體</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <a href="#" className="hover:text-gray-300 transition-colors">Facebook</a>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      <a href="#" className="hover:text-gray-300 transition-colors">Twitter</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                <p>© 2024 黃麗娟網站. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>

        <Chatbot />
      </body>
    </html>
  );
}
