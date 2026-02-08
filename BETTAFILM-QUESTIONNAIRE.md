# Betta Film Questionnaire System

This document explains how the Betta Film questionnaire system works and how to access responses.

## 📂 System Overview

The questionnaire system consists of:
- **Admin Panel**: For managing questions and viewing responses
- **Client Form**: For Betta Film to submit their answers
- **API Endpoints**: For saving/retrieving responses as JSON files on the server
- **File Storage**: Responses saved in `data/bettafilm-responses/responses.json`

---

## 🔗 URLs

### Admin Panel (For You)
**URL**: `/projects/bettafilm/questionnaire-admin`

**Features**:
- 📝 **Manage Questions Tab**: Add, edit, delete questions
- 📊 **View Responses Tab**: See all submitted responses
- 📥 Export questions and responses as JSON
- 📤 Import questions from JSON
- 🔗 Copy shareable link for client

### Client Form (Share with Betta Film)
**URL**: `/projects/bettafilm/questionnaire`

**Features**:
- View and answer all questions
- Cannot modify questions (read-only)
- Submit responses directly to server
- Download their own submission

---

## 💾 How Responses Are Stored

### Server-Side Storage
All responses are saved as JSON files on the server:

**Location**: `data/bettafilm-responses/responses.json`

**Format**:
```json
[
  {
    "id": "1707654321000",
    "timestamp": "2026-02-07T18:30:00.000Z",
    "responses": {
      "Question 1": "Answer 1",
      "Question 2": "Answer 2",
      ...
    }
  }
]
```

**Benefits**:
- ✅ Persistent storage (survives browser refresh)
- ✅ Accessible from any device/browser
- ✅ Easy to backup
- ✅ Can be exported anytime
- ✅ Not committed to git (private data)

---

## 🎯 How to Access Responses

### Method 1: Via Admin Panel (Recommended)
1. Go to `/projects/bettafilm/questionnaire-admin`
2. Click the **"📊 View Responses"** tab
3. See all responses with timestamps
4. Click **"View Details"** on any response to expand
5. Download individual or all responses

### Method 2: Direct File Access
1. Navigate to: `data/bettafilm-responses/responses.json`
2. Open the file in any text editor
3. All responses are in JSON format

### Method 3: Export via Admin Panel
1. Go to admin panel → View Responses tab
2. Click **"📥 Export All"** button
3. Downloads all responses as JSON file

---

## 🛠️ API Endpoints

### GET `/api/bettafilm/responses.json`
- Retrieves all responses
- Returns JSON array of responses

### POST `/api/bettafilm/responses.json`
- Saves a new response
- Body: `{ "responses": {...} }`

### DELETE `/api/bettafilm/responses.json`
- Deletes a specific response
- Body: `{ "id": "response_id" }`

### POST `/api/bettafilm/clear-responses.json`
- Clears all responses
- Requires confirmation in UI

---

## 📋 Question Types Supported

1. **Text Input** - Short text answers
2. **Long Text** - Textarea for detailed responses
3. **Number** - Numeric input only
4. **Email** - Email validation
5. **Phone** - Phone number input
6. **Date** - Date picker
7. **Radio Buttons** - Single choice (multiple options)
8. **Checkboxes** - Multiple choice (select many)

---

## 🔒 Security Notes

- The `data/` folder is in `.gitignore` - responses won't be committed
- Responses are stored locally on your server
- No external services or databases required
- Admin panel has no authentication (add if needed)

---

## 🚀 Usage Workflow

1. **You**: Create questions in admin panel
2. **You**: Copy shareable link
3. **You**: Send link to Betta Film
4. **Betta Film**: Opens link, fills form, submits
5. **Server**: Saves responses to JSON file
6. **You**: View responses in admin panel anytime

---

## 📦 Backup & Export

### To Backup Responses:
- Copy the entire `data/bettafilm-responses/` folder
- Or export via admin panel

### To Transfer to Another System:
1. Export all responses from admin panel
2. Copy JSON file to new system
3. Responses will load automatically

---

## 🐛 Troubleshooting

### Responses Not Showing?
- Check `data/bettafilm-responses/responses.json` exists
- Ensure file permissions allow reading/writing
- Check browser console for errors

### API Errors?
- Restart the development server
- Check terminal for error messages
- Ensure `fs` module is available (Node.js environment)

---

## 📁 File Structure

```
main-site/
├── src/
│   ├── pages/
│   │   ├── api/
│   │   │   └── bettafilm/
│   │   │       ├── responses.json.ts (API endpoints)
│   │   │       └── clear-responses.json.ts
│   │   └── projects/
│   │       └── bettafilm/
│   │           ├── questionnaire-admin.astro (Admin panel)
│   │           └── questionnaire.astro (Client form)
├── data/
│   └── bettafilm-responses/
│       └── responses.json (All responses stored here)
├── .gitignore (Excludes data/ folder)
└── BETTAFILM-QUESTIONNAIRE.md (This file)
```

---

## ✅ Done!

Your questionnaire system is now set up and ready to use. All responses will be automatically saved to the server as JSON files that you can access anytime!

