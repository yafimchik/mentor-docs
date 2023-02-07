# Тренируемся на кошках (PG-16)

### Введение

Давайте представим себе ситуацию, где нам в программе нужно что-то смоделировать. Это, я думаю, легко представить. Ведь 
человек изобрёл компьютер и программу для него не для того, чтобы в CS:GO или Dota поиграть. А чтобы смоделировать 
что-то сложное и посчитать то, что невозможно или неоправданно сложно посчитать руками. 
Например, предсказание приливов / отливов. Или расшифровать сообщения нацистов во время Второй Мировой. 
Уже в те времена было множество компьютеров, но они были узкоспециализированными и в основном аналоговыми 
(основаны на механике или иной прикладной физике).

С приходом электрических машин, бинарной логики 0 и 1, были сначала машинные коды,  низкоуровневые языки
программирования (ЯП). С увеличением мощности и сложности программ люди всё больше абстрагировались от машинного кода 
и старались работать с более сложными, но понятными и простыми во взаимодействии сущностями. Куда прозрачнее и нагляднее
работать с сущностями из предметной области, которую автоматизирует наша программа. В этот момент начал набирать 
популярность такой подход, как **ООП (Объектно-ориентированное программирование)**.

В нашем мире почти всё можно определить как некий **объект** – это и карандаш с ручкой, и дерево за окном, и здание, в 
котором мы живем или работаем, и каждый человек в отдельности. Каждый из таких объектов мы с легкостью можем 
охарактеризовать, описать свойства, характеристики, возможности, взаимодействия с окружающими объектами. Даже когда 
программист на предприятии пишет программу для работы бухгалтерии или склада, он работает с контрагентами, договорами, 
поставками, накладными, счетами, различными актами и т.д. **Абстракции** позволяют нам думать 
**терминами предметной области**, что очень помогает ориентироваться в программе.

### А где же кошки?

Кто-то из нас помнит биологию, но прошу не придираться. Если мы хотим завести кошку, а домовладелец не разрешает 
завести настоящего питомца в доме, то вместо переезда можно завести кошку в виртуальной среде! :)

Кошка у нас будет относиться к **классу** Млекопитающее, подвиду Кошка. И, естественно, это Животное. Что у нас за 
класс Млекопитающее? Он обобщает в себе некоторые признаки существ одного класса, так? Согласно ему, кошка у нас должна 
кормить детенышей молоком, и быть, скорее всего, живородящей, иметь позвоночник? Биологи с зоологами, помним установку: 
понять и простить, а главное молчать…

Значит, мы должны в классе определить **свойства**, функциональные возможности. Определиться, в каких рамках и какими 
**методами** наша сущность способна взаимодействовать с окружающим миром, как и с самой собой. Скажем, систему 
кровообращения на основе теплой крови, или сигнальную (нервную) систему, поднятую на **шине** позвоночника, мы должны 
оставить **внутри**, не должны напрямую взаимодействовать с ними, ведь так? Вы определяйте, нужна ли вам реализация 
кровопускания :). **Внешние** взаимодействия определим позже.

Вот, собственно, мы и определили, что мы ждём от класса. Ничего не пропустили? **Конструктор**? Какой ещё конструктор, 
это же живая кошка, а не самолёт из другой статьи на тему!

### Курица или яйцо?

Прежде, чем продолжить, ответьте себе на вопрос: что было раньше? Курица или яйцо? Казалось бы, такой простой вопрос, 
но порой столько споров. Правильный ответ: Господь Бог! А Вы что думали? Это всё объясняет. Откуда по вашему в 
интернете столько статей с упоминанием “**Класса Бога**”? Это всё неспроста…

Первая курица определенно была создана Богом. И кто с этим не согласен, позже может сгореть на костре. Но пока мы не 
будем отвлекаться! Программисты, как глубоко религиозные люди, работают по тем же принципам, которые нам подсказал сам 
Господь. Поэтому первую кошечку создадим сами! Для удобства напишем инструкцию для её создания, которая создаст нам 
именно те вид и функциональность кошечки, которые мы от неё ждём. Определим под это отдельную процедуру, и назовём её 
**конструктор**. Всё-таки конструктор, как у самолетов со зданиями, ладно, она всё же виртуальная, пока…

Тут можно возразить, так ведь есть же яйца у курицы, кошка рожает котят - это важнейшие возможности у существ данных 
видов! Да, Вы правы. Определенно, стоит добавить эту функциональность. Но потом! :)

### Никаких принципов!

Из сказанного выше, можно прийти к выводу, что если хотим завести кошку, то кошка у нас должна быть млекопитающей, 
иметь соответствующие признаки и функциональность. Значит, она должна их **наследовать**! Как это делаем мы у своих 
предков. Давайте сразу зададим цепочку наследования: Животные - Млекопитающие - Кошки. Не идеально, но сойдёт. Значит, 
наша кошечка, как и любое животное, имеет возможность перемещаться в пространстве, может иметь или не иметь конечности, 
может обладать **реализацией** некоторых чувств, и уж точно живет, некоторое время. Значит, **определим** в животном 
следующие свойства: время жизни, текущий статус жизни (мертвая кошка всё же ещё некоторое время кошка, пока не 
сработает сборщик мусора), количество конечностей. А также, отметим возможность размножаться каким-либо путем. 
Эту возможность мы уже потом **переопределим**, курица ведь тоже животное, правда? Пока просто определимся, что 
животное в состоянии делать некую копию самого себя с какими-то изменениями или без них.

Наследование, переопределение - ужас! Какие сложности, как вообще до этого можно додуматься?! Вспомним Господа Бога, 
думаете ему было легко? Он за неделю создал вселенную и подарил ей жизнь! Оставим каждому право определиться, верим ли 
мы в то, что Бог - программист, и что мы живём в матрице :)

Ему было очень нелегко, и ему самому пришлось оптимизировать свою работу, чтобы успеть сдать проект до дедлайна. Чтобы 
Вам это доказать, давайте порассуждаем. А существуют ли русалки? Объективно, что нет. Но скорее всего существовали 
ранее. Просто в более ранней версии проекта! **Плохо структурированный код** легко приводит ко множеству различных 
**ошибок**, и не так уж сложно представить, что из-за какого-то сбоя у объекта женщины появлялась половина 
функциональности рыбы! Там и не такое бывало, судя по старой документации (мы её называем мифами и легендами). 
Это и дисбаланс характеристик (**выход за допустимые пределы значений**), когда какой-нибудь маленький Геракл 
становился чрезмерно сильным для человека, и прочие проблемы. Да что уж говорить, даже текущая версия проекта 
содержала множество ошибок, и периодически приходилось **обнулять и перезапускать сервер при внесении глобальных апдейтов** 
(почтим памятью динозавров, а также существ, не переживших всемирный потоп).

У нас есть глаза, у кошек, собак и множества других есть органы, реализованные по одинаковым принципам. Именно 
Господь Бог сформулировал первым принцип **DRY (Don’t repeat yourself)**! А Вы думали, что это какие-то бородатые 
дядьки, которые книги пишут и живут где-то там? Ну, в принципе, да, только не совсем тот бородач, которого мы 
представляли :). Дословно это значит “**не повторяйся**”. Только с точки зрения **эффективности**, а не разнообразия! 
Разнообразие можно обрести другими способами. В тот момент нужно было в срок сдать проект, а сроки горели. 
Поэтому что можно было переиспользовать из уже созданного им, он успешно **переиспользовал**! Взять хотя бы Адама и Еву.

### Дошли руки до кошки

Мы уже определили, какими характеристики животного кошка обладает. Значит, переходим к млекопитающим. Здесь мы уже 
сможем создать базовые возможности организма, определиться с органами, кровеносной системой, а также сигнальной(нервной), 
поднимем шину связи по позвоночнику. Пока всё понятно. Всё по заветам первоисточника (не то безграмотные люди в давние 
времена назвали заповедями, ой не то…). Что же дальше?

На данном этапе мы уже можем определиться, что конечностей должно быть 4. Хотя и здесь всё сложно. Ведь человечество 
в какой-то момент попыталось по неопытности создавать собственные классы, объекты, которые из-за ошибок сами создали 
новый и опасный объект. И имя ему радиация! И она может вмешиваться в заложенную функциональность, генерировать 
кошек с 3 или 5 лапками, это же непорядок! Это бардак и сплошные проблемы. Такая новая функциональность ведет к 
нарушению всех систем, **ломает уже прописанные нами возможности**. Так быть не должно.

Давайте сформулируем логичный вывод: нам стоит **избегать вмешательств** одних объектов в жизнь и функциональность 
других, а также описывать наши объекты так, чтобы никакая радиация не смогла повлиять на количество лапок! 
Лапки должны быть инициализированы при создании кошки, и модифицироваться должны строго в рамках функциональности 
кошки. Изменять количество лапок у кошки можно исключительно методом отрезания, ведь это же очевидно! Здесь будет и 
проверка есть ли лапки, чтобы отрезать, иначе ошибка. Ну и больше лапок при отрезании точно не станет! Разобрались. 
Значит, количество лапок - есть **внутренняя закрытая от внешних изменений** характеристика, 
которая **может быть изменена доступным вовне методом**. Это абсолютно безопасно (не для кошки, но что поделать), 
и в этом я вижу всю суть инкапсуляции.

Вспомним с вами о том, что млекопитающее должно быть живородящим в нашем представлении. Следовательно, мы не 
должны реализовывать метод Родить в кошке, чтобы потом повторять тот же метод у собаки. И собака, и кошка, будут 
иметь наследуемый метод рождения от Млекопитающих! А реализуем мы рождение уже через методы клонирования у базового 
Класса Животных :)  **DRY через наследование**!

### Реализация добавит сложностей

Пока всё звучало весело и местами даже логично и понятно. Но пытливые умы возразят: “Это всё замечательно, но Вы 
описываете уже существующую в реальности кошку согласно прописанной же классификации видов. Функционал уникального 
приложения выглядел бы не так. Как его придумать и как понять? Когда применять какие принципы ООП, а также как 
правильно разделить функциональность?” И это правильный вопрос, на который упомянутые выше принципы ответить не в 
состоянии. Давайте разбираться.

Главный архитектор нашего проекта, нашего виртуального мира, с высоты своего опыта в состоянии понять, какие 
объекты будут в нашем приложении, и как **выделить в них общую функциональность**. Нет никакого смысла описывать 
млекопитающее, если у нас в мире живут только кошки (хотя кошки существуют только для того, чтобы за ними 
гонялись собаки, ведь так?). Остается продумать взаимодействия всех сущностей и дело в шляпе? Составляем ТЗ и 
можно смело приступать? Это совершенно не отменяет сложность реализации, взаимодействий. Большой проект требует 
колоссального количества сил, чтобы это написать. И вряд ли по-настоящему крупный проект в состоянии осилить один 
человек. Выход один: набираем команду разработчиков!

Но нас и тут ждет неприятность. Как начать писать кошку, если млекопитающее или отдельные органы кошки ещё не 
реализованы? Мы напишем кошку, а млекопитающее будет вместо рождения реализовывать почкование. При вызове рождения 
у кошки кошка не сможет обратиться к методу рождения у Млекопитающих, на который она так рассчитывала. 
То есть нас будет ждать ошибка.

С точки зрения **проектирования** у нас будет куда больше проблем. Что мы ждём от кошки? Кошка у нас домашнее 
животное, как та же собака. Мы можем заранее описать, как мы будем взаимодействовать с нашими питомцами. 
Нам нужна система голосовых команд (если доступен слух), команд руками (если доступно зрение), возможность покормить, 
сводить на прогулку и т.д. Если провести аналогию с роботами и их пультом управления, то там нужно определить 
**интерфейс** взаимодействия “человек и домашнее животное”. Как мы реализуем это у кошки или собаки - совершенно 
не важно. Но если мы будем точно знать, что от нас требует интерфейс “Управление”, то от нас лишь потребуется 
реализовать этот интерфейс в кошке или собаке (а точнее в домашнем питомце). В итоге кошка у нас **имплементирует** 
интерфейс управления, а значит должна реализовать. У нас не может быть ошибок в написании взаимодействия человека и 
кошки. Они оба используют этот интерфейс: человек знает, как управлять питомцем, а кошка успешно **реализует** 
этот интерфейс.

Таким образом можно реализовать зрение, слух, передвижение и многое другое. Конечности у животных могут быть разные, 
можно определить базовое перемещение через лапы, но птицы будут летать, рыбы плавать, червяки ползти в земле, 
а змеи по ней. Но если мы заранее определим в интерфейсе животного, что животное может передвигаться из точки А 
в точку Б, набрать скорость и двигаться в нужном направлении, то нам уже будет не важно, как мы реализуем перемещение 
для каждого отдельного вида. Ведь через интерфейс передвижения мы одинаковым методом легко переместим и рыбу и птицу 
(с поправками на ограничения передвижений, в облака рыба не улетит). Но в данном случае животное придется рассматривать 
как некий **абстрактный класс** Животное или **интерфейс** АйЖивотное. Ведь не может быть существа без вида, 
по крайней мере я на это надеюсь. В таком случае, через **переопределение** возможностей передвижения в подвидах 
Рыбы или Птицы мы  реализуем **полиморфизм**.

Чтобы реализовать передвижение кошки, нам придется использовать подсистему навигации, использующую зрение и/или слух. 
Навигация со зрением и слухом у нас должны быть реализованы другим разработчиком, а он на больничном до конца месяца. 
Не беда, если у нас прописан интерфейс навигации в пространстве. Просто до момента конечной реализации мы будем 
тестировать, подсказывая кошке направление, **имитируя** навигацию (создав **мок** данной функциональности).

### Откуда у тебя такие глазки?

Ничего не понятно. Может, если попробовать, то станет легче? Нам нужно реализовать глаза, слух и многое другое, 
научить организм всё это использовать вместе. Глаза - это очень сильно продвинутый 2D-3D сканер, 
слух - звуки и эхолокация, и т.д. В принципе, безумно сложно, но понятно, что делать. А как это всё заставить 
взаимодействовать, черт побери? Как написать сигнальную систему, передачу данных между органами и центральным 
процессором (местом принятия глупых решений кошечки)?

Ладно, попробуем добавить в кошечку глазки. Работать будем в Млекопитающих. Так хотя бы для собачки заново мучиться 
не придется. Уже легче.. Но каким способом млекопитающему встроить глаза? Сначала рассмотрим создание двух 
независимых объектов: Глаза и Млекопитающее. Глаза всегда будут частью млекопитающего (до несчастного случая, 
но этот случай мы пока не рассматриваем). То есть, ссылка на объект глаза будет лежать в одном из свойств 
млекопитающего. Подобная **слабая связь** по ссылке будет **ассоциацией**. Но могут быть различия в подходе 
организации этой связи.

Если мы создадим глаза и кошку в отдельности друг от друга, то потом нужно уже существующие отдельно глаза 
как-то вставить в голову бедного животного. Не гуманно, а главное, в текущий момент неосуществимо с медицинской 
точки зрения. Как и поменять местами глаза кошки и собаки (Не так я себе представлял переиспользование). 
Это достаточно слабая связь по ссылке двух независимых объектов, такое взаимодействие называется **агрегацией**. 
Это достаточно гибко, ведь мы можем определить требование на глаза как интерфейс, и при желании подменить 
глаза на микрокамеры, пока животное под наркозом, внешним способом (руками хирурга). С другой же стороны можно 
переборщить с такой гибкостью, и при ошибке из-за подмены ссылки у нас кошка может принять глаза собаки из 
соседнего подъезда за свои, и принимать от них сигнал. Настроиться на чужую волну, так сказать… Видя глазами 
другого животного кошке будет не очень удобно ориентироваться в пространстве, да и как это возможно вообще...

Если же рассматривать связь как **неразрывную**, то будет уже связь **композицией**. Ну правда, ведь если вырвать 
глаз у кошки, то в другую кошечку мы его уже не вставим, да и без кошечки глаз вряд ли заработает. Для этого глаз 
создается непосредственно в кошечке, что тоже верно - кошка у нас рождается уже с глазами (если повезет). 
Соответственно, управление глазами будет осуществляться возможностями кошечки. Например, функционал потери глаза. 
И Глаз без кошечки уже существовать не будет.

Агрегацию будем чаще рассматривать, когда у нас объекты ссылаются на один и тот же объект. 
Это будет связь **один-ко-многим**. Допустим, можно добавить домашнему животному его хозяина. Тоже самое можно 
сказать о большинстве внутренних органов, ведь их научились пересаживать.  Но глаза, мозг, позвоночник пересадить 
не удастся. Они не смогут функционировать вне тела (**время жизни объекта в пределах жизни родительского объекта**), 
поэтому здесь будет композиция. И тут уже будет чаще связь **один-к-одному**.

### Стало легче?

Столько различных возможностей и ситуаций разобрали, и всё для того, чтобы создать виртуальную кошечку. 
Может, проще все же переехать и завести настоящую кошку? Но мы не ищем легких путей. 
Давайте обобщим то, что мы уже рассмотрели.

Чтобы разделить этап **проектирования** и **реализации** и не блокировать разработку ожиданием конкретной реализации, 
можно использовать **интерфейсы**, которые потом нужно будет реализовать. Для каждого функционала можно создать 
свой интерфейс, а один класс может реализовывать множество различных интерфейсов.

Если мы хотим вынести какой-то базовый функционал (чаще всего с целью переиспользования, куда реже - с целью 
сокращения и упрощения кода), то мы можем рассмотреть **наследование**. Наследование обладает некоторой гибкостью 
и возможностью переопределения методов, но применять его стоит с особой осторожностью.

Если мы хотим разделить общий сложный функционал, то стоит рассмотреть **ассоциацию: композицию или агрегацию**. 
Во многих источниках можно найти совет, что по возможности стоит использовать агрегацию или композицию, 
где это возможно, для расширения или разделения функционала на модули. Наследование оставьте на крайний случай, 
где это действительно оправдано. Наследование не подразумевает той гибкости, которую может обеспечить ассоциация.

Чем сложнее **цепочка наследования**, тем сложнее внести изменения в функционал, реализованный в базовом классе. 
Допустим, чтобы реализовать полный функционал птиц, нам потребуется внести изменения в класс Животные. 
Это изменение может сломать функционал кошки. Так вот откуда взялась русалка! При добавлении класса Рыб у 
Создателя возникли проблемы с Классом Люди, видимо где-то в базовых классах была ошибка. Банальная ошибка в 
наследовании классов по неопытности! А чтобы этого избежать, придется переопределять унаследованные у Животного 
методы кошки. Читать, обслуживать и вносить изменения в такой код будет значительно сложнее. Любые изменения 
базовых классов могут создать проблемы или ошибки в наследуемых модулях. Всё приложение придется заново тестировать.

С другой стороны, разработчик, использующий наследование, скажет вам, что в наследовании нет никаких проблем, 
если классы правильно продумывать. Снова  мы уперлись в то, что подходы могут быть разные, 
а применение оптимального будет обеспечиваться опытом…

### Чертово колесо

Только совсем недальновидный малый бросится заново изобретать колесо. Но решая задачи по созданию очередного 
уникального колесного транспорта, мы в большей или меньшей мере обязательно изобретем несколько видов **велосипедов**. 
Но ведь их тоже не стоит заново изобретать, ведь так?

В таком случае, что может помочь разработчику выбрать наиболее оптимальную и гибкую архитектуру приложения? **Опыт**, 
и этот опыт можно перенять. Большинство сложных проблем создания архитектур, решение типичных задач и способы 
связи различных объектов разобраны. Найдены оптимальные решения, которые можно использовать в той или иной ситуации. 
Программисты это назвали **шаблонами проектирования (design patterns)**. Это универсальные решения конкретных 
общих задач, **рецепты успеха**.

Раз существуют **паттерны**, то должны существовать и **антипаттерны** (заведомо неудачные архитектуры). 
А признаки плохого кода иногда называют “**запахами кода**”. Код разве может как-то пахнуть? Только вонять :) 
Знание запахов кода и антипаттернов позволит вовремя заметить неудачную архитектуру, предложит возможное 
решение возникшей проблемы и позволит упростить дальнейшее развитие и поддержку проекта.

Подытожив, хочется дать напутствие начинающим на столь тернистом пути, ведь всё описанное страшно пугает даже и 
без моих аллегорий. Не бойтесь, а рассматривайте страшную и большую задачу (обучение тоже задача), как лестницу вверх. 
Где много ступеней, это правда. Но все они преодолимы по отдельности и с легкостью! Главное выбрать подходящий темп. 
Если дочитали до этого момента, но легче и понятнее не стало, то возвращайтесь и перечитайте снова. Только чуть позже, 
уже написав свою первую кошечку :) Успехов и удачи нам всем, и да не заменят нас в этой профессии машины!

Если же это читает опытный разработчик, то надеюсь напишет исправление / добавление / предложение к этой статье.

## Бонус: SOLID

### SRP (принцип единственной ответственности)

Рассмотрим навигацию кошки. Заведем в классе Кошка модуль навигации, где будут использоваться имеющиеся уши и глаза. 
Пока навигация у нас использует возможности глаз и ушей - это агрегация, разделение функционала по ответственностям, 
и всё хорошо. Каждый из трех классов занимается своими делами. Но если глаза начинают вмешиваться в работу навигации, 
то у нас явное нарушение ответственности. Глаза выполняют сторонний функционал. Любой класс или метод должны 
выполнять свою задачу и **только одну задачу** на нужном **уровне абстракции**. Если в название метода или класса 
можно вставить **союз “И”**, то у нас явные проблемы с зоной ответственности.

### OCP(принцип открытости/закрытости)

Вспомним ситуацию с внедрением в проект птиц. Если реализация подкласса Птицы вызвало необходимость внесения 
изменений в класс Животное, то, во-первых, у нас в животном, скорее всего, ошибка. Во-вторых, 
внесение изменений в класс Животное будет являться нарушением принципа **закрытости к изменениям** существующего 
функционала. Чтобы добавлять или изменять функционал, мы можем лишь добавить новый подкласс, тем самым
выполнив принцип **открытости к расширению**.

### LSP(принцип подстановки Лисков)

Можем ли мы любое животное одного типа подменить другим? Рыба у нас не полетит, а птица не поплывет. 
Если мы осуществили правильное наследование, то функционал базового класса должен выполняться в подклассе. 
Животное у нас будет иметь интерфейс перемещения в пространстве, интерфейс размножения, питания, и т.д. 
И каждый подкласс должен поддерживать эту базовую функциональность, и быть полностью совместим с базовым классом. 
Допустим, у нас есть Удав. Мы не хотим задавать в Удаве количество конечностей в конструкторе. 
Ведь никакой удав не может родиться с лапками. Если мы в конструкторе опустим это поле и жестко зададим 
0 конечностей при вызове конструктора “Животное”, то весь функционал животного будет исправно работать в нашем удаве. 
Но подменить животное с лапками удав уже не сможет, потому что аргументы конструктора окажутся несовместимы. 
Подкласс должен только расширять функционал, но не сужать его применимость относительно базового класса.

### ISP(принцип разделения интерфейса)

Животное у нас должно иметь интерфейс перемещения в пространстве, интерфейс размножения, питания, и т.д. 
Мы можем реализовать Питание через метод Поесть(), но какой-то слизняк будет всасывать питательные вещества через кожу. 
В таком случае, у него не будет метода Поесть(), но будет метод впитатьВещество(). Лучше сделать 
**много небольших интерфейсов** и применять их по месту, чем делать какой-то большой и общий интерфейс 
(Интерфейс УмениеКушать и УмениеВпитывать вместо интерфейса Питаться). Тогда в рамках композиции мы сможем определить 
новый класс животных, который будет реализовывать иной способ питания. А также изменение в рамках одного интефейса 
никак не повлияет на классы, которые его не используют.

### DIP (принцип инверсии зависимостей)

В какой-то момент нам придется создавать объекты. Чем выше по цепочке это происходит, тем более гибкий у нас будет код. 
Допустим, мы запускаем мир, где наш хозяин будет жить со своими питомцами. Всё что, он хочет делать с ними, 
это кормить, после чего гладить им пузико(если это безопасно для хозяина). Для того чтобы кормить, 
хозяин должен обращаться в местную службу доставки еды и заказывать нужную пищу для своих любимых питомцев. 
Инициализация доставки еды может находится в самом начале создания мира, после поселения человека в конкретный дом 
конкретного города N согласно конфигурационному модулю. Чем выше по цепочке происходит создание объектов, 
тем более гибко можно писать основной код. Внедрением зависимостей обычно занимается некий фреймворк, 
в рамках которого работает наш код. А для доступа к сервису еды города N человеку достаточно указать 
в качестве **зависимости** тип сервиса доставки еды (а лучше всего интерфейс). Фреймворк должен сам передать 
нужный объект ему.