
-- insert in loop
INSERT INTO tableName(id) SELECT * FROM generate_series(1, 1000);