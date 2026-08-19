CREATE TABLE `posts` (
	`id` text PRIMARY KEY,
	`title` text NOT NULL UNIQUE,
	`slug` text NOT NULL UNIQUE,
	`excerpt` text NOT NULL UNIQUE,
	`content` text NOT NULL UNIQUE,
	`coverImageUrl` text NOT NULL UNIQUE,
	`published` integer NOT NULL UNIQUE,
	`createdAt_t` text NOT NULL UNIQUE,
	`updatedAt_t` text NOT NULL UNIQUE,
	`author` text NOT NULL UNIQUE
);
