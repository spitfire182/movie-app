# TMDb Popular Movies

This is a Next.js application that displays a list of popular movies from The Movie Database (TMDb) API and allows users to view details for a selected movie in a modal.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/your-username/tmdb-movie-app.git](https://github.com/your-username/tmdb-movie-app.git)
    cd tmdb-movie-app
    ```

2.  Install NPM packages:
    ```bash
    npm install
    ```

3.  Set up your environment variables. Create a file named `.env.local` in the root of the project and add your TMDb API key:
    ```
    NEXT_PUBLIC_TMDB_API_KEY="your_api_key_here"
    ```

4.  Run the development server:
    ```bash
    npm run dev
    ```

5.  Run tests:
    ```bash
    npm test
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

##  Technical Decisions

-   **Framework**: **Next.js** was chosen to leverage modern React features like Server Components, which handle the initial data fetching for improved performance and SEO.
-   **Styling**: **Tailwind CSS** was used for rapid, utility-first styling and to build a responsive, mobile-first design.
-   **TypeScript**: The project is written in TypeScript to ensure type safety, reduce runtime errors, and improve code maintainability.
-   **Component Structure**: The application is broken down into reusable UI components (`Modal`) and feature-specific components (`MovieList`, `MovieDetails`). This follows the principle of separation of concerns.
-   **API Abstraction**: All TMDb API calls are centralized in a `services/movieService.ts` file. This decouples data fetching logic from the UI, making the code cleaner and easier to test.
-   **Reusable functions**: All reusable functions are placed in the `utils` directory. This follows the DRY principle and it's reusable and easy to test. Good example is `date.ts` to handle operations on dates.
-   **Image optimisation**: Built-in <Image> component automatically optimizes images for different devices, improving performance.

## Potential Improvements

Given more time, here are some improvements I would implement to make this a production-ready application:

-   **State Management**: For an app with more complex state, this would provide caching, automatic re-fetching, and optimistic updates, leading to a much better user experience.
-   **UX & UI**:
    -   Implement **skeleton loaders** on the initial page load to provide better visual feedback.
    -   Add **CSS transitions** to the modal for a smoother open/close animation.
    -   Implement **error boundaries** to gracefully handle any rendering errors in components.
    -   Add **search and filtering** to find movies by title and filter by genre or date.
    -   Fix **cumulative layout shift** caused by implementing loading state which shows up very briefly in the modal.
    -   Add better **error handling** currently, the app has basic error handling. A more robust solution would involve using Next.js error.tsx files to show user-friendly error messages.
-   **Accessibility**: I would enhance the `Modal` component's accessibility by adding **focus trapping**, ensuring the user cannot tab outside the modal, and making it fully compliant with WAI-ARIA guidelines.
-   **Pagination**: The current app only shows the first page of results. I would add **infinite scrolling** to seamlessly load more movies as the user scrolls.
-   **Testing**: The current test suite includes a single unit test as required. A production application would have a comprehensive suite including **integration tests** (e.g., testing the full flow of clicking a movie to open the modal) and **end-to-end tests** using a tool like Cypress or Playwright.
-   **Ease to work with**: I would extract logic to custom hooks to have clear separation of bussiness logic and component structure that would improve code readability and made it less prone to user introduced bugs. 
