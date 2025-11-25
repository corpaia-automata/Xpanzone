import React, { useState } from "react";
import PackageComparison from "./utils/PackageComparison";

const Packages = () => {
  const [isLifetime, setIsLifetime] = useState(false);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#dbead3] to-[#b7d9a7] text-center py-24 px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-[#20361c] mb-6 leading-tight mt-5">
          Choose Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#20361c] to-[#74a76c]">
            Transformation Journey
          </span>
        </h2>
        <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto font-medium mb-8">
          Whether you want quick results or deep transformation, we have a program designed for your lifestyle and goals.
        </p>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center gap-4 text-white text-sm md:text-base">
          <span className={!isLifetime ? "font-semibold text-[#20361c]" : ""}>28-Day Access</span>
          <button
            onClick={() => setIsLifetime(!isLifetime)}
            className={`w-12 h-6 rounded-full flex items-center px-1 ${isLifetime ? "bg-green-500" : "bg-gray-400"
              } transition`}
          >
            <span
              className={`w-4 h-4 bg-white rounded-full transform transition ${isLifetime ? "translate-x-6" : ""
                }`}
            />
          </button>
          <span className={isLifetime ? "font-semibold text-[#20361c]" : ""}>Lifetime Access</span>
        </div>
      </section>

      <section className=" py-20 px-6 text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Individual Programs</h3>
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-16">
          Transform your personal environment and habits with our proven system.
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">

          {/* 12-Week Year Program */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-left relative border-2 border-green-500">
            <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-tr-xl rounded-bl-xl">
              Most Popular
            </div>
            <h4 className="text-3xl font-bold text-[#20361c] mb-1">12-Week Year Program</h4>
            <p className="text-green-600 font-semibold mb-4">Complete Life Transformation</p>
            <p className="text-gray-600 mb-6">
              A complete life optimization program designed to help you master your habits, productivity, and personal growth over 12 weeks.
            </p>
            <div className="text-4xl font-bold text-[#20361c] mb-1">$497</div>
            <div className="text-gray-500 mb-6">12 weeks</div>

            <h5 className="text-lg font-semibold text-[#20361c] mb-3">Includes:</h5>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>✔️ Full 7 Modes implementation guide</li>
              <li>✔️ Weekly coaching calls & accountability</li>
              <li>✔️ Personalized space assessments</li>
              <li>✔️ Habit tracking dashboard & progress tools</li>
              <li>✔️ Access to exclusive community forum</li>
              <li>✔️ Lifetime access to materials & updates</li>
              <li>✔️ Complete 12-Week Execution Framework</li>
            </ul>

            <h5 className="font-semibold text-[#20361c] mb-1">Best for:</h5>
            <p className="text-gray-600 mb-6">Professionals, entrepreneurs & growth-minded individuals seeking complete lifestyle transformation.</p>

            <button className="bg-[#20361c] text-white px-6 py-2 rounded-lg hover:bg-[#172a15] transition font-medium text-lg">
              Get Started
            </button>
          </div>

          {/* 28-Day Transformation */}
          <div className="bg-white rounded-2xl shadow-xl p-8 text-left relative border border-gray-200">
            <div className="absolute top-0 right-0 bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-tr-xl rounded-bl-xl">
              Best for Beginners
            </div>
            <h4 className="text-3xl font-bold text-[#20361c] mb-1">28-Day Transformation</h4>
            <p className="text-green-600 font-semibold mb-4">Quick Start Program</p>
            <p className="text-gray-600 mb-6">
              A focused 4-week program designed for busy individuals to kickstart structured, sustainable productivity and habit change.
            </p>
            <div className="text-4xl font-bold text-[#20361c] mb-1">$197</div>
            <div className="text-gray-500 mb-6">28 days</div>

            <h5 className="text-lg font-semibold text-[#20361c] mb-3">Includes:</h5>
            <ul className="space-y-2 text-gray-700 mb-4">
              <li>✔️ 4-Week Habit Installation Framework</li>
              <li>✔️ 3 Core Priority Modes Setup</li>
              <li>✔️ Printable 28-Day Journal & Tracker</li>
              <li>✔️ Daily Email Guidance & Prompts</li>
              <li>✔️ Xpanzone Dashboard Access (Basic)</li>
              <li>✔️ Weekly Reflection Templates</li>
              <li>✔️ Progress Tracking & Metrics Tools</li>
            </ul>

            <h5 className="font-semibold text-[#20361c] mb-1">Best for:</h5>
            <p className="text-gray-600 mb-6">Busy professionals, entrepreneurs, or anyone ready for a structured, short-term habit breakthrough.</p>

            <button className="border border-[#20361c] text-[#20361c] px-6 py-2 rounded-lg hover:bg-[#20361c] hover:text-white transition font-medium text-lg">
              Get Started
            </button>
          </div>

        </div>

        <div className="mt-5">

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
            {/* Xpanzone Weekly Mastery */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-left relative border-2 border-green-500">
              <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-tr-xl rounded-bl-xl">
                Recommended
              </div>
              <h4 className="text-3xl font-bold text-[#20361c] mb-1">Xpanzone Weekly Mastery</h4>
              <p className="text-green-600 font-semibold mb-4">7-Day Productivity Framework</p>
              <p className="text-gray-600 mb-6">
                A complete week-by-week plan to optimize your living environment,
                embed productive habits, and maintain consistent balance throughout the week.
              </p>
              <div className="text-4xl font-bold text-[#20361c] mb-1">$97</div>
              <div className="text-gray-500 mb-6">One-time payment</div>

              <h5 className="text-lg font-semibold text-[#20361c] mb-3">Includes:</h5>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>✔️ 7-Day Optimized Routine Guide (PDF + Interactive)</li>
                <li>✔️ Daily Habit Checklist (Printable & Digital)</li>
                <li>✔️ 5S Environmental Reset Framework</li>
                <li>✔️ Weekly Reflection Worksheets</li>
                <li>✔️ Sunday Planning Template (Printable)</li>
                <li>✔️ Lifetime access to Xpanzone Dashboard (Basic)</li>
                <li>✔️ Bonus: “Atomic Habits Integration Guide”</li>
              </ul>

              <h5 className="font-semibold text-[#20361c] mb-1">Best for:</h5>
              <p className="text-gray-600 mb-6">
                Professionals, remote workers, and growth-seekers who want balance,
                clarity, and consistent productivity throughout their week.
              </p>

              <button className="bg-[#20361c] text-white px-6 py-2 rounded-lg hover:bg-[#172a15] transition font-medium text-lg">
                Get Started
              </button>
            </div>

            {/* Xpanzone Daily Blueprint */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-left relative border border-gray-200">
              <div className="absolute top-0 right-0 bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded-tr-xl rounded-bl-xl">
                Perfect Daily Routine
              </div>
              <h4 className="text-3xl font-bold text-[#20361c] mb-1">Xpanzone Daily Blueprint</h4>
              <p className="text-green-600 font-semibold mb-4">Daily Optimization System</p>
              <p className="text-gray-600 mb-6">
                Build unstoppable momentum with a fully-optimized daily schedule
                for energy, focus, creativity, and rest—designed to help you perform at your best, every single day.
              </p>
              <div className="text-4xl font-bold text-[#20361c] mb-1">$47</div>
              <div className="text-gray-500 mb-6">One-time payment</div>

              <h5 className="text-lg font-semibold text-[#20361c] mb-3">Includes:</h5>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>✔️ Morning Ritual Guide (PDF + Video)</li>
                <li>✔️ Pomodoro Productivity Tracker (Digital Tool)</li>
                <li>✔️ Guided Journaling Prompts (AM/PM)</li>
                <li>✔️ Evening Reset Checklist</li>
                <li>✔️ Printable “Perfect Day” Template</li>
                <li>✔️ Daily 5S Environment Reset System</li>
                <li>✔️ Bonus: 3 Guided Breathwork Audio Files</li>
              </ul>

              <h5 className="font-semibold text-[#20361c] mb-1">Best for:</h5>
              <p className="text-gray-600 mb-6">
                Busy entrepreneurs, professionals, and high-performers
                who want to optimize their mornings, structure their work, and build healthier habits.
              </p>

              <button className="border border-[#20361c] text-[#20361c] px-6 py-2 rounded-lg hover:bg-[#20361c] hover:text-white transition font-medium text-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <section className=" py-20 px-6 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Business & Group Packages
          </h3>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mb-16">
            Bring environmental wellness to your workplace and see measurable improvements in
            productivity and employee satisfaction.
          </p>

          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto">
            {/* Team Wellness Package */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-left border border-gray-300">
              <h4 className="text-3xl font-bold text-[#20361c] mb-1">Team Wellness</h4>
              <p className="text-green-600 font-semibold mb-4">For Small Teams (5–20 people)</p>
              <p className="text-gray-600 mb-6">
                Implement workplace wellness through environmental design.
              </p>
              <div className="text-4xl font-bold text-[#20361c] mb-1">$2,997</div>
              <div className="text-gray-500 mb-6">One-time payment</div>

              <h5 className="text-lg font-semibold text-[#20361c] mb-3">Package includes:</h5>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✔️ Team workshop (4 hours)</li>
                <li>✔️ Workspace assessment</li>
                <li>✔️ Implementation guides for each team member</li>
                <li>✔️ Manager training materials</li>
                <li>✔️ 3 months of support</li>
              </ul>

              <button className="bg-[#20361c] text-white px-6 py-2 rounded-lg hover:bg-[#172a15] transition font-medium text-lg">
                Book Package
              </button>
            </div>

            {/* Enterprise Solution Package */}
            <div className="bg-white rounded-2xl shadow-xl p-8 text-left border border-gray-300">
              <h4 className="text-3xl font-bold text-[#20361c] mb-1">Enterprise Solution</h4>
              <p className="text-green-600 font-semibold mb-4">For Organizations (20+ people)</p>
              <p className="text-gray-600 mb-6">
                Comprehensive workplace transformation program.
              </p>
              <div className="text-4xl font-bold text-[#20361c] mb-1">Custom pricing</div>
              <div className="text-gray-500 mb-6">Based on requirements</div>

              <h5 className="text-lg font-semibold text-[#20361c] mb-3">Package includes:</h5>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>✔️ Full workplace assessment</li>
                <li>✔️ Custom mode design for your industry</li>
                <li>✔️ Employee training program</li>
                <li>✔️ Leadership workshops</li>
                <li>✔️ Ongoing consultation</li>
                <li>✔️ ROI measurement tools</li>
              </ul>

              <button className="border border-[#20361c] text-[#20361c] px-6 py-2 rounded-lg hover:bg-[#20361c] hover:text-white transition font-medium text-lg">
                Request Proposal
              </button>
            </div>
          </div>
        </section>
      </section>

      <div>
        <PackageComparison />
      </div>

      <section
        className="text-center py-24 px-4"
        style={{
          backgroundImage: `
      linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(240, 210, 120, 0.8)),
      url('/your-textured-yellow-bg.png')
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >


        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight mt-5">
          Ready to Transform Your Environment?
        </h2>
        <p className="text-lg md:text-xl text-black max-w-2xl mx-auto font-medium mb-8">
          Join thousands of people who have discovered the power of environmental design for lasting wellness.
        </p>

        {/* Toggle Switch */}
        <div className="flex justify-center items-center gap-4 text-white text-sm md:text-base">
          <button className="border border-white text-white px-6 py-2 rounded-2xl bg-yellow-300 hover:text-white transition font-medium text-lg">
            Start Free Assesment
          </button>
          <button className="border border-white text-white px-6 py-2 rounded-2xl hover:text-white transition font-medium text-lg">
            Talk to Our Team
          </button>
        </div>
      </section>

    </div >
  );
};

export default Packages;
