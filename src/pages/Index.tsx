import { useState } from 'react';
import Icon from '@/components/ui/icon';

const WALLET = 'TQqLxdMJZ1h1Bcg1QyHumLjKFiqf6NTy6q';
const CREATE_INVOICE_URL = 'https://functions.poehali.dev/d2121a58-32e9-4ca4-82e3-56a7a24d6d37';

const advantages = [
  {
    icon: 'Brain',
    title: 'Wealth Psychology',
    desc: 'Uncover the hidden beliefs blocking your income. Change your mindset — change your results.',
  },
  {
    icon: 'TrendingUp',
    title: 'Income System',
    desc: 'Concrete strategies that work in real-world conditions. No fluff, no filler — just what works.',
  },
  {
    icon: 'Zap',
    title: 'Fast Results',
    desc: 'See real shifts in your mindset and earnings within just 2 weeks of applying the material.',
  },
  {
    icon: 'Shield',
    title: 'Battle-Tested',
    desc: 'Methods built from real-world experience. Not academic theory — practical tools that deliver.',
  },
  {
    icon: 'BookOpen',
    title: 'Clear & Deep',
    desc: 'Complex concepts explained in plain language. Easy to read, built to stick for life.',
  },
  {
    icon: 'Infinity',
    title: 'Yours Forever',
    desc: 'Buy once, keep forever. Return to the material whenever you need a breakthrough.',
  },
];

const Index = () => {
  const [loading, setLoading] = useState(false);

  const handlePay = async () => {
    setLoading(true);
    try {
      const res = await fetch(CREATE_INVOICE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ origin: window.location.origin }),
      });
      const data = await res.json();
      if (data.pay_url) {
        window.location.href = data.pay_url;
      } else {
        alert('Payment service error. Please try again.');
      }
    } catch {
      alert('Connection error. Please try again.');
    } finally {
      setLoading(false);
    }
  };


  return (
    <main className="min-h-screen bg-[#FAFAF7] font-body text-[#1a1a18]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[60vw] h-[60vw] max-w-[700px] max-h-[700px] rounded-full bg-[#e8e4d9] opacity-40 blur-3xl translate-x-1/3 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[400px] rounded-full bg-[#d4d8c8] opacity-30 blur-3xl -translate-x-1/4 translate-y-1/3" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <div className="inline-flex items-center gap-2 bg-[#f0ede4] border border-[#ddd8cc] rounded-full px-4 py-1.5 text-sm text-[#7a7060] tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8a9a6a] inline-block" />
              Info Product · Psychology & Wealth
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-[#1a1a18]">
              Money starts<br />
              <em className="not-italic text-[#6b7a4a]">in your mind</em>
            </h1>

            <p className="text-lg text-[#5a5850] leading-relaxed max-w-md">
              A practical guide that bridges psychology and finance. Discover why some people earn more with the same effort — and how to become one of them.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button
                onClick={handlePay}
                disabled={loading}
                className="group flex items-center gap-3 bg-[#1a1a18] text-[#fafaf7] px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:bg-[#3a3a2a] hover:scale-105 hover:shadow-xl disabled:opacity-70 disabled:cursor-wait"
              >
                {loading ? 'Loading...' : 'Get Access — $20'}
                {!loading && <Icon name="ArrowRight" size={18} className="transition-transform group-hover:translate-x-1" />}
              </button>
              <div className="flex items-center gap-2 text-sm text-[#7a7060] pt-3 sm:pt-4">
                <Icon name="Lock" size={14} />
                Secure crypto payment
              </div>
            </div>
          </div>

          <div
            className="relative animate-fade-in"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#1a1a18]/10">
              <img
                src="https://cdn.poehali.dev/projects/eadae3c9-50c3-4106-a21f-6b1ab6575ba6/files/63b06701-47d2-424a-996a-64c31eda34bd.jpg"
                alt="Psychology and Money"
                className="w-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a18]/20 to-transparent" />
            </div>

            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg px-5 py-4 border border-[#eee]">
              <div className="text-2xl font-display font-light text-[#1a1a18]">2 weeks</div>
              <div className="text-xs text-[#7a7060] mt-0.5">to first results</div>
            </div>

            <div className="absolute -top-4 -right-4 bg-[#6b7a4a] text-white rounded-2xl shadow-lg px-5 py-3">
              <div className="text-xs font-medium opacity-80">Access</div>
              <div className="text-base font-semibold">Forever</div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#ddd8cc] to-transparent" />
      </div>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-display text-4xl md:text-5xl font-light text-[#1a1a18]">
            What's inside?
          </h2>
          <p className="text-[#5a5850] text-lg leading-relaxed">
            A complete guide to financial thinking: from diagnosing limiting beliefs to building a system of sustainable income. Psychology, strategy, and practice — all in one place.
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="mb-12">
          <span className="text-sm text-[#7a7060] tracking-widest uppercase font-medium">Why it works</span>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <div
              key={i}
              className="group bg-white border border-[#ebe8e0] rounded-2xl p-7 hover:shadow-lg hover:shadow-[#1a1a18]/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#f5f2ea] flex items-center justify-center mb-5 group-hover:bg-[#e8f0d8] transition-colors duration-300">
                <Icon name={item.icon} fallback="Star" size={20} className="text-[#6b7a4a]" />
              </div>
              <h3 className="font-display text-xl font-medium text-[#1a1a18] mb-2">
                {item.title}
              </h3>
              <p className="text-[#6a6858] text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-[#f5f2ea] border border-[#e0dbd0] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-3 max-w-lg">
            <span className="text-xs text-[#6b7a4a] tracking-widest uppercase font-medium">One-time payment</span>
            <h2 className="font-display text-4xl md:text-5xl font-light text-[#1a1a18] leading-tight">
              Full access.<br />No subscriptions.
            </h2>
            <ul className="space-y-2 pt-2">
              {['8 in-depth chapters', 'Real-world examples', 'Lifetime access', 'Instant delivery after payment'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[#5a5850] text-sm">
                  <Icon name="Check" size={15} className="text-[#6b7a4a] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center gap-5 min-w-[220px]">
            <div className="text-center">
              <div className="font-display text-6xl font-light text-[#1a1a18]">$20</div>
              <div className="text-sm text-[#7a7060] mt-1">one-time · crypto payment</div>
            </div>
            <button
              onClick={handlePay}
              disabled={loading}
              className="group w-full flex items-center justify-center gap-3 bg-[#1a1a18] text-[#fafaf7] px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:bg-[#3a3a2a] hover:scale-105 hover:shadow-xl disabled:opacity-70 disabled:cursor-wait"
            >
              {loading ? 'Loading...' : 'Buy Now — $20'}
              {!loading && <Icon name="ArrowRight" size={18} className="transition-transform group-hover:translate-x-1" />}
            </button>
            <p className="text-xs text-[#9a9080] text-center">
              Secure crypto payment via CryptoCloud
            </p>
          </div>
        </div>
      </section>

      {/* Dark CTA */}
      <section className="bg-[#1a1a18] text-[#fafaf7]">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-lg">
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
              Ready to rewire your<br />
              <em className="not-italic text-[#a8b87a]">financial mindset?</em>
            </h2>
            <p className="text-[#a09880] text-base leading-relaxed">
              Pay $20 once — get lifetime access instantly. Secure crypto payment powered by CryptoCloud.
            </p>
            <div className="flex items-center gap-2 bg-[#2a2a20] rounded-xl px-4 py-3 text-sm font-mono text-[#c8c0a8] break-all select-all">
              <Icon name="Wallet" size={14} className="text-[#a8b87a] flex-shrink-0" />
              {WALLET}
            </div>
          </div>

          <div className="flex flex-col gap-4 min-w-[260px] w-full md:w-auto">
            <div className="text-center mb-1">
              <span className="font-display text-4xl font-light text-[#fafaf7]">$20</span>
              <span className="text-[#6a6050] text-sm ml-2">one-time</span>
            </div>
            <button
              onClick={handlePay}
              disabled={loading}
              className="group flex items-center justify-center gap-3 bg-[#fafaf7] text-[#1a1a18] px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:bg-[#a8b87a] hover:scale-105 hover:shadow-xl disabled:opacity-70 disabled:cursor-wait"
            >
              {loading ? 'Loading...' : 'Pay $20 Now'}
              {!loading && <Icon name="ArrowRight" size={18} className="transition-transform group-hover:translate-x-1" />}
            </button>
            <p className="text-xs text-[#6a6050] text-center">
              All major cryptocurrencies accepted
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-[#9a9580]">
        <span className="font-display text-base text-[#1a1a18]">Psychology of Money</span>
        <span>© 2026 · All rights reserved</span>
      </footer>
    </main>
  );
};

export default Index;