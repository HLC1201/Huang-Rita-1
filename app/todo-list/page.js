'use client';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookTanakh, faTrashCan, faFolderOpen, faFolderClosed } from '@fortawesome/free-solid-svg-icons';

export default function TodoListPage() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [newDetails, setNewDetails] = useState('');
    const [priority, setPriority] = useState('normal');
    const [expandedTodoId, setExpandedTodoId] = useState(null);

    // 從 localStorage 載入資料
    useEffect(() => {
        const savedTodos = localStorage.getItem('todos');
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    // 儲存到 localStorage
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const priorityStyles = {
        normal: 'bg-green-100 text-green-800',
        important: 'bg-orange-100 text-orange-800',
        urgent: 'bg-red-100 text-red-800'
    };

    const priorityLabels = {
        normal: '普通',
        important: '重要',
        urgent: '緊急'
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            setTodos([...todos, { 
                id: Date.now(), 
                text: newTodo, 
                details: newDetails,
                completed: false,
                priority: priority,
                createdAt: new Date().toISOString()
            }]);
            setNewTodo('');
            setNewDetails('');
            setPriority('normal');
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const handleDelete = (id) => {
        if (window.confirm('確定要刪除這個待辦事項嗎？')) {
            setTodos(todos.filter(todo => todo.id !== id));
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString('zh-TW', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    return (
        <>
            <header className="bg-gradient-to-br from-purple-200 to-indigo-200 py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-purple-800">
                            待辦事項
                        </h1>
                        <p className="text-xl md:text-2xl text-purple-700 mb-8">
                            管理您的追劇計畫
                        </p>
                    </div>
                </div>
            </header>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        {/* 表單區域 */}
                        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="flex gap-4">
                                    <input
                                        type="text"
                                        value={newTodo}
                                        onChange={(e) => setNewTodo(e.target.value)}
                                        placeholder="輸入待辦事項..."
                                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                    <select
                                        value={priority}
                                        onChange={(e) => setPriority(e.target.value)}
                                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    >
                                        <option value="normal">普通</option>
                                        <option value="important">重要</option>
                                        <option value="urgent">緊急</option>
                                    </select>
                                </div>
                                <textarea
                                    value={newDetails}
                                    onChange={(e) => setNewDetails(e.target.value)}
                                    placeholder="輸入詳細資料..."
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent h-32"
                                />
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                                    >
                                        <FontAwesomeIcon icon={faBookTanakh} className="mr-2" />
                                        產生待辦事項
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* 待辦事項列表 */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">待辦事項列表</h2>
                            <div className="space-y-3">
                                {todos.length === 0 ? (
                                    <p className="text-gray-500 text-center py-4">目前沒有待辦事項</p>
                                ) : (
                                    todos.map(todo => (
                                        <div 
                                            key={todo.id} 
                                            className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                                        >
                                            <div className="flex items-center gap-3">
                                                <input
                                                    type="checkbox"
                                                    checked={todo.completed}
                                                    onChange={() => toggleTodo(todo.id)}
                                                    className="w-5 h-5 text-purple-600 rounded border-gray-300 focus:ring-purple-500 cursor-pointer"
                                                />
                                                <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                                                    {todo.text}
                                                </span>
                                                <span className={`px-2 py-1 rounded-full text-sm font-medium ${priorityStyles[todo.priority]}`}>
                                                    {priorityLabels[todo.priority]}
                                                </span>
                                                <button
                                                    onClick={() => setExpandedTodoId(expandedTodoId === todo.id ? null : todo.id)}
                                                    className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800"
                                                >
                                                    <FontAwesomeIcon 
                                                        icon={expandedTodoId === todo.id ? faFolderClosed : faFolderOpen} 
                                                        className="mr-1"
                                                    />
                                                    {expandedTodoId === todo.id ? '收合' : '展開'}
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(todo.id)}
                                                    className="px-3 py-1 text-sm text-red-600 hover:text-red-800"
                                                >
                                                    <FontAwesomeIcon icon={faTrashCan} className="mr-1" />
                                                    刪除
                                                </button>
                                            </div>
                                            {expandedTodoId === todo.id && (
                                                <div className="mt-4 space-y-3">
                                                    <p className="text-gray-600 whitespace-pre-wrap pl-8">
                                                        {todo.details}
                                                    </p>
                                                    <p className="text-right text-sm text-gray-400">
                                                        {formatDate(todo.createdAt)}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} 