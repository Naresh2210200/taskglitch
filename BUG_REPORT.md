# Bug Report: Double Fetch Issue (UG 1️⃣)

## Bug Description
When the app loads, the task retrieval function runs twice, causing duplicate API calls and potentially duplicated task data.

## Root Cause Analysis

### Primary Issue: Duplicate useEffect Hooks
In `src/hooks/useTasks.ts`, there are **two separate `useEffect` hooks** that both fetch from `/tasks.json`:

1. **First useEffect (lines 64-95)**: Correctly handles initial task loading
   - Fetches from `/tasks.json`
   - Normalizes and sets tasks
   - Handles errors properly
   - Uses `fetchedRef` to track completion

2. **Second useEffect (lines 98-114)**: **BUG - Duplicate fetch**
   - Also fetches from `/tasks.json`
   - Appends results to existing tasks: `setTasks(prev => [...prev, ...normalized])`
   - This causes duplicate tasks to appear
   - Comment in code even states: "Injected bug: opportunistic second fetch that can duplicate tasks on fast remounts"

### Secondary Issue: React StrictMode
In `src/main.tsx` (line 9), the app is wrapped in `<React.StrictMode>`, which in development mode:
- Intentionally double-invokes effects to help detect side effects
- This makes the double fetch issue even more apparent (4 total fetches in development!)

## Expected Behavior
- The task loading function should run **exactly once** when the app starts
- Console logs should show no duplicate calls
- No duplicated task data should appear

## Fix Applied
Removed the second `useEffect` hook (lines 98-114) from `src/hooks/useTasks.ts` that was causing the duplicate fetch.

## Files Modified
- `src/hooks/useTasks.ts` - Removed duplicate useEffect hook

## Testing Recommendations
1. Refresh the page and verify only one fetch occurs (check Network tab)
2. Verify no duplicate tasks appear in the UI
3. Test in both development (StrictMode) and production builds
4. Verify tasks load correctly on initial page load

