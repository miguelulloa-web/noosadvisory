# Sponsor Dashboard Specification

`PROJECT_DASHBOARD.html` is the Sponsor's primary human-facing project view. It is derived from Git-tracked source-of-truth artifacts and owned by ORCHESTRATOR_PM.

## Required views
- **Summary:** phase, health, progress, next action, blockers, recent completed work.
- **Work:** Task Packets, owners/agents, worktrees, approvals.
- **Quality & Release:** CI, build, feature QA, regression, critical defects, protected capabilities, release candidate/gate, environment/deployment.
- **Quick Guide:** clean-start flow, current position, setup status, commands and natural-language equivalents.

## Quick Guide must begin before Bootstrap
`Create local project → Git local → Install AAGM → Verify → Open IDE → /aagm-bootstrap → Sponsor Intake → Discovery → Solution Design → remote Git/CI/CD/cloud when justified → Planning → Delivery → Release → Operations`

## Synchronization
Automatic sync after management events: phase/TP state changes, task start/finish/block, changes requested, QA result, Sponsor approval, risk open/close, agent assignment, worktree integration, release/deploy/closure events.

Dashboard sync failure:
- daily development: `WARNING`, work may continue;
- phase closure/release/project closure: synchronization is mandatory.

Dashboard must show `SYNCED | OUT_OF_SYNC` and last sync timestamp.

`/aagm-status` should synchronize if needed, present a concise status and open the HTML when the platform permits. `/aagm-sync-dashboard` is the recovery/forced-sync action. A static HTML button may only invoke a local authorized platform mechanism; AAGM does not require unsafe browser-to-shell execution.
