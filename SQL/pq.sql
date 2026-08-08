USE INSTAGRAM;
CREATE TABLE INSTAUSERS(
ID INT PRIMARY KEY,
AGE INT,
NAME VARCHAR(20) NOT NULL,
EMAIL VARCHAR(30) UNIQUE,
FOLLOWERS INT DEFAULT 0,
FOLLOWING INT,
CONSTRAINT AGE_CHECK CHECK (AGE>=13 AND AGE<50) 
);


INSERT INTO INSTAUSERS
(ID,AGE,NAME,EMAIL,FOLLOWERS,FOLLOWING) 
VALUES
(15,23,"LUCY","L@GMAIL.COM", -1,22);


SELECT * FROM INSTAUSERS;

SELECT NAME,AGE,EMAIL,FOLLOWERS FROM INSTAUSERS;

DROP TABLE  INSATUSERS;

CREATE TABLE POST(
ID INT PRIMARY KEY,
CONTENT VARCHAR(50),
USER_ID INT,
FOREIGN KEY(USER_ID) REFERENCES INSTAUSERS(ID));

INSERT INTO POST (ID, comments, USER_ID)
VALUES
(101, 'My first post', 1),
(102, 'Learning MySQL', 2),
(103, 'SQL is interesting', 3),
(104, 'Hello everyone!', 1),
(105, 'Database practice', 4),
(106, 'Foreign keys are useful', 2),
(107, 'Working with tables', 5),
(108, 'Good morning!', 3),
(109, 'Learning joins today', 4),
(110, 'This is my last post', 5);

SELECT * FROM post  ;

SELECT * FROM INSTAUSERS WHERE FOLLOWERS>70;
SELECT NAME,AGE FROM INSTAUSERS WHERE AGE<30;
SELECT NAME,AGE,FOLLOWERS FROM INSTAUSERS WHERE FOLLOWERS>70;

alter table instapost 
add column age int;

alter table post
drop column age;

alter table instapost
rename to post;

alter table post 
change column comment comments varchar(50);

alter table post 
modify comments varchar(100);

truncate table post;