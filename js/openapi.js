        const wonderSelect = document.querySelector("#wonderSelect");

        const wonderData = {
            "Amazon Rainforest": {
                country: "Brazil",
                description: "The Amazon Rainforest is the largest tropical rainforest in the world, covering much of South America. It is home to millions of plant and animal species and plays a vital role in regulating the Earth's climate.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Amazon17_%285641020319%29.jpg/1920px-Amazon17_%285641020319%29.jpg"
            },

            "Ha Long Bay": {
                country: "Vietnam",
                description: "Ha Long Bay is a stunning natural wonder in Vietnam known for its emerald waters and thousands of limestone islands topped with lush vegetation. It is a UNESCO World Heritage Site and a popular tourist destination.",
                image: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Limestone_Cliffs-Halong_Bay_Vietnam-Andres_Larin.jpg"
            },

            "Jeju Island": {
                country: "South Korea",
                description: "Jeju Island is a volcanic island in South Korea famous for its beautiful beaches, lava tubes, waterfalls, and Hallasan Mountain, the country's highest peak.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Seongsan_Ilchulbong_from_the_air.jpg/1280px-Seongsan_Ilchulbong_from_the_air.jpg"
            },

            "Komodo National Park": {
                country: "Indonesia",
                description: "Komodo National Park in Indonesia is best known as the home of the Komodo dragon, the world's largest lizard. The park also features diverse marine life, coral reefs, and scenic islands.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Kanawa_Island.jpg/1920px-Kanawa_Island.jpg"
            },

            "Puerto Princesa Subterranean River National Park": {
                country: "Philippines",
                description: "Located in the Philippines, this natural wonder features one of the world's longest navigable underground rivers. Visitors can explore its impressive cave system and unique rock formations.",
                image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/PUERTO_PRINCESA_UNDERGROUND_RIVER.jpg"
            },

            "Table Mountain": {
                country: "South Africa",
                description: "Table Mountain is a flat-topped mountain overlooking Cape Town, South Africa. It is renowned for its unique biodiversity, panoramic views, and distinctive shape.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Table_Mountain_DanieVDM.jpg/1280px-Table_Mountain_DanieVDM.jpg"
            },

            "Iguazu Falls": {
                country: "Argentina",
                description: "Iguazu Falls is one of the largest waterfall systems in the world, located on the border of Argentina and Brazil. Its hundreds of cascading waterfalls create a breathtaking natural spectacle.",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Iguazu_Falls_Brazilian_Side_2019.jpg/1920px-Iguazu_Falls_Brazilian_Side_2019.jpg"
            }
        };

           /* Endpoint 1 */ 

            document.querySelector("#country").addEventListener("click", async () => {

                const wonder = wonderSelect.value;

                if (!wonder) {
                    alert("Please select a wonder.")
                    return;
                }

                const country = wonderData[wonder].country;

                try {

                    document.querySelector("#resultValue").textContent = "Loading...";

                    const response = await fetch(
                        `https://restcountries.com/v3.1/name/${country}`
                    );

                    const data = await response.json();

                    document.querySelector("#wonderName").textContent = wonder;

                    document.querySelector("#resultValue").textContent =
                        `Country: ${data[0].name.common}`;

                    document.querySelector("#result").style.display = "block";

                    const map = document.querySelector("#map");
                    map.style.display = "block";
                    map.src = `https://www.google.com/maps?q=${country}&output=embed`;

                    document.querySelector("#wonderImage").style.display = "none";

                    document.querySelector("#result").style.display = "block";

                } catch (error) {
                    console.error(error);

                    document.querySelector("#resultValue").textContent =
                        "Unable to load country information";
                }
            });


            /* Endpoint 2 */

            document.querySelector("#description").addEventListener("click", () => {

                const wonder = wonderSelect.value;

                if (!wonder) {
                    alert("Please select a wonder.");
                    return;
                }

                document.querySelector("#wonderName").textContent = wonder;

                document.querySelector("#resultValue").textContent =
                    wonderData[wonder].description;

                const image = document.querySelector("#wonderImage");
                image.style.display = "block";
                image.src = wonderData[wonder].image;

                document.querySelector("#map").style.display = "none";

                document.querySelector("#result").style.display = "block";
            });






             