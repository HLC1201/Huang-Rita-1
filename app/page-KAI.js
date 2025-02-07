export default function Home() {
    return (
        <>
            <header className="bg-gradient-to-br from-blue-200 to-purple-200 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-green-800">
                            歡迎來到我的個人網站
                        </h1>
                        <p className="text-xl md:text-2xl text-green-700">
                            我是一名熱愛創造與分享的開發者
                        </p>
                    </div>
                </div>
            </header>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-green-800 text-center mb-12">各國影集</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="/images/korea-drama.jpg" alt="韓劇" className="w-full h-48 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-green-700 mb-2">韓國影集</h3>
                                <p className="text-gray-600">精選韓劇推薦與心得分享，包含浪漫愛情、懸疑推理等多元題材。</p>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="/images/japan-drama.jpg" alt="日劇" className="w-full h-48 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-green-700 mb-2">日本影集</h3>
                                <p className="text-gray-600">深度解析日劇特色，從職場人生到青春校園，展現日本社會縮影。</p>
                            </div>
                        </div>
                        
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="/images/us-drama.jpg" alt="美劇" className="w-full h-48 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-green-700 mb-2">歐美影集</h3>
                                <p className="text-gray-600">精選歐美經典影集，涵蓋科幻、犯罪、劇情等多種類型作品。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
