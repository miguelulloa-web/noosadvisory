# Quality, Regression and Protected Baseline

## Six governing rules
1. **Protected Baseline:** approved working behavior must not be broken by new work.
2. **Impact Analysis:** every material Task Packet identifies likely affected areas before editing.
3. **Regression by Default:** relevant existing tests run with each delivery/integration.
4. **Bug Vaccine:** reproducible corrected bugs gain a regression test when reasonable.
5. **Change Escalation:** a Task Packet does not silently authorize architecture/contract/schema redesign.
6. **Release Gate:** no version is complete without required scope, CI, QA, regression, risk and evidence checks.

## Test strategy
Use the minimum sufficient mix of unit, integration, API/contract, UI/E2E, browser journey and smoke tests based on risk and architecture. Do not demand every test type for every project.

## Completion semantics
"My change works" is insufficient. DONE means the change works **and** relevant protected behavior still works with evidence.
