import Icon from '@/components/ui/icon';

const WALLET = '0xec6da57ce49fe14140050a012c94df329d2ec1d8';

const advantages = [
  {
    icon: 'Brain',
    title: 'Психология богатства',
    desc: 'Разбираешь скрытые убеждения, которые блокируют твой доход. Меняешь мышление — меняется результат.',
  },
  {
    icon: 'TrendingUp',
    title: 'Система заработка',
    desc: 'Конкретные стратегии, которые работают в реальных условиях. Без воды и лишней теории.',
  },
  {
    icon: 'Zap',
    title: 'Быстрый результат',
    desc: 'Первые изменения в мышлении и доходе уже через 2 недели применения материала.',
  },
  {
    icon: 'Shield',
    title: 'Проверено практикой',
    desc: 'Методы прошли путь через реальный опыт. Не академические концепции, а живые инструменты.',
  },
  {
    icon: 'BookOpen',
    title: 'Доступно и глубоко',
    desc: 'Сложные концепции объяснены простым языком. Читается легко, усваивается надолго.',
  },
  {
    icon: 'Infinity',
    title: 'Навсегда твоё',
    desc: 'Один раз получаешь — пользуешься всю жизнь. Возвращаешься к материалу когда нужно.',
  },
];

const Index = () => {
  const handleBuy = () => {
    navigator.clipboard?.writeText(WALLET);
    window.open(`https://etherscan.io/address/${WALLET}`, '_blank');
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
              Инфопродукт · Психология и деньги
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-[#1a1a18]">
              Деньги начинаются<br />
              <em className="not-italic text-[#6b7a4a]">в голове</em>
            </h1>

            <p className="text-lg text-[#5a5850] leading-relaxed max-w-md">
              Практическое руководство, которое объединяет психологию и финансы. Узнай, почему одни зарабатывают больше при тех же усилиях — и как оказаться среди них.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button
                onClick={handleBuy}
                className="group flex items-center gap-3 bg-[#1a1a18] text-[#fafaf7] px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:bg-[#3a3a2a] hover:scale-105 hover:shadow-xl"
              >
                Получить доступ
                <Icon name="ArrowRight" size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <div className="flex items-center gap-2 text-sm text-[#7a7060] pt-3 sm:pt-4">
                <Icon name="Lock" size={14} />
                Безопасная оплата криптовалютой
              </div>
            </div>
          </div>

          <div
            className="relative animate-fade-in"
            style={{ animationDelay: '0.4s', opacity: 0 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#1a1a18]/10">
              <img
                src="https://cdn.poehali.dev/projects/eadae3c9-50c3-4106-a21f-6b1ab6575ba6/files/282054cb-a816-42b3-b996-a32de4503204.jpg"
                alt="Психология и деньги"
                className="w-full object-cover aspect-[4/3]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a18]/20 to-transparent" />
            </div>

            <div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-lg px-5 py-4 border border-[#eee]">
              <div className="text-2xl font-display font-light text-[#1a1a18]">2 недели</div>
              <div className="text-xs text-[#7a7060] mt-0.5">до первых результатов</div>
            </div>

            <div className="absolute -top-4 -right-4 bg-[#6b7a4a] text-white rounded-2xl shadow-lg px-5 py-3">
              <div className="text-xs font-medium opacity-80">Доступ</div>
              <div className="text-base font-semibold">Навсегда</div>
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
            Что внутри?
          </h2>
          <p className="text-[#5a5850] text-lg leading-relaxed">
            Полное руководство по финансовому мышлению: от диагностики ограничивающих убеждений до построения системы устойчивого дохода. Психология, стратегия, практика — в одном материале.
          </p>
        </div>
      </section>

      {/* Advantages */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="mb-12">
          <span className="text-sm text-[#7a7060] tracking-widest uppercase font-medium">Преимущества</span>
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

      {/* CTA */}
      <section className="bg-[#1a1a18] text-[#fafaf7]">
        <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-4 max-w-lg">
            <h2 className="font-display text-4xl md:text-5xl font-light leading-tight">
              Готов изменить<br />
              <em className="not-italic text-[#a8b87a]">финансовое мышление?</em>
            </h2>
            <p className="text-[#a09880] text-base leading-relaxed">
              Оплата принимается в криптовалюте. После оплаты напишите нам для получения доступа.
            </p>
            <div className="flex items-center gap-2 bg-[#2a2a20] rounded-xl px-4 py-3 text-sm font-mono text-[#c8c0a8] break-all select-all">
              <Icon name="Wallet" size={14} className="text-[#a8b87a] flex-shrink-0" />
              {WALLET}
            </div>
          </div>

          <div className="flex flex-col gap-4 min-w-[220px]">
            <button
              onClick={handleBuy}
              className="group flex items-center justify-center gap-3 bg-[#fafaf7] text-[#1a1a18] px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 hover:bg-[#a8b87a] hover:scale-105 hover:shadow-xl"
            >
              Купить сейчас
              <Icon name="ArrowRight" size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            <p className="text-xs text-[#6a6050] text-center">
              Адрес кошелька скопируется автоматически
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between text-sm text-[#9a9580]">
        <span className="font-display text-base text-[#1a1a18]">Психология Денег</span>
        <span>© 2026 · Все права защищены</span>
      </footer>
    </main>
  );
};

export default Index;