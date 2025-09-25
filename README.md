# yatra-planner
**STEPS TO ACCESS VERCEL** 


 C:\Users\bhavy\OneDrive\Desktop\YatraOne\yatra-planner> cd yatra-planner
 C:\Users\bhavy\OneDrive\Desktop\YatraOne\yatra-planner\yatra-planner> npm run dev
 
**STEPS TO ACCESS and ADD Github repo yatra-planner for accessing via vercel**

# 1) Checklist before you start

1. Git configured with your name/email (`git config --global user.name` / `user.email`).
2. GitHub account created.
3. A GitHub repo named `yatra-planner` created (empty or without a conflicting README if you push an existing local repo).
4. Vercel account (you can sign in with GitHub).
5. Optional: SSH key or Personal Access Token (PAT) for authentication.

---

# 2) Create the GitHub repository (one-time on web)

1. Log in to **github.com**.
2. Click **New** (green button) or **+ → New repository**.
3. Name: `yatra-planner`
4. **Do NOT** initialize with README if you already have a local repo with commits (to avoid merge conflicts) — create empty repo.
5. Click **Create repository**.
6. GitHub will show the exact push commands for an existing repo — copy them.

---

# 3) Local git → push to GitHub (commands you can run in PowerShell)

Make sure you are inside your project folder:

```powershell
cd C:\Users\bhavy\OneDrive\Desktop\YatraOne\yatra-planner
```

Set your git identity (you already did this; keeps records clean):

```powershell
git config --global user.email "bhavyabaggi407@gmail.com"
git config --global user.name  "Bhavya Sri Baggi"
# Or set repo-only:
# git config user.email "..." 
# git config user.name "..."
```

Check status and stage files:

```powershell
git status
git add .
```

Commit — **always quote multi-word commit messages**:

```powershell
git commit -m "Initial Yatra Planner Home Screen"
```

Common mistake you hit earlier: `git commit -m Initial Yatra Planner Home Screen` → shell treats words as file paths. Use quotes.

If you already have commits and want main as branch:

```powershell
git branch -M main
```

Add the remote (only if you created the GitHub repo first). Replace `USERNAME` with your GitHub username:

```powershell
git remote add origin https://github.com/USERNAME/yatra-planner.git
# If remote already exists, either:
# git remote remove origin
# git remote add origin <url>
# or change URL:
# git remote set-url origin https://github.com/USERNAME/yatra-planner.git
```

Push to GitHub:

```powershell
git push -u origin main
```

**If you see** `error: src refspec main does not match any`
→ You have no commit on branch `main`. Create a commit first (see `git commit` above) then run `git push -u origin main`.

**If you see** `remote: Repository not found.`
→ Most likely the GitHub repo doesn't exist under that URL or you used wrong username/case. Verify the repo exists in your GitHub account and the remote URL matches `git remote -v`. If repo exists but is private, ensure you have permission/authenticated.

---

# 4) Authentication options (so `git push` works)

**Option A — GitHub web/browser auth (Credential Manager)**
When you `git push`, Windows Git Credential Manager will open a browser to sign in (you saw `please complete authentication in your browser...`). Complete that flow.

**Option B — Personal Access Token (HTTPS)**

1. GitHub → Settings → Developer settings → Personal access tokens → create token (repo scope).
2. When PowerShell prompts for password for HTTPS URL, paste token.

**Option C — SSH (recommended long-term)**

```powershell
ssh-keygen -t ed25519 -C "your-email@example.com"      # follow prompts
# then copy the public key (~/.ssh/id_ed25519.pub) to GitHub Settings → SSH and GPG keys
git remote set-url origin git@github.com:USERNAME/yatra-planner.git
git push -u origin main
```

---

# 5) Common errors you had + fixes

* `error: pathspec 'Yatra' did not match any file(s) known to git`
  → You used `git commit -m` without quotes; shell treated words as arguments. Fix: quote the message.

* `Author identity unknown` / `fatal: unable to auto-detect email address`
  → Run `git config --global user.email "you@example.com"` and `git config --global user.name "Your Name"`.

* `src refspec main does not match any`
  → No branch named `main` yet. Make a commit and then `git branch -M main`.

* `remote: Repository not found.`
  → The remote URL is wrong OR the repo was not created on GitHub OR you don't have permission. Verify URL, create repo on GitHub, or fix username.

---

# 6) Deploy to Vercel (Web UI — easiest)

1. Open browser → **vercel.com** → **Log in** → choose **Continue with GitHub** (authorize Vercel to access your GitHub account / repo).
2. On Vercel dashboard click **New Project** → **Import Git Repository** → select `yatra-planner` from your list.

   * If your repo is inside a folder/monorepo, set the **Root Directory** to the correct subfolder (e.g., `/yatra-planner`).
3. Vercel will auto-detect **Next.js** (since you have `next.config.mjs` / `src/app`). Confirm framework preset.
4. Configure build settings only if custom: default Next.js build command `npm run build` or `next build`. Install command `npm ci` or `npm install`. Output directory usually left blank for Next.js.
5. Click **Deploy**. Vercel will build and then show a URL like `https://yatra-planner.vercel.app`. Click **Visit** to open your live app.
6. Every push to `main` (or branch configured) triggers automatic redeploy.

---

# 7) Deploy via Vercel CLI (optional)

```bash
npm i -g vercel
vercel login                 # authenticate via browser
cd yatra-planner
vercel                       # follow prompts (first deploy)
# For production:
vercel --prod
```

---

# 8) How to access & manage the deployed app

* Go to Vercel dashboard → Projects → click `yatra-planner`.
* **Visit** button opens production URL (e.g., `https://yatra-planner.vercel.app`).
* **Deployments** tab shows build logs & past deployments; click any deployment to view logs or re-deploy.
* **Settings → Environment Variables**: add any `NEXT_PUBLIC_*` variables, API keys, etc.
* **Domains**: add a custom domain and follow DNS setup.
* For logs: Project → Functions / Deployments → View logs for runtime errors.

---

# 9) Helpful commands to inspect repo (copy/paste)

```powershell
git status
git log --oneline -n 5
git remote -v
git branch -a
```

---

# 10) Minimal README snippet you can add (so you can retrack later)

Add a `README-deploy.md` or include this block in your repo:

```md
# yatra-planner — quick deploy checklist

## push local -> GitHub
1. `git add .`
2. `git commit -m "Initial Yatra Planner Home Screen"`
3. `git branch -M main`
4. `git remote add origin https://github.com/USERNAME/yatra-planner.git`
5. `git push -u origin main`

## deploy to Vercel (web)
1. Go to vercel.com → login with GitHub
2. New Project → select `yatra-planner`
3. Configure (Root if needed), Deploy
4. Visit production URL shown in dashboard

## tips
- If `remote: Repository not found` → create repo on GitHub or fix `git remote set-url`.
- If push asks for credentials, either complete browser auth, use PAT, or set up SSH.
```

---

# Final troubleshooting checklist (fast)

* Repo exists on GitHub? → `open https://github.com/USERNAME/yatra-planner`
* Remote matches `git remote -v`? → `git remote set-url origin <correct-url>`
* Commits exist? → `git log --oneline`
* Authentication? → sign in via browser or use PAT/SSH.
* Vercel build fails? → check Build Logs in Vercel, fix errors locally with `npm run build`.

---


