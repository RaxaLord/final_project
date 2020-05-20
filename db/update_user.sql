UPDATE users
SET username = $2, location = $3, photo = $4
WHERE user_id = $1;

SELECT *
FROM users
WHERE user_id = $1;