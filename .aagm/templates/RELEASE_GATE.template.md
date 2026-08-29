# Release Gate

A release is `RELEASE_READY` only when all required checks for the project's risk/level pass.

- [ ] Required Task Packets are DONE
- [ ] Required CI is PASS
- [ ] Feature QA is APPROVED
- [ ] Regression QA is PASS
- [ ] Critical defects = 0
- [ ] Blocking risks are resolved with evidence
- [ ] Required evidence is available
- [ ] Deployment configuration is validated
- [ ] Rollback is defined when applicable
- [ ] Release/version is identified and release notes exist
- [ ] PROJECT_DASHBOARD.html is synchronized
- [ ] Human approval obtained when policy is ASK

Result: `RELEASE_READY | RELEASE_NOT_READY`

After `RELEASE_READY`: `DEPLOY → POST_DEPLOY_VALIDATION → OPERATIONS`.
