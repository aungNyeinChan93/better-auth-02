import { revalidatePath } from "next/cache";
import React from "react";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 container mx-auto">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
          Build beautiful websites{" "}
          <span className="text-indigo-600">faster</span>
        </h1>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          HomePro is a modern toolkit for developers and designers. Create
          landing pages, dashboards, and web apps with ease using prebuilt
          components.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow font-medium">
            Get Started
          </button>
          <button className="px-6 py-3 bg-white text-slate-700 border rounded-xl shadow-sm">
            Learn More
          </button>
        </div>
        <div className="mt-12">
          <img
            src="/next.svg"
            alt="App screenshot"
            className="rounded-2xl shadow-xl mx-auto"
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              title="Fast Development"
              desc="Prebuilt components help you move quickly."
              icon="⚡"
            />
            <FeatureCard
              title="Responsive Design"
              desc="Looks great on all devices out of the box."
              icon="📱"
            />
            <FeatureCard
              title="Customizable"
              desc="Easily extend and style components."
              icon="🎨"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="bg-indigo-600 py-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Join thousands of developers building modern, responsive web apps with
          HomePro today.
        </p>
        <button className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-xl shadow">
          Start Free Trial
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-3">HomePro</h3>
            <p className="text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Product</h4>
            <ul className="space-y-1 text-sm">
              <li>Features</li>
              <li>Pricing</li>
              <li>Updates</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">Support</h4>
            <ul className="space-y-1 text-sm">
              <li>Help Center</li>
              <li>Contact</li>
              <li>Status</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ title = "", desc = "", icon = "" }) {
  return (
    <div className="p-6 bg-slate-50 rounded-2xl shadow-sm hover:shadow-md transition">
      <div className="text-4xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-600">{desc}</p>
    </div>
  );
}
