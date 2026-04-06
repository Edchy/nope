# Red Lines

Hard rules that cannot be broken without explicit user approval. These exist to prevent catastrophic or hard-to-reverse mistakes.

## Destructive Operations

| Action | Why it's dangerous |
|--------|-------------------|
| `rm -rf` | Can delete entire directories instantly with no recovery |
| `git reset --hard` | Destroys uncommitted work permanently |
| `DROP TABLE`, `DELETE FROM` without WHERE | Wipes production data |
| Overwriting files without reading first | Destroys existing content |

## Git Operations

| Action | Why it's dangerous |
|--------|-------------------|
| `git push --force` | Rewrites history, can destroy teammates' work |
| `git push` to `main`/`master` | Bypasses review, can break production |
| `git merge` to `main`/`master` | Same as above |
| `--no-verify` flag | Skips safety hooks that exist for a reason |
| `git commit --amend` after push | Requires force push to fix |

## Security

| Action | Why it's dangerous |
|--------|-------------------|
| Committing `.env` files | Leaks secrets to version control |
| Hardcoding API keys/passwords | Secrets in code get leaked |
| Disabling SSL verification | Opens door to MITM attacks |
| `chmod 777` | Makes files world-writable |

## Scope Creep

| Action | Why it's dangerous |
|--------|-------------------|
| Repo-wide reformats | Pollutes git history, hides real changes |
| Major dependency updates | Can break everything, needs testing |
| Changing build tooling | High blast radius |
| Renaming core abstractions | Touches many files, needs coordination |

## How to Handle

When any of these actions are needed:

1. **Stop** - Do not execute
2. **Explain** - Tell the user what you need to do and why
3. **Wait** - Get explicit approval
4. **Document** - Note in commit message or gotchas.md why it was necessary

## Exceptions

User can grant blanket approval for specific red lines in the project's CLAUDE.md. For example:

```markdown
## Approved Exceptions
- Force push allowed on feature branches (not main)
- Direct commits to main allowed for hotfixes
```
