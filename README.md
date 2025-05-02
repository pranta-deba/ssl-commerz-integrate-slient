# SSLCommerz Integration Frontend

This is the frontend part of a project that integrates the SSLCommerz payment gateway. It's built using React, TypeScript, and Axios.

## Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **TypeScript:** A superset of JavaScript that adds static typing.
* **Axios:** A promise-based HTTP client for making requests to the backend.
* **React Icons:** A library of SVG icons for React.
* **Vite:** A build tool that bundles your code for production.


## Application Overview

This React application provides a simple interface for initiating payments through the SSLCommerz gateway. Here's a breakdown of the main components and functionality:

* **Payment Form:**
    * A form where users can enter their email and the amount they want to pay.
    * Uses React state to manage form inputs.
    * Includes basic form validation.
* **Payment Initiation:**
    * When the user submits the form, the application sends a POST request to the `/create-ssl-payment` endpoint on the backend server (using Axios).
    * The backend responds with a `gatewayUrl` provided by SSLCommerz.
* **Redirection to SSLCommerz:**
    * The frontend receives the `gatewayUrl` and redirects the user to the SSLCommerz payment gateway page.
* **Payment Processing:**
    * The user completes the payment process on the SSLCommerz gateway.
    * SSLCommerz then redirects the user to one of the following URLs on the backend:
        * `/success-payment` for successful payments.
        * `/payment-failed` for failed payments.
        * `/payment-cancelled` for cancelled payments.
* **Post-Payment Handling:**
    * The backend handles the post-payment logic (validation, database updates) and redirects the user to a success/failure/cancel page on the frontend.
    * This frontend application includes simple placeholder pages for these scenarios (`/success`, `fail`, `cancel`).
