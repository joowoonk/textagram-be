// const secrets  = require("../../auth/secrets");
exports.seed = function (knex) {
  // 000-cleanup.js already cleaned out all tables

  const post = [
    {
      title: "The Cost of Keto",
      context: `I switched to a Keto diet 3 months ago. I didn’t struggle much at all. I enjoyed all my meals, lost my cravings, and became easily satiated.
      The foods I was worried about losing (pizza, ice cream, beer) became non-issues (thanks Keto ice cream! Thanks sausage-crust pizza! Thanks low-carb beer!).
      Since I started I lost 30 lbs going from 218 to 188. I barely exercised. But the biggest hidden cost of going on keto is in the wardrobe. Because none of my pants fit anymore.
      My belt is too big to even keep them up! Keto problems.  EDIT: I just realized that tone is hard to convey in text. I was trying to be cheeky about the cost of losing weight and feeling awesome. By no means am I complaining. I’m happy to spend money on new, smaller-sized clothes. It’s actually a pleasure. And completely worth it.
      This Post was from r/keto
      [https://www.reddit.com/r/keto/comments/ijjw3z/the_cost_of_keto/]`,
      user_id: 3,
      hashtags: ["#keto", "#reddit", "#testimony"],
    },
    {
      title: "You don't owe anyone a lie",
      context: `I’ve been thinking about this lately. The reason behind why we / I lie. And most often it’s simply to appease somebody else. Whether that’s to keep them from becoming upset or trying to remain “polite”. But I think it’s important to remember that you actually don’t owe anyone a lie, nor is it actually your responsibility to manage another persons expectations or emotional regulation by being untrue to yourself and lying. Our mental health is always our responsibility. If someone asks you a question, doing mental gymnastics to answer a persons question so that their subjective experience of your answer is pleasant isn’t being supportive of yourself. I’m going to endeavour to be honest, not for others, but for myself. ❤️ hope this encourages someone to put themselves first.the people’s victory`,
      user_id: 4,
      hashtags: ["#reddit", "inspiration"],
    },
    {
      title: "Just want to know where I am",
      context: `Hey everyone. Don't know from where to start. I want to start my career. After 3 years of overcoming depression and still fighting out I want to start a regular normal life. I have still not get any degree(I'm college drop out) and I'm 25 now want to make step in this world. I don't know where to go. Only thing is left in me some love towards maths and programming. The anxiety of being failure multiple times and being failure in future is getting over me. I don't know how to release this anxiety.
    [https://www.reddit.com/r/inspiration/comments/il73hp/just_want_to_know_where_i_am/]`,
      user_id: 3,
      hashtags: ["#reddit", "#inspiration"],
    },
    {
      title:
        "Inspirational quote from BT (Brian Transeau), who is a legend in electronic music.",
      context: `"One of the things nearing extinction; is the art of longing. As in, wanting of something you cannot immediately have. If anything positive is to come from the situation the world collectively finds itself in, it is my great hope – speed, instant gratification, and over-stimulation are swapped out for longing, imagination, and relational connection. For a child or teenager to sit thoughtfully and ponder what is to come, to hope for or envision something amazing, to dream of a place or a future – is becoming obsolete. Longing has been replaced with instant gratification. My hope is that this record reacquaints my audience with the lost art of longing. That they will take pause, get quiet, daydream, and connect to their own place of longing. Because that, I believe, is where the magic is."- BT`,
      user_id: 3,
      hashtags: ["#reddit", "#inspiration", "#music"],
    },
    {
      title: "God’s lonely artist",
      context: `God told me, “thou shalt see the invisible and wish to create it.” I said, “lord what if I am too unskilled to create what I have envisioned in my mind.” God rested his hand on my shoulder and I walked with him in the wilderness. He spoke once again, “I had envisioned all these things, that what you have seen, what is unseen, what has come before, what is now, what will be. I had envisioned all these things and I could have instead spent my time elsewhere. Though the time would still come and go and I decided to create. It has taken me the almighty a week to create the world it shall take you years to achieve your vision.” And I fell upon my knees and weeped, “oh lord for what I have seen in my minds eye is so beautiful but to not see it with mine own eyes is a most awful tragedy.” He told me, “walk easy now, love mercy now, you are not obligated to complete the task but you are not allowed to abandon it either. You have been created like everyone else to exalt my glory, so you go and you be someone glorious.”

      Since then I made sure to be able to create what I have envisioned in my minds eye. This has made me alone and recloues. I see all those who do not care for what I have seen nor wish to see it. To be a lonely programmer, artist, and writer. To know that ones works shall be enjoyed by himself only. To see others on the street untouched by the curse of sound and vision. Blue, blue, electric blue that’s the color of my room. There no escaping it, I’m God’s lonely man.`,
      user_id: 4,
      hashtags: ["#reddit", "#inspiration"],
    },
    {
      title: "Need some inspiration for a text",
      context: `Well like the title is saying, i need some help with a text. My girlfriend and i been through a tough time and i want to suprise her. Every now and then we leave for the weekend to visit some nice places and take a little souvenir from every place we've been. everytime it's a little search but realy worth the effort. We buy magnets that can be placed on the fridge.

      Now i want to laser engrave a steel/rvs board 60x50 cm with a nice sentence with our names in it and an inspirational text. Maybe you guys can come up with something?
      
      My head is so full at this moment that i can't think of anything. I'm hoping u guys can point me in the right direction.
      
      Kind regards

      This post is from [https://www.reddit.com/r/inspiration/comments/ic6czz/need_some_inspiration_for_a_text/]
      `,
      user_id: 3,
      hashtags: ["#reddit", "#inspiration"],
    },
    {
      title: "revamped inspirational quotes",
      context: `Hi guys,

      I posted a few weeks ago about my graphical quotes site. I've had some good feedback and revamped it!
      
      I made them all easier to read now! Thanks for the suggestions. I hope it does help some of you guys.
      
      Life is a rough hard. Especially when most days seem pretty mundane, discouraging or distressing. I have dysthymia (mild chronic depression) so its been quite irritating and melancholic.
      
      It's been a long battle and I'm still going at it. Definitely an internal battle, am I right? Between what we want to do and what we feel like doing. But I hope the website can push you slightly (baby steps) towards doing what's best for you.
      
      
      
      Keep up the good fight. And act like what you do makes a difference, because it does.
      
      https://nestofthoughts.com/
      This post is from [https://amp.reddit.com/r/inspiration/comments/ic8onf/revamped_inspirational_quotes/]
      `,
      user_id: 3,
      hashtags: ["#reddit", "#inspiration"],
    },
    {
      title: "Attitude of Gratitude",
      context: `What are you grateful for in this moment? Sometimes we need to be reminded to look for the good. There is always something to be grateful for and sometimes we are so fortunate we don't remember to appreciate the small things.⁠
      
      This post is from [https://www.reddit.com/r/inspiration/comments/ifuu0r/attitude_of_gratitude/]`,
      user_id: 3,
      hashtags: ["#reddit", "#inspiration"],
    },
    {
      title:
        "Gender Equality And Female Entrepreneurs: Here Are Ten To Keep An Eye On",
      context: `These ten women entrepreneurs believe that technological innovation will lead to gender equality, social justice and the protection of the environment. Read their profiles and get inspired!

    https://www.adeccogroup.com/futuhreinsight/gender-equality-and-female-entrepreneurs-here-are-ten-to-keep-an-eye-on/ 
    This post is from 
    [https://www.reddit.com/r/inspiration/comments/igu03n/gender_equality_and_female_entrepreneurs_here_are/]`,
      user_id: 3,
      hashtags: ["#reddit", "#inspiration"],
    },
    {
      title: "A short, happy story",
      context: `Hey everyone, it’s my first time posting here so I apologize for any rules broken.

    I just wanted to share a moment that really made all the effort worth it. But first, some context!
    
    Coronavirus has hit everyone really hard, and my industry has felt it. I work in a restaurant serving tables, so naturally I lost my job during that time, and have been struggling to recover.
    
    Thankfully now, I am back to work. Recently however my roommate went to a party with someone, who shortly thereafter, tested positive for the virus. We both share the same employer, and ours is thankfully caring about it’s staff. Naturally, they told us to go home until we could take a test and report a negative result. This ate almost 3 weeks of my earning time. During this time I couldn’t pay a single bill that we had. Luckily my roomie was able to take care of both of us, and too this day has not made me feel inferior for it. Of course, after I started earning, I would have to pay up on everything I owed.
    
    During that time I also met an incredible young lady, and she is really more than I deserve. I’m not great by any standard, but she sees who I am and not what I am surrounded with. I’ve been lucky enough to see her a couple times, but I planned to visit her at her school in just a few days. Due to my money troubles, I feared that I would have to postpone, which would honestly kill me. It’s not in me to disappoint her, and we’ve been talking about it for weeks now.
    
    But today, after a month of double shifts, swings, and sacrificing off days, I counted my money. And not only did I meet my goal, but I exceeded it with enough to make good on my promise. I’m going to get to see her, and make good on my debts. Have you ever felt your whole body relax at the same time? I got to tonight. I can’t describe the feeling of being able to stand on my own again, it’s truly amazing.
    
    I suppose the point I’m trying to make is, just keep fighting. Through every moment, every injustice, every bad day. Just keep fighting, because if you grit your teeth, and fight hard enough, nothing is out of your reach.
    
    Thanks for reading, I hope your day has been amazing.
    
    This post is from [https://www.reddit.com/r/inspiration/comments/ij7j4a/a_short_happy_story/]
    `,
      user_id: 3,
      hashtags: ["#reddit", "#inspiration"],
    },
    {
      title: "September 2020 Readings for your Sign 💎💜",
      context: `Taurus- https://youtu.be/h9bBsQ8CnrY

    Sagittarius- https://youtu.be/MSIPcecjUIc
    
    Leo- https://youtu.be/7bcOQT6NXHg
    
    Pisces- https://youtu.be/YRs0dTWl21M
    
    Libra- https://youtu.be/pMYdfIf9qOY
    
    Cancer- https://youtu.be/Itu1tvSts9w
    
    Virgo- https://youtu.be/LC0rhYoCrCo
    
    Gemini- https://youtu.be/8dRJd0s0B6s
    
    Aquarius- https://youtu.be/wWcPUMVeDoY
    
    Scorpio- https://youtu.be/pLfAwFiUo4w
    
    Capricorn- https://youtu.be/ZntKFYPO-S4
    
    Aries- https://youtu.be/FzTXGRYacMk
    
    All Videos (Channel)- https://www.youtube.com/channel/UCvNSVJqhiEEXniGXNwymYew/
    
    Subscribe Youtube: Authentic Self Tarot | Follow IG: authenticselftarot
    
    Beautiful Souls, wishing you all light, love, truth, happiness, nourishment and abundance. Thank you for joining in for my free insight and guidance to help you all follow your authentic soul path towards these goals. I immensely appreciate your love and support through Youtube Likes, Subscribes, Comments and Shares and will do my best to tune into your energies so that a portion or all of the divine messages may resonate with your being. The main goal of mine is to relate just the message you need to hear for a timely awakening, realization, healing or enlightenment to help you solidify your actions, thoughts, and feelings regarding your circumstances. There is nothing more empowering than clarifying choices and decisions in your life, and having the confidence to follow through with faith, trust and belief in your Authentic Self. Thank you for being here! Subscribe and stay a while :)
    
    this post is from [https://www.reddit.com/r/inspiration/comments/ijvn34/september_2020_readings_for_your_sign/]`,
      user_id: 3,
      hashtags: ["#reddit", "#inspiration"],
    },
    {
      title: "6 Inspirational movies that will make you want to study",
      context: `Spending months in quarantine and not studying has put all of us into a frenzy, now that our schools are going to open and we have to get back on track. Since we all love binging our favorite shows and watching movies 24/7, why don’t we benefit ourselves by watching motivational movies that will inspire us?

    Motivational and inspirational movies are an effective and easy medium to motivate us and get back on track. These types of movies teach students the value of hard work, proper education, and also raise affection towards learning, which is very essential for students.
    
    Here are my top 6 motivational movies that not only have put me back on track but have made me WANT to study.
    
    [6 motivational movies that will make you want to study
    
    ](https://lifexposure.com/?p=746)
    [https://www.reddit.com/r/inspiration/comments/il3vnz/6_inspirational_movies_that_will_make_you_want_to/]`,
      user_id: 3,
      hashtags: ["#reddit", "#inspiration"],
    },
    {
      title: "Gratitude (an excerpt from my writing)",
      context: `Gratitude

      Fight is what gets you up each morning. It is what pushes you and keeps you grounded when you take your next step. The pain and struggle that you endure on a daily basis makes you appreciate the good moments of life. I’ve learned that the reward you receive is when you start reaching that never-ending goal of greatness. Being grateful for these moments can propel you to that next step. I understand that the road is not always easy but once you come to that realization that you can take those next steps, then anything is possible. Keep faith and expect the best.
      
      "As we express our gratitude, we must never forget that the highest appreciation is not to utter words but to live by them." John F. Kennedy. Embrace this. There are too many people in this world who take things for granted, including themselves. In the bigger picture, you will never get satisfaction from those great moments if you don’t appreciate even the smallest moments in your life. If you receive a compliment, embrace those words like John F Kennedy stated. Why would someone give you a compliment that they thought out, and not wanted you to feel good about it? They mean it and want you to receive their reward.
      This Post was from r/inspiration
      [https://www.reddit.com/r/inspiration/comments/inbv68/gratitude_an_excerpt_from_my_writing/]`,
      user_id: 2,
      hashtags: ["#reddit", "#inspiration"],
    },
    {
      title:
        "Great inspirational book is currently free for labour day weekend.",
      context: `From the Author

      We all have a purpose and a passion for something whether we know it or not. It may be the fact that we may not have discovered it yet. What holds us back are limiting beliefs which may come from a sense of emptiness. We are simply trying to figure it out not realizing that the first step is being real with ourselves. Your intuition knows... it's the power of self-worth; but somehow, we are afraid of what we may discover so we rather not dig too deep because of fear. So, are we afraid of ourselves? And the bigger question to ask yourself is, why?
      
      Essentially, you are aligning your little self with your big self. It's not all about the physical, it's about the Spiritual.
      
      Infinity makes you think outside of yourself. Because if you're not learning, then you're not growing. It is through that energy that takes you on your journey to becoming. It's intention... the energy of what you give out that comes back to you. It's a process of learning and understanding your Soul's purpose, which is that part of you that was created to serve. So what do you want the infinity of your being to look like and return back to you?
      
      Writing this book gave me great revelation about myself. It is through my own experiences that I share the lessons and the blessings which have given me strength and the tenacity to push past my pain and comfort zone.
      
      A Journey To Becoming is discovering what is already inside of you. As you journey through the possibilities of infinity, the cycle of life, your life will come into alignment with the most intimate part of who God created you to be. Stay encouraged and be blessed as you experience Infinity - A Journey To Becoming.
    
      This post was from r/inspiration
      [https://www.reddit.com/r/inspiration/comments/imvhdb/great_inspirational_book_is_currently_free_for/]`,
      user_id: 3,
      hashtags: ["#reddit", "#inspiration"],
    },
    {
      title: "How To Understand Things",
      context: `The smartest person I’ve ever known had a habit that, as a teenager, I found striking. After he’d prove a theorem, or solve a problem, he’d go back and continue thinking about the problem and try to figure out different proofs of the same thing. Sometimes he’d spend hours on a problem he’d already solved. 

      I had the opposite tendency: as soon as I’d reached the end of the proof, I’d stop since I’d “gotten the answer”.
      
      Afterwards, he’d come out with three or four proofs of the same thing, plus some explanation of why each proof is connected somehow. In this way, he got a much deeper understanding of things than I did.
      
      I concluded that what we call 'intelligence' is as much about virtues such as honesty, integrity, and bravery, as it is about 'raw intellect’.
      
      Intelligent people simply aren’t willing to accept answers that they don’t understand — no matter how many other people try to convince them of it, or how many other people believe it, if they aren’t able to convince them selves of it, they won’t accept it...
      This Essay was written by Nabeel Qureshi, full essay found here ->
      [https://nabeelqu.co/understanding]`,
      user_id: 4,
      hashtags: ["#essay", "#inspiration", "#education"],
    },
  ];
  for (let i = 0; i < post.length; i++) {
    post[i].context = post[i].context.split("\n");
  }
  return knex("posts").insert(post);
};
