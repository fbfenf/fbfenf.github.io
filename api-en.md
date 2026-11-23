---
layout: default
title: AI setup
description: How AI explanations work in iScript. On an iPhone that supports them there is nothing to set up; on other devices a Gemini key gives you sentence explanations.
permalink: /api-en/
locale: en_US
page_id: api
---

> Listening, practice, review and the word list need no AI. Some built-in scripts also come with explanations already written.

## What AI adds

- Sentence explanations (words, grammar, when people say it)
- Similar example sentences, and formal and casual versions
- Asking a question about a sentence
- A conversation with AI set in your script, with corrections at the end
- Filling in translations for a script you import

## Two ways to use it

| | The iPhone's AI | Gemini key |
| :-- | :-- | :-- |
| To set up | Nothing | Get a key and enter it |
| Sentence explanations | Yes | Yes |
| Listening with a Gemini voice | - | Yes |
| Examples, formal and casual, questions | Yes | No |
| Talk with AI | Yes | No |

### The iPhone's AI

Works on an iPhone that supports Apple Intelligence (iOS 27 or later) when Apple Intelligence is turned on in iPhone Settings. There is nothing to set up in the app, and no key.

How much you can use in a day is set by Apple. When you reach the limit, the app tells you when you can use it again.

### A Gemini key

For other iPhones, when you want explanations for sentences you import yourself. It is optional.

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

With the iPhone's AI, to Apple's server model; with a Gemini key, to Google. The details are in the [privacy policy](/privacy-en/).
