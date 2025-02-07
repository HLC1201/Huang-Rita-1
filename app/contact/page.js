export default function ContactPage() {
    return (
        <>
            <header className="bg-gradient-to-br from-green-200 to-blue-200 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-green-800">
                            聯絡資訊
                        </h1>
                        <p className="text-xl md:text-2xl text-green-700 mb-8">
                            歡迎與我聯繫，分享您的想法
                        </p>
                    </div>
                </div>
            </header>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    {/* 聯絡方式 */}
                                    <div className="space-y-6">
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">直接聯繫</h2>
                                        <div className="space-y-4">
                                            <div className="flex items-center">
                                                <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                                </svg>
                                                <div>
                                                    <h3 className="text-lg font-medium text-gray-800">電子郵件</h3>
                                                    <p className="text-gray-600">contact@example.com</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center">
                                                <svg className="w-6 h-6 text-green-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                                </svg>
                                                <div>
                                                    <h3 className="text-lg font-medium text-gray-800">電話</h3>
                                                    <p className="text-gray-600">(02) 1234-5678</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 社群媒體 */}
                                    <div className="space-y-6">
                                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">社群媒體</h2>
                                        <div className="space-y-4">
                                            <a href="#" className="flex items-center group">
                                                <svg className="w-6 h-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                                </svg>
                                                <div>
                                                    <h3 className="text-lg font-medium text-gray-800 group-hover:text-blue-600 transition-colors">Facebook</h3>
                                                    <p className="text-gray-600">追蹤最新劇評動態</p>
                                                </div>
                                            </a>
                                            <a href="#" className="flex items-center group">
                                                <svg className="w-6 h-6 text-blue-400 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                                </svg>
                                                <div>
                                                    <h3 className="text-lg font-medium text-gray-800 group-hover:text-blue-400 transition-colors">Twitter</h3>
                                                    <p className="text-gray-600">即時分享觀劇心得</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* 營業時間 */}
                                <div className="mt-12 pt-8 border-t border-gray-200">
                                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">回覆時間</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-800">平日</h3>
                                            <p className="text-gray-600">09:00 - 18:00</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-800">週末</h3>
                                            <p className="text-gray-600">10:00 - 17:00</p>
                                        </div>
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