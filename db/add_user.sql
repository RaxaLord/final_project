INSERT INTO users
    (username, email, location, password, photo)
VALUES
    ($1, $2, $3, $4, $5);

SELECT *
FROM users
WHERE email = $2;