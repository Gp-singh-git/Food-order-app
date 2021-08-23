-- Users table seeds here (Example)
INSERT INTO users (first_name, last_name, mobile_number, email, password, address) VALUES ('master', 'master', 6478692189, 'abc@gmail.com', 'password', '23 street1 toronto, canada');
INSERT INTO users (first_name, last_name, mobile_number, email, password, address) VALUES ('John', 'Oliver', 7777777777, 'def@gmail.com', 'password', '46 street2 toronto, canada');
INSERT INTO users (first_name, last_name, mobile_number, email, password, address) VALUES ('Adam', 'Miller', 8888888888, 'ghi@gmail.com', 'password', '70 street3 toronto, canada');


INSERT INTO orders (user_id, total_price, order_date, order_time, ready_by, picked_at) VALUES(2, 50, '2021-08-01', '13:00:00', '13:10:00', '13:12:00');
INSERT INTO orders (user_id, total_price, order_date, order_time, ready_by, picked_at) VALUES(2, 40, '2021-08-02', '11:00:00', '11:15:00', '11:18:00');
INSERT INTO orders (user_id, total_price, order_date, order_time, ready_by, picked_at) VALUES(3, 35, '2021-08-03', '16:00:00', '16:05:00', '16:07:00');

INSERT INTO reviews (user_id, order_id, rating, feedback) VALUES (2,2,4.5,'good');
INSERT INTO reviews (user_id, order_id, rating, feedback) VALUES (2,2,4.5,'good');

INSERT INTO items (name, description, image, price) VALUES ('Black Forest Cake', 'This black forest cake combines rich chocolate cake layers, with cherries and syrup liquor topped off with our fluffy whipped cream frosting.', 'docs/1_Black Forest.jpg', 23.99);
INSERT INTO items (name, description, image, price) VALUES ('HazelNut Cake', 'A crunchy chocolaty hazelnutty base with hazelnut cake and hazelnut mousse? It’s a perfect trio of tastes and textures all in one bite!', 'docs/2_Hazelnut cake.jpg', 25.99);
INSERT INTO items (name, description, image, price) VALUES ('Coffee Moka ButterCream Cake', 'Coffee buttercream and moist cake pair together for this caffeinated classic.','docs/3_Coffee Moka Butter Cream Cake.jpg', 26.99);
INSERT INTO items (name, description, image, price) VALUES ('Delice Aux Fruits Pie', 'Fresh fruit pie with custard and sweet crust.','docs/4_Delice Aux Fruits Pie.jpg', 16.49);
INSERT INTO items (name, description, image, price) VALUES ('Apple and Almond Pie', 'The sweetness of apples and tartiness of almond blend perfectly together in this decadent apple pie.', 'docs/5_Apple and Almond Pie.jpg', 18.49);
INSERT INTO items (name, description, image, price) VALUES ('Quiche Pie', 'Quiche Pie is a creamy egg custard baked in a pie crust shell with eggs, cheese, and cream.', 'docs/6_Quiche Pie.jpg', 19.99);
INSERT INTO items (name, description, image, price) VALUES ('Floral Cupcakes', 'Beautiful floral cupcakes decorated with vanilla buttercream florals on a vanilla cupcake. Colour palettes vary weekly, but they will always be super pretty springy/summery vibes!', 'docs/7_Floral CupCake.jpg', 29.99);
INSERT INTO items (name, description, image, price) VALUES ('Cupcake Assorted', 'Assorted Cupcakes are made using flour, caster sugar and vanilla essence!', 'docs/8_Cupcake Assorted.jpg', 19.99);
INSERT INTO items (name, description, image, price) VALUES ('Vanilla Bean Cupcake', 'A slight variation on our Vanilla Bean cupcake. This one is a vanilla cake with multi-coloured confetti baked right in. It is topped with vanilla butter cream and sprinkled with more sweet confetti.', 'docs/9_Vanilla Bean Cupcake.jpg', 23.99);
INSERT INTO items (name, description, image, price) VALUES ('Vanilla Bean Sprinkle Donuts', 'Classic ring, brioche yeast-risen doughnut, hand-dipped in vanilla bean glaze with rainbow sprinkles.', 'docs/10_Vanilla Bean Sprinkle Donuts.jpg', 15.99);
INSERT INTO items (name, description, image, price) VALUES ('Butter Tart Donuts', 'Classic ring, brioche yeast-risen doughnut hand-dipped in molasses glaze with brown sugar streusel and butter tart bar pieces.', 'docs/11_Butter Tart Donuts.jpg', 17.99);
INSERT INTO items (name, description, image, price) VALUES ('Moose Tracks Donuts', 'Pastry cream with peanut butter cups filling stuffed brioche yeast-risen doughnut, hand-dipped in chocolate glaze, topped with crushed peanut butter cups. ', 'docs/12_Moose Tracks Donuts.jpg', 18.99);
INSERT INTO items (name, description, image, price) VALUES ('French Cookie', 'This is a Parisian  classic. Made with almond flour, this cookie is a gluten free delicacy. Filling flavours include: caramel, raspberry and lemon.', 'docs/13_French Cookies.jpg', 14.99);
INSERT INTO items (name, description, image, price) VALUES ('Frosted Butter Sugar Cokkie', 'They are airy and thick, with a texture somewhere between a fluffy cupcake and a denser sugar cookie.', 'docs/14_Frosted Butter Sugar Cokkie.jpg', 12.99);
INSERT INTO items (name, description, image, price) VALUES ('Whipped ShortBread Cookie', 'These melt in your mouth cookies are not your typical shortbread cookies. An all butter cookie whipped to perfection, is a beautiful addition to your afternoon tea, or any other time of the day for that matter.', 'docs/15_Whipped ShortBread Cookie.jpg', 15.99);

INSERT INTO ordered_items (order_id, item_id, quantity) VALUES (1,1,2);
INSERT INTO ordered_items (order_id, item_id, quantity) VALUES (1,5,4);
INSERT INTO ordered_items (order_id, item_id, quantity) VALUES (2,1,4);
INSERT INTO ordered_items (order_id, item_id, quantity) VALUES (2,3,6);
INSERT INTO ordered_items (order_id, item_id, quantity) VALUES (3,4,4);

