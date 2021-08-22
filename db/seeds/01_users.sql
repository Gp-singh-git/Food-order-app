-- Users table seeds here (Example)
INSERT INTO users (first_name, last_name, mobile_number, email, password, address) VALUES ('master', 'master', 6478692189, 'abc@gmail.com', 'password', 23 street1 toronto, canada);
INSERT INTO users (first_name, last_name, mobile_number, email, password, address) VALUES ('John', 'Oliver', 7777777777, 'def@gmail.com', 'password', 46 street2 toronto, canada);
INSERT INTO users (first_name, last_name, mobile_number, email, password, address) VALUES ('Adam', 'Miller', 8888888888, 'ghi@gmail.com', 'password', 70 street3 toronto, canada);


INSERT INTO orders (user_id, total_price, order_date, order_time, ready_by, picked_at) VALUES(2, 50, '2021-08-01', '13:00', '13.10', '13.12');
INSERT INTO orders (user_id, total_price, order_date, order_time, ready_by, picked_at) VALUES(2, 40, '2021-08-02', '11:00', '11.15', '11.18');
INSERT INTO orders (user_id, total_price, order_date, order_time, ready_by, picked_at) VALUES(3, 35, '2021-08-03', '16:00', '16.05', '16.07');

INSERT INTO reviews (user_id, order_id, rating, feedback) VALUES (2,2,4.5,"good");
INSERT INTO reviews (user_id, order_id, rating, feedback) VALUES (2,2,4.5,"good");

INSERT INTO items (name, description, image, price) VALUES ("Burger", "Description", "http://abcd.com/image.jpg", 10);


INSERT INTO ordered_items (order_id, dish_id, quantity) VALUES (1,1,2);
INSERT INTO ordered_items (order_id, dish_id, quantity) VALUES (1,5,4);
INSERT INTO ordered_items (order_id, dish_id, quantity) VALUES (2,1,4);
INSERT INTO ordered_items (order_id, dish_id, quantity) VALUES (2,3,6);
INSERT INTO ordered_items (order_id, dish_id, quantity) VALUES (3,4,4);

