# Drive Sim — Build Journal

Append-only log of decisions, surprises, blog-worthy moments. Entries tagged `[LINKEDIN]` are flagged for the comparison post.

---

## 2026-05-10 — Project kickoff

Approved plan locked: Three.js + Cannon-es + Vite + GitHub Pages, repo `drive-sim`, public. World style: arcade playground (roads, ramps, bridges, jump pads). Stretch goals: settings menu, mobile touch.

Pivoted away from a `.exe` deliverable to a web link mid-discussion. The reasoning was engagement-driven: a click-to-play URL beats "download my .exe" on LinkedIn by a huge margin (no SmartScreen warning, no install friction, works on phones).

[LINKEDIN] My 2014 self spent more time configuring Blender + Python rendering pipelines than building gameplay. My 2026 self just had a 10-minute conversation with Claude Code about whether `.exe` or web was a better deliverable, and we converged on the obvious answer.

## 2026-05-10 — Node.js install detour

Started with Python 3.14 on the machine but no Node. Installed Node 24 LTS via `winget install OpenJS.NodeJS.LTS`. UAC prompt needed approval. PowerShell execution policy was Restricted by default, so `npm.ps1` couldn't run — fixed with `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`.

[LINKEDIN] In 2014, "set up the dev environment" was a full day of fighting Blender's Python API mismatches. In 2026, it's `winget install` + one `Set-ExecutionPolicy` line. The friction has moved from environment setup into deciding what to build.
