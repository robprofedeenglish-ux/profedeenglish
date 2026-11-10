/* Test de nivel de inglés · Real English With Rob · profedeenglish.com/test-de-nivel
   Todo funciona en el navegador: no se guarda nada (ni cookies ni almacenamiento) y no se envía nada a ningún servidor.
   Las preguntas, textos y grabaciones son material original de Rob, basado en el formato de los exámenes de Cambridge English. */
const DATA = {};
DATA.A2 = {
  code: 'A2',
  name: 'A2 Key',
  below: 'A1',
  above: 'B1',
  audio: null,
  quick: ['a2-p3', 'a2-p4', 'a2-p5'],
  full: ['a2-p1', 'a2-p2', 'a2-p3', 'a2-p4', 'a2-p5'],
  quickWriting: ['a2-w1', 'a2-w2'],
  fullWriting: ['a2-w1', 'a2-w2'],
  sections: {

    'a2-p1': {
      part: 'Reading Part 1', skill: 'reading',
      instructions: 'For each question, choose the correct answer.',
      questions: [
        { n: 1, type: 'radio', notice: '<strong>For Sale</strong><br>Electric guitar (small size)<br>Barely used, includes carry case<br>Text Maria – 0798 123 456',
          options: [['A', 'The guitar comes with a case.'], ['B', 'Maria wants to buy a new guitar.'], ['C', 'You must phone Maria to buy it.']], answer: 'A' },
        { n: 2, type: 'radio', notice: '<em>Hi Sam</em><br>I\'ve booked a table at the new pizza place for 7pm. Can you let me know if you\'re going to be late?<br><em>Josh</em>',
          options: [['A', 'Josh wants to know if Sam is free tonight.'], ['B', 'Josh has already ordered food for Sam.'], ['C', 'Josh wants Sam to say if he won\'t arrive on time.']], answer: 'C' },
        { n: 3, type: 'radio', notice: '<strong>CITY MUSEUM</strong><br>Free entry on Sundays<br>Guided tours at 11 a.m. and 2 p.m.',
          options: [['A', 'You must pay to visit on Sundays.'], ['B', 'There are two tours every day.'], ['C', 'The museum only opens on Sundays.']], answer: 'B' },
        { n: 4, type: 'radio', notice: '<em>Maya</em><br>The film starts at 7.30 but I finish work at 7. Let\'s meet at 7.45 outside the cinema.<br><em>Priya</em>',
          options: [['A', 'Priya will get to the cinema before the film starts.'], ['B', 'Priya wants to arrive a little after the film begins.'], ['C', 'Priya isn\'t sure if she can go to the cinema.']], answer: 'B' },
        { n: 5, type: 'radio', notice: '<strong>GREEN\'S BAKERY</strong><br>All bread half price after 5 p.m.<br>Come early for the best choice!',
          options: [['A', 'Bread is cheaper later in the day.'], ['B', 'The bakery closes at 5 p.m.'], ['C', 'There is always plenty of bread in the evening.']], answer: 'A' },
        { n: 6, type: 'radio', notice: '<em>Leo</em><br>Don\'t forget we need to finish the science project by Monday. Can you send me your notes tonight?<br><em>Ellie</em>',
          stem: 'Why did Ellie write this message?',
          options: [['A', 'to ask Leo to send her some work'], ['B', 'to tell Leo that the project is finished'], ['C', 'to invite Leo to her house']], answer: 'A' }
      ]
    },

    'a2-p2': {
      part: 'Reading Part 2', skill: 'reading',
      instructions: 'For each question, choose the correct answer.',
      title: 'Young podcast makers',
      passage: '<p><strong>Mia</strong><br>I make a podcast about music history, and I also write a column for my college newspaper. I love replying to questions that listeners send me – it\'s nice to know I\'ve helped people learn something new. My podcast has been running for two years now, and I don\'t plan to stop any time soon, even though I\'m very busy with college work most weeks.</p><p><strong>Zara</strong><br>I started a cooking podcast last year because I love trying new recipes. Studying and recording episodes in the same week isn\'t easy, and some weeks I don\'t have enough hours in the day for both. I think I\'ll stop making new episodes soon, though – I want to spend more time on my final college project, so this will probably be my last year doing it.</p><p><strong>Priya</strong><br>Talking into a microphone comes much more naturally to me than writing essays, so my travel podcast feels far easier than any of my college assignments. Almost nobody listened when I first started, but now quite a lot of people download each episode. When I can\'t decide what to talk about, I ask my older brother, who always has good ideas for new topics.</p>',
      sharedOptions: [['A', 'Mia'], ['B', 'Zara'], ['C', 'Priya']],
      questions: [
        { n: 7, type: 'shared', stem: 'Who writes both a podcast and something else?', answer: 'A' },
        { n: 8, type: 'shared', stem: 'Who says that studying and making a podcast at the same time can be hard?', answer: 'B' },
        { n: 9, type: 'shared', stem: 'Who answers questions from people who listen to her podcast?', answer: 'A' },
        { n: 10, type: 'shared', stem: 'Who plans to stop making her podcast soon?', answer: 'B' },
        { n: 11, type: 'shared', stem: 'Who didn\'t have many listeners in the beginning?', answer: 'C' },
        { n: 12, type: 'shared', stem: 'Who asks a member of her family to help her with her podcast?', answer: 'C' },
        { n: 13, type: 'shared', stem: 'Who says making a podcast is easier than another type of writing?', answer: 'C' }
      ]
    },

    'a2-p3': {
      part: 'Reading Part 3', skill: 'reading',
      instructions: 'For each question, choose the correct answer.',
      title: 'A family of chefs',
      passage: '<p>The Bennett family are all passionate about cooking. These days, Laura Bennett runs a small restaurant, but for many years she was head chef at a well-known hotel. Her father, Peter, also worked there for a long time, as the hotel\'s baker.</p><p>Laura\'s son Ollie started helping in the kitchen as soon as he could reach the counter. \'I never pushed him into it,\' says Laura, \'he just always wanted to be there.\' Now aged seventeen, Ollie works part-time at the same restaurant where his mother was once head chef.</p><p>Laura\'s husband, Marcus, is a plumber. They met when he came to fix a leak at the hotel where she was working, and they married a year later. \'When Ollie started cooking, our kitchen at home was far too small for two of us, so I built him his own outdoor kitchen in the garden. Now I can watch football in peace!\' he says.</p><p>Last month, Ollie was asked to cook at a big food festival. Naturally, Laura and Peter were there to watch, and even Marcus came along, which meant a great deal to Ollie. Marcus says, \'I don\'t know much about cooking myself, but it was brilliant watching Ollie cook in front of all those people!\' Ollie used a recipe that Peter had taught Laura many years earlier.</p><p>\'It was a proud day for all of us,\' says Peter. \'Ollie\'s style in the kitchen reminds me so much of Laura\'s. I know I\'m his grandfather, but I really think he has a great future ahead of him!\'</p>',
      questions: [
        { n: 14, type: 'radio', stem: 'What is Laura Bennett\'s job now?', options: [['A', 'chef'], ['B', 'restaurant owner'], ['C', 'baker']], answer: 'B' },
        { n: 15, type: 'radio', stem: 'Ollie had his first cooking experience', options: [['A', 'at a very young age.'], ['B', 'at the hotel where Laura worked.'], ['C', 'from his mother directly.']], answer: 'A' },
        { n: 16, type: 'radio', stem: 'Marcus helped his wife and son by', options: [['A', 'moving to a bigger house.'], ['B', 'letting them use the kitchen at home.'], ['C', 'building a place for them to cook in.']], answer: 'C' },
        { n: 17, type: 'radio', stem: 'What was the best thing about the food festival for Ollie?', options: [['A', 'It was his first time cooking professionally.'], ['B', 'All his family were there.'], ['C', 'He used a new recipe.']], answer: 'B' },
        { n: 18, type: 'radio', stem: 'Peter says that Ollie', options: [['A', 'will be a star chef one day.'], ['B', 'is his favourite grandchild.'], ['C', 'cooks better than Laura did.']], answer: 'A' }
      ]
    },

    'a2-p4': {
      part: 'Reading Part 4', skill: 'vocabulary',
      instructions: 'For each question, choose the correct answer.',
      title: 'The invention of the chocolate chip cookie',
      passage: '<p>Ruth Wakefield was born in Massachusetts in 1903. As a young woman, she had many interests, but it was the <span class="gap">(19)</span> of cooking that really interested her. She and her husband later opened a small inn, where she cooked meals for guests every day.</p><p>One afternoon, she was <span class="gap">(20)</span> to make a batch of chocolate cookies, but she had run out of the right kind of chocolate. She quickly found a clever <span class="gap">(21)</span> to solve the problem – she broke a chocolate bar into small pieces and mixed them into the cookie dough. At that <span class="gap">(22)</span> nobody had ever made cookies quite like this before.</p><p>Guests loved the new cookies so much that Ruth and her husband <span class="gap">(23)</span> a small bakery next to the inn to sell them. Soon, chocolate chip cookies <span class="gap">(24)</span> one of the most popular snacks in the whole country.</p>',
      questions: [
        { n: 19, type: 'radio', inline: true, options: [['A', 'hobby'], ['B', 'subject'], ['C', 'course']], answer: 'B' },
        { n: 20, type: 'radio', inline: true, options: [['A', 'thinking'], ['B', 'trying'], ['C', 'deciding']], answer: 'B' },
        { n: 21, type: 'radio', inline: true, options: [['A', 'way'], ['B', 'path'], ['C', 'plan']], answer: 'A' },
        { n: 22, type: 'radio', inline: true, options: [['A', 'day'], ['B', 'time'], ['C', 'hour']], answer: 'B' },
        { n: 23, type: 'radio', inline: true, options: [['A', 'brought'], ['B', 'turned'], ['C', 'opened']], answer: 'C' },
        { n: 24, type: 'radio', inline: true, options: [['A', 'began'], ['B', 'arrived'], ['C', 'became']], answer: 'C' }
      ]
    },

    'a2-p5': {
      part: 'Reading Part 5', skill: 'grammar',
      instructions: 'For each question, write the correct answer. Write <strong>one word</strong> for each gap.',
      title: 'An email from Portugal',
      passage: '<p><em>From: Tom &nbsp;&nbsp; To: Sam</em></p><p>I hope <strong>(0) you</strong> are well. I\'m having a wonderful time here in Portugal. Our apartment is lovely and there is a nice beach close <span class="gap">(25)</span> it.</p><p>Yesterday afternoon, we went to <span class="gap">(26)</span> old town and looked around some shops. We had dinner <span class="gap">(27)</span> a small restaurant near the harbour. Everyone enjoyed themselves and we didn\'t get back <span class="gap">(28)</span> eleven o\'clock. Tomorrow, we\'re planning <span class="gap">(29)</span> go cycling, or maybe visit a museum instead.</p><p>I\'ll tell you all about it when I <span class="gap">(30)</span> home.</p><p>See you soon,<br>Tom</p>',
      questions: [
        { n: 25, type: 'text', accept: ['to'] },
        { n: 26, type: 'text', accept: ['the'] },
        { n: 27, type: 'text', accept: ['at', 'in'] },
        { n: 28, type: 'text', accept: ['until', 'till', "'til", 'til'] },
        { n: 29, type: 'text', accept: ['to'] },
        { n: 30, type: 'text', accept: ['get', 'return', 'arrive', 'come'] }
      ]
    }
  },

  writing: {
    'a2-w1': {
      part: 'Writing Part 6',
      brief: 'You want to go to a football match on Saturday with your English friend, Jamie.<br><br>Write an email to Jamie. In your email:<ul><li>ask Jamie to go to the football match with you on Saturday</li><li>say which team you want to watch</li><li>say how you will travel to the stadium.</li></ul>',
      words: 'Write 25 words or more.'
    },
    'a2-w2': {
      part: 'Writing Part 7',
      brief: 'Look at the three pictures. Write the story shown in the pictures.',
      image: '/test-de-nivel/historia.png',
      words: 'Write 35 words or more.'
    }
  }
};

DATA.B1 = {
  code: 'B1',
  name: 'B1 Preliminary',
  below: 'A2',
  above: 'B2',
  audio: 'B1',
  quick: ['b1-p3', 'b1-p5', 'b1-p6', 'b1-lis'],
  full: ['b1-p1', 'b1-p2', 'b1-p3', 'b1-p4', 'b1-p5', 'b1-p6', 'b1-lis'],
  quickWriting: ['b1-w1'],
  fullWriting: ['b1-w1', 'b1-w2'],
  sections: {

    'b1-p1': {
      part: 'Reading Part 1', skill: 'reading',
      instructions: 'For each question, choose the correct answer.',
      questions: [
        { n: 1, type: 'radio', notice: '<strong>Win a Holiday<br>COMPETITION</strong><br>Entries will only be accepted from people who have lived in the local area for at least two years.',
          options: [['A', 'The competition is open to anyone, regardless of how long they have lived locally.'], ['B', 'There is a minimum length of local residence required to enter.'], ['C', 'Only people born in the local area can enter this competition.']], answer: 'B' },
        { n: 2, type: 'radio', notice: '<em>Ben</em><br>For the trip, could you check the train times and text me the departure time? I\'ve already booked the hotel, so we just need to sort the journey.<br><em>Chloe</em>',
          stem: 'Chloe is telling Ben to', options: [['A', 'book the train tickets for her.'], ['B', 'find out some information.'], ['C', 'give her money for the hotel.']], answer: 'B' },
        { n: 3, type: 'radio', notice: '<strong>STAFF ONLY</strong><br>Visitors must not enter this area unless accompanied by an employee.',
          options: [['A', 'Employees must have a visitor with them to enter this area.'], ['B', 'Visitors can\'t come in unless a staff member is with them.'], ['C', 'Visitors may enter if an employee gives permission by phone.']], answer: 'B' },
        { n: 4, type: 'radio', notice: '<em>Grace</em><br>I need to leave earlier than expected in the morning, so could you feed the cat and lock the back door when you go out? Thanks so much!<br><em>Noah</em>',
          options: [['A', 'Noah wants Grace to do a couple of chores before she leaves.'], ['B', 'Noah is asking Grace to wake him up early.'], ['C', 'Noah is reminding Grace to lock the door when she gets home.']], answer: 'A' },
        { n: 5, type: 'radio', notice: '<strong>FREE MAPS OF THE TOWN ARE AVAILABLE FROM THE TOURIST INFORMATION OFFICE</strong>',
          options: [['A', 'The tourist office will post a map to anyone who asks.'], ['B', 'This sign advertises a service offered by the tourist office.'], ['C', 'You must pay a small fee at the tourist office for a map.']], answer: 'B' }
      ]
    },

    'b1-p2': {
      part: 'Reading Part 2', skill: 'reading',
      instructions: 'The people below all want to try a new cookery class. Decide which cookery school would be the most suitable for each person.',
      title: 'Cookery Schools',
      passage: '<p><strong>A &nbsp;Riverside Cookery School</strong><br>Our weekend bread-making workshops are popular with locals and visitors alike. After baking your own loaves, enjoy a guided cheese-tasting session with samples from nearby farms. Classes run every Saturday and Sunday morning, and no experience is necessary.</p><p><strong>B &nbsp;Little Chefs Kitchen</strong><br>Perfect for parents! Our beginner vegetarian cookery mornings include a supervised play area for children aged one to five, so you can concentrate on your cooking. Learn simple, healthy vegetarian meals in a relaxed, friendly atmosphere.</p><p><strong>C &nbsp;Sweet Treats Studio</strong><br>Join our popular evening baking classes, held twice a week, and master the art of cakes, pastries and desserts. Every student leaves with a box of their own baked goods to share at home.</p><p><strong>D &nbsp;Global Kitchen Academy</strong><br>Explore the flavours of Asia, the Mediterranean and beyond in our world cuisine programme. Each module includes a visit to a specialist market to choose fresh ingredients before you start cooking.</p><p><strong>E &nbsp;Fast Track Culinary Course</strong><br>Our one-day intensive workshop covers everything from knife skills to plating, and every participant receives an official certificate signed by our head chef at the end of the day.</p><p><strong>F &nbsp;Country Kitchen</strong><br>Learn traditional countryside recipes passed down through generations, taught by local grandmothers on quiet weekday afternoons. No previous cooking experience is needed, and all ingredients are provided.</p><p><strong>G &nbsp;Downtown Grill School</strong><br>Specialising in barbecue and outdoor cooking, our classes take place in our rooftop garden every Friday evening. Bring your own apron and enjoy live music while you cook.</p><p><strong>H &nbsp;Home Baker\'s Hub</strong><br>Our relaxed drop-in sessions let you practise basic baking skills at your own pace, with a tutor on hand for advice. Perfect for anyone wanting to build confidence in the kitchen before moving on to more advanced classes.</p>',
      sharedOptions: [['A', 'A'], ['B', 'B'], ['C', 'C'], ['D', 'D'], ['E', 'E'], ['F', 'F'], ['G', 'G'], ['H', 'H']],
      questions: [
        { n: 6, type: 'shared', stem: '<strong>Daniel</strong> wants to learn how to make bread from scratch. He can only attend at weekends, and he\'d like a class that also includes tasting different types of cheese.', answer: 'A' },
        { n: 7, type: 'shared', stem: '<strong>Priya</strong> is looking for a vegetarian cookery course for complete beginners. She needs childcare provided, as she can\'t leave her toddler at home.', answer: 'B' },
        { n: 8, type: 'shared', stem: '<strong>Marcus</strong> wants an evening class that focuses on desserts and cakes. He\'d like to take his own creations home to share with his family.', answer: 'C' },
        { n: 9, type: 'shared', stem: '<strong>Sophie</strong> is interested in learning to cook dishes from several different countries. She wants a course that includes trips to local food markets.', answer: 'D' },
        { n: 10, type: 'shared', stem: '<strong>Aisha</strong> wants a short, intensive course she can complete in a single day, ideally including a professional chef\'s certificate at the end.', answer: 'E' }
      ]
    },

    'b1-p3': {
      part: 'Reading Part 3', skill: 'reading',
      instructions: 'For each question, choose the correct answer.',
      title: 'Novelist Daniel Hart talks about his hobby',
      passage: '<p>There\'s an assumption that writers spend all their time indoors, hunched over a keyboard, but for the last fifteen years I\'ve kept bees in the garden behind my house, and it\'s completely changed the way I work. When I\'m stuck on a chapter, I put on my beekeeping suit and go and check the hives instead of staring at a blank screen. Watching thousands of bees work together, each one doing its own small job, helps me stop worrying about the plot and just relax.</p><p>I got interested in bees almost by accident. My grandfather kept them on his farm, and as a child I was fascinated rather than frightened, even after being stung more than once. When he passed away, nobody in the family wanted to take over his hives, so I offered, mostly because I didn\'t want to see forty years of his work disappear. I knew almost nothing about beekeeping at the time, and I made every mistake possible that first summer.</p><p>For a few years, I focused simply on keeping the bees alive and learning the basics from books and more experienced beekeepers in the area. Once I felt more confident, I started entering my honey into local competitions, partly for fun and partly because I wanted to prove to myself that I\'d actually learned something. I didn\'t expect to win anything, but I came second in a regional competition in my third year, which gave me the confidence to keep going.</p><p>These days, I look after six hives, and I still learn something new every single season – bees are far more complicated than people realise. I no longer enter competitions, since the pressure took some of the enjoyment out of it, but I still give jars of honey to my neighbours every autumn. Writing novels and keeping bees might seem like an odd combination, but I honestly think one has made me better at the other.</p>',
      questions: [
        { n: 11, type: 'radio', stem: 'Daniel enjoys beekeeping because', options: [['A', 'it gives him fresh ideas for his novels.'], ['B', 'it helps him relax when his writing isn\'t going well.'], ['C', 'it allows him to spend more time outdoors.'], ['D', 'it helps him concentrate better on his writing.']], answer: 'B' },
        { n: 12, type: 'radio', stem: 'What does Daniel say about his grandfather\'s bees?', options: [['A', 'He wishes he had learned beekeeping while his grandfather was alive.'], ['B', 'His grandfather taught him everything he needed to know.'], ['C', 'He decided to look after the hives so his grandfather\'s work wouldn\'t be wasted.'], ['D', 'He was afraid of the bees as a child.']], answer: 'C' },
        { n: 13, type: 'radio', stem: 'Daniel says he began entering honey competitions', options: [['A', 'because he wanted to win prize money.'], ['B', 'in order to test how much he had learned.'], ['C', 'because other beekeepers encouraged him to.'], ['D', 'to attract more customers for his honey.']], answer: 'B' },
        { n: 14, type: 'radio', stem: 'How does Daniel feel about beekeeping now?', options: [['A', 'He is disappointed that he no longer wins competitions.'], ['B', 'He finds it less enjoyable than when he started.'], ['C', 'He is content to keep bees without competing.'], ['D', 'He wishes he had started beekeeping earlier in life.']], answer: 'C' },
        { n: 15, type: 'radio', stem: 'What would be a good introduction to this article?', options: [['A', 'For novelist Daniel Hart, nothing is more important than his bees, not even his writing career.'], ['B', 'Novelist Daniel Hart takes beekeeping seriously. Here he explains how he took it up and what he gets from it.'], ['C', 'In this article, Daniel Hart explains how he became a novelist purely because of his interest in bees.'], ['D', 'After discovering beekeeping late in life, Daniel Hart gave up writing to concentrate on his hives.']], answer: 'B' }
      ]
    },

    'b1-p4': {
      part: 'Reading Part 4', skill: 'reading',
      instructions: 'Five sentences have been removed from the text below. For each question, choose the correct answer. There are three extra sentences which you do not need to use.',
      title: 'Starting again',
      passage: '<p>I used to work as an accountant in a busy office in the centre of a big city. It wasn\'t a bad job, and I got on well with my colleagues, but I gradually became bored of doing the same calculations day after day. <span class="gap">(16)</span></p><p>I\'d always been interested in nature, so one evening I searched online for \'conservation volunteering abroad\'. Near the top of the results was a project on a small island in the Pacific, helping to protect sea turtles that come to lay their eggs on the beaches. <span class="gap">(17)</span> I\'d done a scuba diving course years earlier, and the idea excited me more the more I talked about it, so I applied to the organisation running the project. A few weeks later they replied offering me a place, and I said yes straight away. <span class="gap">(18)</span> After all, it was only a three-month placement over the summer, and I told myself I\'d return to my old job afterwards.</p><p>From the moment I arrived on the island, I knew I\'d made the right choice. My first night watching the turtles come ashore to lay their eggs was unforgettable. <span class="gap">(19)</span> I couldn\'t quite believe I got to see that every week.</p><p>In the end, I enjoyed it so much that I simply never left. I\'ve now lived on the island for eight years, and I run the volunteer programme myself, training new arrivals and keeping records of the turtles that return each season. My office is a wooden hut looking straight out over the beach. Of course, island life isn\'t without its difficulties. <span class="gap">(20)</span> Even so, I wouldn\'t swap it for my old life for anything.</p>',
      sharedOptions: [['A', 'That\'s why I was certain it wouldn\'t work out.'], ['B', 'I\'d read about turtles in magazines but never expected to see one in real life.'], ['C', 'They always want to know how long the turtles live.'], ['D', 'I work longer hours now than I ever did in the office.'], ['E', 'I began telling friends, half-joking, that I might apply.'], ['F', 'Afterwards, a few people were surprised by my choice, but I didn\'t let it worry me.'], ['G', 'I decided it was time for a change.'], ['H', 'I needed to mention that before going any further.']],
      questions: [
        { n: 16, type: 'shared', answer: 'G' },
        { n: 17, type: 'shared', answer: 'E' },
        { n: 18, type: 'shared', answer: 'F' },
        { n: 19, type: 'shared', answer: 'B' },
        { n: 20, type: 'shared', answer: 'D' }
      ]
    },

    'b1-p5': {
      part: 'Reading Part 5', skill: 'vocabulary',
      instructions: 'For each question, choose the correct answer.',
      title: 'The Bamboo Plant',
      passage: '<p>Bamboo is considered one of the most useful plants on Earth. It thrives in a warm, damp <span class="gap">(21)</span>, spreading rapidly across whole hillsides within a few short years.</p><p>Certain species can <span class="gap">(22)</span> almost a metre in a single day, making bamboo one of the fastest-growing plants ever recorded.</p><p>Visitors often assume bamboo is simply a decorative plant that offers welcome <span class="gap">(23)</span> on a hot afternoon. In fact, this extraordinary plant has countless practical <span class="gap">(24)</span>, with new ones being discovered every year.</p><p>People have built houses, furniture and even bridges from bamboo for centuries. Even now, a quick <span class="gap">(25)</span> around a typical kitchen might reveal bamboo in items as <span class="gap">(26)</span> as chopping boards and toothbrushes.</p>',
      questions: [
        { n: 21, type: 'radio', inline: true, options: [['A', 'environment'], ['B', 'surrounding'], ['C', 'climate'], ['D', 'setting']], answer: 'C' },
        { n: 22, type: 'radio', inline: true, options: [['A', 'grow'], ['B', 'rise'], ['C', 'gain'], ['D', 'increase']], answer: 'A' },
        { n: 23, type: 'radio', inline: true, options: [['A', 'protection'], ['B', 'comfort'], ['C', 'relief'], ['D', 'shade']], answer: 'D' },
        { n: 24, type: 'radio', inline: true, options: [['A', 'applications'], ['B', 'functions'], ['C', 'purposes'], ['D', 'uses']], answer: 'D' },
        { n: 25, type: 'radio', inline: true, options: [['A', 'search'], ['B', 'check'], ['C', 'look'], ['D', 'scan']], answer: 'C' },
        { n: 26, type: 'radio', inline: true, options: [['A', 'varied'], ['B', 'unusual'], ['C', 'mixed'], ['D', 'different']], answer: 'D' }
      ]
    },

    'b1-p6': {
      part: 'Reading Part 6', skill: 'grammar',
      instructions: 'For each question, write the correct answer. Write <strong>one word</strong> for each gap.',
      title: 'The City Zoo',
      passage: '<p>This is one of my favourite places to visit. I\'ve learned a huge amount about wildlife <span class="gap">(27)</span> time I go there. I\'ve even seen a baby elephant being born on camera!</p><p>The park is beautifully laid out and it\'s easy to find your way <span class="gap">(28)</span>. There\'s plenty to see, but <span class="gap">(29)</span> you love big cats, the best time to visit them is early morning. I went once in the middle of the afternoon and they were <span class="gap">(30)</span> asleep that I could hardly see them move.</p><p>On busy days the queue for the main gate can get <span class="gap">(31)</span> long that you might wait almost an hour to get in. You\'ll probably want a snack while you\'re there – you can bring <span class="gap">(32)</span> own food, or try the café near the entrance.</p>',
      questions: [
        { n: 27, type: 'text', accept: ['each', 'every'] },
        { n: 28, type: 'text', accept: ['around', 'round'] },
        { n: 29, type: 'text', accept: ['if'] },
        { n: 30, type: 'text', accept: ['so'] },
        { n: 31, type: 'text', accept: ['so'] },
        { n: 32, type: 'text', accept: ['your'] }
      ]
    },

    'b1-lis': {
      part: 'Listening', skill: 'listening', audio: true,
      instructions: 'You will hear a man called John Miller talking about a community sports programme. As you listen, fill in the gaps below with a word, a number or a short phrase.',
      questions: [
        { n: 1, type: 'text', wide: true, stem: 'Active Together offers activities such as football, basketball and yoga, and is going to offer …………… classes in the future.',
          accept: ['tennis'] },
        { n: 2, type: 'text', wide: true, stem: 'Families can attend sports days at ……………',
          accept: ['weekends', 'the weekends', 'weekend', 'the weekend', 'at weekends', 'at the weekend'] },
        { n: 3, type: 'text', wide: true, stem: 'If you want to go on the walk around the neighbourhood, you should meet at the ……………',
          accept: ['train station', 'the train station', 'station'] },
        { n: 4, type: 'text', wide: true, stem: 'Call for more information at ……………',
          accept: ['01898 664552', '01898664552'] }
      ]
    }
  },

  writing: {
    'b1-w1': {
      part: 'Writing Part 1',
      brief: 'Read this email from your English-speaking friend Jamie and the notes you have made.<div class="email-box"><p><em>From: Jamie &nbsp; Subject: Your visit!</em></p><p>Hi,</p><p>I can\'t wait for you to come and stay with me next month! On the first weekend, there\'s a big food festival in town. Would you rather go to the festival, or spend the day exploring the old town instead? <span class="note">Say which I\'d prefer</span></p><p>Also, do you fancy trying kayaking on the lake while you\'re here? <span class="note">No, because…</span></p><p>Let me know what you think!<br>Jamie <span class="note">Ask Jamie…</span></p></div>Write your email to Jamie using all the notes.',
      words: 'Write about 100 words.'
    },
    'b1-w2': {
      part: 'Writing Part 2',
      choice: [
        { label: 'An article', brief: 'You see this notice on an English-language website.<div class="email-box"><p><strong>Articles wanted! MUSIC</strong></p><p>What kind of music do you enjoy listening to? Do you prefer listening to music alone or with other people? Why?</p><p>Write an article answering these questions and we will put it on our website!</p></div>' },
        { label: 'A story', brief: 'Your English teacher has asked you to write a story. Your story must begin with this sentence:<div class="email-box"><p><em>The old door creaked open, and Maya stepped inside for the first time in ten years.</em></p></div>' }
      ],
      words: 'Write about 100 words.'
    }
  }
};

DATA.B2 = {
  code: 'B2',
  name: 'B2 First',
  below: 'B1',
  above: 'C1',
  audio: 'B2',
  quick: ['b2-p1', 'b2-p2', 'b2-p5', 'b2-lis'],
  full: ['b2-p1', 'b2-p2', 'b2-p3', 'b2-p4', 'b2-p5', 'b2-p6', 'b2-p7', 'b2-lis'],
  quickWriting: ['b2-w1'],
  fullWriting: ['b2-w1', 'b2-w2'],
  sections: {

    'b2-p1': {
      part: 'Use of English Part 1', skill: 'vocabulary',
      instructions: 'For each question, choose the correct answer.',
      title: 'Learning to Play the Violin as an Adult',
      passage: '<p>When I decided to <span class="gap">(1)</span> up the violin at the age of thirty-five, most of my friends thought I was making a huge mistake. String instruments, they told me, are <span class="gap">(2)</span> regarded as some of the hardest instruments to master. I was determined to prove them wrong, so I signed up for weekly lessons and began practising every single day.</p><p>The first few months were, frankly, painful – both for me and for anyone within earshot. My teacher was endlessly patient, though, and she never once made me feel <span class="gap">(3)</span> for the mistakes I made. Instead, she encouraged me to <span class="gap">(4)</span> close attention to the way professional violinists held their instruments, and to copy their posture exactly.</p><p>Gradually, the awful screeching sounds began to <span class="gap">(5)</span> way to something resembling actual music. It took the best part of a year before I could play a simple tune without wincing, but the sense of achievement I felt made every difficult practice session <span class="gap">(6)</span> it. These days, I still can\'t <span class="gap">(7)</span> a professional orchestra, but I\'ve come to realise that the real reward of learning an instrument later in life has very little to do with skill, and everything to do with the discipline and patience it <span class="gap">(8)</span> into your daily routine.</p>',
      questions: [
        { n: 1, type: 'radio', inline: true, options: [['A', 'take'], ['B', 'pick'], ['C', 'set'], ['D', 'put']], answer: 'B' },
        { n: 2, type: 'radio', inline: true, options: [['A', 'highly'], ['B', 'widely'], ['C', 'fully'], ['D', 'deeply']], answer: 'B' },
        { n: 3, type: 'radio', inline: true, options: [['A', 'guilty'], ['B', 'ashamed'], ['C', 'sorry'], ['D', 'upset']], answer: 'A' },
        { n: 4, type: 'radio', inline: true, options: [['A', 'give'], ['B', 'pay'], ['C', 'put'], ['D', 'take']], answer: 'B' },
        { n: 5, type: 'radio', inline: true, options: [['A', 'give'], ['B', 'make'], ['C', 'take'], ['D', 'lose']], answer: 'A' },
        { n: 6, type: 'radio', inline: true, options: [['A', 'worth'], ['B', 'value'], ['C', 'worthy'], ['D', 'deserving']], answer: 'A' },
        { n: 7, type: 'radio', inline: true, options: [['A', 'join'], ['B', 'enter'], ['C', 'attend'], ['D', 'belong']], answer: 'A' },
        { n: 8, type: 'radio', inline: true, options: [['A', 'instils'], ['B', 'installs'], ['C', 'inserts'], ['D', 'introduces']], answer: 'A' }
      ]
    },

    'b2-p2': {
      part: 'Use of English Part 2', skill: 'grammar',
      instructions: 'Think of the word which best fits each gap. Write <strong>one word only</strong> for each gap.',
      title: 'The Appeal of Cold-Water Swimming',
      passage: '<p>Cold-water swimming has become increasingly popular in recent years, with more people choosing to swim in rivers, lakes and the sea regardless <span class="gap">(9)</span> the weather, even in the depths of winter.</p><p>Many swimmers say that the cold water improves their mood, and some scientists believe <span class="gap">(10)</span> regular exposure to cold water may even reduce stress levels, although there is still ongoing research into exactly why this happens.</p><p>Beginners are always advised to start slowly, since jumping straight <span class="gap">(11)</span> freezing water without any preparation can be dangerous. Most experienced swimmers recommend building <span class="gap">(12)</span> tolerance gradually, perhaps by taking cold showers before attempting an outdoor swim.</p><p>It is also important never to swim alone, no matter <span class="gap">(13)</span> confident you feel, as cold water can affect the body in unexpected ways. As long <span class="gap">(14)</span> you take sensible precautions, however, cold-water swimming can be an exhilarating and rewarding hobby.</p><p>Of course, <span class="gap">(15)</span> is not a sport for everyone, and anyone with a heart condition should consult a doctor before trying it. But <span class="gap">(16)</span> millions of people around the world can attest, there really is nothing quite like the feeling of stepping out of icy water on a winter\'s morning.</p>',
      questions: [
        { n: 9, type: 'text', accept: ['of'] },
        { n: 10, type: 'text', accept: ['that'] },
        { n: 11, type: 'text', accept: ['into'] },
        { n: 12, type: 'text', accept: ['up'] },
        { n: 13, type: 'text', accept: ['how'] },
        { n: 14, type: 'text', accept: ['as'] },
        { n: 15, type: 'text', accept: ['it', 'this'] },
        { n: 16, type: 'text', accept: ['as'] }
      ]
    },

    'b2-p3': {
      part: 'Use of English Part 3', skill: 'vocabulary',
      instructions: 'Use the word given in capitals to form a word that fits in the gap.',
      title: 'The Unexpected Rise of Board Games',
      passage: '<p>In an age of smartphones and streaming services, the continuing <span class="gap">(17)</span> of traditional board games might seem rather surprising. Yet sales figures show that more people than ever are choosing to spend their evenings around a table with family or friends rather than in front of a screen.</p><p>Industry experts suggest that this trend began as a <span class="gap">(18)</span> against the isolating effects of technology, with many players saying they value the face-to-face <span class="gap">(19)</span> that board games provide. Unlike video games, which can often be played alone, most board games require at least two players, making them inherently <span class="gap">(20)</span>.</p><p>The <span class="gap">(21)</span> of games now available is also far greater than it once was, ranging from simple family games suitable for young children to extremely <span class="gap">(22)</span> strategy games designed for adult enthusiasts. Many of these newer games are the <span class="gap">(23)</span> of small independent designers rather than large toy companies, which has led to a far more <span class="gap">(24)</span> range of themes and mechanics than was previously available.</p>',
      questions: [
        { n: 17, type: 'text', hint: 'POPULAR', accept: ['popularity'] },
        { n: 18, type: 'text', hint: 'REACT', accept: ['reaction'] },
        { n: 19, type: 'text', hint: 'INTERACT', accept: ['interaction'] },
        { n: 20, type: 'text', hint: 'SOCIAL', accept: ['sociable'] },
        { n: 21, type: 'text', hint: 'VARY', accept: ['variety'] },
        { n: 22, type: 'text', hint: 'COMPLICATE', accept: ['complicated'] },
        { n: 23, type: 'text', hint: 'CREATE', accept: ['creations'] },
        { n: 24, type: 'text', hint: 'IMAGINE', accept: ['imaginative'] }
      ]
    },

    'b2-p4': {
      part: 'Use of English Part 4', skill: 'grammar',
      instructions: 'Complete the second sentence so that it has a similar meaning to the first, using the word given. <strong>Do not change the word given.</strong> You must use between three and six words, including the word given.',
      questions: [
        { n: 25, type: 'text', wide: true, lead: 'She hasn\'t been to the cinema for over a year.', hint: 'LAST', stem: 'She ______ over a year ago.', accept: ['last went to the cinema'] },
        { n: 26, type: 'text', wide: true, lead: 'It\'s possible that the meeting will be cancelled because of the storm.', hint: 'MIGHT', stem: 'The meeting ______ because of the storm.', accept: ['might be cancelled', 'might get cancelled', 'might be called off'] },
        { n: 27, type: 'text', wide: true, lead: 'I regret not studying harder for the exam.', hint: 'WISH', stem: 'I ______ harder for the exam.', accept: ['wish i had studied', 'wish that i had studied'] },
        { n: 28, type: 'text', wide: true, lead: 'Despite being very tired, Marco finished the marathon.', hint: 'THOUGH', stem: '______, Marco finished the marathon.', accept: ['tired though he was', 'very tired though he was', 'though he was tired', 'though he was very tired', 'even though he was tired', 'even though he was very tired'] },
        { n: 29, type: 'text', wide: true, lead: 'You should book the tickets in advance, otherwise they might sell out.', hint: 'UNLESS', stem: 'The tickets might sell out ______ in advance.', accept: ['unless you book them', 'unless they are booked', 'unless you book the tickets'] },
        { n: 30, type: 'text', wide: true, lead: 'Nobody has ever climbed this mountain in winter before.', hint: 'TIME', stem: 'This will be the ______ this mountain in winter.', accept: ['first time anyone has climbed', 'first time anybody has climbed', 'first time that anyone has climbed'] }
      ]
    },

    'b2-p5': {
      part: 'Reading Part 5', skill: 'reading',
      instructions: 'For each question, choose the correct answer.',
      title: 'Six Months of Darkness',
      passage: '<p><em>A journalist recalls the winter she spent living among scientists at the bottom of the world.</em></p><p>When my editor first suggested I spend six months at a remote Antarctic research station, my immediate reaction was to laugh. I pictured myself sitting at my desk, comfortably surrounded by takeaway coffee cups and deadlines, and struggled to imagine trading that life for a place where the sun disappears entirely for months at a time. And yet, within a week, I\'d said yes. I told myself it was for the story, but if I\'m honest, I think I simply wanted to know whether I could survive somewhere so different from everything I\'d ever known.</p><p>The flight in was nothing like I expected. Rather than the dramatic, icy wilderness of documentaries, what struck me first was the silence – an almost physical thing, pressing in from every direction the moment the aircraft engines cut out. The station itself, a cluster of orange buildings raised on stilts above the ice, felt simultaneously cosy and impossibly fragile, a tiny outpost of warmth surrounded by hundreds of miles of nothing. I remember standing on the ice for the first time and feeling something I can only describe as smallness – not fear exactly, but a sudden, clear-eyed awareness of how little any of my usual worries actually mattered here.</p><p>Adjusting to the darkness was harder than I had anticipated, despite months of reading about it beforehand. The scientists who had wintered there before warned me that the first few weeks would be the strangest, and they were right. Without the usual markers of morning and evening, my sense of time became oddly elastic; I would emerge from what I assumed had been a short nap to discover that six hours had passed. Several of the station\'s longer-term residents told me they had learned to stop fighting this and simply let their bodies adjust to a rhythm that had nothing to do with clocks.</p><p>What surprised me most, though, wasn\'t the darkness or the cold, but the intensity of the relationships that formed among the fourteen of us stationed there. Cut off from the rest of the world for months, with no possibility of leaving even in an emergency, we became reliant on each other in a way that felt almost old-fashioned. Petty irritations that might have ended a friendship back home were quietly absorbed and forgotten, because there was simply nowhere else for any of us to go. I have never made friends so quickly, nor argued with anyone so intensely, as I did that winter.</p><p>By the time the sun finally reappeared, creeping above the horizon after months of absence, I had expected to feel a wave of relief. Instead, I found myself oddly reluctant to leave when my replacement eventually arrived. The station had come to feel less like an assignment and more like a strange, temporary home, and I understood then why so many of the scientists returned year after year, despite the hardship. I went to Antarctica expecting to write about ice and isolation. I came home having written, almost by accident, about what people become when nothing familiar is left to hide behind.</p>',
      questions: [
        { n: 31, type: 'radio', stem: 'Why did the writer originally agree to go to Antarctica?', options: [['A', 'She wanted to escape the pressure of her job.'], ['B', 'She was curious to test her own ability to cope with such a different life.'], ['C', 'She had always dreamed of visiting Antarctica.'], ['D', 'Her editor persuaded her it would advance her career.']], answer: 'B' },
        { n: 32, type: 'radio', stem: 'What does the writer say about her arrival at the station?', options: [['A', 'It matched the pictures she had seen in documentaries.'], ['B', 'She was most affected by how isolated the buildings looked.'], ['C', 'The silence made the biggest impression on her.'], ['D', 'She immediately felt afraid of her surroundings.']], answer: 'C' },
        { n: 33, type: 'radio', stem: 'What does \'this\' refer to in paragraph 3 (\'learned to stop fighting this\')?', options: [['A', 'the cold temperatures at the station'], ['B', 'the disruption to their normal sense of time'], ['C', 'the advice given by other scientists'], ['D', 'the long journey to reach the station']], answer: 'B' },
        { n: 34, type: 'radio', stem: 'According to paragraph 4, relationships at the station were unusual because', options: [['A', 'the group had chosen each other carefully before arriving.'], ['B', 'small disagreements were resolved quickly out of necessity.'], ['C', 'the writer had never got on well with colleagues before.'], ['D', 'everyone shared exactly the same scientific background.']], answer: 'B' },
        { n: 35, type: 'radio', stem: 'How did the writer feel when her time at the station came to an end?', options: [['A', 'relieved that the difficult experience was finally over'], ['B', 'disappointed that she had not achieved what she set out to do'], ['C', 'surprised by her own reluctance to go home'], ['D', 'envious of the scientists who got to stay longer']], answer: 'C' },
        { n: 36, type: 'radio', stem: 'What is the writer\'s main point in the final paragraph?', options: [['A', 'The experience taught her more about human nature than about Antarctica itself.'], ['B', 'She regretted not staying for a second winter at the station.'], ['C', 'The hardship of the winter outweighed any benefits of the trip.'], ['D', 'She found it difficult to readjust to life back home.']], answer: 'A' }
      ]
    },

    'b2-p6': {
      part: 'Reading Part 6', skill: 'reading',
      instructions: 'Six sentences have been removed from the article. Choose from the sentences A to G the one which fits each gap. There is one extra sentence which you do not need to use.',
      title: 'Behind every effortless note lies years of hidden work',
      passage: '<p><em>A former opera singer explains what serious vocal training actually involves.</em></p><p>What opera singers do on stage can look almost effortless, but that ease is the product of years of relentless, unglamorous training. A singer\'s working life is often misunderstood, and it\'s easy to see why: audiences see two hours of polished performance and nothing of what came before it. <span class="gap">(37)</span> With expert teaching and years of steady practice, an entirely ordinary voice can be shaped into an instrument capable of filling a two-thousand-seat opera house without a microphone.</p><p>As a former principal singer with a well-known opera company, I would gently push back against this idea of mystery. There is no secret trick, no hidden gift that separates professional singers from everyone else. It is simply a question of correctly training breath, posture and muscle memory over an enormous number of hours. I took my first singing lesson at the age of nine and gave my final performance thirty-one years later. <span class="gap">(38)</span> But for a singer in particular, this early foundation matters enormously, because the habits you build before your voice fully matures shape everything that follows.</p><p>Over the course of my career I sang in well over two thousand performances and rehearsals. Every single one of them began the same way: twenty minutes of breathing exercises before a single note was sung. <span class="gap">(39)</span> It made no difference whether you were the newest member of the chorus or the singer whose name was printed on the poster outside.</p><p>Those daily warm-ups served two separate purposes: they prepared the body physically, and they maintained the muscle control that good technique depends on. Every professional singer I ever worked with, without exception, treated this routine as completely non-negotiable. <span class="gap">(40)</span> It is this unglamorous repetition, more than any natural talent, that ultimately produces a voice capable of real power and precision.</p><p>The human voice, like any other part of the body, responds to careful and gradual demands placed upon it. <span class="gap">(41)</span> In much the same way, years of disciplined practice eventually produce an instrument that can be pushed to remarkable extremes – sustained for much longer, and controlled far more precisely, than most people would ever think possible. None of this comes without effort, but it never feels like suffering.</p><p><span class="gap">(42)</span> But there is an important difference between hard work and hardship. Professional singers live with hard work every day of their working lives. Hardship, in my experience, is something else entirely.</p>',
      sharedOptions: [['A', 'No one was exempt from this routine, no matter how experienced or celebrated they were.'], ['B', 'It takes at least a decade of high-quality, focused practice to become truly expert in any demanding physical or artistic skill.'], ['C', 'A stage costume may look elegant, but it does nothing to support the physical demands placed on a singer\'s body.'], ['D', 'Day after day, year after year, it proved the truth of the old saying that practice makes perfect.'], ['E', 'Because so few of us now use our voices at full volume for hours at a time, it can be hard for audiences to grasp quite how physical singing really is.'], ['F', 'Vocal technique is certainly demanding, but it is not, in itself, harmful to the voice.'], ['G', 'The same principle applies in the gym: pushing the body a little further each time, without overreaching, eventually brings the desired result.']],
      questions: [
        { n: 37, type: 'shared', answer: 'F' },
        { n: 38, type: 'shared', answer: 'B' },
        { n: 39, type: 'shared', answer: 'A' },
        { n: 40, type: 'shared', answer: 'D' },
        { n: 41, type: 'shared', answer: 'G' },
        { n: 42, type: 'shared', answer: 'E' }
      ]
    },

    'b2-p7': {
      part: 'Reading Part 7', skill: 'reading',
      instructions: 'You are going to read about four people who started their own small business. For each question, choose from the people A to D. The people may be chosen more than once.',
      title: 'Starting a small business',
      passage: '<p><strong>A &nbsp;Rosa, Ceramics Studio</strong><br>I\'d worked as a graphic designer for over a decade before deciding, almost overnight, to open a small ceramics studio in my hometown. My colleagues thought I\'d lost my mind, giving up a stable salary for something so uncertain, and if I\'m honest, there were nights in the first year when I wondered whether they were right. What kept me going was remembering that I\'d spent ten years designing other people\'s ideas and had almost forgotten what it felt like to make something with my own hands. I funded the whole thing with savings rather than a loan, which meant living extremely frugally for the first eighteen months, but it also meant I never felt beholden to a bank. These days, the studio runs weekend classes as well as selling my own work, and though the hours are far longer than my old job ever demanded, I\'ve never once regretted the decision.</p><p><strong>B &nbsp;Tom, Mobile Coffee Van</strong><br>I started my coffee van business the same month my daughter was born, which in hindsight was not the most sensible timing. My wife was, understandably, less than thrilled when I told her I was leaving a secure job in logistics to sell coffee from a converted van at weekend markets. We took out a small business loan to buy the van itself, and I remember being terrified every single month that the repayments wouldn\'t be covered. The turning point came when a local food festival asked me to be their exclusive coffee supplier for the whole summer, which finally gave us some breathing room financially. I still work every weekend without exception, and some weekdays too, but I get to see my daughter far more than I would if I were still commuting into an office every day.</p><p><strong>C &nbsp;Aiko, Online Tutoring Platform</strong><br>After years of tutoring students privately in the evenings alongside my main teaching job, I finally built a simple website to help me manage bookings, and within a few months it had somehow grown into a full platform connecting hundreds of tutors with students. I hadn\'t intended to start a business at all; it genuinely began as a way to save myself some administrative hassle. Because it grew so gradually, I never needed to borrow any money, which I\'m quietly grateful for, since I\'ve always been fairly cautious about debt. The hardest part wasn\'t the money, though, but learning to manage a small team of developers when my own background was entirely in teaching, not technology. I\'m still training staff to take over tasks I used to handle myself, so that I can eventually step back from the day-to-day running of things.</p><p><strong>D &nbsp;Femi, Urban Farming Business</strong><br>I left a well-paid career in finance to grow vegetables on a small plot of rented land on the edge of the city, a decision that most of my family still can\'t quite understand. I applied for a government grant aimed at supporting sustainable local food projects, and receiving it meant I could avoid taking on any personal debt, which was important to me. The first two years were extremely difficult, mainly because I knew almost nothing about farming and made every mistake it was possible to make with soil and irrigation. What has surprised me most is how much of my time is now spent on deliveries and customer relationships rather than actually growing anything, and I\'m hoping to hire someone soon to take that side of things off my hands so I can get back to the part of the job I actually love.</p>',
      sharedOptions: [['A', 'A'], ['B', 'B'], ['C', 'C'], ['D', 'D']],
      questions: [
        { n: 43, type: 'shared', stem: 'relied on personal savings rather than a loan to get started', answer: 'A' },
        { n: 44, type: 'shared', stem: 'received financial support from a government scheme', answer: 'D' },
        { n: 45, type: 'shared', stem: 'did not originally plan to set up a business at all', answer: 'C' },
        { n: 46, type: 'shared', stem: 'is hoping to employ someone so they can spend more time on the tasks they enjoy most', answer: 'D' },
        { n: 47, type: 'shared', stem: 'found that starting the business coincided with a major family event', answer: 'B' },
        { n: 48, type: 'shared', stem: 'is gradually training others to take on responsibilities they used to manage alone', answer: 'C' },
        { n: 49, type: 'shared', stem: 'says a specific piece of good fortune made the business more financially secure', answer: 'B' },
        { n: 50, type: 'shared', stem: 'admits that colleagues doubted the wisdom of their career change', answer: 'A' },
        { n: 51, type: 'shared', stem: 'had no relevant experience in their new field when they started', answer: 'D' },
        { n: 52, type: 'shared', stem: 'now spends more time with a family member than they did in their previous job', answer: 'B' }
      ]
    },

    'b2-lis': {
      part: 'Listening', skill: 'listening', audio: true,
      instructions: 'You will hear four people talking about how cultures have changed in recent years in their countries. Choose from the list A to G what each speaker says. There are three extra letters which you do not need to use.',
      sharedOptions: [['A', 'Thinks that the internet has made foreign holidays more popular'], ['B', 'Local festivals have completely disappeared'], ['C', 'Is happy that foreign festivals are celebrated'], ['D', 'Thinks that holidays in their country have experienced little change'], ['E', 'Thinks national holidays are stronger than ever'], ['F', 'Interpret foreign holidays in their own way'], ['G', 'Younger people are the reason foreign holidays are more common']],
      questions: [
        { n: 1, type: 'shared', stem: 'Speaker 1', answer: 'D' },
        { n: 2, type: 'shared', stem: 'Speaker 2', answer: 'F' },
        { n: 3, type: 'shared', stem: 'Speaker 3', answer: 'A' },
        { n: 4, type: 'shared', stem: 'Speaker 4', answer: 'C' }
      ]
    }
  },

  writing: {
    'b2-w1': {
      part: 'Writing Part 1',
      brief: 'In your English class you have been talking about technology and learning. Now your English teacher has asked you to write an essay.<div class="email-box"><p><strong>Some people think that technology has made learning easier than ever before. Do you agree?</strong></p><p>Write about:<br>1. access to information<br>2. concentration<br>3. …………………… (your own idea)</p></div>Write an essay using all the notes and give reasons for your point of view.',
      words: 'Write 140 to 190 words in an appropriate style.'
    },
    'b2-w2': {
      part: 'Writing Part 2',
      choice: [
        { label: 'A review', brief: 'You see this announcement in your college English-language magazine.<div class="email-box"><p><strong>Film reviews wanted</strong></p><p>Have you seen a film that changed the way you thought about something? Write us a review of the film, explaining what it was about and why it affected you so much. Tell us whether or not you would recommend this film to other readers.</p></div>' },
        { label: 'An article', brief: 'You see this announcement on an English-language website.<div class="email-box"><p><strong>Articles wanted: A skill worth having</strong></p><p>What skill do you think everyone should learn, and why? How easy is it to learn this skill?</p></div>' },
        { label: 'An email', brief: 'You have received this email from your English-speaking friend, Alex.<div class="email-box"><p><em>From: Alex &nbsp; Subject: new job</em></p><p>Hi,</p><p>I\'ve just found out I\'m moving to your city for a new job next month! I don\'t know much about the area at all. Could you tell me what the neighbourhoods are like, and recommend somewhere for me to live?</p><p>Also, is it easy to get around without a car?</p><p>Thanks so much,<br>Alex</p></div>' }
      ],
      words: 'Write 140 to 190 words in an appropriate style.'
    }
  }
};

DATA.C1 = {
  code: 'C1',
  name: 'C1 Advanced',
  below: 'B2',
  above: 'C2',
  audio: 'C1',
  quick: ['c1-p1', 'c1-p2', 'c1-p5', 'c1-lis'],
  full: ['c1-p1', 'c1-p2', 'c1-p3', 'c1-p4', 'c1-p5', 'c1-p6', 'c1-p7', 'c1-p8', 'c1-lis'],
  quickWriting: ['c1-w1'],
  fullWriting: ['c1-w1', 'c1-w2'],
  sections: {

    'c1-p1': {
      part: 'Use of English Part 1', skill: 'vocabulary',
      instructions: 'Read the text below and decide which answer best fits each gap.',
      title: 'Decoding whale song',
      passage: '<p>After decades studying humpback whale song in the <strong>(0) conventional</strong> way, using standard underwater recording equipment, marine biologist Elena Vasquez felt she was no closer to understanding what the animals were actually communicating. She realised she had to <span class="gap">(1)</span> new approaches entirely. Abandoning the standard reliance on underwater microphones alone, she took the unconventional step of attaching temporary sensors directly to individual whales, tracking their movements alongside their vocalisations.</p><p>The <span class="gap">(2)</span> this has given her into their social structures has allowed her to overturn several long-held assumptions. <span class="gap">(3)</span> to earlier research, she argues that whale song varies far more between individuals than previously thought. She also <span class="gap">(4)</span> claims that only males sing. Her data suggest that some behaviours attributed to courtship may in fact <span class="gap">(5)</span> to territorial defence rather than courtship.</p><p>However, Vasquez is careful not to overstate her findings. She remains under no <span class="gap">(6)</span> that her research has solved every mystery surrounding whale communication. She is quick to <span class="gap">(7)</span> that her sample size remains relatively small, and her most striking claims will need to be tested against much larger populations before they can be considered anything more than <span class="gap">(8)</span>.</p>',
      questions: [
        { n: 1, type: 'radio', inline: true, options: [['A', 'adopt'], ['B', 'assume'], ['C', 'presume'], ['D', 'conceive']], answer: 'A' },
        { n: 2, type: 'radio', inline: true, options: [['A', 'perception'], ['B', 'awareness'], ['C', 'insight'], ['D', 'understanding']], answer: 'C' },
        { n: 3, type: 'radio', inline: true, options: [['A', 'Opposite'], ['B', 'Averse'], ['C', 'Contrary'], ['D', 'Unlike']], answer: 'C' },
        { n: 4, type: 'radio', inline: true, options: [['A', 'supports'], ['B', 'disputes'], ['C', 'confirms'], ['D', 'argues']], answer: 'B' },
        { n: 5, type: 'radio', inline: true, options: [['A', 'relate'], ['B', 'refer'], ['C', 'apply'], ['D', 'connect']], answer: 'A' },
        { n: 6, type: 'radio', inline: true, options: [['A', 'doubt'], ['B', 'error'], ['C', 'illusion'], ['D', 'impression']], answer: 'C' },
        { n: 7, type: 'radio', inline: true, options: [['A', 'concede'], ['B', 'acknowledge'], ['C', 'admit'], ['D', 'confess']], answer: 'B' },
        { n: 8, type: 'radio', inline: true, options: [['A', 'speculation'], ['B', 'theory'], ['C', 'hypothesis'], ['D', 'assumption']], answer: 'A' }
      ]
    },

    'c1-p2': {
      part: 'Use of English Part 2', skill: 'grammar',
      instructions: 'Think of the word which best fits each gap. Use <strong>only one word</strong> in each gap.',
      title: 'The placebo effect',
      passage: '<p>The truth <strong>(0) is</strong> nobody fully understands why the placebo effect works, even though its influence on medical outcomes has been documented for centuries.</p><p>Did ancient healers stumble upon something real, or <span class="gap">(9)</span> their remedies simply comfort patients psychologically without any physical benefit at all?</p><p>Although scientists still disagree on the exact mechanism, several theories have been put forward to explain the phenomenon. One idea is that the brain has evolved in <span class="gap">(10)</span> a way that expectation alone can trigger the release of natural painkillers. In <span class="gap">(11)</span> words, believing that a treatment will work may be enough to produce measurable physiological changes.</p><p>The placebo effect <span class="gap">(12)</span> well depend partly on the relationship between doctor and patient, but even <span class="gap">(13)</span> this personal element removed, studies show that placebos still have some effect when taken alone. From various experiments, we know that even <span class="gap">(14)</span> patients are told honestly that they are taking a placebo, a surprising number still report feeling better. This research shows, if <span class="gap">(15)</span> else, that the mind\'s expectations can shape the body\'s experience of illness, in ways scientists are only beginning to understand <span class="gap">(16)</span> detail.</p>',
      questions: [
        { n: 9, type: 'text', accept: ['did', 'do'] },
        { n: 10, type: 'text', accept: ['such'] },
        { n: 11, type: 'text', accept: ['other'] },
        { n: 12, type: 'text', accept: ['may', 'might', 'could'] },
        { n: 13, type: 'text', accept: ['with'] },
        { n: 14, type: 'text', accept: ['when', 'if', 'though'] },
        { n: 15, type: 'text', accept: ['anything', 'nothing'] },
        { n: 16, type: 'text', accept: ['in'] }
      ]
    },

    'c1-p3': {
      part: 'Use of English Part 3', skill: 'vocabulary',
      instructions: 'Use the word given in capitals to form a word that fits in the gap.',
      title: 'Becoming a commercial airline pilot',
      passage: '<p>What are the qualities that a <strong>(0) successful</strong> airline pilot needs? <em>(SUCCESS)</em></p><p>To ensure that passengers can be transported <span class="gap">(17)</span>, quick decision-making, composure and technical precision are essential, not to mention years of accumulated flying hours.</p><p>Both a rigorous training programme and repeated simulator <span class="gap">(18)</span> are vital for maintaining competence at the highest level.</p><p>It is often calmness under pressure, rather than raw technical skill, that provides pilots with the <span class="gap">(19)</span> they need in an emergency.</p><p>This means that composure is arguably more <span class="gap">(20)</span> than natural aptitude alone.</p><p>Such training enables pilots to respond very quickly when required. Failure to maintain currency in training can result in a gradual <span class="gap">(21)</span> of essential skills.</p><p>Regular retraining to reinforce procedural <span class="gap">(22)</span> is also a vital part of a professional\'s schedule, and this is typically done using full-motion simulators.</p><p>Pilots are occasionally faced with unexpected mechanical faults, but a quality training programme can ensure that the <span class="gap">(23)</span> of these incidents are managed safely.</p><p>It also helps minimise the <span class="gap">(24)</span> of human error during critical phases of flight.</p>',
      questions: [
        { n: 17, type: 'text', hint: 'SAFE', accept: ['safely'] },
        { n: 18, type: 'text', hint: 'ASSESS', accept: ['assessments'] },
        { n: 19, type: 'text', hint: 'CONFIDENT', accept: ['confidence'] },
        { n: 20, type: 'text', hint: 'VALUE', accept: ['valuable'] },
        { n: 21, type: 'text', hint: 'DETERIORATE', accept: ['deterioration'] },
        { n: 22, type: 'text', hint: 'KNOW', accept: ['knowledge'] },
        { n: 23, type: 'text', hint: 'MAJOR', accept: ['majority'] },
        { n: 24, type: 'text', hint: 'LIKELY', accept: ['likelihood'] }
      ]
    },

    'c1-p4': {
      part: 'Use of English Part 4', skill: 'grammar',
      instructions: 'Complete the second sentence so that it has a similar meaning to the first, using the word given. <strong>Do not change the word given.</strong> You must use between three and six words, including the word given.',
      questions: [
        { n: 25, type: 'text', wide: true, lead: 'It\'s rare for him to be on time for meetings.', hint: 'RARELY', stem: '______ on time for meetings.', accept: ['rarely is he', 'he is rarely'] },
        { n: 26, type: 'text', wide: true, lead: 'They are going to knock down the old factory and build flats in its place.', hint: 'PULLED', stem: 'The old factory is going to be ______ with flats built in its place.', accept: ['pulled down and replaced'] },
        { n: 27, type: 'text', wide: true, lead: 'Never before has unemployment among young people been so high.', hint: 'THE', stem: 'Unemployment among young people is now ______ has ever been.', accept: ['the highest it', 'at the highest it', 'the highest that it'] },
        { n: 28, type: 'text', wide: true, lead: 'I don\'t think much of the new restaurant, especially after eating at the old one.', hint: 'COMPARISON', stem: 'The new restaurant is nothing ______ the old one.', accept: ['in comparison to', 'in comparison with'] },
        { n: 29, type: 'text', wide: true, lead: 'Maria finished the marathon even though she had done very little training.', hint: 'SPITE', stem: 'Maria finished the marathon ______ training.', accept: ['in spite of little', 'in spite of very little', 'in spite of having little', 'in spite of doing very little'] },
        { n: 30, type: 'text', wide: true, lead: 'The tour guide told us that swimming in the lake alone could be extremely dangerous.', hint: 'DANGERS', stem: 'The tour guide warned us ______ swimming in the lake alone.', accept: ['of the dangers of', 'about the dangers of'] }
      ]
    },

    'c1-p5': {
      part: 'Reading Part 5', skill: 'reading',
      instructions: 'You are going to read the introduction to a book about the history of silence. Choose the answer which fits best according to the text.',
      title: 'Introduction to a book about the history of silence',
      passage: '<p>This book explores how silence – as an idea, an experience, and a cultural value – has been understood and misunderstood across different periods of history. Silence might appear to be nothing at all, a simple absence, and therefore an unlikely subject for serious historical enquiry. Yet this apparent simplicity is precisely what has kept historians away from it for so long: many assume there is nothing to say about an absence of sound, and so the subject has been left largely to acousticians, theologians, and writers of self-help literature. Few authors have attempted to treat silence as a genuinely historical phenomenon, one whose meaning has shifted dramatically according to the society that valued, feared, or enforced it.</p><p>The first difficulty facing any historian of silence concerns evidence. Unlike a painted object or a written text, silence leaves no direct trace of its own; it survives only in the negative space around the sounds and words that were recorded. We know a medieval monastery valued silence because rules survive instructing monks not to speak, not because any record exists of the silence itself. Moreover, what counted as noteworthy silence in the past is not necessarily what strikes us as remarkable today: a modern reader, accustomed to constant background noise, may fail to notice how ordinary a quiet street would have seemed to someone living before the industrial age, when the loudest sound most people ever heard was a church bell or a passing cart.</p><p>The second set of problems is methodological. To study silence properly, a historian must draw simultaneously on acoustics, architecture, religious history, law, and social custom, since silence has at various times been a spiritual discipline, a legal punishment, a mark of respect, and a symptom of exclusion. Faced with this range of material, researchers are tempted to select only the evidence that supports whichever thesis they arrived with, quietly setting aside anything that complicates the picture. This is no more satisfactory here than in any other branch of history. The more productive approach, in my view, is to begin from the physical and documentary evidence itself – court records specifying periods of enforced silence, architectural plans showing sound-dampening materials, diaries recording reactions to unfamiliar quiet – and to build outward from these concrete details rather than imposing a theory upon them from the outset.</p><p>A third and more subtle problem is philosophical. It is tempting to assume that our own associations with silence – as something peaceful, restorative, even therapeutic – are timeless and universal. They are not. For long periods of European history, silence was as likely to be associated with danger, suspicion, or divine punishment as with peace; a silent servant might be assumed to be sullen or dishonest rather than calm, and a silent congregation might be experiencing dread rather than reverence. To read our own contemporary fondness for silence back into these older contexts is to misunderstand the very thing we are trying to study.</p><p>This book does not attempt to resolve every one of these difficulties, nor could it. Nor is it limited to the history of religious or monastic silence, an area that has already received considerable scholarly attention. Instead, it ranges more widely, considering silence in law courts, in domestic households, in scientific laboratories, and in political life, in order to demonstrate how consistently this apparently empty phenomenon has been put to active social use. The history of quiet places is one thing; the history of silence as an instrument of power, comfort, and control is another, considerably larger, subject, and it is this larger subject that the chapters which follow attempt to address.</p>',
      questions: [
        { n: 31, type: 'radio', stem: 'What point does the writer make about silence in the first paragraph?', options: [['A', 'It has been studied mainly by religious scholars rather than historians.'], ['B', 'Its apparent simplicity has discouraged serious historical study.'], ['C', 'Its meaning has remained remarkably consistent throughout history.'], ['D', 'It has been more thoroughly researched than most historians realise.']], answer: 'B' },
        { n: 32, type: 'radio', stem: 'What is the first problem the writer identifies in studying the history of silence?', options: [['A', 'There is very little written evidence relating to silence at all.'], ['B', 'Modern readers tend to romanticise the silence of the past.'], ['C', 'Historical evidence of silence tends to be indirect rather than direct.'], ['D', 'Historians disagree about which periods valued silence most.']], answer: 'C' },
        { n: 33, type: 'radio', stem: 'According to the third paragraph, what does the writer believe is the best way to approach the subject?', options: [['A', 'to focus on one particular type of historical silence, such as legal punishment'], ['B', 'to build an interpretation from concrete evidence rather than starting from a theory'], ['C', 'to rely on the conclusions of historians working in related fields'], ['D', 'to compare evidence from many different countries at once']], answer: 'B' },
        { n: 34, type: 'radio', stem: 'In the fourth paragraph, the writer warns against', options: [['A', 'assuming that historical figures felt the same way about silence as we do now.'], ['B', 'underestimating how frightening silence could be for people in the past.'], ['C', 'exaggerating the extent to which silence was linked to religious practice.'], ['D', 'ignoring the legal uses of silence in different historical periods.']], answer: 'A' },
        { n: 35, type: 'radio', stem: 'What does the writer say about the scope of the book in the final paragraph?', options: [['A', 'It focuses exclusively on the history of religious silence.'], ['B', 'It solves the main problems outlined earlier in the introduction.'], ['C', 'It considers silence across a wide range of areas of life.'], ['D', 'It concentrates mainly on the history of quiet physical spaces.']], answer: 'C' },
        { n: 36, type: 'radio', stem: 'An idea that recurs throughout the text is that silence', options: [['A', 'has been consistently undervalued by modern society.'], ['B', 'is more difficult to study than most historical subjects.'], ['C', 'has often served active, rather than merely passive, purposes.'], ['D', 'has been wrongly associated with religious discipline.']], answer: 'C' }
      ]
    },

    'c1-p6': {
      part: 'Reading Part 6', skill: 'reading',
      instructions: 'You are going to read four reviews of a book about the value of idleness. For each question, choose from the reviews A to D. The reviews may be chosen more than once.',
      title: 'The Art of Doing Nothing',
      passage: '<p><em>Four reviewers comment on writer Marcus Wren\'s book about the value of idleness.</em></p><p><strong>A</strong><br>Marcus Wren has never been afraid of tackling grand questions in accessible prose, and here he turns his attention to idleness – our reluctance to do nothing at all. His central argument, that modern culture has confused constant activity with worth, is not new, but Wren makes it with such conviction and lightness of touch that it feels freshly urgent. He is not interested in the practicalities of, say, workplace policy or economic structures; instead, his concern is entirely with how doing less might change the way we feel about ourselves. This is a modest ambition, perhaps, but Wren pursues it so persuasively that employers and policymakers alike would do well to take his central claim seriously, even if they never open the book itself.</p><p><strong>B</strong><br>There is plenty to admire in Wren\'s willingness to take idleness seriously as a subject worthy of philosophical attention, something few writers have bothered to do. He writes with real confidence, and at his best produces striking, quotable claims – his assertion that \'boredom is the mind\'s way of demanding meaning\' is a genuinely original way of putting it, even if it is asserted rather than properly argued. Where the book is weaker is in its account of why so many people now find rest difficult to tolerate in the first place: the economic pressures, the culture of visible busyness, the fear of falling behind. Without grappling with these forces, his praise of idleness can feel oddly weightless, as though he is recommending a diet without mentioning why anyone might be hungry. Even so, his central provocation – that modern life has undervalued rest – is one that workplaces and policymakers would do well to consider, whatever the book\'s shortcomings.</p><p><strong>C</strong><br>Wren is at his most entertaining when describing his own failed attempts to sit still, and the book is full of wry, self-deprecating anecdotes that make for enjoyable reading. He is a careful, rather modest writer, more inclined to qualify his claims than to assert them boldly, and his discussion of how attitudes to leisure have changed since the nineteenth century is measured and carefully researched. That said, readers hoping for startling new insight may be disappointed; much of what Wren says about the value of rest has already been said, in one form or another, by writers on mindfulness and wellbeing over the past decade. Still, this is a thoughtful and highly readable book, and one that deserves a place on the shelf of anyone interested in how we might live a little more slowly.</p><p><strong>D</strong><br>Can simply doing less really make us happier, or is that a luxury available only to those who can already afford to slow down? Wren barely pauses to consider this question, gliding cheerfully and confidently through his argument as though idleness were equally available to everyone. He writes with real charm and obvious self-assurance, and there is no doubting his enthusiasm for the subject, but charm is not the same as rigour. For all his talk of resisting productivity culture, Wren\'s own prose is remarkably fast-moving, rushing from anecdote to anecdote without lingering long enough on any single idea to test it properly. Readers in search of practical guidance on how to actually build more rest into their lives, rather than simply being told why they should, will need to look elsewhere.</p>',
      sharedOptions: [['A', 'A'], ['B', 'B'], ['C', 'C'], ['D', 'D']],
      questions: [
        { n: 37, type: 'shared', stem: 'Which reviewer has a different opinion from the others on how confidently Wren argues his case?', answer: 'C' },
        { n: 38, type: 'shared', stem: 'Which reviewer shares reviewer A\'s opinion on whether people in positions of power should take note of Wren\'s ideas?', answer: 'B' },
        { n: 39, type: 'shared', stem: 'Which reviewer expresses a similar view to reviewer B regarding whether ordinary readers are able to act on Wren\'s advice?', answer: 'D' },
        { n: 40, type: 'shared', stem: 'Which reviewer has a different view to reviewer C on the originality of some of Wren\'s ideas?', answer: 'B' }
      ]
    },

    'c1-p7': {
      part: 'Reading Part 7', skill: 'reading',
      instructions: 'Six paragraphs have been removed from the extract. Choose from the paragraphs A to G the one which fits each gap. There is one extra paragraph which you do not need to use.',
      title: 'The Eurasian Lynx: Britain\'s Missing Predator',
      passage: '<p>On a shelf in my study I keep a carved wooden lynx, a souvenir from a research trip to Scandinavia. It shows a poised, watchful animal, ears tufted, eyes fixed on some distant movement in the trees.</p><p><span class="gap">(41)</span></p><p>The lynx that once roamed Britain\'s forests disappeared for reasons that are still debated by historians and ecologists alike, though a combination of deforestation and sustained hunting is generally considered the most likely explanation. Bone fragments recovered from caves suggest that the animal survived in parts of Scotland until at least the early medieval period, considerably later than was once assumed.</p><p><span class="gap">(42)</span></p><p>It was the systematic clearance of Britain\'s ancient woodland, accelerating from the medieval period onwards, that removed the vast hunting grounds the lynx depended on. Even where suitable habitat remained, the animal was widely regarded as a threat to livestock, and was killed accordingly wherever it was encountered.</p><p><span class="gap">(43)</span></p><p>Today, several conservation organisations are exploring the feasibility of reintroducing the lynx to carefully selected sites in Scotland and northern England. Early feasibility studies have focused heavily on the availability of suitable habitat and prey, rather than on the animal itself.</p><p><span class="gap">(44)</span></p><p>Public opinion remains sharply divided, and any future reintroduction is likely to depend as much on winning over local communities, particularly sheep farmers, as on the ecological case for the animal\'s return.</p><p><span class="gap">(45)</span></p><p>Much of what is currently known about lynx behaviour in Britain is therefore inferred from populations living in similar forested landscapes in continental Europe, where the species was never entirely lost.</p><p><span class="gap">(46)</span></p><p>Roe deer form the overwhelming majority of the lynx\'s diet in these European populations, supplemented occasionally by hares, birds and, very rarely, young livestock left unattended at forest edges.</p><p>Whether or not the lynx ever again pads silently through a British forest remains uncertain. But the possibility alone is enough to stir something old and half-forgotten in those who still hope for its return.</p>',
      sharedOptions: [['A', 'Rather less attention, by comparison, has been paid to the social and political obstacles that any reintroduction would inevitably face.'], ['B', 'Solitary and largely nocturnal, the lynx relies on patience rather than speed, stalking silently through dense cover before launching a short, explosive pursuit of its prey over a matter of metres rather than a sustained chase.'], ['C', 'It is a striking image, and one that matches most people\'s assumptions about this notoriously elusive animal. Yet the lynx has been absent from the British countryside for well over a thousand years, and any encounter with a real one today would have to take place a very long way from these shores.'], ['D', 'Genetic testing has revealed that many animals once classified as pure lynx were, in reality, hybrids, complicating efforts to define the species precisely.'], ['E', 'Attitudes have shifted considerably since those days, however, as ideas about the ecological value of large predators have gained wider acceptance among conservationists and the public alike.'], ['F', 'Historical records suggest the animal was once widespread across much of mainland Britain, from the dense forests of the south to the remote glens of the far north, wherever sufficient tree cover and prey were available.'], ['G', 'Because no wild lynx has lived in Britain within living memory, there is no first-hand observational data on how the species might behave in a modern, human-altered landscape.']],
      questions: [
        { n: 41, type: 'shared', answer: 'C' },
        { n: 42, type: 'shared', answer: 'F' },
        { n: 43, type: 'shared', answer: 'E' },
        { n: 44, type: 'shared', answer: 'A' },
        { n: 45, type: 'shared', answer: 'G' },
        { n: 46, type: 'shared', answer: 'B' }
      ]
    },

    'c1-p8': {
      part: 'Reading Part 8', skill: 'reading',
      instructions: 'You are going to read a magazine article in which five consultants give advice about self-employment. For each question, choose from the consultants A to E. The consultants may be chosen more than once.',
      title: 'Starting out on your own',
      passage: '<p><em>Five consultants give advice about becoming self-employed.</em></p><p><strong>Consultant A</strong><br>Self-employment brings a level of financial unpredictability that surprises almost everyone, no matter how well they thought they had prepared. Income rarely arrives in a steady, predictable stream, so it\'s essential to set aside a portion of every payment for the quieter months that will inevitably follow a busy patch. It\'s also worth accepting, early on, that you won\'t always be able to tell in advance which projects are going to turn out to be genuinely worthwhile. A job that looks unglamorous or poorly paid at the outset sometimes leads to your most valuable long-term client, while a prestigious-looking contract can occasionally cost you more in time and stress than it\'s worth.</p><p><strong>Consultant B</strong><br>New freelancers often feel disheartened when they realise their early rates are considerably lower than those charged by more established competitors. This is entirely normal, and nothing to be ashamed of; rates typically rise steadily as your reputation and client base grow. In the meantime, it pays to be flexible about the kind of work you take on, even if some of it falls slightly outside your ideal specialism. Accepting a broader range of projects in your first year, rather than holding out for only the most desirable assignments, tends to build both your skills and your visibility far more quickly than a narrower approach ever could.</p><p><strong>Consultant C</strong><br>One lesson that new freelancers often learn the hard way is the importance of setting clear boundaries with clients from the very beginning. Without them, it becomes remarkably easy to find yourself working evenings and weekends simply because a client assumes you\'re always available. Equally, it\'s worth developing the confidence to treat client feedback with a degree of judgement rather than accepting all of it uncritically. Some comments will genuinely improve your work, but others reflect nothing more than a client\'s personal taste, and chasing every suggestion can leave you with a final product that pleases no one, least of all yourself.</p><p><strong>Consultant D</strong><br>It is worth keeping a close eye on how much of your working week is actually spent on tasks that generate no income at all: invoicing, administration, marketing, and simply replying to emails can quietly consume far more time than freelancers expect. Tracking this honestly, even when the numbers are uncomfortable, is the only way to price your services realistically. It\'s also a mistake to stop investing in your own skills once you feel reasonably established. The freelancers who remain in demand for years, rather than a single season, tend to be the ones who keep learning and adapting long after they\'ve stopped needing to prove themselves.</p><p><strong>Consultant E</strong><br>Word-of-mouth recommendations are, for most freelancers, the single most reliable source of future work, but they rarely arrive as quickly as people hope. It typically takes a considerable amount of time, and a track record of consistently reliable work, before existing clients feel comfortable enough to recommend you to others in their network. Rather than waiting passively for this to happen, it is far more effective to contact former colleagues and managers directly and simply ask whether they, or anyone they know, might have suitable work available. Most people are quietly flattered to be asked, and a direct approach often produces results far more quickly than hoping to be remembered.</p>',
      sharedOptions: [['A', 'A'], ['B', 'B'], ['C', 'C'], ['D', 'D'], ['E', 'E']],
      questions: [
        { n: 47, type: 'shared', stem: 'Keep track of how much time you spend on tasks that don\'t directly earn you money.', answer: 'D' },
        { n: 48, type: 'shared', stem: 'It can take a while before new clients start recommending you to others.', answer: 'E' },
        { n: 49, type: 'shared', stem: 'Set aside money for periods when work is unpredictable.', answer: 'A' },
        { n: 50, type: 'shared', stem: 'Don\'t be discouraged if your early rates are lower than you\'d like.', answer: 'B' },
        { n: 51, type: 'shared', stem: 'Establishing clear boundaries with clients early on will save problems later.', answer: 'C' },
        { n: 52, type: 'shared', stem: 'Continue building skills even once you feel established in your field.', answer: 'D' },
        { n: 53, type: 'shared', stem: 'Not every piece of feedback from a client is worth acting on.', answer: 'C' },
        { n: 54, type: 'shared', stem: 'Ask previous colleagues directly whether they\'d consider hiring you.', answer: 'E' },
        { n: 55, type: 'shared', stem: 'Being flexible about the type of work you accept at first can pay off.', answer: 'B' },
        { n: 56, type: 'shared', stem: 'It is not always obvious in advance which projects will be the most profitable.', answer: 'A' }
      ]
    },

    'c1-lis': {
      part: 'Listening', skill: 'listening', audio: true,
      instructions: 'You will hear a man called David Harris talking about a community fitness programme. As you listen, fill in the gaps below with a word, a number or a short phrase.',
      questions: [
        { n: 1, type: 'text', wide: true, stem: 'Although the name may suggest otherwise, David says the programme is ……………',
          accept: ['inclusive and engaging', 'engaging and inclusive', 'inclusive engaging', 'inclusive'] },
        { n: 2, type: 'text', wide: true, stem: 'David says his promotion strategy helps him to reach a ……………',
          accept: ['diverse audience', 'a diverse audience', 'diverse audiences'] },
        { n: 3, type: 'text', wide: true, stem: 'They use everyday items like …………… to do step activities.',
          accept: ['park benches', 'park bench', 'benches'] },
        { n: 4, type: 'text', wide: true, stem: 'When talking about personal training sessions, David says that everyone has different ……………',
          accept: ['priorities', 'priority'] },
        { n: 5, type: 'text', wide: true, stem: 'His website currently features ……………',
          accept: ['fitness tips', 'fitness tips and workout plans', 'workout plans', 'fitness tips and workout plan'] },
        { n: 6, type: 'text', wide: true, stem: '… but he wants to include …………… advice in the future.',
          accept: ['nutritional', 'nutrition'] }
      ]
    }
  },

  writing: {
    'c1-w1': {
      part: 'Writing Part 1',
      brief: 'Your class has attended a panel discussion on how cities could reduce traffic congestion. You have made the notes below.<div class="email-box"><p><strong>Which measures would best reduce traffic congestion in cities?</strong></p><p>• improving public transport<br>• building more cycle lanes<br>• introducing congestion charges</p><p><em>Some opinions expressed in the discussion:</em><br>"People will only give up their cars if buses and trains are reliable."<br>"Cycle lanes only work if they\'re actually safe to use."<br>"Charging drivers is the only thing that really changes behaviour."</p></div>Write an essay discussing <strong>two</strong> of the measures in your notes. You should explain which measure you think would be more effective in reducing congestion, giving reasons in support of your answer.',
      words: 'Write 220 to 260 words in an appropriate style.'
    },
    'c1-w2': {
      part: 'Writing Part 2',
      choice: [
        { label: 'A report', brief: 'You have just completed six months as a volunteer coordinator for a local charity. In preparation for a review meeting, you have been asked to write a report to the charity\'s director.<br><br>Your report should explain what you feel you have achieved in the role so far, describe any problems you have had, and suggest any additional support or training that would be useful.' },
        { label: 'A review', brief: 'You see the following announcement on a website, <em>Turning Points</em>.<div class="email-box"><p><strong>Reviews wanted</strong></p><p>Send us a review of a book or film that focuses on a moment when someone\'s life changed direction completely.</p><p>Did you find the change in the story convincing? Did the book or film help you understand why people change course in life?</p></div>' },
        { label: 'A letter', brief: 'You have received a letter from an English friend.<div class="email-box"><p>…</p><p>My new job is great, and next month I get three weeks of annual leave for the first time. I\'m thinking of spending it somewhere completely different from anywhere I\'ve been before, but I have no idea where to start. I\'d love your advice: where should I go, what should I do while I\'m there, and why?</p><p>Cheers,<br>Jamie</p></div>You do not need to include postal addresses.' }
      ],
      words: 'Write 220 to 260 words in an appropriate style.'
    }
  }
};

/* ============================================================
   AJUSTES
   ============================================================ */
const ROOT = document.getElementById('lt');
const CONFIG = {
  waNumber: ROOT.dataset.wa,                 // WhatsApp de Rob, sin + ni espacios
  waDisplay: ROOT.dataset.waDisplay,
  skoolResult: ROOT.dataset.skoolResult,     // enlace a Skool con UTM (botón de resultados)
  skoolA1: ROOT.dataset.skoolA1,             // enlace a Skool con UTM (pantalla A1)
  skoolShort: 'skool.com/realenglishwithrob',
  banner: '/test-de-nivel/portada.jpg',
  audio: {
    A2: '',
    B1: '/test-de-nivel/B1_Audio.mp3',
    B2: '/test-de-nivel/B2_Audio.mp3',
    C1: '/test-de-nivel/C1_Audio.mp3'
  },
  // Las tres grabaciones ya incluyen su propia repetición, así que 1 = se oye dos veces.
  playsAllowed: { B1: 1, B2: 1, C1: 1 }
};

const BUILD = 'v8 · 10 nov 2026';
const state = {
  lang: 'es', name: '', consent: false, level: null, mode: null,
  answers: {}, writing: {}, queue: [], step: 0, result: null, screen: 'welcome'
};

const T = {
  es: {
    start: 'Empezar el test', next: 'Siguiente', back: 'Atrás', finish: 'Ver mi resultado',
    of: 'de', section: 'Sección', instr: 'Instrucciones',
    levelLabel: 'Nivel {c}', basedOn: 'basado en el {n}',
    welcomeH: 'Test de nivel de inglés gratis',
    welcomeP: 'Descubre tu nivel de inglés, de A2 a C1, con un test que he preparado yo basándome en el formato de los exámenes de Cambridge English. La gramática, el vocabulario, la lectura y el listening se corrigen al momento, y si haces la redacción, te la corrijo yo.',
    welcomeP2: 'Al terminar verás tu nivel del MCER con un desglose por destreza, y podrás guardar tu informe en PDF o mandármelo por WhatsApp.',
    welcomeMeta: 'Es gratis, no tienes que registrarte ni dejar tu correo, y la prueba rápida dura unos 20 minutos.',
    bannerAlt: 'Rob sonriendo junto al lema Deja de bloquearte en 90 días',
    rulesH: 'Antes de empezar',
    r1t: 'Hazlo de una sola vez', r1b: 'No cierres la página a mitad, porque si lo haces en varias sesiones el resultado no será fiable.',
    r2t: 'Sin ayuda de ningún tipo', r2b: 'Nada de diccionarios, traductores, inteligencia artificial ni ayuda de otra persona, porque si usas ayuda el resultado no significa nada y lo único que consigues es empezar en un nivel que no es el tuyo.',
    r3t: 'Cada grabación se escucha una sola vez', r3b: 'Como en el examen real, la grabación ya incluye su propia repetición, así que la oirás dos veces seguidas y después no se puede volver a poner. Lee las preguntas antes de pulsar el botón.',
    r4t: 'No pasa nada por no saber algo', r4b: 'Si no sabes una respuesta, elige la que te parezca más probable y sigue, porque esto es un test de nivel y no un examen que se aprueba o se suspende.',
    nameL: 'Tu nombre', namePh: 'Nombre y apellido',
    consent: 'Entiendo las normas y haré el test sin ayuda. Acepto que mi nombre y mis respuestas aparezcan en mi informe y que, si decido enviárselo a Rob por WhatsApp, él lo use para corregir mi redacción y escribirme sobre mi resultado.',
    privacy: 'Tus respuestas se quedan en tu dispositivo: no se guardan en ningún servidor y solo me llegan si tú decides enviármelas por WhatsApp al final. Tienes los detalles en la <a href="/privacidad">política de privacidad</a>.',
    levelH: '¿Qué nivel crees que tienes?',
    levelP: 'Elige la descripción que mejor te encaje hoy. Si dudas entre dos, quédate con la más baja, porque es mejor confirmar una base sólida que quedarte a medias en un test demasiado difícil.',
    a1H: 'Empieza por la base',
    a1P: 'Todavía no hay test de A1, así que tienes dos opciones:',
    a1o1: 'Hacer el de A2 de todas formas. Si estás entre A1 y A2, te dirá exactamente dónde estás.',
    a1o2: 'Empezar directamente en la comunidad con el curso de Inglés desde Cero, que está pensado justo para este punto de partida.',
    a1btn: 'Hacer el test de A2',
    modeH: '¿Rápido o completo?',
    quickT: 'Prueba rápida', quickD: 'Lectura, vocabulario, gramática y listening en unos 20 minutos. Te da tu nivel con bastante fiabilidad.',
    fullT: 'Prueba completa', fullD: 'Todas las partes del examen, entre 40 y 60 minutos. Es la más precisa y la que te recomiendo si quieres un resultado serio.',
    wOpt: 'La redacción es opcional', wOptB: 'Puedes saltártela y aun así tener tu nivel, pero si la escribes y me la mandas por WhatsApp al final, te la corrijo yo personalmente.',
    wSkip: 'Saltar esta redacción', wWords: 'palabras',
    playT: 'Grabación', playB: 'Lee primero las preguntas. Cuando pulses el botón, la grabación empieza y no se puede parar ni repetir.',
    playBtn: 'Poner la grabación', playing: 'Sonando…', played: 'Grabación terminada',
    playAgain: 'Ahora la oirás por segunda vez…', playErr: 'No se ha podido reproducir. Comprueba el volumen y vuelve a pulsar.',
    yourLevel: 'Tu nivel', overall: 'Puntuación total',
    breakdown: 'Desglose por destreza',
    high: 'nivel alto', solid: 'nivel sólido', noBand: 'Sin nivel',
    dropMsg: 'Has hecho el test de {t}, pero tu puntuación indica que ahora mismo tu nivel es {r}. Es una buena noticia, porque vas a construir sobre una base firme en lugar de forzar.',
    solidMsg: 'Tu nivel es {r}. Has demostrado un dominio sólido de este nivel.',
    highMsg: 'Tu nivel es {r}, en la parte alta, así que estás cerca de dar el salto al siguiente.',
    upMsg: 'Has superado el test de {t} con holgura, así que tu nivel es {r}. Merece la pena que hagas el test del nivel superior para confirmarlo.',
    ungradMsg: 'Este test ha resultado demasiado difícil para medir tu nivel con precisión. No es un mal resultado, simplemente significa que has elegido un nivel por encima del tuyo, así que haz el test de {r} y tendrás una medición real.',
    ungradA2: 'Este test ha resultado demasiado difícil para medir tu nivel con precisión. El mejor punto de partida para ti es el curso de Inglés desde Cero de la comunidad.',
    noList: 'Este test no incluye listening.',
    writingSent: 'Tu redacción va incluida en el informe y en el mensaje de WhatsApp. Mándamela y te la devuelvo corregida.',
    savePdf: 'Guardar mi informe en PDF',
    pdfLoading: 'Preparando tu informe…', pdfDone: 'Listo. Si no ves la descarga, mira en la carpeta de descargas de tu navegador.',
    pdfBlocked: 'Tu navegador no ha dejado crear el PDF. Tu informe está justo debajo: usa la opción Imprimir de tu navegador y elige Guardar como PDF, o hazle una captura de pantalla.',
    reportTitle: 'Informe de nivel de inglés', madeWith: 'Creado con Real English With Rob', writingH: 'Redacción',
    shareH: 'Mándale tu resultado a Rob',
    shareP: 'Al pulsar el botón se abre WhatsApp con un mensaje para mí que ya lleva tu nivel, tu puntuación y tu redacción si la has escrito. Tú decides si lo envías, y si me lo mandas, te escribo para comentarte el resultado y, si quieres, organizar tu prueba oral.',
    waBtn: 'Enviar a Rob por WhatsApp',
    copyBtn: 'Copiar el mensaje', copied: 'Mensaje copiado.', copyFail: 'Selecciona el texto y cópialo a mano.',
    copyHint: 'Si WhatsApp no se abre, copia el mensaje y pégalo en un chat con el {n}.',
    waIntro: 'Hola Rob, he hecho el test de nivel en profedeenglish.com.',
    waName: 'Nombre', waTest: 'Test', waLevel: 'Mi nivel', waScore: 'Puntuación total',
    speakH: 'Tu prueba oral',
    speakP: 'Este test no mide tu speaking ni tu pronunciación, porque eso solo lo puedo valorar yo hablando contigo. Dentro de la comunidad tienes la prueba oral incluida: me mandas un mensaje y la organizamos, sin más.',
    ctaH: 'Deja de bloquearte en 90 días',
    ctaP: 'Saber tu nivel es el primer paso. En Real English With Rob tienes intercambios con nativos y una clase en directo conmigo cada semana, y sin darte cuenta empiezas a hablar sin pensarlo tanto.',
    goSkool: 'Empieza tus 90 días',
    retake: 'Hacer otro test'
  },
  en: {
    start: 'Start the test', next: 'Next', back: 'Back', finish: 'See my result',
    of: 'of', section: 'Section', instr: 'Instructions',
    levelLabel: 'Level {c}', basedOn: 'based on {n}',
    welcomeH: 'Free English level test',
    welcomeP: 'Find out your English level, from A2 to C1, with a test I wrote myself based on the format of the Cambridge English exams. Grammar, vocabulary, reading and listening are marked instantly, and if you do the writing, I correct it myself.',
    welcomeP2: 'At the end you get your CEFR level with a breakdown by skill, and you can save your report as a PDF or send it to me on WhatsApp.',
    welcomeMeta: 'It\'s free, you don\'t need to sign up or give your email, and the quick test takes about 20 minutes.',
    bannerAlt: 'Rob smiling next to the slogan Deja de bloquearte en 90 días',
    rulesH: 'Before you start',
    r1t: 'Do it in one sitting', r1b: 'Don\'t close the page halfway through, because if you split it across sessions the result won\'t be reliable.',
    r2t: 'No help of any kind', r2b: 'No dictionaries, translators, AI or help from another person, because if you use help the result means nothing and all you get is a starting point at the wrong level.',
    r3t: 'You get one go at each recording', r3b: 'As in the real exam, the recording contains its own repeat, so you\'ll hear it twice in a row and after that it can\'t be replayed. Read the questions before you press play.',
    r4t: 'Not knowing something is fine', r4b: 'If you don\'t know an answer, pick the most likely one and move on, because this is a placement test and not something you pass or fail.',
    nameL: 'Your name', namePh: 'First and last name',
    consent: 'I understand the rules and will take the test without help. I agree to my name and answers appearing in my report and that, if I choose to send it to Rob on WhatsApp, he will use it to correct my writing and get in touch about my result.',
    privacy: 'Your answers stay on your device: nothing is saved on a server, and I only receive them if you choose to send them to me on WhatsApp at the end. The details are in the <a href="/privacidad">privacy policy</a> (in Spanish).',
    levelH: 'What level do you think you are?',
    levelP: 'Pick the description that fits you today. If you\'re torn between two, go for the lower one, because confirming a solid base beats getting stuck halfway through a test that\'s too hard.',
    a1H: 'Start from the ground up',
    a1P: 'There\'s no A1 test yet, so you have two options:',
    a1o1: 'Take the A2 test anyway. If you\'re between A1 and A2, it will show you exactly where you stand.',
    a1o2: 'Start straight away in the community with the English from Zero course, built for exactly this starting point.',
    a1btn: 'Take the A2 test',
    modeH: 'Quick or comprehensive?',
    quickT: 'Quick test', quickD: 'Reading, vocabulary, grammar and listening in about 20 minutes. Gives you your level with good reliability.',
    fullT: 'Comprehensive test', fullD: 'Every part of the exam, 40 to 60 minutes. The most accurate, and the one I\'d recommend if you want a serious result.',
    wOpt: 'The writing is optional', wOptB: 'You can skip it and still get your level, but if you write it and send it to me on WhatsApp at the end, I\'ll correct it personally.',
    wSkip: 'Skip this writing task', wWords: 'words',
    playT: 'Recording', playB: 'Read the questions first. Once you press the button, the recording starts and can\'t be paused or replayed.',
    playBtn: 'Play the recording', playing: 'Playing…', played: 'Recording finished',
    playAgain: 'You\'ll now hear it a second time…', playErr: 'It couldn\'t play. Check your volume and press again.',
    yourLevel: 'Your level', overall: 'Overall score',
    breakdown: 'Breakdown by skill',
    high: 'high', solid: 'solid', noBand: 'No level',
    dropMsg: 'You took the {t} test, but your score places you at {r} right now. That\'s good news, because you\'ll build on firm ground instead of forcing it.',
    solidMsg: 'Your level is {r}. You showed a solid command of this level.',
    highMsg: 'Your level is a high {r}, so you\'re close to moving up to the next one.',
    upMsg: 'You cleared the {t} test comfortably, so your level is {r}. It\'s worth taking the test above to confirm it.',
    ungradMsg: 'This test turned out to be too hard to measure your level accurately. That isn\'t a bad result, it just means you picked a level above your own, so take the {r} test and you\'ll get a real measurement.',
    ungradA2: 'This test turned out to be too hard to measure your level accurately. Your best starting point is the English from Zero course in the community.',
    noList: 'This test doesn\'t include listening.',
    writingSent: 'Your writing is included in the report and in the WhatsApp message. Send it over and I\'ll return it corrected.',
    savePdf: 'Save my report as a PDF',
    pdfLoading: 'Preparing your report…', pdfDone: 'Done. If you can\'t see it, check your browser\'s downloads folder.',
    pdfBlocked: 'Your browser wouldn\'t create the PDF. Your report is just below: use your browser\'s Print option and choose Save as PDF, or take a screenshot.',
    reportTitle: 'English Level Report', madeWith: 'Created using Real English With Rob', writingH: 'Writing',
    shareH: 'Send your result to Rob',
    shareP: 'The button opens WhatsApp with a message to me that already contains your level, your score and your writing if you did it. You decide whether to send it, and if you do, I\'ll get in touch about your result and, if you\'d like, arrange your speaking test.',
    waBtn: 'Send to Rob on WhatsApp',
    copyBtn: 'Copy the message', copied: 'Message copied.', copyFail: 'Select the text and copy it manually.',
    copyHint: 'If WhatsApp doesn\'t open, copy the message and paste it into a chat with {n}.',
    waIntro: 'Hi Rob, I\'ve done the level test on profedeenglish.com.',
    waName: 'Name', waTest: 'Test', waLevel: 'My level', waScore: 'Overall score',
    speakH: 'Your speaking test',
    speakP: 'This test doesn\'t measure your speaking or pronunciation, because only I can assess that by talking to you. Inside the community the speaking test is included: just send me a message and we\'ll arrange it.',
    ctaH: 'Stop freezing in 90 days',
    ctaP: 'Knowing your level is the first step. In Real English With Rob you get exchanges with native speakers and a live class with me every week, and before you know it you\'re speaking without overthinking every word.',
    goSkool: 'Start your 90 days',
    retake: 'Take another test'
  }
};

const LEVELS_INFO = [
  { code: 'A1', es: 'Entiendo palabras sueltas y frases muy básicas, pero todavía no soy capaz de formar frases propias con seguridad.', en: 'I understand isolated words and very basic phrases, but I can\'t yet build my own sentences with confidence.' },
  { code: 'A2', es: 'Me manejo en situaciones muy conocidas, como presentarme, pedir en un bar o hablar de mi rutina, pero me cuesta salir de ahí.', en: 'I cope in very familiar situations, like introducing myself, ordering in a bar or talking about my routine, but beyond that I struggle.' },
  { code: 'B1', es: 'Puedo mantener una conversación sencilla sobre temas cotidianos, contar lo que hice el fin de semana y explicar mis planes, aunque con errores.', en: 'I can hold a simple conversation about everyday topics, say what I did at the weekend and explain my plans, though with mistakes.' },
  { code: 'B2', es: 'Me expreso con bastante fluidez, doy mi opinión y la argumento, y sigo una conversación entre nativos sin perderme del todo.', en: 'I express myself fairly fluently, give and defend an opinion, and follow a conversation between native speakers without getting completely lost.' },
  { code: 'C1', es: 'Uso el inglés con soltura en el trabajo y en contextos exigentes, y manejo matices, ironía y lenguaje formal e informal.', en: 'I use English comfortably at work and in demanding contexts, and I handle nuance, irony, and both formal and informal registers.' }
];

const SKILL_NAMES = {
  es: { vocabulary: 'Vocabulario', grammar: 'Gramática', reading: 'Lectura', listening: 'Listening' },
  en: { vocabulary: 'Vocabulary', grammar: 'Grammar', reading: 'Reading', listening: 'Listening' }
};
const SKILLS = ['vocabulary', 'grammar', 'reading', 'listening'];

/* ---------- helpers ---------- */
const $ = s => ROOT.querySelector(s);
const t = k => T[state.lang][k] || k;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const levelLabel = code => t('levelLabel').replace('{c}', code);
const basedOn = L => t('basedOn').replace('{n}', L.name);
const modeLabel = () => state.mode === 'quick' ? t('quickT') : t('fullT');

function norm(s) {
  return String(s || '').toLowerCase().trim()
    .replace(/[’‘]/g, "'").replace(/[.,!?;:"()–—-]/g, ' ').replace(/&/g, ' and ')
    .replace(/n't\b/g, ' not').replace(/'ve\b/g, ' have').replace(/'ll\b/g, ' will')
    .replace(/'re\b/g, ' are').replace(/'d\b/g, ' had').replace(/'m\b/g, ' am')
    .replace(/\s+/g, ' ').trim();
}

function show(id, scroll = true) {
  ROOT.querySelectorAll('.lt-screen').forEach(s => s.classList.remove('on'));
  $('#lt-' + id).classList.add('on');
  state.screen = id;
  renderLangBar();
  if (scroll) ROOT.scrollIntoView({ block: 'start' });
}

/* ---------- language switch ---------- */
function renderLangBar() {
  const bar = $('#ltLang');
  if (state.screen === 'test') { bar.hidden = true; return; }
  bar.hidden = false;
  bar.innerHTML = `<span class="lt-lang__label">${t('instr')}:</span>
    <button type="button" lang="es" aria-pressed="${state.lang === 'es'}" onclick="setLang('es')">Español</button>
    <button type="button" lang="en" aria-pressed="${state.lang === 'en'}" onclick="setLang('en')">English</button>`;
}

function setLang(lang) {
  if (lang === state.lang) return;
  state.lang = lang;
  ROOT.lang = lang;
  const redraw = { welcome: renderWelcome, rules: goRules, level: goLevel, a1: goA1, mode: goMode, results: renderResults };
  (redraw[state.screen] || renderWelcome)(false);
  $('#ltLang button[aria-pressed="true"]').focus();
}

/* ---------- screens ---------- */
function renderWelcome(scroll) {
  $('#lt-welcome').innerHTML = `
    <img class="lt-banner" src="${CONFIG.banner}" width="1400" height="744" alt="${t('bannerAlt')}">
    <h1>${t('welcomeH')}</h1>
    <p class="lt-lede">${t('welcomeP')}</p>
    <p>${t('welcomeP2')}</p>
    <p class="lt-meta">${t('welcomeMeta')}</p>
    <button type="button" class="btn btn--primary" onclick="goRules()">${t('start')}</button>
    <p class="lt-build">${BUILD}</p>`;
  show('welcome', scroll);
}

function goRules(scroll) {
  $('#lt-rules').innerHTML = `
    <h2>${t('rulesH')}</h2>
    <div class="lt-warn"><strong>${t('r2t')}.</strong> ${t('r2b')}</div>
    <div class="card lt-tight"><p class="lt-eyebrow">${t('r1t')}</p><p>${t('r1b')}</p></div>
    <div class="card lt-tight"><p class="lt-eyebrow">${t('r3t')}</p><p>${t('r3b')}</p></div>
    <div class="card lt-tight"><p class="lt-eyebrow">${t('r4t')}</p><p>${t('r4b')}</p></div>
    <label class="lt-label" for="nameIn">${t('nameL')}</label>
    <input type="text" class="lt-input lt-input--wide" id="nameIn" autocomplete="name" placeholder="${t('namePh')}" oninput="state.name=this.value;checkReady()">
    <p class="lt-small">${t('privacy')}</p>
    <label class="lt-check" id="consentBox">
      <input type="checkbox" id="consentIn" onchange="state.consent=this.checked;checkReady();this.closest('.lt-check').classList.toggle('sel',this.checked)">
      <span>${t('consent')}</span>
    </label>
    <div class="lt-btnrow">
      <button type="button" class="btn btn--ghost" onclick="renderWelcome()">${t('back')}</button>
      <button type="button" class="btn btn--primary" id="rulesNext" disabled onclick="goLevel()">${t('next')}</button>
    </div>`;
  $('#nameIn').value = state.name;
  if (state.consent) { $('#consentIn').checked = true; $('#consentBox').classList.add('sel'); }
  checkReady();
  show('rules', scroll);
}

function checkReady() {
  $('#rulesNext').disabled = !($('#nameIn').value.trim().length > 1 && $('#consentIn').checked);
}

function goLevel(scroll) {
  state.name = state.name.trim();
  $('#lt-level').innerHTML = `
    <h2>${t('levelH')}</h2>
    <p>${t('levelP')}</p>
    ${LEVELS_INFO.map(l => `
      <button type="button" class="lt-choice${state.level === l.code ? ' sel' : ''}" onclick="pickLevel('${l.code}',this)">
        <span class="lt-choice__title">${l.code}</span>
        <span class="lt-choice__desc">${l[state.lang]}</span>
      </button>`).join('')}
    <button type="button" class="btn btn--ghost lt-back" onclick="goRules()">${t('back')}</button>`;
  show('level', scroll);
}

function pickLevel(code, el) {
  ROOT.querySelectorAll('#lt-level .lt-choice').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
  setTimeout(() => { if (code === 'A1') goA1(); else { state.level = code; goMode(); } }, 180);
}

function goA1(scroll) {
  $('#lt-a1').innerHTML = `
    <h2>${t('a1H')}</h2>
    <p>${t('a1P')}</p>
    <div class="card lt-tight"><p>${t('a1o1')}</p></div>
    <div class="card lt-tight"><p>${t('a1o2')}</p></div>
    <button type="button" class="btn btn--primary" onclick="state.level='A2';goMode()">${t('a1btn')}</button>
    <a class="btn btn--ghost lt-mt" href="${CONFIG.skoolA1}">${t('goSkool')}</a>
    <button type="button" class="btn btn--ghost lt-back" onclick="goLevel()">${t('back')}</button>`;
  show('a1', scroll);
}

function goMode(scroll) {
  const L = DATA[state.level];
  $('#lt-mode').innerHTML = `
    <p class="lt-eyebrow">${levelLabel(L.code)} · ${basedOn(L)}</p>
    <h2>${t('modeH')}</h2>
    <button type="button" class="lt-choice${state.mode === 'quick' ? ' sel' : ''}" onclick="pickMode('quick',this)">
      <span class="lt-choice__title">${t('quickT')}</span><span class="lt-choice__desc">${t('quickD')}</span></button>
    <button type="button" class="lt-choice${state.mode === 'full' ? ' sel' : ''}" onclick="pickMode('full',this)">
      <span class="lt-choice__title">${t('fullT')}</span><span class="lt-choice__desc">${t('fullD')}</span></button>
    <button type="button" class="btn btn--ghost lt-back" onclick="goLevel()">${t('back')}</button>`;
  show('mode', scroll);
}

function pickMode(m, el) {
  ROOT.querySelectorAll('#lt-mode .lt-choice').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
  state.mode = m;
  setTimeout(buildQueue, 180);
}

/* ---------- test flow ---------- */
function buildQueue() {
  const L = DATA[state.level];
  state.queue = (state.mode === 'quick' ? L.quick : L.full)
    .filter(id => !L.sections[id].audio || !!CONFIG.audio[L.audio])
    .map(id => ({ kind: 'section', id }));
  (state.mode === 'quick' ? L.quickWriting : L.fullWriting).forEach(id => state.queue.push({ kind: 'writing', id }));
  state.step = 0;
  renderStep();
}

function stopAudio() {
  if (!audioEl) return;
  audioEl.ontimeupdate = null; audioEl.onended = null;
  try { audioEl.pause(); } catch (e) {}
  audioEl = null;
}

function renderStep() {
  stopAudio();
  if (state.step >= state.queue.length) return finish();
  const item = state.queue[state.step];
  item.kind === 'section' ? renderSection(item.id) : renderWriting(item.id);
  show('test');
}

function progressHtml() {
  const pct = Math.round((state.step / state.queue.length) * 100);
  return `<div class="lt-prog"><div class="lt-prog__meta">
      <span>${levelLabel(state.level)} · ${modeLabel()}</span>
      <span>${t('section')} ${state.step + 1} ${t('of')} ${state.queue.length}</span>
    </div><div class="lt-prog__bar" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}"><i style="width:${pct}%"></i></div></div>`;
}

function renderSection(id) {
  const L = DATA[state.level], s = L.sections[id];
  let h = progressHtml();
  h += `<p class="lt-eyebrow" lang="en">${s.part}</p>`;
  if (s.title) h += `<h3 lang="en">${s.title}</h3>`;
  h += `<p class="lt-instr" lang="en">${s.instructions}</p>`;

  if (s.audio) {
    h += `<div class="lt-player">
      <p class="lt-player__title">${t('playT')}</p><p>${t('playB')}</p>
      <button type="button" class="btn btn--primary" id="playBtn" onclick="playAudio('${L.audio}')">${t('playBtn')}</button>
      <div class="lt-player__bar"><i id="pbarFill"></i></div>
      <p id="playState" class="lt-player__state" aria-live="polite"></p></div>`;
  }
  if (s.passage) h += `<div class="lt-passage" lang="en">${s.passage}</div>`;

  h += '<div class="card lt-questions" lang="en">';
  s.questions.forEach(q => {
    if (q.group) h += `<div class="lt-grouphdr">${q.group}</div>`;
    h += `<div class="lt-q">`;
    if (q.notice) h += `<div class="lt-notice">${q.notice}</div>`;
    if (q.lead) h += `<div class="lt-qlead">${q.lead}</div>`;
    if (q.hint) h += `<div class="lt-qhint">${q.hint}</div>`;
    const stem = q.stem || '';
    if (stem || !q.inline) {
      h += `<div class="lt-qhead"><span class="lt-qnum">${q.n}</span><div class="lt-qtext">${stem || '&nbsp;'}</div></div>`;
    }
    const key = id + '|' + q.n;
    if (q.type === 'text') {
      h += `<div class="lt-tin">${q.inline ? `<span class="lt-qnum">${q.n}</span>` : ''}
        <input type="text" class="lt-input${q.wide ? ' lt-input--wide' : ''}" aria-label="${q.n}" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"
        value="${esc(state.answers[key] || '')}" oninput="state.answers['${key}']=this.value"></div>`;
    } else {
      const opts = q.type === 'shared' ? s.sharedOptions : q.options;
      h += `<div class="${q.inline ? 'lt-inline-opts' : 'lt-opts'}" role="radiogroup" aria-label="${q.n}">`;
      if (q.inline) h += `<span class="lt-qnum">${q.n}</span>`;
      opts.forEach(([ltr, txt]) => {
        const on = state.answers[key] === ltr;
        h += `<button type="button" role="radio" aria-checked="${on}" class="lt-opt${on ? ' sel' : ''}" data-v="${ltr}" onclick="pick('${key}',this)">
          <span class="lt-ltr">${ltr}</span><span class="lt-txt">${txt}</span></button>`;
      });
      h += `</div>`;
    }
    h += `</div>`;
  });
  h += '</div>';
  h += navHtml();
  $('#lt-test').innerHTML = h;
}

function pick(key, el) {
  el.parentNode.querySelectorAll('.lt-opt').forEach(o => { o.classList.remove('sel'); o.setAttribute('aria-checked', 'false'); });
  el.classList.add('sel'); el.setAttribute('aria-checked', 'true');
  state.answers[key] = el.dataset.v;
}

function renderWriting(id) {
  const L = DATA[state.level], w = L.writing[id];
  let h = progressHtml();
  h += `<p class="lt-eyebrow" lang="en">${w.part}</p>`;
  h += `<div class="lt-optional"><strong>${t('wOpt')}.</strong> ${t('wOptB')}</div>`;
  if (w.choice) {
    const picked = state.writing[id + '|choice'] ?? 0;
    h += `<div class="lt-opts lt-opts--flat" role="radiogroup">`;
    w.choice.forEach((c, i) => {
      h += `<button type="button" role="radio" aria-checked="${i === picked}" class="lt-opt lt-opt--boxed${i === picked ? ' sel' : ''}" lang="en"
        onclick="state.writing['${id}|choice']=${i};renderStep()"><span class="lt-ltr">${i + 1}</span><span class="lt-txt">${c.label}</span></button>`;
    });
    h += `</div><div class="card lt-brief" lang="en">${w.choice[picked].brief}</div>`;
  } else {
    h += `<div class="card lt-brief" lang="en">${w.brief}</div>`;
  }
  if (w.image) h += `<img class="lt-storyimg" src="${w.image}" width="1200" height="276" alt="Three pictures: a sad boy with a flat bicycle tyre, the boy fixing the tyre, and the boy happily riding the bike in the sun.">`;
  h += `<p class="lt-instr" lang="en"><strong>${w.words}</strong></p>`;
  h += `<textarea id="wArea" class="lt-textarea" lang="en" aria-label="${w.part}" oninput="onWrite('${id}')">${esc(state.writing[id] || '')}</textarea>
        <div class="lt-wcount" id="wCount">0 ${t('wWords')}</div>`;
  h += navHtml(true);
  $('#lt-test').innerHTML = h;
  onWrite(id);
}

function onWrite(id) {
  const v = $('#wArea').value;
  state.writing[id] = v;
  const n = v.trim() ? v.trim().split(/\s+/).length : 0;
  $('#wCount').textContent = n + ' ' + t('wWords');
}

function navHtml(isWriting) {
  const last = state.step === state.queue.length - 1;
  return `<div class="lt-btnrow">
    <button type="button" class="btn btn--ghost" onclick="${state.step > 0 ? 'state.step--;renderStep()' : 'stopAudio();goMode()'}">${t('back')}</button>
    <button type="button" class="btn btn--primary" onclick="state.step++;renderStep()">${last ? t('finish') : t('next')}</button>
  </div>${isWriting ? `<button type="button" class="btn btn--ghost lt-mt" onclick="state.writing['${state.queue[state.step].id}']='';state.step++;renderStep()">${t('wSkip')}</button>` : ''}`;
}

/* ---------- audio ---------- */
let audioEl = null;

function playAudio(levelKey) {
  const btn = $('#playBtn'), fill = $('#pbarFill'), st = $('#playState');
  const plays = Math.max(1, CONFIG.playsAllowed[levelKey] || 1);
  let pass = 1;
  const label = () => plays > 1 ? `${t('playing')} (${pass}/${plays})` : t('playing');
  btn.disabled = true;
  audioEl = new Audio(CONFIG.audio[levelKey]);
  st.textContent = label();
  audioEl.play().catch(() => { st.textContent = t('playErr'); btn.disabled = false; audioEl = null; });
  audioEl.ontimeupdate = () => {
    if (!audioEl || !audioEl.duration || !fill.isConnected) return;
    fill.style.width = (audioEl.currentTime / audioEl.duration * 100) + '%';
  };
  audioEl.onended = () => {
    if (!audioEl) return;
    if (pass < plays) {
      pass++;
      st.textContent = t('playAgain');
      fill.style.width = '0%';
      setTimeout(() => { if (!audioEl) return; audioEl.currentTime = 0; audioEl.play(); st.textContent = label(); }, 5000);
    } else {
      st.textContent = t('played');
      fill.style.width = '100%';
    }
  };
}

/* ---------- scoring ---------- */
function finish() {
  stopAudio();
  const L = DATA[state.level];
  const bySkill = {}; let right = 0, total = 0;
  state.queue.filter(i => i.kind === 'section').forEach(({ id }) => {
    const s = L.sections[id];
    s.questions.forEach(q => {
      const given = state.answers[id + '|' + q.n];
      const ok = q.type === 'text' ? (q.accept || []).some(a => norm(a) === norm(given)) : given === q.answer;
      bySkill[s.skill] = bySkill[s.skill] || { r: 0, t: 0 };
      bySkill[s.skill].t++; total++;
      if (ok) { bySkill[s.skill].r++; right++; }
    });
  });

  const pct = total ? Math.round(right / total * 100) : 0;
  const tested = L.code;
  let band, kind;
  if (pct < 35) { kind = 'ungraded'; band = null; }
  else if (pct < 60) { kind = 'down'; band = L.below; }
  else if (pct < 75) { kind = 'solid'; band = tested; }
  else if (pct < 90) { kind = 'high'; band = tested; }
  else { kind = 'up'; band = L.above; }
  state.result = { pct, right, total, band, kind, bySkill, tested, hasListening: !!bySkill.listening };
  renderResults();
}

// the note is built on demand so it follows the language switch
function resultNote() {
  const r = state.result, L = DATA[state.level];
  if (r.kind === 'ungraded') return r.tested === 'A2' ? t('ungradA2') : t('ungradMsg').replace('{r}', L.below);
  const key = { down: 'dropMsg', solid: 'solidMsg', high: 'highMsg', up: 'upMsg' }[r.kind];
  return t(key).replace('{t}', r.tested).replace('{r}', r.band);
}
const bandText = () => state.result.band || t('noBand');
const subText = () => state.result.kind === 'high' ? t('high') : state.result.kind === 'solid' ? t('solid') : '';
const writings = () => {
  const L = DATA[state.level], out = [];
  Object.entries(state.writing).forEach(([k, v]) => {
    if (k.includes('|choice') || !v || v.trim().length < 20) return;
    out.push([L.writing[k] ? L.writing[k].part : 'Writing', v.trim()]);
  });
  return out;
};

function renderResults(scroll) {
  const r = state.result, sn = SKILL_NAMES[state.lang], L = DATA[state.level];
  const sub = subText();
  let h = `<div class="lt-verdict">
      <p class="lt-verdict__eyebrow">${t('yourLevel')}</p>
      <h2 class="lt-verdict__band${r.band ? '' : ' lt-verdict__band--none'}">${bandText()}</h2>
      ${sub ? `<p class="lt-verdict__sub">${sub}</p>` : ''}
      <p class="lt-verdict__pct">${t('overall')}: ${r.pct}% (${r.right}/${r.total})</p>
      <p class="lt-verdict__test">${levelLabel(L.code)} · ${basedOn(L)} · ${modeLabel()}</p>
    </div>
    <div class="card lt-tight"><p>${resultNote()}</p></div>
    <div class="card lt-tight"><p class="lt-eyebrow">${t('breakdown')}</p>`;
  SKILLS.forEach(k => {
    if (!r.bySkill[k]) return;
    const d = r.bySkill[k], p = Math.round(d.r / d.t * 100);
    h += `<div class="lt-skill"><div class="lt-skill__nm">${sn[k]}</div>
      <div class="lt-skill__track"><i style="width:${p}%"></i></div>
      <div class="lt-skill__val">${p}% · ${d.r}/${d.t}</div></div>`;
  });
  h += `</div>`;
  if (!r.hasListening) h += `<p class="lt-small">${t('noList')}</p>`;
  if (writings().length) h += `<p class="lt-small">${t('writingSent')}</p>`;

  h += `<button type="button" class="btn btn--ghost" onclick="makePdf()">${t('savePdf')}</button>
        <p class="lt-small" id="pdfHint" aria-live="polite"></p>
        <div id="reportPanel" hidden></div>

        <div class="lt-share">
          <h2>${t('shareH')}</h2>
          <p>${t('shareP')}</p>
          <a class="btn btn--primary" id="waLink" target="_blank" rel="noopener">${t('waBtn')}</a>
          <button type="button" class="lt-linkbtn" onclick="copyReport()">${t('copyBtn')}</button>
          <span class="lt-small" id="copyMsg" aria-live="polite"></span>
          <p class="lt-small">${t('copyHint').replace('{n}', CONFIG.waDisplay)}</p>
          <textarea id="shareText" class="lt-sharetext" readonly aria-label="${t('copyBtn')}"></textarea>
        </div>

        <div class="card lt-tight lt-speak">
          <h3>${t('speakH')}</h3>
          <p>${t('speakP')}</p>
        </div>

        <div class="lt-cta">
          <h2>${t('ctaH')}</h2>
          <p>${t('ctaP')}</p>
          <a class="btn btn--primary" href="${CONFIG.skoolResult}">${t('goSkool')}</a>
        </div>
        <button type="button" class="btn btn--ghost" onclick="resetTest()">${t('retake')}</button>`;

  $('#lt-results').innerHTML = h;
  const msg = reportText();
  $('#shareText').value = msg;
  $('#waLink').href = `https://wa.me/${CONFIG.waNumber}?text=${encodeURIComponent(msg)}`;
  show('results', scroll);
}

function resetTest() {
  Object.assign(state, { level: null, mode: null, answers: {}, writing: {}, queue: [], step: 0, result: null });
  goLevel();
}

/* ---------- WhatsApp message ---------- */
function reportText() {
  const r = state.result, sn = SKILL_NAMES[state.lang], L = DATA[state.level];
  const sub = subText();
  const out = [t('waIntro'), '',
    `${t('waName')}: ${state.name}`,
    `${t('waTest')}: ${levelLabel(L.code)} (${basedOn(L)}), ${modeLabel().toLowerCase()}`,
    `${t('waLevel')}: ${bandText()}${sub ? ' (' + sub + ')' : ''}`,
    `${t('waScore')}: ${r.pct}% (${r.right}/${r.total})`, ''];
  SKILLS.forEach(k => {
    if (!r.bySkill[k]) return;
    const d = r.bySkill[k];
    out.push(`${sn[k]}: ${Math.round(d.r / d.t * 100)}% (${d.r}/${d.t})`);
  });
  writings().forEach(([label, txt]) => out.push('', `${t('writingH')} (${label}):`, txt));
  return out.join('\n');
}

function copyReport() {
  const ta = $('#shareText'), msg = $('#copyMsg');
  const done = () => { msg.textContent = t('copied'); };
  const manual = () => { ta.classList.add('on'); ta.select(); msg.textContent = t('copyFail'); };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(ta.value).then(done).catch(manual);
  } else manual();
}

/* ---------- PDF report ---------- */
function loadScript(src) {
  return new Promise((res, rej) => {
    if (document.querySelector(`script[src="${src}"]`)) return res();
    const s = document.createElement('script');
    s.src = src; s.onload = res; s.onerror = rej;
    document.head.appendChild(s);
  });
}

function loadImage(src) {
  return new Promise((res, rej) => {
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = img.naturalWidth; c.height = img.naturalHeight;
      c.getContext('2d').drawImage(img, 0, 0);
      res({ data: c.toDataURL('image/jpeg', 0.85), w: img.naturalWidth, h: img.naturalHeight });
    };
    img.onerror = rej;
    img.src = src;
  });
}

async function makePdf() {
  const hint = $('#pdfHint');
  hint.textContent = t('pdfLoading');
  try {
    await loadScript('/test-de-nivel/jspdf.umd.min.js');
    await loadScript('/test-de-nivel/pdf-fonts.js');
    const banner = await loadImage(CONFIG.banner);
    buildPdf(banner);
    hint.textContent = t('pdfDone');
  } catch (e) {
    showReportFallback();
  }
}

function showReportFallback() {
  const panel = $('#reportPanel');
  panel.innerHTML = `<div class="lt-report">${reportHtml()}</div>`;
  panel.hidden = false;
  $('#pdfHint').textContent = t('pdfBlocked');
  panel.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function reportHtml() {
  const r = state.result, sn = SKILL_NAMES[state.lang], L = DATA[state.level];
  let h = `<img class="lt-report__banner" src="${CONFIG.banner}" alt="">
    <p class="lt-report__title">${t('reportTitle')}</p>
    <p><strong>${esc(state.name)}</strong><br>${dateText()}<br>${levelLabel(L.code)} · ${basedOn(L)} · ${modeLabel()}</p>
    <p class="lt-report__band">${t('yourLevel')}: <strong>${bandText()}</strong>${subText() ? ' (' + subText() + ')' : ''} · ${t('overall')}: ${r.pct}% (${r.right}/${r.total})</p>
    <p>${resultNote()}</p><table class="lt-report__table">`;
  SKILLS.forEach(k => {
    if (!r.bySkill[k]) return;
    const d = r.bySkill[k];
    h += `<tr><td>${sn[k]}</td><td>${Math.round(d.r / d.t * 100)}%</td><td>${d.r}/${d.t}</td></tr>`;
  });
  h += `</table>`;
  writings().forEach(([label, txt]) => { h += `<p class="lt-eyebrow">${label}</p><p class="lt-report__writing">${esc(txt)}</p>`; });
  h += `<p class="lt-small">${t('madeWith')} · ${CONFIG.skoolShort}</p>`;
  return h;
}

const dateText = () => new Date().toLocaleDateString(state.lang === 'es' ? 'es-ES' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

function buildPdf(banner) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  (window.LT_PDF_FONTS || []).forEach(f => { doc.addFileToVFS(f.file, f.data); doc.addFont(f.file, f.family, f.style); });
  const has = (window.LT_PDF_FONTS || []).length > 0;
  const DISPLAY = has ? ['Shrikhand', 'normal'] : ['times', 'bold'];
  const SANS = has ? 'DMSans' : 'helvetica';
  const NAVY = [30, 42, 58], CORAL = [224, 78, 54], SEA = [31, 111, 150], SUN = [242, 184, 75],
        CREAM = [244, 239, 229], SOFT = [77, 85, 96];
  const r = state.result, sn = SKILL_NAMES[state.lang], L = DATA[state.level];
  const W = 210, M = 18; let y;

  const bh = W * banner.h / banner.w;
  doc.addImage(banner.data, 'JPEG', 0, 0, W, bh);
  y = bh + 15;

  doc.setFont(...DISPLAY); doc.setFontSize(24); doc.setTextColor(...CORAL);
  doc.text(t('reportTitle'), M, y); y += 10;

  doc.setFont(SANS, 'bold'); doc.setFontSize(11.5); doc.setTextColor(...NAVY);
  doc.text(state.name, M, y); y += 5.5;
  doc.setFont(SANS, 'normal'); doc.setFontSize(10); doc.setTextColor(...SOFT);
  doc.text(dateText(), M, y); y += 5;
  doc.text(`${levelLabel(L.code)} · ${basedOn(L)} · ${modeLabel()}`, M, y); y += 10;

  doc.setFillColor(...NAVY); doc.roundedRect(M, y, W - M * 2, 36, 4, 4, 'F');
  doc.setFont(SANS, 'bold'); doc.setFontSize(8.5); doc.setTextColor(...SUN);
  doc.text(t('yourLevel').toUpperCase(), M + 9, y + 10);
  doc.setFont(...DISPLAY); doc.setFontSize(r.band ? 32 : 22); doc.setTextColor(...CREAM);
  doc.text(bandText(), M + 9, y + 26);
  doc.setFont(SANS, 'normal'); doc.setFontSize(10.5); doc.setTextColor(...SUN);
  doc.text(`${t('overall')}: ${r.pct}%  (${r.right}/${r.total})`, W - M - 9, y + 26, { align: 'right' });
  if (subText()) { doc.setTextColor(...CREAM); doc.text(subText(), W - M - 9, y + 18, { align: 'right' }); }
  y += 46;

  doc.setFont(SANS, 'normal'); doc.setFontSize(10.5); doc.setTextColor(...NAVY);
  doc.splitTextToSize(resultNote(), W - M * 2).forEach(l => { doc.text(l, M, y); y += 5.2; });
  y += 8;

  doc.setFont(...DISPLAY); doc.setFontSize(15); doc.setTextColor(...CORAL);
  doc.text(t('breakdown'), M, y); y += 8;
  doc.setFontSize(10.5);
  SKILLS.forEach(k => {
    if (!r.bySkill[k]) return;
    const d = r.bySkill[k], pc = Math.round(d.r / d.t * 100);
    doc.setFont(SANS, 'bold'); doc.setTextColor(...NAVY); doc.text(sn[k], M, y);
    doc.setDrawColor(...NAVY); doc.setLineWidth(0.4); doc.setFillColor(...CREAM);
    doc.roundedRect(M + 36, y - 3.4, 98, 4.2, 2.1, 2.1, 'FD');
    if (pc > 0) { doc.setFillColor(...SEA); doc.roundedRect(M + 36, y - 3.4, Math.max(4.2, 98 * pc / 100), 4.2, 2.1, 2.1, 'F'); }
    doc.setFont(SANS, 'normal'); doc.setTextColor(...SOFT); doc.text(`${pc}%  ${d.r}/${d.t}`, W - M, y, { align: 'right' });
    y += 9;
  });

  const parts = writings();
  if (parts.length) {
    doc.addPage(); y = 24;
    doc.setFont(...DISPLAY); doc.setFontSize(20); doc.setTextColor(...CORAL);
    doc.text(t('writingH'), M, y); y += 8;
    doc.setFont(SANS, 'normal'); doc.setFontSize(9.5); doc.setTextColor(...SOFT);
    doc.splitTextToSize(t('writingSent'), W - M * 2).forEach(l => { doc.text(l, M, y); y += 4.6; });
    y += 6;
    parts.forEach(([label, txt]) => {
      if (y > 258) { doc.addPage(); y = 24; }
      doc.setFont(SANS, 'bold'); doc.setFontSize(9); doc.setTextColor(...SEA);
      doc.text(label.toUpperCase(), M, y); y += 6;
      doc.setFont(SANS, 'normal'); doc.setFontSize(11); doc.setTextColor(...NAVY);
      doc.splitTextToSize(txt, W - M * 2).forEach(l => {
        if (y > 274) { doc.addPage(); y = 24; }
        doc.text(l, M, y); y += 5.6;
      });
      y += 8;
    });
  }

  const n = doc.getNumberOfPages();
  for (let i = 1; i <= n; i++) {
    doc.setPage(i);
    doc.setDrawColor(...SEA); doc.setLineWidth(0.5); doc.line(M, 283, W - M, 283);
    doc.setFont(SANS, 'normal'); doc.setFontSize(8.5); doc.setTextColor(...SOFT);
    doc.text(t('madeWith'), M, 288.5);
    doc.textWithLink(CONFIG.skoolShort, W - M - doc.getTextWidth(CONFIG.skoolShort), 288.5, { url: 'https://' + CONFIG.skoolShort });
  }
  const first = (state.name.split(' ')[0] || 'informe').replace(/[^\p{L}\p{N}-]/gu, '');
  doc.save(`${state.lang === 'es' ? 'Nivel-de-ingles' : 'English-level'}-${r.band || 'test'}-${first}.pdf`);
}

/* ---------- arranque ---------- */
if (new URLSearchParams(location.search).get('lang') === 'en') { state.lang = 'en'; ROOT.lang = 'en'; }
renderWelcome(false);
