/**
 * ExitZero Landing Page
 * AI-native retention infrastructure for SaaS companies
 */

'use client';

import { useState } from 'react';
import { 
  CheckIcon, 
  ArrowRightIcon,
  ChartBarIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  BoltIcon,
  StarIcon,
  PlayIcon
} from '@heroicons/react/24/outline';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showAuditForm, setShowAuditForm] = useState(false);

  const handleAuditRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // This would integrate with Stripe for the $99 payment
      const response = await fetch('/api/churn-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      const result = await response.json();
      
      if (response.ok) {
        alert('Audit request submitted! Check your email for results within 24 hours.');
        setEmail('');
        setShowAuditForm(false);
      } else {
        alert('Failed to submit audit request. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: CpuChipIcon,
      title: 'AI-Powered Copy',
      description: 'Claude & GPT-4 generate personalized retention messages based on user sentiment and behavior.'
    },
    {
      icon: ChartBarIcon,
      title: 'Q-Learning Optimization',
      description: 'Reinforcement learning automatically optimizes offer selection for maximum save rate.'
    },
    {
      icon: BoltIcon,
      title: '<100ms Response',
      description: 'Lightning-fast cancel intent detection with sub-100ms API response times.'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Data Ownership',
      description: 'Full SQL exports ensure you own your data. No vendor lock-in, ever.'
    }
  ];

  const testimonials = [
    {
      name: 'Alex Chen',
      company: 'SaaSify',
      quote: 'ExitZero increased our save rate by 12pp in just 30 days. The AI copy feels incredibly personal.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'DataFlow',
      quote: 'Finally, a retention tool that doesn\'t take a percentage of our revenue. Flat pricing is a game-changer.',
      rating: 5
    },
    {
      name: 'Mike Rodriguez',
      company: 'CloudBase',
      quote: 'The churn audit revealed insights we never knew existed. Worth every penny of the $99.',
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: 'Growth',
      price: '$399',
      period: '/month',
      description: 'Perfect for growing SaaS companies',
      features: [
        '5 team seats',
        '50K events/month',
        '500K AI tokens',
        'Slack community support',
        'SQL data exports',
        'Basic analytics'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      name: 'Scale',
      price: '$899',
      period: '/month',
      description: 'For established SaaS companies',
      features: [
        '15 team seats',
        '250K events/month',
        '2M AI tokens',
        'Priority support + CSM',
        'Advanced analytics',
        'Custom integrations',
        'A/B testing'
      ],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale operations',
      features: [
        'Unlimited seats',
        'Unlimited events',
        'Unlimited tokens',
        'SOC-2 compliance',
        'SSO integration',
        'Dedicated support',
        'Custom AI models'
      ],
      cta: 'Contact Sales',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">ExitZero</div>
              <div className="ml-2 text-sm text-gray-500">Users exit → Churn = 0</div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowAuditForm(true)}
                className="text-gray-600 hover:text-gray-900"
              >
                Churn Audit ($99)
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            AI-Native Retention Infrastructure
            <span className="block text-blue-600">for SaaS Companies</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Reduce churn with personalized AI offers, Q-learning optimization, and complete data ownership. 
            No revenue sharing, no vendor lock-in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 flex items-center">
              Start Free Trial
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button 
              onClick={() => setShowAuditForm(true)}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-50 flex items-center"
            >
              <PlayIcon className="mr-2 h-5 w-5" />
              Try Churn Audit
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            ✓ 14-day free trial ✓ No credit card required ✓ Cancel anytime
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why ExitZero Wins
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              While competitors stop at templated flows, we go live with AI personalization and reinforcement learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Loved by SaaS Founders
            </h2>
            <p className="text-lg text-gray-600">
              Real results from real companies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Flat Pricing, No Revenue Sharing
            </h2>
            <p className="text-lg text-gray-600">
              Pay once, keep all your data, own your retention strategy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-lg shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-blue-600' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-medium ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Reduce Churn with AI?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join 100+ SaaS companies already using ExitZero to save customers and grow revenue.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-100">
            Start Your Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">ExitZero</div>
              <p className="text-gray-400">
                AI-native retention infrastructure for SaaS companies.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">API Docs</a></li>
                <li><a href="#" className="hover:text-white">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Slack Community</a></li>
                <li><a href="#" className="hover:text-white">Status</a></li>
                <li><a href="#" className="hover:text-white">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ExitZero. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Churn Audit Modal */}
      {showAuditForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Get Your Churn Audit
            </h3>
            <p className="text-gray-600 mb-6">
              Upload your Stripe data and get a comprehensive analysis of your churn patterns, 
              risk segments, and personalized recommendations. Only $99.
            </p>
            
            <form onSubmit={handleAuditRequest}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div className="flex space-x-3">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 disabled:opacity-50"
                >
                  {isLoading ? 'Processing...' : 'Start Audit ($99)'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowAuditForm(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
