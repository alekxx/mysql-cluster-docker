SELECT * FROM free.people ppl
JOIN free.pets p ON ppl.id=p.person_id;

SELECT * FROM free.people ppl
LEFT JOIN free.pets p ON ppl.id=p.person_id;