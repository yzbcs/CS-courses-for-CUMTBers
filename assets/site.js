const cards = [...document.querySelectorAll('.course-card')];
const buttons = [...document.querySelectorAll('[data-filter]')];
const search = document.querySelector('#course-search');
const emptyState = document.querySelector('#empty-state');
const resultCount = document.querySelector('#result-count');
let activeFilter = 'all';

function updateCatalog() {
  const query = search.value.trim().toLowerCase();
  let visible = 0;
  for (const card of cards) {
    const semesterMatch = activeFilter === 'all' || card.dataset.semester === activeFilter;
    const searchMatch = !query || card.dataset.search.includes(query);
    card.hidden = !(semesterMatch && searchMatch);
    if (!card.hidden) visible += 1;
  }
  emptyState.hidden = visible !== 0;
  resultCount.textContent = `共 ${visible} 门课程`;
}

for (const button of buttons) {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    for (const item of buttons) {
      item.classList.toggle('active', item === button);
      item.setAttribute('aria-pressed', String(item === button));
    }
    updateCatalog();
  });
}

search.addEventListener('input', updateCatalog);

const studyCourse = document.querySelector('#study-course');
const studyMode = document.querySelector('#study-mode');
const studyPrompt = document.querySelector('#study-prompt');
const copyStudyStatus = document.querySelector('#copy-study-status');
const studyModes = {
  practice: '请先确认我的复习范围、可用时间和基础，再用 3 道短题诊断。每次只问一题，等我作答后再反馈，不要提前给出答案。结合笔记讲清错误原因，提供提示，再用变式题检查我是否掌握。',
  explain: '请先确认我想理解的具体知识点和当前困惑。结合笔记，用直观例子、正式表述、关键步骤和常见混淆讲解，再用一道短题检查我的理解。',
  plan: '请先确认我的考试或目标日期、每天可用时间、复习范围和已有基础，再安排知识梳理、练习与错题回顾。不要把笔记覆盖范围当成完整考纲，也不要凭空预测必考题。',
};

function updateStudyPrompt() {
  const courseName = studyCourse.selectedOptions[0].textContent;
  studyPrompt.value = `请使用下面的课程资料，担任我的「${courseName}」复习教练。
仓库：https://github.com/yzbcs/CS-courses-for-CUMTBers

先读取仓库 README.md、AGENTS.md 和 docs/ai-study.md，再打开 courses/${studyCourse.value}/README.md 和相关笔记。按本次主题读取章节、习题和图示。

${studyModes[studyMode.value]}

涉及截图题、公式和流程图时，请实际查看 Markdown 引用的图片或课程 PDF。无法访问仓库或读取图像时，明确说明缺少什么，不要猜测原题。
讲解和批改标注实际读过的笔记文件与章节，或图文页码；拓展内容单独说明。可疑公式或答案先核对图示和推导，再说明修正依据。
结束时总结已掌握内容、薄弱点和下一次复习建议；不要自动把我的学习记录上传到公共仓库。`;
  copyStudyStatus.textContent = '';
}

studyCourse.addEventListener('change', updateStudyPrompt);
studyMode.addEventListener('change', updateStudyPrompt);

for (const link of document.querySelectorAll('[data-study-course]')) {
  link.addEventListener('click', () => {
    studyCourse.value = link.dataset.studyCourse;
    updateStudyPrompt();
  });
}

document.querySelector('#copy-study-prompt').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(studyPrompt.value);
    copyStudyStatus.textContent = '已复制，发给你的智能体即可开始。';
  } catch {
    studyPrompt.focus();
    studyPrompt.select();
    copyStudyStatus.textContent = '自动复制未获允许，已选中完整指令，请手动复制。';
  }
});

updateStudyPrompt();
