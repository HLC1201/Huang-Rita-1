export default function FavoritePage() {
    return (
        <>
            <header className="bg-gradient-to-br from-pink-200 to-red-200 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-red-800">
                            我的年度推薦
                        </h1>
                        <p className="text-xl md:text-2xl text-red-700 mb-8">
                            這些是我認為最值得一看的精選劇集
                        </p>
                        <a 
                            href="/" 
                            className="inline-block px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                        >
                            返回首頁
                        </a>
                    </div>
                </div>
            </header>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-red-700 rounded-lg shadow-lg overflow-hidden text-white">
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-6">2023年度必看</h3>
                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <div className="aspect-[4/3] relative">
                                            <img 
                                                src="/images/love.jpg" 
                                                alt="社內相親" 
                                                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <h4 className="text-xl font-medium">社內相親</h4>
                                        <p className="text-red-100">★★★★★</p>
                                        <p className="text-red-100">完美詮釋職場愛情，劇情輕鬆有趣，演員演技自然，是近年最推薦的韓劇之一。</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-red-700 rounded-lg shadow-lg overflow-hidden text-white">
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-6">2022年度必看</h3>
                                <div className="space-y-6">
                                    <div className="space-y-3">
                                        <div className="aspect-[4/3] relative">
                                            <img 
                                                src="/images/go.jpg" 
                                                alt="我的解放日誌" 
                                                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <h4 className="text-xl font-medium">我的解放日誌</h4>
                                        <p className="text-red-100">★★★★★</p>
                                        <p className="text-red-100">溫暖治癒的劇情，細膩描寫都市人的孤獨與成長，每個角色都讓人感同身受。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} 