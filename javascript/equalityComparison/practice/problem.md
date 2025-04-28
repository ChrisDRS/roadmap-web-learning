# 🎯 Miniproject: JavaScript Equality Comparison Playground

## 🧠 Objective:
Create a small web page with a form where the user can input **two values** (strings, numbers, booleans), select the type of comparison they want (`==`, `===`, `Object.is()`), and **see the result**.

---

## 📝 Requirements:

1. Create a simple HTML form:
   - Two input fields: **value1** and **value2**.
   - A dropdown (`<select>`) to choose:
     - Loose Equality (`==`)
     - Strict Equality (`===`)
     - Same Value (`Object.is()`)
   - A **Compare** button.

2. In JavaScript:
   - Capture the input values and the selected comparison method.
   - Perform the comparison according to the selection:
     - If `==`, use `value1 == value2`
     - If `===`, use `value1 === value2`
     - If `Object.is()`, use `Object.is(value1, value2)`
   - Show the result (`true` or `false`) below the form.

---

## 🧪 Example Workflow:

- User enters `5` and `'5'`
- User selects **Loose Equality (`==`)**
- Clicks **Compare**
- Output: ✅ `true`

Or:

- User enters `NaN` and `NaN`
- User selects **Same Value (`Object.is()`)**
- Clicks **Compare**
- Output: ✅ `true`

---

## 💡 Tips:
- Remember: `prompt` inputs or `<input>` fields **always return strings**.
- Use `Number()`, `Boolean()`, etc., **optional** if you want advanced type parsing (but not required for now).

---

## 📚 Bonus (optional challenges):

- Show **both the types** of value1 and value2 (`typeof`).
- Highlight if the comparison was influenced by type coercion.
- Allow comparing objects (example: `{}` vs `{}`).

---

# ✅ What you'll practice:
- Capturing and manipulating user input.
- Using `==`, `===`, and `Object.is()` properly.
- Displaying dynamic results in the DOM.
- Understanding subtle JavaScript equality rules deeper.

