This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

26/09/2025 

 📝 Git Problem + Fix (Your Case)

---

## ❌ Problem You Got

When pushing changes after creating `app/page.js`, you saw:

```bash
! [rejected] main -> main (fetch first)
error: failed to push some refs to 'https://github.com/Bhavyasri-Baggi/yatra-planner.git'
hint: Updates were rejected because the remote contains work that you do not
have locally.
```

👉 Meaning: The GitHub repo had **new commits** that your local repo didn’t have.

---

## ✅ Fix You Did

1. First tried pushing → got error.

2. Then pulled with rebase to merge remote updates:

   ```bash
   git pull origin main --rebase
   ```

   ✅ This brought remote changes into your local branch cleanly.

3. Then pushed successfully:

   ```bash
   git push origin main
   ```

   ✅ Your new `app/page.js` changes went to GitHub.

4. After that, when you tried `git rebase --continue`, Git said:

   ```
   fatal: no rebase in progress
   ```

   👉 That’s fine! It just means the rebase was already completed in step 2.

5. Final push showed:

   ```
   Everything up-to-date
   ```

   ✅ Meaning your local and remote repos are now in sync.

---

## 🔄 Final Workflow (For Next Time)

Whenever you face this same **push rejected** error:

1. Save your changes.
2. Run:

   ```bash
   git pull origin main --rebase
   ```
3. Then:

   ```bash
   git push origin main
   ```
4. Done ✅ (Vercel auto-deploys from GitHub).
Perfect 👍 Let me give you a **clear workflow guide** you can always refer back to when working with **Next.js + GitHub + Vercel**.

---

**Updating The Home Button** 
# 🚀 Workflow: Local Development → GitHub → Vercel

### 1️⃣ Setup (done once)

* Install dependencies:

  ```bash
  npm install
  ```

* Run locally:

  ```bash
  npm run dev
  ```

  👉 Preview at `http://localhost:3000`.

* Connect repo (`yatra-planner`) to **Vercel** (already done).

---

### 2️⃣ Make Changes Locally

* Open **VS Code**.
* Edit files (e.g., `app/page.js` or `app.js`).
* Save changes.

---

### 3️⃣ Test Locally

Run:

```bash
npm run dev
```

* Visit `http://localhost:3000`.
* Check if changes look correct.

---

### 4️⃣ Push to GitHub

When happy with the update:

```bash
git add .
git commit -m "Describe your change here"
git push origin main
```

---

### 5️⃣ Auto-Deploy on Vercel

* After push, Vercel **automatically builds and deploys**.
* In ~30–60 sec, new version is live at your Vercel URL.

---

### 6️⃣ Verify Deployment

* Open your **Vercel project link**.
* Refresh → new changes should appear.

---

# 🔄 Repeat Cycle

Every time you want to update:

1. **Edit code locally**
2. **Test locally**
3. **Push to GitHub**
4. **Vercel auto-deploys**

---

✅ **Key Rule:**
All coding is **local on VS Code**, never on Vercel.
Vercel just hosts whatever you pushed to GitHub.





