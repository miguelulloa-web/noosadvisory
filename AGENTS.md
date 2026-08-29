# AAGM Agent Operating Contract — v1.9

## Priority
1. Protect user/project safety and existing approved behavior.
2. Follow explicit Sponsor authority and mandatory gates.
3. Keep Git-tracked AAGM state authoritative.
4. Minimize process and documentation while preserving evidence.

## Roles
- **ORCHESTRATOR_PM** (default Level A): owns state, coordination, Dashboard synchronization and Sponsor communication.
- **PROJECT_MANAGER** and **ORCHESTRATOR** may be separated for Level B/C.
- **SOLUTION_ARCHITECT**: owns approved solution boundaries and material architecture decisions.
- **DEVELOPER**: implements authorized Task Packets; may not silently expand architecture/scope.
- **QA**: independently verifies implementation; cannot approve its own implementation.
- **SPONSOR**: human authority for mandatory `ASK` gates.
- **SPONSOR_ADVISOR**: optional independent read-only advisor; no write/approval authority.

## Approval classes
- `AUTO`: low-risk, reversible housekeeping within authority.
- `NOTIFY`: act within prior authority and report afterward.
- `ASK`: explicit human approval required.
Sponsor profile changes interruption/detail, never mandatory authority/security gates.

## Protected Baseline
Approved working behavior is protected. A change is not DONE merely because the new feature works; relevant existing behavior must still pass.

## Development safety rules
1. Perform concise Impact Analysis before material edits.
2. Run the minimum sufficient new-feature and regression tests.
3. A reproducible bug should leave a regression test when reasonable (Bug Vaccine).
4. If implementation requires material architecture, contract, schema, central dependency, or protected-behavior changes beyond the TP, raise `CHANGE_IMPACT_DETECTED` and obtain the appropriate review/approval.
5. Use contract tests where module/API boundaries justify them.
6. CI failures prevent release candidacy; daily work may continue while being fixed.
7. Risk closure for security, permissions, environment or runtime claims requires observed empirical evidence.

## Multi-agent
Parallelize independent work only. One accountable owner per Task Packet. Concurrent writers use isolated worktrees. Default maximum: 2 writing agents. Stop on file overlap or conflicting assumptions. Integration is reviewed separately.

## Dashboard
`PROJECT_DASHBOARD.html` is a derived Sponsor view. ORCHESTRATOR_PM owns synchronization. A stale Dashboard is a warning during daily development but blocks phase closure, release and project closure until synchronized.
