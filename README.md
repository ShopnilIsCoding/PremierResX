# PremierResX

Check out the live site [here](https://premierresx.web.app/)

## Features and Characteristics

- **User Authentication**: Users can register and log in using their email and password. Additionally, authentication is provided via GitHub and Google login using Firebase.
- **Profile Management**: Users can update their profile information, including name, and profile picture.
- **Private Routes**: Certain sections of the website, such as the "For You" section and estate detail pages, are private routes accessible only to logged-in users.
- **Real Estate Listings**: The homepage displays six real estate listings to all website visitors, providing a glimpse of available properties.
- **404 Error Page**: A custom 404 error page is implemented to enhance user experience when encountering page not found errors.
- **Dynamic Title**: Each page of the website dynamically updates its title using React Helmet, providing a more informative and engaging browsing experience.
- **Smooth Animations**: Animations are incorporated throughout the website using the AOS (Animate On Scroll) package, providing a visually appealing user experience.
- **Dynamic Slider**: The website utilizes the Swiper slider package to create dynamic and interactive sliders for showcasing property images and other content.
- **For You Section**: Logged-in users have access to a special "For You" section where they can receive exclusive coupons and discounts for selected properties.

## npm Packages Used

- [aos](https://www.npmjs.com/package/aos): AOS (Animate On Scroll) is used to animate elements as they scroll into view, enhancing the website's visual appeal.
- [animate.css](https://www.npmjs.com/package/animate.css): The Animate.css library provides a collection of CSS animations to add visual effects to elements on the website.
- [swiper](https://www.npmjs.com/package/swiper): Swiper is a modern mobile touch slider with hardware-accelerated transitions and customizable features. It is used to create dynamic sliders for showcasing property images and other content.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:
- Node.js (v14.x or higher)
- npm (v6.x or higher) or yarn (v1.x or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ShopnilIsCoding/PremierResX.git
   cd PremierResX
2. Install dependencies:
   ```bash
   npm install
3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Add a web app to your Firebase project.
   - Copy your Firebase configuration details and create a `.env` file in the root directory with the following content:
     ```plaintext
     VITE_FIREBASE_API_KEY=your_api_key
     VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VITE_FIREBASE_PROJECT_ID=your_project_id
     VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     VITE_FIREBASE_APP_ID=your_app_id
     ```
4. Run the development server:
   ```bash
   npm run dev
5. Build for production:
   ```bash
   npm run build
