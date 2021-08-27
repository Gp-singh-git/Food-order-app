-- Users table seeds here (Example)
INSERT INTO users (first_name, last_name, mobile_number, email, password, address) VALUES ('Admin', 'Admin', 7777777777, 'admin@gmail.com', '$2b$10$TcbAdZTVib3./IvkgJ96euH7zj/rlQ/Qo78OlTo3hXJuiWG8f9GmG', '23 street1 toronto, canada');
INSERT INTO users (first_name, last_name, mobile_number, email, password, address) VALUES ('John', 'Oliver', 8888888888, 'user1@gmail.com', '$2b$10$TcbAdZTVib3./IvkgJ96euH7zj/rlQ/Qo78OlTo3hXJuiWG8f9GmG', '46 street2 toronto, canada');
INSERT INTO users (first_name, last_name, mobile_number, email, password, address) VALUES ('Adam', 'Miller', 9999999999, 'user2@gmail.com', '$2b$10$TcbAdZTVib3./IvkgJ96euH7zj/rlQ/Qo78OlTo3hXJuiWG8f9GmG', '70 street3 toronto, canada');


INSERT INTO orders (user_id, total_price, order_date, order_time, ready_by, picked_at) VALUES(2, 50.45, '2021-08-21', '13:15', '13:30', '13:32');
INSERT INTO orders (user_id, total_price, order_date, order_time, ready_by, picked_at) VALUES(2, 40.12, '2021-08-22', '11:40', '11:45', '11:48');
INSERT INTO orders (user_id, total_price, order_date, order_time, ready_by, picked_at) VALUES(3, 35.15, '2021-08-23', '16:20', '16:25', '16:27');
INSERT INTO orders (user_id, total_price, order_date, order_time) VALUES(2, 40.02, '2021-08-26', '09:08');


INSERT INTO reviews (user_id, order_id, rating, feedback) VALUES (2,2,4.5,'Cake was really nice & impressed with quick service. Thumbs up!!');
INSERT INTO reviews (user_id, order_id, rating, feedback) VALUES (3,3,2.0,'Your staff is rude.');


INSERT INTO items (name, description, image, price) VALUES ('Black Forest Cake', 'This black forest cake combines rich chocolate cake layers, with cherries and syrup liquor topped off with our fluffy whipped cream frosting.', '/images/1_Black_Forest.jpg', 23.99);
INSERT INTO items (name, description, image, price) VALUES ('HazelNut Cake', 'A crunchy chocolaty hazelnutty base with hazelnut cake and hazelnut mousse? It’s a perfect trio of tastes and textures all in one bite!', '/images/2_Hazelnut cake.jpg', 25.99);
INSERT INTO items (name, description, image, price) VALUES ('Coffee Moka ButterCream Cake', 'Coffee buttercream and moist cake pair together for this caffeinated classic.','/images/3_Coffee Moka Butter Cream Cake.jpg', 26.99);
INSERT INTO items (name, description, image, price) VALUES ('Delice Aux Fruits Pie', 'Fresh fruit pie with custard and sweet crust.','/images/4_Delice Aux Fruits Pie.jpg', 16.49);
INSERT INTO items (name, description, image, price) VALUES ('Apple and Almond Pie', 'The sweetness of apples and tartiness of almond blend perfectly together in this decadent apple pie.', '/images/5_Apple and Almond Pie.jpg', 18.49);
INSERT INTO items (name, description, image, price) VALUES ('Quiche Pie', 'Quiche Pie is a creamy egg custard baked in a pie crust shell with eggs, cheese, and cream.', '/images/6_Quiche Pie.jpg', 19.99);
INSERT INTO items (name, description, image, price) VALUES ('Floral Cupcakes', 'Beautiful floral cupcakes decorated with vanilla buttercream florals on a vanilla cupcake. Colour palettes vary weekly, but they will always be super pretty springy/summery vibes!', '/images/7_Floral CupCake.jpg', 29.99);
INSERT INTO items (name, description, image, price) VALUES ('Cupcake Assorted', 'Assorted Cupcakes are made using flour, caster sugar and vanilla essence!', '/images/8_Cupcake Assorted.jpg', 19.99);
INSERT INTO items (name, description, image, price) VALUES ('Vanilla Bean Cupcake', 'A slight variation on our Vanilla Bean cupcake. This one is a vanilla cake with multi-coloured confetti baked right in. It is topped with vanilla butter cream and sprinkled with more sweet confetti.', '/images/9_Vanilla Bean Cupcake.jpg', 23.99);
INSERT INTO items (name, description, image, price) VALUES ('Vanilla Bean Sprinkle Donuts', 'Classic ring, brioche yeast-risen doughnut, hand-dipped in vanilla bean glaze with rainbow sprinkles.', '/images/10_Vanilla Bean Sprinkle Donuts.jpg', 15.99);
INSERT INTO items (name, description, image, price) VALUES ('Butter Tart Donuts', 'Classic ring, brioche yeast-risen doughnut hand-dipped in molasses glaze with brown sugar streusel and butter tart bar pieces.', '/images/11_Butter_tarts.jpg', 17.99);
INSERT INTO items (name, description, image, price) VALUES ('Moose Tracks Donuts', 'Pastry cream with peanut butter cups filling stuffed brioche yeast-risen doughnut, hand-dipped in chocolate glaze, topped with crushed peanut butter cups. ', '/images/12_Moose Tracks Donuts.jpg', 18.99);
INSERT INTO items (name, description, image, price) VALUES ('French Cookie', 'This is a Parisian  classic. Made with almond flour, this cookie is a gluten free delicacy. Filling flavours include: caramel, raspberry and lemon.', '/images/13_French Cookies.jpg', 14.99);
INSERT INTO items (name, description, image, price) VALUES ('Frosted Butter Sugar Cokkie', 'They are airy and thick, with a texture somewhere between a fluffy cupcake and a denser sugar cookie.', '/images/14_Frosted Butter Sugar Cokkie.jpg', 12.99);
INSERT INTO items (name, description, image, price) VALUES ('Whipped ShortBread Cookie', 'These melt in your mouth cookies are not your typical shortbread cookies. An all butter cookie whipped to perfection, is a beautiful addition to your afternoon tea, or any other time of the day for that matter.', '/images/15_Whipped ShortBread Cookie.jpg', 15.99);

INSERT INTO ordered_items (order_id, item_id, quantity) VALUES (1,1,2);
INSERT INTO ordered_items (order_id, item_id, quantity) VALUES (1,5,4);
INSERT INTO ordered_items (order_id, item_id, quantity) VALUES (2,1,4);
INSERT INTO ordered_items (order_id, item_id, quantity) VALUES (2,3,6);
INSERT INTO ordered_items (order_id, item_id, quantity) VALUES (3,4,4);
INSERT INTO ordered_items (order_id, item_id, quantity) VALUES (4,7,2);
INSERT INTO ordered_items (order_id, item_id, quantity) VALUES (4,9,1);

