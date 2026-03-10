import React from "react";
import { Sidebar } from "../components";
import okk from "../assets/card__decoration_Stress.png";
import okkk from "../assets/card__note-decoration.png";
import "./Home.css";

import moji1 from "../assets/comments__bubble-avatar-1.png";
import moji3 from "../assets/comments__bubble-avatar-2.png";
import moji5 from "../assets/comments__bubble-avatar-3.png";
import moji6 from "../assets/comments__bubble-avatar-4.png";

function Home() {
  return (
    <div className="flex bg-gray-50 min-h-screen">

      {/* SIDEBAR */}
      <div className="h-screen sticky top-0">
        <Sidebar />
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 max-w-6xl mx-auto px-8 pt-6 pb-10">

        {/* HERO */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h1 className="text-4xl font-bold text-gray-800 leading-tight">
                Your mental health kit in the form of
                <span className="text-blue-500"> therapy talks</span>
              </h1>

              <ul className="mt-6 space-y-3 text-gray-600 text-lg">
                <li>• Listen to mental health podcasts.</li>
                <li>• Access guidance from mental health professionals.</li>
                <li>• Join live sessions with doctors and communities.</li>
              </ul>
            </div>

            <div className="flex justify-center">
              <img
                className="w-full max-w-md"
                src="./images/hero__image.svg"
                alt="hero"
              />
            </div>

          </div>
        </section>


        {/* STORIES */}
        <section className="mb-16">

          <h2 className="text-3xl font-bold text-center mb-12">
            Inspirational Stories 💭
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <Story
              avatar={moji1}
              text="Once lost in addiction, I found strength and transformed into a resilient person embracing life again."
            />

            <Story
              avatar={moji3}
              text="From despair I rose like a phoenix. Determination helped me defeat addiction and rebuild my life."
            />

            <Story
              avatar={moji5}
              text="In addiction's prison I discovered a hidden key inside me. Inner strength changed my life."
            />

            <Story
              avatar={moji6}
              text="With courage and hope I bloomed into a radiant life again."
            />

          </div>

        </section>


        {/* RECOMMENDATIONS */}
        <section className="mb-16">

          <h2 className="text-3xl font-bold text-center mb-12">
            Helpful Recommendations
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <TipCard
              title="Order at Work"
              items={[
                "Clear schedule",
                "Detect distractions",
                "Group tasks",
                "Set daily goals"
              ]}
            />

            <TipCard
              title="Pomodoro Technique"
              items={[
                "Divide tasks",
                "Sort by priority",
                "Use timers",
                "Take breaks"
              ]}
              icon={okkk}
            />

            <TipCard
              title="Food Tips"
              items={[
                "Eat fruits & vegetables",
                "Avoid unhealthy fats",
                "Consume Omega-3",
                "Watch your weight"
              ]}
            />

            <TipCard
              title="Best Exercises"
              items={[
                "Cardio workouts",
                "Tai Chi for stress",
                "Yoga for mind",
                "Swimming"
              ]}
            />

            <TipCard
              title="Work Stress"
              items={[
                "Set limits",
                "Ask for help",
                "Disconnect from work",
                "Take care of health"
              ]}
              image={okk}
            />

          </div>

        </section>


        {/* PODCASTS */}
        <section className="pb-16">

          <h2 className="text-3xl font-bold text-center mb-12">
            Mental Health Podcasts 🎧
          </h2>

          <div className="space-y-6 max-w-3xl mx-auto">

            <iframe
  src="https://open.spotify.com/embed/episode/26tJUvD9pJjT8CU4uOLzvT"
  width="100%"
  height="152"
  frameBorder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
  className="rounded-lg shadow"
/>

            <iframe
              src="https://open.spotify.com/embed/episode/4hUBzLOJOWQsdNM6RVLQKc"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              loading="lazy"
              className="rounded-lg shadow"
            />

            <iframe
              src="https://open.spotify.com/embed/episode/4c2XpIR1vlhAgORrIxRrxm"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              loading="lazy"
              className="rounded-lg shadow"
            />

          </div>

        </section>

      </div>
    </div>
  );
}


/* STORY CARD */
function Story({ avatar, text }) {
  return (
    <div className="bg-blue-100 border border-blue-200 rounded-xl p-6 shadow-sm">

      <div className="flex items-center text-blue-600 font-semibold mb-3">
        <img className="h-8 mr-2" src={avatar} alt="" />
        Anonymous
      </div>

      <p className="text-gray-700 text-sm">
        {text}
      </p>

    </div>
  );
}


/* TIP CARD */
function TipCard({ title, items, icon, image }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-between">

      <h3 className="font-semibold text-lg mb-3">{title}</h3>

      {icon && (
        <div className="flex items-center gap-2 mb-2">
          <img src={icon} alt="" className="h-5" />
          <span className="text-sm text-gray-500">Take note</span>
        </div>
      )}

      {image && (
        <img src={image} alt="" className="w-20 mb-3 opacity-70" />
      )}

      <ul className="text-sm text-gray-600 space-y-1">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>

    </div>
  );
}

export default Home;