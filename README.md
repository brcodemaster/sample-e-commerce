# E-commerce

## Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create .env file

   ```bash
   DATABASE_URL="postgresql://userName:password@localhost:5432/e-commerce?schema=public"
   ```

3. Run command with prisma

```bash
   npx prisma db push
   npx prisma db seed
```

## Usage

1. Run the development server:

   ```bash
   npm run dev
   ```

2. Happy coding!
