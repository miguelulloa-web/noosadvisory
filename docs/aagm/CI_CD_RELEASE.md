# CI/CD and Release Model

CI/CD is a cross-cutting capability, not a separate AAGM phase.

## Where decisions happen
- **Bootstrap:** do not create CI/CD or cloud infrastructure.
- **Discovery:** capture delivery/business constraints only if relevant.
- **Solution Design:** choose environments, remote Git, CI/CD strategy, deployment mode and rollback approach proportionally.
- **Planning:** create Task Packets for required CI/CD/environment work.
- **Delivery:** run CI, feature QA and regression; create a Release Candidate only when eligible.
- **Release Gate (inside Delivery):** decide `RELEASE_READY` vs `RELEASE_NOT_READY`.
- **Deploy/Post-deploy:** deploy only under configured authority; run smoke/post-deploy validation.
- **Operations:** monitor/operate the released system.

## Default safe release flow
`commit/PR → CI → PASS → QA + regression → Release Candidate → Release Gate → ASK when required → deploy → smoke validation → OPERATIONS`

AAGM supports Continuous Delivery and Continuous Deployment, but automatic production deployment is never the default. The provider (GitHub Actions, GitLab CI, etc.) is project-specific.
