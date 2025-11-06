# Step 1: Use official Node image as base
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json / yarn.lock
COPY package.json ./
COPY package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy rest of the application
COPY . .

# Step 6: Build the Next.js app
RUN npm run build

# Step 7: Expose port
EXPOSE 3000

# Step 8: Start the application
CMD ["npm", "start"]
