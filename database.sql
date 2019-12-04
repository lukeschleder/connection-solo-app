
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
  "id" serial primary key,
  "username" varchar(80) unique not null,
  "password" varchar (1000) not null,
  "self_connection" varchar,
  "others_connection_name" varchar,
  "others_connection_phonenumber" varchar,
  "timestamp_sobriety_start" timestamp,
  "timestamp_current_time" timestamp  not null default CURRENT_TIMESTAMP,
  "money_savedperday" int,
  "time_savedperday" int
 );
 
 CREATE TABLE "meditations" (
 	"id" serial primary key,
 	"author" varchar,
 	"title" varchar,
 	"body" varchar
 );
  INSERT INTO "meditations" ("author", "title", "body")
 VALUES ('SMART Recovery', 'The Boss Made Me Angry Today!', 'We’re all brought up to believe that external events cause our emotional reactions. But that is not the way it actually happens. The ancient Greek philosopher, Epictetus, is quoted as saying that:

“It’s not events that disturb us, but our judgment of them.”

In other words, our emotions are created from our interpretation of things that happen, not the events themselves. This is not easy to see at first, but it is the important basis from which people can learn to take back control of their habits and gain in emotional maturity.

 

What the boss did today was to shout at you, that’s all. You resented it and your reaction was to feel angry. But it’s possible that under other circumstances you might have seen it as a threat and had an emotional reaction of fear. Or, that you could have viewed the shouting as a personal put-down and became hurt about it. It’s even possible that you could have sensed that the boss was making a fool of himself and you could have felt amused by the event.

But in all these cases, the boss did only one thing, he shouted at you. You then made a judgment about what it meant to you and generated a “feeling” that was appropriate for that interpretation. Once again, this is not easy to see at first, because we are brought up to think that things outside us cause our feelings. The intention here is to point out that it actually and always works the other way around. And since it is our view of things that really controls our emotions, it follows that our own thinking habits have an important bearing on our emotions.

Let’s examine that idea a little. All of us have some more or less irrational beliefs in our private self-talk. They may be prejudices. They may be unreasonable expectations. They may be absolutist and demanding rules about our own or other people’s conduct, all of which influence the judgments we make about events. If this is the case we can work on rethinking our beliefs to improve our poise and self-control. Strong negative emotions such as hurt and anger and fear are a signal to check into our thinking to see if it contributes to the discomfort. It is not difficult if you look for over-reactions that may stem from unjustified or irrational beliefs. These emotions often lead to what could be avoidable difficulties.

Let’s look again at when the boss shouted at you. You judged it to be unjustified and you resented it and got yourself angry. Apparently you were wise enough not to react hastily in that mood and maybe get fired. (Instead you swore revenge under your breath and kept yourself upset all day.) Of course, a “strongly assertive” reaction might be justified if in fact the boss had accused you falsely of something serious. But quite often that’s not the whole story. Is it possible that the complaint was partially deserved and partly you just didn’t like to admit it? If so, then becoming angry would not be wholly justified. Could the boss have been under a lot of pressure and blowing off steam that he would later regret and apologize for? Could you have an underlying belief that any arousal of emotion such as shouting is really an attack on your worth? Or could it go back even further to a secret underlying belief that everything should always go your way? Or do you think you always have to have his approval to feel OK?

More and more could be said but the bottom line is that quite often it’s neither necessary nor wise to react angrily in such a situation. There are less harmful things to fall back on. If you learn and practice unconditional self-acceptance (USA) you would not feel your worth threatened and get huffy in such a situation. By keeping your cool, the boss would be seen as the one who is less in control and you would retain more dignity. By cutting him some slack for the pressure he may be under, the door is left open for an apology from him if that proves to happen later. If you react in these less self-arousing ways, you maintain the poise to deal with the situation in ways that are more to your advantage. Trying to see both sides can make you less open to attack, may lead to an objective understanding about what caused the shouting and build better relations for the future.

The lesson here is not who was right or wrong in the incident. It is in grasping the fact that you are in control of your own emotional reactions. And that strong negative emotions are often overreactions from beliefs like, “The boss is all wrong and I am one hundred percent right.” or “Nobody is ever supposed to raise their voice to me.” or “He started this I am justified in pushing it to the limit even if it costs me my job and a good reference.');