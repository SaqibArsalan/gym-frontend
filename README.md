# Gym Management System — Frontend

A full-featured gym management dashboard built with React, TypeScript, and Redux Toolkit. It provides an admin interface for managing members, staff, users, gym classes, sessions, memberships, and an AI-powered chat assistant.

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Architecture Deep Dive](#architecture-deep-dive)
  - [Redux: Modular State Management with Combined Reducers](#redux-modular-state-management-with-combined-reducers)
  - [The createActionAndReducers Helper](#the-createactionandreducers-helper)
  - [How Modules Register into the Root Store](#how-modules-register-into-the-root-store)
  - [HTTP Client with Axios Interceptors](#http-client-with-axios-interceptors)
  - [Connector Pattern (Container vs Presentational)](#connector-pattern-container-vs-presentational)
  - [Service Layer](#service-layer)
  - [Routing](#routing)
  - [Internationalization (i18n)](#internationalization-i18n)
- [Pages and Features](#pages-and-features)
- [Running the Project Locally](#running-the-project-locally)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)

---

## Overview

This project is the front end of a gym management system. It gives gym administrators a unified dashboard to:

- View key performance metrics (active members, subscriptions, new sign-ups)
- Manage **Users**, **Staff**, and **Members / Memberships**
- Schedule and manage **Gym Classes** and **Sessions**
- Chat with an **AI assistant** for quick queries
- Navigate through a persistent sidebar layout with collapsible menus

---

## Tech Stack

| Category | Technology |
|---|---|
| UI Framework | React 18 + TypeScript |
| State Management | Redux 4 + Redux Toolkit + React-Redux |
| Routing | React Router DOM v6 |
| HTTP Client | Axios (with custom interceptor) |
| UI Component Library | Material UI (MUI) v6 |
| Styling | SCSS Modules + MUI `sx` prop |
| Date Handling | date-fns, Day.js |
| Internationalization | i18next + react-i18next |
| Forms / Selects | react-select |
| CSV Handling | react-papaparse |
| Maps | @react-google-maps/api |
| Encryption | crypto-js |
| Testing | Jest + Enzyme + React Testing Library |
| Code Quality | ESLint (Airbnb config) + Prettier + Husky |

---

## Project Structure

```
src/
├── assets/               # Fonts, images, global SCSS
├── components/
│   ├── pages/            # One folder per route/page
│   │   ├── DashboardPage/
│   │   ├── LoginPage/
│   │   ├── MembersPage/
│   │   ├── MembersDetail/
│   │   ├── MemberCreateOrUpdate/
│   │   ├── StaffPage/
│   │   ├── StaffDetail/
│   │   ├── StaffCreateOrUpdate/
│   │   ├── UserPage/
│   │   ├── UserDetail/
│   │   ├── UserCreateOrUpdate/
│   │   ├── GymClassPage/
│   │   ├── ClassCreateOrUpdate/
│   │   ├── SessionListingPage/
│   │   ├── SessionCreateOrUpdate/
│   │   ├── ChatPage/
│   │   ├── MainPage/        # Root layout (sidebar + outlet)
│   │   └── RegistrationPage/
│   └── shared/           # Reusable UI building blocks
│       ├── DataTable/      # Generic table (head + body + row)
│       ├── NavBar/
│       ├── SideBar/
│       ├── KpiCard/
│       ├── Loader/
│       ├── FieldWrapper/   # Form field abstraction
│       ├── SelectionComponent/
│       ├── AutoCompleteComponent/
│       ├── MultiAutoCompleteComponent/
│       ├── DatePickerComponent/
│       ├── DateTimePickerComponent/
│       ├── EditableTextField/
│       ├── NumberField/
│       ├── TableSearchBar/
│       ├── ActionButtons/
│       ├── CardLabel/
│       ├── LinkTab/
│       ├── FormSubHeader/
│       └── DynamicModuleLoader/
├── config/               # App-wide constants, enums, interfaces
├── redux/
│   ├── client/           # Axios HTTP client + interceptor
│   ├── components/       # One Redux module per domain
│   │   ├── Auth/
│   │   ├── Members/
│   │   ├── Staff/
│   │   ├── User/
│   │   ├── Gym Class/
│   │   ├── Session/
│   │   ├── Miscellaneous/
│   │   └── Chat/
│   ├── store/            # configureStore + preloaded state
│   ├── utils/            # reducer.helper, store.helper, source.helper
│   ├── rootReducer.ts    # combineReducers over all modules
│   ├── interfaces.ts     # Shared Redux interfaces
│   ├── constants.ts      # BASE_URL, GATEWAY_URL
│   └── globals.ts        # Global dispatch reference
├── routes/               # RootRoute + route constants
├── services/             # Singleton UI services
│   ├── LoaderService/
│   ├── ModalService/
│   ├── NavigationService/
│   ├── ToastService/
│   └── RootService.tsx   # Mounts all services in one place
├── tools/                # Utility tools/helpers
├── translations/         # i18n config + locale JSON files
├── utils/                # General-purpose utilities
├── sass/                 # Global SASS variables/mixins
├── App.tsx               # Root component (Provider + Router)
└── index.tsx             # ReactDOM.render entry point
```

---

## Architecture Deep Dive

### Redux: Modular State Management with Combined Reducers

Most React tutorials show a single `reducer.ts` file or one flat `slice`. This project takes a **domain-driven, modular approach** where every business domain (Auth, Members, Staff, etc.) lives in its own isolated folder under `src/redux/components/`. Each module owns:

```
redux/components/Members/
├── Members.constants.ts     # API URLs, reducer name
├── Members.interface.ts     # TypeScript interfaces
├── Members.enum.ts          # Enums
├── initalState.ts           # Module's initial state shape
├── affects/index.ts         # Pure reducer functions (the "affects")
├── sources/index.ts         # Async thunks (API calls)
├── normalizers/             # Transform raw API response → store shape
├── _mocks/                  # Test fixtures
└── index.ts                 # Wires everything together and exports
```

**Why this is better than a single flat reducer file:**

- Each module is fully self-contained. You can add, remove, or swap a domain without touching anything else.
- The `reducerName` constant acts as the single source of truth for the key in the Redux store — used in both `combineReducers` and `mapStateToProps`, preventing typo bugs.
- Tests and mocks live alongside the code they test.

---

### The `createActionAndReducers` Helper

Located in `src/redux/utils/reducer.helper.ts`, this is a custom wrapper around Redux Toolkit's `createSlice`:

```ts
export const createActionAndReducers = <T>(
  reducerName: string,
  initialState: any,
  affects: any
): { actions: T; reducer: any } => {
  const slice = createSlice({
    name: reducerName,
    initialState,
    reducers: { ...affects },
  });
  return { actions: slice.actions as T, reducer: slice.reducer };
};
```

Each module calls this once in its `index.ts`:

```ts
const { actions, reducer } = createActionAndReducers<IMembersActions>(
  reducerName,
  membersInitialState,
  membersEffects
);
```

**Why this matters:**

- Removes boilerplate — you never manually write `switch/case` reducer logic.
- `affects/index.ts` exports plain functions that act directly on state. Redux Toolkit uses Immer under the hood, so state mutations are safe.
- The generic type `<T>` gives you full TypeScript autocomplete on every action creator.
- Consistent pattern across all 8 domain modules.

---

### How Modules Register into the Root Store

`src/redux/rootReducer.ts` uses a **programmatic `combineReducers`** — this is the part that is most different from basic React tutorials:

```ts
const modules = [Auth, Miscellaneous, Members, Staff, User, GymClass, Session, Chat];

const rootReducer = combineReducers(
  modules.reduce((reducersObject: any, module) => {
    reducersObject[module.reducerName] = module.reducer;
    return reducersObject;
  }, {})
);
```

Instead of hardcoding it like the basic approach most tutorials show:

```ts
// Basic approach
const rootReducer = combineReducers({
  auth: authReducer,
  members: membersReducer,
});
```

This project builds the reducer map dynamically from the `modules` array. **Adding a new domain is a one-line change** — just import it and push it into the array. The reducer key always matches `module.reducerName`, which is the same constant used in `mapStateToProps`, keeping everything in sync automatically.

The `IRootState` interface is also derived from the same module constants, giving you typed access to the entire store:

```ts
export interface IRootState {
  [Auth.reducerName]: Auth.IAuthInitialState;
  [Members.reducerName]: Members.IMembersInitialState;
  // ...
}
```

---

### HTTP Client with Axios Interceptors

`src/redux/client/index.ts` exposes `GymHttpClient` — a typed wrapper class around Axios:

```ts
const client = new GymHttpClient({ dispatchError: false });
client.get<IMembersSubscriptions[]>(GET_MEMBERS_SUBSCRIPTIONS);
```

`src/redux/client/interceptor.ts` attaches a **response interceptor** that:

1. Automatically handles `401 Unauthorized` responses by attempting a token refresh.
2. Redirects to `/` if the refresh call itself fails (expired session).
3. Retries the original request after a successful token refresh.

This means API consumers (`sources/index.ts` files) never need to handle auth token logic — it is completely transparent.

---

### Connector Pattern (Container vs Presentational)

Each page has a dedicated `PageConnector.ts` file that separates Redux wiring from UI logic:

```ts
// DashboardPageConnector.ts
const mapStateToProps = (state: IRootState) => ({
  auth: state.auth,
  activeMembersCount: state.miscellaneous.activeMembersCount,
});

const DashboardConnector = (component: React.ComponentType<any>) =>
  connect(mapStateToProps)(component as any);
```

The page component then wraps itself:

```ts
const DashboardPage = DashboardPageConnector(Dashboard);
export default DashboardPage;
```

**Why this is better:**

- The UI component (`Dashboard`) is a pure function that only receives props — easily testable without a Redux store.
- All Redux dependencies are declared in one dedicated file, not scattered through component code.
- Adding or changing what state a page consumes is isolated to the connector file.

---

### Service Layer

`src/services/` provides four singleton UI services that are mounted once at the app root via `RootService.tsx`:

| Service | Purpose |
|---|---|
| `LoaderService` | Show/hide global loading spinner |
| `ModalService` | Open/close modals imperatively from anywhere |
| `NavigationService` | Programmatic navigation outside React components |
| `ToastService` | Display success/error toast notifications |

These are useful because they can be called from Redux thunks (inside `sources/index.ts`) without needing a component reference. For example, after a successful API call, a source can fire a success toast directly without prop drilling.

---

### Routing

`src/routes/RootRoute.tsx` uses React Router DOM v6 with a nested route layout:

- `/login` — standalone login page (no sidebar)
- `/` — `MainPage` acts as the layout shell, rendering the sidebar and navbar. All protected routes are children of this layout route and rendered via `<Outlet />`.
- `*` — wildcard catch-all for unknown routes

Routes are defined as constants in `src/config/constants.ts` so strings are never repeated across the codebase.

---

### Internationalization (i18n)

The project uses `i18next` with `react-i18next` for multi-language support. Translation files live in `src/translations/locales/`. The i18n instance is initialized in `src/translations/index.ts` and imported once in `App.tsx` to activate it globally.

---

## Pages and Features

| Page | Route | Description |
|---|---|---|
| Login | `/login` | Authentication screen |
| Dashboard | `/dashboard` | KPI cards: active members, subscriptions, new sign-ups |
| Users | `/users` | List all system users |
| User Create/Edit | `/user-create` | Create or update a user |
| User Detail | `/user-detail/:userId` | View user profile |
| Memberships | `/memberships` | List membership subscriptions |
| Member Create/Edit | `/memberships-create` | Create or update a member |
| Member Detail | `/memberships-detail/:memberId` | View member profile |
| Staff | `/staff` | List gym staff |
| Staff Create/Edit | `/staff-create` | Create or update a staff member |
| Staff Detail | `/staff-detail/:userId` | View staff profile |
| Classes | `/classes` | List gym classes |
| Class Create/Edit | `/class-create` | Create or update a class |
| Sessions | `/sessions` | List training sessions |
| Session Create/Edit | `/session-create` | Create or update a session |
| AI Chat | `/chat` | AI-powered chat assistant |

---

## Running the Project Locally

### Prerequisites

- **Node.js** v16 or higher
- **npm** v7 or higher
- A running **gym backend API** (default: `http://localhost:8080`)

### Steps

**1. Clone the repository**

```bash
git clone https://github.com/SaqibArsalan/gym-frontend.git
cd gym-frontend
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

The project reads the backend API URL from an environment variable. A `.env.development` file is already included with a default value:

```
REACT_APP_BASE_URL=http://localhost:8080
```

If your backend runs on a different port or host, edit `.env.development` before starting:

```bash
# .env.development
REACT_APP_BASE_URL=http://your-api-host:your-port
```

**4. Start the development server**

```bash
npm start
```

The app will open automatically at [http://localhost:3000](http://localhost:3000). The page hot-reloads on any file change.

---

## Available Scripts

| Script | Command | Description |
|---|---|---|
| Start dev server | `npm start` | Runs the app at `localhost:3000` with hot reload |
| Run tests | `npm test` | Launches Jest in interactive watch mode |
| Build for production | `npm run build` | Creates an optimized bundle in the `build/` folder |
| Build CSS only | `npm run build:css` | Compiles Tailwind CSS in watch mode |
| Eject CRA config | `npm run eject` | Exposes webpack/Babel config (irreversible) |

---

## Environment Variables

| Variable | Default | Description |
|---|---|---|
| `REACT_APP_BASE_URL` | `http://localhost:8080` | Base URL for all backend API calls |
| `GATEWAY_URL` | *(unset)* | Optional API gateway URL |
| `STORAGE_KEY` | `auth` | localStorage key used for auth token storage |
| `BAZAAR_SECRET_KEY` | *(unset)* | Client key sent in `X-Bazaar-Client-Key` header during token refresh |
