import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-2xl font-bold text-secondary">ВКоманде</div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('hero')} className="text-sm font-medium hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">
                О компании
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-sm font-medium hover:text-primary transition-colors">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('map')} className="text-sm font-medium hover:text-primary transition-colors">
                Маршрут
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('contacts')}>
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4 animate-fade-in">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
                Подбор персонала для вашего бизнеса
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Профессиональные решения по массовому и точечному подбору сотрудников, 
                а также комплексный HR-аудит вашей компании во Владивостоке
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('services')}>
                  Услуги и цены
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')}>
                  Консультация
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/15c3271a-84fd-40b5-a279-366a0f5a23ea/files/11fdaf53-d627-4d64-8bf9-4a6c84363016.jpg" 
                alt="Команда ВКоманде"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-sm hover:shadow-lg transition-shadow animate-scale-in">
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Опыт</h3>
                <p className="text-muted-foreground">
                  Более 5 лет успешной работы на рынке подбора персонала
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm hover:shadow-lg transition-shadow animate-scale-in" style={{animationDelay: '0.1s'}}>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Target" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Точность</h3>
                <p className="text-muted-foreground">
                  Индивидуальный подход к каждому клиенту и вакансии
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm hover:shadow-lg transition-shadow animate-scale-in" style={{animationDelay: '0.2s'}}>
              <CardContent className="pt-8 pb-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Clock" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Скорость</h3>
                <p className="text-muted-foreground">
                  Быстрый подбор кандидатов с сохранением качества
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите оптимальный вариант сотрудничества для вашей компании
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="pt-8 pb-8">
                <div className="mb-6">
                  <Icon name="Users" className="text-primary mb-4" size={40} />
                  <h3 className="text-2xl font-bold mb-2">Массовый подбор</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary">от 23.900₽</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">Подбор линейного персонала</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">Закрытие нескольких вакансий</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">Быстрый поиск кандидатов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">Первичный отбор и проверка</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={() => scrollToSection('contacts')}>
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                Популярное
              </div>
              <CardContent className="pt-8 pb-8">
                <div className="mb-6">
                  <Icon name="Target" className="text-primary mb-4" size={40} />
                  <h3 className="text-2xl font-bold mb-2">Точечный подбор</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary">65.000₽</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">Подбор специалистов и руководителей</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">Углубленная оценка кандидатов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">Индивидуальный подход</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">Гарантия на замену</span>
                  </li>
                </ul>
                <Button className="w-full" onClick={() => scrollToSection('contacts')}>
                  Заказать
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-all hover:shadow-xl">
              <CardContent className="pt-8 pb-8">
                <div className="mb-6">
                  <Icon name="FileSearch" className="text-primary mb-4" size={40} />
                  <h3 className="text-2xl font-bold mb-2">HR-аудит</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary">по запросу</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">Анализ HR-процессов компании</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">Оценка системы подбора</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">Рекомендации по оптимизации</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-sm">Детальный отчет</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" onClick={() => scrollToSection('contacts')}>
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">О компании</h2>
              <p className="text-lg text-muted-foreground mb-4">
                ВКоманде — это профессиональное агентство по подбору персонала, работающее во Владивостоке 
                и помогающее компаниям находить лучших специалистов для развития их бизнеса.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Мы специализируемся на массовом и точечном подборе персонала, а также проводим 
                комплексные HR-аудиты для оптимизации процессов найма в вашей компании.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Закрытых вакансий</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Лет на рынке</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Успешных подборов</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://cdn.poehali.dev/projects/15c3271a-84fd-40b5-a279-366a0f5a23ea/files/fcdeb6a3-3510-4f3e-b776-b5d13fcd45cd.jpg" 
                alt="Офис ВКоманде"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="map" className="py-20 bg-muted/30 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-secondary mb-4">Маршрут</h2>
            <p className="text-lg text-muted-foreground">
              Проспект 100-летия Владивостока, 38а, Первореченский район
            </p>
          </div>
          <div className="rounded-2xl shadow-2xl overflow-hidden bg-white">
            <iframe 
              src="https://widgets.2gis.com/widget?type=firmsonmap&options=%7B%22pos%22%3A%7B%22lat%22%3A43.150764%2C%22lon%22%3A131.909529%2C%22zoom%22%3A16%7D%2C%22opt%22%3A%7B%22city%22%3A%22vladivostok%22%7D%2C%22org%22%3A%2270000001101697075%22%7D"
              className="w-full h-[500px] border-0"
              title="Карта 2GIS"
            />
          </div>
          <div className="mt-8 text-center">
            <a 
              href="https://2gis.ru/vladivostok/firm/70000001101697075?m=131.909529%2C43.150764%2F18" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              <Icon name="Navigation" size={20} />
              Построить маршрут в 2GIS
            </a>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-4">Отзывы клиентов</h2>
            <p className="text-lg text-muted-foreground">
              Что говорят о нас наши партнеры
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-none shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                    ГКГ
                  </div>
                  <div>
                    <div className="font-semibold">Группа Компаний Гермес</div>
                    <div className="text-xs text-muted-foreground">17 сентября 2025</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  ГК «Гермес» благодарит кадровое агентство «Вкоманде» за профессиональный и внимательный подход к подбору сотрудников.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white font-semibold">
                    DR
                  </div>
                  <div>
                    <div className="font-semibold">Denis Rolomarchuk</div>
                    <div className="text-xs text-muted-foreground">10 мая 2025</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Очень быстро нашли нужного человека в команду. Всегда на связи, даже в выходные. Будем обращаться ещё 👍
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                    VH
                  </div>
                  <div>
                    <div className="font-semibold">Vitaliy Hontov</div>
                    <div className="text-xs text-muted-foreground">6 отзывов</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" className="text-yellow-400 fill-yellow-400" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Качественно помогли найти сотрудника, во время составления портрета покопались в процессах компании и упростили некоторые из них.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-secondary text-white px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-lg opacity-90">
              Готовы обсудить подбор персонала для вашей компании
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="mt-1 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="opacity-90">Проспект 100-летия Владивостока, 38а, Первореченский район, Владивосток, 690048</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="mt-1 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="opacity-90">+7-964-448-26-61</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="mt-1 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="opacity-90">hrvkomande@yandex.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="mt-1 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Режим работы</div>
                    <div className="opacity-90">Сегодня с 09:00 до 19:00</div>
                    <div className="opacity-90">Ежедневно</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Globe" className="mt-1 flex-shrink-0" size={24} />
                  <div>
                    <div className="font-semibold mb-1">Сайт</div>
                    <a href="https://hrvkomande.ru" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100 underline">
                      hrvkomande.ru
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">Оставьте заявку</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Ваше сообщение" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
                  />
                </div>
                <Button className="w-full bg-white text-secondary hover:bg-white/90" size="lg">
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/5 py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p>© 2024 ВКоманде. Все права защищены.</p>
            <div className="flex items-center gap-4">
              <a href="https://hrvkomande.ru" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                hrvkomande.ru
              </a>
              <a href="https://wa.me/79644482661" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2">
                <Icon name="MessageCircle" size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;