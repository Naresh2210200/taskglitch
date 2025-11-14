# Git Setup Instructions

## Prerequisites
1. Install Git for Windows from: https://git-scm.com/download/win
   - During installation, make sure to select "Add Git to PATH"
   - Restart PowerShell after installation

## Setup Commands (Run in PowerShell)

Once Git is installed, navigate to the project directory and run:

```powershell
# Navigate to project directory
cd "C:\Users\user\Downloads\task-glitch-main\task-glitch-main"

# Initialize git repository
git init

# Add README.md
git add README.md

# Make first commit
git commit -m "first commit"

# Rename branch to main (if needed)
git branch -M main

# Add remote repository
git remote add origin https://github.com/Naresh2210200/taskglitch.git

# Push to GitHub
git push -u origin main
```

## Note
- If you haven't configured Git before, you may need to set your name and email:
  ```powershell
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

- If you get authentication errors, you may need to:
  - Use a Personal Access Token instead of password
  - Or configure SSH keys for GitHub

## Alternative: Using GitHub Desktop
If you prefer a GUI, you can use GitHub Desktop:
- Download from: https://desktop.github.com/
- It will handle Git installation and setup automatically

