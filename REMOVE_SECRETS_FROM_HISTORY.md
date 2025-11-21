# Removing Secrets from Git History

GitHub has blocked your push because Stripe secret keys were detected in your git history (commits `3a6706c9` and `c6773972`).

## Current Status
✅ The secrets have been removed from the current `environment.ts` file
✅ A new commit has been created with placeholder values

## Next Steps - Choose ONE method:

### Method 1: Use BFG Repo-Cleaner (Recommended)

1. **Download BFG Repo-Cleaner:**
   - Download from: https://rtyley.github.io/bfg-repo-cleaner/
   - Or use: `winget install BFG` (if winget is available)

2. **Create a file with the secrets to remove (use your actual keys locally, do NOT commit this file):**
   ```powershell
   @"
   sk_test_your_stripe_test_key_here
   whsec_your_stripe_webhook_secret_here
   "@ | Out-File secrets.txt
   ```

3. **Run BFG to remove secrets:**
   ```powershell
   java -jar bfg.jar --replace-text secrets.txt
   ```

4. **Clean up and force push:**
   ```powershell
   git reflog expire --expire=now --all
   git gc --prune=now --aggressive
   git push origin main --force
   ```

### Method 2: Use GitHub's Allow Secret (Quick but NOT Recommended)

⚠️ **Security Warning:** This allows the secret to remain in your repository history.

1. Visit the URL provided in the error message:
   https://github.com/xtraordinaryDev/ProfileAI/security/secret-scanning/unblock-secret/35hZuiABXyqhETeMGSG1VYnKmIL

2. Follow the prompts to allow the secret (not recommended for production)

### Method 3: Manual Interactive Rebase

1. **Start interactive rebase:**
   ```powershell
   git rebase -i 3a6706c9^
   ```

2. **Change `pick` to `edit` for commits `3a6706c9` and `c6773972`**

3. **For each commit:**
   - Edit `src/environments/environment.ts` to replace secrets with placeholders
   - `git add src/environments/environment.ts`
   - `git commit --amend --no-edit`
   - `git rebase --continue`

4. **Force push:**
   ```powershell
   git push origin main --force
   ```

## After Fixing History

1. **Update your local environment.ts** with your actual test keys (they won't be committed)
2. **Consider using environment variables** instead of hardcoding secrets
3. **Add environment.ts to .gitignore** if you want to keep it local-only

## Important Notes

- ⚠️ **Force pushing rewrites history** - coordinate with your team if working collaboratively
- 🔒 **Never commit real API keys or secrets** to version control
- 🔄 After force pushing, other team members will need to reset their local branches


