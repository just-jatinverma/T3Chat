# T3 Chat

An advanced AI chat application powered by OpenRouter.

## Features

*   **AI-Powered Chat:** Engage in intelligent conversations with an AI powered by OpenRouter.
*   **User Authentication:** Secure user authentication with email/password and GitHub login.
*   **Theming:** Switch between light and dark modes.
*   **Real-time UI:** Built with Next.js and React for a fast and responsive user experience.
*   **Styling with Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **Prisma ORM:** Modern database toolkit for PostgreSQL.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [Radix UI](https://www.radix-ui.com/) and [shadcn/ui](https://ui.shadcn.com/)
*   **Authentication:** [better-auth](https://better-auth.dev/)
*   **ORM:** [Prisma](https://www.prisma.io/)
*   **Database:** [PostgreSQL](https://www.postgresql.org/)
*   **AI:** [OpenRouter](https://openrouter.ai/)

## Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (v18 or later)
*   [pnpm](https://pnpm.io/)
*   [PostgreSQL](https://www.postgresql.org/download/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/t3-chat.git
    cd t3-chat
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Set up the database:**

    *   Make sure your PostgreSQL server is running.
    *   Run the Prisma migrations to create the database schema:

    ```bash
    pnpm prisma migrate dev
    ```

4.  **Set up environment variables:**

    Create a `.env.local` file in the root of the project and add the following environment variables:

    ```env
    # Database
    DATABASE_URL="postgresql://user:password@host:port/database"

    # Authentication
    NEXT_PUBLIC_APP_URL="http://localhost:3000"
    GITHUB_CLIENT_ID="your_github_client_id"
    GITHUB_CLIENT_SECRET="your_github_client_secret"

    # OpenRouter
    OPENROUTER_API_KEY="your_openrouter_api_key"
    ```

5.  **Run the development server:**

    ```bash
    pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
