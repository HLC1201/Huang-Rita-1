import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request) {
    try {
        const { text, targetLanguage } = await request.json();

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "你是一個專業的翻譯助手，可以將文字翻譯成指定的語言。請只回傳翻譯後的結果，不需要其他說明。"
                },
                {
                    role: "user",
                    content: `請將以下文字翻譯成${targetLanguage}：\n\n${text}`
                }
            ],
            store: true,
            temperature: 0.3, // 降低創意度，使翻譯更準確
            max_tokens: 500,
        });

        return new Response(JSON.stringify({
            role: completion.choices[0].message.role,
            content: completion.choices[0].message.content
        }), {
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('OpenAI API error:', error);
        return new Response(JSON.stringify({
            error: '翻譯過程發生錯誤，請稍後再試。'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
} 