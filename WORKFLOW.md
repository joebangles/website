# Development Workflow

This document outlines the git branching strategy and deployment workflow for this project.

## Branch Structure

```
main (production) ← Always deployable, triggers automatic deployment
  ↑
dev ← Active development branch
```

### Branches

- **`main`** - Production branch
  - Always contains deployable code
  - Protected branch (should be)
  - Automatically deploys to production server on push
  - Only updated via Pull Requests from `dev`

- **`dev`** - Development branch
  - Daily development work happens here
  - All new features, bug fixes, and changes go here first
  - Can be pushed directly or via feature branches

## Workflow Steps

### 1. Daily Development

Work on the `dev` branch for all changes:

```bash
# Make sure you're on dev branch
git checkout dev

# Pull latest changes
git pull origin dev

# Make your changes
# ... edit files ...

# Commit and push
git add .
git commit -m "Description of changes"
git push origin dev
```

### 2. Deploying to Production

When ready to deploy changes to production:

```bash
# Make sure dev is up to date
git checkout dev
git pull origin dev

# Switch to main and create PR
git checkout main
git pull origin main
```

Then on GitHub:
1. Create a Pull Request from `dev` → `main`
2. Review the changes in the PR
3. Check that all tests pass
4. Merge the PR

### 3. Automatic Deployment

Once the PR is merged to `main`:
- GitHub Actions automatically triggers
- Runs tests and linter
- Builds the production bundle
- Deploys to FTP server
- Check the Actions tab on GitHub to monitor progress

## First-Time Setup

### 1. Push branches to GitHub

```bash
# Push dev branch
git push -u origin dev

# Push main branch (if not already pushed)
git checkout main
git push -u origin main
```

### 2. Configure GitHub Secrets

Add these secrets in your GitHub repository:
1. Go to: Settings → Secrets and variables → Actions
2. Click "New repository secret" for each:
   - `FTP_SERVER` - Your FTP server address (e.g., `ftp.yourhost.com`)
   - `FTP_USERNAME` - Your FTP username
   - `FTP_PASSWORD` - Your FTP password

### 3. Optional: Protect Main Branch

To prevent accidental direct pushes to `main`:
1. Go to: Settings → Branches
2. Add branch protection rule for `main`
3. Enable:
   - Require pull request before merging
   - Require status checks to pass (tests/linter)

## Alternative: Feature Branch Workflow

For larger features, you can create feature branches:

```bash
# Create feature branch from dev
git checkout dev
git checkout -b feature/my-new-feature

# Work on feature
git add .
git commit -m "Add new feature"
git push -u origin feature/my-new-feature

# Create PR: feature/my-new-feature → dev
# After merge, delete feature branch
```

## Manual Deployment

You can manually trigger a deployment without merging a PR:
1. Go to Actions tab on GitHub
2. Select "Deploy to Production"
3. Click "Run workflow"
4. Select `main` branch
5. Click "Run workflow"

## Rollback

If you need to rollback a deployment:

```bash
# Find the commit hash you want to rollback to
git log

# Revert to that commit
git checkout main
git revert <commit-hash>
git push origin main

# This will trigger a new deployment with the reverted code
```

## Troubleshooting

### Deployment fails
- Check GitHub Actions logs in the Actions tab
- Verify FTP credentials are correct in Secrets
- Ensure `server-dir` path in `deploy.yml` is correct for your host

### Tests fail in CI but pass locally
- Ensure all dependencies are in `package.json` (not just `node_modules`)
- Check Node version matches (currently using Node 20)

### Need to change deployment directory
Edit `.github/workflows/deploy.yml` and modify the `server-dir` parameter:
```yaml
server-dir: ./public_html/  # or whatever your host requires
```
