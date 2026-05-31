// ============================================================
// Scripture Scholar — Daily Tasks
// ============================================================
// Simple daily challenge system. Tasks reset every calendar day.
// Completing tasks awards small XP bonuses to keep users engaged
// between full lesson completions.
//
// Exports (global):
//   DAILY_TASKS            — task definitions
//   getDailyTasksProgress() — { date, completed: [...] }
//   markDailyTaskComplete(taskId)
//   renderDailyTasksCard() — populates the home dashboard card
//   getDailyTasksXp()       — total XP earned from today's tasks
// ============================================================

  // Task catalog. Each task has a fixed ID, a small XP reward, and a
  // 'check' function that returns true once the criteria are met
  // for the current day. The framework picks up new tasks automatically.
  const DAILY_TASKS = [
    {
      id: 'open_app',
      title: 'Open the app',
      description: 'Just by being here today',
      icon: '✨',
      xp: 2,
      // Auto-completed on app open
      autoComplete: true
    },
    {
      id: 'complete_lesson',
      title: 'Complete a lesson',
      description: 'Finish any chapter (review or new)',
      icon: '📖',
      xp: 10
    },
    {
      id: 'read_verse',
      title: 'Read the daily verse',
      description: 'Tap the Verse of the Day to view its reference',
      icon: '📜',
      xp: 3
    },
    {
      id: 'streak_keep',
      title: 'Keep your streak',
      description: 'Maintain your day streak',
      icon: '🔥',
      xp: 5
    }
  ];

  // Returns today's progress object. Initializes if it's a new day.
  function getDailyTasksProgress() {
    const today = new Date().toDateString();
    if (!state.dailyTasks || state.dailyTasks.date !== today) {
      state.dailyTasks = { date: today, completed: [] };
      saveState();
    }
    return state.dailyTasks;
  }

  // Mark a task complete for today. Awards XP. Safe to call multiple
  // times — only awards XP the first time per day.
  function markDailyTaskComplete(taskId) {
    const progress = getDailyTasksProgress();
    if (progress.completed.includes(taskId)) return false;
    const task = DAILY_TASKS.find(t => t.id === taskId);
    if (!task) return false;
    progress.completed.push(taskId);
    state.xp += task.xp;
    saveState();
    if (typeof updateTopbar === 'function') updateTopbar();
    if (typeof showToast === 'function') {
      showToast(`${task.icon} +${task.xp} XP — ${task.title}`);
    }
    // Re-render the card if it's currently visible
    const card = document.getElementById('dailyTasksCard');
    if (card && !card.closest('.hidden')) renderDailyTasksCard();
    return true;
  }

  // Returns total XP earned from today's completed tasks
  function getDailyTasksXp() {
    const progress = getDailyTasksProgress();
    return progress.completed.reduce((sum, id) => {
      const t = DAILY_TASKS.find(x => x.id === id);
      return sum + (t ? t.xp : 0);
    }, 0);
  }

  // Render the daily tasks card into #dailyTasksCard
  function renderDailyTasksCard() {
    const card = document.getElementById('dailyTasksCard');
    if (!card) return;
    const progress = getDailyTasksProgress();
    const completedCount = progress.completed.length;
    const totalTasks = DAILY_TASKS.length;
    const totalXp = DAILY_TASKS.reduce((s, t) => s + t.xp, 0);
    const earnedXp = getDailyTasksXp();

    card.innerHTML = `
      <div class="daily-tasks-header">
        <div>
          <div class="daily-tasks-eyebrow">🎯 Today's Goals</div>
          <div class="daily-tasks-title serif">Daily Tasks</div>
        </div>
        <div class="daily-tasks-summary">
          <div class="daily-tasks-summary-num">${completedCount}/${totalTasks}</div>
          <div class="daily-tasks-summary-lbl">${earnedXp}/${totalXp} XP</div>
        </div>
      </div>
      <div class="daily-tasks-list">
        ${DAILY_TASKS.map(task => {
          const done = progress.completed.includes(task.id);
          return `
            <div class="daily-task ${done ? 'done' : ''}">
              <div class="daily-task-icon">${done ? '✓' : task.icon}</div>
              <div class="daily-task-body">
                <div class="daily-task-title">${task.title}</div>
                <div class="daily-task-desc">${task.description}</div>
              </div>
              <div class="daily-task-xp">+${task.xp}</div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // Convenience: try auto-completing tasks that should fire on dashboard render
  function runAutoCompleteTasks() {
    DAILY_TASKS.forEach(task => {
      if (task.autoComplete) markDailyTaskComplete(task.id);
    });
  }
