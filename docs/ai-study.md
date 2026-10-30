# 让智能体陪你复习

把本仓库作为复习资料交给支持读取文件或访问 GitHub 的智能体，即可按笔记进行讲解、问答练习和复习规划。这里的“学习资料”指在当前任务中读取和使用内容，不涉及训练模型，也不保证跨聊天自动记忆。

## 开始使用

在[课程网站](https://yzbcs.github.io/CS-courses-for-CUMTBers/#ai-study)选择课程和复习方式，点击“复制复习指令”，把完整指令发给你使用的智能体。

也可以直接复制下面这段，再填写自己的课程、范围和时间安排：

```text
请使用 https://github.com/yzbcs/CS-courses-for-CUMTBers 的课程资料担任我的复习教练。
先读取仓库 README.md、AGENTS.md 和 docs/ai-study.md，再定位我选择的课程。
我想复习的课程：计算机网络。
请先了解我的复习范围、可用时间和基础，再用 3 道短题诊断，每次只问一题，等我作答再反馈。
结合笔记讲清楚错误原因，给出针对性提示，再用一道变式题确认我是否掌握。
讲解和批改标注实际读取的笔记章节或图文页码；拓展内容与原笔记分开说明。
涉及截图题、公式和流程图时，请实际查看相应图片或 PDF；不能读取时直接说明，不要猜测原题。
```

如果使用本地工作区，可以先克隆仓库，再让智能体在该文件夹中开始复习：

```bash
git clone https://github.com/yzbcs/CS-courses-for-CUMTBers.git
```

仅发送链接并不保证所有聊天工具都能读取仓库。不能访问 GitHub 时，可把仓库下载到智能体的工作区，或向支持附件的工具提供所选课程 PDF。对于纯图片习题，还需要工具具备读图能力。

## 课程与资料路径

下表路径均相对于仓库根目录。进入课程目录后，先读该目录的 `README.md`。

| 课程 | 课程目录 | 主笔记 | 配套资料 |
| --- | --- | --- | --- |
| 计算机网络 | `courses/junior-fall/computer-networks/` | `notes.md` | `exercises.md` |
| 数据库原理 | `courses/junior-fall/database-systems/` | `notes.md` | `examples.md` |
| 操作系统 | `courses/junior-fall/operating-systems/` | `notes.md` | `slides.md` |
| 大型实用数据库概论 | `courses/junior-spring/advanced-practical-database/` | `notes.md` | 无独立习题文件 |
| 计算机图形学 | `courses/junior-spring/computer-graphics/` | `notes.md` | `examples.md` |
| 人工智能 | `courses/junior-spring/artificial-intelligence/` | `notes.md` | `exercises.md` |
| 数字图像处理 | `courses/junior-spring/digital-image-processing/` | `notes.md` | `exercises.md` |
| 信息检索 | `courses/senior-fall/information-retrieval/` | `notes.md` | 无独立习题文件 |

每门课的完整 PDF 位于 `assets/downloads/<课程目录名>.pdf`。例如计算机网络对应 `assets/downloads/computer-networks.pdf`。预览图片位于 `assets/previews/<课程目录名>/<资料类型>/`，以相应 Markdown 中的图片链接为准。

## 资料怎么读

先根据问题找主笔记的章节，再按需看配套例题和图示。不要把“文字版”没有内容理解为没有习题：人工智能习题、数据库例题、图形学例题、操作系统 PPT 等资料以图片为主。

例如读取人工智能习题时，要打开 `courses/junior-spring/artificial-intelligence/exercises.md` 中引用的图片，而不是仅阅读其中“这一部分以图片内容为主”的提示。回答可以引用 `assets/previews/artificial-intelligence/exercises/page-03.jpg`，表述为“人工智能习题第 3 页”。这是习题部分的页码，不能直接称为合并 PDF 的第 3 页。

文字版适合检索，但部分公式、上下标、代码缩进和表格在文字提取中可能丢失。相关题目应结合页面图片核对；若笔记本身存在错误，则说明推导或其他核对依据后再纠正。

## 三种复习方式

### 问答复习

先确认范围和基础，依次问 3 道诊断题，覆盖概念、机制和应用。根据作答选择一个薄弱点，按照“短讲解 → 提问 → 反馈 → 变式练习”的节奏推进。每次只展示当前问题，避免提前泄露后续解答。

### 重点讲解

先确认一个具体知识点，读取相关章节和图示。用直观例子解释，再给出正式表述、关键步骤和常见混淆，最后用一道短题检查理解。不要在没有读取资料时声称笔记使用了某个例子。

### 复习计划

先确认考试或目标日期、每天可用时间、复习范围和已有基础，再安排知识梳理、练习及错题回顾。不根据课程名字推断“必考题”，不把笔记覆盖范围当成完整教学大纲。

## 反馈和继续复习

批改时指出作答中具体正确、遗漏和错误的位置，说明判断依据，并给出下一步练习。未作答的知识点记为“尚未确认”，不要直接判定为不会。

结束时可生成一段可复制的复习摘要：本次范围、已掌握内容、仍需巩固的问题、对应资料位置和下一次建议。下次聊天把摘要一并交给智能体，即可更容易地继续复习。需要保存个人记录时，放在学习者自己的本地文件中，不提交到本公开资料库。
