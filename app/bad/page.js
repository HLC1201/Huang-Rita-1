export default function WarningPage() {
    return (
        <>
            <header className="bg-gradient-to-br from-yellow-200 to-orange-200 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-orange-800">
                            踩雷預警
                        </h1>
                        <p className="text-xl md:text-2xl text-orange-700 mb-8">
                            以下劇集請謹慎觀看，避免浪費您寶貴的時間
                        </p>
                        <a 
                            href="/" 
                            className="inline-block px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                        >
                            返回首頁
                        </a>
                    </div>
                </div>
            </header>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <div className="bg-orange-700 rounded-lg shadow-lg overflow-hidden text-white">
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-6">劇情失望作品</h3>
                                <div className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <div className="aspect-[4/3] relative">
                                                <img 
                                                    src="/images/warning1.jpg" 
                                                    alt="踩雷劇集1" 
                                                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                                />
                                            </div>
                                            <h4 className="text-xl font-medium">某某戀愛劇</h4>
                                            <p className="text-orange-100">★☆☆☆☆</p>
                                            <p className="text-orange-100">劇情老套，演技浮誇，後半段完全崩壞，建議跳過。</p>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="aspect-[4/3] relative">
                                                <img 
                                                    src="/images/warning2.jpg" 
                                                    alt="踩雷劇集2" 
                                                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                                />
                                            </div>
                                            <h4 className="text-xl font-medium">某某懸疑劇</h4>
                                            <p className="text-orange-100">★★☆☆☆</p>
                                            <p className="text-orange-100">開頭吸引人但結局令人失望，劇情漏洞太多。</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-orange-700 rounded-lg shadow-lg overflow-hidden text-white p-6">
                            <h3 className="text-2xl font-semibold mb-4">觀看建議</h3>
                            <ul className="list-disc list-inside space-y-2 text-orange-100">
                                <li>請先閱讀網路評價再決定是否觀看</li>
                                <li>建議等待全劇播畢後再開始追劇</li>
                                <li>如果前三集就覺得無聊，不要勉強看完</li>
                                <li>過度期待容易失望，保持平常心觀賞</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} 