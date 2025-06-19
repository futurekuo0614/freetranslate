import { addSubtitleLine, resetSubtitles } from './subtitle_ui.js';

let subtitleIndex = 1;
let subtitleLog = [];

export async function translateTextToChinese(text, timestamp) {
  const OPENAI_API_KEY = window.OPENAI_API_KEY;

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + OPENAI_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "你是一個專業的日文翻譯員，請將輸入的日文翻譯成中文。" },
        { role: "user", content: text }
      ]
    })
  });

  const data = await res.json();
  const translated = data.choices?.[0]?.message?.content || "[翻譯失敗]";
  addSubtitleLine(timestamp, translated);
  subtitleLog.push({ index: subtitleIndex++, time: timestamp, text: translated });
}

export function getSubtitleLog() {
  return subtitleLog;
}

export function clearSubtitleLog() {
  subtitleLog = [];
  subtitleIndex = 1;
  resetSubtitles();
}
