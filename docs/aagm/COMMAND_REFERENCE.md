# AAGM Command Interface

Commands are precise shortcuts; natural language equivalents should resolve to the same intent when unambiguous.

| Command | Purpose | Typical natural language |
|---|---|---|
| `/aagm-help` | Show quick help and commands | "What commands can I use?" |
| `/aagm-bootstrap` | Initialize governance/state after installation | "Start this project with AAGM" |
| `/aagm-continue` | Determine/execute the next authorized methodological action | "Continue with the project" |
| `/aagm-status` | Synchronize, summarize and open the Dashboard | "Show me the project status" |
| `/aagm-sync-dashboard` | Force Dashboard regeneration/consistency check | "Update the dashboard" |
| `/aagm-approve` | Record a Sponsor approval at an eligible gate | "I approve this decision" |
| `/aagm-request-changes` | Record requested changes | "Request these changes" |
| `/aagm-run-qa` | Coordinate required QA/regression validation | "Validate the project" |
| `/aagm-push` | Synchronize Git remote under push policy | "Prepare the push" |
| `/aagm-feedback` | Persist methodology feedback separately from product backlog | "Record this AAGM improvement" |
| `/aagm-pause` | Leave project in a safe resumable state | "Pause the project safely" |
| `/aagm-audit` | Audit AAGM integrity/compliance | "Audit the project" |

Every workflow declares what it may modify and its approval behavior. IDE "Accept" is not Sponsor gate approval. Human Sponsor Git authorship is the formal approval identity when a commit is used as evidence.
