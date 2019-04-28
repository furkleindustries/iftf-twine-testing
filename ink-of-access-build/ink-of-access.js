var storyContent = ﻿{"inkVersion":18,"root":[[{"->":"start"},["done",{"#f":7,"#n":"g-0"}],null],"done",{"start":[["^Ink of Access","\n","ev","str","^Play","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Acknowledgements","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":[{"->":"hallway"},"\n",{"#f":7}],"c-1":[{"->":"acknowledgements"},"\n",{"#f":7}]}],{"#f":3}],"acknowledgements":[["^By furkle.","\n","^For the IFTF Accessibility Testathon.","\n","^This and other related documents are located at github.com/furkleindustries/iftf-a11y-games.","\n","ev","str","^Back","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"start"},"\n",{"#f":7}]}],{"#f":3}],"hallway":[["^You stand in the hallway of the castle. Ahead of you is the great hall.","\n","ev",{"VAR?":"have_coin"},"!","/ev",[{"->":".^.b","c":true},{"b":["\n","^There is the smallest glint among the dirt and leaves.","\n","ev","str","^Look in the dirt and leaves","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.7"},{"c-0":["\n","ev",1,"/ev",{"temp=":"have_coin","re":true},"^You find a weathered coin.","\n",{"->":"hallway"},{"#f":7}]}]}],"nop","\n","ev","str","^Go inside","/str","/ev",{"*":".^.c-0","flg":4},{"c-0":[{"->":"great_hall"},"\n",{"#f":7}]}],{"#f":3}],"great_hall":[["^The great hall is filled with ancient, stained bricks, and thousands of people eating. The sounds of chewing and conversing, and the smell of countless thousands of pounds of food, remind you of an enormous family dinner.","\n","ev",{"VAR?":"have_peach_pit"},"!","/ev",[{"->":".^.b","c":true},{"b":["^     There's a single empty place as far as you can see, with a full meal at its place. Maybe the last free seat in the entire hall.",{"->":".^.^.^.7"},null]}],"nop","\n","ev","str","^Sit down","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Go to the hallway","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Go to the ballroom","/str","/ev",{"*":".^.c-2","flg":4},"ev","str","^Go to the kitchen","/str","/ev",{"*":".^.c-3","flg":4},{"c-0":[{"->":"great_hall_sitting"},"\n",{"#f":7}],"c-1":[{"->":"hallway"},"\n",{"#f":7}],"c-2":[{"->":"ballroom"},"\n",{"#f":7}],"c-3":[{"->":"kitchen"},"\n",{"#f":7}]}],{"#f":3}],"great_hall_sitting":[["^You sit down at the table, laden with delicious food. What to eat?","\n","ev","str","^A juicy turkey,","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","^A pile of gnawed bones,","\n",{"->":".^.^.g-0"},{"#f":7}],"g-0":[{"*":".^.c-1","flg":24},"ev","str","^a plate of potatoes,","/str","/ev",{"*":".^.c-2","flg":20},{"c-1":["\n",{"->":".^.^.^.g-1"},{"#f":7}],"c-2":["\n","^an empty plate,","\n",{"->":".^.^.^.g-1"},{"#f":7}],"#f":7}],"g-1":[["ev",{"^->":"great_hall_sitting.0.g-1.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^a luscious, fleshy peach for dessert,",{"->":"$r","var":true},null]}],{"c-3":["ev",{"^->":"great_hall_sitting.0.g-1.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",["ev","str","^and a gnarled peach pit, which seems like it would make a nice souvenir.","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n","ev",1,"/ev",{"temp=":"have_peach_pit","re":true},"^and a gnarled peach pit, which you slip into your pocket.","\n",{"->":"great_hall"},{"#f":7}]}],{"#f":7}],"#f":7}]}],{"#f":3}],"ballroom":[["ev",{"VAR?":"waiting"},"!","/ev",[{"->":".^.b","c":true},{"b":["^ There are hundreds of couples dancing the night away in fanciful clothing.",{"->":".^.^.^.5"},null]}],"nop","\n","^The current song is:","\n",["ev","visit",2,"%","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^Medieval Mambo",{"->":".^.^.17"},null],"s1":["pop","^Castle Calypso",{"->":".^.^.17"},null],"#f":5}],"\n","ev",0,"/ev",{"temp=":"waiting","re":true},"ev",{"VAR?":"have_lute"},"!","/ev",[{"->":".^.b","c":true},{"b":["^ There's a dope-looking miniature lute in the corner. No one's currently playing it, which obviously means no one will ever miss it.",{"->":".^.^.^.20"},null]}],"nop","\n","ev",{"VAR?":"waiting"},"!","/ev",[{"->":".^.b","c":true},{"b":["^ You don't see anyone without a partner, so it's probably best to go back to the great hall.",{"->":".^.^.^.27"},null]}],"nop","\n","ev","str","^Wait and listen","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Take the lute","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Go back to the great hall","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","ev",1,"/ev",{"temp=":"waiting","re":true},{"->":".^.^.^"},{"#f":7}],"c-1":["\n","ev",1,"/ev",{"temp=":"have_lute","re":true},"^You put the lute in your pocket.","\n",{"->":".^.^.^"},{"#f":7}],"c-2":[{"->":"great_hall"},"\n",{"#f":7}]}],{"#f":3}],"kitchen":[["^Lots of potatoes boiling on the stove! Smells delicious.","\n","ev",{"VAR?":"have_salmon"},"!","/ev",[{"->":".^.b","c":true},{"b":["^ There is also an enormous red salmon sitting on a counter, unwatched by any of the busy cooks.",{"->":".^.^.^.7"},null]}],"nop","\n","^There is a door in the corner leading down to the catacombs, but you should explore all the other rooms before going down there. Who knows, maybe you might need something, or several somethings?","\n","ev","str","^Take salmon","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Go back to the great hall","/str","/ev",{"*":".^.c-1","flg":4},"ev","str","^Descend into the catacombs","/str","/ev",{"*":".^.c-2","flg":4},{"c-0":["\n","ev",1,"/ev",{"temp=":"have_salmon","re":true},"^You grab the salmon. Hopefully no one will notice three feet of fish sticking out of your back pocket.","\n",{"->":".^.^.^"},{"#f":7}],"c-1":[{"->":"great_hall"},"\n",{"#f":7}],"c-2":[{"->":"catacombs"},"\n",{"#f":7}]}],{"#f":3}],"catacombs":[["^You descend into the catacombs. You see a single pathway ahead of you. The pathway is barely lit, presumably by a torch somewhere beyond the bend.","\n","ev","str","^Go forward into the flickering quarter-light","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Go back to the kitchen","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":[{"->":"catacombs_2"},"\n",{"#f":7}],"c-1":[{"->":"kitchen"},"\n",{"#f":7}]}],{"#f":3}],"catacombs_2":[["^You walk for what feels like five or ten minutes, dipping in and out of oil-fragrant oases of torchlight. Finally you come to an exit, in which there is a ring of torches and a lamp in their exact center.","\n","ev","str","^Rub the lamp","/str","/ev",{"*":".^.c-0","flg":4},"ev","str","^Run all the way back upstairs and eat mutton or something","/str","/ev",{"*":".^.c-1","flg":4},{"c-0":[{"->":"rub_lamp"},"\n",{"#f":7}],"c-1":[{"->":"kitchen"},"\n",{"#f":7}]}],{"#f":3}],"rub_lamp":[["^You reach down and pick up the lamp, rubbing it as you would a feisty kitten. Almost immediately, a thick cloud of mist erupts, and you hear a deafening voice inside your head:","\n","^\"Did you bring the items to enact the ritual, mortal?\"","\n","ev",{"VAR?":"have_coin"},{"VAR?":"have_peach_pit"},"&&",{"VAR?":"have_lute"},"&&",{"VAR?":"have_salmon"},"&&","/ev",{"temp=":"have_all_items"},["ev",{"^->":"rub_lamp.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Uhh. What ritual?",{"->":"$r","var":true},null]}],"ev","str","^Yeah, I got the stuff","/str",{"VAR?":"have_all_items"},"/ev",{"*":".^.c-1","flg":21},"ev","str","^No, I don't have all that garbage yet","/str",{"VAR?":"have_all_items"},"!","/ev",{"*":".^.c-2","flg":21},{"c-0":["ev",{"^->":"rub_lamp.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"\n","^\"The ritual of accessibility, you fool! To cast a spell across the whole of interactive fiction and make it accessible  regardless of ability! I need four items for the ritual: a coin, the leavings of a fruit, a stringed instrument, and something that has breathed water.\"","\n",{"->":".^.^.^"},{"#f":7}],"c-1":[{"->":"got_stuff"},"\n",{"#f":7}],"c-2":[{"->":"kitchen"},"\n",{"#f":7}]}],{"#f":3}],"got_stuff":["^You empty your pockets and present the contents to the cloud. After a second, you hear the djinn speak:","\n","^\"Good! Now watch my science!\"","\n","^The cloud expands until it fills the entire room, reaching into your clothes, into your lungs, through grout and brick. You can feel it coursing everywhere, through all of creation. And, though you don't know exactly how, you can feel the world got a little more accessible today.","\n","done",{"#f":3}],"global decl":["ev",0,{"VAR=":"have_coin"},0,{"VAR=":"have_peach_pit"},0,{"VAR=":"have_lute"},0,{"VAR=":"waiting"},0,{"VAR=":"have_salmon"},"/ev","end",null],"#f":3}],"listDefs":{}};