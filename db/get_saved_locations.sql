SELECT saved_id, name, address, state, description, rating, image
FROM saved
    JOIN users ON users.user_id = saved.user_id
    JOIN locations ON locations.location_id = saved.location_id
WHERE users.user_id = $1;