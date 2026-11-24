---
layout: default
title: AI 设置
description: iScript 的 AI 讲解的使用方法。在支持的 iPhone 上无需任何设置；在其他设备上，可以用 Gemini 密钥使用句子讲解。
permalink: /api-zh/
locale: zh_CN
page_id: api
---

> 听句子、练习、复习和生词本都不需要 AI。部分内置脚本也自带讲解。

## AI 可以做什么

- 句子讲解（单词、语法、使用场合）
- 类似例句，以及敬语和非敬语的说法
- 就句子提问
- 按脚本的情境和 AI 对话，并在结束后得到修改
- 为导入的脚本补全译文

## 有两种使用方式

| | iPhone 自带的 AI | Gemini 密钥 |
| :-- | :-- | :-- |
| 需要准备 | 无 | 获取并填入密钥 |
| 句子讲解 | ○ | ○ |
| 用 Gemini 语音朗读 | - | ○ |
| 例句、敬语与非敬语、提问 | ○ | × |
| 和 AI 对话 | ○ | × |

### iPhone 自带的 AI

在支持 Apple Intelligence 的 iPhone（iOS 27 或更高版本）上，只要已在 iPhone“设置”中打开 Apple Intelligence 就可以使用。App 里无需任何设置，也不需要密钥。

每天可以使用的量由 Apple 决定。用完后，App 会告诉你什么时候可以再次使用。

### Gemini 密钥

这是可选的。连接后有两点不同。

- 用比设备语音更自然的 Gemini 语音朗读句子。
- 无法使用 iPhone 自带的 AI 时，由 Gemini 生成句子讲解：iPhone 不支持，或当天的用量已用完时。

## 获取 Gemini 密钥（可选）

1. 打开 [Google AI Studio](https://aistudio.google.com/app/apikey)，用 Google 账号登录。
2. 轻点 **Create API key** 创建密钥。
3. 拷贝生成的密钥。
4. 在 iScript 的**设置** → **Gemini 密钥**中粘贴密钥并存储。

密钥只保存在这台 iPhone 的钥匙串中。它不会包含在备份文件或咨询邮件里，也不会传给开发者。删除密钥后，就不会再向 Google 发送任何内容。

## 常见问题

### Gemini 密钥是免费的吗？

Google AI Studio 提供免费层级。限额和价格由 Google 决定，创建密钥时请查看 Google 的说明。

### 填入了密钥，还是没有讲解。

请确认拷贝时密钥前后没有带上空格；如果还是不行，请重新创建一个密钥。“设置”中的 Gemini 密钥一栏显示“已连接”时，就表示正常。

### 句子会发送到哪里？

使用 iPhone 自带的 AI 时，句子会发送到 Apple 的服务器模型；使用 Gemini 密钥时，会发送到 Google。详情请见[隐私政策](/privacy-zh/)。
