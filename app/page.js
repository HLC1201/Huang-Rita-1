export default function Home() {
    return (
        <>
            <header className="bg-gradient-to-br from-blue-200 to-purple-200 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-green-800">
                            歡迎來到我的個人網站
                        </h1>
                        <p className="text-xl md:text-2xl text-green-700 mb-8">
                            我是一名熱愛戲劇與分享的Home Ma
                        </p>
                        <div className="flex justify-center gap-4">
                            <a 
                                href="/love" 
                                className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-red-600 hover:shadow-[0_10px_15px_-3px_rgba(76,29,149,0.25)] transition-all duration-500"
                            >
                                收藏最愛
                            </a>
                            <a 
                                href="/bad" 
                                className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-red-600 hover:shadow-[0_10px_15px_-3px_rgba(76,29,149,0.25)] transition-all duration-500"
                            >
                                採雷集
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">各國影集</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-blue-800 rounded-lg shadow-lg overflow-hidden text-white">
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-6">韓國影集</h3>
                                <div className="space-y-8">
                                    <div className="space-y-3">
                                        <div className="aspect-[4/3] relative">
                                            <img 
                                                src="/images/fish.jpg" 
                                                alt="魷魚遊戲" 
                                                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <h4 className="text-xl font-medium">魷魚遊戲 (2021)</h4>
                                        <p className="text-blue-100 text-sm">一群陷入絕境的人參加神祕的生存遊戲，爭取高額獎金，卻發現必須以性命為賭注。充滿社會寓意的驚悚作品。</p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="aspect-[4/3] relative">
                                            <img 
                                                src="/images/go.jpg" 
                                                alt="我的解放日誌" 
                                                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <h4 className="text-xl font-medium">我的解放日誌 (2022)</h4>
                                        <p className="text-blue-100 text-sm">描述住在首爾郊區的三兄妹，以及一個神祕男子的生活故事。探討現代人的孤獨與救贖主題。</p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="aspect-[4/3] relative">
                                            <img 
                                                src="/images/love.jpg" 
                                                alt="社內相親" 
                                                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <h4 className="text-xl font-medium">社內相親 (2022)</h4>
                                        <p className="text-blue-100 text-sm">一場替閨蜜代打的相親，意外與公司社長相遇，展開一段充滿歡樂的辦公室戀愛故事。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-blue-800 rounded-lg shadow-lg overflow-hidden text-white">
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-6">日本影集</h3>
                                <div className="space-y-8">
                                    <div className="space-y-3">
                                        <div className="aspect-[4/3] relative">
                                            <img 
                                                src="/images/photo4.png" 
                                                alt="月薪嬌妻" 
                                                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <h4 className="text-xl font-medium">月薪嬌妻 (2016)</h4>
                                        <p className="text-blue-100 text-sm">講述一位數學天才女主角與上司簽訂契約結婚，漸漸發展出真實感情的溫馨愛情故事。</p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="aspect-[4/3] relative">
                                            <img 
                                                src="/images/photo5.png" 
                                                alt="非自然死亡" 
                                                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <h4 className="text-xl font-medium">非自然死亡 (2018)</h4>
                                        <p className="text-blue-100 text-sm">法醫解剖室裡的推理故事，揭露看似自然死亡背後的真相，探討生命價值。</p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="aspect-[4/3] relative">
                                            <img 
                                                src="/images/photo6.png" 
                                                alt="我的事說來話長" 
                                                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <h4 className="text-xl font-medium">我的事說來話長 (2019)</h4>
                                        <p className="text-blue-100 text-sm">描述一位單親媽媽在職場與育兒中奮鬥的故事，展現現代日本女性的生活樣貌。</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-blue-800 rounded-lg shadow-lg overflow-hidden text-white">
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-6">歐美影集</h3>
                                <div className="space-y-8">
                                    <div className="space-y-3">
                                        <div className="aspect-[4/3] relative">
                                            <img 
                                                src="/images/photo7.jpg" 
                                                alt="紙房子" 
                                                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <h4 className="text-xl font-medium">紙房子 (2017-2021)</h4>
                                        <p className="text-blue-100 text-sm">一群劫匪策劃完美的搶劫計畫，入侵西班牙皇家造幣廠，上演驚心動魄的貓鼠遊戲。</p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="aspect-[4/3] relative">
                                            <img 
                                                src="/images/photo8.jpg" 
                                                alt="黑鏡" 
                                                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <h4 className="text-xl font-medium">黑鏡 (2011-)</h4>
                                        <p className="text-blue-100 text-sm">以科技發展為主題的選集影集，每集都是獨立故事，探討科技對人性的影響。</p>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="aspect-[4/3] relative">
                                            <img 
                                                src="/images/photo9.jpg" 
                                                alt="絕命毒師" 
                                                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                                            />
                                        </div>
                                        <h4 className="text-xl font-medium">絕命毒師 (2008-2013)</h4>
                                        <p className="text-blue-100 text-sm">一位高中化學老師被診斷出癌症後，為了家庭開始製造毒品，逐漸墮落的過程。</p>
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
