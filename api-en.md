---
layout: default
title: AI setup
description: iScript's AI runs on Apple Intelligence. On an iPhone that supports it there is nothing to set up; on other devices a Gemini key gives you sentence explanations.
permalink: /api-en/
locale: en_US
page_id: api
---

> On an iPhone that supports Apple Intelligence there is nothing to set up, and no key is needed.

## What works with Apple Intelligence

On an iPhone that supports Apple Intelligence, with iOS 27 or later and Apple Intelligence turned on in iPhone Settings, all of this works:

- Sentence explanations (words, grammar, when people say it)
- Similar example sentences, and formal and casual versions
- Asking a question about a sentence
- A conversation with AI set in your script, with corrections at the end
- Filling in translations for a script you import

How much you can use in a day is set by Apple. When you reach the limit, the app tells you when you can use it again.

## On a device without Apple Intelligence

Listening, practice, review and the word list all work as they are. Some built-in scripts come with explanations that need no AI.

If you want explanations for sentences you import yourself, you can connect a Gemini key. It is optional.

| | Apple Intelligence | Gemini key |
| :-- | :-- | :-- |
| Sentence explanations | Yes | Yes |
| Listening with a Gemini voice | - | Yes |
| Examples, formal and casual, questions | Yes | No |
| Talk with AI | Yes | No |

## Getting a Gemini key (optional)

1. Open [Google AI Studio](https://aistudio.google.com/app/apikey) and sign in with your Google account.
2. Tap **Create API key**.
3. Copy the key.
4. In iScript, go to **Settings** → **Gemini key**, paste it and save.

The key is kept only in this iPhone's Keychain. It is not included in backup files or support emails and never reaches the developer. Removing the key stops anything being sent to Google.

## Questions

### Is a Gemini key free?

Google AI Studio has a free tier. Limits and prices are set by Google, so check what Google says when you create the key.

### I entered a key and still get no explanation.

Check that no space was copied before or after the key; if that doesn't help, create a new key. When the Gemini key row in Settings says "Connected", it is working.

### Where are my sentences sent?

With Apple Intelligence, to Apple's server model; with a Gemini key, to Google. The details are in the [privacy policy](/privacy-en/).
