# 安全版：免費日文→中文即時翻譯字幕（Vercel 環境變數注入）

## 📌 說明

- 使用瀏覽器語音辨識（Web Speech API）
- 翻譯由 GPT-3.5 完成
- 不含任何硬編碼金鑰，透過 Vercel `Environment Variables` 注入

## ✅ 使用方式

1. 將本專案上傳至 GitHub
2. 到 Vercel 建立新專案並連結 GitHub
3. 在 Vercel 設定專案環境變數：
   ```
   Name: OPENAI_API_KEY
   Value: sk-xxxxxxxxxxxxxxxxxxxxxx
   ```
4. 自動部署即可開始使用
