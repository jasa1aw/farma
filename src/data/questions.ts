
export const shuffleArray = <T>(array: T[]): T[] => {
	return array
		.map((item) => ({ item, sort: Math.random() }))
		.sort((a, b) => a.sort - b.sort)
		.map(({ item }) => item)
}
export const questions = [
	{
		id: 1,
		question: "Дәріхана қоймасында дәрілік бақбақтың тамыры кептірілді. Тамырларды кептіруді аяқтау үшін қандай белгі маңызды?",
		answers: [
			{ text: "тамырлар тән жарылыспен бұзылады", correct: true },
			{ text: "тамырлар серпімді, жұмсақ болады", correct: false },
			{ text: "топырақ тамырдан оңай бөлінеді", correct: false },
			{ text: "тынған тамырлар қарайады", correct: false },
			{ text: "тамырлар қолды ластамайды", correct: false },
		],
	},
	{
		id: 2,
		question:
			`"Мукалтин" препаратын өндіруге арналған фармацевтикалық кәсіпорын дәрілік өсімдік шикізатын сатып алды.  Жүргізілген талдаулар шикізат сапасының оның сертификатына сәйкестігін растады.
			«Мукалтин» қандай дәрі ретінде қолданылады?`,
		answers: [
			{ text: "қақырық шығаратын", correct: true },
			{ text: "спазмолитикалық", correct: false },
			{ text: "қармалаушы", correct: false },
			{ text: "ауруды басатын құрал", correct: false },
			{ text: "иммуностимуляторлық", correct: false },
		],
	},
	{
		id: 3,
		question:
			`Қабылдау пунктіне жеке жинаушы зығыр шөптері болып табылатын шикізатты ұсынды .
Бұл өсімдіктің қай бөлігі ресми дәрілік шикізат болып табылады?
`,
		answers: [
			{ text: "тұқым", correct: true },
			{ text: "гүлдер", correct: false },
			{ text: "қабық", correct: false },
			{ text: "тамырлар", correct: false },
			{ text: "жапырақ", correct: false },
		],
	},
	{
		id: 4,
		question:
			`Дәріханаға "итмұрын жемістері" дәрілік шикізатын қабылдау кезінде шикізаттың сарай зиянкестерімен залалдануының III дәрежесі бар екені анықталды. Бұл жағдайда дәрілік шикізатпен не істеу керек?`,
		answers: [
			{ text: "жағу, пайдаланбайды", correct: true },
			{ text: "дезинсекциясыз пайдалану", correct: false },
			{ text: "дезинсекциядан кейін қолдану", correct: false },
			{ text: "шектеусіз пайдалану", correct: false },
			{ text: "електен кейін қолдану", correct: false },
		],
	},
	{
		id: 5,
		question:
			`Қабылдауға дәрілік өсімдік шикізатының "күнбағыс тұқымы" партиясы келіп түсті, онда ІІ және ІІІ дәрежелі қамба зиянкестерімен залалдану анықталды. Қалай ?`,
		answers: [
			{ text: "жеке препараттарды алу үшін қабылдау", correct: true },
			{ text: "сұрыптаудан кейін қабылдау", correct: false },
			{ text: "қайта талдауды да қабылдамаңыз", correct: false },
			{ text: "Ешқандай жағдайда қабылдауға болмайды", correct: false },
			{ text: "Гален препараттарын дайындау үшін қабылдау", correct: false },
		],
	},
	{
		id: 6,
		question:
			`Кәдімгі жұпаргүл баурайларын зерттеу кезінде оның пайдалану қоры 200 кг болатын  массивінде анықталды.Осы аймақ үшін жұпаргүл табиғи қопасының қалпына келу мерзімі-3 жыл.
Бұл шөпке арналған жұпаргүл жыл сайынғы жинау көлемі қандай ?
`,
		answers: [
			{ text: "50 кг", correct: true },
			{ text: "100 кг", correct: false },
			{ text: "80 кг", correct: false },
			{ text: "200 кг", correct: false },
			{ text: "40 кг", correct: false },
		],
	},
	{
		id: 7,
		question:
			`Медициналық тәжірибеде ауыз қуысының созылмалы қабыну аурулары, катаральды және ойық жаралы некротикалық гингивит, стоматит, периодонтальды ауруларда қолданылатын қоюландырылған "Сальвин" ацетонын алу үшін қандай дәрілік өсімдік шикізатын қолдану керек?`,
		answers: [
			{ text: "сәлбен (Шалфей) дәрілік жапырақтары", correct: true },
			{ text: "орыс горичникінің тамыры", correct: false },
			{ text: "тамыры мия жағатын", correct: false },
			{ text: "дәрілік жоңышқа шөбі", correct: false },
			{ text: "псоралеяның жемісі", correct: false },
		],
	},
	{
		id: 8,
		question:
			`Дәріханаға дәрілік өсімдіктер кірді: дала қырықбуыны, кәдімгі сасықшөп, шілтер жапырақты шайқурай, үштармақ итошаған, дәрілік бақбақ. Төмендегі өсімдіктердің қайсысы Lamiaceae тұқымдасына жатады?`,
		answers: [
			{ text: "кәдімгі сасықшөп", correct: true },
			{ text: "дала қырықбуыны", correct: false },
			{ text: "дәрілік бақбақ", correct: false },
			{ text: "үштармақ итошаған", correct: false },
			{ text: "шілтер жапырақты шайқурай", correct: false },
		],
	},
	{
		id: 9,
		question:
			`Стандарттау жүргізу үшін сынақ зертханасына "Фенхель жемістері"дәрілік өсімдік шикізаты ұсынылды. Қандай оның қолданыстағы заттар және қандай тәсілмен анықтайды?`,
		answers: [
			{ text: "эфир майлары, су буымен айдау", correct: true },
			{ text: "су сығындысындағы таниндер", correct: false },
			{ text: "гликозидтер, 80% - м этанол", correct: false },
			{ text: "флавоноидтар, газ сұйықтығы хроматографиясы", correct: false },
			{ text: "алкалоидтар, сілті экстракциясы", correct: false },
		],
	},
	{
		id: 10,
		question:
			`Микроскопиялық талдауға "Меңдуана жапырағы" шикізаты келіп түсті, оның диагностикалық белгілерінің бірі әртүрлі жасушалық қосындылардың болуы болып табылады. Берілген шикізаттағы кальций оксалатының қосылыстарының микроскопиялық көрінісі қандай?`,
		answers: [
			{ text: "друздар", correct: true },
			{ text: "рафидтер", correct: false },
			{ text: "призмалық кристалдар", correct: false },
			{ text: "кристалды құм", correct: false },
			{ text: "сферокристалдар", correct: false },
		],
	},
	{
		id: 11,
		question:
			`Талдауға "белладонна жапырақтары" дәрілік өсімдік шикізаты әсер етуші Затты сандық анықтау үшін алынды. Белладонна жапырақтарындағы гиосциаминге қатысты алкалоидтардың мөлшерін анықтау үшін қандай титрант қолданылады?`,
		answers: [
			{ text: "натрий гидроксиді", correct: true },
			{ text: "калий перманганаты ", correct: false },
			{ text: "хлорсутек қышқылы", correct: false },
			{ text: "калий дихроматы ", correct: false },
			{ text: "калий дихроматы ", correct: false },
		],
	},
	{
		id: 12,
		question:
			`Жаңа "Эрготал" препаратын өндіруге арналған фармацевтикалық кәсіпорын "эрготал мүйізі"шикізатын сатып алды. Кәсіпорынның сынақ зертханасы шикізаттың сапалылығын анықтау мақсатында оған талдау жүргізді. Осы дәрілік шикізатты стандарттау кезінде қандай биологиялық белсенді қосылыстардың құрамын анықтау керек?`,
		answers: [
			{ text: "алкалоидтар", correct: true },
			{ text: "лигнандар", correct: false },
			{ text: "кумариндер", correct: false },
			{ text: "хромондар", correct: false },
			{ text: "терпеноидтар", correct: false },
		],
	},
	{
		id: 13,
		question:
			`Зертханаға талдау үшін белгісіз дәрілік өсімдік шикізаты келіп түсті. Макроскопиялық зерттеу жүргізу кезінде шикізаттың келесі сыртқы белгілері анықталды: жапырақтары тұтас, эллиптикалық пішінді, жоғарғы жағына бағытталған, тұтас, негізге қысқа жапырақшамен, жұқа, сынғыш, ұзындығы 20 см - ге дейін, ені 10 см-ге дейін. Иісі әлсіз, ерекше. Дәмі анықталмайды. Бұл сипаттама қандай дәрілік өсімдік шикізатына сәйкес келеді?`,
		answers: [
			{ text: "қарапайым Белладонна", correct: true },
			{ text: "қара Меңдуана", correct: false },
			{ text: "үлкен Сүйелшөп", correct: false },
			{ text: "ланцетті Термопсис", correct: false },
			{ text: "қарапайым сасық меңдуана", correct: false },
		],
	},
	{
		id: 14,
		question:
			`Талдауға дәрілік өсімдік шикізаты келіп түсті. Микроскоппен қараған кезде жапырақтардың екі жағында ұзындығы бойымен созылған эпидермис жасушалары көрінеді. Стоматалар батырылған, дөңгелек, эпидермистің 4 жасушасымен қоршалған. Жоғарғы эпидермистің астында жапырақтың еніне созылған алдыңғы қатарлы тіндердің жасушалары көрінеді. Жіңішке мата бос. Жекелеген жасушаларда мезофилла көрінетін түйіндер жіңішке рафид және ірі инелі кристалдар оксалата кальций.Туралы қандай дәрі-дәрмек өсімдік шикізаты туралы айтылады?`,
		answers: [
			{ text: "меруертгүл", correct: true },
			{ text: "қосүйлі қалақай", correct: false },
			{ text: "дәрілік шалфей", correct: false },
			{ text: "бұрышты жалбыз", correct: false },
			{ text: "үшкіржапырақты кассия ", correct: false },
		],
	},
	{
		id: 15,
		question:
			`Кептіру жұмыстарын жүргізу үшін дайындау пунктіне «Көктемгі жанаргүл шөбі» дәрілік өсімдік материалы алынды. Қандай белгі осы шикізатты кептірудің аяқталуын бағалауға мүмкіндік береді?`,
		answers: [
			{ text: "жапырақтардың сабақтары мен жапырақшалары майысқан кезде сынғыш болады, майыспайды", correct: true },
			{ text: "жапырақтары мен сабақтарының түсі ашық болады", correct: false },
			{ text: "шөпті шайқаған кезде жапырақтары оңай түседі.", correct: false },
			{ text: "шөптегі белсенді заттардың құрамы нормативтік құжаттаманың талаптарына сәйкес келеді", correct: false },
			{ text: "жапырақтың сабақтары мен жапырақшалары сынбайды, майысып қалады", correct: false },
		],
	},
	{
		id: 16,
		question:
			`Сынақ зертханасы дайындаушылардан қоймаға келіп түскен «аю жидек жапырақтары» шикізатына талдау жасады. Талдау нәтижелері оң болды. Осы дәрілік шикізатты талдау кезінде қандай биологиялық белсенді қосылыстардың құрамын анықтау керек?`,
		answers: [
			{ text: "фенолдық гликозидтер", correct: true },
			{ text: "жүрек гликозидтері", correct: false },
			{ text: "сесвитерпен гликозидтер", correct: false },
			{ text: "тритерпенді сапониндер", correct: false },
			{ text: "монотерпенді гликозидтер", correct: false },
		],
	},
	{
		id: 17,
		question:
			`"Родиола қызғылт тамырлары" дәрілік шикізатын дәріханаға қабылдау кезінде шикізатты пайдаланбай жағу туралы шешім қабылданды. Мұндай шешімге не себеп болуы мүмкін?`,
		answers: [
			{ text: "III дәрежелі зиянкестерімен инфекция", correct: true },
			{ text: "II дәрежелі зиянкестерімен инфекция", correct: false },
			{ text: "кейбір даналардың қараюы", correct: false },
			{ text: "шикізат артық кептірілген", correct: false },
			{ text: "шикізаттан минералды қоспалар табылды", correct: false },
		],
	},
	{
		id: 18,
		question:
			`Келуші мия тамырын сатып алу үшін дәріханаға жүгінді, бірақ олар жоқ.Биологиялық белсенді қосылыстардың құрамы мен мақсаты бойынша қолданыстағы дәрілік шикізаттың қайсысы мия тамырын алмастыра алады?`,
		answers: [
			{ text: "Өгейшөп жапырақтары, жұпаргүл шөбі", correct: true },
			{ text: "софора гүлдері, аралия тамыры", correct: false },
			{ text: "Жалбыз жапырақтары, итмұрын жемістері", correct: false },
			{ text: "Зығыр тұқымдары, емен қабығы", correct: false },
			{ text: "Жостер жемістері, шырғанақ қабығы", correct: false },
		],
	},
	{
		id: 19,
		question:
			`Гипохолестеролемиялық агент ретінде атеросклероздың кешенді терапиясында қолданылатын полиспониннің құрғақ тазартылған сығындысын алу үшін қандай дәрілік өсімдік материалын қолдану керек?`,
		answers: [
			{ text: "Диоскорея тамыры бар тамырлар", correct: true },
			{ text: "Бақбақ тамырлары", correct: false },
			{ text: "Мия тамыры", correct: false },
			{ text: "Дәрілік шүйгіншөп тамырлары бар тамырлар", correct: false },
			{ text: "Көкшегүл тамырлары бар тамырлар", correct: false },
		],
	},
	{
		id: 20,
		question:
			`Дәріханаға келуші табылмаған шырғанақ қабығын алу үшін хабарласқан. Қолда бар дәрілік шикізаттың қайсысы шырғанақ қабығын алмастыра алады?`,
		answers: [
			{ text: "Жостер жемісі, сенна жапырақтары", correct: true },
			{ text: "Емен қабығы, жылан таран тамырлары", correct: false },
			{ text: "Альтея тамыры, итошаған шөбі", correct: false },
			{ text: "Түймешетен гүлдері, иммортель гүлдері", correct: false },
			{ text: "Аю жидек жапырақтары, қызылжидек жапырақтары", correct: false },
		],
	},
	{
		id: 21,
		question:
			`Фармацевтикалық қоймаға «Сенна жапырақтары» дәрілік өсімдік шикізатының партиясы түсті, онда негізгі белсенді ингредиенттердің болуын растау қажет. Бұл дәрілік шикізатта антрацен туындыларын анықтауға қандай реагент мүмкіндік береді?`,
		answers: [
			{ text: "10% натрий гидроксиді ерітіндісі", correct: true },
			{ text: "3% темір хлоридінің ерітіндісі", correct: false },
			{ text: "10% қорғасын ацетаты ерітіндісі", correct: false },
			{ text: "Молиш реактиві", correct: false },
			{ text: "Майер реактиві", correct: false },
		],
	},
	{
		id: 22,
		question:
			`Белсенді заттарды сандық анықтау үшін талдауға «Қызыл долана гүлдері» дәрілік өсімдік материалдары ұсынылды. Қанды қызыл долана гүлдеріндегі гиперозидтің құрамын қандай әдіспен анықтайды?`,
		answers: [
			{ text: "Спектрофотометриялық", correct: true },
			{ text: "Титриметриялық", correct: false },
			{ text: "Гравиметриялық", correct: false },
			{ text: "Фотометриялық", correct: false },
			{ text: "Фотоколориметриялық", correct: false },
		],
	},
	{
		id: 23,
		question:
			`Белсенді заттарды сандық анықтау үшін талдауға «Жүгері көк гүлдері» дәрілік өсімдік шикізаты ұсынылды. Бұл шикізатта қандай белсенді заттар анықталады және қандай әдіс қолданылады?`,
		answers: [
			{ text: "Спектрофотометрия бойынша антоцианиндер қосындысы", correct: true },
			{ text: "Алкалоидтардың қосындысын бейтараптандыру", correct: false },
			{ text: "Дистилляция арқылы эфир майлары", correct: false },
			{ text: "Спектрофотометрия бойынша флавоноидтардың қосындысы", correct: false },
			{ text: "Гравиметрия бойынша полисахаридтер", correct: false },
		],
	},
	{
		id: 24,
		question:
			`Дәріхана қоймасына дәрілік өсімдік шикізатының партиясы келді, одан диуретикалық жинақ жасау қажет. Осы мақсатта негізгі компонент ретінде қандай дәрілік өсімдік материалын қолдануға болады?`,
		answers: [
			{ text: "құлпынай жапырақтары", correct: true },
			{ text: "жалбыз жапырақтары", correct: false },
			{ text: "шәңкіш қабығы", correct: false },
			{ text: "жостер жемістері", correct: false },
			{ text: "жостер жемістері", correct: false },
		],
	},
	{
		id: 25,
		question:
			`Кәдімгі жыланның латынша атауы қандай?`,
		answers: [
			{ text: "Vipera berus", correct: true },
			{ text: "Apis mellifica", correct: false },
			{ text: "Ancistrodon blomhoffi", correct: false },
			{ text: "Vipera lebetina", correct: false },
			{ text: "Naja oxiana", correct: false },
		],
	},
]
