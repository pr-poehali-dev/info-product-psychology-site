import Icon from '@/components/ui/icon';

const chapters = [
  {
    icon: 'Brain',
    tag: 'Psychology',
    title: 'The Secret Architecture of Wealth',
    content: [
      'Every financial outcome in your life starts as a thought. The way you relate to money — whether you see it as scarce or abundant — is a deeply programmed belief, not a fact.',
      'Wealthy people don\'t just "work harder." They think differently. They see opportunities where others see obstacles. They treat money as a tool, not a goal.',
      'The first step is identifying your money scripts — the unconscious stories you inherited from family, society, and past experiences. Once you see them clearly, you can rewrite them.',
    ],
  },
  {
    icon: 'TrendingUp',
    tag: 'Income',
    title: 'Building an Income System That Works',
    content: [
      'Most people trade time for money. The wealthy build systems that generate income even when they\'re not working. The difference isn\'t luck — it\'s architecture.',
      'Start by mastering one income stream completely before diversifying. Focus beats fragmentation every time. Whether it\'s a skill, a product, or a service — go deep before going wide.',
      'Track your income daily. What gets measured gets managed. Small consistent numbers compound into life-changing wealth over time.',
    ],
  },
  {
    icon: 'Wind',
    tag: 'Stress',
    title: 'How to Handle Stress Without Breaking',
    content: [
      'Stress is not the enemy. Chronic, unmanaged stress is. High performers use stress as a signal — a message from the body that something needs attention.',
      'The 3-step reset: (1) Name the emotion — "I feel overwhelmed" not "everything is falling apart." (2) Breathe — 4 seconds in, 6 seconds out, repeat 5 times. (3) Act on what you can control right now.',
      'Build a stress buffer routine: 20 minutes of movement, 7–9 hours of sleep, and one true rest period per week. These aren\'t luxuries — they are performance tools.',
    ],
  },
  {
    icon: 'RefreshCw',
    tag: 'Failure',
    title: 'Accepting Failure Like a Pro',
    content: [
      'Failure is not the opposite of success. It\'s part of the path. Every significant achievement has a graveyard of failed attempts behind it — the difference is the person kept going.',
      'After every failure, ask three questions: What exactly went wrong? What would I do differently? What did this teach me that I couldn\'t have learned any other way?',
      'Detach your identity from your results. You are not your failures. You are the person who chooses what to do after them. That choice defines everything.',
    ],
  },
  {
    icon: 'Target',
    tag: 'Focus',
    title: 'The Art of Deep Focus',
    content: [
      'Attention is your most valuable resource. Every notification, every context switch, every open loop in your mind drains the cognitive capital you need to produce great work.',
      'Work in 90-minute focused blocks with full phone away. Your brain\'s ultradian rhythm is designed for this. After each block — 15 minutes of real rest, not scrolling.',
      'Eliminate before you optimize. The most productive thing is often deciding what not to do. Protect your focus like it\'s money, because it creates money.',
    ],
  },
  {
    icon: 'Heart',
    tag: 'Mindset',
    title: 'The Emotional Foundation of Success',
    content: [
      'Emotional intelligence outperforms IQ in predicting long-term success. The ability to read your emotional states and respond — not react — is a trainable skill.',
      'Practice the daily emotional audit: morning — "what do I need today?" Evening — "what am I proud of today, and what can I learn from today?" These two questions rewire your relationship with yourself.',
      'Gratitude is not a soft practice. Neuroscience shows it literally shifts your brain from threat-detection mode to opportunity-detection mode. Three specific gratitudes per day. Specific — not general.',
    ],
  },
  {
    icon: 'Compass',
    tag: 'Purpose',
    title: 'Finding Your Wealth Why',
    content: [
      'Motivation that relies on willpower runs out. Motivation rooted in purpose is self-renewing. If you know exactly why you want to build wealth — who it protects, what it enables, what it means — you become unstoppable.',
      'Write your wealth statement: "I am building financial freedom so that I can _____, which matters because _____." Read it every morning for 30 days.',
      'Purpose-driven earners outperform goal-driven earners because goals end. Purpose doesn\'t. When you hit the target, purpose gives you a new one automatically.',
    ],
  },
  {
    icon: 'Users',
    tag: 'Network',
    title: 'Your Network is Your Net Worth',
    content: [
      'You are the average of the five people you spend the most time with. Not as a cliché — as a neurological fact. Mirror neurons make us mirror those around us.',
      'Audit your circle. Who elevates your thinking? Who drains it? This isn\'t about cutting people off — it\'s about being intentional about who gets your most valuable resource: time.',
      'Give before you take. The most powerful networkers are relentless givers. They introduce people, share opportunities, and celebrate others\' wins. This creates a magnetic reputation that money can\'t buy.',
    ],
  },
];

const Secrets = () => {
  return (
    <main className="min-h-screen bg-[#FAFAF7] font-body text-[#1a1a18]">
      {/* Header */}
      <header className="border-b border-[#ebe8e0] bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="font-display text-lg text-[#1a1a18]">Psychology of Money</span>
          <div className="flex items-center gap-2 text-sm text-[#6b7a4a] font-medium">
            <Icon name="BookOpen" size={16} />
            Full Access · {chapters.length} Chapters
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 bg-[#e8f0d8] border border-[#c8d8a8] rounded-full px-4 py-1.5 text-sm text-[#6b7a4a] tracking-wide mb-8">
          <Icon name="Unlock" size={14} />
          You have full access — congratulations
        </div>
        <h1 className="font-display text-5xl md:text-6xl font-light leading-[1.1] text-[#1a1a18] mb-6">
          The Secrets of Psychology<br />
          <em className="not-italic text-[#6b7a4a]">& Wealth</em>
        </h1>
        <p className="text-lg text-[#5a5850] leading-relaxed max-w-2xl mx-auto">
          Eight deep chapters on the mental frameworks behind financial success. Read at your own pace. Apply what resonates. Return whenever you need a reset.
        </p>

        <div className="flex items-center justify-center gap-8 mt-10 text-sm text-[#7a7060]">
          <div className="flex items-center gap-2">
            <Icon name="Clock" size={15} />
            ~45 min read
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Layers" size={15} />
            8 chapters
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Infinity" size={15} />
            Lifetime access
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-[#ddd8cc] to-transparent" />
      </div>

      {/* Chapters */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        {chapters.map((ch, i) => (
          <article key={i} className="group">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-[#f5f2ea] group-hover:bg-[#e8f0d8] transition-colors duration-300 flex items-center justify-center mt-1">
                <Icon name={ch.icon} fallback="Star" size={20} className="text-[#6b7a4a]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-[#6b7a4a] tracking-widest uppercase bg-[#e8f0d8] px-3 py-1 rounded-full">
                    {ch.tag}
                  </span>
                  <span className="text-xs text-[#aaa498]">Chapter {i + 1}</span>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-light text-[#1a1a18] mb-6 leading-tight">
                  {ch.title}
                </h2>
                <div className="space-y-4">
                  {ch.content.map((para, j) => (
                    <p key={j} className="text-[#5a5850] leading-relaxed text-base">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {i < chapters.length - 1 && (
              <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#e8e4d8] to-transparent" />
            )}
          </article>
        ))}
      </section>

      {/* Final CTA */}
      <section className="bg-[#1a1a18] text-[#fafaf7] mt-8">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-[#6b7a4a] flex items-center justify-center mx-auto">
            <Icon name="CheckCircle" size={24} className="text-white" />
          </div>
          <h2 className="font-display text-4xl font-light leading-tight">
            You now have the tools.<br />
            <em className="not-italic text-[#a8b87a]">The rest is up to you.</em>
          </h2>
          <p className="text-[#a09880] text-base max-w-xl mx-auto leading-relaxed">
            Knowledge without action is just entertainment. Pick one insight from today and apply it before you sleep. That's how transformation begins.
          </p>
          <div className="flex items-center justify-center gap-2 text-[#6b7a4a] text-sm font-medium pt-2">
            <Icon name="Star" size={14} />
            Psychology of Money · Full Access
            <Icon name="Star" size={14} />
          </div>
        </div>
      </section>

      <footer className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-[#9a9580]">
        <span className="font-display text-base text-[#1a1a18]">Psychology of Money</span>
        <span>© 2026 · All rights reserved</span>
      </footer>
    </main>
  );
};

export default Secrets;
