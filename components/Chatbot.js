'use client';
import { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faXmark, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputMessage.trim() && !isLoading) {
            const userMessage = {
                role: 'user',
                content: inputMessage,
                timestamp: new Date().toISOString()
            };

            setMessages(prev => [...prev, { type: 'user', ...userMessage }]);
            setInputMessage('');
            setIsLoading(true);

            try {
                const response = await fetch('/api/chat-ai', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        messages: messages.map(msg => ({
                            role: msg.type === 'user' ? 'user' : 'assistant',
                            content: msg.content
                        })).concat([{
                            role: 'user',
                            content: userMessage.content
                        }])
                    })
                });

                if (!response.ok) {
                    throw new Error('API 請求失敗');
                }

                const data = await response.json();

                if (data.error) {
                    throw new Error(data.error);
                }

                setMessages(prev => [...prev, {
                    type: 'bot',
                    role: data.role,
                    content: data.content,
                    timestamp: new Date().toISOString()
                }]);

            } catch (error) {
                console.error('Chat error:', error);
                setMessages(prev => [...prev, {
                    type: 'bot',
                    content: '抱歉，我現在無法回應，請稍後再試。',
                    timestamp: new Date().toISOString()
                }]);
            } finally {
                setIsLoading(false);
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50">
            {/* Chatbot 按鈕 */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-purple-600 text-white p-4 rounded-lg shadow-lg hover:bg-purple-700 transition-colors"
            >
                <FontAwesomeIcon icon={faRobot} className="text-xl" />
            </button>

            {/* 聊天視窗 */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-96 bg-white rounded-lg shadow-xl">
                    {/* 聊天視窗標題 */}
                    <div className="flex justify-between items-center p-4 border-b">
                        <h3 className="text-lg font-semibold text-gray-800">熱血英雄</h3>
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    </div>

                    {/* 訊息區域 */}
                    <div className="h-96 overflow-y-auto p-4 space-y-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 ${
                                        message.type === 'user'
                                            ? 'bg-gradient-to-br from-purple-400 to-purple-600 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg'
                                            : 'bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800 rounded-tr-lg rounded-tl-lg rounded-br-lg'
                                    }`}
                                >
                                    {message.content}
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="bg-gradient-to-br from-gray-100 to-gray-300 text-gray-800 rounded-tr-lg rounded-tl-lg rounded-br-lg p-3">
                                    正在思考...
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* 輸入區域 */}
                    <form onSubmit={handleSubmit} className="border-t p-4">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="請輸入您的問題..."
                                disabled={isLoading}
                                ref={inputRef}
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent disabled:bg-gray-100"
                            />
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:bg-purple-400"
                            >
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
} 