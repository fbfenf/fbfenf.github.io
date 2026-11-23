---
layout: default
title: AI 设置
description: iScript 的 AI 通过 Apple Intelligence 运行。在支持的 iPhone 上无需任何设置；在其他设备上，可以用 Gemini 密钥使用句子讲解。
permalink: /api-zh/
locale: zh_CN
page_id: api
---

> 在支持 Apple Intelligence 的 iPhone 上无需任何设置，也不需要密钥。

## 通过 Apple Intelligence 可以使用的功能

在支持 Apple Intelligence 的 iPhone 上，系统为 iOS 27 或更高版本，并且已在 iPhone“设置”中打开 Apple Intelligence 时，以下功能都可以使用：

- 句子讲解（单词、语法、使用场合）
- 类似例句，以及敬语和非敬语的说法
- 就句子提问
- 按脚本的情境和 AI 对话，并在结束后得到修改
- 为导入的脚本补全译文

每天可以使用的量由 Apple 决定。用完后，App 会告诉你什么时候可以再次使用。

## 在无法使用 Apple Intelligence 的设备上

听句子、练习、复习和生词本都可以照常使用。部分内置脚本自带讲解，无需 AI 也能查看。

如果想查看自己导入的句子的讲解，可以连接 Gemini 密钥。这是可选的。

| | Apple Intelligence | Gemini 密钥 |
| :-- | :-- | :-- |
| 句子讲解 | 可用 | 可用 |
| 用 Gemini 语音朗读 | - | 可用 |
| 例句、敬语与非敬语、提问 | 可用 | 不可用 |
| 和 AI 对话 | 可用 | 不可用 |

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

使用 Apple Intelligence 时，句子会发送到 Apple 的服务器模型；使用 Gemini 密钥时，会发送到 Google。详情请见[隐私政策](/privacy-zh/)。
