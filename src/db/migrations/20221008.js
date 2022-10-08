import { query } from "../config.js"

const createUsers = 'create table if not exists users(id serial primary key, email varchar(255) unique not null, first_name varchar(255) not null, last_name varchar(255) not null, location varchar(255) not null, fave_food varchar(255) not null, second_fave_food varchar(255) not null, third_fave_food varchar(255) not null, created_at timestamp not null, updated_at timestamp not null);'

const createConnections = 'create table if not exists connections (id serial primary key, user_id int not null, liked_id int not null, created_at timestamp not null, updated_at timestamp not null, foreign key (user_id) references users (id));'

const sqlStrings = [createUsers, createConnections]

for (const sqlString of sqlStrings) {
    await query(sqlString)
}