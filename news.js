document.addEventListener("DOMContentLoaded", function () {
    const newsList = document.getElementById("news-list");

    // Sample news data
    const newsData = [
        { title: "New Gym Equipment Arrived", date: "May 1, 2024", content: "We're thrilled to announce the arrival of our latest gym equipment! Our facility has been upgraded with a range of new machines and tools to enhance your workout experience. From state-of-the-art cardio machines like treadmills and ellipticals to a variety of strength training gear including free weights and machines, there's something for everyone. We've also added functional training equipment like medicine balls and resistance bands to spice up your routine." },
        { title: "Special Offer: Free Consultation", date: "April 25, 2024", content: "Ready to take your fitness to the next level? We're offering a complimentary consultation with one of our expert trainers to help you get started on your fitness journey. Whether you're looking to lose weight, build muscle, or simply improve your overall health, our team is here to support you every step of the way. Don't miss out on this opportunity to get personalized advice and guidance tailored to your specific goals. Book your free consultation now and let's make your fitness dreams a reality!" },
        { title: "Yoga Classes Added to Schedule", date: "April 20, 2024", content: "We're thrilled to announce the addition of yoga classes to our schedule! Take your fitness journey to new heights with our relaxing and invigorating yoga sessions. Whether you're a beginner or an experienced yogi, our classes cater to all levels and provide a perfect balance of strength, flexibility, and mindfulness. Join us for a rejuvenating experience that will leave you feeling refreshed and energized. Check out our schedule and book your spot today!" }
    ];

    // Function to display news
    function displayNews() {
        newsList.innerHTML = "";
        newsData.forEach((item) => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("news-item");
            newsItem.innerHTML = `
                <h3 class="news-title">${item.title}</h3>
                <p class="news-date">${item.date}</p>
                <p class="news-content">${item.content}</p>
            `;
            newsList.appendChild(newsItem);
        });
    }

    // Call displayNews function
    displayNews();
});
