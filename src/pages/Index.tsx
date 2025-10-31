import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      icon: "Zap",
      title: "Инновационные решения",
      description: "Внедряем передовые технологии для достижения ваших бизнес-целей"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Гарантируем защиту данных на всех уровнях взаимодействия"
    },
    {
      icon: "TrendingUp",
      title: "Рост эффективности",
      description: "Оптимизируем процессы и увеличиваем продуктивность вашего бизнеса"
    },
    {
      icon: "Users",
      title: "Экспертная команда",
      description: "Профессионалы с многолетним опытом в цифровой трансформации"
    }
  ];

  const services = [
    {
      icon: "Code",
      title: "Разработка ПО",
      description: "Создаём кастомные решения, идеально подходящие под ваши задачи",
      highlights: ["Web-приложения", "Мобильные решения", "API интеграции"]
    },
    {
      icon: "Database",
      title: "Аналитика данных",
      description: "Превращаем данные в стратегические преимущества для бизнеса",
      highlights: ["Big Data", "BI системы", "Прогнозирование"]
    },
    {
      icon: "Cloud",
      title: "Облачные сервисы",
      description: "Масштабируемая инфраструктура для роста вашего проекта",
      highlights: ["Cloud Migration", "DevOps", "Kubernetes"]
    },
    {
      icon: "Cpu",
      title: "AI & ML решения",
      description: "Интеграция искусственного интеллекта в бизнес-процессы",
      highlights: ["Автоматизация", "Чат-боты", "Распознавание"]
    },
    {
      icon: "Lock",
      title: "Кибербезопасность",
      description: "Комплексная защита IT-инфраструктуры от современных угроз",
      highlights: ["Аудит безопасности", "Пентесты", "SIEM системы"]
    },
    {
      icon: "Headphones",
      title: "Техподдержка 24/7",
      description: "Круглосуточная поддержка и сопровождение ваших проектов",
      highlights: ["SLA гарантии", "Мониторинг", "Быстрый отклик"]
    }
  ];

  const stats = [
    { value: "500+", label: "Проектов" },
    { value: "98%", label: "Удовлетворённых клиентов" },
    { value: "15+", label: "Лет на рынке" },
    { value: "24/7", label: "Поддержка" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-secondary">BibNeklin</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Услуги
            </button>
            <Button>Связаться</Button>
          </div>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-secondary">
                Технологии <span className="text-primary">будущего</span> для вашего бизнеса
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Создаём инновационные цифровые решения, которые трансформируют бизнес-процессы и открывают новые возможности для роста
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => scrollToSection("services")}
                >
                  Наши услуги
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-300/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-200">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div 
                      key={index} 
                      className="text-center p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                      <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы предлагаем комплексный подход к цифровой трансформации
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-white"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Icon name={feature.icon} className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр IT-решений для развития вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-8 border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl group bg-white"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon name={service.icon} className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-secondary">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-2">
                  {service.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" className="text-primary" size={16} />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Готовы начать сотрудничество?
          </h2>
          <p className="text-xl mb-10 opacity-90 animate-fade-in">
            Свяжитесь с нами и получите консультацию по вашему проекту
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-scale-in">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Оставить заявку
              <Icon name="Send" className="ml-2" size={20} />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 bg-white/10 hover:bg-white/20 text-white border-white/30">
              <Icon name="Phone" className="mr-2" size={20} />
              +7 (XXX) XXX-XX-XX
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold">BibNeklin</span>
              </div>
              <p className="text-white/70 text-sm">
                Инновационные IT-решения для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Команда</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Разработка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Консалтинг</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поддержка</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>info@bibneklin.ru</li>
                <li>+7 (XXX) XXX-XX-XX</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            © 2024 BibNeklin. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
