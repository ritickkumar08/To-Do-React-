github link :- 

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# To-Do-React-



A simple React + TailwindCSS project that mimics writing todos on an actual notebook page.
Todos are saved in LocalStorage, so they remain even after refreshing the page.

Features
    ✔️ Add Todos
        Type in the input box and press Add. The todo appears on the notebook sheet.

    ✔️ Edit Todos
        Click Edit, modify the text, and press Save.

    ✔️ Delete Todos
        Remove any todo instantly.

    ✔️ Mark Completed
        Click on a todo to toggle its completed state.

    ✔️ LocalStorage Support
        Todos stay intact even after page refresh. Stored as JSON.

    ✔️ Clean Component Structure
        App.jsx → manages all state + layout
        Header.jsx → just the title
        ToDoList.jsx → renders all todos
        ToDoItem.jsx → handles individual todo logic

How the App Works ? 
1. State Management
    App.jsx holds:
        input → the current text in the input box
        todos → array of todo objects
        editingId → which todo is being edited
        editingText → temporary text while editing

2. Adding a Todo
    When Add is clicked:
        setTodos([...todos, { id: Date.now(), text: input, completed: false }])

    Then:
        The new list is saved automatically to LocalStorage.
        Input field resets.

3. Editing a Todo
    Two-step process:
        When user clicks Edit, we store:
        which todo is being edited (editingId)
        its initial text (editingText)
        When user clicks Save, we replace it inside the todos array.


4. Deleting a Todo  
    Very simple:
        setTodos(todos.filter(todo => todo.id !== id))

5. Completing a Todo
    We flip the completed boolean on click.
    The UI uses a strike-through effect.

6. LocalStorage Syncing
    The app uses two effects:
        Load from LocalStorage ONCE
        useEffect(() => {
          const stored = localStorage.getItem("todos")
          if (stored) setTodos(JSON.parse(stored))
        }, [])

        Save on every change
        useEffect(() => {
          localStorage.setItem("todos", JSON.stringify(todos))
        }, [todos])
    This avoids the “cascading renders” error because:
    We never set state immediately after reading it in an effect.
   Instead, we load once on mount.
------------------------------------------------------------------------------------------------------------------------

How to Run the Project ?
    Install dependencies:
        npm install
        Run the development server:
        npm run dev
    Vite will start at:
        http://localhost:5173
        the port may differ.
