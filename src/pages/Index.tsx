import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold text-primary">Керлинг: История и Традиции</h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="text-sm font-body hover:text-accent transition-colors">Главная</button>
              <button onClick={() => scrollToSection('history')} className="text-sm font-body hover:text-accent transition-colors">История</button>
              <button onClick={() => scrollToSection('rules')} className="text-sm font-body hover:text-accent transition-colors">Правила</button>
              <button onClick={() => scrollToSection('champions')} className="text-sm font-body hover:text-accent transition-colors">Чемпионы</button>
              <button onClick={() => scrollToSection('gallery')} className="text-sm font-body hover:text-accent transition-colors">Галерея</button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4 animate-fade-in">
        <div className="container mx-auto max-w-5xl text-center">
          <Badge variant="outline" className="mb-6 text-accent border-accent font-body">Исторический проект</Badge>
          <h2 className="text-6xl md:text-7xl font-heading font-bold text-primary mb-6">
            Керлинг
          </h2>
          <p className="text-xl md:text-2xl font-body text-muted-foreground mb-4 italic">
            «Шахматы на льду»
          </p>
          <p className="text-lg font-body text-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Древняя шотландская игра, которая прошла путь от развлечения на замёрзших озёрах 
            до олимпийского вида спорта, покорившего весь мир.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button onClick={() => scrollToSection('history')} size="lg" className="font-body">
              <Icon name="BookOpen" className="mr-2" size={20} />
              Узнать историю
            </Button>
            <Button onClick={() => scrollToSection('rules')} variant="outline" size="lg" className="font-body">
              <Icon name="Target" className="mr-2" size={20} />
              Правила игры
            </Button>
          </div>
        </div>
      </section>

      <section id="history" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-heading font-bold text-primary mb-4">История возникновения</h3>
            <Separator className="w-24 mx-auto bg-accent" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/52aac053-15b6-4efc-8d53-8b730e27e5b0/files/7a7348dc-0937-4ae4-b24d-0ce6386dbafb.jpg" 
                alt="Керлинг в Шотландии XVI века" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <Badge className="mb-3 bg-primary">XVI век</Badge>
                <h4 className="text-2xl font-heading font-semibold mb-3">Зарождение в Шотландии</h4>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Первые упоминания о керлинге датируются 1511 годом. Шотландские крестьяне запускали 
                  плоские камни по замёрзшим озёрам и прудам, соревнуясь в точности попадания в цель.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/52aac053-15b6-4efc-8d53-8b730e27e5b0/files/a264dd7a-c763-4872-ab46-a54c03f5557a.jpg" 
                alt="Керлинг-клубы XVIII века" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <Badge className="mb-3 bg-primary">XVIII век</Badge>
                <h4 className="text-2xl font-heading font-semibold mb-3">Формирование правил</h4>
                <p className="font-body text-muted-foreground leading-relaxed">
                  В 1716 году был создан первый официальный керлинг-клуб. К концу XVIII века игра 
                  приобрела структурированные правила и стала популярным зимним видом спорта.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="p-8 bg-card/50">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon name="Calendar" className="mx-auto mb-3 text-accent" size={32} />
                <h5 className="text-3xl font-heading font-bold text-primary mb-2">1998</h5>
                <p className="font-body text-muted-foreground">Олимпийский вид спорта</p>
              </div>
              <div>
                <Icon name="Globe" className="mx-auto mb-3 text-accent" size={32} />
                <h5 className="text-3xl font-heading font-bold text-primary mb-2">60+</h5>
                <p className="font-body text-muted-foreground">Стран-участниц</p>
              </div>
              <div>
                <Icon name="Users" className="mx-auto mb-3 text-accent" size={32} />
                <h5 className="text-3xl font-heading font-bold text-primary mb-2">2 млн</h5>
                <p className="font-body text-muted-foreground">Игроков по всему миру</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="rules" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-heading font-bold text-primary mb-4">Правила игры</h3>
            <Separator className="w-24 mx-auto bg-accent" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Icon name="Target" className="mb-4 text-accent" size={40} />
              <h4 className="text-2xl font-heading font-semibold mb-3">Цель игры</h4>
              <p className="font-body text-muted-foreground leading-relaxed">
                Две команды по 4 человека запускают камни по ледяной дорожке к мишени («дому»). 
                Побеждает команда, чьи камни окажутся ближе к центру мишени после всех бросков.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Icon name="Circle" className="mb-4 text-accent" size={40} />
              <h4 className="text-2xl font-heading font-semibold mb-3">Камень и дом</h4>
              <p className="font-body text-muted-foreground leading-relaxed">
                Камень весит около 20 кг и сделан из гранита. «Дом» — круглая мишень диаметром 
                3,66 метра с концентрическими кругами. Центр называется «баттон».
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Icon name="Sparkles" className="mb-4 text-accent" size={40} />
              <h4 className="text-2xl font-heading font-semibold mb-3">Свипование</h4>
              <p className="font-body text-muted-foreground leading-relaxed">
                Два игрока щётками натирают лёд перед движущимся камнем, изменяя его траекторию 
                и скорость. Это требует точного расчёта и координации команды.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Icon name="Trophy" className="mb-4 text-accent" size={40} />
              <h4 className="text-2xl font-heading font-semibold mb-3">Система подсчёта</h4>
              <p className="font-body text-muted-foreground leading-relaxed">
                Матч состоит из 10 эндов (раундов). В каждом энде команды запускают по 8 камней. 
                Очки начисляются за камни, оказавшиеся ближе к центру, чем камни соперника.
              </p>
            </Card>
          </div>

          <Card className="mt-8 p-8 bg-accent/10 border-accent/30">
            <div className="flex items-start gap-4">
              <Icon name="Lightbulb" className="text-accent flex-shrink-0 mt-1" size={28} />
              <div>
                <h5 className="text-xl font-heading font-semibold mb-2">Интересный факт</h5>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Керлинг называют «шахматами на льду» за стратегическую глубину игры. Капитан команды 
                  (скип) планирует каждый бросок, учитывая позиции камней и возможные ходы противника.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="champions" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-heading font-bold text-primary mb-4">Знаменитые чемпионы</h3>
            <Separator className="w-24 mx-auto bg-accent" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <img 
                src="https://cdn.poehali.dev/projects/52aac053-15b6-4efc-8d53-8b730e27e5b0/files/d883134f-4557-400b-b421-a13582d7cbae.jpg" 
                alt="Кевин Мартин" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <Badge className="mb-3 bg-accent">Канада</Badge>
                <h4 className="text-xl font-heading font-semibold mb-2">Кевин Мартин</h4>
                <p className="font-body text-muted-foreground text-sm mb-3">
                  4-кратный чемпион мира, серебряный призёр Олимпийских игр 2010. 
                  Один из самых титулованных керлингистов в истории.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">🥇 4x ЧМ</Badge>
                  <Badge variant="outline">🥈 ОИ-2010</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <img 
                src="https://cdn.poehali.dev/projects/52aac053-15b6-4efc-8d53-8b730e27e5b0/files/9be4ac39-e03c-492a-a8ab-33d75e1ff646.jpg" 
                alt="Анетт Норберг" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <Badge className="mb-3 bg-accent">Швеция</Badge>
                <h4 className="text-xl font-heading font-semibold mb-2">Анетт Норберг</h4>
                <p className="font-body text-muted-foreground text-sm mb-3">
                  2-кратная олимпийская чемпионка (2006, 2010), 3-кратная чемпионка мира. 
                  Легенда женского керлинга.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">🥇 2x ОИ</Badge>
                  <Badge variant="outline">🥇 3x ЧМ</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <img 
                src="https://cdn.poehali.dev/projects/52aac053-15b6-4efc-8d53-8b730e27e5b0/files/684573d9-bd3a-491c-9f21-b23251699c4c.jpg" 
                alt="Ева Мюрхед" 
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <Badge className="mb-3 bg-accent">Великобритания</Badge>
                <h4 className="text-xl font-heading font-semibold mb-2">Ева Мюрхед</h4>
                <p className="font-body text-muted-foreground text-sm mb-3">
                  Олимпийская чемпионка 2022 года, бронзовый призёр 2014. 
                  Многократная чемпионка Европы и мира.
                </p>
                <div className="flex gap-2">
                  <Badge variant="outline">🥇 ОИ-2022</Badge>
                  <Badge variant="outline">🥉 ОИ-2014</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 p-8">
            <h4 className="text-2xl font-heading font-semibold mb-6 text-center">Достижения по странам</h4>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-4xl font-heading font-bold text-accent mb-2">🇨🇦</p>
                <p className="font-body font-semibold text-primary">Канада</p>
                <p className="font-body text-sm text-muted-foreground">36 медалей на ЧМ</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold text-accent mb-2">🇸🇪</p>
                <p className="font-body font-semibold text-primary">Швеция</p>
                <p className="font-body text-sm text-muted-foreground">24 медали на ЧМ</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold text-accent mb-2">🇬🇧</p>
                <p className="font-body font-semibold text-primary">Великобритания</p>
                <p className="font-body text-sm text-muted-foreground">8 медалей на ОИ</p>
              </div>
              <div>
                <p className="text-4xl font-heading font-bold text-accent mb-2">🇨🇭</p>
                <p className="font-body font-semibold text-primary">Швейцария</p>
                <p className="font-body text-sm text-muted-foreground">16 медалей на ЧМ</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="gallery" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-heading font-bold text-primary mb-4">Историческая галерея</h3>
            <Separator className="w-24 mx-auto bg-accent" />
            <p className="font-body text-muted-foreground mt-4 max-w-2xl mx-auto">
              Редкие исторические фотографии и изображения, демонстрирующие эволюцию керлинга 
              от народной забавы до олимпийского вида спорта
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/52aac053-15b6-4efc-8d53-8b730e27e5b0/files/7a7348dc-0937-4ae4-b24d-0ce6386dbafb.jpg" 
                  alt="Шотландия, XVI век" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardContent className="p-4">
                <Badge variant="outline" className="mb-2">1500-е</Badge>
                <p className="font-body text-sm text-muted-foreground">Истоки игры в Шотландии</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/52aac053-15b6-4efc-8d53-8b730e27e5b0/files/a264dd7a-c763-4872-ab46-a54c03f5557a.jpg" 
                  alt="Чемпионат 1920-х" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardContent className="p-4">
                <Badge variant="outline" className="mb-2">1920-е</Badge>
                <p className="font-body text-sm text-muted-foreground">Ранние чемпионаты</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/52aac053-15b6-4efc-8d53-8b730e27e5b0/files/dbe778f6-f181-44dc-a583-3e494812f207.jpg" 
                  alt="Камень для керлинга" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardContent className="p-4">
                <Badge variant="outline" className="mb-2">1950-е</Badge>
                <p className="font-body text-sm text-muted-foreground">Классический камень</p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="text-center">
              <Icon name="Image" className="mx-auto mb-4 text-accent" size={48} />
              <h4 className="text-2xl font-heading font-semibold mb-3">Архивные материалы</h4>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Эти изображения — часть богатого наследия керлинга. От рукописей средневековых монахов 
                до фотографий первых олимпийских турниров — каждый снимок рассказывает историю 
                одного из старейших командных видов спорта в мире.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-muted/20">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-heading font-bold text-primary mb-3">Керлинг: История и Традиции</h2>
          <p className="font-body text-muted-foreground mb-6 max-w-2xl mx-auto">
            Познавательный проект о древнейшей зимней игре, покорившей мир
          </p>
          <Separator className="w-24 mx-auto bg-accent mb-6" />
          <p className="font-body text-sm text-muted-foreground">
            © 2024 Исторический проект. Созданный с любовью к спорту и истории.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;