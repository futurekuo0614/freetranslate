# Vercel 安全部署版：免費日文→中文即時字幕翻譯

## 🔐 說明

- 僅支援部署（不支援本機測試）
- 使用 Web Speech API 做語音辨識
- 使用 GPT-3.5 翻譯成中文
- 不含任何硬編碼金鑰

## 🚀 Vercel 部署方式

1. 將本專案上傳 GitHub
2. 在 Vercel 建立新專案並綁定 GitHub
3. 設定環境變數：
   - `OPENAI_API_KEY = sk-xxxxxxxxxxxx`
4. 自動部署完成後，即可開啟使用
