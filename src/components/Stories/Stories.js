import Image1 from '../../assets/images/post-1.jpg'
import Image2 from '../../assets/images/post-2.jpg'
import Image3 from '../../assets/images/post-3.jpg'
import Image4 from '../../assets/images/post-4.jpg'
import Image5 from '../../assets/images/post-5.jpg'
import Image6 from '../../assets/images/post-6.jpg'
import Image7 from '../../assets/images/post-7.jpg'
import Image8 from '../../assets/images/post-8.jpg'
import Masonry from 'react-masonry-css'

import './Stories.scss'

<script async src="https://www.googletagmanager.com/gtag/js?id=G-NCRMZH938E"></script>

const Stories = () => {
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,       
        500: 1
    };
    return (
        <section className="info-sections" id="section1">        
            <div className="container">   
                <div className="container-header"> 
                    <h1 className="post-container-header">Історії Харківських переселенців</h1>
                    <h2 className="post-container-subheader">ОСТАННІ ІСТОРІЇ</h2>    
                </div> 
                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    <div className="col">              
                        <div className="img-holder">
                            <img src={Image3} alt=""/>
                        </div>  
                        <p className="post-text">
                            Я, как и большинство украинцев,
                            никогда и подумать не могла, что в мою страну может прийти война.
                            24 февраля меня разбудили друзья. Они позвонили и сказали эти страшные слова - Нас обстреливают.
                            Спросонья я не могла осознать до конца смысл этих страшных слов. Мозг отказывался их воспринимать.
                            Я решила подремать еще и подумать об этом позже. Через пару часов во всех чатах было куча сообщений от родственников, друзей и знакомых о том, что началась война. Мой дом находится на окраине города и в первые дни войны выстрелы были практически не слышны. Я продолжала работать удалённо и надеяться, что скоро все закончится и мы вернёмся к прошлой жизни. Однако с каждым днем обстрелы усиливались и на мой родной город начали сбрасывать бомбы. Тогда я решила - нужно уезжать и увозить свою семью в безопасное место. Последнюю ночь перед поездкой мой родной район начали бомбить авиацией. Мы в окно видели летящие ракеты, слышали их шуршание и видели зарево во всех окнах квартиры. Дом трясся и казалось, что горит весь район. Было очень страшно. На следующее утро мы покинули город. Очень больно было видеть свой родной и любимый город в руинах. Мы решили временно перебраться в Кременчуг. Тут нас встретили как родных. Чужие люди несли продукты, еду и одежду - помогали чем могли. Было очень приятно и душевно. Мы плакали вместе и желали друг другу мира и добра. Сейчас мы продолжаем жить в Кременчуге и надеяться вернуться домой, в свой любимый Харьков…
                        </p>					    
                    </div>
                    <div className="col">              
                        <div className="img-holder">
                            <img src={Image5} alt=""/>
                        </div>  
                        <p className="post-text">                        
                            Мене звати Руслан, мені 28 років і я біженець з Харкова.
                            На відміну від більшості моїх знайомих у Харкові та Києві, 24 лютого 2022 року я прокинувся не о п'ятій вранці від вибухів, а в свої звичайні 08:30.
                            На районі, де я жив, було значно менше чути всю халепу. До того ж, тієї ночі я лягав спати доволі пізно і сильно втомлений, що теж могло зіграти свою роль.
                            Коли я прокинувся, перші пару хвилин я нічого не підозрював, для мене це був звичайний ранок звичайного четверга. Я збирався іти на тренування.
                            Потягнувся за телефоном, і одразу зрозумів що щось не так.
                            Більше десяти пропущених викликів від різних людей. Зовсім не типова картина для ранку четверга.
                            Заходжу в телеграм, всі чати горять. 
                            Там я дізнався, що почалось повномасштабне вторгнення.
                            А мої друзі ще пів дня з мене кепкували, що "проспав війну".
                            І чесно кажучи, я тому дуже радий. Бо прочитавши ці новини, я подивився у вікно — і там не такий апокаліпсис, як я собі уявляв останні два тижні наростаючої тривоги. З моменту початку пройшло вже три з половиною години, а на районі досі туди-сюди ходять люди, не схоже щоб хтось панікував, і взагалі містом ще не шастає русня. Значить, поки що все нормально. Наскільки воно взагалі може бути.
                            Натомість, якби разом з усіма я прокинувся о п'ятій від вибухів, як б скоріш за все сильно запанікував. 
                            Звісно, психіка відмовлялась серйозно сприймати те, що коїться.
                            Якась дурна впевненість що "хай там що, а зі мною все буде в порядку". Відчуття, ніби мене то точно все омине.
                            Перші кілька днів все і правда було не дуже страшно.
                            Мені дійсно пощастило з районом, бо в той час я чув 2-3-4 гучних звуки на день, і частіше то були відльоти.
                            Натомість, мої знайомі з інших районі доповідали, що вони цілодобово, кожні 15-30 секунд чують гучний гуп. 
                            Тож оскільки в мене було відносно тихо, я собі думав що можна скільки завгодно тут сидіти, прям аж до перемоги.
                            Згодом навіть ті не часті шуми, які я чув, стали настільки звичними, що я не звертав на них уваги.
                            Навіть перестав бігати в коридор кожного разу, коли щось відбувалось.
                            Психіка швидко адаптується навіть до найгірших умов.
                            Так легше виживати, але жити так — це жах.
                            Проте, усвідомив я це тільки коли звідти вибрався.
                            Хоча вибиратись я не поспішав. Бо до того, що було, вже звик, і знову ж таки, мені пощастило з районом.
                            Мій друг, який в перші дні виїхав в Кременчук (бо тут його батьки), пропонував мені та ще деяким знайомим щоб він нас забрав.
                            Проте, до артилерійських обстрілів ми вже звикли і значних причин виіїжджати не бачили.
                            Все змінилося десь на п'ятий чи шостий день.
                            Спочатку були ракетні удари по військових частинах, а також по маленьких населених пунктах, які лежать на підступах до Харкова саме з боку мого району.
                            Ці ракетні удари звучали значно страшніше і гучніше, аніж будь що що я чув до того. 
                            Деякі епіцентри ударів були в кількох кілометрах від мене, і в ці моменти сильно дрожали вікна.
                            Тут вже починається процес переоцінки обставин як не таких-вже-й-безпечних, починається паніка і бажання цього всього уникнути.
                            Але як виявилося, найстрашніше було попереду.
                            Після ракетних ударів почали літати бомбардувальники.
                            Цей звук не порівняти ні з чим.
                            Починається з низького далекого гулу. 
                            З кожною секундою він стає сильнішим та наближається.
                            В якийсь момент гул стає настільки гучним, що здається ніяких інших звуків в той момент не існує.
                            Вікна вібрують.
                            Важко сказати, скільки це триває, бо час плине дуже повільно і здається цілою вічністю.
                            Це був переломний момент, коли я вирішив що залишатись в таких умовах не можна.
                            Я запитав у того самого знайомого, чи ще актуальна його пропозиція, і на превелике щастя він все ще був налаштований приїхати і забрати всіх охочих.
                            Таким чином, третього березня рано вранці я зібрав найнеобхідніше, посадив двох котів в переноску і почав викликати таксі, щоб виїхати за місто, де мене мали підібрати.                            
                            Коли ми від'їхали від Харкова на пару десятків кілометрів, я вперше за багато днів почув тишу. Таку тишу, в якій нема тривожного очікування наступного вибуху. А просто тишу, яка є сама по собі.
                            Було дуже дивно відслідковувати, наскільки приємною здається така тривіальна річ, яку зазвичай сприймав як абсолютно не цікаву даність. 
                            Тоді люди масово покидали Харків і їхали в напрямку Полтави, звіди на Кременчук, і багато хто далі на захід.
                            Через це так блок-пости, шлях який зазвичай займає приблизно 4 години автобусом або ще менше на машині, ми долали більше дванадцяти годин.
                            Проте, навіть стояти в кілометрових заторах перед блок-постами було значно приємніше, аніж сидіти в квартирі та слухати звуки працюючої артилерії, прильоти, і тим паче ворожі літаки.
                            І от, вже за десяту ввечорі ми прибули в Кременчук (а точніше, в Піщане). Попили чай і полягали спати.
                            Наступний день я провів просто приходячи до тями і усвідомлюючи, що взагалі сталося.
                            Наступний важливий момент в усвідомленні трапився на другий день, коли я зібрався йти пішки до гіпермаркету.
                            Це приблизно три кілометри в один бік.
                            Було дуже дивне відчуття. Перший кілометр я пройшов, кожну хвилину озираючись по сторонах, та вдивляючись у небо.
                            У Харкові, навіть простий похід в магазин за 400 метрів вимагав цього. Бо з кожного боку могло щось прилетіти. Треба бути на варті.
                            Але тут я просто йшов, і нічого не відбувалося (окрім проїжджаючих іноді машин). 
                            Важко передати, наскільки дивними відчуваються звичайні спокійні обставини, коли звикаєш до неспокійних.
                            Ще кілька днів я відчував радість від того, що я можу просто пройтись вулицею без страху за те, що це може стати останньою прогулянкою в моєму житті.
                        </p>							    
                    </div>
                    <div className="col">              
                        <div className="img-holder">
                            <img src={Image1} alt=""/>
                        </div>  
                        <p className="post-text">
                            24 февраля около 2х часов ночи я встала попить воды и выглянула в окно. На улице не горели фонари и темнота была какой-то нагнетающей. С неприятным ощущением я пошла спать, а в 5 часов я уже подскочила на кровати от звуков взрывов и увидела мужа, стоящего возле окна. Мы взяли нашего 3х месячного ребенка и переместились в зал, подальше от окон. 
                            Через какое-то время во всех пабликах начали писать, что через час будет массовый обстрел города и всем необходимо пройти в укрытия.
                            Муж собрал пару рюкзаков в документами, подгузниками и другими необходимыми вещами для ребёнка, а я до последнего не могла поверить, что нам придется покинуть дом. Немного прийдя в себя, я доложила необходимые на мой взгляд вещи и собрала ребёнка. Мы приняли решение пройти к метро, заодно заглянуть в подвал нашего дома. Осмотрев подвал, мы поняли, что единственным выходом для нас на данный момент - спуститься в метро.
                            Когда мы спустились в метро, там уже было полно народа, кто-то сидел просто на полу, кто-то на каремате, другие люди разместились просто на ступенях. 
                            Как оказалось наши друзья, переехавшие на днях в наш район, тоже спустились в метро. В метро мы провели около 5 часов. Находиться там, да ещё и с маленьким ребенком было тяжело морально и физически. Мы все вместе приняли решение идти ночевать к друзьям, домой возвращаться нам показалось не безопасным, так как наша квартира находится на 9 этаже и дом расположен возле моста.
                            На утро друзья приняли решение выезжать из города электричкой, а дальше смотреть по ситуации и решать куда ехать дальше. Для нас такая дорога была нереальной с ребёнком, поэтому мы решили остаться в квартире у друзей.
                            Мы перебрались в коридор на пол и смогли наконец-то поспать пару часов за все время с начала войны. Запасов еды, воды, подгузников у нас было достаточно и мы были более-менее спокойны насколько это возможно во время войны. Но с каждым днём обстановка обострялась, ракетные удары стали наносить не только по военным объектам, но и по жилым домам. Последней точкой в нашем терпении на 6й день войны для нас стали истребители. Когда они пролетали над городом, тряслись стены дома. И мы поняли, что больше оставаться в городе у нас нет ни сил, ни желания. В этот вечер было много переписок и созвонов с друзьями, которые ещё оставались в городе. В один момент мы категорично решили, что завтра с утра выезжаем, а через час нас окутывал страх и паника, и мы думали остаться и ещё посмотреть на ситуацию. Ночь перед выездом из Харькова была бессонной и очень волнительной. Сам факт поездки с грудным ребенком в неизвестном направлении, пробки по всему маршруту, проблемы с топливом, ещё и истории обстрела гражданских автомобилей.
                            Наше путешествие началось с квеста вызвать такси, так как нам нужно было добраться в другой район к друзьям, которые согласились взять нас с собой в свою машину. Час волнения, но такси таки приехало к нам. 
                            В пути к нашему конечному пункту назначения мы провели 4 дня, останавливаясь каждую ночь на ночёвку. За это время мы научились в движении менять ребенку подгузник, развлекать, кормить и укладывать спать.
                            В каждом городе, где мы останавливались на ночёвку, нас встречали добрые, приветливые люди. Кто-то принимал нас у себя в доме, кто-то в квартире, везде нас кормили, выслушивали наши страшные истории, желали нам мира и отправляли в путь утром.
                            Сейчас мы живём на западе Украины, и о войне нам напоминают только сирены тревоги. Чтобы прийти в себя и начать хоть как-то возвращатьсч к жизни нам понадобилось больше месяца. Но страх нахождения возле окон, остался до сих пор.
                        </p>							    
                    </div>
                    <div className="col">
                        <div className="img-holder">
                            <img src={Image4} alt=""/>
                        </div>  											
                        <p className="post-text">
                            Когда мой папа заболел, то часто повторял маме слова цыганки, которая в молодости сказала ему: «Тебя нет, а в стране всенародное горе»….
                            И вот 24 февраля, через неделю после того, как мы навсегда попрощались с папой, я впервые за последние несколько месяцев очень крепко и спокойно спала. 
                            Ждала маму из Мелитополя в гости на 8 марта, у нас были планы полететь летом в Европу или на море, мы хотели продолжать жить дальше и быть рядом друг с другом. С подружками мы планировали в мае пожить пару месяцев в Европе, жизнь была прекрасной…
                            Утром меня разбудил звонок подружки, я даже не помню, что конкретно она говорила мне, но я ей не поверила. На всякий случай я встала с кровати, надела спортивный костюм и пошла готовить завтрак. Меня остановил звук взрыва и дрожащие окна, но я все ещё не верила, 
                            собиралась лечь спать обратно, как будто хотела уснуть и заново проснуться в другой реальности. Но тут началась суета в подъезде, машины стали уезжать со стоянки у дома… я начала связываться с друзьями, с подружками с которыми мы договорились быть вместе, если начнётся война, позвонила маме и разбудила ее, наверное самыми страшными словами в ее жизни: «Мама, нас бомбят, я бегу в метро…»
                            Дальше я быстро собрала тёплые вещи, документы, ноутбук и с мыслями, что завтра вернусь домой и возьму остальные вещи, уехала с Северной Салтовки. Домой я не вернулась…
                            Мы встретились с подружками на 23 августа, стояли в очередях за водой, наличкой и лекарствами. В это время мне звонили все родственники, и я старалась каждые пол часа быть на связи с мамой, так как Мелитополь тоже был под обстрелами. Какое-то время было тихо и мы сидели на лавочке у метро, грелись на солнышке, как только прозвучал сильный взрыв мы побежали в метро. Так быстро мы ещё не бегали, оказалось, что мы умеем очень быстро передвигаться с пакетами продуктов, воды, пледами и кошкой…
                            Прошла ночь в метро, мы боялись выходить, я была в панике, так как связи с родными в Мелитополе не было уже несколько часов...
                            Мы решили ехать обратно в квартиру, принять душ, выспаться, я даже рвалась поработать. Уже хотели выйти, как вдруг в метро начали забегать люди, толпами… нас продолжают бомбить…
                            Вечером нам удалось доехать до квартиры, привести себя в чувство насколько это возможно, а утром нужно было принимать решение что делать дальше. Ещё в первый день войны меня уговаривали уехать во Львов на корпоративном автобусе, но я была уверена, что 1-2 дня и все закончится. На утро точно не помню какого по счету дня войны, меня и двух моих подруг ждал автобус до Львове, но было решено посадить в этот автобус вместо нас родственников друга. Одна из моих подружек осталась в Харькове, а со второй нас забрали друзья и увезли из города.
                            Дальше был долгий путь до Хотина, все как в тумане, хочется рыдать не прекращая, потому что я не знаю, что с моими родными, мои близкие друзья в Харькове, сердце разрывается…
                            …на не помню какой по счету день войны, мы с подружкой перешли границу и оказались в Молдове, дальше каким-то неведомым чудом, с помощью молдавского пограничника мы, две хрупкие и напуганные девушки попали к очень доброй девушке волонтеру, которая отвезла нас в Румынию.
                            Нашей первой остановкой был отель-монастырь с очень заботливыми и добрыми людьми. Вечером мне позвонила мама, мы плакали вдвоём и не могли успокоиться:  « - Мама, я так счастлива, что с вами все хорошо! Как бабушка с дедушкой, как тётя с семьей?
                            ⁃ Дашуля, не переживай у нас все хорошо, город не обстреливают, они захватили аэродром. Мы очень переживали за тебя, надеялись, что ты выедешь из Харькова!
                            ⁃ Я выехала, все хорошо, я в безопасности, я вас люблю! Мне кажется это мне папа с небес помогал уехать и вас оберегал. Он же так нас любил, больше всего на свете.»
                            В Румынии в окружении оленей, милых котиков, прекрасных гор мы прожили больше двух недель в отеле у прекрасного и доброго человека, которого все местные зовут дедушкой. 
                            И поняли почему, он заботиться о всех людях действительно как о своих любимых внуках.
                            Дальше был Стамбул, мысли о том где и как жить дальше, решение о переезде в Польшу, поиски квартиры, 
                            несколько недель на посуточной квартире, и постоянные мольбы о том, что лишь бы была связь с родными, лишь бы мои друзья и коллеги в разных частях Украины, и родные в Мелитополе, лишь бы все были здоровы и невредимы….
                        </p>    							
                    </div>
                    <div className="col">
                        <div className="img-holder">
                            <img src={Image2} alt=""/>
                        </div>  											
                        <p className="post-text">
                            Моя история войны началась с 2014 года. Я вышла из дома г.Антрацита Луганской области и увидела что по ростовской трассе шли колонны машин с  русскими военными. За моим домом были поставлены грады, которые стреляли в соседние города. На предприятиях города были развешены русские флаги.Я собрала ручную кладь и выехала в Харьков через Россию,по Украине проезда не было,шли бои.Российские граждане, ошарашили своим взглядом на происходящее: "Правильно что бежите с Украины, эти бендеры ещё и на своем языке заставят вас говорить..." В споры я не вступала, пропаганда сделала свое дело, особенно если и отсутствует интеллект.
                            Харьков гостепреимно встретил  меня.Жизнь постепенно налаживалась.
                            И вот прошло восемь лет.
                            Писали что будет война, мозг это не воспринимал.Однажды проснулись от шума соседей под окном, весть была ужасная: " Война".
                            Хотелось надеяться, что это продлиться недолго, что такое невозможно в 21 веке и  весь мир должен остановить этот наглый геноцид.
                            Но это были всего лишь наши надежды.2 марта 2022года  резко засвистело на улице и комната озарилась ярким пламенем. Потом были взрывы 9 выпущенных ракет по Холодной горе. Мы быстро собрали вещи и отправились в Кременчуг.
                        </p>    							
                    </div>                   
                    <div className="col">
                        <div className="img-holder">
                            <img src={Image6} alt=""/>
                        </div>  											
                        <p className="post-text">
                            Всю ночь перед началом войны я практически не спала. В воздухе витала неосязаемая тревожность. Казалось, что вот-вот что-то да произойдёт. Вся семья была на взводе. 
                            Мы не находили себе места. Рюкзак с документами, медикаментами, жгутом, обезболивающим, антибиотиками, а также самым необходим был собран мною еще 14 февраля. 
                            В тот день я впервые испытала паническую атаку. В лёгких не хватало воздуха, скользкий ком встал поперёк горла, не давай глотнуть. Сердце билось так, словно вот-вот выпрыгнет из груди. 
                            Я задыхалась. Благо, в аптеке мне продали успокоительное. После чего приступ сошёл на нет. В тот день я долго сжимала спасительный блистер в кулаке, надеясь, что лекарство мне больше никогда не понадобиться.
                            В полночь, 24 февраля, несколько раз я бросила на уже пугающий меня рюкзак выжидающие взгляды, задавая себе вопрос: «Зачем я его собрала? Завтра все вытащу оттуда!». В два часа ночи, сама не знаю почему, я написала своему коллеге: «Как думаешь — война будет?». Он ответил, что нет и стоит ложиться спать. 
                            После чего я ненадолго уснула, а уже через три часа проснулась от взрывов. Муж смотрел в окно и молчал. Мы поняли друг-друга без слов. Слава Богу, мой сын так ничего и не понял. Будто робот, я бросила несколько свитеров и белье в чемодан, разбудила ребёнка, одела его и сказала, что мы собираемся в путешествие на машине. 
                            Он улыбнулся и спросонья кивнул. Я, закоренелый атеист, молила Бога, лишь бы все это оказалось какой-то ошибкой. На удивление, не проворонила ни одной слезы. Чуть позже, меня , конечно, прорвёт и я прорыдаю не один час, но первая реакция оказалась, на удивление, пугающей и одновременно неожиданной. Каждое действие, словно из немого, черно-белого кино, будто совершалось не мною. 
                            Несколько раз я ущипнула себя за руку — а вдруг мне все это сниться? Через минут двадцать мы приехали к родителям мужа, но едва услышали еще несколько отдаленных грохотов, как, схватив верхнюю одежду, ринулись в машину и двинулись в путь. А дальше нас ждали самые страшные дни в нашей жизни. Двое суток мы провели в дороге. 26 февраля добрались до Львова, где на два месяца нас приютил мой коллега. Сейчас мы находимся заграницей, но знаем, что Украина победит и совсем скоро мы сможем вернуться в наш родной Харьков!
                        </p>    							
                    </div>
                    <div className="col">
                        <div className="img-holder">
                            <img src={Image7} alt=""/>
                        </div>  											
                        <p className="post-text">                        
                            Для мене, як і для всіх в Україні війна почалася 24 лютого рано-вранці. Я прокинулась від шуму схожого на грім. Я підбігла до вікна:"що це?» -спитала чоловіка.
                            «Почалася війна!»- відповів він.
                            Я не повірила. І не вірила досить довго. Навіть коли бачила що відбувається на Північній Салтівці, мозок відмовлявся усвідомлювати що це по-справжньому.
                            Через деякий час зникла вода. Потім єлектропостачання, потім зв’язок. Стало неможливо зв’язатися з близькими, та дізнатися чи пережили вони ніч. Взагалі не було ніяких новин, ми не знали що відбувається у місті і й поза ним. А тим часом нас огорнула темрява і тиша, яка наповнювалася сиренами, градами, літаками, що пролітали над нами, і постійними вибухами.
                            Два тижні! Усього два тижні минуло від початку війни, але для мене це була вічність. Не могла спати, не хотілось їсти, я дуже схудла. І мені стало байдуже що буде далі. Якась тупа приреченість.
                            На вісімнадцятий день війни ми полишили свою домівку. Було дуже страшно їхати в нікуди, але й залишатися було нестерпно. Дороги були майже порожні. Нам зустрічалися лише військові. На блокпостах питали, чи потрібна нам вода, їжа, тощо.
                            Так ми доїхали до Кременчуга. Нас тепло зустріли, нагодували. Вдалося знайти квартиру, тож ми залишилися тут.
                            Вже три місяці, як Кременчуг став мені новим домом. Я ходжу цими вулицями, милуюся заходом сонця над Дніпром, наново вчуся жити, вчуся любити, вчуся радіти кожному дню. Війна нас дечому навчила, а саме помічати це життя!
                            Все буде добре) 
                            Зустрінемося у Харкові, після перемоги!))
                        </p>    							
                    </div>
                    <div className="col">
                        <div className="img-holder">
                            <img src={Image8} alt=""/>
                        </div>  											
                        <p className="post-text">  
                            24 февраля я проснулась около 5 утра, ничего удивительного, я часто просыпаюсь по
                            ночам и засыпаю вновь. В ту ночь не вышло, через пару минут раздался шум, мы с
                            кошкой переглянулись. Решила что это кто-то запускает фейерверки (обычное дело для
                            Салтовки) и открыла окно, это были отнюдь не фейерверки. До войны у нас с подругами
                            было что-то вроде пакта - в случае войны мы держимся вместе. Думаю мы не
                            единственные кто размышлял до - будет или нет и что же делать. Так мне позвонила одна
                            из подруг - необходимо собрать вещи и встретиться. В шоковом состоянии люди ведут
                            себя по разному, я не исключение. Я ответила что еще рано переживать, надо выспаться
                            и часов в 11 мы созвонимся вновь. Закончив разговор и сделав кофе ко мне пришло
                            осознание что сейчас самое время тревожиться. Звонили родственники уговаривая уехать
                            с ними, но у них было лишь одно место в машине, а у нас пакт, знаю что у подруг были те
                            же кейсы, какие хорошие у меня подруги (Даше и Яне привет). Через пол часа вещи были
                            собраны, кошка в переноске, мы на пути к метро. И вот трое нас не считая кошки на
                            Историческом музее. Поезда еще ходят, кое-кто такие же тревожные как и мы уже были с
                            вещами. Помню мест на ступеньках не было и мы расстелили плед и сели на полу. К нам
                            несколько раз подходили проходящие мимо люди и с улыбкой спрашивали - “что,
                            боитесь?”, несколько человек даже снимали на телефон, ох уж это чувство что еще
                            немного и ты станешь звездой дня ХХ (<s>Восхитительного</s> Харькова). Где-то через часа пол
                            движение поездов в метро остановили, людей стало больше.
                            Первая ночь прошла без сна, все сидели в вагонах, разговаривали, шутили,
                            дискутировали. Спасибо женщине которая рассказывала мне про то что Путин Рептилоид
                            (вы не дали мне заскучать). Так прошла первая ночь, утром люди покинули метро,
                            остались мы с подругами и несколько таких же тревожных. К обеду я не выдержала и
                            решила ехать обратно домой. Такси уже подъехало, осталось только подняться по
                            неработающему эскалатору, однако как только пришло оповещение что такси на месте, в
                            метро спеша стало спускаться много людей. Я все еще была решительно настроена
                            отправиться домой, меня остановил мужчина сказав что я сумасшедшая и ни в коем
                            случае нельзя подниматься наверх - начался обстрел градами, а у меня началась
                            истерика (маленькая такая). Спасибо моим подругам и людям рядом которые меня
                            успокоили. Вечером мы все же покинули метро. Подруги решили уезжать, я же все еще
                            никак не хотела покидать Харьков. Так утром 26 февраля мы попрощались и я
                            отправилась к себе домой на Салтовку.
                            По возвращению домой первым делом я занялась укреплением своей <s>крепости</s> квартиры
                            (спасибо каналу bezdomnie.ua за правило двух стен). В одну из следующих ночей был
                            сильный обстрел, не помню дату, помню что небо было красным, кажется попали в
                            газопровод или нефтебазу. Также помню что мне было очень страшно, это отвратительное
                            чувство беспомощности, ты просто сидишь у себя на 9 этаже и гадаешь в твой дом
                            прилетит или нет. И чувствуешь себя скверно от того что мысленно просишь - лишь бы не
                            в мой, а рядом столько домов, и если не в твой то в соседний.. отвратительно. Но у меня
                            была поддержка - друзья которые постоянно были на связи, коллега который после
                            мощного обстрела позвонил мне и успокаивал, объясняя как правильно дышать, хотя сам
                            с моего района, вот у кого нервы железные (привет Дим).
                            28 февраля поместив все самое ценное в чемодан и переноску я отправилась на
                            Алексеевку к друзьям (вместе веселее). Многие кстати упоминали про обнаглевших
                            таксистов, но мне такие не попадались. Ехали долго, через Киевскую, это была нелегкая
                            поездка, я пыталась не смотреть в окно. Проезжая мы увидели разбитую машину с
                            мертвым человеком внутри, в это время водитель общался со своими детьми по громкой
                            связи - им было очень страшно, они говорили что громко бахает, а водитель обещал что
                            довезет меня и вернется к ним. Когда мы подъезжали к точке назначения где-то рядом с
                            нами раздался взрыв (я ничего не видела, только слышала), приехав к друзьям я узнала
                            что люди вышедшие за водой на Павловом Поле попали под обстрел.
                            1 марта ночью начался обстрел зенитными ракетами, мы ушли прятаться в тамбур, 3
                            взрослых, 4 месячный ребенок и кошка. Я помню как облокотившись на стену
                            почувствовала как дрожит дом - стены, пол, но уже не было так страшно как в начале.
                            Люди быстро ко всему привыкают. Мы поняли что пора уезжать, мне позвонила подруга и
                            сказала что утром меня заберет ее муж (привет Таня). 2 марта в 7 утра мы покинулим
                            Харьков, последняя запись в альбоме - видео разрушенного дома на Холодной Горе.
                            Не буду расписывать весь дальнейший путь, в противном случае получится сочинение в
                            двух томах. Скажу только что всю дорогу мне попадались хорошие, добрые, готовые
                            помочь люди - в Полтаве, Кременчуге, Львове, Люблине, Вроцлаве. Им было не важно на
                            каком языке я говорю, откуда я, они искренне хотели помочь. Сейчас я в Польше, в
                            безопасности. Я уехала от войны, не пострадала от нее, не видела много горя, но она
                            будто шрапнелью ранила меня в самую душу, и раны пусть и затягиваются но не
                            заживают. Чувтсво безмерной тоски, тоски по временам “до”, и попытки построить свое
                            “после”, ожидание нашей Победы.                      
                        </p>    							
                    </div>
                </Masonry>
            </div> 
      </section>
    )
}

export default Stories