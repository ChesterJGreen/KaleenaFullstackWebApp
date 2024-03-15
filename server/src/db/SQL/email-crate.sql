-- Active: 1704422585101@@162.241.194.204@3306@kaleenas_WebsiteDB
CREATE TABLE table_name(  
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
    create_time DATETIME COMMENT 'Create Time',
    name VARCHAR(255)
) COMMENT '';

CREATE TABLE `kaleenas_WebsiteDB`.`emails` (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE COMMENT 'Primary Key',
  email VARCHAR(255) NOT NULL UNIQUE COMMENT 'Email',
  name VARCHAR(255) NULL COMMENT 'Name of email owner',
  unsubscribe BOOLEAN NOT NULL DEFAULT false COMMENT 'Email should not receive newsletter' ,
  isValidated BOOLEAN NOT NULL DEFAULT false COMMENT'Email has been verified',
  createdAt DATETIME COMMENT 'Created Date',
  updatedAt DATETIME COMMENT 'Updated Date'
  ) COMMENT 'Email table';

  DROP TABLE `kaleenas_WebsiteDB`.`emails`