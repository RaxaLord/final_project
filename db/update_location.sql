UPDATE locations
SET name = $2, address = $3, state = $4, rating = $5
WHERE location_id = $1;

SELECT *
FROM location
WHERE location_id = $1;