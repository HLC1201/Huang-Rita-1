import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request) {
    try {
        const { text, voice = 'alloy' } = await request.json();

        // 生成語音
        const mp3 = await openai.audio.speech.create({
            model: "tts-1",
            voice: voice, // alloy, echo, fable, onyx, nova, shimmer
            input: text,
        });

        // 將音訊轉換為 base64
        const buffer = Buffer.from(await mp3.arrayBuffer());
        const base64Audio = buffer.toString('base64');

        return new Response(JSON.stringify({
            audio: base64Audio,
            format: 'audio/mp3'
        }), {
            headers: { 'Content-Type': 'application/json' },
        });

    } catch (error) {
        console.error('OpenAI TTS API error:', error);
        return new Response(JSON.stringify({
            error: '語音生成過程發生錯誤，請稍後再試。'
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
} 