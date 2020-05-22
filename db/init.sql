DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS locations;
DROP TABLE IF EXISTS saved;

-- table for users --
CREATE TABLE users
(
    user_id SERIAL PRIMARY KEY,
    username VARCHAR,
    email VARCHAR,
    location VARCHAR(2),
    password VARCHAR,
    photo VARCHAR
);

-- table for places -- 
CREATE TABLE locations
(
    location_id SERIAL PRIMARY KEY,
    name VARCHAR,
    address VARCHAR,
    state VARCHAR(2),
    description TEXT,
    rating INT,
    image VARCHAR
);

-- table for saved locations --
CREATE TABLE saved
(
    saved_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(user_id),
    location_id INT REFERENCES locations(location_id)
);

-- dummy data --
INSERT INTO users
    (username, email, location, password, photo)
VALUES
    ('J4ckH4rlow', 'jHarlow@gmail.com', 'WA', 'jackharlow1234', 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'),
    ('MaryPoppins', 'MP@hotmail.com', 'CA', 'p0pp1n', 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg'),
    ('HellenKiller', 'HellenK@gmail.com', 'WI', 'k1ller333', 'https://images.pexels.com/photos/2589409/pexels-photo-2589409.jpeg');

INSERT INTO locations
    (name, address, state, description, rating, image)
VALUES
    ('Belmont Park', '3146 Mission Blvd, San Diego', 'CA', 'Belmont Park is a historic amusement park located on Ocean Front at Surfrider Square in the Mission Bay area of San Diego, California. The park was developed by sugar magnate John D. Spreckels and opened on July 4, 1925 as the Mission Beach Amusement Center.', 5),
    ('Mount Rainier', 'Mount Rainier', 'WA', 'This active 14,411-ft. volcano & scenic hiking destination is the Cascade Ranges highest mountain', 3),
    ('Bde Maka Ska', '3000 East, W Bde Maka Ska Pkwy, Minneapolis', 'MN', 'Swimming, water sports & watercraft rentals, plus separate 3-mile loop paths for walkers & bikers.', 2);

INSERT INTO saved
    (user_id, location_id)
VALUES
    (1, 2),
    (1, 3),
    (3, 3),
    (2, 1),
    (2, 2),
    (2, 3);