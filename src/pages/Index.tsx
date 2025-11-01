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
      icon: "BookOpen",
      title: "Литературное сообщество",
      description: "Объединяем авторов разных жанров и направлений для обмена опытом"
    },
    {
      icon: "Feather",
      title: "Творческая свобода",
      description: "Поддерживаем экспериментальные формы и смелые художественные решения"
    },
    {
      icon: "Award",
      title: "Признание талантов",
      description: "Проводим конкурсы, премии и мероприятия для продвижения авторов"
    },
    {
      icon: "Users",
      title: "Профессиональная среда",
      description: "Литературные критики, редакторы и опытные писатели в одном месте"
    }
  ];

  const services = [
    {
      icon: "Pen",
      title: "Литературные мастерские",
      description: "Регулярные встречи для обсуждения произведений и мастер-классы от признанных авторов",
      highlights: ["Еженедельные встречи", "Разбор текстов", "Обратная связь от профи"]
    },
    {
      icon: "BookText",
      title: "Публикации",
      description: "Издаём альманахи, антологии и индивидуальные сборники членов объединения",
      highlights: ["Альманах «Степь»", "Авторские сборники", "Электронные версии"]
    },
    {
      icon: "Mic",
      title: "Литературные вечера",
      description: "Организуем авторские чтения, поэтические вечера и встречи с читателями",
      highlights: ["Открытый микрофон", "Тематические вечера", "Презентации книг"]
    },
    {
      icon: "Trophy",
      title: "Конкурсы и премии",
      description: "Проводим литературные конкурсы и вручаем премии лучшим произведениям года",
      highlights: ["Ежегодная премия", "Молодые авторы", "Разные жанры"]
    },
    {
      icon: "Library",
      title: "Литературная критика",
      description: "Профессиональный анализ произведений и помощь в развитии авторского стиля",
      highlights: ["Рецензирование", "Редактура", "Консультации"]
    },
    {
      icon: "GraduationCap",
      title: "Образовательные программы",
      description: "Курсы по литературному мастерству, истории литературы и издательскому делу",
      highlights: ["Творческое письмо", "Литературоведение", "Издательское дело"]
    }
  ];

  const stats = [
    { value: "200+", label: "Авторов" },
    { value: "50+", label: "Публикаций" },
    { value: "10+", label: "Лет работы" },
    { value: "12", label: "Мероприятий в год" }
  ];

  const authors = [
    {
      name: "Ольга Сафронова",
      quote: "Степь научила меня видеть красоту в простом и находить метафоры в повседневном",
      photo: "https://cdn.poehali.dev/files/f1a672b1-254b-4121-9bf7-c508fee74079.JPG"
    },
    {
      name: "Евгений Полянский",
      quote: "Здесь я нашёл не только читателей, но и настоящих друзей по перу"
    },
    {
      name: "Галина Маркер",
      quote: "Литературные вечера объединения дали мне уверенность выйти на сцену",
      photo: "https://cdn.poehali.dev/files/2acaf771-3666-4100-80a6-6b18debffffc.JPG"
    },
    {
      name: "Дмитрий Ковалёв",
      quote: "Мастерские помогли найти свой уникальный голос в современной литературе"
    },
    {
      name: "Ольга Морозова",
      quote: "Благодаря объединению моя первая книга увидела свет"
    },
    {
      name: "Сергей Белов",
      quote: "Критика и поддержка коллег сделали мои тексты значительно сильнее"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-secondary">Степь</span>
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
              Направления
            </button>
            <button 
              onClick={() => scrollToSection("authors")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Авторы
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
                Литературное объединение <span className="text-primary">«Степь»</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Объединяем писателей, поэтов и литературных критиков для создания, обсуждения и продвижения современной литературы
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-6"
                  onClick={() => scrollToSection("services")}
                >
                  Наши направления
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
              Создаём условия для творческого роста и литературной самореализации
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
              Наши направления
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр литературной деятельности для развития вашего таланта
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

      <section id="authors" className="py-20 px-6 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Наши авторы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Талантливые писатели и поэты, чьи произведения получили признание
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author, index) => (
              <Card 
                key={index}
                className="p-6 border-2 hover:border-primary transition-all duration-300 hover:shadow-xl group bg-white overflow-hidden"
              >
                <div className="flex items-start gap-4 mb-4">
                  {author.photo ? (
                    <img 
                      src={author.photo} 
                      alt={author.name}
                      className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="User" className="text-primary" size={32} />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xl font-bold text-secondary">{author.name}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{author.quote}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Присоединяйтесь к нам
          </h2>
          <p className="text-xl mb-10 opacity-90 animate-fade-in">
            Станьте частью литературного сообщества и развивайте свой талант вместе с нами
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-scale-in">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              Вступить в объединение
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
                <span className="text-2xl font-bold">Степь</span>
              </div>
              <p className="text-white/70 text-sm">
                Литературное объединение для творческих людей
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
              <h4 className="font-bold mb-4">Деятельность</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Мастерские</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Публикации</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Мероприятия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li>info@step-lit.ru</li>
                <li>+7 (XXX) XXX-XX-XX</li>
                <li>Россия</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            © 2024 Литературное объединение «Степь». Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;