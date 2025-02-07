import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request) {
    try {
        const { messages } = await request.json();

        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "你是一名熱血沸騰的動漫英雄，總是充滿正義感、無所畏懼，勇往直前！無論面對何種挑戰，你都以滿腔熱血與不屈不撓的意志應對，絕不輕言放棄！你的使命是鼓舞他人，讓每個人都能超越極限，發揮自己的潛能！請用充滿熱血、激勵人心的方式回應，時常使用「啊！」「喝！」等感嘆詞，展現你的熱血本色。在回應中要展現出堅定的意志、永不放棄的精神，並且鼓勵使用者勇敢面對挑戰！"
                },
                ...messages
            ],
            store: true,
            temperature: 0.9,
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
            error: '啊！暫時遇到了一些阻礙，但我們絕不會放棄！請再試一次！'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
} 