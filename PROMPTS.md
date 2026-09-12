# 工单本

## 六个空（每次发送前看一眼）

- 找谁做
- 做什么
- 数据啥样
- 有啥规矩
- 改哪
- 怎么算做对

## 最佳工单

### 笔记新建（模板）

角色：资深全栈工程师
任务：做笔记里的「新建」这一个接口
数据：标题 string 必填 1-50字；内容 string 可空
规则：标题不能为空
文件：src/app/api/notes/route.ts ，只改这一个
算对：空标题 400，正常 201，npx tsc --noEmit 无错
例子：标题「买牛奶」正确；标题空着 400

## 每日备份

# 9.7 Day 1 角色

##角色（以后默认都这句）
角色：资深全栈工程师

## 缺项工单

要加在哪个页面或文件？说明按钮文字、点击后要做什么，以及大致样式（如颜色/尺寸），我会直接实现。

## 合格工单

已创建 [Botton.tsx](C:/Users/24696/Desktop/All-in-one/src/components/ui/Botton.tsx)。

- text 为必填字符串
- 空白文字返回 400
- 正常文字返回 201
- npx tsc --noEmit 已通过，无报错

> 对比：差的全是问题，好的直接返回结果和路径

# 9.8 Day 2 任务

## 缺项工单

帮我做笔记

可以。把需要整理的文字、图片、文件或链接发给我，并告诉我笔记用途（复习、会议纪要、读书笔记等）；没有指定格式的话，我会整理成「主题、要点、结论、待办」结构。

## 合格工单

角色：资深全栈工程师
任务：做笔记里的「新建」这一个接口
数据：标题 string 必填 1-50字
规则：标题不能为空
文件：src/app/api/notes/route.ts
算对：空的返回 400，正常返回 201，跑 npx tsc --noEmit 无错\

已完成 [route.ts](C:/Users/24696/Desktop/All-in-one/src/app/api/notes/route.ts)。

- POST 接收 { title: string }
- 空标题、纯空格、非字符串、超过 50 字：返回 400
- 正常标题：返回 201
- 非法 JSON：返回 400
- npx tsc --noEmit：通过
- ESLint：通过

> 小任务更聚焦

# 9.9 Day 3 数据

数据：标题 string 必填 1-50字；内容 string 可空

## 缺项工单

角色：资深全栈工程师
任务：笔记的新建接口
规则：标题不能为空
文件：src/app/api/notes/route.ts
算对：空的返回 400，正常返回 201，跑 npx tsc --noEmit 无错\

已确认 src/app/api/notes/route.ts 满足要求：

- 标题为空或仅包含空格时返回 400
- 标题有效时返回 201
- content 可选，默认为空字符串
- 已通过 npx tsc --noEmit，无类型错误

## 合格工单

角色：资深全栈工程师
任务：笔记的新建接口
数据：标题 string 必填 1-50字；内容 string 可空
规则：标题不能为空
文件：src/app/api/notes/route.ts
算对：空的返回 400，正常返回 201，跑 npx tsc --noEmit 无错

已完成笔记新建接口，修改文件：

- src/app/api/notes/route.ts
  实现内容：
- title 必填，必须是字符串
- 标题去除首尾空格后不能为空
- 标题长度限制为 1-50 个字符
- content 可选，必须是字符串，缺省时返回空字符串
- 空标题、标题超长、内容类型错误、非法 JSON 返回 400
- 正常创建返回 201
- 已通过 npx tsc --noEmit不中返

> 写了数据，校验才准。

# 9.9 Day 4 规则

规则：标题不能为空，1-50字；链接必须以 http 或 https 开头。

> 规则：有规则漏的少。

# 9.9 Day 5 文件

## 合格工单

角色：资深全栈工程师
任务：收藏的新建接口
数据：标题 string 必填 1-50字；链接 string 必填
规则：标题不能为空；链接必须以 http 或 https 开头
文件：src/app/api/notes/route.ts
算对：空的返回 400，正常返回 201，跑 npx tsc --noEmit 无错

已按指定文件完成修改：

- 修改 src/app/api/notes/route.ts:13
- 接收 { title, link }
- 标题去除首尾空格后必须为 1-50 字符
- 链接必须以 http:// 或 https:// 开头
- 空标题、缺少链接、非法链接、非法 JSON 返回 400
- 正常数据返回 201
- npx tsc --noEmit 已通过

> 文件越精准越可控。

# 9.9 Day 6 算对

## 缺项工单

角色：资深全栈工程师
任务：收藏的新建接口
数据：标题 string 必填 1-50字；链接 string 必填
规则：标题不能为空；链接必须以 http 或 https 开头
文件：src/app/api/notes/route.ts

已确认 [src/app/api/notes/route.ts (line 1)](C:/Users/24696/Desktop/All-in-one/src/app/api/notes/route.ts:1) 已满足收藏新建接口要求：

- title 必填，去除首尾空格后长度为 1-50
- link 必填，必须以 http:// 或 https:// 开头
- 无效数据返回 400
- 有效数据返回 201
- npx tsc --noEmit 已通过

## 合格工单

角色：资深全栈工程师
任务：收藏的新建接口
数据：标题 string 必填 1-50字；链接 string 必填
规则：标题不能为空；链接必须以 http 或 https 开头
文件：src/app/api/notes/route.ts
算对：空的返回 400，正常返回 201，跑 npx tsc --noEmit 无错\

已确认 [src/app/api/notes/route.ts (line 1)](C:/Users/24696/Desktop/All-in-one/src/app/api/notes/route.ts:1) 满足要求：

- 标题必填，长度 1-50 字
- 标题为空返回 400
- 链接必须以 http:// 或 https:// 开头
- 正常数据返回 201
- 空数据验证：400
- 正常数据验证：201
- npx tsc --noEmit 已通过

> 有算对它自测

# 9.9 Day 7 周复盘

| 空   | 差         | 好                         |
| ---- | ---------- | -------------------------- |
| 角色 | 不写       | 资深全栈工程师             |
| 任务 | 帮我做笔记 | 做笔记的新建接口           |
| 数据 | 不写       | 标题 string 必填 1-50字    |
| 规则 | 不写       | 标题不能为空               |
| 文件 | 不写       | src/app/api/notes/route.ts |
| 算对 | 不写       | 空 400 正常 201 tsc 无错   |

# 9.10 Day 8 例子

> 一个例子比三句规则管用。它用具体输入和预期结果，说明什么情况算通过。如何给例子呢？？？模板待填充。
 
 # 9.11 Day 9 分步骤

角色：资深全栈工程师
任务：收藏的新建接口
数据：标题 string 必填 1-50字；链接 string 必填
规则：标题不能为空；链接必须以 http 或 https 开头
文件：src/app/api/notes/route.ts
算对：空的返回 400，正常返回 201，跑 npx tsc --noEmit 无错 例子：标题[买牛奶]正确；标题空着返回400


这张工单的接口代码已经完成，位于 [src/app/api/notes/route.ts (line 3)](C:/Users/24696/Desktop/All-in-one/src/app/api/notes/route.ts:3)。
已满足：
- title 必须是 1–50 个字符
- 空标题或纯空格标题返回 400
- link 必须以 http:// 或 https:// 开头
- 正常数据返回 201
- 定向 TypeScript 检查已通过
测试数据：
{"title":"","link":"https://example.com"}
预期：400
{"title":"买牛奶","link":"https://example.com"}
预期：201
补充：当前执行完整 npx tsc --noEmit 时，会被项目原有的空文件 app/api/route.ts 报错；这不是收藏接口代码导致的。

> 列出需要修改的文件无代码更改，分别列各文件需修改的清单，不改代码，分3步。第二轮：按清单只生成第一个文件。后依次生成后面几个。

> 先拆，按照拆的小点，一个个做，后面改的少。